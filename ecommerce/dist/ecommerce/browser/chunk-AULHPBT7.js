import {
  AuthService
} from "./chunk-LEE25DCS.js";
import {
  Router
} from "./chunk-6347PIFH.js";
import {
  NotificationService
} from "./chunk-MUAYKWHK.js";
import {
  HttpClient,
  environment
} from "./chunk-L6CMOIIK.js";
import {
  Action,
  Injectable,
  Selector,
  State,
  Store,
  __decorate,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";

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
    return this.http.get(`${environment.URL}/wishlist.json`);
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
    this.authService = inject(AuthService);
    this.notificationService = inject(NotificationService);
  }
  static wishlistItems(state) {
    return state.wishlist;
  }
  static wishlistIds(state) {
    return state.wishlistIds;
  }
  getWishlistItems(ctx) {
    this.wishlistService.skeletonLoader = true;
    return this.wishlistService.getWishlistItems().pipe(tap({
      next: (result) => {
        let ids = result.data.map((product) => product.id);
        ctx.patchState({
          wishlist: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          },
          wishlistIds: ids
        });
      },
      complete: () => {
        this.wishlistService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  add(_ctx, _action) {
    void this.router.navigate(["/wishlist"]);
  }
  delete(ctx, { id }) {
    const state = ctx.getState();
    let item = state.wishlist.data.filter((value) => value.id !== id);
    ctx.patchState({
      wishlist: {
        data: item,
        total: state.wishlist.total - 1
      }
    });
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
//# sourceMappingURL=chunk-AULHPBT7.js.map
