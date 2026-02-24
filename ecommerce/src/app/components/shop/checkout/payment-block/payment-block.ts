import { UpperCasePipe } from '@angular/common';
import { Component, output, input, OnInit } from '@angular/core';

import { IValues } from '../../../../shared/interface/setting.interface';

@Component({
  selector: 'app-payment-block',
  imports: [UpperCasePipe],
  templateUrl: './payment-block.html',
  styleUrl: './payment-block.scss',
})
export class PaymentBlock implements OnInit {
  readonly setting = input<IValues>();

  readonly selectPaymentMethod = output<string>();

  paymentMethods = [
    { name: 'cash_on_delivery', title: 'Cash on Delivery' },
    { name: 'mobile_payment', title: 'Mobile Payment' },
  ];

  ngOnInit() {
    // Auto-select the first payment method
    this.selectPaymentMethod.emit(this.paymentMethods[0].name);
  }

  set(value: string) {
    this.selectPaymentMethod.emit(value);
  }
}
