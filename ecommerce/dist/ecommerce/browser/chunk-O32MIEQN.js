import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/components/widgets/no-data/no-data.ts
function NoData_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", ctx_r0.image(), \u0275\u0275sanitizeUrl);
  }
}
function NoData_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.description());
  }
}
var NoData = class _NoData {
  constructor() {
    this.class = input("no-data-added", ...ngDevMode ? [{ debugName: "class" }] : []);
    this.image = input(...ngDevMode ? [void 0, { debugName: "image" }] : []);
    this.text = input(...ngDevMode ? [void 0, { debugName: "text" }] : []);
    this.description = input(...ngDevMode ? [void 0, { debugName: "description" }] : []);
  }
  static {
    this.\u0275fac = function NoData_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoData)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoData, selectors: [["app-no-data"]], inputs: { class: [1, "class"], image: [1, "image"], text: [1, "text"], description: [1, "description"] }, decls: 5, vars: 5, consts: [["alt", "no-data", 1, "img-fluid", 3, "src"]], template: function NoData_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div");
        \u0275\u0275conditionalCreate(1, NoData_Conditional_1_Template, 1, 1, "img", 0);
        \u0275\u0275domElementStart(2, "h4");
        \u0275\u0275text(3);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(4, NoData_Conditional_4_Template, 2, 1, "p");
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.class());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.image() ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.text());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.description() ? 4 : -1);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoData, [{
    type: Component,
    args: [{ selector: "app-no-data", imports: [], template: '<div [class]="class()">\n  @if(image()){\n  <img [src]="image()" class="img-fluid" alt="no-data" />\n  }\n  <h4>{{ text() }}</h4>\n  @if(description()){\n  <p>{{ description() }}</p>\n  }\n</div>\n' }]
  }], null, { class: [{ type: Input, args: [{ isSignal: true, alias: "class", required: false }] }], image: [{ type: Input, args: [{ isSignal: true, alias: "image", required: false }] }], text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: false }] }], description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoData, { className: "NoData", filePath: "src/app/shared/components/widgets/no-data/no-data.ts", lineNumber: 9 });
})();

export {
  NoData
};
//# sourceMappingURL=chunk-O32MIEQN.js.map
