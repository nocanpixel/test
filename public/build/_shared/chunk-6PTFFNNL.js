import {
  cn
} from "/build/_shared/chunk-R2QECDHD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4S2FQOKL.js";
import {
  createHotContext
} from "/build/_shared/chunk-462RK7JO.js";
import {
  __toESM
} from "/build/_shared/chunk-VQ4B373F.js";

// app/components/Disclaimer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Disclaimer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Disclaimer.tsx"
  );
  import.meta.hot.lastModified = "1712808153523.224";
}
var Disclaimer = ({
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: cn("text-xs text-zinc-400 dark:text-zinc-500 max-w-prose", className), children: [
    "Orange Meets is a demo application built using",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "underline", href: "https://developers.cloudflare.com/calls/", children: "Cloudflare Calls" }, void 0, false, {
      fileName: "app/components/Disclaimer.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    ". To build your own WebRTC application using Cloudflare Calls, get started in the",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "underline", href: "https://dash.cloudflare.com/?to=/:account/calls", children: "Cloudflare Dashboard" }, void 0, false, {
      fileName: "app/components/Disclaimer.tsx",
      lineNumber: 32,
      columnNumber: 4
    }, this),
    "."
  ] }, void 0, true, {
    fileName: "app/components/Disclaimer.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c = Disclaimer;
var _c;
$RefreshReg$(_c, "Disclaimer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Disclaimer
};
//# sourceMappingURL=/build/_shared/chunk-6PTFFNNL.js.map
