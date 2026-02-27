import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngxs/store';
import { BehaviorSubject, EMPTY, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';

import { IValues } from '../../shared/interface/setting.interface';
import { AuthService } from '../../shared/services/auth.service';
import { NotificationService } from '../../shared/services/notification.service';
import { AuthClearAction, RefreshTokenSuccessAction } from '../../shared/store/action/auth.action';
import { SettingState } from '../../shared/store/state/setting.state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private store = inject(Store);
  private router = inject(Router);
  private ngZone = inject(NgZone);
  private notificationService = inject(NotificationService);
  authService = inject(AuthService);

  setting$: Observable<IValues> = inject(Store).select(SettingState.setting) as Observable<IValues>;

  public isMaintenanceModeOn: boolean = false;

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  private readonly publicEndpoints = [
    'Auth/companydetails',
    'Auth/login',
    'Auth/register',
    'Auth/sendopt',
    'Auth/verifyopt',
    'Auth/sendemailotp',
    'Auth/verifyemail',
    'auth/refresh',
  ];

  constructor() {
    this.setting$.subscribe(setting => {
      this.isMaintenanceModeOn = setting?.maintenance?.maintenance_mode!;
    });
  }

  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    // If Maintenance Mode On
    if (this.isMaintenanceModeOn) {
      this.ngZone.run(() => {
        void this.router.navigate(['/maintenance']);
      });
      return EMPTY;
    }

    const isPublic = this.publicEndpoints.some(endpoint =>
      req.url.toLowerCase().includes(endpoint.toLowerCase()),
    );

    const token = this.store.selectSnapshot(state => state.auth.access_token);
    if (token && !isPublic) {
      req = this.addTokenToRequest(req, token as string);
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !isPublic) {
          return this.handle401Error(req, next);
        }
        return throwError(() => error);
      }),
    );
  }

  private addTokenToRequest<T>(req: HttpRequest<T>, token: string): HttpRequest<T> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handle401Error<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    const refreshToken = this.store.selectSnapshot(state => state.auth.refresh_token);

    // No refresh token available -- logout immediately
    if (!refreshToken) {
      this.logoutUser();
      return throwError(() => new HttpErrorResponse({ status: 401 }));
    }

    if (!this.isRefreshing) {
      // First 401 -- initiate refresh
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const accessToken =
        (this.store.selectSnapshot(state => state.auth.access_token) as string) || '';

      return this.authService
        .refreshToken({
          accessToken: accessToken,
          refreshToken: refreshToken as string,
        })
        .pipe(
          switchMap((res: any) => {
            this.isRefreshing = false;
            const newAccessToken = res.token;
            const newRefreshToken = res.refreshToken;

            // Update NGXS state
            this.store.dispatch(new RefreshTokenSuccessAction(newAccessToken, newRefreshToken));

            // Notify queued requests
            this.refreshTokenSubject.next(newAccessToken);

            // Retry original request with new token
            return next.handle(this.addTokenToRequest(req, newAccessToken));
          }),
          catchError(err => {
            this.isRefreshing = false;
            this.logoutUser();
            return throwError(() => err);
          }),
        );
    } else {
      // Refresh already in progress -- queue this request
      return this.refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(token => {
          return next.handle(this.addTokenToRequest(req, token as string));
        }),
      );
    }
  }

  private logoutUser(): void {
    this.notificationService.notification = false;
    this.store.dispatch(new AuthClearAction());
    this.authService.isLogin = true;
  }
}
