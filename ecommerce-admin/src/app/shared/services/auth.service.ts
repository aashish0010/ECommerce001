import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IAdminLoginModel, IAdminAuthResponse } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  adminLogin(payload: IAdminLoginModel): Observable<IAdminAuthResponse> {
    return this.http.post<IAdminAuthResponse>(
      `${environment.baseURL}Auth/admin-login`,
      payload
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('admin_token');
  }

  getToken(): string | null {
    return localStorage.getItem('admin_token');
  }

  setToken(token: string): void {
    localStorage.setItem('admin_token', token);
  }

  logout(): void {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
  }
}
