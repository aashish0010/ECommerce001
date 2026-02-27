import {
  CollectionProducts
} from "./chunk-YERUUJJG.js";
import "./chunk-HTXLVWT3.js";
import "./chunk-3YTNHNM3.js";
import "./chunk-UHWVV3DF.js";
import "./chunk-7JCQSCUH.js";
import "./chunk-TMWDIMEK.js";
import "./chunk-HUS46LWS.js";
import "./chunk-PDGQIHJ4.js";
import {
  BrandState
} from "./chunk-ISUJGA6N.js";
import "./chunk-B62VDLFD.js";
import "./chunk-XVI6NDZ3.js";
import "./chunk-PM45JHZH.js";
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
import "./chunk-6I2UIIRS.js";
import {
  ProductState
} from "./chunk-OE35GDC6.js";
import {
  GetProductsAction
} from "./chunk-RWFLVE5E.js";
import "./chunk-LWNWQPUU.js";
import {
  ActivatedRoute
} from "./chunk-6R3AQVTF.js";
import "./chunk-HBLN46Q5.js";
import "./chunk-G25K32MJ.js";
import "./chunk-MLCQBQYT.js";
import "./chunk-MXUZ2ZBZ.js";
import "./chunk-Q36QR2OY.js";
import "./chunk-3R3C7ZXW.js";
import "./chunk-TMCH2Z3I.js";
import "./chunk-O32MIEQN.js";
import "./chunk-PCGC3M7T.js";
import "./chunk-4LUQBUB6.js";
import {
  Store
} from "./chunk-6YJBSKCB.js";
import "./chunk-QK7HTLFB.js";
import {
  Component,
  Subscription,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/shop/brand/brand.ts
function Brand_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.brand.brand_banner && ctx_r0.brand.brand_banner.original_url, \u0275\u0275sanitizeUrl);
  }
}
function Brand_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.brand.name);
  }
}
var Brand = class _Brand {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.store = inject(Store);
    this.product$ = inject(Store).select(ProductState.product);
    this.brand$ = inject(Store).select(BrandState.selectedBrand);
    this.breadcrumb = {
      title: "Brand",
      items: [{ label: "Collections", active: false }]
    };
    this.layout = "collection_category_slider";
    this.skeleton = true;
    this.filter = {
      page: 1,
      // Current page number
      paginate: 40,
      // Display per page,
      brand: ""
    };
    this.totalItems = 0;
    this.subscriptions = new Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(this.brand$.subscribe((brand) => {
      this.brand = brand;
      this.updateBreadcrumb();
      this.updateFilterAndFetchProducts();
    }));
    this.filter["brand"] = this.route.snapshot.paramMap.get("slug");
    this.store.dispatch(new GetProductsAction(this.filter));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  updateBreadcrumb() {
    this.breadcrumb.title = `Brand: ${this.brand?.name}`;
    this.breadcrumb.items[0].label = this.brand?.name;
  }
  updateFilterAndFetchProducts() {
    if (this.brand) {
      this.filter["brand"] = this.brand.slug;
    }
    this.store.dispatch(new GetProductsAction(this.filter));
  }
  changePage(page) {
    this.filter["page"] = page;
    this.updateFilterAndFetchProducts();
  }
  changePaginate(paginate) {
    this.filter["paginate"] = paginate;
    this.updateFilterAndFetchProducts();
  }
  static {
    this.\u0275fac = function Brand_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Brand)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Brand, selectors: [["app-brand"]], decls: 13, vars: 4, consts: [[3, "breadcrumb"], [1, "brand-section"], [1, "container"], [1, "brand-box"], ["alt", "img", 1, "img-fluid", "w-100", 3, "src"], [1, "section-b-space", "brand-product-box-section"], [1, "collection-wrapper"], [1, "row"], [1, "col-sm-12"], [1, "collection-product-wrapper"], [3, "filter", "gridCol"]], template: function Brand_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275conditionalCreate(4, Brand_Conditional_4_Template, 1, 1, "img", 4)(5, Brand_Conditional_5_Template, 2, 1, "h2");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "section", 5)(7, "div", 6)(8, "div", 2)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        \u0275\u0275element(12, "app-collection-products", 10);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.brand.brand_banner && ctx.brand.brand_banner.original_url ? 4 : 5);
        \u0275\u0275advance(8);
        \u0275\u0275property("filter", ctx.filter)("gridCol", "collection_4_grid");
      }
    }, dependencies: [Breadcrumb, CollectionProducts], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Brand, [{
    type: Component,
    args: [{ selector: "app-brand", imports: [Breadcrumb, CollectionProducts], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<section class="brand-section">
  <div class="container">
    <div class="brand-box">
      @if(brand.brand_banner && brand.brand_banner.original_url){
      <img [src]="brand.brand_banner && brand.brand_banner.original_url" class="img-fluid w-100" alt="img"/>
      } @else {
      <h2>{{ brand.name }}</h2>
      }
    </div>
  </div>
</section>
<section class="section-b-space brand-product-box-section">
  <div class="collection-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="collection-product-wrapper">
            <app-collection-products [filter]="filter" [gridCol]="'collection_4_grid'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Brand, { className: "Brand", filePath: "src/app/components/shop/brand/brand.ts", lineNumber: 23 });
})();
export {
  Brand
};
//# sourceMappingURL=chunk-NZIQHPJZ.js.map
