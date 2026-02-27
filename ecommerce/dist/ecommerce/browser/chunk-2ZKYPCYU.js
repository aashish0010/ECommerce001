import {
  NotificationService
} from "./chunk-HBLN46Q5.js";
import {
  Action,
  Selector,
  State
} from "./chunk-6YJBSKCB.js";
import {
  Injectable,
  __decorate,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/store/action/notification.action.ts
var GetNotificationAction = class {
  static {
    this.type = "[Notification] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var MarkAsReadNotificationAction = class {
  static {
    this.type = "[Notification] Mark As Read";
  }
  constructor() {
  }
};
var DeleteNotificationAction = class {
  static {
    this.type = "[Notification] Delete";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/store/state/notification.state.ts
var NotificationState = class NotificationState2 {
  constructor() {
    this.notificationService = inject(NotificationService);
  }
  static notification(state) {
    return state.notification.data;
  }
  getNotification(ctx, action) {
    return this.notificationService.getNotifications(action?.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          notification: {
            data: result.data,
            total: result?.total ? result?.total : result.data.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  markAsRead(_ctx) {
  }
  static {
    this.\u0275fac = function NotificationState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotificationState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: NotificationState2, factory: NotificationState2.\u0275fac });
  }
};
__decorate([
  Action(GetNotificationAction)
], NotificationState.prototype, "getNotification", null);
__decorate([
  Action(MarkAsReadNotificationAction)
], NotificationState.prototype, "markAsRead", null);
__decorate([
  Selector()
], NotificationState, "notification", null);
NotificationState = __decorate([
  State({
    name: "notification",
    defaults: {
      notification: {
        data: [],
        total: 0
      }
    }
  })
], NotificationState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationState, [{
    type: Injectable
  }], null, { getNotification: [], markAsRead: [] });
})();

export {
  MarkAsReadNotificationAction,
  NotificationState
};
//# sourceMappingURL=chunk-2ZKYPCYU.js.map
