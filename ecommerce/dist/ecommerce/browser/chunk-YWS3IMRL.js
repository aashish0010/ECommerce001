import {
  Breadcrumb
} from "./chunk-3DSWFFIY.js";
import {
  Button
} from "./chunk-6I2UIIRS.js";
import "./chunk-OE35GDC6.js";
import "./chunk-RWFLVE5E.js";
import "./chunk-LWNWQPUU.js";
import {
  Router
} from "./chunk-6R3AQVTF.js";
import "./chunk-G25K32MJ.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
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

// src/app/components/shop/order-tracking/order-tracking.ts
function OrderTracking_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "order_number_is_required"));
  }
}
function OrderTracking_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "email_or_phone_is_required"));
  }
}
var OrderTracking = class _OrderTracking {
  constructor() {
    this.store = inject(Store);
    this.formBuilder = inject(FormBuilder);
    this.router = inject(Router);
    this.breadcrumb = {
      title: "Order Tracking",
      items: [{ label: "Order Tracking", active: true }]
    };
    this.form = this.formBuilder.group({
      order_number: new FormControl("", [Validators.required]),
      email_or_phone: new FormControl("", [Validators.required])
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      void this.router.navigate(["order/details"], { queryParams: this.form.value });
    }
  }
  static {
    this.\u0275fac = function OrderTracking_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderTracking)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderTracking, selectors: [["app-order-tracking"]], decls: 34, vars: 30, consts: [[3, "breadcrumb"], [1, "section-b-space"], [1, "container", "w-100"], [1, "row"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-sm-8", "mx-auto"], [1, "order-search-content"], [1, "input-box"], [1, "row", "g-4", 3, "ngSubmit", "formGroup"], [1, "col-12"], [1, "form-floating", "theme-form-floating", "log-in-form"], ["type", "text", "id", "order_number", "formControlName", "order_number", 1, "form-control", 3, "placeholder"], ["for", "order_number"], [1, "invalid-feedback"], ["type", "email", "id", "email", "formControlName", "email_or_phone", 1, "form-control", 3, "placeholder"], ["for", "email"], [3, "id"]], template: function OrderTracking_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6)(13, "form", 7);
        \u0275\u0275listener("ngSubmit", function OrderTracking_Template_form_ngSubmit_13_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
        \u0275\u0275element(16, "input", 10);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementStart(18, "label", 11);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(21, OrderTracking_Conditional_21_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 8)(23, "div", 9);
        \u0275\u0275element(24, "input", 13);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementStart(26, "label", 14);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(29, OrderTracking_Conditional_29_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 8)(31, "app-button", 15);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, "order_tracking"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 18, "order_tracking_description"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(17, 20, "order_number")));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 22, "order_number"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["order_number"].touched && (ctx.form.controls["order_number"].errors == null ? null : ctx.form.controls["order_number"].errors["required"]) ? 21 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(25, 24, "enter_email_or_phone")));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 26, "enter_email_or_phone"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["email_or_phone"].touched && (ctx.form.controls["email_or_phone"].errors == null ? null : ctx.form.controls["email_or_phone"].errors["required"]) ? 29 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "track_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 28, "track"));
      }
    }, dependencies: [TranslateModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, Breadcrumb, Button, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderTracking, [{
    type: Component,
    args: [{ selector: "app-order-tracking", imports: [TranslateModule, FormsModule, ReactiveFormsModule, Breadcrumb, Button], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<section class="section-b-space">
  <div class="container w-100">
    <div class="row">
      <div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
        <div class="order-search-content">
          <h3>{{ 'order_tracking' | translate }}</h3>
          <p>{{ 'order_tracking_description' | translate }}</p>
          <div class="input-box">
            <form class="row g-4" [formGroup]="form" (ngSubmit)="submit()">
              <div class="col-12">
                <div class="form-floating theme-form-floating log-in-form">
                  <input
                    type="text"
                    class="form-control"
                    id="order_number"
                    formControlName="order_number"
                    placeholder="{{ 'order_number' | translate }}"
                  />
                  <label for="order_number">{{ 'order_number' | translate }}</label>
                </div>

                @if(form.controls['order_number'].touched &&
                form.controls['order_number'].errors?.['required']){
                <div class="invalid-feedback">{{ 'order_number_is_required' | translate }}</div>
                }
              </div>
              <div class="col-12">
                <div class="form-floating theme-form-floating log-in-form">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    formControlName="email_or_phone"
                    placeholder="{{ 'enter_email_or_phone' | translate }}"
                  />
                  <label for="email">{{ 'enter_email_or_phone' | translate }}</label>
                </div>

                @if(form.controls['email_or_phone'].touched &&
                form.controls['email_or_phone'].errors?.['required']){
                <div class="invalid-feedback">{{ 'email_or_phone_is_required' | translate }}</div>
                }
              </div>
              <div class="col-12">
                <app-button [id]="'track_btn'" [class]="'btn btn-solid'"
                  >{{ 'track' | translate }}</app-button
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderTracking, { className: "OrderTracking", filePath: "src/app/components/shop/order-tracking/order-tracking.ts", lineNumber: 25 });
})();
export {
  OrderTracking
};
//# sourceMappingURL=chunk-YWS3IMRL.js.map
