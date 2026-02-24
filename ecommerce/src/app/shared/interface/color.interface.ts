import { IPaginateModel } from './core.interface';

export interface IColorModel extends IPaginateModel {
  data: IColor[];
}

export interface IColor {
  id: number;
  name: string;
  slug: string;
  hex_code?: string;
  status: boolean;
  created_at?: string;
  updated_at?: string;
}
