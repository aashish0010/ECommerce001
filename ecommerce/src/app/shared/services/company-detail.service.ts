import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ICompanyDetailResponse } from '../interface/company-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class CompanyDetailService {
  private http = inject(HttpClient);

  getCompanyDetails(): Observable<ICompanyDetailResponse> {
    const companyCode = encodeURIComponent(environment.companyCode);
    return this.http.get<ICompanyDetailResponse>(
      `${environment.baseURL}Auth/companydetails?companyCode=${companyCode}`,
    );
  }
}
