import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IColor, IColorModel } from '../interface/color.interface';
import { Params } from '../interface/core.interface';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private http = inject(HttpClient);

  public skeletonLoader: boolean = false;

  getColors(payload?: Params): Observable<IColorModel> {
    const params = { companyInfoId: environment.companyInfoId, ...payload };
    return this.http.get<any>(`${environment.baseURL}color`, { params }).pipe(
      map(res => ({
        data: (res.data || []) as IColor[],
        total: res.total || 0,
        current_page: 1,
        per_page: res.total || 100,
        last_page: 1,
      } as IColorModel)),
    );
  }
}
