// src/app/shared/store/action/order.action.ts
var GetOrdersAction = class {
  static {
    this.type = "[Order] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var ViewOrderAction = class {
  static {
    this.type = "[Order] View";
  }
  constructor(id) {
    this.id = id;
  }
};
var CheckoutAction = class {
  static {
    this.type = "[Order] Checkout";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var PlaceOrderAction = class {
  static {
    this.type = "[Order] Place";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var RePaymentAction = class {
  static {
    this.type = "[Order] Repayment";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var VerifyPaymentAction = class {
  static {
    this.type = "[Order] Verify";
  }
  constructor(id) {
    this.id = id;
  }
};
var OrderTrackingAction = class {
  static {
    this.type = "[Order] Tracking";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var DownloadInvoiceAction = class {
  static {
    this.type = "[Order] Invoice";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

export {
  GetOrdersAction,
  ViewOrderAction,
  CheckoutAction,
  PlaceOrderAction,
  RePaymentAction,
  OrderTrackingAction,
  DownloadInvoiceAction
};
//# sourceMappingURL=chunk-LPQEB73E.js.map
