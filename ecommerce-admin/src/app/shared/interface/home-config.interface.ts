export interface IHomeConfig {
  id: number;
  company_info_id: number;
  slider1_image_url?: string;
  slider1_link?: string;
  slider1_link_type?: string;
  slider2_image_url?: string;
  slider2_link?: string;
  slider2_link_type?: string;
  offer1_image_url?: string;
  offer1_link?: string;
  offer1_link_type?: string;
  offer2_image_url?: string;
  offer2_link?: string;
  offer2_link_type?: string;
}

export interface IHomeConfigResponse {
  status: string;
  code: number;
  message: string;
  data: IHomeConfig;
}
