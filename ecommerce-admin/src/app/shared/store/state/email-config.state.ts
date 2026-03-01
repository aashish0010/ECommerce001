import { Injectable, inject } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { IEmailConfig } from '../../interface/email-config.interface';
import { NotificationService } from '../../services/notification.service';
import { EmailConfigService } from '../../services/email-config.service';
import { GetEmailConfigAction, UpdateEmailConfigAction } from '../action/email-config.action';

export class EmailConfigStateModel {
  config: IEmailConfig | null;
}

@State<EmailConfigStateModel>({
  name: 'adminEmailConfig',
  defaults: { config: null },
})
@Injectable()
export class EmailConfigState {
  private emailConfigService = inject(EmailConfigService);
  private notificationService = inject(NotificationService);

  @Selector()
  static config(state: EmailConfigStateModel) {
    return state.config;
  }

  @Action(GetEmailConfigAction)
  getConfig(ctx: StateContext<EmailConfigStateModel>) {
    return this.emailConfigService.getConfig().pipe(
      tap({
        next: result => ctx.patchState({ config: result.data }),
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateEmailConfigAction)
  updateConfig(ctx: StateContext<EmailConfigStateModel>, { id, payload }: UpdateEmailConfigAction) {
    return this.emailConfigService.updateConfig(id, payload).pipe(
      tap({
        next: result => {
          ctx.patchState({ config: result.data });
          this.notificationService.showSuccess('Email configuration saved successfully.');
        },
        error: err => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to save email configuration.',
          );
          throw new Error(err?.error?.message);
        },
      }),
    );
  }
}
