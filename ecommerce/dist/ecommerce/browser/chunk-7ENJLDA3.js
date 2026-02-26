import {
  AuthService
} from "./chunk-LEE25DCS.js";
import {
  Button
} from "./chunk-RJ7FCDYY.js";
import {
  NgbModal
} from "./chunk-QQXAO3XE.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-7XQQRBBN.js";
import {
  Component,
  Output,
  Store,
  inject,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3KEERULZ.js";

// src/app/shared/components/widgets/modal/confirmation-modal/confirmation-modal.ts
var ConfirmationModal = class _ConfirmationModal {
  constructor() {
    this.modal = inject(NgbModal);
    this.authService = inject(AuthService);
    this.store = inject(Store);
    this.confirm = output();
  }
  confirmation() {
    this.confirm.emit(true);
  }
  static {
    this.\u0275fac = function ConfirmationModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmationModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmationModal, selectors: [["app-confirmation-modal"]], outputs: { confirm: "confirm" }, decls: 15, vars: 19, consts: [[1, "modal-body"], [1, "ri-question-line", "icon-box"], [1, "modal-title"], [1, "button-box"], [3, "click", "spinner", "id"], [3, "click", "id"]], template: function ConfirmationModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "i", 1);
        \u0275\u0275elementStart(2, "h5", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 3)(9, "app-button", 4);
        \u0275\u0275listener("click", function ConfirmationModal_Template_app_button_click_9_listener() {
          return ctx.modal.dismissAll("Cancel");
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "app-button", 5);
        \u0275\u0275listener("click", function ConfirmationModal_Template_app_button_click_12_listener() {
          return ctx.confirmation();
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, "confirmation"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 13, "are_you_sure_you_want_to_proceed"), "?");
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-md fw-bold btn-outline");
        \u0275\u0275property("spinner", false)("id", "confirm_no_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "no"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "confirm_yes_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "yes"), " ");
      }
    }, dependencies: [TranslateModule, Button, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationModal, [{
    type: Component,
    args: [{ selector: "app-confirmation-modal", imports: [TranslateModule, Button], template: `<div class="modal-body">
  <i class="ri-question-line icon-box"></i>
  <h5 class="modal-title">{{ 'confirmation' | translate }}</h5>
  <p>{{ 'are_you_sure_you_want_to_proceed' | translate }}?</p>
  <div class="button-box">
    <app-button
      [class]="'btn btn-md fw-bold btn-outline'"
      [spinner]="false"
      [id]="'confirm_no_btn'"
      (click)="modal.dismissAll('Cancel')"
    >
      {{ 'no' | translate }}
    </app-button>
    <app-button [class]="'btn btn-solid'" [id]="'confirm_yes_btn'" (click)="confirmation()">
      {{ 'yes' | translate }}
    </app-button>
  </div>
</div>
` }]
  }], null, { confirm: [{ type: Output, args: ["confirm"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationModal, { className: "ConfirmationModal", filePath: "src/app/shared/components/widgets/modal/confirmation-modal/confirmation-modal.ts", lineNumber: 16 });
})();

export {
  ConfirmationModal
};
//# sourceMappingURL=chunk-7ENJLDA3.js.map
