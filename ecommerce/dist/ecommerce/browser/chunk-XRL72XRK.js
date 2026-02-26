import {
  AddToCartAction,
  AddToCartLocalStorageAction,
  ClearCartAction,
  CloseStickyCartAction,
  DeleteCartAction,
  GetCartItemsAction,
  ReplaceCartAction,
  SyncCartAction,
  ToggleSidebarCartAction,
  UpdateCartAction
} from "./chunk-HD3MPZTG.js";
import {
  NotificationService
} from "./chunk-MUAYKWHK.js";
import {
  Action,
  Injectable,
  Selector,
  State,
  Store,
  __decorate,
  inject,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/store/state/cart.state.ts
var CartState = class CartState2 {
  constructor() {
    this.notificationService = inject(NotificationService);
    this.store = inject(Store);
  }
  ngxsOnInit(ctx) {
    ctx.dispatch(new ToggleSidebarCartAction(false));
    ctx.dispatch(new CloseStickyCartAction());
  }
  static cartItems(state) {
    return state.items;
  }
  static cartTotal(state) {
    return state.total;
  }
  static cartHasDigital(state) {
    return state.is_digital_only;
  }
  static stickyCart(state) {
    return state.stickyCartOpen;
  }
  static sidebarCartOpen(state) {
    return state.sidebarCartOpen;
  }
  getCartItems(_ctx) {
  }
  add(_ctx, action) {
    if (action.payload.id) {
      return this.store.dispatch(new UpdateCartAction(action.payload));
    }
    return this.store.dispatch(new AddToCartLocalStorageAction(action.payload));
  }
  addToLocalStorage(ctx, action) {
    let salePrice = action.payload.variation ? action.payload.variation.sale_price : action.payload.product?.sale_price;
    let result = {
      is_digital_only: false,
      items: [
        {
          id: Number(Math.floor(Math.random() * 1e4).toString().padStart(4, "0")),
          // Generate Random Id
          quantity: action.payload.quantity,
          sub_total: salePrice ? salePrice * action.payload.quantity : 0,
          product: action.payload.product,
          product_id: action.payload.product_id,
          wholesale_price: null,
          variation: action.payload.variation,
          variation_id: action.payload.variation_id
        }
      ]
    };
    const state = ctx.getState();
    const cart = [...state.items];
    const index = cart.findIndex((item) => item.id === result.items[0].id);
    let output = __spreadValues({}, state);
    if (index == -1) {
      if (!state.items.length) {
        output.items = [...state.items, ...result.items];
      } else {
        if (result.items[0].variation) {
          if (state.items.find((item) => item.variation_id == result.items[0].variation_id)) {
            cart.find((item) => {
              if (item.variation_id) {
                if (item.variation_id == result.items[0].variation_id) {
                  const productQty = item?.variation?.quantity;
                  if (productQty < item?.quantity + action?.payload.quantity) {
                    this.notificationService.showError(`You can not add more items than available. In stock ${productQty} items.`);
                    return false;
                  }
                  item.quantity = item?.quantity + result.items[0].quantity;
                  item.sub_total = item?.quantity * item?.variation?.sale_price;
                }
              }
            });
          } else {
            output.items = [...state.items, ...result.items];
          }
        } else if (state.items.find((item) => item.product_id == result.items[0].product_id)) {
          cart.find((item) => {
            if (item.product_id == result.items[0].product_id) {
              const productQty = item?.product?.quantity;
              if (productQty < item?.quantity + action?.payload.quantity) {
                this.notificationService.showError(`You can not add more items than available. In stock ${productQty} items.`);
                return false;
              }
              item.quantity = item?.quantity + result.items[0].quantity;
              item.sub_total = item?.quantity * item.product.sale_price;
            }
          });
        } else {
          output.items = [...state.items, ...result.items];
        }
      }
    }
    output.items.filter((item) => {
      if (item?.variation) {
        item.variation.selected_variation = item?.variation?.attribute_values?.map((values) => values.value)?.join("/");
      }
    });
    output.total = output.items.reduce((prev, curr) => {
      return prev + Number(curr.sub_total);
    }, 0);
    output.stickyCartOpen = true;
    output.sidebarCartOpen = true;
    output.is_digital_only = output.items.map((item) => item.product && item?.product?.product_type).every((item) => item == "digital");
    ctx.patchState(output);
    setTimeout(() => {
      this.store.dispatch(new CloseStickyCartAction());
    }, 1500);
  }
  update(ctx, action) {
    const state = ctx.getState();
    const cart = [...state.items];
    const index = cart.findIndex((item) => Number(item.id) === Number(action.payload.id));
    if (cart[index]?.variation && action.payload.variation_id && Number(cart[index].id) === Number(action.payload.id) && Number(cart[index]?.variation_id) != Number(action.payload.variation_id)) {
      return this.store.dispatch(new ReplaceCartAction(action.payload));
    }
    const productQty = cart[index]?.variation ? cart[index]?.variation?.quantity : cart[index]?.product?.quantity;
    if (productQty < cart[index]?.quantity + action?.payload.quantity) {
      this.notificationService.showError(`You can not add more items than available. In stock ${productQty} items.`);
      return false;
    }
    if (cart[index]?.variation) {
      cart[index].variation.selected_variation = cart[index]?.variation?.attribute_values?.map((values) => values.value)?.join("/");
    }
    cart[index].quantity = cart[index]?.quantity + action?.payload.quantity;
    cart[index].sub_total = cart[index]?.quantity * (cart[index]?.variation ? cart[index]?.variation?.sale_price : cart[index].product.sale_price);
    if (cart[index].product?.wholesales?.length) {
      let wholesale = cart[index].product.wholesales.find((value) => value.min_qty <= cart[index].quantity && value.max_qty >= cart[index].quantity) || null;
      if (wholesale && cart[index].product.wholesale_price_type == "fixed") {
        cart[index].sub_total = cart[index].quantity * wholesale.value;
        cart[index].wholesale_price = cart[index].sub_total / cart[index].quantity;
      } else if (wholesale && cart[index].product.wholesale_price_type == "percentage") {
        cart[index].sub_total = cart[index].quantity * (cart[index]?.variation ? cart[index]?.variation?.sale_price : cart[index].product.sale_price);
        cart[index].sub_total = cart[index].sub_total - cart[index].sub_total * (wholesale.value / 100);
        cart[index].wholesale_price = cart[index].sub_total / cart[index].quantity;
      } else {
        cart[index].sub_total = cart[index]?.quantity * (cart[index]?.variation ? cart[index]?.variation?.sale_price : cart[index].product.sale_price);
        cart[index].wholesale_price = null;
      }
    } else {
      cart[index].sub_total = cart[index]?.quantity * (cart[index]?.variation ? cart[index]?.variation?.sale_price : cart[index].product.sale_price);
      cart[index].wholesale_price = null;
    }
    if (cart[index].quantity < 1) {
      this.store.dispatch(new DeleteCartAction(action.payload.id));
      return of();
    }
    let total = state.items.reduce((prev, curr) => {
      return prev + Number(curr.sub_total);
    }, 0);
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      is_digital_only: cart.map((item) => item.product && item?.product?.product_type).every((item) => item == "digital"),
      total
    }));
    if (!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      return;
    }
  }
  replace(ctx, action) {
    const state = ctx.getState();
    const cart = [...state.items];
    const index = cart.findIndex((item) => Number(item.id) === Number(action.payload.id));
    if (cart[index]?.variation && action.payload.variation_id && Number(cart[index].id) === Number(action.payload.id) && Number(cart[index]?.variation_id) != Number(action.payload.variation_id)) {
      cart[index].variation = action.payload.variation;
      cart[index].variation_id = action.payload.variation_id;
      cart[index].variation.selected_variation = cart[index]?.variation?.attribute_values?.map((values) => values.value)?.join("/");
    }
    cart[index].quantity = 0;
    const productQty = cart[index]?.variation ? cart[index]?.variation?.quantity : cart[index]?.product?.quantity;
    if (productQty < cart[index]?.quantity + action?.payload.quantity) {
      this.notificationService.showError(`You can not add more items than available. In stock ${productQty} items.`);
      return false;
    }
    cart[index].quantity = cart[index]?.quantity + action?.payload.quantity;
    cart[index].sub_total = cart[index]?.quantity * (cart[index]?.variation ? cart[index]?.variation?.sale_price : cart[index].product.sale_price);
    if (cart[index].quantity < 1) {
      this.store.dispatch(new DeleteCartAction(action.payload.id));
      return of();
    }
    let total = state.items.reduce((prev, curr) => {
      return prev + Number(curr.sub_total);
    }, 0);
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      total
    }));
    if (!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      return;
    }
  }
  delete(ctx, { id }) {
    const state = ctx.getState();
    let cart = state.items.filter((value) => value.id !== id);
    let total = cart.reduce((prev, curr) => {
      return prev + Number(curr.sub_total);
    }, 0);
    ctx.patchState({
      items: cart,
      is_digital_only: state.items.map((item) => item.product && item?.product?.product_type).every((item) => item == "digital"),
      total
    });
    if (!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      return;
    }
  }
  syncCart(_ctx, _action) {
  }
  closeStickyCart(ctx) {
    const state = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      stickyCartOpen: false
    }));
  }
  toggleSidebarCart(ctx, { value }) {
    const state = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      sidebarCartOpen: value
    }));
  }
  clearCart(ctx) {
    if (!this.store.selectSnapshot((state) => state.auth && state.auth.access_token)) {
      return ctx.patchState({
        items: [],
        total: 0
      });
    } else {
      return ctx.patchState({
        items: [],
        total: 0
      });
    }
  }
  static {
    this.\u0275fac = function CartState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CartState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CartState2, factory: CartState2.\u0275fac });
  }
};
__decorate([
  Action(GetCartItemsAction)
], CartState.prototype, "getCartItems", null);
__decorate([
  Action(AddToCartAction)
], CartState.prototype, "add", null);
__decorate([
  Action(AddToCartLocalStorageAction)
], CartState.prototype, "addToLocalStorage", null);
__decorate([
  Action(UpdateCartAction)
], CartState.prototype, "update", null);
__decorate([
  Action(ReplaceCartAction)
], CartState.prototype, "replace", null);
__decorate([
  Action(DeleteCartAction)
], CartState.prototype, "delete", null);
__decorate([
  Action(SyncCartAction)
], CartState.prototype, "syncCart", null);
__decorate([
  Action(CloseStickyCartAction)
], CartState.prototype, "closeStickyCart", null);
__decorate([
  Action(ToggleSidebarCartAction)
], CartState.prototype, "toggleSidebarCart", null);
__decorate([
  Action(ClearCartAction)
], CartState.prototype, "clearCart", null);
__decorate([
  Selector()
], CartState, "cartItems", null);
__decorate([
  Selector()
], CartState, "cartTotal", null);
__decorate([
  Selector()
], CartState, "cartHasDigital", null);
__decorate([
  Selector()
], CartState, "stickyCart", null);
__decorate([
  Selector()
], CartState, "sidebarCartOpen", null);
CartState = __decorate([
  State({
    name: "cart",
    defaults: {
      items: [],
      total: 0,
      is_digital_only: null,
      stickyCartOpen: false,
      sidebarCartOpen: false
    }
  })
], CartState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartState, [{
    type: Injectable
  }], null, { getCartItems: [], add: [], addToLocalStorage: [], update: [], replace: [], delete: [], syncCart: [], closeStickyCart: [], toggleSidebarCart: [], clearCart: [] });
})();

export {
  CartState
};
//# sourceMappingURL=chunk-XRL72XRK.js.map
