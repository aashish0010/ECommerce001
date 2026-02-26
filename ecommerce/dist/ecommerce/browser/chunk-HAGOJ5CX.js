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

// src/app/shared/store/action/payment-details.action.ts
var GetPaymentDetailsAction = class {
  static {
    this.type = "[Payment Details] Get";
  }
};
var UpdatePaymentDetailsAction = class {
  static {
    this.type = "[Payment Details] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/payment-details.service.ts
var PaymentDetailsService = class _PaymentDetailsService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getPaymentAccount() {
    return this.http.get(`${environment.URL}/paymentAccount.json`);
  }
  static {
    this.\u0275fac = function PaymentDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentDetailsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentDetailsService, factory: _PaymentDetailsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentDetailsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/payment-details.state.ts
var PaymentDetailsState = class PaymentDetailsState2 {
  constructor() {
    this.notificationService = inject(NotificationService);
    this.PaymentDetailsService = inject(PaymentDetailsService);
  }
  static paymentDetails(state) {
    return state.paymentDetails;
  }
  getPaymentDetails(ctx) {
    return this.PaymentDetailsService.getPaymentAccount().pipe(tap({
      next: (result) => {
        ctx.patchState({
          paymentDetails: result
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  updatePaymentDetails(_ctx, _action) {
  }
  static {
    this.\u0275fac = function PaymentDetailsState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PaymentDetailsState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: PaymentDetailsState2, factory: PaymentDetailsState2.\u0275fac });
  }
};
__decorate([
  Action(GetPaymentDetailsAction)
], PaymentDetailsState.prototype, "getPaymentDetails", null);
__decorate([
  Action(UpdatePaymentDetailsAction)
], PaymentDetailsState.prototype, "updatePaymentDetails", null);
__decorate([
  Selector()
], PaymentDetailsState, "paymentDetails", null);
PaymentDetailsState = __decorate([
  State({
    name: "paymentDetails",
    defaults: {
      paymentDetails: null
    }
  })
], PaymentDetailsState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentDetailsState, [{
    type: Injectable
  }], null, { getPaymentDetails: [], updatePaymentDetails: [] });
})();

export {
  GetPaymentDetailsAction,
  UpdatePaymentDetailsAction,
  PaymentDetailsState
};
//# sourceMappingURL=chunk-HAGOJ5CX.js.map
