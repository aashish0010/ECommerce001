import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IBrand, IBrandModel } from '../interface/brand.interface';
import { Params } from '../interface/core.interface';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private http = inject(HttpClient);

  public skeletonLoader: boolean = false;

  getBrands(payload?: Params): Observable<IBrandModel> {
    const params = { companyInfoId: environment.companyInfoId, ...payload };
    return this.http.get<any>(`${environment.baseURL}brand`, { params }).pipe(
      map(res => ({
        data: (res.data || []) as IBrand[],
        total: res.total || 0,
        current_page: 1,
        per_page: res.total || 100,
        last_page: 1,
      } as IBrandModel)),
    );
  }

  getBrandBySlug(slug: string): Observable<IBrand> {
    const params = { companyInfoId: environment.companyInfoId };
    return this.http.get<IBrand>(`${environment.baseURL}brand/${slug}`, { params });
  }
}
