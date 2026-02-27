import {
  compareSlider
} from "./chunk-HUS46LWS.js";
import {
  CompareService,
  CompareState,
  DeleteCompareAction,
  GetCompareAction
} from "./chunk-UMYH4END.js";
import {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective
} from "./chunk-BU5X3MFT.js";
import {
  AddToCartAction
} from "./chunk-HD3MPZTG.js";
import {
  Breadcrumb
} from "./chunk-3DSWFFIY.js";
import "./chunk-6R3AQVTF.js";
import "./chunk-HBLN46Q5.js";
import "./chunk-G25K32MJ.js";
import {
  NgbModule,
  NgbRating
} from "./chunk-MLCQBQYT.js";
import "./chunk-MXUZ2ZBZ.js";
import {
  CurrencySymbolPipe
} from "./chunk-3R3C7ZXW.js";
import "./chunk-TMCH2Z3I.js";
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
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/shop/compare/compare.ts
var _forTrack0 = ($index, $item) => $item.id;
function Compare_Conditional_5_For_3_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "button", 10);
    \u0275\u0275listener("click", function Compare_Conditional_5_For_3_Conditional_0_ng_template_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const product_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeCompare(product_r2.id));
    });
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 11)(6, "div");
    \u0275\u0275element(7, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 13)(9, "h5");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 14)(12, "div", 15)(13, "h5");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currencySymbol");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 14)(21, "div", 15)(22, "h5");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 16)(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 14)(29, "div", 15)(30, "h5");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 16)(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 14)(38, "div", 15)(39, "h5");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 16);
    \u0275\u0275element(43, "ngb-rating", 17);
    \u0275\u0275elementStart(44, "span", 18);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 14)(48, "div", 15)(49, "h5");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 16)(53, "p");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 14)(56, "div", 15)(57, "h5");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 16)(61, "p");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 19)(65, "a", 20);
    \u0275\u0275listener("click", function Compare_Conditional_5_For_3_Conditional_0_ng_template_0_Template_a_click_65_listener() {
      \u0275\u0275restoreView(_r1);
      const product_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.moveToCart(product_r2));
    });
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("src", (product_r2 == null ? null : product_r2.product_thumbnail) ? product_r2 == null ? null : product_r2.product_thumbnail == null ? null : product_r2.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", product_r2 == null ? null : product_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r2 == null ? null : product_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 18, "price"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, product_r2.sale_price));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 22, "discount"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r2.discount ? product_r2.discount : "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 24, "availability"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 26, product_r2.stock_status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 28, "rating"));
    \u0275\u0275advance(3);
    \u0275\u0275property("rate", (product_r2 == null ? null : product_r2.rating_count) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", product_r2.reviews_count, " ", \u0275\u0275pipeBind1(46, 30, "review"), ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 32, "weight"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r2.weight ? product_r2.weight : "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 34, "availability"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 36, product_r2.stock_status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 38, "add_to_cart"));
  }
}
function Compare_Conditional_5_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Compare_Conditional_5_For_3_Conditional_0_ng_template_0_Template, 68, 40, "ng-template", 8);
  }
}
function Compare_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Compare_Conditional_5_For_3_Conditional_0_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275conditional(product_r2 ? 0 : -1);
  }
}
function Compare_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "owl-carousel-o", 7);
    \u0275\u0275repeaterCreate(2, Compare_Conditional_5_For_3_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r2.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 1, ctx_r2.compareItems$));
  }
}
function Compare_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_item"))("description", \u0275\u0275pipeBind1(2, 7, "no_compare_desc"));
  }
}
var Compare = class _Compare {
  constructor() {
    this.store = inject(Store);
    this.compareService = inject(CompareService);
    this.compareItems$ = inject(Store).select(CompareState.compareItems);
    this.breadcrumb = {
      title: "Compare",
      items: [{ label: "Compare", active: true }]
    };
    this.skeletonItems = Array.from({ length: 3 }, (_, index) => index);
    this.options = compareSlider;
    this.store.dispatch(new GetCompareAction());
  }
  moveToCart(product) {
    if (product) {
      const params = {
        id: null,
        product_id: product?.id,
        product: product ? product : null,
        variation: null,
        variation_id: null,
        quantity: 1
      };
      this.store.dispatch(new AddToCartAction(params)).subscribe({
        complete: () => {
          this.removeCompare(product.id);
        }
      });
    }
  }
  removeCompare(id) {
    this.store.dispatch(new DeleteCompareAction(id));
  }
  static {
    this.\u0275fac = function Compare_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Compare)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Compare, selectors: [["app-compare"]], decls: 8, vars: 4, consts: [[3, "breadcrumb"], [1, "compare-section", "section-b-space", "ratio_asos"], [1, "container"], [1, "row"], [1, "col-12"], [1, "slide-4", "compare-box"], [3, "class", "image", "text", "description"], [3, "options"], ["carouselSlide", ""], [1, "compare-part"], ["type", "button", 1, "close-btn", 3, "click"], [1, "img-section"], [1, "img-fluid", 3, "src", "alt"], ["href", "javascript:void(0)"], [1, "detail-part"], [1, "title-detail"], [1, "inner-detail"], [3, "rate"], [1, "text-content", "rating-text"], [1, "btn-part"], ["href", "javascript:void(0)", 1, "btn", "btn-solid", 3, "click"], [3, "image", "text", "description"]], template: function Compare_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275conditionalCreate(5, Compare_Conditional_5_Template, 5, 3, "div", 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275conditionalBranchCreate(7, Compare_Conditional_7_Template, 3, 9, "app-no-data", 6);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(6, 2, ctx.compareItems$)) == null ? null : tmp_1_0.length) ? 5 : 7);
      }
    }, dependencies: [
      TranslateModule,
      NgbModule,
      NgbRating,
      CarouselModule,
      CarouselComponent,
      CarouselSlideDirective,
      Breadcrumb,
      NoData,
      TranslatePipe,
      CurrencySymbolPipe,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Compare, [{
    type: Component,
    args: [{ selector: "app-compare", imports: [
      TranslateModule,
      NgbModule,
      CarouselModule,
      CurrencySymbolPipe,
      Breadcrumb,
      NoData,
      AsyncPipe
    ], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<section class="compare-section section-b-space ratio_asos">
  <div class="container">
    <div class="row">
      <div class="col-12">
        @if((compareItems$ | async)?.length){
        <div class="slide-4 compare-box">
          <owl-carousel-o [options]="options">
            @for(product of (compareItems$ | async); track product.id){ @if(product){
            <ng-template carouselSlide>
              <div>
                <div class="compare-part">
                  <button type="button" class="close-btn" (click)="removeCompare(product.id)">
                    <span>\xD7</span>
                  </button>
                  <div class="img-section">
                    <div>
                      <img
                        [src]="product?.product_thumbnail ? product?.product_thumbnail?.original_url : 'assets/images/placeholder/product.png'"
                        class="img-fluid"
                        [alt]="product?.name"
                      />
                    </div>
                    <a href="javascript:void(0)">
                      <h5>{{ product?.name }}</h5>
                    </a>
                  </div>
                  <div class="detail-part">
                    <div class="title-detail">
                      <h5>{{ 'price' | translate }}</h5>
                    </div>
                    <div class="inner-detail">
                      <p>{{ product.sale_price | currencySymbol}}</p>
                    </div>
                  </div>
                  <div class="detail-part">
                    <div class="title-detail">
                      <h5>{{ 'discount' | translate }}</h5>
                    </div>
                    <div class="inner-detail">
                      <p>{{ product.discount ? product.discount : '-' }}</p>
                    </div>
                  </div>
                  <div class="detail-part">
                    <div class="title-detail">
                      <h5>{{ 'availability' | translate }}</h5>
                    </div>
                    <div class="inner-detail">
                      <p>{{ product.stock_status | translate }}</p>
                    </div>
                  </div>
                  <div class="detail-part">
                    <div class="title-detail">
                      <h5>{{ 'rating' | translate }}</h5>
                    </div>
                    <div class="inner-detail">
                      <ngb-rating [rate]="product?.rating_count || 0" />
                      <span class="text-content rating-text"
                        >({{ product.reviews_count }} {{ 'review' | translate }})</span
                      >
                    </div>
                  </div>
                  <div class="detail-part">
                    <div class="title-detail">
                      <h5>{{ 'weight' | translate }}</h5>
                    </div>
                    <div class="inner-detail">
                      <p>{{ product.weight ? product.weight : "-" }}</p>
                    </div>
                  </div>
                  <div class="detail-part">
                    <div class="title-detail">
                      <h5>{{ 'availability' | translate }}</h5>
                    </div>
                    <div class="inner-detail">
                      <p>{{ product.stock_status | translate }}</p>
                    </div>
                  </div>
                  <div class="btn-part">
                    <a href="javascript:void(0)" class="btn btn-solid" (click)="moveToCart(product)"
                      >{{ 'add_to_cart' | translate }}</a
                    >
                  </div>
                </div>
              </div>
            </ng-template>
            } }
          </owl-carousel-o>
        </div>
        }@else {
        <app-no-data
          [class]="'no-data-added'"
          [image]="'assets/svg/empty-items.svg'"
          [text]="'no_item' | translate"
          [description]="'no_compare_desc' | translate"
        />
        }
      </div>
    </div>
  </div>
</section>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Compare, { className: "Compare", filePath: "src/app/components/shop/compare/compare.ts", lineNumber: 36 });
})();
export {
  Compare
};
//# sourceMappingURL=chunk-CLN5NOJK.js.map
