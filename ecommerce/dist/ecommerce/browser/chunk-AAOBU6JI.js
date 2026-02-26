import {
  DeleteAddressModal
} from "./chunk-O6GLGZ7N.js";
import {
  AddressModal
} from "./chunk-VSDJPC47.js";
import "./chunk-XW3B4B4C.js";
import "./chunk-V3KVJNBA.js";
import {
  AccountState,
  DeleteAddressAction
} from "./chunk-HP6MYKGT.js";
import "./chunk-RJ7FCDYY.js";
import "./chunk-OOCN6Z4U.js";
import "./chunk-RWFLVE5E.js";
import "./chunk-LZFLFOAY.js";
import "./chunk-6347PIFH.js";
import "./chunk-MUAYKWHK.js";
import "./chunk-2K52HGL6.js";
import {
  NgbModal
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
  AsyncPipe,
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
} from "./chunk-3KEERULZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/addresses/addresses.ts
var _forTrack0 = ($index, $item) => $item.id;
function Addresses_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 12)(10, "div", 13)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 15)(24, "a", 16);
    \u0275\u0275listener("click", function Addresses_Conditional_11_For_3_Template_a_click_24_listener() {
      const address_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.AddressModal(address_r2));
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 16);
    \u0275\u0275listener("click", function Addresses_Conditional_11_For_3_Template_a_click_27_listener() {
      const address_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeAddress(address_r2));
    });
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const address_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 14, (tmp_12_0 = \u0275\u0275pipeBind1(5, 12, ctx_r2.user$)) == null ? null : tmp_12_0.name), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(address_r2 == null ? null : address_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", address_r2 == null ? null : address_r2.street, ", ", address_r2 == null ? null : address_r2.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", address_r2 == null ? null : address_r2.state == null ? null : address_r2.state.name, ", ", address_r2 == null ? null : address_r2.country == null ? null : address_r2.country.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(address_r2 == null ? null : address_r2.pincode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "phone"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("+", address_r2 == null ? null : address_r2.country_code, " ", address_r2 == null ? null : address_r2.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 18, "edit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 20, "remove"));
  }
}
function Addresses_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8);
    \u0275\u0275repeaterCreate(2, Addresses_Conditional_11_For_3_Template, 30, 22, "div", 9, _forTrack0);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater((tmp_1_0 = \u0275\u0275pipeBind1(4, 0, ctx_r2.user$)) == null ? null : tmp_1_0.address);
  }
}
function Addresses_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 17);
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
    this.user$ = inject(Store).select(AccountState.user);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Addresses, selectors: [["app-addresses"]], decls: 14, vars: 9, consts: [[1, "row"], [1, "col-12"], [1, "card", "mt-0"], [1, "card-body"], [1, "top-sec"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-solid", 3, "click"], [1, "address-book-section"], [3, "class", "image", "text", "description"], [1, "row", "g-4"], [1, "select-box", "active", "col-xl-4", "col-md-6"], [1, "address-box"], [1, "top"], [1, "middle"], [1, "address"], [1, "number"], [1, "bottom"], ["href", "javascript:void(0)", 1, "bottom_btn", 3, "click"], [3, "image", "text", "description"]], template: function Addresses_Template(rf, ctx) {
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
        \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(12, 7, ctx.user$)) == null ? null : tmp_2_0.address == null ? null : tmp_2_0.address.length) ? 11 : 13);
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
        @if((user$ | async)?.address?.length){
        <div class="address-book-section">
          <div class="row g-4">
            @for(address of (user$ | async)?.address; track address.id; let i = $index){
            <div class="select-box active col-xl-4 col-md-6">
              <div class="address-box">
                <div class="top">
                  <h6>{{ (user$ | async)?.name | titlecase }} <span>{{ address?.title }}</span></h6>
                </div>
                <div class="middle">
                  <div class="address">
                    <p>{{ address?.street }}, {{ address?.city }}</p>
                    <p>{{ address?.state?.name }}, {{ address?.country?.name }}</p>
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Addresses, { className: "Addresses", filePath: "src/app/components/account/addresses/addresses.ts", lineNumber: 23 });
})();
export {
  Addresses
};
//# sourceMappingURL=chunk-AAOBU6JI.js.map
