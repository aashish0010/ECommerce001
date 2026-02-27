import {
  Router
} from "./chunk-6R3AQVTF.js";
import {
  NotificationService
} from "./chunk-HBLN46Q5.js";
import {
  environment
} from "./chunk-4LUQBUB6.js";
import {
  Action,
  Selector,
  State,
  Store
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

// src/app/shared/store/action/wishlist.action.ts
var GetWishlistAction = class {
  static {
    this.type = "[Wishlist] Get";
  }
};
var AddToWishlistAction = class {
  static {
    this.type = "[Wishlist] post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var DeleteWishlistAction = class {
  static {
    this.type = "[Wishlist] delete";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/services/wishlist.service.ts
var WishlistService = class _WishlistService {
  constructor() {
    this.http = inject(HttpClient);
    this.skeletonLoader = false;
  }
  getWishlistItems() {
    return this.http.get(`${environment.baseURL}wishlist`);
  }
  addToWishlist(productId) {
    return this.http.post(`${environment.baseURL}wishlist`, {
      product_id: productId
    });
  }
  removeFromWishlist(productId) {
    return this.http.delete(`${environment.baseURL}wishlist/${productId}`);
  }
  static {
    this.\u0275fac = function WishlistService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishlistService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WishlistService, factory: _WishlistService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/wishlist.state.ts
var WishlistState = class WishlistState2 {
  constructor() {
    this.store = inject(Store);
    this.router = inject(Router);
    this.wishlistService = inject(WishlistService);
    this.notificationService = inject(NotificationService);
  }
  static wishlistItems(state) {
    return state.wishlist;
  }
  static wishlistIds(state) {
    return state.wishlistIds;
  }
  getWishlistItems(ctx) {
    if (!this.store.selectSnapshot((state) => state.auth && state.auth.access_token)) {
      return;
    }
    this.wishlistService.skeletonLoader = true;
    return this.wishlistService.getWishlistItems().pipe(tap({
      next: (result) => {
        const data = Array.isArray(result) ? result : result.data || [];
        const ids = data.map((product) => product.id);
        ctx.patchState({
          wishlist: {
            data,
            total: result?.total ? result.total : data.length
          },
          wishlistIds: ids
        });
      },
      complete: () => {
        this.wishlistService.skeletonLoader = false;
      },
      error: (err) => {
        this.wishlistService.skeletonLoader = false;
        throw new Error(err?.error?.message);
      }
    }));
  }
  add(ctx, action) {
    if (!this.store.selectSnapshot((state) => state.auth && state.auth.access_token)) {
      this.notificationService.showError("Please login to add items to wishlist.");
      return;
    }
    const productId = action.payload?.["product_id"];
    if (!productId)
      return;
    return this.wishlistService.addToWishlist(productId).pipe(tap({
      next: () => {
        const state = ctx.getState();
        if (!state.wishlistIds.includes(productId)) {
          ctx.patchState({
            wishlistIds: [...state.wishlistIds, productId]
          });
        }
        this.notificationService.showSuccess("Added to wishlist.");
        this.store.dispatch(new GetWishlistAction());
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to add to wishlist.");
      }
    }));
  }
  delete(ctx, { id }) {
    return this.wishlistService.removeFromWishlist(id).pipe(tap({
      next: () => {
        const state = ctx.getState();
        ctx.patchState({
          wishlist: {
            data: state.wishlist.data.filter((value) => value.id !== id),
            total: state.wishlist.total - 1
          },
          wishlistIds: state.wishlistIds.filter((wId) => wId !== id)
        });
        this.notificationService.showSuccess("Removed from wishlist.");
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to remove from wishlist.");
      }
    }));
  }
  static {
    this.\u0275fac = function WishlistState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WishlistState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: WishlistState2, factory: WishlistState2.\u0275fac });
  }
};
__decorate([
  Action(GetWishlistAction)
], WishlistState.prototype, "getWishlistItems", null);
__decorate([
  Action(AddToWishlistAction)
], WishlistState.prototype, "add", null);
__decorate([
  Action(DeleteWishlistAction)
], WishlistState.prototype, "delete", null);
__decorate([
  Selector()
], WishlistState, "wishlistItems", null);
__decorate([
  Selector()
], WishlistState, "wishlistIds", null);
WishlistState = __decorate([
  State({
    name: "wishlist",
    defaults: {
      wishlist: {
        data: [],
        total: 0
      },
      wishlistIds: []
    }
  })
], WishlistState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistState, [{
    type: Injectable
  }], null, { getWishlistItems: [], add: [], delete: [] });
})();

export {
  GetWishlistAction,
  AddToWishlistAction,
  DeleteWishlistAction,
  WishlistService,
  WishlistState
};
//# sourceMappingURL=chunk-M3EBGQIQ.js.map
