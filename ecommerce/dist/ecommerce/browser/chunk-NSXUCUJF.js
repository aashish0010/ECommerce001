import {
  Button
} from "./chunk-6I2UIIRS.js";
import {
  NgbActiveModal
} from "./chunk-MLCQBQYT.js";
import {
  environment
} from "./chunk-4LUQBUB6.js";
import {
  Component,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/components/widgets/modal/video-modal/video-modal.ts
function VideoModal_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "video", 4);
    \u0275\u0275element(1, "source", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.video_url());
  }
}
function VideoModal_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "audio", 5);
    \u0275\u0275element(1, "source", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.video_url());
  }
}
function VideoModal_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VideoModal_Conditional_4_Conditional_0_Template, 2, 1, "video", 4)(1, VideoModal_Conditional_4_Conditional_1_Template, 2, 1, "audio", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.type() === "video" ? 0 : ctx_r0.type() === "audio" ? 1 : -1);
  }
}
var VideoModal = class _VideoModal {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.video_url = input(...ngDevMode ? [void 0, { debugName: "video_url" }] : []);
    this.type = input(...ngDevMode ? [void 0, { debugName: "type" }] : []);
    this.StorageURL = environment.storageURL;
  }
  static {
    this.\u0275fac = function VideoModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VideoModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoModal, selectors: [["app-video-modal"]], inputs: { video_url: [1, "video_url"], type: [1, "type"] }, decls: 5, vars: 5, consts: [[1, "modal-content"], [1, "modal-header", "p-0"], [3, "click", "id", "iconClass"], [1, "modal-body", "p-3", "d-flex", "align-items-center", "justify-content-center"], ["autoplay", "true", "loop", "true", 1, "w-100", "h-100"], ["controls", "", "autoplay", "false", "loop", "true"], ["type", "video/mp4", 3, "src"], ["type", "audio/mp3", 3, "src"]], template: function VideoModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-button", 2);
        \u0275\u0275listener("click", function VideoModal_Template_app_button_click_2_listener() {
          return ctx.modal.close("Cross click");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275conditionalCreate(4, VideoModal_Conditional_4_Template, 2, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("id", "profile_modal_close_btn")("iconClass", "ri-close-line");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.video_url() ? 4 : -1);
      }
    }, dependencies: [Button], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoModal, [{
    type: Component,
    args: [{ selector: "app-video-modal", imports: [Button], template: `<div class="modal-content">
  <div class="modal-header p-0">
    <app-button
      [class]="'btn btn-close'"
      [id]="'profile_modal_close_btn'"
      (click)="modal.close('Cross click')"
      [iconClass]="'ri-close-line'"
    />
  </div>
  <div class="modal-body p-3 d-flex align-items-center justify-content-center">
    @if(video_url()){ @if(type() === 'video'){
    <video autoplay="true" loop="true" class="w-100 h-100">
      <source [src]="(video_url())" type="video/mp4" />
    </video>
    }@else if(type() === 'audio'){
    <audio controls autoplay="false" loop="true">
      <source [src]="(video_url())" type="audio/mp3" />
    </audio>
    } }
  </div>
</div>
` }]
  }], null, { video_url: [{ type: Input, args: [{ isSignal: true, alias: "video_url", required: false }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoModal, { className: "VideoModal", filePath: "src/app/shared/components/widgets/modal/video-modal/video-modal.ts", lineNumber: 14 });
})();

export {
  VideoModal
};
//# sourceMappingURL=chunk-NSXUCUJF.js.map
