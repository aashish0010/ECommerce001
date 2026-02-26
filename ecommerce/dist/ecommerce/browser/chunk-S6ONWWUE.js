import {
  RefundState
} from "./chunk-JP4RVPJE.js";
import {
  GetRefundAction
} from "./chunk-UTLPXFOE.js";
import {
  Pagination
} from "./chunk-RZHEXDEF.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3KEERULZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/refund/refund.ts
var _forTrack0 = ($index, $item) => $item.id;
function Refund_Conditional_6_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", refund_r1 == null ? null : refund_r1.order == null ? null : refund_r1.order.order_number);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("status-", refund_r1 == null ? null : refund_r1.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, refund_r1 == null ? null : refund_r1.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(refund_r1 == null ? null : refund_r1.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, refund_r1 == null ? null : refund_r1.created_at, "dd MMM yyyy"));
  }
}
function Refund_Conditional_6_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "nav", 15)(5, "app-pagination", 16);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("setPage", function Refund_Conditional_6_Conditional_22_Template_app_pagination_setPage_5_listener($event) {
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
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 3, ctx_r2.refund$)) == null ? null : tmp_2_0.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function Refund_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "div", 6)(3, "table", 7)(4, "thead")(5, "tr", 8)(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, Refund_Conditional_6_For_20_Template, 14, 12, "tr", null, _forTrack0);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(22, Refund_Conditional_6_Conditional_22_Template, 7, 5, "div", 10);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "order"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, "reason"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "created_at"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_5_0 = \u0275\u0275pipeBind1(21, 13, ctx_r2.refund$)) == null ? null : tmp_5_0.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_6_0 = \u0275\u0275pipeBind1(23, 15, ctx_r2.refund$)) == null ? null : tmp_6_0.data == null ? null : tmp_6_0.data.length) ? 22 : -1);
  }
}
function Refund_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 17);
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
    this.refund$ = inject(Store).select(RefundState.refund);
    this.filter = {
      page: 1,
      // Current page number
      paginate: 10
      // Display per page,
    };
    this.store.dispatch(new GetRefundAction(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetRefundAction(this.filter));
  }
  static {
    this.\u0275fac = function Refund_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Refund)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Refund, selectors: [["app-refund"]], decls: 9, vars: 6, consts: [[1, "card", "dashboard-table", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "total-box", "mt-0"], [3, "class", "image", "text", "description"], [1, "wallet-table", "mt-0"], [1, "table-responsive"], [1, "table", "cart-table", "order-table"], [1, "table-head"], [1, "reason-table"], [1, "product-pagination"], [1, "fw-bolder"], [1, "theme-pagination-block"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function Refund_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, Refund_Conditional_6_Template, 24, 17, "div", 3);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275conditionalBranchCreate(8, Refund_Conditional_8_Template, 3, 9, "app-no-data", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "refund"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.refund$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length) ? 6 : 8);
      }
    }, dependencies: [TranslateModule, Pagination, NoData, TranslatePipe, AsyncPipe, DatePipe, TitleCasePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Refund, [{
    type: Component,
    args: [{ selector: "app-refund", imports: [TranslateModule, Pagination, NoData, AsyncPipe, DatePipe, TitleCasePipe], template: `<div class="card dashboard-table mt-0">
  <div class="card-body">
    <div class="top-sec">
      <h3>{{ 'refund' | translate }}</h3>
    </div>

    @if((refund$ | async)?.data?.length){
    <div class="total-box mt-0">
      <div class="wallet-table mt-0">
        <div class="table-responsive">
          <table class="table cart-table order-table">
            <thead>
              <tr class="table-head">
                <th>{{ 'order' | translate }}</th>
                <th>{{ 'status' | translate }}</th>
                <th class="reason-table">{{ 'reason' | translate }}</th>
                <th>{{ 'created_at' | translate }}</th>
              </tr>
            </thead>
            <tbody>
              @for(refund of (refund$ | async)?.data; track refund.id; let i = $index){
              <tr>
                <td><span class="fw-bolder">#{{ refund?.order?.order_number }}</span></td>
                <td>
                  <div class="status-{{refund?.status}}">
                    <span>{{ refund?.status | titlecase }}</span>
                  </div>
                </td>
                <td class="reason-table">{{ refund?.reason }}</td>
                <td>{{ refund?.created_at | date: 'dd MMM yyyy' }}</td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
      @if((refund$ | async)?.data?.length){
      <div class="product-pagination">
        <div class="theme-pagination-block">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <nav aria-label="Page navigation">
                <app-pagination
                  [total]="(refund$ | async)?.total || 0"
                  [currentPage]="filter['page']"
                  [pageSize]="filter['paginate']"
                  (setPage)="setPaginate($event)"
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
      }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Refund, { className: "Refund", filePath: "src/app/components/account/refund/refund.ts", lineNumber: 21 });
})();
export {
  Refund
};
//# sourceMappingURL=chunk-S6ONWWUE.js.map
