import {
  Link,
  Outlet,
  useCatch
} from "/build/_shared/chunk-7WRLVHBK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-I4EXBEXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__dashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DashboardLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex content-start items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Sidebar Navigation Menus here" }, void 0, false, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__dashboard.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Dashboard Error" }, void 0, false, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error.message }, void 0, false, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
        fileName: "app/routes/__dashboard.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__dashboard.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Oops! Looks like you tried to visit a page that you do not have access to. Back to ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
          fileName: "app/routes/__dashboard.tsx",
          lineNumber: 38,
          columnNumber: 23
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/__dashboard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Oops! Looks like you tried to visit a page that does not exist. Back to ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
          fileName: "app/routes/__dashboard.tsx",
          lineNumber: 46,
          columnNumber: 14
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/__dashboard.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
      caught.status,
      ": ",
      caught.statusText
    ] }, void 0, true, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    message
  ] }, void 0, true, {
    fileName: "app/routes/__dashboard.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__dashboard.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  DashboardLayout as default
};
//# sourceMappingURL=/build/routes/__dashboard-KE73NOL2.js.map
