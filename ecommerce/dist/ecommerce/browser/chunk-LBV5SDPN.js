import {
  RouterLink,
  RouterModule
} from "./chunk-6347PIFH.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-7XQQRBBN.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-3KEERULZ.js";

// src/app/shared/components/widgets/breadcrumb/breadcrumb.ts
var _c0 = () => ["/"];
var _forTrack0 = ($index, $item) => $item.label;
function Breadcrumb_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275classProp("active", item_r1.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var Breadcrumb = class _Breadcrumb {
  constructor() {
    this.breadcrumb = input(...ngDevMode ? [void 0, { debugName: "breadcrumb" }] : []);
  }
  static {
    this.\u0275fac = function Breadcrumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Breadcrumb)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Breadcrumb, selectors: [["app-breadcrumb"]], inputs: { breadcrumb: [1, "breadcrumb"] }, decls: 12, vars: 6, consts: [[1, "breadcrumb-section"], [1, "container"], ["aria-label", "breadcrumb", 1, "theme-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "breadcrumb-item", 3, "active"]], template: function Breadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "ol", 3)(6, "li", 4)(7, "a", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(10, Breadcrumb_For_11_Template, 2, 3, "li", 6, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_3_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_0_0 = ctx.breadcrumb()) == null ? null : tmp_0_0.title);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, "home"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater((tmp_3_0 = ctx.breadcrumb()) == null ? null : tmp_3_0.items);
      }
    }, dependencies: [TranslateModule, RouterModule, RouterLink, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Breadcrumb, [{
    type: Component,
    args: [{ selector: "app-breadcrumb", imports: [TranslateModule, RouterModule], template: `<div class="breadcrumb-section">
  <div class="container">
    <h2>{{ breadcrumb()?.title }}</h2>
    <nav aria-label="breadcrumb" class="theme-breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="javascript:void(0)" [routerLink]="['/']">{{ 'home' | translate }}</a>
        </li>
        @for(item of breadcrumb()?.items; track item.label){
        <li class="breadcrumb-item" [class.active]="item.active">{{ item.label }}</li>
        }
      </ol>
    </nav>
  </div>
</div>
` }]
  }], null, { breadcrumb: [{ type: Input, args: [{ isSignal: true, alias: "breadcrumb", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Breadcrumb, { className: "Breadcrumb", filePath: "src/app/shared/components/widgets/breadcrumb/breadcrumb.ts", lineNumber: 14 });
})();

export {
  Breadcrumb
};
//# sourceMappingURL=chunk-LBV5SDPN.js.map
