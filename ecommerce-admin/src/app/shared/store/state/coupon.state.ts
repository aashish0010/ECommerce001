import { Injectable, inject } from '@angular/core';

import { Store, Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { ICoupon } from '../../interface/coupon.interface';
import { CouponService } from '../../services/coupon.service';
import { NotificationService } from '../../services/notification.service';
import {
  GetCouponsAction,
  CreateCouponAction,
  EditCouponAction,
  UpdateCouponAction,
  UpdateCouponStatusAction,
  DeleteCouponAction,
  DeleteAllCouponAction,
} from '../action/coupon.action';

export class CouponStateModel {
  coupon = {
    data: [] as ICoupon[],
    total: 0,
  };
  selectedCoupon: ICoupon | null;
}

@State<CouponStateModel>({
  name: 'coupon',
  defaults: {
    coupon: {
      data: [],
      total: 0,
    },
    selectedCoupon: null,
  },
})
@Injectable()
export class CouponState {
  private store = inject(Store);
  private notificationService = inject(NotificationService);
  private couponService = inject(CouponService);

  @Selector()
  static coupon(state: CouponStateModel) {
    return state.coupon;
  }

  @Selector()
  static selectedCoupon(state: CouponStateModel) {
    return state.selectedCoupon;
  }

  @Selector()
  static coupons(state: CouponStateModel) {
    return state.coupon.data.map(coupon => {
      return { label: coupon?.title, value: coupon?.id };
    });
  }

  @Action(GetCouponsAction)
  getCoupons(ctx: StateContext<CouponStateModel>, action: GetCouponsAction) {
    return this.couponService.getCoupons(action.payload).pipe(
      tap({
        next: result => {
          ctx.patchState({
            coupon: {
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

  @Action(CreateCouponAction)
  create(ctx: StateContext<CouponStateModel>, action: CreateCouponAction) {
    return this.couponService.createCoupon(action.payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Coupon created successfully.');
          return this.store.dispatch(new GetCouponsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to create coupon.');
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(EditCouponAction)
  edit(ctx: StateContext<CouponStateModel>, { id }: EditCouponAction) {
    return this.couponService.getCouponById(id).pipe(
      tap({
        next: result => {
          ctx.patchState({ selectedCoupon: result });
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateCouponAction)
  update(ctx: StateContext<CouponStateModel>, { payload, id }: UpdateCouponAction) {
    return this.couponService.updateCoupon(id, payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Coupon updated successfully.');
          return this.store.dispatch(new GetCouponsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update coupon.');
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateCouponStatusAction)
  updateStatus(ctx: StateContext<CouponStateModel>, { id, status }: UpdateCouponStatusAction) {
    return this.couponService.updateCouponStatus(id, status).pipe(
      tap({
        next: () => {
          const state = ctx.getState();
          const updated = state.coupon.data.map(c =>
            c.id === id ? { ...c, status } : c,
          );
          ctx.patchState({ coupon: { ...state.coupon, data: updated } });
          this.notificationService.showSuccess('Coupon status updated.');
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update status.');
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(DeleteCouponAction)
  delete(ctx: StateContext<CouponStateModel>, { id }: DeleteCouponAction) {
    return this.couponService.deleteCoupon(id).pipe(
      tap({
        next: () => {
          const state = ctx.getState();
          const filtered = state.coupon.data.filter(c => c.id !== id);
          ctx.patchState({ coupon: { data: filtered, total: filtered.length } });
          this.notificationService.showSuccess('Coupon deleted successfully.');
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to delete coupon.');
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(DeleteAllCouponAction)
  deleteAll(ctx: StateContext<CouponStateModel>, { ids }: DeleteAllCouponAction) {
    return this.couponService.deleteAllCoupons(ids).pipe(
      tap({
        next: () => {
          const state = ctx.getState();
          const filtered = state.coupon.data.filter(c => !ids.includes(c.id));
          ctx.patchState({ coupon: { data: filtered, total: filtered.length } });
          this.notificationService.showSuccess('Coupons deleted successfully.');
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to delete coupons.');
          throw new Error(err?.error?.message);
        },
      }),
    );
  }
}
