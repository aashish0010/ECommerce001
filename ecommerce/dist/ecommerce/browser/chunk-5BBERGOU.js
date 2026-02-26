import {
  PageService,
  PageState
} from "./chunk-HCYXHB4L.js";
import {
  GetFaqsAction
} from "./chunk-QL2HLPW7.js";
import {
  Breadcrumb
} from "./chunk-LBV5SDPN.js";
import "./chunk-6347PIFH.js";
import "./chunk-2K52HGL6.js";
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbAccordionModule
} from "./chunk-QQXAO3XE.js";
import "./chunk-JLWO6B35.js";
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3KEERULZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/page/faq/faq.ts
var _forTrack0 = ($index, $item) => $item.id;
function Faq_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h5", 9)(3, "button", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const \u0275$index_15_r2 = ctx.$index;
    \u0275\u0275property("collapsed", \u0275$index_15_r2 !== 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", faq_r1.title, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(faq_r1.description);
  }
}
function Faq_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, Faq_Conditional_5_For_2_Template, 9, 3, "div", 7, _forTrack0);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("closeOthers", true);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_2_0 = \u0275\u0275pipeBind1(3, 1, ctx_r2.faq$)) == null ? null : tmp_2_0.data);
  }
}
function Faq_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_faq"))("description", \u0275\u0275pipeBind1(2, 7, "no_faq_desc"));
  }
}
var Faq = class _Faq {
  constructor() {
    this.store = inject(Store);
    this.pageService = inject(PageService);
    this.breadcrumb = {
      title: "FAQ's",
      items: [{ label: "FAQ's", active: true }]
    };
    this.faq$ = inject(Store).select(PageState.faq);
    this.store.dispatch(new GetFaqsAction());
  }
  static {
    this.\u0275fac = function Faq_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Faq)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Faq, selectors: [["app-faq"]], decls: 8, vars: 4, consts: [[3, "breadcrumb"], [1, "faq-section", "section-b-space"], [1, "container"], [1, "row"], [1, "col-sm-12"], ["ngbAccordion", "", 1, "accordion", "faq-accordion", 3, "closeOthers"], [3, "class", "image", "text", "description"], ["ngbAccordionItem", "", 3, "collapsed"], ["ngbAccordionHeader", ""], [1, "mb-0"], ["type", "button", "ngbAccordionButton", "", 1, "btn", "btn-link"], ["ngbAccordionCollapse", "", 1, "collapse", "show"], ["ngbAccordionBody", "", 1, "card-body"], [3, "image", "text", "description"]], template: function Faq_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275conditionalCreate(5, Faq_Conditional_5_Template, 4, 3, "div", 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275conditionalBranchCreate(7, Faq_Conditional_7_Template, 3, 9, "app-no-data", 6);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(6, 2, ctx.faq$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length) ? 5 : 7);
      }
    }, dependencies: [NgbAccordionModule, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, Breadcrumb, NoData, TranslateModule, TranslatePipe, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Faq, [{
    type: Component,
    args: [{ selector: "app-faq", imports: [NgbAccordionModule, Breadcrumb, NoData, TranslateModule, AsyncPipe], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<section class="faq-section section-b-space">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        @if((faq$ | async )?.data?.length){
        <div class="accordion faq-accordion" ngbAccordion [closeOthers]="true">
          @for(faq of (faq$ | async )?.data; track faq.id; let i = $index){
          <div ngbAccordionItem [collapsed]="i !== 0">
            <div ngbAccordionHeader>
              <h5 class="mb-0">
                <button class="btn btn-link" type="button" ngbAccordionButton>
                  {{ faq.title }}
                </button>
              </h5>
            </div>
            <div class="collapse show" ngbAccordionCollapse>
              <div class="card-body" ngbAccordionBody>
                <p>{{ faq.description }}</p>
              </div>
            </div>
          </div>
          }
        </div>
        }@else {
        <!-- No Data -->
        <app-no-data
          [class]="'no-data-added collection-no-data'"
          [image]="'assets/svg/empty-items.svg'"
          [text]="'no_faq' | translate"
          [description]="'no_faq_desc' | translate"
        />
        }
      </div>
    </div>
  </div>
</section>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Faq, { className: "Faq", filePath: "src/app/components/page/faq/faq.ts", lineNumber: 23 });
})();
export {
  Faq
};
//# sourceMappingURL=chunk-5BBERGOU.js.map
