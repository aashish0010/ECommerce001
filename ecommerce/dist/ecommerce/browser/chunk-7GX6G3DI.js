import {
  AuthGuard
} from "./chunk-SCWJJX4I.js";
import {
  GetBrandBySlugAction
} from "./chunk-XVI6NDZ3.js";
import {
  GetCategoryBySlugAction
} from "./chunk-PM45JHZH.js";
import {
  AuthService
} from "./chunk-LEE25DCS.js";
import {
  AccountState,
  GetUserDetailsAction
} from "./chunk-HP6MYKGT.js";
import {
  GetProductBySlugAction
} from "./chunk-RWFLVE5E.js";
import "./chunk-MUAYKWHK.js";
import "./chunk-2K52HGL6.js";
import "./chunk-QQXAO3XE.js";
import "./chunk-JLWO6B35.js";
import "./chunk-L6CMOIIK.js";
import {
  Injectable,
  Store,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/core/guard/checkout.guard.ts
var CheckoutGuard = class _CheckoutGuard {
  constructor() {
    this.store = inject(Store);
    this.authService = inject(AuthService);
  }
  canActivate(_route, state) {
    const token = this.store.selectSnapshot((s) => s.auth?.access_token);
    if (!token) {
      this.authService.redirectUrl = state.url;
      this.authService.isLogin = true;
      return false;
    }
    const user = this.store.selectSnapshot(AccountState.user);
    if (!user) {
      this.store.dispatch(new GetUserDetailsAction());
    }
    return true;
  }
  static {
    this.\u0275fac = function CheckoutGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutGuard)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckoutGuard, factory: _CheckoutGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/resolver/brand.resolver.ts
var BrandResolver = (route, _state) => {
  const store = inject(Store);
  const slug = route.paramMap.get("slug");
  if (!slug) {
    throw new Error("Slug parameter is missing");
  }
  return store.dispatch(new GetBrandBySlugAction(slug));
};

// src/app/shared/resolver/category.resolver.ts
var CategoryResolver = (route, _state) => {
  const store = inject(Store);
  const slug = route.paramMap.get("slug");
  if (!slug) {
    throw new Error("Slug parameter is missing");
  }
  return store.dispatch(new GetCategoryBySlugAction(slug));
};

// src/app/shared/resolver/product.resolver.ts
var ProductResolver = (route, _state) => {
  const store = inject(Store);
  const slug = route.paramMap.get("slug");
  if (!slug) {
    throw new Error("Slug parameter is missing");
  }
  return store.dispatch(new GetProductBySlugAction(slug));
};

// src/app/components/shop/shop.routes.ts
var shop = [
  __spreadValues({
    path: "cart",
    loadComponent: () => import("./chunk-4Y6BMUTX.js").then((m) => m.Cart)
  }, false ? { \u0275entryName: "src/app/components/shop/cart/cart.ts" } : {}),
  __spreadValues({
    path: "collections",
    loadComponent: () => import("./chunk-FELNS54R.js").then((m) => m.Collection)
  }, false ? { \u0275entryName: "src/app/components/shop/collection/collection.ts" } : {}),
  __spreadValues({
    path: "product/:slug",
    loadComponent: () => import("./chunk-QJKZM7SK.js").then((m) => m.Product),
    resolve: {
      data: ProductResolver
    }
  }, false ? { \u0275entryName: "src/app/components/shop/product/product.ts" } : {}),
  __spreadValues({
    path: "wishlist",
    loadComponent: () => import("./chunk-NIE6C4DS.js").then((m) => m.Wishlist),
    canActivate: [AuthGuard]
  }, false ? { \u0275entryName: "src/app/components/shop/wishlist/wishlist.ts" } : {}),
  __spreadValues({
    path: "compare",
    loadComponent: () => import("./chunk-IRMMR3IU.js").then((m) => m.Compare),
    canActivate: [AuthGuard]
  }, false ? { \u0275entryName: "src/app/components/shop/compare/compare.ts" } : {}),
  __spreadValues({
    path: "checkout",
    loadComponent: () => import("./chunk-ICWNFPKF.js").then((m) => m.Checkout),
    canActivate: [CheckoutGuard]
  }, false ? { \u0275entryName: "src/app/components/shop/checkout/checkout.ts" } : {}),
  __spreadValues({
    path: "order/tracking",
    loadComponent: () => import("./chunk-7GSUJKXX.js").then((m) => m.OrderTracking)
  }, false ? { \u0275entryName: "src/app/components/shop/order-tracking/order-tracking.ts" } : {}),
  __spreadValues({
    path: "order/details",
    loadComponent: () => import("./chunk-3RDRJX5Z.js").then((m) => m.OrderDetails)
  }, false ? { \u0275entryName: "src/app/components/shop/order-details/order-details.ts" } : {}),
  __spreadValues({
    path: "brand/:slug",
    loadComponent: () => import("./chunk-SNWBWEYR.js").then((m) => m.Brand),
    resolve: {
      data: BrandResolver
    }
  }, false ? { \u0275entryName: "src/app/components/shop/brand/brand.ts" } : {}),
  __spreadValues({
    path: "category/:slug",
    loadComponent: () => import("./chunk-XX3LZJJE.js").then((m) => m.Category),
    resolve: {
      data: CategoryResolver
    }
  }, false ? { \u0275entryName: "src/app/components/shop/category/category.ts" } : {})
];
export {
  shop
};
//# sourceMappingURL=chunk-7GX6G3DI.js.map
