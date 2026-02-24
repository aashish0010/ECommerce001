import { Component, inject, output, input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';

import { Alert } from '../../../shared/components/widgets/alert/alert';
import { Button } from '../../../shared/components/widgets/button/button';
import { IAuthNumberLoginState } from '../../../shared/interface/auth.interface';
import { AuthService } from '../../../shared/services/auth.service';
import { NotificationService } from '../../../shared/services/notification.service';
import {
  RegisterAction,
  VerifyEmailOtpAction,
  VerifyNumberOTPAction,
  VerifyOTPAction,
} from '../../../shared/store/action/auth.action';

@Component({
  selector: 'app-otp',
  imports: [FormsModule, ReactiveFormsModule, TranslateModule, Alert, Button],
  templateUrl: './otp.html',
  styleUrl: './otp.scss',
})
export class Otp {
  private store = inject(Store);
  formBuilder = inject(FormBuilder);
  private notificationService = inject(NotificationService);
  private authService = inject(AuthService);

  readonly activeForm = output<string>();
  readonly type = input<string>();

  public form: FormGroup;
  public email: string;
  public processId: string;
  public number: IAuthNumberLoginState;

  constructor() {
    this.form = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });
  }

  ngOnInit() {
    const type = this.type();
    if (type === 'email') {
      this.email = this.store.selectSnapshot(state => state.auth.email);
      if (!this.email) this.activeForm.emit('login');
    } else if (type === 'register') {
      this.email = this.store.selectSnapshot(state => state.auth.email);
      this.processId = this.store.selectSnapshot(state => state.auth.processId);
      if (!this.email || !this.processId) this.activeForm.emit('register');
    } else if (type === 'number') {
      this.number = this.store.selectSnapshot(state => state.auth.number);
      if (!this.number?.phone) this.activeForm.emit('login');
    } else {
      this.activeForm.emit('login');
    }
  }

  submit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) return;

    const type = this.type();

    if (type === 'register') {
      const payload = {
        email: this.email,
        otp: this.form.value.otp,
        processId: this.processId,
      };
      this.store.dispatch(new VerifyEmailOtpAction(payload)).subscribe({
        complete: () => {
          const pending = this.authService.pendingRegistration;
          if (pending) {
            this.store.dispatch(new RegisterAction(pending)).subscribe({
              complete: () => {
                this.authService.pendingRegistration = null;
                this.activeForm.emit('login');
              },
            });
          }
        },
      });
      return;
    }

    if (type === 'email') {
      const value = { email: this.email, token: this.form.value.otp };
      this.store.dispatch(new VerifyOTPAction(value)).subscribe({
        complete: () => {
          this.activeForm.emit('updatePassword');
        },
      });
      return;
    }

    if (type === 'number') {
      const value = {
        phone: this.number.phone,
        country_code: this.number.country_code,
        token: this.form.value.otp,
      };
      this.store.dispatch(new VerifyNumberOTPAction(value)).subscribe({
        complete: () => {
          this.notificationService.showSuccess('Login Successfully.');
        },
      });
    }
  }

  get otp() {
    return this.form.get('otp');
  }

  backForm() {
    const type = this.type();
    if (type === 'register') {
      this.activeForm.emit('register');
    } else {
      this.activeForm.emit('email');
    }
  }
}
