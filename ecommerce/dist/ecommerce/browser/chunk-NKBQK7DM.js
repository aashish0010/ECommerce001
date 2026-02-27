import {
  environment
} from "./chunk-4LUQBUB6.js";
import {
  Action,
  Selector,
  State
} from "./chunk-6YJBSKCB.js";
import {
  HttpClient
} from "./chunk-QK7HTLFB.js";
import {
  Injectable,
  __decorate,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/store/action/coupon.action.ts
var GetCouponsAction = class {
  static {
    this.type = "[Coupon] Get";
  }
};
var ApplyCouponAction = class {
  static {
    this.type = "[Coupon] Apply";
  }
  constructor(code, subtotal) {
    this.code = code;
    this.subtotal = subtotal;
  }
};
var RemoveCouponAction = class {
  static {
    this.type = "[Coupon] Remove";
  }
};

// src/app/shared/services/coupon.service.ts
var CouponService = class _CouponService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getCoupons() {
    return this.http.get(`${environment.baseURL}coupon`);
  }
  applyCoupon(code, subtotal) {
    return this.http.post(`${environment.baseURL}coupon/apply`, {
      code,
      subtotal,
      company_info_id: 1
    });
  }
  static {
    this.\u0275fac = function CouponService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CouponService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CouponService, factory: _CouponService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CouponService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/coupon.state.ts
var CouponState = class CouponState2 {
  constructor() {
    this.couponService = inject(CouponService);
  }
  static coupons(state) {
    return state.coupons;
  }
  static appliedCoupon(state) {
    return state.appliedCoupon;
  }
  static couponError(state) {
    return state.couponError;
  }
  getCoupons(ctx) {
    return this.couponService.getCoupons().pipe(tap({
      next: (result) => {
        ctx.patchState({ coupons: result.data ?? [] });
      },
      error: () => {
        ctx.patchState({ coupons: [] });
      }
    }));
  }
  applyCoupon(ctx, action) {
    ctx.patchState({ couponError: null });
    return this.couponService.applyCoupon(action.code, action.subtotal).pipe(tap({
      next: (result) => {
        ctx.patchState({ appliedCoupon: result, couponError: null });
      },
      error: (err) => {
        ctx.patchState({
          appliedCoupon: null,
          couponError: err?.error?.message ?? "Invalid coupon code."
        });
        throw new Error(err?.error?.message ?? "Invalid coupon code.");
      }
    }));
  }
  removeCoupon(ctx) {
    ctx.patchState({ appliedCoupon: null, couponError: null });
  }
  static {
    this.\u0275fac = function CouponState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CouponState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CouponState2, factory: CouponState2.\u0275fac });
  }
};
__decorate([
  Action(GetCouponsAction)
], CouponState.prototype, "getCoupons", null);
__decorate([
  Action(ApplyCouponAction)
], CouponState.prototype, "applyCoupon", null);
__decorate([
  Action(RemoveCouponAction)
], CouponState.prototype, "removeCoupon", null);
__decorate([
  Selector()
], CouponState, "coupons", null);
__decorate([
  Selector()
], CouponState, "appliedCoupon", null);
__decorate([
  Selector()
], CouponState, "couponError", null);
CouponState = __decorate([
  State({
    name: "coupon",
    defaults: {
      coupons: [],
      appliedCoupon: null,
      couponError: null
    }
  })
], CouponState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CouponState, [{
    type: Injectable
  }], null, { getCoupons: [], applyCoupon: [], removeCoupon: [] });
})();

export {
  GetCouponsAction,
  ApplyCouponAction,
  RemoveCouponAction,
  CouponState
};
//# sourceMappingURL=chunk-NKBQK7DM.js.map
