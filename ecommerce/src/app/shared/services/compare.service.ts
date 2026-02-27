import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ICompareModel } from '../interface/compare.interface';

@Injectable({
  providedIn: 'root',
})
export class CompareService {
  private http = inject(HttpClient);

  public skeletonLoader: boolean = false;

  getComparItems(): Observable<ICompareModel> {
    return this.http.get<ICompareModel>(`${environment.baseURL}compare`);
  }

  addToCompare(productId: number): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${environment.baseURL}compare`, {
      product_id: productId,
    });
  }

  removeFromCompare(productId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${environment.baseURL}compare/${productId}`,
    );
  }
}
