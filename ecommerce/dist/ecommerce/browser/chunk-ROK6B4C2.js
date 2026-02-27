import {
  NotificationService
} from "./chunk-HBLN46Q5.js";
import {
  environment
} from "./chunk-4LUQBUB6.js";
import {
  Action,
  Selector,
  State
} from "./chunk-6YJBSKCB.js";
import {
  HttpClient
} from "./chunk-QK7HTLFB.js";
import {
  Injectable,
  __decorate,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/store/action/account.action.ts
var GetUserDetailsAction = class {
  static {
    this.type = "[Account] User Get";
  }
  constructor() {
  }
};
var UpdateUserProfileAction = class {
  static {
    this.type = "[Account] User Update";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var UpdateUserPasswordAction = class {
  static {
    this.type = "[Account] User Update Password";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetAddressesAction = class {
  static {
    this.type = "[Account] Addresses Get";
  }
  constructor() {
  }
};
var CreateAddressAction = class {
  static {
    this.type = "[Account] Address Create";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var UpdateAddressAction = class {
  static {
    this.type = "[Account] Address Edit";
  }
  constructor(payload, id) {
    this.payload = payload;
    this.id = id;
  }
};
var DeleteAddressAction = class {
  static {
    this.type = "[Account] Address Delete";
  }
  constructor(id) {
    this.id = id;
  }
};
var AccountClearAction = class {
  static {
    this.type = "[Account] Clear";
  }
  constructor() {
  }
};

// src/app/shared/services/account.service.ts
var AccountService = class _AccountService {
  constructor() {
    this.http = inject(HttpClient);
    this.isOpenMenu = false;
  }
  getUserDetails() {
    return this.http.get(`${environment.baseURL}user/me`);
  }
  updateProfile(data) {
    return this.http.put(`${environment.baseURL}user/profile`, data);
  }
  updatePassword(data) {
    return this.http.put(`${environment.baseURL}user/password`, {
      currentPassword: data.current_password,
      newPassword: data.new_password,
      confirmPassword: data.confirm_password
    });
  }
  getAddresses() {
    return this.http.get(`${environment.baseURL}address`);
  }
  createAddress(payload) {
    return this.http.post(`${environment.baseURL}address`, payload);
  }
  updateAddress(id, payload) {
    return this.http.put(`${environment.baseURL}address/${id}`, payload);
  }
  deleteAddress(id) {
    return this.http.delete(`${environment.baseURL}address/${id}`);
  }
  static {
    this.\u0275fac = function AccountService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountService, factory: _AccountService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/account.state.ts
var AccountState = class AccountState2 {
  constructor() {
    this.accountService = inject(AccountService);
    this.notificationService = inject(NotificationService);
  }
  static user(state) {
    return state.user;
  }
  static permissions(state) {
    return state.permissions;
  }
  static addresses(state) {
    return state.addresses;
  }
  getUserDetails(ctx) {
    return this.accountService.getUserDetails().pipe(tap({
      next: (result) => {
        const user = __spreadProps(__spreadValues({}, result), {
          name: [result.firstName, result.middleName, result.lastName].filter(Boolean).join(" ") || result.name,
          phone: result.phoneNumber || result.phone
        });
        ctx.patchState({
          user,
          permissions: result.permission || []
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  updateProfile(ctx, { payload }) {
    if (payload instanceof FormData) {
      this.notificationService.showError("Profile image upload is not yet supported");
      return;
    }
    return this.accountService.updateProfile(payload).pipe(tap({
      next: () => {
        this.notificationService.showSuccess("Profile updated successfully");
        const current = ctx.getState().user;
        if (current) {
          const updatedName = [payload.firstName, payload.middleName, payload.lastName].filter(Boolean).join(" ");
          ctx.patchState({
            user: __spreadProps(__spreadValues({}, current), {
              firstName: payload.firstName ?? current.firstName,
              middleName: payload.middleName ?? current.middleName,
              lastName: payload.lastName ?? current.lastName,
              phoneNumber: payload.phoneNumber ?? current.phoneNumber,
              phone: payload.phoneNumber ?? current.phone,
              name: updatedName || current.name
            })
          });
        }
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to update profile");
      }
    }));
  }
  updatePassword(ctx, { payload }) {
    return this.accountService.updatePassword(payload).pipe(tap({
      next: () => {
        this.notificationService.showSuccess("Password changed successfully");
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to change password");
      }
    }));
  }
  getAddresses(ctx) {
    return this.accountService.getAddresses().pipe(tap({
      next: (result) => {
        ctx.patchState({ addresses: result });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  createAddress(ctx, { payload }) {
    return this.accountService.createAddress(payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState({
          addresses: [...state.addresses, result]
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  updateAddress(ctx, { id, payload }) {
    return this.accountService.updateAddress(id, payload).pipe(tap({
      next: (updated) => {
        const state = ctx.getState();
        ctx.patchState({
          addresses: state.addresses.map((a) => a.id === id ? updated : a)
        });
        this.notificationService.showSuccess("Address updated successfully");
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to update address");
      }
    }));
  }
  deleteAddress(ctx, { id }) {
    return this.accountService.deleteAddress(id).pipe(tap({
      next: () => {
        const state = ctx.getState();
        ctx.patchState({
          addresses: state.addresses.filter((a) => a.id !== id)
        });
        this.notificationService.showSuccess("Address deleted successfully");
      },
      error: (err) => {
        this.notificationService.showError(err?.error?.message || "Failed to delete address");
      }
    }));
  }
  accountClear(ctx) {
    ctx.patchState({
      user: null,
      permissions: [],
      addresses: []
    });
  }
  static {
    this.\u0275fac = function AccountState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: AccountState2, factory: AccountState2.\u0275fac });
  }
};
__decorate([
  Action(GetUserDetailsAction)
], AccountState.prototype, "getUserDetails", null);
__decorate([
  Action(UpdateUserProfileAction)
], AccountState.prototype, "updateProfile", null);
__decorate([
  Action(UpdateUserPasswordAction)
], AccountState.prototype, "updatePassword", null);
__decorate([
  Action(GetAddressesAction)
], AccountState.prototype, "getAddresses", null);
__decorate([
  Action(CreateAddressAction)
], AccountState.prototype, "createAddress", null);
__decorate([
  Action(UpdateAddressAction)
], AccountState.prototype, "updateAddress", null);
__decorate([
  Action(DeleteAddressAction)
], AccountState.prototype, "deleteAddress", null);
__decorate([
  Action(AccountClearAction)
], AccountState.prototype, "accountClear", null);
__decorate([
  Selector()
], AccountState, "user", null);
__decorate([
  Selector()
], AccountState, "permissions", null);
__decorate([
  Selector()
], AccountState, "addresses", null);
AccountState = __decorate([
  State({
    name: "account",
    defaults: {
      user: null,
      permissions: [],
      addresses: []
    }
  })
], AccountState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountState, [{
    type: Injectable
  }], null, { getUserDetails: [], updateProfile: [], updatePassword: [], getAddresses: [], createAddress: [], updateAddress: [], deleteAddress: [], accountClear: [] });
})();

export {
  GetUserDetailsAction,
  UpdateUserProfileAction,
  GetAddressesAction,
  CreateAddressAction,
  UpdateAddressAction,
  DeleteAddressAction,
  AccountClearAction,
  AccountService,
  AccountState
};
//# sourceMappingURL=chunk-ROK6B4C2.js.map
