export interface IBrandModel {
  data: IBrand[];
  total: number;
}

export interface IBrand {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  status: boolean;
  products_count?: number;
  created_at?: string;
  updated_at?: string;
}
