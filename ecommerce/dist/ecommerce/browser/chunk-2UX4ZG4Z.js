import {
  DownloadFilesAction,
  DownloadLicenseAction,
  DownloadState,
  DownloadsAction
} from "./chunk-567RQ5NM.js";
import {
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule
} from "./chunk-MLCQBQYT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-MXUZ2ZBZ.js";
import {
  NoData
} from "./chunk-O32MIEQN.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PCGC3M7T.js";
import "./chunk-4LUQBUB6.js";
import {
  Store
} from "./chunk-6YJBSKCB.js";
import {
  AsyncPipe
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  inject,
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
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EGYGZ7MZ.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/account/downloads/downloads.ts
var _forTrack0 = ($index, $item) => $item.id;
function Downloads_Conditional_15_For_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function Downloads_Conditional_15_For_15_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const data_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadFiles(data_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "all_files_document"), " ");
  }
}
function Downloads_Conditional_15_For_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function Downloads_Conditional_15_For_15_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const data_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadLicense(data_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "license_pdf"), " ");
  }
}
function Downloads_Conditional_15_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 13)(7, "button", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275conditionalCreate(11, Downloads_Conditional_15_For_15_Conditional_11_Template, 3, 3, "button", 16);
    \u0275\u0275conditionalCreate(12, Downloads_Conditional_15_For_15_Conditional_12_Template, 3, 3, "button", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(data_r2.item_image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.item_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "download"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(data_r2.can_download_file ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r2.can_download_license ? 12 : -1);
  }
}
function Downloads_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, Downloads_Conditional_15_For_15_Template, 13, 8, "tr", null, _forTrack0);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "action"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_4_0 = \u0275\u0275pipeBind1(16, 9, ctx_r2.download$)) == null ? null : tmp_4_0.data);
  }
}
function Downloads_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_item_found"))("description", \u0275\u0275pipeBind1(2, 7, "no_order_yet"));
  }
}
var Downloads = class _Downloads {
  constructor() {
    this.store = inject(Store);
    this.download$ = inject(Store).select(DownloadState.download);
    this.filter = {
      page: 1,
      // Current page number
      paginate: 10
      // Display per page,
    };
    this.term = new FormControl("");
    this.store.dispatch(new DownloadsAction(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new DownloadsAction(this.filter));
  }
  search() {
    this.filter["search"] = this.term.value;
    this.store.dispatch(new DownloadsAction(this.filter));
  }
  downloadFiles(id) {
    this.store.dispatch(new DownloadFilesAction(id));
  }
  downloadLicense(id) {
    this.store.dispatch(new DownloadLicenseAction(id));
  }
  static {
    this.\u0275fac = function Downloads_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Downloads)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Downloads, selectors: [["app-downloads"]], decls: 19, vars: 17, consts: [[1, "card", "dashboard-table", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "download-detail", "dashboard-bg-box"], [1, "input-group", "download-form"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl"], ["type", "button", 1, "btn", 3, "click"], [1, "download-table", "dashboard-bg-box"], [1, "table-responsive"], [3, "class", "image", "text", "description"], [1, "table", "user-download-table"], [1, "table-name"], ["alt", "image", 1, "img-fluid", "table-image", 3, "src"], ["ngbDropdown", "", "container", "body", "placement", "bottom-end", 1, "d-inline-block", "download-dropdown-box"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "download-dropdown-menu"], ["ngbDropdownItem", ""], ["ngbDropdownItem", "", 3, "click"], [3, "image", "text", "description"]], template: function Downloads_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "form")(8, "div", 4);
        \u0275\u0275element(9, "input", 5);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275listener("click", function Downloads_Template_button_click_11_listener() {
          return ctx.search();
        });
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 7);
        \u0275\u0275conditionalCreate(15, Downloads_Conditional_15_Template, 17, 11, "div", 8);
        \u0275\u0275pipe(16, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(17, Downloads_Conditional_17_Template, 3, 9, "app-no-data", 9);
        \u0275\u0275pipe(18, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "downloads"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(10, 9, "search_download")))("formControl", ctx.term);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "search"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(16, 13, ctx.download$)) == null ? null : tmp_4_0.data == null ? null : tmp_4_0.data.length) ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!((tmp_5_0 = \u0275\u0275pipeBind1(18, 15, ctx.download$)) == null ? null : tmp_5_0.data == null ? null : tmp_5_0.data.length) ? 17 : -1);
      }
    }, dependencies: [TranslateModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, ReactiveFormsModule, FormControlDirective, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, NoData, TranslatePipe, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Downloads, [{
    type: Component,
    args: [{ selector: "app-downloads", imports: [TranslateModule, FormsModule, ReactiveFormsModule, NgbModule, NoData, AsyncPipe], template: `<div class="card dashboard-table mt-0">
  <div class="card-body">
    <div class="top-sec">
      <h3>{{ 'downloads' | translate }}</h3>
    </div>
    <div class="download-detail dashboard-bg-box">
      <form>
        <div class="input-group download-form">
          <input
            type="text"
            class="form-control"
            placeholder="{{ 'search_download' | translate }}"
            [formControl]="term"
          />
          <button class="btn" type="button" (click)="search()">{{ 'search' | translate }}</button>
        </div>
      </form>
    </div>

    <div class="download-table dashboard-bg-box">
      @if((download$ | async)?.data?.length){
      <div class="table-responsive">
        <table class="table user-download-table">
          <thead>
            <tr>
              <th>{{ 'image' | translate }}</th>
              <th class="table-name">{{ 'name' | translate }}</th>
              <th>{{ 'action' | translate }}</th>
            </tr>
          </thead>
          <tbody>
            @for(data of (download$ | async)?.data; track data.id; let i = $index){
            <tr>
              <td>
                <img src="{{ data.item_image }}" class="img-fluid table-image" alt="image" />
              </td>
              <td class="table-name">{{ data.item_name }}</td>
              <td>
                <div
                  ngbDropdown
                  class="d-inline-block download-dropdown-box"
                  container="body"
                  placement="bottom-end"
                >
                  <button type="button" class="btn dropdown-toggle" ngbDropdownToggle>
                    {{ 'download' | translate }}
                  </button>
                  <div ngbDropdownMenu class="download-dropdown-menu">
                    @if(data.can_download_file){
                    <button ngbDropdownItem (click)="downloadFiles(data.id)">
                      {{ 'all_files_document' | translate }}
                    </button>
                    } @if(data.can_download_license){
                    <button ngbDropdownItem (click)="downloadLicense(data.id)">
                      {{ 'license_pdf' | translate }}
                    </button>
                    }
                  </div>
                </div>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>
      }
    </div>

    @if(!(download$ | async)?.data?.length){
    <app-no-data
      [class]="'no-data-added'"
      [image]="'assets/svg/empty-items.svg'"
      [text]="'no_item_found' | translate"
      [description]="'no_order_yet' | translate"
    />
    }
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Downloads, { className: "Downloads", filePath: "src/app/components/account/downloads/downloads.ts", lineNumber: 26 });
})();
export {
  Downloads
};
//# sourceMappingURL=chunk-2UX4ZG4Z.js.map
