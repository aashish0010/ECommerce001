import {
  MarkAsReadNotificationAction,
  NotificationState
} from "./chunk-2ZKYPCYU.js";
import "./chunk-HBLN46Q5.js";
import "./chunk-G25K32MJ.js";
import "./chunk-MLCQBQYT.js";
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
  DatePipe,
  isPlatformBrowser
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  PLATFORM_ID,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/notification/notification.ts
var _forTrack0 = ($index, $item) => $item.id;
function Notification_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275element(4, "i", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    \u0275\u0275classProp("unread", !notification_r1.read_at);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r1 == null ? null : notification_r1.data == null ? null : notification_r1.data.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, notification_r1 == null ? null : notification_r1.created_at, "dd MMM yyyy hh:mm:a"), " ");
  }
}
function Notification_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, Notification_Conditional_6_For_2_Template, 7, 7, "li", 5, _forTrack0);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.notification$));
  }
}
function Notification_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_notification"))("description", \u0275\u0275pipeBind1(2, 7, "no_notification_description"));
  }
}
var Notification = class _Notification {
  constructor() {
    this.store = inject(Store);
    this.notification$ = inject(Store).select(NotificationState.notification);
    const platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnDestroy() {
    if (this.isBrowser) {
      this.store.dispatch(new MarkAsReadNotificationAction());
    }
  }
  static {
    this.\u0275fac = function Notification_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Notification)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Notification, selectors: [["app-notification"]], decls: 9, vars: 6, consts: [[1, "card", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "notification-list"], [3, "class", "image", "text", "description"], [3, "unread"], [1, "ri-time-line"], [3, "image", "text", "description"]], template: function Notification_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, Notification_Conditional_6_Template, 4, 2, "ul", 3);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275conditionalBranchCreate(8, Notification_Conditional_8_Template, 3, 9, "app-no-data", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "notifications"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.notification$)) == null ? null : tmp_1_0.length) ? 6 : 8);
      }
    }, dependencies: [TranslateModule, NoData, TranslatePipe, AsyncPipe, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Notification, [{
    type: Component,
    args: [{ selector: "app-notification", imports: [TranslateModule, NoData, AsyncPipe, DatePipe], template: `<div class="card mt-0">
  <div class="card-body">
    <div class="top-sec">
      <h3>{{ 'notifications' | translate }}</h3>
    </div>
    @if((notification$ | async)?.length){
    <ul class="notification-list">
      @for(notification of (notification$ | async); track notification.id){
      <li [class.unread]="!notification.read_at">
        <h4>{{ notification?.data?.message }}</h4>
        <h5>
          <i class="ri-time-line"></i> {{ notification?.created_at | date: 'dd MMM yyyy hh:mm:a' }}
        </h5>
      </li>
      }
    </ul>
    }@else {
    <app-no-data
      [class]="'no-data-added'"
      [image]="'assets/svg/empty-items.svg'"
      [text]="'no_notification' | translate"
      [description]="'no_notification_description' | translate"
    />
    }
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Notification, { className: "Notification", filePath: "src/app/components/account/notification/notification.ts", lineNumber: 19 });
})();
export {
  Notification
};
//# sourceMappingURL=chunk-YVR7PEWT.js.map
