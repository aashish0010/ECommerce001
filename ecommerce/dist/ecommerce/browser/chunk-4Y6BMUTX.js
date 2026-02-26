import {
  CartState
} from "./chunk-XRL72XRK.js";
import {
  DeleteCartAction,
  UpdateCartAction
} from "./chunk-HD3MPZTG.js";
import {
  Breadcrumb
} from "./chunk-LBV5SDPN.js";
import {
  Button
} from "./chunk-RJ7FCDYY.js";
import "./chunk-OOCN6Z4U.js";
import "./chunk-RWFLVE5E.js";
import "./chunk-LZFLFOAY.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6347PIFH.js";
import "./chunk-MUAYKWHK.js";
import "./chunk-2K52HGL6.js";
import "./chunk-QQXAO3XE.js";
import "./chunk-JLWO6B35.js";
import {
  CurrencySymbolPipe
} from "./chunk-XK2M6X6K.js";
import "./chunk-QSTIS5AN.js";
import {
  NoData
} from "./chunk-XTPJ5TZK.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-7XQQRBBN.js";
import {
  AsyncPipe
} from "./chunk-L6CMOIIK.js";
import {
  Component,
  Store,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3KEERULZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/shop/cart/cart.ts
var _c0 = () => ["/collections/"];
var _c1 = () => ["/checkout/"];
var _c2 = (a0) => ["/product/", a0];
var _forTrack0 = ($index, $item) => $item.id;
function Cart_Conditional_3_For_25_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, (item_r2 == null ? null : item_r2.variation) ? item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.price));
  }
}
function Cart_Conditional_3_For_25_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, (item_r2 == null ? null : item_r2.variation) ? item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.price));
  }
}
function Cart_Conditional_3_For_25_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "you_save"), " : ", \u0275\u0275pipeBind1(3, 4, (item_r2.variation ? item_r2.variation.price : item_r2.product.price) - (item_r2.variation ? item_r2.variation.sale_price : (item_r2 == null ? null : item_r2.product) && (item_r2 == null ? null : item_r2.wholesale_price) ? item_r2 == null ? null : item_r2.wholesale_price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.sale_price)), " ");
  }
}
function Cart_Conditional_3_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 14);
    \u0275\u0275element(3, "img", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "a", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17)(8, "div", 18)(9, "div", 19)(10, "div", 20)(11, "span", 21)(12, "app-button", 22);
    \u0275\u0275listener("click", function Cart_Conditional_3_For_25_Template_app_button_click_12_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2, -1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 23);
    \u0275\u0275elementStart(14, "span", 21)(15, "app-button", 22);
    \u0275\u0275listener("click", function Cart_Conditional_3_For_25_Template_app_button_click_15_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2, 1));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 24)(17, "h2", 25);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currencySymbol");
    \u0275\u0275conditionalCreate(20, Cart_Conditional_3_For_25_Conditional_20_Template, 3, 3, "del");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h6", 26);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 18)(25, "h2", 25)(26, "a", 27);
    \u0275\u0275listener("click", function Cart_Conditional_3_For_25_Template_a_click_26_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(item_r2.id));
    });
    \u0275\u0275element(27, "i", 28);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(28, "td", 29)(29, "h2");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "currencySymbol");
    \u0275\u0275conditionalCreate(32, Cart_Conditional_3_For_25_Conditional_32_Template, 3, 3, "del");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, Cart_Conditional_3_For_25_Conditional_33_Template, 4, 6, "h6", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td")(35, "div", 19)(36, "div", 31)(37, "span", 21)(38, "app-button", 22);
    \u0275\u0275listener("click", function Cart_Conditional_3_For_25_Template_app_button_click_38_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2, -1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "input", 23);
    \u0275\u0275elementStart(40, "span", 21)(41, "app-button", 22);
    \u0275\u0275listener("click", function Cart_Conditional_3_For_25_Template_app_button_click_41_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2, 1));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(42, "td")(43, "h2", 25);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "td")(47, "a", 27);
    \u0275\u0275listener("click", function Cart_Conditional_3_For_25_Template_a_click_47_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(item_r2.id));
    });
    \u0275\u0275element(48, "i", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(44, _c2, item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r2 == null ? null : item_r2.variation) && (item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.variation_image) ? item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.variation_image == null ? null : item_r2.variation.variation_image.original_url : (item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.product_thumbnail) ? item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.product_thumbnail == null ? null : item_r2.product.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(46, _c2, item_r2.product.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (item_r2 == null ? null : item_r2.variation) ? item_r2.variation.name : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.name, " ");
    \u0275\u0275advance(6);
    \u0275\u0275classMap("btn quantity-left-minus");
    \u0275\u0275property("id", "quantity-left-minus")("iconClass", "ri-arrow-left-s-line")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275interpolate(item_r2.quantity));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn quantity-left-plus");
    \u0275\u0275property("id", "quantity-left-plus")("iconClass", "ri-arrow-right-s-line")("spinner", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 36, (item_r2 == null ? null : item_r2.variation) ? item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.sale_price : (item_r2 == null ? null : item_r2.product) && (item_r2 == null ? null : item_r2.wholesale_price) ? item_r2 == null ? null : item_r2.wholesale_price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.sale_price), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.discount) ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 38, (item_r2.variation ? item_r2.variation.sale_price : (item_r2 == null ? null : item_r2.product) && (item_r2 == null ? null : item_r2.wholesale_price) ? item_r2 == null ? null : item_r2.wholesale_price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.sale_price) * item_r2.quantity), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 40, (item_r2 == null ? null : item_r2.variation) ? item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.sale_price : (item_r2 == null ? null : item_r2.product) && (item_r2 == null ? null : item_r2.wholesale_price) ? item_r2 == null ? null : item_r2.wholesale_price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.sale_price), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.discount) ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.product.discount ? 33 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classMap("btn quantity-left-minus");
    \u0275\u0275property("id", "quantity-left-minus")("iconClass", "ri-arrow-left-s-line")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275interpolate(item_r2.quantity));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn quantity-left-plus");
    \u0275\u0275property("id", "quantity-left-plus")("iconClass", "ri-arrow-right-s-line")("spinner", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 42, (item_r2.variation ? item_r2.variation.sale_price : (item_r2 == null ? null : item_r2.product) && (item_r2 == null ? null : item_r2.wholesale_price) ? item_r2 == null ? null : item_r2.wholesale_price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.sale_price) * item_r2.quantity), " ");
  }
}
function Cart_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "table", 6)(3, "thead")(4, "tr", 7)(5, "th", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 8);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 8);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 8);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 8);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 8);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, Cart_Conditional_3_For_25_Template, 49, 48, "tr", null, _forTrack0);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "tfoot")(28, "tr")(29, "td", 9);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 10);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td")(36, "h2");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275pipe(39, "currencySymbol");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(40, "div", 11)(41, "div", 12)(42, "a", 13);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 12)(46, "a", 13);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 13, "image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 15, "product_name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 17, "price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 19, "quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 21, "total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 23, "action"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(26, 25, ctx_r2.cartItem$));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(31, 27, "total_price"), " :");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(34, 29, "total_price"), " :");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 33, \u0275\u0275pipeBind1(38, 31, ctx_r2.cartTotal$) || 0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(39, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 35, "continue_shopping"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(40, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 37, "check_out"));
  }
}
function Cart_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 32);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_item"))("description", \u0275\u0275pipeBind1(2, 7, "no_cart_item_desc"));
  }
}
var Cart = class _Cart {
  constructor() {
    this.store = inject(Store);
    this.cartItem$ = inject(Store).select(CartState.cartItems);
    this.cartTotal$ = inject(Store).select(CartState.cartTotal);
    this.cartDigital$ = inject(Store).select(CartState.cartHasDigital);
    this.breadcrumb = {
      title: "Cart",
      items: [{ label: "Cart", active: true }]
    };
  }
  updateQuantity(item, qty) {
    const params = {
      id: item?.id,
      product: item?.product,
      product_id: item?.product?.id,
      variation: item?.variation,
      variation_id: item?.variation_id ? item?.variation_id : null,
      quantity: qty
    };
    this.store.dispatch(new UpdateCartAction(params));
  }
  delete(id) {
    this.store.dispatch(new DeleteCartAction(id));
  }
  static {
    this.\u0275fac = function Cart_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Cart)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cart, selectors: [["app-cart"]], decls: 6, vars: 4, consts: [[3, "breadcrumb"], [1, "cart-section", "section-b-space"], [1, "container"], [3, "class", "image", "text", "description"], [1, "row"], [1, "col-sm-12", "table-responsive"], [1, "table", "cart-table"], [1, "table-head"], ["scope", "col"], ["colspan", "4", 1, "d-md-table-cell", "d-none"], [1, "d-md-none"], [1, "row", "cart-buttons"], [1, "col-6"], ["href", "javascript:void(0)", 1, "btn", 3, "routerLink"], [1, "product-image", 3, "routerLink"], [1, "img-fluid", 3, "src", "alt"], [3, "routerLink"], [1, "mobile-cart-content", "row"], [1, "col"], [1, "qty-box"], [1, "input-group"], [1, "input-group-prepend"], [3, "click", "id", "iconClass", "spinner"], ["type", "text", "name", "quantity", "readonly", "", 1, "form-control", "input-number", 3, "value"], [1, "col", "table-price"], [1, "td-color"], [1, "theme-color", "d-md-inline-block", "d-none"], ["href", "javascript:void(0)", 1, "icon", "remove-btn", 3, "click"], [1, "ri-close-line"], [1, "table-price"], [1, "theme-color"], [1, "input-group", "justify-content-center"], [3, "image", "text", "description"]], template: function Cart_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
        \u0275\u0275conditionalCreate(3, Cart_Conditional_3_Template, 49, 41);
        \u0275\u0275pipe(4, "async");
        \u0275\u0275conditionalBranchCreate(5, Cart_Conditional_5_Template, 3, 9, "app-no-data", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(4, 2, ctx.cartItem$)) == null ? null : tmp_1_0.length) ? 3 : 5);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      TranslateModule,
      Breadcrumb,
      Button,
      NoData,
      CurrencySymbolPipe,
      TranslatePipe,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cart, [{
    type: Component,
    args: [{ selector: "app-cart", imports: [
      RouterModule,
      CurrencySymbolPipe,
      TranslateModule,
      Breadcrumb,
      Button,
      NoData,
      AsyncPipe
    ], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<!--section start-->
<section class="cart-section section-b-space">
  <div class="container">
    @if((cartItem$ | async)?.length){
    <div class="row">
      <div class="col-sm-12 table-responsive">
        <table class="table cart-table">
          <thead>
            <tr class="table-head">
              <th scope="col">{{ 'image' | translate }}</th>
              <th scope="col">{{ 'product_name' | translate }}</th>
              <th scope="col">{{ 'price' | translate }}</th>
              <th scope="col">{{ 'quantity' | translate }}</th>
              <th scope="col">{{ 'total' | translate }}</th>
              <th scope="col">{{ 'action' | translate }}</th>
            </tr>
          </thead>
          <tbody>
            @for(item of cartItem$ | async; track item.id){
            <tr>
              <td>
                <a [routerLink]="['/product/', item?.product?.slug]" class="product-image">
                  <img
                    [src]="item?.variation && item?.variation?.variation_image
                                    ? item?.variation?.variation_image?.original_url
                                    : item?.product?.product_thumbnail
                                    ? item?.product?.product_thumbnail?.original_url
                                    : 'assets/images/placeholder/product.png'"
                    class="img-fluid"
                    [alt]="item?.product?.name"
                  />
                </a>
              </td>
              <td>
                <a [routerLink]="['/product/', item.product.slug]">
                  {{item?.variation ? item.variation.name : item?.product?.name}}
                </a>
                <div class="mobile-cart-content row">
                  <div class="col">
                    <div class="qty-box">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <app-button
                            [id]="'quantity-left-minus'"
                            [class]="'btn quantity-left-minus'"
                            [iconClass]="'ri-arrow-left-s-line'"
                            [spinner]="false"
                            (click)="updateQuantity(item,-1)"
                          />
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          class="form-control input-number"
                          value="{{ item.quantity }}"
                          readonly
                        />
                        <span class="input-group-prepend">
                          <app-button
                            [id]="'quantity-left-plus'"
                            [class]="'btn quantity-left-plus'"
                            [iconClass]="'ri-arrow-right-s-line'"
                            [spinner]="false"
                            (click)="updateQuantity(item,1)"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col table-price">
                    <h2 class="td-color">
                      {{ (item?.variation ? item?.variation?.sale_price : item?.product &&
                      item?.wholesale_price ? item?.wholesale_price! : item?.product?.sale_price) |
                      currencySymbol }} @if(item?.product?.discount){
                      <del
                        >{{ (item?.variation ? item?.variation?.price : item?.product?.price) |
                        currencySymbol }}</del
                      >
                      }
                    </h2>
                    <h6 class="theme-color d-md-inline-block d-none">
                      {{ (item.variation ? item.variation.sale_price : item?.product &&
                      item?.wholesale_price ? item?.wholesale_price! : item?.product?.sale_price!) *
                      item.quantity | currencySymbol }}
                    </h6>
                  </div>
                  <div class="col">
                    <h2 class="td-color">
                      <a href="javascript:void(0)" class="icon remove-btn" (click)="delete(item.id)"
                        ><i class="ri-close-line"></i
                      ></a>
                    </h2>
                  </div>
                </div>
              </td>
              <td class="table-price">
                <h2>
                  {{ (item?.variation ? item?.variation?.sale_price : item?.product &&
                  item?.wholesale_price ? item?.wholesale_price! : item?.product?.sale_price) |
                  currencySymbol }} @if(item?.product?.discount){
                  <del
                    >{{ (item?.variation ? item?.variation?.price : item?.product?.price) |
                    currencySymbol }}</del
                  >
                  }
                </h2>

                @if(item.product.discount){
                <h6 class="theme-color">
                  {{ 'you_save' | translate }} : {{ ((item.variation ? item.variation.price :
                  item.product.price) - (item.variation ? item.variation.sale_price : item?.product
                  && item?.wholesale_price ? item?.wholesale_price! : item?.product?.sale_price!)) |
                  currencySymbol }}
                </h6>
                }
              </td>
              <td>
                <div class="qty-box">
                  <div class="input-group justify-content-center">
                    <span class="input-group-prepend">
                      <app-button
                        [id]="'quantity-left-minus'"
                        [class]="'btn quantity-left-minus'"
                        [iconClass]="'ri-arrow-left-s-line'"
                        [spinner]="false"
                        (click)="updateQuantity(item,-1)"
                      />
                    </span>
                    <input
                      type="text"
                      name="quantity"
                      class="form-control input-number"
                      value="{{ item.quantity }}"
                      readonly
                    />
                    <span class="input-group-prepend">
                      <app-button
                        [id]="'quantity-left-plus'"
                        [class]="'btn quantity-left-plus'"
                        [iconClass]="'ri-arrow-right-s-line'"
                        [spinner]="false"
                        (click)="updateQuantity(item,1)"
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <h2 class="td-color">
                  {{ (item.variation ? item.variation.sale_price : item?.product &&
                  item?.wholesale_price ? item?.wholesale_price! : item?.product?.sale_price!) *
                  item.quantity | currencySymbol }}
                </h2>
              </td>
              <td>
                <a href="javascript:void(0)" class="icon remove-btn" (click)="delete(item.id)">
                  <i class="ri-close-line"></i>
                </a>
              </td>
            </tr>
            }
          </tbody>
          <tfoot>
            <tr>
              <td class="d-md-table-cell d-none" colspan="4">{{ 'total_price' | translate }} :</td>
              <td class="d-md-none">{{ 'total_price' | translate }} :</td>
              <td>
                <h2>{{ (cartTotal$ | async) || 0 | currencySymbol }}</h2>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="row cart-buttons">
      <div class="col-6">
        <a href="javascript:void(0)" class="btn" [routerLink]="['/collections/']"
          >{{ 'continue_shopping' | translate }}</a
        >
      </div>
      <div class="col-6">
        <a href="javascript:void(0)" class="btn" [routerLink]="['/checkout/']"
          >{{ 'check_out' | translate }}</a
        >
      </div>
    </div>
    }@else {
    <app-no-data
      [class]="'no-data-added'"
      [image]="'assets/svg/empty-items.svg'"
      [text]="'no_item' | translate"
      [description]="'no_cart_item_desc' | translate"
    />
    }
  </div>
</section>
<!--section end-->
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cart, { className: "Cart", filePath: "src/app/components/shop/cart/cart.ts", lineNumber: 32 });
})();
export {
  Cart
};
//# sourceMappingURL=chunk-4Y6BMUTX.js.map
