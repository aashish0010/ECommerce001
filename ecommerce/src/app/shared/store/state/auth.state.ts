import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs';

import { IAuthNumberLoginState } from '../../interface/auth.interface';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { AccountClearAction, GetUserDetailsAction } from '../action/account.action';
import {
  AuthClearAction,
  ForgotPasswordAction,
  LoginAction,
  LoginWithNumberAction,
  LogoutAction,
  RefreshTokenSuccessAction,
  RegisterAction,
  SendEmailOtpAction,
  UpdatePasswordAction,
  VerifyEmailOtpAction,
  VerifyNumberOTPAction,
  VerifyOTPAction,
} from '../action/auth.action';
import { ClearCartAction } from '../action/cart.action';

export interface AuthStateModel {
  email: String;
  number: IAuthNumberLoginState | null;
  token: String | Number;
  access_token: String | null;
  refresh_token: String | null;
  permissions: [];
  processId: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    email: '',
    token: '',
    number: null,
    access_token: '',
    refresh_token: null,
    permissions: [],
    processId: '',
  },
})
@Injectable()
export class AuthState {
  private store = inject(Store);
  router = inject(Router);
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);

  @Selector()
  static accessToken(state: AuthStateModel): String | null {
    return state.access_token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): Boolean {
    return !!state.access_token;
  }

  @Selector()
  static email(state: AuthStateModel): String {
    return state.email;
  }

  @Selector()
  static number(state: AuthStateModel): IAuthNumberLoginState | null {
    return state.number;
  }

  @Selector()
  static token(state: AuthStateModel): String | Number {
    return state.token;
  }

  @Action(RegisterAction)
  register(_ctx: StateContext<AuthStateModel>, action: RegisterAction) {
    return this.authService.register(action.payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Account created successfully! Please sign in.');
        },
        error: (err) => {
          this.notificationService.showError(
            err?.error?.message || 'Registration failed. Please try again.',
          );
        },
      }),
    );
  }

  @Action(LoginAction)
  login(ctx: StateContext<AuthStateModel>, action: LoginAction) {
    return this.authService.login(action.payload).pipe(
      tap({
        next: (res: any) => {
          ctx.patchState({
            email: action.payload.phone,
            token: res.token || '',
            access_token: res.token || '',
            refresh_token: res.refreshToken || null,
          });
          this.store.dispatch(new GetUserDetailsAction());
        },
        error: (err) => {
          this.notificationService.showError(
            err?.error?.message || 'Invalid credentials. Please try again.',
          );
        },
      }),
    );
  }

  @Action(LoginWithNumberAction)
  loginWithNumber(_ctx: StateContext<AuthStateModel>, _action: LoginWithNumberAction) {
    // Login with number logic here
    this.store.dispatch(new GetUserDetailsAction());
  }

  @Action(ForgotPasswordAction)
  forgotPassword(ctx: StateContext<AuthStateModel>, action: ForgotPasswordAction) {
    return this.authService.sendOtp(action.payload.email).pipe(
      tap({
        next: (res: any) => {
          ctx.patchState({
            email: action.payload.email,
            processId: res.processId || '',
          });
        },
        error: (err) => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to send OTP. Please check your email and try again.',
          );
        },
      }),
    );
  }

  @Action(SendEmailOtpAction)
  sendEmailOtp(ctx: StateContext<AuthStateModel>, action: SendEmailOtpAction) {
    return this.authService.sendEmailOtp(action.payload.email).pipe(
      tap({
        next: (res: any) => {
          ctx.patchState({
            email: action.payload.email,
            processId: res.processId || '',
          });
        },
        error: (err) => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to send OTP. Please try again.',
          );
        },
      }),
    );
  }

  @Action(VerifyEmailOtpAction)
  verifyEmailOtp(_ctx: StateContext<AuthStateModel>, action: VerifyEmailOtpAction) {
    return this.authService.verifyEmailOtp(action.payload).pipe(
      tap({
        error: (err) => {
          this.notificationService.showError(
            err?.error?.message || 'Invalid or expired OTP. Please try again.',
          );
        },
      }),
    );
  }

  @Action(VerifyOTPAction)
  verifyEmail(ctx: StateContext<AuthStateModel>, action: VerifyOTPAction) {
    ctx.patchState({ token: action.payload.token });
  }

  @Action(VerifyNumberOTPAction)
  verifyNumber(_ctx: StateContext<AuthStateModel>, _action: VerifyNumberOTPAction) {
    this.store.dispatch(new GetUserDetailsAction());
  }

  @Action(UpdatePasswordAction)
  updatePassword(ctx: StateContext<AuthStateModel>, action: UpdatePasswordAction) {
    const state = ctx.getState();
    return this.authService
      .verifyOtpAndChangePassword({
        email: action.payload.email,
        otp: action.payload.token,
        processId: state.processId,
        newPassword: action.payload.password,
      })
      .pipe(
        tap({
          next: () => {
            ctx.patchState({ token: '', processId: '' });
            this.notificationService.showSuccess(
              'Password updated successfully. Please sign in.',
            );
          },
          error: (err) => {
            this.notificationService.showError(
              err?.error?.message || 'Failed to update password. Please try again.',
            );
          },
        }),
      );
  }

  @Action(LogoutAction)
  logout(_ctx: StateContext<AuthStateModel>) {
    this.store.dispatch(new AuthClearAction());
    void this.router.navigate(['/']);
  }

  @Action(AuthClearAction)
  authClear(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({
      email: '',
      token: '',
      access_token: null,
      refresh_token: null,
      permissions: [],
      processId: '',
    });
    this.authService.redirectUrl = undefined;
    this.store.dispatch(new AccountClearAction());
    this.store.dispatch(new ClearCartAction());
  }

  @Action(RefreshTokenSuccessAction)
  refreshTokenSuccess(ctx: StateContext<AuthStateModel>, action: RefreshTokenSuccessAction) {
    ctx.patchState({
      token: action.accessToken || '',
      access_token: action.accessToken || '',
      refresh_token: action.refreshToken || null,
    });
  }
}
