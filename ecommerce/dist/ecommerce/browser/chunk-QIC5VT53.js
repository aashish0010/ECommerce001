import {
  ContactUsAction,
  GetFaqsAction,
  GetPageBySlugAction,
  GetPagesAction
} from "./chunk-QL2HLPW7.js";
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/services/page.service.ts
var PageService = class _PageService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
  }
  getPages(payload) {
    return this.http.get(`${environment.URL}/page.json`, { params: payload });
  }
  getFaqs() {
    return this.http.get(`${environment.URL}/faq.json`);
  }
  getStores(payload) {
    return this.http.get(`${environment.URL}/store`, { params: payload });
  }
  static {
    this.\u0275fac = function PageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PageService, factory: _PageService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/page.state.ts
var PageState = class PageState2 {
  constructor() {
    this.pageService = inject(PageService);
  }
  static page(state) {
    return state.page;
  }
  static faq(state) {
    return state.faq;
  }
  static selectedPage(state) {
    return state.selectedPage;
  }
  getPages(ctx, action) {
    return this.pageService.getPages(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          page: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getPageBySlug(ctx, { slug }) {
    this.pageService.skeletonLoader = true;
    return this.pageService.getPages().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const state = ctx.getState();
          const result = results.data.find((page) => page.slug == slug);
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedPage: result
          }));
        }
      },
      complete: () => {
        this.pageService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getFaqs(ctx) {
    this.pageService.skeletonLoader = true;
    return this.pageService.getFaqs().pipe(tap({
      next: (result) => {
        ctx.patchState({
          faq: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.pageService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  contactUs(_ctx, { payload: _payload }) {
  }
  static {
    this.\u0275fac = function PageState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PageState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: PageState2, factory: PageState2.\u0275fac });
  }
};
__decorate([
  Action(GetPagesAction)
], PageState.prototype, "getPages", null);
__decorate([
  Action(GetPageBySlugAction)
], PageState.prototype, "getPageBySlug", null);
__decorate([
  Action(GetFaqsAction)
], PageState.prototype, "getFaqs", null);
__decorate([
  Action(ContactUsAction)
], PageState.prototype, "contactUs", null);
__decorate([
  Selector()
], PageState, "page", null);
__decorate([
  Selector()
], PageState, "faq", null);
__decorate([
  Selector()
], PageState, "selectedPage", null);
PageState = __decorate([
  State({
    name: "page",
    defaults: {
      page: {
        data: [],
        total: 0
      },
      faq: {
        data: [],
        total: 0
      },
      selectedPage: null
    }
  })
], PageState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageState, [{
    type: Injectable
  }], null, { getPages: [], getPageBySlug: [], getFaqs: [], contactUs: [] });
})();

export {
  PageService,
  PageState
};
//# sourceMappingURL=chunk-QIC5VT53.js.map
