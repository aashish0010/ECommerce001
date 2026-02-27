import {
  categorySlider
} from "./chunk-HUS46LWS.js";
import {
  AttributeService
} from "./chunk-PDGQIHJ4.js";
import {
  CategoryState
} from "./chunk-B62VDLFD.js";
import {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective
} from "./chunk-BU5X3MFT.js";
import {
  Button
} from "./chunk-6I2UIIRS.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-6R3AQVTF.js";
import {
  NoData
} from "./chunk-O32MIEQN.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PCGC3M7T.js";
import {
  environment
} from "./chunk-4LUQBUB6.js";
import {
  Store
} from "./chunk-6YJBSKCB.js";
import {
  SlicePipe
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/components/widgets/categories/categories.ts
var _c0 = (a0) => ["/category", a0];
var _forTrack0 = ($index, $item) => $item.id;
function Categories_Conditional_0_Conditional_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, category_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r1.name);
  }
}
function Categories_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 2);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_0_Conditional_0_For_2_Template, 3, 4, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Categories_Conditional_0_Conditional_0_Conditional_0_Template, 3, 0, "ul", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.categories.length ? 0 : -1);
  }
}
function Categories_Conditional_0_Conditional_1_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "app-button", 16);
    \u0275\u0275listener("click", function Categories_Conditional_0_Conditional_1_Conditional_6_For_2_Template_app_button_click_1_listener() {
      const category_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.redirectToCollection(category_r5.slug));
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "img", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.selectedCategorySlug.length && ctx_r1.selectedCategorySlug.includes(category_r5.slug) ? "nav-link active" : "nav-link");
    \u0275\u0275property("id", "nav_link_btn")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("src", (category_r5 == null ? null : category_r5.category_icon) ? category_r5 == null ? null : category_r5.category_icon == null ? null : category_r5.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r5 == null ? null : category_r5.name);
  }
}
function Categories_Conditional_0_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 14);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_1_Conditional_6_For_2_Template, 4, 7, "li", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 3, "no_category"));
  }
}
function Categories_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 11)(2, "span", 12);
    \u0275\u0275listener("click", function Categories_Conditional_0_Conditional_1_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeCanvasMenu());
    });
    \u0275\u0275element(3, "i", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, Categories_Conditional_0_Conditional_1_Conditional_6_Template, 3, 0, "ul", 14)(7, Categories_Conditional_0_Conditional_1_Conditional_7_Template, 2, 5, "app-no-data", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "back"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.categories.length ? 6 : 7);
  }
}
function Categories_Conditional_0_Conditional_2_For_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "a", 21);
    \u0275\u0275listener("click", function Categories_Conditional_0_Conditional_2_For_3_ng_template_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const category_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.redirectToCollection(category_r7.slug));
    });
    \u0275\u0275element(2, "img", 17);
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedCategorySlug.length && ctx_r1.selectedCategorySlug.includes(category_r7.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", (category_r7 == null ? null : category_r7.category_icon) ? category_r7 == null ? null : category_r7.category_icon == null ? null : category_r7.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r7 == null ? null : category_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r7.name);
  }
}
function Categories_Conditional_0_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_2_For_3_ng_template_0_Template, 5, 5, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 3, "no_category"));
  }
}
function Categories_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(2, Categories_Conditional_0_Conditional_2_For_3_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Categories_Conditional_0_Conditional_2_Conditional_4_Template, 2, 5, "app-no-data", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("category-slider");
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.categories.length ? 4 : -1);
  }
}
function Categories_Conditional_0_Conditional_3_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "a", 10)(2, "div", 24)(3, "div", 25);
    \u0275\u0275element(4, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4")(6, "a", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r8.slug));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", "url(" + (category_r8.category_image ? category_r8 == null ? null : category_r8.category_image == null ? null : category_r8.category_image.original_url : "assets/images/placeholder/category.png") + ")");
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r8.category_image ? category_r8 == null ? null : category_r8.category_image == null ? null : category_r8.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, category_r8.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r8.name, " ");
  }
}
function Categories_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Categories_Conditional_0_Conditional_3_Conditional_1_For_1_Template, 8, 11, "div", 23, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_3_Conditional_2_For_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4")(5, "a", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r9.slug));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", "url(" + (category_r9.category_image ? category_r9 == null ? null : category_r9.category_image == null ? null : category_r9.category_image.original_url : "assets/images/placeholder/category.png") + ")");
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r9.category_image ? category_r9 == null ? null : category_r9.category_image == null ? null : category_r9.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, category_r9.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r9.name, " ");
  }
}
function Categories_Conditional_0_Conditional_3_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_3_Conditional_2_For_3_ng_template_0_Template, 7, 11, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(2, Categories_Conditional_0_Conditional_3_Conditional_2_For_3_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, Categories_Conditional_0_Conditional_3_Conditional_1_Template, 2, 0)(2, Categories_Conditional_0_Conditional_3_Conditional_2_Template, 4, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.slider() ? 1 : 2);
  }
}
function Categories_Conditional_0_Conditional_4_Conditional_1_For_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "a", 10)(2, "div", 31);
    \u0275\u0275element(3, "img", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 33)(5, "a", 10)(6, "h5");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, category_r10.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r10.category_image ? category_r10 == null ? null : category_r10.category_image == null ? null : category_r10.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r10.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r10.name);
  }
}
function Categories_Conditional_0_Conditional_4_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_4_Conditional_1_For_4_ng_template_0_Template, 8, 9, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(3, Categories_Conditional_0_Conditional_4_Conditional_1_For_4_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_4_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 30)(2, "a", 10)(3, "div", 31);
    \u0275\u0275element(4, "img", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 33)(6, "a", 10)(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, category_r11.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r11.category_image ? category_r11 == null ? null : category_r11.category_image == null ? null : category_r11.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r11.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r11.name);
  }
}
function Categories_Conditional_0_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Categories_Conditional_0_Conditional_4_Conditional_2_For_1_Template, 9, 9, "div", 23, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, Categories_Conditional_0_Conditional_4_Conditional_1_Template, 5, 1, "div", 28)(2, Categories_Conditional_0_Conditional_4_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.slider() ? 1 : 2);
  }
}
function Categories_Conditional_0_Conditional_5_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 34);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r12.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r12.category_icon ? category_r12.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r12.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r12.name, " ");
  }
}
function Categories_Conditional_0_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_5_For_2_ng_template_0_Template, 4, 6, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_5_For_2_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_6_Conditional_1_For_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "a", 10)(2, "div", 36)(3, "div", 37);
    \u0275\u0275element(4, "img", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 33)(6, "a", 10)(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, category_r13.slug));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", category_r13.category_icon ? category_r13.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r13.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r13.name);
  }
}
function Categories_Conditional_0_Conditional_6_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_6_Conditional_1_For_4_ng_template_0_Template, 9, 9, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 35)(2, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(3, Categories_Conditional_0_Conditional_6_Conditional_1_For_4_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 30)(2, "a", 10)(3, "div", 36)(4, "div", 37);
    \u0275\u0275element(5, "img", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 33)(7, "a", 10)(8, "h5");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, category_r14.slug));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", category_r14.category_icon ? category_r14.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r14.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r14.name);
  }
}
function Categories_Conditional_0_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Categories_Conditional_0_Conditional_6_Conditional_2_For_1_Template, 10, 9, "div", 23, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, Categories_Conditional_0_Conditional_6_Conditional_1_Template, 5, 1, "div", 28)(2, Categories_Conditional_0_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.slider() ? 1 : 2);
  }
}
function Categories_Conditional_0_Conditional_7_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 38)(2, "div")(3, "h4", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 40)(6, "li")(7, "a", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275element(10, "img", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(category_r15.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r15.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r15.category_image ? category_r15 == null ? null : category_r15.category_image == null ? null : category_r15.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl);
  }
}
function Categories_Conditional_0_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_7_For_2_ng_template_0_Template, 11, 6, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_7_For_2_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_8_Conditional_0_For_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "a", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, category_r16.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r16.name);
  }
}
function Categories_Conditional_0_Conditional_8_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_8_Conditional_0_For_3_ng_template_0_Template, 3, 4, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(2, Categories_Conditional_0_Conditional_8_Conditional_0_For_3_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_8_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "a", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, category_r17.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r17.name);
  }
}
function Categories_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_8_Conditional_1_For_2_Template, 3, 4, "div", 28, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Categories_Conditional_0_Conditional_8_Conditional_0_Template, 4, 1, "div", 6)(1, Categories_Conditional_0_Conditional_8_Conditional_1_Template, 3, 0, "div", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.slider() ? 0 : 1);
  }
}
function Categories_Conditional_0_Conditional_9_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "a", 10)(2, "div", 31);
    \u0275\u0275element(3, "img", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 33)(5, "a", 10)(6, "h5");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, category_r18.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r18.category_icon ? category_r18.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r18.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r18.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r18.name);
  }
}
function Categories_Conditional_0_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_9_For_2_ng_template_0_Template, 8, 9, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_9_For_2_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r19 == null ? null : category_r19.category_image == null ? null : category_r19.category_image.original_url, \u0275\u0275sanitizeUrl)("alt", category_r19.name);
  }
}
function Categories_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r19.name);
  }
}
function Categories_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const categories_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, categories_r20.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(categories_r20.name);
  }
}
function Categories_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Categories_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_9_For_1_Template, 3, 4, "li", null, _forTrack0);
    \u0275\u0275pipe(2, "slice");
  }
  if (rf & 2) {
    const category_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 0, category_r19.subcategories, 0, 5));
  }
}
function Categories_Conditional_0_Conditional_10_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 38)(2, "div");
    \u0275\u0275conditionalCreate(3, Categories_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_3_Template, 2, 2, "div")(4, Categories_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_4_Template, 2, 2, "div");
    \u0275\u0275elementStart(5, "h4")(6, "a", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ul", 40);
    \u0275\u0275conditionalCreate(9, Categories_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_9_Template, 3, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 43);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional((category_r19 == null ? null : category_r19.category_image) ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, category_r19.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r19.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(category_r19.subcategories ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, category_r19.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "view_more"));
  }
}
function Categories_Conditional_0_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_10_For_2_ng_template_0_Template, 13, 12, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_10_For_2_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47);
    \u0275\u0275element(3, "img", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "a", 10)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", "url(" + (category_r21.category_image ? category_r21 == null ? null : category_r21.category_image == null ? null : category_r21.category_image.original_url : "assets/images/placeholder/category.png") + ")");
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r21.category_image ? category_r21 == null ? null : category_r21.category_image == null ? null : category_r21.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r21.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, category_r21.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r21.name);
  }
}
function Categories_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_11_For_2_Template, 8, 8, "div", 45, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "a", 10)(2, "div", 50)(3, "h4", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, category_r22.slug));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r22.name);
  }
}
function Categories_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_12_For_2_Template, 5, 4, "div", 28, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_13_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "a", 10)(2, "div", 52)(3, "div", 37);
    \u0275\u0275element(4, "img", 32)(5, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r23.slug));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", category_r23.category_icon ? category_r23.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r23.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r23.name);
  }
}
function Categories_Conditional_0_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_13_For_2_ng_template_0_Template, 8, 6, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_13_For_2_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_14_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "a", 10)(2, "div", 24)(3, "div", 37);
    \u0275\u0275element(4, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r24.slug));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", category_r24.category_icon ? category_r24.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r24.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r24.name);
  }
}
function Categories_Conditional_0_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_0_Conditional_14_For_2_ng_template_0_Template, 7, 6, "ng-template", 20);
  }
}
function Categories_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_14_For_2_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "a", 10)(2, "div", 55)(3, "div", 56)(4, "div", 37);
    \u0275\u0275element(5, "img", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r25 = ctx.$implicit;
    const \u0275$index_397_r26 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, category_r25.slug));
    \u0275\u0275advance();
    \u0275\u0275classProp("hover-effect", \u0275$index_397_r26 === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", category_r25.category_image ? category_r25 == null ? null : category_r25.category_image == null ? null : category_r25.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r25.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r25.name);
  }
}
function Categories_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_0_Conditional_15_For_2_Template, 8, 8, "div", 54, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Categories_Conditional_0_Conditional_0_Template, 1, 1);
    \u0275\u0275conditionalCreate(1, Categories_Conditional_0_Conditional_1_Template, 8, 4, "div", 3);
    \u0275\u0275conditionalCreate(2, Categories_Conditional_0_Conditional_2_Template, 5, 4, "div", 4);
    \u0275\u0275conditionalCreate(3, Categories_Conditional_0_Conditional_3_Template, 3, 1, "div", 5);
    \u0275\u0275conditionalCreate(4, Categories_Conditional_0_Conditional_4_Template, 3, 1, "div", 6);
    \u0275\u0275conditionalCreate(5, Categories_Conditional_0_Conditional_5_Template, 3, 1, "owl-carousel-o", 1);
    \u0275\u0275conditionalCreate(6, Categories_Conditional_0_Conditional_6_Template, 3, 1, "div", 6);
    \u0275\u0275conditionalCreate(7, Categories_Conditional_0_Conditional_7_Template, 3, 1, "owl-carousel-o", 1);
    \u0275\u0275conditionalCreate(8, Categories_Conditional_0_Conditional_8_Template, 2, 1);
    \u0275\u0275conditionalCreate(9, Categories_Conditional_0_Conditional_9_Template, 3, 1, "owl-carousel-o", 1);
    \u0275\u0275conditionalCreate(10, Categories_Conditional_0_Conditional_10_Template, 3, 1, "owl-carousel-o", 1);
    \u0275\u0275conditionalCreate(11, Categories_Conditional_0_Conditional_11_Template, 3, 0, "div", 7);
    \u0275\u0275conditionalCreate(12, Categories_Conditional_0_Conditional_12_Template, 3, 0, "div", 8);
    \u0275\u0275conditionalCreate(13, Categories_Conditional_0_Conditional_13_Template, 3, 1, "owl-carousel-o", 1);
    \u0275\u0275conditionalCreate(14, Categories_Conditional_0_Conditional_14_Template, 3, 1, "owl-carousel-o", 1);
    \u0275\u0275conditionalCreate(15, Categories_Conditional_0_Conditional_15_Template, 3, 0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.style() === "vertical" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "classic_vertical" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "horizontal" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "basic" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "simple" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "classic" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "standard" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "premium" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "bag" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "digital" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "one" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "shoes" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "shoes-size" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "vegetable" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "books" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style() === "gradient" ? 15 : -1);
  }
}
function Categories_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 3, "no_category"));
  }
}
function Categories_Conditional_2_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 57)(2, "a", 10)(3, "div", 31);
    \u0275\u0275element(4, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "h5");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r27.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r27.category_image ? category_r27 == null ? null : category_r27.category_image == null ? null : category_r27.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r27.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r27.name);
  }
}
function Categories_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Categories_Conditional_2_For_2_ng_template_0_Template, 8, 6, "ng-template", 20);
  }
}
function Categories_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_2_For_2_Template, 1, 0, null, 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function Categories_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275element(2, "img", 58)(3, "div", 59);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r28 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r28.slug));
    \u0275\u0275advance();
    \u0275\u0275property("alt", category_r28 == null ? null : category_r28.name)("src", (category_r28 == null ? null : category_r28.category_icon) ? category_r28 == null ? null : category_r28.category_icon == null ? null : category_r28.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r28.name);
  }
}
function Categories_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 2);
    \u0275\u0275repeaterCreate(1, Categories_Conditional_3_For_2_Template, 7, 6, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
var Categories = class _Categories {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.attributeService = inject(AttributeService);
    this.category$ = inject(Store).select(CategoryState.category);
    this.categoryIds = input([], ...ngDevMode ? [{ debugName: "categoryIds" }] : []);
    this.style = input("vertical", ...ngDevMode ? [{ debugName: "style" }] : []);
    this.image = input(...ngDevMode ? [void 0, { debugName: "image" }] : []);
    this.slider = input(...ngDevMode ? [void 0, { debugName: "slider" }] : []);
    this.options = categorySlider;
    this.selectedCategorySlug = [];
    this.StorageURL = environment.storageURL;
    this.route.queryParams.subscribe((params) => {
      this.selectedCategorySlug = params["category"] ? params["category"].split(",") : [];
    });
    this.category$.subscribe((res) => this.categories = res.data.map((category) => category));
  }
  ngOnChanges() {
    const categoryIds = this.categoryIds();
    if (categoryIds && categoryIds.length) {
      this.category$.subscribe((res) => this.categories = this.getCategoriesByIds(res.data, this.categoryIds()));
    }
    if (this.style() == "vegetable") {
      this.options = __spreadProps(__spreadValues({}, this.options), {
        responsive: __spreadProps(__spreadValues({}, this.options.responsive), {
          768: {
            items: 4
          },
          900: {
            items: 5
          },
          1300: {
            items: 7
          }
        })
      });
    }
  }
  redirectToCollection(slug) {
    let index = this.selectedCategorySlug.indexOf(slug);
    if (index === -1)
      this.selectedCategorySlug.push(slug);
    else
      this.selectedCategorySlug.splice(index, 1);
    void this.router.navigate(["/collections"], {
      relativeTo: this.route,
      queryParams: {
        category: this.selectedCategorySlug.length ? this.selectedCategorySlug?.join(",") : null
      },
      queryParamsHandling: "merge",
      // preserve the existing query params in the route
      skipLocationChange: false
      // do trigger navigation
    });
  }
  getCategoriesByIds(categories, ids) {
    let matchedCategories = [];
    categories.forEach((category) => {
      if (ids.includes(category.id)) {
        matchedCategories.push(category);
      }
      if (category.subcategories?.length) {
        const matchedSubcategories = this.getCategoriesByIds(category.subcategories, ids);
        if (matchedSubcategories.length) {
          matchedCategories.push(...matchedSubcategories);
        }
      }
    });
    return matchedCategories;
  }
  closeCanvasMenu() {
    this.attributeService.offCanvasMenu = false;
  }
  static {
    this.\u0275fac = function Categories_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Categories)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Categories, selectors: [["app-categories"]], inputs: { categoryIds: [1, "categoryIds"], style: [1, "style"], image: [1, "image"], slider: [1, "slider"], options: "options" }, features: [\u0275\u0275NgOnChangesFeature], decls: 4, vars: 3, consts: [[3, "class", "text"], [3, "options"], ["id", "sub-menu", 1, "sm", "pixelstrap", "sm-vertical"], [1, "shop-left-sidebar"], [1, "product-wrapper", 3, "class"], [1, "row", "g-4", "ratio_square"], [1, "row"], [1, "row", "g-sm-4", "g-3", "category-border"], [1, "row", "background"], [1, "row", "g-sm-4", "g-3"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "collection-mobile-back"], [1, "filter-back", 3, "click"], [1, "ri-arrow-left-s-line"], [1, "nav", "nav-pills", "mb-3", "custom-nav-tab"], [1, "nav-item"], [3, "click", "id", "spinner"], [3, "src", "alt"], [3, "text"], [1, "product-wrapper"], ["carouselSlide", ""], ["href", "javascript:void(0)", 1, "category-box", "category-dark", 3, "click"], [1, "col-12"], [1, "col-xl-2", "col-sm-3", "col-4"], [1, "img-category"], [1, "img-sec", "bg-size"], [1, "img-fluid", "bg-img", 3, "src", "alt"], [3, "routerLink"], [1, "col"], [1, "category-5"], [1, "category-block"], [1, "category-image"], [1, "img-fluid", 3, "src", "alt"], [1, "category-details"], ["href", "javascript:void(0)", 1, "btn", "btn-outline", "btn-block", 3, "routerLink"], [1, ""], [1, "category-image", "svg-image"], [1, "img-sec"], [1, "category-wrapper"], [1, "text-theme"], [1, "category-link"], ["alt", "category-image", 1, "img-fluid", "lazyload", 3, "src"], [1, "row", "row-cols-md-4", "row-cols-2", "g-sm-4", "g-2"], ["href", "javascript:void", 1, "btn", "btn-classic", "btn-outline", 3, "routerLink"], ["href", "javascript:void", 3, "routerLink"], [1, "col-lg-4", "col-sm-6", "border-padding"], [1, "category-banner"], [1, "bg-size"], [1, "img-fluid", "lazyload", "bg-img", 3, "src", "alt"], [1, "category-box"], [1, "contain-bg"], ["data-hover", "size 06"], [1, "category-boxes"], [1, "skeleton-img-sec"], [1, "col-xl-2", "col-md-3", "col-sm-4", "col-6"], [1, "gradient-category"], [1, "gradient-border"], [1, "category-nft"], ["alt", "", 1, "img-fluid", "me-2", "rounded-0", "rounded-0", 3, "alt", "src"], [1, "skeleton-category-img"], [1, "skeleton-category-text"]], template: function Categories_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, Categories_Conditional_0_Template, 16, 16)(1, Categories_Conditional_1_Template, 2, 5, "app-no-data", 0);
        \u0275\u0275conditionalCreate(2, Categories_Conditional_2_Template, 3, 1, "owl-carousel-o", 1);
        \u0275\u0275conditionalCreate(3, Categories_Conditional_3_Template, 3, 0, "ul", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.categories && ctx.categories.length ? 0 : 1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.style() === "digital_download" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.style() === "sidebar" ? 3 : -1);
      }
    }, dependencies: [CarouselModule, CarouselComponent, CarouselSlideDirective, TranslateModule, RouterModule, RouterLink, Button, NoData, TranslatePipe, SlicePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Categories, [{
    type: Component,
    args: [{ selector: "app-categories", imports: [CarouselModule, TranslateModule, RouterModule, Button, NoData, SlicePipe], template: `@if(categories && categories.length){ @if(style() === 'vertical'){ @if(categories.length){
<ul id="sub-menu" class="sm pixelstrap sm-vertical">
  @for(category of categories; track category.id){
  <li>
    <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">{{ category.name }}</a>
  </li>
  }
</ul>
} }

<!-- Category Classic Vertical -->
@if(style() === 'classic_vertical'){
<div class="shop-left-sidebar">
  <div class="collection-mobile-back">
    <span class="filter-back" (click)="closeCanvasMenu()">
      <i class="ri-arrow-left-s-line"></i> {{ 'back' | translate }}
    </span>
  </div>

  @if(categories.length){
  <ul class="nav nav-pills mb-3 custom-nav-tab">
    @for(category of categories; track category.id){
    <li class="nav-item">
      <app-button
        [class]="selectedCategorySlug.length && selectedCategorySlug.includes(category.slug!) ? 'nav-link active' : 'nav-link'"
        [id]="'nav_link_btn'"
        [spinner]="false"
        (click)="redirectToCollection(category.slug!)"
      >
        {{ category.name }}
        <img
          [src]="category?.category_icon ? category?.category_icon?.original_url : 'assets/images/placeholder/category.png'"
          [alt]="category?.name"
        />
      </app-button>
    </li>
    }
  </ul>
  }@else {
  <app-no-data [class]="'no-data-added'" [text]="'no_category' | translate" />
  }
</div>
}

<!-- Category Style Horizontal -->
@if(style() === 'horizontal'){
<div class="product-wrapper" [class]="'category-slider'">
  <owl-carousel-o [options]="options">
    @for(category of categories; track category.id){
    <ng-template carouselSlide>
      <div>
        <a
          href="javascript:void(0)"
          (click)="redirectToCollection(category.slug!)"
          class="category-box category-dark"
          [class.active]="selectedCategorySlug.length && selectedCategorySlug.includes(category.slug!)"
        >
          <img
            [src]="category?.category_icon ? category?.category_icon?.original_url : 'assets/images/placeholder/category.png'"
            [alt]="category?.name"
          />
          <h5>{{ category.name }}</h5>
        </a>
      </div>
    </ng-template>
    }
  </owl-carousel-o>
  @if(!categories.length){
  <app-no-data [class]="'no-data-added'" [text]="'no_category' | translate" />
  }
</div>
} @if(style() === 'basic'){
<div class="row g-4 ratio_square">
  @if(!slider()){ @for(category of categories; track category.id){
  <div class="col-xl-2 col-sm-3 col-4">
    <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
      <div class="img-category">
        <div
          class="img-sec bg-size"
          [style.background-image]="'url(' + (category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png') + ')'"
        >
          <img
            [src]="category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png'"
            class="img-fluid bg-img"
            [alt]="category.name"
          />
        </div>
        <h4>
          <a [routerLink]="['/category', category.slug]"> {{ category.name }} </a>
        </h4>
      </div>
    </a>
  </div>
  } }@else {
  <div class="col-12">
    <owl-carousel-o [options]="options">
      @for(category of categories; track category.id){
      <ng-template carouselSlide>
        <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
          <div class="img-category">
            <div
              class="img-sec bg-size"
              [style.background-image]="'url(' + (category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png') + ')'"
            >
              <img
                [src]="category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png'"
                class="img-fluid bg-img"
                [alt]="category.name"
              />
            </div>
            <h4>
              <a [routerLink]="['/category', category.slug]"> {{ category.name }} </a>
            </h4>
          </div>
        </a>
      </ng-template>
      }
    </owl-carousel-o>
  </div>
  }
</div>
} @if(style() === 'simple'){
<div class="row">
  @if(slider()){
  <div class="col">
    <div class="category-5">
      <owl-carousel-o [options]="options">
        @for(category of categories; track category.id){
        <ng-template carouselSlide>
          <div class="category-block">
            <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
              <div class="category-image">
                <img
                  [src]="category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png'"
                  class="img-fluid"
                  [alt]="category.name"
                />
              </div>
            </a>
            <div class="category-details">
              <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
                <h5>{{ category.name }}</h5>
              </a>
            </div>
          </div>
        </ng-template>
        }
      </owl-carousel-o>
    </div>
  </div>
  }@else { @for(category of categories; track category.id){
  <div class="col-xl-2 col-sm-3 col-4">
    <div class="category-block">
      <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
        <div class="category-image">
          <img
            [src]="category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png'"
            class="img-fluid"
            [alt]="category.name"
          />
        </div>
      </a>
      <div class="category-details">
        <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
          <h5>{{ category.name }}</h5>
        </a>
      </div>
    </div>
  </div>
  } }
</div>
} @if(style() === 'classic'){
<owl-carousel-o [options]="options">
  @for(category of categories; track category.id){
  <ng-template carouselSlide>
    <div>
      <a
        href="javascript:void(0)"
        class="btn btn-outline btn-block"
        [routerLink]="['/category', category.slug]"
      >
        <img
          [src]="category.category_icon ? category.category_icon.original_url : 'assets/images/placeholder/category.png'"
          class="img-fluid"
          [alt]="category.name"
        />
        {{ category.name }}
      </a>
    </div>
  </ng-template>
  }
</owl-carousel-o>
} @if(style() === 'standard'){
<div class="row">
  @if(slider()){
  <div class="col">
    <div class="">
      <owl-carousel-o [options]="options">
        @for(category of categories; track category.id){
        <ng-template carouselSlide>
          <div class="category-block">
            <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
              <div class="category-image svg-image">
                <div class="img-sec">
                  <img
                    [src]="category.category_icon ? category.category_icon.original_url : 'assets/images/placeholder/category.png'"
                    class="img-fluid"
                    [alt]="category.name"
                  />
                </div>
              </div>
            </a>
            <div class="category-details">
              <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
                <h5>{{ category.name }}</h5>
              </a>
            </div>
          </div>
        </ng-template>
        }
      </owl-carousel-o>
    </div>
  </div>
  }@else { @for(category of categories; track category.id){
  <div class="col-xl-2 col-sm-3 col-4">
    <div class="category-block">
      <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
        <div class="category-image svg-image">
          <div class="img-sec">
            <img
              [src]="category.category_icon ? category.category_icon.original_url : 'assets/images/placeholder/category.png'"
              class="img-fluid"
              [alt]="category.name"
            />
          </div>
        </div>
      </a>
      <div class="category-details">
        <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
          <h5>{{ category.name }}</h5>
        </a>
      </div>
    </div>
  </div>
  } }
</div>
} @if(style() === 'premium'){
<owl-carousel-o [options]="options">
  @for(category of categories; track category.id){
  <ng-template carouselSlide>
    <div>
      <div class="category-wrapper">
        <div>
          <h4 class="text-theme">{{ category.name }}</h4>
          <ul class="category-link">
            <li>
              <a href="javascript:void(0)" [routerLink]="['/category', category.slug]"
                >{{ category.name }}</a
              >
            </li>
          </ul>
          <div>
            <img
              [src]="category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png'"
              class="img-fluid lazyload"
              alt="category-image"
            />
          </div>
        </div>
      </div>
    </div>
  </ng-template>
  }
</owl-carousel-o>
} @if(style() === 'bag'){ @if(slider()){
<div class="row">
  <owl-carousel-o [options]="options">
    @for(category of categories; track category.id){
    <ng-template carouselSlide>
      <div class="col">
        <a
          href="javascript:void(0)"
          class="btn btn-outline btn-block"
          [routerLink]="['/category', category.slug]"
          >{{ category.name }}</a
        >
      </div>
    </ng-template>
    }
  </owl-carousel-o>
</div>
}@else {
<div class="row row-cols-md-4 row-cols-2 g-sm-4 g-2">
  @for(category of categories; track category.id){
  <div class="col">
    <a
      href="javascript:void(0)"
      class="btn btn-outline btn-block"
      [routerLink]="['/category', category.slug]"
      >{{ category.name }}</a
    >
  </div>
  }
</div>
} } @if(style() === 'digital'){
<owl-carousel-o [options]="options">
  @for(category of categories; track category.id){
  <ng-template carouselSlide>
    <div class="category-block">
      <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
        <div class="category-image">
          <img
            [src]="category.category_icon ? category.category_icon.original_url : 'assets/images/placeholder/category.png'"
            class="img-fluid"
            [alt]="category.name"
          />
        </div>
      </a>
      <div class="category-details">
        <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
          <h5>{{ category.name }}</h5>
        </a>
      </div>
    </div>
  </ng-template>
  }
</owl-carousel-o>
} @if(style() === 'one'){
<owl-carousel-o [options]="options">
  @for(category of categories; track category.id){
  <ng-template carouselSlide>
    <div>
      <div class="category-wrapper">
        <div>
          @if(category?.category_image){
          <div>
            <img
              [src]="category?.category_image?.original_url"
              class="img-fluid"
              [alt]="category.name"
            />
          </div>
          }@else {
          <div>
            <img
              [src]="'assets/images/placeholder/category.png'"
              class="img-fluid"
              [alt]="category.name"
            />
          </div>
          }
          <h4>
            <a [routerLink]="['/category', category.slug]"> {{ category.name }} </a>
          </h4>
          <ul class="category-link">
            @if(category.subcategories){ @for(categories of category.subcategories | slice: 0:5;
            track categories.id){
            <li>
              <a href="javascript:void" [routerLink]="['/category', categories.slug]"
                >{{categories.name }}</a
              >
            </li>
            } }
          </ul>
          <a
            href="javascript:void"
            class="btn btn-classic btn-outline"
            [routerLink]="['/category', category.slug]"
            >{{ 'view_more' | translate }}</a
          >
        </div>
      </div>
    </div>
  </ng-template>
  }
</owl-carousel-o>
} @if(style() === 'shoes'){
<div class="row g-sm-4 g-3 category-border">
  @for(category of categories; track category.id){
  <div class="col-lg-4 col-sm-6 border-padding">
    <div class="category-banner">
      <div
        class="bg-size"
        [style.background-image]="'url('+ (category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png') +')'"
      >
        <img
          [src]="category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png'"
          class="img-fluid lazyload bg-img"
          [alt]="category.name"
        />
      </div>
      <div class="category-box">
        <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
          <h2>{{ category.name }}</h2>
        </a>
      </div>
    </div>
  </div>
  }
</div>
} @if(style() === 'shoes-size'){
<div class="row background">
  @for(category of categories; track category.id){
  <div class="col">
    <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
      <div class="contain-bg">
        <h4 data-hover="size 06">{{ category.name }}</h4>
      </div>
    </a>
  </div>
  }
</div>
} @if(style() === 'vegetable'){
<owl-carousel-o [options]="options">
  @for(category of categories; track category.id){
  <ng-template carouselSlide>
    <div class="">
      <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
        <div class="category-boxes">
          <div class="img-sec">
            <img
              [src]="category.category_icon ? category.category_icon.original_url : 'assets/images/placeholder/category.png'"
              class="img-fluid"
              [alt]="category.name"
            />
            <div class="skeleton-img-sec"></div>
          </div>
          <h4>{{ category.name }}</h4>
        </div>
      </a>
    </div>
  </ng-template>
  }
</owl-carousel-o>
} @if(style() === 'books'){
<owl-carousel-o [options]="options">
  @for(category of categories; track category.id){
  <ng-template carouselSlide>
    <div class="">
      <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
        <div class="img-category">
          <div class="img-sec">
            <img
              [src]="category.category_icon ? category.category_icon.original_url : 'assets/images/placeholder/category.png'"
              class="img-fluid"
              [alt]="category.name"
            />
          </div>
          <h4>{{ category.name }}</h4>
        </div>
      </a>
    </div>
  </ng-template>
  }
</owl-carousel-o>
} @if(style() === 'gradient'){
<div class="row g-sm-4 g-3">
  @for(category of categories; track category.id; let i = $index){
  <div class="col-xl-2 col-md-3 col-sm-4 col-6">
    <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
      <div class="gradient-category" [class.hover-effect]="i === 1">
        <div class="gradient-border">
          <div class="img-sec">
            <img
              [src]="category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png'"
              class="img-fluid"
              [alt]="category.name"
            />
          </div>
        </div>
        <h4>{{ category.name }}</h4>
      </div>
    </a>
  </div>
  }
</div>
} }@else {
<app-no-data [class]="'no-data-added'" [text]="'no_category' | translate" />
} @if(style() === 'digital_download'){
<owl-carousel-o [options]="options">
  @for(category of categories; track category.id; let i = $index){
  <ng-template carouselSlide>
    <div>
      <div class="category-nft">
        <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
          <div class="category-image">
            <img
              [src]="category.category_image ? category?.category_image?.original_url : 'assets/images/placeholder/category.png'"
              class="img-fluid"
              [alt]="category.name"
            />
          </div>

          <div class="category-details">
            <h5>{{ category.name }}</h5>
          </div>
        </a>
      </div>
    </div>
  </ng-template>
  }
</owl-carousel-o>
} @if(style() === 'sidebar'){
<ul id="sub-menu" class="sm pixelstrap sm-vertical">
  @for(category of categories; track category.id){
  <li>
    <a href="javascript:void(0)" [routerLink]="['/category', category.slug]">
      <img
        [alt]="category?.name"
        class="img-fluid me-2 rounded-0 rounded-0"
        alt=""
        [src]="category?.category_icon ? category?.category_icon?.original_url : 'assets/images/placeholder/category.png'"
      />
      <div class="skeleton-category-img"></div>
      <span>{{ category.name }}</span>
      <span class="skeleton-category-text"></span>
    </a>
  </li>
  }
</ul>
}
` }]
  }], () => [], { categoryIds: [{ type: Input, args: [{ isSignal: true, alias: "categoryIds", required: false }] }], style: [{ type: Input, args: [{ isSignal: true, alias: "style", required: false }] }], image: [{ type: Input, args: [{ isSignal: true, alias: "image", required: false }] }], slider: [{ type: Input, args: [{ isSignal: true, alias: "slider", required: false }] }], options: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Categories, { className: "Categories", filePath: "src/app/shared/components/widgets/categories/categories.ts", lineNumber: 24 });
})();

export {
  Categories
};
//# sourceMappingURL=chunk-SWJYRMIS.js.map
