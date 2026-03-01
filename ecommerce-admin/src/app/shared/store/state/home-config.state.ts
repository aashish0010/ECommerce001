import { Injectable, inject } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { IHomeConfig } from '../../interface/home-config.interface';
import { NotificationService } from '../../services/notification.service';
import { HomeConfigService } from '../../services/home-config.service';
import { GetHomeConfigAction, UpdateHomeConfigAction } from '../action/home-config.action';

export class HomeConfigStateModel {
  config: IHomeConfig | null;
}

@State<HomeConfigStateModel>({
  name: 'adminHomeConfig',
  defaults: { config: null },
})
@Injectable()
export class HomeConfigState {
  private homeConfigService = inject(HomeConfigService);
  private notificationService = inject(NotificationService);

  @Selector()
  static config(state: HomeConfigStateModel) {
    return state.config;
  }

  @Action(GetHomeConfigAction)
  getConfig(ctx: StateContext<HomeConfigStateModel>) {
    return this.homeConfigService.getConfig().pipe(
      tap({
        next: result => ctx.patchState({ config: result.data }),
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateHomeConfigAction)
  updateConfig(ctx: StateContext<HomeConfigStateModel>, { id, payload }: UpdateHomeConfigAction) {
    return this.homeConfigService.updateConfig(id, payload).pipe(
      tap({
        next: result => {
          ctx.patchState({ config: result.data });
          this.notificationService.showSuccess('Home configuration saved successfully.');
        },
        error: err => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to save home configuration.',
          );
          throw new Error(err?.error?.message);
        },
      }),
    );
  }
}
