// src/app/shared/store/action/refund.action.ts
var GetRefundAction = class {
  static {
    this.type = "[Refund] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var SendRefundRequestAction = class {
  static {
    this.type = "[Refund] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

export {
  GetRefundAction,
  SendRefundRequestAction
};
//# sourceMappingURL=chunk-UTLPXFOE.js.map
