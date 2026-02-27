import {
  countryCodes
} from "./chunk-XW3B4B4C.js";
import {
  Select2,
  Select2Module
} from "./chunk-3YTNHNM3.js";
import {
  CreateAddressAction,
  UpdateAddressAction
} from "./chunk-ROK6B4C2.js";
import {
  Button
} from "./chunk-6I2UIIRS.js";
import {
  NgbActiveModal
} from "./chunk-MLCQBQYT.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-MXUZ2ZBZ.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PCGC3M7T.js";
import {
  Store
} from "./chunk-6YJBSKCB.js";
import {
  Component,
  Input,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/components/widgets/modal/address-modal/address-modal.ts
function AddressModal_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "title_is_required"));
  }
}
function AddressModal_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "street_address_is_required"));
  }
}
function AddressModal_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "city_is_required"));
  }
}
function AddressModal_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "pincode_is_required"));
  }
}
function AddressModal_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("iti-flag ", data_r2 == null ? null : data_r2.class));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2 == null ? null : data_r2.code);
  }
}
function AddressModal_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "phone_number_is_required"));
  }
}
function AddressModal_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "phone_number_is_invalid"));
  }
}
var AddressModal = class _AddressModal {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.store = inject(Store);
    this.formBuilder = inject(FormBuilder);
    this.codes = countryCodes;
    this.form = this.formBuilder.group({
      title: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      country_name: new FormControl(""),
      state_name: new FormControl(""),
      city: new FormControl("", [Validators.required]),
      pincode: new FormControl("", [Validators.required]),
      country_code: new FormControl("977", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]*$/)])
    });
  }
  ngOnInit() {
    if (this.userAddress) {
      this.patchForm(this.userAddress);
    }
  }
  patchForm(value) {
    this.address = value;
    this.form.patchValue({
      title: value.title,
      street: value.street,
      country_name: value.country_name ?? "",
      state_name: value.state_name ?? "",
      city: value.city,
      pincode: value.pincode,
      country_code: value.country_code ?? "977",
      phone: String(value.phone ?? "")
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (!this.form.valid)
      return;
    const action = this.address ? new UpdateAddressAction(this.form.value, this.address.id) : new CreateAddressAction(this.form.value);
    this.store.dispatch(action).subscribe({
      complete: () => this.modal.close("saved")
    });
  }
  static {
    this.\u0275fac = function AddressModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressModal, selectors: [["app-address-modal"]], inputs: { userAddress: "userAddress" }, decls: 72, vars: 71, consts: [["template", ""], [1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "g-sm-4", "g-2"], [1, "col-12"], [1, "form-box"], ["for", "addr-title", 1, "form-label"], ["id", "addr-title", "type", "text", "formControlName", "title", 1, "form-control", 3, "placeholder"], [1, "invalid-feedback"], ["for", "addr-street", 1, "form-label"], ["id", "addr-street", "type", "text", "formControlName", "street", 1, "form-control", 3, "placeholder"], [1, "col-sm-6"], ["for", "addr-country", 1, "form-label"], ["id", "addr-country", "type", "text", "placeholder", "e.g. Nepal", "formControlName", "country_name", 1, "form-control"], ["for", "addr-state", 1, "form-label"], ["id", "addr-state", "type", "text", "placeholder", "e.g. Bagmati", "formControlName", "state_name", 1, "form-control"], ["for", "addr-city", 1, "form-label"], ["id", "addr-city", "type", "text", "formControlName", "city", 1, "form-control", 3, "placeholder"], ["for", "addr-pincode", 1, "form-label"], ["id", "addr-pincode", "type", "text", "formControlName", "pincode", 1, "form-control", 3, "placeholder"], [1, "col-12", "phone-field"], [1, "form-box", "position-relative"], ["for", "addr-phone", 1, "form-label"], ["formControlName", "country_code", 1, "custom-select", "intl-tel-input", 3, "templates", "data"], ["type", "tel", "id", "addr-phone", "formControlName", "phone", "name", "addr-phone", 1, "form-control", "intl-input-padding", 3, "placeholder"], [1, "modal-footer"], [3, "click", "type", "spinner", "id"], [3, "id"], [1, "country"], [1, "flag-box"], [1, "dial-code"]], template: function AddressModal_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 3);
        \u0275\u0275listener("click", function AddressModal_Template_app_button_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.modal.close("Cross click"));
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 5);
        \u0275\u0275listener("ngSubmit", function AddressModal_Template_form_ngSubmit_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "label", 10);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 11);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275conditionalCreate(16, AddressModal_Conditional_16_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "label", 13);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 14);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275conditionalCreate(24, AddressModal_Conditional_24_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 15)(26, "div", 9)(27, "label", 16);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 15)(32, "div", 9)(33, "label", 18);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 15)(38, "div", 9)(39, "label", 20);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 21);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275conditionalCreate(44, AddressModal_Conditional_44_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 15)(46, "div", 9)(47, "label", 22);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "input", 23);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275conditionalCreate(52, AddressModal_Conditional_52_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 24)(54, "div", 25)(55, "label", 26);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "select2", 27);
        \u0275\u0275template(59, AddressModal_ng_template_59_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275element(61, "input", 28);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(63, AddressModal_Conditional_63_Template, 3, 3, "div", 12);
        \u0275\u0275conditionalCreate(64, AddressModal_Conditional_64_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 29)(66, "app-button", 30);
        \u0275\u0275listener("click", function AddressModal_Template_app_button_click_66_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.modal.close("Cancel"));
        });
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "app-button", 31);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const template_r3 = \u0275\u0275reference(60);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 41, !ctx.address ? "add_address" : "edit_address"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "address_modal_close_btn");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 43, "title"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(15, 45, "enter_title")));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["title"].touched && (ctx.form.controls["title"].errors == null ? null : ctx.form.controls["title"].errors["required"]) ? 16 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 47, "address"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(23, 49, "enter_address")));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["street"].touched && (ctx.form.controls["street"].errors == null ? null : ctx.form.controls["street"].errors["required"]) ? 24 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 51, "country"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 53, "state"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 55, "city"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(43, 57, "enter_city")));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["city"].touched && (ctx.form.controls["city"].errors == null ? null : ctx.form.controls["city"].errors["required"]) ? 44 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 59, "pincode"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(51, 61, "enter_pincode")));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["pincode"].touched && (ctx.form.controls["pincode"].errors == null ? null : ctx.form.controls["pincode"].errors["required"]) ? 52 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 63, "phone_number"));
        \u0275\u0275advance(2);
        \u0275\u0275property("templates", template_r3)("data", ctx.codes);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(62, 65, "enter_phone")));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]) ? 63 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["pattern"]) ? 64 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-outline btn-md fw-bold");
        \u0275\u0275property("type", "button")("spinner", false)("id", "cancel_address_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 67, "cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "submit_address_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 69, "submit"), " ");
      }
    }, dependencies: [TranslateModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, Select2Module, Select2, Button, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressModal, [{
    type: Component,
    args: [{ selector: "app-address-modal", imports: [TranslateModule, FormsModule, ReactiveFormsModule, Select2Module, Button], template: `<div class="modal-header">
  <h3 class="fw-semibold">{{ (!address ? 'add_address' : 'edit_address') | translate }}</h3>
  <app-button
    [class]="'btn btn-close'"
    [spinner]="false"
    [id]="'address_modal_close_btn'"
    (click)="modal.close('Cross click')"
  >
    <i class="ri-close-line"></i>
  </app-button>
</div>
<form [formGroup]="form" (ngSubmit)="submit()">
  <div class="modal-body">
    <div class="row g-sm-4 g-2">
      <div class="col-12">
        <div class="form-box">
          <label class="form-label" for="addr-title">{{ 'title' | translate }}</label>
          <input
            class="form-control"
            id="addr-title"
            type="text"
            placeholder="{{ 'enter_title' | translate }}"
            formControlName="title"
          />
          @if(form.controls['title'].touched && form.controls['title'].errors?.['required']){
          <div class="invalid-feedback">{{ 'title_is_required' | translate }}</div>
          }
        </div>
      </div>
      <div class="col-12">
        <div class="form-box">
          <label class="form-label" for="addr-street">{{ 'address' | translate }}</label>
          <input
            class="form-control"
            id="addr-street"
            type="text"
            placeholder="{{ 'enter_address' | translate }}"
            formControlName="street"
          />
          @if(form.controls['street'].touched && form.controls['street'].errors?.['required']){
          <div class="invalid-feedback">{{ 'street_address_is_required' | translate }}</div>
          }
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-box">
          <label class="form-label" for="addr-country">{{ 'country' | translate }}</label>
          <input
            class="form-control"
            id="addr-country"
            type="text"
            placeholder="e.g. Nepal"
            formControlName="country_name"
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-box">
          <label class="form-label" for="addr-state">{{ 'state' | translate }}</label>
          <input
            class="form-control"
            id="addr-state"
            type="text"
            placeholder="e.g. Bagmati"
            formControlName="state_name"
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-box">
          <label class="form-label" for="addr-city">{{ 'city' | translate }}</label>
          <input
            class="form-control"
            id="addr-city"
            type="text"
            placeholder="{{ 'enter_city' | translate }}"
            formControlName="city"
          />
          @if(form.controls['city'].touched && form.controls['city'].errors?.['required']){
          <div class="invalid-feedback">{{ 'city_is_required' | translate }}</div>
          }
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-box">
          <label class="form-label" for="addr-pincode">{{ 'pincode' | translate }}</label>
          <input
            class="form-control"
            id="addr-pincode"
            type="text"
            placeholder="{{ 'enter_pincode' | translate }}"
            formControlName="pincode"
          />
          @if(form.controls['pincode'].touched && form.controls['pincode'].errors?.['required']){
          <div class="invalid-feedback">{{ 'pincode_is_required' | translate }}</div>
          }
        </div>
      </div>
      <div class="col-12 phone-field">
        <div class="form-box position-relative">
          <label class="form-label" for="addr-phone">{{ 'phone_number' | translate }}</label>
          <select2
            class="custom-select intl-tel-input"
            [templates]="template"
            [data]="codes"
            formControlName="country_code"
          >
            <ng-template #template let-data="data">
              <div class="country">
                <div class="flag-box">
                  <div class="iti-flag {{data?.class}}"></div>
                </div>
                <span class="dial-code">{{data?.code}}</span>
              </div>
            </ng-template>
          </select2>
          <input
            type="tel"
            class="form-control intl-input-padding"
            id="addr-phone"
            formControlName="phone"
            placeholder="{{ 'enter_phone' | translate }}"
            name="addr-phone"
          />
        </div>
        @if(form.controls['phone'].touched && form.controls['phone'].errors?.['required']){
        <div class="invalid-feedback">{{ 'phone_number_is_required' | translate }}</div>
        } @if(form.controls['phone'].touched && form.controls['phone'].errors?.['pattern']){
        <div class="invalid-feedback">{{ 'phone_number_is_invalid' | translate }}</div>
        }
      </div>
    </div>
    <div class="modal-footer">
      <app-button
        [class]="'btn btn-outline btn-md fw-bold'"
        [type]="'button'"
        [spinner]="false"
        [id]="'cancel_address_btn'"
        (click)="modal.close('Cancel')"
      >
        {{ 'cancel' | translate }}
      </app-button>
      <app-button [class]="'btn btn-solid'" [id]="'submit_address_btn'">
        {{ 'submit' | translate }}
      </app-button>
    </div>
  </div>
</form>
` }]
  }], () => [], { userAddress: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressModal, { className: "AddressModal", filePath: "src/app/shared/components/widgets/modal/address-modal/address-modal.ts", lineNumber: 27 });
})();

export {
  AddressModal
};
//# sourceMappingURL=chunk-MD6IUNWO.js.map
