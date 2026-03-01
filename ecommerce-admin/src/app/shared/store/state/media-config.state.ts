import { Injectable, inject } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { IMediaConfig } from '../../interface/media-config.interface';
import { NotificationService } from '../../services/notification.service';
import { MediaConfigService } from '../../services/media-config.service';
import { GetMediaConfigAction, UpdateMediaConfigAction } from '../action/media-config.action';

export class MediaConfigStateModel {
  config: IMediaConfig | null;
}

@State<MediaConfigStateModel>({
  name: 'adminMediaConfig',
  defaults: { config: null },
})
@Injectable()
export class MediaConfigState {
  private mediaConfigService = inject(MediaConfigService);
  private notificationService = inject(NotificationService);

  @Selector()
  static config(state: MediaConfigStateModel) {
    return state.config;
  }

  @Action(GetMediaConfigAction)
  getConfig(ctx: StateContext<MediaConfigStateModel>) {
    return this.mediaConfigService.getConfig().pipe(
      tap({
        next: result => ctx.patchState({ config: result.data }),
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateMediaConfigAction)
  updateConfig(ctx: StateContext<MediaConfigStateModel>, { id, payload }: UpdateMediaConfigAction) {
    return this.mediaConfigService.updateConfig(id, payload).pipe(
      tap({
        next: result => {
          ctx.patchState({ config: result.data });
          this.notificationService.showSuccess('Media configuration saved successfully.');
        },
        error: err => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to save media configuration.',
          );
          throw new Error(err?.error?.message);
        },
      }),
    );
  }
}
