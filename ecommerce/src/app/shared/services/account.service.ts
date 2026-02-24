import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IAccountUser, IAccountUserUpdatePassword } from '../interface/account.interface';
import { ISavedAddress } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);

  public isOpenMenu: boolean = false;

  getUserDetails(): Observable<IAccountUser> {
    return this.http.get<IAccountUser>(`${environment.baseURL}user/me`);
  }

  updateProfile(data: { firstName?: string; middleName?: string; lastName?: string; phoneNumber?: string }): Observable<any> {
    return this.http.put(`${environment.baseURL}user/profile`, data);
  }

  updatePassword(data: IAccountUserUpdatePassword): Observable<any> {
    return this.http.put(`${environment.baseURL}user/password`, {
      currentPassword: data.current_password,
      newPassword: data.new_password,
      confirmPassword: data.confirm_password,
    });
  }

  getAddresses(): Observable<ISavedAddress[]> {
    return this.http.get<ISavedAddress[]>(`${environment.baseURL}address`);
  }

  createAddress(payload: any): Observable<ISavedAddress> {
    return this.http.post<ISavedAddress>(`${environment.baseURL}address`, payload);
  }
}
