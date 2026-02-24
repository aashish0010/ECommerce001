import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { IOption } from '../../../interface/theme-option.interface';
import { ThemeOptionService } from '../../../services/theme-option.service';
import { ThemeOptionState } from '../../../store/state/theme-option.state';

@Component({
  selector: 'app-theme-customizer',
  imports: [
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './theme-customizer.html',
  styleUrl: './theme-customizer.scss',
})
export class ThemeCustomizer {
  themeOptionService = inject(ThemeOptionService);
  private platformId = inject<Object>(PLATFORM_ID);

  themeOption$: Observable<IOption> = inject(Store).select(ThemeOptionState.themeOptions);

  public open = false;

  public mode: boolean;
  public languageDirection: boolean;
  public themeOption: IOption;
  public isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.themeOption$.subscribe(option => {
      this.themeOption = option;
      this.languageDirection =
        option?.general && option?.general?.language_direction === 'rtl' ? true : false;
      this.mode = option?.general && option?.general?.mode === 'dark' ? true : false;
    });
  }

  openSetting(value: boolean) {
    this.open = value;
  }

  layoutMode() {
    if (this.isBrowser) {
      if (!this.mode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }

  layoutType() {
    if (this.isBrowser) {
      if (!this.languageDirection) {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }
    }
  }
}
