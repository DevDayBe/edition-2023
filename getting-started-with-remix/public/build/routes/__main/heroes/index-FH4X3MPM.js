import "/build/_shared/chunk-6GJ6MYMR.js";
import {
  NavLink,
  useLoaderData
} from "/build/_shared/chunk-7WRLVHBK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-I4EXBEXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__main/heroes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Heroes() {
  const heroes = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Marvel Heroes" }, void 0, false, {
      fileName: "app/routes/__main/heroes/index.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    heroes.map((h) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: h.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      h.firstName,
      " ",
      h.lastName
    ] }, void 0, true, {
      fileName: "app/routes/__main/heroes/index.tsx",
      lineNumber: 22,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/__main/heroes/index.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this) }, h.id, false, {
      fileName: "app/routes/__main/heroes/index.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/__main/heroes/index.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__main/heroes/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
export {
  Heroes as default
};
//# sourceMappingURL=/build/routes/__main/heroes/index-FH4X3MPM.js.map
