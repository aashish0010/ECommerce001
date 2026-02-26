import {
  HttpClient,
  environment
} from "./chunk-L6CMOIIK.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";

// src/app/shared/services/theme-option.service.ts
var ThemeOptionService = class _ThemeOptionService {
  constructor() {
    this.http = inject(HttpClient);
    this.preloader = true;
    this.newsletterModal = false;
  }
  getThemeOption() {
    return this.http.get(`${environment.URL}/themeOptions.json`);
  }
  static {
    this.\u0275fac = function ThemeOptionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeOptionService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeOptionService, factory: _ThemeOptionService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeOptionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ThemeOptionService
};
//# sourceMappingURL=chunk-LZFLFOAY.js.map
