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

// src/app/shared/services/country.service.ts
var CountryService = class _CountryService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getCountries() {
    return this.http.get(`${environment.URL}/country.json`);
  }
  static {
    this.\u0275fac = function CountryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CountryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CountryService, factory: _CountryService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/action/country.action.ts
var GetCountriesAction = class {
  static {
    this.type = "[Country] Get";
  }
  constructor() {
  }
};

// src/app/shared/store/state/country.state.ts
var CountryState = class CountryState2 {
  constructor() {
    this.countryService = inject(CountryService);
  }
  static country(state) {
    return state.country;
  }
  static countries(state) {
    return state?.country?.data?.map((cn) => {
      return { label: cn?.name, value: cn?.id };
    });
  }
  getCountries(ctx, _action) {
    const state = ctx.getState();
    if (state?.country?.data?.length) {
      return true;
    }
    return this.countryService.getCountries().pipe(tap({
      next: (result) => {
        ctx.patchState({
          country: {
            data: result
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function CountryState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CountryState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CountryState2, factory: CountryState2.\u0275fac });
  }
};
__decorate([
  Action(GetCountriesAction)
], CountryState.prototype, "getCountries", null);
__decorate([
  Selector()
], CountryState, "country", null);
__decorate([
  Selector()
], CountryState, "countries", null);
CountryState = __decorate([
  State({
    name: "country",
    defaults: {
      country: {
        data: []
      }
    }
  })
], CountryState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountryState, [{
    type: Injectable
  }], null, { getCountries: [] });
})();

// src/app/shared/services/state.service.ts
var StateService = class _StateService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getStates() {
    return this.http.get(`${environment.URL}/state.json`);
  }
  static {
    this.\u0275fac = function StateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StateService, factory: _StateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/action/state.action.ts
var GetStatesAction = class {
  static {
    this.type = "[State] Get";
  }
  constructor(country_id) {
    this.country_id = country_id;
  }
};

// src/app/shared/store/state/state.state.ts
var StateState = class StateState2 {
  constructor() {
    this.stateService = inject(StateService);
  }
  static state(state) {
    return state.state;
  }
  static states(state) {
    return (country_id) => {
      if (country_id)
        return state.state.data.filter((element) => element.country_id == country_id).map((st) => {
          return { label: st?.name, value: st?.id, country_id: st?.country_id };
        });
      else
        return state.state.data.map((st) => {
          return { label: st?.name, value: st?.id, country_id: st?.country_id };
        });
    };
  }
  getStates(ctx, _action) {
    const state = ctx.getState();
    if (state?.state?.data?.length) {
      return true;
    }
    return this.stateService.getStates().pipe(tap({
      next: (result) => {
        ctx.patchState({
          state: {
            data: result
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function StateState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StateState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: StateState2, factory: StateState2.\u0275fac });
  }
};
__decorate([
  Action(GetStatesAction)
], StateState.prototype, "getStates", null);
__decorate([
  Selector()
], StateState, "state", null);
__decorate([
  Selector()
], StateState, "states", null);
StateState = __decorate([
  State({
    name: "state",
    defaults: {
      state: {
        data: []
      }
    }
  })
], StateState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateState, [{
    type: Injectable
  }], null, { getStates: [] });
})();

export {
  GetCountriesAction,
  GetStatesAction,
  CountryState,
  StateState
};
//# sourceMappingURL=chunk-FTPCKLO4.js.map
