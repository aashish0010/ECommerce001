import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/components/account/account.routes.ts
var account = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-5WRAUA2Z.js").then((m) => m.Account),
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-VR6TSFPN.js").then((m) => m.Dashboard)
      },
      {
        path: "notifications",
        loadComponent: () => import("./chunk-DFB2653Z.js").then((m) => m.Notification)
      },
      {
        path: "bank-details",
        loadComponent: () => import("./chunk-GXPMA6FD.js").then((m) => m.BankDetails)
      },
      {
        path: "wallet",
        loadComponent: () => import("./chunk-SEASATOV.js").then((m) => m.Wallet)
      },
      {
        path: "point",
        loadComponent: () => import("./chunk-QJBNYCQ6.js").then((m) => m.Point)
      },
      {
        path: "order",
        loadComponent: () => import("./chunk-23S56LVB.js").then((m) => m.Orders)
      },
      {
        path: "order/details/:id",
        loadComponent: () => import("./chunk-XAEFZOH4.js").then((m) => m.Details)
      },
      {
        path: "downloads",
        loadComponent: () => import("./chunk-NX53ITXE.js").then((m) => m.Downloads)
      },
      {
        path: "refund",
        loadComponent: () => import("./chunk-S6ONWWUE.js").then((m) => m.Refund)
      },
      {
        path: "addresses",
        loadComponent: () => import("./chunk-AAOBU6JI.js").then((m) => m.Addresses)
      }
    ]
  }, false ? { \u0275entryName: "src/app/components/account/account.ts" } : {})
];
export {
  account
};
//# sourceMappingURL=chunk-YZOQ5TTF.js.map
