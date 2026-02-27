import {
  Pagination
} from "./chunk-Q36QR2OY.js";
import {
  GetUserTransactionAction,
  WalletState
} from "./chunk-DT3CYOUQ.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/wallet/wallet.ts
var _forTrack0 = ($index, $item) => $item.id;
function Wallet_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 6)(2, "div", 3)(3, "div", 4)(4, "div", 7)(5, "div", 8)(6, "div", 9);
    \u0275\u0275element(7, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "div", 12)(10, "h5");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275pipe(16, "async");
    \u0275\u0275pipe(17, "currencySymbol");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 2, "wallet_balance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 8, \u0275\u0275pipeBind1(15, 4, ctx_r0.wallet$) ? (tmp_2_0 = \u0275\u0275pipeBind1(16, 6, ctx_r0.wallet$)) == null ? null : tmp_2_0.balance : 0), " ");
  }
}
function Wallet_Conditional_6_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const transaction_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, transaction_r2 == null ? null : transaction_r2.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, transaction_r2 == null ? null : transaction_r2.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(transaction_r2 == null ? null : transaction_r2.detail);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge rounded-0 bg-", transaction_r2 == null ? null : transaction_r2.type, " custom-badge"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, transaction_r2 == null ? null : transaction_r2.type));
  }
}
function Wallet_Conditional_6_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "nav", 21)(5, "app-pagination", 22);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("setPage", function Wallet_Conditional_6_Conditional_22_Template_app_pagination_setPage_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setPaginate($event));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 3, ctx_r0.wallet$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.total) || 0)("currentPage", ctx_r0.filter["page"])("pageSize", ctx_r0.filter["paginate"]);
  }
}
function Wallet_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 13)(2, "div", 14)(3, "table", 15)(4, "thead")(5, "tr", 16)(6, "th");
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, Wallet_Conditional_6_For_20_Template, 14, 14, "tr", null, _forTrack0);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(22, Wallet_Conditional_6_Conditional_22_Template, 7, 5, "div", 17);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, "remark"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "status"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_5_0 = \u0275\u0275pipeBind1(21, 13, ctx_r0.wallet$)) == null ? null : tmp_5_0.transactions == null ? null : tmp_5_0.transactions.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_6_0 = \u0275\u0275pipeBind1(23, 15, ctx_r0.wallet$)) == null ? null : tmp_6_0.transactions == null ? null : tmp_6_0.transactions.data == null ? null : tmp_6_0.transactions.data.length) ? 22 : -1);
  }
}
function Wallet_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_transaction"))("description", \u0275\u0275pipeBind1(2, 7, "no_wallet_balance"));
  }
}
var Wallet = class _Wallet {
  constructor() {
    this.store = inject(Store);
    this.wallet$ = inject(Store).select(WalletState.wallet);
    this.filter = {
      page: 1,
      // Current page number
      paginate: 10
      // Display per page,
    };
    this.store.dispatch(new GetUserTransactionAction(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetUserTransactionAction(this.filter));
  }
  static {
    this.\u0275fac = function Wallet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Wallet)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Wallet, selectors: [["app-wallet"]], decls: 9, vars: 6, consts: [[1, "row", "g-3"], [1, "col-12"], [1, "card", "dashboard-table", "mt-0"], [1, "card-body"], [1, "total-box", "mt-0"], [3, "class", "image", "text", "description"], [1, "card"], [1, "total-contain", "wallet-bg"], [1, "wallet-point-box"], [1, "total-image"], ["src", "assets/images/svg/wallet.svg", "alt", "wallet"], [1, "total-detail"], [1, "total-box"], [1, "wallet-table"], [1, "table-responsive"], [1, "table", "cart-table", "order-table"], [1, "table-head"], [1, "product-pagination"], [1, "theme-pagination-block"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function Wallet_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, Wallet_Conditional_1_Template, 18, 10, "div", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3);
        \u0275\u0275conditionalCreate(6, Wallet_Conditional_6_Template, 24, 17, "div", 4);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275conditionalBranchCreate(8, Wallet_Conditional_8_Template, 3, 9, "app-no-data", 5);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 2, ctx.wallet$)) == null ? null : tmp_0_0.transactions == null ? null : tmp_0_0.transactions.data == null ? null : tmp_0_0.transactions.data.length) ? 1 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.wallet$)) == null ? null : tmp_1_0.transactions == null ? null : tmp_1_0.transactions.data == null ? null : tmp_1_0.transactions.data.length) ? 6 : 8);
      }
    }, dependencies: [
      TranslateModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Wallet, [{
    type: Component,
    args: [{ selector: "app-wallet", imports: [
      TranslateModule,
      CurrencySymbolPipe,
      Pagination,
      NoData,
      AsyncPipe,
      DatePipe,
      TitleCasePipe
    ], template: `<div class="row g-3">
  @if((wallet$ | async)?.transactions?.data?.length){
  <div class="col-12">
    <div class="card">
      <div class="card-body">
        <div class="total-box mt-0">
          <div class="total-contain wallet-bg">
            <div class="wallet-point-box">
              <div class="total-image">
                <img src="assets/images/svg/wallet.svg" alt="wallet" />
              </div>
              <div class="total-detail">
                <div class="total-box">
                  <h5>{{ 'wallet_balance'| translate}}</h5>
                  <h3>
                    {{ ((wallet$ | async) ? (wallet$ | async)?.balance! : 0) | currencySymbol }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  }

  <div class="col-12">
    <div class="card dashboard-table mt-0">
      <div class="card-body">
        @if((wallet$ | async)?.transactions?.data?.length){
        <div class="total-box mt-0">
          <div class="wallet-table">
            <div class="table-responsive">
              <table class="table cart-table order-table">
                <thead>
                  <tr class="table-head">
                    <th>{{ 'date'| translate}}</th>
                    <th>{{ 'amount'| translate}}</th>
                    <th>{{ 'remark'| translate}}</th>
                    <th>{{ 'status'| translate}}</th>
                  </tr>
                </thead>
                <tbody>
                  @for(transaction of (wallet$ | async)?.transactions?.data; track transaction.id;
                  let i = $index){
                  <tr>
                    <td>{{ transaction?.created_at | date: 'dd MMM yyyy hh:mm:a' }}</td>
                    <td>{{ transaction?.amount | currencySymbol }}</td>
                    <td>{{ transaction?.detail }}</td>
                    <td>
                      <div class="badge rounded-0 bg-{{transaction?.type}} custom-badge">
                        <span>{{ transaction?.type | titlecase }}</span>
                      </div>
                    </td>
                  </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
          @if((wallet$ | async)?.transactions?.data?.length){
          <div class="product-pagination">
            <div class="theme-pagination-block">
              <div class="row">
                <div class="col-xl-6 col-md-6 col-sm-12">
                  <nav aria-label="Page navigation">
                    <app-pagination
                      [total]="(wallet$ | async)?.transactions?.total || 0"
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
          [text]="'no_transaction' | translate"
          [description]="'no_wallet_balance' | translate"
        />
        }
      </div>
    </div>
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Wallet, { className: "Wallet", filePath: "src/app/components/account/wallet/wallet.ts", lineNumber: 30 });
})();
export {
  Wallet
};
//# sourceMappingURL=chunk-JWG4SOHZ.js.map
