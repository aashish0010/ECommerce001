import {
  Router
} from "./chunk-6347PIFH.js";
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

// src/app/shared/store/action/blog.action.ts
var GetBlogsAction = class {
  static {
    this.type = "[Blog] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetBlogBySlugAction = class {
  static {
    this.type = "[Blog] By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};
var GetRecentBlogAction = class {
  static {
    this.type = "[Blog] By Recent";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetSelectedBlogsAction = class {
  static {
    this.type = "[Blog] Selected";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/blog.service.ts
var BlogService = class _BlogService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
  }
  getBlogs(payload) {
    return this.http.get(`${environment.URL}/blog.json`, { params: payload });
  }
  getBlogBySlug(slug) {
    return this.http.get(`${environment.URL}/blog/slug/${slug}`);
  }
  static {
    this.\u0275fac = function BlogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BlogService, factory: _BlogService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/blog.state.ts
var BlogState = class BlogState2 {
  constructor() {
    this.router = inject(Router);
    this.blogService = inject(BlogService);
  }
  static blog(state) {
    return state.blog;
  }
  static selectedBlog(state) {
    return state.selectedBlog;
  }
  static resentBlog(state) {
    return state.recentBlog;
  }
  static selectedBlogs(state) {
    return state.selectedBlogs;
  }
  getBlogs(ctx, action) {
    this.blogService.skeletonLoader = true;
    return this.blogService.getBlogs(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          blog: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.blogService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getBlogBySlug(ctx, { slug }) {
    return this.blogService.getBlogs().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const state = ctx.getState();
          const result = results.data.find((blog) => blog.slug == slug);
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedBlog: result
          }));
        }
      },
      error: (err) => {
        void this.router.navigate(["/404"]);
        throw new Error(err?.error?.message);
      }
    }));
  }
  getRecentBlogs(ctx, action) {
    return this.blogService.getBlogs(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          recentBlog: result.data
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getSelectedBlogs(ctx, action) {
    return this.blogService.getBlogs(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          selectedBlogs: result.data
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function BlogState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: BlogState2, factory: BlogState2.\u0275fac });
  }
};
__decorate([
  Action(GetBlogsAction)
], BlogState.prototype, "getBlogs", null);
__decorate([
  Action(GetBlogBySlugAction)
], BlogState.prototype, "getBlogBySlug", null);
__decorate([
  Action(GetRecentBlogAction)
], BlogState.prototype, "getRecentBlogs", null);
__decorate([
  Action(GetSelectedBlogsAction)
], BlogState.prototype, "getSelectedBlogs", null);
__decorate([
  Selector()
], BlogState, "blog", null);
__decorate([
  Selector()
], BlogState, "selectedBlog", null);
__decorate([
  Selector()
], BlogState, "resentBlog", null);
__decorate([
  Selector()
], BlogState, "selectedBlogs", null);
BlogState = __decorate([
  State({
    name: "blog",
    defaults: {
      blog: {
        data: [],
        total: 0
      },
      selectedBlog: null,
      recentBlog: [],
      selectedBlogs: []
    }
  })
], BlogState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogState, [{
    type: Injectable
  }], null, { getBlogs: [], getBlogBySlug: [], getRecentBlogs: [], getSelectedBlogs: [] });
})();

export {
  BlogService,
  GetBlogsAction,
  GetSelectedBlogsAction,
  BlogState
};
//# sourceMappingURL=chunk-SIZ4ZBMI.js.map
