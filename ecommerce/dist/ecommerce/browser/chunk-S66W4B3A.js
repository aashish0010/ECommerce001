import {
  HttpClient,
  environment
} from "./chunk-L6CMOIIK.js";
import {
  Action,
  Injectable,
  Selector,
  State,
  __decorate,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-3KEERULZ.js";

// src/app/shared/store/action/download.action.ts
var DownloadsAction = class {
  static {
    this.type = "[Download] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var DownloadFilesAction = class {
  static {
    this.type = "[Download] Files";
  }
  constructor(id) {
    this.id = id;
  }
};
var DownloadLicenseAction = class {
  static {
    this.type = "[Download] License";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/services/downloads.service.ts
var DownloadsService = class _DownloadsService {
  constructor() {
    this.http = inject(HttpClient);
  }
  downloads(payload) {
    return this.http.get(`${environment.URL}/download.json`, { params: payload });
  }
  static {
    this.\u0275fac = function DownloadsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DownloadsService, factory: _DownloadsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DownloadsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/store/state/download.state.ts
var DownloadState = class DownloadState2 {
  constructor() {
    this.downloadService = inject(DownloadsService);
  }
  static download(state) {
    return state.download;
  }
  downloads(ctx, action) {
    return this.downloadService.downloads(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          download: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  downloadFiles(_ctx, _action) {
  }
  downloadLicense(_ctx, _action) {
  }
  static {
    this.\u0275fac = function DownloadState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DownloadState2)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: DownloadState2, factory: DownloadState2.\u0275fac });
  }
};
__decorate([
  Action(DownloadsAction)
], DownloadState.prototype, "downloads", null);
__decorate([
  Action(DownloadFilesAction)
], DownloadState.prototype, "downloadFiles", null);
__decorate([
  Action(DownloadLicenseAction)
], DownloadState.prototype, "downloadLicense", null);
__decorate([
  Selector()
], DownloadState, "download", null);
DownloadState = __decorate([
  State({
    name: "download",
    defaults: {
      download: {
        data: [],
        total: 0
      }
    }
  })
], DownloadState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DownloadState, [{
    type: Injectable
  }], null, { downloads: [], downloadFiles: [], downloadLicense: [] });
})();

export {
  DownloadsAction,
  DownloadFilesAction,
  DownloadLicenseAction,
  DownloadState
};
//# sourceMappingURL=chunk-S66W4B3A.js.map
