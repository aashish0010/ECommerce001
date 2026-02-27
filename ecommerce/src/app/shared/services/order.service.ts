import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Params } from '@angular/router';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IOrder } from '../interface/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);

  public skeletonLoader: boolean = false;

  getOrders(payload?: Params): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${environment.baseURL}order`);
  }

  viewOrder(id: string): Observable<IOrder> {
    return this.http.get<IOrder>(`${environment.baseURL}order/${id}`);
  }

  orderTracking(payload: { order_number: string; email_or_phone: string }): Observable<IOrder> {
    return this.http.get<IOrder>(`${environment.URL}/trackOrder`, { params: payload });
  }

  placeOrder(payload: any): Observable<any> {
    return this.http.post<any>(`${environment.baseURL}order`, payload);
  }
}
