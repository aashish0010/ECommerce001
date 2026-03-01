import { Injectable, inject } from '@angular/core';

import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { catchError, forkJoin, of, tap, timeout } from 'rxjs';

import { ICompanyDetailResponse } from '../../interface/company-detail.interface';
import { IThemeOptionStateModel } from '../../interface/theme-option.interface';
import { CompanyDetailService } from '../../services/company-detail.service';
import { ThemeOptionService } from '../../services/theme-option.service';
import {
  ThemeOptionsAction,
  UpdateProductBoxAction,
  UpdateSessionAction,
} from '../action/theme-option.action';
import { SelectedCurrencyAction } from '../action/setting.action';
import { CurrencyState } from './currency.state';

@State<IThemeOptionStateModel>({
  name: 'theme_option',
  defaults: {
    theme_option: null,
    exit: true,
    cookies: true,
    newsletter: true,
    productBox: '',
  },
})
@Injectable()
export class ThemeOptionState {
  private themeOptionService = inject(ThemeOptionService);
  private companyDetailService = inject(CompanyDetailService);
  private store = inject(Store);

  @Selector()
  static themeOptions(state: IThemeOptionStateModel) {
    return state.theme_option;
  }

  @Selector()
  static exit(state: IThemeOptionStateModel) {
    return state.exit;
  }

  @Selector()
  static cookies(state: IThemeOptionStateModel) {
    return state.cookies;
  }

  @Selector()
  static newsletter(state: IThemeOptionStateModel) {
    return state.newsletter;
  }

  @Selector()
  static productBox(state: IThemeOptionStateModel) {
    return state.productBox;
  }

  @Action(ThemeOptionsAction)
  getThemeOptions(ctx: StateContext<IThemeOptionStateModel>) {
    return forkJoin({
      theme: this.themeOptionService
        .getThemeOption()
        .pipe(timeout(3000), catchError(() => of({ options: {} }))),
      company: this.companyDetailService
        .getCompanyDetails()
        .pipe(timeout(3000), catchError(() => of(null))),
    }).pipe(
      tap({
        next: result => {
          const state = ctx.getState();
          const baseOptions = result?.theme?.options ?? result?.theme ?? {};
          const mergedOptions = result?.company
            ? this.applyCompanyDetails(baseOptions, result.company)
            : baseOptions;
          ctx.setState({
            ...state,
            theme_option: mergedOptions,
          });

          // Dispatch SelectedCurrencyAction based on company default currency
          const companyCurrencyCode = result?.company?.companyDetailRes?.companyDetail?.defaultCurrency;
          if (companyCurrencyCode) {
            const currencyList = this.store.selectSnapshot(CurrencyState.currency);
            const match = currencyList?.data?.find((c: any) => c.code === companyCurrencyCode);
            if (match) {
              ctx.dispatch(new SelectedCurrencyAction(match));
            }
          }
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateSessionAction)
  UpdateSession(ctx: StateContext<IThemeOptionStateModel>, action: UpdateSessionAction) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      cookies: action.slug == 'cookies' ? action.value : state.cookies,
      exit: action.slug == 'exit' ? action.value : state.exit,
      newsletter: action.slug == 'newsletter' ? action.value : state.newsletter,
    });
  }

  @Action(UpdateProductBoxAction)
  UpdateProductBox(ctx: StateContext<IThemeOptionStateModel>, action: UpdateProductBoxAction) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      productBox: action.value,
    });
  }

  private applyCompanyDetails(options: any, response: ICompanyDetailResponse) {
    if (!options || !response?.companyDetailRes?.companyDetail) {
      return options;
    }

    const detail = response.companyDetailRes.companyDetail;
    const services = response.companyDetailRes.companyServices || [];
    const social = response.companyDetailRes.companySocialInfos || [];

    const findSocial = (name: string) =>
      social.find(item => item?.socialMediaName?.toLowerCase() === name.toLowerCase())
        ?.socialMediaLink;

    const serviceNames = services
      .map(service => service?.name)
      .filter((name): name is string => Boolean(name));

    return {
      ...options,
      general: {
        ...options.general,
        site_title: detail.companyName || options.general?.site_title,
        site_tagline: detail.siteTagline || detail.companyDescription || options.general?.site_tagline,
        site_url: detail.siteUrl || options.general?.site_url,
        currency: detail.defaultCurrency || options.general?.currency,
        min_order_free_shipping: detail.minOrderFreeShipping ?? options.general?.min_order_free_shipping,
        min_order_amount: detail.minOrderAmount ?? options.general?.min_order_amount,
        tax_rate: detail.taxRate ?? options.general?.tax_rate,
      },
      logo: {
        ...options.logo,
        header_logo: detail.headerLogoUrl
          ? { original_url: detail.headerLogoUrl }
          : options.logo?.header_logo,
        footer_logo: detail.footerLogoUrl
          ? { original_url: detail.footerLogoUrl }
          : options.logo?.footer_logo,
        favicon_icon: detail.faviconUrl
          ? { original_url: detail.faviconUrl }
          : options.logo?.favicon_icon,
      },
      seo: {
        ...options.seo,
        meta_title: detail.companyName || options.seo?.meta_title,
        og_title: detail.companyName || options.seo?.og_title,
        meta_description: detail.companyDescription || options.seo?.meta_description,
        og_description: detail.companyDescription || options.seo?.og_description,
        meta_tags: serviceNames.length ? serviceNames.join(', ') : options.seo?.meta_tags,
      },
      header: {
        ...options.header,
        support_number: detail.companyPhoneNumber || options.header?.support_number,
      },
      footer: {
        ...options.footer,
        footer_about: detail.companyDescription || options.footer?.footer_about,
        about_address: detail.companyAddress || options.footer?.about_address,
        about_email: detail.companyEmail || options.footer?.about_email,
        support_email: detail.companyEmail || options.footer?.support_email,
        support_number: detail.companyPhoneNumber || options.footer?.support_number,
        copyright_content: detail.copyrightContent || options.footer?.copyright_content,
        facebook: findSocial('Facebook') || options.footer?.facebook,
        instagram: findSocial('Instagram') || options.footer?.instagram,
        twitter: findSocial('Twitter') || '',
        pinterest: findSocial('Pinterest') || '',
        tiktok: findSocial('Tiktok') || '',
      },
      contact_us: {
        ...options.contact_us,
        description: detail.companyDescription || options.contact_us?.description,
        detail_1: {
          ...options.contact_us?.detail_1,
          text: detail.companyPhoneNumber || options.contact_us?.detail_1?.text,
        },
        detail_2: {
          ...options.contact_us?.detail_2,
          text: detail.companyAddress || options.contact_us?.detail_2?.text,
        },
        detail_3: {
          ...options.contact_us?.detail_3,
          text: detail.companyEmail || options.contact_us?.detail_3?.text,
        },
        detail_4: {
          ...options.contact_us?.detail_4,
          text: detail.companyEmail || options.contact_us?.detail_4?.text,
        },
      },
      about_us: {
        ...options.about_us,
        about: {
          ...options.about_us?.about,
          description: detail.companyDescription || options.about_us?.about?.description,
        },
      },
    };
  }
}
