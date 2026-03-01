import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IAccountUser } from '../interface/account.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);

  getUserDetails(): Observable<IAccountUser> {
    return this.http.get<IAccountUser>(`${environment.baseURL}user/me`);
  }

  updateProfile(payload: {
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
  }): Observable<any> {
    return this.http.put(`${environment.baseURL}user/profile`, payload);
  }

  updatePassword(payload: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }): Observable<any> {
    return this.http.put(`${environment.baseURL}user/password`, payload);
  }
}
