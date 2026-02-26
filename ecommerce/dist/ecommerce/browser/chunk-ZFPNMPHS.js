import {
  ThemeOptionService
} from "./chunk-LZFLFOAY.js";
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

// src/app/shared/store/action/theme.action.ts
var GetAllThemesAction = class {
  static {
    this.type = "[Themes] Get";
  }
};
var GetThemesAction = class {
  static {
    this.type = "[Themes] Get";
  }
};
var GetHomePageAction = class {
  static {
    this.type = "[Home Page] Get";
  }
  constructor(slug) {
    this.slug = slug;
  }
};

// src/app/shared/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getThemes() {
    return this.http.get(`${environment.URL}/theme.json`);
  }
  getHomePage(slug) {
    return this.http.get(`${environment.URL}/home/${slug}.json`);
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/theme.state.ts
var ThemeState = class ThemeState2 {
  constructor() {
    this.themeOptionService = inject(ThemeOptionService);
    this.themeService = inject(ThemeService);
  }
  static themes(state) {
    return state.themes;
  }
  static homePage(state) {
    return state.homePage;
  }
  static activeTheme(state) {
    return state.activeTheme;
  }
  getAllThemes(ctx) {
    return this.themeService.getThemes().pipe(tap({
      next: (result) => {
        ctx.patchState({
          themes: {
            data: result.data
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getThemes(ctx) {
    return this.themeService.getThemes().pipe(tap({
      next: (result) => {
        var activeTheme = "";
        result.data?.map((theme) => {
          if (theme.status === 1) {
            activeTheme = theme.slug;
          }
        });
        ctx.patchState({
          homePage: result,
          activeTheme
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getHomePage(ctx, action) {
    return this.themeService.getHomePage(action?.slug).pipe(tap({
      next: (result) => {
        ctx.patchState({
          homePage: result
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      },
      complete: () => {
      }
    }));
  }
  static {
    this.\u0275fac = function ThemeState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThemeState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: ThemeState2, factory: ThemeState2.\u0275fac });
  }
};
__decorate([
  Action(GetAllThemesAction)
], ThemeState.prototype, "getAllThemes", null);
__decorate([
  Action(GetThemesAction)
], ThemeState.prototype, "getThemes", null);
__decorate([
  Action(GetHomePageAction)
], ThemeState.prototype, "getHomePage", null);
__decorate([
  Selector()
], ThemeState, "themes", null);
__decorate([
  Selector()
], ThemeState, "homePage", null);
__decorate([
  Selector()
], ThemeState, "activeTheme", null);
ThemeState = __decorate([
  State({
    name: "theme",
    defaults: {
      homePage: null,
      activeTheme: "",
      themes: {
        data: []
      }
    }
  })
], ThemeState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeState, [{
    type: Injectable
  }], null, { getAllThemes: [], getThemes: [], getHomePage: [] });
})();

export {
  GetThemesAction,
  GetHomePageAction,
  ThemeState
};
//# sourceMappingURL=chunk-ZFPNMPHS.js.map
