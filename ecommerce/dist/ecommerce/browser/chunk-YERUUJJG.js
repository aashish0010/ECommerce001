import {
  TextConverterPipe
} from "./chunk-HTXLVWT3.js";
import {
  Select2,
  Select2Module
} from "./chunk-3YTNHNM3.js";
import {
  ColorState,
  GetColorsAction
} from "./chunk-UHWVV3DF.js";
import {
  SkeletonProductBox
} from "./chunk-7JCQSCUH.js";
import {
  ProductBox,
  ProductBoxEleven
} from "./chunk-TMWDIMEK.js";
import {
  AttributeService,
  AttributeState,
  GetAttributesAction
} from "./chunk-PDGQIHJ4.js";
import {
  BrandState
} from "./chunk-ISUJGA6N.js";
import {
  CategoryState
} from "./chunk-B62VDLFD.js";
import {
  GetBrandsAction
} from "./chunk-XVI6NDZ3.js";
import {
  GetCategoriesAction
} from "./chunk-PM45JHZH.js";
import {
  ProductService,
  ProductState
} from "./chunk-OE35GDC6.js";
import {
  GetMoreProductAction
} from "./chunk-RWFLVE5E.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from "./chunk-6R3AQVTF.js";
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbModule,
  NgbRating
} from "./chunk-MLCQBQYT.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-MXUZ2ZBZ.js";
import {
  Pagination,
  PaginationService
} from "./chunk-Q36QR2OY.js";
import {
  CurrencySymbolPipe
} from "./chunk-3R3C7ZXW.js";
import {
  NoData
} from "./chunk-O32MIEQN.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PCGC3M7T.js";
import {
  Store,
  takeUntilDestroyed
} from "./chunk-6YJBSKCB.js";
import {
  AsyncPipe,
  NgClass,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-QK7HTLFB.js";
import {
  Component,
  DestroyRef,
  HostListener,
  Input,
  Output,
  PLATFORM_ID,
  Pipe,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/components/shop/collection/widgets/filter/collection-attribute-filter/collection-attribute-filter.ts
var _forTrack0 = ($index, $item) => $item.id;
function CollectionAttributeFilter_Conditional_0_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 5);
  }
  if (rf & 2) {
    const attribute_value_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-color", attribute_value_r3 == null ? null : attribute_value_r3.hex_color);
  }
}
function CollectionAttributeFilter_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "input", 1);
    \u0275\u0275domListener("change", function CollectionAttributeFilter_Conditional_0_For_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "label", 2);
    \u0275\u0275conditionalCreate(3, CollectionAttributeFilter_Conditional_0_For_1_Conditional_3_Template, 1, 2, "div", 3);
    \u0275\u0275domElementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const attribute_value_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("id", \u0275\u0275interpolate1("attribute-", attribute_value_r3 == null ? null : attribute_value_r3.id))("value", attribute_value_r3 == null ? null : attribute_value_r3.slug)("checked", ctx_r1.checked(attribute_value_r3 == null ? null : attribute_value_r3.slug));
    \u0275\u0275advance();
    \u0275\u0275domProperty("htmlFor", \u0275\u0275interpolate1("attribute-", attribute_value_r3 == null ? null : attribute_value_r3.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_15_0 = ctx_r1.attribute()) == null ? null : tmp_15_0.style) === "color" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(attribute_value_r3 == null ? null : attribute_value_r3.value);
  }
}
function CollectionAttributeFilter_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CollectionAttributeFilter_Conditional_0_For_1_Template, 6, 8, "div", 0, _forTrack0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater((tmp_1_0 = ctx_r1.attribute()) == null ? null : tmp_1_0.attribute_values);
  }
}
var CollectionAttributeFilter = class _CollectionAttributeFilter {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.attribute = input(...ngDevMode ? [void 0, { debugName: "attribute" }] : []);
    this.selectedAttributes = [];
  }
  ngOnChanges() {
    const filter = this.filter;
    this.selectedAttributes = filter["attribute"] ? filter["attribute"].split(",") : [];
  }
  applyFilter(event) {
    const index = this.selectedAttributes.indexOf(event?.target?.value);
    if (event?.target?.checked)
      this.selectedAttributes.push(event?.target?.value);
    else
      this.selectedAttributes.splice(index, 1);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        attribute: this.selectedAttributes.length ? this.selectedAttributes?.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      // preserve the existing query params in the route
      skipLocationChange: false
      // do trigger navigation
    });
  }
  // check if the item are selected
  checked(item) {
    if (this.selectedAttributes?.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function CollectionAttributeFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionAttributeFilter)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionAttributeFilter, selectors: [["app-collection-attribute-filter"]], inputs: { attribute: [1, "attribute"], filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "form-check", "collection-filter-checkbox"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "value", "checked"], [1, "form-check-label", "color-label-box", 3, "for"], [1, "color-box", 3, "background-color"], [1, "name"], [1, "color-box"]], template: function CollectionAttributeFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CollectionAttributeFilter_Conditional_0_Template, 2, 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(((tmp_0_0 = ctx.attribute()) == null ? null : tmp_0_0.attribute_values) && ((tmp_0_0 = ctx.attribute()) == null ? null : tmp_0_0.attribute_values == null ? null : tmp_0_0.attribute_values.length) ? 0 : -1);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionAttributeFilter, [{
    type: Component,
    args: [{ selector: "app-collection-attribute-filter", template: `@if(attribute()?.attribute_values && attribute()?.attribute_values?.length){ @for(attribute_value of
attribute()?.attribute_values; track attribute_value.id){
<div class="form-check collection-filter-checkbox">
  <input
    type="checkbox"
    class="form-check-input"
    id="attribute-{{attribute_value?.id}}"
    [value]="attribute_value?.slug"
    [checked]="checked(attribute_value?.slug!)"
    (change)="applyFilter($event)"
  />
  <label class="form-check-label color-label-box" for="attribute-{{attribute_value?.id}}">
    @if(attribute()?.style === 'color'){
    <div class="color-box" [style.background-color]="attribute_value?.hex_color"></div>
    }
    <span class="name">{{ attribute_value?.value }}</span>
  </label>
</div>
} }
` }]
  }], null, { attribute: [{ type: Input, args: [{ isSignal: true, alias: "attribute", required: false }] }], filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionAttributeFilter, { className: "CollectionAttributeFilter", filePath: "src/app/components/shop/collection/widgets/filter/collection-attribute-filter/collection-attribute-filter.ts", lineNumber: 12 });
})();

// src/app/shared/pipe/search-filter.pipe.ts
var SearchFilterPipe = class _SearchFilterPipe {
  transform(items, searchText, subDataKey) {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) => this.searchWithinProperties(item, searchText) || this.searchWithinSubcategories(item, searchText, subDataKey));
  }
  searchWithinProperties(item, searchText) {
    return item.name.toLowerCase().includes(searchText);
  }
  searchWithinSubcategories(item, searchText, subDataKey) {
    if (item[subDataKey] && item[subDataKey].length > 0) {
      for (const subcategory of item[subDataKey]) {
        for (const key in subcategory) {
          if (subcategory.hasOwnProperty(key)) {
            const value = subcategory[key];
            if (typeof value === "string" && value.toLowerCase().includes(searchText)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  static {
    this.\u0275fac = function SearchFilterPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchFilterPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filter", type: _SearchFilterPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchFilterPipe, [{
    type: Pipe,
    args: [{
      name: "filter",
      standalone: true
    }]
  }], null, null);
})();

// src/app/components/shop/collection/widgets/filter/collection-brand-filter/collection-brand-filter.ts
var _forTrack02 = ($index, $item) => $item.id;
function CollectionBrandFilter_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "input", 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CollectionBrandFilter_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(2, 3, "search")));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
  }
}
function CollectionBrandFilter_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 5)(2, "input", 6);
    \u0275\u0275listener("change", function CollectionBrandFilter_Conditional_1_For_2_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const brand_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("brand-", brand_r4 == null ? null : brand_r4.id))("value", brand_r4 == null ? null : brand_r4.slug)("checked", ctx_r1.checked(brand_r4 == null ? null : brand_r4.slug));
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("brand-", brand_r4 == null ? null : brand_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(brand_r4 == null ? null : brand_r4.name);
  }
}
function CollectionBrandFilter_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "no_brand"));
  }
}
function CollectionBrandFilter_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, CollectionBrandFilter_Conditional_1_For_2_Template, 5, 7, "li", null, _forTrack02);
    \u0275\u0275pipe(3, "filter");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CollectionBrandFilter_Conditional_1_Conditional_4_Template, 4, 3, "div", 4);
    \u0275\u0275pipe(5, "filter");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 1, ctx_r1.brands, ctx_r1.searchText, ""));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind3(5, 5, ctx_r1.brands, ctx_r1.searchText, "subcategories").length === 0 ? 4 : -1);
  }
}
function CollectionBrandFilter_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 8);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 3, "no_brand"));
  }
}
var CollectionBrandFilter = class _CollectionBrandFilter {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.store = inject(Store);
    this.destroyRef = inject(DestroyRef);
    this.brand$ = inject(Store).select(BrandState.brand);
    this.selectedBrands = [];
    this.searchText = "";
  }
  ngOnInit() {
    this.store.dispatch(new GetBrandsAction({ status: 1 }));
    this.brand$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((brand) => {
      this.brands = brand.data;
    });
  }
  ngOnChanges() {
    const filter = this.filter;
    this.selectedBrands = filter["brand"] ? filter["brand"].split(",") : [];
  }
  applyFilter(event) {
    const index = this.selectedBrands.indexOf(event?.target?.value);
    if (event?.target?.checked)
      this.selectedBrands.push(event?.target?.value);
    else
      this.selectedBrands.splice(index, 1);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        brand: this.selectedBrands.length ? this.selectedBrands?.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      // preserve the existing query params in the route
      skipLocationChange: false
      // do trigger navigation
    });
  }
  // check if the item are selected
  checked(item) {
    if (this.selectedBrands?.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function CollectionBrandFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionBrandFilter)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionBrandFilter, selectors: [["app-collection-brand-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 3, consts: [[1, "theme-form", "search-box"], [3, "class", "text"], ["type", "text", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [1, "shop-category-list", "custom-sidebar-height"], [1, "search-not-found-box"], [1, "form-check", "collection-filter-checkbox"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "value", "checked"], [1, "form-check-label", 3, "for"], [3, "text"]], template: function CollectionBrandFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CollectionBrandFilter_Conditional_0_Template, 3, 5, "div", 0);
        \u0275\u0275conditionalCreate(1, CollectionBrandFilter_Conditional_1_Template, 6, 9);
        \u0275\u0275conditionalCreate(2, CollectionBrandFilter_Conditional_2_Template, 2, 5, "app-no-data", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.brands && ctx.brands.length > 5 ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.brands && ctx.brands.length ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.brands && !ctx.brands.length ? 2 : -1);
      }
    }, dependencies: [TranslateModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NoData, TranslatePipe, SearchFilterPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionBrandFilter, [{
    type: Component,
    args: [{ selector: "app-collection-brand-filter", imports: [TranslateModule, FormsModule, SearchFilterPipe, NoData], template: `@if(brands && brands.length > 5){
<div class="theme-form search-box">
  <input
    type="text"
    placeholder="{{'search' | translate}}"
    [(ngModel)]="searchText"
    class="form-control"
  />
</div>
} @if(brands && brands.length){
<ul class="shop-category-list custom-sidebar-height">
  @for(brand of brands | filter: searchText: ''; track brand.id){
  <li>
    <div class="form-check collection-filter-checkbox">
      <input
        type="checkbox"
        class="form-check-input"
        id="brand-{{brand?.id}}"
        [value]="brand?.slug"
        [checked]="checked(brand?.slug!)"
        (change)="applyFilter($event)"
      />
      <label class="form-check-label" for="brand-{{brand?.id}}">{{ brand?.name }}</label>
    </div>
  </li>
  }
</ul>

@if((brands | filter: searchText:'subcategories').length === 0){
<div class="search-not-found-box">
  <h5>{{ 'no_brand' | translate }}</h5>
</div>
} }

<!-- No Data -->
@if(brands && !brands.length){
<app-no-data [class]="'no-data-added'" [text]="'no_brand' | translate" />
}
` }]
  }], null, { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionBrandFilter, { className: "CollectionBrandFilter", filePath: "src/app/components/shop/collection/widgets/filter/collection-brand-filter/collection-brand-filter.ts", lineNumber: 23 });
})();

// src/app/components/shop/collection/widgets/filter/collection-category-filter/collection-category-filter.ts
var _c0 = (a0) => ({ $implicit: a0 });
var _forTrack03 = ($index, $item) => $item.id;
function CollectionCategoryFilter_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "input", 3);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CollectionCategoryFilter_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(2, 3, "search")));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
  }
}
function CollectionCategoryFilter_Conditional_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function CollectionCategoryFilter_Conditional_1_ng_template_2_For_1_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CollectionCategoryFilter_Conditional_1_ng_template_2_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 10);
    \u0275\u0275template(1, CollectionCategoryFilter_Conditional_1_ng_template_2_For_1_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const recursiveCategories_r5 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", recursiveCategories_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, category_r4.subcategories));
  }
}
function CollectionCategoryFilter_Conditional_1_ng_template_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 7)(2, "input", 8);
    \u0275\u0275listener("change", function CollectionCategoryFilter_Conditional_1_ng_template_2_For_1_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, CollectionCategoryFilter_Conditional_1_ng_template_2_For_1_Conditional_5_Template, 2, 4, "ul", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("category-", category_r4 == null ? null : category_r4.id))("value", category_r4 == null ? null : category_r4.slug)("checked", ctx_r1.checked(category_r4 == null ? null : category_r4.slug));
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("category-", category_r4 == null ? null : category_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r4 == null ? null : category_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional((category_r4 == null ? null : category_r4.subcategories.length) ? 5 : -1);
  }
}
function CollectionCategoryFilter_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CollectionCategoryFilter_Conditional_1_ng_template_2_For_1_Template, 6, 8, "li", null, _forTrack03);
    \u0275\u0275pipe(2, "filter");
  }
  if (rf & 2) {
    const categories_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 0, categories_r6, ctx_r1.searchText, "subcategories"));
  }
}
function CollectionCategoryFilter_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "no_category"));
  }
}
function CollectionCategoryFilter_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 4);
    \u0275\u0275template(1, CollectionCategoryFilter_Conditional_1_div_1_Template, 1, 0, "div", 5)(2, CollectionCategoryFilter_Conditional_1_ng_template_2_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CollectionCategoryFilter_Conditional_1_Conditional_4_Template, 4, 3, "div", 6);
    \u0275\u0275pipe(5, "filter");
  }
  if (rf & 2) {
    let tmp_4_0;
    const recursiveCategories_r5 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", recursiveCategories_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c0, ctx_r1.categories));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind3(5, 3, ctx_r1.categories, ctx_r1.searchText, "subcategories")) == null ? null : tmp_4_0.length) === 0 ? 4 : -1);
  }
}
function CollectionCategoryFilter_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 11);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 3, "no_category"));
  }
}
var CollectionCategoryFilter = class _CollectionCategoryFilter {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.store = inject(Store);
    this.category$ = inject(Store).select(CategoryState.category);
    this.selectedCategories = [];
    this.searchText = "";
    this.store.dispatch(new GetCategoriesAction());
  }
  ngOnInit() {
    this.category$.subscribe((res) => {
      this.categories = res.data.filter((category) => category.type == "product");
    });
  }
  ngOnChanges() {
    const filter = this.filter;
    this.selectedCategories = filter["category"] ? filter["category"].split(",") : [];
  }
  applyFilter(event) {
    const index = this.selectedCategories.indexOf(event?.target?.value);
    if (event?.target?.checked)
      this.selectedCategories.push(event?.target?.value);
    else
      this.selectedCategories.splice(index, 1);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        category: this.selectedCategories.length ? this.selectedCategories?.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      // preserve the existing query params in the route
      skipLocationChange: false
      // do trigger navigation
    });
  }
  // check if the item are selected
  checked(item) {
    if (this.selectedCategories?.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function CollectionCategoryFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionCategoryFilter)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionCategoryFilter, selectors: [["app-collection-category-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 3, consts: [["recursiveCategories", ""], [1, "theme-form", "search-box"], [3, "class", "text"], ["type", "text", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [1, "shop-category-list", "custom-sidebar-height"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "search-not-found-box"], [1, "form-check", "collection-filter-checkbox"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "value", "checked"], [1, "form-check-label", 3, "for"], [1, "sub-category-list"], [3, "text"]], template: function CollectionCategoryFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CollectionCategoryFilter_Conditional_0_Template, 3, 5, "div", 1);
        \u0275\u0275conditionalCreate(1, CollectionCategoryFilter_Conditional_1_Template, 6, 9);
        \u0275\u0275conditionalCreate(2, CollectionCategoryFilter_Conditional_2_Template, 2, 5, "app-no-data", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.categories.length > 5 ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.categories.length ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.categories.length ? 2 : -1);
      }
    }, dependencies: [TranslateModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NoData, NgTemplateOutlet, TranslatePipe, SearchFilterPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionCategoryFilter, [{
    type: Component,
    args: [{ selector: "app-collection-category-filter", imports: [TranslateModule, FormsModule, SearchFilterPipe, NoData, NgTemplateOutlet], template: `@if(categories.length > 5){
<div class="theme-form search-box">
  <input
    type="text"
    placeholder="{{'search' | translate}}"
    [(ngModel)]="searchText"
    class="form-control"
  />
</div>
} @if(categories.length){
<ul class="shop-category-list custom-sidebar-height">
  <div *ngTemplateOutlet="recursiveCategories; context: { $implicit: categories }"></div>
  <ng-template #recursiveCategories let-categories>
    @for(category of categories | filter: searchText:'subcategories'; track category.id){
    <li>
      <div class="form-check collection-filter-checkbox">
        <input
          type="checkbox"
          class="form-check-input"
          id="category-{{category?.id}}"
          [value]="category?.slug"
          [checked]="checked(category?.slug!)"
          (change)="applyFilter($event)"
        />
        <label class="form-check-label" for="category-{{category?.id}}">{{ category?.name }}</label>
      </div>
      @if(category?.subcategories.length){
      <ul class="sub-category-list">
        <ng-container
          *ngTemplateOutlet="recursiveCategories; context: { $implicit: category.subcategories }"
        />
      </ul>
      }
    </li>
    }
  </ng-template>
</ul>
@if((categories | filter: searchText:'subcategories')?.length === 0){
<div class="search-not-found-box">
  <h5>{{ 'no_category' | translate }}</h5>
</div>
} }
<!-- No Data -->
@if(!categories.length){
<app-no-data [class]="'no-data-added'" [text]="'no_category' | translate" />
}
` }]
  }], () => [], { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionCategoryFilter, { className: "CollectionCategoryFilter", filePath: "src/app/components/shop/collection/widgets/filter/collection-category-filter/collection-category-filter.ts", lineNumber: 23 });
})();

// src/app/components/shop/collection/widgets/filter/collection-color-filter/collection-color-filter.ts
var _c02 = (a0) => ({ "background-color": a0 });
var _forTrack04 = ($index, $item) => $item.id;
function CollectionColorFilter_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275listener("click", function CollectionColorFilter_Conditional_0_For_3_Template_li_click_0_listener() {
      const color_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleColor(color_r2.slug));
    });
    \u0275\u0275element(1, "span", 5);
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const color_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.isSelected(color_r2.slug));
    \u0275\u0275property("title", color_r2.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("light-color", ctx_r2.isLightColor(color_r2.hex_code || ""));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c02, color_r2.hex_code || "#ccc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(color_r2.name);
  }
}
function CollectionColorFilter_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "ul", 2);
    \u0275\u0275repeaterCreate(2, CollectionColorFilter_Conditional_0_For_3_Template, 4, 9, "li", 3, _forTrack04);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.colors);
  }
}
function CollectionColorFilter_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 3, "no_colors_available"));
  }
}
var CollectionColorFilter = class _CollectionColorFilter {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.store = inject(Store);
    this.destroyRef = inject(DestroyRef);
    this.color$ = inject(Store).select(ColorState.color);
    this.colors = [];
    this.selectedColors = [];
  }
  ngOnInit() {
    this.store.dispatch(new GetColorsAction());
    this.color$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((color) => {
      this.colors = color.data;
    });
  }
  ngOnChanges() {
    const filter = this.filter;
    this.selectedColors = filter["color"] ? filter["color"].split(",") : [];
  }
  toggleColor(slug) {
    const index = this.selectedColors.indexOf(slug);
    if (index === -1) {
      this.selectedColors.push(slug);
    } else {
      this.selectedColors.splice(index, 1);
    }
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        color: this.selectedColors.length ? this.selectedColors.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      skipLocationChange: false
    });
  }
  isSelected(slug) {
    return this.selectedColors.includes(slug);
  }
  isLightColor(hex) {
    if (!hex)
      return false;
    const h = hex.replace("#", "");
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.8;
  }
  static {
    this.\u0275fac = function CollectionColorFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionColorFilter)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionColorFilter, selectors: [["app-collection-color-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "color-filter-wrap"], [3, "class", "text"], [1, "color-swatch-list"], [1, "color-swatch-item", 3, "selected", "title"], [1, "color-swatch-item", 3, "click", "title"], [1, "color-swatch", 3, "ngStyle"], [1, "color-name"], [3, "text"]], template: function CollectionColorFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CollectionColorFilter_Conditional_0_Template, 4, 0, "div", 0);
        \u0275\u0275conditionalCreate(1, CollectionColorFilter_Conditional_1_Template, 2, 5, "app-no-data", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.colors && ctx.colors.length ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.colors && !ctx.colors.length ? 1 : -1);
      }
    }, dependencies: [TranslateModule, NgStyle, NoData, TranslatePipe], styles: ["\n\n.color-filter-wrap[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.color-swatch-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.color-swatch-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  gap: 4px;\n  transition: transform 0.15s ease;\n}\n.color-swatch-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n}\n.color-swatch-item.selected[_ngcontent-%COMP%]   .color-swatch[_ngcontent-%COMP%] {\n  outline: 2px solid var(--theme-color, #0d6efd);\n  outline-offset: 2px;\n  transform: scale(1.12);\n}\n.color-swatch-item.selected[_ngcontent-%COMP%]   .color-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--theme-color, #0d6efd);\n}\n.color-swatch[_ngcontent-%COMP%] {\n  display: block;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  transition: transform 0.15s ease, outline 0.15s ease;\n}\n.color-swatch.light-color[_ngcontent-%COMP%] {\n  border-color: #ccc;\n}\n.color-name[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  text-align: center;\n  max-width: 38px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=collection-color-filter.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionColorFilter, [{
    type: Component,
    args: [{ selector: "app-collection-color-filter", imports: [TranslateModule, NgStyle, NoData], template: `@if(colors && colors.length){
<div class="color-filter-wrap">
  <ul class="color-swatch-list">
    @for(color of colors; track color.id){
    <li
      class="color-swatch-item"
      [class.selected]="isSelected(color.slug)"
      (click)="toggleColor(color.slug)"
      [title]="color.name"
    >
      <span
        class="color-swatch"
        [ngStyle]="{ 'background-color': color.hex_code || '#ccc' }"
        [class.light-color]="isLightColor(color.hex_code || '')"
      ></span>
      <span class="color-name">{{ color.name }}</span>
    </li>
    }
  </ul>
</div>
}

@if(colors && !colors.length){
<app-no-data [class]="'no-data-added'" [text]="'no_colors_available' | translate" />
}
`, styles: ["/* src/app/components/shop/collection/widgets/filter/collection-color-filter/collection-color-filter.scss */\n.color-filter-wrap {\n  padding: 4px 0;\n}\n.color-swatch-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.color-swatch-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  gap: 4px;\n  transition: transform 0.15s ease;\n}\n.color-swatch-item:hover {\n  transform: scale(1.08);\n}\n.color-swatch-item.selected .color-swatch {\n  outline: 2px solid var(--theme-color, #0d6efd);\n  outline-offset: 2px;\n  transform: scale(1.12);\n}\n.color-swatch-item.selected .color-name {\n  font-weight: 600;\n  color: var(--theme-color, #0d6efd);\n}\n.color-swatch {\n  display: block;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  transition: transform 0.15s ease, outline 0.15s ease;\n}\n.color-swatch.light-color {\n  border-color: #ccc;\n}\n.color-name {\n  font-size: 10px;\n  color: #666;\n  text-align: center;\n  max-width: 38px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=collection-color-filter.css.map */\n"] }]
  }], null, { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionColorFilter, { className: "CollectionColorFilter", filePath: "src/app/components/shop/collection/widgets/filter/collection-color-filter/collection-color-filter.ts", lineNumber: 22 });
})();

// src/app/components/shop/collection/widgets/filter/collection-filter/collection-filter.ts
function CollectionFilter_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li")(1, "a", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "textConverter");
    \u0275\u0275domElementStart(4, "i", 4);
    \u0275\u0275domListener("click", function CollectionFilter_Conditional_0_For_9_Template_i_click_4_listener() {
      const filter_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(filter_r4));
    });
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, filter_r4), " ");
  }
}
function CollectionFilter_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "a", 1);
    \u0275\u0275domListener("click", function CollectionFilter_Conditional_0_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "ul", 2);
    \u0275\u0275repeaterCreate(8, CollectionFilter_Conditional_0_For_9_Template, 5, 3, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "filters"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "clear_all"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.filters);
  }
}
var CollectionFilter = class _CollectionFilter {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.filtersObj = {
      category: [],
      brand: [],
      color: [],
      tag: [],
      rating: [],
      price: [],
      attribute: []
    };
  }
  ngOnChanges() {
    this.filtersObj = {
      category: this.splitFilter("category"),
      brand: this.splitFilter("brand"),
      color: this.splitFilter("color"),
      tag: this.splitFilter("tag"),
      rating: this.splitFilter("rating"),
      price: this.splitFilter("price"),
      attribute: this.splitFilter("attribute")
    };
    this.filters = this.mergeFilters();
  }
  remove(tag) {
    Object.keys(this.filtersObj).forEach((key) => {
      this.filtersObj[key] = this.filtersObj[key].filter((val) => {
        if (key === "rating") {
          return val !== tag.replace(/^rating /, "");
        }
        return val !== tag;
      });
    });
    this.filters = this.mergeFilters();
    const params = {};
    Object.keys(this.filtersObj).forEach((key) => {
      params[key] = this.filtersObj[key].length ? this.filtersObj[key]?.join(",") : null;
    });
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: "merge",
      skipLocationChange: false
    });
  }
  clear() {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: null,
      skipLocationChange: false
    });
  }
  splitFilter(filterKey) {
    const filter = this.filter;
    return filter && filter[filterKey] ? filter[filterKey].split(",") : [];
  }
  mergeFilters() {
    return [
      ...this.filtersObj["category"],
      ...this.filtersObj["brand"],
      ...this.filtersObj["color"],
      ...this.filtersObj["tag"],
      ...this.filtersObj["rating"].map((val) => val.startsWith("rating ") ? val : `rating ${val}`),
      ...this.filtersObj["price"],
      ...this.filtersObj["attribute"]
    ];
  }
  formatFilters(filters) {
    if (!filters)
      return "";
    return filters.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  static {
    this.\u0275fac = function CollectionFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionFilter)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionFilter, selectors: [["app-collection-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "filter-title"], ["href", "javascript:void(0)", 3, "click"], [1, "filter-list"], ["href", "javascript:void(0)"], [1, "ri-close-line", "close-icon", 3, "click"]], template: function CollectionFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CollectionFilter_Conditional_0_Template, 10, 6);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.filters.length ? 0 : -1);
      }
    }, dependencies: [TranslateModule, TranslatePipe, TextConverterPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionFilter, [{
    type: Component,
    args: [{ selector: "app-collection-filter", imports: [TranslateModule, TextConverterPipe], template: `@if(filters.length){
<div class="filter-title">
  <h2>{{ 'filters' | translate }}</h2>
  <a href="javascript:void(0)" (click)="clear()">{{ 'clear_all' | translate }}</a>
</div>
<ul class="filter-list">
  @for(filter of filters; track $index){
  <li>
    <a href="javascript:void(0)"
      >{{ filter | textConverter }} <i class="ri-close-line close-icon" (click)="remove(filter)"></i
    ></a>
  </li>
  }
</ul>
}
` }]
  }], null, { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionFilter, { className: "CollectionFilter", filePath: "src/app/components/shop/collection/widgets/filter/collection-filter/collection-filter.ts", lineNumber: 15 });
})();

// src/app/components/shop/collection/widgets/filter/collection-price-filter/collection-price-filter.ts
var _forTrack05 = ($index, $item) => $item.id;
function CollectionPriceFilter_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const price_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", price_r3 == null ? null : price_r3.text, " ", \u0275\u0275pipeBind1(2, 2, price_r3 == null ? null : price_r3.price));
  }
}
function CollectionPriceFilter_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275pipe(3, "currencySymbol");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const price_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, price_r3 == null ? null : price_r3.minPrice), " - ", \u0275\u0275pipeBind1(3, 4, price_r3 == null ? null : price_r3.maxPrice));
  }
}
function CollectionPriceFilter_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "input", 1);
    \u0275\u0275domListener("change", function CollectionPriceFilter_For_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "label", 2);
    \u0275\u0275conditionalCreate(3, CollectionPriceFilter_For_1_Conditional_3_Template, 3, 4, "span", 3)(4, CollectionPriceFilter_For_1_Conditional_4_Template, 4, 6, "span", 3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const price_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("id", \u0275\u0275interpolate1("price-filter", price_r3 == null ? null : price_r3.id))("value", price_r3 == null ? null : price_r3.value)("checked", ctx_r1.checked(price_r3 == null ? null : price_r3.value));
    \u0275\u0275advance();
    \u0275\u0275domProperty("htmlFor", \u0275\u0275interpolate1("price-filter", price_r3 == null ? null : price_r3.id));
    \u0275\u0275advance();
    \u0275\u0275conditional((price_r3 == null ? null : price_r3.price) ? 3 : 4);
  }
}
var CollectionPriceFilter = class _CollectionPriceFilter {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.prices = [
      {
        id: 1,
        price: 100,
        text: "Below",
        value: "100"
      },
      {
        id: 2,
        minPrice: 100,
        maxPrice: 200,
        value: "0-200"
      },
      {
        id: 3,
        minPrice: 200,
        maxPrice: 400,
        value: "200-400"
      },
      {
        id: 4,
        minPrice: 400,
        maxPrice: 600,
        value: "400-600"
      },
      {
        id: 5,
        minPrice: 600,
        maxPrice: 800,
        value: "600-800"
      },
      {
        id: 6,
        minPrice: 800,
        maxPrice: 1e3,
        value: "800-1000"
      },
      {
        id: 7,
        price: 1e3,
        text: "Above",
        value: "1000"
      }
    ];
    this.selectedPrices = [];
  }
  ngOnChanges() {
    const filter = this.filter;
    this.selectedPrices = filter["price"] ? filter["price"].split(",") : [];
  }
  applyFilter(event) {
    const index = this.selectedPrices.indexOf(event?.target?.value);
    if (event?.target?.checked)
      this.selectedPrices.push(event?.target?.value);
    else
      this.selectedPrices.splice(index, 1);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        price: this.selectedPrices.length ? this.selectedPrices?.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      // preserve the existing query params in the route
      skipLocationChange: false
      // do trigger navigation
    });
  }
  // check if the item are selected
  checked(item) {
    if (this.selectedPrices?.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function CollectionPriceFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionPriceFilter)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionPriceFilter, selectors: [["app-collection-price-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [[1, "form-check", "collection-filter-checkbox"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "value", "checked"], [1, "form-check-label", 3, "for"], [1, "name"]], template: function CollectionPriceFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, CollectionPriceFilter_For_1_Template, 5, 7, "div", 0, _forTrack05);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.prices);
      }
    }, dependencies: [CurrencySymbolPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionPriceFilter, [{
    type: Component,
    args: [{ selector: "app-collection-price-filter", imports: [CurrencySymbolPipe], template: '@for(price of prices; track price.id){\n<div class="form-check collection-filter-checkbox">\n  <input\n    type="checkbox"\n    class="form-check-input"\n    id="price-filter{{price?.id}}"\n    [value]="price?.value"\n    [checked]="checked(price?.value!)"\n    (change)="applyFilter($event)"\n  />\n  <label class="form-check-label" for="price-filter{{price?.id}}">\n    @if(price?.price){\n    <span class="name">{{ price?.text }} {{ price?.price | currencySymbol }}</span>\n    }@else {\n    <span class="name"\n      >{{ price?.minPrice | currencySymbol }} - {{ price?.maxPrice | currencySymbol }}</span\n    >\n    }\n  </label>\n</div>\n}\n' }]
  }], null, { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionPriceFilter, { className: "CollectionPriceFilter", filePath: "src/app/components/shop/collection/widgets/filter/collection-price-filter/collection-price-filter.ts", lineNumber: 12 });
})();

// src/app/components/shop/collection/widgets/filter/collection-rating-filter/collection-rating-filter.ts
function CollectionRatingFilter_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "input", 1);
    \u0275\u0275listener("change", function CollectionRatingFilter_For_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "ngb-rating", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const \u0275$index_1_r3 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", \u0275\u0275interpolate1("rating-", ctx_r1.numbers[ctx_r1.numbers.length - \u0275$index_1_r3 - 1]))("value", ctx_r1.numbers[ctx_r1.numbers.length - \u0275$index_1_r3 - 1])("checked", ctx_r1.checked(ctx_r1.numbers[ctx_r1.numbers.length - \u0275$index_1_r3 - 1].toString()));
    \u0275\u0275advance(3);
    \u0275\u0275property("rate", ctx_r1.numbers[ctx_r1.numbers.length - \u0275$index_1_r3 - 1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", ctx_r1.numbers[ctx_r1.numbers.length - \u0275$index_1_r3 - 1], " ", \u0275\u0275pipeBind1(7, 7, "star"), ")");
  }
}
var CollectionRatingFilter = class _CollectionRatingFilter {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.numbers = Array.from({ length: 5 }, (_, i) => i + 1);
    this.selectedRatings = [];
  }
  ngOnChanges() {
    const filter = this.filter;
    this.selectedRatings = filter["rating"] ? filter["rating"].split(",") : [];
  }
  applyFilter(event) {
    const index = this.selectedRatings.indexOf(event?.target?.value);
    if (event?.target?.checked)
      this.selectedRatings.push(event?.target?.value);
    else
      this.selectedRatings.splice(index, 1);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        rating: this.selectedRatings.length ? this.selectedRatings?.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      // preserve the existing query params in the route
      skipLocationChange: false
      // do trigger navigation,
    });
  }
  // check if the item are selected
  checked(item) {
    if (this.selectedRatings?.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function CollectionRatingFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionRatingFilter)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionRatingFilter, selectors: [["app-collection-rating-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [[1, "form-check", "collection-filter-checkbox"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "value", "checked"], [1, "form-check-label"], [1, "product-rating"], [3, "rate"], [1, "text-content"]], template: function CollectionRatingFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, CollectionRatingFilter_For_1_Template, 8, 9, "div", 0, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.numbers);
      }
    }, dependencies: [NgbModule, NgbRating, TranslateModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionRatingFilter, [{
    type: Component,
    args: [{ selector: "app-collection-rating-filter", imports: [NgbModule, TranslateModule], template: `@for(number of numbers; track number; let i = $index){
<div class="form-check collection-filter-checkbox">
  <input
    type="checkbox"
    class="form-check-input"
    id="rating-{{numbers[numbers.length-i-1]}}"
    [value]="numbers[numbers.length-i-1]"
    [checked]="checked(numbers[numbers.length-i-1].toString())"
    (change)="applyFilter($event)"
  />
  <div class="form-check-label">
    <div class="product-rating">
      <ngb-rating [rate]="numbers[numbers.length-i-1]" />
    </div>
    <span class="text-content">({{numbers[numbers.length-i-1]}} {{ 'star' | translate }})</span>
  </div>
</div>
}
` }]
  }], null, { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionRatingFilter, { className: "CollectionRatingFilter", filePath: "src/app/components/shop/collection/widgets/filter/collection-rating-filter/collection-rating-filter.ts", lineNumber: 13 });
})();

// src/app/components/shop/collection/widgets/skeleton-collection-sidebar/skeleton-collection-sidebar.ts
var SkeletonCollectionSidebar = class _SkeletonCollectionSidebar {
  static {
    this.\u0275fac = function SkeletonCollectionSidebar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonCollectionSidebar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonCollectionSidebar, selectors: [["app-skeleton-collection-sidebar"]], decls: 28, vars: 0, consts: [[1, "accordion", "custome-accordion"], [1, "accordion-item", "skeleton-accordion"], [1, "accordion-header"], ["type", "button", 1, "accordion-button"], [1, "accordion-collapse"], [1, "accordion-body"], [1, ""], [1, "placeholder", "col-6"], [1, "placeholder", "col-7"], [1, "placeholder", "col-10"], [1, "placeholder", "col-9"], [1, "placeholder", "col-11"], [1, "placeholder", "col-8"], [1, "placeholder", "col-4"]], template: function SkeletonCollectionSidebar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2)(3, "button", 3);
        \u0275\u0275domElement(4, "span");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(5, "div", 4)(6, "div", 5)(7, "ul", 6);
        \u0275\u0275domElement(8, "li", 7)(9, "li", 8)(10, "li", 9)(11, "li", 10)(12, "li", 8)(13, "li", 7)(14, "li", 8)(15, "li", 11)(16, "li", 10)(17, "li", 8)(18, "li", 12)(19, "li", 8)(20, "li", 11)(21, "li", 10)(22, "li", 8)(23, "li", 7)(24, "li", 12)(25, "li", 13)(26, "li", 10)(27, "li", 8);
        \u0275\u0275domElementEnd()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonCollectionSidebar, [{
    type: Component,
    args: [{ selector: "app-skeleton-collection-sidebar", imports: [], template: '<div class="accordion custome-accordion">\n  <div class="accordion-item skeleton-accordion">\n    <h2 class="accordion-header">\n      <button class="accordion-button" type="button">\n        <span></span>\n      </button>\n    </h2>\n    <div class="accordion-collapse">\n      <div class="accordion-body">\n        <ul class="">\n          <li class="placeholder col-6"></li>\n          <li class="placeholder col-7"></li>\n          <li class="placeholder col-10"></li>\n          <li class="placeholder col-9"></li>\n          <li class="placeholder col-7"></li>\n          <li class="placeholder col-6"></li>\n          <li class="placeholder col-7"></li>\n          <li class="placeholder col-11"></li>\n          <li class="placeholder col-9"></li>\n          <li class="placeholder col-7"></li>\n          <li class="placeholder col-8"></li>\n          <li class="placeholder col-7"></li>\n          <li class="placeholder col-11"></li>\n          <li class="placeholder col-9"></li>\n          <li class="placeholder col-7"></li>\n          <li class="placeholder col-6"></li>\n          <li class="placeholder col-8"></li>\n          <li class="placeholder col-4"></li>\n          <li class="placeholder col-9"></li>\n          <li class="placeholder col-7"></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonCollectionSidebar, { className: "SkeletonCollectionSidebar", filePath: "src/app/components/shop/collection/widgets/skeleton-collection-sidebar/skeleton-collection-sidebar.ts", lineNumber: 9 });
})();

// src/app/components/shop/collection/widgets/sidebar/sidebar.ts
var _c03 = ["*"];
var _forTrack06 = ($index, $item) => $item.id;
function Sidebar_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-collection-sidebar");
  }
}
function Sidebar_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10);
    \u0275\u0275element(6, "app-collection-category-filter", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("col-lg-3", ctx_r0.filter["layout"] === "collection_top_filter");
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "categories"));
    \u0275\u0275advance(4);
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Sidebar_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10);
    \u0275\u0275element(6, "app-collection-brand-filter", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("col-lg-3", ctx_r0.filter["layout"] === "collection_top_filter");
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "brand"));
    \u0275\u0275advance(4);
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Sidebar_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10);
    \u0275\u0275element(6, "app-collection-color-filter", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("col-lg-3", ctx_r0.filter["layout"] === "collection_top_filter");
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "color"));
    \u0275\u0275advance(4);
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Sidebar_Conditional_10_Conditional_3_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10)(5, "div", 11);
    \u0275\u0275element(6, "app-collection-attribute-filter", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("col-lg-3", ctx_r0.filter["layout"] === "collection_top_filter");
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(attribute_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("filter", ctx_r0.filter)("attribute", attribute_r2);
  }
}
function Sidebar_Conditional_10_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Sidebar_Conditional_10_Conditional_3_For_1_Conditional_0_Template, 7, 6, "div", 6);
  }
  if (rf & 2) {
    const attribute_r2 = ctx.$implicit;
    \u0275\u0275conditional(attribute_r2.style === "image" ? 0 : -1);
  }
}
function Sidebar_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Sidebar_Conditional_10_Conditional_3_For_1_Template, 1, 1, null, null, _forTrack06);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater((tmp_2_0 = \u0275\u0275pipeBind1(2, 0, ctx_r0.attribute$)) == null ? null : tmp_2_0.data);
  }
}
function Sidebar_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10)(6, "div", 11);
    \u0275\u0275element(7, "app-collection-price-filter", 5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("col-lg-3", ctx_r0.filter["layout"] === "collection_top_filter");
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "price"));
    \u0275\u0275advance(5);
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Sidebar_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10)(6, "div", 11);
    \u0275\u0275element(7, "app-collection-rating-filter", 5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("col-lg-3", ctx_r0.filter["layout"] === "collection_top_filter");
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "rating"));
    \u0275\u0275advance(5);
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function Sidebar_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Sidebar_Conditional_10_Conditional_0_Template, 7, 7, "div", 6);
    \u0275\u0275conditionalCreate(1, Sidebar_Conditional_10_Conditional_1_Template, 7, 7, "div", 6);
    \u0275\u0275conditionalCreate(2, Sidebar_Conditional_10_Conditional_2_Template, 7, 7, "div", 6);
    \u0275\u0275conditionalCreate(3, Sidebar_Conditional_10_Conditional_3_Template, 3, 2);
    \u0275\u0275conditionalCreate(4, Sidebar_Conditional_10_Conditional_4_Template, 8, 7, "div", 6);
    \u0275\u0275conditionalCreate(5, Sidebar_Conditional_10_Conditional_5_Template, 8, 7, "div", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.hideFilter() && !ctx_r0.hideFilter().includes("category") ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hideFilter() && !ctx_r0.hideFilter().includes("brand") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hideFilter() && !ctx_r0.hideFilter().includes("color") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hideFilter() && !ctx_r0.filter["store_slug"] && !ctx_r0.hideFilter().includes("attribute") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hideFilter() && !ctx_r0.hideFilter().includes("rating") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hideFilter() && !ctx_r0.hideFilter().includes("price") ? 5 : -1);
  }
}
var Sidebar = class _Sidebar {
  constructor() {
    this.store = inject(Store);
    this.attributeService = inject(AttributeService);
    this.sidebarPopup = input(...ngDevMode ? [void 0, { debugName: "sidebarPopup" }] : []);
    this.hideFilter = input([], ...ngDevMode ? [{ debugName: "hideFilter" }] : []);
    this.attribute$ = inject(Store).select(AttributeState.attribute);
    this.store.dispatch(new GetAttributesAction({ status: 1 }));
  }
  closeCanvasMenu() {
    this.attributeService.offCanvasMenu = false;
  }
  static {
    this.\u0275fac = function Sidebar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Sidebar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sidebar, selectors: [["app-collection-sidebar"]], inputs: { filter: "filter", sidebarPopup: [1, "sidebarPopup"], hideFilter: [1, "hideFilter"] }, ngContentSelectors: _c03, decls: 11, vars: 9, consts: [["ngbAccordion", "", 1, "collection-filter-block"], [1, "collection-mobile-back"], [1, "filter-back", 3, "click"], [1, "ri-arrow-left-s-line"], [1, "shop-filter-category"], [3, "filter"], ["ngbAccordionItem", "", 1, "open", 3, "col-lg-3", "collapsed"], ["ngbAccordionItem", "", 1, "open", 3, "collapsed"], ["ngbAccordionButton", ""], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], [1, "custom-sidebar-height"], [3, "filter", "attribute"]], template: function Sidebar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275listener("click", function Sidebar_Template_span_click_2_listener() {
          return ctx.closeCanvasMenu();
        });
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275projection(6);
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275element(8, "app-collection-filter", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, Sidebar_Conditional_9_Template, 1, 0, "app-skeleton-collection-sidebar")(10, Sidebar_Conditional_10_Template, 6, 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("row", ctx.filter["layout"] === "collection_top_filter");
        \u0275\u0275advance();
        \u0275\u0275classProp("col-12", ctx.filter["layout"] === "collection_top_filter");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "back"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("filter", ctx.filter);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.attributeService.skeletonLoader ? 9 : 10);
      }
    }, dependencies: [
      NgbModule,
      NgbAccordionButton,
      NgbAccordionDirective,
      NgbAccordionItem,
      NgbAccordionBody,
      NgbAccordionCollapse,
      TranslateModule,
      CollectionCategoryFilter,
      CollectionAttributeFilter,
      CollectionPriceFilter,
      CollectionRatingFilter,
      CollectionBrandFilter,
      CollectionColorFilter,
      CollectionFilter,
      SkeletonCollectionSidebar,
      TranslatePipe,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{ selector: "app-collection-sidebar", imports: [
      NgbModule,
      TranslateModule,
      CollectionCategoryFilter,
      CollectionAttributeFilter,
      CollectionPriceFilter,
      CollectionRatingFilter,
      CollectionBrandFilter,
      CollectionColorFilter,
      CollectionFilter,
      SkeletonCollectionSidebar,
      AsyncPipe
    ], template: `<div
  class="collection-filter-block"
  [class.row]="filter['layout'] === 'collection_top_filter'"
  ngbAccordion
>
  <div
    class="collection-mobile-back"
    [class.col-12]="filter['layout'] === 'collection_top_filter'"
  >
    <span class="filter-back" (click)="closeCanvasMenu()">
      <i class="ri-arrow-left-s-line"></i> {{ 'back' | translate }}
    </span>
  </div>

  <ng-content />
  <div class="shop-filter-category">
    <app-collection-filter [filter]="filter" />
  </div>

  @if(attributeService.skeletonLoader){
  <app-skeleton-collection-sidebar />
  }@else { @if(hideFilter() && !hideFilter().includes('category')){
  <div
    class="open"
    [class.col-lg-3]="filter['layout'] === 'collection_top_filter'"
    ngbAccordionItem
    [collapsed]="false"
  >
    <button ngbAccordionButton>{{ 'categories' | translate }}</button>
    <div ngbAccordionCollapse>
      <div ngbAccordionBody>
        <app-collection-category-filter [filter]="filter" />
      </div>
    </div>
  </div>
  } @if(hideFilter() && !hideFilter().includes('brand')){
  <div
    class="open"
    [class.col-lg-3]="filter['layout'] === 'collection_top_filter'"
    ngbAccordionItem
    [collapsed]="false"
  >
    <button ngbAccordionButton>{{ 'brand' | translate }}</button>
    <div ngbAccordionCollapse>
      <div ngbAccordionBody>
        <app-collection-brand-filter [filter]="filter" />
      </div>
    </div>
  </div>
  } @if(hideFilter() && !hideFilter().includes('color')){
  <div
    class="open"
    [class.col-lg-3]="filter['layout'] === 'collection_top_filter'"
    ngbAccordionItem
    [collapsed]="false"
  >
    <button ngbAccordionButton>{{ 'color' | translate }}</button>
    <div ngbAccordionCollapse>
      <div ngbAccordionBody>
        <app-collection-color-filter [filter]="filter" />
      </div>
    </div>
  </div>
  } @if(hideFilter() && !filter['store_slug'] && !hideFilter().includes('attribute')){
  @for(attribute of (attribute$ | async)?.data; track attribute.id){ @if(attribute.style ===
  'image'){
  <div
    class="open"
    [class.col-lg-3]="filter['layout'] === 'collection_top_filter'"
    ngbAccordionItem
    [collapsed]="false"
  >
    <button ngbAccordionButton>{{ attribute.name }}</button>
    <div ngbAccordionCollapse>
      <div ngbAccordionBody>
        <div class="custom-sidebar-height">
          <app-collection-attribute-filter [filter]="filter" [attribute]="attribute" />
        </div>
      </div>
    </div>
  </div>
  } } } @if(hideFilter() && !hideFilter().includes('rating')){
  <div
    class="open"
    [class.col-lg-3]="filter['layout'] === 'collection_top_filter'"
    ngbAccordionItem
    [collapsed]="false"
  >
    <button ngbAccordionButton>{{ 'price' | translate }}</button>
    <div ngbAccordionCollapse>
      <div ngbAccordionBody>
        <div class="custom-sidebar-height">
          <app-collection-price-filter [filter]="filter" />
        </div>
      </div>
    </div>
  </div>
  } @if(hideFilter() && !hideFilter().includes('price')){
  <div
    class="open"
    [class.col-lg-3]="filter['layout'] === 'collection_top_filter'"
    ngbAccordionItem
    [collapsed]="false"
  >
    <button ngbAccordionButton>{{ 'rating' | translate }}</button>
    <div ngbAccordionCollapse>
      <div ngbAccordionBody>
        <div class="custom-sidebar-height">
          <app-collection-rating-filter [filter]="filter" />
        </div>
      </div>
    </div>
  </div>
  } }
</div>
` }]
  }], () => [], { filter: [{
    type: Input
  }], sidebarPopup: [{ type: Input, args: [{ isSignal: true, alias: "sidebarPopup", required: false }] }], hideFilter: [{ type: Input, args: [{ isSignal: true, alias: "hideFilter", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sidebar, { className: "Sidebar", filePath: "src/app/components/shop/collection/widgets/sidebar/sidebar.ts", lineNumber: 41 });
})();

// src/app/components/shop/collection/widgets/collection-paginate/collection-paginate.ts
function CollectionPaginate_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "app-pagination", 3);
    \u0275\u0275listener("setPage", function CollectionPaginate_Conditional_0_Template_app_pagination_setPage_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPaginate($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("total", ctx_r1.totalItems)("currentPage", +ctx_r1.filter["page"])("pageSize", +ctx_r1.filter["paginate"]);
  }
}
var CollectionPaginate = class _CollectionPaginate {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.paginationService = inject(PaginationService);
    this.product$ = inject(Store).select(ProductState.product);
    this.totalItems = 0;
    this.product$.subscribe((product) => this.totalItems = product?.total);
  }
  setPaginate(page) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page
      },
      queryParamsHandling: "merge",
      skipLocationChange: false
    });
  }
  static {
    this.\u0275fac = function CollectionPaginate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionPaginate)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionPaginate, selectors: [["app-collection-paginate"]], inputs: { filter: "filter" }, decls: 2, vars: 3, consts: [[1, "product-pagination"], [1, "theme-pagination-block"], ["aria-label", "Page navigation"], [3, "setPage", "total", "currentPage", "pageSize"]], template: function CollectionPaginate_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CollectionPaginate_Conditional_0_Template, 4, 3, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.product$)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.length) ? 0 : -1);
      }
    }, dependencies: [TranslateModule, Pagination, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionPaginate, [{
    type: Component,
    args: [{ selector: "app-collection-paginate", imports: [TranslateModule, Pagination, AsyncPipe], template: `@if((product$ | async)?.data?.length){
<div class="product-pagination">
  <div class="theme-pagination-block">
    <nav aria-label="Page navigation">
      <app-pagination
        [total]="totalItems"
        [currentPage]="+filter['page']"
        [pageSize]="+filter['paginate']"
        (setPage)="setPaginate($event)"
      />
    </nav>
  </div>
</div>
}
` }]
  }], () => [], { filter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionPaginate, { className: "CollectionPaginate", filePath: "src/app/components/shop/collection/widgets/collection-paginate/collection-paginate.ts", lineNumber: 20 });
})();

// src/app/components/shop/collection/widgets/collection-sort/collection-sort.ts
var _c04 = () => [];
function CollectionSort_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function CollectionSort_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openOffCanvasFilter(true));
    });
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "filter"), "\n");
  }
}
function CollectionSort_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h5", 13);
    \u0275\u0275listener("click", function CollectionSort_Conditional_3_Template_h5_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFilter());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "filter_panel"));
  }
}
function CollectionSort_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275element(2, "app-collection-sidebar", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r1.isFilter);
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r1.attributeService.offCanvasMenu && ctx_r1.width < 992 ? "0" : "");
    \u0275\u0275advance();
    \u0275\u0275property("filter", ctx_r1.filter);
  }
}
function CollectionSort_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "select2", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("update", function CollectionSort_Conditional_5_Template_select2_update_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortByFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 19)(4, "select2", 20);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("update", function CollectionSort_Conditional_5_Template_select2_update_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortProductsLength($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("displaySearchStatus", "hidden")("placeholder", \u0275\u0275pipeBind1(2, 8, "sort"))("value", ctx_r1.filter["sortBy"])("data", ctx_r1.sorting ? ctx_r1.sorting : \u0275\u0275pureFunction0(12, _c04));
    \u0275\u0275advance(3);
    \u0275\u0275property("displaySearchStatus", "hidden")("value", ctx_r1.filter["paginate"])("placeholder", \u0275\u0275pipeBind1(5, 10, "sort_item"))("data", ctx_r1.sortingItem ? ctx_r1.sortingItem : \u0275\u0275pureFunction0(13, _c04));
  }
}
function CollectionSort_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "app-collection-sidebar", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r1.attributeService.offCanvasMenu && ctx_r1.width < 992 ? "0" : "");
    \u0275\u0275classProp("d-block", ctx_r1.isFilter && ctx_r1.width > 992);
    \u0275\u0275advance();
    \u0275\u0275property("filter", ctx_r1.filter);
  }
}
var CollectionSort = class _CollectionSort {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.attributeService = inject(AttributeService);
    this.platformId = inject(PLATFORM_ID);
    this.paginationService = inject(PaginationService);
    this.products = input(...ngDevMode ? [void 0, { debugName: "products" }] : []);
    this.topFilter = input(...ngDevMode ? [void 0, { debugName: "topFilter" }] : []);
    this.sidebarPopup = input(...ngDevMode ? [void 0, { debugName: "sidebarPopup" }] : []);
    this.gridCol = input(...ngDevMode ? [void 0, { debugName: "gridCol" }] : []);
    this.setGridClass = output();
    this.sorting = [
      {
        value: "asc",
        label: "Ascending Order"
      },
      {
        value: "desc",
        label: "Descending Order"
      },
      {
        value: "low-high",
        label: "Low - High Price"
      },
      {
        value: "high-low",
        label: "High - Low Price"
      },
      {
        value: "a-z",
        label: "A - Z Order"
      },
      {
        value: "z-a",
        label: "Z - A Order"
      },
      {
        value: "discount-high-low",
        label: "% Off - Hight To Low"
      }
    ];
    this.sortingItem = [
      {
        value: "10",
        label: "10 Products"
      },
      {
        value: "25",
        label: "25 Products"
      },
      {
        value: "50",
        label: "50 Products"
      },
      {
        value: "100",
        label: "100 Products"
      }
    ];
    this.isFilter = false;
    this.popupSidebar = false;
    this.listView = false;
    this.class = "col-xl-3 col-6";
    this.selectedGrid = "collection_3_grid";
    this.gridArray = [
      "collection_2_grid",
      "collection_3_grid",
      "collection_4_grid",
      "collection_list_view"
    ];
    this.setGridClass.emit({ class: this.class, list_view: this.listView });
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser)
      this.width = window.innerWidth;
  }
  onResize() {
    this.width = window.innerWidth;
  }
  ngOnChanges(changes) {
    let layout = changes["filter"]?.currentValue.layout;
    const gridCol = this.gridCol();
    if (gridCol) {
      this.grid(gridCol);
    } else {
      if (this.gridArray.includes(layout)) {
        if (layout) {
          this.selectedGrid = layout;
          this.grid(layout);
        }
      } else if (layout == "collection_no_sidebar" || layout == "collection_top_filter" || layout == "collection_sidebar_popup") {
        this.grid("collection_4_grid");
      } else {
        this.grid(this.selectedGrid);
      }
    }
  }
  grid(value) {
    if (value == "collection_2_grid") {
      this.class = "col-6";
      this.listView = false;
    } else if (value == "collection_3_grid") {
      this.class = "col-lg-4 col-6";
      this.listView = false;
    } else if (value == "collection_4_grid") {
      this.class = "col-xl-3 col-6";
      this.listView = false;
    } else if (value == "collection_grid_view") {
      this.class = "col-xxl-3 col-md-4 col-6";
      this.listView = false;
    } else if (value == "collection_list_view") {
      this.class = "col-sm-12 col-6";
      this.listView = true;
    }
    if (value) {
      this.selectedGrid = value;
    }
    this.setGridClass.emit({ class: this.class, list_view: this.listView });
  }
  // SortBy Filter
  sortByFilter(data) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sortBy: data && data.value ? data.value : null,
        field: data && (data.value == "asc" || data.value == "desc") ? "created_at" : null
      },
      queryParamsHandling: "merge",
      // preserve the existing query params in the route
      skipLocationChange: false
      // do trigger navigation
    });
  }
  sortProductsLength(data) {
    this.filter["paginate"] = data.value ? data.value : this.filter["paginate"];
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        paginate: data.value
      },
      queryParamsHandling: "merge",
      // preserve the existing query params in the route
      skipLocationChange: false
      // do trigger navigation
    });
  }
  openOffCanvasFilter(value) {
    this.attributeService.offCanvasMenu = value;
  }
  openFilter() {
    this.isFilter = !this.isFilter;
    if (this.isBrowser) {
      if (window.innerWidth < 992) {
        this.attributeService.offCanvasMenu = true;
      }
    }
  }
  static {
    this.\u0275fac = function CollectionSort_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionSort)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionSort, selectors: [["app-collection-sort"]], hostBindings: function CollectionSort_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function CollectionSort_resize_HostBindingHandler() {
          return ctx.onResize();
        }, \u0275\u0275resolveWindow);
      }
    }, inputs: { filter: "filter", products: [1, "products"], topFilter: [1, "topFilter"], sidebarPopup: [1, "sidebarPopup"], gridCol: [1, "gridCol"] }, outputs: { setGridClass: "setGridClass" }, features: [\u0275\u0275NgOnChangesFeature], decls: 17, vars: 15, consts: [[1, "filter-main-btn", "btn"], [3, "ngClass"], [1, "filter-bottom-title"], [1, "open-popup", 3, "open"], [1, "collection-grid-view"], [3, "click"], ["src", "assets/images/icon/2.png", "alt", "sort", 1, "product-2-layout-view"], ["src", "assets/images/icon/3.png", "alt", "sort", 1, "product-3-layout-view"], ["src", "assets/images/icon/4.png", "alt", "sort", 1, "product-4-layout-view"], ["src", "assets/images/icon/list.png", "alt", "sort", 1, "product-6-layout-view"], [1, "collection-filter", "container-fluid", "top-filter", "filter-bottom-content", 3, "d-block", "left"], [1, "filter-main-btn", "btn", 3, "click"], [1, "fa", "fa-filter"], [1, "filter-bottom-title", 3, "click"], [1, "open-popup"], [1, "collection-filter"], [3, "filter"], [1, "product-page-per-view"], [1, "custom-select", 3, "update", "displaySearchStatus", "placeholder", "value", "data"], [1, "product-page-filter"], [1, "custom-select", 3, "update", "displaySearchStatus", "value", "placeholder", "data"], [1, "collection-filter", "container-fluid", "top-filter", "filter-bottom-content"]], template: function CollectionSort_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CollectionSort_Conditional_0_Template, 4, 3, "button", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 1);
        \u0275\u0275conditionalCreate(3, CollectionSort_Conditional_3_Template, 3, 3, "h5", 2);
        \u0275\u0275conditionalCreate(4, CollectionSort_Conditional_4_Template, 3, 5, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, CollectionSort_Conditional_5_Template, 6, 14);
        \u0275\u0275elementStart(6, "div", 4)(7, "ul")(8, "li", 5);
        \u0275\u0275listener("click", function CollectionSort_Template_li_click_8_listener() {
          return ctx.grid("collection_2_grid");
        });
        \u0275\u0275element(9, "img", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "li", 5);
        \u0275\u0275listener("click", function CollectionSort_Template_li_click_10_listener() {
          return ctx.grid("collection_3_grid");
        });
        \u0275\u0275element(11, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "li", 5);
        \u0275\u0275listener("click", function CollectionSort_Template_li_click_12_listener() {
          return ctx.grid("collection_4_grid");
        });
        \u0275\u0275element(13, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "li", 5);
        \u0275\u0275listener("click", function CollectionSort_Template_li_click_14_listener() {
          return ctx.grid("collection_list_view");
        });
        \u0275\u0275element(15, "img", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(16, CollectionSort_Conditional_16_Template, 2, 5, "div", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.filter["layout"] !== "collection_no_sidebar" && ctx.filter["layout"] !== "collection_top_filter" && ctx.filter["layout"] !== "collection_sidebar_popup" ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.filter["layout"] === "collection_sidebar_popup" ? "popup-filter" : "product-filter-content");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.filter["layout"] === "collection_sidebar_popup" ? "sidebar-popup" : "search-count");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filter["layout"] === "collection_top_filter" || ctx.filter["layout"] === "collection_sidebar_popup" ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filter["layout"] === "collection_sidebar_popup" ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isBrowser ? 5 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.selectedGrid === "collection_2_grid");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedGrid === "collection_3_grid");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedGrid === "collection_4_grid");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedGrid === "collection_list_view");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filter["layout"] === "collection_top_filter" ? 16 : -1);
      }
    }, dependencies: [Select2Module, Select2, TranslateModule, Sidebar, NgClass, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionSort, [{
    type: Component,
    args: [{ selector: "app-collection-sort", imports: [Select2Module, TranslateModule, Sidebar, NgClass], template: `@if(filter['layout'] !== 'collection_no_sidebar' && filter['layout'] !==
'collection_top_filter' && filter['layout'] !== 'collection_sidebar_popup'){
<button class="filter-main-btn btn" (click)="openOffCanvasFilter(true)">
  <i class="fa fa-filter"></i> {{ 'filter' | translate }}
</button>
}

<div
  [ngClass]=" filter['layout'] === 'collection_sidebar_popup' ? 'popup-filter' : 'product-filter-content'"
>
  <div
    [ngClass]=" filter['layout'] === 'collection_sidebar_popup' ? 'sidebar-popup' : 'search-count'"
  >
    @if(filter['layout'] === 'collection_top_filter' || filter['layout'] ===
    'collection_sidebar_popup'){
    <h5 class="filter-bottom-title" (click)="openFilter()">{{ 'filter_panel' | translate }}</h5>
    } @if(filter['layout'] === 'collection_sidebar_popup'){
    <div class="open-popup" [class.open]="isFilter">
      <div
        class="collection-filter"
        [style.left]="attributeService.offCanvasMenu && width < 992 ? '0' : ''"
      >
        <app-collection-sidebar [filter]="filter" />
      </div>
    </div>
    }
  </div>
  @if(isBrowser){
  <div class="product-page-per-view">
    <select2
      class="custom-select"
      [displaySearchStatus]="'hidden'"
      [placeholder]="'sort' | translate"
      [value]="filter['sortBy']"
      [data]="sorting ? sorting : []"
      (update)="sortByFilter($event)"
    />
  </div>
  <div class="product-page-filter">
    <select2
      class="custom-select"
      [displaySearchStatus]="'hidden'"
      [value]="filter['paginate']"
      [placeholder]="'sort_item' | translate"
      [data]="sortingItem ? sortingItem : []"
      (update)="sortProductsLength($event)"
    />
  </div>
  }

  <div class="collection-grid-view">
    <ul>
      <li [class.active]="selectedGrid === 'collection_2_grid'" (click)="grid('collection_2_grid')">
        <img src="assets/images/icon/2.png" alt="sort" class="product-2-layout-view" />
      </li>
      <li [class.active]="selectedGrid === 'collection_3_grid'" (click)="grid('collection_3_grid')">
        <img src="assets/images/icon/3.png" alt="sort" class="product-3-layout-view" />
      </li>
      <li [class.active]="selectedGrid === 'collection_4_grid'" (click)="grid('collection_4_grid')">
        <img src="assets/images/icon/4.png" alt="sort" class="product-4-layout-view" />
      </li>
      <li
        [class.active]="selectedGrid === 'collection_list_view'"
        (click)="grid('collection_list_view')"
      >
        <img src="assets/images/icon/list.png" alt="sort" class="product-6-layout-view" />
      </li>
    </ul>
  </div>

  @if(filter['layout'] === 'collection_top_filter'){
  <div
    class="collection-filter container-fluid top-filter filter-bottom-content"
    [class.d-block]="isFilter && width > 992"
    [style.left]="attributeService.offCanvasMenu && width < 992 ? '0' : ''"
  >
    <app-collection-sidebar [filter]="filter" />
  </div>
  }
</div>
` }]
  }], () => [], { filter: [{
    type: Input
  }], products: [{ type: Input, args: [{ isSignal: true, alias: "products", required: false }] }], topFilter: [{ type: Input, args: [{ isSignal: true, alias: "topFilter", required: false }] }], sidebarPopup: [{ type: Input, args: [{ isSignal: true, alias: "sidebarPopup", required: false }] }], gridCol: [{ type: Input, args: [{ isSignal: true, alias: "gridCol", required: false }] }], setGridClass: [{ type: Output, args: ["setGridClass"] }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionSort, { className: "CollectionSort", filePath: "src/app/components/shop/collection/widgets/collection-sort/collection-sort.ts", lineNumber: 28 });
})();

// src/app/components/shop/collection/widgets/collection-products/collection-products.ts
var _forTrack07 = ($index, $item) => $item.id;
function CollectionProducts_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-skeleton-product-box");
    \u0275\u0275elementEnd();
  }
}
function CollectionProducts_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CollectionProducts_Conditional_5_For_1_Template, 2, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.skeletonItems);
  }
}
function CollectionProducts_Conditional_6_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-eleven", 10);
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("product", product_r2);
  }
}
function CollectionProducts_Conditional_6_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box", 10);
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("product", product_r2);
  }
}
function CollectionProducts_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, CollectionProducts_Conditional_6_For_1_Conditional_1_Template, 1, 3, "app-product-box-eleven", 9)(2, CollectionProducts_Conditional_6_For_1_Conditional_2_Template, 1, 3, "app-product-box", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.gridClass);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.listView ? 1 : 2);
  }
}
function CollectionProducts_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 11);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", \u0275\u0275pipeBind1(1, 5, "no_product"))("description", \u0275\u0275pipeBind1(2, 7, "no_product_desc"));
  }
}
function CollectionProducts_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CollectionProducts_Conditional_6_For_1_Template, 3, 3, "div", 7, _forTrack07);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, CollectionProducts_Conditional_6_Conditional_3_Template, 3, 9, "app-no-data", 8);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.filter["layout"] === "collection_product_infinite_scroll" ? \u0275\u0275pipeBind1(2, 1, ctx_r0.moreProduct$) : ctx_r0.paginateProduct);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind1(4, 3, ctx_r0.moreProduct$)) == null ? null : tmp_2_0.length) && !((tmp_2_0 = \u0275\u0275pipeBind1(5, 5, ctx_r0.product$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length) && !ctx_r0.productService.skeletonLoader ? 3 : -1);
  }
}
function CollectionProducts_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
}
function CollectionProducts_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.finished ? "no_more_product" : "load_more"), " ");
  }
}
function CollectionProducts_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "a", 12);
    \u0275\u0275listener("click", function CollectionProducts_Conditional_7_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onScroll(1));
    });
    \u0275\u0275conditionalCreate(2, CollectionProducts_Conditional_7_Conditional_2_Template, 1, 0, "img", 13)(3, CollectionProducts_Conditional_7_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r0.products === ctx_r0.total_product);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.button_loader ? 2 : 3);
  }
}
function CollectionProducts_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-paginate", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
var CollectionProducts = class _CollectionProducts {
  constructor() {
    this.store = inject(Store);
    this.productService = inject(ProductService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.product$ = inject(Store).select(ProductState.product);
    this.moreProduct$ = inject(Store).select(ProductState.moreProduct);
    this.gridCol = input(...ngDevMode ? [void 0, { debugName: "gridCol" }] : []);
    this.topFilter = input(false, ...ngDevMode ? [{ debugName: "topFilter" }] : []);
    this.infiniteScroll = input(false, ...ngDevMode ? [{ debugName: "infiniteScroll" }] : []);
    this.gridClass = "col-xl-3 col-6";
    this.listView = false;
    this.button_loader = false;
    this.finished = false;
    this.skeletonItems = Array.from({ length: 40 }, (_, index) => index);
    this.scrollFilter = {
      page: 1,
      paginate: 9
    };
    this.pagination = 9;
    this.count = 0;
  }
  ngOnInit() {
    this.product$.subscribe((res) => {
      this.productsArray = res.data;
      this.total = res.total;
    });
    this.setPage();
  }
  ngOnChanges(changes) {
    this.filter = changes["filter"].currentValue;
    this.route.queryParams.subscribe(() => {
      this.total_product = 0;
      this.productSubscription = this.product$.subscribe((product) => {
        if (product && product.total) {
          this.total_product = product.total;
        }
      });
      const filter = this.filter;
      if (filter["layout"] == "collection_product_infinite_scroll") {
        this.moreProductSubscription = this.moreProduct$.subscribe((product) => {
          if (product && product.length) {
            this.products = product.length;
          }
          if (this.total_product != this.products) {
            this.finished = false;
          } else {
            this.finished = true;
          }
        });
        this.scrollFilter = __spreadProps(__spreadValues({}, filter), {
          page: this.scrollFilter["page"],
          paginate: this.scrollFilter["paginate"]
        });
      }
      void this.router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          if (this.productSubscription && this.moreProductSubscription) {
            this.productSubscription.unsubscribe();
            this.moreProductSubscription.unsubscribe();
          }
        }
      });
    });
  }
  setGridClass(value) {
    this.gridClass = value.class;
    this.listView = value.list_view;
  }
  onScroll(value) {
    if (this.products != this.total_product) {
      this.button_loader = true;
      this.scrollFilter["page"] = this.scrollFilter["page"] + value;
      this.store.dispatch(new GetMoreProductAction(this.scrollFilter, true)).subscribe({
        complete: () => {
          this.button_loader = false;
        }
      });
    } else {
      this.finished = true;
    }
  }
  setPage() {
    this.product$.subscribe((res) => {
      this.productsArray = res.data;
      this.paginateProduct = this.productsArray.map((product) => __spreadValues({}, product)).slice((this.filter["page"] - 1) * this.filter["paginate"], (this.filter["page"] - 1) * this.filter["paginate"] + this.filter["paginate"]);
    });
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.filter["page"]
      },
      queryParamsHandling: "merge",
      skipLocationChange: false
    });
  }
  ngOnDestroy() {
    if (this.productSubscription && this.moreProductSubscription) {
      this.productSubscription.unsubscribe();
      this.moreProductSubscription.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function CollectionProducts_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionProducts)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionProducts, selectors: [["app-collection-products"]], inputs: { filter: "filter", gridCol: [1, "gridCol"], topFilter: [1, "topFilter"], infiniteScroll: [1, "infiniteScroll"] }, features: [\u0275\u0275NgOnChangesFeature], decls: 11, vars: 17, consts: [[1, "product-top-filter"], [3, "setGridClass", "filter", "gridCol", "products", "topFilter"], [1, "product-wrapper-grid"], [1, "row", "margin-res", "g-4"], [1, "load-more-sec"], [3, "filter"], [1, "col-6", "col-lg-4"], [3, "class"], [3, "class", "image", "text", "description"], [3, "product", "style"], [3, "product"], [3, "image", "text", "description"], ["href", "javascript:void(0)", 1, "loadMore", 3, "click"], ["src", "assets/images/loader.gif", "alt", "gif"]], template: function CollectionProducts_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "app-collection-sort", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275listener("setGridClass", function CollectionProducts_Template_app_collection_sort_setGridClass_1_listener($event) {
          return ctx.setGridClass($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275conditionalCreate(5, CollectionProducts_Conditional_5_Template, 2, 0)(6, CollectionProducts_Conditional_6_Template, 6, 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, CollectionProducts_Conditional_7_Template, 4, 3, "div", 4);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275conditionalCreate(9, CollectionProducts_Conditional_9_Template, 1, 1, "app-collection-paginate", 5);
        \u0275\u0275pipe(10, "async");
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_7_0;
        let tmp_8_0;
        \u0275\u0275advance();
        \u0275\u0275property("filter", ctx.filter)("gridCol", ctx.gridCol())("products", (tmp_2_0 = \u0275\u0275pipeBind1(2, 11, ctx.product$)) == null ? null : tmp_2_0.total)("topFilter", ctx.topFilter());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("list-view", ctx.listView)("product-load-more", ctx.infiniteScroll());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.productService.skeletonLoader ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.infiniteScroll() && !ctx.productService.skeletonLoader && ((tmp_7_0 = \u0275\u0275pipeBind1(8, 13, ctx.moreProduct$)) == null ? null : tmp_7_0.length) ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_8_0 = \u0275\u0275pipeBind1(10, 15, ctx.product$)) == null ? null : tmp_8_0.data == null ? null : tmp_8_0.data.length) && !ctx.productService.skeletonLoader && !ctx.infiniteScroll() ? 9 : -1);
      }
    }, dependencies: [
      TranslateModule,
      ProductBox,
      CollectionSort,
      CollectionPaginate,
      NoData,
      ProductBoxEleven,
      SkeletonProductBox,
      TranslatePipe,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionProducts, [{
    type: Component,
    args: [{ selector: "app-collection-products", imports: [
      TranslateModule,
      ProductBox,
      CollectionSort,
      CollectionPaginate,
      NoData,
      ProductBoxEleven,
      SkeletonProductBox,
      AsyncPipe
    ], template: `<div class="product-top-filter">
  <app-collection-sort
    [filter]="filter"
    [gridCol]="gridCol()"
    (setGridClass)="setGridClass($event)"
    [products]="(product$ | async)?.total"
    [topFilter]="topFilter()"
  />
</div>

<div
  class="product-wrapper-grid"
  [class.list-view]="listView"
  [class.product-load-more]="infiniteScroll()"
>
  <div class="row margin-res g-4">
    @if(productService.skeletonLoader){ @for(item of skeletonItems; track item){
    <div class="col-6 col-lg-4">
      <app-skeleton-product-box />
    </div>
    } } @else { @for(product of filter['layout'] === 'collection_product_infinite_scroll' ?
    (moreProduct$ | async) : paginateProduct; track product.id){
    <div [class]="gridClass">
      @if(listView){
      <app-product-box-eleven [product]="product" [style]="'vertical'" />
      }@else{
      <app-product-box [product]="product" [style]="'vertical'" />
      }
    </div>
    } @if(!(moreProduct$ | async)?.length && !(product$ | async)?.data?.length &&
    !productService.skeletonLoader){
    <app-no-data
      [class]="'no-data-added'"
      [image]="'assets/svg/empty-items.svg'"
      [text]="'no_product' | translate"
      [description]="'no_product_desc' | translate"
    />
    } }
  </div>
</div>

@if(infiniteScroll() && !productService.skeletonLoader && (moreProduct$ | async)?.length){
<div class="load-more-sec">
  <a
    href="javascript:void(0)"
    class="loadMore"
    [class.disabled]="products === total_product"
    (click)="onScroll(1)"
  >
    @if(button_loader){
    <img src="assets/images/loader.gif" alt="gif" />
    }@else { {{ (finished ? 'no_more_product' : 'load_more') | translate }} }
  </a>
</div>
} @if((product$ | async)?.data?.length && !productService.skeletonLoader && !infiniteScroll()){
<app-collection-paginate [filter]="filter" />
}
` }]
  }], null, { filter: [{
    type: Input
  }], gridCol: [{ type: Input, args: [{ isSignal: true, alias: "gridCol", required: false }] }], topFilter: [{ type: Input, args: [{ isSignal: true, alias: "topFilter", required: false }] }], infiniteScroll: [{ type: Input, args: [{ isSignal: true, alias: "infiniteScroll", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionProducts, { className: "CollectionProducts", filePath: "src/app/components/shop/collection/widgets/collection-products/collection-products.ts", lineNumber: 35 });
})();

export {
  Sidebar,
  CollectionProducts
};
//# sourceMappingURL=chunk-YERUUJJG.js.map
