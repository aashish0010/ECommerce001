import { IAttachment } from './attachment.interface';
import { IPaymentDetails } from './payment-details.interface';
import { IPoint } from './point.interface';
import { IRole } from './role.interface';
import { IUserAddress } from './user.interface';
import { IWallet } from './wallet.interface';

export interface IAccountUser {
  // Backend fields (from /api/user/me)
  userName?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  phoneNumber?: string;
  created?: string;

  // Computed / mapped fields
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  country_code?: string;
  profile_image?: IAttachment;
  profile_image_id?: number;
  status?: boolean;
  email_verified_at?: string;
  payment_account?: IPaymentDetails;
  role_id?: number;
  role_name?: string;
  role?: IRole | string;
  address?: IUserAddress[];
  point?: IPoint;
  wallet?: IWallet;
  orders_count?: number;
  is_approved?: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  permission?: any[];
}

export interface IAccountUserUpdatePassword {
  current_password: string;
  new_password: string;
  confirm_password: string;
}
