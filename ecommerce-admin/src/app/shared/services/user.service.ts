import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Params } from '../interface/core.interface';
import { IUserModel } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  getUsers(payload?: Params): Observable<IUserModel> {
    return this.http.get<IUserModel>(`${environment.URL}/user/admin`, { params: payload });
  }

  createUser(payload: any): Observable<any> {
    return this.http.post(`${environment.URL}/user/admin`, payload);
  }

  updateUser(phone: string, payload: any): Observable<any> {
    return this.http.put(`${environment.URL}/user/admin/${phone}`, payload);
  }

  deleteUser(phone: string): Observable<any> {
    return this.http.delete(`${environment.URL}/user/admin/${phone}`);
  }
}
