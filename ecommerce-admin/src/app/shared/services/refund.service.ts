import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Params } from '../interface/core.interface';
import { IRefund, IRefundModel } from '../interface/refund.interface';

@Injectable({
  providedIn: 'root',
})
export class RefundService {
  private http = inject(HttpClient);

  getRefunds(_payload?: Params): Observable<IRefundModel> {
    const params: any = { status: 'cancelled', paginate: 100 };
    return this.http.get<any>(`${environment.URL}/order/admin`, { params }).pipe(
      map(res => {
        const orders: any[] = Array.isArray(res) ? res : (res?.data || []);
        const refunds: IRefund[] = orders.map(o => this.mapOrderToRefund(o));
        return {
          data: refunds,
          total: res?.total || refunds.length,
        };
      }),
    );
  }

  private mapOrderToRefund(order: any): IRefund {
    return {
      id: order.id,
      reason: '',
      message: '',
      amount: order.total || 0,
      quantity: 0,
      store_id: 0,
      store: null,
      order: { order_number: order.order_number } as any,
      order_id: order.order_number?.toString(),
      product_id: 0,
      consumer_id: 0,
      user: { name: order.consumer_name } as any,
      consumer_name: order.consumer_name,
      consumer_phone: '',
      refund_image_id: 0,
      payment_type: order.payment_method || '',
      status: order.order_status?.name || order.status || 'cancelled',
      refund_status: order.order_status?.name || order.status || 'cancelled',
      is_used: 0,
      refund_image: null,
      total_pending_refunds: 0,
      created_at: order.created_at,
    };
  }
}
