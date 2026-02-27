import {
  environment
} from "./chunk-4LUQBUB6.js";
import {
  HttpClient
} from "./chunk-QK7HTLFB.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.confirmed = false;
    this.isLogin = false;
    this.pendingRegistration = null;
  }
  login(payload) {
    return this.http.post(`${environment.baseURL}auth/login`, {
      userName: payload.phone,
      password: payload.password
    });
  }
  register(payload) {
    const parts = (payload.name || "").trim().split(/\s+/).filter(Boolean);
    const firstName = parts[0] || "";
    const middleName = parts.length > 2 ? parts.slice(1, -1).join(" ") : "";
    const lastName = parts.length > 1 ? parts[parts.length - 1] : "";
    return this.http.post(`${environment.baseURL}auth/register`, {
      userName: String(payload.phone),
      firstName,
      middleName,
      lastName,
      email: payload.email,
      phoneNumber: String(payload.phone),
      password: payload.password,
      companyCode: environment.companyCode
    });
  }
  sendOtp(email) {
    return this.http.get(`${environment.baseURL}auth/sendopt`, { params: { email } });
  }
  sendEmailOtp(email) {
    return this.http.get(`${environment.baseURL}auth/sendemailotp`, { params: { email } });
  }
  verifyEmailOtp(payload) {
    return this.http.post(`${environment.baseURL}auth/verifyemail`, {
      email: payload.email,
      otp: payload.otp,
      processId: payload.processId
    });
  }
  verifyOtpAndChangePassword(payload) {
    return this.http.post(`${environment.baseURL}auth/verifyopt`, {
      email: payload.email,
      otp: payload.otp,
      processId: payload.processId,
      newPassword: payload.newPassword
    });
  }
  refreshToken(payload) {
    return this.http.post(`${environment.baseURL}auth/refresh`, payload);
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-DXIDFC26.js.map
