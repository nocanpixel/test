import {
  Input
} from "/build/_shared/chunk-3SBR6VZU.js";
import {
  require_getUsername
} from "/build/_shared/chunk-UHOEWMWG.js";
import {
  Button
} from "/build/_shared/chunk-2IIIWOX4.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-R2QECDHD.js";
import {
  Form
} from "/build/_shared/chunk-GLJGHDPE.js";
import "/build/_shared/chunk-A25X5HZZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4S2FQOKL.js";
import {
  createHotContext
} from "/build/_shared/chunk-462RK7JO.js";
import "/build/_shared/chunk-3YEQB4BU.js";
import "/build/_shared/chunk-UGYGUBYS.js";
import {
  __toESM
} from "/build/_shared/chunk-VQ4B373F.js";

// app/routes/set-username.tsx
var import_cloudflare = __toESM(require_cloudflare());
var import_getUsername = __toESM(require_getUsername());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/set-username.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/set-username.tsx"
  );
  import.meta.hot.lastModified = "1712808153531.9272";
}
function SetUsername() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid h-full gap-4 place-content-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: "\u{1F34A} Orange Meets" }, void 0, false, {
      fileName: "app/routes/set-username.tsx",
      lineNumber: 43,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex items-end gap-4", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "username", children: "Enter your display name" }, void 0, false, {
          fileName: "app/routes/set-username.tsx",
          lineNumber: 46,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { autoComplete: "off", autoFocus: true, required: true, type: "text", id: "username", name: "username" }, void 0, false, {
          fileName: "app/routes/set-username.tsx",
          lineNumber: 47,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/set-username.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "text-xs", type: "submit", children: "Submit" }, void 0, false, {
        fileName: "app/routes/set-username.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/set-username.tsx",
      lineNumber: 44,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/set-username.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c = SetUsername;
var _c;
$RefreshReg$(_c, "SetUsername");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SetUsername as default
};
//# sourceMappingURL=/build/routes/set-username-V2KCI3T6.js.map
