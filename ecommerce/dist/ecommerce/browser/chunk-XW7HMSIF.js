import {
  ConfirmationModal
} from "./chunk-HJHKGZKU.js";
import {
  Breadcrumb
} from "./chunk-3DSWFFIY.js";
import {
  LogoutAction
} from "./chunk-YNKOI4V7.js";
import "./chunk-DXIDFC26.js";
import {
  AccountService,
  AccountState,
  UpdateUserProfileAction
} from "./chunk-ROK6B4C2.js";
import "./chunk-6I2UIIRS.js";
import "./chunk-OE35GDC6.js";
import "./chunk-RWFLVE5E.js";
import "./chunk-LWNWQPUU.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-6R3AQVTF.js";
import "./chunk-HBLN46Q5.js";
import "./chunk-G25K32MJ.js";
import {
  NgbModal
} from "./chunk-MLCQBQYT.js";
import "./chunk-MXUZ2ZBZ.js";
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
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/sidebar/sidebar.ts
var _c0 = () => ["active"];
var _c1 = () => ["/account/dashboard"];
var _c2 = () => ["/account/order"];
var _c3 = () => ["/account/refund"];
var _c4 = () => ["/account/addresses"];
function Sidebar_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.user$)) == null ? null : tmp_1_0.profile_image == null ? null : tmp_1_0.profile_image.original_url, \u0275\u0275sanitizeUrl);
  }
}
function Sidebar_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_1_0 = \u0275\u0275pipeBind1(3, 1, ctx_r0.user$)) == null ? null : tmp_1_0.name == null ? null : (tmp_1_0 = tmp_1_0.name.charAt(0)) == null ? null : (tmp_1_0 = tmp_1_0.toString()) == null ? null : tmp_1_0.toUpperCase());
  }
}
function Sidebar_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function Sidebar_Conditional_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.uploadImage("remove"));
    });
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementEnd();
  }
}
var Sidebar = class _Sidebar {
  constructor() {
    this.store = inject(Store);
    this.modal = inject(NgbModal);
    this.accountService = inject(AccountService);
    this.user$ = this.store.select(AccountState.user);
  }
  logout() {
    const modal = this.modal.open(ConfirmationModal, { centered: true, windowClass: "" });
    modal.componentInstance.confirm.subscribe((val) => {
      if (val === true) {
        this.store.dispatch(new LogoutAction());
        this.modal.dismissAll();
      }
    });
  }
  closeMenu() {
    this.accountService.isOpenMenu = false;
  }
  uploadImage(event) {
    if (event?.target?.files) {
      let form = new FormData();
      form.append("profile_image", event.target.files[0]);
      form.append("_method", "PUT");
      this.store.dispatch(new UpdateUserProfileAction(form));
    } else {
      let form = new FormData();
      form.append("profile_image_id", "");
      form.append("_method", "PUT");
      this.store.dispatch(new UpdateUserProfileAction(form));
    }
  }
  static {
    this.\u0275fac = function Sidebar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Sidebar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sidebar, selectors: [["app-sidebar"]], decls: 56, vars: 54, consts: [[1, "dashboard-sidebar"], [1, "btn", "back-btn", 3, "click"], [1, "ri-close-line"], [1, "profile-top"], [1, "profile-top-box"], [1, "profile-image"], [1, "position-relative", "h-100"], ["alt", "profile", 1, "update_img", 3, "src"], [1, "user-round"], [1, "user-icon"], ["type", "file", "accept", "image/*", 3, "change"], [1, "ri-image-edit-line", "d-lg-block", "d-none"], [1, "ri-pencil-fill", "edit-icon", "d-lg-none"], [1, "user-icon-2"], [1, "profile-detail"], [1, "faq-tab"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], [1, "nav-link", 3, "routerLinkActive", "routerLink"], [1, "ri-home-line"], [1, "ri-file-text-line"], [1, "ri-arrow-go-back-line"], [1, "ri-map-pin-line"], ["role", "presentation", 1, "nav-item", "logout-cls"], ["href", "javascript:void(0)", 1, "btn", "loagout-btn", 3, "click"], [1, "ri-logout-box-r-line"], [1, "user-icon-2", 3, "click"]], template: function Sidebar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function Sidebar_Template_button_click_1_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6);
        \u0275\u0275conditionalCreate(10, Sidebar_Conditional_10_Template, 2, 3, "img", 7);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275pipe(12, "async");
        \u0275\u0275conditionalBranchCreate(13, Sidebar_Conditional_13_Template, 4, 3, "div", 8);
        \u0275\u0275elementStart(14, "div", 9)(15, "input", 10);
        \u0275\u0275listener("change", function Sidebar_Template_input_change_15_listener($event) {
          return ctx.uploadImage($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "i", 11)(17, "i", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(18, Sidebar_Conditional_18_Template, 2, 0, "div", 13);
        \u0275\u0275pipe(19, "async");
        \u0275\u0275pipe(20, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 14)(22, "h5");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "async");
        \u0275\u0275pipe(25, "titlecase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h6");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15)(30, "ul", 16)(31, "li", 17)(32, "a", 18);
        \u0275\u0275element(33, "i", 19);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "li", 17)(37, "a", 18);
        \u0275\u0275element(38, "i", 20);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "li", 17)(42, "a", 18);
        \u0275\u0275element(43, "i", 21);
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "li", 17)(47, "a", 18);
        \u0275\u0275element(48, "i", 22);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "li", 23)(52, "a", 24);
        \u0275\u0275listener("click", function Sidebar_Template_a_click_52_listener() {
          return ctx.logout();
        });
        \u0275\u0275element(53, "i", 25);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275classProp("open", ctx.accountService.isOpenMenu);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 20, "close"));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(11, 22, ctx.user$)) == null ? null : tmp_2_0.profile_image) && ((tmp_2_0 = \u0275\u0275pipeBind1(12, 24, ctx.user$)) == null ? null : tmp_2_0.profile_image == null ? null : tmp_2_0.profile_image.original_url) ? 10 : 13);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(((tmp_3_0 = \u0275\u0275pipeBind1(19, 26, ctx.user$)) == null ? null : tmp_3_0.profile_image) && ((tmp_3_0 = \u0275\u0275pipeBind1(20, 28, ctx.user$)) == null ? null : tmp_3_0.profile_image == null ? null : tmp_3_0.profile_image.original_url) ? 18 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 32, (tmp_4_0 = \u0275\u0275pipeBind1(24, 30, ctx.user$)) == null ? null : tmp_4_0.name));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate((tmp_5_0 = \u0275\u0275pipeBind1(28, 34, ctx.user$)) == null ? null : tmp_5_0.email);
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(46, _c0))("routerLink", \u0275\u0275pureFunction0(47, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 36, "dashboard"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(48, _c0))("routerLink", \u0275\u0275pureFunction0(49, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(40, 38, "my_orders"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(50, _c0))("routerLink", \u0275\u0275pureFunction0(51, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 40, "refund_history"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(52, _c0))("routerLink", \u0275\u0275pureFunction0(53, _c4));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 42, "saved_address"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 44, "logout"), " ");
      }
    }, dependencies: [RouterModule, RouterLink, RouterLinkActive, TranslateModule, TranslatePipe, AsyncPipe, TitleCasePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{ selector: "app-sidebar", imports: [RouterModule, TranslateModule, AsyncPipe, TitleCasePipe], template: `<div class="dashboard-sidebar" [class.open]="accountService.isOpenMenu">\r
  <button class="btn back-btn" (click)="closeMenu()">\r
    <i class="ri-close-line"></i>\r
    <span>{{ 'close' | translate }}</span>\r
  </button>\r
  <div class="profile-top">\r
    <div class="profile-top-box">\r
      <div class="profile-image">\r
        <div class="position-relative h-100">\r
          @if((user$ | async)?.profile_image && (user$ | async)?.profile_image?.original_url){\r
          <img\r
            [src]="(user$ | async)?.profile_image?.original_url"\r
            class="update_img"\r
            alt="profile"\r
          />\r
          }@else {\r
          <div class="user-round">\r
            <h4>{{ (user$ | async)?.name?.charAt(0)?.toString()?.toUpperCase() }}</h4>\r
          </div>\r
          }\r
          <div class="user-icon">\r
            <input type="file" (change)="uploadImage($event)" accept="image/*" />\r
            <i class="ri-image-edit-line d-lg-block d-none"></i>\r
            <i class="ri-pencil-fill edit-icon d-lg-none"></i>\r
          </div>\r
        </div>\r
      </div>\r
\r
      @if((user$ | async)?.profile_image && (user$ | async)?.profile_image?.original_url){\r
      <div class="user-icon-2" (click)="uploadImage('remove')">\r
        <i class="ri-close-line"></i>\r
      </div>\r
      }\r
    </div>\r
    <div class="profile-detail">\r
      <h5>{{ (user$ | async)?.name | titlecase }}</h5>\r
      <h6>{{ (user$ | async)?.email }}</h6>\r
    </div>\r
  </div>\r
\r
  <div class="faq-tab">\r
    <ul class="nav nav-tabs" id="pills-tab" role="tablist">\r
      <li class="nav-item" role="presentation">\r
        <a class="nav-link" [routerLinkActive]="['active']" [routerLink]="['/account/dashboard']">\r
          <i class="ri-home-line"></i> {{ 'dashboard' | translate }}\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" role="presentation">\r
        <a class="nav-link" [routerLinkActive]="['active']" [routerLink]="['/account/order']">\r
          <i class="ri-file-text-line"></i>{{ 'my_orders' | translate }}\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" role="presentation">\r
        <a class="nav-link" [routerLinkActive]="['active']" [routerLink]="['/account/refund']">\r
          <i class="ri-arrow-go-back-line"></i> {{ 'refund_history' | translate }}\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" role="presentation">\r
        <a class="nav-link" [routerLinkActive]="['active']" [routerLink]="['/account/addresses']">\r
          <i class="ri-map-pin-line"></i> {{ 'saved_address' | translate }}\r
        </a>\r
      </li>\r
\r
      <li class="nav-item logout-cls" role="presentation">\r
        <a href="javascript:void(0)" class="btn loagout-btn" (click)="logout()">\r
          <i class="ri-logout-box-r-line"></i> {{ 'logout' | translate }}\r
        </a>\r
      </li>\r
    </ul>\r
  </div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sidebar, { className: "Sidebar", filePath: "src/app/components/account/sidebar/sidebar.ts", lineNumber: 23 });
})();

// src/app/components/account/account.ts
var Account = class _Account {
  constructor() {
    this.router = inject(Router);
    this.accountService = inject(AccountService);
    this.breadcrumb = {
      title: "Dashboard",
      items: [{ label: "Dashboard", active: false }]
    };
    this.router.events.subscribe(() => {
      this.breadcrumb.title = this.router?.url?.split("?")[0]?.split("/")?.pop();
      if (this.router?.url.includes("order/details")) {
        this.breadcrumb.title = "Order";
      }
      this.breadcrumb.items = [];
      this.breadcrumb.items.push({ label: this.breadcrumb.title, active: false });
    });
  }
  openMenu() {
    this.accountService.isOpenMenu = true;
  }
  static {
    this.\u0275fac = function Account_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Account)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Account, selectors: [["app-account"]], decls: 13, vars: 4, consts: [[3, "breadcrumb"], [1, "dashboard-section", "section-b-space", "user-dashboard-section"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9", "position-relative"], ["id", "top-tabContent", 1, "faq-content", "tab-content"], [1, "show-btn", "btn", 3, "click"], ["id", "info", 1, "tab-pane", "fade", "show", "active"]], template: function Account_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "app-sidebar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "button", 7);
        \u0275\u0275listener("click", function Account_Template_button_click_8_listener() {
          return ctx.openMenu();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275element(12, "router-outlet");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 2, "show_menu"));
      }
    }, dependencies: [RouterModule, RouterOutlet, TranslateModule, Breadcrumb, Sidebar, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Account, [{
    type: Component,
    args: [{ selector: "app-account", imports: [RouterModule, TranslateModule, Breadcrumb, Sidebar], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />
<section class="dashboard-section section-b-space user-dashboard-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <app-sidebar />
      </div>
      <div class="col-lg-9 position-relative">
        <div class="faq-content tab-content" id="top-tabContent">
          <button class="show-btn btn" (click)="openMenu()">{{ 'show_menu' | translate }}</button>
          <div class="tab-pane fade show active" id="info">
            <router-outlet />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Account, { className: "Account", filePath: "src/app/components/account/account.ts", lineNumber: 17 });
})();
export {
  Account
};
//# sourceMappingURL=chunk-XW7HMSIF.js.map
