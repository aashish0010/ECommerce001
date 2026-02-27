// src/app/shared/store/action/page.action.ts
var GetPagesAction = class {
  static {
    this.type = "[Page] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetPageBySlugAction = class {
  static {
    this.type = "[Page] By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};
var GetFaqsAction = class {
  static {
    this.type = "[Faq] Get";
  }
};
var ContactUsAction = class {
  static {
    this.type = "[ContactUs] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

export {
  GetPagesAction,
  GetPageBySlugAction,
  GetFaqsAction,
  ContactUsAction
};
//# sourceMappingURL=chunk-QL2HLPW7.js.map
