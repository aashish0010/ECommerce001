// src/app/shared/store/action/product.action.ts
var GetProductsAction = class {
  static {
    this.type = "[Product] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetRelatedProductsAction = class {
  static {
    this.type = "[Product] Related Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetCategoryProductsAction = class {
  static {
    this.type = "[Product] Category Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetStoreProductsAction = class {
  static {
    this.type = "[Product] Store Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetProductBySlugAction = class {
  static {
    this.type = "[Product] Get By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};
var GetDealProductsAction = class {
  static {
    this.type = "[Product] Deal Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetMenuProductsAction = class {
  static {
    this.type = "[Product] Menu Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetProductBySearchAction = class {
  static {
    this.type = "[ProductBySearch] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetProductBySearchListAction = class {
  static {
    this.type = "[ProductBySearchList] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetProductByIdsAction = class {
  static {
    this.type = "[ProductByIds] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetMoreProductAction = class {
  static {
    this.type = "[MoreProduct] Get";
  }
  constructor(payload, value) {
    this.payload = payload;
    this.value = value;
  }
};

export {
  GetProductsAction,
  GetRelatedProductsAction,
  GetCategoryProductsAction,
  GetStoreProductsAction,
  GetProductBySlugAction,
  GetMenuProductsAction,
  GetProductBySearchAction,
  GetProductBySearchListAction,
  GetProductByIdsAction,
  GetMoreProductAction
};
//# sourceMappingURL=chunk-RWFLVE5E.js.map
