import { IEmailConfig } from '../../interface/email-config.interface';

export class GetEmailConfigAction {
  static readonly type = '[EmailConfig] Get';
}

export class UpdateEmailConfigAction {
  static readonly type = '[EmailConfig] Update';
  constructor(
    public id: number,
    public payload: Partial<IEmailConfig>
  ) {}
}
