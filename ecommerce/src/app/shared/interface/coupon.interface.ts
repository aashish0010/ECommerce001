export interface ICoupon {
  id: number;
  code: string;
  title: string;
  description: string;
  discount_type: string;  // "flat" | "percentage"
  amount: number;
  min_spend: number | null;
  max_spend: number | null;
  expires_at: string | null;
  is_active: boolean;
}

export interface ICouponListResponse {
  status: number;
  code: number;
  message: string;
  data: ICoupon[];
}

export interface IApplyCouponResponse {
  code: string;
  title: string;
  discount_type: string;
  amount: number;
  discount_amount: number;
}
