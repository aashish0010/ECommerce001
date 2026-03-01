export interface ISocialLink {
  id?: number;
  social_media_name: string;
  social_media_link: string;
  social_media_desc?: string;
}

export interface ICompanyAdmin {
  id: number;
  company_code: string;
  company_name: string;
  company_description?: string;
  company_phone_number: string;
  company_email: string;
  operations_date?: string;
  header_logo_url?: string;
  footer_logo_url?: string;
  favicon_url?: string;
  company_address?: string;
  copyright_content?: string;
  default_currency?: string;
  site_tagline?: string;
  site_url?: string;
  min_order_free_shipping?: number;
  min_order_amount?: number;
  tax_rate?: number;
  social_links: ISocialLink[];
}

export interface ICompanyAdminResponse {
  status: string;
  code: number;
  message: string;
  data: ICompanyAdmin;
}
