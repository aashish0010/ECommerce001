import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { IProduct } from '../../../../../../shared/interface/product.interface';

@Component({
  selector: 'app-product-information',
  imports: [TranslateModule, NgStyle],
  templateUrl: './product-information.html',
  styleUrl: './product-information.scss',
})
export class ProductInformation {
  readonly product = input<IProduct | null>();

  isLightColor(hex: string | undefined): boolean {
    if (!hex) return false;
    const h = hex.replace('#', '');
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.8;
  }
}
