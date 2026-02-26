import {
  ClearCartAction
} from "./chunk-HD3MPZTG.js";
import {
  AuthClearAction,
  ForgotPasswordAction,
  LoginAction,
  LoginWithNumberAction,
  LogoutAction,
  RegisterAction,
  SendEmailOtpAction,
  UpdatePasswordAction,
  VerifyEmailOtpAction,
  VerifyNumberOTPAction,
  VerifyOTPAction
} from "./chunk-WDJ2SPEL.js";
import {
  AuthService
} from "./chunk-LEE25DCS.js";
import {
  AccountClearAction,
  GetUserDetailsAction
} from "./chunk-HP6MYKGT.js";
import {
  Router
} from "./chunk-6347PIFH.js";
import {
  NotificationService
} from "./chunk-MUAYKWHK.js";
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

// src/app/shared/store/state/auth.state.ts
var AuthState = class AuthState2 {
  constructor() {
    this.store = inject(Store);
    this.router = inject(Router);
    this.authService = inject(AuthService);
    this.notificationService = inject(NotificationService);
  }
  static accessToken(state) {
    return state.access_token;
  }
  static isAuthenticated(state) {
    return !!state.access_token;
  }
  static email(state) {
    return state.email;
  }
  static number(state) {
    return state.number;
  }
  static token(state) {
    return state.token;
  }
  register(_ctx, action) {
    return this.authService.register(action.payload).pipe(tap({
      next: () => {
        this.notificationService.showSuccess("Account created successfully! Please sign in.");
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Registration failed. Please try again.");
      }
    }));
  }
  login(ctx, action) {
    return this.authService.login(action.payload).pipe(tap({
      next: (res) => {
        ctx.patchState({
          email: action.payload.phone,
          token: res.token || "",
          access_token: res.token || ""
        });
        this.store.dispatch(new GetUserDetailsAction());
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Invalid credentials. Please try again.");
      }
    }));
  }
  loginWithNumber(_ctx, _action) {
    this.store.dispatch(new GetUserDetailsAction());
  }
  forgotPassword(ctx, action) {
    return this.authService.sendOtp(action.payload.email).pipe(tap({
      next: (res) => {
        ctx.patchState({
          email: action.payload.email,
          processId: res.processId || ""
        });
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to send OTP. Please check your email and try again.");
      }
    }));
  }
  sendEmailOtp(ctx, action) {
    return this.authService.sendEmailOtp(action.payload.email).pipe(tap({
      next: (res) => {
        ctx.patchState({
          email: action.payload.email,
          processId: res.processId || ""
        });
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to send OTP. Please try again.");
      }
    }));
  }
  verifyEmailOtp(_ctx, action) {
    return this.authService.verifyEmailOtp(action.payload).pipe(tap({
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Invalid or expired OTP. Please try again.");
      }
    }));
  }
  verifyEmail(ctx, action) {
    ctx.patchState({ token: action.payload.token });
  }
  verifyNumber(_ctx, _action) {
    this.store.dispatch(new GetUserDetailsAction());
  }
  updatePassword(ctx, action) {
    const state = ctx.getState();
    return this.authService.verifyOtpAndChangePassword({
      email: action.payload.email,
      otp: action.payload.token,
      processId: state.processId,
      newPassword: action.payload.password
    }).pipe(tap({
      next: () => {
        ctx.patchState({ token: "", processId: "" });
        this.notificationService.showSuccess("Password updated successfully. Please sign in.");
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to update password. Please try again.");
      }
    }));
  }
  logout(_ctx) {
    this.store.dispatch(new AuthClearAction());
    void this.router.navigate(["/"]);
  }
  authClear(ctx) {
    ctx.patchState({
      email: "",
      token: "",
      access_token: null,
      permissions: [],
      processId: ""
    });
    this.authService.redirectUrl = void 0;
    this.store.dispatch(new AccountClearAction());
    this.store.dispatch(new ClearCartAction());
  }
  static {
    this.\u0275fac = function AuthState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: AuthState2, factory: AuthState2.\u0275fac });
  }
};
__decorate([
  Action(RegisterAction)
], AuthState.prototype, "register", null);
__decorate([
  Action(LoginAction)
], AuthState.prototype, "login", null);
__decorate([
  Action(LoginWithNumberAction)
], AuthState.prototype, "loginWithNumber", null);
__decorate([
  Action(ForgotPasswordAction)
], AuthState.prototype, "forgotPassword", null);
__decorate([
  Action(SendEmailOtpAction)
], AuthState.prototype, "sendEmailOtp", null);
__decorate([
  Action(VerifyEmailOtpAction)
], AuthState.prototype, "verifyEmailOtp", null);
__decorate([
  Action(VerifyOTPAction)
], AuthState.prototype, "verifyEmail", null);
__decorate([
  Action(VerifyNumberOTPAction)
], AuthState.prototype, "verifyNumber", null);
__decorate([
  Action(UpdatePasswordAction)
], AuthState.prototype, "updatePassword", null);
__decorate([
  Action(LogoutAction)
], AuthState.prototype, "logout", null);
__decorate([
  Action(AuthClearAction)
], AuthState.prototype, "authClear", null);
__decorate([
  Selector()
], AuthState, "accessToken", null);
__decorate([
  Selector()
], AuthState, "isAuthenticated", null);
__decorate([
  Selector()
], AuthState, "email", null);
__decorate([
  Selector()
], AuthState, "number", null);
__decorate([
  Selector()
], AuthState, "token", null);
AuthState = __decorate([
  State({
    name: "auth",
    defaults: {
      email: "",
      token: "",
      number: null,
      access_token: "",
      permissions: [],
      processId: ""
    }
  })
], AuthState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthState, [{
    type: Injectable
  }], null, { register: [], login: [], loginWithNumber: [], forgotPassword: [], sendEmailOtp: [], verifyEmailOtp: [], verifyEmail: [], verifyNumber: [], updatePassword: [], logout: [], authClear: [] });
})();

export {
  AuthState
};
//# sourceMappingURL=chunk-L6NFQK45.js.map
