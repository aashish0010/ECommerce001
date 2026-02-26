import {
  GetBrandBySlugAction,
  GetBrandsAction
} from "./chunk-XVI6NDZ3.js";
import {
  HttpClient,
  environment
} from "./chunk-L6CMOIIK.js";
import {
  Action,
  Injectable,
  Selector,
  State,
  __decorate,
  inject,
  map,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/services/brand.service.ts
var BrandService = class _BrandService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
  }
  getBrands(payload) {
    const params = __spreadValues({ companyInfoId: environment.companyInfoId }, payload);
    return this.http.get(`${environment.baseURL}brand`, { params }).pipe(map((res) => ({
      data: res.data || [],
      total: res.total || 0,
      current_page: 1,
      per_page: res.total || 100,
      last_page: 1
    })));
  }
  getBrandBySlug(slug) {
    const params = { companyInfoId: environment.companyInfoId };
    return this.http.get(`${environment.baseURL}brand/${slug}`, { params });
  }
  static {
    this.\u0275fac = function BrandService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrandService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BrandService, factory: _BrandService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/brand.state.ts
var BrandState = class BrandState2 {
  constructor() {
    this.brandService = inject(BrandService);
  }
  static brand(state) {
    return state.brand;
  }
  static selectedBrand(state) {
    return state.selectedBrand;
  }
  getBrands(ctx, action) {
    if (ctx.getState().brand.data.length > 0)
      return;
    this.brandService.skeletonLoader = true;
    return this.brandService.getBrands(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          brand: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.brandService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getBrandBySlug(ctx, action) {
    return this.brandService.getBrands().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const result = results.data.find((brand) => brand.slug == action.slug);
          const state = ctx.getState();
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedBrand: result
          }));
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function BrandState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BrandState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: BrandState2, factory: BrandState2.\u0275fac });
  }
};
__decorate([
  Action(GetBrandsAction)
], BrandState.prototype, "getBrands", null);
__decorate([
  Action(GetBrandBySlugAction)
], BrandState.prototype, "getBrandBySlug", null);
__decorate([
  Selector()
], BrandState, "brand", null);
__decorate([
  Selector()
], BrandState, "selectedBrand", null);
BrandState = __decorate([
  State({
    name: "brand",
    defaults: {
      brand: {
        data: [],
        total: 0
      },
      selectedBrand: null
    }
  })
], BrandState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandState, [{
    type: Injectable
  }], null, { getBrands: [], getBrandBySlug: [] });
})();

export {
  BrandService,
  BrandState
};
//# sourceMappingURL=chunk-FG7W7B2L.js.map
