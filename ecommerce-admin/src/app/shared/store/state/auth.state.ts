import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Store, State, Selector, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { AccountClearAction, GetUserDetailsAction } from '../action/account.action';
import {
  ForgotPassWordAction,
  LoginAction,
  VerifyEmailOtpAction,
  UpdatePasswordAction,
  LogoutAction,
  AuthClearAction,
} from '../action/auth.action';
import { GetNotificationAction } from '../action/notification.action';
import { GetSettingOptionAction } from '../action/setting.action';
import { GetBadgesAction } from '../action/sidebar.action';

export interface AuthStateModel {
  email: string;
  token: string | number;
  access_token: string | null;
  permissions: any[];
}

@State<AuthStateModel>({
  name: 'adminAuth',
  defaults: {
    email: '',
    token: '',
    access_token: '',
    permissions: [],
  },
})
@Injectable()
export class AuthState {
  private store = inject(Store);
  router = inject(Router);
  private notificationService = inject(NotificationService);
  private authService = inject(AuthService);

  @Selector()
  static accessToken(state: AuthStateModel) {
    return state.access_token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel) {
    return !!state.access_token;
  }

  @Selector()
  static email(state: AuthStateModel) {
    return state.email;
  }

  @Selector()
  static token(state: AuthStateModel) {
    return state.token;
  }

  @Action(LoginAction)
  login(ctx: StateContext<AuthStateModel>, action: LoginAction) {
    this.notificationService.notification = false;
    return this.authService.adminLogin(action.payload).pipe(
      tap({
        next: (response) => {
          this.authService.setToken(response.token);
          ctx.patchState({
            email: response.email || response.userName,
            token: response.token,
            access_token: response.token,
            permissions: response.permissions || [],
          });
          this.store.dispatch(new GetUserDetailsAction());
          this.store.dispatch(new GetBadgesAction());
          this.store.dispatch(new GetNotificationAction());
          this.store.dispatch(new GetSettingOptionAction());
        },
        error: (err) => {
          throw new Error(err?.error?.message || 'Login failed');
        },
      }),
    );
  }

  ngxsOnInit(ctx: StateContext<AuthStateModel>) {
    const token = this.authService.getToken();
    if (token) {
      ctx.patchState({
        access_token: token,
        token: token,
      });
    }
  }

  @Action(ForgotPassWordAction)
  forgotPassword(_ctx: StateContext<AuthStateModel>, _action: ForgotPassWordAction) {
    this.notificationService.notification = false;
    // Forgot Password Logic Here
  }

  @Action(VerifyEmailOtpAction)
  verifyEmail(_ctx: StateContext<AuthStateModel>, _action: VerifyEmailOtpAction) {
    this.notificationService.notification = false;
    // Verify Email Logic Here
  }

  @Action(UpdatePasswordAction)
  updatePassword(_ctx: StateContext<AuthStateModel>, _action: UpdatePasswordAction) {
    this.notificationService.notification = false;
    // Update Password Logic Here
  }

  @Action(LogoutAction)
  logout(_ctx: StateContext<AuthStateModel>) {
    this.authService.logout();
    this.store.dispatch(new AuthClearAction()).subscribe({
      complete: () => {
        void this.router.navigate(['/auth/login']);
      },
    });
  }

  @Action(AuthClearAction)
  authClear(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({
      email: '',
      token: '',
      access_token: null,
      permissions: [],
    });
    this.store.dispatch(new AccountClearAction());
  }
}
