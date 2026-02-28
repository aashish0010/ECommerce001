import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface LoginResponse {
  code: number;
  status: string;
  message: string;
  userName: string;
  token: string;
  refreshToken: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  login(userName: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.URL}/auth/admin-login`, {
      userName,
      password,
    });
  }
}
