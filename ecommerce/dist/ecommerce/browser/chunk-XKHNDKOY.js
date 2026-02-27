import {
  Breadcrumb
} from "./chunk-3DSWFFIY.js";
import {
  RouterModule
} from "./chunk-6R3AQVTF.js";
import "./chunk-G25K32MJ.js";
import {
  TranslateModule
} from "./chunk-PCGC3M7T.js";
import {
  CommonModule
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/page/parcel-service/parcel-service.component.ts
var ParcelServiceComponent = class _ParcelServiceComponent {
  constructor() {
    this.breadcrumb = {
      title: "International Parcel Service",
      items: [{ label: "Home", url: "/" }, { label: "Parcel Service", active: true }]
    };
  }
  static {
    this.\u0275fac = function ParcelServiceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParcelServiceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParcelServiceComponent, selectors: [["app-parcel-service"]], decls: 48, vars: 1, consts: [[3, "breadcrumb"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-lg-8", "offset-lg-2"], [1, "parcel-form-container", "p-5", "bg-white", "shadow-sm", "rounded"], [1, "title1", "text-center", "mb-4"], [1, "title-inner1"], [1, "theme-form"], [1, "col-12", "mb-4"], [1, "col-md-6", "mb-3"], ["type", "number", "placeholder", "e.g. 5.5", 1, "form-control"], [1, "form-control"], [1, "col-12", "mb-4", "mt-4"], ["type", "text", "placeholder", "Street, City, Country", 1, "form-control"], [1, "col-12", "mt-4", "text-center"], ["type", "submit", 1, "btn", "btn-solid"]], template: function ParcelServiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7);
        \u0275\u0275text(8, "Ship Internationally");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Reliable two-way cargo service between Nepal & Cyprus.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "form", 8)(12, "div", 3)(13, "div", 9)(14, "h4");
        \u0275\u0275text(15, "Parcel Details");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "hr");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10)(18, "label");
        \u0275\u0275text(19, "Weight (kg)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 10)(22, "label");
        \u0275\u0275text(23, "Parcel Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "select", 12)(25, "option");
        \u0275\u0275text(26, "Documents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option");
        \u0275\u0275text(28, "Personal Effects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option");
        \u0275\u0275text(30, "Commercial Goods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option");
        \u0275\u0275text(32, "Others");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 13)(34, "h4");
        \u0275\u0275text(35, "Address Information");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "hr");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 10)(38, "label");
        \u0275\u0275text(39, "Pickup From");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 10)(42, "label");
        \u0275\u0275text(43, "Deliver To");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 15)(46, "button", 16);
        \u0275\u0275text(47, "Estimate & Ship");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
      }
    }, dependencies: [CommonModule, RouterModule, TranslateModule, Breadcrumb], styles: ["\n\n.parcel-form-container[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--theme-color);\n}\n.btn-solid[_ngcontent-%COMP%] {\n  padding: 13px 29px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  border: 2px solid var(--theme-color);\n  background-image:\n    linear-gradient(\n      30deg,\n      var(--theme-color) 50%,\n      transparent 50%);\n  background-size: 500px;\n  background-repeat: no-repeat;\n  background-position: 0%;\n  transition: background 300ms ease-in-out;\n}\n.btn-solid[_ngcontent-%COMP%]:hover {\n  background-position: 100%;\n  color: var(--theme-color);\n}\n/*# sourceMappingURL=parcel-service.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParcelServiceComponent, [{
    type: Component,
    args: [{ selector: "app-parcel-service", standalone: true, imports: [CommonModule, RouterModule, TranslateModule, Breadcrumb], template: '<app-breadcrumb [breadcrumb]="breadcrumb" />\r\n\r\n<section class="section-b-space">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-lg-8 offset-lg-2">\r\n                <div class="parcel-form-container p-5 bg-white shadow-sm rounded">\r\n                    <div class="title1 text-center mb-4">\r\n                        <h2 class="title-inner1">Ship Internationally</h2>\r\n                        <p>Reliable two-way cargo service between Nepal & Cyprus.</p>\r\n                    </div>\r\n                    <form class="theme-form">\r\n                        <div class="row">\r\n                            <div class="col-12 mb-4">\r\n                                <h4>Parcel Details</h4>\r\n                                <hr>\r\n                            </div>\r\n                            <div class="col-md-6 mb-3">\r\n                                <label>Weight (kg)</label>\r\n                                <input type="number" class="form-control" placeholder="e.g. 5.5">\r\n                            </div>\r\n                            <div class="col-md-6 mb-3">\r\n                                <label>Parcel Type</label>\r\n                                <select class="form-control">\r\n                                    <option>Documents</option>\r\n                                    <option>Personal Effects</option>\r\n                                    <option>Commercial Goods</option>\r\n                                    <option>Others</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class="col-12 mb-4 mt-4">\r\n                                <h4>Address Information</h4>\r\n                                <hr>\r\n                            </div>\r\n                            <div class="col-md-6 mb-3">\r\n                                <label>Pickup From</label>\r\n                                <input type="text" class="form-control" placeholder="Street, City, Country">\r\n                            </div>\r\n                            <div class="col-md-6 mb-3">\r\n                                <label>Deliver To</label>\r\n                                <input type="text" class="form-control" placeholder="Street, City, Country">\r\n                            </div>\r\n                            <div class="col-12 mt-4 text-center">\r\n                                <button type="submit" class="btn btn-solid">Estimate & Ship</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>', styles: ["/* src/app/components/page/parcel-service/parcel-service.component.scss */\n.parcel-form-container {\n  border-top: 3px solid var(--theme-color);\n}\n.btn-solid {\n  padding: 13px 29px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  border: 2px solid var(--theme-color);\n  background-image:\n    linear-gradient(\n      30deg,\n      var(--theme-color) 50%,\n      transparent 50%);\n  background-size: 500px;\n  background-repeat: no-repeat;\n  background-position: 0%;\n  transition: background 300ms ease-in-out;\n}\n.btn-solid:hover {\n  background-position: 100%;\n  color: var(--theme-color);\n}\n/*# sourceMappingURL=parcel-service.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParcelServiceComponent, { className: "ParcelServiceComponent", filePath: "src/app/components/page/parcel-service/parcel-service.component.ts", lineNumber: 14 });
})();
export {
  ParcelServiceComponent
};
//# sourceMappingURL=chunk-XKHNDKOY.js.map
