import { Injectable, inject } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { ICompanyAdmin } from '../../interface/company.interface';
import { NotificationService } from '../../services/notification.service';
import { CompanyService } from '../../services/company.service';
import {
  GetCompanyAction,
  UpdateCompanyAction,
  UpdateSocialLinksAction,
} from '../action/company.action';

export class CompanyStateModel {
  company: ICompanyAdmin | null;
}

@State<CompanyStateModel>({
  name: 'adminCompany',
  defaults: { company: null },
})
@Injectable()
export class CompanyState {
  private companyService = inject(CompanyService);
  private notificationService = inject(NotificationService);

  @Selector()
  static company(state: CompanyStateModel) {
    return state.company;
  }

  @Action(GetCompanyAction)
  getCompany(ctx: StateContext<CompanyStateModel>) {
    return this.companyService.getCompany().pipe(
      tap({
        next: result => ctx.patchState({ company: result.data }),
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateCompanyAction)
  updateCompany(ctx: StateContext<CompanyStateModel>, { id, payload }: UpdateCompanyAction) {
    return this.companyService.updateCompany(id, payload).pipe(
      tap({
        next: result => {
          ctx.patchState({ company: result.data });
          this.notificationService.showSuccess('Company settings saved successfully.');
        },
        error: err => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to save company settings.',
          );
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateSocialLinksAction)
  updateSocialLinks(
    ctx: StateContext<CompanyStateModel>,
    { id, socialLinks }: UpdateSocialLinksAction,
  ) {
    return this.companyService.updateSocialLinks(id, socialLinks).pipe(
      tap({
        next: result => {
          ctx.patchState({ company: result.data });
          this.notificationService.showSuccess('Social links updated successfully.');
        },
        error: err => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to update social links.',
          );
          throw new Error(err?.error?.message);
        },
      }),
    );
  }
}
