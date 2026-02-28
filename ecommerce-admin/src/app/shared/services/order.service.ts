import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Params } from '../interface/core.interface';
import { IOrderModel } from '../interface/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);

  getOrders(payload?: Params): Observable<IOrderModel> {
    return this.http.get<IOrderModel>(`${environment.URL}/order/admin`, { params: payload });
  }

  updateOrderStatus(id: number, status: string): Observable<any> {
    return this.http.put(`${environment.URL}/order/admin/${id}/status`, { status });
  }
}
