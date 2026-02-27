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

// src/app/components/page/flight-booking/flight-booking.component.ts
var FlightBookingComponent = class _FlightBookingComponent {
  constructor() {
    this.breadcrumb = {
      title: "Flight Booking",
      items: [{ label: "Home", url: "/" }, { label: "Flight Booking", active: true }]
    };
  }
  static {
    this.\u0275fac = function FlightBookingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlightBookingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlightBookingComponent, selectors: [["app-flight-booking"]], decls: 53, vars: 1, consts: [[3, "breadcrumb"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "flight-search-box", "p-4", "bg-light", "rounded"], [1, "theme-form"], [1, "col-md-6", "mb-3"], ["type", "text", "placeholder", "Source City", 1, "form-control"], ["type", "text", "placeholder", "Destination City", 1, "form-control"], ["type", "date", 1, "form-control"], [1, "col-12", "mt-3", "text-center"], ["type", "submit", 1, "btn", "btn-solid"], [1, "contact-details-box", "p-4", "border", "rounded"], [1, "mb-3"], ["type", "text", "placeholder", "Enter your name", 1, "form-control"], ["type", "tel", "placeholder", "Enter your phone number", 1, "form-control"], ["type", "email", "placeholder", "Enter your email", 1, "form-control"], [1, "text-center"]], template: function FlightBookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3");
        \u0275\u0275text(7, "Search Flights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Book your affordable tickets to Kathmandu, Larnaca, and beyond.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "form", 6)(11, "div", 3)(12, "div", 7)(13, "label");
        \u0275\u0275text(14, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 7)(17, "label");
        \u0275\u0275text(18, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 7)(21, "label");
        \u0275\u0275text(22, "Departure Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 7)(25, "label");
        \u0275\u0275text(26, "Return Date (Optional)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 11)(29, "button", 12);
        \u0275\u0275text(30, "Search Flights");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(31, "div", 4)(32, "div", 13)(33, "h3");
        \u0275\u0275text(34, "Leave Your Contact Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p");
        \u0275\u0275text(36, "Our travel experts will contact you with the best deals.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "form", 6)(38, "div", 14)(39, "label");
        \u0275\u0275text(40, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 14)(43, "label");
        \u0275\u0275text(44, "Phone Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "input", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 14)(47, "label");
        \u0275\u0275text(48, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(49, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 18)(51, "button", 12);
        \u0275\u0275text(52, "Request Call Back");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
      }
    }, dependencies: [CommonModule, RouterModule, TranslateModule, Breadcrumb], styles: ["\n\n.flight-search-box[_ngcontent-%COMP%], \n.contact-details-box[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s ease;\n}\n.flight-search-box[_ngcontent-%COMP%]:hover, \n.contact-details-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.btn-solid[_ngcontent-%COMP%] {\n  padding: 13px 29px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  border: 2px solid var(--theme-color);\n  background-image:\n    linear-gradient(\n      30deg,\n      var(--theme-color) 50%,\n      transparent 50%);\n  background-size: 500px;\n  background-repeat: no-repeat;\n  background-position: 0%;\n  transition: background 300ms ease-in-out;\n}\n.btn-solid[_ngcontent-%COMP%]:hover {\n  background-position: 100%;\n  color: var(--theme-color);\n}\n/*# sourceMappingURL=flight-booking.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlightBookingComponent, [{
    type: Component,
    args: [{ selector: "app-flight-booking", standalone: true, imports: [CommonModule, RouterModule, TranslateModule, Breadcrumb], template: '<app-breadcrumb [breadcrumb]="breadcrumb" />\r\n\r\n<section class="section-b-space">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-lg-6">\r\n                <div class="flight-search-box p-4 bg-light rounded">\r\n                    <h3>Search Flights</h3>\r\n                    <p>Book your affordable tickets to Kathmandu, Larnaca, and beyond.</p>\r\n                    <form class="theme-form">\r\n                        <div class="row">\r\n                            <div class="col-md-6 mb-3">\r\n                                <label>From</label>\r\n                                <input type="text" class="form-control" placeholder="Source City">\r\n                            </div>\r\n                            <div class="col-md-6 mb-3">\r\n                                <label>To</label>\r\n                                <input type="text" class="form-control" placeholder="Destination City">\r\n                            </div>\r\n                            <div class="col-md-6 mb-3">\r\n                                <label>Departure Date</label>\r\n                                <input type="date" class="form-control">\r\n                            </div>\r\n                            <div class="col-md-6 mb-3">\r\n                                <label>Return Date (Optional)</label>\r\n                                <input type="date" class="form-control">\r\n                            </div>\r\n                            <div class="col-12 mt-3 text-center">\r\n                                <button type="submit" class="btn btn-solid">Search Flights</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class="col-lg-6">\r\n                <div class="contact-details-box p-4 border rounded">\r\n                    <h3>Leave Your Contact Details</h3>\r\n                    <p>Our travel experts will contact you with the best deals.</p>\r\n                    <form class="theme-form">\r\n                        <div class="mb-3">\r\n                            <label>Full Name</label>\r\n                            <input type="text" class="form-control" placeholder="Enter your name">\r\n                        </div>\r\n                        <div class="mb-3">\r\n                            <label>Phone Number</label>\r\n                            <input type="tel" class="form-control" placeholder="Enter your phone number">\r\n                        </div>\r\n                        <div class="mb-3">\r\n                            <label>Email Address</label>\r\n                            <input type="email" class="form-control" placeholder="Enter your email">\r\n                        </div>\r\n                        <div class="text-center">\r\n                            <button type="submit" class="btn btn-solid">Request Call Back</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>', styles: ["/* src/app/components/page/flight-booking/flight-booking.component.scss */\n.flight-search-box,\n.contact-details-box {\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s ease;\n}\n.flight-search-box:hover,\n.contact-details-box:hover {\n  transform: translateY(-5px);\n}\n.btn-solid {\n  padding: 13px 29px;\n  color: #fff;\n  letter-spacing: 0.05em;\n  border: 2px solid var(--theme-color);\n  background-image:\n    linear-gradient(\n      30deg,\n      var(--theme-color) 50%,\n      transparent 50%);\n  background-size: 500px;\n  background-repeat: no-repeat;\n  background-position: 0%;\n  transition: background 300ms ease-in-out;\n}\n.btn-solid:hover {\n  background-position: 100%;\n  color: var(--theme-color);\n}\n/*# sourceMappingURL=flight-booking.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlightBookingComponent, { className: "FlightBookingComponent", filePath: "src/app/components/page/flight-booking/flight-booking.component.ts", lineNumber: 14 });
})();
export {
  FlightBookingComponent
};
//# sourceMappingURL=chunk-SIFYS2NB.js.map
