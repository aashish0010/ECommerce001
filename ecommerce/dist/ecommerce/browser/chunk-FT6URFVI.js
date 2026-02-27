import {
  OrderState
} from "./chunk-UIQX5ERP.js";
import {
  GetOrdersAction
} from "./chunk-LPQEB73E.js";
import "./chunk-6R3AQVTF.js";
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
  TitleCasePipe
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  inject,
  map,
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
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/refund/refund.ts
var _forTrack0 = ($index, $item) => $item.order_number;
function Refund_Conditional_8_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "div")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r1 == null ? null : order_r1.order_number);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge rounded-0 bg-", order_r1 == null ? null : order_r1.status == null ? null : order_r1.status.toLowerCase(), " custom-badge"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, order_r1 == null ? null : order_r1.status));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge rounded-0 bg-", order_r1 == null ? null : order_r1.payment_status == null ? null : order_r1.payment_status.toLowerCase(), " custom-badge"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, order_r1 == null ? null : order_r1.payment_status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 15, order_r1 == null ? null : order_r1.total));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 17, order_r1 == null ? null : order_r1.created_at, "dd MMM yyyy"));
  }
}
function Refund_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6)(2, "div", 7)(3, "table", 8)(4, "thead")(5, "tr", 9)(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Order Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Payment Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, Refund_Conditional_8_For_20_Template, 20, 20, "tr", null, _forTrack0);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 2, "order"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 4, "created_at"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(21, 6, ctx_r1.refundOrders$));
  }
}
function Refund_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 11);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_refund"))("description", \u0275\u0275pipeBind1(2, 7, "no_refund_yet"));
  }
}
var Refund = class _Refund {
  constructor() {
    this.store = inject(Store);
    this.refundOrders$ = this.store.select(OrderState.order).pipe(map((orderModel) => (orderModel?.data ?? []).filter((o) => ["cancelled", "refunded", "returned"].includes((o.status ?? "").toLowerCase()))));
    this.store.dispatch(new GetOrdersAction());
  }
  static {
    this.\u0275fac = function Refund_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Refund)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Refund, selectors: [["app-refund"]], decls: 11, vars: 6, consts: [[1, "card", "dashboard-table", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "text-muted"], [1, "total-box", "mt-0"], [3, "class", "image", "text", "description"], [1, "wallet-table", "mt-0"], [1, "table-responsive"], [1, "table", "cart-table", "order-table"], [1, "table-head"], [1, "fw-bolder"], [3, "image", "text", "description"]], template: function Refund_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "small", 3);
        \u0275\u0275text(7, "Cancelled & refunded orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, Refund_Conditional_8_Template, 22, 8, "div", 4);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275conditionalBranchCreate(10, Refund_Conditional_10_Template, 3, 9, "app-no-data", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "refund"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(9, 4, ctx.refundOrders$)) == null ? null : tmp_1_0.length) ? 8 : 10);
      }
    }, dependencies: [TranslateModule, NoData, TranslatePipe, AsyncPipe, DatePipe, TitleCasePipe, CurrencySymbolPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Refund, [{
    type: Component,
    args: [{ selector: "app-refund", imports: [TranslateModule, NoData, AsyncPipe, DatePipe, TitleCasePipe, CurrencySymbolPipe], template: `<div class="card dashboard-table mt-0">
  <div class="card-body">
    <div class="top-sec">
      <h3>{{ 'refund' | translate }}</h3>
      <small class="text-muted">Cancelled &amp; refunded orders</small>
    </div>

    @if((refundOrders$ | async)?.length){
    <div class="total-box mt-0">
      <div class="wallet-table mt-0">
        <div class="table-responsive">
          <table class="table cart-table order-table">
            <thead>
              <tr class="table-head">
                <th>{{ 'order' | translate }}</th>
                <th>Order Status</th>
                <th>Payment Status</th>
                <th>Amount</th>
                <th>{{ 'created_at' | translate }}</th>
              </tr>
            </thead>
            <tbody>
              @for(order of (refundOrders$ | async); track order.order_number; let i = $index){
              <tr>
                <td><span class="fw-bolder">#{{ order?.order_number }}</span></td>
                <td>
                  <div class="badge rounded-0 bg-{{order?.status?.toLowerCase()}} custom-badge">
                    <span>{{ order?.status | titlecase }}</span>
                  </div>
                </td>
                <td>
                  <div class="badge rounded-0 bg-{{order?.payment_status?.toLowerCase()}} custom-badge">
                    <span>{{ order?.payment_status | titlecase }}</span>
                  </div>
                </td>
                <td>{{ order?.total | currencySymbol }}</td>
                <td>{{ order?.created_at | date: 'dd MMM yyyy' }}</td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    }@else {
    <app-no-data
      [class]="'no-data-added'"
      [image]="'assets/svg/empty-items.svg'"
      [text]="'no_refund' | translate"
      [description]="'no_refund_yet' | translate"
    />
    }
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Refund, { className: "Refund", filePath: "src/app/components/account/refund/refund.ts", lineNumber: 20 });
})();
export {
  Refund
};
//# sourceMappingURL=chunk-FT6URFVI.js.map
