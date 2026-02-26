import {
  CollectionProducts,
  Sidebar
} from "./chunk-SBKJFXDT.js";
import "./chunk-RJJQ4UVE.js";
import "./chunk-V3KVJNBA.js";
import "./chunk-TKFREGUT.js";
import {
  Categories
} from "./chunk-U276DIKF.js";
import "./chunk-WOF3B67E.js";
import "./chunk-6UZMREAA.js";
import {
  collectionCategorySlider
} from "./chunk-HUS46LWS.js";
import {
  AttributeService
} from "./chunk-6TUVHBKM.js";
import "./chunk-FG7W7B2L.js";
import "./chunk-OTOM272R.js";
import "./chunk-XVI6NDZ3.js";
import {
  GetCategoriesAction
} from "./chunk-PM45JHZH.js";
import "./chunk-P35J2TJJ.js";
import "./chunk-AULHPBT7.js";
import {
  ThemeOptionState
} from "./chunk-D2VJHFAS.js";
import "./chunk-724FIW3X.js";
import "./chunk-EMOFCU5M.js";
import "./chunk-XRL72XRK.js";
import "./chunk-HD3MPZTG.js";
import {
  Breadcrumb
} from "./chunk-LBV5SDPN.js";
import "./chunk-LEE25DCS.js";
import "./chunk-RJ7FCDYY.js";
import {
  ProductState
} from "./chunk-OOCN6Z4U.js";
import {
  GetMoreProductAction,
  GetProductsAction
} from "./chunk-RWFLVE5E.js";
import "./chunk-LZFLFOAY.js";
import {
  ActivatedRoute
} from "./chunk-6347PIFH.js";
import "./chunk-MUAYKWHK.js";
import "./chunk-2K52HGL6.js";
import "./chunk-QQXAO3XE.js";
import "./chunk-JLWO6B35.js";
import "./chunk-RZHEXDEF.js";
import "./chunk-XK2M6X6K.js";
import "./chunk-QSTIS5AN.js";
import "./chunk-XTPJ5TZK.js";
import {
  TranslateModule
} from "./chunk-7XQQRBBN.js";
import {
  AsyncPipe,
  environment
} from "./chunk-L6CMOIIK.js";
import {
  Component,
  DestroyRef,
  Input,
  Store,
  inject,
  input,
  setClassMetadata,
  takeUntilDestroyed,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp
} from "./chunk-3KEERULZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/components/shop/collection/widgets/collection-categories/collection-categories.ts
var _c0 = () => [];
var CollectionCategories = class _CollectionCategories {
  constructor() {
    this.store = inject(Store);
    this.style = input("vertical", ...ngDevMode ? [{ debugName: "style" }] : []);
    this.image = input(...ngDevMode ? [void 0, { debugName: "image" }] : []);
    this.theme = input(...ngDevMode ? [void 0, { debugName: "theme" }] : []);
    this.title = input(...ngDevMode ? [void 0, { debugName: "title" }] : []);
    this.sliderOption = input(...ngDevMode ? [void 0, { debugName: "sliderOption" }] : []);
    this.themeOption$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.themeOption$.subscribe((category) => {
      this.categoryIds = category?.collection?.collection_categories_ids;
    });
    if (this.categoryIds?.length) {
      this.store.dispatch(new GetCategoriesAction({
        status: 1,
        ids: this.categoryIds?.join(",")
      })).subscribe;
    }
  }
  static {
    this.\u0275fac = function CollectionCategories_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionCategories)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionCategories, selectors: [["app-collection-categories"]], inputs: { style: [1, "style"], image: [1, "image"], theme: [1, "theme"], title: [1, "title"], sliderOption: [1, "sliderOption"] }, decls: 2, vars: 9, consts: [[3, "image", "title", "categoryIds", "options"]], template: function CollectionCategories_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-categories", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275styleMap(ctx.style());
        \u0275\u0275property("image", ctx.image())("title", ctx.title())("categoryIds", ((tmp_3_0 = \u0275\u0275pipeBind1(1, 6, ctx.themeOption$)) == null ? null : tmp_3_0.collection == null ? null : tmp_3_0.collection.collection_categories_ids) || \u0275\u0275pureFunction0(8, _c0))("options", ctx.sliderOption());
      }
    }, dependencies: [Categories, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionCategories, [{
    type: Component,
    args: [{ selector: "app-collection-categories", imports: [Categories, AsyncPipe], template: '<app-categories\n  [style]="style()"\n  [image]="image()"\n  [title]="title()"\n  [categoryIds]="(themeOption$ | async)?.collection?.collection_categories_ids || []"\n  [options]="sliderOption()!"\n/>\n' }]
  }], () => [], { style: [{ type: Input, args: [{ isSignal: true, alias: "style", required: false }] }], image: [{ type: Input, args: [{ isSignal: true, alias: "image", required: false }] }], theme: [{ type: Input, args: [{ isSignal: true, alias: "theme", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], sliderOption: [{ type: Input, args: [{ isSignal: true, alias: "sliderOption", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionCategories, { className: "CollectionCategories", filePath: "src/app/components/shop/collection/widgets/collection-categories/collection-categories.ts", lineNumber: 19 });
})();

// src/app/components/shop/collection/collection-category-sidebar/collection-category-sidebar.ts
var CollectionCategorySidebar = class _CollectionCategorySidebar {
  constructor() {
    this.attributeService = inject(AttributeService);
  }
  static {
    this.\u0275fac = function CollectionCategorySidebar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionCategorySidebar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionCategorySidebar, selectors: [["app-collection-category-sidebar"]], inputs: { filter: "filter" }, decls: 10, vars: 5, consts: [[1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-sm-3", "collection-filter"], [1, "collection-content", "col-lg-9"], [1, "page-main-content"], [1, "collection-product-wrapper"], [3, "filter"]], template: function CollectionCategorySidebar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "app-collection-categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275element(9, "app-collection-products", 8);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("left", ctx.attributeService.offCanvasMenu ? "0" : "");
        \u0275\u0275advance();
        \u0275\u0275styleMap("classic_vertical");
        \u0275\u0275advance(4);
        \u0275\u0275property("filter", ctx.filter);
      }
    }, dependencies: [CollectionCategories, CollectionProducts], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionCategorySidebar, [{
    type: Component,
    args: [{ selector: "app-collection-category-sidebar", imports: [CollectionCategories, CollectionProducts], template: `<section class="section-b-space">
  <div class="collection-wrapper">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-3 collection-filter"
          [style.left]="attributeService.offCanvasMenu ? '0' : ''"
        >
          <app-collection-categories [style]="'classic_vertical'" />
        </div>
        <div class="collection-content col-lg-9">
          <div class="page-main-content">
            <div class="collection-product-wrapper">
              <app-collection-products [filter]="filter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], null, { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionCategorySidebar, { className: "CollectionCategorySidebar", filePath: "src/app/components/shop/collection/collection-category-sidebar/collection-category-sidebar.ts", lineNumber: 14 });
})();

// src/app/components/shop/collection/collection-category-slider/collection-category-slider.ts
var CollectionCategorySlider = class _CollectionCategorySlider {
  constructor() {
    this.attributeService = inject(AttributeService);
    this.categorySlider = collectionCategorySlider;
  }
  static {
    this.\u0275fac = function CollectionCategorySlider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionCategorySlider)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionCategorySlider, selectors: [["app-collection-category-slider"]], inputs: { filter: "filter" }, decls: 15, vars: 7, consts: [[1, "container"], [1, "row"], [1, "col-12"], [3, "sliderOption"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "col-sm-3", "collection-filter"], [3, "filter"], [1, "collection-content", "col-lg-9"], [1, "page-main-content"], [1, "collection-product-wrapper"]], template: function CollectionCategorySlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2);
        \u0275\u0275element(4, "app-collection-categories", 3);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(5, "section", 4)(6, "div", 5)(7, "div", 0)(8, "div", 1)(9, "div", 6);
        \u0275\u0275element(10, "app-collection-sidebar", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "div", 10);
        \u0275\u0275element(14, "app-collection-products", 7);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275styleMap("horizontal");
        \u0275\u0275property("sliderOption", ctx.categorySlider);
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("left", ctx.attributeService.offCanvasMenu ? "0" : "");
        \u0275\u0275advance();
        \u0275\u0275property("filter", ctx.filter);
        \u0275\u0275advance(4);
        \u0275\u0275property("filter", ctx.filter);
      }
    }, dependencies: [Sidebar, CollectionProducts, CollectionCategories], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionCategorySlider, [{
    type: Component,
    args: [{ selector: "app-collection-category-slider", imports: [Sidebar, CollectionProducts, CollectionCategories], template: `<section>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <app-collection-categories [sliderOption]="categorySlider" [style]="'horizontal'" />
      </div>
    </div>
  </div>
</section>
<section class="section-b-space">
  <div class="collection-wrapper">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-3 collection-filter"
          [style.left]="attributeService.offCanvasMenu ? '0' : ''"
        >
          <app-collection-sidebar [filter]="filter" />
        </div>
        <div class="collection-content col-lg-9">
          <div class="page-main-content">
            <div class="collection-product-wrapper">
              <app-collection-products [filter]="filter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], null, { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionCategorySlider, { className: "CollectionCategorySlider", filePath: "src/app/components/shop/collection/collection-category-slider/collection-category-slider.ts", lineNumber: 16 });
})();

// src/app/components/shop/collection/widgets/banner/banner.ts
function Banner_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 0);
    \u0275\u0275domElement(1, "img", 1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx_r0.StorageURL + ctx_r0.imageUrl(), \u0275\u0275sanitizeUrl);
  }
}
var Banner = class _Banner {
  constructor() {
    this.class = input("banner-contain-2 hover-effect", ...ngDevMode ? [{ debugName: "class" }] : []);
    this.imageUrl = input(...ngDevMode ? [void 0, { debugName: "imageUrl" }] : []);
    this.StorageURL = environment.storageURL;
  }
  static {
    this.\u0275fac = function Banner_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Banner)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Banner, selectors: [["app-collection-category-banner"]], inputs: { class: [1, "class"], imageUrl: [1, "imageUrl"] }, decls: 1, vars: 1, consts: [["href", "javascript:void(0)"], ["alt", "banner", 1, "img-fluid", "lazyload", 3, "src"]], template: function Banner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, Banner_Conditional_0_Template, 2, 1, "a", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.imageUrl() ? 0 : -1);
      }
    }, dependencies: [TranslateModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Banner, [{
    type: Component,
    args: [{ selector: "app-collection-category-banner", imports: [TranslateModule], template: '@if(imageUrl()){\n<a href="javascript:void(0)">\n  <img [src]="StorageURL+imageUrl()" class="img-fluid lazyload" alt="banner" />\n</a>\n}\n' }]
  }], null, { class: [{ type: Input, args: [{ isSignal: true, alias: "class", required: false }] }], imageUrl: [{ type: Input, args: [{ isSignal: true, alias: "imageUrl", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Banner, { className: "Banner", filePath: "src/app/components/shop/collection/widgets/banner/banner.ts", lineNumber: 13 });
})();

// src/app/components/shop/collection/collection-left-sidebar/collection-left-sidebar.ts
function CollectionLeftSidebar_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-collection-category-banner", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r0.bannerImageUrl);
  }
}
var CollectionLeftSidebar = class _CollectionLeftSidebar {
  constructor() {
    this.attributeService = inject(AttributeService);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = res?.collection?.collection_banner_image_url);
  }
  static {
    this.\u0275fac = function CollectionLeftSidebar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionLeftSidebar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionLeftSidebar, selectors: [["app-collection-left-sidebar"]], inputs: { filter: "filter" }, decls: 11, vars: 5, consts: [[1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-xl-3", "col-lg-4", "collection-filter"], [3, "filter"], [1, "collection-content", "col-lg-9"], [1, "page-main-content"], [1, "top-banner-wrapper"], [1, "collection-product-wrapper"], [3, "imageUrl"]], template: function CollectionLeftSidebar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "app-collection-sidebar", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275conditionalCreate(8, CollectionLeftSidebar_Conditional_8_Template, 2, 1, "div", 8);
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275element(10, "app-collection-products", 5);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("left", ctx.attributeService.offCanvasMenu ? "0" : "");
        \u0275\u0275advance();
        \u0275\u0275property("filter", ctx.filter);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.bannerImageUrl ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("filter", ctx.filter);
      }
    }, dependencies: [Banner, Sidebar, CollectionProducts], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionLeftSidebar, [{
    type: Component,
    args: [{ selector: "app-collection-left-sidebar", imports: [Banner, Sidebar, CollectionProducts], template: `<section class="section-b-space">
  <div class="collection-wrapper">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 collection-filter"
          [style.left]="attributeService.offCanvasMenu ? '0' : ''"
        >
          <app-collection-sidebar [filter]="filter" />
        </div>
        <div class="collection-content col-lg-9">
          <div class="page-main-content">
            @if(bannerImageUrl){
            <div class="top-banner-wrapper">
              <app-collection-category-banner [imageUrl]="bannerImageUrl" />
            </div>
            }
            <div class="collection-product-wrapper">
              <app-collection-products [filter]="filter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], () => [], { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionLeftSidebar, { className: "CollectionLeftSidebar", filePath: "src/app/components/shop/collection/collection-left-sidebar/collection-left-sidebar.ts", lineNumber: 20 });
})();

// src/app/components/shop/collection/collection-list/collection-list.ts
function CollectionList_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-collection-category-banner", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r0.bannerImageUrl);
  }
}
var CollectionList = class _CollectionList {
  constructor() {
    this.attributeService = inject(AttributeService);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = res?.collection?.collection_banner_image_url);
  }
  static {
    this.\u0275fac = function CollectionList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionList)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionList, selectors: [["app-collection-list"]], inputs: { filter: "filter" }, decls: 11, vars: 5, consts: [[1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-sm-3", "collection-filter"], [3, "filter"], [1, "collection-content", "col-lg-9"], [1, "page-main-content"], [1, "top-banner-wrapper"], [1, "collection-product-wrapper"], [3, "imageUrl"]], template: function CollectionList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "app-collection-sidebar", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275conditionalCreate(8, CollectionList_Conditional_8_Template, 2, 1, "div", 8);
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275element(10, "app-collection-products", 5);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("left", ctx.attributeService.offCanvasMenu ? "0" : "");
        \u0275\u0275advance();
        \u0275\u0275property("filter", ctx.filter);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.bannerImageUrl ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("filter", ctx.filter);
      }
    }, dependencies: [Banner, Sidebar, CollectionProducts], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionList, [{
    type: Component,
    args: [{ selector: "app-collection-list", imports: [Banner, Sidebar, CollectionProducts], template: `<section class="section-b-space">
  <div class="collection-wrapper">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-3 collection-filter"
          [style.left]="attributeService.offCanvasMenu ? '0' : ''"
        >
          <app-collection-sidebar [filter]="filter" />
        </div>
        <div class="collection-content col-lg-9">
          <div class="page-main-content">
            @if(bannerImageUrl){
            <div class="top-banner-wrapper">
              <app-collection-category-banner [imageUrl]="bannerImageUrl" />
            </div>
            }
            <div class="collection-product-wrapper">
              <app-collection-products [filter]="filter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], () => [], { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionList, { className: "CollectionList", filePath: "src/app/components/shop/collection/collection-list/collection-list.ts", lineNumber: 20 });
})();

// src/app/components/shop/collection/collection-no-sidebar/collection-no-sidebar.ts
function CollectionNoSidebar_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-collection-category-banner", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r0.bannerImageUrl);
  }
}
var CollectionNoSidebar = class _CollectionNoSidebar {
  constructor() {
    this.attributeService = inject(AttributeService);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = res?.collection?.collection_banner_image_url);
  }
  static {
    this.\u0275fac = function CollectionNoSidebar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionNoSidebar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionNoSidebar, selectors: [["app-collection-no-sidebar"]], inputs: { filter: "filter" }, decls: 9, vars: 2, consts: [[1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "collection-content", "col-sm-12"], [1, "page-main-content"], [1, "top-banner-wrapper"], [1, "collection-product-wrapper"], [3, "filter"], [3, "imageUrl"]], template: function CollectionNoSidebar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275conditionalCreate(6, CollectionNoSidebar_Conditional_6_Template, 2, 1, "div", 6);
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275element(8, "app-collection-products", 8);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.bannerImageUrl ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("filter", ctx.filter);
      }
    }, dependencies: [Banner, CollectionProducts], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionNoSidebar, [{
    type: Component,
    args: [{ selector: "app-collection-no-sidebar", imports: [Banner, CollectionProducts], template: '<section class="section-b-space">\n  <div class="collection-wrapper">\n    <div class="container">\n      <div class="row">\n        <div class="collection-content col-sm-12">\n          <div class="page-main-content">\n            @if(bannerImageUrl){\n            <div class="top-banner-wrapper">\n              <app-collection-category-banner [imageUrl]="bannerImageUrl" />\n            </div>\n            }\n            <div class="collection-product-wrapper">\n              <app-collection-products [filter]="filter" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n' }]
  }], () => [], { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionNoSidebar, { className: "CollectionNoSidebar", filePath: "src/app/components/shop/collection/collection-no-sidebar/collection-no-sidebar.ts", lineNumber: 19 });
})();

// src/app/components/shop/collection/collection-product-infinite-scroll/collection-product-infinite-scroll.ts
function CollectionProductInfiniteScroll_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-collection-category-banner", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r0.bannerImageUrl);
  }
}
var CollectionProductInfiniteScroll = class _CollectionProductInfiniteScroll {
  constructor() {
    this.attributeService = inject(AttributeService);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = res?.collection?.collection_banner_image_url);
  }
  static {
    this.\u0275fac = function CollectionProductInfiniteScroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionProductInfiniteScroll)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionProductInfiniteScroll, selectors: [["app-collection-product-infinite-scroll"]], inputs: { filter: "filter" }, decls: 11, vars: 6, consts: [[1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-sm-3", "collection-filter"], [3, "filter"], [1, "collection-content", "col-lg-9"], [1, "page-main-content"], [1, "top-banner-wrapper"], [1, "collection-product-wrapper"], [3, "filter", "infiniteScroll"], [3, "imageUrl"]], template: function CollectionProductInfiniteScroll_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "app-collection-sidebar", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275conditionalCreate(8, CollectionProductInfiniteScroll_Conditional_8_Template, 2, 1, "div", 8);
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275element(10, "app-collection-products", 10);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("left", ctx.attributeService.offCanvasMenu ? "0" : "");
        \u0275\u0275advance();
        \u0275\u0275property("filter", ctx.filter);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.bannerImageUrl ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("filter", ctx.filter)("infiniteScroll", true);
      }
    }, dependencies: [Banner, Sidebar, CollectionProducts], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionProductInfiniteScroll, [{
    type: Component,
    args: [{ selector: "app-collection-product-infinite-scroll", imports: [Banner, Sidebar, CollectionProducts], template: `<section class="section-b-space">
  <div class="collection-wrapper">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-3 collection-filter"
          [style.left]="attributeService.offCanvasMenu ? '0' : ''"
        >
          <app-collection-sidebar [filter]="filter" />
        </div>
        <div class="collection-content col-lg-9">
          <div class="page-main-content">
            @if(bannerImageUrl){
            <div class="top-banner-wrapper">
              <app-collection-category-banner [imageUrl]="bannerImageUrl" />
            </div>
            }
            <div class="collection-product-wrapper">
              <app-collection-products [filter]="filter" [infiniteScroll]="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], () => [], { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionProductInfiniteScroll, { className: "CollectionProductInfiniteScroll", filePath: "src/app/components/shop/collection/collection-product-infinite-scroll/collection-product-infinite-scroll.ts", lineNumber: 20 });
})();

// src/app/components/shop/collection/collection-right-sidebar/collection-right-sidebar.ts
function CollectionRightSidebar_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-collection-category-banner", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r0.bannerImageUrl);
  }
}
var CollectionRightSidebar = class _CollectionRightSidebar {
  constructor() {
    this.attributeService = inject(AttributeService);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = res?.collection?.collection_banner_image_url);
  }
  static {
    this.\u0275fac = function CollectionRightSidebar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionRightSidebar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionRightSidebar, selectors: [["app-collection-right-sidebar"]], inputs: { filter: "filter" }, decls: 11, vars: 5, consts: [[1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "collection-content", "col-lg-9"], [1, "page-main-content"], [1, "top-banner-wrapper"], [1, "collection-product-wrapper"], [3, "filter"], [1, "col-sm-3", "collection-filter"], [3, "imageUrl"]], template: function CollectionRightSidebar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275conditionalCreate(6, CollectionRightSidebar_Conditional_6_Template, 2, 1, "div", 6);
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275element(8, "app-collection-products", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275element(10, "app-collection-sidebar", 8);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.bannerImageUrl ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("filter", ctx.filter);
        \u0275\u0275advance();
        \u0275\u0275styleProp("left", ctx.attributeService.offCanvasMenu ? "0" : "");
        \u0275\u0275advance();
        \u0275\u0275property("filter", ctx.filter);
      }
    }, dependencies: [Banner, Sidebar, CollectionProducts], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionRightSidebar, [{
    type: Component,
    args: [{ selector: "app-collection-right-sidebar", imports: [Banner, Sidebar, CollectionProducts], template: `<section class="section-b-space">
  <div class="collection-wrapper">
    <div class="container">
      <div class="row">
        <div class="collection-content col-lg-9">
          <div class="page-main-content">
            @if(bannerImageUrl){
            <div class="top-banner-wrapper">
              <app-collection-category-banner [imageUrl]="bannerImageUrl" />
            </div>
            }
            <div class="collection-product-wrapper">
              <app-collection-products [filter]="filter" />
            </div>
          </div>
        </div>
        <div
          class="col-sm-3 collection-filter"
          [style.left]="attributeService.offCanvasMenu ? '0' : ''"
        >
          <app-collection-sidebar [filter]="filter" />
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], () => [], { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionRightSidebar, { className: "CollectionRightSidebar", filePath: "src/app/components/shop/collection/collection-right-sidebar/collection-right-sidebar.ts", lineNumber: 20 });
})();

// src/app/components/shop/collection/collection-sidebar-popup/collection-sidebar-popup.ts
function CollectionSidebarPopup_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-collection-category-banner", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r0.bannerImageUrl);
  }
}
var CollectionSidebarPopup = class _CollectionSidebarPopup {
  constructor() {
    this.attributeService = inject(AttributeService);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = res?.collection?.collection_banner_image_url);
  }
  static {
    this.\u0275fac = function CollectionSidebarPopup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionSidebarPopup)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionSidebarPopup, selectors: [["app-collection-sidebar-popup"]], inputs: { filter: "filter" }, decls: 10, vars: 2, consts: [[1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "collection-content", "col-sm-12"], [1, "page-main-content"], [1, "top-banner-wrapper"], [1, "collection-product-wrapper"], [1, ""], [3, "filter"], [3, "imageUrl"]], template: function CollectionSidebarPopup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275conditionalCreate(6, CollectionSidebarPopup_Conditional_6_Template, 2, 1, "div", 6);
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8);
        \u0275\u0275element(9, "app-collection-products", 9);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.bannerImageUrl ? 6 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("filter", ctx.filter);
      }
    }, dependencies: [Banner, CollectionProducts], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionSidebarPopup, [{
    type: Component,
    args: [{ selector: "app-collection-sidebar-popup", imports: [Banner, CollectionProducts], template: '<section class="section-b-space">\n  <div class="collection-wrapper">\n    <div class="container">\n      <div class="row">\n        <div class="collection-content col-sm-12">\n          <div class="page-main-content">\n            @if(bannerImageUrl){\n            <div class="top-banner-wrapper">\n              <app-collection-category-banner [imageUrl]="bannerImageUrl" />\n            </div>\n            }\n            <div class="collection-product-wrapper">\n              <div class="">\n                <app-collection-products [filter]="filter" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n' }]
  }], () => [], { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionSidebarPopup, { className: "CollectionSidebarPopup", filePath: "src/app/components/shop/collection/collection-sidebar-popup/collection-sidebar-popup.ts", lineNumber: 19 });
})();

// src/app/components/shop/collection/collection-top-filter/collection-top-filter.ts
function CollectionTopFilter_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-collection-category-banner", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r0.bannerImageUrl);
  }
}
var CollectionTopFilter = class _CollectionTopFilter {
  constructor() {
    this.attributeService = inject(AttributeService);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = res?.collection?.collection_banner_image_url);
  }
  static {
    this.\u0275fac = function CollectionTopFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionTopFilter)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionTopFilter, selectors: [["app-collection-top-filter"]], inputs: { filter: "filter" }, decls: 9, vars: 3, consts: [[1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "top-banner-wrapper"], [1, "collection-product-wrapper"], [3, "filter", "topFilter"], [3, "imageUrl"]], template: function CollectionTopFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275conditionalCreate(6, CollectionTopFilter_Conditional_6_Template, 2, 1, "div", 6);
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275element(8, "app-collection-products", 8);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.bannerImageUrl ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("filter", ctx.filter)("topFilter", true);
      }
    }, dependencies: [Banner, CollectionProducts], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionTopFilter, [{
    type: Component,
    args: [{ selector: "app-collection-top-filter", imports: [Banner, CollectionProducts], template: '<section class="section-b-space">\n  <div class="collection-wrapper">\n    <div class="container">\n      <div class="row">\n        <div class="collection-content col">\n          <div class="page-main-content">\n            @if(bannerImageUrl){\n            <div class="top-banner-wrapper">\n              <app-collection-category-banner [imageUrl]="bannerImageUrl" />\n            </div>\n            }\n            <div class="collection-product-wrapper">\n              <app-collection-products [filter]="filter" [topFilter]="true" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n' }]
  }], () => [], { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionTopFilter, { className: "CollectionTopFilter", filePath: "src/app/components/shop/collection/collection-top-filter/collection-top-filter.ts", lineNumber: 19 });
})();

// src/app/components/shop/collection/collection.ts
function Collection_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-left-sidebar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Collection_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-right-sidebar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Collection_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-no-sidebar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Collection_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-list", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Collection_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-top-filter", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Collection_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-category-slider", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Collection_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-category-sidebar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Collection_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-sidebar-popup", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Collection_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-product-infinite-scroll", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
var Collection = class _Collection {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.store = inject(Store);
    this.destroyRef = inject(DestroyRef);
    this.product$ = inject(Store).select(ProductState.product);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.layout = "collection_category_slider";
    this.skeleton = true;
    this.breadcrumb = {
      title: "Collections",
      items: [{ label: "Collections", active: false }]
    };
    this.filter = {
      page: 1,
      // Current page number
      paginate: 12,
      // Display per page,
      status: 1,
      field: "created_at",
      price: "",
      category: "",
      tag: "",
      sort: "asc",
      // ASC, DSC
      sortBy: "asc",
      rating: "",
      attribute: "",
      brand: ""
    };
    this.scrollFilter = {
      page: 1,
      paginate: 9
    };
    this.totalItems = 0;
    this.themeOptions$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((option) => {
      this.layout = option?.collection?.collection_layout ? option.collection.collection_layout : "collection_category_slider";
    });
    this.route.queryParams.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      this.filter = {
        page: params["page"] ? params["page"] : 1,
        paginate: params["paginate"] ? params["paginate"] : 12,
        status: 1,
        field: params["field"] ? params["field"] : this.filter["field"],
        price: params["price"] ? params["price"] : "",
        category: params["category"] ? params["category"] : "",
        tag: params["tag"] ? params["tag"] : "",
        sortBy: params["sortBy"] ? params["sortBy"] : this.filter["sortBy"],
        rating: params["rating"] ? params["rating"] : "",
        attribute: params["attribute"] ? params["attribute"] : "",
        brand: params["brand"] ? params["brand"] : ""
      };
      this.scrollFilter = __spreadProps(__spreadValues({}, this.filter), {
        page: this.scrollFilter["page"],
        paginate: this.scrollFilter["paginate"]
      });
      this.store.dispatch(new GetProductsAction(this.filter));
      if (params["layout"]) {
        this.layout = params["layout"];
        if (this.layout == "collection_product_infinite_scroll") {
          this.store.dispatch(new GetMoreProductAction(this.scrollFilter));
        }
      }
      this.filter["layout"] = this.layout;
    });
    this.product$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((product) => this.totalItems = product?.total);
  }
  static {
    this.\u0275fac = function Collection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Collection)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Collection, selectors: [["app-collection"]], decls: 10, vars: 10, consts: [[3, "breadcrumb"], [3, "filter"]], template: function Collection_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275conditionalCreate(1, Collection_Conditional_1_Template, 1, 1, "app-collection-left-sidebar", 1);
        \u0275\u0275conditionalCreate(2, Collection_Conditional_2_Template, 1, 1, "app-collection-right-sidebar", 1);
        \u0275\u0275conditionalCreate(3, Collection_Conditional_3_Template, 1, 1, "app-collection-no-sidebar", 1);
        \u0275\u0275conditionalCreate(4, Collection_Conditional_4_Template, 1, 1, "app-collection-list", 1);
        \u0275\u0275conditionalCreate(5, Collection_Conditional_5_Template, 1, 1, "app-collection-top-filter", 1);
        \u0275\u0275conditionalCreate(6, Collection_Conditional_6_Template, 1, 1, "app-collection-category-slider", 1);
        \u0275\u0275conditionalCreate(7, Collection_Conditional_7_Template, 1, 1, "app-collection-category-sidebar", 1);
        \u0275\u0275conditionalCreate(8, Collection_Conditional_8_Template, 1, 1, "app-collection-sidebar-popup", 1);
        \u0275\u0275conditionalCreate(9, Collection_Conditional_9_Template, 1, 1, "app-collection-product-infinite-scroll", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "collection_left_sidebar" ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "collection_right_sidebar" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "collection_no_sidebar" ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "collection_2_grid" || ctx.layout === "collection_3_grid" || ctx.layout === "collection_4_grid" || ctx.layout === "collection_list_view" ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "collection_top_filter" ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "collection_category_slider" ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "collection_category_sidebar" ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "collection_sidebar_popup" ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "collection_product_infinite_scroll" ? 9 : -1);
      }
    }, dependencies: [
      Breadcrumb,
      CollectionLeftSidebar,
      CollectionRightSidebar,
      CollectionNoSidebar,
      CollectionList,
      CollectionTopFilter,
      CollectionCategorySlider,
      CollectionCategorySidebar,
      CollectionSidebarPopup,
      CollectionProductInfiniteScroll
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Collection, [{
    type: Component,
    args: [{ selector: "app-collection", imports: [
      Breadcrumb,
      CollectionLeftSidebar,
      CollectionRightSidebar,
      CollectionNoSidebar,
      CollectionList,
      CollectionTopFilter,
      CollectionCategorySlider,
      CollectionCategorySidebar,
      CollectionSidebarPopup,
      CollectionProductInfiniteScroll
    ], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

@if(layout === 'collection_left_sidebar'){
<app-collection-left-sidebar [filter]="filter" />
} @if(layout === 'collection_right_sidebar'){
<app-collection-right-sidebar [filter]="filter" />
} @if(layout === 'collection_no_sidebar'){
<app-collection-no-sidebar [filter]="filter" />
} @if(layout === 'collection_2_grid' || layout === 'collection_3_grid' || layout ===
'collection_4_grid' || layout === 'collection_list_view'){
<app-collection-list [filter]="filter" />
} @if(layout === 'collection_top_filter'){
<app-collection-top-filter [filter]="filter" />
} @if(layout === 'collection_category_slider'){
<app-collection-category-slider [filter]="filter" />
} @if(layout === 'collection_category_sidebar'){
<app-collection-category-sidebar [filter]="filter" />
} @if(layout === 'collection_sidebar_popup'){
<app-collection-sidebar-popup [filter]="filter" />
} @if(layout === 'collection_product_infinite_scroll'){
<app-collection-product-infinite-scroll [filter]="filter" />
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Collection, { className: "Collection", filePath: "src/app/components/shop/collection/collection.ts", lineNumber: 46 });
})();
export {
  Collection
};
//# sourceMappingURL=chunk-FELNS54R.js.map
