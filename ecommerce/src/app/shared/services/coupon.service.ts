import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IApplyCouponResponse, ICouponListResponse } from '../interface/coupon.interface';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  private http = inject(HttpClient);

  getCoupons(): Observable<ICouponListResponse> {
    return this.http.get<ICouponListResponse>(`${environment.baseURL}coupon`);
  }

  applyCoupon(code: string, subtotal: number): Observable<IApplyCouponResponse> {
    return this.http.post<IApplyCouponResponse>(`${environment.baseURL}coupon/apply`, {
      code,
      subtotal,
      company_info_id: 1,
    });
  }
}
