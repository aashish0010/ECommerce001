import {
  CollectionProducts,
  Sidebar
} from "./chunk-YERUUJJG.js";
import "./chunk-HTXLVWT3.js";
import "./chunk-3YTNHNM3.js";
import "./chunk-UHWVV3DF.js";
import "./chunk-7JCQSCUH.js";
import "./chunk-TMWDIMEK.js";
import "./chunk-HUS46LWS.js";
import "./chunk-PDGQIHJ4.js";
import "./chunk-ISUJGA6N.js";
import {
  CategoryState
} from "./chunk-B62VDLFD.js";
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
  ActivatedRoute,
  NavigationEnd,
  Router
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
  filter,
  inject,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/components/shop/category/category.ts
var _c0 = () => ["category"];
var Category = class _Category {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.store = inject(Store);
    this.product$ = inject(Store).select(ProductState.product);
    this.category$ = inject(Store).select(CategoryState.selectedCategory);
    this.breadcrumb = {
      title: "Category",
      items: [{ label: "", active: false }]
    };
    this.layout = "collection_category_slider";
    this.skeleton = true;
    this.filter = {
      page: 1,
      // Current page number
      paginate: 40,
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
      attribute: ""
    };
    this.totalItems = 0;
    this.category$.subscribe((category2) => {
      this.category = category2;
      this.breadcrumb.title = `Category: ${this.category?.name}`;
      this.breadcrumb.items[0].label = this.category?.name;
    });
    const category = this.route.snapshot.paramMap.get("slug");
    this.filter = __spreadProps(__spreadValues({}, this.filter), {
      category
    });
    this.store.dispatch(new GetProductsAction(this.filter));
  }
  ngOnInit() {
    this.routerEventsSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd), switchMap(() => {
      const category = this.route.snapshot.paramMap.get("slug");
      return this.route.queryParams.pipe(switchMap((params) => {
        this.filter = {
          page: params["page"] ? params["page"] : 1,
          paginate: 40,
          status: 1,
          category: params["category"] ? params["category"] : category,
          price: params["price"] ? params["price"] : "",
          brand: params["brand"] ? params["brand"] : "",
          tag: params["tag"] ? params["tag"] : "",
          field: params["field"] ? params["field"] : this.filter["field"],
          sortBy: params["sortBy"] ? params["sortBy"] : this.filter["sortBy"],
          rating: params["rating"] ? params["rating"] : "",
          attribute: params["attribute"] ? params["attribute"] : ""
        };
        this.store.dispatch(new GetProductsAction(this.filter));
        return [];
      }));
    })).subscribe();
  }
  updateFilterAndFetchProducts() {
    if (this.category) {
      this.filter["category"] = this.category.slug;
    }
    this.store.dispatch(new GetProductsAction(this.filter));
  }
  changePage(page) {
    this.filter["category"] = page;
    this.updateFilterAndFetchProducts();
  }
  changePaginate(paginate) {
    this.filter["paginate"] = paginate;
    this.updateFilterAndFetchProducts();
  }
  ngOnDestroy() {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function Category_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Category)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Category, selectors: [["app-category"]], decls: 13, vars: 5, consts: [[3, "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-sm-3", "collection-filter"], [3, "filter", "hideFilter"], [1, "collection-content", "col-lg-9"], [1, "page-main-content"], [1, "col-sm-12"], [1, "collection-product-wrapper"], [3, "filter"]], template: function Category_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "app-collection-sidebar", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 4)(10, "div", 9)(11, "div", 10);
        \u0275\u0275element(12, "app-collection-products", 11);
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(6);
        \u0275\u0275property("filter", ctx.filter)("hideFilter", \u0275\u0275pureFunction0(4, _c0));
        \u0275\u0275advance(6);
        \u0275\u0275property("filter", ctx.filter);
      }
    }, dependencies: [Breadcrumb, Sidebar, CollectionProducts], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Category, [{
    type: Component,
    args: [{ selector: "app-category", imports: [Breadcrumb, Sidebar, CollectionProducts], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<section class="section-b-space">
  <div class="collection-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-3 collection-filter">
          <app-collection-sidebar [filter]="filter" [hideFilter]="['category']" />
        </div>
        <div class="collection-content col-lg-9">
          <div class="page-main-content">
            <div class="row">
              <div class="col-sm-12">
                <div class="collection-product-wrapper">
                  <app-collection-products [filter]="filter" />
                </div>
              </div>
            </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Category, { className: "Category", filePath: "src/app/components/shop/category/category.ts", lineNumber: 23 });
})();
export {
  Category
};
//# sourceMappingURL=chunk-LYBGKNOA.js.map
