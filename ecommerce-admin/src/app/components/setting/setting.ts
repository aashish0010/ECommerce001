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

import {
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Select2Data, Select2Module } from 'ng-select2-component';
import { forkJoin, Observable } from 'rxjs';

import { PageWrapper } from '../../shared/components/page-wrapper/page-wrapper';
import { Button } from '../../shared/components/ui/button/button';
import { FormFields } from '../../shared/components/ui/form-fields/form-fields';
import { ImageUpload } from '../../shared/components/ui/image-upload/image-upload';
import * as media from '../../shared/data/media-config';
import * as data from '../../shared/data/time-zone';
import { HasPermissionDirective } from '../../shared/directive/has-permission.directive';
import { IAttachment } from '../../shared/interface/attachment.interface';
import { IDayInterval, IValues } from '../../shared/interface/setting.interface';
import { NotificationService } from '../../shared/services/notification.service';
import { ICompanyAdmin, ISocialLink } from '../../shared/interface/company.interface';
import { IEmailConfig } from '../../shared/interface/email-config.interface';
import { IMediaConfig } from '../../shared/interface/media-config.interface';
import { IHomeConfig } from '../../shared/interface/home-config.interface';
import { GetCurrenciesAction } from '../../shared/store/action/currency.action';
import {
  GetCompanyAction,
  UpdateCompanyAction,
  UpdateSocialLinksAction,
} from '../../shared/store/action/company.action';
import { GetEmailConfigAction, UpdateEmailConfigAction } from '../../shared/store/action/email-config.action';
import { GetMediaConfigAction, UpdateMediaConfigAction } from '../../shared/store/action/media-config.action';
import { GetHomeConfigAction, UpdateHomeConfigAction } from '../../shared/store/action/home-config.action';
import { GetSettingOptionAction } from '../../shared/store/action/setting.action';
import { CompanyState } from '../../shared/store/state/company.state';
import { EmailConfigState } from '../../shared/store/state/email-config.state';
import { MediaConfigState } from '../../shared/store/state/media-config.state';
import { HomeConfigState } from '../../shared/store/state/home-config.state';
import { CurrencyState } from '../../shared/store/state/currency.state';
import { SettingState } from '../../shared/store/state/setting.state';
import { ImageUploadService } from '../../shared/services/image-upload.service';

function convertToNgbDate(date: NgbDateStruct): NgbDate {
  return new NgbDate(date?.year, date?.month, date?.day);
}

@Component({
  selector: 'app-setting',
  imports: [
    PageWrapper,
    ImageUpload,
    FormsModule,
    ReactiveFormsModule,
    FormFields,
    TranslateModule,
    NgbModule,
    Select2Module,
    Button,
    HasPermissionDirective,
    AsyncPipe
],
  templateUrl: './setting.html',
  styleUrl: './setting.scss',
})
export class Setting {
  private store = inject(Store);
  private formBuilder = inject(FormBuilder);
  private calendar = inject(NgbCalendar);
  private notificationService = inject(NotificationService);
  formatter = inject(NgbDateParserFormatter);

  private imageUploadService = inject(ImageUploadService);

  currency$: Observable<Select2Data> = inject(Store).select(CurrencyState.currencies);
  setting$: Observable<IValues> = inject(Store).select(SettingState.setting) as Observable<IValues>;
  company$: Observable<ICompanyAdmin | null> = inject(Store).select(CompanyState.company);
  emailConfig$: Observable<IEmailConfig | null> = inject(Store).select(EmailConfigState.config);
  mediaConfig$: Observable<IMediaConfig | null> = inject(Store).select(MediaConfigState.config);
  homeConfig$: Observable<IHomeConfig | null> = inject(Store).select(HomeConfigState.config);

  public socialLinks: ISocialLink[] = [];

  public form: FormGroup;
  public active = 'general';
  public active_payment = 1;
  public time_zone = data.time_zone;
  public active_analytics = 'facebook';
  public mediaConfig = media.mediaConfig;

  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public isBrowser: boolean;

  public mail_mailer: Select2Data = [
    {
      value: 'sendmail',
      label: 'Sendmail',
    },
    {
      value: 'smtp',
      label: 'SMTP',
    },
    {
      value: 'mailgun',
      label: 'Mailgun',
    },
  ];

  public encryption: Select2Data = [
    {
      value: 'ssl',
      label: 'SSL',
    },
    {
      value: 'tls',
      label: 'TLS',
    },
  ];

  public language_direction: Select2Data = [
    {
      value: 'ltr',
      label: 'LTR',
    },
    {
      value: 'rtl',
      label: 'RTL',
    },
  ];

  public mode: Select2Data = [
    {
      value: 'light-only',
      label: 'Light',
    },
    {
      value: 'dark-only',
      label: 'Dark',
    },
  ];

  public mediaDisk: Select2Data = [
    {
      value: 'public',
      label: 'Local',
    },
    {
      value: 's3',
      label: 'AWS(s3)',
    },
  ];

  constructor() {
    const formBuilder = this.formBuilder;
    const platformId = inject(PLATFORM_ID);

    this.isBrowser = isPlatformBrowser(platformId);

    this.form = formBuilder.group({
      general: new FormGroup({
        light_logo_image_id: new FormControl(),
        dark_logo_image_id: new FormControl(),
        tiny_logo_image_id: new FormControl(),
        favicon_image_id: new FormControl(),
        site_url: new FormControl(''),
        site_title: new FormControl('', Validators.required),
        site_name: new FormControl(''),
        site_tagline: new FormControl(),
        default_timezone: new FormControl('Asia/Kolkata', Validators.required),
        default_currency_id: new FormControl('', Validators.required),
        admin_site_language_direction: new FormControl('ltr'),
        min_order_amount: new FormControl(0, Validators.required),
        min_order_free_shipping: new FormControl(0, Validators.required),
        product_sku_prefix: new FormControl(),
        mode: new FormControl('light-only', Validators.required),
        copyright: new FormControl('Copyright Text Here'),
        // Company branding — sourced from real API
        header_logo_url: new FormControl(''),
        footer_logo_url: new FormControl(''),
        favicon_url: new FormControl(''),
        company_phone: new FormControl(''),
        company_email: new FormControl(''),
        company_address: new FormControl(''),
        company_description: new FormControl(''),
        default_currency: new FormControl(''),
      }),
      activation: new FormGroup({
        multivendor: new FormControl(true),
        point_enable: new FormControl(true),
        coupon_enable: new FormControl(true),
        wallet_enable: new FormControl(true),
        stock_product_hide: new FormControl(true),
        store_auto_approve: new FormControl(true),
        product_auto_approve: new FormControl(true),
        guest_checkout: new FormControl(true),
        track_order: new FormControl(true),
        login_number: new FormControl(true),
        send_sms: new FormControl(true),
      }),
      email_config: new FormGroup({
        from_email: new FormControl('', [Validators.required, Validators.email]),
        from_name: new FormControl(''),
        api_key: new FormControl(''),
      }),
      sms_methods: new FormGroup({
        default_sms_method: new FormControl('twillo'),
        twilio: new FormGroup({
          title: new FormControl(),
          status: new FormControl(false),
          twilio_sid: new FormControl(),
          twilio_auth_token: new FormControl(),
          twilio_number: new FormControl(),
        }),
        config: new FormGroup({
          cancel_order_sms: new FormControl(true),
          refund_request_sms: new FormControl(true),
          withdraw_request_sms: new FormControl(true),
          pending_order_sms: new FormControl(true),
          place_order_sms: new FormControl(true),
          signup_bonus_sms: new FormControl(true),
          update_order_status_sms: new FormControl(true),
          update_refund_request_sms: new FormControl(true),
          update_withdraw_request_sms: new FormControl(true),
          vendor_register_sms: new FormControl(true),
        }),
      }),
      media_config: new FormGroup({
        cloud_name: new FormControl(''),
        api_key: new FormControl(''),
        api_secret: new FormControl(''),
      }),
      vendor_commissions: new FormGroup({
        status: new FormControl(true),
        min_withdraw_amount: new FormControl(),
        default_commission_rate: new FormControl(),
        is_category_based_commission: new FormControl(true),
      }),
      refund: new FormGroup({
        status: new FormControl(true),
        refundable_days: new FormControl(),
      }),
      google_reCaptcha: new FormGroup({
        status: new FormControl(true),
        secret: new FormControl(),
        site_key: new FormControl(),
      }),
      delivery: new FormGroup({
        default_delivery: new FormControl(true),
        default: new FormGroup({
          title: new FormControl(),
          description: new FormControl(),
        }),
        same_day_delivery: new FormControl(true),
        same_day: new FormGroup({
          title: new FormControl(),
          description: new FormControl(),
        }),
        same_day_intervals: new FormArray([]),
      }),
      home_config: new FormGroup({
        slider1_image_url: new FormControl(''),
        slider1_link: new FormControl(''),
        slider1_link_type: new FormControl('external_url'),
        slider2_image_url: new FormControl(''),
        slider2_link: new FormControl(''),
        slider2_link_type: new FormControl('external_url'),
        offer1_image_url: new FormControl(''),
        offer1_link: new FormControl(''),
        offer1_link_type: new FormControl('collection'),
        offer2_image_url: new FormControl(''),
        offer2_link: new FormControl(''),
        offer2_link_type: new FormControl('collection'),
      }),
      maintenance: new FormGroup({
        title: new FormControl(),
        maintenance_mode: new FormControl(false),
        maintenance_image_id: new FormControl(),
        description: new FormControl(),
        start_date: new FormControl(),
        end_date: new FormControl(),
      }),
    });
  }

  get sameDayIntervals(): FormArray {
    return (this.form.controls['delivery'] as FormArray).controls[
      'same_day_intervals'
    ] as FormArray;
  }

  ngOnInit() {
    const backendSettingOption$ = this.store.dispatch(new GetSettingOptionAction());
    const getCurrencies$ = this.store.dispatch(new GetCurrenciesAction({ status: 1 }));
    const getCompany$ = this.store.dispatch(new GetCompanyAction());
    const getEmailConfig$ = this.store.dispatch(new GetEmailConfigAction());
    const getMediaConfig$ = this.store.dispatch(new GetMediaConfigAction());
    const getHomeConfig$ = this.store.dispatch(new GetHomeConfigAction());

    forkJoin([backendSettingOption$, getCurrencies$, getCompany$, getEmailConfig$, getMediaConfig$, getHomeConfig$]).subscribe({
      complete: () => {
        this.patchForm();
        this.patchCompanyForm();
        this.patchEmailConfigForm();
        this.patchMediaConfigForm();
        this.patchHomeConfigForm();
      },
    });
  }

  patchForm() {
    this.store.select(SettingState.setting).subscribe(option => {
      this.fromDate = option?.maintenance?.start_date
        ? convertToNgbDate(this.formatter.parse(option?.maintenance?.start_date)!)
        : null;
      this.toDate = option?.maintenance?.end_date
        ? convertToNgbDate(this.formatter.parse(option?.maintenance?.end_date)!)
        : null;
      this.form.patchValue({
        general: {
          light_logo_image_id: option?.general?.light_logo_image_id,
          dark_logo_image_id: option?.general?.dark_logo_image_id,
          favicon_image_id: option?.general?.favicon_image_id,
          tiny_logo_image_id: option?.general?.tiny_logo_image_id,
          site_name: option?.general?.site_name,
          site_url: option?.general?.site_url,
          site_title: option?.general?.site_title,
          site_tagline: option?.general?.site_tagline,
          default_timezone: option?.general?.default_timezone,
          default_currency_id: +option?.general?.default_currency_id!,
          admin_site_language_direction: option?.general?.admin_site_language_direction,
          min_order_amount: option?.general?.min_order_amount,
          min_order_free_shipping: option?.general?.min_order_free_shipping,
          product_sku_prefix: option?.general?.product_sku_prefix,
          mode: option?.general?.mode,
          copyright: option?.general?.copyright,
        },
        activation: {
          multivendor: option?.activation?.multivendor,
          point_enable: option?.activation?.point_enable,
          coupon_enable: option?.activation?.coupon_enable,
          wallet_enable: option?.activation?.wallet_enable,
          stock_product_hide: option?.activation?.stock_product_hide,
          store_auto_approve: option?.activation?.store_auto_approve,
          product_auto_approve: option?.activation?.product_auto_approve,
          guest_checkout: option?.activation?.guest_checkout,
          track_order: option?.activation?.track_order,
          login_number: option?.activation?.login_number,
          send_sms: option?.activation?.send_sms,
        },
        sms_methods: {
          default_sms_method: option?.sms_methods?.default_sms_method,
          twilio: {
            title: option?.sms_methods?.twilio?.title,
            status: option?.sms_methods?.twilio?.status,
            twilio_sid: option?.sms_methods?.twilio?.twilio_sid,
            twilio_auth_token: option?.sms_methods?.twilio?.twilio_auth_token,
            twilio_number: option?.sms_methods?.twilio?.twilio_number,
          },
          config: {
            cancel_order_sms: option?.sms_methods?.config?.cancel_order_sms,
            refund_request_sms: option?.sms_methods?.config?.refund_request_sms,
            withdraw_request_sms: option?.sms_methods?.config?.withdraw_request_sms,
            pending_order_sms: option?.sms_methods?.config?.pending_order_sms,
            place_order_sms: option?.sms_methods?.config?.place_order_sms,
            signup_bonus_sms: option?.sms_methods?.config?.signup_bonus_sms,
            update_order_status_sms: option?.sms_methods?.config?.update_order_status_sms,
            update_refund_request_sms: option?.sms_methods?.config?.update_refund_request_sms,
            update_withdraw_request_sms: option?.sms_methods?.config?.update_withdraw_request_sms,
            vendor_register_sms: option?.sms_methods?.config?.vendor_register_sms,
          },
        },
        vendor_commissions: {
          status: option?.vendor_commissions?.status,
          min_withdraw_amount: option?.vendor_commissions?.min_withdraw_amount,
          default_commission_rate: option?.vendor_commissions?.default_commission_rate,
          is_category_based_commission: option?.vendor_commissions?.is_category_based_commission,
        },
        refund: {
          status: option?.refund?.status,
          refundable_days: option?.refund?.refundable_days,
        },
        google_reCaptcha: {
          status: option?.google_reCaptcha?.status,
          secret: option?.google_reCaptcha?.secret,
          site_key: option?.google_reCaptcha?.site_key,
        },
        delivery: {
          default_delivery: 1,
          default: {
            title: option?.delivery?.default?.title,
            description: option?.delivery?.default?.description,
          },
          same_day_delivery: option?.delivery?.same_day_delivery,
          same_day: {
            title: option?.delivery?.same_day?.title,
            description: option?.delivery?.same_day?.description,
          },
        },
        maintenance: {
          title: option?.maintenance?.title,
          maintenance_mode: option?.maintenance?.maintenance_mode,
          maintenance_image_id: option?.maintenance?.maintenance_image_id,
          description: option?.maintenance?.description,
          end_date: option?.maintenance?.end_date,
        },
      });
      this.sameDayIntervals.clear();
      option?.delivery?.same_day_intervals?.forEach((delivery: IDayInterval) =>
        this.sameDayIntervals.push(
          this.formBuilder.group({
            title: new FormControl(delivery?.title),
            description: new FormControl(delivery?.description),
          }),
        ),
      );
    });
  }

  selectLightLogo(data: IAttachment) {
    if (!Array.isArray(data)) {
      (<FormGroup>this.form.controls['general']).controls['light_logo_image_id'].setValue(
        data ? data?.id : null,
      );
    }
  }

  selectDarkLogo(data: IAttachment) {
    if (!Array.isArray(data)) {
      (<FormGroup>this.form.controls['general']).controls['dark_logo_image_id'].setValue(
        data ? data?.id : null,
      );
    }
  }

  selectTinyLogo(data: IAttachment) {
    if (!Array.isArray(data)) {
      (<FormGroup>this.form.controls['general']).controls['tiny_logo_image_id'].setValue(
        data ? data?.id : null,
      );
    }
  }

  selectFavicon(data: IAttachment) {
    if (!Array.isArray(data)) {
      (<FormGroup>this.form.controls['general']).controls['favicon_image_id'].setValue(
        data ? data?.id : null,
      );
    }
  }

  selectMaintenance(data: IAttachment) {
    if (!Array.isArray(data)) {
      (<FormGroup>this.form.controls['maintenance']).controls['maintenance_image_id'].setValue(
        data ? data?.id : null,
      );
    }
  }

  addDays(event: Event) {
    event.preventDefault();
    this.sameDayIntervals.push(
      this.formBuilder.group({
        title: new FormControl(),
        description: new FormControl(),
      }),
    );
  }

  remove(index: number) {
    if (this.sameDayIntervals.length <= 1) return;
    this.sameDayIntervals.removeAt(index);
  }

  // For Date Picker
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    (<FormGroup>this.form.controls['maintenance']).controls['start_date'].setValue(
      `${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`,
    );
    (<FormGroup>this.form.controls['maintenance']).controls['end_date'].setValue(
      `${this.toDate?.year}-${this.toDate?.month}-${this.toDate?.day}`,
    );
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }

  clearDateRange() {
    this.fromDate = null;
    this.toDate = null;
  }

  patchCompanyForm() {
    this.store.select(CompanyState.company).subscribe(company => {
      if (!company) return;
      this.form.get('general')?.patchValue({
        site_title: company.company_name,
        site_name: company.company_name,
        site_url: company.site_url ?? '',
        site_tagline: company.site_tagline ?? '',
        copyright: company.copyright_content ?? '',
        header_logo_url: company.header_logo_url ?? '',
        footer_logo_url: company.footer_logo_url ?? '',
        favicon_url: company.favicon_url ?? '',
        company_phone: company.company_phone_number ?? '',
        company_email: company.company_email ?? '',
        company_address: company.company_address ?? '',
        company_description: company.company_description ?? '',
        default_currency: company.default_currency ?? '',
      });
      this.socialLinks = company.social_links ? [...company.social_links] : [];
    });
  }

  submitCompany() {
    const gen = this.form.get('general')?.value;
    this.store.dispatch(
      new UpdateCompanyAction(1, {
        company_name: gen.site_name || gen.site_title,
        company_description: gen.company_description,
        company_phone_number: gen.company_phone,
        company_email: gen.company_email,
        company_address: gen.company_address,
        site_tagline: gen.site_tagline,
        site_url: gen.site_url,
        copyright_content: gen.copyright,
        header_logo_url: gen.header_logo_url || null,
        footer_logo_url: gen.footer_logo_url || null,
        favicon_url: gen.favicon_url || null,
        default_currency: gen.default_currency,
      }),
    );
  }

  saveSocialLinks() {
    this.store.dispatch(new UpdateSocialLinksAction(1, this.socialLinks));
  }

  addSocialLink() {
    this.socialLinks = [...this.socialLinks, { social_media_name: '', social_media_link: '' }];
  }

  removeSocialLink(index: number) {
    this.socialLinks = this.socialLinks.filter((_, i) => i !== index);
  }

  updateSocialLink(index: number, field: keyof ISocialLink, value: string) {
    const updated = [...this.socialLinks];
    updated[index] = { ...updated[index], [field]: value };
    this.socialLinks = updated;
  }

  patchEmailConfigForm() {
    this.store.select(EmailConfigState.config).subscribe(config => {
      if (!config) return;
      this.form.get('email_config')?.patchValue({
        from_email: config.from_email ?? '',
        from_name: config.from_name ?? '',
        api_key: config.api_key ?? '',
      });
    });
  }

  patchMediaConfigForm() {
    this.store.select(MediaConfigState.config).subscribe(config => {
      if (!config) return;
      this.form.get('media_config')?.patchValue({
        cloud_name: config.cloud_name ?? '',
        api_key: config.api_key ?? '',
        api_secret: config.api_secret ?? '',
      });
    });
  }

  patchHomeConfigForm() {
    this.store.select(HomeConfigState.config).subscribe(config => {
      if (!config) return;
      this.form.get('home_config')?.patchValue({
        slider1_image_url: config.slider1_image_url ?? '',
        slider1_link: config.slider1_link ?? '',
        slider1_link_type: config.slider1_link_type ?? 'external_url',
        slider2_image_url: config.slider2_image_url ?? '',
        slider2_link: config.slider2_link ?? '',
        slider2_link_type: config.slider2_link_type ?? 'external_url',
        offer1_image_url: config.offer1_image_url ?? '',
        offer1_link: config.offer1_link ?? '',
        offer1_link_type: config.offer1_link_type ?? 'collection',
        offer2_image_url: config.offer2_image_url ?? '',
        offer2_link: config.offer2_link ?? '',
        offer2_link_type: config.offer2_link_type ?? 'collection',
      });
    });
  }

  submitEmailConfig() {
    const config = this.store.selectSnapshot(EmailConfigState.config);
    const values = this.form.get('email_config')?.value;
    if (config?.id && values) {
      this.store.dispatch(new UpdateEmailConfigAction(config.id, values));
    }
  }

  submitMediaConfig() {
    const config = this.store.selectSnapshot(MediaConfigState.config);
    const values = this.form.get('media_config')?.value;
    if (config?.id && values) {
      this.store.dispatch(new UpdateMediaConfigAction(config.id, values));
    }
  }

  submitHomeConfig() {
    const config = this.store.selectSnapshot(HomeConfigState.config);
    const values = this.form.get('home_config')?.value;
    if (config?.id && values) {
      this.store.dispatch(new UpdateHomeConfigAction(config.id, values));
    }
  }

  uploadLogo(event: Event, field: 'header_logo_url' | 'footer_logo_url' | 'favicon_url') {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.imageUploadService.upload(file, 'company').subscribe({
      next: res => {
        this.form.get('general')?.get(field)?.setValue(res.url);
      },
      error: () => {
        this.notificationService.showError('Failed to upload image.');
      },
    });
  }

  uploadBannerImage(event: Event, field: string) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.imageUploadService.upload(file, 'home-banners').subscribe({
      next: res => {
        this.form.get('home_config')?.get(field)?.setValue(res.url);
      },
      error: () => {
        this.notificationService.showError('Failed to upload banner image.');
      },
    });
  }

  mailSubmit() {
    this.submitEmailConfig();
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.submitCompany();
    }
  }
}
