var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes2
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// node_modules/.pnpm/react-toastify@9.1.2_react-dom@18.2.0_react@18.2.0/node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-4MRJXV5T.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-6M4FD3WZ.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "stylesheet",
    href: ReactToastify_default
  },
  { rel: "stylesheet", href: tailwind_default }
], meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function Document2({
  children,
  title = "Remix: So great, it's funny!"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "dark", children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 51
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
function Layout2({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container prose w-full p-4", children }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document2, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "There was an error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      "Hey, developer, you should replace this with what you want your users to see. Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 35
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 89,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 88,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Oops! Looks like you tried to visit a page that you do not have access to. Back to ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "safety" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 113,
          columnNumber: 23
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Oops! Looks like you tried to visit a page that does not exist. Back to ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "safety" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 121,
          columnNumber: 14
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document2, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: [
      caught.status,
      ": ",
      caught.statusText
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this),
    message
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 132,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}

// app/routes/__dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => DashboardLayout
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function DashboardLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex content-start items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Sidebar Navigation Menus here" }, void 0, !1, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__dashboard.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Dashboard Error" }, void 0, !1, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/routes/__dashboard.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__dashboard.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function CatchBoundary2() {
  let caught = (0, import_react3.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Oops! Looks like you tried to visit a page that you do not have access to. Back to ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "safety" }, void 0, !1, {
          fileName: "app/routes/__dashboard.tsx",
          lineNumber: 38,
          columnNumber: 23
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/__dashboard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Oops! Looks like you tried to visit a page that does not exist. Back to ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "safety" }, void 0, !1, {
          fileName: "app/routes/__dashboard.tsx",
          lineNumber: 46,
          columnNumber: 14
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/__dashboard.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
      caught.status,
      ": ",
      caught.statusText
    ] }, void 0, !0, {
      fileName: "app/routes/__dashboard.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    message
  ] }, void 0, !0, {
    fileName: "app/routes/__dashboard.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__dashboard.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/routes/__dashboard/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => Settings
});
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Settings() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Settings works!" }, void 0, !1, {
    fileName: "app/routes/__dashboard/settings.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__dashboard/settings.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/__dashboard/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile,
  loader: () => loader
});

// app/http-client/config.ts
var import_axios = __toESM(require("axios")), api = import_axios.default.create({
  baseURL: "http://localhost:5000/api/"
});
async function get(path) {
  return await api.get(path);
}

// app/routes/__dashboard/profile.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader = async () => {
  let { data } = await get("https://chefgpt.io/api/v2/user/1");
  return data;
};
function Profile() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: "Profile" }, void 0, !1, {
    fileName: "app/routes/__dashboard/profile.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/__main.tsx
var main_exports = {};
__export(main_exports, {
  default: () => MainLayout
});
var import_react5 = require("@remix-run/react");

// app/components/navigation.tsx
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), routes = [
  { path: "/", label: "\u{1F3E0}" },
  { path: "villains", label: "villains" },
  { path: "pokemon", label: "pokemon" },
  { path: "pokemon-v2", label: "pokemon-v2" },
  { path: "heroes", label: "heroes" },
  { path: "todos", label: "todos" },
  { path: "settings", label: "settings" },
  { path: "profile", label: "profile" }
], Navigation = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "nav",
  {
    className: "flex w-full flex-row flex-wrap items-center justify-between",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: routes.map((r, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_react4.NavLink,
      {
        to: r.path,
        target: r.path === "villains" ? "_blank" : "",
        className: ({ isActive }) => isActive ? "active" : "inactive",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "btn capitalize", children: r.label }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      },
      i,
      !1,
      {
        fileName: "app/components/navigation.tsx",
        lineNumber: 27,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/navigation.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/navigation.tsx",
    lineNumber: 21,
    columnNumber: 5
  },
  this
), navigation_default = Navigation;

// app/routes/__main.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function MainLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(navigation_default, {}, void 0, !1, {
      fileName: "app/routes/__main.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__main.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__main.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/__main/parent-one/parent-two/parent-three/index.jsx
var parent_three_exports = {};
__export(parent_three_exports, {
  default: () => ParentThree
});
var import_react6 = require("react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ParentThree() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "3rd level here" }, void 0, !1, {
    fileName: "app/routes/__main/parent-one/parent-two/parent-three/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/__main/parent-one/parent-two/index.jsx
var parent_two_exports = {};
__export(parent_two_exports, {
  default: () => ParentTwo
});
var import_react7 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ParentTwo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "2nd level" }, void 0, !1, {
    fileName: "app/routes/__main/parent-one/parent-two/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/__main/parent-one/index.jsx
var parent_one_exports = {};
__export(parent_one_exports, {
  default: () => ParentOne
});
var import_react8 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ParentOne() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: "1st Level" }, void 0, !1, {
    fileName: "app/routes/__main/parent-one/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/__main/heroes/$heroId.tsx
var heroId_exports = {};
__export(heroId_exports, {
  default: () => HeroId,
  loader: () => loader2
});
var import_react9 = require("@remix-run/react");
var import_tiny_invariant = __toESM(require("tiny-invariant")), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => ((0, import_tiny_invariant.default)(params.heroId, "expected params.heroId"), (await get("heroes/" + params.heroId)).data);
function HeroId() {
  let hero = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Super Heroes" }, void 0, !1, {
      fileName: "app/routes/__main/heroes/$heroId.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: [
      "Hero Id: ",
      hero == null ? void 0 : hero.id
    ] }, void 0, !0, {
      fileName: "app/routes/__main/heroes/$heroId.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: [
      "Hero Name: ",
      hero == null ? void 0 : hero.firstName
    ] }, void 0, !0, {
      fileName: "app/routes/__main/heroes/$heroId.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__main/heroes/$heroId.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/__main/heroes/index.tsx
var heroes_exports = {};
__export(heroes_exports, {
  default: () => Heroes,
  loader: () => loader3
});
var import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader3 = async () => {
  console.log("heroes:server");
  let { data } = await get("heroes");
  return data.filter((h) => h.house === "Marvel");
};
function Heroes() {
  let heroes = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "Marvel Heroes" }, void 0, !1, {
      fileName: "app/routes/__main/heroes/index.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    heroes.map((h) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react10.NavLink, { to: h.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: [
      h.firstName,
      " ",
      h.lastName
    ] }, void 0, !0, {
      fileName: "app/routes/__main/heroes/index.tsx",
      lineNumber: 22,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/__main/heroes/index.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this) }, h.id, !1, {
      fileName: "app/routes/__main/heroes/index.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/__main/heroes/index.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__main/heroes/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/__main/auth/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});
var import_node2 = require("@remix-run/node");

// app/services/session.server.ts
var import_node = require("@remix-run/node"), sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    secrets: ["s3cr3t"],
    secure: !1
  }
}), { getSession, commitSession, destroySession } = sessionStorage;

// app/routes/__main/auth/logout.ts
var action = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie")), logoutURL = new URL(process.env.AUTH0_LOGOUT_URL);
  return logoutURL.searchParams.set("client_id", process.env.AUTH0_CLIENT_ID), logoutURL.searchParams.set("returnTo", process.env.AUTH0_RETURN_TO_URL), (0, import_node2.redirect)(logoutURL.toString(), {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// app/routes/__main/auth/auth0.tsx
var auth0_exports = {};
__export(auth0_exports, {
  action: () => action2,
  loader: () => loader4
});
var import_node3 = require("@remix-run/node");

// app/utils/auth.server.ts
var import_remix_auth = require("remix-auth"), import_remix_auth_auth0 = require("remix-auth-auth0");
var authenticator = new import_remix_auth.Authenticator(sessionStorage), auth0Strategy = new import_remix_auth_auth0.Auth0Strategy(
  {
    callbackURL: "https://example.com/auth/auth0/callback",
    clientID: "YOUR_AUTH0_CLIENT_ID",
    clientSecret: "YOUR_AUTH0_CLIENT_SECRET",
    domain: "YOUR_TENANT.us.auth0.com"
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => ({})
);
authenticator.use(auth0Strategy);

// app/routes/__main/auth/auth0.tsx
var loader4 = () => (0, import_node3.redirect)("/login"), action2 = ({ request }) => authenticator.authenticate("auth0", request);

// app/routes/__main/auth/auth0/callback.tsx
var callback_exports = {};
__export(callback_exports, {
  loader: () => loader5
});
var loader5 = ({ request }) => authenticator.authenticate("auth0", request, {
  successRedirect: "/dashboard",
  failureRedirect: "/login"
});

// app/routes/__main/pokemon-v2.tsx
var pokemon_v2_exports = {};
__export(pokemon_v2_exports, {
  default: () => Pokemon,
  loader: () => loader6
});
var import_react11 = require("react"), import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader6 = async () => {
  let { data } = await get(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );
  return data;
};
function Pokemon() {
  let pokemon = (0, import_react12.useLoaderData)();
  return (0, import_react11.useEffect)(() => {
    console.log("pokemon-v2:client");
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "POKEMON" }, void 0, !1, {
      fileName: "app/routes/__main/pokemon-v2.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    pokemon && pokemon.results.map((pokemon2) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: pokemon2.name }, void 0, !1, {
      fileName: "app/routes/__main/pokemon-v2.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this) }, pokemon2.name, !1, {
      fileName: "app/routes/__main/pokemon-v2.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/__main/pokemon-v2.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/__main/villains.tsx
var villains_exports = {};
__export(villains_exports, {
  loader: () => loader7
});
var import_node4 = require("@remix-run/node"), loader7 = () => (0, import_node4.json)([
  {
    firstName: "Lex",
    lastName: "Luther",
    house: "DC",
    knownAs: "Lex",
    id: "6ad1b9ca-031a-4687-b4fb-6ce9cfe93960"
  },
  {
    firstName: "Max",
    lastName: "Eisenhardt",
    house: "Marvel",
    knownAs: "Magneto",
    id: "c2696868-7a2e-40b6-a879-389fc6ee0171"
  }
]);

// app/routes/__main/pokemon.tsx
var pokemon_exports = {};
__export(pokemon_exports, {
  default: () => Pokemon2
});
var import_react13 = require("react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Pokemon2() {
  let [pokemon, setPokemon] = (0, import_react13.useState)(null);
  return (0, import_react13.useEffect)(() => {
    console.log("pokemon:client"), get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20").then(
      (res) => {
        setPokemon(res.data);
      }
    );
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { children: "POKEMON" }, void 0, !1, {
      fileName: "app/routes/__main/pokemon.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    pokemon && pokemon.results.map((pokemon2) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { children: pokemon2.name }, void 0, !1, {
      fileName: "app/routes/__main/pokemon.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this) }, pokemon2.name, !1, {
      fileName: "app/routes/__main/pokemon.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/__main/pokemon.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/__main/index.tsx
var main_exports2 = {};
__export(main_exports2, {
  default: () => Home
});
var import_react14 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Home() {
  let [count, setCount] = (0, import_react14.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex w-screen flex-row items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { children: "Remix Run" }, void 0, !1, {
      fileName: "app/routes/__main/index.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__main/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { className: "btn", onClick: () => setCount((prev) => prev + 1), children: "Click me" }, void 0, !1, {
        fileName: "app/routes/__main/index.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
        "Count: ",
        count
      ] }, void 0, !0, {
        fileName: "app/routes/__main/index.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/__main/index.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__main/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__main/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/__main/todos.tsx
var todos_exports = {};
__export(todos_exports, {
  action: () => action3,
  default: () => Todos,
  loader: () => loader8
});
var import_react15 = require("react"), import_react16 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), db = global.__db;

// app/routes/__main/todos.tsx
var import_zod = require("zod"), import_tiny_invariant2 = __toESM(require("tiny-invariant")), import_react_toastify = require("react-toastify"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader8 = async () => (console.log("todos:server"), await db.todo.findMany()), action3 = async (args) => {
  let todoData = Object.fromEntries(await args.request.formData()), { _action, title, id } = todoData;
  switch (_action) {
    case "create":
      let createSchema = import_zod.z.object({
        _action: import_zod.z.string(),
        title: import_zod.z.string().min(1).max(20)
      });
      try {
        return createSchema.parse(todoData), await db.todo.create({
          data: {
            title,
            completed: !1
          }
        });
      } catch (error) {
        return new Response(error.message, {
          status: 400
        });
      }
    case "delete":
      return (0, import_tiny_invariant2.default)(id, "id is required"), await db.todo.delete({ where: { id } });
  }
};
function Todos() {
  let todos = (0, import_react16.useLoaderData)(), { state, formData } = (0, import_react16.useNavigation)(), notify = () => (0, import_react_toastify.toast)("NEW TASK ADDED"), titleRef = (0, import_react15.useRef)(), isAdding = state === "submitting" && formData.get("_action") === "create";
  return (0, import_react15.useEffect)(() => {
    console.log("todos:client"), isAdding && (notify(), titleRef.current.value = "");
  }, [isAdding]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { children: "What's Next?" }, void 0, !1, {
      fileName: "app/routes/__main/todos.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__main/todos.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react16.Form, { method: "post", className: "form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { className: "capitalize", htmlFor: "title", children: "Title" }, void 0, !1, {
          fileName: "app/routes/__main/todos.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "input",
          {
            className: "field mb-4",
            id: "title",
            name: "title",
            type: "text",
            ref: titleRef,
            required: !0,
            maxLength: 20
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__main/todos.tsx",
            lineNumber: 79,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "button",
          {
            disabled: isAdding,
            type: "submit",
            name: "_action",
            value: "create",
            className: "btn btn--primary",
            children: isAdding ? "Adding" : "Create"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__main/todos.tsx",
            lineNumber: 88,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/__main/todos.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_toastify.ToastContainer, {}, void 0, !1, {
        fileName: "app/routes/__main/todos.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__main/todos.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { children: todos.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      import_react16.Form,
      {
        className: "form",
        method: "post",
        style: { display: "flex", gap: "1rem", alignItems: "center" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: t.title }, void 0, !1, {
            fileName: "app/routes/__main/todos.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "hidden", name: "id", value: t.id }, void 0, !1, {
            fileName: "app/routes/__main/todos.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "button",
            {
              type: "submit",
              name: "_action",
              value: "delete",
              className: "btn btn--secondary",
              children: "\u2714\uFE0F"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__main/todos.tsx",
              lineNumber: 112,
              columnNumber: 15
            },
            this
          )
        ]
      },
      t.id,
      !0,
      {
        fileName: "app/routes/__main/todos.tsx",
        lineNumber: 104,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/__main/todos.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__main/todos.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "c0489714", entry: { module: "/build/entry.client-L2YTKE2Q.js", imports: ["/build/_shared/chunk-7WRLVHBK.js", "/build/_shared/chunk-I4EXBEXY.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-OYN2T6A2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__dashboard": { id: "routes/__dashboard", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__dashboard-KE73NOL2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__dashboard/profile": { id: "routes/__dashboard/profile", parentId: "routes/__dashboard", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/__dashboard/profile-USRLUNIZ.js", imports: ["/build/_shared/chunk-6GJ6MYMR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__dashboard/settings": { id: "routes/__dashboard/settings", parentId: "routes/__dashboard", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/__dashboard/settings-JOZE6MBJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main": { id: "routes/__main", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__main-ORBS2JHZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/auth/auth0": { id: "routes/__main/auth/auth0", parentId: "routes/__main", path: "auth/auth0", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/auth/auth0-N65TB25L.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/auth/auth0/callback": { id: "routes/__main/auth/auth0/callback", parentId: "routes/__main/auth/auth0", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/auth/auth0/callback-PXCXD7LV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/auth/logout": { id: "routes/__main/auth/logout", parentId: "routes/__main", path: "auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/auth/logout-QAHOBEF3.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/heroes/$heroId": { id: "routes/__main/heroes/$heroId", parentId: "routes/__main", path: "heroes/:heroId", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/heroes/$heroId-PWYRQGFA.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-6GJ6MYMR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/heroes/index": { id: "routes/__main/heroes/index", parentId: "routes/__main", path: "heroes", index: !0, caseSensitive: void 0, module: "/build/routes/__main/heroes/index-FH4X3MPM.js", imports: ["/build/_shared/chunk-6GJ6MYMR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/index": { id: "routes/__main/index", parentId: "routes/__main", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__main/index-GK576FDD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/parent-one/index": { id: "routes/__main/parent-one/index", parentId: "routes/__main", path: "parent-one", index: !0, caseSensitive: void 0, module: "/build/routes/__main/parent-one/index-OIEMDATC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/parent-one/parent-two/index": { id: "routes/__main/parent-one/parent-two/index", parentId: "routes/__main", path: "parent-one/parent-two", index: !0, caseSensitive: void 0, module: "/build/routes/__main/parent-one/parent-two/index-FEUUQV3I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/parent-one/parent-two/parent-three/index": { id: "routes/__main/parent-one/parent-two/parent-three/index", parentId: "routes/__main", path: "parent-one/parent-two/parent-three", index: !0, caseSensitive: void 0, module: "/build/routes/__main/parent-one/parent-two/parent-three/index-UFIXMXW4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/pokemon": { id: "routes/__main/pokemon", parentId: "routes/__main", path: "pokemon", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/pokemon-HHP6SHI4.js", imports: ["/build/_shared/chunk-6GJ6MYMR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/pokemon-v2": { id: "routes/__main/pokemon-v2", parentId: "routes/__main", path: "pokemon-v2", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/pokemon-v2-APAEA3J3.js", imports: ["/build/_shared/chunk-6GJ6MYMR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/todos": { id: "routes/__main/todos", parentId: "routes/__main", path: "todos", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/todos-R43R2CKF.js", imports: ["/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__main/villains": { id: "routes/__main/villains", parentId: "routes/__main", path: "villains", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/villains-BKMAQ7NX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-C0489714.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes2 = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/__dashboard": {
    id: "routes/__dashboard",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/__dashboard/settings": {
    id: "routes/__dashboard/settings",
    parentId: "routes/__dashboard",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/__dashboard/profile": {
    id: "routes/__dashboard/profile",
    parentId: "routes/__dashboard",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/__main": {
    id: "routes/__main",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: main_exports
  },
  "routes/__main/parent-one/parent-two/parent-three/index": {
    id: "routes/__main/parent-one/parent-two/parent-three/index",
    parentId: "routes/__main",
    path: "parent-one/parent-two/parent-three",
    index: !0,
    caseSensitive: void 0,
    module: parent_three_exports
  },
  "routes/__main/parent-one/parent-two/index": {
    id: "routes/__main/parent-one/parent-two/index",
    parentId: "routes/__main",
    path: "parent-one/parent-two",
    index: !0,
    caseSensitive: void 0,
    module: parent_two_exports
  },
  "routes/__main/parent-one/index": {
    id: "routes/__main/parent-one/index",
    parentId: "routes/__main",
    path: "parent-one",
    index: !0,
    caseSensitive: void 0,
    module: parent_one_exports
  },
  "routes/__main/heroes/$heroId": {
    id: "routes/__main/heroes/$heroId",
    parentId: "routes/__main",
    path: "heroes/:heroId",
    index: void 0,
    caseSensitive: void 0,
    module: heroId_exports
  },
  "routes/__main/heroes/index": {
    id: "routes/__main/heroes/index",
    parentId: "routes/__main",
    path: "heroes",
    index: !0,
    caseSensitive: void 0,
    module: heroes_exports
  },
  "routes/__main/auth/logout": {
    id: "routes/__main/auth/logout",
    parentId: "routes/__main",
    path: "auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/__main/auth/auth0": {
    id: "routes/__main/auth/auth0",
    parentId: "routes/__main",
    path: "auth/auth0",
    index: void 0,
    caseSensitive: void 0,
    module: auth0_exports
  },
  "routes/__main/auth/auth0/callback": {
    id: "routes/__main/auth/auth0/callback",
    parentId: "routes/__main/auth/auth0",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: callback_exports
  },
  "routes/__main/pokemon-v2": {
    id: "routes/__main/pokemon-v2",
    parentId: "routes/__main",
    path: "pokemon-v2",
    index: void 0,
    caseSensitive: void 0,
    module: pokemon_v2_exports
  },
  "routes/__main/villains": {
    id: "routes/__main/villains",
    parentId: "routes/__main",
    path: "villains",
    index: void 0,
    caseSensitive: void 0,
    module: villains_exports
  },
  "routes/__main/pokemon": {
    id: "routes/__main/pokemon",
    parentId: "routes/__main",
    path: "pokemon",
    index: void 0,
    caseSensitive: void 0,
    module: pokemon_exports
  },
  "routes/__main/index": {
    id: "routes/__main/index",
    parentId: "routes/__main",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: main_exports2
  },
  "routes/__main/todos": {
    id: "routes/__main/todos",
    parentId: "routes/__main",
    path: "todos",
    index: void 0,
    caseSensitive: void 0,
    module: todos_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
