import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/components/widgets/product-box/widgets/skeleton-product-box/skeleton-product-box.ts
function SkeletonProductBox_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domElement(1, "div", 2);
    \u0275\u0275domElementStart(2, "div", 3);
    \u0275\u0275domElement(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275domElementEnd()();
  }
}
function SkeletonProductBox_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "div", 7);
    \u0275\u0275domElement(2, "div", 8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 9);
    \u0275\u0275domElement(4, "a", 10);
    \u0275\u0275domElementStart(5, "a", 11);
    \u0275\u0275domElement(6, "h6");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(7, "h4", 6);
    \u0275\u0275domElementEnd()();
  }
}
var SkeletonProductBox = class _SkeletonProductBox {
  constructor() {
    this.style = input(...ngDevMode ? [void 0, { debugName: "style" }] : []);
  }
  static {
    this.\u0275fac = function SkeletonProductBox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonProductBox)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonProductBox, selectors: [["app-skeleton-product-box"]], inputs: { style: [1, "style"] }, decls: 2, vars: 1, consts: [[1, "media", "skeleton-media"], [1, "basic-product", "skeleton-basic-product"], [1, "image-wrapper"], [1, "media-body", "align-self-center"], [1, "rating"], [1, "name"], [1, "price"], [1, "img-wrapper", "owl-slider"], [1, "product-image-box"], [1, "product-detail"], ["href", "#!", 1, "product-title"], ["href", "#!"]], template: function SkeletonProductBox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SkeletonProductBox_Conditional_0_Template, 6, 0, "div", 0)(1, SkeletonProductBox_Conditional_1_Template, 8, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.style() === "horizontal" ? 0 : 1);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonProductBox, [{
    type: Component,
    args: [{ selector: "app-skeleton-product-box", imports: [], template: `@if(style() === 'horizontal'){
<div class="media skeleton-media">
  <div class="image-wrapper"></div>
  <div class="media-body align-self-center">
    <div class="rating"></div>
    <div class="name"></div>
    <div class="price"></div>
  </div>
</div>
}@else {
<div class="basic-product skeleton-basic-product">
  <div class="img-wrapper owl-slider">
    <div class="product-image-box"></div>
  </div>
  <div class="product-detail">
    <a class="product-title" href="#!"></a>
    <a href="#!">
      <h6></h6>
    </a>
    <h4 class="price"></h4>
  </div>
</div>
}
` }]
  }], null, { style: [{ type: Input, args: [{ isSignal: true, alias: "style", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonProductBox, { className: "SkeletonProductBox", filePath: "src/app/shared/components/widgets/product-box/widgets/skeleton-product-box/skeleton-product-box.ts", lineNumber: 9 });
})();

export {
  SkeletonProductBox
};
//# sourceMappingURL=chunk-7JCQSCUH.js.map
