import {
  Disclaimer
} from "/build/_shared/chunk-6PTFFNNL.js";
import {
  $ea1ef594cf570d83$export$439d29a4e110a164,
  AudioIndicator,
  CameraButton,
  MicButton,
  SettingsButton,
  Tooltip,
  VideoSrcObject,
  useRoomContext,
  useRoomUrl
} from "/build/_shared/chunk-VOPEQFBE.js";
import "/build/_shared/chunk-Q6OBTGC3.js";
import {
  Icon,
  errorMessageMap
} from "/build/_shared/chunk-U5ABPQBU.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  useTimeoutFn
} from "/build/_shared/chunk-OTTYJKK5.js";
import {
  require_getUsername
} from "/build/_shared/chunk-UHOEWMWG.js";
import {
  Button
} from "/build/_shared/chunk-2IIIWOX4.js";
import {
  cn,
  require_cloudflare
} from "/build/_shared/chunk-R2QECDHD.js";
import {
  useNavigate,
  useParams
} from "/build/_shared/chunk-GLJGHDPE.js";
import "/build/_shared/chunk-A25X5HZZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4S2FQOKL.js";
import {
  createHotContext
} from "/build/_shared/chunk-462RK7JO.js";
import "/build/_shared/chunk-3YEQB4BU.js";
import {
  require_react
} from "/build/_shared/chunk-UGYGUBYS.js";
import {
  __toESM
} from "/build/_shared/chunk-VQ4B373F.js";

// app/routes/_room.$roomName._index.tsx
var import_cloudflare = __toESM(require_cloudflare());

// app/components/CopyButton.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/CopyButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/CopyButton.tsx"
  );
  import.meta.hot.lastModified = "1712808153523.014";
}
var CopyButton = () => {
  _s();
  const [copied, setCopied] = (0, import_react.useState)(false);
  const roomUrl = useRoomUrl();
  const [_isReady, _cancel, reset] = useTimeoutFn(() => {
    setCopied(false);
  }, 2e3);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { content: copied ? "Copied!" : "Copy URL", open: copied ? true : void 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { displayType: "secondary", onClick: () => {
    navigator.clipboard.writeText(roomUrl);
    setCopied(true);
    reset();
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { type: copied ? "ClipboardDocumentCheckIcon" : "ClipboardDocumentIcon", className: "text-xl" }, void 0, false, {
      fileName: "app/components/CopyButton.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($ea1ef594cf570d83$export$439d29a4e110a164, { children: copied ? "Copied!" : "Copy URL" }, void 0, false, {
      fileName: "app/components/CopyButton.tsx",
      lineNumber: 43,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CopyButton.tsx",
    lineNumber: 37,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/CopyButton.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_s(CopyButton, "b/x0huzFgfdDFQ/w2hZKmQ6uF7Q=", false, function() {
  return [useRoomUrl, useTimeoutFn];
});
_c = CopyButton;
var _c;
$RefreshReg$(_c, "CopyButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/SelfView.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/SelfView.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SelfView.tsx"
  );
  import.meta.hot.lastModified = "1712808153526.0962";
}
var SelfView = (0, import_react2.forwardRef)(_c2 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VideoSrcObject, { className: cn("-scale-x-100", className), muted: true, ...rest, ref }, void 0, false, {
  fileName: "app/components/SelfView.tsx",
  lineNumber: 27,
  columnNumber: 12
}, this));
_c22 = SelfView;
SelfView.displayName = "SelfView";
var _c2;
var _c22;
$RefreshReg$(_c2, "SelfView$forwardRef");
$RefreshReg$(_c22, "SelfView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_room.$roomName._index.tsx
var import_getUsername = __toESM(require_getUsername());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_room.$roomName._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_room.$roomName._index.tsx"
  );
  import.meta.hot.lastModified = "1712808153531.187";
}
function Lobby() {
  _s2();
  const {
    roomName
  } = useParams();
  const navigate = useNavigate();
  const {
    setJoined,
    userMedia,
    room
  } = useRoomContext();
  const {
    videoStreamTrack,
    audioStreamTrack,
    audioEnabled
  } = userMedia;
  const joinedUsers = new Set(room.otherUsers.filter((u) => u.tracks.audio).map((u) => u.name)).size;
  const audioUnavailableMessage = userMedia.audioUnavailableReason ? errorMessageMap[userMedia.audioUnavailableReason] : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col items-center justify-center h-full p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1" }, void 0, false, {
      fileName: "app/routes/_room.$roomName._index.tsx",
      lineNumber: 67,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-4 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold", children: roomName }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 70,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: [
          `${joinedUsers} ${joinedUsers === 1 ? "user" : "users"} in the room.`,
          " "
        ] }, void 0, true, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 71,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName._index.tsx",
        lineNumber: 69,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelfView, { className: "aspect-[4/3] w-full", videoTrack: videoStreamTrack }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 76,
          columnNumber: 6
        }, this),
        audioStreamTrack && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute left-3 top-3", children: audioEnabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AudioIndicator, { audioTrack: audioStreamTrack }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 78,
          columnNumber: 24
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tooltip, { content: "Mic is turned off", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-white indication-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { type: "micOff" }, void 0, false, {
            fileName: "app/routes/_room.$roomName._index.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($ea1ef594cf570d83$export$439d29a4e110a164, { children: "Mic is turned off" }, void 0, false, {
            fileName: "app/routes/_room.$roomName._index.tsx",
            lineNumber: 81,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 79,
          columnNumber: 10
        }, this) }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 78,
          columnNumber: 75
        }, this) }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 77,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName._index.tsx",
        lineNumber: 75,
        columnNumber: 5
      }, this),
      (userMedia.audioUnavailableReason || userMedia.videoUnavailableReason) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-3 rounded-md text-zinc-800 bg-zinc-200 dark:text-zinc-200 dark:bg-zinc-700", children: [
        userMedia.audioUnavailableReason === "NotAllowedError" && userMedia.videoUnavailableReason === void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Mic permission was denied." }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 87,
          columnNumber: 116
        }, this),
        userMedia.videoUnavailableReason === "NotAllowedError" && userMedia.audioUnavailableReason === void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Camera permission was denied." }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 88,
          columnNumber: 116
        }, this),
        userMedia.audioUnavailableReason === "NotAllowedError" && userMedia.videoUnavailableReason === "NotAllowedError" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Mic and camera permissions were denied." }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 89,
          columnNumber: 124
        }, this),
        userMedia.audioUnavailableReason === "NotAllowedError" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "Enable permission",
          userMedia.audioUnavailableReason && userMedia.videoUnavailableReason ? "s" : "",
          " ",
          "and reload the page to join."
        ] }, void 0, true, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 90,
          columnNumber: 66
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName._index.tsx",
        lineNumber: 86,
        columnNumber: 80
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-4 text-sm", children: [
        audioUnavailableMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tooltip, { content: "Unable to join without a mic.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { disabled: true, children: "Join" }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 98,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 97,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { onClick: () => {
          setJoined(true);
          navigate("room");
        }, children: "Join" }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 99,
          columnNumber: 20
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MicButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 108,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CameraButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 109,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SettingsButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 110,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CopyButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 111,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName._index.tsx",
        lineNumber: 96,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_room.$roomName._index.tsx",
      lineNumber: 68,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col justify-end flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Disclaimer, { className: "pt-6" }, void 0, false, {
      fileName: "app/routes/_room.$roomName._index.tsx",
      lineNumber: 115,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_room.$roomName._index.tsx",
      lineNumber: 114,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_room.$roomName._index.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s2(Lobby, "VQjz5zjY3v28l32Mry1NDYK/7Ng=", false, function() {
  return [useParams, useNavigate, useRoomContext];
});
_c3 = Lobby;
var _c3;
$RefreshReg$(_c3, "Lobby");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Lobby as default
};
//# sourceMappingURL=/build/routes/_room.$roomName._index-6I6NC5VP.js.map
