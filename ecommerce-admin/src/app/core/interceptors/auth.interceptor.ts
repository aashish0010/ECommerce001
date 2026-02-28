import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

import { Store } from '@ngxs/store';
import { Observable, catchError, throwError } from 'rxjs';

import { NotificationService } from '../../shared/services/notification.service';
import { AuthClearAction } from '../../shared/store/action/auth.action';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private router = inject(Router);
  private store = inject(Store);
  private notificationService = inject(NotificationService);
  private platformId = inject(PLATFORM_ID);

  private readonly publicEndpoints = [
    'Auth/companydetails',
    'Auth/login',
    'Auth/admin-login',
  ];

  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    let token: string | null = null;
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('admin_token');
    }
    const isPublic = this.publicEndpoints.some(endpoint =>
      req.url.toLowerCase().includes(endpoint.toLowerCase()),
    );
    if (token && !isPublic) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !isPublic) {
          this.notificationService.notification = false;
          this.store.dispatch(new AuthClearAction());
          void this.router.navigate(['/auth/login']);
        }
        return throwError(() => error);
      }),
    );
  }
}
