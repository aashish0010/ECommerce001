import { IHomeConfig } from '../../interface/home-config.interface';

export class GetHomeConfigAction {
  static readonly type = '[HomeConfig] Get';
}

export class UpdateHomeConfigAction {
  static readonly type = '[HomeConfig] Update';
  constructor(
    public id: number,
    public payload: Partial<IHomeConfig>
  ) {}
}
