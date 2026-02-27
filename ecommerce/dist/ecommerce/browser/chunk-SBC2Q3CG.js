import {
  AddressModal
} from "./chunk-MD6IUNWO.js";
import "./chunk-XW3B4B4C.js";
import "./chunk-3YTNHNM3.js";
import {
  AccountState,
  DeleteAddressAction,
  GetAddressesAction
} from "./chunk-ROK6B4C2.js";
import {
  Button
} from "./chunk-6I2UIIRS.js";
import "./chunk-OE35GDC6.js";
import "./chunk-RWFLVE5E.js";
import "./chunk-LWNWQPUU.js";
import "./chunk-6R3AQVTF.js";
import "./chunk-HBLN46Q5.js";
import "./chunk-G25K32MJ.js";
import {
  NgbActiveModal,
  NgbModal
} from "./chunk-MLCQBQYT.js";
import "./chunk-MXUZ2ZBZ.js";
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
  TitleCasePipe
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  Input,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

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

// src/app/components/account/addresses/addresses.ts
var _forTrack0 = ($index, $item) => $item.id;
function Addresses_Conditional_11_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function Addresses_Conditional_11_For_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", address_r2 == null ? null : address_r2.state_name, "", (address_r2 == null ? null : address_r2.country_name) ? ", " + (address_r2 == null ? null : address_r2.country_name) : "");
  }
}
function Addresses_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275conditionalCreate(6, Addresses_Conditional_11_For_3_Conditional_6_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15)(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, Addresses_Conditional_11_For_3_Conditional_11_Template, 2, 2, "p");
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 16)(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 17)(21, "a", 18);
    \u0275\u0275listener("click", function Addresses_Conditional_11_For_3_Template_a_click_21_listener() {
      const address_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.AddressModal(address_r2));
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 18);
    \u0275\u0275listener("click", function Addresses_Conditional_11_For_3_Template_a_click_24_listener() {
      const address_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeAddress(address_r2));
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const address_r2 = ctx.$implicit;
    \u0275\u0275classProp("active", address_r2 == null ? null : address_r2.is_default);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 13, address_r2 == null ? null : address_r2.title), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((address_r2 == null ? null : address_r2.is_default) ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", address_r2 == null ? null : address_r2.street, ", ", address_r2 == null ? null : address_r2.city);
    \u0275\u0275advance();
    \u0275\u0275conditional((address_r2 == null ? null : address_r2.state_name) || (address_r2 == null ? null : address_r2.country_name) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(address_r2 == null ? null : address_r2.pincode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 15, "phone"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("+", address_r2 == null ? null : address_r2.country_code, " ", address_r2 == null ? null : address_r2.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 17, "edit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 19, "remove"));
  }
}
function Addresses_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8);
    \u0275\u0275repeaterCreate(2, Addresses_Conditional_11_For_3_Template, 27, 21, "div", 9, _forTrack0);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 0, ctx_r2.addresses$));
  }
}
function Addresses_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 19);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_address"))("description", \u0275\u0275pipeBind1(2, 7, "no_address_yet"));
  }
}
var Addresses = class _Addresses {
  constructor() {
    this.store = inject(Store);
    this.modal = inject(NgbModal);
    this.addresses$ = this.store.select(AccountState.addresses);
    this.store.dispatch(new GetAddressesAction());
  }
  AddressModal(address) {
    const modal = this.modal.open(AddressModal, { centered: true, windowClass: "theme-modal-2" });
    if (address) {
      modal.componentInstance.userAddress = address;
    }
  }
  removeAddress(address) {
    const modal = this.modal.open(DeleteAddressModal, { centered: true });
    if (address) {
      modal.componentInstance.userAddress = address;
    }
  }
  delete(action, data) {
    if (action == "delete" && data)
      this.store.dispatch(new DeleteAddressAction(data.id));
  }
  static {
    this.\u0275fac = function Addresses_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Addresses)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Addresses, selectors: [["app-addresses"]], decls: 14, vars: 9, consts: [[1, "row"], [1, "col-12"], [1, "card", "mt-0"], [1, "card-body"], [1, "top-sec"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-solid", 3, "click"], [1, "address-book-section"], [3, "class", "image", "text", "description"], [1, "row", "g-4"], [1, "select-box", "col-xl-4", "col-md-6", 3, "active"], [1, "select-box", "col-xl-4", "col-md-6"], [1, "address-box"], [1, "top"], [1, "badge", "bg-theme", "ms-2", 2, "font-size", "10px", "vertical-align", "middle"], [1, "middle"], [1, "address"], [1, "number"], [1, "bottom"], ["href", "javascript:void(0)", 1, "bottom_btn", 3, "click"], [3, "image", "text", "description"]], template: function Addresses_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 5);
        \u0275\u0275listener("click", function Addresses_Template_a_click_8_listener() {
          return ctx.AddressModal();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(11, Addresses_Conditional_11_Template, 5, 2, "div", 6);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275conditionalBranchCreate(13, Addresses_Conditional_13_Template, 3, 9, "app-no-data", 7);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "address_book"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("+ ", \u0275\u0275pipeBind1(10, 5, "add_new"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(12, 7, ctx.addresses$)) == null ? null : tmp_2_0.length) ? 11 : 13);
      }
    }, dependencies: [TranslateModule, NoData, TranslatePipe, AsyncPipe, TitleCasePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Addresses, [{
    type: Component,
    args: [{ selector: "app-addresses", imports: [TranslateModule, NoData, AsyncPipe, TitleCasePipe], template: `<div class="row">
  <div class="col-12">
    <div class="card mt-0">
      <div class="card-body">
        <div class="top-sec">
          <h3>{{ 'address_book' | translate }}</h3>
          <a href="javascript:void(0)" class="btn btn-sm btn-solid" (click)="AddressModal()"
            >+ {{ 'add_new' | translate }}</a
          >
        </div>
        @if((addresses$ | async)?.length){
        <div class="address-book-section">
          <div class="row g-4">
            @for(address of (addresses$ | async); track address.id; let i = $index){
            <div class="select-box col-xl-4 col-md-6" [class.active]="address?.is_default">
              <div class="address-box">
                <div class="top">
                  <h6>
                    {{ address?.title | titlecase }}
                    @if(address?.is_default){
                    <span class="badge bg-theme ms-2" style="font-size:10px;vertical-align:middle">Default</span>
                    }
                  </h6>
                </div>
                <div class="middle">
                  <div class="address">
                    <p>{{ address?.street }}, {{ address?.city }}</p>
                    @if(address?.state_name || address?.country_name){
                    <p>{{ address?.state_name }}{{ address?.country_name ? ', ' + address?.country_name : '' }}</p>
                    }
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
                  <a href="javascript:void(0)" class="bottom_btn" (click)="AddressModal(address)"
                    >{{ 'edit' | translate }}</a
                  >
                  <a href="javascript:void(0)" class="bottom_btn" (click)="removeAddress(address)"
                    >{{ 'remove' | translate }}</a
                  >
                </div>
              </div>
            </div>
            }
          </div>
        </div>
        } @else {
        <app-no-data
          [class]="'no-data-added'"
          [image]="'assets/svg/empty-items.svg'"
          [text]="'no_address' | translate"
          [description]="'no_address_yet' | translate"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Addresses, { className: "Addresses", filePath: "src/app/components/account/addresses/addresses.ts", lineNumber: 22 });
})();
export {
  Addresses
};
//# sourceMappingURL=chunk-SBC2Q3CG.js.map
