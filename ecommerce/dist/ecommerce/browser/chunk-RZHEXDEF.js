import {
  NgClass
} from "./chunk-L6CMOIIK.js";
import {
  Component,
  Injectable,
  Input,
  Output,
  inject,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-3KEERULZ.js";

// src/app/shared/services/pagination.service.ts
var PaginationService = class _PaginationService {
  // Get Pager For Pagination
  getPager(totalItems, currentPage, pageSize) {
    let totalPages = Number(Math.ceil(Number(totalItems) / Number(pageSize)));
    let paginateRange = 3;
    if (Number(currentPage) < 1) {
      currentPage = 1;
    } else if (Number(currentPage) > Number(totalPages)) {
      currentPage = Number(totalPages);
    }
    let startPage, endPage;
    if (Number(totalPages) <= Number(paginateRange)) {
      startPage = 1;
      endPage = Number(totalPages);
    } else if (Number(currentPage) <= Number(Math.floor(Number(paginateRange) / 2))) {
      startPage = 1;
      endPage = Number(paginateRange);
    } else if (Number(currentPage) >= Number(totalPages) - Number(Math.floor(Number(paginateRange) / 2))) {
      startPage = Number(totalPages) - Number(paginateRange) + 1;
      endPage = Number(totalPages);
    } else {
      startPage = Number(currentPage) - Number(Math.floor(Number(paginateRange) / 2));
      endPage = Number(currentPage) + Number(Math.floor(Number(paginateRange) / 2));
    }
    let startIndex = (Number(currentPage) - 1) * Number(pageSize);
    let endIndex = Math.min(Number(startIndex) + Number(pageSize) - 1, Number(totalItems) - 1);
    let pages = Array.from(Array(Number(endPage) + 1 - Number(startPage)).keys()).map((i) => Number(startPage) + Number(i));
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }
  static {
    this.\u0275fac = function PaginationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaginationService, factory: _PaginationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/components/widgets/pagination/pagination.ts
var _c0 = (a0) => ({ disabled: a0 });
var _c1 = (a0) => ({ "active disabled": a0 });
function Pagination_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 1)(1, "a", 2);
    \u0275\u0275listener("click", function Pagination_Conditional_0_Conditional_5_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pageSet(1));
    });
    \u0275\u0275text(2, " 1 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c0, ctx_r1.paginate.currentPage === 1));
  }
}
function Pagination_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4)(1, "a", 6);
    \u0275\u0275text(2, " ... ");
    \u0275\u0275elementEnd()();
  }
}
function Pagination_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 1)(1, "a", 2);
    \u0275\u0275listener("click", function Pagination_Conditional_0_For_8_Template_a_click_1_listener() {
      const page_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pageSet(page_r5));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c1, ctx_r1.paginate.currentPage === page_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r5);
  }
}
function Pagination_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4)(1, "a", 6);
    \u0275\u0275text(2, " ... ");
    \u0275\u0275elementEnd()();
  }
}
function Pagination_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 1)(1, "a", 2);
    \u0275\u0275listener("click", function Pagination_Conditional_0_Conditional_10_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pageSet(ctx_r1.paginate.totalPages));
    });
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx_r1.paginate.currentPage === ctx_r1.paginate.totalPages));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.paginate.totalPages);
  }
}
function Pagination_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 0)(1, "li", 1)(2, "a", 2);
    \u0275\u0275listener("click", function Pagination_Conditional_0_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pageSet(ctx_r1.paginate.currentPage - 1));
    });
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275element(4, "i", 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(5, Pagination_Conditional_0_Conditional_5_Template, 3, 3, "li", 1);
    \u0275\u0275conditionalCreate(6, Pagination_Conditional_0_Conditional_6_Template, 3, 0, "li", 4);
    \u0275\u0275repeaterCreate(7, Pagination_Conditional_0_For_8_Template, 3, 4, "li", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(9, Pagination_Conditional_0_Conditional_9_Template, 3, 0, "li", 4);
    \u0275\u0275conditionalCreate(10, Pagination_Conditional_0_Conditional_10_Template, 4, 4, "li", 1);
    \u0275\u0275elementStart(11, "li", 1)(12, "a", 2);
    \u0275\u0275listener("click", function Pagination_Conditional_0_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pageSet(+ctx_r1.paginate.currentPage + 1));
    });
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275element(14, "i", 5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c0, ctx_r1.paginate.currentPage === 1));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.paginate.currentPage > 3 && ctx_r1.paginate.totalPages >= 3 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.paginate.currentPage > 3 && ctx_r1.paginate.totalPages > 4 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.paginate.pages);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.paginate.currentPage + 2 < ctx_r1.paginate.totalPages && ctx_r1.paginate.totalPages > 4 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.paginate.currentPage + 1 < ctx_r1.paginate.totalPages && ctx_r1.paginate.totalPages > 4 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c0, ctx_r1.paginate.currentPage === ctx_r1.paginate.totalPages));
  }
}
var Pagination = class _Pagination {
  constructor() {
    this.paginationService = inject(PaginationService);
    this.setPage = output();
  }
  // Detect changes
  ngOnChanges(changes) {
    this.total = changes["total"] ? changes["total"].currentValue : this.total;
    this.currentPage = changes["currentPage"] ? changes["currentPage"].currentValue : this.currentPage;
    this.pageSize = changes["pageSize"] ? changes["pageSize"].currentValue : this.pageSize;
    this.paginate = this.paginationService.getPager(this.total, this.currentPage, this.pageSize);
  }
  // Set Page
  pageSet(page) {
    this.setPage.emit(page);
  }
  static {
    this.\u0275fac = function Pagination_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Pagination)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Pagination, selectors: [["app-pagination"]], inputs: { total: "total", currentPage: "currentPage", pageSize: "pageSize" }, outputs: { setPage: "setPage" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "pagination"], [1, "page-item", 3, "ngClass"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], [1, "ri-arrow-left-s-line"], [1, "disabled"], [1, "ri-arrow-right-s-line"], [1, "page-link"], [1, "sr-only"]], template: function Pagination_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, Pagination_Conditional_0_Template, 15, 10, "ul", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.paginate.pages && ctx.paginate.pages.length ? 0 : -1);
      }
    }, dependencies: [NgClass], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pagination, [{
    type: Component,
    args: [{ selector: "app-pagination", imports: [NgClass], template: `@if(paginate.pages && paginate.pages.length){
<ul class="pagination">
  <li class="page-item" [ngClass]="{disabled:paginate.currentPage === 1}">
    <a class="page-link" href="javascript:void(0)" (click)="pageSet(paginate.currentPage - 1)">
      <span><i class="ri-arrow-left-s-line"></i></span>
    </a>
  </li>
  @if(paginate.currentPage > 3 && paginate.totalPages >= 3){
  <li class="page-item" [ngClass]="{disabled: paginate.currentPage === 1}">
    <a class="page-link" href="javascript:void(0)" (click)="pageSet(1)"> 1 </a>
  </li>
  } @if(paginate.currentPage > 3 && paginate.totalPages > 4){
  <li class="page-item" class="disabled">
    <a class="page-link"> ... </a>
  </li>
  } @for(page of paginate.pages; track page){
  <li class="page-item" [ngClass]="{ 'active disabled': paginate.currentPage === page }">
    <a class="page-link" href="javascript:void(0)" (click)="pageSet(page)">{{ page }}</a>
  </li>
  } @if(paginate.currentPage + 2 < paginate.totalPages && paginate.totalPages > 4){
  <li class="page-item" class="disabled">
    <a class="page-link"> ... </a>
  </li>
  } @if(paginate.currentPage + 1 < paginate.totalPages && paginate.totalPages > 4){
  <li class="page-item" [ngClass]="{disabled: paginate.currentPage === paginate.totalPages}">
    <a class="page-link" href="javascript:void(0)" (click)="pageSet(paginate.totalPages)">
      <span class="sr-only">{{paginate.totalPages}}</span>
    </a>
  </li>
  }

  <li class="page-item" [ngClass]="{ disabled: paginate.currentPage === paginate.totalPages }">
    <a class="page-link" href="javascript:void(0)" (click)="pageSet(+paginate.currentPage + 1)">
      <span>
        <i class="ri-arrow-right-s-line"></i>
      </span>
    </a>
  </li>
</ul>
}
` }]
  }], null, { total: [{
    type: Input
  }], currentPage: [{
    type: Input
  }], pageSize: [{
    type: Input
  }], setPage: [{ type: Output, args: ["setPage"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Pagination, { className: "Pagination", filePath: "src/app/shared/components/widgets/pagination/pagination.ts", lineNumber: 13 });
})();

export {
  PaginationService,
  Pagination
};
//# sourceMappingURL=chunk-RZHEXDEF.js.map
