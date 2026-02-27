import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IWishlistModel } from '../interface/wishlist.interface';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private http = inject(HttpClient);

  public skeletonLoader: boolean = false;

  getWishlistItems(): Observable<IWishlistModel> {
    return this.http.get<IWishlistModel>(`${environment.baseURL}wishlist`);
  }

  addToWishlist(productId: number): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${environment.baseURL}wishlist`, {
      product_id: productId,
    });
  }

  removeFromWishlist(productId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${environment.baseURL}wishlist/${productId}`,
    );
  }
}
