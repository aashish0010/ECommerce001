import { Injectable, inject } from '@angular/core';

import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs';

import { ICurrency } from '../../interface/currency.interface';
import { CurrencyService } from '../../services/currency.service';
import { GetCurrenciesAction } from '../action/currency.action';
import { SelectedCurrencyAction } from '../action/setting.action';

export class CurrencyStateModel {
  currency = {
    data: [] as ICurrency[],
    total: 0,
  };
}

@State<CurrencyStateModel>({
  name: 'currency',
  defaults: {
    currency: {
      data: [],
      total: 0,
    },
  },
})
@Injectable()
export class CurrencyState {
  private currencyService = inject(CurrencyService);
  private store = inject(Store);

  @Selector()
  static currency(state: CurrencyStateModel) {
    return state.currency;
  }

  @Action(GetCurrenciesAction)
  getCurrencies(ctx: StateContext<CurrencyStateModel>, action: GetCurrenciesAction) {
    return this.currencyService.getCurrencies(action.payload).pipe(
      tap({
        next: result => {
          ctx.patchState({
            currency: {
              data: result.data,
              total: result?.total ? result?.total : result.data?.length,
            },
          });

          // After currencies load, dispatch SelectedCurrencyAction if ThemeOptionState has a company currency code.
          // Use raw state selector to avoid circular import with ThemeOptionState.
          const companyCurrencyCode = this.store.selectSnapshot(
            (state: any) => state.theme_option?.theme_option?.general?.currency,
          );
          if (companyCurrencyCode) {
            const match = result.data?.find((c: ICurrency) => c.code === companyCurrencyCode);
            if (match) ctx.dispatch(new SelectedCurrencyAction(match));
          }
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }
}
