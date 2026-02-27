import {
  GetPageBySlugAction
} from "./chunk-QL2HLPW7.js";
import {
  Store
} from "./chunk-6YJBSKCB.js";
import {
  inject
} from "./chunk-EGYGZ7MZ.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/shared/resolver/page.resolver.ts
var PageResolver = (route, _state) => {
  const store = inject(Store);
  const slug = route.paramMap.get("slug");
  if (!slug) {
    throw new Error("Slug parameter is missing");
  }
  return store.dispatch(new GetPageBySlugAction(slug));
};

// src/app/components/page/page.routes.ts
var page = [
  __spreadValues({
    path: "about-us",
    loadComponent: () => import("./chunk-QBGT6FPW.js").then((m) => m.AboutUs)
  }, false ? { \u0275entryName: "src/app/components/page/about-us/about-us.ts" } : {}),
  __spreadValues({
    path: "contact-us",
    loadComponent: () => import("./chunk-7JMNSIIW.js").then((m) => m.ContactUs)
  }, false ? { \u0275entryName: "src/app/components/page/contact-us/contact-us.ts" } : {}),
  __spreadValues({
    path: "faq",
    loadComponent: () => import("./chunk-K2WR34HJ.js").then((m) => m.Faq)
  }, false ? { \u0275entryName: "src/app/components/page/faq/faq.ts" } : {}),
  __spreadValues({
    path: "search",
    loadComponent: () => import("./chunk-4BNXSXME.js").then((m) => m.Search)
  }, false ? { \u0275entryName: "src/app/components/page/search/search.ts" } : {}),
  __spreadValues({
    path: "offers",
    loadComponent: () => import("./chunk-ENFSMHD3.js").then((m) => m.Offer)
  }, false ? { \u0275entryName: "src/app/components/page/offer/offer.ts" } : {}),
  __spreadValues({
    path: "flights",
    loadComponent: () => import("./chunk-SIFYS2NB.js").then((m) => m.FlightBookingComponent)
  }, false ? { \u0275entryName: "src/app/components/page/flight-booking/flight-booking.component.ts" } : {}),
  __spreadValues({
    path: "parcel-service",
    loadComponent: () => import("./chunk-XKHNDKOY.js").then((m) => m.ParcelServiceComponent)
  }, false ? { \u0275entryName: "src/app/components/page/parcel-service/parcel-service.component.ts" } : {}),
  __spreadValues({
    path: "404",
    loadComponent: () => import("./chunk-KUDKBN5N.js").then((m) => m.Error404)
  }, false ? { \u0275entryName: "src/app/components/page/error404/error404.ts" } : {}),
  __spreadValues({
    path: "page/:slug",
    loadComponent: () => import("./chunk-U73RCVRH.js").then((m) => m.Page),
    resolve: {
      data: PageResolver
    }
  }, false ? { \u0275entryName: "src/app/components/page/page/page.ts" } : {})
];
export {
  page
};
//# sourceMappingURL=chunk-YUUAIEEZ.js.map
