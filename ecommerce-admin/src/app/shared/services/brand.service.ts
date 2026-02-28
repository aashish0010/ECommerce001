import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IBrand, IBrandModel } from '../interface/brand.interface';
import { Params } from '../interface/core.interface';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private http = inject(HttpClient);

  getBrands(payload?: Params): Observable<IBrandModel> {
    return this.http.get<IBrandModel>(`${environment.URL}/brand`, { params: payload });
  }

  createBrand(payload: Partial<IBrand>): Observable<IBrandModel> {
    return this.http.post<IBrandModel>(`${environment.URL}/brand`, {
      name: payload.name,
      description: payload.description || '',
      imageUrl: payload.image_url || '',
      companyInfoId: 1,
    });
  }

  updateBrand(id: number, payload: Partial<IBrand>): Observable<IBrandModel> {
    return this.http.put<IBrandModel>(`${environment.URL}/brand/${id}`, {
      name: payload.name,
      description: payload.description || '',
      imageUrl: payload.image_url || '',
      status: payload.status ?? true,
    });
  }

  updateBrandStatus(id: number, status: boolean): Observable<IBrandModel> {
    return this.http.patch<IBrandModel>(`${environment.URL}/brand/${id}/status`, { status });
  }

  deleteBrand(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.URL}/brand/${id}`);
  }

  deleteAllBrands(ids: number[]): Observable<void> {
    return this.http.post<void>(`${environment.URL}/brand/delete-all`, { ids });
  }
}
