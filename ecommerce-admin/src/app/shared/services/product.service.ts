import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Params } from '../interface/core.interface';
import { IProduct, IProductModel } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts(payload?: Params): Observable<IProductModel> {
    // Map frontend filter params to backend query params
    const params: any = {};
    if (payload) {
      if (payload['page']) params['page'] = payload['page'];
      if (payload['paginate']) params['pageSize'] = payload['paginate'];
      if (payload['search']) params['search'] = payload['search'];
      if (payload['category_ids']) {
        // Backend expects single categoryId; take first if comma-separated
        const ids = String(payload['category_ids']).split(',');
        if (ids.length > 0) params['categoryId'] = ids[0];
      }
      if (payload['brand_ids']) {
        const ids = String(payload['brand_ids']).split(',');
        if (ids.length > 0) params['brandId'] = ids[0];
      }
    }
    return this.http.get<IProductModel>(`${environment.URL}/product`, { params });
  }

  getProductBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${environment.URL}/product/${slug}`);
  }

  createProduct(payload: any): Observable<any> {
    return this.http.post<any>(`${environment.URL}/product`, {
      name: payload.name,
      shortDescription: payload.short_description || '',
      description: payload.description || '',
      price: payload.price || 0,
      salePrice: payload.sale_price || null,
      sku: payload.sku || '',
      imageUrl: payload.image_url || '',
      stockStatus: payload.stock_status || 'in_stock',
      quantity: payload.quantity || 0,
      isFeatured: payload.is_featured || false,
      categoryId: payload.category_id || payload.categories?.[0] || 0,
      brandId: payload.brand_id || null,
      colorIds: payload.color_ids || [],
      companyInfoId: 1,
    });
  }

  updateProduct(id: number, payload: any): Observable<any> {
    return this.http.put<any>(`${environment.URL}/product/${id}`, {
      name: payload.name,
      shortDescription: payload.short_description || '',
      description: payload.description || '',
      price: payload.price || 0,
      salePrice: payload.sale_price || null,
      sku: payload.sku || '',
      imageUrl: payload.image_url || '',
      stockStatus: payload.stock_status || 'in_stock',
      quantity: payload.quantity || 0,
      isFeatured: payload.is_featured || false,
      status: payload.status ?? true,
      categoryId: payload.category_id || payload.categories?.[0] || 0,
      brandId: payload.brand_id || null,
      colorIds: payload.color_ids || [],
    });
  }

  updateProductStatus(id: number, status: boolean): Observable<any> {
    return this.http.patch<any>(`${environment.URL}/product/${id}/status`, { status });
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.URL}/product/${id}`);
  }

  deleteAllProducts(ids: number[]): Observable<void> {
    return this.http.post<void>(`${environment.URL}/product/delete-all`, { ids });
  }
}
