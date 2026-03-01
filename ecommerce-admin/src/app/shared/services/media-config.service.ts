import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IMediaConfig, IMediaConfigResponse } from '../interface/media-config.interface';

@Injectable({ providedIn: 'root' })
export class MediaConfigService {
  private http = inject(HttpClient);

  getConfig(): Observable<IMediaConfigResponse> {
    return this.http.get<IMediaConfigResponse>(`${environment.URL}/media-config`);
  }

  updateConfig(id: number, payload: Partial<IMediaConfig>): Observable<IMediaConfigResponse> {
    return this.http.put<IMediaConfigResponse>(`${environment.URL}/media-config/${id}`, payload);
  }
}
