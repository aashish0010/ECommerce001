import {
  Router
} from "./chunk-6R3AQVTF.js";
import {
  NotificationService
} from "./chunk-HBLN46Q5.js";
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
  Injectable,
  __decorate,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/store/action/compare.action.ts
var GetCompareAction = class {
  static {
    this.type = "[Compare] Get";
  }
};
var AddToCompareAction = class {
  static {
    this.type = "[Compare] post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var DeleteCompareAction = class {
  static {
    this.type = "[Compare] delete";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/services/compare.service.ts
var CompareService = class _CompareService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
  }
  getComparItems() {
    return this.http.get(`${environment.baseURL}compare`);
  }
  addToCompare(productId) {
    return this.http.post(`${environment.baseURL}compare`, {
      product_id: productId
    });
  }
  removeFromCompare(productId) {
    return this.http.delete(`${environment.baseURL}compare/${productId}`);
  }
  static {
    this.\u0275fac = function CompareService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompareService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompareService, factory: _CompareService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/compare.state.ts
var CompareState = class CompareState2 {
  constructor() {
    this.store = inject(Store);
    this.router = inject(Router);
    this.notificationService = inject(NotificationService);
    this.compareService = inject(CompareService);
  }
  static compareItems(state) {
    return state.items;
  }
  static compareIds(state) {
    return state.comparIds;
  }
  static compareTotal(state) {
    return state.total;
  }
  getCompareItems(ctx) {
    if (!this.store.selectSnapshot((state) => state.auth && state.auth.access_token)) {
      return;
    }
    this.compareService.skeletonLoader = true;
    return this.compareService.getComparItems().pipe(tap({
      next: (result) => {
        const data = Array.isArray(result) ? result : result.data || [];
        const ids = data.map((product) => product.id);
        ctx.patchState({
          items: data,
          total: result?.total ? result.total : data.length,
          comparIds: ids
        });
      },
      complete: () => {
        this.compareService.skeletonLoader = false;
      },
      error: (err) => {
        this.compareService.skeletonLoader = false;
        throw new Error(err?.error?.message);
      }
    }));
  }
  add(ctx, action) {
    if (!this.store.selectSnapshot((state) => state.auth && state.auth.access_token)) {
      this.notificationService.showError("Please login to compare products.");
      return;
    }
    const productId = action.payload?.["product_id"];
    if (!productId)
      return;
    return this.compareService.addToCompare(productId).pipe(tap({
      next: () => {
        const state = ctx.getState();
        if (!state.comparIds.includes(productId)) {
          ctx.patchState({
            comparIds: [...state.comparIds, productId]
          });
        }
        this.notificationService.showSuccess("Added to compare.");
        this.store.dispatch(new GetCompareAction());
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to add to compare.");
      }
    }));
  }
  delete(ctx, { id }) {
    return this.compareService.removeFromCompare(id).pipe(tap({
      next: () => {
        const state = ctx.getState();
        ctx.patchState({
          items: state.items.filter((item) => item.id !== id),
          total: state.total - 1,
          comparIds: state.comparIds.filter((cId) => cId !== id)
        });
        this.notificationService.showSuccess("Removed from compare.");
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to remove from compare.");
      }
    }));
  }
  static {
    this.\u0275fac = function CompareState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompareState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CompareState2, factory: CompareState2.\u0275fac });
  }
};
__decorate([
  Action(GetCompareAction)
], CompareState.prototype, "getCompareItems", null);
__decorate([
  Action(AddToCompareAction)
], CompareState.prototype, "add", null);
__decorate([
  Action(DeleteCompareAction)
], CompareState.prototype, "delete", null);
__decorate([
  Selector()
], CompareState, "compareItems", null);
__decorate([
  Selector()
], CompareState, "compareIds", null);
__decorate([
  Selector()
], CompareState, "compareTotal", null);
CompareState = __decorate([
  State({
    name: "compare",
    defaults: {
      items: [],
      total: 0,
      comparIds: []
    }
  })
], CompareState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareState, [{
    type: Injectable
  }], null, { getCompareItems: [], add: [], delete: [] });
})();

export {
  GetCompareAction,
  AddToCompareAction,
  DeleteCompareAction,
  CompareService,
  CompareState
};
//# sourceMappingURL=chunk-UMYH4END.js.map
