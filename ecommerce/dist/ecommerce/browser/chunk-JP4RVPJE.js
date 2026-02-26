import {
  GetRefundAction,
  SendRefundRequestAction
} from "./chunk-UTLPXFOE.js";
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
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";

// src/app/shared/services/refund.service.ts
var RefundService = class _RefundService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getRefunds(payload) {
    return this.http.get(`${environment.URL}/refund.json`, { params: payload });
  }
  static {
    this.\u0275fac = function RefundService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefundService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RefundService, factory: _RefundService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefundService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/refund.state.ts
var RefundState = class RefundState2 {
  constructor() {
    this.refundService = inject(RefundService);
  }
  static refund(state) {
    return state.refund;
  }
  getRefund(ctx, action) {
    return this.refundService.getRefunds(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          refund: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  sendRefundStatus(_ctx, _action) {
  }
  static {
    this.\u0275fac = function RefundState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RefundState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: RefundState2, factory: RefundState2.\u0275fac });
  }
};
__decorate([
  Action(GetRefundAction)
], RefundState.prototype, "getRefund", null);
__decorate([
  Action(SendRefundRequestAction)
], RefundState.prototype, "sendRefundStatus", null);
__decorate([
  Selector()
], RefundState, "refund", null);
RefundState = __decorate([
  State({
    name: "refund",
    defaults: {
      refund: {
        data: [],
        total: 0
      }
    }
  })
], RefundState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefundState, [{
    type: Injectable
  }], null, { getRefund: [], sendRefundStatus: [] });
})();

export {
  RefundState
};
//# sourceMappingURL=chunk-JP4RVPJE.js.map
