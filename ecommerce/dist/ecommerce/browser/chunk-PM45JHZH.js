// src/app/shared/store/action/category.action.ts
var GetCategoriesAction = class {
  static {
    this.type = "[Category] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetCategoryAction = class {
  static {
    this.type = "[Category] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetFooterCategoriesAction = class {
  static {
    this.type = "[FooterCategory] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetHeaderCategoriesAction = class {
  static {
    this.type = "[HeaderCategory] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetProductCategoryAction = class {
  static {
    this.type = "[ProductCategory] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetSearchByCategoryAction = class {
  static {
    this.type = "[CategoryBySearch] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetCategoryBySlugAction = class {
  static {
    this.type = "[Category] Get Category By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};

export {
  GetCategoriesAction,
  GetCategoryAction,
  GetFooterCategoriesAction,
  GetHeaderCategoriesAction,
  GetProductCategoryAction,
  GetSearchByCategoryAction,
  GetCategoryBySlugAction
};
//# sourceMappingURL=chunk-PM45JHZH.js.map
