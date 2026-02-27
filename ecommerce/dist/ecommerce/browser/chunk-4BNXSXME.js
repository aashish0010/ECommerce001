import {
  SkeletonProductBox
} from "./chunk-7JCQSCUH.js";
import {
  ProductBox
} from "./chunk-TMWDIMEK.js";
import "./chunk-HUS46LWS.js";
import "./chunk-P35J2TJJ.js";
import "./chunk-M3EBGQIQ.js";
import "./chunk-4N2KGCEO.js";
import "./chunk-UMYH4END.js";
import "./chunk-BU5X3MFT.js";
import "./chunk-OKT2D4TP.js";
import "./chunk-HD3MPZTG.js";
import {
  Breadcrumb
} from "./chunk-3DSWFFIY.js";
import {
  Button
} from "./chunk-6I2UIIRS.js";
import {
  ProductService,
  ProductState
} from "./chunk-OE35GDC6.js";
import {
  GetProductsAction
} from "./chunk-RWFLVE5E.js";
import "./chunk-LWNWQPUU.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-6R3AQVTF.js";
import "./chunk-HBLN46Q5.js";
import "./chunk-G25K32MJ.js";
import "./chunk-MLCQBQYT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-MXUZ2ZBZ.js";
import "./chunk-3R3C7ZXW.js";
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
  SlicePipe
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  debounceTime,
  distinctUntilChanged,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/page/search/search.ts
var _forTrack0 = ($index, $item) => $item.id;
function Search_Conditional_18_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-skeleton-product-box");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
  }
}
function Search_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Search_Conditional_18_For_1_Template, 2, 2, "div", 14, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.skeletonItems);
  }
}
function Search_Conditional_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-product-box", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("product", product_r2);
  }
}
function Search_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Search_Conditional_19_For_1_Template, 2, 3, "div", 14, _forTrack0);
    \u0275\u0275pipe(2, "slice");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 0, ctx_r0.products, 0, 8));
  }
}
function Search_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_product"))("description", \u0275\u0275pipeBind1(2, 7, "no_product_desc"));
  }
}
var Search = class _Search {
  constructor() {
    this.store = inject(Store);
    this.productService = inject(ProductService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.breadcrumb = {
      title: "Search",
      items: [{ label: "Search", active: true }]
    };
    this.product$ = inject(Store).select(ProductState.product);
    this.search = new FormControl();
    this.totalItems = 0;
    this.skeletonItems = Array.from({ length: 12 }, (_, index) => index);
    this.filter = {
      page: 1,
      // Current page number
      paginate: 12,
      // Display per page,
      status: 1,
      search: ""
    };
    this.route.queryParams.subscribe((params) => {
      if (params["search"]) {
        this.filter["search"] = params["search"];
        this.search.patchValue(params["search"] ? params["search"] : "");
      }
      this.store.dispatch(new GetProductsAction(this.filter));
      this.product$.subscribe((products) => {
        this.products = products.data;
      });
    });
  }
  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((inputValue) => {
      if (inputValue.length >= 0) {
        void this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            search: inputValue
          }
        });
        this.filter["search"] = inputValue;
      }
    });
  }
  searchProduct() {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: this.search.value
      }
    });
    this.filter["search"] = this.search.value;
  }
  static {
    this.\u0275fac = function Search_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Search)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Search, selectors: [["app-search"]], decls: 21, vars: 17, consts: [[3, "breadcrumb"], [1, "authentication-page"], [1, "container"], [1, "search-block"], [1, "row"], [1, "col-lg-6", "offset-lg-3"], [1, "form-header"], [1, "input-group", "form-box"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl"], [1, "input-group-append"], [3, "click", "type", "id", "spinner", "iconClass"], [1, "section-b-space"], [1, "row", "search-product"], [3, "class", "image", "text", "description"], [1, "col-xl-3", "col-md-4", "col-6"], [3, "product"], [3, "image", "text", "description"]], template: function Search_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "section", 3)(4, "div", 2)(5, "div", 4)(6, "div", 5)(7, "form", 6)(8, "div", 7);
        \u0275\u0275element(9, "input", 8);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementStart(11, "div", 9)(12, "app-button", 10);
        \u0275\u0275listener("click", function Search_Template_app_button_click_12_listener() {
          return ctx.searchProduct();
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(15, "section", 11)(16, "div", 2)(17, "div", 12);
        \u0275\u0275conditionalCreate(18, Search_Conditional_18_Template, 2, 0)(19, Search_Conditional_19_Template, 3, 4);
        \u0275\u0275conditionalCreate(20, Search_Conditional_20_Template, 3, 9, "app-no-data", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(9);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(10, 13, "search_product")))("formControl", ctx.search);
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("type", "button")("id", "search-btn")("spinner", false)("iconClass", "ri-search-line");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 15, "search"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.productService.skeletonLoader ? 18 : 19);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.products && !ctx.products.length && !ctx.productService.skeletonLoader ? 20 : -1);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgForm,
      ReactiveFormsModule,
      FormControlDirective,
      TranslateModule,
      Breadcrumb,
      Button,
      ProductBox,
      NoData,
      SkeletonProductBox,
      TranslatePipe,
      SlicePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Search, [{
    type: Component,
    args: [{ selector: "app-search", imports: [
      FormsModule,
      ReactiveFormsModule,
      TranslateModule,
      Breadcrumb,
      Button,
      ProductBox,
      NoData,
      SkeletonProductBox,
      SlicePipe
    ], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<!--section start-->
<section class="authentication-page">
  <div class="container">
    <section class="search-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <form class="form-header">
              <div class="input-group form-box">
                <input
                  type="text"
                  class="form-control"
                  placeholder="{{ 'search_product' | translate }}"
                  [formControl]="search"
                />
                <div class="input-group-append">
                  <app-button
                    [class]="'btn btn-solid'"
                    [type]="'button'"
                    [id]="'search-btn'"
                    [spinner]="false"
                    [iconClass]="'ri-search-line'"
                    (click)="searchProduct()"
                  >
                    {{ 'search' | translate }}
                  </app-button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</section>
<!-- section end -->

<!-- product section start -->
<section class="section-b-space">
  <div class="container">
    <div class="row search-product">
      @if(productService.skeletonLoader){ @for(item of skeletonItems; track item){
      <div class="col-xl-3 col-md-4 col-6">
        <app-skeleton-product-box [style]="'vertical'" />
      </div>
      } }@else { @for(product of products | slice:0:8 ; track product.id){
      <div class="col-xl-3 col-md-4 col-6">
        <app-product-box [product]="product" [style]="'vertical'" />
      </div>
      } } @if(products && !products.length && !productService.skeletonLoader){
      <app-no-data
        [class]="'no-data-added collection-no-data'"
        [image]="'assets/svg/empty-items.svg'"
        [text]="'no_product' | translate"
        [description]="'no_product_desc' | translate"
      />
      }
    </div>
  </div>
</section>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Search, { className: "Search", filePath: "src/app/components/page/search/search.ts", lineNumber: 38 });
})();
export {
  Search
};
//# sourceMappingURL=chunk-4BNXSXME.js.map
