import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface IImageUploadResponse {
  url: string;
  public_id: string;
  file_name: string;
  size: number;
}

@Injectable({ providedIn: 'root' })
export class ImageUploadService {
  private http = inject(HttpClient);

  upload(file: File, folder = 'company'): Observable<IImageUploadResponse> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<IImageUploadResponse>(
      `${environment.URL}/image/upload?folder=${folder}`,
      fd,
    );
  }
}
