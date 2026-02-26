import {
  AccountState,
  GetUserDetailsAction
} from "./chunk-HP6MYKGT.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6347PIFH.js";
import "./chunk-MUAYKWHK.js";
import "./chunk-2K52HGL6.js";
import "./chunk-QQXAO3XE.js";
import "./chunk-JLWO6B35.js";
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3KEERULZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/dashboard/dashboard.ts
function Dashboard_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const user_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", user_r1.profile_image.original_url, \u0275\u0275sanitizeUrl);
  }
}
function Dashboard_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitials(user_r1));
  }
}
function Dashboard_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.email);
  }
}
function Dashboard_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.phone || user_r1.phoneNumber);
  }
}
function Dashboard_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Member since ", \u0275\u0275pipeBind2(3, 1, user_r1.created, "MMM yyyy"), " ");
  }
}
function Dashboard_Conditional_1_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275text(3, "Member Since");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 36);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 1, user_r1.created, "dd MMM yyyy"));
  }
}
function Dashboard_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275conditionalCreate(2, Dashboard_Conditional_1_Conditional_2_Template, 1, 1, "img", 4)(3, Dashboard_Conditional_1_Conditional_3_Template, 2, 1, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "h2", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275conditionalCreate(8, Dashboard_Conditional_1_Conditional_8_Template, 3, 1, "span");
    \u0275\u0275conditionalCreate(9, Dashboard_Conditional_1_Conditional_9_Template, 3, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
    \u0275\u0275element(12, "i", 11);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, Dashboard_Conditional_1_Conditional_15_Template, 4, 4, "span", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 13)(17, "a", 14)(18, "div", 15);
    \u0275\u0275element(19, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17)(21, "h5");
    \u0275\u0275text(22, "Shop Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24, "Browse our catalogue");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 19)(27, "div", 20);
    \u0275\u0275element(28, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17)(30, "h5");
    \u0275\u0275text(31, "My Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Track your purchases");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 22)(36, "div", 23);
    \u0275\u0275element(37, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 17)(39, "h5");
    \u0275\u0275text(40, "Saved Addresses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p");
    \u0275\u0275text(42, "Manage delivery locations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "a", 25)(45, "div", 26);
    \u0275\u0275element(46, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 17)(48, "h5");
    \u0275\u0275text(49, "Refund History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p");
    \u0275\u0275text(51, "Track your refunds");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(52, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 28)(54, "div", 29)(55, "div", 30);
    \u0275\u0275element(56, "i", 31);
    \u0275\u0275text(57, " Personal Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 32)(59, "div", 33)(60, "span", 34);
    \u0275\u0275element(61, "i", 35);
    \u0275\u0275text(62, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "strong", 36);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 33)(66, "span", 34);
    \u0275\u0275element(67, "i", 37);
    \u0275\u0275text(68, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "strong", 36);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 33)(72, "span", 34);
    \u0275\u0275element(73, "i", 38);
    \u0275\u0275text(74, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "strong", 36);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 33)(78, "span", 34);
    \u0275\u0275element(79, "i", 39);
    \u0275\u0275text(80, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "strong", 36);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 33)(84, "span", 34);
    \u0275\u0275element(85, "i", 11);
    \u0275\u0275text(86, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "strong", 36);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(90, Dashboard_Conditional_1_Conditional_90_Template, 7, 4, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 29)(92, "div", 30);
    \u0275\u0275element(93, "i", 40);
    \u0275\u0275text(94, " Account Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 41)(96, "a", 42)(97, "div", 43);
    \u0275\u0275element(98, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 44)(100, "h5");
    \u0275\u0275text(101, "Manage Addresses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "p");
    \u0275\u0275text(103, "Add or update delivery addresses");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(104, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "a", 46)(106, "div", 47);
    \u0275\u0275element(107, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 44)(109, "h5");
    \u0275\u0275text(110, "Order History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p");
    \u0275\u0275text(112, "View all past orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(113, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "a", 48)(115, "div", 49);
    \u0275\u0275element(116, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 44)(118, "h5");
    \u0275\u0275text(119, "Earning Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "p");
    \u0275\u0275text(121, "Check your loyalty points");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(122, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "a", 51)(124, "div", 52);
    \u0275\u0275element(125, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 44)(127, "h5");
    \u0275\u0275text(128, "Refund History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "p");
    \u0275\u0275text(130, "Track your refund requests");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(131, "i", 45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((user_r1.profile_image == null ? null : user_r1.profile_image.original_url) ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getFullName(user_r1) || user_r1.userName || "Welcome");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(user_r1.email ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r1.phone || user_r1.phoneNumber ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 12, ctx_r1.getRoleName(user_r1)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(user_r1.created ? 15 : -1);
    \u0275\u0275advance(49);
    \u0275\u0275textInterpolate(ctx_r1.getFullName(user_r1) || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(user_r1.userName || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(user_r1.email || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(user_r1.phone || user_r1.phoneNumber || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 14, ctx_r1.getRoleName(user_r1)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(user_r1.created ? 90 : -1);
  }
}
function Dashboard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 55);
    \u0275\u0275element(2, "div", 56);
    \u0275\u0275elementStart(3, "div", 57);
    \u0275\u0275element(4, "div", 58)(5, "div", 59)(6, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 61);
    \u0275\u0275element(8, "div", 62)(9, "div", 62)(10, "div", 62)(11, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 61);
    \u0275\u0275element(13, "div", 63)(14, "div", 63);
    \u0275\u0275elementEnd()();
  }
}
var Dashboard = class _Dashboard {
  constructor() {
    this.store = inject(Store);
    this.user$ = this.store.select(AccountState.user);
    if (!this.store.selectSnapshot(AccountState.user)) {
      this.store.dispatch(new GetUserDetailsAction());
    }
  }
  getInitials(user) {
    const name = this.getFullName(user);
    if (!name)
      return "?";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1)
      return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }
  getFullName(user) {
    if (!user)
      return "";
    return [user.firstName, user.middleName, user.lastName].filter(Boolean).join(" ") || user.name || "";
  }
  getRoleName(user) {
    if (!user?.role)
      return "Member";
    if (typeof user.role === "string")
      return user.role;
    return user.role?.name || "Member";
  }
  static {
    this.\u0275fac = function Dashboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Dashboard)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 4, vars: 3, consts: [[1, "user-dashboard"], [1, "dashboard-state", "loading"], [1, "profile-hero"], [1, "avatar-wrap"], ["alt", "profile", 1, "avatar-img", 3, "src"], [1, "avatar-initials"], [1, "hero-info"], [1, "hero-name"], [1, "hero-sub"], [1, "hero-badges"], [1, "badge", "role-badge"], [1, "ri-shield-user-line"], [1, "badge", "since-badge"], [1, "quick-actions"], ["routerLink", "/collections", 1, "action-card"], [1, "action-icon", "ai-green"], [1, "ri-store-2-line"], [1, "action-body"], [1, "ri-arrow-right-s-line", "action-arrow"], ["routerLink", "/account/order", 1, "action-card"], [1, "action-icon", "ai-blue"], [1, "ri-file-list-3-line"], ["routerLink", "/account/addresses", 1, "action-card"], [1, "action-icon", "ai-sky"], [1, "ri-map-pin-line"], ["routerLink", "/account/refund", 1, "action-card"], [1, "action-icon", "ai-orange"], [1, "ri-money-dollar-circle-line"], [1, "info-grid"], [1, "info-card"], [1, "card-title"], [1, "ri-user-3-line"], [1, "detail-list"], [1, "detail-row"], [1, "detail-label"], [1, "ri-user-line"], [1, "detail-value"], [1, "ri-at-line"], [1, "ri-mail-line"], [1, "ri-smartphone-line"], [1, "ri-settings-3-line"], [1, "settings-list"], ["routerLink", "/account/addresses", 1, "settings-item"], [1, "settings-icon", "si-blue"], [1, "settings-body"], [1, "ri-arrow-right-s-line"], ["routerLink", "/account/order", 1, "settings-item"], [1, "settings-icon", "si-green"], ["routerLink", "/account/point", 1, "settings-item"], [1, "settings-icon", "si-amber"], [1, "ri-coin-line"], ["routerLink", "/account/refund", 1, "settings-item"], [1, "settings-icon", "si-red"], [1, "ri-calendar-check-line"], [1, "ri-calendar-line"], [1, "skeleton-hero-wrap"], [1, "skeleton", "skeleton-avatar"], [1, "skeleton-lines"], [1, "skeleton", "skeleton-name"], [1, "skeleton", "skeleton-sub"], [1, "skeleton", "skeleton-badges"], [1, "skeleton-row"], [1, "skeleton", "skeleton-action"], [1, "skeleton", "skeleton-card"]], template: function Dashboard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, Dashboard_Conditional_1_Template, 132, 16);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275conditionalBranchCreate(3, Dashboard_Conditional_3_Template, 15, 0, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(2, 1, ctx.user$)) ? 1 : 3, tmp_0_0);
      }
    }, dependencies: [RouterModule, RouterLink, AsyncPipe, DatePipe, TitleCasePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.user-dashboard[_ngcontent-%COMP%] {\n  --ink: #1a2332;\n  --muted: #5a6678;\n  --accent: var(--theme-color, #c2603f);\n  --accent-light: rgba(194, 96, 63, 0.1);\n  --card: #ffffff;\n  --border: rgba(26, 35, 50, 0.1);\n  --shadow-sm: 0 2px 12px rgba(26, 35, 50, 0.06);\n  --shadow-md: 0 8px 28px rgba(26, 35, 50, 0.1);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.profile-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 28px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent) 0%,\n      color-mix(in srgb, var(--accent) 70%, #0a2540) 100%);\n  border-radius: 20px;\n  color: #ffffff;\n  position: relative;\n  overflow: hidden;\n}\n.profile-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 260px;\n  height: 260px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  top: -100px;\n  right: -80px;\n  pointer-events: none;\n}\n.profile-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  bottom: -80px;\n  left: 60px;\n  pointer-events: none;\n}\n.avatar-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 84px;\n  height: 84px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  letter-spacing: 0.04em;\n}\n.hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.hero-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 700;\n  color: #ffffff;\n  text-transform: none;\n  letter-spacing: 0.01em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.hero-sub[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.hero-sub[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 2px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n}\n.badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.role-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n}\n.since-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.85);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.action-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  box-shadow: var(--shadow-sm);\n  text-decoration: none;\n  color: var(--ink);\n  transition: transform 0.22s ease, box-shadow 0.22s ease;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n  color: var(--ink);\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.action-icon.ai-green[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #10b981;\n}\n.action-icon.ai-blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #3b82f6;\n}\n.action-icon.ai-sky[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.12);\n  color: #0ea5e9;\n}\n.action-icon.ai-orange[_ngcontent-%COMP%] {\n  background: rgba(232, 124, 62, 0.12);\n  color: #e87c3e;\n}\n.action-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.action-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n  text-transform: none;\n  letter-spacing: 0.01em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.action-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  color: var(--muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.action-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--muted);\n  flex-shrink: 0;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  box-shadow: var(--shadow-sm);\n}\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: var(--ink);\n  font-weight: 700;\n}\n.card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 18px;\n}\n.detail-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 11px 0;\n  border-bottom: 1px solid var(--border);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.detail-row[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.detail-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--muted);\n  white-space: nowrap;\n}\n.detail-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--accent);\n  opacity: 0.7;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ink);\n  text-align: right;\n  word-break: break-word;\n}\n.settings-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.settings-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px;\n  border-radius: 14px;\n  border: 1px solid var(--border);\n  background: #fafafa;\n  color: var(--ink);\n  text-decoration: none;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.settings-item[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  transform: translateX(3px);\n  color: var(--ink);\n}\n.settings-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:last-child {\n  font-size: 18px;\n  color: var(--muted);\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.settings-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.settings-icon.si-blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #3b82f6;\n}\n.settings-icon.si-green[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #10b981;\n}\n.settings-icon.si-amber[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n}\n.settings-icon.si-red[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #ef4444;\n}\n.settings-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.settings-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n  text-transform: none;\n  letter-spacing: 0.01em;\n}\n.settings-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  color: var(--muted);\n}\n.dashboard-state.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.skeleton[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 0%,\n      #fafafa 50%,\n      #f0f0f0 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease infinite;\n  border-radius: 12px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.skeleton-hero-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 28px 32px;\n  background: #f5f5f5;\n  border-radius: 20px;\n}\n.skeleton-avatar[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.skeleton-lines[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skeleton-name[_ngcontent-%COMP%] {\n  height: 28px;\n  width: 55%;\n}\n.skeleton-sub[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 70%;\n}\n.skeleton-badges[_ngcontent-%COMP%] {\n  height: 22px;\n  width: 40%;\n}\n.skeleton-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n  grid-template-columns: repeat(4, 1fr);\n}\n.skeleton-row[_ngcontent-%COMP%]:last-child {\n  grid-template-columns: repeat(2, 1fr);\n}\n.skeleton-action[_ngcontent-%COMP%] {\n  height: 72px;\n  border-radius: 16px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 280px;\n  border-radius: 20px;\n}\n@media (max-width: 1199px) {\n  .quick-actions[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .skeleton-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .profile-hero[_ngcontent-%COMP%] {\n    padding: 22px 20px;\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .hero-name[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .skeleton-hero-wrap[_ngcontent-%COMP%] {\n    padding: 22px 20px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 575px) {\n  .quick-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .detail-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .detail-value[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .skeleton-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .skeleton-row[_ngcontent-%COMP%]:last-child {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [AsyncPipe, RouterModule, DatePipe, TitleCasePipe], template: `<div class="user-dashboard">

  @if(user$ | async; as user) {

  <!-- Profile Hero -->
  <div class="profile-hero">
    <div class="avatar-wrap">
      @if(user.profile_image?.original_url) {
      <img [src]="user.profile_image!.original_url" class="avatar-img" alt="profile" />
      } @else {
      <div class="avatar-initials">{{ getInitials(user) }}</div>
      }
    </div>
    <div class="hero-info">
      <h2 class="hero-name">{{ getFullName(user) || user.userName || 'Welcome' }}</h2>
      <div class="hero-sub">
        @if(user.email) {
        <span><i class="ri-mail-line"></i>{{ user.email }}</span>
        }
        @if(user.phone || user.phoneNumber) {
        <span><i class="ri-smartphone-line"></i>{{ user.phone || user.phoneNumber }}</span>
        }
      </div>
      <div class="hero-badges">
        <span class="badge role-badge">
          <i class="ri-shield-user-line"></i>{{ getRoleName(user) | titlecase }}
        </span>
        @if(user.created) {
        <span class="badge since-badge">
          <i class="ri-calendar-check-line"></i>Member since {{ user.created | date:'MMM yyyy' }}
        </span>
        }
      </div>
    </div>
  </div>

  <!-- Quick Actions -->
  <div class="quick-actions">
    <a class="action-card" routerLink="/collections">
      <div class="action-icon ai-green"><i class="ri-store-2-line"></i></div>
      <div class="action-body">
        <h5>Shop Products</h5>
        <p>Browse our catalogue</p>
      </div>
      <i class="ri-arrow-right-s-line action-arrow"></i>
    </a>
    <a class="action-card" routerLink="/account/order">
      <div class="action-icon ai-blue"><i class="ri-file-list-3-line"></i></div>
      <div class="action-body">
        <h5>My Orders</h5>
        <p>Track your purchases</p>
      </div>
      <i class="ri-arrow-right-s-line action-arrow"></i>
    </a>
    <a class="action-card" routerLink="/account/addresses">
      <div class="action-icon ai-sky"><i class="ri-map-pin-line"></i></div>
      <div class="action-body">
        <h5>Saved Addresses</h5>
        <p>Manage delivery locations</p>
      </div>
      <i class="ri-arrow-right-s-line action-arrow"></i>
    </a>
    <a class="action-card" routerLink="/account/refund">
      <div class="action-icon ai-orange"><i class="ri-money-dollar-circle-line"></i></div>
      <div class="action-body">
        <h5>Refund History</h5>
        <p>Track your refunds</p>
      </div>
      <i class="ri-arrow-right-s-line action-arrow"></i>
    </a>
  </div>

  <!-- Info Grid -->
  <div class="info-grid">

    <!-- Personal Details -->
    <div class="info-card">
      <div class="card-title">
        <i class="ri-user-3-line"></i> Personal Details
      </div>
      <div class="detail-list">
        <div class="detail-row">
          <span class="detail-label"><i class="ri-user-line"></i>Full Name</span>
          <strong class="detail-value">{{ getFullName(user) || '\u2014' }}</strong>
        </div>
        <div class="detail-row">
          <span class="detail-label"><i class="ri-at-line"></i>Username</span>
          <strong class="detail-value">{{ user.userName || '\u2014' }}</strong>
        </div>
        <div class="detail-row">
          <span class="detail-label"><i class="ri-mail-line"></i>Email</span>
          <strong class="detail-value">{{ user.email || '\u2014' }}</strong>
        </div>
        <div class="detail-row">
          <span class="detail-label"><i class="ri-smartphone-line"></i>Phone</span>
          <strong class="detail-value">{{ user.phone || user.phoneNumber || '\u2014' }}</strong>
        </div>
        <div class="detail-row">
          <span class="detail-label"><i class="ri-shield-user-line"></i>Role</span>
          <strong class="detail-value">{{ getRoleName(user) | titlecase }}</strong>
        </div>
        @if(user.created) {
        <div class="detail-row">
          <span class="detail-label"><i class="ri-calendar-line"></i>Member Since</span>
          <strong class="detail-value">{{ user.created | date:'dd MMM yyyy' }}</strong>
        </div>
        }
      </div>
    </div>

    <!-- Account Settings -->
    <div class="info-card">
      <div class="card-title">
        <i class="ri-settings-3-line"></i> Account Settings
      </div>
      <div class="settings-list">
        <a class="settings-item" routerLink="/account/addresses">
          <div class="settings-icon si-blue"><i class="ri-map-pin-line"></i></div>
          <div class="settings-body">
            <h5>Manage Addresses</h5>
            <p>Add or update delivery addresses</p>
          </div>
          <i class="ri-arrow-right-s-line"></i>
        </a>
        <a class="settings-item" routerLink="/account/order">
          <div class="settings-icon si-green"><i class="ri-file-list-3-line"></i></div>
          <div class="settings-body">
            <h5>Order History</h5>
            <p>View all past orders</p>
          </div>
          <i class="ri-arrow-right-s-line"></i>
        </a>
        <a class="settings-item" routerLink="/account/point">
          <div class="settings-icon si-amber"><i class="ri-coin-line"></i></div>
          <div class="settings-body">
            <h5>Earning Points</h5>
            <p>Check your loyalty points</p>
          </div>
          <i class="ri-arrow-right-s-line"></i>
        </a>
        <a class="settings-item" routerLink="/account/refund">
          <div class="settings-icon si-red"><i class="ri-money-dollar-circle-line"></i></div>
          <div class="settings-body">
            <h5>Refund History</h5>
            <p>Track your refund requests</p>
          </div>
          <i class="ri-arrow-right-s-line"></i>
        </a>
      </div>
    </div>

  </div>

  <!-- Loading skeleton -->
  } @else {
  <div class="dashboard-state loading">
    <div class="skeleton-hero-wrap">
      <div class="skeleton skeleton-avatar"></div>
      <div class="skeleton-lines">
        <div class="skeleton skeleton-name"></div>
        <div class="skeleton skeleton-sub"></div>
        <div class="skeleton skeleton-badges"></div>
      </div>
    </div>
    <div class="skeleton-row">
      <div class="skeleton skeleton-action"></div>
      <div class="skeleton skeleton-action"></div>
      <div class="skeleton skeleton-action"></div>
      <div class="skeleton skeleton-action"></div>
    </div>
    <div class="skeleton-row">
      <div class="skeleton skeleton-card"></div>
      <div class="skeleton skeleton-card"></div>
    </div>
  </div>
  }

</div>
`, styles: ['/* src/app/components/account/dashboard/dashboard.scss */\n:host {\n  display: block;\n}\n.user-dashboard {\n  --ink: #1a2332;\n  --muted: #5a6678;\n  --accent: var(--theme-color, #c2603f);\n  --accent-light: rgba(194, 96, 63, 0.1);\n  --card: #ffffff;\n  --border: rgba(26, 35, 50, 0.1);\n  --shadow-sm: 0 2px 12px rgba(26, 35, 50, 0.06);\n  --shadow-md: 0 8px 28px rgba(26, 35, 50, 0.1);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.profile-hero {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 28px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent) 0%,\n      color-mix(in srgb, var(--accent) 70%, #0a2540) 100%);\n  border-radius: 20px;\n  color: #ffffff;\n  position: relative;\n  overflow: hidden;\n}\n.profile-hero::before {\n  content: "";\n  position: absolute;\n  width: 260px;\n  height: 260px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  top: -100px;\n  right: -80px;\n  pointer-events: none;\n}\n.profile-hero::after {\n  content: "";\n  position: absolute;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  bottom: -80px;\n  left: 60px;\n  pointer-events: none;\n}\n.avatar-wrap {\n  flex-shrink: 0;\n  width: 84px;\n  height: 84px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials {\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  letter-spacing: 0.04em;\n}\n.hero-info {\n  flex: 1;\n  min-width: 0;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.hero-name {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 700;\n  color: #ffffff;\n  text-transform: none;\n  letter-spacing: 0.01em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hero-sub {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.hero-sub span {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.hero-sub span i {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.hero-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 2px;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n}\n.badge i {\n  font-size: 13px;\n}\n.role-badge {\n  background: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n}\n.since-badge {\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.85);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.quick-actions {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.action-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  box-shadow: var(--shadow-sm);\n  text-decoration: none;\n  color: var(--ink);\n  transition: transform 0.22s ease, box-shadow 0.22s ease;\n}\n.action-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n  color: var(--ink);\n}\n.action-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.action-icon.ai-green {\n  background: rgba(16, 185, 129, 0.12);\n  color: #10b981;\n}\n.action-icon.ai-blue {\n  background: rgba(59, 130, 246, 0.12);\n  color: #3b82f6;\n}\n.action-icon.ai-sky {\n  background: rgba(14, 165, 233, 0.12);\n  color: #0ea5e9;\n}\n.action-icon.ai-orange {\n  background: rgba(232, 124, 62, 0.12);\n  color: #e87c3e;\n}\n.action-body {\n  flex: 1;\n  min-width: 0;\n}\n.action-body h5 {\n  margin: 0 0 2px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n  text-transform: none;\n  letter-spacing: 0.01em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.action-body p {\n  margin: 0;\n  font-size: 11px;\n  color: var(--muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.action-arrow {\n  font-size: 18px;\n  color: var(--muted);\n  flex-shrink: 0;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n}\n.info-card {\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  box-shadow: var(--shadow-sm);\n}\n.card-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: var(--ink);\n  font-weight: 700;\n}\n.card-title i {\n  color: var(--accent);\n  font-size: 18px;\n}\n.detail-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.detail-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 11px 0;\n  border-bottom: 1px solid var(--border);\n}\n.detail-row:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.detail-row:first-child {\n  padding-top: 0;\n}\n.detail-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--muted);\n  white-space: nowrap;\n}\n.detail-label i {\n  font-size: 15px;\n  color: var(--accent);\n  opacity: 0.7;\n}\n.detail-value {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ink);\n  text-align: right;\n  word-break: break-word;\n}\n.settings-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.settings-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px;\n  border-radius: 14px;\n  border: 1px solid var(--border);\n  background: #fafafa;\n  color: var(--ink);\n  text-decoration: none;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.settings-item:hover {\n  background: #f0f4ff;\n  transform: translateX(3px);\n  color: var(--ink);\n}\n.settings-item > i:last-child {\n  font-size: 18px;\n  color: var(--muted);\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.settings-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.settings-icon.si-blue {\n  background: rgba(59, 130, 246, 0.12);\n  color: #3b82f6;\n}\n.settings-icon.si-green {\n  background: rgba(16, 185, 129, 0.12);\n  color: #10b981;\n}\n.settings-icon.si-amber {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n}\n.settings-icon.si-red {\n  background: rgba(239, 68, 68, 0.12);\n  color: #ef4444;\n}\n.settings-body {\n  flex: 1;\n  min-width: 0;\n}\n.settings-body h5 {\n  margin: 0 0 2px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n  text-transform: none;\n  letter-spacing: 0.01em;\n}\n.settings-body p {\n  margin: 0;\n  font-size: 11px;\n  color: var(--muted);\n}\n.dashboard-state.loading {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.skeleton {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 0%,\n      #fafafa 50%,\n      #f0f0f0 100%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s ease infinite;\n  border-radius: 12px;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.skeleton-hero-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 28px 32px;\n  background: #f5f5f5;\n  border-radius: 20px;\n}\n.skeleton-avatar {\n  width: 84px;\n  height: 84px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.skeleton-lines {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skeleton-name {\n  height: 28px;\n  width: 55%;\n}\n.skeleton-sub {\n  height: 16px;\n  width: 70%;\n}\n.skeleton-badges {\n  height: 22px;\n  width: 40%;\n}\n.skeleton-row {\n  display: grid;\n  gap: 14px;\n  grid-template-columns: repeat(4, 1fr);\n}\n.skeleton-row:last-child {\n  grid-template-columns: repeat(2, 1fr);\n}\n.skeleton-action {\n  height: 72px;\n  border-radius: 16px;\n}\n.skeleton-card {\n  height: 280px;\n  border-radius: 20px;\n}\n@media (max-width: 1199px) {\n  .quick-actions {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .skeleton-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .profile-hero {\n    padding: 22px 20px;\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .hero-name {\n    font-size: 22px;\n  }\n  .info-card {\n    padding: 18px;\n  }\n  .skeleton-hero-wrap {\n    padding: 22px 20px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 575px) {\n  .quick-actions {\n    grid-template-columns: 1fr;\n  }\n  .detail-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .detail-value {\n    text-align: left;\n  }\n  .skeleton-row {\n    grid-template-columns: 1fr;\n  }\n  .skeleton-row:last-child {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/components/account/dashboard/dashboard.ts", lineNumber: 18 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-VR6TSFPN.js.map
