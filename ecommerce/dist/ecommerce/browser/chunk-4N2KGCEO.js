import {
  ThemeOptionService
} from "./chunk-LWNWQPUU.js";
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
  catchError,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  tap,
  timeout,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/store/action/theme-option.action.ts
var ThemeOptionsAction = class {
  static {
    this.type = "[Theme IOption] Get";
  }
};
var UpdateSessionAction = class {
  static {
    this.type = "[Theme IOption] Update Session";
  }
  constructor(slug, value) {
    this.slug = slug;
    this.value = value;
  }
};
var UpdateProductBoxAction = class {
  static {
    this.type = "[Theme IOption] Update Product Box";
  }
  constructor(value) {
    this.value = value;
  }
};

// src/app/shared/services/company-detail.service.ts
var CompanyDetailService = class _CompanyDetailService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getCompanyDetails() {
    const companyCode = encodeURIComponent(environment.companyCode);
    return this.http.get(`${environment.baseURL}Auth/companydetails?companyCode=${companyCode}`);
  }
  static {
    this.\u0275fac = function CompanyDetailService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompanyDetailService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyDetailService, factory: _CompanyDetailService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyDetailService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/theme-option.state.ts
var ThemeOptionState = class ThemeOptionState2 {
  constructor() {
    this.themeOptionService = inject(ThemeOptionService);
    this.companyDetailService = inject(CompanyDetailService);
  }
  static themeOptions(state) {
    return state.theme_option;
  }
  static exit(state) {
    return state.exit;
  }
  static cookies(state) {
    return state.cookies;
  }
  static newsletter(state) {
    return state.newsletter;
  }
  static productBox(state) {
    return state.productBox;
  }
  getThemeOptions(ctx) {
    return forkJoin({
      theme: this.themeOptionService.getThemeOption().pipe(timeout(3e3), catchError(() => of({ options: {} }))),
      company: this.companyDetailService.getCompanyDetails().pipe(timeout(3e3), catchError(() => of(null)))
    }).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        const baseOptions = result?.theme?.options ?? result?.theme ?? {};
        const mergedOptions = result?.company ? this.applyCompanyDetails(baseOptions, result.company) : baseOptions;
        ctx.setState(__spreadProps(__spreadValues({}, state), {
          theme_option: mergedOptions
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  UpdateSession(ctx, action) {
    const state = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      cookies: action.slug == "cookies" ? action.value : state.cookies,
      exit: action.slug == "exit" ? action.value : state.exit,
      newsletter: action.slug == "newsletter" ? action.value : state.newsletter
    }));
  }
  UpdateProductBox(ctx, action) {
    const state = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      productBox: action.value
    }));
  }
  applyCompanyDetails(options, response) {
    if (!options || !response?.companyDetailRes?.companyDetail) {
      return options;
    }
    const detail = response.companyDetailRes.companyDetail;
    const services = response.companyDetailRes.companyServices || [];
    const social = response.companyDetailRes.companySocialInfos || [];
    const findSocial = (name) => social.find((item) => item?.socialMediaName?.toLowerCase() === name.toLowerCase())?.socialMediaLink;
    const serviceNames = services.map((service) => service?.name).filter((name) => Boolean(name));
    return __spreadProps(__spreadValues({}, options), {
      general: __spreadProps(__spreadValues({}, options.general), {
        site_title: detail.companyName || options.general?.site_title,
        site_tagline: detail.companyDescription || options.general?.site_tagline
      }),
      seo: __spreadProps(__spreadValues({}, options.seo), {
        meta_title: detail.companyName || options.seo?.meta_title,
        og_title: detail.companyName || options.seo?.og_title,
        meta_description: detail.companyDescription || options.seo?.meta_description,
        og_description: detail.companyDescription || options.seo?.og_description,
        meta_tags: serviceNames.length ? serviceNames.join(", ") : options.seo?.meta_tags
      }),
      header: __spreadProps(__spreadValues({}, options.header), {
        support_number: detail.companyPhoneNumber || options.header?.support_number
      }),
      footer: __spreadProps(__spreadValues({}, options.footer), {
        footer_about: detail.companyDescription || options.footer?.footer_about,
        about_email: detail.companyEmail || options.footer?.about_email,
        support_email: detail.companyEmail || options.footer?.support_email,
        support_number: detail.companyPhoneNumber || options.footer?.support_number,
        facebook: findSocial("Facebook") || options.footer?.facebook,
        instagram: findSocial("Instagram") || options.footer?.instagram,
        twitter: findSocial("Twitter") || "",
        pinterest: findSocial("Pinterest") || "",
        tiktok: findSocial("Tiktok") || ""
      }),
      contact_us: __spreadProps(__spreadValues({}, options.contact_us), {
        description: detail.companyDescription || options.contact_us?.description,
        detail_1: __spreadProps(__spreadValues({}, options.contact_us?.detail_1), {
          text: detail.companyPhoneNumber || options.contact_us?.detail_1?.text
        }),
        detail_3: __spreadProps(__spreadValues({}, options.contact_us?.detail_3), {
          text: detail.companyEmail || options.contact_us?.detail_3?.text
        }),
        detail_4: __spreadProps(__spreadValues({}, options.contact_us?.detail_4), {
          text: detail.companyEmail || options.contact_us?.detail_4?.text
        })
      }),
      about_us: __spreadProps(__spreadValues({}, options.about_us), {
        about: __spreadProps(__spreadValues({}, options.about_us?.about), {
          description: detail.companyDescription || options.about_us?.about?.description
        })
      })
    });
  }
  static {
    this.\u0275fac = function ThemeOptionState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThemeOptionState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: ThemeOptionState2, factory: ThemeOptionState2.\u0275fac });
  }
};
__decorate([
  Action(ThemeOptionsAction)
], ThemeOptionState.prototype, "getThemeOptions", null);
__decorate([
  Action(UpdateSessionAction)
], ThemeOptionState.prototype, "UpdateSession", null);
__decorate([
  Action(UpdateProductBoxAction)
], ThemeOptionState.prototype, "UpdateProductBox", null);
__decorate([
  Selector()
], ThemeOptionState, "themeOptions", null);
__decorate([
  Selector()
], ThemeOptionState, "exit", null);
__decorate([
  Selector()
], ThemeOptionState, "cookies", null);
__decorate([
  Selector()
], ThemeOptionState, "newsletter", null);
__decorate([
  Selector()
], ThemeOptionState, "productBox", null);
ThemeOptionState = __decorate([
  State({
    name: "theme_option",
    defaults: {
      theme_option: null,
      exit: true,
      cookies: true,
      newsletter: true,
      productBox: ""
    }
  })
], ThemeOptionState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeOptionState, [{
    type: Injectable
  }], null, { getThemeOptions: [], UpdateSession: [], UpdateProductBox: [] });
})();

export {
  CompanyDetailService,
  ThemeOptionsAction,
  UpdateSessionAction,
  UpdateProductBoxAction,
  ThemeOptionState
};
//# sourceMappingURL=chunk-4N2KGCEO.js.map
