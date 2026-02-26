import { isPlatformBrowser, AsyncPipe } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
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
import { filter, Observable, take } from 'rxjs';

import { DeliveryBlock } from './delivery-block/delivery-block';
import { PaymentBlock } from './payment-block/payment-block';
import { Breadcrumb } from '../../../shared/components/widgets/breadcrumb/breadcrumb';
import { Button } from '../../../shared/components/widgets/button/button';
import { Loader } from '../../../shared/components/widgets/loader/loader';
import { AddressModal } from '../../../shared/components/widgets/modal/address-modal/address-modal';
import { NoData } from '../../../shared/components/widgets/no-data/no-data';
import { countryCodes } from '../../../shared/data/country-code';
import { IAccountUser } from '../../../shared/interface/account.interface';
import { IBreadcrumb } from '../../../shared/interface/breadcrumb.interface';
import { ICart } from '../../../shared/interface/cart.interface';
import { IApplyCouponResponse } from '../../../shared/interface/coupon.interface';
import { IDeliveryBlock, IValues } from '../../../shared/interface/setting.interface';
import { ISavedAddress } from '../../../shared/interface/user.interface';
import { CurrencySymbolPipe } from '../../../shared/pipe/currency.pipe';
import { CartService } from '../../../shared/services/cart.service';
import { ClearCartAction } from '../../../shared/store/action/cart.action';
import { ApplyCouponAction, GetCouponsAction, RemoveCouponAction } from '../../../shared/store/action/coupon.action';
import { CheckoutAction, PlaceOrderAction } from '../../../shared/store/action/order.action';
import { GetSettingOptionAction } from '../../../shared/store/action/setting.action';
import { CreateAddressAction, GetAddressesAction } from '../../../shared/store/action/account.action';
import { AccountState } from '../../../shared/store/state/account.state';
import { AuthState } from '../../../shared/store/state/auth.state';
import { CartState } from '../../../shared/store/state/cart.state';
import { CouponState } from '../../../shared/store/state/coupon.state';
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
  setting$: Observable<IValues> = inject(Store).select(SettingState.setting) as Observable<IValues>;
  cartDigital$: Observable<boolean | number> = inject(Store).select(
    CartState.cartHasDigital,
  ) as Observable<boolean | number>;
  appliedCoupon$: Observable<IApplyCouponResponse | null> = inject(Store).select(
    CouponState.appliedCoupon,
  ) as Observable<IApplyCouponResponse | null>;
  couponError$: Observable<string | null> = inject(Store).select(
    CouponState.couponError,
  ) as Observable<string | null>;
  addresses$: Observable<ISavedAddress[]> = inject(Store).select(
    AccountState.addresses,
  ) as Observable<ISavedAddress[]>;

  public form: FormGroup;
  public couponInput: string = '';
  public applyingCoupon: boolean = false;
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
    this.store.dispatch(new GetCouponsAction());

    this.form = this.formBuilder.group({
      products: this.formBuilder.array([], [Validators.required]),
      coupon: new FormControl(''),
      delivery_description: new FormControl('', [Validators.required]),
      delivery_interval: new FormControl(''),
      payment_method: new FormControl('cash_on_delivery', [Validators.required]),
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

    this.form.get('billing_address.same_shipping')?.valueChanges.subscribe(same => {
      if (same) {
        const s = this.form.get('shipping_address')?.value;
        this.form.get('billing_address')?.patchValue({
          title: s.title, street: s.street, country_name: s.country_name,
          state_name: s.state_name, city: s.city, pincode: s.pincode,
          country_code: s.country_code, phone: s.phone,
        });
      } else {
        this.form.get('billing_address')?.patchValue({
          title: '', street: '', country_name: '', state_name: '',
          city: '', pincode: '', country_code: '977', phone: '',
        });
      }
    });

    this.cartService.getUpdateQtyClickEvent().subscribe(() => this.products());
  }

  get productControl(): FormArray {
    return this.form.get('products') as FormArray;
  }

  ngOnInit() {
    this.store.dispatch(new CheckoutAction(this.form.value));
    this.products();

    if (this.store.selectSnapshot(state => state.auth?.access_token)) {
      this.store.dispatch(new GetAddressesAction());
      this.addresses$.pipe(filter(addrs => !!addrs?.length), take(1)).subscribe(addrs => {
        const defaultAddr = addrs.find(a => a.is_default) ?? addrs[0];
        if (!this.selectedShippingAddress) this.selectSavedShippingAddress(defaultAddr);
        if (!this.selectedBillingAddress) this.selectSavedBillingAddress(defaultAddr);
      });
    }
  }

  products() {
    this.cartItem$.subscribe(items => {
      this.productControl.clear();
      items.forEach((item: ICart) =>
        this.productControl.push(
          this.formBuilder.group({
            product_id: new FormControl(item?.product_id, [Validators.required]),
            variation_id: new FormControl(item?.variation_id ?? ''),
            quantity: new FormControl(item?.quantity),
          }),
        ),
      );
    });
  }

  // ── Totals computed from cart items ─────────────────────────────────────────
  getCartSubTotal(items: ICart[]): number {
    return items.reduce((sum, item) => {
      const price = item.variation?.sale_price
        ?? item.wholesale_price
        ?? item.product?.sale_price
        ?? 0;
      return sum + price * item.quantity;
    }, 0);
  }

  getOrderTotal(items: ICart[], applied: IApplyCouponResponse | null): number {
    return Math.max(0, this.getCartSubTotal(items) - (applied?.discount_amount ?? 0));
  }

  // ── Coupon ──────────────────────────────────────────────────────────────────
  applyCoupon() {
    const code = this.couponInput.trim().toUpperCase();
    if (!code) return;
    const items = this.store.selectSnapshot(CartState.cartItems);
    const subtotal = this.getCartSubTotal(items);
    this.applyingCoupon = true;
    this.store.dispatch(new ApplyCouponAction(code, subtotal)).subscribe({
      complete: () => {
        this.applyingCoupon = false;
        this.form.controls['coupon'].setValue(code);
      },
      error: () => {
        this.applyingCoupon = false;
      },
    });
  }

  removeCoupon() {
    this.store.dispatch(new RemoveCouponAction());
    this.couponInput = '';
    this.form.controls['coupon'].setValue('');
  }

  // ── Address selection ───────────────────────────────────────────────────────
  selectSavedShippingAddress(addr: ISavedAddress) {
    this.selectedShippingAddress = addr;
    this.showNewShippingForm = false;
    this.form.get('shipping_address')?.patchValue({
      title: addr.title, street: addr.street, city: addr.city,
      pincode: addr.pincode, phone: addr.phone, country_code: addr.country_code,
      country_name: addr.country_name ?? '', state_name: addr.state_name ?? '',
    });
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
      same_shipping: false, title: addr.title, street: addr.street, city: addr.city,
      pincode: addr.pincode, phone: addr.phone, country_code: addr.country_code,
      country_name: addr.country_name ?? '', state_name: addr.state_name ?? '',
    });
  }

  useNewBillingAddress() {
    this.selectedBillingAddress = null;
    this.showNewBillingForm = true;
    this.form.get('billing_address')?.reset();
    this.form.get('billing_address.country_code')?.setValue('977');
  }

  openAddressModal(type: 'shipping' | 'billing') {
    const ref = this.modal.open(AddressModal, { centered: true, windowClass: 'theme-modal-2' });
    ref.closed.subscribe(result => {
      if (result === 'saved') {
        this.addresses$.pipe(filter(addrs => !!addrs?.length), take(1)).subscribe(addrs => {
          const newest = addrs[addrs.length - 1];
          type === 'shipping'
            ? this.selectSavedShippingAddress(newest)
            : this.selectSavedBillingAddress(newest);
        });
      }
    });
  }

  // ── Delivery / Payment ──────────────────────────────────────────────────────
  selectDelivery(value: IDeliveryBlock) {
    this.form.controls['delivery_description'].setValue(value?.delivery_description);
    this.form.controls['delivery_interval'].setValue(value?.delivery_interval);
  }

  selectPaymentMethod(value: string) {
    this.form.controls['payment_method'].setValue(value);
  }

  // ── Place Order ─────────────────────────────────────────────────────────────
  placeorder() {
    if (this.form.valid) {
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

  ngOnDestroy() {
    if (this.isBrowser) {
      this.store.dispatch(new ClearCartAction());
      this.store.dispatch(new RemoveCouponAction());
      this.form.reset();
    }
  }
}
