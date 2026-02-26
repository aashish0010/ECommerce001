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

// src/app/shared/store/action/order-status.action.ts
var GetOrderStatusAction = class {
  static {
    this.type = "[Order Status] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/order-status.service.ts
var OrderStatusService = class _OrderStatusService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getOrderStatus(payload) {
    return this.http.get(`${environment.URL}/orderStatus.json`, {
      params: payload
    });
  }
  static {
    this.\u0275fac = function OrderStatusService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderStatusService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderStatusService, factory: _OrderStatusService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderStatusService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/order-status.state.ts
var OrderStatusState = class OrderStatusState2 {
  constructor() {
    this.orderStatusService = inject(OrderStatusService);
  }
  static orderStatus(state) {
    return state.orderStatus;
  }
  static orderStatuses(state) {
    return state.orderStatus.data.map((res) => {
      return { label: res?.name, value: res?.id };
    });
  }
  static selectedOrderStatus(state) {
    return state.selectedOrderStatus;
  }
  getOrderStatus(ctx, action) {
    return this.orderStatusService.getOrderStatus(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          orderStatus: {
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
  static {
    this.\u0275fac = function OrderStatusState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderStatusState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: OrderStatusState2, factory: OrderStatusState2.\u0275fac });
  }
};
__decorate([
  Action(GetOrderStatusAction)
], OrderStatusState.prototype, "getOrderStatus", null);
__decorate([
  Selector()
], OrderStatusState, "orderStatus", null);
__decorate([
  Selector()
], OrderStatusState, "orderStatuses", null);
__decorate([
  Selector()
], OrderStatusState, "selectedOrderStatus", null);
OrderStatusState = __decorate([
  State({
    name: "orderStatus",
    defaults: {
      orderStatus: {
        data: [],
        total: 0
      },
      selectedOrderStatus: null
    }
  })
], OrderStatusState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderStatusState, [{
    type: Injectable
  }], null, { getOrderStatus: [] });
})();

export {
  GetOrderStatusAction,
  OrderStatusState
};
//# sourceMappingURL=chunk-KTOAZ4WG.js.map
