import { ICompanyAdmin, ISocialLink } from '../../interface/company.interface';

export class GetCompanyAction {
  static readonly type = '[Company] Get';
}

export class UpdateCompanyAction {
  static readonly type = '[Company] Update';
  constructor(public id: number, public payload: Partial<ICompanyAdmin>) {}
}

export class UpdateSocialLinksAction {
  static readonly type = '[Company] Update Social Links';
  constructor(public id: number, public socialLinks: ISocialLink[]) {}
}
