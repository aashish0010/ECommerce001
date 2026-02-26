import { isPlatformBrowser, AsyncPipe, SlicePipe } from '@angular/common';
import { Component, ElementRef, inject, PLATFORM_ID, viewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Select2Module } from 'ng-select2-component';
import { Observable } from 'rxjs';

import { DeliveryBlock } from './delivery-block/delivery-block';
import { PaymentBlock } from './payment-block/payment-block';
import { Breadcrumb } from '../../../shared/components/widgets/breadcrumb/breadcrumb';
import { Button } from '../../../shared/components/widgets/button/button';
import { Loader } from '../../../shared/components/widgets/loader/loader';
import { CouponModal } from '../../../shared/components/widgets/modal/coupon-modal/coupon-modal';
import { NoData } from '../../../shared/components/widgets/no-data/no-data';
import { countryCodes } from '../../../shared/data/country-code';
import { IAccountUser } from '../../../shared/interface/account.interface';
import { IBreadcrumb } from '../../../shared/interface/breadcrumb.interface';
import { ICart } from '../../../shared/interface/cart.interface';
import { ICouponModel } from '../../../shared/interface/coupon.interface';
import { IOrderCheckout } from '../../../shared/interface/order.interface';
import { IDeliveryBlock, IValues } from '../../../shared/interface/setting.interface';
import { ISavedAddress } from '../../../shared/interface/user.interface';
import { CurrencySymbolPipe } from '../../../shared/pipe/currency.pipe';
import { CartService } from '../../../shared/services/cart.service';
import { ClearCartAction } from '../../../shared/store/action/cart.action';
import { GetCouponsAction } from '../../../shared/store/action/coupon.action';
import { CheckoutAction, PlaceOrderAction } from '../../../shared/store/action/order.action';
import { GetSettingOptionAction } from '../../../shared/store/action/setting.action';
import { CreateAddressAction, GetAddressesAction } from '../../../shared/store/action/account.action';
import { AccountState } from '../../../shared/store/state/account.state';
import { AuthState } from '../../../shared/store/state/auth.state';
import { CartState } from '../../../shared/store/state/cart.state';
import { CouponState } from '../../../shared/store/state/coupon.state';
import { OrderState } from '../../../shared/store/state/order.state';
import { SettingState } from '../../../shared/store/state/setting.state';

@Component({
  selector: 'app-checkout',
  imports: [
    TranslateModule,
    CurrencySymbolPipe,
    FormsModule,
    ReactiveFormsModule,
    Breadcrumb,
    DeliveryBlock,
    PaymentBlock,
    NoData,
    Loader,
    Select2Module,
    Button,
    AsyncPipe,
    SlicePipe,
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  private store = inject(Store);
  private formBuilder = inject(FormBuilder);
  cartService = inject(CartService);
  private modal = inject(NgbModal);

  public breadcrumb: IBreadcrumb = {
    title: 'Check-out',
    items: [{ label: 'Check-out', active: true }],
  };

  user$: Observable<IAccountUser> = inject(Store).select(
    AccountState.user,
  ) as Observable<IAccountUser>;
  accessToken$: Observable<String> = inject(Store).select(
    AuthState.accessToken,
  ) as Observable<String>;
  cartItem$: Observable<ICart[]> = inject(Store).select(CartState.cartItems);
  checkout$: Observable<IOrderCheckout> = inject(Store).select(
    OrderState.checkout,
  ) as Observable<IOrderCheckout>;
  setting$: Observable<IValues> = inject(Store).select(SettingState.setting) as Observable<IValues>;
  cartDigital$: Observable<boolean | number> = inject(Store).select(
    CartState.cartHasDigital,
  ) as Observable<boolean | number>;
  coupon$: Observable<ICouponModel> = inject(Store).select(CouponState.coupon);
  addresses$: Observable<ISavedAddress[]> = inject(Store).select(
    AccountState.addresses,
  ) as Observable<ISavedAddress[]>;

  readonly cpnRef = viewChild<ElementRef<HTMLInputElement>>('cpn');

  public form: FormGroup;
  public coupon: boolean = true;
  public couponCode: string;
  public appliedCoupon: boolean = false;
  public couponError: string | null;
  public checkoutTotal: IOrderCheckout;
  public loading: boolean = false;

  public codes = countryCodes;
  public isBrowser: boolean;

  public selectedShippingAddress: ISavedAddress | null = null;
  public selectedBillingAddress: ISavedAddress | null = null;
  public showNewShippingForm: boolean = false;
  public showNewBillingForm: boolean = false;
  public saveShippingAddress: boolean = false;
  public saveBillingAddress: boolean = false;

  constructor() {
    const platformId = inject(PLATFORM_ID);

    this.isBrowser = isPlatformBrowser(platformId);
    this.store.dispatch(new GetSettingOptionAction());
    this.store.dispatch(new GetCouponsAction({ status: 1 }));

    this.form = this.formBuilder.group({
      products: this.formBuilder.array([], [Validators.required]),
      shipping_address_id: new FormControl('', [Validators.required]),
      billing_address_id: new FormControl('', [Validators.required]),
      points_amount: new FormControl(false),
      wallet_balance: new FormControl(false),
      coupon: new FormControl(),
      delivery_description: new FormControl('', [Validators.required]),
      delivery_interval: new FormControl(),
      payment_method: new FormControl('', [Validators.required]),
      create_account: new FormControl(false),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country_code: new FormControl('91', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl(),
      shipping_address: new FormGroup({
        title: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required]),
        country_code: new FormControl('977', [Validators.required]),
        state_name: new FormControl(''),
        country_name: new FormControl(''),
      }),
      billing_address: new FormGroup({
        same_shipping: new FormControl(false),
        title: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required]),
        country_code: new FormControl('977', [Validators.required]),
        state_name: new FormControl(''),
        country_name: new FormControl(''),
      }),
    });

    this.store.selectSnapshot(state => state.setting).setting.activation.guest_checkout = true;

    if (this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      // Logged-in: use inline address forms, remove address-ID and guest fields
      this.form.removeControl('shipping_address_id');
      this.form.removeControl('billing_address_id');
      this.form.removeControl('points_amount');
      this.form.removeControl('wallet_balance');
      this.form.removeControl('create_account');
      this.form.removeControl('name');
      this.form.removeControl('email');
      this.form.removeControl('country_code');
      this.form.removeControl('phone');
      this.form.removeControl('password');

      this.cartDigital$.subscribe(value => {
        if (value == 1) {
          this.form.controls['delivery_description'].clearValidators();
        } else {
          this.form.controls['delivery_description'].setValidators([Validators.required]);
        }
        this.form.controls['delivery_description'].updateValueAndValidity();
      });
    } else {
      if (this.store.selectSnapshot(state => state.setting).setting.activation.guest_checkout) {
        this.form.removeControl('shipping_address_id');
        this.form.removeControl('billing_address_id');
        this.form.removeControl('points_amount');
        this.form.removeControl('wallet_balance');

        this.form.controls['create_account'].valueChanges.subscribe(value => {
          if (value) {
            this.form.controls['name'].setValidators([Validators.required]);
            this.form.controls['password'].setValidators([Validators.required]);
          } else {
            this.form.controls['name'].clearValidators();
            this.form.controls['password'].clearValidators();
          }
          this.form.controls['name'].updateValueAndValidity();
          this.form.controls['password'].updateValueAndValidity();
        });

        this.form.statusChanges.subscribe(value => {
          if (value == 'VALID') {
            this.checkout();
          }
        });
      }
    }

    this.form.get('billing_address.same_shipping')?.valueChanges.subscribe(value => {
      if (value) {
        this.form
          .get('billing_address.title')
          ?.setValue(this.form.get('shipping_address.title')?.value);
        this.form
          .get('billing_address.street')
          ?.setValue(this.form.get('shipping_address.street')?.value);
        this.form
          .get('billing_address.country_name')
          ?.setValue(this.form.get('shipping_address.country_name')?.value);
        this.form
          .get('billing_address.state_name')
          ?.setValue(this.form.get('shipping_address.state_name')?.value);
        this.form
          .get('billing_address.city')
          ?.setValue(this.form.get('shipping_address.city')?.value);
        this.form
          .get('billing_address.pincode')
          ?.setValue(this.form.get('shipping_address.pincode')?.value);
        this.form
          .get('billing_address.country_code')
          ?.setValue(this.form.get('shipping_address.country_code')?.value);
        this.form
          .get('billing_address.phone')
          ?.setValue(this.form.get('shipping_address.phone')?.value);
      } else {
        this.form.get('billing_address.title')?.setValue('');
        this.form.get('billing_address.street')?.setValue('');
        this.form.get('billing_address.country_name')?.setValue('');
        this.form.get('billing_address.state_name')?.setValue('');
        this.form.get('billing_address.city')?.setValue('');
        this.form.get('billing_address.pincode')?.setValue('');
        this.form.get('billing_address.country_code')?.setValue('');
        this.form.get('billing_address.phone')?.setValue('');
      }
    });

    this.cartService.getUpdateQtyClickEvent().subscribe(() => {
      this.products();
      this.checkout();
    });
  }

  get productControl(): FormArray {
    return this.form.get('products') as FormArray;
  }

  ngOnInit() {
    this.checkout$.subscribe(data => (this.checkoutTotal = data));
    this.products();

    if (this.store.selectSnapshot(state => state.auth?.access_token)) {
      this.store.dispatch(new GetAddressesAction());
    }
  }

  products() {
    this.cartItem$.subscribe(items => {
      this.productControl.clear();
      items.forEach((item: ICart) =>
        this.productControl.push(
          this.formBuilder.group({
            product_id: new FormControl(item?.product_id, [Validators.required]),
            variation_id: new FormControl(item?.variation_id ? item?.variation_id : ''),
            quantity: new FormControl(item?.quantity),
          }),
        ),
      );
    });
  }

  selectSavedShippingAddress(addr: ISavedAddress) {
    this.selectedShippingAddress = addr;
    this.showNewShippingForm = false;
    this.form.get('shipping_address')?.patchValue({
      title: addr.title,
      street: addr.street,
      city: addr.city,
      pincode: addr.pincode,
      phone: addr.phone,
      country_code: addr.country_code,
      country_name: addr.country_name ?? '',
      state_name: addr.state_name ?? '',
    });
    this.checkout();
  }

  useNewShippingAddress() {
    this.selectedShippingAddress = null;
    this.showNewShippingForm = true;
    this.form.get('shipping_address')?.reset();
    this.form.get('shipping_address.country_code')?.setValue('977');
  }

  selectSavedBillingAddress(addr: ISavedAddress) {
    this.selectedBillingAddress = addr;
    this.showNewBillingForm = false;
    this.form.get('billing_address')?.patchValue({
      same_shipping: false,
      title: addr.title,
      street: addr.street,
      city: addr.city,
      pincode: addr.pincode,
      phone: addr.phone,
      country_code: addr.country_code,
      country_name: addr.country_name ?? '',
      state_name: addr.state_name ?? '',
    });
    this.checkout();
  }

  useNewBillingAddress() {
    this.selectedBillingAddress = null;
    this.showNewBillingForm = true;
    this.form.get('billing_address')?.reset();
    this.form.get('billing_address.country_code')?.setValue('977');
  }

  selectDelivery(value: IDeliveryBlock) {
    this.form.controls['delivery_description'].setValue(value?.delivery_description);
    this.form.controls['delivery_interval'].setValue(value?.delivery_interval);
    this.checkout();
  }

  selectPaymentMethod(value: string) {
    this.form.controls['payment_method'].setValue(value);
    this.checkout();
  }

  togglePoint(event: Event) {
    this.form.controls['points_amount'].setValue((<HTMLInputElement>event.target)?.checked);
    this.checkout();
  }

  toggleWallet(event: Event) {
    this.form.controls['wallet_balance'].setValue((<HTMLInputElement>event.target)?.checked);
    this.checkout();
  }

  showCoupon() {
    this.coupon = true;
  }

  setCoupon(value?: string) {
    this.couponError = null;

    if (value) this.form.controls['coupon'].setValue(value);
    else this.form.controls['coupon'].reset();

    this.store.dispatch(new CheckoutAction(this.form.value)).subscribe({
      error: err => {
        this.couponError = err.message;
      },
      complete: () => {
        this.appliedCoupon = value ? true : false;
        this.couponError = null;
      },
    });
  }

  couponRemove() {
    this.setCoupon();
  }

  checkout() {
    // If has coupon error while checkout
    if (this.couponError) {
      this.couponError = null;
      this.cpnRef()!.nativeElement.value = '';
      this.form.controls['coupon'].reset();
    }

    if (this.form.valid) {
      this.loading = true;
      this.store.dispatch(new CheckoutAction(this.form.value)).subscribe({
        error: err => {
          this.loading = false;
          throw new Error(err);
        },
        complete: () => {
          this.loading = false;
        },
      });
    } else {
      Object?.keys(this.form?.controls).filter(key => this.form.controls[key].invalid);
    }
  }

  placeorder() {
    if (this.form.valid) {
      const cpnRef = this.cpnRef();
      if (cpnRef && !cpnRef.nativeElement.value) {
        this.form.controls['coupon'].reset();
      }

      const formValue = { ...this.form.value };

      if (this.saveShippingAddress && this.showNewShippingForm) {
        this.store.dispatch(new CreateAddressAction(formValue.shipping_address));
      }
      if (this.saveBillingAddress && this.showNewBillingForm) {
        this.store.dispatch(new CreateAddressAction(formValue.billing_address));
      }

      this.store.dispatch(new PlaceOrderAction(formValue));
    }
  }

  clearCart() {
    this.store.dispatch(new ClearCartAction());
  }

  couponModal() {
    this.modal.open(CouponModal, {
      centered: true,
      windowClass: 'theme-modal-2 coupon-modal',
      size: 'lg',
    });
  }

  copyFunction(txt: string) {
    void navigator.clipboard.writeText(txt);
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.store.dispatch(new ClearCartAction());
      this.form.reset();
    }
  }
}
