import {
  CartService
} from "./chunk-FY7J3LUR.js";
import {
  Loader
} from "./chunk-JXGKNYOB.js";
import {
  AddressModal
} from "./chunk-MD6IUNWO.js";
import {
  countryCodes
} from "./chunk-XW3B4B4C.js";
import {
  Select2,
  Select2Module
} from "./chunk-3YTNHNM3.js";
import {
  AuthState
} from "./chunk-N7GM3VJ6.js";
import {
  CheckoutAction,
  PlaceOrderAction
} from "./chunk-LPQEB73E.js";
import {
  ApplyCouponAction,
  CouponState,
  GetCouponsAction,
  RemoveCouponAction
} from "./chunk-NKBQK7DM.js";
import {
  CartState
} from "./chunk-OKT2D4TP.js";
import {
  ClearCartAction
} from "./chunk-HD3MPZTG.js";
import {
  Breadcrumb
} from "./chunk-3DSWFFIY.js";
import "./chunk-YNKOI4V7.js";
import "./chunk-DXIDFC26.js";
import {
  AccountState,
  CreateAddressAction,
  GetAddressesAction
} from "./chunk-ROK6B4C2.js";
import {
  Button
} from "./chunk-6I2UIIRS.js";
import "./chunk-OE35GDC6.js";
import "./chunk-RWFLVE5E.js";
import "./chunk-LWNWQPUU.js";
import "./chunk-6R3AQVTF.js";
import "./chunk-HBLN46Q5.js";
import "./chunk-G25K32MJ.js";
import {
  NgbModal
} from "./chunk-MLCQBQYT.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-MXUZ2ZBZ.js";
import {
  CurrencySymbolPipe
} from "./chunk-3R3C7ZXW.js";
import {
  GetSettingOptionAction,
  SettingState
} from "./chunk-TMCH2Z3I.js";
import {
  NoData
} from "./chunk-O32MIEQN.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PCGC3M7T.js";
import "./chunk-4LUQBUB6.js";
import {
  Store
} from "./chunk-6YJBSKCB.js";
import {
  AsyncPipe,
  UpperCasePipe,
  isPlatformBrowser
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  Input,
  Output,
  PLATFORM_ID,
  filter,
  inject,
  input,
  output,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/components/shop/checkout/delivery-block/delivery-block.ts
var _forTrack0 = ($index, $item) => $item.title;
function DeliveryBlock_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "input", 8);
    \u0275\u0275domListener("change", function DeliveryBlock_Conditional_2_Template_input_change_5_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeliveryDescription(((tmp_2_0 = ctx_r1.setting()) == null ? null : tmp_2_0.delivery == null ? null : tmp_2_0.delivery.default == null ? null : tmp_2_0.delivery.default.title) + " | " + ((tmp_2_0 = ctx_r1.setting()) == null ? null : tmp_2_0.delivery == null ? null : tmp_2_0.delivery.default == null ? null : tmp_2_0.delivery.default.description), "standard"));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "label", 9);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("checked", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (tmp_2_0 = ctx_r1.setting()) == null ? null : tmp_2_0.delivery == null ? null : tmp_2_0.delivery.default == null ? null : tmp_2_0.delivery.default.title, " | ", (tmp_2_0 = ctx_r1.setting()) == null ? null : tmp_2_0.delivery == null ? null : tmp_2_0.delivery.default == null ? null : tmp_2_0.delivery.default.description, " ");
  }
}
function DeliveryBlock_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 10)(5, "input", 11);
    \u0275\u0275domListener("change", function DeliveryBlock_Conditional_3_Template_input_change_5_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeliveryDescription(((tmp_2_0 = ctx_r1.setting()) == null ? null : tmp_2_0.delivery == null ? null : tmp_2_0.delivery.same_day == null ? null : tmp_2_0.delivery.same_day.title) + " | " + ((tmp_2_0 = ctx_r1.setting()) == null ? null : tmp_2_0.delivery == null ? null : tmp_2_0.delivery.same_day == null ? null : tmp_2_0.delivery.same_day.description), "same_day"));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "label", 12);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", (tmp_1_0 = ctx_r1.setting()) == null ? null : tmp_1_0.delivery == null ? null : tmp_1_0.delivery.same_day == null ? null : tmp_1_0.delivery.same_day.title, " | ", (tmp_1_0 = ctx_r1.setting()) == null ? null : tmp_1_0.delivery == null ? null : tmp_1_0.delivery.same_day == null ? null : tmp_1_0.delivery.same_day.description, " ");
  }
}
function DeliveryBlock_Conditional_4_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li", 17);
    \u0275\u0275domListener("click", function DeliveryBlock_Conditional_4_For_9_Template_li_click_0_listener() {
      const ctx_r4 = \u0275\u0275restoreView(_r4);
      const intervals_r6 = ctx_r4.$implicit;
      const \u0275$index_52_r7 = ctx_r4.$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDeliveryInterval(intervals_r6.description, \u0275$index_52_r7 + 1));
    });
    \u0275\u0275domElementStart(1, "a", 18);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const intervals_r6 = ctx.$implicit;
    const \u0275$index_52_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedIndex && \u0275$index_52_r7 + 1 === ctx_r1.selectedIndex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(intervals_r6.description);
  }
}
function DeliveryBlock_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div")(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "ul");
    \u0275\u0275repeaterCreate(8, DeliveryBlock_Conditional_4_For_9_Template, 3, 3, "li", 16, _forTrack0);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.deliveryType && ctx_r1.deliveryType === "same_day");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 3, "select_timing_slot"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_3_0 = ctx_r1.setting()) == null ? null : tmp_3_0.delivery == null ? null : tmp_3_0.delivery.same_day_intervals);
  }
}
var DeliveryBlock = class _DeliveryBlock {
  constructor() {
    this.setting = input(...ngDevMode ? [void 0, { debugName: "setting" }] : []);
    this.selectDelivery = output();
    this.deliveryType = null;
    this.delivery_description = null;
    this.delivery_interval = null;
  }
  ngOnInit() {
    const setting = this.setting();
    if (setting?.delivery) {
      let delivery = {
        delivery_description: setting.delivery?.default?.title + " | " + setting.delivery?.default?.description,
        delivery_interval: this.delivery_interval
      };
      this.selectDelivery.emit(delivery);
    }
  }
  setDeliveryDescription(value, type) {
    this.delivery_description = value;
    this.deliveryType = type;
    let delivery = {
      delivery_description: this.delivery_description,
      delivery_interval: this.delivery_interval
    };
    this.selectDelivery.emit(delivery);
  }
  setDeliveryInterval(value, index) {
    this.selectedIndex = index;
    this.delivery_interval = value;
    let delivery = {
      delivery_description: this.delivery_description,
      delivery_interval: this.delivery_interval
    };
    this.selectDelivery.emit(delivery);
  }
  static {
    this.\u0275fac = function DeliveryBlock_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeliveryBlock)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryBlock, selectors: [["app-delivery-block"]], inputs: { setting: [1, "setting"] }, outputs: { selectDelivery: "selectDelivery" }, decls: 5, vars: 3, consts: [[1, "checkout-detail"], [1, "row", "g-4"], [1, "col-xxl-6"], [1, "col-12", "future-box", 3, "show"], [1, "delivery-option"], [1, "delivery-category"], [1, "shipment-detail", "w-100"], [1, "form-check", "custom-form-check", "hide-check-box"], ["type", "radio", "name", "standard", "id", "standard", 1, "form-check-input", 3, "change", "checked"], ["for", "standard", 1, "form-check-label"], [1, "form-check", "mb-0", "custom-form-check", "show-box-checked"], ["type", "radio", "name", "standard", "id", "future", 1, "form-check-input", 3, "change"], ["for", "future", 1, "form-check-label"], [1, "col-12", "future-box"], [1, "future-option"], [1, "delivery-items"], [3, "active"], [3, "click"], ["href", "javascript:void(0)"]], template: function DeliveryBlock_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, DeliveryBlock_Conditional_2_Template, 8, 3, "div", 2);
        \u0275\u0275conditionalCreate(3, DeliveryBlock_Conditional_3_Template, 8, 2, "div", 2);
        \u0275\u0275conditionalCreate(4, DeliveryBlock_Conditional_4_Template, 10, 5, "div", 3);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_0_0 = ctx.setting()) == null ? null : tmp_0_0.delivery) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_1_0 = ctx.setting()) == null ? null : tmp_1_0.delivery == null ? null : tmp_1_0.delivery.same_day_delivery) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_2_0 = ctx.setting()) == null ? null : tmp_2_0.delivery == null ? null : tmp_2_0.delivery.same_day_delivery) ? 4 : -1);
      }
    }, dependencies: [TranslateModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeliveryBlock, [{
    type: Component,
    args: [{ selector: "app-delivery-block", imports: [TranslateModule], template: `<div class="checkout-detail">
  <div class="row g-4">
    @if(setting()?.delivery){
    <div class="col-xxl-6">
      <div class="delivery-option">
        <div class="delivery-category">
          <div class="shipment-detail w-100">
            <div class="form-check custom-form-check hide-check-box">
              <input
                class="form-check-input"
                type="radio"
                name="standard"
                id="standard"
                [checked]="true"
                (change)="setDeliveryDescription(setting()?.delivery?.default?.title+ ' | ' +setting()?.delivery?.default?.description, 'standard')"
              />
              <label class="form-check-label" for="standard">
                {{ setting()?.delivery?.default?.title }} | {{
                setting()?.delivery?.default?.description }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    } @if(setting()?.delivery?.same_day_delivery){
    <div class="col-xxl-6">
      <div class="delivery-option">
        <div class="delivery-category">
          <div class="shipment-detail w-100">
            <div class="form-check mb-0 custom-form-check show-box-checked">
              <input
                class="form-check-input"
                type="radio"
                name="standard"
                id="future"
                (change)="setDeliveryDescription(setting()?.delivery?.same_day?.title+ ' | ' +setting()?.delivery?.same_day?.description, 'same_day')"
              />
              <label class="form-check-label" for="future">
                {{ setting()?.delivery?.same_day?.title }} | {{
                setting()?.delivery?.same_day?.description }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    } @if(setting()?.delivery?.same_day_delivery){
    <div class="col-12 future-box" [class.show]="deliveryType && deliveryType === 'same_day'">
      <div class="future-option">
        <div class="delivery-items">
          <div>
            <h4>{{ 'select_timing_slot' | translate }}:</h4>
            <ul>
              @for(intervals of setting()?.delivery?.same_day_intervals; track intervals.title; let
              i = $index){
              <li
                [class.active]="selectedIndex && (i + 1) === selectedIndex"
                (click)="setDeliveryInterval(intervals.description!, (i + 1))"
              >
                <a href="javascript:void(0)">{{intervals.description}}</a>
              </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
    }
  </div>
</div>
` }]
  }], null, { setting: [{ type: Input, args: [{ isSignal: true, alias: "setting", required: false }] }], selectDelivery: [{ type: Output, args: ["selectDelivery"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryBlock, { className: "DeliveryBlock", filePath: "src/app/components/shop/checkout/delivery-block/delivery-block.ts", lineNumber: 13 });
})();

// src/app/components/shop/checkout/payment-block/payment-block.ts
var _forTrack02 = ($index, $item) => $item.name;
function PaymentBlock_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "input", 6);
    \u0275\u0275domListener("change", function PaymentBlock_For_3_Template_input_change_4_listener() {
      const payment_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.set(payment_r2.name));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "label", 7);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const payment_r2 = ctx.$implicit;
    const \u0275$index_5_r4 = ctx.$index;
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("checked", \u0275$index_5_r4 === 0)("id", payment_r2.name);
    \u0275\u0275advance();
    \u0275\u0275domProperty("htmlFor", \u0275\u0275interpolate(payment_r2.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, payment_r2.title), " ");
  }
}
var PaymentBlock = class _PaymentBlock {
  constructor() {
    this.setting = input(...ngDevMode ? [void 0, { debugName: "setting" }] : []);
    this.selectPaymentMethod = output();
    this.paymentMethods = [
      { name: "cash_on_delivery", title: "Cash on Delivery" },
      { name: "mobile_payment", title: "Mobile Payment" }
    ];
  }
  ngOnInit() {
    this.selectPaymentMethod.emit(this.paymentMethods[0].name);
  }
  set(value) {
    this.selectPaymentMethod.emit(value);
  }
  static {
    this.\u0275fac = function PaymentBlock_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentBlock)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentBlock, selectors: [["app-payment-block"]], inputs: { setting: [1, "setting"] }, outputs: { selectPaymentMethod: "selectPaymentMethod" }, decls: 4, vars: 0, consts: [[1, "checkout-detail"], [1, "row", "g-md-4", "g-sm-3", "g-2"], [1, "col-sm-6"], [1, "payment-option"], [1, "payment-category", "w-100"], [1, "form-check", "custom-form-check", "hide-check-box", "w-100"], ["type", "radio", "name", "payment_method", 1, "form-check-input", 3, "change", "checked", "id"], [1, "form-check-label", 3, "for"]], template: function PaymentBlock_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275repeaterCreate(2, PaymentBlock_For_3_Template, 8, 7, "div", 2, _forTrack02);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.paymentMethods);
      }
    }, dependencies: [UpperCasePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentBlock, [{
    type: Component,
    args: [{ selector: "app-payment-block", imports: [UpperCasePipe], template: '<div class="checkout-detail">\n  <div class="row g-md-4 g-sm-3 g-2">\n    @for(payment of paymentMethods; track payment.name; let i = $index){\n    <div class="col-sm-6">\n      <div class="payment-option">\n        <div class="payment-category w-100">\n          <div class="form-check custom-form-check hide-check-box w-100">\n            <input\n              class="form-check-input"\n              type="radio"\n              name="payment_method"\n              [checked]="i === 0"\n              [id]="payment.name"\n              (change)="set(payment.name)"\n            />\n            <label class="form-check-label" for="{{ payment.name }}">\n              {{ payment.title | uppercase }}\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    }\n  </div>\n</div>\n' }]
  }], null, { setting: [{ type: Input, args: [{ isSignal: true, alias: "setting", required: false }] }], selectPaymentMethod: [{ type: Output, args: ["selectPaymentMethod"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentBlock, { className: "PaymentBlock", filePath: "src/app/components/shop/checkout/payment-block/payment-block.ts", lineNumber: 12 });
})();

// src/app/components/shop/checkout/checkout.ts
var _c0 = () => [];
var _c1 = () => ({ standalone: true });
var _forTrack03 = ($index, $item) => $item.id;
function Checkout_Conditional_10_Conditional_28_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("iti-flag ", data_r2 == null ? null : data_r2.class));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.code);
  }
}
function Checkout_Conditional_10_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select2", 26);
    \u0275\u0275template(1, Checkout_Conditional_10_Conditional_28_ng_template_1_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r3 = \u0275\u0275reference(2);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("templates", template_r3)("data", ctx_r3.codes);
  }
}
function Checkout_Conditional_10_Conditional_84_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("iti-flag ", data_r5 == null ? null : data_r5.class));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5 == null ? null : data_r5.code);
  }
}
function Checkout_Conditional_10_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select2", 26);
    \u0275\u0275template(1, Checkout_Conditional_10_Conditional_84_ng_template_1_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r6 = \u0275\u0275reference(2);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("templates", template_r6)("data", ctx_r3.codes);
  }
}
function Checkout_Conditional_10_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 43);
    \u0275\u0275element(2, "input", 44);
    \u0275\u0275elementStart(3, "label", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "same_as_shipping"));
  }
}
function Checkout_Conditional_10_Conditional_95_Conditional_46_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("iti-flag ", data_r7 == null ? null : data_r7.class));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7 == null ? null : data_r7.code);
  }
}
function Checkout_Conditional_10_Conditional_95_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select2", 26);
    \u0275\u0275template(1, Checkout_Conditional_10_Conditional_95_Conditional_46_ng_template_1_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r8 = \u0275\u0275reference(2);
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("templates", template_r8)("data", ctx_r3.codes);
  }
}
function Checkout_Conditional_10_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 29)(2, "div", 20)(3, "label", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 30);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "div", 20)(10, "label", 21);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 31);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 19)(16, "div", 20)(17, "label", 21);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 19)(22, "div", 20)(23, "label", 21);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "label", 21);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 34);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 19)(35, "div", 20)(36, "label", 21);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 35);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 24)(42, "div", 25)(43, "label", 21);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(46, Checkout_Conditional_10_Conditional_95_Conditional_46_Template, 3, 2, "select2", 26);
    \u0275\u0275element(47, "input", 27);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 18, "title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(7, 20, "enter_name")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 22, "address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(14, 24, "enter_address")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 26, "country"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 28, "state"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 30, "city"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(33, 32, "enter_city")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 34, "pincode"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(40, 36, "enter_pincode")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 38, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isBrowser ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(48, 40, "enter_phone")));
  }
}
function Checkout_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 15)(2, "div", 16)(3, "span", 17);
    \u0275\u0275text(4, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18)(9, "div", 19)(10, "div", 20)(11, "label", 21);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 22);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 19)(17, "div", 20)(18, "label", 21);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 23);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 24)(24, "div", 25)(25, "label", 21);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, Checkout_Conditional_10_Conditional_28_Template, 3, 2, "select2", 26);
    \u0275\u0275element(29, "input", 27);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 15)(32, "div", 16)(33, "span", 17);
    \u0275\u0275text(34, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h3");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 28)(39, "div", 29)(40, "div", 20)(41, "label", 21);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 30);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 29)(47, "div", 20)(48, "label", 21);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 31);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 19)(54, "div", 20)(55, "label", 21);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 19)(60, "div", 20)(61, "label", 21);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 19)(66, "div", 20)(67, "label", 21);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 34);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 19)(73, "div", 20)(74, "label", 21);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 35);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 24)(80, "div", 25)(81, "label", 21);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(84, Checkout_Conditional_10_Conditional_84_Template, 3, 2, "select2", 26);
    \u0275\u0275element(85, "input", 27);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(87, "div", 15)(88, "div", 16)(89, "span", 17);
    \u0275\u0275text(90, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "h3");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(94, Checkout_Conditional_10_Conditional_94_Template, 6, 3, "div", 36);
    \u0275\u0275conditionalCreate(95, Checkout_Conditional_10_Conditional_95_Template, 49, 42, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 15)(97, "div", 16)(98, "span", 17);
    \u0275\u0275text(99, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "h3");
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "app-delivery-block", 38);
    \u0275\u0275pipe(104, "async");
    \u0275\u0275listener("selectDelivery", function Checkout_Conditional_10_Template_app_delivery_block_selectDelivery_103_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectDelivery($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 15)(106, "div", 16)(107, "span", 17);
    \u0275\u0275text(108, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "h3");
    \u0275\u0275text(110);
    \u0275\u0275pipe(111, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "app-payment-block", 39);
    \u0275\u0275pipe(113, "async");
    \u0275\u0275listener("selectPaymentMethod", function Checkout_Conditional_10_Template_app_payment_block_selectPaymentMethod_112_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectPaymentMethod($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_25_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 37, "account_details"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 39, "name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(15, 41, "enter_name")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 43, "email"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(22, 45, "enter_email_address")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 47, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isBrowser ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(30, 49, "enter_phone")));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 51, "shipping_details"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 53, "title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(45, 55, "enter_name")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 57, "address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(52, 59, "enter_address")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 61, "country"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 63, "state"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 65, "city"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(71, 67, "enter_city")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 69, "pincode"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(78, 71, "enter_pincode")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 73, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isBrowser ? 84 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(86, 75, "enter_phone")));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 77, "billing_details"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r3.form.controls["shipping_address"] == null ? null : ctx_r3.form.controls["shipping_address"].valid) ? 94 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_25_0 = ctx_r3.form.get("billing_address.same_shipping")) == null ? null : tmp_25_0.value) ? 95 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 79, "delivery_options"));
    \u0275\u0275advance(2);
    \u0275\u0275property("setting", \u0275\u0275pipeBind1(104, 81, ctx_r3.setting$));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(111, 83, "payment_options"));
    \u0275\u0275advance(2);
    \u0275\u0275property("setting", \u0275\u0275pipeBind1(113, 85, ctx_r3.setting$));
  }
}
function Checkout_Conditional_13_Conditional_1_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const addr_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", addr_r12.state_name);
  }
}
function Checkout_Conditional_13_Conditional_1_For_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const addr_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", addr_r12.country_name);
  }
}
function Checkout_Conditional_13_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 50)(1, "input", 51);
    \u0275\u0275listener("change", function Checkout_Conditional_13_Conditional_1_For_9_Template_input_change_1_listener() {
      const addr_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectSavedShippingAddress(addr_r12));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 52)(3, "div", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54);
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, Checkout_Conditional_13_Conditional_1_For_9_Conditional_7_Template, 1, 1);
    \u0275\u0275conditionalCreate(8, Checkout_Conditional_13_Conditional_1_For_9_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const addr_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r3.selectedShippingAddress == null ? null : ctx_r3.selectedShippingAddress.id) === addr_r12.id);
    \u0275\u0275advance();
    \u0275\u0275property("checked", (ctx_r3.selectedShippingAddress == null ? null : ctx_r3.selectedShippingAddress.id) === addr_r12.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(addr_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", addr_r12.street, ", ", addr_r12.city, ", ", addr_r12.pincode);
    \u0275\u0275advance();
    \u0275\u0275conditional(addr_r12.state_name ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(addr_r12.country_name ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", addr_r12.country_code, " ", addr_r12.phone);
  }
}
function Checkout_Conditional_13_Conditional_1_Conditional_15_Conditional_46_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r14 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("iti-flag ", data_r14 == null ? null : data_r14.class));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r14 == null ? null : data_r14.code);
  }
}
function Checkout_Conditional_13_Conditional_1_Conditional_15_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select2", 26);
    \u0275\u0275template(1, Checkout_Conditional_13_Conditional_1_Conditional_15_Conditional_46_ng_template_1_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r15 = \u0275\u0275reference(2);
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("templates", template_r15)("data", ctx_r3.codes);
  }
}
function Checkout_Conditional_13_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 20)(3, "label", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 30);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "div", 20)(10, "label", 21);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 31);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 19)(16, "div", 20)(17, "label", 21);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 19)(22, "div", 20)(23, "label", 21);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "label", 21);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 34);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 19)(35, "div", 20)(36, "label", 21);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 35);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 24)(42, "div", 25)(43, "label", 21);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(46, Checkout_Conditional_13_Conditional_1_Conditional_15_Conditional_46_Template, 3, 2, "select2", 26);
    \u0275\u0275element(47, "input", 56);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 57)(50, "input", 58);
    \u0275\u0275listener("change", function Checkout_Conditional_13_Conditional_1_Conditional_15_Template_input_change_50_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.saveShippingAddress = $event.target.checked);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "label", 59);
    \u0275\u0275text(52, "Save for future orders");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 19, "title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(7, 21, "enter_name")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 23, "address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(14, 25, "enter_address")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 27, "country"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 29, "state"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 31, "city"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(33, 33, "enter_city")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 35, "pincode"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(40, 37, "enter_pincode")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 39, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isBrowser ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(48, 41, "enter_phone")));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r3.saveShippingAddress);
  }
}
function Checkout_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 46);
    \u0275\u0275repeaterCreate(8, Checkout_Conditional_13_Conditional_1_For_9_Template, 11, 11, "label", 47, _forTrack03);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementStart(11, "button", 48);
    \u0275\u0275listener("click", function Checkout_Conditional_13_Conditional_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAddressModal("shipping"));
    });
    \u0275\u0275element(12, "i", 49);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Add New Address");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, Checkout_Conditional_13_Conditional_1_Conditional_15_Template, 53, 43);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "shipping_details"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 4, ctx_r3.addresses$) ?? \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r3.showNewShippingForm || !((tmp_4_0 = \u0275\u0275pipeBind1(16, 6, ctx_r3.addresses$)) == null ? null : tmp_4_0.length) ? 15 : -1);
  }
}
function Checkout_Conditional_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 43);
    \u0275\u0275element(2, "input", 60);
    \u0275\u0275elementStart(3, "label", 61);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "same_as_shipping"));
  }
}
function Checkout_Conditional_13_Conditional_12_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const addr_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", addr_r18.state_name);
  }
}
function Checkout_Conditional_13_Conditional_12_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const addr_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", addr_r18.country_name);
  }
}
function Checkout_Conditional_13_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 50)(1, "input", 62);
    \u0275\u0275listener("change", function Checkout_Conditional_13_Conditional_12_For_2_Template_input_change_1_listener() {
      const addr_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectSavedBillingAddress(addr_r18));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 52)(3, "div", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54);
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, Checkout_Conditional_13_Conditional_12_For_2_Conditional_7_Template, 1, 1);
    \u0275\u0275conditionalCreate(8, Checkout_Conditional_13_Conditional_12_For_2_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const addr_r18 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r3.selectedBillingAddress == null ? null : ctx_r3.selectedBillingAddress.id) === addr_r18.id);
    \u0275\u0275advance();
    \u0275\u0275property("checked", (ctx_r3.selectedBillingAddress == null ? null : ctx_r3.selectedBillingAddress.id) === addr_r18.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(addr_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", addr_r18.street, ", ", addr_r18.city, ", ", addr_r18.pincode);
    \u0275\u0275advance();
    \u0275\u0275conditional(addr_r18.state_name ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(addr_r18.country_name ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", addr_r18.country_code, " ", addr_r18.phone);
  }
}
function Checkout_Conditional_13_Conditional_12_Conditional_8_Conditional_46_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r20 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("iti-flag ", data_r20 == null ? null : data_r20.class));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r20 == null ? null : data_r20.code);
  }
}
function Checkout_Conditional_13_Conditional_12_Conditional_8_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select2", 26);
    \u0275\u0275template(1, Checkout_Conditional_13_Conditional_12_Conditional_8_Conditional_46_ng_template_1_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r21 = \u0275\u0275reference(2);
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("templates", template_r21)("data", ctx_r3.codes);
  }
}
function Checkout_Conditional_13_Conditional_12_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 29)(2, "div", 20)(3, "label", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 30);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "div", 20)(10, "label", 21);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 31);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 19)(16, "div", 20)(17, "label", 21);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 19)(22, "div", 20)(23, "label", 21);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "label", 21);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 34);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 19)(35, "div", 20)(36, "label", 21);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 35);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 24)(42, "div", 25)(43, "label", 21);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(46, Checkout_Conditional_13_Conditional_12_Conditional_8_Conditional_46_Template, 3, 2, "select2", 26);
    \u0275\u0275element(47, "input", 63);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 57)(50, "input", 64);
    \u0275\u0275listener("change", function Checkout_Conditional_13_Conditional_12_Conditional_8_Template_input_change_50_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.saveBillingAddress = $event.target.checked);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "label", 65);
    \u0275\u0275text(52, "Save for future orders");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 19, "title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(7, 21, "enter_name")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 23, "address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(14, 25, "enter_address")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 27, "country"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 29, "state"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 31, "city"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(33, 33, "enter_city")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 35, "pincode"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(40, 37, "enter_pincode")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 39, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isBrowser ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(48, 41, "enter_phone")));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r3.saveBillingAddress);
  }
}
function Checkout_Conditional_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275repeaterCreate(1, Checkout_Conditional_13_Conditional_12_For_2_Template, 11, 11, "label", 47, _forTrack03);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "button", 48);
    \u0275\u0275listener("click", function Checkout_Conditional_13_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAddressModal("billing"));
    });
    \u0275\u0275element(5, "i", 49);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Add New Address");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, Checkout_Conditional_13_Conditional_12_Conditional_8_Template, 53, 43);
    \u0275\u0275pipe(9, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r3.addresses$) ?? \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r3.showNewBillingForm || !((tmp_3_0 = \u0275\u0275pipeBind1(9, 3, ctx_r3.addresses$)) == null ? null : tmp_3_0.length) ? 8 : -1);
  }
}
function Checkout_Conditional_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "app-delivery-block", 38);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275listener("selectDelivery", function Checkout_Conditional_13_Conditional_13_Template_app_delivery_block_selectDelivery_7_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectDelivery($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "delivery_options"));
    \u0275\u0275advance(2);
    \u0275\u0275property("setting", \u0275\u0275pipeBind1(8, 4, ctx_r3.setting$));
  }
}
function Checkout_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, Checkout_Conditional_13_Conditional_1_Template, 17, 9, "div", 15);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, Checkout_Conditional_13_Conditional_11_Template, 6, 3, "div", 36);
    \u0275\u0275conditionalCreate(12, Checkout_Conditional_13_Conditional_12_Template, 10, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, Checkout_Conditional_13_Conditional_13_Template, 9, 6, "div", 15);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementStart(15, "div", 15)(16, "div", 16)(17, "span", 17);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h3");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "app-payment-block", 39);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275listener("selectPaymentMethod", function Checkout_Conditional_13_Template_app_payment_block_selectPaymentMethod_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectPaymentMethod($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(2, 9, ctx_r3.cartDigital$) ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 11, ctx_r3.cartDigital$) ? "1" : "2");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, "billing_details"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r3.form.controls["shipping_address"] == null ? null : ctx_r3.form.controls["shipping_address"].valid) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_5_0 = ctx_r3.form.get("billing_address.same_shipping")) == null ? null : tmp_5_0.value) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(14, 15, ctx_r3.cartDigital$) ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 17, ctx_r3.cartDigital$) ? "2" : "4");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 19, "payment_options"));
    \u0275\u0275advance(2);
    \u0275\u0275property("setting", \u0275\u0275pipeBind1(24, 21, ctx_r3.setting$));
  }
}
function Checkout_Conditional_17_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 70)(1, "div", 83);
    \u0275\u0275element(2, "img", 84);
    \u0275\u0275elementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 86)(6, "p", 87);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 88);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (item_r24 == null ? null : item_r24.variation) && (item_r24 == null ? null : item_r24.variation == null ? null : item_r24.variation.variation_image) ? item_r24 == null ? null : item_r24.variation == null ? null : item_r24.variation.variation_image == null ? null : item_r24.variation.variation_image.original_url : (item_r24 == null ? null : item_r24.product == null ? null : item_r24.product.product_thumbnail) ? item_r24 == null ? null : item_r24.product == null ? null : item_r24.product.product_thumbnail == null ? null : item_r24.product.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r24.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r24 == null ? null : item_r24.variation) ? item_r24 == null ? null : item_r24.variation == null ? null : item_r24.variation.name : item_r24 == null ? null : item_r24.product == null ? null : item_r24.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, ((item_r24 == null ? null : item_r24.variation) ? item_r24.variation.sale_price : (item_r24 == null ? null : item_r24.wholesale_price) ? item_r24 == null ? null : item_r24.wholesale_price : item_r24 == null ? null : item_r24.product == null ? null : item_r24.product.sale_price) * item_r24.quantity), " ");
  }
}
function Checkout_Conditional_17_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275element(2, "i", 93);
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 94);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currencySymbol");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 95);
    \u0275\u0275listener("click", function Checkout_Conditional_17_Conditional_12_Conditional_5_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeCoupon());
    });
    \u0275\u0275element(10, "i", 96);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const applied_r26 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(applied_r26.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Saving ", \u0275\u0275pipeBind1(8, 2, applied_r26.discount_amount));
  }
}
function Checkout_Conditional_17_Conditional_12_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "i", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function Checkout_Conditional_17_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function Checkout_Conditional_17_Conditional_12_Conditional_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.couponInput, $event) || (ctx_r3.couponInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function Checkout_Conditional_17_Conditional_12_Conditional_7_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.applyCoupon());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-button", 99);
    \u0275\u0275listener("click", function Checkout_Conditional_17_Conditional_12_Conditional_7_Template_app_button_click_2_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.applyCoupon());
    });
    \u0275\u0275text(3, "Apply");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, Checkout_Conditional_17_Conditional_12_Conditional_7_Conditional_4_Template, 3, 1, "div", 100);
    \u0275\u0275pipe(5, "async");
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.couponInput);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c1));
    \u0275\u0275advance();
    \u0275\u0275classMap("btn btn-solid coupon-apply-btn");
    \u0275\u0275property("spinner", ctx_r3.applyingCoupon)("id", "apply_coupon_btn");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_10_0 = \u0275\u0275pipeBind1(5, 7, ctx_r3.couponError$)) ? 4 : -1, tmp_10_0);
  }
}
function Checkout_Conditional_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 89);
    \u0275\u0275element(2, "i", 90);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Promo Code");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, Checkout_Conditional_17_Conditional_12_Conditional_5_Template, 11, 4, "div", 91);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275conditionalBranchCreate(7, Checkout_Conditional_17_Conditional_12_Conditional_7_Template, 6, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_4_0 = \u0275\u0275pipeBind1(6, 1, ctx_r3.appliedCoupon$)) ? 5 : 7, tmp_4_0);
  }
}
function Checkout_Conditional_17_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span");
    \u0275\u0275element(2, "i", 102);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 103);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const applied_r28 = \u0275\u0275readContextLet(17);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", applied_r28.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212", \u0275\u0275pipeBind1(6, 2, applied_r28.discount_amount));
  }
}
function Checkout_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 68);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ul", 69);
    \u0275\u0275repeaterCreate(9, Checkout_Conditional_17_For_10_Template, 11, 6, "li", 70, _forTrack03);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, Checkout_Conditional_17_Conditional_12_Template, 8, 3, "div", 71);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementStart(14, "div", 72);
    \u0275\u0275declareLet(15);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275declareLet(17);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementStart(19, "div", 73)(20, "span");
    \u0275\u0275text(21, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, Checkout_Conditional_17_Conditional_25_Template, 7, 4, "div", 74);
    \u0275\u0275elementStart(26, "div", 73)(27, "span");
    \u0275\u0275text(28, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 75);
    \u0275\u0275text(30, "Free");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "div", 76);
    \u0275\u0275elementStart(32, "div", 77)(33, "span");
    \u0275\u0275text(34, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 78);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "currencySymbol");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "app-button", 79);
    \u0275\u0275listener("click", function Checkout_Conditional_17_Template_app_button_click_38_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.placeorder());
    });
    \u0275\u0275element(39, "i", 80);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 81);
    \u0275\u0275element(43, "i", 82);
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Secure & Encrypted Checkout");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "summary_order"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (tmp_2_0 = \u0275\u0275pipeBind1(7, 14, ctx_r3.cartItem$)) == null ? null : tmp_2_0.length, " item(s)");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 16, ctx_r3.cartItem$));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(13, 18, ctx_r3.accessToken$) ? 12 : -1);
    const cartItems_r29 = \u0275\u0275pipeBind1(16, 20, ctx_r3.cartItem$) ?? \u0275\u0275pureFunction0(31, _c0);
    \u0275\u0275advance(5);
    const applied_r30 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(18, 22, ctx_r3.appliedCoupon$));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 25, ctx_r3.getCartSubTotal(cartItems_r29)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(applied_r30 ? 25 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 27, ctx_r3.getOrderTotal(cartItems_r29, applied_r30)));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn btn-solid place-order-btn w-100");
    \u0275\u0275property("id", "place_order_btn")("spinner", ctx_r3.loading)("disabled", !ctx_r3.form.valid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 29, "place_order"), " ");
  }
}
function Checkout_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 104);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 4, "no_cart_item_desc"));
  }
}
var Checkout = class _Checkout {
  constructor() {
    this.store = inject(Store);
    this.formBuilder = inject(FormBuilder);
    this.cartService = inject(CartService);
    this.modal = inject(NgbModal);
    this.breadcrumb = {
      title: "Check-out",
      items: [{ label: "Check-out", active: true }]
    };
    this.user$ = inject(Store).select(AccountState.user);
    this.accessToken$ = inject(Store).select(AuthState.accessToken);
    this.cartItem$ = inject(Store).select(CartState.cartItems);
    this.setting$ = inject(Store).select(SettingState.setting);
    this.cartDigital$ = inject(Store).select(CartState.cartHasDigital);
    this.appliedCoupon$ = inject(Store).select(CouponState.appliedCoupon);
    this.couponError$ = inject(Store).select(CouponState.couponError);
    this.addresses$ = inject(Store).select(AccountState.addresses);
    this.couponInput = "";
    this.applyingCoupon = false;
    this.loading = false;
    this.codes = countryCodes;
    this.selectedShippingAddress = null;
    this.selectedBillingAddress = null;
    this.showNewShippingForm = false;
    this.showNewBillingForm = false;
    this.saveShippingAddress = false;
    this.saveBillingAddress = false;
    const platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);
    this.store.dispatch(new GetSettingOptionAction());
    this.store.dispatch(new GetCouponsAction());
    this.form = this.formBuilder.group({
      products: this.formBuilder.array([], [Validators.required]),
      coupon: new FormControl(""),
      delivery_description: new FormControl("", [Validators.required]),
      delivery_interval: new FormControl(""),
      payment_method: new FormControl("cash_on_delivery", [Validators.required]),
      shipping_address: new FormGroup({
        title: new FormControl("", [Validators.required]),
        street: new FormControl("", [Validators.required]),
        city: new FormControl("", [Validators.required]),
        phone: new FormControl("", [Validators.required]),
        pincode: new FormControl("", [Validators.required]),
        country_code: new FormControl("977", [Validators.required]),
        state_name: new FormControl(""),
        country_name: new FormControl("")
      }),
      billing_address: new FormGroup({
        same_shipping: new FormControl(false),
        title: new FormControl("", [Validators.required]),
        street: new FormControl("", [Validators.required]),
        city: new FormControl("", [Validators.required]),
        phone: new FormControl("", [Validators.required]),
        pincode: new FormControl("", [Validators.required]),
        country_code: new FormControl("977", [Validators.required]),
        state_name: new FormControl(""),
        country_name: new FormControl("")
      })
    });
    this.form.get("billing_address.same_shipping")?.valueChanges.subscribe((same) => {
      if (same) {
        const s = this.form.get("shipping_address")?.value;
        this.form.get("billing_address")?.patchValue({
          title: s.title,
          street: s.street,
          country_name: s.country_name,
          state_name: s.state_name,
          city: s.city,
          pincode: s.pincode,
          country_code: s.country_code,
          phone: s.phone
        });
      } else {
        this.form.get("billing_address")?.patchValue({
          title: "",
          street: "",
          country_name: "",
          state_name: "",
          city: "",
          pincode: "",
          country_code: "977",
          phone: ""
        });
      }
    });
    this.cartService.getUpdateQtyClickEvent().subscribe(() => this.products());
  }
  get productControl() {
    return this.form.get("products");
  }
  ngOnInit() {
    this.store.dispatch(new CheckoutAction(this.form.value));
    this.products();
    if (this.store.selectSnapshot((state) => state.auth?.access_token)) {
      this.store.dispatch(new GetAddressesAction());
      this.addresses$.pipe(filter((addrs) => !!addrs?.length), take(1)).subscribe((addrs) => {
        const defaultAddr = addrs.find((a) => a.is_default) ?? addrs[0];
        if (!this.selectedShippingAddress)
          this.selectSavedShippingAddress(defaultAddr);
        if (!this.selectedBillingAddress)
          this.selectSavedBillingAddress(defaultAddr);
      });
    }
  }
  products() {
    this.cartItem$.subscribe((items) => {
      this.productControl.clear();
      items.forEach((item) => this.productControl.push(this.formBuilder.group({
        product_id: new FormControl(item?.product_id, [Validators.required]),
        variation_id: new FormControl(item?.variation_id ?? ""),
        quantity: new FormControl(item?.quantity)
      })));
    });
  }
  // ── Totals computed from cart items ─────────────────────────────────────────
  getCartSubTotal(items) {
    return items.reduce((sum, item) => {
      const price = item.variation?.sale_price ?? item.wholesale_price ?? item.product?.sale_price ?? 0;
      return sum + price * item.quantity;
    }, 0);
  }
  getOrderTotal(items, applied) {
    return Math.max(0, this.getCartSubTotal(items) - (applied?.discount_amount ?? 0));
  }
  // ── Coupon ──────────────────────────────────────────────────────────────────
  applyCoupon() {
    const code = this.couponInput.trim().toUpperCase();
    if (!code)
      return;
    const items = this.store.selectSnapshot(CartState.cartItems);
    const subtotal = this.getCartSubTotal(items);
    this.applyingCoupon = true;
    this.store.dispatch(new ApplyCouponAction(code, subtotal)).subscribe({
      complete: () => {
        this.applyingCoupon = false;
        this.form.controls["coupon"].setValue(code);
      },
      error: () => {
        this.applyingCoupon = false;
      }
    });
  }
  removeCoupon() {
    this.store.dispatch(new RemoveCouponAction());
    this.couponInput = "";
    this.form.controls["coupon"].setValue("");
  }
  // ── Address selection ───────────────────────────────────────────────────────
  selectSavedShippingAddress(addr) {
    this.selectedShippingAddress = addr;
    this.showNewShippingForm = false;
    this.form.get("shipping_address")?.patchValue({
      title: addr.title,
      street: addr.street,
      city: addr.city,
      pincode: addr.pincode,
      phone: addr.phone,
      country_code: addr.country_code,
      country_name: addr.country_name ?? "",
      state_name: addr.state_name ?? ""
    });
  }
  useNewShippingAddress() {
    this.selectedShippingAddress = null;
    this.showNewShippingForm = true;
    this.form.get("shipping_address")?.reset();
    this.form.get("shipping_address.country_code")?.setValue("977");
  }
  selectSavedBillingAddress(addr) {
    this.selectedBillingAddress = addr;
    this.showNewBillingForm = false;
    this.form.get("billing_address")?.patchValue({
      same_shipping: false,
      title: addr.title,
      street: addr.street,
      city: addr.city,
      pincode: addr.pincode,
      phone: addr.phone,
      country_code: addr.country_code,
      country_name: addr.country_name ?? "",
      state_name: addr.state_name ?? ""
    });
  }
  useNewBillingAddress() {
    this.selectedBillingAddress = null;
    this.showNewBillingForm = true;
    this.form.get("billing_address")?.reset();
    this.form.get("billing_address.country_code")?.setValue("977");
  }
  openAddressModal(type) {
    const ref = this.modal.open(AddressModal, { centered: true, windowClass: "theme-modal-2" });
    ref.closed.subscribe((result) => {
      if (result === "saved") {
        this.addresses$.pipe(filter((addrs) => !!addrs?.length), take(1)).subscribe((addrs) => {
          const newest = addrs[addrs.length - 1];
          type === "shipping" ? this.selectSavedShippingAddress(newest) : this.selectSavedBillingAddress(newest);
        });
      }
    });
  }
  // ── Delivery / Payment ──────────────────────────────────────────────────────
  selectDelivery(value) {
    this.form.controls["delivery_description"].setValue(value?.delivery_description);
    this.form.controls["delivery_interval"].setValue(value?.delivery_interval);
  }
  selectPaymentMethod(value) {
    this.form.controls["payment_method"].setValue(value);
  }
  // ── Place Order ─────────────────────────────────────────────────────────────
  placeorder() {
    if (this.form.valid) {
      const formValue = __spreadValues({}, this.form.value);
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
  static {
    this.\u0275fac = function Checkout_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Checkout)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Checkout, selectors: [["app-checkout"]], decls: 20, vars: 13, consts: [["template", ""], [3, "breadcrumb"], [1, "section-b-space", "checkout-section-2"], [1, "container"], [1, "checkout-page"], [1, "checkout-form"], [3, "formGroup"], [1, "row", "g-sm-4", "g-3"], [1, "col-lg-7"], [1, "left-sidebar-checkout"], [1, "checkout-detail-box"], [1, "checkout-form-section"], [1, "col-lg-5"], [1, "checkout-right-box"], [3, "class", "image", "text"], [1, "checkout-section-card"], [1, "checkout-section-header"], [1, "step-badge"], [1, "row", "g-sm-3", "g-2"], [1, "col-sm-6"], [1, "form-box"], [1, "form-label"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], [1, "col-12", "phone-field"], [1, "form-box", "position-relative"], ["formControlName", "country_code", 1, "custom-select", "intl-tel-input", 3, "templates", "data"], ["type", "tel", "formControlName", "phone", 1, "form-control", "intl-input-padding", 3, "placeholder"], ["formGroupName", "shipping_address", 1, "row", "g-sm-3", "g-2"], [1, "col-12"], ["type", "text", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "street", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "country_name", "placeholder", "e.g. Nepal", 1, "form-control"], ["type", "text", "formControlName", "state_name", "placeholder", "e.g. Bagmati", 1, "form-control"], ["type", "text", "formControlName", "city", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "pincode", 1, "form-control", 3, "placeholder"], ["formGroupName", "billing_address", 1, "mb-3"], ["formGroupName", "billing_address", 1, "row", "g-sm-3", "g-2"], [3, "selectDelivery", "setting"], [3, "selectPaymentMethod", "setting"], [1, "country"], [1, "flag-box"], [1, "dial-code"], [1, "form-check"], ["type", "checkbox", "id", "same_shipping", "formControlName", "same_shipping", 1, "form-check-input"], ["for", "same_shipping", 1, "form-check-label"], [1, "address-radio-list", "mb-3"], [1, "address-radio-item", 3, "selected"], ["type", "button", 1, "address-radio-add", 3, "click"], [1, "ri-add-circle-line"], [1, "address-radio-item"], ["type", "radio", "name", "shipping_addr_radio", 3, "change", "checked"], [1, "address-radio-content"], [1, "address-radio-title"], [1, "address-radio-detail"], [1, "address-radio-phone"], ["type", "tel", "formControlName", "phone", "name", "sphone", 1, "form-control", "intl-input-padding", 3, "placeholder"], [1, "form-check", "mt-3"], ["type", "checkbox", "id", "saveShippingAddr", 1, "form-check-input", 3, "change", "checked"], ["for", "saveShippingAddr", 1, "form-check-label"], ["type", "checkbox", "id", "same_shipping2", "formControlName", "same_shipping", 1, "form-check-input"], ["for", "same_shipping2", 1, "form-check-label"], ["type", "radio", "name", "billing_addr_radio", 3, "change", "checked"], ["type", "tel", "formControlName", "phone", "name", "bphone", 1, "form-control", "intl-input-padding", 3, "placeholder"], ["type", "checkbox", "id", "saveBillingAddr", 1, "form-check-input", 3, "change", "checked"], ["for", "saveBillingAddr", 1, "form-check-label"], [1, "order-summary-card"], [1, "order-summary-header"], [1, "item-count"], [1, "order-item-list"], [1, "order-item"], [1, "coupon-section"], [1, "price-breakdown"], [1, "price-row"], [1, "price-row", "discount-row"], [1, "free-label"], [1, "price-divider"], [1, "price-row", "total-row"], [1, "total-amount"], [3, "click", "id", "spinner", "disabled"], [1, "ri-lock-line", "me-2"], [1, "checkout-security-note"], [1, "ri-secure-payment-line"], [1, "order-item-img"], ["alt", "product", 1, "img-fluid", 3, "src"], [1, "order-item-qty"], [1, "order-item-info"], [1, "order-item-name"], [1, "order-item-price"], [1, "coupon-section-header"], [1, "ri-coupon-3-line"], [1, "coupon-applied"], [1, "coupon-applied-info"], [1, "ri-check-line"], [1, "coupon-applied-save"], ["type", "button", 1, "coupon-remove-btn", 3, "click"], [1, "ri-close-line"], [1, "coupon-input-row"], ["type", "text", "placeholder", "Enter promo code", 1, "form-control", "coupon-input", 3, "ngModelChange", "keyup.enter", "ngModel", "ngModelOptions"], [3, "click", "spinner", "id"], [1, "coupon-error"], [1, "ri-error-warning-line"], [1, "ri-coupon-line"], [1, "discount-amount"], [3, "image", "text"]], template: function Checkout_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "form", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10);
        \u0275\u0275conditionalCreate(10, Checkout_Conditional_10_Template, 114, 87, "div", 11);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275pipe(12, "async");
        \u0275\u0275conditionalCreate(13, Checkout_Conditional_13_Template, 25, 23, "div", 11);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 12)(16, "div", 13);
        \u0275\u0275conditionalCreate(17, Checkout_Conditional_17_Template, 46, 32);
        \u0275\u0275pipe(18, "async");
        \u0275\u0275conditionalBranchCreate(19, Checkout_Conditional_19_Template, 2, 6, "app-no-data", 14);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(11, 5, ctx.setting$) && !\u0275\u0275pipeBind1(12, 7, ctx.accessToken$) ? 10 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(14, 9, ctx.accessToken$) ? 13 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(18, 11, ctx.cartItem$)) == null ? null : tmp_4_0.length) ? 17 : 19);
      }
    }, dependencies: [
      TranslateModule,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      Breadcrumb,
      DeliveryBlock,
      PaymentBlock,
      NoData,
      Select2Module,
      Select2,
      Button,
      TranslatePipe,
      CurrencySymbolPipe,
      AsyncPipe
    ], styles: ["\n\n.checkout-section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 20px 22px;\n  margin-bottom: 16px;\n}\n.checkout-section-card[_ngcontent-%COMP%]   .checkout-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.checkout-section-card[_ngcontent-%COMP%]   .checkout-section-header[_ngcontent-%COMP%]   .step-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--theme-color, #ff4c3b);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.checkout-section-card[_ngcontent-%COMP%]   .checkout-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 0;\n  color: #212529;\n}\n.address-radio-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.address-radio-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 16px;\n  border: 1.5px solid #e9ecef;\n  border-radius: 8px;\n  cursor: pointer;\n  transition:\n    border-color 0.2s,\n    background-color 0.2s,\n    box-shadow 0.2s;\n  margin-bottom: 0;\n}\n.address-radio-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--theme-color, #ff4c3b);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n}\n.address-radio-item.selected[_ngcontent-%COMP%] {\n  border-color: var(--theme-color, #ff4c3b);\n  background-color: rgba(var(--theme-color-rgb, 255, 76, 59), 0.04);\n}\n.address-radio-item[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  margin-top: 3px;\n  flex-shrink: 0;\n  cursor: pointer;\n  accent-color: var(--theme-color, #ff4c3b);\n  width: 16px;\n  height: 16px;\n}\n.address-radio-item[_ngcontent-%COMP%]   .address-radio-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.address-radio-item[_ngcontent-%COMP%]   .address-radio-content[_ngcontent-%COMP%]   .address-radio-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 3px;\n}\n.address-radio-item[_ngcontent-%COMP%]   .address-radio-content[_ngcontent-%COMP%]   .address-radio-detail[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin-bottom: 2px;\n}\n.address-radio-item[_ngcontent-%COMP%]   .address-radio-content[_ngcontent-%COMP%]   .address-radio-phone[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #adb5bd;\n}\nbutton.address-radio-add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 12px 16px;\n  border: 1.5px dashed var(--theme-color, #ff4c3b);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--theme-color, #ff4c3b);\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.2s, box-shadow 0.2s;\n}\nbutton.address-radio-add[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\nbutton.address-radio-add[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--theme-color-rgb, 255, 76, 59), 0.06);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n}\n.checkout-right-box[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 90px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.order-summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.order-summary-card[_ngcontent-%COMP%]   .order-summary-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  border-bottom: 1px solid #f1f3f5;\n}\n.order-summary-card[_ngcontent-%COMP%]   .order-summary-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 0;\n}\n.order-summary-card[_ngcontent-%COMP%]   .order-summary-header[_ngcontent-%COMP%]   .item-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  background: #f8f9fa;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.order-item-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.order-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 18px;\n  border-bottom: 1px solid #f8f9fa;\n}\n.order-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.order-item[_ngcontent-%COMP%]   .order-item-img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 52px;\n  height: 52px;\n  flex-shrink: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n}\n.order-item[_ngcontent-%COMP%]   .order-item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.order-item[_ngcontent-%COMP%]   .order-item-img[_ngcontent-%COMP%]   .order-item-qty[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  background: var(--theme-color, #ff4c3b);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.order-item[_ngcontent-%COMP%]   .order-item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.order-item[_ngcontent-%COMP%]   .order-item-info[_ngcontent-%COMP%]   .order-item-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #212529;\n}\n.order-item[_ngcontent-%COMP%]   .order-item-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  white-space: nowrap;\n}\n.coupon-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.coupon-section[_ngcontent-%COMP%]   .coupon-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #212529;\n}\n.coupon-section[_ngcontent-%COMP%]   .coupon-section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--theme-color, #ff4c3b);\n}\n.coupon-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.coupon-input-row[_ngcontent-%COMP%]   .coupon-input[_ngcontent-%COMP%] {\n  flex: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 13px;\n}\n.coupon-input-row[_ngcontent-%COMP%]   .coupon-apply-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 8px 18px !important;\n  font-size: 13px !important;\n}\n.coupon-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  font-size: 13px;\n  color: #dc3545;\n}\n.coupon-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.coupon-applied[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(var(--theme-color-rgb, 255, 76, 59), 0.05);\n  border: 1.5px solid var(--theme-color, #ff4c3b);\n  border-radius: 8px;\n  padding: 10px 14px;\n}\n.coupon-applied[_ngcontent-%COMP%]   .coupon-applied-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.coupon-applied[_ngcontent-%COMP%]   .coupon-applied-info[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--theme-color, #ff4c3b);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.coupon-applied[_ngcontent-%COMP%]   .coupon-applied-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: #212529;\n}\n.coupon-applied[_ngcontent-%COMP%]   .coupon-applied-info[_ngcontent-%COMP%]   .coupon-applied-save[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--theme-color, #ff4c3b);\n}\n.coupon-applied[_ngcontent-%COMP%]   .coupon-remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n  padding: 4px;\n  border-radius: 4px;\n  line-height: 1;\n  transition: color 0.2s;\n}\n.coupon-applied[_ngcontent-%COMP%]   .coupon-remove-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.coupon-applied[_ngcontent-%COMP%]   .coupon-remove-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.price-breakdown[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  font-size: 14px;\n  color: #495057;\n}\n.price-row.discount-row[_ngcontent-%COMP%] {\n  color: var(--theme-color, #ff4c3b);\n  font-size: 13px;\n}\n.price-row.discount-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.price-row.discount-row[_ngcontent-%COMP%]   .discount-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.price-row[_ngcontent-%COMP%]   .free-label[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 500;\n  font-size: 13px;\n}\n.price-divider[_ngcontent-%COMP%] {\n  border-top: 1.5px dashed #dee2e6;\n  margin: 10px 0;\n}\n.total-row[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #212529;\n  padding-top: 8px;\n}\n.total-row[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--theme-color, #ff4c3b);\n}\n.place-order-btn[_ngcontent-%COMP%] {\n  padding: 14px !important;\n  font-size: 15px !important;\n  font-weight: 700 !important;\n  border-radius: 10px !important;\n  letter-spacing: 0.3px;\n}\n.checkout-security-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #adb5bd;\n}\n.checkout-security-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.dark[_nghost-%COMP%]   .checkout-section-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-section-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .order-summary-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .order-summary-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .coupon-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .coupon-section[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .price-breakdown[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-breakdown[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  border-color: #404040;\n}\n.dark[_nghost-%COMP%]   .address-radio-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .address-radio-item[_ngcontent-%COMP%] {\n  border-color: #404040;\n  background: transparent;\n}\n.dark[_nghost-%COMP%]   .address-radio-item[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .address-radio-item[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   .address-radio-item.selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .address-radio-item.selected[_ngcontent-%COMP%] {\n  border-color: var(--theme-color, #ff4c3b);\n  background: rgba(255, 255, 255, 0.05);\n}\n.dark[_nghost-%COMP%]   .address-radio-item[_ngcontent-%COMP%]   .address-radio-detail[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .address-radio-item[_ngcontent-%COMP%]   .address-radio-detail[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.dark[_nghost-%COMP%]   .address-radio-item[_ngcontent-%COMP%]   .address-radio-phone[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .address-radio-item[_ngcontent-%COMP%]   .address-radio-phone[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.dark[_nghost-%COMP%]   .order-summary-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .order-summary-header[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .order-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .order-item[_ngcontent-%COMP%] {\n  border-color: #2a2a2a;\n}\n.dark[_nghost-%COMP%]   .order-item-name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .order-item-name[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.dark[_nghost-%COMP%]   .order-item-price[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .order-item-price[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.dark[_nghost-%COMP%]   .price-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-row[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.dark[_nghost-%COMP%]   .total-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .total-row[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.dark[_nghost-%COMP%]   .price-divider[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .price-divider[_ngcontent-%COMP%] {\n  border-color: #404040;\n}\n.dark[_nghost-%COMP%]   .checkout-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .checkout-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.dark[_nghost-%COMP%]   .coupon-section-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .coupon-section-header[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.dark[_nghost-%COMP%]   .coupon-applied[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .coupon-applied[_ngcontent-%COMP%] {\n  background: rgba(255, 76, 59, 0.08);\n}\n.dark[_nghost-%COMP%]   .coupon-applied-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .coupon-applied-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n/*# sourceMappingURL=checkout.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkout, [{
    type: Component,
    args: [{ selector: "app-checkout", imports: [
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
      AsyncPipe
    ], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<section class="section-b-space checkout-section-2">
  <div class="container">
    <div class="checkout-page">
      <div class="checkout-form">
        <form [formGroup]="form">
          <div class="row g-sm-4 g-3">

            <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 LEFT COLUMN \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
            <div class="col-lg-7">
              <div class="left-sidebar-checkout">
                <div class="checkout-detail-box">

                  <!-- GUEST flow -->
                  @if((setting$ | async) && !(accessToken$ | async)){
                  <div class="checkout-form-section">

                    <div class="checkout-section-card">
                      <div class="checkout-section-header">
                        <span class="step-badge">1</span>
                        <h3>{{ 'account_details' | translate }}</h3>
                      </div>
                      <div class="row g-sm-3 g-2">
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'name' | translate }}</label>
                            <input type="text" class="form-control" formControlName="name"
                              placeholder="{{ 'enter_name' | translate }}" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'email' | translate }}</label>
                            <input type="email" class="form-control" formControlName="email"
                              placeholder="{{ 'enter_email_address' | translate }}" />
                          </div>
                        </div>
                        <div class="col-12 phone-field">
                          <div class="form-box position-relative">
                            <label class="form-label">{{ 'phone_number' | translate }}</label>
                            @if(isBrowser){
                            <select2 class="custom-select intl-tel-input" [templates]="template"
                              [data]="codes" formControlName="country_code">
                              <ng-template #template let-data="data">
                                <div class="country">
                                  <div class="flag-box"><div class="iti-flag {{data?.class}}"></div></div>
                                  <span class="dial-code">{{data.code}}</span>
                                </div>
                              </ng-template>
                            </select2>
                            }
                            <input type="tel" class="form-control intl-input-padding" formControlName="phone"
                              placeholder="{{ 'enter_phone' | translate }}" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="checkout-section-card">
                      <div class="checkout-section-header">
                        <span class="step-badge">2</span>
                        <h3>{{ 'shipping_details' | translate }}</h3>
                      </div>
                      <div class="row g-sm-3 g-2" formGroupName="shipping_address">
                        <div class="col-12">
                          <div class="form-box">
                            <label class="form-label">{{ 'title' | translate }}</label>
                            <input type="text" class="form-control" formControlName="title" placeholder="{{ 'enter_name' | translate }}" />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-box">
                            <label class="form-label">{{ 'address' | translate }}</label>
                            <input type="text" class="form-control" formControlName="street" placeholder="{{ 'enter_address' | translate }}" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'country' | translate }}</label>
                            <input type="text" class="form-control" formControlName="country_name" placeholder="e.g. Nepal" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'state' | translate }}</label>
                            <input type="text" class="form-control" formControlName="state_name" placeholder="e.g. Bagmati" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'city' | translate }}</label>
                            <input type="text" class="form-control" formControlName="city" placeholder="{{ 'enter_city' | translate }}" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'pincode' | translate }}</label>
                            <input type="text" class="form-control" formControlName="pincode" placeholder="{{ 'enter_pincode' | translate }}" />
                          </div>
                        </div>
                        <div class="col-12 phone-field">
                          <div class="form-box position-relative">
                            <label class="form-label">{{ 'phone_number' | translate }}</label>
                            @if(isBrowser){
                            <select2 class="custom-select intl-tel-input" [templates]="template"
                              [data]="codes" formControlName="country_code">
                              <ng-template #template let-data="data">
                                <div class="country">
                                  <div class="flag-box"><div class="iti-flag {{data?.class}}"></div></div>
                                  <span class="dial-code">{{data?.code}}</span>
                                </div>
                              </ng-template>
                            </select2>
                            }
                            <input type="tel" class="form-control intl-input-padding" formControlName="phone"
                              placeholder="{{ 'enter_phone' | translate }}" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="checkout-section-card">
                      <div class="checkout-section-header">
                        <span class="step-badge">3</span>
                        <h3>{{ 'billing_details' | translate }}</h3>
                      </div>
                      @if(form.controls['shipping_address']?.valid){
                      <div class="mb-3" formGroupName="billing_address">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="same_shipping" formControlName="same_shipping" />
                          <label class="form-check-label" for="same_shipping">{{ 'same_as_shipping' | translate }}</label>
                        </div>
                      </div>
                      }
                      @if(!form.get('billing_address.same_shipping')?.value){
                      <div class="row g-sm-3 g-2" formGroupName="billing_address">
                        <div class="col-12">
                          <div class="form-box">
                            <label class="form-label">{{ 'title' | translate }}</label>
                            <input type="text" class="form-control" formControlName="title" placeholder="{{ 'enter_name' | translate }}" />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-box">
                            <label class="form-label">{{ 'address' | translate }}</label>
                            <input type="text" class="form-control" formControlName="street" placeholder="{{ 'enter_address' | translate }}" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'country' | translate }}</label>
                            <input type="text" class="form-control" formControlName="country_name" placeholder="e.g. Nepal" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'state' | translate }}</label>
                            <input type="text" class="form-control" formControlName="state_name" placeholder="e.g. Bagmati" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'city' | translate }}</label>
                            <input type="text" class="form-control" formControlName="city" placeholder="{{ 'enter_city' | translate }}" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'pincode' | translate }}</label>
                            <input type="text" class="form-control" formControlName="pincode" placeholder="{{ 'enter_pincode' | translate }}" />
                          </div>
                        </div>
                        <div class="col-12 phone-field">
                          <div class="form-box position-relative">
                            <label class="form-label">{{ 'phone_number' | translate }}</label>
                            @if(isBrowser){
                            <select2 class="custom-select intl-tel-input" [templates]="template"
                              [data]="codes" formControlName="country_code">
                              <ng-template #template let-data="data">
                                <div class="country">
                                  <div class="flag-box"><div class="iti-flag {{data?.class}}"></div></div>
                                  <span class="dial-code">{{data?.code}}</span>
                                </div>
                              </ng-template>
                            </select2>
                            }
                            <input type="tel" class="form-control intl-input-padding" formControlName="phone"
                              placeholder="{{ 'enter_phone' | translate }}" />
                          </div>
                        </div>
                      </div>
                      }
                    </div>

                    <div class="checkout-section-card">
                      <div class="checkout-section-header">
                        <span class="step-badge">4</span>
                        <h3>{{ 'delivery_options' | translate }}</h3>
                      </div>
                      <app-delivery-block [setting]="(setting$ | async)!" (selectDelivery)="selectDelivery($event)" />
                    </div>

                    <div class="checkout-section-card">
                      <div class="checkout-section-header">
                        <span class="step-badge">5</span>
                        <h3>{{ 'payment_options' | translate }}</h3>
                      </div>
                      <app-payment-block [setting]="(setting$ | async)!" (selectPaymentMethod)="selectPaymentMethod($event)" />
                    </div>

                  </div>
                  }

                  <!-- LOGGED-IN flow -->
                  @if(accessToken$ | async){
                  <div class="checkout-form-section">

                    @if(!(cartDigital$ | async)){
                    <div class="checkout-section-card">
                      <div class="checkout-section-header">
                        <span class="step-badge">1</span>
                        <h3>{{ 'shipping_details' | translate }}</h3>
                      </div>

                      <div class="address-radio-list mb-3">
                        @for(addr of (addresses$ | async) ?? []; track addr.id){
                        <label class="address-radio-item" [class.selected]="selectedShippingAddress?.id === addr.id">
                          <input type="radio" name="shipping_addr_radio"
                            [checked]="selectedShippingAddress?.id === addr.id"
                            (change)="selectSavedShippingAddress(addr)" />
                          <div class="address-radio-content">
                            <div class="address-radio-title">{{ addr.title }}</div>
                            <div class="address-radio-detail">
                              {{ addr.street }}, {{ addr.city }}, {{ addr.pincode }}@if(addr.state_name){ \xB7 {{ addr.state_name }}}@if(addr.country_name){ \xB7 {{ addr.country_name }}}
                            </div>
                            <div class="address-radio-phone">{{ addr.country_code }} {{ addr.phone }}</div>
                          </div>
                        </label>
                        }
                        <button type="button" class="address-radio-add" (click)="openAddressModal('shipping')">
                          <i class="ri-add-circle-line"></i>
                          <span>Add New Address</span>
                        </button>
                      </div>

                      @if(showNewShippingForm || !(addresses$ | async)?.length){
                      <div class="row g-sm-3 g-2" formGroupName="shipping_address">
                        <div class="col-12">
                          <div class="form-box">
                            <label class="form-label">{{ 'title' | translate }}</label>
                            <input type="text" class="form-control" formControlName="title" placeholder="{{ 'enter_name' | translate }}" />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-box">
                            <label class="form-label">{{ 'address' | translate }}</label>
                            <input type="text" class="form-control" formControlName="street" placeholder="{{ 'enter_address' | translate }}" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'country' | translate }}</label>
                            <input type="text" class="form-control" formControlName="country_name" placeholder="e.g. Nepal" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'state' | translate }}</label>
                            <input type="text" class="form-control" formControlName="state_name" placeholder="e.g. Bagmati" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'city' | translate }}</label>
                            <input type="text" class="form-control" formControlName="city" placeholder="{{ 'enter_city' | translate }}" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'pincode' | translate }}</label>
                            <input type="text" class="form-control" formControlName="pincode" placeholder="{{ 'enter_pincode' | translate }}" />
                          </div>
                        </div>
                        <div class="col-12 phone-field">
                          <div class="form-box position-relative">
                            <label class="form-label">{{ 'phone_number' | translate }}</label>
                            @if(isBrowser){
                            <select2 class="custom-select intl-tel-input" [templates]="template"
                              [data]="codes" formControlName="country_code">
                              <ng-template #template let-data="data">
                                <div class="country">
                                  <div class="flag-box"><div class="iti-flag {{data?.class}}"></div></div>
                                  <span class="dial-code">{{data?.code}}</span>
                                </div>
                              </ng-template>
                            </select2>
                            }
                            <input type="tel" class="form-control intl-input-padding" formControlName="phone"
                              placeholder="{{ 'enter_phone' | translate }}" name="sphone" />
                          </div>
                        </div>
                      </div>
                      <div class="form-check mt-3">
                        <input type="checkbox" class="form-check-input" id="saveShippingAddr"
                          [checked]="saveShippingAddress"
                          (change)="saveShippingAddress = $any($event.target).checked" />
                        <label class="form-check-label" for="saveShippingAddr">Save for future orders</label>
                      </div>
                      }
                    </div>
                    }

                    <div class="checkout-section-card">
                      <div class="checkout-section-header">
                        <span class="step-badge">{{ (cartDigital$ | async) ? '1' : '2' }}</span>
                        <h3>{{ 'billing_details' | translate }}</h3>
                      </div>

                      @if(form.controls['shipping_address']?.valid){
                      <div class="mb-3" formGroupName="billing_address">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="same_shipping2" formControlName="same_shipping" />
                          <label class="form-check-label" for="same_shipping2">{{ 'same_as_shipping' | translate }}</label>
                        </div>
                      </div>
                      }

                      @if(!form.get('billing_address.same_shipping')?.value){
                      <div class="address-radio-list mb-3">
                        @for(addr of (addresses$ | async) ?? []; track addr.id){
                        <label class="address-radio-item" [class.selected]="selectedBillingAddress?.id === addr.id">
                          <input type="radio" name="billing_addr_radio"
                            [checked]="selectedBillingAddress?.id === addr.id"
                            (change)="selectSavedBillingAddress(addr)" />
                          <div class="address-radio-content">
                            <div class="address-radio-title">{{ addr.title }}</div>
                            <div class="address-radio-detail">
                              {{ addr.street }}, {{ addr.city }}, {{ addr.pincode }}@if(addr.state_name){ \xB7 {{ addr.state_name }}}@if(addr.country_name){ \xB7 {{ addr.country_name }}}
                            </div>
                            <div class="address-radio-phone">{{ addr.country_code }} {{ addr.phone }}</div>
                          </div>
                        </label>
                        }
                        <button type="button" class="address-radio-add" (click)="openAddressModal('billing')">
                          <i class="ri-add-circle-line"></i>
                          <span>Add New Address</span>
                        </button>
                      </div>

                      @if(showNewBillingForm || !(addresses$ | async)?.length){
                      <div class="row g-sm-3 g-2" formGroupName="billing_address">
                        <div class="col-12">
                          <div class="form-box">
                            <label class="form-label">{{ 'title' | translate }}</label>
                            <input type="text" class="form-control" formControlName="title" placeholder="{{ 'enter_name' | translate }}" />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-box">
                            <label class="form-label">{{ 'address' | translate }}</label>
                            <input type="text" class="form-control" formControlName="street" placeholder="{{ 'enter_address' | translate }}" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'country' | translate }}</label>
                            <input type="text" class="form-control" formControlName="country_name" placeholder="e.g. Nepal" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'state' | translate }}</label>
                            <input type="text" class="form-control" formControlName="state_name" placeholder="e.g. Bagmati" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'city' | translate }}</label>
                            <input type="text" class="form-control" formControlName="city" placeholder="{{ 'enter_city' | translate }}" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-box">
                            <label class="form-label">{{ 'pincode' | translate }}</label>
                            <input type="text" class="form-control" formControlName="pincode" placeholder="{{ 'enter_pincode' | translate }}" />
                          </div>
                        </div>
                        <div class="col-12 phone-field">
                          <div class="form-box position-relative">
                            <label class="form-label">{{ 'phone_number' | translate }}</label>
                            @if(isBrowser){
                            <select2 class="custom-select intl-tel-input" [templates]="template"
                              [data]="codes" formControlName="country_code">
                              <ng-template #template let-data="data">
                                <div class="country">
                                  <div class="flag-box"><div class="iti-flag {{data?.class}}"></div></div>
                                  <span class="dial-code">{{data?.code}}</span>
                                </div>
                              </ng-template>
                            </select2>
                            }
                            <input type="tel" class="form-control intl-input-padding" formControlName="phone"
                              placeholder="{{ 'enter_phone' | translate }}" name="bphone" />
                          </div>
                        </div>
                      </div>
                      <div class="form-check mt-3">
                        <input type="checkbox" class="form-check-input" id="saveBillingAddr"
                          [checked]="saveBillingAddress"
                          (change)="saveBillingAddress = $any($event.target).checked" />
                        <label class="form-check-label" for="saveBillingAddr">Save for future orders</label>
                      </div>
                      }
                      }
                    </div>

                    @if(!(cartDigital$ | async)){
                    <div class="checkout-section-card">
                      <div class="checkout-section-header">
                        <span class="step-badge">3</span>
                        <h3>{{ 'delivery_options' | translate }}</h3>
                      </div>
                      <app-delivery-block [setting]="(setting$ | async)!" (selectDelivery)="selectDelivery($event)" />
                    </div>
                    }

                    <div class="checkout-section-card">
                      <div class="checkout-section-header">
                        <span class="step-badge">{{ (cartDigital$ | async) ? '2' : '4' }}</span>
                        <h3>{{ 'payment_options' | translate }}</h3>
                      </div>
                      <app-payment-block [setting]="(setting$ | async)!" (selectPaymentMethod)="selectPaymentMethod($event)" />
                    </div>

                  </div>
                  }

                </div>
              </div>
            </div>

            <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 RIGHT COLUMN \u2014 ORDER SUMMARY \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
            <div class="col-lg-5">
              <div class="checkout-right-box">

                @if((cartItem$ | async)?.length){

                <!-- Item list -->
                <div class="order-summary-card">
                  <div class="order-summary-header">
                    <h4>{{ 'summary_order' | translate }}</h4>
                    <span class="item-count">{{ (cartItem$ | async)?.length }} item(s)</span>
                  </div>
                  <ul class="order-item-list">
                    @for(item of cartItem$ | async; track item.id){
                    <li class="order-item">
                      <div class="order-item-img">
                        <img
                          [src]="item?.variation && item?.variation?.variation_image
                            ? item?.variation?.variation_image?.original_url
                            : item?.product?.product_thumbnail
                            ? item?.product?.product_thumbnail?.original_url
                            : 'assets/images/placeholder/product.png'"
                          class="img-fluid" alt="product" />
                        <span class="order-item-qty">{{ item.quantity }}</span>
                      </div>
                      <div class="order-item-info">
                        <p class="order-item-name">{{ item?.variation ? item?.variation?.name : item?.product?.name }}</p>
                      </div>
                      <div class="order-item-price">
                        {{ (item?.variation ? item.variation.sale_price
                          : item?.wholesale_price ? item?.wholesale_price
                          : item?.product?.sale_price)! * item.quantity | currencySymbol }}
                      </div>
                    </li>
                    }
                  </ul>
                </div>

                <!-- Promo code (logged-in only) -->
                @if(accessToken$ | async){
                <div class="coupon-section">
                  <div class="coupon-section-header">
                    <i class="ri-coupon-3-line"></i>
                    <span>Promo Code</span>
                  </div>

                  @if(appliedCoupon$ | async; as applied){
                  <div class="coupon-applied">
                    <div class="coupon-applied-info">
                      <i class="ri-check-line"></i>
                      <div>
                        <strong>{{ applied.code }}</strong>
                        <span class="coupon-applied-save">Saving {{ applied.discount_amount | currencySymbol }}</span>
                      </div>
                    </div>
                    <button type="button" class="coupon-remove-btn" (click)="removeCoupon()">
                      <i class="ri-close-line"></i>
                    </button>
                  </div>
                  } @else {
                  <div class="coupon-input-row">
                    <input type="text" class="form-control coupon-input"
                      [(ngModel)]="couponInput" [ngModelOptions]="{standalone: true}"
                      placeholder="Enter promo code" (keyup.enter)="applyCoupon()" />
                    <app-button [class]="'btn btn-solid coupon-apply-btn'" [spinner]="applyingCoupon"
                      [id]="'apply_coupon_btn'" (click)="applyCoupon()">Apply</app-button>
                  </div>
                  @if(couponError$ | async; as err){
                  <div class="coupon-error">
                    <i class="ri-error-warning-line"></i> {{ err }}
                  </div>
                  }
                  }
                </div>
                }

                <!-- Price breakdown -->
                <div class="price-breakdown">
                  @let cartItems = (cartItem$ | async) ?? [];
                  @let applied = (appliedCoupon$ | async);
                  <div class="price-row">
                    <span>Subtotal</span>
                    <span>{{ getCartSubTotal(cartItems) | currencySymbol }}</span>
                  </div>
                  @if(applied){
                  <div class="price-row discount-row">
                    <span><i class="ri-coupon-line"></i> {{ applied.code }}</span>
                    <span class="discount-amount">\u2212{{ applied.discount_amount | currencySymbol }}</span>
                  </div>
                  }
                  <div class="price-row">
                    <span>Shipping</span>
                    <span class="free-label">Free</span>
                  </div>
                  <div class="price-divider"></div>
                  <div class="price-row total-row">
                    <span>Total</span>
                    <span class="total-amount">{{ getOrderTotal(cartItems, applied) | currencySymbol }}</span>
                  </div>
                </div>

                <!-- Place Order button -->
                <app-button
                  [class]="'btn btn-solid place-order-btn w-100'"
                  [id]="'place_order_btn'"
                  [spinner]="loading"
                  [disabled]="!form.valid"
                  (click)="placeorder()"
                >
                  <i class="ri-lock-line me-2"></i>
                  {{ 'place_order' | translate }}
                </app-button>

                <div class="checkout-security-note">
                  <i class="ri-secure-payment-line"></i>
                  <span>Secure &amp; Encrypted Checkout</span>
                </div>

                } @else {
                <app-no-data
                  [class]="'no-data-added'"
                  [image]="'assets/svg/empty-items.svg'"
                  [text]="'no_cart_item_desc' | translate"
                />
                }
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
</section>
`, styles: ["/* src/app/components/shop/checkout/checkout.scss */\n.checkout-section-card {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 20px 22px;\n  margin-bottom: 16px;\n}\n.checkout-section-card .checkout-section-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.checkout-section-card .checkout-section-header .step-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--theme-color, #ff4c3b);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.checkout-section-card .checkout-section-header h3 {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 0;\n  color: #212529;\n}\n.address-radio-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.address-radio-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 16px;\n  border: 1.5px solid #e9ecef;\n  border-radius: 8px;\n  cursor: pointer;\n  transition:\n    border-color 0.2s,\n    background-color 0.2s,\n    box-shadow 0.2s;\n  margin-bottom: 0;\n}\n.address-radio-item:hover {\n  border-color: var(--theme-color, #ff4c3b);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n}\n.address-radio-item.selected {\n  border-color: var(--theme-color, #ff4c3b);\n  background-color: rgba(var(--theme-color-rgb, 255, 76, 59), 0.04);\n}\n.address-radio-item input[type=radio] {\n  margin-top: 3px;\n  flex-shrink: 0;\n  cursor: pointer;\n  accent-color: var(--theme-color, #ff4c3b);\n  width: 16px;\n  height: 16px;\n}\n.address-radio-item .address-radio-content {\n  flex: 1;\n}\n.address-radio-item .address-radio-content .address-radio-title {\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 3px;\n}\n.address-radio-item .address-radio-content .address-radio-detail {\n  font-size: 13px;\n  color: #6c757d;\n  margin-bottom: 2px;\n}\n.address-radio-item .address-radio-content .address-radio-phone {\n  font-size: 12px;\n  color: #adb5bd;\n}\nbutton.address-radio-add {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 12px 16px;\n  border: 1.5px dashed var(--theme-color, #ff4c3b);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--theme-color, #ff4c3b);\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.2s, box-shadow 0.2s;\n}\nbutton.address-radio-add i {\n  font-size: 18px;\n}\nbutton.address-radio-add:hover {\n  background-color: rgba(var(--theme-color-rgb, 255, 76, 59), 0.06);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n}\n.checkout-right-box {\n  position: sticky;\n  top: 90px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.order-summary-card {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.order-summary-card .order-summary-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  border-bottom: 1px solid #f1f3f5;\n}\n.order-summary-card .order-summary-header h4 {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 0;\n}\n.order-summary-card .order-summary-header .item-count {\n  font-size: 12px;\n  color: #6c757d;\n  background: #f8f9fa;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.order-item-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.order-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 18px;\n  border-bottom: 1px solid #f8f9fa;\n}\n.order-item:last-child {\n  border-bottom: none;\n}\n.order-item .order-item-img {\n  position: relative;\n  width: 52px;\n  height: 52px;\n  flex-shrink: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n}\n.order-item .order-item-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.order-item .order-item-img .order-item-qty {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  background: var(--theme-color, #ff4c3b);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.order-item .order-item-info {\n  flex: 1;\n  min-width: 0;\n}\n.order-item .order-item-info .order-item-name {\n  font-size: 13px;\n  font-weight: 500;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #212529;\n}\n.order-item .order-item-price {\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  white-space: nowrap;\n}\n.coupon-section {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.coupon-section .coupon-section-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #212529;\n}\n.coupon-section .coupon-section-header i {\n  font-size: 18px;\n  color: var(--theme-color, #ff4c3b);\n}\n.coupon-input-row {\n  display: flex;\n  gap: 8px;\n}\n.coupon-input-row .coupon-input {\n  flex: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 13px;\n}\n.coupon-input-row .coupon-apply-btn {\n  white-space: nowrap;\n  padding: 8px 18px !important;\n  font-size: 13px !important;\n}\n.coupon-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  font-size: 13px;\n  color: #dc3545;\n}\n.coupon-error i {\n  font-size: 15px;\n}\n.coupon-applied {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(var(--theme-color-rgb, 255, 76, 59), 0.05);\n  border: 1.5px solid var(--theme-color, #ff4c3b);\n  border-radius: 8px;\n  padding: 10px 14px;\n}\n.coupon-applied .coupon-applied-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.coupon-applied .coupon-applied-info > i {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--theme-color, #ff4c3b);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.coupon-applied .coupon-applied-info strong {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: #212529;\n}\n.coupon-applied .coupon-applied-info .coupon-applied-save {\n  display: block;\n  font-size: 12px;\n  color: var(--theme-color, #ff4c3b);\n}\n.coupon-applied .coupon-remove-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n  padding: 4px;\n  border-radius: 4px;\n  line-height: 1;\n  transition: color 0.2s;\n}\n.coupon-applied .coupon-remove-btn:hover {\n  color: #dc3545;\n}\n.coupon-applied .coupon-remove-btn i {\n  font-size: 16px;\n}\n.price-breakdown {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.price-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  font-size: 14px;\n  color: #495057;\n}\n.price-row.discount-row {\n  color: var(--theme-color, #ff4c3b);\n  font-size: 13px;\n}\n.price-row.discount-row i {\n  margin-right: 4px;\n}\n.price-row.discount-row .discount-amount {\n  font-weight: 600;\n}\n.price-row .free-label {\n  color: #28a745;\n  font-weight: 500;\n  font-size: 13px;\n}\n.price-divider {\n  border-top: 1.5px dashed #dee2e6;\n  margin: 10px 0;\n}\n.total-row {\n  font-size: 16px;\n  font-weight: 700;\n  color: #212529;\n  padding-top: 8px;\n}\n.total-row .total-amount {\n  font-size: 18px;\n  color: var(--theme-color, #ff4c3b);\n}\n.place-order-btn {\n  padding: 14px !important;\n  font-size: 15px !important;\n  font-weight: 700 !important;\n  border-radius: 10px !important;\n  letter-spacing: 0.3px;\n}\n.checkout-security-note {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #adb5bd;\n}\n.checkout-security-note i {\n  font-size: 15px;\n}\n:host-context(.dark) .checkout-section-card,\n:host-context(.dark) .order-summary-card,\n:host-context(.dark) .coupon-section,\n:host-context(.dark) .price-breakdown {\n  background: #1a1a1a;\n  border-color: #404040;\n}\n:host-context(.dark) .address-radio-item {\n  border-color: #404040;\n  background: transparent;\n}\n:host-context(.dark) .address-radio-item:hover,\n:host-context(.dark) .address-radio-item.selected {\n  border-color: var(--theme-color, #ff4c3b);\n  background: rgba(255, 255, 255, 0.05);\n}\n:host-context(.dark) .address-radio-item .address-radio-detail {\n  color: #adb5bd;\n}\n:host-context(.dark) .address-radio-item .address-radio-phone {\n  color: #6c757d;\n}\n:host-context(.dark) .order-summary-header,\n:host-context(.dark) .order-item {\n  border-color: #2a2a2a;\n}\n:host-context(.dark) .order-item-name {\n  color: #e0e0e0;\n}\n:host-context(.dark) .order-item-price {\n  color: #e0e0e0;\n}\n:host-context(.dark) .price-row {\n  color: #adb5bd;\n}\n:host-context(.dark) .total-row {\n  color: #e0e0e0;\n}\n:host-context(.dark) .price-divider {\n  border-color: #404040;\n}\n:host-context(.dark) .checkout-section-header h3 {\n  color: #e0e0e0;\n}\n:host-context(.dark) .coupon-section-header {\n  color: #e0e0e0;\n}\n:host-context(.dark) .coupon-applied {\n  background: rgba(255, 76, 59, 0.08);\n}\n:host-context(.dark) .coupon-applied-info strong {\n  color: #e0e0e0;\n}\n/*# sourceMappingURL=checkout.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Checkout, { className: "Checkout", filePath: "src/app/components/shop/checkout/checkout.ts", lineNumber: 65 });
})();
export {
  Checkout
};
//# sourceMappingURL=chunk-Q6Z3YJB6.js.map
