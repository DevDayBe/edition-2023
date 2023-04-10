import {
  get
} from "/build/_shared/chunk-6GJ6MYMR.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-I4EXBEXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__main/pokemon.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Pokemon() {
  const [pokemon, setPokemon] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    console.log("pokemon:client");
    get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20").then(
      (res) => {
        setPokemon(res.data);
      }
    );
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "POKEMON" }, void 0, false, {
      fileName: "app/routes/__main/pokemon.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    pokemon && pokemon.results.map((pokemon2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: pokemon2.name }, void 0, false, {
      fileName: "app/routes/__main/pokemon.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this) }, pokemon2.name, false, {
      fileName: "app/routes/__main/pokemon.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/__main/pokemon.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
export {
  Pokemon as default
};
//# sourceMappingURL=/build/routes/__main/pokemon-HHP6SHI4.js.map
