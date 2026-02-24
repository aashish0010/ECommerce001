import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IRegisterModal, IVerifyEmailOtpState } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  public redirectUrl: string | undefined;
  public confirmed: boolean = false;
  public isLogin: boolean = false;
  public pendingRegistration: IRegisterModal | null = null;

  login(payload: { phone: string; password: string }): Observable<any> {
    return this.http.post(`${environment.baseURL}auth/login`, {
      userName: payload.phone,
      password: payload.password,
    });
  }

  register(payload: IRegisterModal): Observable<any> {
    const parts = (payload.name || '').trim().split(/\s+/).filter(Boolean);
    const firstName = parts[0] || '';
    const middleName = parts.length > 2 ? parts.slice(1, -1).join(' ') : '';
    const lastName = parts.length > 1 ? parts[parts.length - 1] : '';

    return this.http.post(`${environment.baseURL}auth/register`, {
      userName: String(payload.phone),
      firstName,
      middleName,
      lastName,
      email: payload.email,
      phoneNumber: String(payload.phone),
      password: payload.password,
      companyCode: environment.companyCode,
    });
  }

  sendOtp(email: string): Observable<any> {
    return this.http.get(`${environment.baseURL}auth/sendopt`, { params: { email } });
  }

  sendEmailOtp(email: string): Observable<any> {
    return this.http.get(`${environment.baseURL}auth/sendemailotp`, { params: { email } });
  }

  verifyEmailOtp(payload: IVerifyEmailOtpState): Observable<any> {
    return this.http.post(`${environment.baseURL}auth/verifyemail`, {
      email: payload.email,
      otp: payload.otp,
      processId: payload.processId,
    });
  }

  verifyOtpAndChangePassword(payload: {
    email: string;
    otp: string;
    processId: string;
    newPassword: string;
  }): Observable<any> {
    return this.http.post(`${environment.baseURL}auth/verifyopt`, {
      email: payload.email,
      otp: payload.otp,
      processId: payload.processId,
      newPassword: payload.newPassword,
    });
  }
}
