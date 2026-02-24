import { NgStyle } from '@angular/common';
import { Component, DestroyRef, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { NoData } from '../../../../../../shared/components/widgets/no-data/no-data';
import { IColor, IColorModel } from '../../../../../../shared/interface/color.interface';
import { Params } from '../../../../../../shared/interface/core.interface';
import { GetColorsAction } from '../../../../../../shared/store/action/color.action';
import { ColorState } from '../../../../../../shared/store/state/color.state';

@Component({
  selector: 'app-collection-color-filter',
  imports: [TranslateModule, NgStyle, NoData],
  templateUrl: './collection-color-filter.html',
  styleUrl: './collection-color-filter.scss',
})
export class CollectionColorFilter {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(Store);
  private destroyRef = inject(DestroyRef);

  color$: Observable<IColorModel> = inject(Store).select(ColorState.color);

  @Input() filter: Params;

  public colors: IColor[] = [];
  public selectedColors: string[] = [];

  ngOnInit() {
    this.store.dispatch(new GetColorsAction());
    this.color$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(color => {
      this.colors = color.data;
    });
  }

  ngOnChanges() {
    const filter = this.filter;
    this.selectedColors = filter!['color'] ? filter!['color'].split(',') : [];
  }

  toggleColor(slug: string) {
    const index = this.selectedColors.indexOf(slug);
    if (index === -1) {
      this.selectedColors.push(slug);
    } else {
      this.selectedColors.splice(index, 1);
    }

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        color: this.selectedColors.length ? this.selectedColors.join(',') : null,
        page: 1,
      },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  isSelected(slug: string): boolean {
    return this.selectedColors.includes(slug);
  }

  isLightColor(hex: string): boolean {
    if (!hex) return false;
    const h = hex.replace('#', '');
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.8;
  }
}
