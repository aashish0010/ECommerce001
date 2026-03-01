import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IHomeConfig, IHomeConfigResponse } from '../interface/home-config.interface';

@Injectable({ providedIn: 'root' })
export class HomeConfigService {
  private http = inject(HttpClient);

  getConfig(): Observable<IHomeConfigResponse> {
    return this.http.get<IHomeConfigResponse>(`${environment.URL}/home-config`);
  }

  updateConfig(id: number, payload: Partial<IHomeConfig>): Observable<IHomeConfigResponse> {
    return this.http.put<IHomeConfigResponse>(`${environment.URL}/home-config/${id}`, payload);
  }
}
