import { Injectable, inject } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { IHomeConfig } from '../../interface/home-config.interface';
import { HomeConfigService } from '../../services/home-config.service';
import { GetHomeConfigAction } from '../action/home-config.action';

export class HomeConfigStateModel {
  config: IHomeConfig | null;
}

@State<HomeConfigStateModel>({
  name: 'homeConfig',
  defaults: { config: null },
})
@Injectable()
export class HomeConfigState {
  private homeConfigService = inject(HomeConfigService);

  @Selector()
  static config(state: HomeConfigStateModel) {
    return state.config;
  }

  @Action(GetHomeConfigAction)
  getConfig(ctx: StateContext<HomeConfigStateModel>) {
    return this.homeConfigService.getConfig().pipe(
      tap({
        next: result => ctx.patchState({ config: result.data }),
        error: () => {
          // Silently fail — home config is optional; fall back to JSON data
        },
      }),
    );
  }
}
