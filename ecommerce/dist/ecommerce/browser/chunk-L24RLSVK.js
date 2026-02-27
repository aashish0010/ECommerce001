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
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/store/action/point.action.ts
var GetUserTransactionAction = class {
  static {
    this.type = "[Point] Transaction Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/point.service.ts
var PointService = class _PointService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getUserTransaction(payload) {
    return this.http.get(`${environment.URL}/points.json`, { params: payload });
  }
  static {
    this.\u0275fac = function PointService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PointService, factory: _PointService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/point.state.ts
var PointState = class PointState2 {
  constructor() {
    this.pointService = inject(PointService);
  }
  static point(state) {
    return state.point;
  }
  getUserTransaction(ctx, { payload }) {
    return this.pointService.getUserTransaction(payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          point: {
            balance: result?.balance,
            transactions: {
              data: result?.transactions?.data,
              total: result?.transactions?.total ? result?.transactions?.total : result?.transactions?.data?.length
            }
          }
        });
      },
      error: (err) => {
        ctx.patchState({
          point: {
            balance: 0,
            transactions: {
              data: [],
              total: 0
            }
          }
        });
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function PointState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PointState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: PointState2, factory: PointState2.\u0275fac });
  }
};
__decorate([
  Action(GetUserTransactionAction)
], PointState.prototype, "getUserTransaction", null);
__decorate([
  Selector()
], PointState, "point", null);
PointState = __decorate([
  State({
    name: "point",
    defaults: {
      point: {
        balance: 0,
        transactions: {
          data: [],
          total: 0
        }
      }
    }
  })
], PointState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointState, [{
    type: Injectable
  }], null, { getUserTransaction: [] });
})();

export {
  GetUserTransactionAction,
  PointState
};
//# sourceMappingURL=chunk-L24RLSVK.js.map
