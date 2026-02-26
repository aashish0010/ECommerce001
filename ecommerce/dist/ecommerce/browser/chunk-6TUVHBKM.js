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

// src/app/shared/services/attribute.service.ts
var AttributeService = class _AttributeService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
    this.offCanvasMenu = false;
  }
  getAttributes(payload) {
    return this.http.get(`${environment.URL}/attribute.json`, { params: payload });
  }
  getAttributeValues(payload) {
    return this.http.get(`${environment.URL}/attribute-value.json`, {
      params: payload
    });
  }
  getAttribute(id) {
    return this.http.get(`${environment.URL}/attribute/${id}`);
  }
  static {
    this.\u0275fac = function AttributeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttributeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttributeService, factory: _AttributeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttributeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/action/attribute.action.ts
var GetAttributesAction = class {
  static {
    this.type = "[Attribute] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetAttributeValuesAction = class {
  static {
    this.type = "[Attribute] Value Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetAttributeAction = class {
  static {
    this.type = "[Attribute] Edit";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/store/state/attribute.state.ts
var AttributeState = class AttributeState2 {
  constructor() {
    this.attributeService = inject(AttributeService);
  }
  static attribute(state) {
    return state.attribute;
  }
  static attribute_value(state) {
    return (id) => {
      if (!id)
        return [];
      return state?.attribute_values.filter((attr_val) => +attr_val.attribute_id === id)?.map((value) => {
        return { label: value?.value, value: value?.id };
      });
    };
  }
  static selectedAttribute(state) {
    return state.selectedAttribute;
  }
  getAttributes(ctx, action) {
    if (ctx.getState().attribute.data.length > 0)
      return;
    this.attributeService.skeletonLoader = true;
    return this.attributeService.getAttributes(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          attribute: {
            data: result.data,
            total: result?.total ? result?.total : result.data.length
          }
        });
      },
      complete: () => {
        this.attributeService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getAttributeValues(ctx, action) {
    return this.attributeService.getAttributeValues(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          attribute_values: result.data
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  get(ctx, { id }) {
    return this.attributeService.getAttributes().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const state = ctx.getState();
          const result = results.data.find((blog) => blog.id == id);
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedAttribute: result
          }));
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function AttributeState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AttributeState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: AttributeState2, factory: AttributeState2.\u0275fac });
  }
};
__decorate([
  Action(GetAttributesAction)
], AttributeState.prototype, "getAttributes", null);
__decorate([
  Action(GetAttributeValuesAction)
], AttributeState.prototype, "getAttributeValues", null);
__decorate([
  Action(GetAttributeAction)
], AttributeState.prototype, "get", null);
__decorate([
  Selector()
], AttributeState, "attribute", null);
__decorate([
  Selector()
], AttributeState, "attribute_value", null);
__decorate([
  Selector()
], AttributeState, "selectedAttribute", null);
AttributeState = __decorate([
  State({
    name: "attribute",
    defaults: {
      attribute: {
        data: [],
        total: 0
      },
      attribute_values: [],
      selectedAttribute: null
    }
  })
], AttributeState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttributeState, [{
    type: Injectable
  }], null, { getAttributes: [], getAttributeValues: [], get: [] });
})();

export {
  AttributeService,
  GetAttributesAction,
  GetAttributeAction,
  AttributeState
};
//# sourceMappingURL=chunk-6TUVHBKM.js.map
