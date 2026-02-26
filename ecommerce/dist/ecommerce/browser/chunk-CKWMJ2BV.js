import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule
} from "./chunk-6347PIFH.js";
import {
  AsyncPipe,
  CommonModule,
  HttpClient,
  NgIf,
  environment,
  isPlatformBrowser
} from "./chunk-L6CMOIIK.js";
import {
  Action,
  ChangeDetectionStrategy,
  Component,
  EMPTY,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  PLATFORM_ID,
  Selector,
  State,
  Subject,
  ViewEncapsulation,
  __decorate,
  catchError,
  combineLatest,
  inject,
  map,
  of,
  setClassMetadata,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  timer,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-3KEERULZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@ngx-loading-bar/core/fesm2022/ngx-loading-bar-core.mjs
function NgxLoadingBar_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.diameter)("height", ctx_r0.diameter);
  }
}
function NgxLoadingBar_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
  if (rf & 2) {
    const progress_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r0.color)("height", ctx_r0.height)("width", progress_r2 + "%");
  }
}
function NgxLoadingBar_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NgxLoadingBar_ng_container_0_div_1_Template, 2, 4, "div", 1)(2, NgxLoadingBar_ng_container_0_div_2_Template, 1, 6, "div", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.includeSpinner);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.includeBar);
  }
}
function LoadingBarComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.diameter)("height", ctx_r0.diameter);
  }
}
function LoadingBarComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
  if (rf & 2) {
    const progress_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r0.color)("height", ctx_r0.height)("width", progress_r2 + "%");
  }
}
function LoadingBarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoadingBarComponent_ng_container_0_div_1_Template, 2, 4, "div", 1)(2, LoadingBarComponent_ng_container_0_div_2_Template, 1, 6, "div", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.includeSpinner);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.includeBar);
  }
}
var _c0 = "[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:_ngcontent-%COMP%_loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@keyframes _ngcontent-%COMP%_loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}";
var LoadingBarState = class {
  constructor(config = {}) {
    this.config = config;
    this.state = {
      action: null,
      value: 0,
      initialValue: 0
    };
    this.requests = null;
    this.disabled = false;
    this.stream$ = new Subject();
    this._value$ = null;
    this.timer$ = (s) => {
      let state$ = of(s);
      switch (s.action) {
        case "start":
        case "increment":
        case "set": {
          if (s.action === "start" && this.config.latencyThreshold === 0 && s.value === 0) {
            s.value = s.initialValue;
          }
          if (this.requests > 0) {
            state$ = timer(this.config.latencyThreshold, 250).pipe(map((t) => __spreadProps(__spreadValues({}, s), {
              value: t === 0 ? this.state.value || s.initialValue : this._increment()
            })));
          }
          break;
        }
        case "complete":
        case "stop": {
          state$ = s.value === 0 ? of(__spreadValues({}, s)) : timer(0, 500).pipe(take(2), map((t) => ({
            value: t === 0 ? 100 : 0
          })));
          break;
        }
      }
      return state$.pipe(map((next) => __spreadProps(__spreadValues({}, next), {
        action: "set"
      })), tap((next) => this.next(next, false)));
    };
    this.config = __spreadValues({
      latencyThreshold: 0
    }, config);
  }
  get value$() {
    if (this._value$) {
      return this._value$;
    }
    return this._value$ = this.stream$.pipe(startWith(this.state), switchMap((s) => this.timer$(s)), shareReplay(), map((s) => s.value));
  }
  start(initialValue = 2) {
    if (this.disabled) {
      return;
    }
    this.next({
      action: "start",
      initialValue
    });
  }
  stop() {
    this.next({
      action: "stop"
    });
  }
  complete() {
    this.next({
      action: "complete"
    });
  }
  disable() {
    this.disabled = true;
  }
  set(value) {
    this.next({
      action: "set",
      value
    });
  }
  increment(value = 0) {
    this.next({
      action: "increment",
      value
    });
  }
  next(state, emitEvent = true) {
    switch (state.action) {
      case "start":
        this.requests = (this.requests || 0) + 1;
        break;
      case "complete":
        this.requests = (this.requests || 1) - 1;
        if (this.requests > 0) {
          return;
        }
        break;
      case "stop":
        this.requests = 0;
        break;
      case "increment":
        state.value = this._increment(state.value);
        break;
    }
    this.state = __spreadValues(__spreadProps(__spreadValues({}, this.state), {
      action: null
    }), state);
    if (emitEvent) {
      this.stream$.next(this.state);
    }
  }
  _increment(rnd = 0) {
    const stat = this.state.value;
    if (stat >= 99) {
      rnd = 0;
    }
    if (rnd === 0) {
      if (stat >= 0 && stat < 25) {
        rnd = Math.random() * (5 - 3 + 1) + 3;
      } else if (stat >= 25 && stat < 65) {
        rnd = Math.random() * 3;
      } else if (stat >= 65 && stat < 90) {
        rnd = Math.random() * 2;
      } else if (stat >= 90 && stat < 99) {
        rnd = 0.5;
      } else {
        rnd = 0;
      }
    }
    return rnd + stat;
  }
};
var LOADING_BAR_CONFIG = new InjectionToken("LOADING_BAR_CONFIG");
var LoadingBarService = class _LoadingBarService {
  /** @deprecated use `value$` instead. */
  get progress$() {
    return this.value$;
  }
  constructor(platformId, config = {}, zone) {
    this.platformId = platformId;
    this.config = config;
    this.zone = zone;
    this.refs = {};
    this.streams$ = new Subject();
    this.value$ = this.streams$.pipe(startWith(null), switchMap(() => combineLatest(Object.keys(this.refs).map((s) => this.refs[s].value$))), runInZone(this.zone), map((v) => Math.max(0, ...v)));
  }
  /** @deprecated use `useRef` instead. */
  start(initialValue = 2) {
    this.useRef().start(initialValue);
  }
  /** @deprecated use `useRef` instead. */
  set(value) {
    this.useRef().set(value);
  }
  /** @deprecated use `useRef` instead. */
  increment(value) {
    this.useRef().increment(value);
  }
  /** @deprecated use `useRef` instead. */
  complete() {
    this.useRef().complete();
  }
  /** @deprecated use `useRef` instead. */
  stop() {
    this.useRef().stop();
  }
  useRef(id = "default") {
    if (!this.refs[id]) {
      this.refs[id] = new LoadingBarState(this.config);
      this.streams$.next();
      if (!isPlatformBrowser(this.platformId)) {
        this.refs[id].disable();
      }
    }
    return this.refs[id];
  }
  static {
    this.\u0275fac = function LoadingBarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingBarService)(\u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(LOADING_BAR_CONFIG, 8), \u0275\u0275inject(NgZone, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _LoadingBarService,
      factory: _LoadingBarService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [LOADING_BAR_CONFIG]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
function runInZone(zone) {
  if (!zone) {
    return (source) => source;
  }
  return (source) => new Observable((observer) => source.subscribe((value) => zone.run(() => observer.next(value)), (e) => zone.run(() => observer.error(e)), () => zone.run(() => observer.complete())));
}
var NgxLoadingBar = class _NgxLoadingBar {
  get value$() {
    return this.ref ? this.loader.useRef(this.ref).value$ : this.loader.value$;
  }
  constructor(loader) {
    this.loader = loader;
    this.includeSpinner = true;
    this.includeBar = true;
    this.fixed = true;
    this.color = "#29d";
  }
  static {
    this.\u0275fac = function NgxLoadingBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxLoadingBar)(\u0275\u0275directiveInject(LoadingBarService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxLoadingBar,
      selectors: [["ngx-loading-bar"]],
      hostVars: 3,
      hostBindings: function NgxLoadingBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("fixed", ctx.fixed);
          \u0275\u0275styleProp("color", ctx.color);
        }
      },
      inputs: {
        includeSpinner: "includeSpinner",
        includeBar: "includeBar",
        fixed: "fixed",
        color: "color",
        value: "value",
        ref: "ref",
        height: "height",
        diameter: "diameter"
      },
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "ngx-spinner", 4, "ngIf"], ["class", "ngx-bar", 3, "background", "height", "width", 4, "ngIf"], [1, "ngx-spinner"], [1, "ngx-spinner-icon"], [1, "ngx-bar"]],
      template: function NgxLoadingBar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgxLoadingBar_ng_container_0_Template, 3, 2, "ng-container", 0);
          \u0275\u0275pipe(1, "async");
        }
        if (rf & 2) {
          \u0275\u0275property("ngIf", ctx.value != null ? ctx.value : \u0275\u0275pipeBind1(1, 1, ctx.value$));
        }
      },
      dependencies: [AsyncPipe, NgIf],
      styles: ["[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:_ngcontent-%COMP%_loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@keyframes _ngcontent-%COMP%_loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxLoadingBar, [{
    type: Component,
    args: [{
      selector: "ngx-loading-bar",
      standalone: true,
      imports: [AsyncPipe, NgIf],
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.Emulated,
      host: {
        "[attr.fixed]": "fixed",
        "[style.color]": "color"
      },
      template: `<ng-container *ngIf="value != null ? value : (value$ | async) as progress">
  <div *ngIf="includeSpinner" class="ngx-spinner">
    <div [style.width]="diameter" [style.height]="diameter" class="ngx-spinner-icon"></div>
  </div>
  <div
    *ngIf="includeBar"
    class="ngx-bar"
    [style.background]="color"
    [style.height]="height"
    [style.width]="progress + '%'"
  ></div>
</ng-container>
`,
      styles: [":host{position:relative;display:block;pointer-events:none}:host .ngx-spinner{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}:host .ngx-spinner .ngx-spinner-icon{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:loading-bar-spinner .4s linear infinite}:host .ngx-bar{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl] :host .ngx-bar{right:0;left:unset}:host[fixed=true]{z-index:10002}:host[fixed=true] .ngx-bar{position:fixed}:host[fixed=true] .ngx-spinner{position:fixed;top:10px;left:10px}[dir=rtl] :host[fixed=true] .ngx-spinner{right:10px;left:unset}@keyframes loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"]
    }]
  }], function() {
    return [{
      type: LoadingBarService
    }];
  }, {
    includeSpinner: [{
      type: Input
    }],
    includeBar: [{
      type: Input
    }],
    fixed: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    ref: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    diameter: [{
      type: Input
    }]
  });
})();
var LoadingBarComponent = class _LoadingBarComponent extends NgxLoadingBar {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275LoadingBarComponent_BaseFactory;
      return function LoadingBarComponent_Factory(__ngFactoryType__) {
        return (\u0275LoadingBarComponent_BaseFactory || (\u0275LoadingBarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LoadingBarComponent)))(__ngFactoryType__ || _LoadingBarComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _LoadingBarComponent,
      selectors: [["ngx-loading-bar"]],
      hostVars: 3,
      hostBindings: function LoadingBarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("fixed", ctx.fixed);
          \u0275\u0275styleProp("color", ctx.color);
        }
      },
      standalone: false,
      features: [\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "ngx-spinner", 4, "ngIf"], ["class", "ngx-bar", 3, "background", "height", "width", 4, "ngIf"], [1, "ngx-spinner"], [1, "ngx-spinner-icon"], [1, "ngx-bar"]],
      template: function LoadingBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, LoadingBarComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
          \u0275\u0275pipe(1, "async");
        }
        if (rf & 2) {
          \u0275\u0275property("ngIf", ctx.value != null ? ctx.value : \u0275\u0275pipeBind1(1, 1, ctx.value$));
        }
      },
      dependencies: [NgIf, AsyncPipe],
      styles: [_c0],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarComponent, [{
    type: Component,
    args: [{
      selector: "ngx-loading-bar",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.Emulated,
      host: {
        "[attr.fixed]": "fixed",
        "[style.color]": "color"
      },
      template: `<ng-container *ngIf="value != null ? value : (value$ | async) as progress">
  <div *ngIf="includeSpinner" class="ngx-spinner">
    <div [style.width]="diameter" [style.height]="diameter" class="ngx-spinner-icon"></div>
  </div>
  <div
    *ngIf="includeBar"
    class="ngx-bar"
    [style.background]="color"
    [style.height]="height"
    [style.width]="progress + '%'"
  ></div>
</ng-container>
`,
      styles: [":host{position:relative;display:block;pointer-events:none}:host .ngx-spinner{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}:host .ngx-spinner .ngx-spinner-icon{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:loading-bar-spinner .4s linear infinite}:host .ngx-bar{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl] :host .ngx-bar{right:0;left:unset}:host[fixed=true]{z-index:10002}:host[fixed=true] .ngx-bar{position:fixed}:host[fixed=true] .ngx-spinner{position:fixed;top:10px;left:10px}[dir=rtl] :host[fixed=true] .ngx-spinner{right:10px;left:unset}@keyframes loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"]
    }]
  }], null, null);
})();
var LoadingBarModule = class _LoadingBarModule {
  static {
    this.\u0275fac = function LoadingBarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingBarModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _LoadingBarModule,
      declarations: [LoadingBarComponent],
      imports: [CommonModule],
      exports: [LoadingBarComponent]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [LoadingBarComponent],
      exports: [LoadingBarComponent]
    }]
  }], null, null);
})();

// node_modules/@ngx-loading-bar/router/fesm2022/ngx-loading-bar-router.mjs
function getCurrentNavigationState(router) {
  const currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
  if (currentNavigation && currentNavigation.extras) {
    return currentNavigation.extras.state;
  }
  return {};
}
function registerRouterListener(router, loader) {
  return () => {
    const ref = loader.useRef("router");
    router.events.subscribe((event) => {
      const navState = getCurrentNavigationState(router);
      if (navState && navState.ignoreLoadingBar) {
        return;
      }
      if (event instanceof NavigationStart) {
        ref.start();
      }
      if (event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel) {
        ref.complete();
      }
    });
  };
}
var LoadingBarRouterModule = class _LoadingBarRouterModule {
  constructor(router, loader) {
    registerRouterListener(router, loader)();
  }
  static {
    this.\u0275fac = function LoadingBarRouterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingBarRouterModule)(\u0275\u0275inject(Router), \u0275\u0275inject(LoadingBarService));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _LoadingBarRouterModule,
      imports: [RouterModule, LoadingBarModule],
      exports: [RouterModule, LoadingBarModule]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [RouterModule, LoadingBarModule, RouterModule, LoadingBarModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarRouterModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, LoadingBarModule],
      exports: [RouterModule, LoadingBarModule]
    }]
  }], function() {
    return [{
      type: Router
    }, {
      type: LoadingBarService
    }];
  }, null);
})();

// src/app/shared/store/action/menu.action.ts
var GetMenuAction = class {
  static {
    this.type = "[Menu] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/store/action/currency.action.ts
var GetCurrenciesAction = class {
  static {
    this.type = "[Currency] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/store/action/subscription.action.ts
var SubscriptionAction = class {
  static {
    this.type = "[Subscription] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/menu.service.ts
var MenuService = class _MenuService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
    this.mainMenuToggle = false;
    this.sideNavToggle = false;
    this.isOpenSearch = false;
  }
  getMenu(payload) {
    return this.http.get(`${environment.URL}/menu.json`, { params: payload });
  }
  static {
    this.\u0275fac = function MenuService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MenuService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuService, factory: _MenuService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/menu.state.ts
var MenuState = class MenuState2 {
  constructor() {
    this.menuService = inject(MenuService);
  }
  static menu(state) {
    return state.menu;
  }
  getMenu(ctx, action) {
    if (ctx.getState().menu.data.length > 0)
      return;
    this.menuService.skeletonLoader = true;
    return this.menuService.getMenu(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          menu: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.menuService.skeletonLoader = false;
      }
    }), catchError(() => {
      this.menuService.skeletonLoader = false;
      ctx.patchState({ menu: { data: [], total: 0 } });
      return EMPTY;
    }));
  }
  static {
    this.\u0275fac = function MenuState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MenuState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: MenuState2, factory: MenuState2.\u0275fac });
  }
};
__decorate([
  Action(GetMenuAction)
], MenuState.prototype, "getMenu", null);
__decorate([
  Selector()
], MenuState, "menu", null);
MenuState = __decorate([
  State({
    name: "menu",
    defaults: {
      menu: {
        data: [],
        total: 0
      }
    }
  })
], MenuState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuState, [{
    type: Injectable
  }], null, { getMenu: [] });
})();

// src/app/shared/services/currency.service.ts
var CurrencyService = class _CurrencyService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getCurrencies(payload) {
    return this.http.get(`${environment.URL}/currency.json`, { params: payload });
  }
  static {
    this.\u0275fac = function CurrencyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrencyService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CurrencyService, factory: _CurrencyService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/currency.state.ts
var CurrencyState = class CurrencyState2 {
  constructor() {
    this.currencyService = inject(CurrencyService);
  }
  static currency(state) {
    return state.currency;
  }
  getCurrencies(ctx, action) {
    return this.currencyService.getCurrencies(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          currency: {
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
  static {
    this.\u0275fac = function CurrencyState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CurrencyState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CurrencyState2, factory: CurrencyState2.\u0275fac });
  }
};
__decorate([
  Action(GetCurrenciesAction)
], CurrencyState.prototype, "getCurrencies", null);
__decorate([
  Selector()
], CurrencyState, "currency", null);
CurrencyState = __decorate([
  State({
    name: "currency",
    defaults: {
      currency: {
        data: [],
        total: 0
      }
    }
  })
], CurrencyState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyState, [{
    type: Injectable
  }], null, { getCurrencies: [] });
})();

export {
  GetCurrenciesAction,
  LoadingBarComponent,
  LoadingBarRouterModule,
  SubscriptionAction,
  MenuService,
  GetMenuAction,
  MenuState,
  CurrencyState
};
//# sourceMappingURL=chunk-CKWMJ2BV.js.map
