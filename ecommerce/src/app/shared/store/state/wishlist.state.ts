import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs';

import { IProduct } from '../../interface/product.interface';
import { NotificationService } from '../../services/notification.service';
import { WishlistService } from '../../services/wishlist.service';
import {
  GetWishlistAction,
  AddToWishlistAction,
  DeleteWishlistAction,
} from '../action/wishlist.action';

export class WishlistStateModel {
  wishlist = {
    data: [] as IProduct[],
    total: 0,
  };
  wishlistIds: number[];
}

@State<WishlistStateModel>({
  name: 'wishlist',
  defaults: {
    wishlist: {
      data: [],
      total: 0,
    },
    wishlistIds: [],
  },
})
@Injectable()
export class WishlistState {
  private store = inject(Store);
  router = inject(Router);
  private wishlistService = inject(WishlistService);
  private notificationService = inject(NotificationService);

  @Selector()
  static wishlistItems(state: WishlistStateModel) {
    return state.wishlist;
  }

  @Selector()
  static wishlistIds(state: WishlistStateModel) {
    return state.wishlistIds;
  }

  @Action(GetWishlistAction)
  getWishlistItems(ctx: StateContext<WishlistStateModel>) {
    if (!this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      return;
    }
    this.wishlistService.skeletonLoader = true;
    return this.wishlistService.getWishlistItems().pipe(
      tap({
        next: result => {
          const data = Array.isArray(result) ? result : result.data || [];
          const ids = data.map((product: IProduct) => product.id);
          ctx.patchState({
            wishlist: {
              data: data,
              total: result?.total ? result.total : data.length,
            },
            wishlistIds: ids,
          });
        },
        complete: () => {
          this.wishlistService.skeletonLoader = false;
        },
        error: err => {
          this.wishlistService.skeletonLoader = false;
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(AddToWishlistAction)
  add(ctx: StateContext<WishlistStateModel>, action: AddToWishlistAction) {
    if (!this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      this.notificationService.showError('Please login to add items to wishlist.');
      return;
    }
    const productId = action.payload?.['product_id'];
    if (!productId) return;

    return this.wishlistService.addToWishlist(productId).pipe(
      tap({
        next: () => {
          const state = ctx.getState();
          if (!state.wishlistIds.includes(productId)) {
            ctx.patchState({
              wishlistIds: [...state.wishlistIds, productId],
            });
          }
          this.notificationService.showSuccess('Added to wishlist.');
          this.store.dispatch(new GetWishlistAction());
        },
        error: err => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to add to wishlist.',
          );
        },
      }),
    );
  }

  @Action(DeleteWishlistAction)
  delete(ctx: StateContext<WishlistStateModel>, { id }: DeleteWishlistAction) {
    return this.wishlistService.removeFromWishlist(id).pipe(
      tap({
        next: () => {
          const state = ctx.getState();
          ctx.patchState({
            wishlist: {
              data: state.wishlist.data.filter(value => value.id !== id),
              total: state.wishlist.total - 1,
            },
            wishlistIds: state.wishlistIds.filter(wId => wId !== id),
          });
          this.notificationService.showSuccess('Removed from wishlist.');
        },
        error: err => {
          this.notificationService.showError(
            err?.error?.message || 'Failed to remove from wishlist.',
          );
        },
      }),
    );
  }
}
