import {
  Disclaimer
} from "/build/_shared/chunk-6PTFFNNL.js";
import {
  useUserMetadata
} from "/build/_shared/chunk-E6WYMPWQ.js";
import "/build/_shared/chunk-FJ3DN6QI.js";
import {
  Label
} from "/build/_shared/chunk-Q6OBTGC3.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  Input
} from "/build/_shared/chunk-3SBR6VZU.js";
import {
  require_getUsername
} from "/build/_shared/chunk-UHOEWMWG.js";
import {
  Button,
  ButtonLink
} from "/build/_shared/chunk-2IIIWOX4.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-R2QECDHD.js";
import {
  Form,
  useLoaderData
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

// app/routes/_index.tsx
var import_cloudflare = __toESM(require_cloudflare());
var import_getUsername = __toESM(require_getUsername());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1712808153531.0237";
}
function Index() {
  _s();
  const {
    username,
    usedAccess
  } = useLoaderData();
  const {
    data
  } = useUserMetadata(username);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center h-full p-4 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 63,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: "\u{1F34A} Orange Meets" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 66,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: [
            "Logged in as ",
            data == null ? void 0 : data.displayName
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 68,
            columnNumber: 7
          }, this),
          !usedAccess && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "block text-sm underline text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200", href: "/set-username", children: "Change" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 71,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 67,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, { to: "/new", className: "text-sm", children: "New Room" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 77,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 76,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", { className: "cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", { className: "text-zinc-500 dark:text-zinc-400", children: "Or join a room" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 82,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex items-end w-full gap-4 pt-4", method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "room", children: "Room name" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 87,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "room", id: "room", required: true }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 88,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 86,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "text-xs", type: "submit", displayType: "secondary", children: "Join" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 90,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 85,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 81,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-end flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disclaimer, { className: "pt-6" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 97,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 96,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(Index, "SDxCBuYE3HxGGes0Co/h2C9B78g=", false, function() {
  return [useLoaderData, useUserMetadata];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-4YBOIC62.js.map
