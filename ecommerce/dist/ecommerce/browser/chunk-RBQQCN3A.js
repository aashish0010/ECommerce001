import {
  CountryState,
  StateState
} from "./chunk-FTPCKLO4.js";
import {
  GetOrderStatusAction,
  OrderStatusState
} from "./chunk-7WLTOJF7.js";
import {
  OrderState
} from "./chunk-UIQX5ERP.js";
import {
  OrderTrackingAction
} from "./chunk-LPQEB73E.js";
import {
  Breadcrumb
} from "./chunk-3DSWFFIY.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-6R3AQVTF.js";
import "./chunk-HBLN46Q5.js";
import "./chunk-G25K32MJ.js";
import "./chunk-MLCQBQYT.js";
import "./chunk-MXUZ2ZBZ.js";
import {
  CurrencySymbolPipe
} from "./chunk-3R3C7ZXW.js";
import "./chunk-TMCH2Z3I.js";
import {
  NoData
} from "./chunk-O32MIEQN.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PCGC3M7T.js";
import "./chunk-4LUQBUB6.js";
import {
  Store
} from "./chunk-6YJBSKCB.js";
import {
  AsyncPipe,
  DatePipe,
  Location,
  NgClass,
  TitleCasePipe,
  UpperCasePipe
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  Subject,
  inject,
  mergeMap,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate5
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/shop/order-details/order-details.ts
var _c0 = (a0) => ({ "d-none": a0 });
var _c1 = () => ["/order/details"];
var _c2 = (a0, a1) => ({ order_number: a0, email_or_phone: a1 });
var _forTrack0 = ($index, $item) => $item.id;
function OrderDetails_Conditional_7_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 32)(1, "div", 33)(2, "div", 34);
    \u0275\u0275element(3, "img", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const orderStatus_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", (orderStatus_r3 == null ? null : orderStatus_r3.sequence) <= ctx_r1.order.order_status.sequence);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c0, (orderStatus_r3 == null ? null : orderStatus_r3.sequence) >= ctx_r1.order.order_status.sequence && (ctx_r1.order.order_status && ctx_r1.order.order_status.slug === "cancelled") || (orderStatus_r3 == null ? null : orderStatus_r3.slug) === "cancelled" || ctx_r1.order.is_digital_only && ((orderStatus_r3 == null ? null : orderStatus_r3.slug) === "shipped" || (orderStatus_r3 == null ? null : orderStatus_r3.slug) === "out-for-delivery")));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/svg/tracking/", orderStatus_r3 == null ? null : orderStatus_r3.slug, ".svg"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, orderStatus_r3 == null ? null : orderStatus_r3.name == null ? null : orderStatus_r3.name.replaceAll("_", " ")), " ");
  }
}
function OrderDetails_Conditional_7_Conditional_11_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275element(2, "img", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/svg/tracking/", ctx_r1.order.order_status.slug, ".svg"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, ctx_r1.order.order_status.name.replaceAll("_", " ")), " ");
  }
}
function OrderDetails_Conditional_7_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 31);
    \u0275\u0275conditionalCreate(1, OrderDetails_Conditional_7_Conditional_11_Conditional_4_Conditional_1_Template, 6, 5, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order && ctx_r1.order.order_status ? 1 : -1);
  }
}
function OrderDetails_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, OrderDetails_Conditional_7_Conditional_11_For_2_Template, 7, 10, "li", 30, _forTrack0);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275conditionalCreate(4, OrderDetails_Conditional_7_Conditional_11_Conditional_4_Template, 2, 1, "li", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_2_0 = \u0275\u0275pipeBind1(3, 1, ctx_r1.orderStatus$)) == null ? null : tmp_2_0.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.order && ctx_r1.order.order_status && ctx_r1.order.order_status.slug === "cancelled" ? 4 : -1);
  }
}
function OrderDetails_Conditional_7_Conditional_12_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275element(2, "img", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "h6");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "h6");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "h6");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "h6");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currencySymbol");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (product_r4 == null ? null : product_r4.pivot == null ? null : product_r4.pivot.variation) && (product_r4 == null ? null : product_r4.pivot == null ? null : product_r4.pivot.variation == null ? null : product_r4.pivot.variation.variation_image) ? product_r4 == null ? null : product_r4.pivot == null ? null : product_r4.pivot.variation == null ? null : product_r4.pivot.variation.variation_image == null ? null : product_r4.pivot.variation.variation_image.original_url : (product_r4 == null ? null : product_r4.product_thumbnail) ? product_r4 == null ? null : product_r4.product_thumbnail == null ? null : product_r4.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (product_r4 == null ? null : product_r4.pivot == null ? null : product_r4.pivot.variation) ? product_r4 == null ? null : product_r4.pivot == null ? null : product_r4.pivot.variation == null ? null : product_r4.pivot.variation.name : product_r4 == null ? null : product_r4.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, product_r4 == null ? null : product_r4.pivot == null ? null : product_r4.pivot.single_price));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r4 == null ? null : product_r4.pivot == null ? null : product_r4.pivot.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 7, product_r4 == null ? null : product_r4.pivot == null ? null : product_r4.pivot.subtotal));
  }
}
function OrderDetails_Conditional_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 20)(2, "div", 37)(3, "div", 38)(4, "table", 39)(5, "thead")(6, "tr")(7, "th", 40);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 40);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 40);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 40);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 40);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, OrderDetails_Conditional_7_Conditional_12_For_24_Template, 17, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 9, "price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, "quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 13, "subtotal"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.order.products);
  }
}
function OrderDetails_Conditional_7_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 9, "billing_address"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate5(" ", ctx_r1.order.billing_address.street, " ", ctx_r1.order.billing_address.city, " ", ctx_r1.getStateName(ctx_r1.order.billing_address.state_id), " ", ctx_r1.getCountryName(ctx_r1.order.billing_address.country_id), " ", ctx_r1.order.billing_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(8, 11, "phone"), " : +", ctx_r1.order.billing_address.country_code, " ", ctx_r1.order.billing_address.phone, " ");
  }
}
function OrderDetails_Conditional_7_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 9, "shipping_address"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate5(" ", ctx_r1.order.shipping_address.street, " ", ctx_r1.order.shipping_address.city, " ", ctx_r1.getStateName(ctx_r1.order.shipping_address.state_id), " ", ctx_r1.getCountryName(ctx_r1.order.shipping_address.country_id), " ", ctx_r1.order.shipping_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(8, 11, "phone"), " : +", ctx_r1.order.shipping_address.country_code, " ", ctx_r1.order.shipping_address.phone, " ");
  }
}
function OrderDetails_Conditional_7_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "delivery_slot"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.order.delivery_description);
  }
}
function OrderDetails_Conditional_7_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 43)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "li", 43)(9, "label");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 44)(13, "h4");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "uppercase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "payment_mode"), ":");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, ctx_r1.order.payment_method));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 8, "payment_status"), ":");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, ctx_r1.order.payment_status));
  }
}
function OrderDetails_Conditional_7_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "shipping"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.shipping_total ? ctx_r1.order.shipping_total : 0));
  }
}
function OrderDetails_Conditional_7_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "points"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.points_amount));
  }
}
function OrderDetails_Conditional_7_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "wallet_balance"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.wallet_balance));
  }
}
function OrderDetails_Conditional_7_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "coupon_discount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.coupon_total_discount));
  }
}
function OrderDetails_Conditional_7_Conditional_57_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "h6");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "h6")(14, "div")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "td")(18, "a", 45);
    \u0275\u0275element(19, "i");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subOrder_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("#" + subOrder_r5.order_number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, subOrder_r5.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, subOrder_r5.amount));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275interpolate1("status-", subOrder_r5.order_status.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subOrder_r5.order_status.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c1))("queryParams", \u0275\u0275pureFunction2(17, _c2, subOrder_r5.order_number, ctx_r1.email_or_phone));
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-eye-line");
  }
}
function OrderDetails_Conditional_7_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 20)(2, "div", 37)(3, "div", 38)(4, "table", 39)(5, "thead")(6, "tr")(7, "th", 40);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 40);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 40);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 40);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 40);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, OrderDetails_Conditional_7_Conditional_57_For_24_Template, 20, 20, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "order_number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "order_date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 9, "total_amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, "status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 13, "action"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.order.sub_orders);
  }
}
function OrderDetails_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div")(2, "div", 9)(3, "div", 10)(4, "h5")(5, "a", 11);
    \u0275\u0275listener("click", function OrderDetails_Conditional_7_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(6, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14);
    \u0275\u0275conditionalCreate(11, OrderDetails_Conditional_7_Conditional_11_Template, 5, 3, "ul");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, OrderDetails_Conditional_7_Conditional_12_Template, 25, 15, "div", 15);
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17)(15, "div", 18)(16, "div", 19)(17, "div", 20)(18, "h3", 21);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 22)(22, "ul", 23);
    \u0275\u0275conditionalCreate(23, OrderDetails_Conditional_7_Conditional_23_Template, 9, 13, "li", 24);
    \u0275\u0275conditionalCreate(24, OrderDetails_Conditional_7_Conditional_24_Template, 9, 13, "li", 24);
    \u0275\u0275conditionalCreate(25, OrderDetails_Conditional_7_Conditional_25_Template, 6, 4, "li", 24);
    \u0275\u0275conditionalCreate(26, OrderDetails_Conditional_7_Conditional_26_Template, 16, 12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 25)(28, "div", 26)(29, "div", 20)(30, "h3", 27);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 28)(34, "ul")(35, "li");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, OrderDetails_Conditional_7_Conditional_41_Template, 6, 6, "li");
    \u0275\u0275elementStart(42, "li");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(48, OrderDetails_Conditional_7_Conditional_48_Template, 6, 6, "li", 29);
    \u0275\u0275conditionalCreate(49, OrderDetails_Conditional_7_Conditional_49_Template, 6, 6, "li", 29);
    \u0275\u0275conditionalCreate(50, OrderDetails_Conditional_7_Conditional_50_Template, 6, 6, "li", 29);
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "currencySymbol");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275conditionalCreate(57, OrderDetails_Conditional_7_Conditional_57_Template, 25, 15, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(8, 21, "order_number"), ": #", ctx_r1.order.order_number, " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.order && !ctx_r1.order.sub_orders.length ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order && ctx_r1.order.products.length ? 12 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 23, "consumer_details"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.order && ctx_r1.order.billing_address ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order && ctx_r1.order.shipping_address && !ctx_r1.order.is_digital_only ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order && ctx_r1.order.delivery_description && !ctx_r1.order.is_digital_only ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order && ctx_r1.order.payment_method ? 26 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 25, "summary"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 27, "subtotal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 29, ctx_r1.order.amount ? ctx_r1.order.amount : 0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order && !ctx_r1.order.is_digital_only ? 41 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 31, "tax"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 33, ctx_r1.order.tax_total ? ctx_r1.order.tax_total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order.points_amount !== 0 ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.wallet_balance !== 0 ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.coupon_total_discount !== 0 ? 50 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 35, "total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 37, ctx_r1.order.total ? ctx_r1.order.total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order && ctx_r1.order.sub_orders.length ? 57 : -1);
  }
}
function OrderDetails_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 46);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 4, "no_order_found"));
  }
}
var OrderDetails = class _OrderDetails {
  constructor() {
    this.store = inject(Store);
    this.route = inject(ActivatedRoute);
    this.location = inject(Location);
    this.orderStatus$ = inject(Store).select(OrderStatusState.orderStatus);
    this.country$ = inject(Store).select(CountryState.country);
    this.state$ = inject(Store).select(StateState.state);
    this.destroy$ = new Subject();
    this.countries = [];
    this.states = [];
    this.breadcrumb = {
      title: "Order Details",
      items: [{ label: "Order Details", active: false }]
    };
    this.store.dispatch(new GetOrderStatusAction());
    this.country$.subscribe((country) => this.countries = country.data);
    this.state$.subscribe((state) => this.states = state.data);
  }
  ngOnInit() {
    this.route.queryParams.pipe(switchMap((params) => {
      this.email_or_phone = params["email_or_phone"];
      return this.store.dispatch(new OrderTrackingAction({
        order_number: params["order_number"].toString(),
        email_or_phone: params["email_or_phone"]
      })).pipe(mergeMap(() => this.store.select(OrderState.selectedOrder)));
    }), takeUntil(this.destroy$)).subscribe((order) => {
      this.order = order;
      this.order && (this.order.consumer = order?.guest_order ? order?.guest_order : order?.consumer);
    });
  }
  getCountryName(id) {
    return this.countries.find((country) => country.id == id)?.name;
  }
  getStateName(id) {
    return this.states.find((state) => state.id == id)?.name;
  }
  back() {
    this.location.back();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function OrderDetails_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetails)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetails, selectors: [["app-order-details"]], decls: 9, vars: 3, consts: [[3, "breadcrumb"], [1, "dashboard-section", "section-b-space", "user-dashboard-section"], [1, "faq-content"], [1, "tab-pane"], [1, "container"], [1, "row"], [1, "col-xxl-12", "col-lg-12"], [1, "dashboard-right-sidebar"], [3, "class", "image", "text"], [1, "title-header", "mb-3"], [1, "d-flex", "align-items-center", "w-100", "justify-content-between"], [3, "click"], [1, "ri-arrow-left-line"], [1, "mb-4", "mt-2"], [1, "tracking-panel"], [1, "card", "dashboard-table"], [1, "summary-details", "my-3"], [1, "row", "g-4"], [1, "col-xxl-8", "col-lg-12", "col-md-7"], [1, "card"], [1, "card-body"], [1, "order-title"], [1, "customer-detail", "tracking-wrapper"], [1, "row", "g-3"], [1, "col-sm-6"], [1, "col-xxl-4", "col-lg-12", "col-md-5"], [1, "card", "h-m30"], [1, "fw-semibold", "mb-3", "order-title"], [1, "tracking-total", "tracking-wrapper"], [1, "txt-primary", "fw-bold"], [3, "active", "ngClass"], [1, "active", "cancelled-box"], [3, "ngClass"], [1, "panel-content"], [1, "icon"], ["alt", "image", 1, "img-fluid", 3, "src"], [1, "status"], [1, "wallet-table"], [1, "tracking-wrapper", "table-responsive"], [1, "table", "product-table", "order-table"], ["scope", "col"], [1, "product-image"], ["alt", "product", 1, "img-fluid", 3, "src"], [1, "col-sm-3"], [1, "d-flex", "align-items-center", "gap-2"], ["href", "javascript:void(0)", 3, "routerLink", "queryParams"], [3, "image", "text"]], template: function OrderDetails_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275conditionalCreate(7, OrderDetails_Conditional_7_Template, 58, 39, "div", 7);
        \u0275\u0275conditionalCreate(8, OrderDetails_Conditional_8_Template, 2, 6, "app-no-data", 8);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.order ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.order ? 8 : -1);
      }
    }, dependencies: [
      TranslateModule,
      RouterModule,
      RouterLink,
      Breadcrumb,
      NoData,
      NgClass,
      TranslatePipe,
      CurrencySymbolPipe,
      AsyncPipe,
      DatePipe,
      TitleCasePipe,
      UpperCasePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetails, [{
    type: Component,
    args: [{ selector: "app-order-details", imports: [
      TranslateModule,
      CurrencySymbolPipe,
      RouterModule,
      Breadcrumb,
      NoData,
      AsyncPipe,
      DatePipe,
      NgClass,
      TitleCasePipe,
      UpperCasePipe
    ], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<section class="dashboard-section section-b-space user-dashboard-section">
  <div class="faq-content">
    <div class="tab-pane">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12 col-lg-12">
            @if(order){
            <div class="dashboard-right-sidebar">
              <div>
                <div class="title-header mb-3">
                  <div class="d-flex align-items-center w-100 justify-content-between">
                    <h5>
                      <a (click)="back()"><i class="ri-arrow-left-line"></i></a>{{ 'order_number' |
                      translate }}: #{{ order.order_number }}
                    </h5>
                  </div>
                </div>
                <div class="mb-4 mt-2">
                  <div class="tracking-panel">
                    @if(order && !order.sub_orders.length){
                    <ul>
                      @for(orderStatus of (orderStatus$ | async)?.data; track orderStatus.id){
                      <li
                        [class.active]="orderStatus?.sequence! <= order.order_status.sequence!"
                        [ngClass]="{
                                                          'd-none': (orderStatus?.sequence! >= order.order_status.sequence!
                                                          && (order.order_status && order.order_status.slug === 'cancelled')) ||
                                                          orderStatus?.slug === 'cancelled' || (order.is_digital_only && (orderStatus?.slug === 'shipped' || orderStatus?.slug === 'out-for-delivery'))
                                                      }"
                      >
                        <div class="panel-content">
                          <div class="icon">
                            <img
                              src="assets/svg/tracking/{{orderStatus?.slug}}.svg"
                              class="img-fluid"
                              alt="image"
                            />
                          </div>
                          <div class="status">
                            {{ orderStatus?.name?.replaceAll('_', ' ') | titlecase }}
                          </div>
                        </div>
                      </li>
                      } @if(order && order.order_status && order.order_status.slug === 'cancelled'){
                      <li class="active cancelled-box">
                        @if(order && order.order_status){
                        <div class="panel-content">
                          <div class="icon">
                            <img
                              src="assets/svg/tracking/{{order.order_status.slug}}.svg"
                              class="img-fluid"
                              alt="image"
                            />
                          </div>
                          <div class="status">
                            {{ order.order_status.name.replaceAll('_', ' ')! | titlecase }}
                          </div>
                        </div>
                        }
                      </li>
                      }
                    </ul>
                    }
                  </div>
                </div>

                @if(order && order.products.length){
                <div class="card dashboard-table">
                  <div class="card-body">
                    <div class="wallet-table">
                      <div class="tracking-wrapper table-responsive">
                        <table class="table product-table order-table">
                          <thead>
                            <tr>
                              <th scope="col">{{ 'image' | translate }}</th>
                              <th scope="col">{{ 'name' | translate }}</th>
                              <th scope="col">{{ 'price' | translate }}</th>
                              <th scope="col">{{ 'quantity' | translate }}</th>
                              <th scope="col">{{ 'subtotal' | translate }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            @for(product of order.products; track product.id){
                            <tr>
                              <td class="product-image">
                                <img
                                  [src]="product?.pivot?.variation && product?.pivot?.variation?.variation_image
                                                                                    ? product?.pivot?.variation?.variation_image?.original_url
                                                                                    : product?.product_thumbnail
                                                                                    ? product?.product_thumbnail?.original_url
                                                                                    : 'assets/images/placeholder/product.png'"
                                  class="img-fluid"
                                  alt="product"
                                />
                              </td>
                              <td>
                                <h6>
                                  {{ product?.pivot?.variation ? product?.pivot?.variation?.name :
                                  product?.name }}
                                </h6>
                              </td>
                              <td>
                                <h6>{{ product?.pivot?.single_price | currencySymbol }}</h6>
                              </td>
                              <td>
                                <h6>{{ product?.pivot?.quantity }}</h6>
                              </td>
                              <td>
                                <h6>{{ product?.pivot?.subtotal | currencySymbol }}</h6>
                              </td>
                            </tr>
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                }

                <div class="summary-details my-3">
                  <div class="row g-4">
                    <div class="col-xxl-8 col-lg-12 col-md-7">
                      <div class="card">
                        <div class="card-body">
                          <h3 class="order-title">{{ 'consumer_details' | translate }}</h3>
                          <div class="customer-detail tracking-wrapper">
                            <ul class="row g-3">
                              @if(order && order.billing_address){
                              <li class="col-sm-6">
                                <label>{{ 'billing_address' | translate }}:</label>
                                <h4>
                                  {{ order.billing_address.street }} {{ order.billing_address.city
                                  }} {{ getStateName(order.billing_address.state_id) }} {{
                                  getCountryName(order.billing_address.country_id) }} {{
                                  order.billing_address.pincode }} <br />
                                  {{ 'phone' | translate }} : +{{ order.billing_address.country_code
                                  }} {{ order.billing_address.phone }}
                                </h4>
                              </li>
                              } @if(order && order.shipping_address && !order.is_digital_only){
                              <li class="col-sm-6">
                                <label>{{ 'shipping_address' | translate }}:</label>
                                <h4>
                                  {{ order.shipping_address.street }} {{ order.shipping_address.city
                                  }} {{ getStateName(order.shipping_address.state_id) }} {{
                                  getCountryName(order.shipping_address.country_id) }} {{
                                  order.shipping_address.pincode }} <br />
                                  {{ 'phone' | translate }} : +{{
                                  order.shipping_address.country_code }} {{
                                  order.shipping_address.phone }}
                                </h4>
                              </li>
                              } @if(order && order.delivery_description && !order.is_digital_only){
                              <li class="col-sm-6">
                                <label>{{ 'delivery_slot' | translate }}:</label>
                                <h4>{{ order.delivery_description }}</h4>
                              </li>
                              } @if(order && order.payment_method){
                              <li class="col-sm-3">
                                <label>{{ 'payment_mode' | translate }}:</label>
                                <div class="d-flex align-items-center gap-2">
                                  <h4>{{ order.payment_method | uppercase }}</h4>
                                </div>
                              </li>

                              <li class="col-sm-3">
                                <label>{{ 'payment_status' | translate }}:</label>
                                <div class="d-flex align-items-center gap-2">
                                  <h4>{{ order.payment_status | uppercase }}</h4>
                                </div>
                              </li>
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-4 col-lg-12 col-md-5">
                      <div class="card h-m30">
                        <div class="card-body">
                          <h3 class="fw-semibold mb-3 order-title">{{ 'summary' | translate }}</h3>
                          <div class="tracking-total tracking-wrapper">
                            <ul>
                              <li>
                                {{ 'subtotal' | translate }}
                                <span
                                  >{{ (order.amount ? order.amount : 0) | currencySymbol }}</span
                                >
                              </li>

                              @if(order && !order.is_digital_only){
                              <li>
                                {{ 'shipping'| translate }}
                                <span
                                  >{{ (order.shipping_total ? order.shipping_total : 0) |
                                  currencySymbol }}</span
                                >
                              </li>
                              }
                              <li>
                                {{ 'tax'| translate }}
                                <span
                                  >{{ (order.tax_total ? order.tax_total : 0) | currencySymbol
                                  }}</span
                                >
                              </li>

                              @if(order.points_amount !== 0){
                              <li class="txt-primary fw-bold">
                                {{ 'points'| translate }}
                                <span>{{ order.points_amount | currencySymbol }}</span>
                              </li>
                              } @if(order.wallet_balance !== 0){
                              <li class="txt-primary fw-bold">
                                {{ 'wallet_balance'| translate }}
                                <span>{{ order.wallet_balance | currencySymbol }}</span>
                              </li>
                              } @if(order.coupon_total_discount !== 0){
                              <li class="txt-primary fw-bold">
                                {{ 'coupon_discount'| translate }}
                                <span>{{ order.coupon_total_discount | currencySymbol }}</span>
                              </li>
                              }
                              <li>
                                {{ 'total'| translate }}
                                <span>{{ (order.total ? order.total : 0) | currencySymbol }}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                @if(order && order.sub_orders.length){
                <div class="card dashboard-table">
                  <div class="card-body">
                    <div class="wallet-table">
                      <div class="tracking-wrapper table-responsive">
                        <table class="table product-table order-table">
                          <thead>
                            <tr>
                              <th scope="col">{{ 'order_number' | translate }}</th>
                              <th scope="col">{{ 'order_date' | translate }}</th>
                              <th scope="col">{{ 'total_amount' | translate }}</th>
                              <th scope="col">{{ 'status' | translate }}</th>
                              <th scope="col">{{ 'action' | translate }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            @for(subOrder of order.sub_orders; track subOrder.id){
                            <tr>
                              <td>
                                <h6>{{ '#'+subOrder.order_number }}</h6>
                              </td>
                              <td>
                                <h6>{{ subOrder.created_at | date: 'dd MMM yyyy hh:mm:a' }}</h6>
                              </td>
                              <td>
                                <h6>{{ subOrder.amount | currencySymbol }}</h6>
                              </td>
                              <td>
                                <h6>
                                  <div class="status-{{subOrder.order_status.slug}}">
                                    <span>{{ subOrder.order_status.name }}</span>
                                  </div>
                                </h6>
                              </td>
                              <td>
                                <a
                                  href="javascript:void(0)"
                                  [routerLink]="['/order/details']"
                                  [queryParams]="{order_number: subOrder.order_number, email_or_phone: email_or_phone}"
                                >
                                  <i [class]="'ri-eye-line'"></i>
                                </a>
                              </td>
                            </tr>
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                }
              </div>
            </div>
            } @if(!order){
            <app-no-data
              [class]="'no-data-added'"
              [image]="'assets/svg/empty-items.svg'"
              [text]="'no_order_found' | translate"
            />
            }
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetails, { className: "OrderDetails", filePath: "src/app/components/shop/order-details/order-details.ts", lineNumber: 49 });
})();
export {
  OrderDetails
};
//# sourceMappingURL=chunk-RBQQCN3A.js.map
