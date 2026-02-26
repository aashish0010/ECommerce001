// src/app/shared/store/action/auth.action.ts
var RegisterAction = class {
  static {
    this.type = "[Auth] Register";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var LoginAction = class {
  static {
    this.type = "[Auth] Login";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var LoginWithNumberAction = class {
  static {
    this.type = "[Auth] Login With Number";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var ForgotPasswordAction = class {
  static {
    this.type = "[Auth] ForgotPassword";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var SendEmailOtpAction = class {
  static {
    this.type = "[Auth] SendEmailOtp";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var VerifyEmailOtpAction = class {
  static {
    this.type = "[Auth] VerifyEmailOtp";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var VerifyOTPAction = class {
  static {
    this.type = "[Auth] VerifyOTP";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var VerifyNumberOTPAction = class {
  static {
    this.type = "[Auth] VerifyNumberOTP";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var UpdatePasswordAction = class {
  static {
    this.type = "[Auth] UpdatePassword";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var LogoutAction = class {
  static {
    this.type = "[Auth] Logout";
  }
};
var AuthClearAction = class {
  static {
    this.type = "[Auth] clear";
  }
};

export {
  RegisterAction,
  LoginAction,
  LoginWithNumberAction,
  ForgotPasswordAction,
  SendEmailOtpAction,
  VerifyEmailOtpAction,
  VerifyOTPAction,
  VerifyNumberOTPAction,
  UpdatePasswordAction,
  LogoutAction,
  AuthClearAction
};
//# sourceMappingURL=chunk-WDJ2SPEL.js.map
