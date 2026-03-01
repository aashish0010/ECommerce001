import { AsyncPipe, isPlatformBrowser, NgClass } from '@angular/common';
import { Component, DestroyRef, PLATFORM_ID, computed, inject, input } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

import { Store } from '@ngxs/store';
import { catchError, map, of, shareReplay } from 'rxjs';

import { ImageLink } from '../../../../shared/components/widgets/image-link/image-link';
import { IFashionOne } from '../../../../shared/interface/theme.interface';
import { CompanyDetailService } from '../../../../shared/services/company-detail.service';
import { ThemeOptionService } from '../../../../shared/services/theme-option.service';
import { GetCategoryAction } from '../../../../shared/store/action/category.action';
import { HomeConfigState } from '../../../../shared/store/state/home-config.state';
import { ThemeHomeSlider } from '../../widgets/theme-home-slider/theme-home-slider';
import { ThemeProductTabSection } from '../../widgets/theme-product-tab-section/theme-product-tab-section';
import { ThemeSocialMedia } from '../../widgets/theme-social-media/theme-social-media';
import { ThemeTitle } from '../../widgets/theme-title/theme-title';
import { FlightSearchWidgetComponent } from '../../../../shared/components/widgets/flight-search-widget/flight-search-widget';
import { ParcelTrackingWidgetComponent } from '../../../../shared/components/widgets/parcel-tracking-widget/parcel-tracking-widget';

@Component({
  selector: 'app-fashion-1',
  imports: [
    ThemeHomeSlider,
    ThemeTitle,
    ThemeProductTabSection,
    ThemeSocialMedia,
    FlightSearchWidgetComponent,
    ParcelTrackingWidgetComponent,
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

  private homeConfig = toSignal(this.store.select(HomeConfigState.config));

  effectiveHomeBanner = computed(() => {
    const jsonBanner = this.data()?.content?.home_banner;
    const config = this.homeConfig();
    if (!config || !jsonBanner) return jsonBanner;
    const banners = [...(jsonBanner.banners ?? [])];
    if (config.slider1_image_url && banners[0]) {
      banners[0] = { ...banners[0], image_url: config.slider1_image_url,
        redirect_link: { ...banners[0].redirect_link,
          link_type: config.slider1_link_type ?? banners[0].redirect_link?.link_type,
          link: config.slider1_link ?? banners[0].redirect_link?.link } };
    }
    if (config.slider2_image_url && banners[1]) {
      banners[1] = { ...banners[1], image_url: config.slider2_image_url,
        redirect_link: { ...banners[1].redirect_link,
          link_type: config.slider2_link_type ?? banners[1].redirect_link?.link_type,
          link: config.slider2_link ?? banners[1].redirect_link?.link } };
    }
    return { ...jsonBanner, banners };
  });

  effectiveOfferBanner = computed(() => {
    const jsonOffer = this.data()?.content?.offer_banner;
    const config = this.homeConfig();
    if (!config || !jsonOffer) return jsonOffer;
    return {
      ...jsonOffer,
      banner_1: config.offer1_image_url && jsonOffer.banner_1 ? {
        ...jsonOffer.banner_1, image_url: config.offer1_image_url,
        redirect_link: { ...jsonOffer.banner_1.redirect_link,
          link_type: config.offer1_link_type ?? jsonOffer.banner_1.redirect_link?.link_type,
          link: config.offer1_link ?? jsonOffer.banner_1.redirect_link?.link } } : jsonOffer.banner_1,
      banner_2: config.offer2_image_url && jsonOffer.banner_2 ? {
        ...jsonOffer.banner_2, image_url: config.offer2_image_url,
        redirect_link: { ...jsonOffer.banner_2.redirect_link,
          link_type: config.offer2_link_type ?? jsonOffer.banner_2.redirect_link?.link_type,
          link: config.offer2_link ?? jsonOffer.banner_2.redirect_link?.link } } : jsonOffer.banner_2,
    };
  });

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
