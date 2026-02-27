import { AsyncPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Observable, map } from 'rxjs';

import { NoData } from '../../../shared/components/widgets/no-data/no-data';
import { IOrder } from '../../../shared/interface/order.interface';
import { CurrencySymbolPipe } from '../../../shared/pipe/currency.pipe';
import { GetOrdersAction } from '../../../shared/store/action/order.action';
import { OrderState } from '../../../shared/store/state/order.state';

@Component({
  selector: 'app-refund',
  imports: [TranslateModule, NoData, AsyncPipe, DatePipe, TitleCasePipe, CurrencySymbolPipe],
  templateUrl: './refund.html',
  styleUrl: './refund.scss',
})
export class Refund {
  private store = inject(Store);

  /** Cancelled / refunded / returned orders shown as refund history */
  refundOrders$: Observable<IOrder[]> = this.store.select(OrderState.order).pipe(
    map(orderModel => (orderModel?.data ?? []).filter(o =>
      ['cancelled', 'refunded', 'returned'].includes((o.status ?? '').toLowerCase())
    ))
  );

  constructor() {
    this.store.dispatch(new GetOrdersAction());
  }
}
