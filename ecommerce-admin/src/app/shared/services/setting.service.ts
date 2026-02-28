import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { IAppSetting, IGoogleReCaptcha, ISetting } from '../interface/setting.interface';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  private http = inject(HttpClient);

  reCaptchaConfig: IGoogleReCaptcha;

  getSettingOption(): Observable<ISetting> {
    return this.http.get<ISetting>(`${environment.MOCK_URL}/settings.json`);
  }

  getAppSettingOption(): Observable<IAppSetting> {
    return this.http.get<IAppSetting>(`${environment.MOCK_URL}/app/settings`);
  }
  async getReCaptchaConfig(): Promise<void> {
    // const config = await this.getSettingOption().toPromise();
    // this.reCaptchaConfig = config?.values?.google_reCaptcha!;
  }
}
