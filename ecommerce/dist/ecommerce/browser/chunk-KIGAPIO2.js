import {
  teamSlider,
  testimonialSlider
} from "./chunk-HUS46LWS.js";
import {
  ThemeOptionState
} from "./chunk-D2VJHFAS.js";
import {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective
} from "./chunk-EMOFCU5M.js";
import {
  Breadcrumb
} from "./chunk-LBV5SDPN.js";
import "./chunk-LZFLFOAY.js";
import "./chunk-6347PIFH.js";
import "./chunk-2K52HGL6.js";
import {
  TranslateModule
} from "./chunk-7XQQRBBN.js";
import {
  NgClass,
  environment
} from "./chunk-L6CMOIIK.js";
import {
  Component,
  Store,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-3KEERULZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/page/about-us/about-us.ts
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.title;
function AboutUs_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 5)(2, "div", 6);
    \u0275\u0275element(3, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.content_bg_image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.description);
  }
}
function AboutUs_Conditional_2_For_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 14)(2, "div", 15);
    \u0275\u0275element(3, "img", 16);
    \u0275\u0275elementStart(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h6");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 17)(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const team_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.StorageURL + (team_r2 == null ? null : team_r2.profile_image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r2 == null ? null : team_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r2 == null ? null : team_r2.designation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r2 == null ? null : team_r2.review);
  }
}
function AboutUs_Conditional_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AboutUs_Conditional_2_For_10_ng_template_0_Template, 11, 4, "ng-template", 13);
  }
}
function AboutUs_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "div", 5)(2, "div", 9)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11)(8, "owl-carousel-o", 12);
    \u0275\u0275repeaterCreate(9, AboutUs_Conditional_2_For_10_Template, 1, 0, null, 13, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.testimonial == null ? null : ctx_r0.aboutUs.testimonial.sub_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.testimonial == null ? null : ctx_r0.aboutUs.testimonial.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.testimonialOptions);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.testimonial == null ? null : ctx_r0.aboutUs.testimonial.reviews);
  }
}
function AboutUs_Conditional_3_For_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
    \u0275\u0275elementStart(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.StorageURL + (team_r3 == null ? null : team_r3.profile_image_url), \u0275\u0275sanitizeUrl)("alt", team_r3 == null ? null : team_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r3 == null ? null : team_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r3 == null ? null : team_r3.designation);
  }
}
function AboutUs_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AboutUs_Conditional_3_For_8_ng_template_0_Template, 5, 4, "ng-template", 13);
  }
}
function AboutUs_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 5)(2, "div", 9)(3, "h2", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 19)(6, "owl-carousel-o", 12);
    \u0275\u0275repeaterCreate(7, AboutUs_Conditional_3_For_8_Template, 1, 0, null, 13, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.team == null ? null : ctx_r0.aboutUs.team.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.teamOptions);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.team == null ? null : ctx_r0.aboutUs.team.members);
  }
}
function AboutUs_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 14);
    \u0275\u0275element(2, "img", 24)(3, "div", 25);
    \u0275\u0275elementStart(4, "div", 17)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "h4", 26);
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "p", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.futures == null ? null : ctx_r0.aboutUs.about.futures.length) === 4 ? "col-xl-3 col-sm-6" : (ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.futures == null ? null : ctx_r0.aboutUs.about.futures.length) === 3 ? "col-md-4" : (ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.futures == null ? null : ctx_r0.aboutUs.about.futures.length) === 2 ? "col-md-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.StorageURL + service_r4.icon, \u0275\u0275sanitizeUrl)("alt", service_r4.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(service_r4.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r4.description);
  }
}
function AboutUs_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "section", 21)(2, "div", 22);
    \u0275\u0275repeaterCreate(3, AboutUs_Conditional_4_For_4_Template, 11, 5, "div", 23, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.futures);
  }
}
var AboutUs = class _AboutUs {
  constructor() {
    this.store = inject(Store);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.testimonialOptions = testimonialSlider;
    this.teamOptions = teamSlider;
    this.StorageURL = environment.storageURL;
    this.breadcrumb = {
      title: "About Us",
      items: [{ label: "About Us", active: true }]
    };
    this.themeOptions$.subscribe((option) => {
      this.aboutUs = option?.about_us;
    });
  }
  static {
    this.\u0275fac = function AboutUs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutUs)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutUs, selectors: [["app-about-us"]], decls: 5, vars: 5, consts: [[3, "breadcrumb"], [1, "about-page", "section-b-space"], [1, "testimonial", "small-section"], ["id", "team", 1, "team", "section-b-space"], [1, "container", "about-cls", "section-b-space"], [1, "container"], [1, "banner-section"], ["alt", "", 1, "img-fluid", "lazyload", 3, "src"], [1, "mt-4"], [1, "title1"], [1, "title-inner1"], [1, "slide-2", "testimonial-slider"], [3, "options"], ["carouselSlide", ""], [1, "media"], [1, "text-center"], ["alt", "image", 3, "src"], [1, "media-body"], [1, "title-inner1", "border-0"], [1, "team-4"], [1, "img-fluid", 3, "src", "alt"], [1, "service", "border-section", "small-section"], [1, "row", "g-sm-4", "g-3"], [1, "service-block", 3, "ngClass"], [3, "src", "alt"], [1, "skeleton-img-box"], [1, "skeleton-content-h4"], [1, "skeleton-content-p"]], template: function AboutUs_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275conditionalCreate(1, AboutUs_Conditional_1_Template, 9, 3, "section", 1);
        \u0275\u0275conditionalCreate(2, AboutUs_Conditional_2_Template, 11, 3, "section", 2);
        \u0275\u0275conditionalCreate(3, AboutUs_Conditional_3_Template, 9, 2, "section", 3);
        \u0275\u0275conditionalCreate(4, AboutUs_Conditional_4_Template, 5, 0, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.aboutUs == null ? null : ctx.aboutUs.about == null ? null : ctx.aboutUs.about.content_bg_image_url) ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.aboutUs == null ? null : ctx.aboutUs.testimonial == null ? null : ctx.aboutUs.testimonial.status) && (ctx.aboutUs == null ? null : ctx.aboutUs.testimonial == null ? null : ctx.aboutUs.testimonial.reviews == null ? null : ctx.aboutUs.testimonial.reviews.length) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.aboutUs == null ? null : ctx.aboutUs.team == null ? null : ctx.aboutUs.team.status) && (ctx.aboutUs == null ? null : ctx.aboutUs.team == null ? null : ctx.aboutUs.team.members == null ? null : ctx.aboutUs.team.members.length) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.aboutUs == null ? null : ctx.aboutUs.about == null ? null : ctx.aboutUs.about.futures) ? 4 : -1);
      }
    }, dependencies: [CarouselModule, CarouselComponent, CarouselSlideDirective, TranslateModule, Breadcrumb, NgClass], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutUs, [{
    type: Component,
    args: [{ selector: "app-about-us", imports: [CarouselModule, TranslateModule, Breadcrumb, NgClass], template: `<app-breadcrumb [breadcrumb]="breadcrumb" />

<!-- about section start -->
@if((aboutUs?.about?.content_bg_image_url)){
<section class="about-page section-b-space">
  <div class="container">
    <div class="banner-section">
      <img
        [src]="StorageURL + aboutUs?.about?.content_bg_image_url"
        class="img-fluid lazyload"
        alt=""
      />
    </div>
    <div class="mt-4">
      <h3>{{ aboutUs?.about?.title }}</h3>
      <p>{{ aboutUs?.about?.description }}</p>
    </div>
  </div>
</section>
}
<!-- about section end -->

<!--Testimonial start-->
@if(aboutUs?.testimonial?.status && aboutUs?.testimonial?.reviews?.length){
<section class="testimonial small-section">
  <div class="container">
    <div class="title1">
      <h4>{{ aboutUs?.testimonial?.sub_title }}</h4>
      <h2 class="title-inner1">{{ aboutUs?.testimonial?.title }}</h2>
    </div>
    <div class="slide-2 testimonial-slider">
      <owl-carousel-o [options]="testimonialOptions">
        @for(team of aboutUs?.testimonial?.reviews; track team.name){
        <ng-template carouselSlide>
          <div>
            <div class="media">
              <div class="text-center">
                <img [src]="StorageURL + team?.profile_image_url" alt="image" />
                <h5>{{ team?.name }}</h5>
                <h6>{{ team?.designation }}</h6>
              </div>
              <div class="media-body">
                <p>{{ team?.review }}</p>
              </div>
            </div>
          </div>
        </ng-template>
        }
      </owl-carousel-o>
    </div>
  </div>
</section>
}
<!--Testimonial ends-->

<!--Team start-->
@if(aboutUs?.team?.status && aboutUs?.team?.members?.length){
<section id="team" class="team section-b-space">
  <div class="container">
    <div class="title1">
      <h2 class="title-inner1 border-0">{{ aboutUs?.team?.title }}</h2>
    </div>
    <div class="team-4">
      <owl-carousel-o [options]="teamOptions">
        @for(team of aboutUs?.team?.members; track team.name){
        <ng-template carouselSlide>
          <img [src]="StorageURL + team?.profile_image_url" class="img-fluid" [alt]="team?.name" />
          <h4>{{ team?.name }}</h4>
          <h6>{{ team?.designation }}</h6>
        </ng-template>
        }
      </owl-carousel-o>
    </div>
  </div>
</section>
}

<!-- Service Start -->
@if(aboutUs?.about?.futures){
<div class="container about-cls section-b-space">
  <section class="service border-section small-section">
    <div class="row g-sm-4 g-3">
      @for(service of aboutUs?.about?.futures; track service.title){
      <div
        class="service-block"
        [ngClass]="aboutUs?.about?.futures?.length === 4 ? 'col-xl-3 col-sm-6' : aboutUs?.about?.futures?.length === 3 ? 'col-md-4' : aboutUs?.about?.futures?.length === 2 ? 'col-md-6' : 'col-12'"
      >
        <div class="media">
          <img [src]="StorageURL+service.icon" [alt]="service.title" />
          <div class="skeleton-img-box"></div>
          <div class="media-body">
            <h4>{{ service.title }}</h4>
            <h4 class="skeleton-content-h4"></h4>
            <p>{{ service.description }}</p>
            <p class="skeleton-content-p"></p>
          </div>
        </div>
      </div>
      }
    </div>
  </section>
</div>
}
<!-- Service End -->
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutUs, { className: "AboutUs", filePath: "src/app/components/page/about-us/about-us.ts", lineNumber: 22 });
})();
export {
  AboutUs
};
//# sourceMappingURL=chunk-KIGAPIO2.js.map
