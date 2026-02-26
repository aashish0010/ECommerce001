import { Injectable, inject } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { IApplyCouponResponse, ICoupon } from '../../interface/coupon.interface';
import { CouponService } from '../../services/coupon.service';
import { ApplyCouponAction, GetCouponsAction, RemoveCouponAction } from '../action/coupon.action';

export class CouponStateModel {
  coupons: ICoupon[] = [];
  appliedCoupon: IApplyCouponResponse | null = null;
  couponError: string | null = null;
}

@State<CouponStateModel>({
  name: 'coupon',
  defaults: {
    coupons: [],
    appliedCoupon: null,
    couponError: null,
  },
})
@Injectable()
export class CouponState {
  private couponService = inject(CouponService);

  @Selector()
  static coupons(state: CouponStateModel) {
    return state.coupons;
  }

  @Selector()
  static appliedCoupon(state: CouponStateModel) {
    return state.appliedCoupon;
  }

  @Selector()
  static couponError(state: CouponStateModel) {
    return state.couponError;
  }

  @Action(GetCouponsAction)
  getCoupons(ctx: StateContext<CouponStateModel>) {
    return this.couponService.getCoupons().pipe(
      tap({
        next: result => {
          ctx.patchState({ coupons: result.data ?? [] });
        },
        error: () => {
          ctx.patchState({ coupons: [] });
        },
      }),
    );
  }

  @Action(ApplyCouponAction)
  applyCoupon(ctx: StateContext<CouponStateModel>, action: ApplyCouponAction) {
    ctx.patchState({ couponError: null });
    return this.couponService.applyCoupon(action.code, action.subtotal).pipe(
      tap({
        next: result => {
          ctx.patchState({ appliedCoupon: result, couponError: null });
        },
        error: err => {
          ctx.patchState({
            appliedCoupon: null,
            couponError: err?.error?.message ?? 'Invalid coupon code.',
          });
          throw new Error(err?.error?.message ?? 'Invalid coupon code.');
        },
      }),
    );
  }

  @Action(RemoveCouponAction)
  removeCoupon(ctx: StateContext<CouponStateModel>) {
    ctx.patchState({ appliedCoupon: null, couponError: null });
  }
}
