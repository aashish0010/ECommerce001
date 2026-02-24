import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, catchError, map, shareReplay, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ICategory, ICategoryModel } from '../interface/category.interface';
import { Params } from '../interface/core.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  public searchSkeleton: boolean = false;

  // Single shared observable — all concurrent callers share one HTTP request per session
  private _cache$: Observable<ICategoryModel> | null = null;

  getCategories(_payload?: Params): Observable<ICategoryModel> {
    // Return in-memory cache if available (prevents duplicate HTTP calls within the session)
    if (this._cache$) return this._cache$;

    // Fetch from API — shareReplay(1) ensures all concurrent callers share one request
    this._cache$ = this.http
      .get<any>(`${environment.baseURL}product/categories`, {
        params: { companyInfoId: environment.companyInfoId, status: 1 },
      })
      .pipe(
        map(res => {
          const categories = (res.data || res.categories || []) as ICategory[];
          // Return a shallow copy so callers cannot mutate the shared cached reference
          return { data: [...categories], total: categories.length } as ICategoryModel;
        }),
        shareReplay(1),
        catchError(err => {
          this._cache$ = null; // Reset so the next call retries
          return throwError(() => err);
        }),
      );

    return this._cache$;
  }

  getCategoryBySlug(slug: string): Observable<ICategory> {
    return this.getCategories().pipe(
      map(res => {
        const allCategories = res.data || [];
        for (const cat of allCategories) {
          if (cat.slug === slug) return cat;
          if (cat.subcategories?.length) {
            const sub = cat.subcategories.find(s => s.slug === slug);
            if (sub) return sub;
          }
        }
        return allCategories[0];
      }),
    );
  }
}
