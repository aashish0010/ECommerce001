import {
  GetCategoryProductsAction,
  GetMenuProductsAction,
  GetMoreProductAction,
  GetProductByIdsAction,
  GetProductBySearchAction,
  GetProductBySearchListAction,
  GetProductBySlugAction,
  GetProductsAction,
  GetRelatedProductsAction,
  GetStoreProductsAction
} from "./chunk-RWFLVE5E.js";
import {
  ThemeOptionService
} from "./chunk-LWNWQPUU.js";
import {
  Router
} from "./chunk-6R3AQVTF.js";
import {
  environment
} from "./chunk-4LUQBUB6.js";
import {
  Action,
  Selector,
  State,
  Store
} from "./chunk-6YJBSKCB.js";
import {
  HttpClient
} from "./chunk-QK7HTLFB.js";
import {
  EMPTY,
  Injectable,
  __decorate,
  catchError,
  inject,
  map,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/services/product.service.ts
var ProductService = class _ProductService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
    this.skeletonCategoryProductLoader = false;
    this.productFilter = false;
    this.searchSkeleton = false;
  }
  getProducts(payload) {
    const params = __spreadValues({ companyInfoId: environment.companyInfoId }, payload);
    return this.http.get(`${environment.baseURL}product`, { params }).pipe(map((res) => ({
      data: res.data || res.products || [],
      total: res.total || 0,
      current_page: res.page || 1,
      per_page: res.pageSize || 20,
      last_page: res.totalPages || 1
    })));
  }
  getProductBySlug(slug) {
    return this.http.get(`${environment.baseURL}product/${slug}`).pipe(map((res) => res.product || res));
  }
  getProductBySearchList(payload) {
    const params = __spreadValues({ companyInfoId: environment.companyInfoId }, payload);
    return this.http.get(`${environment.baseURL}product`, { params }).pipe(map((res) => ({
      data: res.data || res.products || [],
      total: res.total || 0,
      current_page: res.page || 1,
      per_page: res.pageSize || 20,
      last_page: res.totalPages || 1
    })));
  }
  static {
    this.\u0275fac = function ProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/product.state.ts
var ProductState = class ProductState2 {
  constructor() {
    this.store = inject(Store);
    this.router = inject(Router);
    this.productService = inject(ProductService);
    this.themeOptionService = inject(ThemeOptionService);
  }
  static product(state) {
    return state.product;
  }
  static productByIds(state) {
    return state.productByIds;
  }
  static productBySearch(state) {
    return state.productBySearch;
  }
  static productBySearchList(state) {
    return state.productBySearchList;
  }
  static selectedProduct(state) {
    return state.selectedProduct;
  }
  static relatedProducts(state) {
    return state.relatedProducts;
  }
  static categoryProducts(state) {
    return state.categoryProducts;
  }
  static categoryProductsTotal(state) {
    return state.categoryProductsTotal;
  }
  static storeProducts(state) {
    return state.storeProducts;
  }
  static menuProducts(state) {
    return state.menuProducts;
  }
  static moreProduct(state) {
    return state.moreProduct;
  }
  getProducts(ctx, action) {
    this.productService.skeletonLoader = true;
    return this.productService.getProducts(action.payload).pipe(tap({
      next: (result) => {
        let products = result.data || [];
        if (action?.payload) {
          if (action?.payload?.["category"]) {
            products = products.filter((product) => product?.categories?.length && product.categories.some((category) => action?.payload?.["category"]?.split(",")?.includes(category.slug)));
            products = products.length ? products : result.data;
          }
          if (action?.payload?.["brand"]) {
            const brandSlugs = action.payload["brand"].split(",");
            products = products.filter((product) => product?.brand && brandSlugs.includes(product.brand.slug));
          }
          if (action?.payload?.["color"]) {
            const colorSlugs = action.payload["color"].split(",");
            products = products.filter((product) => product?.colors?.length && product.colors.some((color) => colorSlugs.includes(color.slug)));
          }
          if (action?.payload?.["sortBy"]) {
            if (action?.payload?.["sortBy"] === "asc") {
              products = products.sort((a, b) => a.id - b.id);
            } else if (action?.payload?.["sortBy"] === "desc") {
              products = products.sort((a, b) => b.id - a.id);
            } else if (action?.payload?.["sortBy"] === "a-z") {
              products = products.sort((a, b) => a.name.localeCompare(b.name));
            } else if (action?.payload?.["sortBy"] === "z-a") {
              products = products.sort((a, b) => b.name.localeCompare(a.name));
            } else if (action?.payload?.["sortBy"] === "low-high") {
              products = products.sort((a, b) => (a.sale_price || a.price) - (b.sale_price || b.price));
            } else if (action?.payload?.["sortBy"] === "high-low") {
              products = products.sort((a, b) => (b.sale_price || b.price) - (a.sale_price || a.price));
            }
          } else {
            products = products.sort((a, b) => a.id - b.id);
          }
          if (action?.payload?.["search"]) {
            products = products.filter((product) => product.name.toLowerCase().includes(action?.payload?.["search"].toLowerCase()));
          }
        }
        ctx.patchState({
          product: {
            data: products,
            total: products.length ? products.length : result.data?.length || 0
          }
        });
      },
      complete: () => {
        this.productService.skeletonLoader = false;
      },
      error: (err) => {
        this.productService.skeletonLoader = false;
        throw new Error(err?.error?.message);
      }
    }));
  }
  getProductByIds(ctx, action) {
    return this.productService.getProducts(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          productByIds: result.data
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getProductBySlug(ctx, { slug }) {
    this.themeOptionService.preloader = true;
    return this.productService.getProductBySlug(slug).pipe(tap({
      next: (result) => {
        if (result) {
          result.related_products = result.related_products?.length ? result.related_products : [];
          result.cross_sell_products = result.cross_sell_products?.length ? result.cross_sell_products : [];
          const ids = [...result.related_products || [], ...result.cross_sell_products || []];
          const categoryIds = result?.categories?.map((category) => category.id) || [];
          if (ids.length || categoryIds.length) {
            this.store.dispatch(new GetRelatedProductsAction({
              ids: ids?.join(","),
              category_ids: categoryIds?.join(","),
              status: 1
            }));
          }
          const state = ctx.getState();
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedProduct: result
          }));
        }
      },
      complete: () => {
        this.themeOptionService.preloader = false;
      },
      error: (err) => {
        this.themeOptionService.preloader = false;
        void this.router.navigate(["/404"]);
        throw new Error(err?.error?.message);
      }
    }));
  }
  getRelatedProducts(ctx, action) {
    this.themeOptionService.preloader = true;
    return this.productService.getProducts(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          relatedProducts: result.data
        }));
      },
      complete: () => {
        this.themeOptionService.preloader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getCategoryProducts(ctx, action) {
    this.productService.skeletonCategoryProductLoader = true;
    return this.productService.getProducts(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        result.data.map((product) => {
          product["categories_ids"] = product?.categories?.map((category) => category.id) || [];
        });
        let products = result.data.filter((product) => product?.categories_ids?.includes(action.payload["category_id"]));
        const categoryProductsTotal = products.length;
        products.splice(action.payload["paginate"]);
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          product: {
            data: [...state.product.data, ...result.data],
            total: state.product.data.length + result.data.length
          },
          categoryProducts: products,
          categoryProductsTotal
        }));
        this.productService.skeletonCategoryProductLoader = false;
      },
      complete: () => {
        this.productService.skeletonCategoryProductLoader = false;
        this.themeOptionService.preloader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getStoreProducts(ctx, action) {
    return this.productService.getProducts(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          storeProducts: result.data
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getMenuProducts(ctx, action) {
    if (ctx.getState().menuProducts.length > 0)
      return;
    return this.productService.getProducts(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          menuProducts: result.data
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getProductBySearch(ctx, action) {
    this.productService.searchSkeleton = true;
    return this.productService.getProducts(action.payload).pipe(tap({
      next: (result) => {
        let products;
        if (action?.payload?.["search"]) {
          products = result.data.filter((product) => product.name.toLowerCase().includes(action?.payload?.["search"].toLowerCase()));
        } else {
          products = result.data;
        }
        ctx.patchState({
          productBySearch: products.splice(0, 4)
        });
      },
      complete: () => {
        this.productService.searchSkeleton = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getProductBySearchList(ctx, action) {
    if (ctx.getState().productBySearchList.length > 0)
      return;
    this.productService.searchSkeleton = true;
    return this.productService.getProductBySearchList(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          productBySearchList: result.data
        });
      },
      complete: () => {
        this.productService.searchSkeleton = false;
      }
    }), catchError(() => {
      this.productService.searchSkeleton = false;
      ctx.patchState({ productBySearchList: [] });
      return EMPTY;
    }));
  }
  getMoreProduct(ctx, action) {
    return this.productService.getProducts(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        result.data.map((product) => {
          product["categories_ids"] = product?.categories?.map((category) => category.id) || [];
        });
        let filteredProducts = result.data.filter((product) => action.payload["category_id"]?.some((category_id) => product.categories_ids.includes(category_id)));
        const page = action.payload["page"];
        const itemsPerPage = action.payload["paginate"];
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        let paginatedProducts = filteredProducts.length ? filteredProducts : result.data.slice(startIndex, endIndex);
        if (action.value) {
          ctx.patchState({
            moreProduct: [...state.moreProduct, ...paginatedProducts]
          });
        } else {
          ctx.patchState({
            moreProduct: [...paginatedProducts]
          });
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function ProductState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: ProductState2, factory: ProductState2.\u0275fac });
  }
};
__decorate([
  Action(GetProductsAction)
], ProductState.prototype, "getProducts", null);
__decorate([
  Action(GetProductByIdsAction)
], ProductState.prototype, "getProductByIds", null);
__decorate([
  Action(GetProductBySlugAction)
], ProductState.prototype, "getProductBySlug", null);
__decorate([
  Action(GetRelatedProductsAction)
], ProductState.prototype, "getRelatedProducts", null);
__decorate([
  Action(GetCategoryProductsAction)
], ProductState.prototype, "getCategoryProducts", null);
__decorate([
  Action(GetStoreProductsAction)
], ProductState.prototype, "getStoreProducts", null);
__decorate([
  Action(GetMenuProductsAction)
], ProductState.prototype, "getMenuProducts", null);
__decorate([
  Action(GetProductBySearchAction)
], ProductState.prototype, "getProductBySearch", null);
__decorate([
  Action(GetProductBySearchListAction)
], ProductState.prototype, "getProductBySearchList", null);
__decorate([
  Action(GetMoreProductAction)
], ProductState.prototype, "getMoreProduct", null);
__decorate([
  Selector()
], ProductState, "product", null);
__decorate([
  Selector()
], ProductState, "productByIds", null);
__decorate([
  Selector()
], ProductState, "productBySearch", null);
__decorate([
  Selector()
], ProductState, "productBySearchList", null);
__decorate([
  Selector()
], ProductState, "selectedProduct", null);
__decorate([
  Selector()
], ProductState, "relatedProducts", null);
__decorate([
  Selector()
], ProductState, "categoryProducts", null);
__decorate([
  Selector()
], ProductState, "categoryProductsTotal", null);
__decorate([
  Selector()
], ProductState, "storeProducts", null);
__decorate([
  Selector()
], ProductState, "menuProducts", null);
__decorate([
  Selector()
], ProductState, "moreProduct", null);
ProductState = __decorate([
  State({
    name: "product",
    defaults: {
      product: {
        data: [],
        total: 0
      },
      selectedProduct: null,
      categoryProducts: [],
      categoryProductsTotal: 0,
      relatedProducts: [],
      storeProducts: [],
      dealProducts: [],
      menuProducts: [],
      productBySearch: [],
      productBySearchList: [],
      productByIds: [],
      moreProduct: []
    }
  })
], ProductState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductState, [{
    type: Injectable
  }], null, { getProducts: [], getProductByIds: [], getProductBySlug: [], getRelatedProducts: [], getCategoryProducts: [], getStoreProducts: [], getMenuProducts: [], getProductBySearch: [], getProductBySearchList: [], getMoreProduct: [] });
})();

// src/app/shared/store/action/loader.action.ts
var ShowLoaderAction = class {
  static {
    this.type = "[Loader] Show loader action";
  }
  constructor(loading = true) {
    this.loading = loading;
  }
};
var HideLoaderAction = class {
  static {
    this.type = "[Loader] Hide loader action";
  }
};
var ShowButtonSpinnerAction = class {
  static {
    this.type = "[Loader] Show Button Spinner action";
  }
  constructor(loading = true, id) {
    this.loading = loading;
    this.id = id;
  }
};
var HideButtonSpinnerAction = class {
  static {
    this.type = "[Loader] Hide Button Spinner action";
  }
};

// src/app/shared/store/state/loader.state.ts
var LoaderState = class LoaderState2 {
  static status(state) {
    return state.status;
  }
  static loadingCount(state) {
    return state?.loadingCount;
  }
  static buttonSpinner(state) {
    return state.button_spinner;
  }
  showLoaderAction(ctx, action) {
    const state = ctx.getState();
    const count = state?.loadingCount ? state?.loadingCount : 0;
    ctx.patchState({ status: action?.loading, loadingCount: count + 1 });
  }
  hideLoaderAction(ctx) {
    const state = ctx.getState();
    ctx.patchState({
      status: state?.loadingCount === 1 ? false : true,
      loadingCount: state?.loadingCount - 1
    });
  }
  showButtonSpinnerAction(ctx, action) {
    const state = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state), { button_spinner: action?.loading }));
  }
  HideButtonSpinnerAction(ctx) {
    const state = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state), { button_spinner: false }));
  }
  static {
    this.\u0275fac = function LoaderState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoaderState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: LoaderState2, factory: LoaderState2.\u0275fac });
  }
};
__decorate([
  Action(ShowLoaderAction)
], LoaderState.prototype, "showLoaderAction", null);
__decorate([
  Action(HideLoaderAction)
], LoaderState.prototype, "hideLoaderAction", null);
__decorate([
  Action(ShowButtonSpinnerAction)
], LoaderState.prototype, "showButtonSpinnerAction", null);
__decorate([
  Action(HideButtonSpinnerAction)
], LoaderState.prototype, "HideButtonSpinnerAction", null);
__decorate([
  Selector()
], LoaderState, "status", null);
__decorate([
  Selector()
], LoaderState, "loadingCount", null);
__decorate([
  Selector()
], LoaderState, "buttonSpinner", null);
LoaderState = __decorate([
  State({
    name: "loader",
    defaults: {
      status: false,
      loadingCount: 0,
      button_spinner: false,
      button_id: null
    }
  })
], LoaderState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderState, [{
    type: Injectable
  }], null, { showLoaderAction: [], hideLoaderAction: [], showButtonSpinnerAction: [], HideButtonSpinnerAction: [] });
})();

export {
  ProductService,
  ProductState,
  ShowLoaderAction,
  HideLoaderAction,
  ShowButtonSpinnerAction,
  HideButtonSpinnerAction,
  LoaderState
};
//# sourceMappingURL=chunk-OE35GDC6.js.map
