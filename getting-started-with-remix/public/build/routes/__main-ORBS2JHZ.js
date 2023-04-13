import {
  NavLink,
  Outlet
} from "/build/_shared/chunk-7WRLVHBK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-I4EXBEXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/navigation.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var routes = [
  { path: "/", label: "\u{1F3E0}" },
  { path: "villains", label: "villains" },
  { path: "pokemon", label: "pokemon" },
  { path: "pokemon-v2", label: "pokemon-v2" },
  { path: "heroes", label: "heroes" },
  { path: "todos", label: "todos" },
  { path: "settings", label: "settings" },
  { path: "profile", label: "profile" }
];
var Navigation = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "nav",
    {
      className: "flex w-full flex-row flex-wrap items-center justify-between",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: routes.map((r, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          NavLink,
          {
            to: r.path,
            target: r.path === "villains" ? "_blank" : "",
            className: ({ isActive }) => isActive ? "active" : "inactive",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn capitalize", children: r.label }, void 0, false, {
              fileName: "app/components/navigation.tsx",
              lineNumber: 33,
              columnNumber: 15
            }, this)
          },
          i,
          false,
          {
            fileName: "app/components/navigation.tsx",
            lineNumber: 27,
            columnNumber: 13
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/navigation.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
};
var navigation_default = Navigation;

// app/routes/__main.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function MainLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(navigation_default, {}, void 0, false, {
      fileName: "app/routes/__main.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/__main.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__main.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
export {
  MainLayout as default
};
//# sourceMappingURL=/build/routes/__main-ORBS2JHZ.js.map
