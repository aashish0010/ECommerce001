import { Injectable, inject } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { IAccountUser } from '../../interface/account.interface';
import { ISavedAddress } from '../../interface/user.interface';
import { AccountService } from '../../services/account.service';
import { NotificationService } from '../../services/notification.service';
import {
  AccountClearAction,
  CreateAddressAction,
  DeleteAddressAction,
  GetAddressesAction,
  GetUserDetailsAction,
  UpdateAddressAction,
  UpdateUserPasswordAction,
  UpdateUserProfileAction,
} from '../action/account.action';

export class AccountStateModel {
  user: IAccountUser | null;
  permissions: any[];
  addresses: ISavedAddress[];
}

@State<AccountStateModel>({
  name: 'account',
  defaults: {
    user: null,
    permissions: [],
    addresses: [],
  },
})
@Injectable()
export class AccountState {
  private accountService = inject(AccountService);
  private notificationService = inject(NotificationService);

  @Selector()
  static user(state: AccountStateModel) {
    return state.user;
  }

  @Selector()
  static permissions(state: AccountStateModel) {
    return state.permissions;
  }

  @Selector()
  static addresses(state: AccountStateModel) {
    return state.addresses;
  }

  @Action(GetUserDetailsAction)
  getUserDetails(ctx: StateContext<AccountStateModel>) {
    return this.accountService.getUserDetails().pipe(
      tap({
        next: result => {
          const user: IAccountUser = {
            ...result,
            name: [result.firstName, result.middleName, result.lastName].filter(Boolean).join(' ') || result.name,
            phone: result.phoneNumber || result.phone,
          };
          ctx.patchState({
            user,
            permissions: result.permission || [],
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateUserProfileAction)
  updateProfile(ctx: StateContext<AccountStateModel>, { payload }: UpdateUserProfileAction) {
    // Profile image upload via FormData is not yet supported by the backend
    if (payload instanceof FormData) {
      this.notificationService.showError('Profile image upload is not yet supported');
      return;
    }
    return this.accountService.updateProfile(payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Profile updated successfully');
          // Patch state locally — no extra API round-trip needed
          const current = ctx.getState().user;
          if (current) {
            const updatedName = [payload.firstName, payload.middleName, payload.lastName]
              .filter(Boolean).join(' ');
            ctx.patchState({
              user: {
                ...current,
                firstName: payload.firstName ?? current.firstName,
                middleName: payload.middleName ?? current.middleName,
                lastName: payload.lastName ?? current.lastName,
                phoneNumber: payload.phoneNumber ?? current.phoneNumber,
                phone: payload.phoneNumber ?? current.phone,
                name: updatedName || current.name,
              },
            });
          }
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update profile');
        },
      }),
    );
  }

  @Action(UpdateUserPasswordAction)
  updatePassword(ctx: StateContext<AccountStateModel>, { payload }: UpdateUserPasswordAction) {
    return this.accountService.updatePassword(payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Password changed successfully');
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to change password');
        },
      }),
    );
  }

  @Action(GetAddressesAction)
  getAddresses(ctx: StateContext<AccountStateModel>) {
    return this.accountService.getAddresses().pipe(
      tap({
        next: result => {
          ctx.patchState({ addresses: result });
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(CreateAddressAction)
  createAddress(ctx: StateContext<AccountStateModel>, { payload }: CreateAddressAction) {
    return this.accountService.createAddress(payload).pipe(
      tap({
        next: result => {
          const state = ctx.getState();
          ctx.patchState({
            addresses: [...state.addresses, result],
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateAddressAction)
  updateAddress(ctx: StateContext<AccountStateModel>, { id, payload }: UpdateAddressAction) {
    return this.accountService.updateAddress(id, payload).pipe(
      tap({
        next: (updated) => {
          const state = ctx.getState();
          ctx.patchState({
            addresses: state.addresses.map(a => a.id === id ? updated : a),
          });
          this.notificationService.showSuccess('Address updated successfully');
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update address');
        },
      }),
    );
  }

  @Action(DeleteAddressAction)
  deleteAddress(ctx: StateContext<AccountStateModel>, { id }: DeleteAddressAction) {
    return this.accountService.deleteAddress(id).pipe(
      tap({
        next: () => {
          const state = ctx.getState();
          ctx.patchState({
            addresses: state.addresses.filter(a => a.id !== id),
          });
          this.notificationService.showSuccess('Address deleted successfully');
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to delete address');
        },
      }),
    );
  }

  @Action(AccountClearAction)
  accountClear(ctx: StateContext<AccountStateModel>) {
    ctx.patchState({
      user: null,
      permissions: [],
      addresses: [],
    });
  }
}
