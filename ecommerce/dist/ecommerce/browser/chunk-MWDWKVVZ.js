import {
  OrderState
} from "./chunk-UIQX5ERP.js";
import {
  GetOrdersAction
} from "./chunk-LPQEB73E.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6R3AQVTF.js";
import "./chunk-HBLN46Q5.js";
import "./chunk-G25K32MJ.js";
import "./chunk-MLCQBQYT.js";
import "./chunk-MXUZ2ZBZ.js";
import {
  Pagination
} from "./chunk-Q36QR2OY.js";
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
  ɵɵtextInterpolate1
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/orders/orders.ts
var _c0 = (a0) => ["/account/order/details", a0];
var _forTrack0 = ($index, $item) => $item.order_number;
function Orders_Conditional_6_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 10);
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
    \u0275\u0275elementStart(10, "td")(11, "div")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td")(16, "div")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "a", 11);
    \u0275\u0275element(27, "i", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r1.order_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 14, order_r1 == null ? null : order_r1.created_at, "dd MMM yyyy hh:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 17, order_r1 == null ? null : order_r1.total));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge rounded-0 bg-", order_r1 == null ? null : order_r1.status == null ? null : order_r1.status.toLowerCase(), " custom-badge"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 19, order_r1 == null ? null : order_r1.status));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge rounded-0 bg-", order_r1 == null ? null : order_r1.payment_status == null ? null : order_r1.payment_status.toLowerCase(), " custom-badge"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 21, order_r1 == null ? null : order_r1.payment_status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 23, order_r1 == null ? null : order_r1.payment_method));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((order_r1 == null ? null : order_r1.items_count) ?? 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c0, order_r1.order_number));
  }
}
function Orders_Conditional_6_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "nav", 16)(5, "app-pagination", 17);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("setPage", function Orders_Conditional_6_Conditional_32_Template_app_pagination_setPage_5_listener($event) {
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
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "div", 6)(3, "table", 7)(4, "thead")(5, "tr", 8)(6, "th");
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
    \u0275\u0275text(16, "Order Status");
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
    \u0275\u0275text(24, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275repeaterCreate(29, Orders_Conditional_6_For_30_Template, 28, 27, "tr", null, _forTrack0);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(32, Orders_Conditional_6_Conditional_32_Template, 7, 5, "div", 9);
    \u0275\u0275pipe(33, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "order_number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "amount"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "payment_status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 15, "payment_method"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 17, "option"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_7_0 = \u0275\u0275pipeBind1(31, 19, ctx_r2.order$)) == null ? null : tmp_7_0.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_8_0 = \u0275\u0275pipeBind1(33, 21, ctx_r2.order$)) == null ? null : tmp_8_0.data == null ? null : tmp_8_0.data.length) ? 32 : -1);
  }
}
function Orders_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_order"))("description", \u0275\u0275pipeBind1(2, 7, "no_order_yet"));
  }
}
var Orders = class _Orders {
  constructor() {
    this.store = inject(Store);
    this.order$ = inject(Store).select(OrderState.order);
    this.filter = {
      page: 1,
      // Current page number
      paginate: 10
      // Display per page,
    };
    this.store.dispatch(new GetOrdersAction(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetOrdersAction(this.filter));
  }
  static {
    this.\u0275fac = function Orders_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Orders)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Orders, selectors: [["app-orders"]], decls: 9, vars: 6, consts: [[1, "card", "dashboard-table", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "total-box", "mt-0"], [3, "class", "image", "text", "description"], [1, "wallet-table", "mt-0"], [1, "table-responsive"], [1, "table", "cart-table", "order-table"], [1, "table-head"], [1, "product-pagination"], [1, "fw-bolder"], [3, "routerLink"], [1, "ri-eye-line"], [1, "theme-pagination-block"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function Orders_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, Orders_Conditional_6_Template, 34, 23, "div", 3);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275conditionalBranchCreate(8, Orders_Conditional_8_Template, 3, 9, "app-no-data", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "my_orders"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.order$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length) ? 6 : 8);
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
    ], template: `<div class="card dashboard-table mt-0">\r
  <div class="card-body">\r
    <div class="top-sec">\r
      <h3>{{ 'my_orders' | translate }}</h3>\r
    </div>\r
    @if((order$ | async)?.data?.length){\r
    <div class="total-box mt-0">\r
      <div class="wallet-table mt-0">\r
        <div class="table-responsive">\r
          <table class="table cart-table order-table">\r
            <thead>\r
              <tr class="table-head">\r
                <th>{{ 'order_number' | translate }}</th>\r
                <th>{{ 'date' | translate }}</th>\r
                <th>{{ 'amount' | translate }}</th>\r
                <th>Order Status</th>\r
                <th>{{ 'payment_status' | translate }}</th>\r
                <th>{{ 'payment_method' | translate }}</th>\r
                <th>Items</th>\r
                <th>{{ 'option' | translate }}</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for(order of (order$ | async)?.data ;track order.order_number; let i = $index){\r
              <tr>\r
                <td><span class="fw-bolder">#{{order.order_number}}</span></td>\r
                <td>{{ order?.created_at | date: 'dd MMM yyyy hh:mm a' }}</td>\r
                <td>{{ order?.total | currencySymbol }}</td>\r
                <td>\r
                  <div class="badge rounded-0 bg-{{order?.status?.toLowerCase()}} custom-badge">\r
                    <span>{{ order?.status | titlecase }}</span>\r
                  </div>\r
                </td>\r
                <td>\r
                  <div class="badge rounded-0 bg-{{order?.payment_status?.toLowerCase()}} custom-badge">\r
                    <span>{{ order?.payment_status | titlecase }}</span>\r
                  </div>\r
                </td>\r
                <td>{{ order?.payment_method | titlecase }}</td>\r
                <td>{{ order?.items_count ?? 0 }}</td>\r
                <td>\r
                  <a [routerLink]="['/account/order/details', order.order_number]"\r
                    ><i class="ri-eye-line"></i\r
                  ></a>\r
                </td>\r
              </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
      @if((order$ | async)?.data?.length){\r
      <div class="product-pagination">\r
        <div class="theme-pagination-block">\r
          <div class="row">\r
            <div class="col-xl-6 col-md-6 col-sm-12">\r
              <nav aria-label="Page navigation">\r
                <app-pagination\r
                  [total]="(order$ | async)?.total || 0"\r
                  [currentPage]="filter['page']"\r
                  [pageSize]="filter['paginate']"\r
                  (setPage)="setPaginate($event)"\r
                />\r
              </nav>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      }\r
    </div>\r
    }@else {\r
    <app-no-data\r
      [class]="'no-data-added'"\r
      [image]="'assets/svg/empty-items.svg'"\r
      [text]="'no_order' | translate"\r
      [description]="'no_order_yet' | translate"\r
    />\r
    }\r
  </div>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Orders, { className: "Orders", filePath: "src/app/components/account/orders/orders.ts", lineNumber: 31 });
})();
export {
  Orders
};
//# sourceMappingURL=chunk-MWDWKVVZ.js.map
