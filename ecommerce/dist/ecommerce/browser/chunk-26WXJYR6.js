import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/components/account/account.routes.ts
var account = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-XW7HMSIF.js").then((m) => m.Account),
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-7J6VTPPN.js").then((m) => m.Dashboard)
      },
      {
        path: "notifications",
        loadComponent: () => import("./chunk-YVR7PEWT.js").then((m) => m.Notification)
      },
      {
        path: "bank-details",
        loadComponent: () => import("./chunk-M7M5HPPW.js").then((m) => m.BankDetails)
      },
      {
        path: "wallet",
        loadComponent: () => import("./chunk-JWG4SOHZ.js").then((m) => m.Wallet)
      },
      {
        path: "point",
        loadComponent: () => import("./chunk-FXI7RL7Z.js").then((m) => m.Point)
      },
      {
        path: "order",
        loadComponent: () => import("./chunk-MWDWKVVZ.js").then((m) => m.Orders)
      },
      {
        path: "order/details/:id",
        loadComponent: () => import("./chunk-YVTSC5JZ.js").then((m) => m.Details)
      },
      {
        path: "downloads",
        loadComponent: () => import("./chunk-2UX4ZG4Z.js").then((m) => m.Downloads)
      },
      {
        path: "refund",
        loadComponent: () => import("./chunk-FT6URFVI.js").then((m) => m.Refund)
      },
      {
        path: "addresses",
        loadComponent: () => import("./chunk-SBC2Q3CG.js").then((m) => m.Addresses)
      }
    ]
  }, false ? { \u0275entryName: "src/app/components/account/account.ts" } : {})
];
export {
  account
};
//# sourceMappingURL=chunk-26WXJYR6.js.map
