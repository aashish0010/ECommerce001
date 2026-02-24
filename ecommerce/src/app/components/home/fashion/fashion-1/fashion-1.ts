import { AsyncPipe, isPlatformBrowser, NgClass } from '@angular/common';
import { Component, DestroyRef, PLATFORM_ID, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Store } from '@ngxs/store';
import { catchError, map, of, shareReplay } from 'rxjs';

import { ImageLink } from '../../../../shared/components/widgets/image-link/image-link';
import { IFashionOne } from '../../../../shared/interface/theme.interface';
import { CompanyDetailService } from '../../../../shared/services/company-detail.service';
import { ThemeOptionService } from '../../../../shared/services/theme-option.service';
import { GetCategoryAction } from '../../../../shared/store/action/category.action';
import { ThemeHomeSlider } from '../../widgets/theme-home-slider/theme-home-slider';
import { ThemeProductTabSection } from '../../widgets/theme-product-tab-section/theme-product-tab-section';
import { ThemeSocialMedia } from '../../widgets/theme-social-media/theme-social-media';
import { ThemeTitle } from '../../widgets/theme-title/theme-title';

@Component({
  selector: 'app-fashion-1',
  imports: [
    ThemeHomeSlider,
    ThemeTitle,
    ThemeProductTabSection,
    ThemeSocialMedia,
    ImageLink,
    NgClass,
    AsyncPipe,
  ],
  templateUrl: './fashion-1.html',
  styleUrl: './fashion-1.scss',
})
export class Fashion1 {
  private store = inject(Store);
  private themeOptionService = inject(ThemeOptionService);
  private companyDetailService = inject(CompanyDetailService);
  private destroyRef = inject(DestroyRef);

  readonly data = input<IFashionOne>();
  readonly slug = input<string>();

  public categoriesReady = false;

  private platformId: boolean;

  companyServices$ = this.companyDetailService.getCompanyDetails().pipe(
    map(res => res?.companyDetailRes?.companyServices ?? []),
    catchError(() => of([])),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  constructor() {
    const platformId = inject<Object>(PLATFORM_ID);
    this.platformId = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    const data = this.data();
    if (data?.slug == this.slug()) {
      if (this.platformId) {
        document.body.classList.add('skeleton-body');
      }

      const done = () => {
        this.categoriesReady = true;
        if (this.platformId) {
          document.body.classList.remove('skeleton-body');
        }
      };

      this.store
        .dispatch(new GetCategoryAction({ status: 1 }))
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({ complete: done, error: done });
    }
  }

  getServiceIcon(name?: string): string {
    const v = name?.toLowerCase() ?? '';
    if (v.includes('cargo')) return 'ri-truck-line';
    if (v.includes('air') || v.includes('ticket') || v.includes('flight')) return 'ri-plane-line';
    if (v.includes('courier')) return 'ri-e-bike-2-line';
    if (v.includes('delivery')) return 'ri-send-plane-2-line';
    if (v.includes('market') || v.includes('shop') || v.includes('product')) return 'ri-store-2-line';
    if (v.includes('travel') || v.includes('tour')) return 'ri-map-pin-2-line';
    if (v.includes('logistics')) return 'ri-route-line';
    return 'ri-service-line';
  }

  getServiceDescription(name?: string): string {
    const v = name?.toLowerCase() ?? '';
    if (v.includes('cargo')) return 'Reliable cargo shipping & global logistics';
    if (v.includes('air') || v.includes('ticket') || v.includes('flight')) return 'Domestic & international flight bookings';
    if (v.includes('courier')) return 'Express courier services nationwide';
    if (v.includes('delivery')) return 'Fast & reliable doorstep delivery';
    if (v.includes('market') || v.includes('shop') || v.includes('product')) return 'Quality products for every need';
    if (v.includes('travel') || v.includes('tour')) return 'Seamless travel & tour packages';
    if (v.includes('logistics')) return 'End-to-end supply chain solutions';
    return 'Professional solutions for our customers';
  }

  getServiceAccent(name?: string): string {
    const v = name?.toLowerCase() ?? '';
    if (v.includes('cargo')) return 'accent-orange';
    if (v.includes('air') || v.includes('ticket') || v.includes('flight')) return 'accent-blue';
    if (v.includes('courier')) return 'accent-teal';
    if (v.includes('delivery')) return 'accent-purple';
    if (v.includes('market') || v.includes('shop') || v.includes('product')) return 'accent-green';
    if (v.includes('travel') || v.includes('tour')) return 'accent-pink';
    if (v.includes('logistics')) return 'accent-indigo';
    return 'accent-default';
  }
}
