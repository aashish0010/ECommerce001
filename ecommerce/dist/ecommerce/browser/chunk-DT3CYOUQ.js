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

// src/app/shared/store/action/wallet.action.ts
var GetUserTransactionAction = class {
  static {
    this.type = "[Point] Transaction Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/wallet.service.ts
var WalletService = class _WalletService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getUserTransaction(payload) {
    return this.http.get(`${environment.URL}/wallet.json`, { params: payload });
  }
  static {
    this.\u0275fac = function WalletService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WalletService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WalletService, factory: _WalletService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WalletService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/wallet.state.ts
var WalletState = class WalletState2 {
  constructor() {
    this.walletService = inject(WalletService);
  }
  static wallet(state) {
    return state.wallet;
  }
  getUserTransactions(ctx, { payload }) {
    return this.walletService.getUserTransaction(payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          wallet: {
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
          wallet: {
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
    this.\u0275fac = function WalletState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WalletState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: WalletState2, factory: WalletState2.\u0275fac });
  }
};
__decorate([
  Action(GetUserTransactionAction)
], WalletState.prototype, "getUserTransactions", null);
__decorate([
  Selector()
], WalletState, "wallet", null);
WalletState = __decorate([
  State({
    name: "wallet",
    defaults: {
      wallet: {
        balance: 0,
        transactions: {
          data: [],
          total: 0
        }
      }
    }
  })
], WalletState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WalletState, [{
    type: Injectable
  }], null, { getUserTransactions: [] });
})();

export {
  GetUserTransactionAction,
  WalletState
};
//# sourceMappingURL=chunk-DT3CYOUQ.js.map
