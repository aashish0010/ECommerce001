import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ICategory, ICategoryModel } from '../interface/category.interface';
import { Params } from '../interface/core.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  getCategories(payload?: Params): Observable<ICategoryModel> {
    return this.http.get<ICategoryModel>(`${environment.URL}/category`, { params: payload });
  }

  createCategory(payload: Partial<ICategory>): Observable<ICategoryModel> {
    return this.http.post<ICategoryModel>(`${environment.URL}/category`, {
      name: payload.name,
      description: payload.description || '',
      imageUrl: payload.image_url || '',
      parentId: payload.parent_id || null,
      companyInfoId: 1,
    });
  }

  updateCategory(id: number, payload: Partial<ICategory>): Observable<ICategoryModel> {
    return this.http.put<ICategoryModel>(`${environment.URL}/category/${id}`, {
      name: payload.name,
      description: payload.description || '',
      imageUrl: payload.image_url || '',
      parentId: payload.parent_id || null,
      status: payload.status ?? true,
    });
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.URL}/category/${id}`);
  }
}
