import {
  Injectable,
  Subject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";

// src/app/shared/services/cart.service.ts
var CartService = class _CartService {
  constructor() {
    this.subjectQty = new Subject();
  }
  updateQty() {
    this.subjectQty.next(true);
  }
  getUpdateQtyClickEvent() {
    return this.subjectQty.asObservable();
  }
  static {
    this.\u0275fac = function CartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CartService
};
//# sourceMappingURL=chunk-4WQTN4AN.js.map
