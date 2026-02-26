import {
  LoaderState,
  ProductState
} from "./chunk-OOCN6Z4U.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6347PIFH.js";
import {
  AsyncPipe,
  NgClass
} from "./chunk-L6CMOIIK.js";
import {
  Component,
  Input,
  Store,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-3KEERULZ.js";

// src/app/shared/components/widgets/button/button.ts
var _c0 = ["*"];
var _c1 = (a0) => ["/category", a0];
var _c2 = (a0) => ["/product/", a0];
var _c3 = (a0) => ({ "position-relative spinning": a0 });
function Button_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.class());
    \u0275\u0275property("href", \u0275\u0275interpolate((tmp_4_0 = ctx_r0.data()) == null ? null : tmp_4_0.redirect_link == null ? null : tmp_4_0.redirect_link.link), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data().button_text);
  }
}
function Button_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.class());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data().button_text);
  }
}
function Button_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Button_Conditional_0_Conditional_0_Conditional_0_Template, 2, 5, "a", 1)(1, Button_Conditional_0_Conditional_0_Conditional_1_Template, 2, 3, "a", 2);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.data()) == null ? null : tmp_2_0.redirect_link == null ? null : tmp_2_0.redirect_link.link) ? 0 : 1);
  }
}
function Button_Conditional_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.class());
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c1, (tmp_4_0 = ctx_r0.data()) == null ? null : tmp_4_0.redirect_link == null ? null : tmp_4_0.redirect_link.link));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data().button_text);
  }
}
function Button_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.class());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data().button_text);
  }
}
function Button_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Button_Conditional_0_Conditional_1_Conditional_0_Template, 2, 6, "a", 5)(1, Button_Conditional_0_Conditional_1_Conditional_1_Template, 2, 3, "a", 2);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.data()) == null ? null : tmp_2_0.redirect_link == null ? null : tmp_2_0.redirect_link.link) ? 0 : 1);
  }
}
function Button_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.class());
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c2, (tmp_4_0 = ctx_r0.data()) == null ? null : tmp_4_0.product_slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data().button_text);
  }
}
function Button_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Button_Conditional_0_Conditional_2_Conditional_0_Template, 2, 6, "a", 5);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.data()) == null ? null : tmp_2_0.product_slug) ? 0 : -1);
  }
}
function Button_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Button_Conditional_0_Conditional_0_Template, 2, 1)(1, Button_Conditional_0_Conditional_1_Template, 2, 1)(2, Button_Conditional_0_Conditional_2_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.data()) == null ? null : tmp_1_0.redirect_link == null ? null : tmp_1_0.redirect_link.link_type) === "external_url" ? 0 : ((tmp_1_0 = ctx_r0.data()) == null ? null : tmp_1_0.redirect_link == null ? null : tmp_1_0.redirect_link.link_type) === "collection" ? 1 : ((tmp_1_0 = ctx_r0.data()) == null ? null : tmp_1_0.redirect_link == null ? null : tmp_1_0.redirect_link.link_type) === "product" ? 2 : -1);
  }
}
function Button_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.iconClass());
  }
}
function Button_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("click", function Button_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClick(ctx_r0.id()));
    });
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275conditionalCreate(5, Button_Conditional_1_Conditional_5_Template, 1, 2, "i", 9);
    \u0275\u0275projection(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.class() ? ctx_r0.class() : "");
    \u0275\u0275classProp("disabled", ctx_r0.disabled() || \u0275\u0275pipeBind1(1, 9, ctx_r0.spinnerStatus$) && ctx_r0.buttonId === ctx_r0.id());
    \u0275\u0275property("id", ctx_r0.id())("type", ctx_r0.type())("disabled", ctx_r0.disabled() || \u0275\u0275pipeBind1(2, 11, ctx_r0.spinnerStatus$) && ctx_r0.buttonId === ctx_r0.id());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c3, ctx_r0.spinner() && \u0275\u0275pipeBind1(4, 13, ctx_r0.spinnerStatus$) && ctx_r0.buttonId && ctx_r0.buttonId === ctx_r0.id()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.iconClass() ? 5 : -1);
  }
}
var Button = class _Button {
  constructor() {
    this.class = input(...ngDevMode ? [void 0, { debugName: "class" }] : []);
    this.iconClass = input(...ngDevMode ? [void 0, { debugName: "iconClass" }] : []);
    this.id = input(...ngDevMode ? [void 0, { debugName: "id" }] : []);
    this.label = input(...ngDevMode ? [void 0, { debugName: "label" }] : []);
    this.type = input("submit", ...ngDevMode ? [{ debugName: "type" }] : []);
    this.spinner = input(true, ...ngDevMode ? [{ debugName: "spinner" }] : []);
    this.disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
    this.data = input(...ngDevMode ? [void 0, { debugName: "data" }] : []);
    this.spinnerStatus$ = inject(Store).select(LoaderState.buttonSpinner);
    this.product$ = inject(Store).select(ProductState.productByIds);
    this.spinnerStatus$.subscribe((res) => {
      if (res == false) {
        this.buttonId = null;
      }
    });
  }
  onClick(id) {
    this.buttonId = id;
  }
  ngOnChanges(change) {
    if (change["data"]?.currentValue && typeof change["data"]?.currentValue?.redirect_link?.link === "number") {
      this.product$.subscribe((res) => {
        res.map((product) => {
          if (product.id === change["data"]?.currentValue?.redirect_link?.link) {
            this.data()["product_slug"] = product.slug;
          }
        });
      });
    }
  }
  getProductSlug(id, products) {
    let product = products.find((product2) => {
      product2.id === id;
    });
    return product ? product.slug : null;
  }
  static {
    this.\u0275fac = function Button_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Button)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Button, selectors: [["app-button"]], inputs: { class: [1, "class"], iconClass: [1, "iconClass"], id: [1, "id"], label: [1, "label"], type: [1, "type"], spinner: [1, "spinner"], disabled: [1, "disabled"], data: [1, "data"] }, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "class", "id", "type", "disabled"], [3, "href", "class"], ["href", "javascript:void(0)", 3, "class"], [3, "href"], ["href", "javascript:void(0)"], [3, "routerLink", "class"], [3, "routerLink"], [3, "click", "id", "type", "disabled"], [3, "ngClass"], [3, "class"]], template: function Button_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Button_Conditional_0_Template, 3, 1)(1, Button_Conditional_1_Template, 7, 17, "button", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.type() === "button_link" ? 0 : 1);
      }
    }, dependencies: [RouterModule, RouterLink, NgClass, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Button, [{
    type: Component,
    args: [{ selector: "app-button", imports: [RouterModule, AsyncPipe, NgClass], template: `@if(type() === 'button_link'){ @if(data()?.redirect_link?.link_type === 'external_url'){
@if(data()?.redirect_link?.link){
<a href="{{ data()?.redirect_link?.link }}" [class]="class()">{{ data().button_text }}</a>
}@else {
<a href="javascript:void(0)" [class]="class()">{{ data().button_text }}</a>
} }@else if(data()?.redirect_link?.link_type === 'collection') { @if(data()?.redirect_link?.link){
<a [routerLink]="['/category', data()?.redirect_link?.link]" [class]="class()"
  >{{ data().button_text }}</a
>
}@else {
<a href="javascript:void(0)" [class]="class()">{{ data().button_text }}</a>
} }@else if(data()?.redirect_link?.link_type === 'product'){ @if(data()?.product_slug){
<a [routerLink]="['/product/', data()?.product_slug]" [class]="class()">{{ data().button_text }}</a>
} } }@else {
<button
  [class]="class() ? class() : ''"
  [id]="id()"
  [type]="type()"
  [class.disabled]="disabled() || ((spinnerStatus$ | async) && buttonId === id())"
  [disabled]="disabled() || ((spinnerStatus$ | async) && buttonId === id())"
  (click)="onClick(id()!)"
>
  <div
    [ngClass]="{ 'position-relative spinning' : spinner() && (spinnerStatus$ | async) && buttonId && buttonId === id() }"
  >
    @if(iconClass()){
    <i class="{{ iconClass() }}"></i>
    }
    <ng-content />
  </div>
</button>
}
` }]
  }], () => [], { class: [{ type: Input, args: [{ isSignal: true, alias: "class", required: false }] }], iconClass: [{ type: Input, args: [{ isSignal: true, alias: "iconClass", required: false }] }], id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], spinner: [{ type: Input, args: [{ isSignal: true, alias: "spinner", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Button, { className: "Button", filePath: "src/app/shared/components/widgets/button/button.ts", lineNumber: 18 });
})();

export {
  Button
};
//# sourceMappingURL=chunk-RJ7FCDYY.js.map
