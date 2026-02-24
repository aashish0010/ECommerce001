import { Component, inject, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Select2Module } from 'ng-select2-component';

import { Alert } from '../../../shared/components/widgets/alert/alert';
import { Button } from '../../../shared/components/widgets/button/button';
import { countryCodes } from '../../../shared/data/country-code';
import { AuthService } from '../../../shared/services/auth.service';
import { SendEmailOtpAction } from '../../../shared/store/action/auth.action';
import { CustomValidators } from '../../../shared/validator/password-match';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, TranslateModule, Select2Module, Button, Alert],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private store = inject(Store);
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  readonly activeForm = output<string>();

  public form: FormGroup;
  public codes = countryCodes;
  public tnc = new FormControl(false, [Validators.requiredTrue]);

  constructor() {
    this.form = this.formBuilder.group(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]),
        country_code: new FormControl('977', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        password_confirmation: new FormControl('', [Validators.required]),
      },
      { validator: CustomValidators.MatchValidator('password', 'password_confirmation') },
    );
  }

  get passwordMatchError() {
    return this.form.getError('mismatch') && this.form.get('password_confirmation')?.touched;
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.tnc.invalid) return;
    if (this.form.valid) {
      this.authService.pendingRegistration = this.form.value;
      this.store
        .dispatch(new SendEmailOtpAction({ email: this.form.value.email }))
        .subscribe({
          complete: () => {
            this.activeForm.emit('registerOtp');
          },
        });
    }
  }

  action(action: string) {
    this.activeForm.emit(action);
  }
}
