export interface IMediaConfig {
  id: number;
  company_info_id: number;
  cloud_name: string;
  api_key: string;
  api_secret: string;
}

export interface IMediaConfigResponse {
  status: string;
  code: number;
  message: string;
  data: IMediaConfig;
}
