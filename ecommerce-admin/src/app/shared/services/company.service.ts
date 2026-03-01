import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ICompanyAdmin, ICompanyAdminResponse, ISocialLink } from '../interface/company.interface';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private http = inject(HttpClient);

  getCompany(): Observable<ICompanyAdminResponse> {
    return this.http.get<ICompanyAdminResponse>(`${environment.URL}/company`);
  }

  updateCompany(id: number, payload: Partial<ICompanyAdmin>): Observable<ICompanyAdminResponse> {
    return this.http.put<ICompanyAdminResponse>(`${environment.URL}/company/${id}`, payload);
  }

  updateSocialLinks(id: number, socialLinks: ISocialLink[]): Observable<ICompanyAdminResponse> {
    return this.http.put<ICompanyAdminResponse>(
      `${environment.URL}/company/${id}/social-links`,
      { socialLinks },
    );
  }
}
