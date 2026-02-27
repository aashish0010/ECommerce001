import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/pipe/text-converter.pipe.ts
var TextConverterPipe = class _TextConverterPipe {
  transform(value) {
    if (!value)
      return "";
    return value.split(/[-_]/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  static {
    this.\u0275fac = function TextConverterPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextConverterPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "textConverter", type: _TextConverterPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextConverterPipe, [{
    type: Pipe,
    args: [{
      name: "textConverter",
      standalone: true
    }]
  }], null, null);
})();

export {
  TextConverterPipe
};
//# sourceMappingURL=chunk-HTXLVWT3.js.map
