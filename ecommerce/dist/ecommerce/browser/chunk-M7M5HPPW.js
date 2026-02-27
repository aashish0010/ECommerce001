import {
  GetPaymentDetailsAction,
  PaymentDetailsState,
  UpdatePaymentDetailsAction
} from "./chunk-LTTLH4E6.js";
import {
  Button
} from "./chunk-6I2UIIRS.js";
import "./chunk-OE35GDC6.js";
import "./chunk-RWFLVE5E.js";
import "./chunk-LWNWQPUU.js";
import "./chunk-6R3AQVTF.js";
import "./chunk-HBLN46Q5.js";
import "./chunk-G25K32MJ.js";
import "./chunk-MLCQBQYT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
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
import "./chunk-4LUQBUB6.js";
import {
  Store
} from "./chunk-6YJBSKCB.js";
import "./chunk-QK7HTLFB.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/bank-details/bank-details.ts
var BankDetails = class _BankDetails {
  constructor() {
    this.store = inject(Store);
    this.paymentDetails$ = inject(Store).select(PaymentDetailsState.paymentDetails);
    this.active = "bank";
    this.form = new FormGroup({
      bank_account_no: new FormControl(),
      bank_name: new FormControl(),
      bank_holder_name: new FormControl(),
      swift: new FormControl(),
      ifsc: new FormControl(),
      paypal_email: new FormControl("", [Validators.email])
    });
  }
  ngOnInit() {
    this.store.dispatch(new GetPaymentDetailsAction());
    this.paymentDetails$.subscribe((paymentDetails) => {
      this.form.patchValue({
        bank_account_no: paymentDetails?.bank_account_no,
        bank_name: paymentDetails?.bank_name,
        bank_holder_name: paymentDetails?.bank_holder_name,
        swift: paymentDetails?.swift,
        ifsc: paymentDetails?.ifsc,
        paypal_email: paymentDetails?.paypal_email
      });
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new UpdatePaymentDetailsAction(this.form.value));
    }
  }
  static {
    this.\u0275fac = function BankDetails_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BankDetails)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankDetails, selectors: [["app-bank-details"]], decls: 58, vars: 56, consts: [[1, "card", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "themeform-auth", 3, "ngSubmit", "formGroup"], [1, "row", "mb-3", "align-items-center"], ["for", "bank_account_no", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], [1, "col-xxl-10", "col-lg-12", "col-md-9"], ["type", "text", "id", "bank_account_no", "formControlName", "bank_account_no", "numbersOnly", "", 1, "form-control", 3, "placeholder"], ["for", "bank_name", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "bank_name", "formControlName", "bank_name", 1, "form-control", 3, "placeholder"], ["for", "bank_holder_name", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "bank_holder_name", "formControlName", "bank_holder_name", 1, "form-control", 3, "placeholder"], ["for", "swift", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "swift", "formControlName", "swift", 1, "form-control", 3, "placeholder"], ["for", "ifsc", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "ifsc", "formControlName", "ifsc", 1, "form-control", 3, "placeholder"], [1, "mb-3", "top-sec", "top-sec-2"], ["for", "paypal_email", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "email", "id", "paypal_email", "formControlName", "paypal_email", 1, "form-control", 3, "placeholder"], [1, "text-end"], [3, "id"]], template: function BankDetails_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 3);
        \u0275\u0275listener("ngSubmit", function BankDetails_Template_form_ngSubmit_6_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(7, "div", 4)(8, "label", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275element(12, "input", 7);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 4)(15, "label", 8);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 6);
        \u0275\u0275element(19, "input", 9);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 4)(22, "label", 10);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 6);
        \u0275\u0275element(26, "input", 11);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 4)(29, "label", 12);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 6);
        \u0275\u0275element(33, "input", 13);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 4)(36, "label", 14);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 6);
        \u0275\u0275element(40, "input", 15);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 16)(43, "h3");
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "form", 3);
        \u0275\u0275listener("ngSubmit", function BankDetails_Template_form_ngSubmit_46_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(47, "div", 4)(48, "label", 17);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 6);
        \u0275\u0275element(52, "input", 18);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 19)(55, "app-button", 20);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 26, "bank_details"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 28, "bank_account_no"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(13, 30, "enter_bank_account_no")));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 32, "bank_name"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(20, 34, "enter_bank_name")));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 36, "holder_name"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(27, 38, "enter_bank_holder_name")));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 40, "swift"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(34, 42, "enter_swift")));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 44, "ifsc"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(41, 46, "enter_ifsc")));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 48, "paypal_details"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 50, "paypal_email"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(53, 52, "enter_paypal_email")));
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "payout_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 54, "save"));
      }
    }, dependencies: [TranslateModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, Button, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BankDetails, [{
    type: Component,
    args: [{ selector: "app-bank-details", imports: [TranslateModule, FormsModule, ReactiveFormsModule, Button], template: `<div class="card mt-0">
  <div class="card-body">
    <div class="top-sec">
      <h3>{{ 'bank_details' | translate }}</h3>
    </div>
    <form class="themeform-auth" [formGroup]="form" (ngSubmit)="submit()">
      <div class="row mb-3 align-items-center">
        <label for="bank_account_no" class="form-label col-xxl-2 col-lg-12 col-md-3"
          >{{ 'bank_account_no'| translate}}</label
        >
        <div class="col-xxl-10 col-lg-12 col-md-9">
          <input
            type="text"
            class="form-control"
            id="bank_account_no"
            placeholder="{{ 'enter_bank_account_no' | translate }}"
            formControlName="bank_account_no"
            numbersOnly
          />
        </div>
      </div>
      <div class="row mb-3 align-items-center">
        <label for="bank_name" class="form-label col-xxl-2 col-lg-12 col-md-3"
          >{{ 'bank_name'| translate }}</label
        >
        <div class="col-xxl-10 col-lg-12 col-md-9">
          <input
            type="text"
            class="form-control"
            id="bank_name"
            placeholder="{{ 'enter_bank_name' | translate }}"
            formControlName="bank_name"
          />
        </div>
      </div>
      <div class="row mb-3 align-items-center">
        <label for="bank_holder_name" class="form-label col-xxl-2 col-lg-12 col-md-3"
          >{{ 'holder_name'| translate}}</label
        >
        <div class="col-xxl-10 col-lg-12 col-md-9">
          <input
            type="text"
            class="form-control"
            id="bank_holder_name"
            placeholder="{{ 'enter_bank_holder_name' | translate }}"
            formControlName="bank_holder_name"
          />
        </div>
      </div>
      <div class="row mb-3 align-items-center">
        <label for="swift" class="form-label col-xxl-2 col-lg-12 col-md-3"
          >{{ 'swift'| translate }}</label
        >
        <div class="col-xxl-10 col-lg-12 col-md-9">
          <input
            type="text"
            class="form-control"
            id="swift"
            placeholder="{{ 'enter_swift' | translate }}"
            formControlName="swift"
          />
        </div>
      </div>
      <div class="row mb-3 align-items-center">
        <label for="ifsc" class="form-label col-xxl-2 col-lg-12 col-md-3"
          >{{ 'ifsc'| translate}}</label
        >
        <div class="col-xxl-10 col-lg-12 col-md-9">
          <input
            type="text"
            class="form-control"
            id="ifsc"
            placeholder="{{ 'enter_ifsc' | translate }}"
            formControlName="ifsc"
          />
        </div>
      </div>
    </form>
    <div class="mb-3 top-sec top-sec-2">
      <h3>{{ 'paypal_details'| translate}}</h3>
    </div>
    <form class="themeform-auth" [formGroup]="form" (ngSubmit)="submit()">
      <div class="row mb-3 align-items-center">
        <label for="paypal_email" class="form-label col-xxl-2 col-lg-12 col-md-3"
          >{{ 'paypal_email' | translate }}</label
        >
        <div class="col-xxl-10 col-lg-12 col-md-9">
          <input
            type="email"
            class="form-control"
            id="paypal_email"
            placeholder="{{ 'enter_paypal_email' | translate }}"
            formControlName="paypal_email"
          />
        </div>
      </div>
      <div class="text-end">
        <app-button [class]="'btn btn-solid'" [id]="'payout_btn'"
          >{{ 'save'| translate}}</app-button
        >
      </div>
    </form>
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankDetails, { className: "BankDetails", filePath: "src/app/components/account/bank-details/bank-details.ts", lineNumber: 28 });
})();
export {
  BankDetails
};
//# sourceMappingURL=chunk-M7M5HPPW.js.map
