import { IMediaConfig } from '../../interface/media-config.interface';

export class GetMediaConfigAction {
  static readonly type = '[MediaConfig] Get';
}

export class UpdateMediaConfigAction {
  static readonly type = '[MediaConfig] Update';
  constructor(
    public id: number,
    public payload: Partial<IMediaConfig>
  ) {}
}
