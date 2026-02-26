import {
  TextConverterPipe
} from "./chunk-RJJQ4UVE.js";
import {
  Select2,
  Select2Module
} from "./chunk-V3KVJNBA.js";
import {
  GetOrderStatusAction,
  OrderStatusState
} from "./chunk-KTOAZ4WG.js";
import {
  OrderState
} from "./chunk-DLHYWE3C.js";
import {
  DownloadInvoiceAction,
  RePaymentAction,
  ViewOrderAction
} from "./chunk-VVQLAKFR.js";
import {
  SendRefundRequestAction
} from "./chunk-UTLPXFOE.js";
import {
  Button
} from "./chunk-RJ7FCDYY.js";
import "./chunk-OOCN6Z4U.js";
import "./chunk-RWFLVE5E.js";
import "./chunk-LZFLFOAY.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-6347PIFH.js";
import "./chunk-MUAYKWHK.js";
import "./chunk-2K52HGL6.js";
import {
  NgbActiveModal,
  NgbModal,
  NgbModule,
  NgbTooltip
} from "./chunk-QQXAO3XE.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-JLWO6B35.js";
import {
  CurrencySymbolPipe
} from "./chunk-XK2M6X6K.js";
import {
  SettingState
} from "./chunk-QSTIS5AN.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-7XQQRBBN.js";
import {
  AsyncPipe,
  DatePipe,
  Location,
  NgClass,
  TitleCasePipe,
  UpperCasePipe
} from "./chunk-L6CMOIIK.js";
import {
  Component,
  Input,
  Store,
  Subject,
  inject,
  input,
  mergeMap,
  of,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate5
} from "./chunk-3KEERULZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/components/widgets/modal/pay-modal/pay-modal.ts
var _forTrack0 = ($index, $item) => $item.name;
function PayModal_For_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15);
    \u0275\u0275element(4, "input", 16);
    \u0275\u0275elementStart(5, "label", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const payment_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", payment_r1.name)("id", payment_r1.name)("formControl", ctx_r1.paymentType);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate(payment_r1.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, payment_r1.title ? payment_r1.title : payment_r1.name), " ");
  }
}
function PayModal_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PayModal_For_11_Conditional_0_Template, 8, 8, "div", 12);
  }
  if (rf & 2) {
    const payment_r1 = ctx.$implicit;
    \u0275\u0275conditional(payment_r1.status ? 0 : -1);
  }
}
function PayModal_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "select_payment_method_is_required"));
  }
}
var PayModal = class _PayModal {
  constructor() {
    this.modalService = inject(NgbActiveModal);
    this.store = inject(Store);
    this.orderDetails = input(...ngDevMode ? [void 0, { debugName: "orderDetails" }] : []);
    this.setting$ = inject(Store).select(SettingState.setting);
    this.paymentType = new FormControl("", [Validators.required]);
  }
  submit() {
    this.paymentType.markAllAsTouched();
    if (this.paymentType.valid) {
      const data = {
        order_number: this.order.order_number,
        payment_method: this.paymentType.value
      };
      this.store.dispatch(new RePaymentAction(data)).subscribe({
        complete: () => {
          this.modalService.close();
        }
      });
    }
  }
  static {
    this.\u0275fac = function PayModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PayModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayModal, selectors: [["app-pay-modal"]], inputs: { orderDetails: [1, "orderDetails"] }, decls: 21, vars: 24, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [1, "modal-body"], [1, "checkout-box"], [1, "checkout-detail"], [1, "row", "g-3"], [1, "invalid-feedback"], [1, "modal-footer"], [3, "click", "type", "spinner", "id"], [3, "click", "id"], [1, "col-md-6"], [1, "payment-option"], [1, "payment-category", "w-100"], [1, "form-check"], ["type", "radio", "name", "payment_method", 1, "form-check-input", 3, "value", "id", "formControl"], [1, "form-check-label", 3, "for"]], template: function PayModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function PayModal_Template_app_button_click_4_listener() {
          return ctx.modalService.dismiss("Cross click");
        });
        \u0275\u0275element(5, "i", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275repeaterCreate(10, PayModal_For_11_Template, 1, 1, null, null, _forTrack0);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275conditionalCreate(13, PayModal_Conditional_13_Template, 3, 3, "div", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 9)(15, "app-button", 10);
        \u0275\u0275listener("click", function PayModal_Template_app_button_click_15_listener() {
          return ctx.modalService.dismiss("Cancel");
        });
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "app-button", 11);
        \u0275\u0275listener("click", function PayModal_Template_app_button_click_18_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 16, "pay_now"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "profile_modal_close_btn");
        \u0275\u0275advance(6);
        \u0275\u0275repeater((tmp_4_0 = \u0275\u0275pipeBind1(12, 18, ctx.setting$)) == null ? null : tmp_4_0.payment_methods);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.paymentType.touched && (ctx.paymentType.errors == null ? null : ctx.paymentType.errors["required"]) ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-outline");
        \u0275\u0275property("type", "button")("spinner", false)("id", "cancel_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 20, "cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "submit_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 22, "submit"), " ");
      }
    }, dependencies: [TranslateModule, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, ReactiveFormsModule, FormControlDirective, Button, TranslatePipe, AsyncPipe, UpperCasePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayModal, [{
    type: Component,
    args: [{ selector: "app-pay-modal", imports: [TranslateModule, FormsModule, ReactiveFormsModule, Button, AsyncPipe, UpperCasePipe], template: `<div class="modal-header">
  <h3 class="fw-semibold">{{ 'pay_now' | translate }}</h3>
  <app-button
    [class]="'btn btn-close'"
    [spinner]="false"
    [id]="'profile_modal_close_btn'"
    (click)="modalService.dismiss('Cross click')"
  >
    <i class="ri-close-line"></i>
  </app-button>
</div>

<div class="modal-body">
  <div class="checkout-box">
    <div class="checkout-detail">
      <div class="row g-3">
        @for(payment of (setting$ |async)?.payment_methods; track payment.name; let i = $index){
        @if(payment.status){
        <div class="col-md-6">
          <div class="payment-option">
            <div class="payment-category w-100">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="payment_method"
                  [value]="payment.name"
                  [id]="payment.name"
                  [formControl]="paymentType"
                />
                <label class="form-check-label" for="{{payment.name}}">
                  {{ (payment.title ? payment.title : payment.name) | uppercase }}
                </label>
              </div>
            </div>
          </div>
        </div>
        } } @if(paymentType.touched && paymentType.errors?.['required']){
        <div class="invalid-feedback">{{ 'select_payment_method_is_required' | translate }}</div>
        }
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <app-button
      [class]="'btn btn-outline'"
      [type]="'button'"
      [spinner]="false"
      [id]="'cancel_profile_btn'"
      (click)="modalService.dismiss('Cancel')"
    >
      {{ 'cancel' | translate }}
    </app-button>
    <app-button [class]="'btn btn-solid'" [id]="'submit_profile_btn'" (click)="submit()">
      {{ 'submit' | translate }}
    </app-button>
  </div>
</div>
` }]
  }], null, { orderDetails: [{ type: Input, args: [{ isSignal: true, alias: "orderDetails", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayModal, { className: "PayModal", filePath: "src/app/shared/components/widgets/modal/pay-modal/pay-modal.ts", lineNumber: 22 });
})();

// src/app/shared/components/widgets/modal/refund-modal/refund-modal.ts
var _c0 = () => [];
function RefundModal_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "reason_is_required"));
  }
}
function RefundModal_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "payment_type_is_required"));
  }
}
var RefundModal = class _RefundModal {
  constructor() {
    this.modalService = inject(NgbActiveModal);
    this.store = inject(Store);
    this.productDetails = input(...ngDevMode ? [void 0, { debugName: "productDetails" }] : []);
    this.orderId = input(...ngDevMode ? [void 0, { debugName: "orderId" }] : []);
    this.option = [
      {
        label: "Wallet",
        value: "wallet"
      },
      {
        label: "Paypal",
        value: "paypal"
      },
      {
        label: "Bank",
        value: "bank"
      }
    ];
    this.form = new FormGroup({
      order_id: new FormControl("", [Validators.required]),
      reason: new FormControl("", [Validators.required]),
      payment_type: new FormControl("", [Validators.required]),
      product_id: new FormControl()
    });
  }
  ngOnInit() {
    if (this.form) {
      this.form.controls["order_id"].setValue(this.orderId());
      this.form.get("product_id")?.patchValue(this.productDetails()?.id);
    }
  }
  sendRequest() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new SendRefundRequestAction(this.form.value)).subscribe({
        complete: () => {
          this.form.reset();
          this.modalService.close();
        }
      });
    }
  }
  static {
    this.\u0275fac = function RefundModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefundModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefundModal, selectors: [["app-refund-modal"]], inputs: { productDetails: [1, "productDetails"], orderId: [1, "orderId"] }, decls: 41, vars: 45, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [1, "modal-body"], [1, "product-review-form"], [1, "product-wrapper"], [1, "product-image"], [1, "img-fluid", 3, "src", "alt"], [1, "product-content"], [1, "name"], [1, "product-review-rating"], [1, "product-rating"], [1, "price-number"], [1, "review-box"], [3, "formGroup"], ["for", "content", 1, "form-label"], ["id", "content", "rows", "3", "formControlName", "reason", 1, "form-control", 3, "placeholder"], [1, "invalid-feedback"], ["for", "payment_option", 1, "form-label"], ["formControlName", "payment_type", "resettable", "", 1, "custom-select", 3, "data", "placeholder"], [1, "modal-footer"], [3, "click", "type", "spinner", "id"], [3, "click", "id"]], template: function RefundModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function RefundModal_Template_app_button_click_4_listener() {
          return ctx.modalService.close("Cross click");
        });
        \u0275\u0275element(5, "i", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275element(10, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "h5", 10);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "h6", 13);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "currencySymbol");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(19, "div", 14)(20, "form", 15)(21, "label", 16);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "textarea", 17);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275conditionalCreate(26, RefundModal_Conditional_26_Template, 3, 3, "div", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 14)(28, "label", 19);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "select2", 20);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275conditionalCreate(33, RefundModal_Conditional_33_Template, 3, 3, "div", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 21)(35, "app-button", 22);
        \u0275\u0275listener("click", function RefundModal_Template_app_button_click_35_listener() {
          return ctx.modalService.close("Cancel");
        });
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "app-button", 23);
        \u0275\u0275listener("click", function RefundModal_Template_app_button_click_38_listener() {
          return ctx.sendRequest();
        });
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 28, "refund"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "profile_modal_close_btn");
        \u0275\u0275advance(6);
        \u0275\u0275property("src", ctx.productDetails() && ((tmp_4_0 = ctx.productDetails()) == null ? null : tmp_4_0.product_thumbnail) ? (tmp_4_0 = ctx.productDetails()) == null ? null : tmp_4_0.product_thumbnail == null ? null : tmp_4_0.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", (tmp_5_0 = ctx.productDetails()) == null ? null : tmp_5_0.name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_6_0 = ctx.productDetails()) == null ? null : tmp_6_0.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 30, (tmp_7_0 = ctx.productDetails()) == null ? null : tmp_7_0.pivot == null ? null : tmp_7_0.pivot.single_price), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 32, "reason"), " *");
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(25, 34, "enter_reason")));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["reason"].touched && (ctx.form.controls["reason"].errors == null ? null : ctx.form.controls["reason"].errors["required"]) ? 26 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 36, "payment_option"));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.option ? ctx.option : \u0275\u0275pureFunction0(44, _c0))("placeholder", \u0275\u0275pipeBind1(32, 38, "select_payment_option"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["payment_type"].touched && (ctx.form.controls["payment_type"].errors == null ? null : ctx.form.controls["payment_type"].errors["required"]) ? 33 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-md btn-outline fw-bold");
        \u0275\u0275property("type", "button")("spinner", false)("id", "cancel_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 40, "cancel"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "submit_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 42, "submit"), " ");
      }
    }, dependencies: [
      TranslateModule,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgForm,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      Select2Module,
      Select2,
      Button,
      TranslatePipe,
      CurrencySymbolPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefundModal, [{
    type: Component,
    args: [{ selector: "app-refund-modal", imports: [
      TranslateModule,
      FormsModule,
      ReactiveFormsModule,
      Select2Module,
      CurrencySymbolPipe,
      Button
    ], template: `<div class="modal-header">
  <h3 class="fw-semibold">{{ 'refund' | translate }}</h3>
  <app-button
    [class]="'btn btn-close'"
    [spinner]="false"
    [id]="'profile_modal_close_btn'"
    (click)="modalService.close('Cross click')"
  >
    <i class="ri-close-line"></i>
  </app-button>
</div>

<div class="modal-body">
  <form class="product-review-form">
    <div class="product-wrapper">
      <div class="product-image">
        <img
          [src]="productDetails() && productDetails()?.product_thumbnail ?
                productDetails()?.product_thumbnail?.original_url :
                'assets/images/placeholder/product.png'"
          class="img-fluid"
          [alt]="productDetails()?.name"
        />
      </div>
      <div class="product-content">
        <h5 class="name">{{ productDetails()?.name }}</h5>
        <div class="product-review-rating">
          <div class="product-rating">
            <h6 class="price-number">
              {{ productDetails()?.pivot?.single_price | currencySymbol }}
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div class="review-box">
      <form [formGroup]="form">
        <label class="form-label" for="content">{{ 'reason' | translate }} *</label>
        <textarea
          placeholder="{{ 'enter_reason' | translate }}"
          class="form-control"
          id="content"
          rows="3"
          formControlName="reason"
        ></textarea>
        @if(form.controls['reason'].touched && form.controls['reason'].errors?.['required']){
        <div class="invalid-feedback">{{ 'reason_is_required' | translate }}</div>
        }
      </form>
    </div>
    <div class="review-box">
      <label class="form-label" for="payment_option">{{ 'payment_option' | translate }}</label>
      <select2
        class="custom-select"
        [data]="option ? option : []"
        [placeholder]="'select_payment_option' | translate"
        formControlName="payment_type"
        resettable
      />
      @if(form.controls['payment_type'].touched &&
      form.controls['payment_type'].errors?.['required']){
      <div class="invalid-feedback">{{ 'payment_type_is_required' | translate }}</div>
      }
    </div>
  </form>
  <div class="modal-footer">
    <app-button
      [class]="'btn btn-md btn-outline fw-bold'"
      [type]="'button'"
      [spinner]="false"
      [id]="'cancel_profile_btn'"
      (click)="modalService.close('Cancel')"
      >{{ 'cancel' | translate }}</app-button
    >
    <app-button [class]="'btn btn-solid'" [id]="'submit_profile_btn'" (click)="sendRequest()">
      {{ 'submit' | translate }}
    </app-button>
  </div>
</div>
` }]
  }], () => [], { productDetails: [{ type: Input, args: [{ isSignal: true, alias: "productDetails", required: false }] }], orderId: [{ type: Input, args: [{ isSignal: true, alias: "orderId", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefundModal, { className: "RefundModal", filePath: "src/app/shared/components/widgets/modal/refund-modal/refund-modal.ts", lineNumber: 33 });
})();

// src/app/components/account/orders/details/details.ts
var _c02 = (a0) => ({ "d-none": a0 });
var _c1 = (a0) => ["/account/order/details", a0];
var _forTrack02 = ($index, $item) => $item.id;
function Details_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275listener("click", function Details_Conditional_0_Conditional_9_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPayModal(ctx_r1.order));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "pay_now"));
  }
}
function Details_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275listener("click", function Details_Conditional_0_Conditional_10_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.download(ctx_r1.order.order_number));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invoice"), " ");
  }
}
function Details_Conditional_0_Conditional_13_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "textConverter");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const orderStatus_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, orderStatus_r5.name));
  }
}
function Details_Conditional_0_Conditional_13_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const orderStatus_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, orderStatus_r5.activities_date, "dd MMM yyyy"));
  }
}
function Details_Conditional_0_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29)(1, "div", 30)(2, "div", 31);
    \u0275\u0275element(3, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275conditionalCreate(5, Details_Conditional_0_Conditional_13_For_2_Conditional_5_Template, 3, 3, "div", 33);
    \u0275\u0275conditionalCreate(6, Details_Conditional_0_Conditional_13_For_2_Conditional_6_Template, 3, 4, "span", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const orderStatus_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", (orderStatus_r5 == null ? null : orderStatus_r5.sequence) <= ctx_r1.order.order_status.sequence);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, (orderStatus_r5 == null ? null : orderStatus_r5.sequence) >= ctx_r1.order.order_status.sequence && (ctx_r1.order.order_status && ctx_r1.order.order_status.slug === "cancelled") || (orderStatus_r5 == null ? null : orderStatus_r5.slug) === "cancelled" || ctx_r1.order.is_digital_only && ((orderStatus_r5 == null ? null : orderStatus_r5.slug) === "shipped" || (orderStatus_r5 == null ? null : orderStatus_r5.slug) === "out-for-delivery")));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/svg/tracking/", orderStatus_r5 == null ? null : orderStatus_r5.slug, ".svg"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((orderStatus_r5 == null ? null : orderStatus_r5.name) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(orderStatus_r5.sequence <= ctx_r1.order.order_status.sequence && orderStatus_r5.activities_date ? 6 : -1);
  }
}
function Details_Conditional_0_Conditional_13_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/svg/tracking/", ctx_r1.order.order_status.slug, ".svg"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx_r1.order.order_status.name.replace("_", " ")));
  }
}
function Details_Conditional_0_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 28);
    \u0275\u0275conditionalCreate(1, Details_Conditional_0_Conditional_13_Conditional_4_Conditional_1_Template, 6, 5, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.order_status ? 1 : -1);
  }
}
function Details_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, Details_Conditional_0_Conditional_13_For_2_Template, 7, 9, "li", 27, _forTrack02);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275conditionalCreate(4, Details_Conditional_0_Conditional_13_Conditional_4_Template, 2, 1, "li", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_2_0 = \u0275\u0275pipeBind1(3, 1, ctx_r1.orderStatus$)) == null ? null : tmp_2_0.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.order.order_status && ctx_r1.order.order_status.slug === "cancelled" ? 4 : -1);
  }
}
function Details_Conditional_0_Conditional_14_For_27_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275listener("click", function Details_Conditional_0_Conditional_14_For_27_Conditional_18_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const product_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openRefundModal(product_r7, ctx_r1.order.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "refund"), " ");
  }
}
function Details_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "non_refundable"));
  }
}
function Details_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("status-", product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status == null ? null : product_r7.pivot.refund_status.toLowerCase()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status));
  }
}
function Details_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "refund"));
  }
}
function Details_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275conditionalCreate(1, Details_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_1_Conditional_1_Template, 3, 3, "a", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(!(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status) ? 1 : -1);
  }
}
function Details_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Details_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_0_Template, 4, 6, "div", 41)(1, Details_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_1_Template, 2, 1, "div", 42);
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275conditional((product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status) ? 0 : 1);
  }
}
function Details_Conditional_0_Conditional_14_For_27_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Details_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_0_Template, 3, 3, "span")(1, Details_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(product_r7.is_return === 0 ? 0 : 1);
  }
}
function Details_Conditional_0_Conditional_14_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275element(2, "img", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "h6");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "h6");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "h6");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "h6");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275conditionalCreate(18, Details_Conditional_0_Conditional_14_For_27_Conditional_18_Template, 3, 3, "a", 5)(19, Details_Conditional_0_Conditional_14_For_27_Conditional_19_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation) && (product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.variation_image) ? product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.variation_image == null ? null : product_r7.pivot.variation.variation_image.original_url : (product_r7 == null ? null : product_r7.product_thumbnail) ? product_r7 == null ? null : product_r7.product_thumbnail == null ? null : product_r7.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation) ? product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.name : product_r7 == null ? null : product_r7.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.single_price));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 8, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.subtotal));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.order.payment_status && (product_r7 == null ? null : product_r7.is_return) === 1 && ctx_r1.order.payment_status && ctx_r1.order.payment_status === "COMPLETED" && ctx_r1.order.order_status && ctx_r1.order.order_status.slug === "delivered" && !(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status) ? 18 : 19);
  }
}
function Details_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14)(2, "div", 35)(3, "div", 36)(4, "table", 37)(5, "thead")(6, "tr")(7, "th", 38);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 38);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 38);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 38);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 38);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 38);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, Details_Conditional_0_Conditional_14_For_27_Template, 20, 10, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "short_name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 12, "quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 14, "subtotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 16, "refund_status"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.order.products);
  }
}
function Details_Conditional_0_Conditional_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5(" ", ctx_r1.order.billing_address.street, " ", ctx_r1.order.billing_address.city, " ", ctx_r1.order.billing_address.state.name, " ", ctx_r1.order.billing_address.country.name, " ", ctx_r1.order.billing_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(4, 8, "phone"), " : +", ctx_r1.order.billing_address.country_code, " ", ctx_r1.order.billing_address.phone, " ");
  }
}
function Details_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Details_Conditional_0_Conditional_25_Conditional_4_Template, 5, 10, "h4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "billing_address"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order.billing_address.state ? 4 : -1);
  }
}
function Details_Conditional_0_Conditional_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5(" ", ctx_r1.order.shipping_address.street, " ", ctx_r1.order.shipping_address.city, " ", ctx_r1.order.shipping_address.state.name, " ", ctx_r1.order.shipping_address.country.name, " ", ctx_r1.order.shipping_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(4, 8, "phone"), " : +", ctx_r1.order.shipping_address.country_code, " ", ctx_r1.order.shipping_address.phone, " ");
  }
}
function Details_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Details_Conditional_0_Conditional_26_Conditional_4_Template, 5, 10, "h4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "shipping_address"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order.shipping_address.state ? 4 : -1);
  }
}
function Details_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "delivery_slot"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.order.delivery_description);
  }
}
function Details_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 44)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "li", 44)(9, "label");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 45)(13, "h4");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "uppercase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "payment_mode"), ":");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, ctx_r1.order.payment_method));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 8, "payment_status"), ":");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, ctx_r1.order.payment_status));
  }
}
function Details_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "shipping"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.shipping_total ? ctx_r1.order.shipping_total : 0));
  }
}
function Details_Conditional_0_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "points"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.points_amount));
  }
}
function Details_Conditional_0_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "wallet_balance"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.wallet_balance));
  }
}
function Details_Conditional_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "coupon_discount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.coupon_total_discount));
  }
}
function Details_Conditional_0_Conditional_59_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "h6");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "h6")(14, "div")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "td")(18, "a", 46);
    \u0275\u0275element(19, "i");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subOrder_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("#" + subOrder_r8.order_number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, subOrder_r8.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, subOrder_r8.amount));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275interpolate1("status-", subOrder_r8.order_status.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subOrder_r8.order_status.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c1, subOrder_r8.order_number));
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-eye-line");
  }
}
function Details_Conditional_0_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14)(2, "div", 35)(3, "div", 36)(4, "table", 37)(5, "thead")(6, "tr")(7, "th", 38);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 38);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 38);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 38);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 38);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, Details_Conditional_0_Conditional_59_For_24_Template, 20, 17, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "order_number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "order_date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 9, "total_amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, "status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 13, "action"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.order.sub_orders);
  }
}
function Details_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h5")(4, "a", 2);
    \u0275\u0275listener("click", function Details_Conditional_0_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(5, "i", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275conditionalCreate(9, Details_Conditional_0_Conditional_9_Template, 4, 3, "a", 5);
    \u0275\u0275conditionalCreate(10, Details_Conditional_0_Conditional_10_Template, 4, 3, "a", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
    \u0275\u0275conditionalCreate(13, Details_Conditional_0_Conditional_13_Template, 5, 3, "ul");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, Details_Conditional_0_Conditional_14_Template, 28, 18, "div", 9);
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "h3", 15);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 16)(24, "ul", 17);
    \u0275\u0275conditionalCreate(25, Details_Conditional_0_Conditional_25_Template, 5, 4, "li", 18);
    \u0275\u0275conditionalCreate(26, Details_Conditional_0_Conditional_26_Template, 5, 4, "li", 18);
    \u0275\u0275conditionalCreate(27, Details_Conditional_0_Conditional_27_Template, 6, 4, "li", 18);
    \u0275\u0275conditionalCreate(28, Details_Conditional_0_Conditional_28_Template, 16, 12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 19)(30, "div", 20)(31, "div", 14)(32, "h3", 15);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 21)(36, "ul")(37, "li");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(43, Details_Conditional_0_Conditional_43_Template, 6, 6, "li");
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(50, Details_Conditional_0_Conditional_50_Template, 6, 6, "li", 22);
    \u0275\u0275conditionalCreate(51, Details_Conditional_0_Conditional_51_Template, 6, 6, "li", 22);
    \u0275\u0275conditionalCreate(52, Details_Conditional_0_Conditional_52_Template, 6, 6, "li", 22);
    \u0275\u0275elementStart(53, "li");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "currencySymbol");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275conditionalCreate(59, Details_Conditional_0_Conditional_59_Template, 25, 15, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(7, 23, "order_number"), ": #", ctx_r1.order.order_number, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r1.order.payment_status === "FAILED" || ctx_r1.order.payment_status === "PENDING") && (ctx_r1.order.order_status && ctx_r1.order.order_status.slug !== "cancelled") && ctx_r1.order.payment_method !== "cod" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.invoice_url && ctx_r1.order.payment_status && ctx_r1.order.payment_status === "COMPLETED" && ctx_r1.isLogin ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.order && ctx_r1.order.sub_orders && !ctx_r1.order.sub_orders.length ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.products && ctx_r1.order.products.length ? 14 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 25, "consumer_details"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.order.billing_address ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.shipping_address && !ctx_r1.order.is_digital_only ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.delivery_description && !ctx_r1.order.is_digital_only ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.payment_method ? 28 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 27, "summary"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 29, "subtotal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 31, ctx_r1.order.amount ? ctx_r1.order.amount : 0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.order.is_digital_only ? 43 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 33, "tax"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 35, ctx_r1.order.tax_total ? ctx_r1.order.tax_total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order.points_amount !== 0 ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.wallet_balance !== 0 ? 51 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.coupon_total_discount !== 0 ? 52 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 37, "total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 39, ctx_r1.order.total ? ctx_r1.order.total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order.sub_orders && ctx_r1.order.sub_orders.length ? 59 : -1);
  }
}
var Details = class _Details {
  constructor() {
    this.store = inject(Store);
    this.route = inject(ActivatedRoute);
    this.modal = inject(NgbModal);
    this.datePipe = inject(DatePipe);
    this.location = inject(Location);
    this.orderStatus$ = inject(Store).select(OrderStatusState.orderStatus);
    this.destroy$ = new Subject();
    this.store.dispatch(new GetOrderStatusAction());
  }
  ngOnInit() {
    this.isLogin = !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token);
    this.route.params.pipe(switchMap((params) => {
      if (!params["id"])
        return of();
      return this.store.dispatch(new ViewOrderAction(params["id"])).pipe(mergeMap(() => this.store.select(OrderState.selectedOrder)));
    }), takeUntil(this.destroy$)).subscribe((order) => {
      this.order = order;
      if (this.order && this.order?.order_status_activities) {
        this.order?.order_status_activities?.map((actStatus) => {
          this.orderStatus$.subscribe((res) => {
            res.data.map((status) => {
              if (actStatus.status == status.name) {
                let convertDate = this.datePipe.transform(actStatus?.changed_at, "dd MMM yyyy hh:mm:a");
                status["activities_date"] = convertDate;
              }
            });
          });
        });
      }
    });
  }
  openPayModal(order) {
    const modal = this.modal.open(PayModal, { centered: true });
    modal.componentInstance.orderDetails = order;
  }
  openRefundModal(product, order_id) {
    const modal = this.modal.open(RefundModal, {
      centered: true,
      windowClass: "theme-modal-2 refund-modal"
    });
    modal.componentInstance.productDetails = product;
    modal.componentInstance.orderId = order_id;
  }
  download(id) {
    this.store.dispatch(new DownloadInvoiceAction({ order_number: id }));
  }
  back() {
    this.location.back();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function Details_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Details)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Details, selectors: [["app-details"]], features: [\u0275\u0275ProvidersFeature([DatePipe])], decls: 1, vars: 1, consts: [[1, "title-header"], [1, "d-flex", "align-items-center", "w-100", "justify-content-between"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-arrow-left-line"], [1, "right-option"], ["href", "javascript:void(0)", 1, "btn", "btn-solid"], [1, "btn", "btn-md", "fw-bold", "text-light", "theme-bg-color", "ms-auto"], [1, "mb-4", "mt-2"], [1, "tracking-panel"], [1, "card", "dashboard-table"], [1, "summary-details", "my-3"], [1, "row", "g-4"], [1, "col-xxl-8", "col-lg-12", "col-md-7"], [1, "card"], [1, "card-body"], [1, "order-title"], [1, "customer-detail", "tracking-wrapper"], [1, "row", "g-3"], [1, "col-sm-6"], [1, "col-xxl-4", "col-lg-12", "col-md-5"], [1, "card", "h-m30"], [1, "tracking-total", "tracking-wrapper"], [1, "txt-primary", "fw-bold"], ["href", "javascript:void(0)", 1, "btn", "btn-solid", 3, "click"], [1, "ri-refresh-line", "ms-2"], [1, "btn", "btn-md", "fw-bold", "text-light", "theme-bg-color", "ms-auto", 3, "click"], [1, "ri-download-2-fill", "ms-2"], [3, "active", "ngClass"], [1, "active", "cancelled-box"], [3, "ngClass"], [1, "panel-content"], [1, "icon"], ["alt", "image", 1, "img-fluid", 3, "src"], [1, "status"], [1, "panel-content-sm"], [1, "wallet-table"], [1, "tracking-wrapper", "table-responsive"], [1, "table", "product-table", "order-table"], ["scope", "col"], [1, "product-image"], ["alt", "product", 1, "img-fluid", 3, "src"], [3, "class"], ["placement", "top", "ngbTooltip", "Enable after delivery", 1, "black-tooltip"], [1, "btn", "btn-solid", "disabled"], [1, "col-sm-3"], [1, "d-flex", "align-items-center", "gap-2"], ["href", "javascript:void(0)", 3, "routerLink"]], template: function Details_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, Details_Conditional_0_Template, 60, 41, "div");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.order ? 0 : -1);
      }
    }, dependencies: [
      TranslateModule,
      RouterModule,
      RouterLink,
      NgbModule,
      NgbTooltip,
      NgClass,
      TranslatePipe,
      CurrencySymbolPipe,
      TextConverterPipe,
      AsyncPipe,
      DatePipe,
      TitleCasePipe,
      UpperCasePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Details, [{
    type: Component,
    args: [{ selector: "app-details", imports: [
      TranslateModule,
      RouterModule,
      CurrencySymbolPipe,
      NgbModule,
      TextConverterPipe,
      AsyncPipe,
      DatePipe,
      NgClass,
      TitleCasePipe,
      UpperCasePipe
    ], providers: [DatePipe], template: `@if(order){
<div>
  <div class="title-header">
    <div class="d-flex align-items-center w-100 justify-content-between">
      <h5>
        <a href="javascript:void(0)" (click)="back()"><i class="ri-arrow-left-line"></i> </a>
        {{ 'order_number' | translate }}: #{{ order.order_number }}
      </h5>
      <div class="right-option">
        @if((order.payment_status === 'FAILED' || order.payment_status === 'PENDING') &&
        (order.order_status && order.order_status.slug !== 'cancelled') && order.payment_method !==
        'cod'){
        <a href="javascript:void(0)" class="btn btn-solid" (click)="openPayModal(order)"
          >{{ 'pay_now' | translate }}<i class="ri-refresh-line ms-2"></i
        ></a>
        } @if(order.invoice_url && order.payment_status && order.payment_status === 'COMPLETED' &&
        isLogin){
        <a
          (click)="download(order.order_number)"
          class="btn btn-md fw-bold text-light theme-bg-color ms-auto"
        >
          {{ 'invoice' | translate }} <i class="ri-download-2-fill ms-2"></i>
        </a>
        }
      </div>
    </div>
  </div>
  <div class="mb-4 mt-2">
    <div class="tracking-panel">
      @if(order && order.sub_orders && !order.sub_orders.length){
      <ul>
        @for(orderStatus of (orderStatus$ | async)?.data; track orderStatus.id){
        <li
          [class.active]="orderStatus?.sequence! <= order.order_status.sequence!"
          [ngClass]="{
                                  'd-none': (orderStatus?.sequence! >= order.order_status.sequence!
                                  && (order.order_status && order.order_status.slug === 'cancelled')) ||
                                  orderStatus?.slug === 'cancelled' || (order.is_digital_only && (orderStatus?.slug === 'shipped' || orderStatus?.slug === 'out-for-delivery'))
                              }"
        >
          <div class="panel-content">
            <div class="icon">
              <img
                src="assets/svg/tracking/{{orderStatus?.slug}}.svg"
                class="img-fluid"
                alt="image"
              />
            </div>
            <div>
              @if(orderStatus?.name){
              <div class="status">{{ orderStatus.name | textConverter }}</div>
              } @if(orderStatus.sequence <= order.order_status.sequence &&
              orderStatus.activities_date){
              <span class="panel-content-sm"
                >{{ orderStatus.activities_date | date: 'dd MMM yyyy' }}</span
              >
              }
            </div>
          </div>
        </li>
        } @if(order.order_status && order.order_status.slug === 'cancelled'){
        <li class="active cancelled-box">
          @if(order.order_status){
          <div class="panel-content">
            <div class="icon">
              <img
                src="assets/svg/tracking/{{order.order_status.slug}}.svg"
                class="img-fluid"
                alt="image"
              />
            </div>
            <div class="status">{{ order.order_status.name.replace('_', ' ')! | titlecase }}</div>
          </div>
          }
        </li>
        }
      </ul>
      }
    </div>
  </div>
  @if(order.products && order.products.length){
  <div class="card dashboard-table">
    <div class="card-body">
      <div class="wallet-table">
        <div class="tracking-wrapper table-responsive">
          <table class="table product-table order-table">
            <thead>
              <tr>
                <th scope="col">{{ 'image' | translate }}</th>
                <th scope="col">{{ 'short_name' | translate}}</th>
                <th scope="col">{{ 'price' | translate }}</th>
                <th scope="col">{{ 'quantity' | translate }}</th>
                <th scope="col">{{ 'subtotal' | translate }}</th>
                <th scope="col">{{ 'refund_status' | translate }}</th>
              </tr>
            </thead>
            <tbody>
              @for(product of order.products; track product.id){
              <tr>
                <td class="product-image">
                  <img
                    [src]="product?.pivot?.variation && product?.pivot?.variation?.variation_image
                                                ? product?.pivot?.variation?.variation_image?.original_url
                                                : product?.product_thumbnail
                                                ? product?.product_thumbnail?.original_url
                                                : 'assets/images/placeholder/product.png'"
                    class="img-fluid"
                    alt="product"
                  />
                </td>
                <td>
                  <h6>
                    {{ product?.pivot?.variation ? product?.pivot?.variation?.name : product?.name
                    }}
                  </h6>
                </td>
                <td>
                  <h6>{{ product?.pivot?.single_price | currencySymbol }}</h6>
                </td>
                <td>
                  <h6>{{ product?.pivot?.quantity }}</h6>
                </td>
                <td>
                  <h6>{{ product?.pivot?.subtotal | currencySymbol }}</h6>
                </td>
                <td>
                  @if(order.payment_status && product?.is_return === 1 && order.payment_status &&
                  order.payment_status === 'COMPLETED' && order.order_status &&
                  order.order_status.slug === 'delivered' && !product?.pivot?.refund_status){
                  <a
                    class="btn btn-solid"
                    href="javascript:void(0)"
                    (click)="openRefundModal(product, order.id)"
                  >
                    {{ 'refund' | translate }}
                  </a>
                  }@else { @if(product.is_return === 0){
                  <span>{{ 'non_refundable' | translate }}</span>
                  }@else{ @if(product?.pivot?.refund_status){
                  <div class="status-{{product?.pivot?.refund_status?.toLowerCase()}}">
                    <span>{{ product?.pivot?.refund_status | titlecase }}</span>
                  </div>
                  }@else {
                  <div placement="top" class="black-tooltip" ngbTooltip="Enable after delivery">
                    @if(!product?.pivot?.refund_status){
                    <a class="btn btn-solid disabled"> {{ 'refund' | translate }}</a>
                    }
                  </div>
                  } } }
                </td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  }
  <div class="summary-details my-3">
    <div class="row g-4">
      <div class="col-xxl-8 col-lg-12 col-md-7">
        <div class="card">
          <div class="card-body">
            <h3 class="order-title">{{ 'consumer_details' | translate }}</h3>
            <div class="customer-detail tracking-wrapper">
              <ul class="row g-3">
                @if(order.billing_address){
                <li class="col-sm-6">
                  <label>{{ 'billing_address' | translate }}:</label>
                  @if(order.billing_address.state){
                  <h4>
                    {{ order.billing_address.street }} {{ order.billing_address.city }} {{
                    order.billing_address.state.name }} {{ order.billing_address.country.name }} {{
                    order.billing_address.pincode }} <br />
                    {{ 'phone' | translate }} : +{{ order.billing_address.country_code }} {{
                    order.billing_address.phone }}
                  </h4>
                  }
                </li>
                } @if(order.shipping_address && !order.is_digital_only){
                <li class="col-sm-6">
                  <label>{{ 'shipping_address' | translate }}:</label>
                  @if(order.shipping_address.state){
                  <h4>
                    {{ order.shipping_address.street }} {{ order.shipping_address.city }} {{
                    order.shipping_address.state.name }} {{ order.shipping_address.country.name }}
                    {{ order.shipping_address.pincode }} <br />
                    {{ 'phone' | translate }} : +{{ order.shipping_address.country_code }} {{
                    order.shipping_address.phone }}
                  </h4>
                  }
                </li>
                } @if(order.delivery_description && !order.is_digital_only){
                <li class="col-sm-6">
                  <label>{{ 'delivery_slot' | translate }}:</label>
                  <h4>{{ order.delivery_description }}</h4>
                </li>
                } @if(order.payment_method){
                <li class="col-sm-3">
                  <label>{{ 'payment_mode' | translate }}:</label>
                  <div class="d-flex align-items-center gap-2">
                    <h4>{{ order.payment_method | uppercase }}</h4>
                  </div>
                </li>
                <li class="col-sm-3">
                  <label>{{ 'payment_status' | translate }}:</label>
                  <div class="d-flex align-items-center gap-2">
                    <h4>{{ order.payment_status | uppercase }}</h4>
                  </div>
                </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-lg-12 col-md-5">
        <div class="card h-m30">
          <div class="card-body">
            <h3 class="order-title">{{ 'summary' | translate }}</h3>
            <div class="tracking-total tracking-wrapper">
              <ul>
                <li>
                  {{ 'subtotal' | translate }}
                  <span>{{ (order.amount ? order.amount : 0) | currencySymbol }}</span>
                </li>
                @if(!order.is_digital_only){
                <li>
                  {{ 'shipping'| translate }}
                  <span
                    >{{ (order.shipping_total ? order.shipping_total : 0) | currencySymbol }}</span
                  >
                </li>
                }
                <li>
                  {{ 'tax'| translate }}
                  <span>{{ (order.tax_total ? order.tax_total : 0) | currencySymbol }}</span>
                </li>

                @if(order.points_amount !== 0){
                <li class="txt-primary fw-bold">
                  {{ 'points'| translate }} <span>{{ order.points_amount | currencySymbol }}</span>
                </li>
                } @if(order.wallet_balance !== 0){
                <li class="txt-primary fw-bold">
                  {{ 'wallet_balance'| translate }}
                  <span>{{ order.wallet_balance | currencySymbol }}</span>
                </li>
                } @if(order.coupon_total_discount !== 0){
                <li class="txt-primary fw-bold">
                  {{ 'coupon_discount'| translate }}
                  <span>{{ order.coupon_total_discount | currencySymbol }}</span>
                </li>
                }
                <li>
                  {{ 'total'| translate }}
                  <span>{{ (order.total ? order.total : 0) | currencySymbol }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  @if(order.sub_orders && order.sub_orders.length){
  <div class="card dashboard-table">
    <div class="card-body">
      <div class="wallet-table">
        <div class="tracking-wrapper table-responsive">
          <table class="table product-table order-table">
            <thead>
              <tr>
                <th scope="col">{{ 'order_number' | translate }}</th>
                <th scope="col">{{ 'order_date' | translate }}</th>
                <th scope="col">{{ 'total_amount' | translate }}</th>
                <th scope="col">{{ 'status' | translate }}</th>
                <th scope="col">{{ 'action' | translate }}</th>
              </tr>
            </thead>
            <tbody>
              @for(subOrder of order.sub_orders; track subOrder.id){
              <tr>
                <td>
                  <h6>{{ '#'+subOrder.order_number }}</h6>
                </td>
                <td>
                  <h6>{{ subOrder.created_at | date: 'dd MMM yyyy hh:mm:a' }}</h6>
                </td>
                <td>
                  <h6>{{ subOrder.amount | currencySymbol }}</h6>
                </td>
                <td>
                  <h6>
                    <div class="status-{{subOrder.order_status.slug}}">
                      <span>{{ subOrder.order_status.name }}</span>
                    </div>
                  </h6>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    [routerLink]="['/account/order/details', subOrder.order_number]"
                  >
                    <i [class]="'ri-eye-line'"></i>
                  </a>
                </td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  }
</div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Details, { className: "Details", filePath: "src/app/components/account/orders/details/details.ts", lineNumber: 50 });
})();
export {
  Details
};
//# sourceMappingURL=chunk-XAEFZOH4.js.map
