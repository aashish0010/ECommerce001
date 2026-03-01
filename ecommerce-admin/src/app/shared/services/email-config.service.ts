import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IEmailConfig, IEmailConfigResponse } from '../interface/email-config.interface';

@Injectable({ providedIn: 'root' })
export class EmailConfigService {
  private http = inject(HttpClient);

  getConfig(): Observable<IEmailConfigResponse> {
    return this.http.get<IEmailConfigResponse>(`${environment.URL}/email-config`);
  }

  updateConfig(id: number, payload: Partial<IEmailConfig>): Observable<IEmailConfigResponse> {
    return this.http.put<IEmailConfigResponse>(`${environment.URL}/email-config/${id}`, payload);
  }
}
