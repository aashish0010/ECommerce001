import {
  ThemeOptionState
} from "./chunk-D2VJHFAS.js";
import {
  Breadcrumb
} from "./chunk-LBV5SDPN.js";
import {
  Button
} from "./chunk-RJ7FCDYY.js";
import "./chunk-OOCN6Z4U.js";
import "./chunk-RWFLVE5E.js";
import "./chunk-LZFLFOAY.js";
import "./chunk-6347PIFH.js";
import "./chunk-2K52HGL6.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-7XQQRBBN.js";
import {
  AsyncPipe,
  Location
} from "./chunk-L6CMOIIK.js";
import {
  Component,
  Store,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3KEERULZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/page/error404/error404.ts
function Error404_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 7);
    \u0275\u0275listener("click", function Error404_Conditional_12_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("btn btn-solid");
    \u0275\u0275property("id", "back_button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 5, ctx_r1.themeOption$)) == null ? null : tmp_4_0.error_page == null ? null : tmp_4_0.error_page.back_button_text, " ");
  }
}
var Error404 = class _Error404 {
  constructor() {
    this.location = inject(Location);
    this.themeOption$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.breadcrumb = {
      title: "404 page",
      items: [{ label: "404 page", active: true }]
    };
  }
  back() {
    this.location.back();
  }
  static {
    this.\u0275fac = function Error404_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Error404)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error404, selectors: [["app-error404"]], decls: 14, vars: 10, consts: [[3, "breadcrumb"], [1, "p-0"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "error-section"], [3, "class", "id", "spinner"], [3, "click", "id", "spinner"]], template: function Error404_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h2");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, Error404_Conditional_12_Template, 3, 7, "app-button", 6);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "404"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_2_0 = \u0275\u0275pipeBind1(11, 6, ctx.themeOption$)) == null ? null : tmp_2_0.error_page == null ? null : tmp_2_0.error_page.error_page_content);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_3_0 = \u0275\u0275pipeBind1(13, 8, ctx.themeOption$)) == null ? null : tmp_3_0.error_page == null ? null : tmp_3_0.error_page.back_button_enable) ? 12 : -1);
      }
    }, dependencies: [TranslateModule, Breadcrumb, Button, TranslatePipe, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Error404, [{
    type: Component,
    args: [{ selector: "app-error404", imports: [TranslateModule, Breadcrumb, Button, AsyncPipe], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<section class="p-0">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="error-section">
          <h1>{{ '404' | translate }}</h1>
          <h2>{{ (themeOption$ | async)?.error_page?.error_page_content }}</h2>

          @if((themeOption$ | async)?.error_page?.back_button_enable){
          <app-button
            [class]="'btn btn-solid'"
            [id]="'back_button'"
            [spinner]="false"
            (click)="back()"
          >
            {{ (themeOption$ | async)?.error_page?.back_button_text }}
          </app-button>
          }
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error404, { className: "Error404", filePath: "src/app/components/page/error404/error404.ts", lineNumber: 20 });
})();
export {
  Error404
};
//# sourceMappingURL=chunk-W5DZ5WJO.js.map
