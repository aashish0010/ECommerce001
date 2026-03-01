import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Params } from '../interface/core.interface';
import { ICoupon, ICouponModel } from '../interface/coupon.interface';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  private http = inject(HttpClient);

  getCoupons(_payload?: Params): Observable<ICouponModel> {
    return this.http.get<any>(`${environment.URL}/coupon/admin`).pipe(
      map(res => ({
        data: (res?.data || []).map((c: any) => this.mapToICoupon(c)),
        total: res?.data?.length || 0,
      })),
    );
  }

  getCouponById(id: number): Observable<ICoupon> {
    return this.http.get<any>(`${environment.URL}/coupon/${id}`).pipe(
      map(res => this.mapToICoupon(res?.data?.[0])),
    );
  }

  createCoupon(payload: ICoupon): Observable<ICouponModel> {
    return this.http.post<any>(`${environment.URL}/coupon`, this.mapToCreateDto(payload)).pipe(
      map(res => ({
        data: (res?.data || []).map((c: any) => this.mapToICoupon(c)),
        total: res?.data?.length || 0,
      })),
    );
  }

  updateCoupon(id: number, payload: ICoupon): Observable<ICouponModel> {
    return this.http
      .put<any>(`${environment.URL}/coupon/${id}`, this.mapToUpdateDto(payload))
      .pipe(
        map(res => ({
          data: (res?.data || []).map((c: any) => this.mapToICoupon(c)),
          total: res?.data?.length || 0,
        })),
      );
  }

  updateCouponStatus(id: number, status: boolean): Observable<any> {
    return this.http.patch<any>(`${environment.URL}/coupon/${id}/status`, { status });
  }

  deleteCoupon(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.URL}/coupon/${id}`);
  }

  deleteAllCoupons(ids: number[]): Observable<void> {
    return this.http.post<void>(`${environment.URL}/coupon/delete-all`, { ids });
  }

  private mapToICoupon(c: any): ICoupon {
    if (!c) return null;
    return {
      id: c.id,
      title: c.title || '',
      description: c.description || '',
      code: c.code || '',
      type: c.discount_type || 'flat',
      amount: c.amount || 0,
      min_spend: c.min_spend || 0,
      max_spend: c.max_spend || 0,
      is_unlimited: !c.usage_limit,
      usage_per_coupon: c.usage_limit || 0,
      usage_per_customer: 0,
      is_expired: !!c.expires_at,
      start_date: c.created_at ? c.created_at.substring(0, 10) : '',
      end_date: c.expires_at ? c.expires_at.substring(0, 10) : '',
      is_apply_all: true,
      exclude_products: [],
      products: [],
      is_first_order: false,
      status: c.is_active ?? true,
      created_by_id: 0,
      created_at: c.created_at,
      updated_at: c.updated_at,
    };
  }

  private mapToCreateDto(payload: ICoupon): any {
    return {
      code: payload.code,
      title: payload.title,
      description: payload.description || '',
      discount_type: payload.type || 'flat',
      amount: payload.amount || 0,
      min_spend: payload.min_spend || null,
      max_spend: payload.max_spend || null,
      expires_at: payload.is_expired && payload.end_date ? payload.end_date : null,
      usage_limit: payload.is_unlimited ? null : (payload.usage_per_coupon || null),
      company_info_id: 1,
    };
  }

  private mapToUpdateDto(payload: ICoupon): any {
    return {
      title: payload.title,
      description: payload.description || '',
      discount_type: payload.type || 'flat',
      amount: payload.amount || 0,
      min_spend: payload.min_spend || null,
      max_spend: payload.max_spend || null,
      expires_at: payload.is_expired && payload.end_date ? payload.end_date : null,
      usage_limit: payload.is_unlimited ? null : (payload.usage_per_coupon || null),
      is_active: payload.status ?? true,
    };
  }
}
