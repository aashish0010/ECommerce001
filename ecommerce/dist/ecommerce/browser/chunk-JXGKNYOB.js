import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PCGC3M7T.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/components/widgets/loader/loader.ts
var Loader = class _Loader {
  constructor() {
    this.loaderClass = input("loader-wrapper", ...ngDevMode ? [{ debugName: "loaderClass" }] : []);
  }
  static {
    this.\u0275fac = function Loader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Loader)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Loader, selectors: [["app-loader"]], inputs: { loaderClass: [1, "loaderClass"] }, decls: 6, vars: 5, consts: [[1, "loader"]], template: function Loader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div")(1, "div");
        \u0275\u0275domElement(2, "div", 0);
        \u0275\u0275domElementStart(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.loaderClass());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "loading"));
      }
    }, dependencies: [TranslateModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Loader, [{
    type: Component,
    args: [{ selector: "app-loader", imports: [TranslateModule], template: `<div [class]="loaderClass()">
  <div>
    <div class="loader"></div>
    <h3>{{ 'loading' | translate }}</h3>
  </div>
</div>
` }]
  }], null, { loaderClass: [{ type: Input, args: [{ isSignal: true, alias: "loaderClass", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Loader, { className: "Loader", filePath: "src/app/shared/components/widgets/loader/loader.ts", lineNumber: 11 });
})();

export {
  Loader
};
//# sourceMappingURL=chunk-JXGKNYOB.js.map
