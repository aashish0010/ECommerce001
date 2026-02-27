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
  inject,
  map,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/services/color.service.ts
var ColorService = class _ColorService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
  }
  getColors(payload) {
    const params = __spreadValues({ companyInfoId: environment.companyInfoId }, payload);
    return this.http.get(`${environment.baseURL}color`, { params }).pipe(map((res) => ({
      data: res.data || [],
      total: res.total || 0,
      current_page: 1,
      per_page: res.total || 100,
      last_page: 1
    })));
  }
  static {
    this.\u0275fac = function ColorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ColorService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ColorService, factory: _ColorService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/action/color.action.ts
var GetColorsAction = class {
  static {
    this.type = "[Color] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/store/state/color.state.ts
var ColorState = class ColorState2 {
  constructor() {
    this.colorService = inject(ColorService);
  }
  static color(state) {
    return state.color;
  }
  getColors(ctx, action) {
    if (ctx.getState().color.data.length > 0)
      return;
    this.colorService.skeletonLoader = true;
    return this.colorService.getColors(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          color: {
            data: result.data,
            total: result?.total ? result.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.colorService.skeletonLoader = false;
      },
      error: (err) => {
        this.colorService.skeletonLoader = false;
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function ColorState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ColorState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: ColorState2, factory: ColorState2.\u0275fac });
  }
};
__decorate([
  Action(GetColorsAction)
], ColorState.prototype, "getColors", null);
__decorate([
  Selector()
], ColorState, "color", null);
ColorState = __decorate([
  State({
    name: "color",
    defaults: {
      color: {
        data: [],
        total: 0
      }
    }
  })
], ColorState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorState, [{
    type: Injectable
  }], null, { getColors: [] });
})();

export {
  GetColorsAction,
  ColorState
};
//# sourceMappingURL=chunk-UHWVV3DF.js.map
