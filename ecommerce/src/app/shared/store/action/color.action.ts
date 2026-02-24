import { Params } from '../../interface/core.interface';

export class GetColorsAction {
  static readonly type = '[Color] Get';
  constructor(public payload?: Params) {}
}
