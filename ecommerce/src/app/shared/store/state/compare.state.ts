import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs';

import { IProduct } from '../../interface/product.interface';
import { CompareService } from '../../services/compare.service';
import { NotificationService } from '../../services/notification.service';
import {
  AddToCompareAction,
  DeleteCompareAction,
  GetCompareAction,
} from '../action/compare.action';

export class CompareStateModel {
  items: IProduct[];
  total: number;
  comparIds: number[];
}

@State<CompareStateModel>({
  name: 'compare',
  defaults: {
    items: [],
    total: 0,
    comparIds: [],
  },
})
@Injectable()
export class CompareState {
  private store = inject(Store);
  router = inject(Router);
  private notificationService = inject(NotificationService);
  private compareService = inject(CompareService);

  @Selector()
  static compareItems(state: CompareStateModel) {
    return state.items;
  }

  @Selector()
  static compareIds(state: CompareStateModel) {
    return state.comparIds;
  }

  @Selector()
  static compareTotal(state: CompareStateModel) {
    return state.total;
  }

  @Action(GetCompareAction)
  getCompareItems(ctx: StateContext<CompareStateModel>) {
    if (!this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      return;
    }
    this.compareService.skeletonLoader = true;
    return this.compareService.getComparItems().pipe(
      tap({
        next: result => {
          const data = Array.isArray(result) ? result : result.data || [];
          const ids = data.map((product: IProduct) => product.id);
          ctx.patchState({
            items: data,
            total: result?.total ? result.total : data.length,
            comparIds: ids,
          });
        },
        complete: () => {
          this.compareService.skeletonLoader = false;
        },
        error: err => {
          this.compareService.skeletonLoader = false;
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(AddToCompareAction)
  add(ctx: StateContext<CompareStateModel>, action: AddToCompareAction) {
    if (!this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      this.notificationService.showError('Please login to compare products.');
      return;
    }
    const productId = action.payload?.['product_id'];
    if (!productId) return;

    return this.compareService.addToCompare(productId).pipe(
      tap({
        next: () => {
          const state = ctx.getState();
          if (!state.comparIds.includes(productId)) {
            ctx.patchState({
              comparIds: [...state.comparIds, productId],
            });
          }
          this.notificationService.showSuccess('Added to compare.');
          this.store.dispatch(new GetCompareAction());
        },
        error: err => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to add to compare.',
          );
        },
      }),
    );
  }

  @Action(DeleteCompareAction)
  delete(ctx: StateContext<CompareStateModel>, { id }: DeleteCompareAction) {
    return this.compareService.removeFromCompare(id).pipe(
      tap({
        next: () => {
          const state = ctx.getState();
          ctx.patchState({
            items: state.items.filter(item => item.id !== id),
            total: state.total - 1,
            comparIds: state.comparIds.filter(cId => cId !== id),
          });
          this.notificationService.showSuccess('Removed from compare.');
        },
        error: err => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to remove from compare.',
          );
        },
      }),
    );
  }
}
