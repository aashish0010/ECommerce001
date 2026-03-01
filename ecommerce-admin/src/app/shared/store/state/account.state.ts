import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { IPermission } from '../../interface/role.interface';
import { AccountService } from '../../services/account.service';
import { NotificationService } from '../../services/notification.service';
import {
  GetUserDetailsAction,
  UpdateUserProfileAction,
  UpdateUserPasswordAction,
  AccountClearAction,
  UpdateStoreDetailsAction,
} from '../action/account.action';
import { IAccountUser } from './../../interface/account.interface';

export class AccountStateModel {
  user: IAccountUser | null;
  permissions: IPermission[];
  roleName: string | null;
}

@State<AccountStateModel>({
  name: 'adminAccount',
  defaults: {
    user: null,
    permissions: [],
    roleName: null,
  },
})
@Injectable()
export class AccountState {
  private accountService = inject(AccountService);
  private notificationService = inject(NotificationService);
  router = inject(Router);

  @Selector()
  static user(state: AccountStateModel) {
    return state.user;
  }

  @Selector()
  static permissions(state: AccountStateModel) {
    return state.permissions;
  }

  @Selector()
  static getRoleName(state: AccountStateModel) {
    return state.roleName;
  }

  @Action(GetUserDetailsAction)
  getUserDetails(ctx: StateContext<AccountStateModel>) {
    return this.accountService.getUserDetails().pipe(
      tap({
        next: (result: any) => {
          const nameParts = [result.firstName, result.middleName, result.lastName].filter(Boolean);
          ctx.patchState({
            user: {
              ...result,
              name: nameParts.join(' '),
              phone: result.phoneNumber,
            },
            permissions: result.permission || [],
            roleName: result.role?.name || result.role || null,
          });
        },
        error: err => {
          console.error('Failed to get user details:', err);
        },
      }),
    );
  }

  @Action(UpdateUserProfileAction)
  updateProfile(ctx: StateContext<AccountStateModel>, { payload }: UpdateUserProfileAction) {
    const formVal = payload as any;
    const nameParts = (formVal.name || '').trim().split(/\s+/).filter(Boolean);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
    const middleName = nameParts.length > 2 ? nameParts.slice(1, -1).join(' ') : '';
    return this.accountService
      .updateProfile({ firstName, middleName, lastName, phoneNumber: formVal.phone })
      .pipe(
        tap({
          next: () => {
            this.notificationService.showSuccess('Profile updated successfully');
            ctx.dispatch(new GetUserDetailsAction());
          },
          error: err => {
            this.notificationService.showError(err?.error?.message || 'Failed to update profile');
            throw new Error(err?.error?.message);
          },
        }),
      );
  }

  @Action(UpdateUserPasswordAction)
  updatePassword(_ctx: StateContext<AccountStateModel>, { payload }: UpdateUserPasswordAction) {
    const formVal = payload as any;
    return this.accountService
      .updatePassword({
        currentPassword: formVal.current_password,
        newPassword: formVal.password,
        confirmPassword: formVal.password_confirmation,
      })
      .pipe(
        tap({
          next: () => {
            this.notificationService.showSuccess('Password changed successfully');
          },
          error: err => {
            this.notificationService.showError(
              err?.error?.message || 'Failed to change password',
            );
            throw new Error(err?.error?.message);
          },
        }),
      );
  }

  @Action(UpdateStoreDetailsAction)
  UpdateStoreDetailsAction(
    _ctx: StateContext<AccountStateModel>,
    { payload: _payload }: UpdateStoreDetailsAction,
  ) {
    // Store update not yet supported by backend
  }

  @Action(AccountClearAction)
  accountClear(ctx: StateContext<AccountStateModel>) {
    ctx.patchState({
      user: null,
      permissions: [],
      roleName: null,
    });
  }
}
