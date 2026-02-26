import {
  Loader
} from "./chunk-AP7ORYRC.js";
import {
  DeleteWishlistAction,
  GetWishlistAction,
  WishlistService,
  WishlistState
} from "./chunk-AULHPBT7.js";
import {
  ThemeOptionState
} from "./chunk-D2VJHFAS.js";
import {
  CartState
} from "./chunk-XRL72XRK.js";
import {
  AddToCartAction
} from "./chunk-HD3MPZTG.js";
import {
  Breadcrumb
} from "./chunk-LBV5SDPN.js";
import "./chunk-LEE25DCS.js";
import "./chunk-LZFLFOAY.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6347PIFH.js";
import "./chunk-MUAYKWHK.js";
import "./chunk-2K52HGL6.js";
import {
  NgbModal
} from "./chunk-QQXAO3XE.js";
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
import "./chunk-L6CMOIIK.js";
import {
  Component,
  Input,
  Store,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3KEERULZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/components/widgets/product-box/widgets/product-cart-button/product-cart-button.ts
function ProductCartButton_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "a", 1);
    \u0275\u0275domListener("click", function ProductCartButton_Conditional_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart(ctx_r1.product(), 1));
    });
    \u0275\u0275domElement(1, "i", 2);
    \u0275\u0275domElementEnd();
  }
}
var ProductCartButton = class _ProductCartButton {
  constructor() {
    this.store = inject(Store);
    this.modal = inject(NgbModal);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.type = input(...ngDevMode ? [void 0, { debugName: "type" }] : []);
    this.cartItem$ = inject(Store).select(CartState.cartItems);
  }
  ngOnInit() {
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => item.product.id == this.product()?.id);
    });
  }
  openModal(_product) {
  }
  addToCart(product, qty) {
    const params = {
      id: this.cartItem ? this.cartItem.id : null,
      product,
      product_id: product?.id,
      variation_id: this.cartItem ? this.cartItem?.variation_id : null,
      variation: this.cartItem ? this.cartItem?.variation : null,
      quantity: qty
    };
    this.store.dispatch(new AddToCartAction(params));
  }
  static {
    this.\u0275fac = function ProductCartButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductCartButton)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCartButton, selectors: [["app-product-cart-button"]], inputs: { product: [1, "product"], type: [1, "type"] }, decls: 1, vars: 1, consts: [["href", "javascript:void(0)", 1, "cart"], ["href", "javascript:void(0)", 1, "cart", 3, "click"], [1, "ri-shopping-cart-line"]], template: function ProductCartButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ProductCartButton_Conditional_0_Template, 2, 0, "a", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.type() === "wishlist" ? 0 : -1);
      }
    }, dependencies: [TranslateModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCartButton, [{
    type: Component,
    args: [{ selector: "app-product-cart-button", imports: [TranslateModule], template: `@if(type() === 'wishlist'){
<a href="javascript:void(0)" class="cart" (click)="addToCart(product()!, 1)"
  ><i class="ri-shopping-cart-line"></i
></a>
}
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCartButton, { className: "ProductCartButton", filePath: "src/app/shared/components/widgets/product-box/widgets/product-cart-button/product-cart-button.ts", lineNumber: 19 });
})();

// src/app/components/shop/wishlist/wishlist.ts
var _c0 = (a0) => ["/product/", a0];
var _forTrack0 = ($index, $item) => $item.id;
function Wishlist_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-loader", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("loaderClass", "loader-wrapper blur-bg");
  }
}
function Wishlist_Conditional_6_Conditional_0_For_20_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currencySymbol");
    \u0275\u0275elementStart(2, "del");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 2, product_r2.sale_price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, product_r2.price));
  }
}
function Wishlist_Conditional_6_Conditional_0_For_20_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currencySymbol");
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, product_r2.price), " ");
  }
}
function Wishlist_Conditional_6_Conditional_0_For_20_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-cart-button", 20);
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("product", product_r2)("type", "wishlist");
  }
}
function Wishlist_Conditional_6_Conditional_0_For_20_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currencySymbol");
    \u0275\u0275elementStart(2, "del");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 2, product_r2.sale_price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, product_r2.price));
  }
}
function Wishlist_Conditional_6_Conditional_0_For_20_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currencySymbol");
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, product_r2.price), " ");
  }
}
function Wishlist_Conditional_6_Conditional_0_For_20_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-cart-button", 20);
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("product", product_r2)("type", "wishlist");
  }
}
function Wishlist_Conditional_6_Conditional_0_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "a", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15)(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 15)(13, "h2", 16);
    \u0275\u0275conditionalCreate(14, Wishlist_Conditional_6_Conditional_0_For_20_Conditional_14_Template, 5, 6)(15, Wishlist_Conditional_6_Conditional_0_For_20_Conditional_15_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "div", 17)(18, "h2", 16)(19, "a", 18);
    \u0275\u0275listener("click", function Wishlist_Conditional_6_Conditional_0_For_20_Template_a_click_19_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeWishlist(product_r2.id));
    });
    \u0275\u0275element(20, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, Wishlist_Conditional_6_Conditional_0_For_20_Conditional_21_Template, 1, 2, "app-product-cart-button", 20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "td")(23, "h2");
    \u0275\u0275conditionalCreate(24, Wishlist_Conditional_6_Conditional_0_For_20_Conditional_24_Template, 5, 6)(25, Wishlist_Conditional_6_Conditional_0_For_20_Conditional_25_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td")(31, "div", 21)(32, "a", 18);
    \u0275\u0275listener("click", function Wishlist_Conditional_6_Conditional_0_For_20_Template_a_click_32_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeWishlist(product_r2.id));
    });
    \u0275\u0275element(33, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, Wishlist_Conditional_6_Conditional_0_For_20_Conditional_34_Template, 1, 2, "app-product-cart-button", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, product_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", product_r2.product_thumbnail ? product_r2.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", product_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, product_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, product_r2.stock_status));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(product_r2.discount ? 14 : 15);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(product_r2.stock_status === "in_stock" ? 21 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(product_r2.discount ? 24 : 25);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 13, product_r2.stock_status));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(product_r2.stock_status === "in_stock" ? 34 : -1);
  }
}
function Wishlist_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 7)(1, "thead")(2, "tr", 9)(3, "th", 10);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 10);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 10);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 10);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, Wishlist_Conditional_6_Conditional_0_For_20_Template, 35, 19, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "product_name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "availability"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 13, "action"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.wishlistItems);
  }
}
function Wishlist_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_item"))("description", \u0275\u0275pipeBind1(2, 7, "no_wishlist_item"));
  }
}
function Wishlist_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Wishlist_Conditional_6_Conditional_0_Template, 21, 15, "table", 7);
    \u0275\u0275conditionalCreate(1, Wishlist_Conditional_6_Conditional_1_Template, 3, 9, "app-no-data", 8);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.wishlistItems && ctx_r2.wishlistItems.length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.wishlistItems.length && !ctx_r2.wishlistService.skeletonLoader ? 1 : -1);
  }
}
var Wishlist = class _Wishlist {
  constructor() {
    this.store = inject(Store);
    this.wishlistService = inject(WishlistService);
    this.wishlistItems$ = inject(Store).select(WishlistState.wishlistItems);
    this.themeOption$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.breadcrumb = {
      title: "Wishlist",
      items: [{ label: "Wishlist", active: true }]
    };
    this.skeletonItems = Array.from({ length: 12 }, (_, index) => index);
  }
  ngOnInit() {
    this.store.dispatch(new GetWishlistAction());
    this.wishlistItems$.subscribe((items) => {
      if (items) {
        this.wishlistItems = items.data;
      }
    });
  }
  removeWishlist(id) {
    this.store.dispatch(new DeleteWishlistAction(id));
  }
  static {
    this.\u0275fac = function Wishlist_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Wishlist)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Wishlist, selectors: [["app-wishlist"]], decls: 7, vars: 2, consts: [[3, "breadcrumb"], [1, "wishlist-section", "section-b-space"], [1, "container"], [1, "row"], [1, "col-sm-12", "table-responsive"], [1, "box-loader"], [3, "loaderClass"], [1, "table", "cart-table"], [3, "class", "image", "text", "description"], [1, "table-head"], ["scope", "col"], ["href", "javascript:void(0)", 3, "routerLink"], [3, "src", "alt"], ["href", "javascript:void(0)", 1, "name", 3, "routerLink"], [1, "mobile-cart-content", "row"], [1, "col"], [1, "td-color"], [1, "remove-icon-box"], ["href", "javascript:void(0)", 1, "icon", 3, "click"], [1, "ri-close-line"], [3, "product", "type"], [1, "icon-box", "d-flex", "gap-2", "justify-content-center"], [3, "image", "text", "description"]], template: function Wishlist_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275conditionalCreate(5, Wishlist_Conditional_5_Template, 2, 1, "div", 5)(6, Wishlist_Conditional_6_Template, 2, 2);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.wishlistService.skeletonLoader ? 5 : 6);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      TranslateModule,
      Breadcrumb,
      NoData,
      ProductCartButton,
      Loader,
      CurrencySymbolPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Wishlist, [{
    type: Component,
    args: [{ selector: "app-wishlist", imports: [
      RouterModule,
      CurrencySymbolPipe,
      TranslateModule,
      Breadcrumb,
      NoData,
      ProductCartButton,
      Loader
    ], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<section class="wishlist-section section-b-space">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 table-responsive">
        @if(wishlistService.skeletonLoader){
        <div class="box-loader">
          <app-loader [loaderClass]="'loader-wrapper blur-bg'" />
        </div>
        } @else { @if(wishlistItems && wishlistItems.length){
        <table class="table cart-table">
          <thead>
            <tr class="table-head">
              <th scope="col">{{ 'image' | translate }}</th>
              <th scope="col">{{ 'product_name' | translate }}</th>
              <th scope="col">{{ 'price' | translate }}</th>
              <th scope="col">{{ 'availability' | translate }}</th>
              <th scope="col">{{ 'action' | translate }}</th>
            </tr>
          </thead>
          <tbody>
            @for(product of wishlistItems; track product.id){
            <tr>
              <td>
                <a href="javascript:void(0)" [routerLink]="['/product/', product.slug]">
                  <img
                    [src]="product.product_thumbnail ? product.product_thumbnail.original_url : 'assets/images/placeholder/product.png'"
                    [alt]="product.name"
                  />
                </a>
              </td>
              <td>
                <a href="javascript:void(0)" class="name" [routerLink]="['/product/', product.slug]"
                  >{{ product.name }}</a
                >
                <div class="mobile-cart-content row">
                  <div class="col">
                    <p>{{ (product.stock_status) | translate }}</p>
                  </div>
                  <div class="col">
                    <h2 class="td-color">
                      @if(product.discount){ {{ product.sale_price | currencySymbol }}
                      <del>{{ product.price | currencySymbol }}</del>
                      }@else{ {{ product.price | currencySymbol }} }
                    </h2>
                  </div>
                  <div class="col">
                    <div class="remove-icon-box">
                      <h2 class="td-color">
                        <a
                          href="javascript:void(0)"
                          class="icon"
                          (click)="removeWishlist(product.id)"
                        >
                          <i class="ri-close-line"></i>
                        </a>
                        @if(product.stock_status === 'in_stock'){
                        <app-product-cart-button [product]="product" [type]="'wishlist'" />
                        }
                      </h2>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h2>
                  @if(product.discount){ {{ product.sale_price | currencySymbol }}
                  <del>{{ product.price | currencySymbol }}</del>
                  }@else{ {{ product.price | currencySymbol }} }
                </h2>
              </td>
              <td>
                <p>{{ (product.stock_status) | translate }}</p>
              </td>
              <td>
                <div class="icon-box d-flex gap-2 justify-content-center">
                  <a href="javascript:void(0)" class="icon" (click)="removeWishlist(product.id)">
                    <i class="ri-close-line"></i>
                  </a>

                  @if(product.stock_status === 'in_stock'){
                  <app-product-cart-button [product]="product" [type]="'wishlist'" />
                  }
                </div>
              </td>
            </tr>
            }
          </tbody>
        </table>
        } @if(!wishlistItems.length && !wishlistService.skeletonLoader){
        <app-no-data
          [class]="'no-data-added'"
          [image]="'assets/svg/empty-items.svg'"
          [text]="'no_item' | translate"
          [description]="'no_wishlist_item' | translate"
        />
        } }
      </div>
    </div>
  </div>
</section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Wishlist, { className: "Wishlist", filePath: "src/app/components/shop/wishlist/wishlist.ts", lineNumber: 40 });
})();
export {
  Wishlist
};
//# sourceMappingURL=chunk-NIE6C4DS.js.map
