export interface ICategoryModel {
  data: ICategory[];
  total: number;
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  parent_id?: number;
  status: boolean;
  subcategories?: ICategory[];
  products_count?: number;
  created_at?: string;
  updated_at?: string;
}
