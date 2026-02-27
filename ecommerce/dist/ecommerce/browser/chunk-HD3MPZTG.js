// src/app/shared/store/action/cart.action.ts
var GetCartItemsAction = class {
  static {
    this.type = "[Cart] Get";
  }
};
var AddToCartLocalStorageAction = class {
  static {
    this.type = "[Cart] Local Storage Add";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var AddToCartAction = class {
  static {
    this.type = "[Cart] Add";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var UpdateCartAction = class {
  static {
    this.type = "[Cart] Update";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var ReplaceCartAction = class {
  static {
    this.type = "[Cart] Replace";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var SyncCartAction = class {
  static {
    this.type = "[Cart] Sync";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var DeleteCartAction = class {
  static {
    this.type = "[Cart] Delete";
  }
  constructor(id) {
    this.id = id;
  }
};
var CloseStickyCartAction = class {
  static {
    this.type = "[Cart] Sticky Close";
  }
  constructor() {
  }
};
var ToggleSidebarCartAction = class {
  static {
    this.type = "[Cart] Toggle Sidebar";
  }
  constructor(value) {
    this.value = value;
  }
};
var ClearCartAction = class {
  static {
    this.type = "[Cart] Clear";
  }
  constructor() {
  }
};

export {
  GetCartItemsAction,
  AddToCartLocalStorageAction,
  AddToCartAction,
  UpdateCartAction,
  ReplaceCartAction,
  SyncCartAction,
  DeleteCartAction,
  CloseStickyCartAction,
  ToggleSidebarCartAction,
  ClearCartAction
};
//# sourceMappingURL=chunk-HD3MPZTG.js.map
