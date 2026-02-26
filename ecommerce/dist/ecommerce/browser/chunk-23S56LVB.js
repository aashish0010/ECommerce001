import {
  DeleteAddressModal
} from "./chunk-O6GLGZ7N.js";
import {
  AddressModal
} from "./chunk-VSDJPC47.js";
import "./chunk-XW3B4B4C.js";
import "./chunk-V3KVJNBA.js";
import {
  OrderState
} from "./chunk-DLHYWE3C.js";
import {
  GetOrdersAction
} from "./chunk-VVQLAKFR.js";
import {
  AccountState
} from "./chunk-HP6MYKGT.js";
import "./chunk-RJ7FCDYY.js";
import "./chunk-OOCN6Z4U.js";
import "./chunk-RWFLVE5E.js";
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
  Pagination
} from "./chunk-RZHEXDEF.js";
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
  AsyncPipe,
  DatePipe,
  TitleCasePipe
} from "./chunk-L6CMOIIK.js";
import {
  Component,
  Store,
  computed,
  inject,
  setClassMetadata,
  toSignal,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3KEERULZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/orders/orders.ts
var _c0 = (a0) => ["/account/order/details", a0];
var _forTrack0 = ($index, $item) => $item.order_number;
var _forTrack1 = ($index, $item) => $item.id;
function Orders_Conditional_6_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 15)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td")(16, "div")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "a", 16);
    \u0275\u0275element(24, "i", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r1.order_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 10, order_r1 == null ? null : order_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, order_r1 == null ? null : order_r1.total));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, order_r1 == null ? null : order_r1.order_status == null ? null : order_r1.order_status.name));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge rounded-0 bg-", order_r1 == null ? null : order_r1.payment_status == null ? null : order_r1.payment_status.toLowerCase(), " custom-badge"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 17, order_r1 == null ? null : order_r1.payment_status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r1 == null ? null : order_r1.payment_method == null ? null : order_r1.payment_method.toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, order_r1.order_number));
  }
}
function Orders_Conditional_6_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "nav", 21)(5, "app-pagination", 22);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("setPage", function Orders_Conditional_6_Conditional_31_Template_app_pagination_setPage_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 3, ctx_r2.order$)) == null ? null : tmp_2_0.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function Orders_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 9)(2, "div", 10)(3, "table", 11)(4, "thead")(5, "tr", 12)(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, Orders_Conditional_6_For_29_Template, 25, 21, "tr", null, _forTrack0);
    \u0275\u0275pipe(30, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(31, Orders_Conditional_6_Conditional_31_Template, 7, 5, "div", 13);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "order_number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "order_status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 16, "payment_status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 18, "payment_method"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 20, "option"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_8_0 = \u0275\u0275pipeBind1(30, 22, ctx_r2.order$)) == null ? null : tmp_8_0.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_9_0 = \u0275\u0275pipeBind1(32, 24, ctx_r2.order$)) == null ? null : tmp_9_0.data == null ? null : tmp_9_0.data.length) ? 31 : -1);
  }
}
function Orders_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_order"))("description", \u0275\u0275pipeBind1(2, 7, "no_order_yet"));
  }
}
function Orders_Conditional_9_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 15)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "a", 16);
    \u0275\u0275element(19, "i", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r4.order_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 6, order_r4 == null ? null : order_r4.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, order_r4 == null ? null : order_r4.total));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, order_r4 == null ? null : order_r4.order_status == null ? null : order_r4.order_status.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r4 == null ? null : order_r4.payment_method == null ? null : order_r4.payment_method.toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, order_r4.order_number));
  }
}
function Orders_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 1)(2, "div", 2)(3, "h3");
    \u0275\u0275text(4, "Refunded History");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 9)(7, "div", 10)(8, "table", 11)(9, "thead")(10, "tr", 12)(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, Orders_Conditional_9_For_31_Template, 20, 15, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 6, "order_number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 8, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 12, "order_status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 14, "payment_method"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 16, "option"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.refundedOrders());
  }
}
function Orders_Conditional_19_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 28)(10, "div", 29)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 30)(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 31)(24, "a", 32);
    \u0275\u0275listener("click", function Orders_Conditional_19_For_3_Template_a_click_24_listener() {
      const address_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openAddressModal(address_r6));
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 32);
    \u0275\u0275listener("click", function Orders_Conditional_19_For_3_Template_a_click_27_listener() {
      const address_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeAddress(address_r6));
    });
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const address_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 14, (tmp_11_0 = \u0275\u0275pipeBind1(5, 12, ctx_r2.user$)) == null ? null : tmp_11_0.name), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(address_r6 == null ? null : address_r6.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", address_r6 == null ? null : address_r6.street, ", ", address_r6 == null ? null : address_r6.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", address_r6 == null ? null : address_r6.state == null ? null : address_r6.state.name, ", ", address_r6 == null ? null : address_r6.country == null ? null : address_r6.country.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(address_r6 == null ? null : address_r6.pincode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "phone"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("+", address_r6 == null ? null : address_r6.country_code, " ", address_r6 == null ? null : address_r6.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 18, "edit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 20, "remove"));
  }
}
function Orders_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 24);
    \u0275\u0275repeaterCreate(2, Orders_Conditional_19_For_3_Template, 30, 22, "div", 25, _forTrack1);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater((tmp_1_0 = \u0275\u0275pipeBind1(4, 0, ctx_r2.user$)) == null ? null : tmp_1_0.address);
  }
}
function Orders_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_address"))("description", \u0275\u0275pipeBind1(2, 7, "no_address_yet"));
  }
}
var Orders = class _Orders {
  constructor() {
    this.store = inject(Store);
    this.modal = inject(NgbModal);
    this.order$ = inject(Store).select(OrderState.order);
    this.user$ = inject(Store).select(AccountState.user);
    this.orderSignal = toSignal(this.order$);
    this.refundedOrders = computed(() => {
      const orders = this.orderSignal()?.data ?? [];
      return orders.filter((o) => o.payment_status?.toLowerCase() === "refunded");
    }, ...ngDevMode ? [{ debugName: "refundedOrders" }] : []);
    this.filter = {
      page: 1,
      paginate: 10
    };
    this.store.dispatch(new GetOrdersAction(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetOrdersAction(this.filter));
  }
  openAddressModal(address) {
    const modal = this.modal.open(AddressModal, { centered: true, windowClass: "theme-modal-2" });
    if (address) {
      modal.componentInstance.userAddress = address;
    }
  }
  removeAddress(address) {
    this.modal.open(DeleteAddressModal, { centered: true }).componentInstance.userAddress = address;
  }
  static {
    this.\u0275fac = function Orders_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Orders)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Orders, selectors: [["app-orders"]], decls: 22, vars: 16, consts: [[1, "card", "dashboard-table", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "total-box", "mt-0"], [3, "class", "image", "text", "description"], [1, "card", "dashboard-table", "mt-3"], [1, "card", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-solid", 3, "click"], [1, "address-book-section"], [1, "wallet-table", "mt-0"], [1, "table-responsive"], [1, "table", "cart-table", "order-table"], [1, "table-head"], [1, "product-pagination"], [1, "fw-bolder"], [1, "badge", "rounded-0", "bg-secondary", "custom-badge"], [3, "routerLink"], [1, "ri-eye-line"], [1, "theme-pagination-block"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"], [1, "row", "g-4"], [1, "select-box", "active", "col-xl-4", "col-md-6"], [1, "address-box"], [1, "top"], [1, "middle"], [1, "address"], [1, "number"], [1, "bottom"], ["href", "javascript:void(0)", 1, "bottom_btn", 3, "click"]], template: function Orders_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, Orders_Conditional_6_Template, 33, 26, "div", 3);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275conditionalBranchCreate(8, Orders_Conditional_8_Template, 3, 9, "app-no-data", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(9, Orders_Conditional_9_Template, 32, 18, "div", 5);
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 1)(12, "div", 2)(13, "h3");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 7);
        \u0275\u0275listener("click", function Orders_Template_a_click_16_listener() {
          return ctx.openAddressModal();
        });
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(19, Orders_Conditional_19_Template, 5, 2, "div", 8);
        \u0275\u0275pipe(20, "async");
        \u0275\u0275conditionalBranchCreate(21, Orders_Conditional_21_Template, 3, 9, "app-no-data", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_5_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "my_orders"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 8, ctx.order$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length) ? 6 : 8);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.refundedOrders().length ? 9 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "saved_address"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("+ ", \u0275\u0275pipeBind1(18, 12, "add_new"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_5_0 = \u0275\u0275pipeBind1(20, 14, ctx.user$)) == null ? null : tmp_5_0.address == null ? null : tmp_5_0.address.length) ? 19 : 21);
      }
    }, dependencies: [
      TranslateModule,
      RouterModule,
      RouterLink,
      Pagination,
      NoData,
      TranslatePipe,
      CurrencySymbolPipe,
      AsyncPipe,
      DatePipe,
      TitleCasePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Orders, [{
    type: Component,
    args: [{ selector: "app-orders", imports: [
      TranslateModule,
      RouterModule,
      CurrencySymbolPipe,
      Pagination,
      NoData,
      AsyncPipe,
      DatePipe,
      TitleCasePipe
    ], template: `<div class="card dashboard-table mt-0">
  <div class="card-body">
    <div class="top-sec">
      <h3>{{ 'my_orders' | translate }}</h3>
    </div>
    @if((order$ | async)?.data?.length){
    <div class="total-box mt-0">
      <div class="wallet-table mt-0">
        <div class="table-responsive">
          <table class="table cart-table order-table">
            <thead>
              <tr class="table-head">
                <th>{{ 'order_number' | translate }}</th>
                <th>{{ 'date' | translate }}</th>
                <th>{{ 'amount' | translate }}</th>
                <th>{{ 'order_status' | translate }}</th>
                <th>{{ 'payment_status' | translate }}</th>
                <th>{{ 'payment_method' | translate }}</th>
                <th>{{ 'option' | translate }}</th>
              </tr>
            </thead>
            <tbody>
              @for(order of (order$ | async)?.data ;track order.order_number; let i = $index){
              <tr>
                <td><span class="fw-bolder">#{{order.order_number}}</span></td>
                <td>{{ order?.created_at | date: 'dd MMM yyyy hh:mm:a' }}</td>
                <td>{{ order?.total | currencySymbol }}</td>
                <td>
                  <div class="badge rounded-0 bg-secondary custom-badge">
                    <span>{{ order?.order_status?.name | titlecase }}</span>
                  </div>
                </td>
                <td>
                  <div class="badge rounded-0 bg-{{order?.payment_status?.toLowerCase()}} custom-badge">
                    <span>{{ order?.payment_status | titlecase }}</span>
                  </div>
                </td>
                <td>{{ order?.payment_method?.toUpperCase() }}</td>
                <td>
                  <a [routerLink]="['/account/order/details', order.order_number]"><i class="ri-eye-line"></i></a>
                </td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
      @if((order$ | async)?.data?.length){
      <div class="product-pagination">
        <div class="theme-pagination-block">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <nav aria-label="Page navigation">
                <app-pagination [total]="(order$ | async)?.total || 0" [currentPage]="filter['page']"
                  [pageSize]="filter['paginate']" (setPage)="setPaginate($event)" />
              </nav>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
    }@else {
    <app-no-data [class]="'no-data-added'" [image]="'assets/svg/empty-items.svg'" [text]="'no_order' | translate"
      [description]="'no_order_yet' | translate" />
    }
  </div>
</div>

<!-- Refunded History Section -->
@if(refundedOrders().length) {
<div class="card dashboard-table mt-3">
  <div class="card-body">
    <div class="top-sec">
      <h3>Refunded History</h3>
    </div>
    <div class="total-box mt-0">
      <div class="wallet-table mt-0">
        <div class="table-responsive">
          <table class="table cart-table order-table">
            <thead>
              <tr class="table-head">
                <th>{{ 'order_number' | translate }}</th>
                <th>{{ 'date' | translate }}</th>
                <th>{{ 'amount' | translate }}</th>
                <th>{{ 'order_status' | translate }}</th>
                <th>{{ 'payment_method' | translate }}</th>
                <th>{{ 'option' | translate }}</th>
              </tr>
            </thead>
            <tbody>
              @for(order of refundedOrders(); track order.order_number){
              <tr>
                <td><span class="fw-bolder">#{{order.order_number}}</span></td>
                <td>{{ order?.created_at | date: 'dd MMM yyyy hh:mm:a' }}</td>
                <td>{{ order?.total | currencySymbol }}</td>
                <td>
                  <div class="badge rounded-0 bg-secondary custom-badge">
                    <span>{{ order?.order_status?.name | titlecase }}</span>
                  </div>
                </td>
                <td>{{ order?.payment_method?.toUpperCase() }}</td>
                <td>
                  <a [routerLink]="['/account/order/details', order.order_number]"><i class="ri-eye-line"></i></a>
                </td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
}

<!-- Saved Addresses Section -->
<div class="card mt-3">
  <div class="card-body">
    <div class="top-sec">
      <h3>{{ 'saved_address' | translate }}</h3>
      <a href="javascript:void(0)" class="btn btn-sm btn-solid" (click)="openAddressModal()">+ {{ 'add_new' | translate
        }}</a>
    </div>
    @if((user$ | async)?.address?.length){
    <div class="address-book-section">
      <div class="row g-4">
        @for(address of (user$ | async)?.address; track address.id){
        <div class="select-box active col-xl-4 col-md-6">
          <div class="address-box">
            <div class="top">
              <h6>{{ (user$ | async)?.name | titlecase }} <span>{{ address?.title }}</span></h6>
            </div>
            <div class="middle">
              <div class="address">
                <p>{{ address?.street }}, {{ address?.city }}</p>
                <p>{{ address?.state?.name }}, {{ address?.country?.name }}</p>
                <p>{{ address?.pincode }}</p>
              </div>
              <div class="number">
                <p>
                  {{ 'phone' | translate }}:
                  <span>+{{ address?.country_code }} {{ address?.phone }}</span>
                </p>
              </div>
            </div>
            <div class="bottom">
              <a href="javascript:void(0)" class="bottom_btn" (click)="openAddressModal(address)">{{ 'edit' | translate
                }}</a>
              <a href="javascript:void(0)" class="bottom_btn" (click)="removeAddress(address)">{{ 'remove' | translate
                }}</a>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
    } @else {
    <app-no-data [class]="'no-data-added'" [image]="'assets/svg/empty-items.svg'" [text]="'no_address' | translate"
      [description]="'no_address_yet' | translate" />
    }
  </div>
</div>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Orders, { className: "Orders", filePath: "src/app/components/account/orders/orders.ts", lineNumber: 38 });
})();
export {
  Orders
};
//# sourceMappingURL=chunk-23S56LVB.js.map
