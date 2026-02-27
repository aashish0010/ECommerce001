import {
  PageState
} from "./chunk-QIC5VT53.js";
import {
  BlogState
} from "./chunk-DYCOTM5I.js";
import {
  BrandState
} from "./chunk-ISUJGA6N.js";
import {
  CategoryState
} from "./chunk-B62VDLFD.js";
import {
  FeedbackAction,
  GetQuestionAnswersAction,
  SendQuestionAction,
  UpdateQuestionAnswersAction
} from "./chunk-P35J2TJJ.js";
import {
  ThemeOptionState
} from "./chunk-4N2KGCEO.js";
import {
  ProductState
} from "./chunk-OE35GDC6.js";
import {
  NavigationEnd,
  Router
} from "./chunk-6R3AQVTF.js";
import {
  Meta,
  Title
} from "./chunk-G25K32MJ.js";
import {
  SettingState
} from "./chunk-TMCH2Z3I.js";
import {
  environment
} from "./chunk-4LUQBUB6.js";
import {
  Action,
  Selector,
  State,
  Store
} from "./chunk-6YJBSKCB.js";
import {
  HttpClient,
  isPlatformBrowser
} from "./chunk-QK7HTLFB.js";
import {
  Injectable,
  NgZone,
  PLATFORM_ID,
  __decorate,
  filter,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/services/seo.service.ts
var SeoService = class _SeoService {
  constructor() {
    this.meta = inject(Meta);
    this.router = inject(Router);
    this.titleService = inject(Title);
    this.platformId = inject(PLATFORM_ID);
    this.ngZone = inject(NgZone);
    this.setting$ = inject(Store).select(SettingState.setting);
    this.themeOption$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.product$ = inject(Store).select(ProductState.selectedProduct);
    this.blog$ = inject(Store).select(BlogState.selectedBlog);
    this.brand$ = inject(Store).select(BrandState.selectedBrand);
    this.page$ = inject(Store).select(PageState.selectedPage);
    this.category$ = inject(Store).select(CategoryState.selectedCategory);
    this.currentMessageIndex = 0;
    this.delay = 1e3;
    this.isTabInFocus = true;
    this.scoContent = {};
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
        this.path = event.url;
        document.addEventListener("visibilitychange", () => {
          this.messages = this.themeOption.general.taglines;
          this.ngZone.run(() => {
            this.updateSeo(this.path);
          });
        });
        this.updateSeo(this.path);
      });
      this.fetchData();
    }
  }
  fetchData() {
    this.setting$.subscribe((val) => this.setting = val);
    this.product$.subscribe((product) => this.product = product);
    this.blog$.subscribe((blog) => this.blog = blog);
    this.page$.subscribe((page) => this.page = page);
    this.brand$.subscribe((brand) => this.brand = brand);
    this.category$.subscribe((blog) => this.category = blog);
    this.themeOption$.subscribe((option) => {
      this.themeOption = option;
    });
  }
  updateSeo(path) {
    if (path.includes("product")) {
      if (this.product) {
        this.scoContent = {
          url: window.location.href,
          og_title: this.product.meta_title || this.themeOption?.seo?.meta_title,
          og_description: this.product.meta_description || this.themeOption?.seo?.meta_description,
          og_image: this.product.product_meta_image?.original_url || this.themeOption?.seo?.og_image?.original_url
        };
      }
      this.customSCO();
    } else if (path.includes("blog")) {
      if (this.blog) {
        this.scoContent = __spreadProps(__spreadValues({}, this.scoContent), {
          url: window.location.href,
          og_title: this.blog?.meta_title || this.themeOption?.seo?.meta_title,
          og_description: this.blog?.meta_description || this.themeOption?.seo?.meta_description,
          og_image: this.blog?.blog_meta_image?.original_url || this.themeOption?.seo?.og_image?.original_url
        });
        this.customSCO();
      }
    } else if (path.includes("page")) {
      if (this.page) {
        this.scoContent = __spreadProps(__spreadValues({}, this.scoContent), {
          url: window.location.href,
          og_title: this.page?.meta_title || this.themeOption?.seo?.meta_title,
          og_description: this.page?.meta_description || this.themeOption?.seo?.meta_description,
          og_image: this.page?.page_meta_image?.original_url || this.themeOption?.seo?.og_image?.original_url
        });
      }
      this.customSCO();
    } else if (path.includes("brand")) {
      if (this.brand) {
        this.scoContent = __spreadProps(__spreadValues({}, this.scoContent), {
          url: window.location.href,
          og_title: this.brand?.meta_title || this.themeOption?.seo?.meta_title,
          og_description: this.brand?.meta_description || this.themeOption?.seo?.meta_description,
          og_image: this.brand?.brand_meta_image?.original_url || this.themeOption?.seo?.og_image?.original_url
        });
      }
      this.customSCO();
    } else if (path.includes("category")) {
      if (this.category) {
        this.scoContent = __spreadProps(__spreadValues({}, this.scoContent), {
          url: window.location.href,
          og_title: this.category?.meta_title || this.themeOption?.seo?.meta_title,
          og_description: this.category?.meta_description || this.themeOption?.seo?.meta_description,
          og_image: this.category?.category_meta_image?.original_url || this.themeOption?.seo?.og_image?.original_url
        });
      }
      this.customSCO();
    } else {
      this.updateDefaultSeo();
    }
  }
  updateDefaultSeo() {
    this.meta.updateTag({ name: "title", content: this.themeOption?.seo?.meta_title });
    this.meta.updateTag({ name: "description", content: this.themeOption?.seo?.meta_description });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:url", content: this.scoContent["url"] });
    this.meta.updateTag({ property: "og:title", content: this.themeOption?.seo?.meta_title });
    this.meta.updateTag({
      property: "og:description",
      content: this.themeOption?.seo?.meta_description
    });
    this.meta.updateTag({ property: "og:image", content: this.scoContent["og_image"] });
    this.meta.updateTag({ property: "twitter:card", content: "summary_large_image" });
    this.meta.updateTag({ property: "twitter:url", content: this.scoContent["url"] });
    this.meta.updateTag({ property: "twitter:title", content: this.themeOption?.seo?.meta_title });
    this.meta.updateTag({
      property: "twitter:description",
      content: this.themeOption?.seo?.meta_description
    });
    this.meta.updateTag({ property: "twitter:image", content: this.scoContent["og_image"] });
    if (this.themeOption?.general && this.themeOption?.general?.exit_tagline_enable) {
      document.addEventListener("visibilitychange", () => {
        this.messages = this.themeOption.general.taglines;
        this.ngZone.run(() => {
          this.isTabInFocus = !document.hidden;
          if (this.isTabInFocus) {
            clearTimeout(this.timeoutId);
            return this.titleService.setTitle(this.themeOption?.general?.site_title && this.themeOption?.general?.site_tagline ? `${this.themeOption?.general?.site_title} | ${this.themeOption?.general?.site_tagline}` : "");
          } else {
            this.updateMessage();
          }
        });
      });
      this.scoContent = __spreadProps(__spreadValues({}, this.scoContent), {
        url: window.location.href,
        og_title: this.themeOption?.seo?.meta_title,
        og_description: this.themeOption?.seo?.meta_description,
        og_image: this.themeOption?.seo?.og_image?.original_url
      });
      this.customSCO();
    } else {
      return this.titleService.setTitle(this.themeOption?.general?.site_title && this.themeOption?.general?.site_tagline ? `${this.themeOption?.general?.site_title} | ${this.themeOption?.general?.site_tagline}` : "");
    }
  }
  customSCO() {
    const title = this.scoContent["og_title"];
    const description = this.scoContent["og_description"];
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: "title", content: title });
    this.meta.updateTag({ name: "description", content: description });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:url", content: this.scoContent["url"] });
    this.meta.updateTag({ property: "og:title", content: title });
    this.meta.updateTag({ property: "og:description", content: description });
    this.meta.updateTag({ property: "og:image", content: this.scoContent["og_image"] });
    this.meta.updateTag({ property: "twitter:card", content: "summary_large_image" });
    this.meta.updateTag({ property: "twitter:url", content: this.scoContent["url"] });
    this.meta.updateTag({ property: "twitter:title", content: title });
    this.meta.updateTag({ property: "twitter:description", content: description });
    this.meta.updateTag({ property: "twitter:image", content: this.scoContent["og_image"] });
  }
  updateMessage() {
    clearTimeout(this.timeoutId);
    this.currentMessage = this.messages[this.currentMessageIndex];
    this.titleService.setTitle(this.currentMessage);
    this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
    this.timeoutId = setTimeout(() => {
      this.updateMessage();
    }, this.delay);
  }
  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }
  static {
    this.\u0275fac = function SeoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeoService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/services/questions-answer.service.ts
var QuestionsAnswerService = class _QuestionsAnswerService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
  }
  getQuestionAnswers(slug) {
    return this.http.get(`${environment.URL}/question-and-answer.json`, {
      params: slug
    });
  }
  static {
    this.\u0275fac = function QuestionsAnswerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuestionsAnswerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuestionsAnswerService, factory: _QuestionsAnswerService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionsAnswerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/questions-answers.state.ts
var QuestionAnswersState = class QuestionAnswersState2 {
  constructor() {
    this.questionsAnswersService = inject(QuestionsAnswerService);
  }
  static questionsAnswers(state) {
    return state.question;
  }
  getQuestionAnswers(ctx, action) {
    this.questionsAnswersService.skeletonLoader = true;
    return this.questionsAnswersService.getQuestionAnswers(action.slug).pipe(tap({
      next: (results) => {
        const result = results.data.filter((qna) => qna.product_id == action.slug["product_id"]);
        ctx.patchState({
          question: {
            data: result,
            total: result?.length
          }
        });
      },
      complete: () => {
        this.questionsAnswersService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  sendQuestion(_ctx, _action) {
  }
  update(_ctx, { payload: _payload, id: _id }) {
  }
  Feedback(_ctx, _action) {
  }
  static {
    this.\u0275fac = function QuestionAnswersState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QuestionAnswersState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: QuestionAnswersState2, factory: QuestionAnswersState2.\u0275fac });
  }
};
__decorate([
  Action(GetQuestionAnswersAction)
], QuestionAnswersState.prototype, "getQuestionAnswers", null);
__decorate([
  Action(SendQuestionAction)
], QuestionAnswersState.prototype, "sendQuestion", null);
__decorate([
  Action(UpdateQuestionAnswersAction)
], QuestionAnswersState.prototype, "update", null);
__decorate([
  Action(FeedbackAction)
], QuestionAnswersState.prototype, "Feedback", null);
__decorate([
  Selector()
], QuestionAnswersState, "questionsAnswers", null);
QuestionAnswersState = __decorate([
  State({
    name: "question",
    defaults: {
      question: {
        data: [],
        total: 0
      }
    }
  })
], QuestionAnswersState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionAnswersState, [{
    type: Injectable
  }], null, { getQuestionAnswers: [], sendQuestion: [], update: [], Feedback: [] });
})();

// src/app/shared/services/review.service.ts
var ReviewService = class _ReviewService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getReview(slug) {
    return this.http.get(`${environment.URL}/review.json`, { params: slug });
  }
  static {
    this.\u0275fac = function ReviewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewService, factory: _ReviewService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/action/review.action.ts
var GetReviewAction = class {
  static {
    this.type = "[Review] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var SendReviewAction = class {
  static {
    this.type = "[Review] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var UpdateReviewAction = class {
  static {
    this.type = "[Review] Put";
  }
  constructor(id, payload) {
    this.id = id;
    this.payload = payload;
  }
};

// src/app/shared/store/state/review.state.ts
var ReviewState = class ReviewState2 {
  constructor() {
    this.reviewsService = inject(ReviewService);
  }
  static review(state) {
    return state.review;
  }
  getReview(ctx, action) {
    return this.reviewsService.getReview(action.payload).pipe(tap({
      next: (results) => {
        const result = results.data.filter((review) => review.product_id == action.payload["product_id"]);
        ctx.patchState({
          review: {
            data: result,
            total: result?.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  sendReview(_ctx, _action) {
  }
  update(_ctx, { payload: _payload, id: _id }) {
  }
  static {
    this.\u0275fac = function ReviewState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReviewState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: ReviewState2, factory: ReviewState2.\u0275fac });
  }
};
__decorate([
  Action(GetReviewAction)
], ReviewState.prototype, "getReview", null);
__decorate([
  Action(SendReviewAction)
], ReviewState.prototype, "sendReview", null);
__decorate([
  Action(UpdateReviewAction)
], ReviewState.prototype, "update", null);
__decorate([
  Selector()
], ReviewState, "review", null);
ReviewState = __decorate([
  State({
    name: "review",
    defaults: {
      review: {
        data: [],
        total: 0
      }
    }
  })
], ReviewState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewState, [{
    type: Injectable
  }], null, { getReview: [], sendReview: [], update: [] });
})();

export {
  SeoService,
  GetReviewAction,
  SendReviewAction,
  UpdateReviewAction,
  QuestionsAnswerService,
  QuestionAnswersState,
  ReviewState
};
//# sourceMappingURL=chunk-2W2XGSWN.js.map
