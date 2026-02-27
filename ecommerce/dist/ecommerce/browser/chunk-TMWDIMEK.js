import {
  productMainThumbSlider,
  productThumbSlider
} from "./chunk-HUS46LWS.js";
import {
  SendQuestionAction,
  UpdateQuestionAnswersAction
} from "./chunk-P35J2TJJ.js";
import {
  AddToWishlistAction,
  DeleteWishlistAction,
  WishlistState
} from "./chunk-M3EBGQIQ.js";
import {
  ThemeOptionState,
  UpdateProductBoxAction
} from "./chunk-4N2KGCEO.js";
import {
  AddToCompareAction,
  CompareState
} from "./chunk-UMYH4END.js";
import {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective
} from "./chunk-BU5X3MFT.js";
import {
  CartState
} from "./chunk-OKT2D4TP.js";
import {
  AddToCartAction,
  UpdateCartAction
} from "./chunk-HD3MPZTG.js";
import {
  Button
} from "./chunk-6I2UIIRS.js";
import {
  ThemeOptionService
} from "./chunk-LWNWQPUU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-6R3AQVTF.js";
import {
  NgbActiveModal,
  NgbModal,
  NgbModule,
  NgbRating,
  NgbRatingConfig,
  NgbTooltip
} from "./chunk-MLCQBQYT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-MXUZ2ZBZ.js";
import {
  CurrencySymbolPipe
} from "./chunk-3R3C7ZXW.js";
import {
  SettingState
} from "./chunk-TMCH2Z3I.js";
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
  CommonModule,
  JsonPipe,
  NgClass,
  isPlatformBrowser
} from "./chunk-QK7HTLFB.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  inject,
  input,
  output,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/ngx-image-zoom/fesm2020/ngx-image-zoom.mjs
var _c0 = ["zoomContainer"];
var _c1 = ["imageThumbnail"];
var _c2 = ["fullSizeImage"];
var _c3 = (a0) => ({
  ngxImageZoomFullContainer: true,
  ngxImageZoomLensEnabled: a0
});
var NgxImageZoomComponent = class _NgxImageZoomComponent {
  constructor(renderer, changeDetectorRef) {
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.zoomScroll = new EventEmitter();
    this.zoomPosition = new EventEmitter();
    this.imagesLoaded = new EventEmitter();
    this.enableLens = false;
    this.lensBorderRadius = 0;
    this.thumbWidth = 0;
    this.thumbHeight = 0;
    this.fullWidth = 0;
    this.fullHeight = 0;
    this.lensWidth = 100;
    this.lensHeight = 100;
    this.zoomMode = "hover";
    this.magnification = 1;
    this.enableScrollZoom = false;
    this.scrollStepSize = 0.1;
    this.circularLens = false;
    this.minZoomRatio = 1;
    this.maxZoomRatio = 2;
    this.xRatio = 0;
    this.yRatio = 0;
    this.zoomingEnabled = false;
    this.zoomFrozen = false;
    this.isReady = false;
    this.thumbImageLoaded = false;
    this.fullImageLoaded = false;
    this.latestMouseLeft = -1;
    this.latestMouseTop = -1;
    this.eventListeners = [];
    this.altText = "";
    this.titleText = "";
  }
  set setThumbImage(thumbImage) {
    this.thumbImageLoaded = false;
    this.setIsReady(false);
    this.thumbImage = thumbImage;
  }
  set setFullImage(fullImage) {
    this.fullImageLoaded = false;
    this.setIsReady(false);
    this.fullImage = fullImage;
  }
  set setZoomMode(zoomMode) {
    if (_NgxImageZoomComponent.validZoomModes.some((m) => m === zoomMode)) {
      this.zoomMode = zoomMode;
    }
  }
  set setMagnification(magnification) {
    this.magnification = Number(magnification) || this.magnification;
    this.zoomScroll.emit(this.magnification);
  }
  set setMinZoomRatio(minZoomRatio) {
    const ratio = Number(minZoomRatio) || this.minZoomRatio || this.baseRatio || 0;
    this.minZoomRatio = Math.max(ratio, this.baseRatio || 0);
  }
  set setMaxZoomRatio(maxZoomRatio) {
    this.maxZoomRatio = Number(maxZoomRatio) || this.maxZoomRatio;
  }
  set setScrollStepSize(stepSize) {
    this.scrollStepSize = Number(stepSize) || this.scrollStepSize;
  }
  set setEnableLens(enable) {
    this.enableLens = Boolean(enable);
  }
  set setLensWidth(width) {
    this.lensWidth = Number(width) || this.lensWidth;
  }
  set setLensHeight(height) {
    this.lensHeight = Number(height) || this.lensHeight;
  }
  set setCircularLens(enable) {
    this.circularLens = Boolean(enable);
  }
  set setEnableScrollZoom(enable) {
    this.enableScrollZoom = Boolean(enable);
  }
  ngOnInit() {
    this.setUpEventListeners();
  }
  ngOnChanges() {
    if (this.enableLens) {
      if (this.circularLens) {
        this.lensBorderRadius = this.lensWidth / 2;
      } else {
        this.lensBorderRadius = 0;
      }
    }
    this.calculateRatioAndOffset();
    this.calculateImageAndLensPosition();
  }
  ngOnDestroy() {
    this.eventListeners.forEach((destroyFn) => destroyFn());
  }
  /**
   * Template helper methods
   */
  onThumbImageLoaded() {
    this.thumbImageLoaded = true;
    this.checkImagesLoaded();
  }
  onFullImageLoaded() {
    this.fullImageLoaded = true;
    this.checkImagesLoaded();
  }
  setUpEventListeners() {
    const nativeElement = this.zoomContainer.nativeElement;
    switch (this.zoomMode) {
      case "hover":
        this.eventListeners.push(this.renderer.listen(nativeElement, "mouseenter", (event) => this.hoverMouseEnter(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.hoverMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.hoverMouseMove(event)));
        break;
      case "toggle":
        this.eventListeners.push(this.renderer.listen(nativeElement, "click", (event) => this.toggleClick(event)));
        break;
      case "toggle-click":
        this.eventListeners.push(this.renderer.listen(nativeElement, "click", (event) => this.toggleClick(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.clickMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.clickMouseMove(event)));
        break;
      case "click":
        this.eventListeners.push(this.renderer.listen(nativeElement, "click", (event) => this.clickStarter(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.clickMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.clickMouseMove(event)));
        break;
      case "toggle-freeze":
        this.eventListeners.push(this.renderer.listen(nativeElement, "mouseleave", () => this.toggleFreezeMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.toggleFreezeMouseMove(event)), this.renderer.listen(nativeElement, "click", (event) => this.toggleFreezeClick(event)));
        break;
      case "hover-freeze":
        this.eventListeners.push(this.renderer.listen(nativeElement, "mouseenter", (event) => this.hoverFreezeMouseEnter(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.toggleFreezeMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.toggleFreezeMouseMove(event)), this.renderer.listen(nativeElement, "click", (event) => this.hoverFreezeClick(event)));
        break;
    }
    if (this.enableScrollZoom) {
      this.eventListeners.push(this.renderer.listen(nativeElement, "mousewheel", (event) => this.onMouseWheel(event)), this.renderer.listen(nativeElement, "DOMMouseScroll", (event) => this.onMouseWheel(event)), this.renderer.listen(nativeElement, "onmousewheel", (event) => this.onMouseWheel(event)));
    }
    if (this.enableLens && this.circularLens) {
      this.lensBorderRadius = this.lensWidth / 2;
    }
  }
  checkImagesLoaded() {
    this.calculateRatioAndOffset();
    if (this.thumbImageLoaded && this.fullImageLoaded) {
      this.calculateImageAndLensPosition();
      this.setIsReady(true);
    }
  }
  setIsReady(value) {
    this.isReady = value;
    this.imagesLoaded.emit(value);
  }
  /**
   * Zoom position setters
   */
  setZoomPosition(left, top) {
    this.latestMouseLeft = Number(left) || this.latestMouseLeft;
    this.latestMouseTop = Number(top) || this.latestMouseTop;
    const c = {
      x: this.latestMouseLeft,
      y: this.latestMouseTop
    };
    this.zoomPosition.emit(c);
  }
  /**
   * Mouse wheel event
   */
  onMouseWheel(event) {
    if (!this.zoomingEnabled || this.zoomFrozen) {
      return;
    }
    event = window.event || event;
    const direction = Math.max(Math.min(event.wheelDelta || -event.detail, 1), -1);
    if (direction > 0) {
      this.setMagnification = Math.min(this.magnification + this.scrollStepSize, this.maxZoomRatio);
    } else {
      this.setMagnification = Math.max(this.magnification - this.scrollStepSize, this.minZoomRatio);
    }
    this.calculateRatio();
    this.calculateZoomPosition(event);
    event.returnValue = false;
    if (event.preventDefault) {
      event.preventDefault();
    }
  }
  /**
   * Hover mode
   */
  hoverMouseEnter(event) {
    this.zoomOn(event);
  }
  hoverMouseLeave() {
    this.zoomOff();
  }
  hoverMouseMove(event) {
    this.calculateZoomPosition(event);
  }
  /**
   * Toggle mode
   */
  toggleClick(event) {
    if (this.zoomingEnabled) {
      this.zoomOff();
    } else {
      this.zoomOn(event);
    }
  }
  /**
   * Click mode
   */
  clickStarter(event) {
    if (this.zoomingEnabled === false) {
      this.zoomOn(event);
    }
  }
  clickMouseLeave() {
    this.zoomOff();
  }
  clickMouseMove(event) {
    if (this.zoomingEnabled) {
      this.calculateZoomPosition(event);
    }
  }
  /**
   * Toggle freeze mode
   */
  toggleFreezeMouseEnter(event) {
    if (this.zoomingEnabled && !this.zoomFrozen) {
      this.zoomOn(event);
    }
  }
  hoverFreezeMouseEnter(event) {
    if (!this.zoomFrozen) {
      this.zoomOn(event);
    }
  }
  toggleFreezeMouseLeave() {
    if (this.zoomingEnabled && !this.zoomFrozen) {
      this.zoomOff();
    }
  }
  toggleFreezeMouseMove(event) {
    if (this.zoomingEnabled && !this.zoomFrozen) {
      this.calculateZoomPosition(event);
    }
  }
  toggleFreezeClick(event) {
    if (this.zoomingEnabled && this.zoomFrozen) {
      this.zoomFrozen = false;
      this.zoomOff();
    } else if (this.zoomingEnabled) {
      this.zoomFrozen = true;
      this.changeDetectorRef.markForCheck();
    } else {
      this.zoomOn(event);
    }
  }
  hoverFreezeClick(event) {
    if (this.zoomingEnabled && this.zoomFrozen) {
      this.zoomFrozen = false;
    } else if (this.zoomingEnabled) {
      this.zoomFrozen = true;
      this.changeDetectorRef.markForCheck();
    } else {
      this.zoomOn(event);
    }
  }
  /**
   * Private helper methods
   */
  zoomOn(event) {
    if (this.isReady) {
      this.zoomingEnabled = true;
      this.calculateRatioAndOffset();
      this.display = "block";
      this.calculateZoomPosition(event);
      this.changeDetectorRef.markForCheck();
    }
  }
  zoomOff() {
    this.zoomingEnabled = false;
    this.display = "none";
    this.changeDetectorRef.markForCheck();
  }
  calculateZoomPosition(event) {
    const newLeft = Math.max(Math.min(event.offsetX, this.thumbWidth), 0);
    const newTop = Math.max(Math.min(event.offsetY, this.thumbHeight), 0);
    this.setZoomPosition(newLeft, newTop);
    this.calculateImageAndLensPosition();
    this.changeDetectorRef.markForCheck();
  }
  calculateImageAndLensPosition() {
    let lensLeftMod = 0;
    let lensTopMod = 0;
    if (this.enableLens && this.latestMouseLeft > 0) {
      lensLeftMod = this.lensLeft = this.latestMouseLeft - this.lensWidth / 2;
      lensTopMod = this.lensTop = this.latestMouseTop - this.lensHeight / 2;
    }
    this.fullImageLeft = this.latestMouseLeft * -this.xRatio - lensLeftMod;
    this.fullImageTop = this.latestMouseTop * -this.yRatio - lensTopMod;
  }
  calculateRatioAndOffset() {
    this.thumbWidth = this.imageThumbnail.nativeElement.width;
    this.thumbHeight = this.imageThumbnail.nativeElement.height;
    if (!this.enableLens) {
      this.lensWidth = this.thumbWidth;
      this.lensHeight = this.thumbHeight;
      this.lensLeft = 0;
      this.lensTop = 0;
    }
    this.offsetTop = this.imageThumbnail.nativeElement.getBoundingClientRect().top;
    this.offsetLeft = this.imageThumbnail.nativeElement.getBoundingClientRect().left;
    if (this.fullImage === void 0) {
      this.fullImage = this.thumbImage;
    }
    if (this.fullImageLoaded) {
      this.fullWidth = this.fullSizeImage.nativeElement.naturalWidth;
      this.fullHeight = this.fullSizeImage.nativeElement.naturalHeight;
      this.baseRatio = Math.max(this.thumbWidth / this.fullWidth, this.thumbHeight / this.fullHeight);
      this.minZoomRatio = Math.max(this.minZoomRatio || 0, this.baseRatio || 0);
      this.calculateRatio();
    }
  }
  calculateRatio() {
    this.magnifiedWidth = this.fullWidth * this.magnification;
    this.magnifiedHeight = this.fullHeight * this.magnification;
    this.xRatio = (this.magnifiedWidth - this.thumbWidth) / this.thumbWidth;
    this.yRatio = (this.magnifiedHeight - this.thumbHeight) / this.thumbHeight;
  }
};
NgxImageZoomComponent.validZoomModes = ["hover", "toggle", "click", "toggle-click", "toggle-freeze", "hover-freeze"];
NgxImageZoomComponent.\u0275fac = function NgxImageZoomComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxImageZoomComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef));
};
NgxImageZoomComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxImageZoomComponent,
  selectors: [["lib-ngx-image-zoom"]],
  viewQuery: function NgxImageZoomComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7)(_c1, 7)(_c2, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.zoomContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageThumbnail = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fullSizeImage = _t.first);
    }
  },
  inputs: {
    setThumbImage: [0, "thumbImage", "setThumbImage"],
    setFullImage: [0, "fullImage", "setFullImage"],
    setZoomMode: [0, "zoomMode", "setZoomMode"],
    setMagnification: [0, "magnification", "setMagnification"],
    setMinZoomRatio: [0, "minZoomRatio", "setMinZoomRatio"],
    setMaxZoomRatio: [0, "maxZoomRatio", "setMaxZoomRatio"],
    setScrollStepSize: [0, "scrollStepSize", "setScrollStepSize"],
    setEnableLens: [0, "enableLens", "setEnableLens"],
    setLensWidth: [0, "lensWidth", "setLensWidth"],
    setLensHeight: [0, "lensHeight", "setLensHeight"],
    setCircularLens: [0, "circularLens", "setCircularLens"],
    setEnableScrollZoom: [0, "enableScrollZoom", "setEnableScrollZoom"],
    altText: "altText",
    titleText: "titleText"
  },
  outputs: {
    zoomScroll: "zoomScroll",
    zoomPosition: "zoomPosition",
    imagesLoaded: "imagesLoaded"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 7,
  vars: 35,
  consts: [["zoomContainer", ""], ["imageThumbnail", ""], ["fullSizeImage", ""], [1, "ngxImageZoomContainer"], [1, "ngxImageZoomThumbnail", 3, "load", "alt", "title", "src"], [3, "ngClass"], [1, "ngxImageZoomFull", 3, "load", "alt", "title", "src"]],
  template: function NgxImageZoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3, 0)(2, "img", 4, 1);
      \u0275\u0275listener("load", function NgxImageZoomComponent_Template_img_load_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onThumbImageLoaded());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "img", 6, 2);
      \u0275\u0275listener("load", function NgxImageZoomComponent_Template_img_load_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFullImageLoaded());
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.thumbWidth, "px")("height", ctx.thumbHeight, "px");
      \u0275\u0275advance(2);
      \u0275\u0275property("alt", ctx.altText)("title", ctx.titleText)("src", ctx.thumbImage, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("display", ctx.display)("top", ctx.lensTop, "px")("left", ctx.lensLeft, "px")("width", ctx.lensWidth, "px")("height", ctx.lensHeight, "px")("border-radius", ctx.lensBorderRadius, "px");
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(33, _c3, ctx.enableLens));
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.display)("top", ctx.fullImageTop, "px")("left", ctx.fullImageLeft, "px")("width", ctx.magnifiedWidth, "px")("height", ctx.magnifiedHeight, "px");
      \u0275\u0275property("alt", ctx.altText)("title", ctx.titleText)("src", ctx.fullImage, \u0275\u0275sanitizeUrl);
    }
  },
  dependencies: [NgClass],
  styles: [".ngxImageZoomContainer[_ngcontent-%COMP%]{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail[_ngcontent-%COMP%]{pointer-events:all}.ngxImageZoomFull[_ngcontent-%COMP%]{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer[_ngcontent-%COMP%]{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled[_ngcontent-%COMP%]{border:2px solid red;cursor:crosshair;pointer-events:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxImageZoomComponent, [{
    type: Component,
    args: [{
      selector: "lib-ngx-image-zoom",
      template: '<div\n    #zoomContainer\n    class="ngxImageZoomContainer"\n    [style.width.px]="this.thumbWidth"\n    [style.height.px]="this.thumbHeight"\n>\n    <img\n        #imageThumbnail\n        class="ngxImageZoomThumbnail"\n        [alt]="altText"\n        [title]="titleText"\n        [src]="thumbImage"\n        (load)="onThumbImageLoaded()"\n    />\n\n    <div\n        [ngClass]="{\n            ngxImageZoomFullContainer: true,\n            ngxImageZoomLensEnabled: this.enableLens\n        }"\n        [style.display]="this.display"\n        [style.top.px]="this.lensTop"\n        [style.left.px]="this.lensLeft"\n        [style.width.px]="this.lensWidth"\n        [style.height.px]="this.lensHeight"\n        [style.border-radius.px]="this.lensBorderRadius"\n    >\n        <img\n            #fullSizeImage\n            class="ngxImageZoomFull"\n            [alt]="altText"\n            [title]="titleText"\n            [src]="fullImage"\n            (load)="onFullImageLoaded()"\n            [style.display]="this.display"\n            [style.top.px]="this.fullImageTop"\n            [style.left.px]="this.fullImageLeft"\n            [style.width.px]="this.magnifiedWidth"\n            [style.height.px]="this.magnifiedHeight"\n        />\n    </div>\n</div>\n',
      styles: [".ngxImageZoomContainer{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail{pointer-events:all}.ngxImageZoomFull{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled{border:2px solid red;cursor:crosshair;pointer-events:none}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    zoomContainer: [{
      type: ViewChild,
      args: ["zoomContainer", {
        static: true
      }]
    }],
    imageThumbnail: [{
      type: ViewChild,
      args: ["imageThumbnail", {
        static: true
      }]
    }],
    fullSizeImage: [{
      type: ViewChild,
      args: ["fullSizeImage", {
        static: true
      }]
    }],
    zoomScroll: [{
      type: Output
    }],
    zoomPosition: [{
      type: Output
    }],
    imagesLoaded: [{
      type: Output
    }],
    setThumbImage: [{
      type: Input,
      args: ["thumbImage"]
    }],
    setFullImage: [{
      type: Input,
      args: ["fullImage"]
    }],
    setZoomMode: [{
      type: Input,
      args: ["zoomMode"]
    }],
    setMagnification: [{
      type: Input,
      args: ["magnification"]
    }],
    setMinZoomRatio: [{
      type: Input,
      args: ["minZoomRatio"]
    }],
    setMaxZoomRatio: [{
      type: Input,
      args: ["maxZoomRatio"]
    }],
    setScrollStepSize: [{
      type: Input,
      args: ["scrollStepSize"]
    }],
    setEnableLens: [{
      type: Input,
      args: ["enableLens"]
    }],
    setLensWidth: [{
      type: Input,
      args: ["lensWidth"]
    }],
    setLensHeight: [{
      type: Input,
      args: ["lensHeight"]
    }],
    setCircularLens: [{
      type: Input,
      args: ["circularLens"]
    }],
    setEnableScrollZoom: [{
      type: Input,
      args: ["enableScrollZoom"]
    }],
    altText: [{
      type: Input
    }],
    titleText: [{
      type: Input
    }]
  });
})();
var NgxImageZoomModule = class {
};
NgxImageZoomModule.\u0275fac = function NgxImageZoomModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxImageZoomModule)();
};
NgxImageZoomModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxImageZoomModule,
  declarations: [NgxImageZoomComponent],
  imports: [CommonModule],
  exports: [NgxImageZoomComponent]
});
NgxImageZoomModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxImageZoomModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxImageZoomComponent],
      imports: [CommonModule],
      exports: [NgxImageZoomComponent]
    }]
  }], null, null);
})();

// src/app/shared/components/widgets/sale-timer/sale-timer.ts
function SaleTimer_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h4", 1);
    \u0275\u0275domElement(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.title(), " ");
  }
}
function SaleTimer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, SaleTimer_Conditional_0_Conditional_1_Template, 3, 1, "h4", 1);
    \u0275\u0275domElementStart(2, "div", 2)(3, "p", 3)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275domElementStart(6, "span", 4);
    \u0275\u0275text(7, ":");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 5);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275domElementStart(13, "span", 4);
    \u0275\u0275text(14, ":");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 5);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275domElementStart(20, "span", 4);
    \u0275\u0275text(21, ":");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "span", 5);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275domElementStart(27, "span", 5);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.title() ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.remainingTime.days);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "days"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.remainingTime.hours);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "hrs"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.remainingTime.minutes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 13, "min"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.remainingTime.seconds);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 15, "sec"));
  }
}
var SaleTimer = class _SaleTimer {
  constructor() {
    this.startDate = input(...ngDevMode ? [void 0, { debugName: "startDate" }] : []);
    this.endDate = input(...ngDevMode ? [void 0, { debugName: "endDate" }] : []);
    this.title = input(...ngDevMode ? [void 0, { debugName: "title" }] : []);
    this.remainingTime = null;
    this.timerInterval = null;
  }
  ngOnInit() {
    this.startTimer();
  }
  ngOnChanges() {
    this.startTimer();
  }
  ngOnDestroy() {
    this.stopTimer();
  }
  startTimer() {
    const startDate = this.startDate();
    const endDate = this.endDate();
    if (startDate && endDate) {
      new Date(startDate).getTime();
      new Date(endDate).getTime();
      (/* @__PURE__ */ new Date()).getTime();
      this.updateTimer();
      this.timerInterval = setInterval(() => {
        this.updateTimer();
      }, 1e3);
    }
  }
  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  updateTimer() {
    const startDate = this.startDate();
    const endDate = this.endDate();
    if (startDate && endDate) {
      const startDateTime = new Date(startDate).getTime();
      const endDateTime = new Date(endDate).getTime();
      const now = (/* @__PURE__ */ new Date()).getTime();
      let targetDate = endDateTime;
      if (now < startDateTime) {
        targetDate = startDateTime;
      } else if (now >= endDateTime) {
        this.remainingTime = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        this.stopTimer();
        return;
      }
      this.calculateTimeDifference(targetDate);
    }
  }
  calculateTimeDifference(targetDate) {
    const now = (/* @__PURE__ */ new Date()).getTime();
    const timeDiff = targetDate - now;
    this.remainingTime = {
      days: Math.floor(timeDiff / (1e3 * 60 * 60 * 24)),
      hours: Math.floor(timeDiff % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
      minutes: Math.floor(timeDiff % (1e3 * 60 * 60) / (1e3 * 60)),
      seconds: Math.floor(timeDiff % (1e3 * 60) / 1e3)
    };
  }
  static {
    this.\u0275fac = function SaleTimer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SaleTimer)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaleTimer, selectors: [["app-sale-timer"]], inputs: { startDate: [1, "startDate"], endDate: [1, "endDate"], title: [1, "title"] }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "bordered-box", "sale-timer-box"], [1, "sub-title"], [1, "timer"], ["id", "demo"], [1, "padding-l"], [1, "timer-cal"], [1, "clock"]], template: function SaleTimer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SaleTimer_Conditional_0_Template, 30, 17, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.remainingTime ? 0 : -1);
      }
    }, dependencies: [TranslateModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaleTimer, [{
    type: Component,
    args: [{ selector: "app-sale-timer", imports: [TranslateModule], template: `@if(remainingTime){
<div class="bordered-box sale-timer-box">
  @if(title()){
  <h4 class="sub-title">
    <span class="clock"></span>
    {{ title() }}
  </h4>
  }
  <div class="timer">
    <p id="demo">
      <span
        >{{ remainingTime.days }}<span class="padding-l">:</span
        ><span class="timer-cal">{{ 'days' | translate }}</span></span
      >
      <span
        >{{ remainingTime.hours }}<span class="padding-l">:</span
        ><span class="timer-cal">{{ 'hrs' | translate }}</span></span
      >
      <span
        >{{ remainingTime.minutes }}<span class="padding-l">:</span
        ><span class="timer-cal">{{ 'min' | translate }}</span></span
      >
      <span>{{ remainingTime.seconds }}<span class="timer-cal">{{ 'sec' | translate }}</span></span>
    </p>
  </div>
</div>
}
` }]
  }], null, { startDate: [{ type: Input, args: [{ isSignal: true, alias: "startDate", required: false }] }], endDate: [{ type: Input, args: [{ isSignal: true, alias: "endDate", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaleTimer, { className: "SaleTimer", filePath: "src/app/shared/components/widgets/sale-timer/sale-timer.ts", lineNumber: 18 });
})();

// src/app/shared/components/widgets/modal/size-chart-modal/size-chart-modal.ts
var SizeChartModal = class _SizeChartModal {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.image = input(...ngDevMode ? [void 0, { debugName: "image" }] : []);
  }
  static {
    this.\u0275fac = function SizeChartModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SizeChartModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SizeChartModal, selectors: [["app-size-chart-modal"]], inputs: { image: [1, "image"] }, decls: 7, vars: 8, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "id", "iconClass"], [1, "modal-body"], ["alt", "chart", 1, "img-fluid", "w-100", 3, "src"]], template: function SizeChartModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function SizeChartModal_Template_app_button_click_4_listener() {
          return ctx.modal.close("Cross click");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275element(6, "img", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "size_chart"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("id", "profile_modal_close_btn")("iconClass", "ri-close-line");
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.image() && ((tmp_4_0 = ctx.image()) == null ? null : tmp_4_0.original_url), \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [TranslateModule, Button, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SizeChartModal, [{
    type: Component,
    args: [{ selector: "app-size-chart-modal", imports: [TranslateModule, Button], template: `<div class="modal-header">
  <h3 class="fw-semibold">{{ 'size_chart' | translate }}</h3>
  <app-button
    [class]="'btn btn-close'"
    [id]="'profile_modal_close_btn'"
    (click)="modal.close('Cross click')"
    [iconClass]="'ri-close-line'"
  />
</div>
<div class="modal-body">
  <img [src]="image() && image()?.original_url" class="img-fluid w-100" alt="chart" />
</div>
` }]
  }], null, { image: [{ type: Input, args: [{ isSignal: true, alias: "image", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SizeChartModal, { className: "SizeChartModal", filePath: "src/app/shared/components/widgets/modal/size-chart-modal/size-chart-modal.ts", lineNumber: 15 });
})();

// src/app/shared/components/widgets/variant-attributes/variant-attributes.ts
var _c02 = (a0) => ({ "disabled": a0 });
var _forTrack0 = ($index, $item) => $item.id;
function VariantAttributes_For_1_Conditional_3_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const value_r6 = ctx_r4.$implicit;
    const \u0275$index_14_r7 = ctx_r4.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("selected", ctx_r1.variantIds.includes(value_r6.id) && !ctx_r1.soldOutAttributesIds.includes(value_r6.id))("value", \u0275$index_14_r7)("disabled", ctx_r1.soldOutAttributesIds.includes(value_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r6 == null ? null : value_r6.value, " ");
  }
}
function VariantAttributes_For_1_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VariantAttributes_For_1_Conditional_3_For_6_Conditional_0_Template, 2, 4, "option", 8);
  }
  if (rf & 2) {
    const value_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.attributeValues.includes(value_r6.id) ? 0 : -1);
  }
}
function VariantAttributes_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6, 0);
    \u0275\u0275listener("change", function VariantAttributes_For_1_Conditional_3_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const attribute_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, attribute_r4.attribute_values[$event.target.value]));
    });
    \u0275\u0275elementStart(2, "option", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, VariantAttributes_For_1_Conditional_3_For_6_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const attribute_r4 = ctx_r7.$implicit;
    const \u0275$index_1_r9 = ctx_r7.$index;
    \u0275\u0275property("id", \u0275\u0275interpolate1("input-state-", \u0275$index_1_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 4, "choose"), " ", attribute_r4 == null ? null : attribute_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(attribute_r4.attribute_values);
  }
}
function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14)(1, "span", 15);
    \u0275\u0275listener("click", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_0_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, value_r11));
    })("mouseover", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_0_Template_span_mouseover_1_listener() {
      \u0275\u0275restoreView(_r10);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover() && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", value_r11.hex_color);
  }
}
function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "app-button", 16);
    \u0275\u0275listener("click", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template_app_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, value_r11));
    })("mouseover", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template_app_button_mouseover_1_listener() {
      \u0275\u0275restoreView(_r12);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover() && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "value_btn")("type", "button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r11 == null ? null : value_r11.value, " ");
  }
}
function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275listener("mouseover", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template_li_mouseover_0_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover() && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    })("click", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, value_r11));
    });
    \u0275\u0275elementStart(1, "a");
    \u0275\u0275element(2, "img", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (value_r11 == null ? null : value_r11.variation_image) ? value_r11 == null ? null : value_r11.variation_image == null ? null : value_r11.variation_image.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
  }
}
function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r11.price);
  }
}
function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Conditional_5_Conditional_4_Template, 2, 1, "del");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, value_r11.sale_price));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.product.discount ? 4 : -1);
  }
}
function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 19)(2, "input", 20);
    \u0275\u0275listener("mouseover", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Template_input_mouseover_2_listener() {
      \u0275\u0275restoreView(_r14);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover() && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    })("change", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      const attribute_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, attribute_r4.attribute_values[$event.target.value]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Conditional_5_Template, 5, 4, "h5", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r14 = \u0275\u0275nextContext(2);
    const value_r11 = ctx_r14.$implicit;
    const \u0275$index_22_r16 = ctx_r14.$index;
    const \u0275$index_1_r9 = \u0275\u0275nextContext(2).$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "radio-" + \u0275$index_1_r9 + "-" + \u0275$index_22_r16)("name", "radio-group-" + \u0275$index_1_r9)("value", \u0275$index_22_r16)("checked", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id))("disabled", ctx_r1.soldOutAttributesIds.includes(value_r11.id))("ngClass", \u0275\u0275pureFunction1(9, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance();
    \u0275\u0275property("for", "radio-" + \u0275$index_1_r9 + "-" + \u0275$index_22_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", value_r11 == null ? null : value_r11.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showPrice() ? 5 : -1);
  }
}
function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 24)(1, "a")(2, "img", 25);
    \u0275\u0275listener("mouseover", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_4_Template_img_mouseover_2_listener() {
      \u0275\u0275restoreView(_r17);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover() && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    })("click", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_4_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r17);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, value_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currencySymbol");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (value_r11 == null ? null : value_r11.variation_image) ? value_r11 == null ? null : value_r11.variation_image == null ? null : value_r11.variation_image.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, value_r11.sale_price));
  }
}
function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14)(1, "app-button", 16);
    \u0275\u0275listener("click", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_5_Template_app_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, value_r11));
    })("mouseover", function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_5_Template_app_button_mouseover_1_listener() {
      \u0275\u0275restoreView(_r18);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover() && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "value_btn")("type", "button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r11 == null ? null : value_r11.value, " ");
  }
}
function VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_0_Template, 2, 7, "li", 10)(1, VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template, 3, 9, "li", 11)(2, VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template, 3, 6, "li", 11)(3, VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Template, 6, 11, "div", 12)(4, VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_4_Template, 8, 10, "li", 13)(5, VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_5_Template, 3, 9, "li", 10);
  }
  if (rf & 2) {
    const attribute_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275conditional(attribute_r4.style === "color" ? 0 : attribute_r4.style === "circle" ? 1 : attribute_r4.style === "image" ? 2 : (attribute_r4 == null ? null : attribute_r4.style) === "radio" ? 3 : attribute_r4.style === "image_price" ? 4 : 5);
  }
}
function VariantAttributes_For_1_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Template, 6, 1);
  }
  if (rf & 2) {
    const value_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.attributeValues.includes(value_r11.id) ? 0 : -1);
  }
}
function VariantAttributes_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 9);
    \u0275\u0275repeaterCreate(1, VariantAttributes_For_1_Conditional_4_For_2_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(attribute_r4.style === "image" || attribute_r4.style === "image_price" ? "image-box" : "quantity-variant");
    \u0275\u0275property("ngClass", attribute_r4 == null ? null : attribute_r4.style);
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r4.attribute_values);
  }
}
function VariantAttributes_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("mouseleave", function VariantAttributes_For_1_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeVariation());
    });
    \u0275\u0275elementStart(1, "h4", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, VariantAttributes_For_1_Conditional_3_Template, 7, 6, "select", 4)(4, VariantAttributes_For_1_Conditional_4_Template, 3, 3, "ul", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", attribute_r4 == null ? null : attribute_r4.name, ":");
    \u0275\u0275advance();
    \u0275\u0275conditional((attribute_r4 == null ? null : attribute_r4.style) === "dropdown" || ctx_r1.isAllVariantStyleDropdown() ? 3 : 4);
  }
}
var VariantAttributes = class _VariantAttributes {
  constructor() {
    this.modal = inject(NgbModal);
    this.attributes = [];
    this.isAllVariantStyleDropdown = input(false, ...ngDevMode ? [{ debugName: "isAllVariantStyleDropdown" }] : []);
    this.owlCar = input(...ngDevMode ? [void 0, { debugName: "owlCar" }] : []);
    this.showPrice = input(...ngDevMode ? [void 0, { debugName: "showPrice" }] : []);
    this.showVariableType = input([
      "color",
      "rectangle",
      "circle",
      "radio",
      "dropdown",
      "image"
    ], ...ngDevMode ? [{ debugName: "showVariableType" }] : []);
    this.variant_hover = input(...ngDevMode ? [void 0, { debugName: "variant_hover" }] : []);
    this.selectVariation = output();
    this.cartItem$ = inject(Store).select(CartState.cartItems);
    this.productQty = 1;
    this.attributeValues = [];
    this.variantIds = [];
    this.hoverVariantIds = [];
    this.soldOutAttributesIds = [];
    this.hoverSoldOutAttributesIds = [];
    this.selectedOptions = [];
    this.break = false;
  }
  ngOnChanges(changes) {
    setTimeout(() => {
      if (changes["product"] && changes["product"].currentValue) {
        this.product = changes["product"]?.currentValue;
      }
      if (changes["attributes"] && changes["attributes"].currentValue) {
        this.attributes = changes["attributes"]?.currentValue;
      }
      this.cartItem$.subscribe((items) => {
        this.cartItem = items.find((item) => item.product.id == this.product.id);
      });
      this.checkVariantAvailability(this.product);
    }, 0);
    if (changes["showPrice"]?.currentValue) {
      this.product.attributes.forEach((attribute) => {
        attribute.attribute_values.forEach((value) => {
          this.product.variations.forEach((variation) => {
            variation.attribute_values.forEach((att) => {
              if (att.id !== value.id)
                value["price"] = variation.price;
              value["sale_price"] = variation.sale_price;
            });
          });
        });
      });
    }
  }
  checkVariantAvailability(product) {
    this.selectedOptions = [];
    this.attributeValues = [];
    this.selectedVariation = null;
    this.hoverVariation = null;
    this.hoverSoldOutAttributesIds = [];
    product?.variations?.forEach((variation) => {
      variation?.attribute_values?.filter((attribute_value) => {
        if (this.attributeValues.indexOf(attribute_value?.id) === -1)
          this.attributeValues.push(attribute_value?.id);
      });
    });
    if (this.cartItem?.variation) {
      this.cartItem?.variation.attribute_values.filter((attribute_val) => {
        this.setVariant(this.product.variations, attribute_val);
      });
    }
    if (!this.cartItem) {
      for (const attribute of product?.attributes) {
        if (this.attributeValues?.length && attribute?.attribute_values?.length) {
          let values = [];
          for (const value of attribute.attribute_values) {
            if (values.indexOf(value.id) === -1)
              values.push(value.id);
            if (this.attributeValues.includes(value.id)) {
              this.setVariant(product.variations, value);
              if (this.break)
                break;
            }
          }
        }
      }
    }
    product.variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      product?.attributes.filter((attribute) => {
        if (attribute.style == "image" || attribute.style == "image_price") {
          attribute.attribute_values.filter((attribute_value) => {
            if (this.attributeValues.includes(attribute_value.id)) {
              if (attrValues.includes(attribute_value.id)) {
                attribute_value.variation_image = variation.variation_image;
                attribute_value.name = variation.name;
                attribute_value.price = variation.price;
                attribute_value.sale_price = variation.sale_price;
              }
            }
          });
        }
      });
    });
  }
  setVariant(variations, value, event) {
    const index = this.selectedOptions.findIndex((item) => Number(item.attribute_id) === Number(value?.attribute_id));
    this.soldOutAttributesIds = [];
    if (index === -1) {
      this.selectedOptions.push({
        id: Number(value?.id),
        attribute_id: Number(value?.attribute_id)
      });
    } else {
      this.selectedOptions[index].id = value?.id;
    }
    variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      this.variantIds = this.selectedOptions?.map((variants) => variants?.id);
      let doValuesMatch = attrValues.length === this.selectedOptions.length && attrValues.every((value2) => this.variantIds.includes(value2));
      const productValue = this.product;
      if (doValuesMatch) {
        this.selectedVariation = variation;
        this.product["quantity"] = this.selectedVariation ? this.selectedVariation?.quantity : this.product?.quantity;
        productValue["sku"] = this.selectedVariation ? this.selectedVariation?.sku : productValue?.sku;
        productValue["sale_price"] = this.selectedVariation ? this.selectedVariation?.sale_price : productValue?.sale_price;
        const owlCar = this.owlCar();
        if (owlCar && this.selectedVariation.variation_image) {
          owlCar.to(this.selectedVariation.variation_image.id.toString());
        }
      }
      if (variation.stock_status == "out_of_stock" || !variation.status || !productValue.status) {
        variation?.attribute_values.filter((attr_value) => {
          if (attrValues.some((value2) => this.variantIds.includes(value2))) {
            if (attrValues.every((value2) => this.variantIds.includes(value2))) {
              this.soldOutAttributesIds.push(attr_value.id);
            } else if (!this.variantIds.includes(attr_value.id)) {
              this.soldOutAttributesIds.push(attr_value.id);
            }
          } else if (attrValues.length == 1 && attrValues.includes(attr_value.id)) {
            this.soldOutAttributesIds.push(attr_value.id);
          }
        });
      }
    });
    this.product?.attributes.filter((attribute) => {
      attribute.attribute_values.filter((a_value) => {
        if (a_value.id == value.id) {
          attribute.selected_value = a_value.value;
        }
      });
    });
    if (this.selectedVariation && this.selectedVariation?.status && this.selectedVariation.stock_status == "in_stock") {
      this.break = true;
    } else {
      this.break = false;
    }
    if (event !== "hover") {
      this.hoverVariantIds = this.variantIds;
      this.hoverVariation = this.selectedVariation;
      this.hoverSoldOutAttributesIds = this.soldOutAttributesIds;
    }
    if (this.selectedVariation) {
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  removeVariation() {
    this.variantIds = this.hoverVariantIds;
    this.selectedVariation = this.hoverVariation;
    this.soldOutAttributesIds = this.hoverSoldOutAttributesIds;
    if (this.selectedVariation) {
      const owlCar = this.owlCar();
      if (owlCar && this.selectedVariation.variation_image) {
        owlCar.to(this.selectedVariation.variation_image.id.toString());
      }
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  openSizeChartModal(image) {
    const sizeChart = this.modal.open(SizeChartModal, { size: "lg", centered: true });
    sizeChart.componentInstance.image = image;
  }
  static {
    this.\u0275fac = function VariantAttributes_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantAttributes)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VariantAttributes, selectors: [["app-variant-attributes"]], inputs: { product: "product", attributes: "attributes", isAllVariantStyleDropdown: [1, "isAllVariantStyleDropdown"], owlCar: [1, "owlCar"], showPrice: [1, "showPrice"], showVariableType: [1, "showVariableType"], variant_hover: [1, "variant_hover"] }, outputs: { selectVariation: "selectVariation" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [["selectedValue", ""], [1, "variation-box"], [1, "variation-box", 3, "mouseleave"], [1, "sub-title"], [1, "form-control", "form-select", "select-dropdown", 3, "id"], [3, "ngClass", "class"], [1, "form-control", "form-select", "select-dropdown", 3, "change", "id"], ["selected", "", "disabled", ""], [3, "selected", "value", "disabled"], [3, "ngClass"], [1, "bg-light", 3, "active", "ngClass"], [3, "active", "ngClass"], [1, "d-flex", "digital-price"], [1, "", 3, "active", "ngClass"], [1, "bg-light", 3, "ngClass"], [3, "click", "mouseover"], [3, "click", "mouseover", "id", "type", "spinner"], [3, "mouseover", "click", "ngClass"], ["alt", "img", 3, "src"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "mouseover", "change", "id", "name", "value", "checked", "disabled", "ngClass"], [1, "form-check-label", "mb-0", 3, "for"], [1, "sold", "text-content", "ms-auto"], [1, "theme-color", "price"], [1, "", 3, "ngClass"], ["alt", "img", 3, "mouseover", "click", "src"]], template: function VariantAttributes_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, VariantAttributes_For_1_Template, 5, 2, "div", 1, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.attributes);
      }
    }, dependencies: [TranslateModule, Button, NgClass, CurrencySymbolPipe, TranslatePipe], styles: ["\n\n.box[_ngcontent-%COMP%] {\n  height: 100px;\n  overflow: hidden;\n}\n.box[_ngcontent-%COMP%]   image[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=variant-attributes.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VariantAttributes, [{
    type: Component,
    args: [{ selector: "app-variant-attributes", imports: [CurrencySymbolPipe, TranslateModule, Button, NgClass], template: `@for(attribute of attributes; track attribute.id; let i = $index){
<div class="variation-box" (mouseleave)="removeVariation()">
  <h4 class="sub-title">{{ attribute?.name }}:</h4>

  @if(attribute?.style === 'dropdown' || isAllVariantStyleDropdown()){
  <select
    id="input-state-{{i}}"
    class="form-control form-select select-dropdown"
    #selectedValue
    (change)="setVariant(product.variations, attribute.attribute_values[$any($event.target).value])"
  >
    <option selected disabled>{{ 'choose' | translate }} {{ attribute?.name }}</option>
    @for(value of attribute.attribute_values; let attributeIndex = $index; track value.id){
    @if(attributeValues.includes(value.id)){
    <option
      [selected]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
      [value]="attributeIndex"
      [disabled]="soldOutAttributesIds.includes(value.id)"
    >
      {{ value?.value }}
    </option>
    } }
  </select>
  }@else {
  <ul
    [ngClass]="attribute?.style"
    [class]="(attribute.style === 'image' || attribute.style === 'image_price') ? 'image-box' : 'quantity-variant'"
  >
    @for(value of attribute.attribute_values; track value.id; let attributeIndex = $index){
    @if(attributeValues.includes(value.id)){ @if(attribute.style === 'color'){
    <li
      class="bg-light"
      [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
      [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
    >
      <span
        (click)="setVariant(product.variations, value)"
        (mouseover)="!soldOutAttributesIds.includes(value.id) && variant_hover() && setVariant(product.variations, value, 'hover')"
        [style.background-color]="value.hex_color"
      ></span>
    </li>
    } @else if(attribute.style === 'circle'){
    <li
      [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
      [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
    >
      <app-button
        [id]="'value_btn'"
        [type]="'button'"
        [spinner]="false"
        (click)="setVariant(product.variations, value)"
        (mouseover)="!soldOutAttributesIds.includes(value.id) && variant_hover() && setVariant(product.variations, value, 'hover')"
      >
        {{ value?.value }}
      </app-button>
    </li>
    } @else if(attribute.style === 'image'){
    <li
      (mouseover)="!soldOutAttributesIds.includes(value.id) && variant_hover() && setVariant(product.variations, value, 'hover')"
      (click)="setVariant(product.variations, value)"
      [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
      [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
    >
      <a>
        <img
          [src]="value?.variation_image ? value?.variation_image?.original_url : 'assets/images/placeholder/product.png'" alt="img"
        />
      </a>
    </li>
    } @else if(attribute?.style === 'radio'){
    <div class="d-flex digital-price">
      <div class="form-check">
        <input
          type="radio"
          class="form-check-input"
          [id]="'radio-' + i + '-' + attributeIndex"
          [name]="'radio-group-' + i"
          [value]="attributeIndex"
          [checked]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
          (mouseover)="!soldOutAttributesIds.includes(value.id) && variant_hover() && setVariant(product.variations, value, 'hover')"
          [disabled]="soldOutAttributesIds.includes(value.id)"
          [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
          (change)="setVariant(product.variations, attribute.attribute_values[$any($event.target).value])"
        />
        <label [for]="'radio-' + i + '-' + attributeIndex" class="form-check-label mb-0"
          >{{ value?.value }}
        </label>
        @if(showPrice()){
        <h5 class="sold text-content ms-auto">
          <span class="theme-color price">{{ value.sale_price | currencySymbol }}</span>
          @if(product.discount){
          <del>{{ value.price }}</del>
          }
        </h5>
        }
      </div>
    </div>
    } @else if(attribute.style === 'image_price'){
    <li
      class=""
      [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
      [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
    >
      <a>
        <img
          [src]="value?.variation_image ? value?.variation_image?.original_url : 'assets/images/placeholder/product.png'"
          (mouseover)="!soldOutAttributesIds.includes(value.id)  && variant_hover() &&  setVariant(product.variations, value, 'hover')"
          (click)="setVariant(product.variations, value)" alt="img"
        />
        <h5>{{ value.name }}</h5>
        <h4>{{ value.sale_price| currencySymbol }}</h4>
      </a>
    </li>
    } @else {
    <li
      class="bg-light"
      [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
      [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
    >
      <app-button
        [id]="'value_btn'"
        [type]="'button'"
        [spinner]="false"
        (click)="setVariant(product.variations, value)"
        (mouseover)="!soldOutAttributesIds.includes(value.id)  && variant_hover() &&  setVariant(product.variations, value, 'hover')"
      >
        {{ value?.value }}
      </app-button>
    </li>
    } } }
  </ul>
  }
</div>
}
`, styles: ["/* src/app/shared/components/widgets/variant-attributes/variant-attributes.scss */\n.box {\n  height: 100px;\n  overflow: hidden;\n}\n.box image {\n  height: 100%;\n}\n/*# sourceMappingURL=variant-attributes.css.map */\n"] }]
  }], null, { product: [{
    type: Input
  }], attributes: [{
    type: Input
  }], isAllVariantStyleDropdown: [{ type: Input, args: [{ isSignal: true, alias: "isAllVariantStyleDropdown", required: false }] }], owlCar: [{ type: Input, args: [{ isSignal: true, alias: "owlCar", required: false }] }], showPrice: [{ type: Input, args: [{ isSignal: true, alias: "showPrice", required: false }] }], showVariableType: [{ type: Input, args: [{ isSignal: true, alias: "showVariableType", required: false }] }], variant_hover: [{ type: Input, args: [{ isSignal: true, alias: "variant_hover", required: false }] }], selectVariation: [{ type: Output, args: ["selectVariation"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VariantAttributes, { className: "VariantAttributes", filePath: "src/app/shared/components/widgets/variant-attributes/variant-attributes.ts", lineNumber: 25 });
})();

// src/app/components/shop/product/product-details/widgets/product-social-share/product-social-share.ts
var ProductSocialShare = class _ProductSocialShare {
  constructor() {
    this.modalService = inject(NgbModal);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.option = input(...ngDevMode ? [void 0, { debugName: "option" }] : []);
    this.url = environment.siteURL || environment.baseURL;
    this.shareText = "";
    const platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    const product = this.product();
    if (product) {
      this.shareOnFacebook(product.slug);
    }
  }
  shareOnFacebook(slug) {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url + "/product/" + slug)}`;
    this.shareText = facebookShareUrl;
  }
  shareOnTwitter(slug) {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.url + "/product/" + slug)}`;
    this.shareText = twitterShareUrl;
  }
  shareOnLinkedIn(slug) {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.url + "/product/" + slug)}`;
    this.shareText = linkedInShareUrl;
  }
  shareOnWhatsApp(slug) {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.url + "/product/" + slug)}`;
    this.shareText = whatsappShareUrl;
  }
  shareViaEmail(slug) {
    const subject = "Check out this awesome product!";
    const body = `I thought you might be interested in this product: ${this.url + "/product/" + slug}`;
    const emailShareUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (this.isBrowser) {
      window.location.href = emailShareUrl;
    }
  }
  copyLink() {
    void navigator.clipboard.writeText(this.shareText);
  }
  static {
    this.\u0275fac = function ProductSocialShare_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductSocialShare)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductSocialShare, selectors: [["app-product-social-share"]], inputs: { product: [1, "product"], option: [1, "option"] }, decls: 30, vars: 13, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [1, "modal-body"], [1, "bordered-box"], [1, "product-social"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-facebook-line"], [1, "ri-twitter-line"], [1, "ri-linkedin-line"], [1, "ri-whatsapp-line"], [1, "ri-mail-line"], [1, "gap-3", "input-group", "form-box"], ["type", "email", "id", "exampleInputEmail1", "name", "email", 1, "form-control", 3, "ngModelChange", "value", "ngModel"], ["type", "button", "id", "button-addon1", 1, "btn", "btn-solid", "buy-button", 3, "click", "disabled"]], template: function ProductSocialShare_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function ProductSocialShare_Template_app_button_click_4_listener() {
          return ctx.modalService.dismissAll("Cancel");
        });
        \u0275\u0275element(5, "i", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "ul", 6)(9, "li")(10, "a", 7);
        \u0275\u0275listener("click", function ProductSocialShare_Template_a_click_10_listener() {
          return ctx.shareOnFacebook(ctx.product().slug);
        });
        \u0275\u0275element(11, "i", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li")(13, "a", 7);
        \u0275\u0275listener("click", function ProductSocialShare_Template_a_click_13_listener() {
          return ctx.shareOnTwitter(ctx.product().slug);
        });
        \u0275\u0275element(14, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "li")(16, "a", 7);
        \u0275\u0275listener("click", function ProductSocialShare_Template_a_click_16_listener() {
          return ctx.shareOnLinkedIn(ctx.product().slug);
        });
        \u0275\u0275element(17, "i", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "li")(19, "a", 7);
        \u0275\u0275listener("click", function ProductSocialShare_Template_a_click_19_listener() {
          return ctx.shareOnWhatsApp(ctx.product().slug);
        });
        \u0275\u0275element(20, "i", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "li")(22, "a", 7);
        \u0275\u0275listener("click", function ProductSocialShare_Template_a_click_22_listener() {
          return ctx.shareViaEmail(ctx.product().slug);
        });
        \u0275\u0275element(23, "i", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "form")(25, "div", 13)(26, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function ProductSocialShare_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.shareText, $event) || (ctx.shareText = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 15);
        \u0275\u0275listener("click", function ProductSocialShare_Template_button_click_27_listener() {
          return ctx.copyLink();
        });
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 9, "share_it"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "profile_modal_close_btn");
        \u0275\u0275advance(22);
        \u0275\u0275property("value", ctx.shareText);
        \u0275\u0275twoWayProperty("ngModel", ctx.shareText);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.shareText);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 11, "copy_link"), " ");
      }
    }, dependencies: [TranslateModule, Button, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, ReactiveFormsModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductSocialShare, [{
    type: Component,
    args: [{ selector: "app-product-social-share", imports: [TranslateModule, Button, FormsModule, ReactiveFormsModule], template: `<div class="modal-header">
  <h3 class="fw-semibold">{{ 'share_it' | translate }}</h3>
  <app-button
    [class]="'btn btn-close'"
    [spinner]="false"
    [id]="'profile_modal_close_btn'"
    (click)="modalService.dismissAll('Cancel')"
  >
    <i class="ri-close-line"></i>
  </app-button>
</div>
<div class="modal-body">
  <div class="bordered-box">
    <ul class="product-social">
      <li>
        <a href="javascript:void(0)" (click)="shareOnFacebook(product()!.slug)"
          ><i class="ri-facebook-line"></i
        ></a>
      </li>
      <li>
        <a href="javascript:void(0)" (click)="shareOnTwitter(product()!.slug)"
          ><i class="ri-twitter-line"></i
        ></a>
      </li>
      <li>
        <a href="javascript:void(0)" (click)="shareOnLinkedIn(product()!.slug)"
          ><i class="ri-linkedin-line"></i
        ></a>
      </li>
      <li>
        <a href="javascript:void(0)" (click)="shareOnWhatsApp(product()!.slug)"
          ><i class="ri-whatsapp-line"></i
        ></a>
      </li>
      <li>
        <a href="javascript:void(0)" (click)="shareViaEmail(product()!.slug)"
          ><i class="ri-mail-line"></i
        ></a>
      </li>
    </ul>

    <form>
      <div class="gap-3 input-group form-box">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          [value]="shareText"
          name="email"
          [(ngModel)]="shareText"
        />
        <button
          class="btn btn-solid buy-button"
          type="button"
          id="button-addon1"
          [disabled]="!shareText"
          (click)="copyLink()"
        >
          {{"copy_link" | translate}}
        </button>
      </div>
    </form>
  </div>
</div>
` }]
  }], () => [], { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], option: [{ type: Input, args: [{ isSignal: true, alias: "option", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductSocialShare, { className: "ProductSocialShare", filePath: "src/app/components/shop/product/product-details/widgets/product-social-share/product-social-share.ts", lineNumber: 19 });
})();

// src/app/components/shop/product/product-details/widgets/product-wholesales/product-wholesales.ts
var _forTrack02 = ($index, $item) => $item.id;
function ProductWholesales_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currencySymbol");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const wholesale_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(wholesale_r1.min_qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(wholesale_r1.max_qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_12_0 = ctx_r1.product()) == null ? null : tmp_12_0.wholesale_price_type) === "fixed" ? \u0275\u0275pipeBind1(7, 3, wholesale_r1.value) : wholesale_r1.value + "% Off", " ");
  }
}
var ProductWholesales = class _ProductWholesales {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
  }
  static {
    this.\u0275fac = function ProductWholesales_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductWholesales)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductWholesales, selectors: [["app-product-wholesales"]], inputs: { product: [1, "product"] }, decls: 15, vars: 9, consts: [[1, "table", "mt-2", "mb-4", "modal-table"], [1, "border-top-0"]], template: function ProductWholesales_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "th", 1);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "th", 1);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(12, "tbody");
        \u0275\u0275repeaterCreate(13, ProductWholesales_For_14_Template, 8, 5, "tr", null, _forTrack02);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "min_qty"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "max_qty"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, ((tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.wholesale_price_type) === "fixed" ? "unit_price" : "percentage"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater((tmp_3_0 = ctx.product()) == null ? null : tmp_3_0.wholesales);
      }
    }, dependencies: [TranslateModule, TranslatePipe, CurrencySymbolPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductWholesales, [{
    type: Component,
    args: [{ selector: "app-product-wholesales", imports: [TranslateModule, CurrencySymbolPipe], template: `<table class="table mt-2 mb-4 modal-table">
  <thead>
    <tr>
      <th class="border-top-0">{{ 'min_qty' | translate }}</th>
      <th class="border-top-0">{{ 'max_qty' | translate }}</th>
      <th class="border-top-0">
        {{ (product()?.wholesale_price_type === 'fixed' ? 'unit_price' : 'percentage' ) | translate
        }}
      </th>
    </tr>
  </thead>
  <tbody>
    @for(wholesale of product()?.wholesales; track wholesale.id){
    <tr>
      <td>{{ wholesale.min_qty }}</td>
      <td>{{ wholesale.max_qty }}</td>
      <td>
        {{ (product()?.wholesale_price_type === 'fixed'? (wholesale.value | currencySymbol) :
        wholesale.value +'% Off') }}
      </td>
    </tr>
    }
  </tbody>
</table>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductWholesales, { className: "ProductWholesales", filePath: "src/app/components/shop/product/product-details/widgets/product-wholesales/product-wholesales.ts", lineNumber: 14 });
})();

// src/app/components/shop/product/product-details/widgets/product-content/product-content.ts
var _c03 = () => [];
var _c12 = (a0, a1) => ({ "danger-progress": a0, "warning-progress": a1 });
function ProductContent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-wholesales", 7);
    \u0275\u0275elementStart(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("product", ctx_r1.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "total_price"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, ctx_r1.totalPrice));
  }
}
function ProductContent_Conditional_0_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 19);
    \u0275\u0275listener("click", function ProductContent_Conditional_0_Conditional_2_Conditional_11_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addToCart(ctx_r1.product));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("btn btn-animation btn-solid hover-solid scroll-button buy-button");
    \u0275\u0275property("id", "addcartbtnVariation" + ctx_r1.product.id)("spinner", true)("type", "button");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "add_to_cart"), " ");
  }
}
function ProductContent_Conditional_0_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-button", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("btn btn-animation btn-solid hover-solid scroll-button buy-button");
    \u0275\u0275property("id", "soldoutbtnproductcontain")("spinner", false)("disabled", true)("spinner", false)("type", "button");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 8, ctx_r1.selectedVariation && ctx_r1.selectedVariation.status && ctx_r1.selectedVariation.quantity < ctx_r1.productQty || !ctx_r1.selectedVariation && ctx_r1.product.quantity < ctx_r1.productQty ? "out_of_stock" : "add_to_cart"), " ");
  }
}
function ProductContent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div")(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "span", 12)(6, "app-button", 13);
    \u0275\u0275listener("click", function ProductContent_Conditional_0_Conditional_2_Template_app_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(-1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 14);
    \u0275\u0275elementStart(8, "span", 12)(9, "app-button", 13);
    \u0275\u0275listener("click", function ProductContent_Conditional_0_Conditional_2_Template_app_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(1));
    });
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275conditionalCreate(11, ProductContent_Conditional_0_Conditional_2_Conditional_11_Template, 5, 8, "app-button", 16)(12, ProductContent_Conditional_0_Conditional_2_Conditional_12_Template, 3, 10, "app-button", 17);
    \u0275\u0275elementStart(13, "app-button", 18);
    \u0275\u0275listener("click", function ProductContent_Conditional_0_Conditional_2_Template_app_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView((ctx_r1.selectedVariation && ctx_r1.selectedVariation.status && ctx_r1.selectedVariation.quantity >= ctx_r1.productQty || !ctx_r1.selectedVariation && ctx_r1.product.quantity >= ctx_r1.productQty) && ctx_r1.addToCart(ctx_r1.product, true));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275classMap("btn quantity-left-minus");
    \u0275\u0275property("id", "quantity-left-minus" + ctx_r1.product.id)("iconClass", "ri-arrow-left-s-line")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.productQty);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn quantity-left-plus");
    \u0275\u0275property("id", "quantity-left-plus" + ctx_r1.product.id)("iconClass", "ri-arrow-right-s-line")("spinner", false);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedVariation && ctx_r1.selectedVariation.status && ctx_r1.selectedVariation.quantity >= ctx_r1.productQty || !ctx_r1.selectedVariation && ctx_r1.product.quantity >= ctx_r1.productQty ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn btn-solid buy-button");
    \u0275\u0275property("id", "buynowbtn" + ctx_r1.product.id)("disabled", ctx_r1.selectedVariation && ctx_r1.selectedVariation.status && ctx_r1.selectedVariation.quantity >= ctx_r1.productQty || !ctx_r1.selectedVariation && ctx_r1.product.quantity >= ctx_r1.productQty ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 17, "buy_now"), " ");
  }
}
function ProductContent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 23);
    \u0275\u0275listener("click", function ProductContent_Conditional_0_Conditional_3_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.externalProductLink(ctx_r1.product.external_url));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("btn btn-solid rounded-3");
    \u0275\u0275property("id", "externalBtn" + ctx_r1.product.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.product.external_button_text ? ctx_r1.product.external_button_text : \u0275\u0275pipeBind1(2, 4, "buy_now"), "\n");
  }
}
function ProductContent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275listener("click", function ProductContent_Conditional_0_Conditional_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToWishlist(ctx_r1.product));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-heart-", ctx_r1.product.is_wishlist ? "fill" : "line"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "add_to_wishlist"));
  }
}
function ProductContent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275listener("click", function ProductContent_Conditional_0_Conditional_6_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(ctx_r1.product));
    });
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "share"));
  }
}
function ProductContent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275element(6, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(3, 6, "please_hurry_only"), " ", ctx_r1.product.quantity, " ", \u0275\u0275pipeBind1(4, 8, "left_in_stock"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c12, ctx_r1.product.quantity <= 2, ctx_r1.product.quantity >= 3 && ctx_r1.product.quantity <= 7));
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.product.quantity * 100 / 10 + "%");
  }
}
function ProductContent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-sale-timer", 6);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("startDate", ctx_r1.product.sale_starts_at)("endDate", ctx_r1.product.sale_expired_at)("title", \u0275\u0275pipeBind1(1, 3, "sales_ends_in"));
  }
}
function ProductContent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-variant-attributes", 0);
    \u0275\u0275listener("selectVariation", function ProductContent_Conditional_0_Template_app_variant_attributes_selectVariation_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectVariation($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, ProductContent_Conditional_0_Conditional_1_Template, 7, 7);
    \u0275\u0275conditionalCreate(2, ProductContent_Conditional_0_Conditional_2_Template, 16, 19, "div", 1)(3, ProductContent_Conditional_0_Conditional_3_Template, 3, 6, "app-button", 2);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275conditionalCreate(5, ProductContent_Conditional_0_Conditional_5_Template, 5, 6, "a", 4);
    \u0275\u0275conditionalCreate(6, ProductContent_Conditional_0_Conditional_6_Template, 5, 3, "a", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ProductContent_Conditional_0_Conditional_7_Template, 7, 13, "div", 5);
    \u0275\u0275conditionalCreate(8, ProductContent_Conditional_0_Conditional_8_Template, 2, 5, "app-sale-timer", 6);
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r1.product)("attributes", ctx_r1.product.attributes || \u0275\u0275pureFunction0(10, _c03))("owlCar", ctx_r1.owlCar())("variant_hover", ctx_r1.variant_hover());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.wholesales.length && !ctx_r1.product_variation() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.product.is_external ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.product_variation() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.social_share && ((tmp_8_0 = ctx_r1.option()) == null ? null : tmp_8_0.product == null ? null : tmp_8_0.product.social_share) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product && ctx_r1.product.quantity && ctx_r1.product.quantity <= 10 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.sale_starts_at && ctx_r1.product.sale_expired_at ? 8 : -1);
  }
}
var ProductContent = class _ProductContent {
  constructor() {
    this.store = inject(Store);
    this.router = inject(Router);
    this.modal = inject(NgbModal);
    this.cartItem$ = inject(Store).select(CartState.cartItems);
    this.setting$ = inject(Store).select(SettingState.setting);
    this.wishlistIds$ = inject(Store).select(WishlistState.wishlistIds);
    this.option = input(...ngDevMode ? [void 0, { debugName: "option" }] : []);
    this.owlCar = input(...ngDevMode ? [void 0, { debugName: "owlCar" }] : []);
    this.product_variation = input(false, ...ngDevMode ? [{ debugName: "product_variation" }] : []);
    this.variant_hover = input(true, ...ngDevMode ? [{ debugName: "variant_hover" }] : []);
    this.selectedVariant = output();
    this.productQty = 1;
    this.shippingFreeAmt = 0;
    this.totalPrice = 0;
    const platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);
    this.setting$.subscribe((setting) => this.shippingFreeAmt = setting?.general?.min_order_free_shipping);
  }
  ngOnChanges(changes) {
    if (changes["product"] && changes["product"].currentValue) {
      this.selectedVariation = null;
      this.product = changes["product"]?.currentValue;
    }
    this.productQty = 1;
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => {
        if (item.variation && item.variation != null && item.variation_id && item.variation_id != null) {
          this.product.variations.find((i) => {
            if (i.id == item.variation_id)
              return i.id == item.variation_id;
          });
          return true;
        } else {
          return item.product.id == this.product.id;
        }
      });
    });
  }
  ngOnInit() {
    this.wholesalePriceCal();
  }
  selectVariation(variation) {
    if (variation) {
      this.selectedVariation = variation;
      this.selectedVariant.emit(this.selectedVariation);
    }
  }
  updateQuantity(qty) {
    if (1 > this.productQty + qty)
      return;
    this.productQty = this.productQty + qty;
    this.wholesalePriceCal();
  }
  externalProductLink(link) {
    if (this.isBrowser) {
      if (link) {
        window.open(link, "_blank");
      }
    }
  }
  addToCart(product, buyNow) {
    if (product) {
      const params = {
        id: this.cartItem && this.selectedVariation && this.cartItem?.variation && this.selectedVariation?.id == this.cartItem?.variation?.id ? this.cartItem.id : null,
        product_id: product?.id,
        product: product ? product : null,
        variation: this.selectedVariation ? this.selectedVariation : null,
        variation_id: this.selectedVariation?.id ? this.selectedVariation?.id : null,
        quantity: this.productQty
      };
      this.store.dispatch(new AddToCartAction(params)).subscribe({
        complete: () => {
          this.modal.dismissAll();
          if (buyNow) {
            void this.router.navigate(["/checkout"]);
          }
        }
      });
    }
  }
  addToWishlist(product) {
    if (this.store.selectSnapshot((state) => state.auth && state.auth.access_token)) {
      product["is_wishlist"] = !product["is_wishlist"];
    }
    let action = product["is_wishlist"] && product["is_wishlist"] && !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token) ? new AddToWishlistAction({ product_id: product.id }) : new DeleteWishlistAction(product.id);
    if (action) {
      this.store.dispatch(action);
    }
  }
  addToCompare(product) {
    this.store.dispatch(new AddToCompareAction({ product }));
  }
  wholesalePriceCal() {
    let wholesale = this.product.wholesales.find((value) => value.min_qty <= this.productQty && value.max_qty >= this.productQty) || null;
    const product = this.product;
    if (wholesale && product.wholesale_price_type == "fixed") {
      this.totalPrice = this.productQty * wholesale.value;
    } else if (wholesale && product.wholesale_price_type == "percentage") {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : product.sale_price);
      this.totalPrice = this.totalPrice - this.totalPrice * (wholesale.value / 100);
    } else {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : product.sale_price);
    }
  }
  openModal(product) {
    const modal = this.modal.open(ProductSocialShare, {
      centered: true,
      windowClass: "theme-modal-2"
    });
    modal.componentInstance.product = product;
  }
  static {
    this.\u0275fac = function ProductContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductContent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductContent, selectors: [["app-product-content"]], inputs: { product: "product", option: [1, "option"], owlCar: [1, "owlCar"], product_variation: [1, "product_variation"], variant_hover: [1, "variant_hover"] }, outputs: { selectedVariant: "selectedVariant" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "selectVariation", "product", "attributes", "owlCar", "variant_hover"], [1, "product-buttons"], [3, "id", "class"], [1, "buy-box", "compare-box"], ["href", "javascript:void(0)"], [1, "left-progressbar"], [3, "startDate", "endDate", "title"], [3, "product"], [1, "theme-color"], [1, "qty-section"], [1, "qty-box"], [1, "input-group"], [1, "input-group-prepend"], [3, "click", "id", "iconClass", "spinner"], ["type", "text", "name", "quantity", 1, "form-control", "input-number", 3, "value"], [1, "product-buy-btn-group"], [3, "class", "id", "spinner", "type"], [3, "class", "id", "spinner", "disabled", "type"], [3, "click", "id", "disabled"], [3, "click", "id", "spinner", "type"], [1, "d-inline-block", "ring-animation"], [1, "ri-shopping-cart-line", "me-1"], [3, "id", "spinner", "disabled", "type"], [3, "click", "id"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-share-line"], ["role", "progressbar", 1, "progress", 3, "ngClass"], [1, "progress-bar"]], template: function ProductContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ProductContent_Conditional_0_Template, 9, 11);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.product.status ? 0 : -1);
      }
    }, dependencies: [
      NgbModule,
      VariantAttributes,
      TranslateModule,
      SaleTimer,
      ProductWholesales,
      Button,
      NgClass,
      CurrencySymbolPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductContent, [{
    type: Component,
    args: [{ selector: "app-product-content", imports: [
      NgbModule,
      CurrencySymbolPipe,
      VariantAttributes,
      TranslateModule,
      SaleTimer,
      ProductWholesales,
      Button,
      NgClass
    ], template: `@if(product.status){
<!-- Variants -->
<app-variant-attributes
  [product]="product"
  [attributes]="product.attributes || []"
  (selectVariation)="selectVariation($event!)"
  [owlCar]="owlCar()"
  [variant_hover]="variant_hover()"
/>

<!-- Wholesales Product -->
@if(product.wholesales.length && !product_variation()){
<app-product-wholesales [product]="product" />
<h4>
  {{ 'total_price' | translate }}:
  <span class="theme-color">{{ totalPrice | currencySymbol }}</span>
</h4>
}

<!-- Quantity -->
@if(!product.is_external){
<div class="product-buttons">
  <div>
    <div class="qty-section">
      <div class="qty-box">
        <div class="input-group">
          <span class="input-group-prepend">
            <app-button
              [id]="'quantity-left-minus'+product.id"
              [class]="'btn quantity-left-minus'"
              [iconClass]="'ri-arrow-left-s-line'"
              [spinner]="false"
              (click)="updateQuantity(-1)"
            />
          </span>

          <input
            type="text"
            name="quantity"
            class="form-control input-number"
            [value]="productQty"
          />

          <span class="input-group-prepend">
            <app-button
              [id]="'quantity-left-plus'+product.id"
              [class]="'btn quantity-left-plus'"
              [iconClass]="'ri-arrow-right-s-line'"
              [spinner]="false"
              (click)="updateQuantity(1)"
            />
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="product-buy-btn-group">
    @if(((selectedVariation && selectedVariation.status && selectedVariation.quantity >= productQty
    ) || (!selectedVariation && product.quantity >= productQty))){
    <app-button
      [class]="'btn btn-animation btn-solid hover-solid scroll-button buy-button'"
      [id]="'addcartbtnVariation'+product.id"
      [spinner]="true"
      [type]="'button'"
      (click)="addToCart(product)"
    >
      <div class="d-inline-block ring-animation">
        <i class="ri-shopping-cart-line me-1"></i>
      </div>
      {{ 'add_to_cart' | translate }}
    </app-button>
    }@else {
    <app-button
      [class]="'btn btn-animation btn-solid hover-solid scroll-button buy-button'"
      [id]="'soldoutbtnproductcontain'"
      [spinner]="false"
      [disabled]="true"
      [spinner]="false"
      [type]="'button'"
    >
      {{ ((selectedVariation && selectedVariation.status && selectedVariation.quantity < productQty)
      || (!selectedVariation && product.quantity < productQty) ? 'out_of_stock' : 'add_to_cart') |
      translate }}
    </app-button>
    }
    <app-button
      [class]="'btn btn-solid buy-button'"
      [id]="'buynowbtn'+product.id"
      [disabled]="((selectedVariation && selectedVariation.status && selectedVariation.quantity >= productQty) || (!selectedVariation && product.quantity >= productQty)) ? false : true"
      (click)="((selectedVariation && selectedVariation.status && selectedVariation.quantity >= productQty) || (!selectedVariation && product.quantity >= productQty)) && addToCart(product, true)"
    >
      {{ 'buy_now' | translate }}
    </app-button>
  </div>
</div>
}@else {
<app-button
  [id]="'externalBtn'+product.id"
  [class]="'btn btn-solid rounded-3'"
  (click)="externalProductLink(product.external_url)"
>
  {{ product.external_button_text ? product.external_button_text : 'buy_now' | translate }}
</app-button>
}

<div class="buy-box compare-box">
  @if(!product_variation()){
  <a href="javascript:void(0)" (click)="addToWishlist(product)">
    <i class="ri-heart-{{ product.is_wishlist ? 'fill' : 'line' }}"></i>
    <span>{{ 'add_to_wishlist' | translate }}</span>
  </a>
  }

@if(product.social_share && option()?.product?.social_share){
  <a href="javascript:void(0)" (click)="openModal(product)">
    <i class="ri-share-line"></i>
    <span>{{ 'share' | translate }}</span>
  </a>
  }
</div>

@if(product && product.quantity && product.quantity <= 10){
<div class="left-progressbar">
  <h6>
    {{ 'please_hurry_only' | translate }} {{ product.quantity }} {{ 'left_in_stock' | translate }}
  </h6>
  <div
    role="progressbar"
    class="progress"
    [ngClass]="{ 'danger-progress': product.quantity <= 2, 'warning-progress': product.quantity >= 3 && product.quantity <= 7 }"
  >
    <div class="progress-bar" [style.width]="(product.quantity * 100) / 10+'%'"></div>
  </div>
</div>
}

<!-- Sale -->
@if(product.sale_starts_at && product.sale_expired_at){
<app-sale-timer
  [startDate]="product.sale_starts_at"
  [endDate]="product.sale_expired_at"
  [title]="'sales_ends_in' | translate"
/>
} }
` }]
  }], () => [], { product: [{
    type: Input
  }], option: [{ type: Input, args: [{ isSignal: true, alias: "option", required: false }] }], owlCar: [{ type: Input, args: [{ isSignal: true, alias: "owlCar", required: false }] }], product_variation: [{ type: Input, args: [{ isSignal: true, alias: "product_variation", required: false }] }], variant_hover: [{ type: Input, args: [{ isSignal: true, alias: "variant_hover", required: false }] }], selectedVariant: [{ type: Output, args: ["selectedVariant"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductContent, { className: "ProductContent", filePath: "src/app/components/shop/product/product-details/widgets/product-content/product-content.ts", lineNumber: 46 });
})();

// src/app/components/shop/product/product-details/widgets/product-delivery-information/product-delivery-information.ts
function ProductDeliveryInformation_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275domElement(1, "i", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.estimated_delivery_text);
  }
}
function ProductDeliveryInformation_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275domElement(1, "i", 4);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.return_policy_text);
  }
}
function ProductDeliveryInformation_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "h4", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "ul", 2);
    \u0275\u0275conditionalCreate(5, ProductDeliveryInformation_Conditional_0_Conditional_5_Template, 3, 1, "li");
    \u0275\u0275conditionalCreate(6, ProductDeliveryInformation_Conditional_0_Conditional_6_Template, 3, 1, "li");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "delivery_details"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.estimated_delivery_text) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r0.product()) == null ? null : tmp_3_0.return_policy_text) ? 6 : -1);
  }
}
var ProductDeliveryInformation = class _ProductDeliveryInformation {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
  }
  static {
    this.\u0275fac = function ProductDeliveryInformation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDeliveryInformation)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDeliveryInformation, selectors: [["app-product-delivery-information"]], inputs: { product: [1, "product"] }, decls: 1, vars: 1, consts: [[1, "bordered-box"], [1, "sub-title"], [1, "product-offer"], [1, "ri-truck-line"], [1, "ri-arrow-left-right-line"]], template: function ProductDeliveryInformation_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ProductDeliveryInformation_Conditional_0_Template, 7, 5, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.estimated_delivery_text) || ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.return_policy_text) && ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.is_return) ? 0 : -1);
      }
    }, dependencies: [TranslateModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDeliveryInformation, [{
    type: Component,
    args: [{ selector: "app-product-delivery-information", imports: [TranslateModule], template: `@if(product()?.estimated_delivery_text || (product()?.return_policy_text && product()?.is_return)){
<div class="bordered-box">
  <h4 class="sub-title">{{ 'delivery_details' | translate }}</h4>
  <ul class="product-offer">
    @if(product()?.estimated_delivery_text){
    <li><i class="ri-truck-line"></i> {{ product()?.estimated_delivery_text }}</li>
    } @if(product()?.return_policy_text){
    <li><i class="ri-arrow-left-right-line"></i> {{ product()?.return_policy_text }}</li>
    }
  </ul>
</div>
}
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDeliveryInformation, { className: "ProductDeliveryInformation", filePath: "src/app/components/shop/product/product-details/widgets/product-delivery-information/product-delivery-information.ts", lineNumber: 13 });
})();

// src/app/shared/components/widgets/modal/delivery-return-modal/delivery-return-modal.ts
var DeliveryReturnModal = class _DeliveryReturnModal {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.policy = input(...ngDevMode ? [void 0, { debugName: "policy" }] : []);
  }
  static {
    this.\u0275fac = function DeliveryReturnModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeliveryReturnModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryReturnModal, selectors: [["app-delivery-return-modal"]], inputs: { policy: [1, "policy"] }, decls: 9, vars: 8, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [1, "modal-body", "policy-body"], [3, "innerHTML"]], template: function DeliveryReturnModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function DeliveryReturnModal_Template_app_button_click_4_listener() {
          return ctx.modal.close();
        });
        \u0275\u0275element(5, "i", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div")(7, "div", 4);
        \u0275\u0275element(8, "p", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "delivery_return"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "profile_modal_close_btn");
        \u0275\u0275advance(4);
        \u0275\u0275property("innerHTML", ctx.policy(), \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [TranslateModule, Button, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeliveryReturnModal, [{
    type: Component,
    args: [{ selector: "app-delivery-return-modal", imports: [TranslateModule, Button], template: `<div class="modal-header">
  <h3 class="fw-semibold">{{ 'delivery_return' | translate }}</h3>
  <app-button
    [class]="'btn btn-close'"
    [spinner]="false"
    [id]="'profile_modal_close_btn'"
    (click)="modal.close()"
  >
    <i class="ri-close-line"></i>
  </app-button>
</div>
<div>
  <div class="modal-body policy-body">
    <p [innerHTML]="policy()"></p>
  </div>
</div>
` }]
  }], null, { policy: [{ type: Input, args: [{ isSignal: true, alias: "policy", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryReturnModal, { className: "DeliveryReturnModal", filePath: "src/app/shared/components/widgets/modal/delivery-return-modal/delivery-return-modal.ts", lineNumber: 14 });
})();

// src/app/shared/components/widgets/modal/question-modal/question-modal.ts
var QuestionModal = class _QuestionModal {
  constructor() {
    this.store = inject(Store);
    this.modal = inject(NgbActiveModal);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.qna = input(...ngDevMode ? [void 0, { debugName: "qna" }] : []);
    this.question = new FormControl();
    this.type = "crate";
  }
  ngOnInit() {
    const qna = this.qna();
    if (qna) {
      this.type = "edit";
      this.id = qna.id;
      this.question.patchValue(qna.question);
    }
  }
  submit() {
    let data = {
      question: this.question.value,
      product_id: this.product()?.id,
      answer: ""
    };
    let action = new SendQuestionAction(data);
    if (data.question || data.product_id) {
      if (this.type == "edit" && this.id) {
        action = new UpdateQuestionAnswersAction(data, this.id);
      }
      this.store.dispatch(action).subscribe({
        complete: () => {
          this.modal.close();
        }
      });
    }
  }
  static {
    this.\u0275fac = function QuestionModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuestionModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionModal, selectors: [["app-question-modal"]], inputs: { product: [1, "product"], qna: [1, "qna"] }, decls: 31, vars: 35, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "id", "iconClass"], [1, "modal-body"], [1, "product-review-form"], [1, "product-wrapper"], [1, "product-image"], [1, "img-fluid", 3, "src", "alt"], [1, "product-content"], [1, "name"], [1, "product-review-rating"], [1, "product-rating"], [1, "price-number"], [1, "review-box", "form-box"], ["for", "content", 1, "form-label"], ["id", "content", "rows", "3", 1, "form-control", 3, "placeholder", "formControl"], [1, "modal-footer"], [3, "click", "type", "id", "spinner"], [3, "click", "id"]], template: function QuestionModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function QuestionModal_Template_app_button_click_4_listener() {
          return ctx.modal.close("Cross click");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "form", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275element(9, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "h5", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "h6", 12);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "currencySymbol");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(18, "div", 13)(19, "label", 14);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "textarea", 15);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 16)(25, "app-button", 17);
        \u0275\u0275listener("click", function QuestionModal_Template_app_button_click_25_listener() {
          return ctx.modal.dismiss("Cancel");
        });
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "app-button", 18);
        \u0275\u0275listener("click", function QuestionModal_Template_app_button_click_28_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 23, "ask_a_question"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("id", "profile_modal_close_btn")("iconClass", "ri-close-line");
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ((tmp_4_0 = ctx.product()) == null ? null : tmp_4_0.product_thumbnail) ? (tmp_4_0 = ctx.product()) == null ? null : tmp_4_0.product_thumbnail == null ? null : tmp_4_0.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", (tmp_5_0 = ctx.product()) == null ? null : tmp_5_0.name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_6_0 = ctx.product()) == null ? null : tmp_6_0.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 25, (tmp_7_0 = ctx.product()) == null ? null : tmp_7_0.sale_price));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 27, "your_questions"), " *");
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(23, 29, "your_questions")))("formControl", ctx.question);
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-outline");
        \u0275\u0275property("type", "button")("id", "cancel_profile_btn")("spinner", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 31, "cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "submit_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 33, "submit"), " ");
      }
    }, dependencies: [TranslateModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, ReactiveFormsModule, FormControlDirective, Button, TranslatePipe, CurrencySymbolPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionModal, [{
    type: Component,
    args: [{ selector: "app-question-modal", imports: [TranslateModule, FormsModule, ReactiveFormsModule, CurrencySymbolPipe, Button], template: `<div class="modal-header">
  <h3 class="fw-semibold">{{ 'ask_a_question' | translate }}</h3>
  <app-button
    [class]="'btn btn-close'"
    [id]="'profile_modal_close_btn'"
    (click)="modal.close('Cross click')"
    [iconClass]="'ri-close-line'"
  />
</div>

<div class="modal-body">
  <form class="product-review-form">
    <div class="product-wrapper">
      <div class="product-image">
        <img
          [src]="product()?.product_thumbnail ?
                product()?.product_thumbnail?.original_url :
                'assets/images/placeholder/product.png'"
          class="img-fluid"
          [alt]="product()?.name"
        />
      </div>
      <div class="product-content">
        <h5 class="name">{{ product()?.name }}</h5>
        <div class="product-review-rating">
          <div class="product-rating">
            <h6 class="price-number">{{ product()?.sale_price | currencySymbol }}</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="review-box form-box">
      <label class="form-label" for="content">{{ 'your_questions' | translate }} *</label>
      <textarea
        placeholder="{{ 'your_questions' | translate }}"
        class="form-control"
        id="content"
        rows="3"
        [formControl]="question"
      ></textarea>
    </div>
  </form>
  <div class="modal-footer">
    <app-button
      [class]="'btn btn-outline'"
      [type]="'button'"
      [id]="'cancel_profile_btn'"
      (click)="modal.dismiss('Cancel')"
      [spinner]="false"
    >
      {{ 'cancel' | translate }}
    </app-button>
    <app-button [class]="'btn btn-solid'" [id]="'submit_profile_btn'" (click)="submit()">
      {{ 'submit' | translate }}
    </app-button>
  </div>
</div>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], qna: [{ type: Input, args: [{ isSignal: true, alias: "qna", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionModal, { className: "QuestionModal", filePath: "src/app/shared/components/widgets/modal/question-modal/question-modal.ts", lineNumber: 23 });
})();

// src/app/components/shop/product/product-details/widgets/product-details/product-details.ts
var _c04 = (a0) => ["/product", a0];
function ProductDetails_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(4, 3, "selling_fast"), "! ", ctx_r0.viewsCount, " ", \u0275\u0275pipeBind1(5, 5, "people_in_this_cart"), ". ");
  }
}
function ProductDetails_Conditional_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r3 = ctx.fill;
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-star", fill_r3 === 100 ? "-fill" : "-line"));
    \u0275\u0275classProp("filled", fill_r3 === 100);
  }
}
function ProductDetails_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 10)(2, "ngb-rating", 11);
    \u0275\u0275twoWayListener("rateChange", function ProductDetails_Conditional_4_Template_ngb_rating_rateChange_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.product.rating_count, $event) || (ctx_r0.product.rating_count = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, ProductDetails_Conditional_4_ng_template_3_Template, 1, 5, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("rate", ctx_r0.product.rating_count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.product.reviews_count, " ", \u0275\u0275pipeBind1(8, 3, "review"));
  }
}
function ProductDetails_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : ctx_r0.product.price));
  }
}
function ProductDetails_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount, "% ", \u0275\u0275pipeBind1(2, 2, "off"));
  }
}
function ProductDetails_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.product.short_description);
  }
}
function ProductDetails_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275listener("click", function ProductDetails_Conditional_18_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal("sizeChart", ctx_r0.product.size_chart_image));
    });
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "size_chart"), " ");
  }
}
function ProductDetails_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275listener("click", function ProductDetails_Conditional_18_Conditional_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal("delivery", ctx_r0.policy));
    });
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span");
    \u0275\u0275elementStart(5, "a", 15);
    \u0275\u0275listener("click", function ProductDetails_Conditional_18_Conditional_3_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal("question", ctx_r0.product));
    });
    \u0275\u0275element(6, "i", 18);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "delivery_return"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 4, "ask_a_question"), " ");
  }
}
function ProductDetails_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, ProductDetails_Conditional_18_Conditional_1_Template, 4, 3, "a", 14);
    \u0275\u0275element(2, "span");
    \u0275\u0275conditionalCreate(3, ProductDetails_Conditional_18_Conditional_3_Template, 9, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.product.size_chart_image && ctx_r0.product.size_chart_image.original_url ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.policy && ctx_r0.product.is_return ? 3 : -1);
  }
}
var ProductDetails = class _ProductDetails {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.modal = inject(NgbModal);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.option = input(...ngDevMode ? [void 0, { debugName: "option" }] : []);
    this.viewsCount = 30;
    this.ordersCount = 10;
    this.countsInterval = null;
    this.themeOptions$.subscribe((option) => {
      this.policy = option?.product?.shipping_and_return;
    });
  }
  ngOnChanges(changes) {
    if (changes["product"] && changes["product"].currentValue) {
      this.selectedVariation = null;
      this.product = changes["product"].currentValue;
    }
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntervals();
    }
  }
  ngOnDestroy() {
    if (this.countsInterval) {
      clearInterval(this.countsInterval);
    }
  }
  setupIntervals() {
    this.countsInterval = setInterval(() => {
      let encourage_max_view_count = this.option()?.product?.encourage_max_view_count ?? 100;
      this.viewsCount = Math.floor(Math.random() * encourage_max_view_count) + 1;
    }, 5e4);
    this.countsInterval = setInterval(() => {
      let encourage_max_order_count = this.option()?.product?.encourage_max_order_count ?? 100;
      this.ordersCount = Math.floor(Math.random() * encourage_max_order_count) + 1;
    }, 6e4);
  }
  openModal(type, value) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (type == "sizeChart") {
      const sizeChart = this.modal.open(SizeChartModal, {
        size: "lg",
        centered: true,
        windowClass: "theme-modal-2"
      });
      sizeChart.componentInstance.image = value;
    } else if (type == "delivery") {
      const deliveryModal = this.modal.open(DeliveryReturnModal, {
        size: "lg",
        centered: true,
        windowClass: "theme-modal-2"
      });
      deliveryModal.componentInstance.policy = value;
    } else if (type == "question") {
      const questionModal = this.modal.open(QuestionModal, {
        centered: true,
        windowClass: "theme-modal-2"
      });
      questionModal.componentInstance.product = value;
    }
  }
  static {
    this.\u0275fac = function ProductDetails_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetails)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetails, selectors: [["app-product-details"]], inputs: { product: "product", selectedVariation: "selectedVariation", option: [1, "option"] }, features: [\u0275\u0275NgOnChangesFeature], decls: 19, vars: 19, consts: [[1, "trending-text"], [3, "routerLink"], [1, "main-title"], [1, "product-rating"], [1, "price-text"], [1, "text-dark", "fw-normal"], [1, "discounted-price"], [1, "description-text"], [1, "size-delivery-info"], ["src", "assets/images/trending.gif", "alt", "", 1, "img-fluid"], [1, "rating-list"], [3, "rateChange", "rate"], [1, "divider"], ["href", "javascript:void(0)"], ["href", "javascript:void(0)", 1, ""], ["href", "javascript:void(0)", 1, "", 3, "click"], [1, "ri-ruler-line"], [1, "ri-truck-line"], [1, "ri-questionnaire-line"]], template: function ProductDetails_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ProductDetails_Conditional_0_Template, 6, 7, "div", 0);
        \u0275\u0275elementStart(1, "a", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, ProductDetails_Conditional_4_Template, 9, 5, "div", 3);
        \u0275\u0275elementStart(5, "div", 4)(6, "h3")(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "currencySymbol");
        \u0275\u0275conditionalCreate(12, ProductDetails_Conditional_12_Template, 3, 3, "del");
        \u0275\u0275conditionalCreate(13, ProductDetails_Conditional_13_Template, 3, 4, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, ProductDetails_Conditional_17_Template, 2, 1, "p", 7);
        \u0275\u0275conditionalCreate(18, ProductDetails_Conditional_18_Template, 4, 2, "div", 8);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(((tmp_0_0 = ctx.option()) == null ? null : tmp_0_0.product == null ? null : tmp_0_0.product.encourage_view) && ctx.product.encourage_view ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c04, ctx.product.slug));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.selectedVariation ? ctx.selectedVariation.name : ctx.product.name);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.product.is_external ? 4 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 11, "mrp"), ":");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 15, "inclusive_text"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.short_description ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.size_chart_image || ctx.policy && ctx.product.is_return ? 18 : -1);
      }
    }, dependencies: [NgbModule, NgbRating, RouterModule, RouterLink, TranslateModule, CurrencySymbolPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetails, [{
    type: Component,
    args: [{ selector: "app-product-details", imports: [NgbModule, CurrencySymbolPipe, RouterModule, TranslateModule], template: `@if((option()?.product?.encourage_view && product.encourage_view)){
<div class="trending-text">
  <img src="assets/images/trending.gif" class="img-fluid" alt="" />
  <h5>
    {{ 'selling_fast' | translate }}! {{ viewsCount }} {{ 'people_in_this_cart' | translate }}.
  </h5>
</div>
}

<!-- Product name -->
<a [routerLink]="['/product', product.slug]">
  <h2 class="main-title">{{ selectedVariation ? selectedVariation.name : product.name }}</h2>
</a>

<!-- Review -->
@if(!product.is_external){
<div class="product-rating">
  <div class="rating-list">
    <ngb-rating [(rate)]="product.rating_count">
      <ng-template let-fill="fill" let-index="index">
        <i class="ri-star{{ fill === 100 ? '-fill' : '-line' }}" [class.filled]="fill === 100"></i>
      </ng-template>
    </ngb-rating>
  </div>
  <span class="divider">|</span>
  <a href="javascript:void(0)">{{ product.reviews_count }} {{ 'review' | translate }}</a>
</div>
}

<!-- Price -->
<div class="price-text">
  <h3>
    <span class="text-dark fw-normal">{{ 'mrp' | translate }}:</span> {{ (selectedVariation ?
    selectedVariation.sale_price : product.sale_price) | currencySymbol }} @if(selectedVariation ?
    selectedVariation.discount : product.discount){
    <del>{{ (selectedVariation ? selectedVariation.price : product.price) | currencySymbol }}</del>
    } @if(selectedVariation ? selectedVariation.discount : product.discount){
    <span class="discounted-price"
      >{{ (selectedVariation ? selectedVariation.discount : product.discount) }}% {{ 'off' |
      translate }}</span
    >
    }
  </h3>
  <span>{{ 'inclusive_text' | translate }} </span>
</div>

<!-- Description -->
@if(product.short_description){
<p class="description-text">{{ product.short_description }}</p>
}

<!-- Action -->
@if((product.size_chart_image || policy && product.is_return)){
<div class="size-delivery-info">
  @if(product.size_chart_image && product.size_chart_image.original_url){
  <a href="javascript:void(0)" class="" (click)="openModal('sizeChart',product.size_chart_image)">
    <i class="ri-ruler-line"></i> {{ 'size_chart' | translate }}
  </a>
  }
  <span></span>

  @if(policy && product.is_return){
  <a href="javascript:void(0)" class="" (click)="openModal('delivery',policy)">
    <i class="ri-truck-line"></i> {{ 'delivery_return' | translate }}
  </a>

  <span></span>

  <a href="javascript:void(0)" class="" (click)="openModal('question',product)">
    <i class="ri-questionnaire-line"></i>{{ 'ask_a_question' | translate }}
  </a>
  }
</div>
}
` }]
  }], () => [], { product: [{
    type: Input
  }], selectedVariation: [{
    type: Input
  }], option: [{ type: Input, args: [{ isSignal: true, alias: "option", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetails, { className: "ProductDetails", filePath: "src/app/components/shop/product/product-details/widgets/product-details/product-details.ts", lineNumber: 25 });
})();

// src/app/shared/components/widgets/modal/product-details-modal/product-details-modal.ts
var _c05 = ["thumbnailCarousel"];
var _c13 = (a0) => ({ "active": a0 });
var _forTrack03 = ($index, $item) => $item.id;
function ProductDetailsModal_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sale"));
  }
}
function ProductDetailsModal_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "trending"));
  }
}
function ProductDetailsModal_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "featured"));
  }
}
function ProductDetailsModal_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 13);
    \u0275\u0275conditionalCreate(1, ProductDetailsModal_Conditional_12_Conditional_1_Template, 3, 3, "li", 21);
    \u0275\u0275conditionalCreate(2, ProductDetailsModal_Conditional_12_Conditional_2_Template, 3, 3, "li", 22);
    \u0275\u0275conditionalCreate(3, ProductDetailsModal_Conditional_12_Conditional_3_Template, 3, 3, "li", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.is_sale_enable ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.is_trending ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.is_featured ? 3 : -1);
  }
}
function ProductDetailsModal_Conditional_15_For_1_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "video", 26);
    \u0275\u0275element(2, "source", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r3 ? image_r3.original_url : "")("type", image_r3.mime_type);
  }
}
function ProductDetailsModal_Conditional_15_For_1_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "audio", 28);
    \u0275\u0275element(2, "source", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r3 ? image_r3.original_url : "")("type", image_r3.mime_type);
  }
}
function ProductDetailsModal_Conditional_15_For_1_ng_template_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "lib-ngx-image-zoom", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("zoomMode", "click")("thumbImage", image_r3.original_url)("fullImage", image_r3.original_url)("magnification", 2)("enableScrollZoom", true)("enableLens", true)("lensWidth", 300)("lensHeight", 300);
  }
}
function ProductDetailsModal_Conditional_15_For_1_ng_template_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductDetailsModal_Conditional_15_For_1_ng_template_0_Conditional_2_Conditional_0_Template, 2, 8, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.isBrowser ? 0 : -1);
  }
}
function ProductDetailsModal_Conditional_15_For_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductDetailsModal_Conditional_15_For_1_ng_template_0_Conditional_0_Template, 3, 2, "div", 25)(1, ProductDetailsModal_Conditional_15_For_1_ng_template_0_Conditional_1_Template, 3, 2, "div", 25)(2, ProductDetailsModal_Conditional_15_For_1_ng_template_0_Conditional_2_Template, 1, 1);
  }
  if (rf & 2) {
    const image_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.videType.includes(image_r3.mime_type) ? 0 : ctx_r1.audioType.includes(image_r3.mime_type) ? 1 : 2);
  }
}
function ProductDetailsModal_Conditional_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailsModal_Conditional_15_For_1_ng_template_0_Template, 3, 1, "ng-template", 24);
  }
  if (rf & 2) {
    const image_r3 = ctx.$implicit;
    \u0275\u0275property("id", image_r3.id.toString());
  }
}
function ProductDetailsModal_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductDetailsModal_Conditional_15_For_1_Template, 1, 1, null, 24, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.product.product_galleries);
  }
}
function ProductDetailsModal_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.product.product_thumbnail ? ctx_r1.product.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
function ProductDetailsModal_Conditional_17_For_5_ng_template_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "i", 33);
    \u0275\u0275elementStart(1, "video", 34);
    \u0275\u0275listener("click", function ProductDetailsModal_Conditional_17_For_5_ng_template_0_Conditional_2_Template_video_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const image_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      const owlCar_r6 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r6.to(ctx_r1.activeSlide = image_r5.id.toString()));
    });
    \u0275\u0275element(2, "source", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r5 ? image_r5.original_url : "")("type", image_r5.mime_type);
  }
}
function ProductDetailsModal_Conditional_17_For_5_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ProductDetailsModal_Conditional_17_For_5_ng_template_0_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const image_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      const owlCar_r6 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r6.to(ctx_r1.activeSlide = image_r5.id.toString()));
    });
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailsModal_Conditional_17_For_5_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 37);
    \u0275\u0275listener("click", function ProductDetailsModal_Conditional_17_For_5_ng_template_0_Conditional_4_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const image_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      const owlCar_r6 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r6.to(ctx_r1.activeSlide = image_r5.id.toString()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", image_r5 ? image_r5.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
function ProductDetailsModal_Conditional_17_For_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 32);
    \u0275\u0275conditionalCreate(2, ProductDetailsModal_Conditional_17_For_5_ng_template_0_Conditional_2_Template, 3, 2)(3, ProductDetailsModal_Conditional_17_For_5_ng_template_0_Conditional_3_Template, 2, 0, "button")(4, ProductDetailsModal_Conditional_17_For_5_ng_template_0_Conditional_4_Template, 1, 2, "img", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c13, ctx_r1.activeSlide && image_r5.id.toString() === ctx_r1.activeSlide.toString()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.videType.includes(image_r5.mime_type) ? 2 : ctx_r1.audioType.includes(image_r5.mime_type) ? 3 : 4);
  }
}
function ProductDetailsModal_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailsModal_Conditional_17_For_5_ng_template_0_Template, 5, 4, "ng-template", 24);
  }
  if (rf & 2) {
    const image_r5 = ctx.$implicit;
    \u0275\u0275property("id", image_r5.id.toString());
  }
}
function ProductDetailsModal_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 30)(2, "owl-carousel-o", 31, 1);
    \u0275\u0275repeaterCreate(4, ProductDetailsModal_Conditional_17_For_5_Template, 1, 1, null, 24, _forTrack03);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.productThumbSlider);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.product.product_galleries);
  }
}
var ProductDetailsModal = class _ProductDetailsModal {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.store = inject(Store);
    this.platformId = inject(PLATFORM_ID);
    this.thumbnailCarousel = viewChild("thumbnailCarousel", ...ngDevMode ? [{ debugName: "thumbnailCarousel" }] : []);
    this.cartItem$ = inject(Store).select(CartState.cartItems);
    this.modalOpen = false;
    this.videType = ["video/mp4", "video/webm", "video/ogg"];
    this.audioType = ["audio/mpeg", "audio/wav", "audio/ogg"];
    this.videoType = ["mp4", "mov", "avi"];
    this.audio = ["mpeg", "wav", "ogg", "mp3"];
    this.productQty = 1;
    this.totalPrice = 0;
    this.activeSlide = "0";
    this.productMainThumbSlider = productMainThumbSlider;
    this.productThumbSlider = productThumbSlider;
  }
  ngOnInit() {
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => item.product.id == this.product?.id);
    });
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  selectedVariant(variant) {
    this.selectedVariation = variant;
  }
  onSlideChange(event) {
    const thumbnailCarousel = this.thumbnailCarousel();
    if (thumbnailCarousel && event && event.slides && event.slides.length > 0) {
      this.activeSlide = event.slides[0].id;
      if (this.activeSlide) {
        thumbnailCarousel.to(this.activeSlide);
      }
    }
  }
  updateQuantity(qty) {
    if (1 > this.productQty + qty)
      return;
    this.productQty = this.productQty + qty;
    this.wholesalePriceCal();
  }
  wholesalePriceCal() {
    let wholesale = this.product?.wholesales.find((value) => value.min_qty <= this.productQty && value.max_qty >= this.productQty) || null;
    const product = this.product;
    if (wholesale && product.wholesale_price_type == "fixed") {
      this.totalPrice = this.productQty * wholesale.value;
    } else if (wholesale && product.wholesale_price_type == "percentage") {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : product.sale_price);
      this.totalPrice = this.totalPrice - this.totalPrice * (wholesale.value / 100);
    } else {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : product.sale_price);
    }
  }
  addToCart(product) {
    if (product) {
      const params = {
        id: this.cartItem && this.selectedVariation && this.cartItem?.variation && this.selectedVariation?.id == this.cartItem?.variation?.id ? this.cartItem.id : null,
        product_id: product?.id,
        product: product ? product : null,
        variation: this.selectedVariation ? this.selectedVariation : null,
        variation_id: this.selectedVariation?.id ? this.selectedVariation?.id : null,
        quantity: this.productQty
      };
      this.store.dispatch(new AddToCartAction(params)).subscribe({
        complete: () => {
          this.modal.close();
        }
      });
    }
  }
  getImageContent(imageUrl) {
    if (this.videoType.includes(imageUrl.substring(imageUrl.lastIndexOf(".") + 1))) {
      return `<i class="ri-video-line"></i>`;
    } else if (this.audio.includes(imageUrl.substring(imageUrl.lastIndexOf(".") + 1))) {
      return `<i class="ri-headphone-line"></i>`;
    } else {
      return `<img src="${imageUrl}" class="img-fluid">`;
    }
  }
  externalProductLink(link) {
    if (this.isBrowser) {
      if (link) {
        window.open(link, "_blank");
      }
    }
  }
  static {
    this.\u0275fac = function ProductDetailsModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetailsModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailsModal, selectors: [["app-product-details-modal"]], viewQuery: function ProductDetailsModal_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.thumbnailCarousel, _c05, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { product: "product" }, decls: 23, vars: 16, consts: [["owlCar", ""], ["thumbnailCarousel", ""], [1, "modal-content"], [1, "modal-header", "p-0"], [3, "click", "type", "id", "spinner"], [1, "ri-close-line"], [1, "modal-body"], [1, "row", "g-sm-4", "g-3"], [1, "col-lg-6"], [1, "sticky-top-custom"], [1, "thumbnail-image-slider"], [1, "col-12"], [1, "product-slick", "position-relative"], [1, "product-detail-label"], ["id", "thumbnailCarousel", 3, "changed", "options"], [1, "img-fluid", 3, "src", "alt"], [1, "col-lg-6", "rtl-text"], [1, "right-sidebar-modal", "product-page-details"], [3, "product", "selectedVariation"], [3, "selectedVariant", "product", "owlCar", "variant_hover"], [3, "product"], [1, "soldout"], [1, "trending"], [1, "featured"], ["carouselSlide", "", 3, "id"], [1, "slider-main-img"], ["controls", "", 1, "w-100"], [3, "src", "type"], ["controls", ""], [3, "zoomMode", "thumbImage", "fullImage", "magnification", "enableScrollZoom", "enableLens", "lensWidth", "lensHeight"], [1, "slider-nav"], [3, "options"], [1, "slider-image", 3, "ngClass"], [1, "ri-video-line"], ["width", "130", "height", "130", 3, "click"], [3, "click"], [1, "ri-music-2-line"], [1, "img-fluid", 3, "click", "src", "alt"]], template: function ProductDetailsModal_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "app-button", 4);
        \u0275\u0275listener("click", function ProductDetailsModal_Template_app_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.modal.close("Cross click"));
        });
        \u0275\u0275element(3, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "div", 7)(10, "div", 11)(11, "div", 12);
        \u0275\u0275conditionalCreate(12, ProductDetailsModal_Conditional_12_Template, 4, 3, "ul", 13);
        \u0275\u0275elementStart(13, "owl-carousel-o", 14, 0);
        \u0275\u0275listener("changed", function ProductDetailsModal_Template_owl_carousel_o_changed_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSlideChange($event));
        });
        \u0275\u0275conditionalCreate(15, ProductDetailsModal_Conditional_15_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(16, ProductDetailsModal_Conditional_16_Template, 1, 2, "img", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, ProductDetailsModal_Conditional_17_Template, 6, 1, "div", 11);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 16)(19, "div", 17);
        \u0275\u0275element(20, "app-product-details", 18);
        \u0275\u0275elementStart(21, "app-product-content", 19);
        \u0275\u0275listener("selectedVariant", function ProductDetailsModal_Template_app_product_content_selectedVariant_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectedVariant($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "app-product-delivery-information", 20);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const owlCar_r6 = \u0275\u0275reference(14);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("type", "button")("id", "product_detail_close_modal_btn")("spinner", false);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.product.is_sale_enable || ctx.product.is_trending || ctx.product.is_featured ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("options", ctx.productMainThumbSlider);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!(ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product && (ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length) ? 17 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("product", ctx.product)("selectedVariation", ctx.selectedVariation ? ctx.selectedVariation : ctx.product);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("owlCar", owlCar_r6)("variant_hover", false);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product);
      }
    }, dependencies: [
      CarouselModule,
      CarouselComponent,
      CarouselSlideDirective,
      TranslateModule,
      NgxImageZoomModule,
      NgxImageZoomComponent,
      NgbModule,
      Button,
      ProductDetails,
      ProductContent,
      ProductDeliveryInformation,
      NgClass,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailsModal, [{
    type: Component,
    args: [{ selector: "app-product-details-modal", imports: [
      CarouselModule,
      TranslateModule,
      NgxImageZoomModule,
      NgbModule,
      Button,
      ProductDetails,
      ProductContent,
      ProductDeliveryInformation,
      NgClass
    ], template: `<div class="modal-content">
  <div class="modal-header p-0">
    <app-button
      [type]="'button'"
      [class]="'btn btn-close'"
      [id]="'product_detail_close_modal_btn'"
      [spinner]="false"
      (click)="modal.close('Cross click')"
    >
      <i class="ri-close-line"></i>
    </app-button>
  </div>
  <div class="modal-body">
    <div class="row g-sm-4 g-3">
      <div class="col-lg-6">
        <div class="sticky-top-custom">
          <div class="thumbnail-image-slider">
            <div class="row g-sm-4 g-3">
              <div class="col-12">
                <div class="product-slick position-relative">
                  @if(product.is_sale_enable || product.is_trending ||
                  product.is_featured){
                  <ul class="product-detail-label">
                    @if(product.is_sale_enable){
                    <li class="soldout">{{ 'sale' | translate }}</li>
                    } @if(product.is_trending){
                    <li class="trending">{{ 'trending' | translate }}</li>
                    } @if(product.is_featured){
                    <li class="featured">{{ 'featured' | translate }}</li>
                    }
                  </ul>
                  }
                  <owl-carousel-o
                    [options]="productMainThumbSlider"
                    #owlCar
                    id="thumbnailCarousel"
                    (changed)="onSlideChange($event)"
                  >
                    @if(product.product_galleries?.length){ @for(image of
                    product.product_galleries; track image.id; let i = $index){
                    <ng-template carouselSlide [id]="image.id.toString()">
                      @if(videType.includes(image.mime_type)){
                      <div class="slider-main-img">
                        <video class="w-100" controls>
                          <source
                            [src]="image ? image.original_url : ''"
                            [type]="image.mime_type"
                          />
                        </video>
                      </div>
                      }@else if(audioType.includes(image.mime_type)){
                      <div class="slider-main-img">
                        <audio controls>
                          <source
                            [src]="image ? image.original_url : ''"
                            [type]="image.mime_type"
                          />
                        </audio>
                      </div>
                      }@else { @if(isBrowser){
                      <div>
                        <lib-ngx-image-zoom
                          [zoomMode]="'click'"
                          [thumbImage]="image.original_url"
                          [fullImage]="image.original_url"
                          [magnification]="2"
                          [enableScrollZoom]="true"
                          [enableLens]="true"
                          [lensWidth]="300"
                          [lensHeight]="300"
                        />
                      </div>
                      } }
                    </ng-template>
                    } }
                  </owl-carousel-o>
                  @if(!product.product_galleries?.length){
                  <img
                    [src]="product.product_thumbnail ?
                                          product.product_thumbnail.original_url :
                                          'assets/images/placeholder/product.png'"
                    class="img-fluid"
                    [alt]="product.name"
                  />
                  }
                </div>
              </div>
              @if(product && product.product_galleries?.length){
              <div class="col-12">
                <div class="slider-nav">
                  <owl-carousel-o [options]="productThumbSlider" #thumbnailCarousel>
                    @for(image of product.product_galleries; track image.id){
                    <ng-template carouselSlide [id]="image.id.toString()">
                      <div>
                        <div
                          class="slider-image"
                          [ngClass]="{'active' : activeSlide && (image.id.toString() === activeSlide.toString())}"
                        >
                          @if(videType.includes(image.mime_type)){
                          <i class="ri-video-line"></i>

                          <video
                            width="130"
                            height="130"
                            (click)="owlCar.to(activeSlide = image.id.toString())"
                          >
                            <source
                              [src]="image ? image.original_url : ''"
                              [type]="image.mime_type"
                            />
                          </video>
                          }@else if(audioType.includes(image.mime_type)){
                          <button (click)="owlCar.to(activeSlide = image.id.toString())">
                            <i class="ri-music-2-line"></i>
                          </button>
                          }@else {
                          <img
                            [src]="image ? image.original_url : 'assets/images/placeholder/product.png'"
                            class="img-fluid"
                            [alt]="product.name"
                            (click)="owlCar.to(activeSlide = image.id.toString())"
                          />
                          }
                        </div>
                      </div>
                    </ng-template>
                    }
                  </owl-carousel-o>
                </div>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 rtl-text">
        <div class="right-sidebar-modal product-page-details">
          <app-product-details
            [product]="product"
            [selectedVariation]="selectedVariation ? selectedVariation : product"
          />
          <app-product-content
            [product]="product"
            (selectedVariant)="selectedVariant($event)"
            [owlCar]="owlCar"
            [variant_hover]="false"
          />
          <app-product-delivery-information [product]="product" />
        </div>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, { product: [{
    type: Input
  }], thumbnailCarousel: [{ type: ViewChild, args: ["thumbnailCarousel", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailsModal, { className: "ProductDetailsModal", filePath: "src/app/shared/components/widgets/modal/product-details-modal/product-details-modal.ts", lineNumber: 37 });
})();

// src/app/shared/components/widgets/product-box/widgets/cart-button/cart-button.ts
var _c06 = ["productDetailModal"];
function CartButton_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 4);
    \u0275\u0275listener("click", function CartButton_Conditional_0_Conditional_0_Conditional_0_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addToCart(ctx_r1.product(), 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("add-button add_cart");
    \u0275\u0275property("id", "add-to-cart" + ((tmp_4_0 = ctx_r1.product()) == null ? null : tmp_4_0.id))("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, ctx_r1.text()), "\n");
  }
}
function CartButton_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-button", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("add-button add_cart");
    \u0275\u0275property("id", "add-to-cart" + ((tmp_4_0 = ctx_r1.product()) == null ? null : tmp_4_0.id))("spinner", false)("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, "out_of_stock"), "\n");
  }
}
function CartButton_Conditional_0_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function CartButton_Conditional_0_Conditional_0_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function CartButton_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "app-button", 4);
    \u0275\u0275listener("click", function CartButton_Conditional_0_Conditional_0_Conditional_2_Template_app_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(ctx_r1.product(), -1));
    });
    \u0275\u0275conditionalCreate(3, CartButton_Conditional_0_Conditional_0_Conditional_2_Conditional_3_Template, 1, 0, "i", 8);
    \u0275\u0275conditionalCreate(4, CartButton_Conditional_0_Conditional_0_Conditional_2_Conditional_4_Template, 1, 0, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 10);
    \u0275\u0275elementStart(6, "app-button", 11);
    \u0275\u0275listener("click", function CartButton_Conditional_0_Conditional_0_Conditional_2_Template_app_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(ctx_r1.product(), 1));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("open", ctx_r1.cartItem && ctx_r1.cartItem.quantity > 0);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn quantity-left-minus");
    \u0275\u0275property("id", "quantity-left-minus" + ((tmp_5_0 = ctx_r1.product()) == null ? null : tmp_5_0.id))("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cartItem.quantity > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cartItem.quantity <= 1 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275interpolate(ctx_r1.cartItem && ctx_r1.cartItem.quantity ? ctx_r1.cartItem.quantity : ctx_r1.cartItem));
    \u0275\u0275advance();
    \u0275\u0275classMap("btn quantity-right-plus");
    \u0275\u0275property("id", "quantity-left-plus" + ((tmp_11_0 = ctx_r1.product()) == null ? null : tmp_11_0.id))("iconClass", "ri-add-fill")("spinner", false);
  }
}
function CartButton_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CartButton_Conditional_0_Conditional_0_Conditional_0_Template, 3, 7, "app-button", 1)(1, CartButton_Conditional_0_Conditional_0_Conditional_1_Template, 3, 8, "app-button", 2);
    \u0275\u0275conditionalCreate(2, CartButton_Conditional_0_Conditional_0_Conditional_2_Template, 7, 15, "div", 3);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.stock_status) === "in_stock" ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.cartItem && ctx_r1.cartItem.quantity > 0 ? 2 : -1);
  }
}
function CartButton_Conditional_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 14);
    \u0275\u0275listener("click", function CartButton_Conditional_0_Conditional_1_Conditional_0_Template_app_button_click_0_listener() {
      let tmp_4_0;
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.enableModal() ? ((tmp_4_0 = ctx_r1.product()) == null ? null : tmp_4_0.type) === "classified" ? ctx_r1.openModal(ctx_r1.product()) : ctx_r1.addToCart(ctx_r1.product(), 1) : ctx_r1.addToCart(ctx_r1.product(), 1));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap((ctx_r1.class() || "") + " " + (ctx_r1.cartItem && ctx_r1.cartItem.quantity > 0 ? "active" : ""));
    \u0275\u0275property("id", "add-to-cart" + ((tmp_4_0 = ctx_r1.product()) == null ? null : tmp_4_0.id))("spinner", false)("iconClass", ctx_r1.iconClass() ? ctx_r1.iconClass() : "ri-shopping-cart-line");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, !(ctx_r1.cartItem && ctx_r1.cartItem.quantity > 0) ? ctx_r1.text() ?? "" : "Added"));
  }
}
function CartButton_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-button", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.class() || "");
    \u0275\u0275property("id", "out-of-stock" + ctx_r1.product().id)("iconClass", ctx_r1.iconClass() ? ctx_r1.iconClass() : "ri-shopping-cart-line")("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, ctx_r1.text() ? "out_of_stock" : ""), "\n");
  }
}
function CartButton_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CartButton_Conditional_0_Conditional_1_Conditional_0_Template, 4, 8, "app-button", 12)(1, CartButton_Conditional_0_Conditional_1_Conditional_1_Template, 3, 8, "app-button", 13);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.stock_status) === "in_stock" ? 0 : 1);
  }
}
function CartButton_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CartButton_Conditional_0_Conditional_0_Template, 3, 2)(1, CartButton_Conditional_0_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.quantity() ? 0 : 1);
  }
}
function CartButton_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 11);
    \u0275\u0275listener("click", function CartButton_Conditional_1_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.externalProductLink(ctx_r1.product().external_url));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r1.class() ? ctx_r1.class() + " " : "") + "btn btn-add-cart addcart-button");
    \u0275\u0275property("id", "add-to-cart" + ((tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.id))("iconClass", "ri-add-line")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, ctx_r1.product().external_button_text ? ctx_r1.product().external_button_text : "buy_now"), "\n");
  }
}
var CartButton = class _CartButton {
  constructor() {
    this.store = inject(Store);
    this.modal = inject(NgbModal);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.text = input(...ngDevMode ? [void 0, { debugName: "text" }] : []);
    this.class = input(...ngDevMode ? [void 0, { debugName: "class" }] : []);
    this.iconClass = input("", ...ngDevMode ? [{ debugName: "iconClass" }] : []);
    this.selectedVariation = input(...ngDevMode ? [void 0, { debugName: "selectedVariation" }] : []);
    this.enableModal = input(false, ...ngDevMode ? [{ debugName: "enableModal" }] : []);
    this.quantity = input(false, ...ngDevMode ? [{ debugName: "quantity" }] : []);
    this.cartItem$ = inject(Store).select(CartState.cartItems);
    this.productDetailModal = viewChild("productDetailModal", ...ngDevMode ? [{ debugName: "productDetailModal" }] : []);
    const platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => item.product.id == this.product()?.id);
    });
  }
  addToCart(product, qty) {
    if (product) {
      const selectedVariation = this.selectedVariation();
      const selectedVariationValue = this.selectedVariation();
      const selectedVariationVal = this.selectedVariation();
      const params = {
        id: this.cartItem && selectedVariation && this.cartItem?.variation && selectedVariation?.id == this.cartItem?.variation?.id ? this.cartItem.id : null,
        product_id: product?.id,
        product: product ? product : null,
        variation: selectedVariationValue ? selectedVariationValue : null,
        variation_id: selectedVariationVal?.id ? selectedVariationVal?.id : null,
        quantity: qty
      };
      this.store.dispatch(new AddToCartAction(params));
    }
  }
  updateQuantity(product, qty) {
    const params = {
      id: this.cartItem ? this.cartItem.id : null,
      product,
      product_id: product?.id,
      variation_id: this.cartItem ? this.cartItem?.variation_id : null,
      variation: this.cartItem ? this.cartItem?.variation : null,
      quantity: qty
    };
    this.store.dispatch(new UpdateCartAction(params));
  }
  externalProductLink(link) {
    if (this.isBrowser) {
      if (link) {
        window.open(link, "_blank");
      }
    }
  }
  openModal(product) {
    const modal = this.modal.open(ProductDetailsModal, {
      centered: true,
      size: "lg",
      windowClass: "theme-modal-2 cart-view-modal"
    });
    modal.componentInstance.product = product;
  }
  static {
    this.\u0275fac = function CartButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartButton)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartButton, selectors: [["app-cart-button"]], viewQuery: function CartButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.productDetailModal, _c06, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { product: [1, "product"], text: [1, "text"], class: [1, "class"], iconClass: [1, "iconClass"], selectedVariation: [1, "selectedVariation"], enableModal: [1, "enableModal"], quantity: [1, "quantity"] }, decls: 2, vars: 1, consts: [[3, "id", "class", "iconClass", "spinner"], [3, "id", "class", "spinner"], [3, "id", "class", "spinner", "disabled"], [1, "qty-box", 3, "open"], [3, "click", "id", "spinner"], [3, "id", "spinner", "disabled"], [1, "qty-box"], [1, "input-group"], [1, "ri-subtract-line"], [1, "ri-delete-bin-line"], ["type", "text", "name", "quantity", 1, "form-control", "input-number", "qty-input", 3, "value"], [3, "click", "id", "iconClass", "spinner"], [3, "id", "spinner", "class", "iconClass"], [3, "id", "iconClass", "class", "disabled"], [3, "click", "id", "spinner", "iconClass"], [3, "id", "iconClass", "disabled"]], template: function CartButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CartButton_Conditional_0_Template, 2, 1)(1, CartButton_Conditional_1_Template, 3, 8, "app-button", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(ctx.product() && !((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.is_external) ? 0 : 1);
      }
    }, dependencies: [Button, TranslateModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartButton, [{
    type: Component,
    args: [{ selector: "app-cart-button", imports: [Button, TranslateModule], template: `@if(product() && !product()?.is_external){ @if (quantity()) { @if(product()?.stock_status ===
'in_stock'){
<app-button [id]="'add-to-cart'+product()?.id" [class]="'add-button add_cart'" [spinner]="false"
  (click)="addToCart(product()!, 1)">
  {{ text()! | translate }}
</app-button>
}@else {
<app-button [id]="'add-to-cart'+product()?.id" [class]="'add-button add_cart'" [spinner]="false" [disabled]="true">
  {{ 'out_of_stock' | translate }}
</app-button>
} @if(cartItem && cartItem.quantity > 0){
<div class="qty-box" [class.open]="cartItem && cartItem.quantity > 0">
  <div class="input-group">
    <app-button [id]="'quantity-left-minus'+product()?.id" [class]="'btn quantity-left-minus'" [spinner]="false"
      (click)="updateQuantity(product()!, -1)">
      @if(cartItem.quantity > 1){
      <i class="ri-subtract-line"></i>
      } @if(cartItem.quantity <= 1){ <i class="ri-delete-bin-line"></i>
        }
    </app-button>

    <input type="text" name="quantity" class="form-control input-number qty-input"
      value="{{cartItem && cartItem.quantity ? cartItem.quantity : cartItem}}" />

    <app-button [id]="'quantity-left-plus'+product()?.id" [class]="'btn quantity-right-plus'"
      [iconClass]="'ri-add-fill'" [spinner]="false" (click)="updateQuantity(product()!, 1)" />
  </div>
</div>
} }@else { @if(product()?.stock_status === 'in_stock'){
<app-button [id]="'add-to-cart'+product()?.id" [spinner]="false"
  [class]="(class() || '') + ' ' +(cartItem && cartItem.quantity > 0 ? 'active' : '')"
  [iconClass]="iconClass() ? iconClass() : 'ri-shopping-cart-line'"
  (click)="enableModal() ? product()?.type === 'classified' ? openModal(product()!) : addToCart(product()!, 1) : addToCart(product()!, 1)">
  <span> {{ (!(cartItem && cartItem.quantity > 0) ? text() ?? '' : 'Added') | translate }}</span>
</app-button>
} @else {
<app-button [id]="'out-of-stock'+product()!.id" [iconClass]="iconClass() ? iconClass() : 'ri-shopping-cart-line'"
  [class]="class() || ''" [disabled]="true">
  {{ (text() ? 'out_of_stock' : '') | translate }}
</app-button>
} } } @else {
<app-button [id]="'add-to-cart'+product()?.id"
  [class]="(class() ? class() + ' ' : '') + 'btn btn-add-cart addcart-button'" [iconClass]="'ri-add-line'"
  [spinner]="false" (click)="externalProductLink(product()!.external_url)">
  {{ (product()!.external_button_text ? product()!.external_button_text : 'buy_now') | translate }}
</app-button>
}` }]
  }], () => [], { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: false }] }], class: [{ type: Input, args: [{ isSignal: true, alias: "class", required: false }] }], iconClass: [{ type: Input, args: [{ isSignal: true, alias: "iconClass", required: false }] }], selectedVariation: [{ type: Input, args: [{ isSignal: true, alias: "selectedVariation", required: false }] }], enableModal: [{ type: Input, args: [{ isSignal: true, alias: "enableModal", required: false }] }], quantity: [{ type: Input, args: [{ isSignal: true, alias: "quantity", required: false }] }], productDetailModal: [{ type: ViewChild, args: ["productDetailModal", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartButton, { className: "CartButton", filePath: "src/app/shared/components/widgets/product-box/widgets/cart-button/cart-button.ts", lineNumber: 22 });
})();

// src/app/shared/components/widgets/product-box/widgets/image-variant/image-variant.ts
var _c07 = (a0) => ["/product", a0];
var _forTrack04 = ($index, $item) => $item.id;
function ProductBoxImageVariant_Conditional_0_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
  if (rf & 2) {
    let tmp_13_0;
    const image_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.thumbnail ? ctx_r1.thumbnail.original_url : (image_r3 == null ? null : image_r3.original_url) ? image_r3 == null ? null : image_r3.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", (tmp_13_0 = ctx_r1.product()) == null ? null : tmp_13_0.name);
  }
}
function ProductBoxImageVariant_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductBoxImageVariant_Conditional_0_For_2_ng_template_0_Template, 1, 2, "ng-template", 5);
  }
}
function ProductBoxImageVariant_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "owl-carousel-o", 4);
    \u0275\u0275listener("mouseenter", function ProductBoxImageVariant_Conditional_0_Template_owl_carousel_o_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startAutoplay());
    })("mouseleave", function ProductBoxImageVariant_Conditional_0_Template_owl_carousel_o_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopAutoplay());
    });
    \u0275\u0275repeaterCreate(1, ProductBoxImageVariant_Conditional_0_For_2_Template, 1, 0, null, 5, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r1.customOptions);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.product_galleries);
  }
}
function ProductBoxImageVariant_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 3);
    \u0275\u0275element(2, "img", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_15_0;
    const image_r4 = ctx.$implicit;
    const \u0275$index_12_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275$index_12_r5 === 0 ? "front" : "back");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c07, (tmp_13_0 = ctx_r1.product()) == null ? null : tmp_13_0.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r4 ? image_r4 == null ? null : image_r4.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", (tmp_15_0 = ctx_r1.product()) == null ? null : tmp_15_0.name);
  }
}
function ProductBoxImageVariant_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275repeaterCreate(1, ProductBoxImageVariant_Conditional_1_For_2_Template, 3, 7, "div", 7, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.flipImage.slice(0, 2));
  }
}
function ProductBoxImageVariant_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "a", 3);
    \u0275\u0275element(2, "img", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c07, (tmp_1_0 = ctx_r1.product()) == null ? null : tmp_1_0.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.thumbnail ? ctx_r1.thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", (tmp_3_0 = ctx_r1.product()) == null ? null : tmp_3_0.name);
  }
}
function ProductBoxImageVariant_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c07, (tmp_1_0 = ctx_r1.product()) == null ? null : tmp_1_0.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.thumbnail ? ctx_r1.thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", (tmp_3_0 = ctx_r1.product()) == null ? null : tmp_3_0.name);
  }
}
var ProductBoxImageVariant = class _ProductBoxImageVariant {
  constructor() {
    this.gallery_images = input(...ngDevMode ? [void 0, { debugName: "gallery_images" }] : []);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.themeOptions$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.variant = "image_zoom";
    this.flipImage = [];
    this.imageType = [
      "image/apng",
      "image/avif",
      "image/gif",
      "image/jpeg",
      "image/png",
      "image/svg",
      "image/svg+xml",
      "image/webp"
    ];
    this.customOptions = {
      loop: true,
      autoplayTimeout: 1200,
      items: 1,
      autoplay: false
      // Initialize autoplay as false
    };
  }
  ngOnInit() {
    this.themeOptions$.subscribe((options) => {
      this.variant = options?.product?.image_variant || this.variant;
    });
    const gallery = this.gallery_images?.() || [];
    this.flipImage = gallery.map((image) => {
      let images;
      if (this.imageType.includes(image.mime_type)) {
        images = image;
      }
      return images;
    });
  }
  startAutoplay() {
    this.thumbnail = null;
    this.customOptions = __spreadProps(__spreadValues({}, this.customOptions), { autoplay: true });
  }
  stopAutoplay() {
    this.customOptions = __spreadProps(__spreadValues({}, this.customOptions), { autoplay: false });
  }
  static {
    this.\u0275fac = function ProductBoxImageVariant_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxImageVariant)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxImageVariant, selectors: [["app-image-variant"]], inputs: { thumbnail: "thumbnail", gallery_images: [1, "gallery_images"], product: [1, "product"] }, decls: 4, vars: 1, consts: [[3, "options"], [1, "flip"], [1, "zoom"], [3, "routerLink"], [3, "mouseenter", "mouseleave", "options"], ["carouselSlide", ""], [1, "img-fluid", "bg-img", 3, "src", "alt"], [3, "class"]], template: function ProductBoxImageVariant_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ProductBoxImageVariant_Conditional_0_Template, 3, 1, "owl-carousel-o", 0)(1, ProductBoxImageVariant_Conditional_1_Template, 3, 0, "div", 1)(2, ProductBoxImageVariant_Conditional_2_Template, 3, 5, "div", 2)(3, ProductBoxImageVariant_Conditional_3_Template, 2, 5, "a", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.variant === "image_slider" ? 0 : ctx.variant === "image_flip" ? 1 : ctx.variant === "image_zoom" ? 2 : 3);
      }
    }, dependencies: [RouterModule, RouterLink, CarouselModule, CarouselComponent, CarouselSlideDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxImageVariant, [{
    type: Component,
    args: [{ selector: "app-image-variant", imports: [RouterModule, CarouselModule], template: `@if(variant === 'image_slider'){
<owl-carousel-o
  [options]="customOptions"
  (mouseenter)="startAutoplay()"
  (mouseleave)="stopAutoplay()"
>
  @for(image of product()?.product_galleries; track image.id){
  <ng-template carouselSlide>
    <img
      [src]="thumbnail ? thumbnail.original_url  : image?.original_url ? image?.original_url : 'assets/images/placeholder/product.png'"
      class="img-fluid bg-img"
      [alt]="product()?.name"
    />
  </ng-template>
  }
</owl-carousel-o>
} @else if(variant === 'image_flip') {
<div class="flip">
  @for(image of flipImage.slice(0,2); let i = $index; track image.id){
  <div class="{{ i === 0 ? 'front' : 'back' }}">
    <a [routerLink]="['/product', product()?.slug]">
      <img
        [src]="image ? image?.original_url : 'assets/images/placeholder/product.png'"
        class="img-fluid bg-img"
        [alt]="product()?.name"
      />
    </a>
  </div>
  }
</div>
} @else if(variant === 'image_zoom') {
<div class="zoom">
  <a [routerLink]="['/product', product()?.slug]">
    <img
      [src]="thumbnail ? thumbnail.original_url : 'assets/images/placeholder/product.png'"
      class="img-fluid bg-img"
      [alt]="product()?.name"
    />
  </a>
</div>
} @else {
<a [routerLink]="['/product', product()?.slug]">
  <img
    [src]="thumbnail ? thumbnail.original_url : 'assets/images/placeholder/product.png'"
    class="img-fluid bg-img"
    [alt]="product()?.name"
  />
</a>
}
` }]
  }], null, { thumbnail: [{
    type: Input
  }], gallery_images: [{ type: Input, args: [{ isSignal: true, alias: "gallery_images", required: false }] }], product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxImageVariant, { className: "ProductBoxImageVariant", filePath: "src/app/shared/components/widgets/product-box/widgets/image-variant/image-variant.ts", lineNumber: 19 });
})();

// src/app/shared/components/widgets/product-box/widgets/product-hover-action/quick-view/quick-view.ts
var QuickView = class _QuickView {
  constructor() {
    this.modal = inject(NgbModal);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.class = input(...ngDevMode ? [void 0, { debugName: "class" }] : []);
  }
  openModal(product) {
    const modal = this.modal.open(ProductDetailsModal, {
      centered: true,
      size: "lg",
      windowClass: "theme-modal-2 quick-view-modal"
    });
    modal.componentInstance.product = product;
  }
  static {
    this.\u0275fac = function QuickView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickView)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuickView, selectors: [["app-quick-view"]], inputs: { product: [1, "product"], class: [1, "class"] }, decls: 2, vars: 2, consts: [["href", "javascript:void(0)", "title", "Quick View", 3, "click"], [1, "ri-search-line"]], template: function QuickView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "a", 0);
        \u0275\u0275domListener("click", function QuickView_Template_a_click_0_listener() {
          return ctx.openModal(ctx.product());
        });
        \u0275\u0275domElement(1, "i", 1);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.class());
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickView, [{
    type: Component,
    args: [{ selector: "app-quick-view", imports: [], template: '<a href="javascript:void(0)" title="Quick View" (click)="openModal(product()!)" [class]="class()">\n  <i class="ri-search-line"></i>\n</a>\n' }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], class: [{ type: Input, args: [{ isSignal: true, alias: "class", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuickView, { className: "QuickView", filePath: "src/app/shared/components/widgets/product-box/widgets/product-hover-action/quick-view/quick-view.ts", lineNumber: 14 });
})();

// src/app/shared/components/widgets/product-box/widgets/product-hover-action/wishlist/wishlist.ts
var Wishlist = class _Wishlist {
  constructor() {
    this.store = inject(Store);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.class = input("", ...ngDevMode ? [{ debugName: "class" }] : []);
  }
  addToWishlist(product) {
    if (this.store.selectSnapshot((state) => state.auth && state.auth.access_token)) {
      product["is_wishlist"] = !product["is_wishlist"];
    }
    let action = product["is_wishlist"] === !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token) ? new AddToWishlistAction({ product_id: product.id }) : new DeleteWishlistAction(product.id);
    if (action) {
      this.store.dispatch(action);
    }
  }
  static {
    this.\u0275fac = function Wishlist_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Wishlist)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Wishlist, selectors: [["app-wishlist"]], inputs: { product: [1, "product"], class: [1, "class"] }, decls: 2, vars: 7, consts: [["href", "javascript:void(0)", "title", "Add to Wishlist", 3, "click"]], template: function Wishlist_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "a", 0);
        \u0275\u0275domListener("click", function Wishlist_Template_a_click_0_listener() {
          return ctx.addToWishlist(ctx.product());
        });
        \u0275\u0275domElement(1, "i");
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275classMap(ctx.class());
        \u0275\u0275classProp("theme-color", (tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.is_wishlist);
        \u0275\u0275advance();
        \u0275\u0275classMap(\u0275\u0275interpolate1("ri-heart-", ((tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.is_wishlist) ? "fill" : "line"));
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Wishlist, [{
    type: Component,
    args: [{ selector: "app-wishlist", imports: [], template: `<a
  href="javascript:void(0)"
  title="Add to Wishlist"
  [class.theme-color]="product()?.is_wishlist"
  [class]="class()"
  (click)="addToWishlist(product()!)"
>
  <i class="ri-heart-{{ product()?.is_wishlist ? 'fill' : 'line' }}"></i>
</a>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], class: [{ type: Input, args: [{ isSignal: true, alias: "class", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Wishlist, { className: "Wishlist", filePath: "src/app/shared/components/widgets/product-box/widgets/product-hover-action/wishlist/wishlist.ts", lineNumber: 17 });
})();

// src/app/shared/components/widgets/product-box/product-box-eight/product-box-eight.ts
var _c08 = (a0) => ["/product/", a0];
function ProductBoxEight_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r1 = ctx.fill;
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-star", fill_r1 === 100 ? "-fill" : "-line"));
    \u0275\u0275classProp("filled", fill_r1 === 100);
  }
}
var ProductBoxEight = class _ProductBoxEight {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
  }
  static {
    this.\u0275fac = function ProductBoxEight_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxEight)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxEight, selectors: [["app-product-box-eight"]], inputs: { product: [1, "product"] }, decls: 17, vars: 17, consts: [[1, "basic-product", "theme-product-7"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [1, "product-detail"], ["href", "javascript:void(0)", 1, "product-title", "mb-2", 3, "routerLink"], [1, "price"], [1, "rating-w-count", "mb-0"], [1, "rating"], [3, "rateChange", "rate"], [1, "product-action"], [3, "product", "enableModal", "text"]], template: function ProductBoxEight_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "a", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h4", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "currencySymbol");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "ngb-rating", 8);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxEight_Template_ngb_rating_rateChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product().rating_count, $event) || (ctx.product().rating_count = $event);
          return $event;
        });
        \u0275\u0275template(12, ProductBoxEight_ng_template_12_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9);
        \u0275\u0275element(16, "app-cart-button", 10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_8_0;
        \u0275\u0275classProp("sold-out", ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.stock_status) === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", (tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.product_thumbnail)("gallery_images", (tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c08, (tmp_4_0 = ctx.product()) == null ? null : tmp_4_0.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx.product()) == null ? null : tmp_5_0.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, (tmp_6_0 = ctx.product()) == null ? null : tmp_6_0.sale_price));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("rate", ctx.product().rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", (tmp_8_0 = ctx.product()) == null ? null : tmp_8_0.reviews_count, ")");
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product())("enableModal", true)("text", "Add to cart");
      }
    }, dependencies: [
      NgbModule,
      NgbRating,
      RouterModule,
      RouterLink,
      TranslateModule,
      CartButton,
      ProductBoxImageVariant,
      CurrencySymbolPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxEight, [{
    type: Component,
    args: [{ selector: "app-product-box-eight", imports: [
      NgbModule,
      RouterModule,
      TranslateModule,
      CurrencySymbolPipe,
      QuickView,
      Wishlist,
      CartButton,
      ProductBoxImageVariant
    ], template: `<div
  class="basic-product theme-product-7"
  [class.sold-out]="product()?.stock_status === 'out_of_stock'"
>
  <div class="img-wrapper">
    <app-image-variant
      [thumbnail]="product()?.product_thumbnail!"
      [gallery_images]="product()?.product_galleries!"
      [product]="product()!"
    />
  </div>
  <div class="product-detail">
    <a
      href="javascript:void(0)"
      class="product-title mb-2"
      [routerLink]="['/product/', product()?.slug]"
    >
      {{ product()?.name }}
    </a>
    <h4 class="price">{{ (product()?.sale_price) | currencySymbol }}</h4>
    <div class="rating-w-count mb-0">
      <div class="rating">
        <ngb-rating [(rate)]="product()!.rating_count">
          <ng-template let-fill="fill" let-index="index">
            <i
              class="ri-star{{ fill === 100 ? '-fill' : '-line' }}"
              [class.filled]="fill === 100"
            ></i>
          </ng-template>
        </ngb-rating>
      </div>
      <span>({{ product()?.reviews_count }})</span>
    </div>
    <div class="product-action">
      <app-cart-button [product]="product()" [enableModal]="true" [text]="'Add to cart'" />
    </div>
  </div>
</div>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxEight, { className: "ProductBoxEight", filePath: "src/app/shared/components/widgets/product-box/product-box-eight/product-box-eight.ts", lineNumber: 29 });
})();

// src/app/shared/components/widgets/product-box/widgets/dropdown-variant/dropdown-variant.ts
var _forTrack05 = ($index, $item) => $item.label;
function DropdownVariant_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 3);
    \u0275\u0275pipe(1, "json");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_9_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", \u0275\u0275pipeBind1(1, 4, item_r1.value))("selected", ctx_r2.checkVariant(item_r1.value, \u0275$index_9_r2))("disabled", !item_r1.value.status || item_r1.value.stock_status === "out_of_stock");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
var DropdownVariant = class _DropdownVariant {
  constructor() {
    this.ref = inject(ChangeDetectorRef);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.selectedOption = output();
    this.result = [];
    this.soldOutAttributesIds = [];
  }
  ngOnChanges() {
    setTimeout(() => {
      const product = this.product();
      if (product?.variations?.length) {
        this.result = this.generateCombinations(product);
      }
    }, 1);
  }
  // Select First Attribute
  checkVariant(item, i) {
    if (item.stock_status == "in_stock" && item.status) {
      if (item.stock_status === "in_stock" && item.status && i === this.result.findIndex((obj) => obj.value.stock_status === "in_stock" && obj.value.status)) {
        return true;
      }
    }
  }
  getSelectedVariant(item) {
    if (item && item.target.value) {
      this.selectedOption.emit(JSON.parse(item.target.value));
    }
  }
  // Combination Of Variations
  generateCombinations(attributes) {
    const selectVariations = [];
    attributes.variations.forEach((variation) => {
      const labelAttributes = variation.attribute_values.map((attr) => attr.value)?.join("/");
      const value = variation;
      selectVariations.push({ label: labelAttributes, value });
    });
    selectVariations.forEach((item, i) => {
      if (item.value.stock_status == "in_stock" && !!item.value.status) {
        if (item.value.stock_status === "in_stock" && !!item.value.status && i === selectVariations.findIndex((obj) => obj.value.stock_status === "in_stock" && obj.value.status)) {
          this.selectedVariation = item.value;
          if (this.selectedVariation) {
            this.selectedOption.emit(this.selectedVariation);
          }
          return true;
        }
      }
    });
    return selectVariations;
  }
  static {
    this.\u0275fac = function DropdownVariant_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DropdownVariant)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownVariant, selectors: [["app-dropdown-variant"]], inputs: { product: [1, "product"] }, outputs: { selectedOption: "selectedOption" }, features: [\u0275\u0275NgOnChangesFeature], decls: 7, vars: 3, consts: [[1, "product-right", "product-page-details"], [1, "form-control", "form-select", 3, "change"], ["selected", "", "disabled", ""], [3, "value", "selected", "disabled"]], template: function DropdownVariant_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "select", 1);
        \u0275\u0275domListener("change", function DropdownVariant_Template_select_change_1_listener($event) {
          return ctx.getSelectedVariant($event);
        });
        \u0275\u0275domElementStart(2, "option", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275repeaterCreate(5, DropdownVariant_For_6_Template, 3, 6, "option", 3, _forTrack05);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "choose"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.result);
      }
    }, dependencies: [TranslateModule, TranslatePipe, JsonPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownVariant, [{
    type: Component,
    args: [{ selector: "app-dropdown-variant", imports: [TranslateModule, JsonPipe], template: `<div class="product-right product-page-details">
  <select class="form-control form-select" (change)="getSelectedVariant($event)">
    <option selected disabled>{{ 'choose' | translate }}</option>
    @for(item of result; track item.label; let i = $index){
    <option
      [value]="(item.value) | json"
      [selected]="checkVariant(item.value, i)"
      [disabled]="!item.value.status ||  item.value.stock_status === 'out_of_stock'"
    >
      {{ item.label }}
    </option>
    }
  </select>
</div>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], selectedOption: [{ type: Output, args: ["selectedOption"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownVariant, { className: "DropdownVariant", filePath: "src/app/shared/components/widgets/product-box/widgets/dropdown-variant/dropdown-variant.ts", lineNumber: 15 });
})();

// src/app/shared/components/widgets/product-box/widgets/product-hover-action/compare/compare.ts
var Compare = class _Compare {
  constructor() {
    this.store = inject(Store);
    this.compareItems$ = inject(Store).select(CompareState.compareItems);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.text = input("", ...ngDevMode ? [{ debugName: "text" }] : []);
  }
  addToCompare(product) {
    this.store.dispatch(new AddToCompareAction({ product }));
  }
  static {
    this.\u0275fac = function Compare_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Compare)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Compare, selectors: [["app-compare"]], inputs: { product: [1, "product"], text: [1, "text"] }, decls: 4, vars: 3, consts: [["href", "javascript:void(0)", "title", "Compare", 3, "click"], [1, "ri-loop-right-fill"]], template: function Compare_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "a", 0);
        \u0275\u0275domListener("click", function Compare_Template_a_click_0_listener() {
          return ctx.addToCompare(ctx.product());
        });
        \u0275\u0275domElement(1, "i", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, ctx.text() ? ctx.text() : ""), "\n");
      }
    }, dependencies: [TranslateModule, RouterModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Compare, [{
    type: Component,
    args: [{ selector: "app-compare", imports: [TranslateModule, RouterModule], template: `<a href="javascript:void(0)" title="Compare" (click)="addToCompare(product()!)">
  <i class="ri-loop-right-fill"></i> {{ (text() ? text() : '') | translate }}
</a>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Compare, { className: "Compare", filePath: "src/app/shared/components/widgets/product-box/widgets/product-hover-action/compare/compare.ts", lineNumber: 18 });
})();

// src/app/shared/components/widgets/product-box/widgets/product-hover-action/product-hover-action.ts
var _c09 = ["*"];
var ProductHoverAction = class _ProductHoverAction {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.showAction = input(["view", "wishlist", "compare"], ...ngDevMode ? [{ debugName: "showAction" }] : []);
    this.class = input(...ngDevMode ? [void 0, { debugName: "class" }] : []);
  }
  static {
    this.\u0275fac = function ProductHoverAction_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductHoverAction)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductHoverAction, selectors: [["app-product-hover-action"]], inputs: { product: [1, "product"], showAction: [1, "showAction"], class: [1, "class"] }, ngContentSelectors: _c09, decls: 3, vars: 0, consts: [[1, "hover-action"]], template: function ProductHoverAction_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "ul", 0)(1, "li");
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductHoverAction, [{
    type: Component,
    args: [{ selector: "app-product-hover-action", imports: [Wishlist, QuickView, Compare], template: '<ul class="hover-action">\n  <li>\n    <ng-content />\n  </li>\n</ul>\n' }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], showAction: [{ type: Input, args: [{ isSignal: true, alias: "showAction", required: false }] }], class: [{ type: Input, args: [{ isSignal: true, alias: "class", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductHoverAction, { className: "ProductHoverAction", filePath: "src/app/shared/components/widgets/product-box/widgets/product-hover-action/product-hover-action.ts", lineNumber: 14 });
})();

// src/app/shared/components/widgets/product-box/product-box-eleven/product-box-eleven.ts
var _c010 = (a0) => ["/product", a0];
var _c14 = (a0) => ["/brand", a0];
function ProductBoxEleven_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c14, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.brand == null ? null : tmp_1_0.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.brand == null ? null : tmp_2_0.brand.name, " ");
  }
}
function ProductBoxEleven_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.discount, "% ", \u0275\u0275pipeBind1(5, 5, "Off"), " ");
  }
}
function ProductBoxEleven_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dropdown-variant", 10);
    \u0275\u0275listener("selectedOption", function ProductBoxEleven_Conditional_15_Template_app_dropdown_variant_selectedOption_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.getSelectedVariant($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
var ProductBoxEleven = class _ProductBoxEleven {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.cartItem$ = inject(Store).select(CartState.cartItems);
    this.soldOutAttributesIds = [];
    this.result = [];
    const config = inject(NgbRatingConfig);
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit() {
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => {
        if (item.variation_id) {
          this.product()?.variations.find((i) => {
            return i.id == item.variation_id;
          });
        } else {
          return item.product.id == this.product()?.id;
        }
      });
    });
  }
  // Select First Attribute
  checkVariant(item, i) {
    if (item.stock_status == "in_stock" && item.status) {
      if (item.stock_status === "in_stock" && item.status && i === this.result.findIndex((obj) => obj.value.stock_status === "in_stock" && obj.value.status)) {
        return true;
      }
    }
  }
  // Change Variation
  getSelectedVariant(option) {
    if (option) {
      this.selectedVariation = option;
    }
  }
  static {
    this.\u0275fac = function ProductBoxEleven_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxEleven)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxEleven, selectors: [["app-product-box-eleven"]], inputs: { product: [1, "product"] }, decls: 16, vars: 22, consts: [[1, "basic-product", "theme-product-10"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [3, "product", "text", "enableModal", "selectedVariation"], [1, "cart-info"], [3, "product"], [1, "product-detail"], [1, "product-title", 3, "routerLink"], [1, "price"], [1, "discounted-price"], [3, "selectedOption", "product"]], template: function ProductBoxEleven_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2)(3, "app-cart-button", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "app-product-hover-action", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275conditionalCreate(7, ProductBoxEleven_Conditional_7_Template, 2, 4, "a", 7);
        \u0275\u0275elementStart(8, "a", 7)(9, "h6");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "h4", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "currencySymbol");
        \u0275\u0275conditionalCreate(14, ProductBoxEleven_Conditional_14_Template, 6, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, ProductBoxEleven_Conditional_15_Template, 1, 1, "app-dropdown-variant", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_15_0;
        \u0275\u0275classProp("sold-out", ctx.selectedVariation ? ctx.selectedVariation.stock_status === "out_of_stock" || !ctx.selectedVariation.status : ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.stock_status) === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation ? ctx.selectedVariation.variation_image : (tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.product_thumbnail)("gallery_images", (tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance();
        \u0275\u0275classMap("addto-cart-bottom");
        \u0275\u0275property("product", ctx.product())("text", "Add to cart")("enableModal", !ctx.selectedVariation ? true : false)("selectedVariation", ctx.selectedVariation);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_10_0 = ctx.product()) == null ? null : tmp_10_0.brand) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c010, (tmp_11_0 = ctx.product()) == null ? null : tmp_11_0.slug));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.selectedVariation ? ctx.selectedVariation.name : (tmp_12_0 = ctx.product()) == null ? null : tmp_12_0.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 18, ctx.selectedVariation ? ctx.selectedVariation.sale_price : (tmp_13_0 = ctx.product()) == null ? null : tmp_13_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : (tmp_14_0 = ctx.product()) == null ? null : tmp_14_0.discount) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_15_0 = ctx.product()) == null ? null : tmp_15_0.variations) && ctx.product().variations.length > 0 && ctx.product().attributes.length > 0 ? 15 : -1);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      NgbModule,
      TranslateModule,
      ProductHoverAction,
      CartButton,
      ProductBoxImageVariant,
      DropdownVariant,
      TranslatePipe,
      CurrencySymbolPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxEleven, [{
    type: Component,
    args: [{ selector: "app-product-box-eleven", imports: [
      RouterModule,
      NgbModule,
      TranslateModule,
      CurrencySymbolPipe,
      ProductHoverAction,
      CartButton,
      ProductBoxImageVariant,
      DropdownVariant
    ], template: `<div
  class="basic-product theme-product-10"
  [class.sold-out]="selectedVariation ? (selectedVariation.stock_status === 'out_of_stock' || !(selectedVariation.status)) : (product()?.stock_status === 'out_of_stock') "
>
  <div class="img-wrapper">
    <app-image-variant
      [thumbnail]="selectedVariation ? selectedVariation.variation_image! : product()?.product_thumbnail!"
      [gallery_images]="product()?.product_galleries!"
      [product]="product()!"
    />
    <app-cart-button
      [product]="product()"
      [class]="'addto-cart-bottom'"
      [text]="'Add to cart'"
      [enableModal]="!selectedVariation ? true : false"
      [selectedVariation]="selectedVariation"
    />
    <div class="cart-info">
      <app-product-hover-action [product]="product()" />
    </div>
  </div>
  <div class="product-detail">
    @if(product()?.brand){
    <a class="product-title" [routerLink]="['/brand', product()?.brand?.slug]">
      {{ product()?.brand?.name }}
    </a>
    }

    <a class="product-title" [routerLink]="['/product', product()?.slug]">
      <h6>{{ selectedVariation ? selectedVariation.name : product()?.name }}</h6>
    </a>

    <h4 class="price">
      {{ (selectedVariation ? selectedVariation.sale_price : product()?.sale_price) | currencySymbol
      }} @if(selectedVariation ? selectedVariation.discount : product()?.discount){
      <del>
        {{ (selectedVariation ? selectedVariation.price : product()?.price) | currencySymbol }} </del
      ><span class="discounted-price">
        {{ selectedVariation ? selectedVariation.discount : product()?.discount }}% {{'Off' |
        translate}}
      </span>
      }
    </h4>

    @if(product()?.variations && product()!.variations.length > 0 && product()!.attributes.length >
    0){
    <app-dropdown-variant [product]="product()" (selectedOption)="getSelectedVariant($event)" />
    }
  </div>
</div>
` }]
  }], () => [], { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxEleven, { className: "ProductBoxEleven", filePath: "src/app/shared/components/widgets/product-box/product-box-eleven/product-box-eleven.ts", lineNumber: 34 });
})();

// src/app/shared/components/widgets/display-variant-attributes/display-variant-attributes.ts
var _c011 = (a0) => ({ "": a0 });
var _c15 = (a0) => ({ "disabled": a0 });
var _forTrack06 = ($index, $item) => $item.id;
function DisplayVariantAttributes_For_1_Conditional_0_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const value_r5 = ctx_r3.$implicit;
    const \u0275$index_9_r6 = ctx_r3.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("selected", ctx_r2.variantIds.includes(value_r5.id) && !ctx_r2.soldOutAttributesIds.includes(value_r5.id))("value", \u0275$index_9_r6)("disabled", ctx_r2.soldOutAttributesIds.includes(value_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r5 == null ? null : value_r5.value, " ");
  }
}
function DisplayVariantAttributes_For_1_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DisplayVariantAttributes_For_1_Conditional_0_For_6_Conditional_0_Template, 2, 4, "option", 4);
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues.includes(value_r5.id) ? 0 : -1);
  }
}
function DisplayVariantAttributes_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 2, 0);
    \u0275\u0275listener("change", function DisplayVariantAttributes_For_1_Conditional_0_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const attribute_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, attribute_r2.attribute_values[$event.target.value]));
    });
    \u0275\u0275elementStart(2, "option", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, DisplayVariantAttributes_For_1_Conditional_0_For_6_Template, 1, 1, null, null, _forTrack06);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const attribute_r2 = ctx_r6.$implicit;
    const \u0275$index_1_r8 = ctx_r6.$index;
    \u0275\u0275property("id", \u0275\u0275interpolate1("input-state-", \u0275$index_1_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 4, "choose"), " ", attribute_r2 == null ? null : attribute_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r10 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r10.price);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 11)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Conditional_4_Conditional_4_Template, 2, 1, "del");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, value_r10.sale_price));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.product.discount ? 4 : -1);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "input", 9);
    \u0275\u0275listener("change", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const attribute_r2 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, attribute_r2.attribute_values[$event.target.value]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Conditional_4_Template, 5, 4, "h5", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    const value_r10 = ctx_r10.$implicit;
    const \u0275$index_18_r12 = ctx_r10.$index;
    const \u0275$index_1_r8 = \u0275\u0275nextContext(3).$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", "radio-" + \u0275$index_1_r8 + "-" + \u0275$index_18_r12)("name", "radio-group-" + \u0275$index_1_r8)("value", \u0275$index_18_r12)("checked", ctx_r2.variantIds.includes(value_r10.id) && !ctx_r2.soldOutAttributesIds.includes(value_r10.id))("disabled", ctx_r2.soldOutAttributesIds.includes(value_r10.id))("ngClass", \u0275\u0275pureFunction1(9, _c011, ctx_r2.soldOutAttributesIds.includes(value_r10.id)));
    \u0275\u0275advance();
    \u0275\u0275property("for", "radio-" + \u0275$index_1_r8 + "-" + \u0275$index_18_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", value_r10 == null ? null : value_r10.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showPrice() ? 4 : -1);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Template, 5, 11, "div", 8);
  }
  if (rf & 2) {
    const value_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.attributeValues.includes(value_r10.id) ? 0 : -1);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_For_2_Template, 1, 1, null, null, _forTrack06);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_1_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14);
    \u0275\u0275listener("mouseleave", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_1_For_2_Conditional_0_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    })("click", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_1_For_2_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r14));
    })("mouseover", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_1_For_2_Conditional_0_Template_li_mouseover_0_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r14, "hover"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("background-color", value_r14.hex_color);
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r14.id) && !ctx_r2.soldOutAttributesIds.includes(value_r14.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c15, ctx_r2.soldOutAttributesIds.includes(value_r14.id)));
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DisplayVariantAttributes_For_1_Conditional_1_Conditional_1_For_2_Conditional_0_Template, 1, 7, "li", 13);
  }
  if (rf & 2) {
    const value_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.attributeValues.includes(value_r14.id) ? 0 : -1);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275repeaterCreate(1, DisplayVariantAttributes_For_1_Conditional_1_Conditional_1_For_2_Template, 1, 1, null, null, _forTrack06);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "a", 16);
    \u0275\u0275listener("click", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_Conditional_4_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openSizeChartModal(ctx_r2.product.size_chart_image));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "size_chart"));
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275listener("mouseleave", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_For_7_Conditional_0_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    });
    \u0275\u0275elementStart(1, "a", 19);
    \u0275\u0275listener("click", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_For_7_Conditional_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const value_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r17));
    })("mouseover", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_For_7_Conditional_0_Template_a_mouseover_1_listener() {
      \u0275\u0275restoreView(_r16);
      const value_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r17, "hover"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r17.id) && !ctx_r2.soldOutAttributesIds.includes(value_r17.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c15, ctx_r2.soldOutAttributesIds.includes(value_r17.id)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r17.value);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_For_7_Conditional_0_Template, 3, 6, "li", 17);
  }
  if (rf & 2) {
    const value_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.attributeValues.includes(value_r17.id) ? 0 : -1);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h6", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_Conditional_4_Template, 4, 3, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul");
    \u0275\u0275repeaterCreate(6, DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_For_7_Template, 1, 1, null, null, _forTrack06);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "select_size"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.product.size_chart_image ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(attribute_r2 == null ? null : attribute_r2.style);
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a")(1, "img", 25);
    \u0275\u0275listener("click", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_Template_img_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20));
    })("mouseover", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_Template_img_mouseover_1_listener() {
      \u0275\u0275restoreView(_r19);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20, "hover"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", (value_r20 == null ? null : value_r20.variation_image) ? value_r20 == null ? null : value_r20.variation_image == null ? null : value_r20.variation_image.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 26);
    \u0275\u0275listener("click", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_2_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20));
    })("mouseover", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_2_Template_app_button_mouseover_0_listener() {
      \u0275\u0275restoreView(_r21);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20, "hover"));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "value_btn")("type", "button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r20 == null ? null : value_r20.value, " ");
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275listener("mouseleave", function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    });
    \u0275\u0275conditionalCreate(1, DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_Template, 2, 1, "a")(2, DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_2_Template, 2, 4, "app-button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext().$implicit;
    const attribute_r2 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r20.id) && !ctx_r2.soldOutAttributesIds.includes(value_r20.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c15, ctx_r2.soldOutAttributesIds.includes(value_r20.id)));
    \u0275\u0275advance();
    \u0275\u0275conditional((attribute_r2 == null ? null : attribute_r2.style) === "image" ? 1 : 2);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Template, 3, 6, "li", 22);
  }
  if (rf & 2) {
    const value_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275conditional(ctx_r2.attributeValues.includes(value_r20.id) ? 0 : -1);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 21);
    \u0275\u0275repeaterCreate(1, DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Template, 1, 1, null, null, _forTrack06);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275classProp("quantity-variant", (attribute_r2 == null ? null : attribute_r2.style) !== "image")("image-swatch", (attribute_r2 == null ? null : attribute_r2.style) === "image");
    \u0275\u0275property("ngClass", attribute_r2 == null ? null : attribute_r2.style);
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_Template, 3, 5, "ul", 20);
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.showVariableType().includes(attribute_r2 == null ? null : attribute_r2.style) ? 0 : -1);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.showVariableType().includes("rectangle") || ctx_r2.showVariableType().includes("image") ? 0 : -1);
  }
}
function DisplayVariantAttributes_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DisplayVariantAttributes_For_1_Conditional_1_Conditional_0_Template, 3, 0, "div", 5)(1, DisplayVariantAttributes_For_1_Conditional_1_Conditional_1_Template, 3, 0, "ul", 6)(2, DisplayVariantAttributes_For_1_Conditional_1_Conditional_2_Template, 8, 6, "div", 7)(3, DisplayVariantAttributes_For_1_Conditional_1_Conditional_3_Template, 1, 1);
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((attribute_r2 == null ? null : attribute_r2.style) === "radio" && ctx_r2.showVariableType().includes("radio") ? 0 : attribute_r2.style === "color" && ctx_r2.showVariableType().includes("color") ? 1 : attribute_r2.style === "circle" && ctx_r2.showVariableType().includes("circle") ? 2 : 3);
  }
}
function DisplayVariantAttributes_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DisplayVariantAttributes_For_1_Conditional_0_Template, 7, 6, "select", 1)(1, DisplayVariantAttributes_For_1_Conditional_1_Template, 4, 1);
  }
  if (rf & 2) {
    const attribute_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((attribute_r2 == null ? null : attribute_r2.style) === "dropdown" || ctx_r2.isAllVariantStyleDropdown() && ctx_r2.showVariableType().includes("dropdown") ? 0 : 1);
  }
}
var DisplayVariantAttributes = class _DisplayVariantAttributes {
  constructor() {
    this.modal = inject(NgbModal);
    this.attributes = [];
    this.isAllVariantStyleDropdown = input(false, ...ngDevMode ? [{ debugName: "isAllVariantStyleDropdown" }] : []);
    this.owlCar = input(...ngDevMode ? [void 0, { debugName: "owlCar" }] : []);
    this.showPrice = input(...ngDevMode ? [void 0, { debugName: "showPrice" }] : []);
    this.showVariableType = input([
      "color",
      "rectangle",
      "circle",
      "radio",
      "dropdown",
      "image",
      "color"
    ], ...ngDevMode ? [{ debugName: "showVariableType" }] : []);
    this.selectVariation = output();
    this.cartItem$ = inject(Store).select(CartState.cartItems);
    this.productQty = 1;
    this.attributeValues = [];
    this.variantIds = [];
    this.hoverVariantIds = [];
    this.soldOutAttributesIds = [];
    this.selectedOptions = [];
    this.break = false;
  }
  ngOnChanges(changes) {
    setTimeout(() => {
      if (changes["product"] && changes["product"].currentValue) {
        this.product = changes["product"]?.currentValue;
      }
      if (changes["attributes"] && changes["attributes"].currentValue) {
        this.attributes = changes["attributes"]?.currentValue;
      }
      this.cartItem$.subscribe((items) => {
        this.cartItem = items.find((item) => item.product.id == this.product.id);
      });
      this.checkVariantAvailability(this.product);
    }, 0);
    if (changes["showPrice"]?.currentValue) {
      this.product.attributes.forEach((attribute) => {
        attribute.attribute_values.forEach((value) => {
          this.product.variations.forEach((variation) => {
            variation.attribute_values.forEach((att) => {
              if (att.id !== value.id)
                value["price"] = variation.price;
              value["sale_price"] = variation.sale_price;
            });
          });
        });
      });
    }
  }
  checkVariantAvailability(product) {
    this.selectedOptions = [];
    this.attributeValues = [];
    this.selectedVariation = null;
    this.hoverVariation = null;
    product?.variations?.forEach((variation) => {
      variation?.attribute_values?.filter((attribute_value) => {
        if (this.attributeValues.indexOf(attribute_value?.id) === -1)
          this.attributeValues.push(attribute_value?.id);
      });
    });
    if (this.cartItem?.variation) {
      this.cartItem?.variation.attribute_values.filter((attribute_val) => {
        this.setVariant(this.product.variations, attribute_val);
      });
    }
    if (!this.cartItem) {
      for (const attribute of product?.attributes ?? []) {
        if (this.attributeValues?.length && attribute?.attribute_values?.length) {
          let values = [];
          for (const value of attribute.attribute_values) {
            if (values.indexOf(value.id) === -1)
              values.push(value.id);
            if (this.attributeValues.includes(value.id)) {
              this.setVariant(product.variations, value);
              if (this.break)
                break;
            }
          }
        }
      }
    }
    product.variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      product?.attributes.filter((attribute) => {
        if (attribute.style == "image") {
          attribute.attribute_values.filter((attribute_value) => {
            if (this.attributeValues.includes(attribute_value.id)) {
              if (attrValues.includes(attribute_value.id)) {
                attribute_value.variation_image = variation.variation_image;
              }
            }
          });
        }
      });
    });
  }
  setVariant(variations, value, event) {
    const index = this.selectedOptions.findIndex((item) => Number(item.attribute_id) === Number(value?.attribute_id));
    this.soldOutAttributesIds = [];
    if (index === -1) {
      this.selectedOptions.push({
        id: Number(value?.id),
        attribute_id: Number(value?.attribute_id)
      });
    } else {
      this.selectedOptions[index].id = value?.id;
    }
    variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      this.variantIds = this.selectedOptions?.map((variants) => variants?.id);
      let doValuesMatch = attrValues.length === this.selectedOptions.length && attrValues.every((value2) => this.variantIds.includes(value2));
      const productValue = this.product;
      if (doValuesMatch) {
        this.selectedVariation = variation;
        this.product["quantity"] = this.selectedVariation ? this.selectedVariation?.quantity : this.product?.quantity;
        productValue["sku"] = this.selectedVariation ? this.selectedVariation?.sku : productValue?.sku;
        productValue["sale_price"] = this.selectedVariation ? this.selectedVariation?.sale_price : productValue?.sale_price;
        const owlCar = this.owlCar();
        if (owlCar && this.selectedVariation.variation_image) {
          owlCar.to(this.selectedVariation.variation_image.id.toString());
        }
        this.checkStockAvailable();
      }
      if (variation.stock_status == "out_of_stock" || !variation.status || !productValue.status) {
        variation?.attribute_values.filter((attr_value) => {
          if (attrValues.some((value2) => this.variantIds.includes(value2))) {
            if (attrValues.every((value2) => this.variantIds.includes(value2))) {
              this.soldOutAttributesIds.push(attr_value.id);
            } else if (!this.variantIds.includes(attr_value.id)) {
              this.soldOutAttributesIds.push(attr_value.id);
            }
          } else if (attrValues.length == 1 && attrValues.includes(attr_value.id)) {
            this.soldOutAttributesIds.push(attr_value.id);
          }
        });
      }
    });
    this.product?.attributes.filter((attribute) => {
      attribute.attribute_values.filter((a_value) => {
        if (a_value.id == value.id) {
          attribute.selected_value = a_value.value;
        }
      });
    });
    if (this.selectedVariation && this.selectedVariation?.status && this.selectedVariation.stock_status == "in_stock") {
      this.break = true;
    } else {
      this.break = false;
    }
    if (event !== "hover") {
      this.hoverVariantIds = this.variantIds;
      this.hoverVariation = this.selectedVariation;
    }
    if (this.selectedVariation) {
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  checkStockAvailable() {
    if (this.selectedVariation) {
      this.selectedVariation["stock_status"] = this.selectedVariation?.quantity < this.productQty ? "out_of_stock" : "in_stock";
    } else {
      this.product["stock_status"] = this.product?.quantity < this.productQty ? "out_of_stock" : "in_stock";
    }
  }
  removeVariation() {
    this.variantIds = this.hoverVariantIds;
    this.selectedVariation = this.hoverVariation;
    if (this.selectedVariation) {
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  openSizeChartModal(image) {
    const sizeChart = this.modal.open(SizeChartModal, { size: "lg", centered: true });
    sizeChart.componentInstance.image = image;
  }
  static {
    this.\u0275fac = function DisplayVariantAttributes_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayVariantAttributes)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayVariantAttributes, selectors: [["app-display-variant-attributes"]], inputs: { product: "product", attributes: "attributes", isAllVariantStyleDropdown: [1, "isAllVariantStyleDropdown"], owlCar: [1, "owlCar"], showPrice: [1, "showPrice"], showVariableType: [1, "showVariableType"] }, outputs: { selectVariation: "selectVariation" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [["selectedValue", ""], [1, "form-control", "form-select", 3, "id"], [1, "form-control", "form-select", 3, "change", "id"], ["selected", "", "disabled", ""], [3, "selected", "value", "disabled"], [1, "d-flex", "digital-price"], [1, "color-variant"], [1, "size-box"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "change", "id", "name", "value", "checked", "disabled", "ngClass"], [1, "form-check-label", 3, "for"], [1, "sold", "text-content", "ms-auto"], [1, "theme-color", "price"], [3, "background-color", "active", "ngClass"], [3, "mouseleave", "click", "mouseover", "ngClass"], [1, "product-title", "size-text"], ["href", "javascript:void(0)", 3, "click"], [3, "active", "ngClass"], [3, "mouseleave", "ngClass"], ["href", "javascript:void(0)", 3, "click", "mouseover"], [3, "ngClass", "quantity-variant", "image-swatch"], [3, "ngClass"], [1, "bg-light", 3, "active", "ngClass"], [1, "bg-light", 3, "mouseleave", "ngClass"], [3, "id", "type", "spinner"], ["alt", "img", 3, "click", "mouseover", "src"], [3, "click", "mouseover", "id", "type", "spinner"]], template: function DisplayVariantAttributes_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, DisplayVariantAttributes_For_1_Template, 2, 1, null, null, _forTrack06);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.attributes);
      }
    }, dependencies: [TranslateModule, Button, NgClass, CurrencySymbolPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayVariantAttributes, [{
    type: Component,
    args: [{ selector: "app-display-variant-attributes", imports: [CurrencySymbolPipe, TranslateModule, Button, NgClass], template: `@for(attribute of attributes; track attribute.id; let i = $index){ @if(attribute?.style ===
'dropdown' || isAllVariantStyleDropdown() && showVariableType().includes('dropdown')){
<select
  id="input-state-{{i}}"
  class="form-control form-select"
  #selectedValue
  (change)="setVariant(product.variations, attribute.attribute_values[$any($event.target).value])"
>
  <option selected disabled>{{ 'choose' | translate }} {{ attribute?.name }}</option>
  @for(value of attribute.attribute_values; let indexx = $index; track value.id){
  @if(attributeValues.includes(value.id)){
  <option
    [selected]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
    [value]="indexx"
    [disabled]="soldOutAttributesIds.includes(value.id)"
  >
    {{ value?.value }}
  </option>
  } }
</select>
}@else { @if(attribute?.style === 'radio' && showVariableType().includes('radio')){
<div class="d-flex digital-price">
  @for(value of attribute.attribute_values; track value.id; let indexx = $index){
  @if(attributeValues.includes(value.id)){
  <div class="form-check">
    <input
      type="radio"
      class="form-check-input"
      [id]="'radio-' + i + '-' + indexx"
      [name]="'radio-group-' + i"
      [value]="indexx"
      [checked]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
      [disabled]="soldOutAttributesIds.includes(value.id)"
      [ngClass]="{ '': soldOutAttributesIds.includes(value.id) }"
      (change)="setVariant(product.variations, attribute.attribute_values[$any($event.target).value])"
    />

    <label [for]="'radio-' + i + '-' + indexx" class="form-check-label">{{ value?.value }} </label>

    @if(showPrice()){
    <h5 class="sold text-content ms-auto">
      <span class="theme-color price">{{ value.sale_price | currencySymbol }}</span>
      @if(product.discount){
      <del>{{ value.price }}</del>
      }
    </h5>
    }
  </div>
  } }
</div>
} @else if(attribute.style === 'color' && showVariableType().includes('color')){
<ul class="color-variant">
  @for(value of attribute.attribute_values; track value.id){
  @if(attributeValues.includes(value.id)){
  <li
    (mouseleave)="removeVariation()"
    [style.background-color]="value.hex_color"
    [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
    [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
    (click)="setVariant(product.variations, value)"
    (mouseover)="setVariant(product.variations, value, 'hover')"
  ></li>
  } }
</ul>
} @else if(attribute.style === 'circle' && showVariableType().includes('circle')){
<div class="size-box">
  <h6 class="product-title size-text">
    {{'select_size' | translate}} @if(product.size_chart_image){
    <span>
      <a href="javascript:void(0)" (click)="openSizeChartModal(product.size_chart_image)"
        >{{'size_chart' | translate}}</a
      ></span
    >
    }
  </h6>

  <ul class="{{attribute?.style}}">
    @for(value of attribute.attribute_values; track value.id){
    @if(attributeValues.includes(value.id)){
    <li
      (mouseleave)="removeVariation()"
      [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
      [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
    >
      <a
        href="javascript:void(0)"
        (click)="setVariant(product.variations, value)"
        (mouseover)="setVariant(product.variations, value, 'hover')"
        >{{ value.value}}</a
      >
    </li>
    } }
  </ul>
</div>
} @else { @if(showVariableType().includes('rectangle') || showVariableType().includes('image')){
@if(showVariableType().includes(attribute?.style!)){
<ul
  [ngClass]="attribute?.style"
  [class.quantity-variant]="attribute?.style !== 'image'"
  [class.image-swatch]="attribute?.style === 'image'"
>
  @for(value of attribute.attribute_values; track value.id){
  @if(attributeValues.includes(value.id)){
  <li
    class="bg-light"
    (mouseleave)="removeVariation()"
    [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
    [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
  >
    @if(attribute?.style === 'image'){
    <a>
      <img
        [src]="value?.variation_image ? value?.variation_image?.original_url : 'assets/images/placeholder/product.png'"
        (click)="setVariant(product.variations, value)"
        (mouseover)="setVariant(product.variations, value, 'hover')"
        alt="img"
      />
    </a>
    }@else {
    <app-button
      [id]="'value_btn'"
      [type]="'button'"
      [spinner]="false"
      (click)="setVariant(product.variations, value)"
      (mouseover)="setVariant(product.variations, value, 'hover')"
    >
      {{ value?.value }}
    </app-button>
    }
  </li>
  } }
</ul>
} } } } }
` }]
  }], null, { product: [{
    type: Input
  }], attributes: [{
    type: Input
  }], isAllVariantStyleDropdown: [{ type: Input, args: [{ isSignal: true, alias: "isAllVariantStyleDropdown", required: false }] }], owlCar: [{ type: Input, args: [{ isSignal: true, alias: "owlCar", required: false }] }], showPrice: [{ type: Input, args: [{ isSignal: true, alias: "showPrice", required: false }] }], showVariableType: [{ type: Input, args: [{ isSignal: true, alias: "showVariableType", required: false }] }], selectVariation: [{ type: Output, args: ["selectVariation"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayVariantAttributes, { className: "DisplayVariantAttributes", filePath: "src/app/shared/components/widgets/display-variant-attributes/display-variant-attributes.ts", lineNumber: 25 });
})();

// src/app/shared/components/widgets/product-box/product-box-five/product-box-five.ts
var _c012 = () => [];
var _c16 = () => ["color"];
var _c22 = (a0) => ["/product", a0];
function ProductBoxFive_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sold_out"));
  }
}
function ProductBoxFive_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sale"));
  }
}
function ProductBoxFive_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "featured"));
  }
}
function ProductBoxFive_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "trending"));
  }
}
function ProductBoxFive_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r1 = ctx.fill;
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-star", fill_r1 === 100 ? "-fill" : "-line"));
    \u0275\u0275classProp("filled", fill_r1 === 100);
  }
}
function ProductBoxFive_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.selectedVariation ? ctx_r1.selectedVariation.price : (tmp_1_0 = ctx_r1.product()) == null ? null : tmp_1_0.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedVariation ? ctx_r1.selectedVariation.discount : (tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.discount, " % Off ");
  }
}
var ProductBoxFive = class _ProductBoxFive {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxFive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxFive)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxFive, selectors: [["app-product-box-five"]], inputs: { product: [1, "product"] }, decls: 26, vars: 31, consts: [[1, "basic-product", "theme-product-4"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [1, "trending-label"], [1, "out_of_stock"], [1, "color-panel", "coverflow"], [3, "selectVariation", "product", "attributes", "showVariableType"], [1, "cart-info"], [3, "product"], [3, "text", "product", "selectedVariation", "enableModal"], [1, "product-detail"], [1, "product-title", "mb-2", 3, "routerLink"], [1, "rating-w-count"], [1, "rating"], [3, "rateChange", "rate"], [1, "price"], [1, "discounted-price"]], template: function ProductBoxFive_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2);
        \u0275\u0275elementStart(3, "ul", 3);
        \u0275\u0275conditionalCreate(4, ProductBoxFive_Conditional_4_Template, 3, 3, "li", 4);
        \u0275\u0275conditionalCreate(5, ProductBoxFive_Conditional_5_Template, 3, 3, "li");
        \u0275\u0275conditionalCreate(6, ProductBoxFive_Conditional_6_Template, 3, 3, "li");
        \u0275\u0275conditionalCreate(7, ProductBoxFive_Conditional_7_Template, 3, 3, "li");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "app-display-variant-attributes", 6);
        \u0275\u0275listener("selectVariation", function ProductBoxFive_Template_app_display_variant_attributes_selectVariation_9_listener($event) {
          return ctx.selectedVariant($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "app-product-hover-action", 8);
        \u0275\u0275element(12, "app-cart-button", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 10)(14, "a", 11);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "ngb-rating", 14);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxFive_Template_ngb_rating_rateChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product().rating_count, $event) || (ctx.product().rating_count = $event);
          return $event;
        });
        \u0275\u0275template(19, ProductBoxFive_ng_template_19_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "h4", 15);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "currencySymbol");
        \u0275\u0275conditionalCreate(25, ProductBoxFive_Conditional_25_Template, 5, 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_9_0;
        let tmp_17_0;
        let tmp_18_0;
        let tmp_20_0;
        let tmp_21_0;
        let tmp_22_0;
        \u0275\u0275classProp("sold-out", ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.stock_status) === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation ? ctx.selectedVariation.variation_image : (tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.product_thumbnail)("gallery_images", (tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_4_0 = ctx.product()) == null ? null : tmp_4_0.stock_status) === "out_of_stock" ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_5_0 = ctx.product()) == null ? null : tmp_5_0.is_sale_enable) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_6_0 = ctx.product()) == null ? null : tmp_6_0.is_featured) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_7_0 = ctx.product()) == null ? null : tmp_7_0.is_trending) ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product())("attributes", ((tmp_9_0 = ctx.product()) == null ? null : tmp_9_0.attributes) || \u0275\u0275pureFunction0(27, _c012))("showVariableType", \u0275\u0275pureFunction0(28, _c16));
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance();
        \u0275\u0275classMap("add-cart-btn");
        \u0275\u0275property("text", "")("product", ctx.product())("selectedVariation", ctx.selectedVariation)("enableModal", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c22, (tmp_17_0 = ctx.product()) == null ? null : tmp_17_0.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.selectedVariation ? ctx.selectedVariation.name : (tmp_18_0 = ctx.product()) == null ? null : tmp_18_0.name, " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product().rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", (tmp_20_0 = ctx.product()) == null ? null : tmp_20_0.reviews_count, ")");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 25, ctx.selectedVariation ? ctx.selectedVariation.sale_price : (tmp_21_0 = ctx.product()) == null ? null : tmp_21_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : (tmp_22_0 = ctx.product()) == null ? null : tmp_22_0.discount) ? 25 : -1);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      TranslateModule,
      ProductHoverAction,
      DisplayVariantAttributes,
      CartButton,
      ProductBoxImageVariant,
      NgbRating,
      CurrencySymbolPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxFive, [{
    type: Component,
    args: [{ selector: "app-product-box-five", imports: [
      CurrencySymbolPipe,
      RouterModule,
      TranslateModule,
      ProductHoverAction,
      DisplayVariantAttributes,
      Wishlist,
      CartButton,
      ProductBoxImageVariant,
      NgbRating
    ], template: `<div
  class="basic-product theme-product-4"
  [class.sold-out]="product()?.stock_status === 'out_of_stock'"
>
  <div class="img-wrapper">
    <app-image-variant
      [thumbnail]="selectedVariation ? selectedVariation.variation_image! : product()?.product_thumbnail!"
      [gallery_images]="product()?.product_galleries!"
      [product]="product()!"
    />
    <ul class="trending-label">
      @if(product()?.stock_status === 'out_of_stock'){
      <li class="out_of_stock">{{ 'sold_out' | translate }}</li>
      } @if(product()?.is_sale_enable){
      <li>{{ 'sale' | translate }}</li>
      } @if(product()?.is_featured){
      <li>{{ 'featured' | translate }}</li>
      } @if(product()?.is_trending){
      <li>{{ 'trending' | translate }}</li>
      }
    </ul>

    <div class="color-panel coverflow">
      <app-display-variant-attributes
        [product]="product()!"
        [attributes]="product()?.attributes || []"
        [showVariableType]="['color']"
        (selectVariation)="selectedVariant($event!)"
      />
    </div>
    <div class="cart-info">
      <app-product-hover-action [product]="product()">
        <app-cart-button
          [text]="''"
          [product]="product()"
          [class]="'add-cart-btn'"
          [selectedVariation]="selectedVariation"
          [enableModal]="true"
        />
      </app-product-hover-action>
    </div>
  </div>
  <div class="product-detail">
    <a class="product-title mb-2" [routerLink]="['/product', product()?.slug]">
      {{ selectedVariation ? selectedVariation.name : product()?.name }}
    </a>
    <div class="rating-w-count">
      <div class="rating">
        <ngb-rating [(rate)]="product()!.rating_count">
          <ng-template let-fill="fill" let-index="index">
            <i
              class="ri-star{{ fill === 100 ? '-fill' : '-line' }}"
              [class.filled]="fill === 100"
            ></i>
          </ng-template>
        </ngb-rating>
      </div>
      <span>({{ product()?.reviews_count }})</span>
    </div>
    <h4 class="price">
      {{(selectedVariation ? selectedVariation.sale_price : product()?.sale_price) |
      currencySymbol}} @if(selectedVariation ? selectedVariation.discount : product()?.discount){
      <del>
        {{(selectedVariation ? selectedVariation.price : product()?.price) | currencySymbol}}
      </del>
      <span class="discounted-price">
        {{selectedVariation ? selectedVariation.discount : product()?.discount}} % Off
      </span>
      }
    </h4>
  </div>
</div>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxFive, { className: "ProductBoxFive", filePath: "src/app/shared/components/widgets/product-box/product-box-five/product-box-five.ts", lineNumber: 31 });
})();

// src/app/shared/components/widgets/product-box/product-box-four/product-box-four.ts
var _c013 = (a0) => ["product", a0];
function ProductBoxFour_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.discount, "%");
  }
}
function ProductBoxFour_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c013, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.name, " ");
  }
}
function ProductBoxFour_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r2 = ctx.fill;
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-star", fill_r2 === 100 ? "-fill" : "-line"));
    \u0275\u0275classProp("filled", fill_r2 === 100);
  }
}
function ProductBoxFour_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.price), " ");
  }
}
var ProductBoxFour = class _ProductBoxFour {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.activeSlide = "0";
    this.options = {
      loop: true,
      nav: true,
      dots: false,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      responsive: {
        0: {
          items: 1
        }
      }
    };
    this.productMainThumbSlider = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      items: 1,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      autoplay: false,
      autoHeight: true,
      autoplayTimeout: 5e3,
      autoplayHoverPause: true,
      navSpeed: 300,
      responsive: {
        0: {
          items: 1
        }
      }
    };
    const config = inject(NgbRatingConfig);
    config.max = 5;
    config.readonly = true;
  }
  selectVariation(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxFour_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxFour)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxFour, selectors: [["app-product-box-four"]], inputs: { product: [1, "product"] }, decls: 19, vars: 20, consts: [[1, "basic-product", "theme-product-3"], [1, "img-wrapper"], [1, "ribbon-round"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product"], [1, "product-detail"], [1, "product-title", 3, "routerLink"], [1, "rating-w-count"], [1, "rating"], [3, "rateChange", "rate"], [1, "price"], [3, "text", "product", "iconClass", "enableModal"]], template: function ProductBoxFour_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, ProductBoxFour_Conditional_2_Template, 2, 1, "div", 2);
        \u0275\u0275element(3, "app-image-variant", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "app-product-hover-action", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275conditionalCreate(7, ProductBoxFour_Conditional_7_Template, 2, 4, "a", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "ngb-rating", 10);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxFour_Template_ngb_rating_rateChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product().rating_count, $event) || (ctx.product().rating_count = $event);
          return $event;
        });
        \u0275\u0275template(11, ProductBoxFour_ng_template_11_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "h4", 11);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "currencySymbol");
        \u0275\u0275conditionalCreate(17, ProductBoxFour_Conditional_17_Template, 3, 3, "del");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "app-cart-button", 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_6_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        \u0275\u0275classProp("sold-out", ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.stock_status) === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.discount) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("thumbnail", (tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.product_thumbnail)("gallery_images", (tmp_3_0 = ctx.product()) == null ? null : tmp_3_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product() && ((tmp_6_0 = ctx.product()) == null ? null : tmp_6_0.slug) ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product().rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", (tmp_8_0 = ctx.product()) == null ? null : tmp_8_0.reviews_count, ")");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, (tmp_9_0 = ctx.product()) == null ? null : tmp_9_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_10_0 = ctx.product()) == null ? null : tmp_10_0.discount) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap("add-cart-btn");
        \u0275\u0275property("text", "add_to_cart")("product", ctx.product())("iconClass", " ")("enableModal", true);
      }
    }, dependencies: [
      CarouselModule,
      NgbModule,
      NgbRating,
      TranslateModule,
      RouterModule,
      RouterLink,
      ProductHoverAction,
      CartButton,
      ProductBoxImageVariant,
      CurrencySymbolPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxFour, [{
    type: Component,
    args: [{ selector: "app-product-box-four", imports: [
      CarouselModule,
      NgbModule,
      TranslateModule,
      CurrencySymbolPipe,
      RouterModule,
      ProductHoverAction,
      Wishlist,
      CartButton,
      ProductBoxImageVariant
    ], template: `<div
  class="basic-product theme-product-3"
  [class.sold-out]="product()?.stock_status === 'out_of_stock'"
>
  <div class="img-wrapper">
    @if(product()?.discount){
    <div class="ribbon-round">{{ product()?.discount }}%</div>
    }
    <app-image-variant
      [thumbnail]="product()?.product_thumbnail!"
      [gallery_images]="product()?.product_galleries!"
      [product]="product()!"
    />
    <div class="cart-info">
      <app-product-hover-action [product]="product()" />
    </div>
  </div>
  <div class="product-detail">
    @if(product() && product()?.slug){
    <a class="product-title" [routerLink]="['product', product()?.slug]"> {{ product()?.name }} </a>
    }

    <div class="rating-w-count">
      <div class="rating">
        <ngb-rating [(rate)]="product()!.rating_count">
          <ng-template let-fill="fill" let-index="index">
            <i
              class="ri-star{{ fill === 100 ? '-fill' : '-line' }}"
              [class.filled]="fill === 100"
            ></i>
          </ng-template>
        </ngb-rating>
      </div>
      <span>({{ product()?.reviews_count }})</span>
    </div>
    <h4 class="price">
      {{ (product()?.sale_price) | currencySymbol }} @if(product()?.discount){
      <del> {{ (product()?.price) | currencySymbol }} </del>
      }
    </h4>
    <app-cart-button
      [text]="'add_to_cart'"
      [product]="product()"
      [class]="'add-cart-btn'"
      [iconClass]="' '"
      [enableModal]="true"
    />
  </div>
</div>
` }]
  }], () => [], { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxFour, { className: "ProductBoxFour", filePath: "src/app/shared/components/widgets/product-box/product-box-four/product-box-four.ts", lineNumber: 31 });
})();

// src/app/shared/components/widgets/product-box/widgets/product-box-variant-attributes/product-box-variant-attributes.ts
var _c014 = (a0) => ({ "disabled": a0 });
var _forTrack07 = ($index, $item) => $item.hex_color;
function ProductBoxVariantAttributes_For_1_Conditional_0_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const value_r5 = ctx_r3.$implicit;
    const \u0275$index_9_r6 = ctx_r3.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("selected", ctx_r2.variantIds.includes(value_r5.id) && !ctx_r2.soldOutAttributesIds.includes(value_r5.id))("value", \u0275$index_9_r6)("disabled", ctx_r2.soldOutAttributesIds.includes(value_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r5 == null ? null : value_r5.value, " ");
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductBoxVariantAttributes_For_1_Conditional_0_For_6_Conditional_0_Template, 2, 4, "option", 7);
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues && ctx_r2.attributeValues.includes(value_r5.id) ? 0 : -1);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 5, 0);
    \u0275\u0275listener("change", function ProductBoxVariantAttributes_For_1_Conditional_0_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const attribute_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, attribute_r2.attribute_values[$event.target.value]));
    });
    \u0275\u0275elementStart(2, "option", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, ProductBoxVariantAttributes_For_1_Conditional_0_For_6_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const attribute_r2 = ctx_r6.$implicit;
    const \u0275$index_1_r8 = ctx_r6.$index;
    \u0275\u0275property("id", \u0275\u0275interpolate1("input-state-", \u0275$index_1_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 4, "choose"), " ", attribute_r2 == null ? null : attribute_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Conditional_0_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r10 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r10.price);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Conditional_0_Conditional_4_Conditional_4_Template, 2, 1, "del");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, value_r10.sale_price));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.product.discount ? 4 : -1);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("mouseleave", function ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Conditional_0_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    });
    \u0275\u0275elementStart(1, "input", 10);
    \u0275\u0275listener("change", function ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Conditional_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const attribute_r2 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, attribute_r2.attribute_values[$event.target.value]));
    })("mouseover", function ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Conditional_0_Template_input_mouseover_1_listener() {
      \u0275\u0275restoreView(_r9);
      const value_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r10, "hover"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Conditional_0_Conditional_4_Template, 5, 4, "h5", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    const value_r10 = ctx_r10.$implicit;
    const \u0275$index_17_r12 = ctx_r10.$index;
    const \u0275$index_1_r8 = \u0275\u0275nextContext(2).$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", "radio-" + \u0275$index_1_r8 + "-" + \u0275$index_17_r12)("name", "radio-group-" + \u0275$index_1_r8)("value", \u0275$index_17_r12)("checked", ctx_r2.variantIds.includes(value_r10.id) && !ctx_r2.soldOutAttributesIds.includes(value_r10.id))("disabled", ctx_r2.soldOutAttributesIds.includes(value_r10.id))("ngClass", \u0275\u0275pureFunction1(9, _c014, ctx_r2.soldOutAttributesIds.includes(value_r10.id)));
    \u0275\u0275advance();
    \u0275\u0275property("for", "radio-" + \u0275$index_1_r8 + "-" + \u0275$index_17_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", value_r10 == null ? null : value_r10.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showPrice() ? 4 : -1);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Conditional_0_Template, 5, 11, "div", 8);
  }
  if (rf & 2) {
    const value_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues && ctx_r2.attributeValues.includes(value_r10.id) ? 0 : -1);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, ProductBoxVariantAttributes_For_1_Conditional_1_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_2_For_1_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currencySymbol");
  }
  if (rf & 2) {
    const value_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate2("", value_r14 == null ? null : value_r14.name, " / ", \u0275\u0275pipeBind1(1, 2, value_r14 == null ? null : value_r14.sale_price));
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_2_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "a");
    \u0275\u0275template(2, ProductBoxVariantAttributes_For_1_Conditional_2_For_1_Conditional_0_ng_template_2_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "button", 16)(5, "img", 17);
    \u0275\u0275listener("mouseover", function ProductBoxVariantAttributes_For_1_Conditional_2_For_1_Conditional_0_Template_img_mouseover_5_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r2.soldOutAttributesIds.includes(value_r14.id) && ctx_r2.setVariant(ctx_r2.product.variations, value_r14, "hover"));
    })("click", function ProductBoxVariantAttributes_For_1_Conditional_2_For_1_Conditional_0_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r14));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const tipContent_r15 = \u0275\u0275reference(3);
    const value_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r14.id) && !ctx_r2.soldOutAttributesIds.includes(value_r14.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c014, ctx_r2.soldOutAttributesIds.includes(value_r14.id)));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbTooltip", tipContent_r15);
    \u0275\u0275advance();
    \u0275\u0275property("src", (value_r14 == null ? null : value_r14.variation_image) ? value_r14 == null ? null : value_r14.variation_image == null ? null : value_r14.variation_image.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductBoxVariantAttributes_For_1_Conditional_2_For_1_Conditional_0_Template, 6, 7, "li", 14);
  }
  if (rf & 2) {
    const value_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues && ctx_r2.attributeValues.includes(value_r14.id) ? 0 : -1);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductBoxVariantAttributes_For_1_Conditional_2_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_3_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275listener("mouseleave", function ProductBoxVariantAttributes_For_1_Conditional_3_For_2_Conditional_0_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    })("click", function ProductBoxVariantAttributes_For_1_Conditional_3_For_2_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const value_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r17));
    })("mouseover", function ProductBoxVariantAttributes_For_1_Conditional_3_For_2_Conditional_0_Template_li_mouseover_0_listener() {
      \u0275\u0275restoreView(_r16);
      const value_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r17, "hover"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", value_r17.hex_color);
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r17.id) && !ctx_r2.soldOutAttributesIds.includes(value_r17.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c014, ctx_r2.soldOutAttributesIds.includes(value_r17.id)));
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductBoxVariantAttributes_For_1_Conditional_3_For_2_Conditional_0_Template, 1, 7, "li", 18);
  }
  if (rf & 2) {
    const value_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues && ctx_r2.attributeValues.includes(value_r17.id) ? 0 : -1);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, ProductBoxVariantAttributes_For_1_Conditional_3_For_2_Template, 1, 1, null, null, _forTrack07);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("circle general-variant ", attribute_r2 == null ? null : attribute_r2.style));
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 24);
    \u0275\u0275listener("click", function ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20));
    })("mouseover", function ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template_img_mouseover_0_listener() {
      \u0275\u0275restoreView(_r19);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20, "hover"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", (value_r20 == null ? null : value_r20.variation_image) ? value_r20 == null ? null : value_r20.variation_image == null ? null : value_r20.variation_image.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 25);
    \u0275\u0275listener("mouseover", function ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template_app_button_mouseover_0_listener() {
      \u0275\u0275restoreView(_r21);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20, "hover"));
    })("click", function ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "value_btn")("type", "button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r20 == null ? null : value_r20.value, " ");
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 21);
    \u0275\u0275listener("mouseleave", function ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    });
    \u0275\u0275conditionalCreate(1, ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template, 1, 1, "img", 22)(2, ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template, 2, 4, "app-button", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext().$implicit;
    const attribute_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r20.id) && !ctx_r2.soldOutAttributesIds.includes(value_r20.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c014, ctx_r2.soldOutAttributesIds.includes(value_r20.id)));
    \u0275\u0275advance();
    \u0275\u0275conditional((attribute_r2 == null ? null : attribute_r2.style) === "image" ? 1 : 2);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Conditional_0_Template, 3, 6, "li", 20);
  }
  if (rf & 2) {
    const value_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues && ctx_r2.attributeValues.includes(value_r20.id) ? 0 : -1);
  }
}
function ProductBoxVariantAttributes_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, ProductBoxVariantAttributes_For_1_Conditional_4_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("general-variant ", attribute_r2 == null ? null : attribute_r2.style));
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function ProductBoxVariantAttributes_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductBoxVariantAttributes_For_1_Conditional_0_Template, 7, 6, "select", 2)(1, ProductBoxVariantAttributes_For_1_Conditional_1_Template, 3, 0, "div", 3)(2, ProductBoxVariantAttributes_For_1_Conditional_2_Template, 2, 0)(3, ProductBoxVariantAttributes_For_1_Conditional_3_Template, 3, 3, "ul", 4)(4, ProductBoxVariantAttributes_For_1_Conditional_4_Template, 3, 3, "ul", 4);
  }
  if (rf & 2) {
    const attribute_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((attribute_r2 == null ? null : attribute_r2.style) === "dropdown" || ctx_r2.isAllVariantStyleDropdown() ? 0 : (attribute_r2 == null ? null : attribute_r2.style) === "radio" ? 1 : attribute_r2.style === "image_price" ? 2 : (attribute_r2 == null ? null : attribute_r2.style) === "color" ? 3 : 4);
  }
}
var ProductBoxVariantAttributes = class _ProductBoxVariantAttributes {
  constructor() {
    this.modal = inject(NgbModal);
    this.attributes = [];
    this.isAllVariantStyleDropdown = input(false, ...ngDevMode ? [{ debugName: "isAllVariantStyleDropdown" }] : []);
    this.owlCar = input(...ngDevMode ? [void 0, { debugName: "owlCar" }] : []);
    this.showPrice = input(...ngDevMode ? [void 0, { debugName: "showPrice" }] : []);
    this.showVariableType = input([
      "color",
      "rectangle",
      "circle",
      "radio",
      "dropdown",
      "image"
    ], ...ngDevMode ? [{ debugName: "showVariableType" }] : []);
    this.selectVariation = output();
    this.cartItem$ = inject(Store).select(CartState.cartItems);
    this.productQty = 1;
    this.attributeValues = [];
    this.variantIds = [];
    this.hoverVariantIds = [];
    this.soldOutAttributesIds = [];
    this.selectedOptions = [];
    this.break = false;
  }
  ngOnChanges(changes) {
    setTimeout(() => {
      if (changes["product"] && changes["product"].currentValue) {
        this.product = changes["product"]?.currentValue;
      }
      if (changes["attributes"] && changes["attributes"].currentValue) {
        this.attributes = changes["attributes"]?.currentValue;
      }
      this.cartItem$.subscribe((items) => {
        this.cartItem = items.find((item) => item.product.id == this.product.id);
      });
      this.checkVariantAvailability(this.product);
    }, 0);
    if (changes["showPrice"]?.currentValue) {
      this.product.attributes?.forEach((attribute) => {
        attribute.attribute_values.forEach((value) => {
          this.product.variations.forEach((variation) => {
            variation.attribute_values.forEach((att) => {
              if (att.id !== value.id)
                value["price"] = variation.price;
              value["sale_price"] = variation.sale_price;
            });
          });
        });
      });
    }
  }
  checkVariantAvailability(product) {
    this.selectedOptions = [];
    this.attributeValues = [];
    this.selectedVariation = null;
    this.hoverVariation = null;
    product?.variations?.forEach((variation) => {
      variation?.attribute_values?.filter((attribute_value) => {
        if (this.attributeValues.indexOf(attribute_value?.id) === -1)
          this.attributeValues.push(attribute_value?.id);
      });
    });
    if (this.cartItem?.variation) {
      this.cartItem?.variation.attribute_values.filter((attribute_val) => {
        this.setVariant(this.product.variations, attribute_val);
      });
    }
    if (!this.cartItem) {
      for (const attribute of product?.attributes ?? []) {
        if (this.attributeValues?.length && attribute?.attribute_values?.length) {
          let values = [];
          for (const value of attribute.attribute_values) {
            if (values.indexOf(value.id) === -1)
              values.push(value.id);
            if (this.attributeValues.includes(value.id)) {
              this.setVariant(product.variations, value);
              if (this.break)
                break;
            }
          }
        }
      }
    }
    product.variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      product?.attributes.filter((attribute) => {
        if (attribute.style == "image" || attribute.style == "image_price") {
          attribute.attribute_values.filter((attribute_value) => {
            if (this.attributeValues.includes(attribute_value.id)) {
              if (attrValues.includes(attribute_value.id)) {
                attribute_value.variation_image = variation.variation_image;
                attribute_value.name = variation.name;
                attribute_value.sale_price = variation.sale_price;
              }
            }
          });
        }
      });
    });
  }
  setVariant(variations, value, event) {
    const index = this.selectedOptions.findIndex((item) => Number(item.attribute_id) === Number(value?.attribute_id));
    this.soldOutAttributesIds = [];
    if (index === -1) {
      this.selectedOptions.push({
        id: Number(value?.id),
        attribute_id: Number(value?.attribute_id)
      });
    } else {
      this.selectedOptions[index].id = value?.id;
    }
    variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      this.variantIds = this.selectedOptions?.map((variants) => variants?.id);
      let doValuesMatch = attrValues.length === this.selectedOptions.length && attrValues.every((value2) => this.variantIds.includes(value2));
      const productValue = this.product;
      if (doValuesMatch) {
        this.selectedVariation = variation;
        this.product["quantity"] = this.selectedVariation ? this.selectedVariation?.quantity : this.product?.quantity;
        productValue["sku"] = this.selectedVariation ? this.selectedVariation?.sku : productValue?.sku;
        productValue["sale_price"] = this.selectedVariation ? this.selectedVariation?.sale_price : productValue?.sale_price;
        const owlCar = this.owlCar();
        if (owlCar && this.selectedVariation.variation_image) {
          owlCar.to(this.selectedVariation.variation_image.id.toString());
        }
        this.checkStockAvailable();
      }
      if (variation.stock_status == "out_of_stock" || !variation.status || !productValue.status) {
        variation?.attribute_values.filter((attr_value) => {
          if (attrValues.some((value2) => this.variantIds.includes(value2))) {
            if (attrValues.every((value2) => this.variantIds.includes(value2))) {
              this.soldOutAttributesIds.push(attr_value.id);
            } else if (!this.variantIds.includes(attr_value.id)) {
              this.soldOutAttributesIds.push(attr_value.id);
            }
          } else if (attrValues.length == 1 && attrValues.includes(attr_value.id)) {
            this.soldOutAttributesIds.push(attr_value.id);
          }
        });
      }
    });
    this.product?.attributes.filter((attribute) => {
      attribute.attribute_values.filter((a_value) => {
        if (a_value.id == value.id) {
          attribute.selected_value = a_value.value;
        }
      });
    });
    if (this.selectedVariation && this.selectedVariation?.status && this.selectedVariation.stock_status == "in_stock") {
      this.break = true;
    } else {
      this.break = false;
    }
    if (event !== "hover") {
      this.hoverVariantIds = this.variantIds;
      this.hoverVariation = this.selectedVariation;
    }
    if (this.selectedVariation) {
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  checkStockAvailable() {
    if (this.selectedVariation) {
      this.selectedVariation["stock_status"] = this.selectedVariation?.quantity < this.productQty ? "out_of_stock" : "in_stock";
    } else {
      this.product["stock_status"] = this.product?.quantity < this.productQty ? "out_of_stock" : "in_stock";
    }
  }
  removeVariation() {
    this.variantIds = this.hoverVariantIds;
    this.selectedVariation = this.hoverVariation;
    if (this.selectedVariation) {
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  openSizeChartModal(image) {
    const sizeChart = this.modal.open(SizeChartModal, { size: "lg", centered: true });
    sizeChart.componentInstance.image = image;
  }
  static {
    this.\u0275fac = function ProductBoxVariantAttributes_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxVariantAttributes)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxVariantAttributes, selectors: [["app-product-box-variant-attributes"]], inputs: { product: "product", attributes: "attributes", isAllVariantStyleDropdown: [1, "isAllVariantStyleDropdown"], owlCar: [1, "owlCar"], showPrice: [1, "showPrice"], showVariableType: [1, "showVariableType"] }, outputs: { selectVariation: "selectVariation" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [["selectedValue", ""], ["tipContent", ""], [1, "form-control", "form-select", 3, "id"], [1, "d-flex", "digital-price"], [3, "class"], [1, "form-control", "form-select", 3, "change", "id"], ["selected", "", "disabled", ""], [3, "selected", "value", "disabled"], [1, "form-check"], [1, "form-check", 3, "mouseleave"], ["type", "radio", 1, "form-check-input", 3, "change", "mouseover", "id", "name", "value", "checked", "disabled", "ngClass"], [1, "form-check-label", "mb-0", 3, "for"], [1, "sold", "text-content", "ms-auto"], [1, "theme-color", "price"], [1, "", 3, "active", "ngClass"], [1, "", 3, "ngClass"], [3, "ngbTooltip"], ["alt", "img", 2, "width", "50px", 3, "mouseover", "click", "src"], ["placement", "top", 3, "active", "ngClass", "background-color"], ["placement", "top", 3, "mouseleave", "click", "mouseover", "ngClass"], [3, "active", "ngClass"], [3, "mouseleave", "ngClass"], ["alt", "img", 3, "src"], [3, "id", "type", "spinner"], ["alt", "img", 3, "click", "mouseover", "src"], [3, "mouseover", "click", "id", "type", "spinner"]], template: function ProductBoxVariantAttributes_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, ProductBoxVariantAttributes_For_1_Template, 5, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.attributes);
      }
    }, dependencies: [TranslateModule, Button, NgbTooltip, NgClass, CurrencySymbolPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxVariantAttributes, [{
    type: Component,
    args: [{ selector: "app-product-box-variant-attributes", imports: [CurrencySymbolPipe, TranslateModule, Button, NgbTooltip, NgClass], template: `@for(attribute of attributes; track i;let i = $index){ @if(attribute?.style === 'dropdown' ||
isAllVariantStyleDropdown()){
<select
  id="input-state-{{i}}"
  class="form-control form-select"
  #selectedValue
  (change)="setVariant(product.variations, attribute.attribute_values[$any($event.target).value])"
>
  <option selected disabled>{{ 'choose' | translate }} {{ attribute?.name }}</option>
  @for(value of attribute.attribute_values; track attributeIndex; let attributeIndex = $index;){
  @if(attributeValues && attributeValues.includes(value.id)){
  <option
    [selected]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
    [value]="attributeIndex"
    [disabled]="soldOutAttributesIds.includes(value.id)"
  >
    {{ value?.value }}
  </option>
  } }
</select>
} @else if(attribute?.style === 'radio'){
<div class="d-flex digital-price">
  @for(value of attribute.attribute_values; ; track attributeIndex; let attributeIndex = $index;){
  @if(attributeValues && attributeValues.includes(value.id)){
  <div class="form-check" (mouseleave)="removeVariation()">
    <input
      type="radio"
      class="form-check-input"
      [id]="'radio-' + i + '-' + attributeIndex"
      [name]="'radio-group-' + i"
      [value]="attributeIndex"
      [checked]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
      [disabled]="soldOutAttributesIds.includes(value.id)"
      [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
      (change)="setVariant(product.variations, attribute.attribute_values[$any($event.target).value])"
      (mouseover)="setVariant(product.variations, value, 'hover')"
    />
    <label [for]="'radio-' + i + '-' + attributeIndex" class="form-check-label mb-0"
      >{{ value?.value }}
    </label>
    @if(showPrice()){
    <h5 class="sold text-content ms-auto">
      <span class="theme-color price">{{ value.sale_price | currencySymbol }}</span>
      @if(product.discount){
      <del>{{ value.price }}</del>
      }
    </h5>
    }
  </div>
  } }
</div>
} @else if(attribute.style === 'image_price'){ @for(value of attribute.attribute_values; ; track
attributeIndex; let attributeIndex = $index;){ @if(attributeValues &&
attributeValues.includes(value.id)){

<li
  class=""
  [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
  [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
>
  <a>
    <ng-template #tipContent
      >{{ value?.name }} / {{ value?.sale_price | currencySymbol }}</ng-template
    >
    <button [ngbTooltip]="tipContent">
      <img
        style="width: 50px"
        [src]="value?.variation_image ? value?.variation_image?.original_url : 'assets/images/placeholder/product.png'"
        (mouseover)="!soldOutAttributesIds.includes(value.id) && setVariant(product.variations, value, 'hover')"
        (click)="setVariant(product.variations, value)"
        alt="img"
      />
    </button>
  </a>
</li>
} } } @else if(attribute?.style === 'color'){
<ul class="circle general-variant {{attribute?.style}}">
  @for(value of attribute.attribute_values; track value.hex_color){ @if(attributeValues &&
  attributeValues.includes(value.id)){
  <li
    [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
    [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
    placement="top"
    (mouseleave)="removeVariation()"
    [style.background-color]="value.hex_color"
    (click)="setVariant(product.variations, value)"
    (mouseover)="setVariant(product.variations, value, 'hover')"
  ></li>
  } }
</ul>
}@else {
<ul class="general-variant {{attribute?.style}}">
  @for(value of attribute.attribute_values; track attributeIndex; let attributeIndex = $index;){
  @if(attributeValues && attributeValues.includes(value.id)){
  <li
    [class.active]="variantIds.includes(value.id) && !soldOutAttributesIds.includes(value.id)"
    [ngClass]="{ 'disabled': soldOutAttributesIds.includes(value.id) }"
    (mouseleave)="removeVariation()"
  >
    @if(attribute?.style === 'image'){
    <img
      [src]="value?.variation_image ? value?.variation_image?.original_url : 'assets/images/placeholder/product.png'"
      (click)="setVariant(product.variations, value)"
      (mouseover)="setVariant(product.variations, value, 'hover')"
      alt="img"
    />
    }@else {
    <app-button
      [id]="'value_btn'"
      [type]="'button'"
      [spinner]="false"
      (mouseover)="setVariant(product.variations, value, 'hover')"
      (click)="setVariant(product.variations, value)"
    >
      {{ value?.value }}
    </app-button>
    }
  </li>
  } }
</ul>
} }
` }]
  }], null, { product: [{
    type: Input
  }], attributes: [{
    type: Input
  }], isAllVariantStyleDropdown: [{ type: Input, args: [{ isSignal: true, alias: "isAllVariantStyleDropdown", required: false }] }], owlCar: [{ type: Input, args: [{ isSignal: true, alias: "owlCar", required: false }] }], showPrice: [{ type: Input, args: [{ isSignal: true, alias: "showPrice", required: false }] }], showVariableType: [{ type: Input, args: [{ isSignal: true, alias: "showVariableType", required: false }] }], selectVariation: [{ type: Output, args: ["selectVariation"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxVariantAttributes, { className: "ProductBoxVariantAttributes", filePath: "src/app/shared/components/widgets/product-box/widgets/product-box-variant-attributes/product-box-variant-attributes.ts", lineNumber: 25 });
})();

// src/app/shared/components/widgets/product-box/product-box-horizontal/product-box-horizontal.ts
var _c015 = (a0) => ["/product/", a0];
var _c17 = () => [];
var _c23 = (a0) => ["/brand", a0];
function ProductBoxHorizontal_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "h5", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c23, (tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.brand == null ? null : tmp_2_0.brand.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.product()) == null ? null : tmp_3_0.brand == null ? null : tmp_3_0.brand.name);
  }
}
function ProductBoxHorizontal_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.short_description);
  }
}
function ProductBoxHorizontal_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275element(2, "app-image-variant", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275conditionalCreate(4, ProductBoxHorizontal_Conditional_0_Conditional_4_Template, 3, 4, "a", 5);
    \u0275\u0275elementStart(5, "a", 6)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ProductBoxHorizontal_Conditional_0_Conditional_8_Template, 2, 1, "p");
    \u0275\u0275elementStart(9, "app-product-box-variant-attributes", 7);
    \u0275\u0275listener("selectVariation", function ProductBoxHorizontal_Conditional_0_Template_app_product_box_variant_attributes_selectVariation_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedVariant($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "app-cart-button", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("thumbnail", ctx_r1.selectedVariation && ctx_r1.selectedVariation.variation_image ? ctx_r1.selectedVariation.variation_image : (tmp_1_0 = ctx_r1.product()) == null ? null : tmp_1_0.product_thumbnail)("gallery_images", ctx_r1.selectedVariation && ctx_r1.selectedVariation.variation_image ? ctx_r1.selectedVariation.variation_image : (tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.product_galleries)("product", ctx_r1.product());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r1.product()) == null ? null : tmp_4_0.brand) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c015, (tmp_5_0 = ctx_r1.product()) == null ? null : tmp_5_0.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedVariation ? ctx_r1.selectedVariation.name : (tmp_6_0 = ctx_r1.product()) == null ? null : tmp_6_0.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r1.product()) == null ? null : tmp_7_0.short_description) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r1.product())("attributes", ((tmp_9_0 = ctx_r1.product()) == null ? null : tmp_9_0.attributes) || \u0275\u0275pureFunction0(16, _c17));
    \u0275\u0275advance();
    \u0275\u0275classMap("btn gradient-btn");
    \u0275\u0275property("text", "Add To Cart")("product", ctx_r1.product())("selectedVariation", ctx_r1.selectedVariation);
  }
}
function ProductBoxHorizontal_Conditional_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r4 = ctx.fill;
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-star", fill_r4 === 100 ? "-fill" : "-line"));
    \u0275\u0275classProp("filled", fill_r4 === 100);
  }
}
function ProductBoxHorizontal_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currencySymbol");
    \u0275\u0275elementStart(2, "del");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 2, (tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.sale_price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, (tmp_3_0 = ctx_r1.product()) == null ? null : tmp_3_0.price));
  }
}
function ProductBoxHorizontal_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currencySymbol");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, (tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.price), " ");
  }
}
function ProductBoxHorizontal_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 10);
    \u0275\u0275element(2, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "ngb-rating", 14);
    \u0275\u0275twoWayListener("rateChange", function ProductBoxHorizontal_Conditional_1_Template_ngb_rating_rateChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product().rating_count, $event) || (ctx_r1.product().rating_count = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(6, ProductBoxHorizontal_Conditional_1_ng_template_6_Template, 1, 5, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 6)(8, "h6");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h4");
    \u0275\u0275conditionalCreate(11, ProductBoxHorizontal_Conditional_1_Conditional_11_Template, 5, 6)(12, ProductBoxHorizontal_Conditional_1_Conditional_12_Template, 2, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c015, (tmp_1_0 = ctx_r1.product()) == null ? null : tmp_1_0.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", ((tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.product_thumbnail) ? (tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.product_thumbnail == null ? null : tmp_2_0.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", (tmp_3_0 = ctx_r1.product()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("rate", ctx_r1.product().rating_count);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c015, (tmp_5_0 = ctx_r1.product()) == null ? null : tmp_5_0.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.product()) == null ? null : tmp_6_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_7_0 = ctx_r1.product()) == null ? null : tmp_7_0.discount) ? 11 : 12);
  }
}
var ProductBoxHorizontal = class _ProductBoxHorizontal {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.product_box_style = input(...ngDevMode ? [void 0, { debugName: "product_box_style" }] : []);
    const config = inject(NgbRatingConfig);
    config.max = 5;
    config.readonly = true;
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxHorizontal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxHorizontal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxHorizontal, selectors: [["app-product-box-horizontal"]], inputs: { product: [1, "product"], product_box_style: [1, "product_box_style"] }, decls: 2, vars: 1, consts: [[1, "deal-box"], [1, "media"], [1, "deal-image"], [3, "thumbnail", "gallery_images", "product"], [1, "deal-content"], [1, "product-title", 3, "routerLink"], [3, "routerLink"], [3, "selectVariation", "product", "attributes"], [3, "text", "product", "selectedVariation"], [1, "gradient-text"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "img-fluid", 3, "src", "alt"], [1, "media-body", "align-self-center"], [1, "rating"], [3, "rateChange", "rate"]], template: function ProductBoxHorizontal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ProductBoxHorizontal_Conditional_0_Template, 11, 17, "div", 0)(1, ProductBoxHorizontal_Conditional_1_Template, 13, 11, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.product_box_style() === "single_product" ? 0 : 1);
      }
    }, dependencies: [
      NgbModule,
      NgbRating,
      RouterModule,
      RouterLink,
      ProductBoxVariantAttributes,
      ProductBoxImageVariant,
      CartButton,
      CurrencySymbolPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxHorizontal, [{
    type: Component,
    args: [{ selector: "app-product-box-horizontal", imports: [
      NgbModule,
      CurrencySymbolPipe,
      RouterModule,
      ProductBoxVariantAttributes,
      ProductBoxImageVariant,
      CartButton
    ], template: `@if(product_box_style() === 'single_product'){
<div class="deal-box">
  <div class="deal-image">
    <app-image-variant
      [thumbnail]="selectedVariation && selectedVariation.variation_image ? selectedVariation.variation_image! : product()?.product_thumbnail!"
      [gallery_images]="selectedVariation && selectedVariation.variation_image ? selectedVariation.variation_image! : product()?.product_galleries!"
      [product]="product()!"
    />
  </div>
  <div class="deal-content">
    @if(product()?.brand){
    <a class="product-title" [routerLink]="['/brand', product()?.brand?.slug]">
      <h5 class="gradient-text">{{ product()?.brand?.name }}</h5>
    </a>
    }
    <a [routerLink]="['/product/', product()?.slug]">
      <h2>{{ selectedVariation ? selectedVariation.name : product()?.name }}</h2>
    </a>

    @if(product()?.short_description){
    <p>{{ product()?.short_description }}</p>
    }

    <app-product-box-variant-attributes
      [product]="product()!"
      [attributes]="product()?.attributes || []"
      (selectVariation)="selectedVariant($event)"
    />

    <app-cart-button
      [class]="'btn gradient-btn'"
      [text]="'Add To Cart'"
      [product]="product()"
      [selectedVariation]="selectedVariation"
    />
  </div>
</div>
}@else {
<div class="media">
  <a href="javascript:void(0)" [routerLink]="['/product/', product()?.slug]">
    <img
      class="img-fluid"
      [src]="product()?.product_thumbnail ? product()?.product_thumbnail?.original_url : 'assets/images/placeholder/product.png'"
      [alt]="product()?.name"
    />
  </a>
  <div class="media-body align-self-center">
    <div class="rating">
      <ngb-rating [(rate)]="product()!.rating_count">
        <ng-template let-fill="fill" let-index="index">
          <i
            class="ri-star{{ fill === 100 ? '-fill' : '-line' }}"
            [class.filled]="fill === 100"
          ></i>
        </ng-template>
      </ngb-rating>
    </div>
    <a [routerLink]="['/product/', product()?.slug]">
      <h6>{{ product()?.name }}</h6>
    </a>
    <h4>
      @if(product()?.discount){ {{ product()?.sale_price | currencySymbol }}
      <del>{{ product()?.price | currencySymbol }}</del>
      }@else{ {{ product()?.price | currencySymbol }} }
    </h4>
  </div>
</div>
}
` }]
  }], () => [], { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], product_box_style: [{ type: Input, args: [{ isSignal: true, alias: "product_box_style", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxHorizontal, { className: "ProductBoxHorizontal", filePath: "src/app/shared/components/widgets/product-box/product-box-horizontal/product-box-horizontal.ts", lineNumber: 25 });
})();

// src/app/shared/components/widgets/product-box/product-box-nine/product-box-nine.ts
var _c016 = (a0) => ["/product/", a0];
var _c18 = () => [];
var _c24 = () => ["image"];
function ProductBoxNine_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 5)(1, "app-display-variant-attributes", 13);
    \u0275\u0275listener("selectVariation", function ProductBoxNine_Conditional_5_Template_app_display_variant_attributes_selectVariation_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedVariant($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r1.product())("attributes", ((tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.attributes) || \u0275\u0275pureFunction0(3, _c18))("showVariableType", \u0275\u0275pureFunction0(4, _c24));
  }
}
function ProductBoxNine_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, (tmp_1_0 = ctx_r1.product()) == null ? null : tmp_1_0.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.discount, "% Off ");
  }
}
function ProductBoxNine_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r3 = ctx.fill;
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-star", fill_r3 === 100 ? "-fill" : "-line"));
    \u0275\u0275classProp("filled", fill_r3 === 100);
  }
}
var ProductBoxNine = class _ProductBoxNine {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    const config = inject(NgbRatingConfig);
    config.max = 5;
    config.readonly = true;
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxNine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxNine)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxNine, selectors: [["app-product-box-nine"]], inputs: { product: [1, "product"] }, decls: 20, vars: 21, consts: [[1, "basic-product", "theme-product-8"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product"], [1, "general-variant", "thumbnail"], [1, "product-detail"], ["href", "javascript:void(0)", 1, "product-title", 3, "routerLink"], [1, "price"], [1, "rating-w-count", "mb-0"], [1, "rating"], [3, "rateChange", "rate"], [3, "product", "enableModal"], [3, "selectVariation", "product", "attributes", "showVariableType"], [1, "discounted-price"]], template: function ProductBoxNine_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "app-product-hover-action", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ProductBoxNine_Conditional_5_Template, 2, 5, "ul", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "a", 7);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h4", 8);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "currencySymbol");
        \u0275\u0275conditionalCreate(12, ProductBoxNine_Conditional_12_Template, 5, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "ngb-rating", 11);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxNine_Template_ngb_rating_rateChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product().rating_count, $event) || (ctx.product().rating_count = $event);
          return $event;
        });
        \u0275\u0275template(16, ProductBoxNine_ng_template_16_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "app-cart-button", 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_11_0;
        \u0275\u0275classProp("sold-out", ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.stock_status) === "out-of-stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation ? ctx.selectedVariation.variation_image : (tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.product_thumbnail)("gallery_images", (tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_5_0 = ctx.product()) == null ? null : tmp_5_0.product_galleries == null ? null : tmp_5_0.product_galleries.length) ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c016, (tmp_6_0 = ctx.product()) == null ? null : tmp_6_0.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx.product()) == null ? null : tmp_7_0.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 17, (tmp_8_0 = ctx.product()) == null ? null : tmp_8_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_9_0 = ctx.product()) == null ? null : tmp_9_0.discount) ? 12 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product().rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", (tmp_11_0 = ctx.product()) == null ? null : tmp_11_0.reviews_count, ")");
        \u0275\u0275advance();
        \u0275\u0275classMap("add-round-btn");
        \u0275\u0275property("product", ctx.product())("enableModal", true);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      TranslateModule,
      NgbModule,
      NgbRating,
      ProductHoverAction,
      DisplayVariantAttributes,
      CartButton,
      ProductBoxImageVariant,
      CurrencySymbolPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxNine, [{
    type: Component,
    args: [{ selector: "app-product-box-nine", imports: [
      RouterModule,
      CurrencySymbolPipe,
      TranslateModule,
      NgbModule,
      ProductHoverAction,
      DisplayVariantAttributes,
      CartButton,
      DisplayVariantAttributes,
      ProductBoxImageVariant,
      Wishlist
    ], template: `<div
  class="basic-product theme-product-8"
  [class.sold-out]="product()?.stock_status === 'out-of-stock'"
>
  <div class="img-wrapper">
    <app-image-variant
      [thumbnail]="selectedVariation ? selectedVariation.variation_image! : product()?.product_thumbnail!"
      [gallery_images]="product()?.product_galleries!"
      [product]="product()!"
    />
    <div class="cart-info">
      <app-product-hover-action [product]="product()" />
    </div>
    @if(product()?.product_galleries?.length){
    <ul class="general-variant thumbnail">
      <app-display-variant-attributes
        [product]="product()!"
        [attributes]="product()?.attributes || []"
        [showVariableType]="['image']"
        (selectVariation)="selectedVariant($event!)"
      />
    </ul>
    }
  </div>
  <div class="product-detail">
    <a
      href="javascript:void(0)"
      class="product-title"
      [routerLink]="['/product/', product()?.slug]"
    >
      {{ product()?.name }}
    </a>
    <h4 class="price">
      {{ (product()?.sale_price) | currencySymbol }} @if(product()?.discount){
      <del> {{ (product()?.price) | currencySymbol }} </del>
      <span class="discounted-price"> {{ product()?.discount }}% Off </span>
      }
    </h4>
    <div class="rating-w-count mb-0">
      <div class="rating">
        <ngb-rating [(rate)]="product()!.rating_count">
          <ng-template let-fill="fill" let-index="index">
            <i
              class="ri-star{{ fill === 100 ? '-fill' : '-line' }}"
              [class.filled]="fill === 100"
            ></i>
          </ng-template>
        </ngb-rating>
      </div>
      <span>({{ product()?.reviews_count }})</span>
    </div>
    <app-cart-button [product]="product()" [class]="'add-round-btn'" [enableModal]="true" />
  </div>
</div>
` }]
  }], () => [], { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxNine, { className: "ProductBoxNine", filePath: "src/app/shared/components/widgets/product-box/product-box-nine/product-box-nine.ts", lineNumber: 32 });
})();

// src/app/shared/components/widgets/product-box/product-box-one/product-box-one.ts
var _c017 = (a0) => ["/product", a0];
var _c19 = () => [];
var _c25 = (a0) => ["/brand", a0];
function ProductBoxOne_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sold_out"));
  }
}
function ProductBoxOne_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sale"));
  }
}
function ProductBoxOne_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "featured"));
  }
}
function ProductBoxOne_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "trending"));
  }
}
function ProductBoxOne_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c25, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.brand == null ? null : tmp_1_0.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.brand == null ? null : tmp_2_0.brand.name, " ");
  }
}
function ProductBoxOne_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.discount, "% ", \u0275\u0275pipeBind1(5, 5, "off"), " ");
  }
}
var ProductBoxOne = class _ProductBoxOne {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    const config = inject(NgbRatingConfig);
    config.max = 5;
    config.readonly = true;
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxOne_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxOne)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxOne, selectors: [["app-product-box-one"]], inputs: { product: [1, "product"] }, decls: 25, vars: 25, consts: [[1, "basic-product"], [1, "img-wrapper", "owl-slider"], [3, "thumbnail", "gallery_images", "product"], [1, "rating-label"], [1, "ri-star-s-fill"], [1, "cart-info"], [3, "product", "selectedVariation"], [3, "product"], [1, "trending-label"], [1, "out_of_stock"], [1, "product-detail"], [1, "product-title", 3, "routerLink"], [3, "routerLink"], [1, "price"], [3, "selectVariation", "product", "attributes"], [1, "discounted-price"]], template: function ProductBoxOne_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "app-cart-button", 6)(9, "app-product-hover-action", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "ul", 8);
        \u0275\u0275conditionalCreate(11, ProductBoxOne_Conditional_11_Template, 3, 3, "li", 9);
        \u0275\u0275conditionalCreate(12, ProductBoxOne_Conditional_12_Template, 3, 3, "li");
        \u0275\u0275conditionalCreate(13, ProductBoxOne_Conditional_13_Template, 3, 3, "li");
        \u0275\u0275conditionalCreate(14, ProductBoxOne_Conditional_14_Template, 3, 3, "li");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275conditionalCreate(16, ProductBoxOne_Conditional_16_Template, 2, 4, "a", 11);
        \u0275\u0275elementStart(17, "a", 12)(18, "h6");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "h4", 13);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "currencySymbol");
        \u0275\u0275conditionalCreate(23, ProductBoxOne_Conditional_23_Template, 6, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "app-product-box-variant-attributes", 14);
        \u0275\u0275listener("selectVariation", function ProductBoxOne_Template_app_product_box_variant_attributes_selectVariation_24_listener($event) {
          return ctx.selectedVariant($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_4_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_16_0;
        let tmp_18_0;
        \u0275\u0275classProp("sold-out", ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.stock_status) === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : (tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.product_thumbnail)("gallery_images", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : (tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate((tmp_4_0 = ctx.product()) == null ? null : tmp_4_0.reviews_count);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product())("selectedVariation", ctx.selectedVariation);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_8_0 = ctx.product()) == null ? null : tmp_8_0.stock_status) === "out_of_stock" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_9_0 = ctx.product()) == null ? null : tmp_9_0.is_sale_enable) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_10_0 = ctx.product()) == null ? null : tmp_10_0.is_featured) ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_11_0 = ctx.product()) == null ? null : tmp_11_0.is_trending) ? 14 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_12_0 = ctx.product()) == null ? null : tmp_12_0.brand) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c017, (tmp_13_0 = ctx.product()) == null ? null : tmp_13_0.slug));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.selectedVariation ? ctx.selectedVariation.name : (tmp_14_0 = ctx.product()) == null ? null : tmp_14_0.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 20, ctx.selectedVariation ? ctx.selectedVariation.sale_price : (tmp_15_0 = ctx.product()) == null ? null : tmp_15_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : (tmp_16_0 = ctx.product()) == null ? null : tmp_16_0.discount) ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product())("attributes", ((tmp_18_0 = ctx.product()) == null ? null : tmp_18_0.attributes) || \u0275\u0275pureFunction0(24, _c19));
      }
    }, dependencies: [
      NgbModule,
      RouterModule,
      RouterLink,
      TranslateModule,
      ProductHoverAction,
      ProductBoxVariantAttributes,
      CartButton,
      ProductBoxImageVariant,
      TranslatePipe,
      CurrencySymbolPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxOne, [{
    type: Component,
    args: [{ selector: "app-product-box-one", imports: [
      NgbModule,
      RouterModule,
      TranslateModule,
      CurrencySymbolPipe,
      ProductHoverAction,
      ProductBoxVariantAttributes,
      CartButton,
      ProductHoverAction,
      ProductBoxImageVariant
    ], template: `<div class="basic-product" [class.sold-out]="product()?.stock_status === 'out_of_stock'">
  <div class="img-wrapper owl-slider">
    <app-image-variant
      [thumbnail]="selectedVariation && selectedVariation.variation_image ? selectedVariation.variation_image! : product()?.product_thumbnail!"
      [gallery_images]="selectedVariation && selectedVariation.variation_image ? selectedVariation.variation_image! : product()?.product_galleries!"
      [product]="product()!"
    />

    <div class="rating-label">
      <i class="ri-star-s-fill"></i> <span>{{ product()?.reviews_count }}</span>
    </div>
    <div class="cart-info">
      <app-cart-button [product]="product()" [selectedVariation]="selectedVariation" />
      <app-product-hover-action [product]="product()" />
    </div>
    <ul class="trending-label">
      @if(product()?.stock_status === 'out_of_stock'){
      <li class="out_of_stock">{{ 'sold_out' | translate }}</li>
      } @if(product()?.is_sale_enable){
      <li>{{ 'sale' | translate }}</li>
      } @if(product()?.is_featured){
      <li>{{ 'featured' | translate }}</li>
      } @if(product()?.is_trending){
      <li>{{ 'trending' | translate }}</li>
      }
    </ul>
  </div>
  <div class="product-detail">
    @if(product()?.brand){
    <a class="product-title" [routerLink]="['/brand', product()?.brand?.slug]">
      {{ product()?.brand?.name }}
    </a>
    }
    <a [routerLink]="['/product', product()?.slug]">
      <h6>{{ selectedVariation ? selectedVariation.name : product()?.name }}</h6>
    </a>
    <h4 class="price">
      {{ (selectedVariation ? selectedVariation.sale_price : product()?.sale_price) | currencySymbol
      }} @if(selectedVariation ? selectedVariation.discount : product()?.discount){
      <del>
        {{ (selectedVariation ? selectedVariation.price : product()?.price) | currencySymbol }}
      </del>
      <span class="discounted-price">
        {{ selectedVariation ? selectedVariation.discount : product()?.discount }}% {{ 'off' |
        translate }}
      </span>
      }
    </h4>
    <app-product-box-variant-attributes
      [product]="product()!"
      [attributes]="product()?.attributes || []"
      (selectVariation)="selectedVariant($event)"
    />
  </div>
</div>
` }]
  }], () => [], { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxOne, { className: "ProductBoxOne", filePath: "src/app/shared/components/widgets/product-box/product-box-one/product-box-one.ts", lineNumber: 30 });
})();

// src/app/shared/components/widgets/product-box/product-box-seven/product-box-seven.ts
var _c018 = (a0) => ["/product/", a0];
function ProductBoxSeven_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.unit);
  }
}
function ProductBoxSeven_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sold_out"));
  }
}
function ProductBoxSeven_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sale"));
  }
}
function ProductBoxSeven_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "featured"));
  }
}
function ProductBoxSeven_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "trending"));
  }
}
function ProductBoxSeven_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r2 = ctx.fill;
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-star", fill_r2 === 100 ? "-fill" : "-line"));
    \u0275\u0275classProp("filled", fill_r2 === 100);
  }
}
function ProductBoxSeven_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.discount, "% ", \u0275\u0275pipeBind1(5, 5, "off"), " ");
  }
}
var ProductBoxSeven = class _ProductBoxSeven {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
  }
  static {
    this.\u0275fac = function ProductBoxSeven_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxSeven)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxSeven, selectors: [["app-product-box-seven"]], inputs: { product: [1, "product"] }, decls: 26, vars: 26, consts: [[1, "basic-product", "theme-product-6"], [1, "img-wrapper"], [1, "unit-label"], [1, "trending-label"], [1, "out_of_stock"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product"], [1, "product-detail"], ["href", "javascript:void(0)", 1, "product-title", 3, "routerLink"], [1, "rating-w-count"], [1, "rating"], [3, "rateChange", "rate"], [1, "price"], [1, "addtocart_btn"], [3, "product", "quantity", "text"], [1, "discounted-price"]], template: function ProductBoxSeven_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, ProductBoxSeven_Conditional_2_Template, 2, 1, "label", 2);
        \u0275\u0275elementStart(3, "ul", 3);
        \u0275\u0275conditionalCreate(4, ProductBoxSeven_Conditional_4_Template, 3, 3, "li", 4);
        \u0275\u0275conditionalCreate(5, ProductBoxSeven_Conditional_5_Template, 3, 3, "li");
        \u0275\u0275conditionalCreate(6, ProductBoxSeven_Conditional_6_Template, 3, 3, "li");
        \u0275\u0275conditionalCreate(7, ProductBoxSeven_Conditional_7_Template, 3, 3, "li");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "app-image-variant", 5);
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275element(10, "app-product-hover-action", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "ngb-rating", 12);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxSeven_Template_ngb_rating_rateChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product().rating_count, $event) || (ctx.product().rating_count = $event);
          return $event;
        });
        \u0275\u0275template(17, ProductBoxSeven_ng_template_17_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "h4", 13);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "currencySymbol");
        \u0275\u0275conditionalCreate(23, ProductBoxSeven_Conditional_23_Template, 6, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 14);
        \u0275\u0275element(25, "app-cart-button", 15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_15_0;
        \u0275\u0275classProp("sold-out", ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.stock_status) === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.unit) ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.stock_status) === "out_of_stock" ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_3_0 = ctx.product()) == null ? null : tmp_3_0.is_sale_enable) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_4_0 = ctx.product()) == null ? null : tmp_4_0.is_featured) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_5_0 = ctx.product()) == null ? null : tmp_5_0.is_trending) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("thumbnail", (tmp_6_0 = ctx.product()) == null ? null : tmp_6_0.product_thumbnail)("gallery_images", (tmp_7_0 = ctx.product()) == null ? null : tmp_7_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c018, (tmp_10_0 = ctx.product()) == null ? null : tmp_10_0.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (tmp_11_0 = ctx.product()) == null ? null : tmp_11_0.name, " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product().rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", (tmp_13_0 = ctx.product()) == null ? null : tmp_13_0.reviews_count, ")");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 22, (tmp_14_0 = ctx.product()) == null ? null : tmp_14_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_15_0 = ctx.product()) == null ? null : tmp_15_0.discount) ? 23 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("add-button add_cart");
        \u0275\u0275property("product", ctx.product())("quantity", true)("text", "Add to Cart");
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      TranslateModule,
      NgbModule,
      NgbRating,
      ProductHoverAction,
      CartButton,
      ProductBoxImageVariant,
      CurrencySymbolPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxSeven, [{
    type: Component,
    args: [{ selector: "app-product-box-seven", imports: [
      RouterModule,
      CurrencySymbolPipe,
      TranslateModule,
      NgbModule,
      ProductHoverAction,
      CartButton,
      ProductBoxImageVariant
    ], template: `<div
  class="basic-product theme-product-6"
  [class.sold-out]="product()?.stock_status === 'out_of_stock'"
>
  <div class="img-wrapper">
    @if(product()?.unit){
    <label class="unit-label">{{ product()?.unit }}</label>
    }

    <ul class="trending-label">
      @if(product()?.stock_status === 'out_of_stock'){
      <li class="out_of_stock">{{ 'sold_out' | translate }}</li>
      } @if(product()?.is_sale_enable){
      <li>{{ 'sale' | translate }}</li>
      } @if(product()?.is_featured){
      <li>{{ 'featured' | translate }}</li>
      } @if(product()?.is_trending){
      <li>{{ 'trending' | translate }}</li>
      }
    </ul>

    <app-image-variant
      [thumbnail]="product()?.product_thumbnail!"
      [gallery_images]="product()?.product_galleries!"
      [product]="product()!"
    />
    <div class="cart-info">
      <app-product-hover-action [product]="product()" />
    </div>
  </div>
  <div class="product-detail">
    <a
      href="javascript:void(0)"
      class="product-title"
      [routerLink]="['/product/', product()?.slug]"
    >
      {{ product()?.name }}
    </a>
    <div class="rating-w-count">
      <div class="rating">
        <ngb-rating [(rate)]="product()!.rating_count">
          <ng-template let-fill="fill" let-index="index">
            <i
              class="ri-star{{ fill === 100 ? '-fill' : '-line' }}"
              [class.filled]="fill === 100"
            ></i>
          </ng-template>
        </ngb-rating>
      </div>
      <span>({{ product()?.reviews_count }})</span>
    </div>
    <h4 class="price">
      {{ (product()?.sale_price) | currencySymbol }} @if(product()?.discount){
      <del> {{ (product()?.price) | currencySymbol }} </del>
      <span class="discounted-price"> {{ product()?.discount }}% {{ 'off' | translate }} </span>
      }
    </h4>
    <div class="addtocart_btn">
      <app-cart-button
        [product]="product()"
        [class]="'add-button add_cart'"
        [quantity]="true"
        [text]="'Add to Cart'"
      />
    </div>
  </div>
</div>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxSeven, { className: "ProductBoxSeven", filePath: "src/app/shared/components/widgets/product-box/product-box-seven/product-box-seven.ts", lineNumber: 27 });
})();

// src/app/shared/components/widgets/product-box/product-box-six/product-box-six.ts
var _c019 = (a0) => ["/product", a0];
var _c110 = (a0) => ["/brand", a0];
function ProductBoxSix_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-sale-timer", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("startDate", (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.sale_starts_at)("endDate", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.sale_expired_at);
  }
}
function ProductBoxSix_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_sale_enable) ? "sale" : ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_featured) ? "featured" : ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_trending) ? "trending" : ""));
  }
}
function ProductBoxSix_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c110, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.brand == null ? null : tmp_1_0.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.brand == null ? null : tmp_2_0.brand.name, " ");
  }
}
function ProductBoxSix_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r2 = ctx.fill;
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-star", fill_r2 === 100 ? "-fill" : "-line"));
    \u0275\u0275classProp("filled", fill_r2 === 100);
  }
}
function ProductBoxSix_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.discount, " % ", \u0275\u0275pipeBind1(5, 5, "off"), " ");
  }
}
var ProductBoxSix = class _ProductBoxSix {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxSix_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxSix)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxSix, selectors: [["app-product-box-six"]], inputs: { product: [1, "product"] }, decls: 24, vars: 19, consts: [[1, "basic-product", "theme-product-5"], [1, "img-wrapper"], [1, "d-none", "d-sm-flex"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product", "enableModal"], [3, "product"], [1, "rotate-label"], [1, "product-detail"], [1, "brand-w-color"], [1, "product-title", 3, "routerLink"], [1, "rating-w-count", "mb-0", "d-sm-inline-flex", "d-none"], [1, "rating"], [3, "rateChange", "rate"], [3, "routerLink"], [1, "price"], [3, "startDate", "endDate"], [1, "discounted-price"]], template: function ProductBoxSix_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, ProductBoxSix_Conditional_2_Template, 2, 2, "div", 2);
        \u0275\u0275element(3, "app-image-variant", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "app-cart-button", 5)(6, "app-product-hover-action", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, ProductBoxSix_Conditional_7_Template, 3, 3, "label", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275conditionalCreate(10, ProductBoxSix_Conditional_10_Template, 2, 4, "a", 10);
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "ngb-rating", 13);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxSix_Template_ngb_rating_rateChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product().rating_count, $event) || (ctx.product().rating_count = $event);
          return $event;
        });
        \u0275\u0275template(14, ProductBoxSix_ng_template_14_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "h6")(18, "a", 14);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "h4", 15);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "currencySymbol");
        \u0275\u0275conditionalCreate(23, ProductBoxSix_Conditional_23_Template, 6, 7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_14_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.sale_starts_at) && ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.sale_expired_at) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("thumbnail", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : (tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.product_thumbnail)("gallery_images", (tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product())("enableModal", true);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_7_0 = ctx.product()) == null ? null : tmp_7_0.is_trending) || ((tmp_7_0 = ctx.product()) == null ? null : tmp_7_0.is_sale_enable) || ((tmp_7_0 = ctx.product()) == null ? null : tmp_7_0.is_featured) ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_8_0 = ctx.product()) == null ? null : tmp_8_0.brand) ? 10 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product().rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", (tmp_10_0 = ctx.product()) == null ? null : tmp_10_0.reviews_count, ")");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c019, (tmp_11_0 = ctx.product()) == null ? null : tmp_11_0.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (tmp_12_0 = ctx.product()) == null ? null : tmp_12_0.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 15, ctx.selectedVariation ? ctx.selectedVariation.sale_price : (tmp_13_0 = ctx.product()) == null ? null : tmp_13_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : (tmp_14_0 = ctx.product()) == null ? null : tmp_14_0.discount) ? 23 : -1);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      NgbModule,
      NgbRating,
      ProductHoverAction,
      CartButton,
      SaleTimer,
      ProductBoxImageVariant,
      TranslateModule,
      CurrencySymbolPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxSix, [{
    type: Component,
    args: [{ selector: "app-product-box-six", imports: [
      RouterModule,
      CurrencySymbolPipe,
      NgbModule,
      ProductHoverAction,
      CartButton,
      SaleTimer,
      ProductBoxImageVariant,
      TranslateModule
    ], template: `<div class="basic-product theme-product-5">
  <div class="img-wrapper">
    @if(product()?.sale_starts_at && product()?.sale_expired_at) {
    <div class="d-none d-sm-flex">
      <app-sale-timer
        [startDate]="product()?.sale_starts_at"
        [endDate]="product()?.sale_expired_at"
      />
    </div>
    }
    <app-image-variant
      [thumbnail]="selectedVariation && selectedVariation.variation_image ? selectedVariation.variation_image! : product()?.product_thumbnail!"
      [gallery_images]="product()?.product_galleries!"
      [product]="product()!"
    />
    <div class="cart-info">
      <app-cart-button [product]="product()" [enableModal]="true" />
      <app-product-hover-action [product]="product()" />
    </div>

    @if(product()?.is_trending || product()?.is_sale_enable || product()?.is_featured){
    <label class="rotate-label"
      >{{ (product()?.is_sale_enable ? 'sale' : product()?.is_featured ? 'featured' :
      product()?.is_trending ? 'trending' : '' ) | translate }}</label
    >
    }
  </div>
  <div class="product-detail">
    <div class="brand-w-color">
      @if(product()?.brand){
      <a class="product-title" [routerLink]="['/brand' , product()?.brand?.slug ]">
        {{ product()?.brand?.name }}
      </a>
      }
      <div class="rating-w-count mb-0 d-sm-inline-flex d-none">
        <div class="rating">
          <ngb-rating [(rate)]="product()!.rating_count">
            <ng-template let-fill="fill" let-index="index">
              <i
                class="ri-star{{ fill === 100 ? '-fill' : '-line' }}"
                [class.filled]="fill === 100"
              ></i>
            </ng-template>
          </ngb-rating>
        </div>
        <span>({{ product()?.reviews_count }})</span>
      </div>
    </div>
    <h6>
      <a [routerLink]="['/product', product()?.slug ]"> {{ product()?.name }} </a>
    </h6>
    <h4 class="price">
      {{(selectedVariation ? selectedVariation.sale_price : product()?.sale_price) |
      currencySymbol}} @if(selectedVariation ? selectedVariation.discount : product()?.discount){
      <del>
        {{(selectedVariation ? selectedVariation.price : product()?.price) | currencySymbol}}
      </del>
      <span class="discounted-price">
        {{selectedVariation ? selectedVariation.discount : product()?.discount}} % {{ 'off' |
        translate }}
      </span>
      }
    </h4>
  </div>
</div>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxSix, { className: "ProductBoxSix", filePath: "src/app/shared/components/widgets/product-box/product-box-six/product-box-six.ts", lineNumber: 29 });
})();

// src/app/shared/components/widgets/product-box/product-box-ten/product-box-ten.ts
var _c020 = (a0) => ["/product/", a0];
var _c111 = (a0) => ["/brand", a0];
function ProductBoxTen_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_sale_enable) ? "sale-tag" : ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_featured) ? "featured-tag" : ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_trending) ? "trending-tag" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ((tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.is_sale_enable) ? "sale" : ((tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.is_featured) ? "featured" : ((tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.is_trending) ? "trending" : ""), " ");
  }
}
function ProductBoxTen_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("level2", (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_featured);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "on_sale"), " ");
  }
}
function ProductBoxTen_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c111, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.brand == null ? null : tmp_1_0.brand.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.brand == null ? null : tmp_2_0.brand.name);
  }
}
function ProductBoxTen_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.price), " ");
  }
}
function ProductBoxTen_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(4, 3, "save_up_to"), " ", (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.discount, "% ", \u0275\u0275pipeBind1(5, 5, "off"), " ");
  }
}
var ProductBoxTen = class _ProductBoxTen {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
  }
  static {
    this.\u0275fac = function ProductBoxTen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxTen)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxTen, selectors: [["app-product-box-ten"]], inputs: { product: [1, "product"] }, decls: 27, vars: 22, consts: [[1, "basic-product", "theme-product-9"], [1, "img-wrapper", "overflow-visible"], [1, "ribbon-outer", 3, "ngClass"], [1, "ribbon-outer", 3, "level2"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product"], [1, "product-detail"], [3, "routerLink"], ["href", "javascript:void(0)", 1, "product-title", 3, "routerLink"], [1, "bottom-details"], [1, "rating-label"], [1, "ri-star-fill"], [1, "review-count"], [1, "price-vertical"], [1, "discount-value"], [1, "ribbon-outer"], [1, "offer-icon", "me-2"], [1, "ri-discount-percent-fill"]], template: function ProductBoxTen_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, ProductBoxTen_Conditional_2_Template, 3, 4, "div", 2);
        \u0275\u0275conditionalCreate(3, ProductBoxTen_Conditional_3_Template, 3, 5, "div", 3);
        \u0275\u0275element(4, "app-image-variant", 4);
        \u0275\u0275elementStart(5, "div", 5)(6, "app-product-hover-action", 6);
        \u0275\u0275element(7, "app-cart-button", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275conditionalCreate(9, ProductBoxTen_Conditional_9_Template, 3, 4, "a", 8);
        \u0275\u0275elementStart(10, "a", 9);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "div")(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 13);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 14);
        \u0275\u0275conditionalCreate(22, ProductBoxTen_Conditional_22_Template, 3, 3, "del");
        \u0275\u0275elementStart(23, "h4");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "currencySymbol");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(26, ProductBoxTen_Conditional_26_Template, 6, 7, "div", 15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_14_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.is_trending) || ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.is_sale_enable) || ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.is_featured) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.is_sale_enable) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("thumbnail", (tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.product_thumbnail)("gallery_images", (tmp_3_0 = ctx.product()) == null ? null : tmp_3_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_7_0 = ctx.product()) == null ? null : tmp_7_0.brand) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c020, (tmp_8_0 = ctx.product()) == null ? null : tmp_8_0.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (tmp_9_0 = ctx.product()) == null ? null : tmp_9_0.name, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(((tmp_10_0 = ctx.product()) == null ? null : tmp_10_0.rating_count) ? (tmp_10_0 = ctx.product()) == null ? null : tmp_10_0.rating_count : 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("(", (tmp_11_0 = ctx.product()) == null ? null : tmp_11_0.reviews_count, " ", \u0275\u0275pipeBind1(20, 16, "reviews"), ")");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_12_0 = ctx.product()) == null ? null : tmp_12_0.discount) ? 22 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 18, (tmp_13_0 = ctx.product()) == null ? null : tmp_13_0.sale_price));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_14_0 = ctx.product()) == null ? null : tmp_14_0.discount) ? 26 : -1);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      TranslateModule,
      NgbModule,
      ProductHoverAction,
      CartButton,
      ProductBoxImageVariant,
      NgClass,
      CurrencySymbolPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxTen, [{
    type: Component,
    args: [{ selector: "app-product-box-ten", imports: [
      RouterModule,
      CurrencySymbolPipe,
      TranslateModule,
      NgbModule,
      ProductHoverAction,
      CartButton,
      ProductBoxImageVariant,
      Wishlist,
      NgClass
    ], template: `<div class="basic-product theme-product-9">
  <div class="img-wrapper overflow-visible">
    @if (product()?.is_trending || product()?.is_sale_enable || product()?.is_featured) {
    <div
      class="ribbon-outer"
      [ngClass]="product()?.is_sale_enable ? 'sale-tag' : product()?.is_featured ? 'featured-tag' : product()?.is_trending ?
      'trending-tag' : '' "
    >
      {{ (product()?.is_sale_enable ? 'sale' : product()?.is_featured ? 'featured' :
      product()?.is_trending ? 'trending' : '' ) | translate }}
    </div>
    } @if(product()?.is_sale_enable){
    <div class="ribbon-outer" [class.level2]="product()?.is_featured">
      {{ 'on_sale' | translate }}
    </div>
    }
    <app-image-variant
      [thumbnail]="product()?.product_thumbnail!"
      [gallery_images]="product()?.product_galleries!"
      [product]="product()!"
    />
    <div class="cart-info">
      <app-product-hover-action [product]="product()">
        <app-cart-button [product]="product()" />
      </app-product-hover-action>
    </div>
  </div>
  <div class="product-detail">
    @if(product()?.brand){
    <a [routerLink]="['/brand', product()?.brand?.slug]">
      <h6>{{ product()?.brand?.name }}</h6>
    </a>
    }

    <a
      href="javascript:void(0)"
      class="product-title"
      [routerLink]="['/product/', product()?.slug]"
    >
      {{ product()?.name }}
    </a>

    <div class="bottom-details">
      <div class="rating-label">
        <div>
          <span>{{ product()?.rating_count ? product()?.rating_count : 0 }}</span
          ><i class="ri-star-fill"></i>
        </div>
        <span class="review-count"
          >({{ product()?.reviews_count }} {{ 'reviews' | translate }})</span
        >
      </div>

      <div class="price-vertical">
        @if(product()?.discount){
        <del> {{ (product()?.price) | currencySymbol }} </del>
        }
        <h4>{{ (product()?.sale_price) | currencySymbol }}</h4>
      </div>
    </div>

    @if(product()?.discount){
    <div class="discount-value">
      <span class="offer-icon me-2"><i class="ri-discount-percent-fill"></i> </span>{{ 'save_up_to'
      | translate }} {{ product()?.discount }}% {{ 'off' | translate }}
    </div>
    }
  </div>
</div>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxTen, { className: "ProductBoxTen", filePath: "src/app/shared/components/widgets/product-box/product-box-ten/product-box-ten.ts", lineNumber: 31 });
})();

// src/app/shared/components/widgets/product-box/product-box-three/product-box-three.ts
var _c021 = (a0) => ["/product", a0];
var _c112 = () => [];
var _c26 = () => ["color"];
function ProductBoxThree_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r1 = ctx.fill;
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-star", fill_r1 === 100 ? "-fill" : "-line"));
    \u0275\u0275classProp("filled", fill_r1 === 100);
  }
}
function ProductBoxThree_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 5)(1, "li");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.product()) == null ? null : tmp_1_0.unit);
  }
}
function ProductBoxThree_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.selectedVariation ? ctx_r1.selectedVariation.price : (tmp_1_0 = ctx_r1.product()) == null ? null : tmp_1_0.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedVariation ? ctx_r1.selectedVariation.discount : (tmp_2_0 = ctx_r1.product()) == null ? null : tmp_2_0.discount, "% Off ");
  }
}
var ProductBoxThree = class _ProductBoxThree {
  constructor() {
    this.store = inject(Store);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  ariaValueText(current, max) {
    return `${current} out of ${max} hearts`;
  }
  addToWishlist(product) {
    if (this.store.selectSnapshot((state) => state.auth && state.auth.access_token)) {
      product["is_wishlist"] = !product["is_wishlist"];
    }
    let action = product["is_wishlist"] === !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token) ? new AddToWishlistAction({ product_id: product.id }) : new DeleteWishlistAction(product.id);
    if (action) {
      this.store.dispatch(action);
    }
  }
  static {
    this.\u0275fac = function ProductBoxThree_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxThree)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxThree, selectors: [["app-product-box-three"]], inputs: { product: [1, "product"] }, decls: 21, vars: 24, consts: [[1, "basic-product", "theme-product-2"], [1, "product-detail", "mt-0"], [1, "product-title", 3, "routerLink"], [1, "rating"], [3, "rateChange", "rate"], [1, "details"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [1, "bottom-detail"], [1, "color-panel", "color-lg"], [3, "selectVariation", "product", "attributes", "showVariableType"], [1, "price"], [1, "cart-detail"], [3, "product", "selectedVariation", "enableModal", "text"], [1, "discounted-price"]], template: function ProductBoxThree_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "ngb-rating", 4);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxThree_Template_ngb_rating_rateChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product().rating_count, $event) || (ctx.product().rating_count = $event);
          return $event;
        });
        \u0275\u0275template(6, ProductBoxThree_ng_template_6_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, ProductBoxThree_Conditional_7_Template, 3, 1, "ul", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275element(9, "app-image-variant", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "div")(12, "div", 9)(13, "app-display-variant-attributes", 10);
        \u0275\u0275listener("selectVariation", function ProductBoxThree_Template_app_display_variant_attributes_selectVariation_13_listener($event) {
          return ctx.selectedVariant($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "h4", 11);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "currencySymbol");
        \u0275\u0275conditionalCreate(17, ProductBoxThree_Conditional_17_Template, 5, 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "ul", 12)(19, "li");
        \u0275\u0275element(20, "app-cart-button", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_9_0;
        let tmp_11_0;
        let tmp_12_0;
        \u0275\u0275classProp("sold-out", ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.stock_status) === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c021, (tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.selectedVariation ? ctx.selectedVariation.name : (tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("rate", ctx.product().rating_count);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_4_0 = ctx.product()) == null ? null : tmp_4_0.unit) ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : (tmp_5_0 = ctx.product()) == null ? null : tmp_5_0.product_thumbnail)("gallery_images", (tmp_6_0 = ctx.product()) == null ? null : tmp_6_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(4);
        \u0275\u0275property("product", ctx.product())("attributes", ((tmp_9_0 = ctx.product()) == null ? null : tmp_9_0.attributes) || \u0275\u0275pureFunction0(22, _c112))("showVariableType", \u0275\u0275pureFunction0(23, _c26));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, ctx.selectedVariation ? ctx.selectedVariation.sale_price : (tmp_11_0 = ctx.product()) == null ? null : tmp_11_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : (tmp_12_0 = ctx.product()) == null ? null : tmp_12_0.discount) ? 17 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("product", ctx.product())("selectedVariation", ctx.selectedVariation)("enableModal", true)("text", "add to cart");
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      NgbRating,
      NgbModule,
      DisplayVariantAttributes,
      CartButton,
      ProductBoxImageVariant,
      CurrencySymbolPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxThree, [{
    type: Component,
    args: [{ selector: "app-product-box-three", imports: [
      CurrencySymbolPipe,
      RouterModule,
      NgbRating,
      NgbModule,
      QuickView,
      DisplayVariantAttributes,
      CartButton,
      Compare,
      ProductBoxImageVariant,
      Wishlist
    ], template: `<div
  class="basic-product theme-product-2"
  [class.sold-out]="product()?.stock_status === 'out_of_stock'"
>
  <div class="product-detail mt-0">
    <a class="product-title" [routerLink]="['/product', product()?.slug]">
      {{ selectedVariation ? selectedVariation.name : product()?.name }}
    </a>
    <div class="rating">
      <ngb-rating [(rate)]="product()!.rating_count">
        <ng-template let-fill="fill" let-index="index">
          <i
            class="ri-star{{ fill === 100 ? '-fill' : '-line' }}"
            [class.filled]="fill === 100"
          ></i>
        </ng-template>
      </ngb-rating>
    </div>
    @if(product()?.unit){
    <ul class="details">
      <li>{{ product()?.unit }}</li>
    </ul>
    }
  </div>
  <div class="img-wrapper">
    <app-image-variant
      [thumbnail]="selectedVariation && selectedVariation.variation_image ? selectedVariation.variation_image! : product()?.product_thumbnail!"
      [gallery_images]="product()?.product_galleries!"
      [product]="product()!"
    />
  </div>
  <div class="bottom-detail">
    <div>
      <div class="color-panel color-lg">
        <app-display-variant-attributes
          [product]="product()!"
          [attributes]="product()?.attributes || []"
          [showVariableType]="['color']"
          (selectVariation)="selectedVariant($event!)"
        />
      </div>

      <h4 class="price">
        {{ (selectedVariation ? selectedVariation.sale_price : product()?.sale_price) |
        currencySymbol }} @if(selectedVariation ? selectedVariation.discount : product()?.discount){
        <del>
          {{ (selectedVariation ? selectedVariation.price : product()?.price) | currencySymbol }} </del
        ><span class="discounted-price">
          {{ selectedVariation ? selectedVariation.discount : product()?.discount }}% Off
        </span>
        }
      </h4>
    </div>
  </div>
  <ul class="cart-detail">
    <li>
      <app-cart-button
        [product]="product()"
        [selectedVariation]="selectedVariation"
        [enableModal]="true"
        [text]="'add to cart'"
      />
    </li>
  </ul>
</div>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxThree, { className: "ProductBoxThree", filePath: "src/app/shared/components/widgets/product-box/product-box-three/product-box-three.ts", lineNumber: 37 });
})();

// src/app/shared/components/widgets/product-box/product-box-twelve/product-box-twelve.ts
var _c022 = () => [];
var _c113 = (a0) => ["/brand", a0];
function ProductBoxTwelve_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_sale_enable) ? "sale" : ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_featured) ? "featured" : ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_trending) ? "trending" : ""));
  }
}
function ProductBoxTwelve_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c113, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.brand == null ? null : tmp_1_0.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.brand == null ? null : tmp_2_0.brand.name, " ");
  }
}
function ProductBoxTwelve_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.discount, " % ", \u0275\u0275pipeBind1(5, 5, "off"), " ");
  }
}
function ProductBoxTwelve_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r2 = ctx.fill;
    \u0275\u0275classMap(\u0275\u0275interpolate1("ri-star", fill_r2 === 100 ? "-fill" : "-line"));
    \u0275\u0275classProp("filled", fill_r2 === 100);
  }
}
function ProductBoxTwelve_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c113, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.brand == null ? null : tmp_1_0.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.brand == null ? null : tmp_2_0.brand.name, " ");
  }
}
function ProductBoxTwelve_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.discount, "% Off ");
  }
}
var ProductBoxTwelve = class _ProductBoxTwelve {
  constructor() {
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxTwelve_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxTwelve)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxTwelve, selectors: [["app-product-box-twelve"]], inputs: { product: [1, "product"] }, decls: 29, vars: 28, consts: [[1, "basic-product", "theme-product-11"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product"], [1, "trending-label-product11"], [1, "product-detail"], [1, "product-title", 3, "routerLink"], [1, "price"], [1, "rating-w-count", "mb-0", "mt-2"], [1, "rating"], [3, "rateChange", "rate"], [1, "abs-product"], [1, "product-detail", "mt-0"], [1, "product-title", "mb-2", 3, "routerLink"], [3, "selectVariation", "product", "attributes"], [3, "text", "iconClass", "product", "selectedVariation", "enableModal"], [1, "discounted-price"]], template: function ProductBoxTwelve_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "app-product-hover-action", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ProductBoxTwelve_Conditional_5_Template, 3, 3, "label", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275conditionalCreate(7, ProductBoxTwelve_Conditional_7_Template, 2, 4, "a", 7);
        \u0275\u0275elementStart(8, "h6");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h4", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "currencySymbol");
        \u0275\u0275conditionalCreate(13, ProductBoxTwelve_Conditional_13_Template, 6, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "ngb-rating", 11);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxTwelve_Template_ngb_rating_rateChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product().rating_count, $event) || (ctx.product().rating_count = $event);
          return $event;
        });
        \u0275\u0275template(17, ProductBoxTwelve_ng_template_17_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
        \u0275\u0275conditionalCreate(22, ProductBoxTwelve_Conditional_22_Template, 2, 4, "a", 14);
        \u0275\u0275elementStart(23, "h4", 8);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "currencySymbol");
        \u0275\u0275conditionalCreate(26, ProductBoxTwelve_Conditional_26_Template, 5, 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "app-product-box-variant-attributes", 15);
        \u0275\u0275listener("selectVariation", function ProductBoxTwelve_Template_app_product_box_variant_attributes_selectVariation_27_listener($event) {
          return ctx.selectedVariant($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "app-cart-button", 16);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_15_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : (tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.product_thumbnail)("gallery_images", (tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_4_0 = ctx.product()) == null ? null : tmp_4_0.is_trending) || ((tmp_4_0 = ctx.product()) == null ? null : tmp_4_0.is_sale_enable) || ((tmp_4_0 = ctx.product()) == null ? null : tmp_4_0.is_featured) ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_5_0 = ctx.product()) == null ? null : tmp_5_0.brand) ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_6_0 = ctx.product()) == null ? null : tmp_6_0.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 23, ctx.selectedVariation ? ctx.selectedVariation.sale_price : (tmp_7_0 = ctx.product()) == null ? null : tmp_7_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : (tmp_8_0 = ctx.product()) == null ? null : tmp_8_0.discount) ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product().rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", (tmp_10_0 = ctx.product()) == null ? null : tmp_10_0.reviews_count, ")");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_11_0 = ctx.product()) == null ? null : tmp_11_0.brand) ? 22 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 25, ctx.selectedVariation ? ctx.selectedVariation.sale_price : (tmp_12_0 = ctx.product()) == null ? null : tmp_12_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : (tmp_13_0 = ctx.product()) == null ? null : tmp_13_0.discount) ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product())("attributes", ((tmp_15_0 = ctx.product()) == null ? null : tmp_15_0.attributes) || \u0275\u0275pureFunction0(27, _c022));
        \u0275\u0275advance();
        \u0275\u0275classMap("add-cart-btn");
        \u0275\u0275property("text", "Add To Cart")("iconClass", " ")("product", ctx.product())("selectedVariation", ctx.selectedVariation)("enableModal", true);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      NgbModule,
      NgbRating,
      ProductHoverAction,
      TranslateModule,
      ProductBoxVariantAttributes,
      ProductBoxImageVariant,
      CartButton,
      CurrencySymbolPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxTwelve, [{
    type: Component,
    args: [{ selector: "app-product-box-twelve", imports: [
      RouterModule,
      NgbModule,
      CurrencySymbolPipe,
      ProductHoverAction,
      TranslateModule,
      ProductBoxVariantAttributes,
      ProductBoxImageVariant,
      CartButton
    ], template: `<div class="basic-product theme-product-11">
  <div class="img-wrapper">
    <app-image-variant
      [thumbnail]="selectedVariation && selectedVariation.variation_image ? selectedVariation.variation_image! : product()?.product_thumbnail!"
      [gallery_images]="product()?.product_galleries!"
      [product]="product()!"
    />
    <div class="cart-info">
      <app-product-hover-action [product]="product()" />
    </div>

    @if(product()?.is_trending || product()?.is_sale_enable || product()?.is_featured){
    <label class="trending-label-product11"
      >{{ (product()?.is_sale_enable ? 'sale' : product()?.is_featured ? 'featured' :
      product()?.is_trending ? 'trending' : '' ) | translate }}</label
    >
    }
  </div>
  <div class="product-detail">
    @if(product()?.brand){
    <a class="product-title" [routerLink]="['/brand', product()?.brand?.slug]">
      {{ product()?.brand?.name }}
    </a>
    }
    <h6>{{ product()?.name }}</h6>
    <h4 class="price">
      {{(selectedVariation ? selectedVariation.sale_price : product()?.sale_price) |
      currencySymbol}} @if(selectedVariation ? selectedVariation.discount : product()?.discount){
      <del>
        {{(selectedVariation ? selectedVariation.price : product()?.price) | currencySymbol}}
      </del>
      <span class="discounted-price">
        {{selectedVariation ? selectedVariation.discount : product()?.discount}} % {{ 'off' |
        translate }}
      </span>
      }
    </h4>
    <div class="rating-w-count mb-0 mt-2">
      <div class="rating">
        <ngb-rating [(rate)]="product()!.rating_count">
          <ng-template let-fill="fill" let-index="index">
            <i
              class="ri-star{{ fill === 100 ? '-fill' : '-line' }}"
              [class.filled]="fill === 100"
            ></i>
          </ng-template>
        </ngb-rating>
      </div>
      <span>({{ product()?.reviews_count }})</span>
    </div>
  </div>
  <div class="abs-product">
    <div class="product-detail mt-0">
      @if(product()?.brand){
      <a class="product-title mb-2" [routerLink]="['/brand', product()?.brand?.slug]">
        {{ product()?.brand?.name }}
      </a>
      }
      <h4 class="price">
        {{ (selectedVariation ? selectedVariation.sale_price : product()?.sale_price) |
        currencySymbol }} @if(selectedVariation ? selectedVariation.discount : product()?.discount){
        <del>
          {{ (selectedVariation ? selectedVariation.price : product()?.price) | currencySymbol }}
        </del>
        <span class="discounted-price">
          {{ selectedVariation ? selectedVariation.discount : product()?.discount }}% Off
        </span>
        }
      </h4>
    </div>
    <app-product-box-variant-attributes
      [product]="product()!"
      [attributes]="product()?.attributes || []"
      (selectVariation)="selectedVariant($event)"
    />
    <app-cart-button
      [text]="'Add To Cart'"
      [iconClass]="' '"
      [product]="product()"
      [class]="'add-cart-btn'"
      [selectedVariation]="selectedVariation"
      [enableModal]="true"
    />
  </div>
</div>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxTwelve, { className: "ProductBoxTwelve", filePath: "src/app/shared/components/widgets/product-box/product-box-twelve/product-box-twelve.ts", lineNumber: 29 });
})();

// src/app/shared/components/widgets/product-box/product-box-two/product-box-two.ts
var _c023 = () => [];
var _c114 = () => ["color", "image"];
var _c27 = (a0) => ["/brand", a0];
var _c32 = (a0) => ["product", a0];
function ProductBoxTwo_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_sale_enable) ? "sale-tag" : ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_featured) ? "featured-tag" : ((tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.is_trending) ? "trending-tag" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, ((tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.is_sale_enable) ? "sale" : ((tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.is_featured) ? "featured" : ((tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.is_trending) ? "trending" : ""));
  }
}
function ProductBoxTwo_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c27, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.brand == null ? null : tmp_1_0.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.brand == null ? null : tmp_2_0.brand.name, " ");
  }
}
function ProductBoxTwo_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c32, (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedVariation ? ctx_r0.selectedVariation.name : (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.name);
  }
}
function ProductBoxTwo_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : (tmp_2_0 = ctx_r0.product()) == null ? null : tmp_2_0.discount, "% Off ");
  }
}
function ProductBoxTwo_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 17)(1, "li")(2, "span", 19);
    \u0275\u0275element(3, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(5, 3, "limited_time_offer"), ": ", (tmp_1_0 = ctx_r0.product()) == null ? null : tmp_1_0.discount, "% ", \u0275\u0275pipeBind1(6, 5, "off"), " ");
  }
}
var ProductBoxTwo = class _ProductBoxTwo {
  constructor() {
    this.store = inject(Store);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  addToWishlist(product) {
    if (this.store.selectSnapshot((state) => state.auth && state.auth.access_token)) {
      product["is_wishlist"] = !product["is_wishlist"];
    }
    let action = product["is_wishlist"] === !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token) ? new AddToWishlistAction({ product_id: product.id }) : new DeleteWishlistAction(product.id);
    if (action) {
      this.store.dispatch(action);
    }
  }
  static {
    this.\u0275fac = function ProductBoxTwo_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxTwo)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxTwo, selectors: [["app-product-box-two"]], inputs: { product: [1, "product"] }, decls: 24, vars: 23, consts: [[1, "basic-product", "theme-product-1"], [1, "overflow-hidden"], [1, "img-wrapper"], [1, "ribbon", 3, "ngClass"], [3, "thumbnail", "gallery_images", "product"], [1, "rating-label"], [1, "ri-star-s-fill"], [1, "cart-info"], [3, "product"], [3, "product", "selectedVariation", "enableModal"], [1, "product-detail"], [1, "brand-w-color"], [1, "product-title", 3, "routerLink"], [1, "color-panel"], [3, "selectVariation", "product", "attributes", "showVariableType"], [3, "routerLink"], [1, "price"], [1, "offer-panel"], [1, "discounted-price"], [1, "offer-icon"], [1, "ri-discount-percent-fill"]], template: function ProductBoxTwo_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275conditionalCreate(3, ProductBoxTwo_Conditional_3_Template, 4, 4, "div", 3);
        \u0275\u0275element(4, "app-image-variant", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "i", 6);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "app-product-hover-action", 8);
        \u0275\u0275element(11, "app-cart-button", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 10)(13, "div")(14, "div", 11);
        \u0275\u0275conditionalCreate(15, ProductBoxTwo_Conditional_15_Template, 2, 4, "a", 12);
        \u0275\u0275elementStart(16, "div", 13)(17, "app-display-variant-attributes", 14);
        \u0275\u0275listener("selectVariation", function ProductBoxTwo_Template_app_display_variant_attributes_selectVariation_17_listener($event) {
          return ctx.selectedVariant($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(18, ProductBoxTwo_Conditional_18_Template, 3, 4, "a", 15);
        \u0275\u0275elementStart(19, "h4", 16);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "currencySymbol");
        \u0275\u0275conditionalCreate(22, ProductBoxTwo_Conditional_22_Template, 5, 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(23, ProductBoxTwo_Conditional_23_Template, 7, 7, "ul", 17);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_5_0;
        let tmp_10_0;
        let tmp_12_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_16_0;
        let tmp_17_0;
        \u0275\u0275classProp("sold-out", ((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.stock_status) === "out_of_stock");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.is_trending) || ((tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.is_sale_enable) || ((tmp_1_0 = ctx.product()) == null ? null : tmp_1_0.is_featured) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("thumbnail", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : (tmp_2_0 = ctx.product()) == null ? null : tmp_2_0.product_thumbnail)("gallery_images", (tmp_3_0 = ctx.product()) == null ? null : tmp_3_0.product_galleries)("product", ctx.product());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate((tmp_5_0 = ctx.product()) == null ? null : tmp_5_0.reviews_count);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product());
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product())("selectedVariation", ctx.selectedVariation)("enableModal", true);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(((tmp_10_0 = ctx.product()) == null ? null : tmp_10_0.brand) ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product())("attributes", ((tmp_12_0 = ctx.product()) == null ? null : tmp_12_0.attributes) || \u0275\u0275pureFunction0(21, _c023))("showVariableType", \u0275\u0275pureFunction0(22, _c114));
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_14_0 = ctx.product()) == null ? null : tmp_14_0.slug) ? 18 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 19, ctx.selectedVariation ? ctx.selectedVariation.sale_price : (tmp_15_0 = ctx.product()) == null ? null : tmp_15_0.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : (tmp_16_0 = ctx.product()) == null ? null : tmp_16_0.discount) ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_17_0 = ctx.product()) == null ? null : tmp_17_0.discount) ? 23 : -1);
      }
    }, dependencies: [
      NgbModule,
      RouterModule,
      RouterLink,
      ProductHoverAction,
      TranslateModule,
      CartButton,
      ProductBoxImageVariant,
      DisplayVariantAttributes,
      NgClass,
      CurrencySymbolPipe,
      TranslatePipe
    ], styles: ["\n\n.marquee[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  max-width: 100%;\n  height: 200px;\n  overflow-x: hidden;\n}\n.track[_ngcontent-%COMP%] {\n  position: absolute;\n  white-space: nowrap;\n  will-change: transform;\n  animation: _ngcontent-%COMP%_marquee 20s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_marquee {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=product-box-two.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBoxTwo, [{
    type: Component,
    args: [{ selector: "app-product-box-two", imports: [
      NgbModule,
      CurrencySymbolPipe,
      RouterModule,
      ProductHoverAction,
      TranslateModule,
      CartButton,
      ProductHoverAction,
      ProductBoxImageVariant,
      DisplayVariantAttributes,
      NgClass
    ], template: `<div
  class="basic-product theme-product-1"
  [class.sold-out]="product()?.stock_status === 'out_of_stock'"
>
  <div class="overflow-hidden">
    <div class="img-wrapper">
      @if(product()?.is_trending || product()?.is_sale_enable || product()?.is_featured){
      <div
        class="ribbon"
        [ngClass]="product()?.is_sale_enable ? 'sale-tag' : product()?.is_featured ? 'featured-tag' : product()?.is_trending ? 'trending-tag' : '' "
      >
        <span
          >{{ (product()?.is_sale_enable ? 'sale' : product()?.is_featured ? 'featured' :
          product()?.is_trending ? 'trending' : '' ) | translate }}</span
        >
      </div>
      }
      <app-image-variant
        [thumbnail]="selectedVariation && selectedVariation.variation_image ? selectedVariation.variation_image! : product()?.product_thumbnail!"
        [gallery_images]="product()?.product_galleries!"
        [product]="product()!"
      />
      <div class="rating-label">
        <i class="ri-star-s-fill"></i> <span>{{ product()?.reviews_count }}</span>
      </div>
      <div class="cart-info">
        <app-product-hover-action [product]="product()">
          <app-cart-button
            [product]="product()"
            [selectedVariation]="selectedVariation"
            [enableModal]="true"
          />
        </app-product-hover-action>
      </div>
    </div>
    <div class="product-detail">
      <div>
        <div class="brand-w-color">
          @if(product()?.brand){
          <a class="product-title" [routerLink]="['/brand', product()?.brand?.slug]">
            {{ product()?.brand?.name }}
          </a>
          }
          <div class="color-panel">
            <app-display-variant-attributes
              [product]="product()!"
              [attributes]="product()?.attributes || []"
              [showVariableType]="['color', 'image']"
              (selectVariation)="selectedVariant($event!)"
            />
          </div>
        </div>
        @if(product()?.slug){
        <a [routerLink]="['product', product()?.slug]">
          <h6>{{ selectedVariation ? selectedVariation.name : product()?.name }}</h6>
        </a>
        }
        <h4 class="price">
          {{ (selectedVariation ? selectedVariation.sale_price : product()?.sale_price) |
          currencySymbol }} @if(selectedVariation ? selectedVariation.discount :
          product()?.discount){
          <del>
            {{ (selectedVariation ? selectedVariation.price : product()?.price) | currencySymbol }} </del
          ><span class="discounted-price">
            {{ selectedVariation ? selectedVariation.discount : product()?.discount }}% Off
          </span>
          }
        </h4>
      </div>
      @if(product()?.discount){
      <ul class="offer-panel">
        <li>
          <span class="offer-icon"><i class="ri-discount-percent-fill"></i></span> {{
          'limited_time_offer' | translate }}: {{ product()?.discount }}% {{ 'off' | translate }}
        </li>
      </ul>
      }
    </div>
  </div>
</div>
`, styles: ["/* src/app/shared/components/widgets/product-box/product-box-two/product-box-two.scss */\n.marquee {\n  position: relative;\n  width: 100vw;\n  max-width: 100%;\n  height: 200px;\n  overflow-x: hidden;\n}\n.track {\n  position: absolute;\n  white-space: nowrap;\n  will-change: transform;\n  animation: marquee 20s linear infinite;\n}\n@keyframes marquee {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=product-box-two.css.map */\n"] }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxTwo, { className: "ProductBoxTwo", filePath: "src/app/shared/components/widgets/product-box/product-box-two/product-box-two.ts", lineNumber: 41 });
})();

// src/app/shared/components/widgets/product-box/product-box.ts
function ProductBox_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-one", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-two", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-three", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-four", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-five", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-six", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-seven", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-eight", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-nine", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-ten", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-eleven", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-twelve", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product());
  }
}
function ProductBox_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-horizontal", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product())("product_box_style", ctx_r0.product_box_style());
  }
}
var ProductBox = class _ProductBox {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.store = inject(Store);
    this.themeOptionService = inject(ThemeOptionService);
    this.cdRef = inject(ChangeDetectorRef);
    this.product = input(...ngDevMode ? [void 0, { debugName: "product" }] : []);
    this.style = input(...ngDevMode ? [void 0, { debugName: "style" }] : []);
    this.product_box_style = input(...ngDevMode ? [void 0, { debugName: "product_box_style" }] : []);
    this.themeOption$ = inject(Store).select(ThemeOptionState.themeOptions);
    this.productBox$ = inject(Store).select(ThemeOptionState.productBox);
    this.route.queryParams.subscribe((params) => this.path = params["theme"]);
  }
  ngOnInit() {
    this.setVariant();
    this.productBox$.subscribe((res) => {
      setTimeout(() => {
        this.variant = res;
      }, 500);
    });
  }
  setVariant() {
    if (this.path == "fashion_one" || this.path == "fashion_two" || this.path == "fashion_three" || this.path == "furniture_two" || this.path == "watch" || this.path == "christmas" || this.path == "single_product") {
      this.variant = "product_box_one";
    } else if (this.path == "fashion_four" || this.path == "fashion_seven" || this.path == "tools") {
      this.variant = "product_box_two";
    } else if (this.path == "bicycle" || this.path == "surfboard") {
      this.variant = "product_box_three";
    } else if (this.path == "medical" || this.path == "fashion_six") {
      this.variant = "product_box_four";
    } else if (this.path == "perfume" || this.path == "furniture_dark" || this.path == "furniture_one" || this.path == "shoes") {
      this.variant = "product_box_five";
    } else if (this.path == "bag" || this.path == "electronics_one" || this.path == "electronics_two" || this.path == "electronics_three" || this.path == "fashion_five") {
      this.variant = "product_box_six";
    } else if (this.path == "marketplace_one" || this.path == "marketplace_two" || this.path == "marketplace_three" || this.path == "marketplace_four") {
      this.variant = "product_box_seven";
    } else if (this.path == "gym" || this.path == "vegetables_one" || this.path == "vegetables_two" || this.path == "vegetables_four") {
      this.variant = "product_box_eight";
    } else if (this.path == "marijuana" || this.path == "jewellery_three" || this.path == "goggles") {
      this.variant = "product_box_nine";
    } else if (this.path == "digital_download") {
      this.variant = "product_box_ten";
    } else if (this.path == "shoes") {
      this.variant = "product_box_fourteen";
    } else if (this.path == "jewellery_one" || this.path == "jewellery_two") {
      this.variant = "product_box_twelve";
    } else {
      this.themeOption$.subscribe((theme) => {
        this.variant = theme?.product ? theme?.product?.product_box_variant : "product_box_one";
      });
    }
    this.store.dispatch(new UpdateProductBoxAction(this.variant));
  }
  ngAfterViewInit() {
    this.setVariant();
  }
  static {
    this.\u0275fac = function ProductBox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBox)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBox, selectors: [["app-product-box"]], inputs: { product: [1, "product"], style: [1, "style"], product_box_style: [1, "product_box_style"] }, decls: 13, vars: 1, consts: [[3, "product"], [3, "product", "product_box_style"]], template: function ProductBox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ProductBox_Conditional_0_Template, 1, 1, "app-product-box-one", 0)(1, ProductBox_Conditional_1_Template, 1, 1, "app-product-box-two", 0)(2, ProductBox_Conditional_2_Template, 1, 1, "app-product-box-three", 0)(3, ProductBox_Conditional_3_Template, 1, 1, "app-product-box-four", 0)(4, ProductBox_Conditional_4_Template, 1, 1, "app-product-box-five", 0)(5, ProductBox_Conditional_5_Template, 1, 1, "app-product-box-six", 0)(6, ProductBox_Conditional_6_Template, 1, 1, "app-product-box-seven", 0)(7, ProductBox_Conditional_7_Template, 1, 1, "app-product-box-eight", 0)(8, ProductBox_Conditional_8_Template, 1, 1, "app-product-box-nine", 0)(9, ProductBox_Conditional_9_Template, 1, 1, "app-product-box-ten", 0)(10, ProductBox_Conditional_10_Template, 1, 1, "app-product-box-eleven", 0)(11, ProductBox_Conditional_11_Template, 1, 1, "app-product-box-twelve", 0)(12, ProductBox_Conditional_12_Template, 1, 2, "app-product-box-horizontal", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.style() === "vertical" && ctx.variant === "product_box_one" ? 0 : ctx.style() === "vertical" && ctx.variant === "product_box_two" ? 1 : ctx.style() === "vertical" && ctx.variant === "product_box_three" ? 2 : ctx.style() === "vertical" && ctx.variant === "product_box_four" ? 3 : ctx.style() === "vertical" && ctx.variant === "product_box_five" ? 4 : ctx.style() === "vertical" && ctx.variant === "product_box_six" ? 5 : ctx.style() === "vertical" && ctx.variant === "product_box_seven" ? 6 : ctx.style() === "vertical" && ctx.variant === "product_box_eight" ? 7 : ctx.style() === "vertical" && ctx.variant === "product_box_nine" ? 8 : ctx.style() === "vertical" && ctx.variant === "product_box_ten" ? 9 : ctx.style() === "vertical" && ctx.variant === "product_box_eleven" ? 10 : ctx.style() === "vertical" && ctx.variant === "product_box_twelve" ? 11 : ctx.style() === "horizontal" ? 12 : -1);
      }
    }, dependencies: [
      ProductBoxOne,
      ProductBoxHorizontal,
      ProductBoxTwo,
      ProductBoxThree,
      ProductBoxFour,
      ProductBoxFive,
      ProductBoxSix,
      ProductBoxSeven,
      ProductBoxEight,
      ProductBoxNine,
      ProductBoxTen,
      ProductBoxEleven,
      ProductBoxTwelve
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductBox, [{
    type: Component,
    args: [{ selector: "app-product-box", imports: [
      ProductBoxOne,
      ProductBoxHorizontal,
      ProductBoxTwo,
      ProductBoxThree,
      ProductBoxFour,
      ProductBoxFive,
      ProductBoxSix,
      ProductBoxSeven,
      ProductBoxEight,
      ProductBoxNine,
      ProductBoxTen,
      ProductBoxEleven,
      ProductBoxTwelve
    ], template: `@if(style() === 'vertical' && variant === 'product_box_one'){
<app-product-box-one [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_two') {
<app-product-box-two [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_three') {
<app-product-box-three [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_four') {
<app-product-box-four [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_five') {
<app-product-box-five [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_six') {
<app-product-box-six [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_seven') {
<app-product-box-seven [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_eight') {
<app-product-box-eight [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_nine') {
<app-product-box-nine [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_ten') {
<app-product-box-ten [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_eleven') {
<app-product-box-eleven [product]="product()!" />
} @else if (style() === 'vertical' && variant === 'product_box_twelve') {
<app-product-box-twelve [product]="product()!" />
} @else if (style() === 'horizontal') {
<app-product-box-horizontal [product]="product()!" [product_box_style]="product_box_style()!" />
}
` }]
  }], () => [], { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: false }] }], style: [{ type: Input, args: [{ isSignal: true, alias: "style", required: false }] }], product_box_style: [{ type: Input, args: [{ isSignal: true, alias: "product_box_style", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBox, { className: "ProductBox", filePath: "src/app/shared/components/widgets/product-box/product-box.ts", lineNumber: 46 });
})();

export {
  NgxImageZoomComponent,
  NgxImageZoomModule,
  VariantAttributes,
  ProductContent,
  ProductDeliveryInformation,
  QuestionModal,
  ProductDetails,
  DropdownVariant,
  ProductBoxEleven,
  ProductBox
};
//# sourceMappingURL=chunk-TMWDIMEK.js.map
