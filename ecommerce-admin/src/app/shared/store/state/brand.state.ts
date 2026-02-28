import { Injectable, inject } from '@angular/core';

import { Store, Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { IBrand } from '../../interface/brand.interface';
import { BrandService } from '../../services/brand.service';
import { NotificationService } from '../../services/notification.service';
import {
  GetBrandsAction,
  CreateBrandAction,
  EditBrandAction,
  UpdateBrandAction,
  UpdateBrandStatusAction,
  DeleteBrandAction,
  DeleteAllBrandAction,
  ExportBrandAction,
  ImportBrandAction,
} from '../action/brand.action';

export class BrandStateModel {
  brand = {
    data: [] as IBrand[],
    total: 0,
  };
  selectedBrand: IBrand | null;
}

@State<BrandStateModel>({
  name: 'brand',
  defaults: {
    brand: {
      data: [],
      total: 0,
    },
    selectedBrand: null,
  },
})
@Injectable()
export class BrandState {
  private store = inject(Store);
  private notificationService = inject(NotificationService);
  private brandService = inject(BrandService);

  @Selector()
  static brand(state: BrandStateModel) {
    return state.brand;
  }

  @Selector()
  static selectedBrand(state: BrandStateModel) {
    return state.selectedBrand;
  }

  @Selector()
  static brands(state: BrandStateModel) {
    return state.brand.data.map(res => {
      return { label: res?.name, value: res?.id };
    });
  }

  @Action(GetBrandsAction)
  getBrands(ctx: StateContext<BrandStateModel>, action: GetBrandsAction) {
    return this.brandService.getBrands(action.payload).pipe(
      tap({
        next: result => {
          ctx.patchState({
            brand: {
              data: result.data,
              total: result?.total ? result?.total : result.data?.length,
            },
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(CreateBrandAction)
  create(ctx: StateContext<BrandStateModel>, { payload }: CreateBrandAction) {
    return this.brandService.createBrand(payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Brand created successfully');
          this.store.dispatch(new GetBrandsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to create brand');
        },
      }),
    );
  }

  @Action(EditBrandAction)
  edit(ctx: StateContext<BrandStateModel>, { id }: EditBrandAction) {
    const state = ctx.getState();
    const cached = state.brand.data.find(brand => brand.id == id);
    if (cached) {
      ctx.patchState({ selectedBrand: cached });
      return;
    }
    return this.brandService.getBrands().pipe(
      tap({
        next: results => {
          const result = results.data.find(brand => brand.id == id);
          ctx.patchState({
            brand: {
              data: results.data,
              total: results.total || results.data.length,
            },
            selectedBrand: result || null,
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateBrandAction)
  update(ctx: StateContext<BrandStateModel>, { payload, id }: UpdateBrandAction) {
    return this.brandService.updateBrand(id, payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Brand updated successfully');
          this.store.dispatch(new GetBrandsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update brand');
        },
      }),
    );
  }

  @Action(UpdateBrandStatusAction)
  updateStatus(ctx: StateContext<BrandStateModel>, { id, status }: UpdateBrandStatusAction) {
    return this.brandService.updateBrandStatus(id, status).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Brand status updated successfully');
          this.store.dispatch(new GetBrandsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update status');
        },
      }),
    );
  }

  @Action(DeleteBrandAction)
  delete(ctx: StateContext<BrandStateModel>, { id }: DeleteBrandAction) {
    return this.brandService.deleteBrand(id).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Brand deleted successfully');
          this.store.dispatch(new GetBrandsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to delete brand');
        },
      }),
    );
  }

  @Action(DeleteAllBrandAction)
  deleteAll(ctx: StateContext<BrandStateModel>, { ids }: DeleteAllBrandAction) {
    return this.brandService.deleteAllBrands(ids).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Brands deleted successfully');
          this.store.dispatch(new GetBrandsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to delete brands');
        },
      }),
    );
  }

  @Action(ImportBrandAction)
  import(_ctx: StateContext<BrandStateModel>, _action: ImportBrandAction) {
    // Import Brand Logic Here
  }

  @Action(ExportBrandAction)
  export(_ctx: StateContext<BrandStateModel>, _action: ExportBrandAction) {
    // Export Brand Logic Here
  }
}
