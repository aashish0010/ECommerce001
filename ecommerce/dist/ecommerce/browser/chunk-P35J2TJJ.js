// src/app/shared/store/action/questions-answers.action.ts
var GetQuestionAnswersAction = class {
  static {
    this.type = "[Question] Get";
  }
  constructor(slug) {
    this.slug = slug;
  }
};
var SendQuestionAction = class {
  static {
    this.type = "[Question] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var UpdateQuestionAnswersAction = class {
  static {
    this.type = "[Question] put";
  }
  constructor(payload, id) {
    this.payload = payload;
    this.id = id;
  }
};
var FeedbackAction = class {
  static {
    this.type = "[Question] Feedback Post";
  }
  constructor(payload, type) {
    this.payload = payload;
    this.type = type;
  }
};

export {
  GetQuestionAnswersAction,
  SendQuestionAction,
  UpdateQuestionAnswersAction,
  FeedbackAction
};
//# sourceMappingURL=chunk-P35J2TJJ.js.map
