import {
  CouponState,
  GetCouponsAction
} from "./chunk-NKBQK7DM.js";
import {
  Breadcrumb
} from "./chunk-3DSWFFIY.js";
import "./chunk-6R3AQVTF.js";
import "./chunk-G25K32MJ.js";
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
  AsyncPipe
} from "./chunk-QK7HTLFB.js";
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/page/offer/skeleton-offer/skeleton-offer.ts
var SkeletonOffer = class _SkeletonOffer {
  static {
    this.\u0275fac = function SkeletonOffer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonOffer)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonOffer, selectors: [["app-skeleton-offer"]], decls: 10, vars: 0, consts: [[1, "coupon-box", "skeleton-coupon-box"], [1, "coupon-name"], [1, "card-name"], [1, "fw-semibold", "dark-text"], [1, "coupon-content"], [1, "coupon-apply"], [1, "coupon-code", "success-color"]], template: function SkeletonOffer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
        \u0275\u0275domElement(4, "h5", 3);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(5, "div", 4);
        \u0275\u0275domElement(6, "p")(7, "p");
        \u0275\u0275domElementStart(8, "div", 5);
        \u0275\u0275domElement(9, "h6", 6);
        \u0275\u0275domElementEnd()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonOffer, [{
    type: Component,
    args: [{ selector: "app-skeleton-offer", imports: [], template: '<div class="coupon-box skeleton-coupon-box">\n  <div class="coupon-name">\n    <div class="card-name">\n      <div>\n        <h5 class="fw-semibold dark-text"></h5>\n      </div>\n    </div>\n  </div>\n  <div class="coupon-content">\n    <p></p>\n    <p></p>\n    <div class="coupon-apply">\n      <h6 class="coupon-code success-color"></h6>\n      <!-- <a href="javascript:void(0)" class="btn theme-btn border-btn copy-btn mt-0"></a> -->\n    </div>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonOffer, { className: "SkeletonOffer", filePath: "src/app/components/page/offer/skeleton-offer/skeleton-offer.ts", lineNumber: 9 });
})();

// src/app/components/page/offer/offer.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function Offer_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "app-skeleton-offer");
    \u0275\u0275elementEnd();
  }
}
function Offer_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Offer_Conditional_4_For_1_Template, 2, 0, "div", 4, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.skeletonItems);
  }
}
function Offer_Conditional_5_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("click", function Offer_Conditional_5_For_1_Conditional_11_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const coupon_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyFunction(coupon_r3.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "copy_code"), " ");
  }
}
function Offer_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6)(2, "div", 7)(3, "h5", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10)(9, "h6", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, Offer_Conditional_5_For_1_Conditional_11_Template, 3, 3, "a", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coupon_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(coupon_r3 == null ? null : coupon_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(coupon_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", coupon_r3 == null ? null : coupon_r3.code);
    \u0275\u0275advance();
    \u0275\u0275conditional((coupon_r3 == null ? null : coupon_r3.code) ? 11 : -1);
  }
}
function Offer_Conditional_5_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_offer"))("description", \u0275\u0275pipeBind1(2, 7, "no_offer_desc"));
  }
}
function Offer_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Offer_Conditional_5_For_1_Template, 12, 4, "div", 4, _forTrack0, false, Offer_Conditional_5_ForEmpty_2_Template, 3, 9, "app-no-data", 5);
    \u0275\u0275pipe(3, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r0.coupon$) ?? \u0275\u0275pureFunction0(3, _c0));
  }
}
var Offer = class _Offer {
  constructor() {
    this.store = inject(Store);
    this.loading = true;
    this.skeletonItems = Array.from({ length: 6 }, (_, index) => index);
    this.breadcrumb = {
      title: "Offers",
      items: [{ label: "Offers", active: true }]
    };
    this.coupon$ = inject(Store).select(CouponState.coupons);
    this.store.dispatch(new GetCouponsAction()).subscribe({
      complete: () => this.loading = false,
      error: () => this.loading = false
    });
  }
  copyFunction(txt) {
    void navigator.clipboard.writeText(txt);
  }
  static {
    this.\u0275fac = function Offer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Offer)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Offer, selectors: [["app-offer"]], decls: 6, vars: 2, consts: [[3, "breadcrumb"], [1, "section-b-space", "section-t-space", "offer-section"], [1, "container"], [1, "row", "g-md-4", "g-3"], [1, "col-xxl-4", "col-lg-4", "col-sm-6"], [3, "class", "image", "text", "description"], [1, "coupon-box"], [1, "coupon-name"], [1, "fw-semibold", "dark-text"], [1, "coupon-content"], [1, "coupon-apply"], [1, "coupon-code", "success-color"], ["href", "javascript:void(0)", 1, "btn", "theme-btn", "border-btn", "copy-btn", "mt-0"], ["href", "javascript:void(0)", 1, "btn", "theme-btn", "border-btn", "copy-btn", "mt-0", 3, "click"], [3, "image", "text", "description"]], template: function Offer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275conditionalCreate(4, Offer_Conditional_4_Template, 2, 0)(5, Offer_Conditional_5_Template, 4, 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading ? 4 : 5);
      }
    }, dependencies: [TranslateModule, Breadcrumb, NoData, SkeletonOffer, TranslatePipe, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Offer, [{
    type: Component,
    args: [{ selector: "app-offer", imports: [TranslateModule, Breadcrumb, NoData, SkeletonOffer, AsyncPipe], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<div class="section-b-space section-t-space offer-section">
  <div class="container">
    <div class="row g-md-4 g-3">
      @if(loading){ @for(item of skeletonItems; track item){
      <div class="col-xxl-4 col-lg-4 col-sm-6">
        <app-skeleton-offer />
      </div>
      } } @else { @for(coupon of (coupon$ | async) ?? []; track coupon.id){
      <div class="col-xxl-4 col-lg-4 col-sm-6">
        <div class="coupon-box">
          <div class="coupon-name">
            <h5 class="fw-semibold dark-text">{{ coupon?.title }}</h5>
          </div>
          <div class="coupon-content">
            <p>{{ coupon.description }}</p>
            <div class="coupon-apply">
              <h6 class="coupon-code success-color">#{{ coupon?.code }}</h6>
              @if(coupon?.code){
              <a
                href="javascript:void(0)"
                class="btn theme-btn border-btn copy-btn mt-0"
                (click)="copyFunction(coupon.code)"
              >
                {{ 'copy_code' | translate }}
              </a>
              }
            </div>
          </div>
        </div>
      </div>
      }@empty {
      <app-no-data
        [class]="'no-data-added collection-no-data'"
        [image]="'assets/svg/empty-items.svg'"
        [text]="'no_offer' | translate"
        [description]="'no_offer_desc' | translate"
      />
      } }
    </div>
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Offer, { className: "Offer", filePath: "src/app/components/page/offer/offer.ts", lineNumber: 22 });
})();
export {
  Offer
};
//# sourceMappingURL=chunk-ENFSMHD3.js.map
