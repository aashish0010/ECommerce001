import { IPermission } from './role.interface';

export interface IAuthUserStateModel {
  email: string;
  password: string;
}

export interface IAuthModel {
  email: string;
  token: string | number;
  access_token: string | null;
  permissions: IPermission[];
}

export interface IAuthUserForgotModel {
  email: string;
}

export interface IVerifyEmailOtpModel {
  email: string;
  token: number;
}

export interface IUpdatePasswordModel {
  password: string;
  password_confirmation: string;
  email: string;
  token: number;
}

export interface IAdminLoginModel {
  userName: string;
  password: string;
}

export interface IAdminAuthResponse {
  code: number;
  status: string;
  message: string;
  userName: string;
  email?: string;
  token: string;
  refreshToken: string;
  role: string;
  permissions?: any[];
}
