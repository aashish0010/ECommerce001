import {
  GetCategoriesAction,
  GetCategoryAction,
  GetCategoryBySlugAction,
  GetFooterCategoriesAction,
  GetHeaderCategoriesAction,
  GetProductCategoryAction,
  GetSearchByCategoryAction
} from "./chunk-PM45JHZH.js";
import {
  environment
} from "./chunk-4LUQBUB6.js";
import {
  Action,
  Selector,
  State
} from "./chunk-6YJBSKCB.js";
import {
  HttpClient
} from "./chunk-QK7HTLFB.js";
import {
  Injectable,
  __decorate,
  catchError,
  inject,
  map,
  setClassMetadata,
  shareReplay,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/services/category.service.ts
var CategoryService = class _CategoryService {
  constructor() {
    this.http = inject(HttpClient);
    this.searchSkeleton = false;
    this._cache$ = null;
  }
  getCategories(_payload) {
    if (this._cache$)
      return this._cache$;
    this._cache$ = this.http.get(`${environment.baseURL}product/categories`, {
      params: { companyInfoId: environment.companyInfoId, status: 1 }
    }).pipe(map((res) => {
      const categories = res.data || res.categories || [];
      return { data: [...categories], total: categories.length };
    }), shareReplay(1), catchError((err) => {
      this._cache$ = null;
      return throwError(() => err);
    }));
    return this._cache$;
  }
  getCategoryBySlug(slug) {
    return this.getCategories().pipe(map((res) => {
      const allCategories = res.data || [];
      for (const cat of allCategories) {
        if (cat.slug === slug)
          return cat;
        if (cat.subcategories?.length) {
          const sub = cat.subcategories.find((s) => s.slug === slug);
          if (sub)
            return sub;
        }
      }
      return allCategories[0];
    }));
  }
  static {
    this.\u0275fac = function CategoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/category.state.ts
var CategoryState = class CategoryState2 {
  constructor() {
    this.categoryService = inject(CategoryService);
  }
  static category(state) {
    return state.category;
  }
  static categories(state) {
    return state.categories;
  }
  static footerCategory(state) {
    return state.footerCategory;
  }
  static headerCategory(state) {
    return state.headerCategory;
  }
  static productCategory(state) {
    return state.productCategory;
  }
  static subCategory(state) {
    return state.category;
  }
  static searchByCategory(state) {
    return state.searchByCategory;
  }
  static selectedCategory(state) {
    return state.selectedCategory;
  }
  getCategories(ctx, action) {
    if (ctx.getState().categories.data.length > 0)
      return;
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        if (result && result.data) {
          ctx.patchState({
            categories: {
              data: result.data,
              total: result?.total ? result?.total : result.data.length
            }
          });
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getCategory(ctx, action) {
    if (ctx.getState().category.data.length > 0)
      return;
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        if (result && result.data) {
          ctx.patchState({
            category: {
              data: result.data,
              total: result?.total ? result?.total : result.data.length
            }
          });
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  GetFooterCategories(ctx, action) {
    if (ctx.getState().footerCategory.data.length > 0)
      return;
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        if (result && result.data) {
          ctx.patchState({
            footerCategory: {
              data: result.data,
              total: result?.total ? result?.total : result.data.length
            }
          });
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  GetHeaderCategories(ctx, action) {
    if (ctx.getState().headerCategory.data.length > 0)
      return;
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        if (result && result.data) {
          ctx.patchState({
            headerCategory: {
              data: result.data,
              total: result?.total ? result?.total : result.data.length
            }
          });
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  GetProductCategory(ctx, action) {
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          productCategory: {
            data: result.data,
            total: result?.total ? result?.total : result.data.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getSearchByCategory(ctx, action) {
    this.categoryService.searchSkeleton = true;
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        let categories;
        if (action?.payload?.["search"]) {
          categories = result.data.filter((category) => category.name.toLowerCase().includes(action?.payload?.["search"].toLowerCase()));
        } else {
          categories = result.data;
        }
        ctx.patchState({
          searchByCategory: categories ? categories.slice(0, 4) : []
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      },
      complete: () => {
        this.categoryService.searchSkeleton = false;
      }
    }));
  }
  getCategoryBySlug(ctx, action) {
    return this.categoryService.getCategories().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const result = results.data.find((category) => category.slug == action.slug);
          const state = ctx.getState();
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedCategory: result
          }));
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getSubCategory(category, ids) {
    if (ids?.includes(category.id)) {
      if (category) {
        return category;
      }
    }
    if (category.subcategories?.length) {
      category.subcategories.map((subcategory) => {
        this.getSubCategory(subcategory, ids);
      });
    }
  }
  static {
    this.\u0275fac = function CategoryState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CategoryState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CategoryState2, factory: CategoryState2.\u0275fac });
  }
};
__decorate([
  Action(GetCategoriesAction)
], CategoryState.prototype, "getCategories", null);
__decorate([
  Action(GetCategoryAction)
], CategoryState.prototype, "getCategory", null);
__decorate([
  Action(GetFooterCategoriesAction)
], CategoryState.prototype, "GetFooterCategories", null);
__decorate([
  Action(GetHeaderCategoriesAction)
], CategoryState.prototype, "GetHeaderCategories", null);
__decorate([
  Action(GetProductCategoryAction)
], CategoryState.prototype, "GetProductCategory", null);
__decorate([
  Action(GetSearchByCategoryAction)
], CategoryState.prototype, "getSearchByCategory", null);
__decorate([
  Action(GetCategoryBySlugAction)
], CategoryState.prototype, "getCategoryBySlug", null);
__decorate([
  Selector()
], CategoryState, "category", null);
__decorate([
  Selector()
], CategoryState, "categories", null);
__decorate([
  Selector()
], CategoryState, "footerCategory", null);
__decorate([
  Selector()
], CategoryState, "headerCategory", null);
__decorate([
  Selector()
], CategoryState, "productCategory", null);
__decorate([
  Selector()
], CategoryState, "subCategory", null);
__decorate([
  Selector()
], CategoryState, "searchByCategory", null);
__decorate([
  Selector()
], CategoryState, "selectedCategory", null);
CategoryState = __decorate([
  State({
    name: "category",
    defaults: {
      category: {
        data: [],
        total: 0
      },
      categories: {
        data: [],
        total: 0
      },
      footerCategory: {
        data: [],
        total: 0
      },
      headerCategory: {
        data: [],
        total: 0
      },
      productCategory: {
        data: [],
        total: 0
      },
      searchByCategory: [],
      selectedCategory: null
    }
  })
], CategoryState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryState, [{
    type: Injectable
  }], null, { getCategories: [], getCategory: [], GetFooterCategories: [], GetHeaderCategories: [], GetProductCategory: [], getSearchByCategory: [], getCategoryBySlug: [] });
})();

export {
  CategoryService,
  CategoryState
};
//# sourceMappingURL=chunk-B62VDLFD.js.map
