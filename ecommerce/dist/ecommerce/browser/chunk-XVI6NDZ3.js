// src/app/shared/store/action/brand.action.ts
var GetBrandsAction = class {
  static {
    this.type = "[Brand] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetBrandBySlugAction = class {
  static {
    this.type = "[Brand] Get Brand By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};

export {
  GetBrandsAction,
  GetBrandBySlugAction
};
//# sourceMappingURL=chunk-XVI6NDZ3.js.map
