export interface IEmailConfig {
  id: number;
  company_info_id: number;
  from_email: string;
  from_name: string;
  api_key: string;
}

export interface IEmailConfigResponse {
  status: string;
  code: number;
  message: string;
  data: IEmailConfig;
}
