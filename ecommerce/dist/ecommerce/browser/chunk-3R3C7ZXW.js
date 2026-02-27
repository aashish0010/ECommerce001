import {
  SettingState
} from "./chunk-TMCH2Z3I.js";
import {
  Store
} from "./chunk-6YJBSKCB.js";
import {
  CurrencyPipe
} from "./chunk-QK7HTLFB.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-EGYGZ7MZ.js";

// src/app/shared/pipe/currency.pipe.ts
var CurrencySymbolPipe = class _CurrencySymbolPipe {
  constructor() {
    this.currencyPipe = inject(CurrencyPipe);
    this.selectedCurrency$ = inject(Store).select(SettingState.selectedCurrency);
    this.symbol = "$";
    this.selectedCurrency$.subscribe((currency) => this.selectedCurrency = currency);
  }
  transform(value, position = "before_price") {
    if (!value) {
      value = 0;
    }
    value = Number(value);
    value = value * this.selectedCurrency?.exchange_rate;
    this.symbol = this.selectedCurrency?.symbol;
    position = this.selectedCurrency?.symbol_position;
    let formattedValue = this.currencyPipe.transform(value, this.symbol);
    formattedValue = formattedValue?.replace(this.symbol, "");
    if (position === "before_price") {
      return `${this.symbol}${formattedValue}`;
    } else {
      return `${formattedValue}${this.symbol}`;
    }
  }
  static {
    this.\u0275fac = function CurrencySymbolPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrencySymbolPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "currencySymbol", type: _CurrencySymbolPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencySymbolPipe, [{
    type: Pipe,
    args: [{
      name: "currencySymbol",
      standalone: true
    }]
  }], () => [], null);
})();

export {
  CurrencySymbolPipe
};
//# sourceMappingURL=chunk-3R3C7ZXW.js.map
