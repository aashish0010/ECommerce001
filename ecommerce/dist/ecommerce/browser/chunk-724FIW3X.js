import {
  AuthService
} from "./chunk-LEE25DCS.js";
import {
  Router
} from "./chunk-6347PIFH.js";
import {
  NotificationService
} from "./chunk-MUAYKWHK.js";
import {
  HttpClient,
  environment
} from "./chunk-L6CMOIIK.js";
import {
  Action,
  Injectable,
  Selector,
  State,
  Store,
  __decorate,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";

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
    return this.http.get(`${environment.URL}/compare.json`);
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
    this.authService = inject(AuthService);
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
        let ids = result.data.map((product) => product.id);
        ctx.patchState({
          items: result.data,
          total: result?.total ? result?.total : result.data?.length,
          comparIds: ids
        });
      },
      complete: () => {
        this.compareService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  add(_ctx, _action) {
  }
  delete(_ctx, { id: _id }) {
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
//# sourceMappingURL=chunk-724FIW3X.js.map
