import {
  AuthService
} from "./chunk-LEE25DCS.js";
import {
  AccountState,
  GetUserDetailsAction
} from "./chunk-HP6MYKGT.js";
import {
  Injectable,
  Store,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";

// src/app/core/guard/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor() {
    this.store = inject(Store);
    this.authService = inject(AuthService);
  }
  canActivate(_route, state) {
    const token = this.store.selectSnapshot((s) => s.auth?.access_token);
    if (!token) {
      this.authService.redirectUrl = state.url;
      this.authService.isLogin = true;
      return false;
    }
    const user = this.store.selectSnapshot(AccountState.user);
    if (!user) {
      this.store.dispatch(new GetUserDetailsAction());
    }
    return true;
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthGuard
};
//# sourceMappingURL=chunk-SCWJJX4I.js.map
