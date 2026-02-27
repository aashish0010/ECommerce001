import {
  PageService,
  PageState
} from "./chunk-QIC5VT53.js";
import "./chunk-QL2HLPW7.js";
import {
  Breadcrumb
} from "./chunk-3DSWFFIY.js";
import "./chunk-6R3AQVTF.js";
import {
  Meta
} from "./chunk-G25K32MJ.js";
import "./chunk-PCGC3M7T.js";
import "./chunk-4LUQBUB6.js";
import {
  Store
} from "./chunk-6YJBSKCB.js";
import {
  AsyncPipe
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeHtml
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/page/skeleton-page/skeleton-page.ts
var SkeletonPage = class _SkeletonPage {
  static {
    this.\u0275fac = function SkeletonPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonPage)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonPage, selectors: [["app-skeleton-page"]], decls: 17, vars: 0, consts: [[1, "common-skeleton"], [1, "img-box"], [1, "img"], [1, "img-content"], [1, "placeholder", "col-6"], [1, "placeholder", "col-7"], [1, "placeholder", "col-10"], [1, "placeholder", "col-9"], [1, "placeholder", "col-8"], [1, "placeholder", "col-11"]], template: function SkeletonPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275domElement(2, "div", 2);
        \u0275\u0275domElementStart(3, "div", 3);
        \u0275\u0275domElement(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 4);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(10, "ul");
        \u0275\u0275domElement(11, "li", 8)(12, "li", 7)(13, "li", 6)(14, "li", 5)(15, "li", 7)(16, "li", 9);
        \u0275\u0275domElementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonPage, [{
    type: Component,
    args: [{ selector: "app-skeleton-page", imports: [], template: '<!-- Page Skeleton Loader -->\n<div class="common-skeleton">\n  <div class="img-box">\n    <div class="img"></div>\n    <div class="img-content">\n      <div class="placeholder col-6"></div>\n      <div class="placeholder col-7"></div>\n      <div class="placeholder col-10"></div>\n      <div class="placeholder col-9"></div>\n      <div class="placeholder col-8"></div>\n      <div class="placeholder col-6"></div>\n    </div>\n  </div>\n  <ul>\n    <li class="placeholder col-8"></li>\n    <li class="placeholder col-9"></li>\n    <li class="placeholder col-10"></li>\n    <li class="placeholder col-7"></li>\n    <li class="placeholder col-9"></li>\n    <li class="placeholder col-11"></li>\n  </ul>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonPage, { className: "SkeletonPage", filePath: "src/app/components/page/skeleton-page/skeleton-page.ts", lineNumber: 9 });
})();

// src/app/components/page/page/page.ts
function Page_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-page");
  }
}
function Page_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", (tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.selectedPage$)) == null ? null : tmp_1_0.content, \u0275\u0275sanitizeHtml);
  }
}
var Page = class _Page {
  constructor() {
    this.meta = inject(Meta);
    this.pageService = inject(PageService);
    this.selectedPage$ = inject(Store).select(PageState.selectedPage);
    this.breadcrumb = {
      title: "Page",
      items: []
    };
    this.selectedPage$.subscribe((page) => {
      this.breadcrumb.items = [];
      this.breadcrumb.title = page.title;
      this.breadcrumb.items.push({ label: "Page", active: true }, { label: page.title, active: false });
      page?.meta_title && this.meta.updateTag({ property: "og:title", content: page?.meta_title });
      page?.meta_description && this.meta.updateTag({ property: "og:description", content: page?.meta_description });
    });
  }
  static {
    this.\u0275fac = function Page_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Page)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Page, selectors: [["app-page"]], decls: 5, vars: 2, consts: [[3, "breadcrumb"], [1, "section-b-space", "ckeditor-content"], [1, "container"], [3, "innerHTML"]], template: function Page_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
        \u0275\u0275conditionalCreate(3, Page_Conditional_3_Template, 1, 0, "app-skeleton-page")(4, Page_Conditional_4_Template, 2, 3, "div", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.pageService.skeletonLoader ? 3 : 4);
      }
    }, dependencies: [Breadcrumb, SkeletonPage, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Page, [{
    type: Component,
    args: [{ selector: "app-page", imports: [Breadcrumb, SkeletonPage, AsyncPipe], template: '<app-breadcrumb [breadcrumb]="breadcrumb" />\n<section class="section-b-space ckeditor-content">\n  <div class="container">\n    @if(pageService.skeletonLoader){\n    <app-skeleton-page />\n    }@else {\n    <div [innerHTML]="(selectedPage$ | async)?.content"></div>\n    }\n  </div>\n</section>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Page, { className: "Page", filePath: "src/app/components/page/page/page.ts", lineNumber: 21 });
})();
export {
  Page
};
//# sourceMappingURL=chunk-U73RCVRH.js.map
