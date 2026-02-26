import {
  CheckoutAction,
  DownloadInvoiceAction,
  GetOrdersAction,
  OrderTrackingAction,
  PlaceOrderAction,
  RePaymentAction,
  ViewOrderAction
} from "./chunk-VVQLAKFR.js";
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
  __decorate,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/services/order.service.ts
var OrderService = class _OrderService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
  }
  getOrders(payload) {
    return this.http.get(`${environment.URL}/order.json`, { params: payload });
  }
  viewOrder(id) {
    return this.http.get(`${environment.URL}/order/${id}`);
  }
  orderTracking(payload) {
    return this.http.get(`${environment.URL}/trackOrder`, { params: payload });
  }
  placeOrder(payload) {
    return this.http.post(`${environment.baseURL}order`, payload);
  }
  static {
    this.\u0275fac = function OrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/order.state.ts
var OrderState = class OrderState2 {
  constructor() {
    this.notificationService = inject(NotificationService);
    this.router = inject(Router);
    this.orderService = inject(OrderService);
  }
  static order(state) {
    return state.order;
  }
  static selectedOrder(state) {
    return state.selectedOrder;
  }
  static checkout(state) {
    return state.checkout;
  }
  getOrders(ctx, action) {
    return this.orderService.getOrders(action?.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          order: {
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
  viewOrder(ctx, { id }) {
    this.orderService.skeletonLoader = true;
    return this.orderService.getOrders().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const state = ctx.getState();
          const result = results.data.find((order) => order.order_number == id);
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedOrder: result
          }));
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      },
      complete: () => {
        this.orderService.skeletonLoader = false;
      }
    }));
  }
  checkout(ctx, _action) {
    const state = ctx.getState();
    const order = {
      total: {
        convert_point_amount: 65.66,
        convert_wallet_balance: 8.47,
        coupon_total_discount: 10,
        points: 1970,
        points_amount: 65.66,
        shipping_total: 0,
        sub_total: 39.81,
        tax_total: 1.99,
        total: 41.8,
        wallet_balance: 8.47
      }
    };
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      checkout: order
    }));
  }
  placeOrder(_ctx, action) {
    return this.orderService.placeOrder(action.payload).pipe(tap({
      next: (result) => {
        this.notificationService.showSuccess(`Order placed successfully! Order #${result.order_number}`);
        void this.router.navigate(["/"]);
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to place order. Please try again.");
      }
    }));
  }
  rePayment(_ctx, _action) {
  }
  orderTracking(ctx, action) {
    return this.orderService.orderTracking(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          selectedOrder: result
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  downloadInvoice(_ctx, _action) {
  }
  static {
    this.\u0275fac = function OrderState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: OrderState2, factory: OrderState2.\u0275fac });
  }
};
__decorate([
  Action(GetOrdersAction)
], OrderState.prototype, "getOrders", null);
__decorate([
  Action(ViewOrderAction)
], OrderState.prototype, "viewOrder", null);
__decorate([
  Action(CheckoutAction)
], OrderState.prototype, "checkout", null);
__decorate([
  Action(PlaceOrderAction)
], OrderState.prototype, "placeOrder", null);
__decorate([
  Action(RePaymentAction)
], OrderState.prototype, "rePayment", null);
__decorate([
  Action(OrderTrackingAction)
], OrderState.prototype, "orderTracking", null);
__decorate([
  Action(DownloadInvoiceAction)
], OrderState.prototype, "downloadInvoice", null);
__decorate([
  Selector()
], OrderState, "order", null);
__decorate([
  Selector()
], OrderState, "selectedOrder", null);
__decorate([
  Selector()
], OrderState, "checkout", null);
OrderState = __decorate([
  State({
    name: "order",
    defaults: {
      order: {
        data: [],
        total: 0
      },
      selectedOrder: null,
      checkout: null
    }
  })
], OrderState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderState, [{
    type: Injectable
  }], null, { getOrders: [], viewOrder: [], checkout: [], placeOrder: [], rePayment: [], orderTracking: [], downloadInvoice: [] });
})();

export {
  OrderState
};
//# sourceMappingURL=chunk-DLHYWE3C.js.map
