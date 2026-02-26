import {
  DeleteAddressAction
} from "./chunk-HP6MYKGT.js";
import {
  Button
} from "./chunk-RJ7FCDYY.js";
import {
  NgbActiveModal
} from "./chunk-QQXAO3XE.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-7XQQRBBN.js";
import {
  Component,
  Input,
  Store,
  inject,
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

// src/app/shared/components/widgets/modal/delete-address-modal/delete-address-modal.ts
var DeleteAddressModal = class _DeleteAddressModal {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.store = inject(Store);
    this.userAction = {};
  }
  ngOnInit() {
    const userAddress = this.userAddress;
    if (userAddress) {
      this.userAction = {
        data: userAddress
      };
    }
  }
  delete() {
    this.store.dispatch(new DeleteAddressAction(this.userAddress.id));
  }
  static {
    this.\u0275fac = function DeleteAddressModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeleteAddressModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteAddressModal, selectors: [["app-delete-address-modal"]], inputs: { userAddress: "userAddress" }, decls: 15, vars: 19, consts: [[1, "modal-body"], [1, "ri-delete-bin-line", "icon-box"], [1, "modal-title"], [1, "button-box"], [3, "click", "spinner", "id"], [3, "click", "id"]], template: function DeleteAddressModal_Template(rf, ctx) {
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
        \u0275\u0275listener("click", function DeleteAddressModal_Template_app_button_click_9_listener() {
          return ctx.modal.dismiss("Cancel");
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "app-button", 5);
        \u0275\u0275listener("click", function DeleteAddressModal_Template_app_button_click_12_listener() {
          return ctx.delete();
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 11, "delete_item"), "?");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 13, "delete_text"));
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-outline btn-md fw-bold");
        \u0275\u0275property("spinner", false)("id", "delete_no_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "no"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "delete_yes_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "yes"), " ");
      }
    }, dependencies: [TranslateModule, Button, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteAddressModal, [{
    type: Component,
    args: [{ selector: "app-delete-address-modal", imports: [TranslateModule, Button], template: `<div class="modal-body">
  <i class="ri-delete-bin-line icon-box"></i>
  <h5 class="modal-title">{{ 'delete_item' | translate }}?</h5>
  <p>{{ 'delete_text' | translate }}</p>
  <div class="button-box">
    <app-button
      [class]="'btn btn-outline btn-md fw-bold'"
      [spinner]="false"
      [id]="'delete_no_btn'"
      (click)="modal.dismiss('Cancel')"
    >
      {{ 'no' | translate }}
    </app-button>
    <app-button [class]="'btn btn-solid'" [id]="'delete_yes_btn'" (click)="delete()">
      {{ 'yes' | translate }}
    </app-button>
  </div>
</div>
` }]
  }], null, { userAddress: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteAddressModal, { className: "DeleteAddressModal", filePath: "src/app/shared/components/widgets/modal/delete-address-modal/delete-address-modal.ts", lineNumber: 17 });
})();

export {
  DeleteAddressModal
};
//# sourceMappingURL=chunk-O6GLGZ7N.js.map
