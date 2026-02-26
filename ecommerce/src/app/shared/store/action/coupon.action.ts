export class GetCouponsAction {
  static readonly type = '[Coupon] Get';
}

export class ApplyCouponAction {
  static readonly type = '[Coupon] Apply';
  constructor(public code: string, public subtotal: number) {}
}

export class RemoveCouponAction {
  static readonly type = '[Coupon] Remove';
}
