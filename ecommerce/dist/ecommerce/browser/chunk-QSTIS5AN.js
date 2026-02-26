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

// src/app/shared/store/action/setting.action.ts
var GetSettingOptionAction = class {
  static {
    this.type = "[Setting] Get";
  }
};
var SelectedCurrencyAction = class {
  static {
    this.type = "[Setting] SetCurrency";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/setting.service.ts
var SettingService = class _SettingService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getSettingOption() {
    return this.http.get(`${environment.URL}/settings.json`);
  }
  static {
    this.\u0275fac = function SettingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingService, factory: _SettingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/setting.state.ts
var SettingState = class SettingState2 {
  constructor() {
    this.settingService = inject(SettingService);
  }
  static setting(state) {
    return state.setting;
  }
  static selectedCurrency(state) {
    return state.selectedCurrency;
  }
  getSettingOptions(ctx) {
    return this.settingService.getSettingOption().pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        if (!state.selectedCurrency && result?.values?.general) {
          state.selectedCurrency = result?.values?.general.default_currency;
        }
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          setting: result.values
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  selectedCurrency(ctx, action) {
    const state = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      selectedCurrency: action.payload
    }));
  }
  static {
    this.\u0275fac = function SettingState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SettingState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: SettingState2, factory: SettingState2.\u0275fac });
  }
};
__decorate([
  Action(GetSettingOptionAction)
], SettingState.prototype, "getSettingOptions", null);
__decorate([
  Action(SelectedCurrencyAction)
], SettingState.prototype, "selectedCurrency", null);
__decorate([
  Selector()
], SettingState, "setting", null);
__decorate([
  Selector()
], SettingState, "selectedCurrency", null);
SettingState = __decorate([
  State({
    name: "setting",
    defaults: {
      setting: null,
      selectedCurrency: null
    }
  })
], SettingState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingState, [{
    type: Injectable
  }], null, { getSettingOptions: [], selectedCurrency: [] });
})();

export {
  GetSettingOptionAction,
  SelectedCurrencyAction,
  SettingState
};
//# sourceMappingURL=chunk-QSTIS5AN.js.map
