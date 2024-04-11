import {
  useUserMetadata
} from "/build/_shared/chunk-E6WYMPWQ.js";
import {
  keepTrying
} from "/build/_shared/chunk-6HY5B2MT.js";
import "/build/_shared/chunk-FJ3DN6QI.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c,
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $5d3850c4d0b4e6c7$export$393edc798c47379d,
  $5d3850c4d0b4e6c7$export$41fb9f06171c75f4,
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$69b62a49393917d6,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41,
  $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
  $5d3850c4d0b4e6c7$export$f99233281efd08a0,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $cf1ac5d9fe0e8206$export$21b07c8f274aebd5,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,
  $cf1ac5d9fe0e8206$export$b688253958b8dfe7,
  $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,
  $d3863c46a17e8a28$export$20e40289641fbbb6,
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  $ea1ef594cf570d83$export$439d29a4e110a164,
  $f1701beae083dbae$export$602eac185826482c,
  $f631663db3294ace$export$b39126d51d94e6f3,
  AudioIndicator,
  CameraButton,
  Combination_default,
  Description,
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  MicButton,
  Portal,
  Root,
  SettingsDialog,
  Toast_default,
  Tooltip,
  Trigger,
  VideoSrcObject,
  hideOthers,
  useAudioLevel,
  useDispatchToast,
  useIsSpeaking,
  useRoomContext,
  useRoomUrl
} from "/build/_shared/chunk-VOPEQFBE.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $5e63c961fc1ce211$export$d9f1ccf0bdb05d45,
  $6ed0406888f73fc4$export$43e446d32b3d21af,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f,
  Label
} from "/build/_shared/chunk-Q6OBTGC3.js";
import {
  Icon
} from "/build/_shared/chunk-U5ABPQBU.js";
import {
  _extends
} from "/build/_shared/chunk-ELWJTL4F.js";
import {
  useMeasure_default,
  useMount_default,
  usePrevious,
  useUnmount_default,
  useWindowSize_default
} from "/build/_shared/chunk-OTTYJKK5.js";
import {
  require_getUsername
} from "/build/_shared/chunk-UHOEWMWG.js";
import {
  Button,
  invariant
} from "/build/_shared/chunk-2IIIWOX4.js";
import {
  cn,
  require_cloudflare
} from "/build/_shared/chunk-R2QECDHD.js";
import {
  useFetcher,
  useLoaderData,
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
  __export,
  __toESM
} from "/build/_shared/chunk-VQ4B373F.js";

// app/routes/_room.$roomName.room.tsx
var import_cloudflare = __toESM(require_cloudflare());
var import_react27 = __toESM(require_react());

// node_modules/react-flip-toolkit/lib/index.es.js
var import_react = __toESM(require_react());

// node_modules/rematrix/dist/rematrix.es.js
function format(source) {
  if (source.constructor !== Array) {
    throw new TypeError("Expected array.");
  }
  if (source.length === 16) {
    return source;
  }
  if (source.length === 6) {
    var matrix = identity();
    matrix[0] = source[0];
    matrix[1] = source[1];
    matrix[4] = source[2];
    matrix[5] = source[3];
    matrix[12] = source[4];
    matrix[13] = source[5];
    return matrix;
  }
  throw new RangeError("Expected array with either 6 or 16 values.");
}
function identity() {
  var matrix = [];
  for (var i3 = 0; i3 < 16; i3++) {
    i3 % 5 == 0 ? matrix.push(1) : matrix.push(0);
  }
  return matrix;
}
function multiply(m3, x2) {
  var fm = format(m3);
  var fx = format(x2);
  var product = [];
  for (var i3 = 0; i3 < 4; i3++) {
    var row = [fm[i3], fm[i3 + 4], fm[i3 + 8], fm[i3 + 12]];
    for (var j2 = 0; j2 < 4; j2++) {
      var k2 = j2 * 4;
      var col = [fx[k2], fx[k2 + 1], fx[k2 + 2], fx[k2 + 3]];
      var result = row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];
      product[i3 + k2] = result;
    }
  }
  return product;
}
function parse(source) {
  if (typeof source === "string") {
    var match = source.match(/matrix(3d)?\(([^)]+)\)/);
    if (match) {
      var raw = match[2].split(", ").map(parseFloat);
      return format(raw);
    }
  }
  return identity();
}
function scaleX(scalar) {
  var matrix = identity();
  matrix[0] = scalar;
  return matrix;
}
function scaleY(scalar) {
  var matrix = identity();
  matrix[5] = scalar;
  return matrix;
}
function translateX(distance) {
  var matrix = identity();
  matrix[12] = distance;
  return matrix;
}
function translateY(distance) {
  var matrix = identity();
  matrix[13] = distance;
  return matrix;
}

// node_modules/flip-toolkit/lib/index.es.js
var e = function(t2) {
  return "number" == typeof t2;
};
var i = function(t2) {
  return "function" == typeof t2;
};
var n = function(t2) {
  return "[object Object]" === Object.prototype.toString.call(t2);
};
var r = function(t2) {
  return Array.prototype.slice.apply(t2);
};
var s = function(t2) {
  var e3 = t2.reduce(function(t3, e4) {
    return t3[e4] = (t3[e4] || 0) + 1, t3;
  }, {});
  return Object.keys(e3).filter(function(t3) {
    return e3[t3] > 1;
  });
};
function a(t2) {
  return [].slice.call(arguments, 1).forEach(function(e3) {
    if (e3)
      for (var i3 in e3)
        Object.prototype.hasOwnProperty.call(e3, i3) && (t2[i3] = e3[i3]);
  }), t2;
}
var o;
var l = function(t2, e3, i3) {
  return t2 + (e3 - t2) * i3;
};
var p = { __proto__: null, isNumber: e, isFunction: i, isObject: n, toArray: r, getDuplicateValsAsStrings: s, assign: a, tweenProp: l };
var c = "data-flip-id";
var u = "data-inverse-flip-id";
var d = "data-portal-key";
var f = "data-exit-container";
var h = { __proto__: null, DATA_FLIP_ID: c, DATA_INVERSE_FLIP_ID: u, DATA_FLIP_COMPONENT_ID: "data-flip-component-id", DATA_FLIP_CONFIG: "data-flip-config", DATA_PORTAL_KEY: d, DATA_EXIT_CONTAINER: f };
var g = { noWobble: { stiffness: 200, damping: 26 }, gentle: { stiffness: 120, damping: 14 }, veryGentle: { stiffness: 130, damping: 17 }, wobbly: { stiffness: 180, damping: 12 }, stiff: { stiffness: 260, damping: 26 } };
var m = function(t2) {
  return n(t2) ? t2 : Object.keys(g).indexOf(t2) > -1 ? g[t2] : {};
};
"undefined" != typeof window && (o = window.requestAnimationFrame);
var v = o = o || function(t2) {
  window.setTimeout(t2, 1e3 / 60);
};
var y = Date.now();
var _ = "object" == typeof performance && "function" == typeof performance.now ? function() {
  return performance.now();
} : function() {
  return Date.now() - y;
};
function S(t2, e3) {
  var i3 = t2.indexOf(e3);
  -1 !== i3 && t2.splice(i3, 1);
}
var E = /* @__PURE__ */ function() {
  function t2() {
  }
  return t2.prototype.run = function() {
    var t3 = this;
    v(function() {
      t3.springSystem.loop(_());
    });
  }, t2;
}();
var A = function() {
  this.position = 0, this.velocity = 0;
};
var C = 0;
var b = 1e-3;
var I = /* @__PURE__ */ function() {
  function t2(t3) {
    this._id = "s" + C++, this._springSystem = t3, this.listeners = [], this._startValue = 0, this._currentState = new A(), this._displacementFromRestThreshold = 1e-3, this._endValue = 0, this._overshootClampingEnabled = false, this._previousState = new A(), this._restSpeedThreshold = 1e-3, this._tempState = new A(), this._timeAccumulator = 0, this._wasAtRest = true, this._cachedSpringConfig = {};
  }
  var e3 = t2.prototype;
  return e3.getId = function() {
    return this._id;
  }, e3.destroy = function() {
    this.listeners = [], this._springSystem.deregisterSpring(this);
  }, e3.setSpringConfig = function(t3) {
    return this._springConfig = t3, this;
  }, e3.getCurrentValue = function() {
    return this._currentState.position;
  }, e3.getDisplacementDistanceForState = function(t3) {
    return Math.abs(this._endValue - t3.position);
  }, e3.setEndValue = function(t3) {
    if (t3 === this._endValue)
      return this;
    if (this.prevEndValue = t3, this._endValue === t3 && this.isAtRest())
      return this;
    this._startValue = this.getCurrentValue(), this._endValue = t3, this._springSystem.activateSpring(this.getId());
    for (var e4 = 0, i3 = this.listeners.length; e4 < i3; e4++) {
      var n3 = this.listeners[e4].onSpringEndStateChange;
      n3 && n3(this);
    }
    return this;
  }, e3.setVelocity = function(t3) {
    return t3 === this._currentState.velocity || (this._currentState.velocity = t3, this._springSystem.activateSpring(this.getId())), this;
  }, e3.setCurrentValue = function(t3) {
    this._startValue = t3, this._currentState.position = t3;
    for (var e4 = 0, i3 = this.listeners.length; e4 < i3; e4++) {
      var n3 = this.listeners[e4];
      n3.onSpringUpdate && n3.onSpringUpdate(this);
    }
    return this;
  }, e3.setAtRest = function() {
    return this._endValue = this._currentState.position, this._tempState.position = this._currentState.position, this._currentState.velocity = 0, this;
  }, e3.setOvershootClampingEnabled = function(t3) {
    return this._overshootClampingEnabled = t3, this;
  }, e3.isOvershooting = function() {
    var t3 = this._startValue, e4 = this._endValue;
    return this._springConfig.tension > 0 && (t3 < e4 && this.getCurrentValue() > e4 || t3 > e4 && this.getCurrentValue() < e4);
  }, e3.advance = function(t3, e4) {
    var i3 = this.isAtRest();
    if (!i3 || !this._wasAtRest) {
      var n3 = e4;
      e4 > 0.064 && (n3 = 0.064), this._timeAccumulator += n3;
      for (var r3, s2, a2, o2, l2, p2, c3 = this._springConfig.tension, u3 = this._springConfig.friction, d3 = this._currentState.position, f3 = this._currentState.velocity, h3 = this._tempState.position, g2 = this._tempState.velocity; this._timeAccumulator >= b; )
        this._timeAccumulator -= b, this._timeAccumulator < b && (this._previousState.position = d3, this._previousState.velocity = f3), s2 = c3 * (this._endValue - h3) - u3 * f3, o2 = c3 * (this._endValue - (h3 = d3 + (r3 = f3) * b * 0.5)) - u3 * (g2 = f3 + s2 * b * 0.5), p2 = c3 * (this._endValue - (h3 = d3 + (a2 = g2) * b * 0.5)) - u3 * (g2 = f3 + o2 * b * 0.5), h3 = d3 + (l2 = g2) * b, d3 += 1 / 6 * (r3 + 2 * (a2 + l2) + (g2 = f3 + p2 * b)) * b, f3 += 1 / 6 * (s2 + 2 * (o2 + p2) + (c3 * (this._endValue - h3) - u3 * g2)) * b;
      this._tempState.position = h3, this._tempState.velocity = g2, this._currentState.position = d3, this._currentState.velocity = f3, this._timeAccumulator > 0 && this._interpolate(this._timeAccumulator / b), (this.isAtRest() || this._overshootClampingEnabled && this.isOvershooting()) && (this._springConfig.tension > 0 ? (this._startValue = this._endValue, this._currentState.position = this._endValue) : (this._endValue = this._currentState.position, this._startValue = this._endValue), this.setVelocity(0), i3 = true);
      var m3 = false;
      this._wasAtRest && (this._wasAtRest = false, m3 = true);
      var v2 = false;
      i3 && (this._wasAtRest = true, v2 = true), this.notifyPositionUpdated(m3, v2);
    }
  }, e3.notifyPositionUpdated = function(t3, e4) {
    var i3 = this;
    this.listeners.filter(Boolean).forEach(function(n3) {
      t3 && n3.onSpringActivate && !i3._onActivateCalled && (n3.onSpringActivate(i3), i3._onActivateCalled = true), n3.onSpringUpdate && n3.onSpringUpdate(i3), e4 && n3.onSpringAtRest && n3.onSpringAtRest(i3);
    });
  }, e3.systemShouldAdvance = function() {
    return !this.isAtRest() || !this.wasAtRest();
  }, e3.wasAtRest = function() {
    return this._wasAtRest;
  }, e3.isAtRest = function() {
    return Math.abs(this._currentState.velocity) < this._restSpeedThreshold && (this.getDisplacementDistanceForState(this._currentState) <= this._displacementFromRestThreshold || 0 === this._springConfig.tension);
  }, e3._interpolate = function(t3) {
    this._currentState.position = this._currentState.position * t3 + this._previousState.position * (1 - t3), this._currentState.velocity = this._currentState.velocity * t3 + this._previousState.velocity * (1 - t3);
  }, e3.addListener = function(t3) {
    return this.listeners.push(t3), this;
  }, e3.addOneTimeListener = function(t3) {
    var e4 = this;
    return Object.keys(t3).forEach(function(i3) {
      var n3;
      t3[i3] = (n3 = t3[i3], function() {
        n3.apply(void 0, [].slice.call(arguments)), e4.removeListener(t3);
      });
    }), this.listeners.push(t3), this;
  }, e3.removeListener = function(t3) {
    return S(this.listeners, t3), this;
  }, t2;
}();
var w = /* @__PURE__ */ function() {
  function t2(t3) {
    this.looper = t3 || new E(), this.looper.springSystem = this, this.listeners = [], this._activeSprings = [], this._idleSpringIndices = [], this._isIdle = true, this._lastTimeMillis = -1, this._springRegistry = {};
  }
  var e3 = t2.prototype;
  return e3.createSpring = function(t3, e4) {
    return this.createSpringWithConfig({ tension: t3, friction: e4 });
  }, e3.createSpringWithConfig = function(t3) {
    var e4 = new I(this);
    return this.registerSpring(e4), e4.setSpringConfig(t3), e4;
  }, e3.getIsIdle = function() {
    return this._isIdle;
  }, e3.registerSpring = function(t3) {
    this._springRegistry[t3.getId()] = t3;
  }, e3.deregisterSpring = function(t3) {
    S(this._activeSprings, t3), delete this._springRegistry[t3.getId()];
  }, e3.advance = function(t3, e4) {
    for (var i3 = this; this._idleSpringIndices.length > 0; )
      this._idleSpringIndices.pop();
    for (this._activeSprings.filter(Boolean).forEach(function(n4) {
      n4.systemShouldAdvance() ? n4.advance(t3 / 1e3, e4 / 1e3) : i3._idleSpringIndices.push(i3._activeSprings.indexOf(n4));
    }); this._idleSpringIndices.length > 0; ) {
      var n3 = this._idleSpringIndices.pop();
      n3 >= 0 && this._activeSprings.splice(n3, 1);
    }
  }, e3.loop = function(t3) {
    var e4;
    -1 === this._lastTimeMillis && (this._lastTimeMillis = t3 - 1);
    var i3 = t3 - this._lastTimeMillis;
    this._lastTimeMillis = t3;
    var n3 = 0, r3 = this.listeners.length;
    for (n3 = 0; n3 < r3; n3++)
      (e4 = this.listeners[n3]).onBeforeIntegrate && e4.onBeforeIntegrate(this);
    for (this.advance(t3, i3), 0 === this._activeSprings.length && (this._isIdle = true, this._lastTimeMillis = -1), n3 = 0; n3 < r3; n3++)
      (e4 = this.listeners[n3]).onAfterIntegrate && e4.onAfterIntegrate(this);
    this._isIdle || this.looper.run();
  }, e3.activateSpring = function(t3) {
    var e4 = this._springRegistry[t3];
    -1 === this._activeSprings.indexOf(e4) && this._activeSprings.push(e4), this.getIsIdle() && (this._isIdle = false, this.looper.run());
  }, t2;
}();
var O = new w();
var x = function(t2) {
  var e3 = t2.springConfig, i3 = e3.overshootClamping, n3 = t2.getOnUpdateFunc, r3 = t2.onAnimationEnd, s2 = t2.onSpringActivate, a2 = O.createSpring(e3.stiffness, e3.damping);
  a2.setOvershootClampingEnabled(!!i3);
  var o2 = { onSpringActivate: s2, onSpringAtRest: function() {
    a2.destroy(), r3();
  }, onSpringUpdate: n3({ spring: a2, onAnimationEnd: r3 }) };
  return a2.addListener(o2), a2;
};
var U = function(t2) {
  var e3 = x(t2);
  return e3.setEndValue(1), e3;
};
var V = function(t2, e3) {
  if (void 0 === e3 && (e3 = {}), t2 && t2.length) {
    e3.reverse && t2.reverse();
    var i3, n3 = "number" != typeof (i3 = e3.speed) ? 1.1 : 1 + Math.min(Math.max(5 * i3, 0), 5), r3 = 1 / Math.max(Math.min(t2.length, 100), 10), s2 = t2.map(function(t3, e4) {
      var i4 = t3.getOnUpdateFunc;
      return t3.getOnUpdateFunc = function(t4) {
        var a2 = i4(t4);
        return function(t5) {
          var i5 = t5.getCurrentValue();
          (i5 = i5 < 0.01 ? 0 : i5 > 0.99 ? 1 : i5) >= r3 && s2[e4 + 1] && s2[e4 + 1](Math.max(Math.min(i5 * n3, 1), 0)), a2(t5);
        };
      }, t3;
    }).map(function(t3) {
      var e4 = x(t3);
      if (e4)
        return e4.setEndValue.bind(e4);
    }).filter(Boolean);
    s2[0] && s2[0](1);
  }
};
var F = function(t2) {
  return [0, 1, 4, 5, 12, 13].map(function(e3) {
    return t2[e3];
  });
};
var P = function(t2) {
  return t2.top < window.innerHeight && t2.bottom > 0 && t2.left < window.innerWidth && t2.right > 0;
};
function D(t2) {
  return JSON.parse(t2.dataset.flipConfig || "{}");
}
var R = function(t2, e3) {
  var i3;
  return a(t2, ((i3 = {})[e3[0]] = e3[1], i3));
};
var T = function(t2, e3) {
  return r(e3 ? document.querySelectorAll("[" + d + '="' + e3 + '"]') : t2.querySelectorAll("[" + c + "]"));
};
var M = function(t2) {
  return t2.map(function(t3) {
    return [t3, t3.getBoundingClientRect()];
  });
};
var k = function(n3) {
  var o2 = n3.cachedOrderedFlipIds, p2 = void 0 === o2 ? [] : o2, f3 = n3.inProgressAnimations, h3 = void 0 === f3 ? {} : f3, v2 = n3.flippedElementPositionsBeforeUpdate, y3 = void 0 === v2 ? {} : v2, _2 = n3.flipCallbacks, S2 = void 0 === _2 ? {} : _2, E2 = n3.containerEl, A2 = n3.applyTransformOrigin, C2 = n3.spring, b2 = n3.debug, I2 = n3.portalKey, w2 = n3.staggerConfig, O2 = void 0 === w2 ? {} : w2, x2 = n3.decisionData, k2 = void 0 === x2 ? {} : x2, j2 = n3.handleEnterUpdateDelete, B = n3.onComplete, N2 = n3.onStart;
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var L2, q = M(T((L2 = { element: E2, portalKey: I2 }).element, L2.portalKey)).map(function(t2) {
      var e3 = t2[0], i3 = t2[1], n4 = window.getComputedStyle(e3);
      return [e3.dataset.flipId, { element: e3, rect: i3, opacity: parseFloat(n4.opacity), transform: n4.transform }];
    }).reduce(R, {}), X = function(t2) {
      var e3 = t2.containerEl, i3 = t2.portalKey;
      return i3 ? function(t3) {
        return function(e4) {
          return r(document.querySelectorAll("[" + d + '="' + t3 + '"]' + e4));
        };
      }(i3) : e3 ? function(t3) {
        var e4 = Math.random().toFixed(5);
        return t3.dataset.flipperId = e4, function(i4) {
          return r(t3.querySelectorAll('[data-flipper-id="' + e4 + '"] ' + i4));
        };
      }(e3) : function() {
        return [];
      };
    }({ containerEl: E2, portalKey: I2 }), Y = function(t2) {
      return function(e3) {
        return t2("[" + c + '="' + e3 + '"]')[0];
      };
    }(X), W = function(t2) {
      return y3[t2] && q[t2];
    }, K = Object.keys(y3).concat(Object.keys(q)).filter(function(t2) {
      return !W(t2);
    }), H = { flipCallbacks: S2, getElement: Y, flippedElementPositionsBeforeUpdate: y3, flippedElementPositionsAfterUpdate: q, inProgressAnimations: h3, decisionData: k2 }, J = function(t2) {
      var e3, i3 = t2.unflippedIds, n4 = t2.flipCallbacks, r3 = t2.getElement, s2 = t2.flippedElementPositionsBeforeUpdate, a2 = t2.flippedElementPositionsAfterUpdate, o3 = t2.inProgressAnimations, l2 = t2.decisionData, p3 = i3.filter(function(t3) {
        return a2[t3];
      }).filter(function(t3) {
        return n4[t3] && n4[t3].onAppear;
      }), c3 = i3.filter(function(t3) {
        return s2[t3] && n4[t3] && n4[t3].onExit;
      }), u3 = new Promise(function(t3) {
        e3 = t3;
      }), d3 = [], f4 = 0, h4 = c3.map(function(t3, i4) {
        var r4 = s2[t3].domDataForExitAnimations, a3 = r4.element, p4 = r4.parent, c4 = r4.childPosition, u4 = c4.top, h5 = c4.left, g2 = c4.width, m3 = c4.height;
        "static" === getComputedStyle(p4).position && (p4.style.position = "relative"), a3.style.transform = "matrix(1, 0, 0, 1, 0, 0)", a3.style.position = "absolute", a3.style.top = u4 + "px", a3.style.left = h5 + "px", a3.style.height = m3 + "px", a3.style.width = g2 + "px";
        var v3 = d3.filter(function(t4) {
          return t4[0] === p4;
        })[0];
        v3 || (v3 = [p4, document.createDocumentFragment()], d3.push(v3)), v3[1].appendChild(a3), f4 += 1;
        var y4 = function() {
          try {
            p4.removeChild(a3);
          } catch (t4) {
          } finally {
            0 == (f4 -= 1) && e3();
          }
        };
        return o3[t3] = { stop: y4 }, function() {
          return n4[t3].onExit(a3, i4, y4, l2);
        };
      });
      return d3.forEach(function(t3) {
        t3[0].appendChild(t3[1]);
      }), h4.length || e3(), { hideEnteringElements: function() {
        p3.forEach(function(t3) {
          var e4 = r3(t3);
          e4 && (e4.style.opacity = "0");
        });
      }, animateEnteringElements: function() {
        p3.forEach(function(t3, e4) {
          var i4 = r3(t3);
          i4 && n4[t3].onAppear(i4, e4, l2);
        });
      }, animateExitingElements: function() {
        return h4.forEach(function(t3) {
          return t3();
        }), u3;
      } };
    }(a({}, H, { unflippedIds: K })), z = J.hideEnteringElements, G = J.animateEnteringElements, Q = J.animateExitingElements, Z = a({}, H, { containerEl: E2, flippedIds: p2.filter(W), applyTransformOrigin: A2, spring: C2, debug: b2, staggerConfig: O2, scopedSelector: X, onComplete: B });
    N2 && N2(E2, k2);
    var $ = function(n4) {
      var o3, p3 = n4.flippedIds, c3 = n4.flipCallbacks, d3 = n4.inProgressAnimations, f4 = n4.flippedElementPositionsBeforeUpdate, h4 = n4.flippedElementPositionsAfterUpdate, v3 = n4.applyTransformOrigin, y4 = n4.spring, _3 = n4.getElement, S3 = n4.debug, E3 = n4.staggerConfig, A3 = void 0 === E3 ? {} : E3, C3 = n4.decisionData, b3 = void 0 === C3 ? {} : C3, I3 = n4.onComplete, w3 = n4.containerEl, O3 = new Promise(function(t2) {
        o3 = t2;
      });
      if (I3 && O3.then(function() {
        return I3(w3, b3);
      }), !p3.length)
        return function() {
          return o3([]), O3;
        };
      var x3 = [], R2 = _3(p3[0]), T2 = R2 ? R2.ownerDocument.querySelector("body") : document.querySelector("body");
      s(p3);
      var M2 = p3.map(function(n5) {
        var s2 = f4[n5].rect, p4 = h4[n5].rect, _4 = f4[n5].opacity, S4 = h4[n5].opacity, E4 = p4.width < 1 || p4.height < 1, A4 = h4[n5].element;
        if (!P(s2) && !P(p4))
          return false;
        if (!A4)
          return false;
        var C4, I4, w4, O4 = D(A4), U2 = (w4 = (I4 = void 0 === (C4 = { flipperSpring: y4, flippedSpring: O4.spring }) ? {} : C4).flippedSpring, a({}, g.noWobble, m(I4.flipperSpring), m(w4))), V2 = true === O4.stagger ? "default" : O4.stagger, R3 = { element: A4, id: n5, stagger: V2, springConfig: U2 };
        if (c3[n5] && c3[n5].shouldFlip && !c3[n5].shouldFlip(b3.previous, b3.current))
          return false;
        var k4 = Math.abs(s2.left - p4.left) + Math.abs(s2.top - p4.top), j4 = Math.abs(s2.width - p4.width) + Math.abs(s2.height - p4.height), B3 = Math.abs(S4 - _4);
        if (0 === s2.height && 0 === p4.height || 0 === s2.width && 0 === p4.width || k4 < 0.5 && j4 < 0.5 && B3 < 0.01)
          return false;
        var N4 = parse(h4[n5].transform), L4 = { matrix: N4 }, q3 = { matrix: [] }, X2 = [N4];
        O4.translate && (X2.push(translateX(s2.left - p4.left)), X2.push(translateY(s2.top - p4.top))), O4.scale && (X2.push(scaleX(Math.max(s2.width, 1) / Math.max(p4.width, 1))), X2.push(scaleY(Math.max(s2.height, 1) / Math.max(p4.height, 1)))), O4.opacity && (q3.opacity = _4, L4.opacity = S4);
        var Y2 = [];
        if (!c3[n5] || !c3[n5].shouldInvert || c3[n5].shouldInvert(b3.previous, b3.current)) {
          var W2 = function(t2, e3) {
            return r(t2.querySelectorAll("[" + u + '="' + e3 + '"]'));
          }(A4, n5);
          Y2 = W2.map(function(t2) {
            return [t2, D(t2)];
          });
        }
        q3.matrix = F(X2.reduce(multiply)), L4.matrix = F(L4.matrix);
        var K2, H2 = function(t2) {
          var i3 = t2.element, n6 = t2.invertedChildren, r3 = t2.body;
          return function(t3) {
            var s3 = t3.matrix, a2 = t3.opacity, o4 = t3.forceMinVals;
            if (e(a2) && (i3.style.opacity = a2 + ""), o4 && (i3.style.minHeight = "1px", i3.style.minWidth = "1px"), s3) {
              var l2 = function(t4) {
                return "matrix(" + t4.join(", ") + ")";
              }(s3);
              i3.style.transform = l2, n6 && function(t4) {
                var e3 = t4.matrix, i4 = t4.body;
                t4.invertedChildren.forEach(function(t5) {
                  var n7 = t5[0], r4 = t5[1];
                  if (i4.contains(n7)) {
                    var s4 = e3[0], a3 = e3[3], o5 = e3[5], l3 = { translateX: 0, translateY: 0, scaleX: 1, scaleY: 1 }, p5 = "";
                    r4.translate && (l3.translateX = -e3[4] / s4, l3.translateY = -o5 / a3, p5 += "translate(" + l3.translateX + "px, " + l3.translateY + "px)"), r4.scale && (l3.scaleX = 1 / s4, l3.scaleY = 1 / a3, p5 += " scale(" + l3.scaleX + ", " + l3.scaleY + ")"), n7.style.transform = p5;
                  }
                });
              }({ invertedChildren: n6, matrix: s3, body: r3 });
            }
          };
        }({ element: A4, invertedChildren: Y2, body: T2 });
        if (c3[n5] && c3[n5].onComplete) {
          var J2 = c3[n5].onComplete;
          K2 = function() {
            return J2(A4, b3);
          };
        }
        var z2 = e(q3.opacity) && e(L4.opacity) && q3.opacity !== L4.opacity, G2 = false;
        return a({}, R3, { stagger: V2, springConfig: U2, getOnUpdateFunc: function(t2) {
          var e3 = t2.spring, i3 = t2.onAnimationEnd;
          return d3[n5] = { destroy: e3.destroy.bind(e3), onAnimationEnd: i3 }, function(t3) {
            c3[n5] && c3[n5].onSpringUpdate && c3[n5].onSpringUpdate(t3.getCurrentValue()), G2 || (G2 = true, c3[n5] && c3[n5].onStart && c3[n5].onStart(A4, b3));
            var e4 = t3.getCurrentValue();
            if (T2.contains(A4)) {
              var i4 = { matrix: [] };
              i4.matrix = q3.matrix.map(function(t4, i5) {
                return l(t4, L4.matrix[i5], e4);
              }), z2 && (i4.opacity = l(q3.opacity, L4.opacity, e4)), H2(i4);
            } else
              t3.destroy();
          };
        }, initializeFlip: function() {
          H2({ matrix: q3.matrix, opacity: z2 ? q3.opacity : void 0, forceMinVals: E4 }), c3[n5] && c3[n5].onStartImmediate && c3[n5].onStartImmediate(A4, b3), O4.transformOrigin ? A4.style.transformOrigin = O4.transformOrigin : v3 && (A4.style.transformOrigin = "0 0"), Y2.forEach(function(t2) {
            var e3 = t2[0], i3 = t2[1];
            i3.transformOrigin ? e3.style.transformOrigin = i3.transformOrigin : v3 && (e3.style.transformOrigin = "0 0");
          });
        }, onAnimationEnd: function(t2) {
          delete d3[n5], i(K2) && K2(), A4.style.transform = "", Y2.forEach(function(t3) {
            t3[0].style.transform = "";
          }), E4 && A4 && (A4.style.minHeight = "", A4.style.minWidth = ""), t2 || (x3.push(n5), x3.length >= M2.length && o3(x3));
        }, delayUntil: O4.delayUntil });
      }).filter(Boolean);
      if (M2.forEach(function(t2) {
        return (0, t2.initializeFlip)();
      }), S3)
        return function() {
        };
      var k3 = M2.filter(function(t2) {
        return t2.delayUntil && (e3 = t2.delayUntil, M2.filter(function(t3) {
          return t3.id === e3;
        }).length);
        var e3;
      }), j3 = {}, B2 = {}, N3 = {};
      k3.forEach(function(t2) {
        t2.stagger ? (N3[t2.stagger] = true, B2[t2.delayUntil] ? B2[t2.delayUntil].push(t2.stagger) : B2[t2.delayUntil] = [t2.stagger]) : j3[t2.delayUntil] ? j3[t2.delayUntil].push(t2) : j3[t2.delayUntil] = [t2];
      });
      var L3 = M2.filter(function(t2) {
        return t2.stagger;
      }).reduce(function(t2, e3) {
        return t2[e3.stagger] ? t2[e3.stagger].push(e3) : t2[e3.stagger] = [e3], t2;
      }, {}), q2 = M2.filter(function(t2) {
        return -1 === k3.indexOf(t2);
      });
      return q2.forEach(function(t2) {
        t2.onSpringActivate = function() {
          j3[t2.id] && j3[t2.id].forEach(U), B2[t2.id] && Object.keys(B2[t2.id].reduce(function(t3, e3) {
            var i3;
            return a(t3, ((i3 = {})[e3] = true, i3));
          }, {})).forEach(function(t3) {
            V(L3[t3], A3[t3]);
          });
        };
      }), function() {
        return M2.length || o3([]), q2.filter(function(t2) {
          return !t2.stagger;
        }).forEach(U), Object.keys(L3).forEach(function(t2) {
          N3[t2] || V(L3[t2], A3[t2]);
        }), O3;
      };
    }(Z);
    j2 ? j2({ hideEnteringElements: z, animateEnteringElements: G, animateExitingElements: Q, animateFlippedElements: $ }) : (z(), Q().then(G), $());
  }
};
var j = function(t2) {
  var e3 = t2.element, i3 = t2.flipCallbacks, n3 = void 0 === i3 ? {} : i3, s2 = t2.inProgressAnimations, o2 = void 0 === s2 ? {} : s2, l2 = T(e3, t2.portalKey), p2 = r(e3.querySelectorAll("[" + u + "]")), c3 = {}, d3 = [], h3 = {};
  l2.filter(function(t3) {
    return n3 && n3[t3.dataset.flipId] && n3[t3.dataset.flipId].onExit;
  }).forEach(function(t3) {
    var e4 = t3.parentNode;
    if (t3.closest) {
      var i4 = t3.closest("[" + f + "]");
      i4 && (e4 = i4);
    }
    var n4 = d3.findIndex(function(t4) {
      return t4[0] === e4;
    });
    -1 === n4 && (d3.push([e4, e4.getBoundingClientRect()]), n4 = d3.length - 1), c3[t3.dataset.flipId] = d3[n4][1], h3[t3.dataset.flipId] = e4;
  });
  var g2 = M(l2), m3 = g2.map(function(t3) {
    var e4 = t3[0], i4 = t3[1], r3 = {};
    if (n3 && n3[e4.dataset.flipId] && n3[e4.dataset.flipId].onExit) {
      var s3 = c3[e4.dataset.flipId];
      a(r3, { element: e4, parent: h3[e4.dataset.flipId], childPosition: { top: i4.top - s3.top, left: i4.left - s3.left, width: i4.width, height: i4.height } });
    }
    return [e4.dataset.flipId, { rect: i4, opacity: parseFloat(window.getComputedStyle(e4).opacity || "1"), domDataForExitAnimations: r3 }];
  }).reduce(R, {});
  return function(t3, e4) {
    Object.keys(t3).forEach(function(e5) {
      t3[e5].destroy && t3[e5].destroy(), t3[e5].onAnimationEnd && t3[e5].onAnimationEnd(true), delete t3[e5];
    }), e4.forEach(function(t4) {
      t4.style.transform = "", t4.style.opacity = "";
    });
  }(o2, l2.concat(p2)), { flippedElementPositions: m3, cachedOrderedFlipIds: g2.map(function(t3) {
    return t3[0].dataset.flipId;
  }) };
};
var N = new w();

// node_modules/react-flip-toolkit/lib/index.es.js
function c2(e3, t2) {
  return (c2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t3) {
    return e4.__proto__ = t3, e4;
  })(e3, t2);
}
function d2(e3, t2) {
  if (null == e3)
    return {};
  var r3, n3, i3 = {}, o2 = Object.keys(e3);
  for (n3 = 0; n3 < o2.length; n3++)
    t2.indexOf(r3 = o2[n3]) >= 0 || (i3[r3] = e3[r3]);
  return i3;
}
var f2 = (0, import_react.createContext)({});
var u2 = (0, import_react.createContext)("portal");
var h2 = function(t2) {
  var r3, n3;
  function i3() {
    var e3;
    return (e3 = t2.apply(this, arguments) || this).inProgressAnimations = {}, e3.flipCallbacks = {}, e3.el = void 0, e3;
  }
  n3 = t2, (r3 = i3).prototype = Object.create(n3.prototype), r3.prototype.constructor = r3, c2(r3, n3);
  var l2 = i3.prototype;
  return l2.getSnapshotBeforeUpdate = function(e3) {
    return e3.flipKey !== this.props.flipKey && this.el ? j({ element: this.el, flipCallbacks: this.flipCallbacks, inProgressAnimations: this.inProgressAnimations, portalKey: this.props.portalKey }) : null;
  }, l2.componentDidUpdate = function(e3, t3, r4) {
    this.props.flipKey !== e3.flipKey && this.el && k({ flippedElementPositionsBeforeUpdate: r4.flippedElementPositions, cachedOrderedFlipIds: r4.cachedOrderedFlipIds, containerEl: this.el, inProgressAnimations: this.inProgressAnimations, flipCallbacks: this.flipCallbacks, applyTransformOrigin: this.props.applyTransformOrigin, spring: this.props.spring, debug: this.props.debug, portalKey: this.props.portalKey, staggerConfig: this.props.staggerConfig, handleEnterUpdateDelete: this.props.handleEnterUpdateDelete, decisionData: { previous: e3.decisionData, current: this.props.decisionData }, onComplete: this.props.onComplete, onStart: this.props.onStart });
  }, l2.render = function() {
    var t3 = this, r4 = this.props, n4 = r4.portalKey, i4 = import_react.default.createElement(f2.Provider, { value: this.flipCallbacks }, import_react.default.createElement(r4.element, { className: r4.className, ref: function(e3) {
      return t3.el = e3;
    } }, this.props.children));
    return n4 && (i4 = import_react.default.createElement(u2.Provider, { value: n4 }, i4)), i4;
  }, i3;
}(import_react.Component);
h2.defaultProps = { applyTransformOrigin: true, element: "div" };
var m2 = function(e3) {
  var t2, r3 = e3.children, o2 = e3.flipId, p2 = e3.inverseFlipId, a2 = e3.portalKey, c3 = d2(e3, ["children", "flipId", "inverseFlipId", "portalKey"]), f3 = r3, u3 = function(e4) {
    return "function" == typeof e4;
  }(f3);
  if (!u3)
    try {
      f3 = import_react.Children.only(r3);
    } catch (e4) {
      throw new Error("Each Flipped component must wrap a single child");
    }
  c3.scale || c3.translate || c3.opacity || p.assign(c3, { translate: true, scale: true, opacity: true });
  var h3 = ((t2 = {})[h.DATA_FLIP_CONFIG] = JSON.stringify(c3), t2);
  return void 0 !== o2 ? h3[h.DATA_FLIP_ID] = String(o2) : p2 && (h3[h.DATA_INVERSE_FLIP_ID] = String(p2)), void 0 !== a2 && (h3[h.DATA_PORTAL_KEY] = a2), u3 ? f3(h3) : (0, import_react.cloneElement)(f3, h3);
};
var y2 = function(t2) {
  var r3 = t2.children, n3 = t2.flipId, i3 = t2.shouldFlip, o2 = t2.shouldInvert, p2 = t2.onAppear, s2 = t2.onStart, a2 = t2.onStartImmediate, c3 = t2.onComplete, h3 = t2.onExit, y3 = t2.onSpringUpdate, g2 = d2(t2, ["children", "flipId", "shouldFlip", "shouldInvert", "onAppear", "onStart", "onStartImmediate", "onComplete", "onExit", "onSpringUpdate"]);
  return r3 ? g2.inverseFlipId ? import_react.default.createElement(m2, Object.assign({}, g2), r3) : import_react.default.createElement(u2.Consumer, null, function(t3) {
    return import_react.default.createElement(f2.Consumer, null, function(d3) {
      return p.isObject(d3) && n3 && (d3[n3] = { shouldFlip: i3, shouldInvert: o2, onAppear: p2, onStart: s2, onStartImmediate: a2, onComplete: c3, onExit: h3, onSpringUpdate: y3 }), import_react.default.createElement(m2, Object.assign({ flipId: n3 }, g2, { portalKey: t3 }), r3);
    });
  }) : null;
};
y2.displayName = "Flipped";

// app/components/HighPacketLossWarningsToast.tsx
var import_react3 = __toESM(require_react());

// app/hooks/useConditionForAtLeast.ts
var import_react2 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useConditionForAtLeast.ts"
  );
  import.meta.hot.lastModified = "1712808153527.9424";
}
function useConditionForAtLeast(condition, time) {
  const [value, setValue] = (0, import_react2.useState)(condition);
  (0, import_react2.useEffect)(() => {
    let timeout = window.setTimeout(() => {
      setValue(condition);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [condition, time]);
  return value;
}

// app/components/HighPacketLossWarningsToast.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/HighPacketLossWarningsToast.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/HighPacketLossWarningsToast.tsx"
  );
  import.meta.hot.lastModified = "1712808153523.65";
}
function usePacketLossInformation() {
  _s();
  const {
    peer
  } = useRoomContext();
  const [debugInfo, setDebugInfo] = (0, import_react3.useState)(peer == null ? void 0 : peer.getDebugInfo());
  (0, import_react3.useEffect)(() => {
    const interval = setInterval(() => {
      setDebugInfo(peer == null ? void 0 : peer.getDebugInfo());
    }, 1e3);
    return () => {
      clearInterval(interval);
    };
  }, [peer]);
  return debugInfo != null ? debugInfo : {};
}
_s(usePacketLossInformation, "qO78Pp9stUIyuVqlpE1mI2e819E=", false, function() {
  return [useRoomContext];
});
function HighPacketLossWarningsToast() {
  _s2();
  const {
    inboundPacketLossPercentage,
    outboundPacketLossPercentage
  } = usePacketLossInformation();
  const hasIssues = useConditionForAtLeast(inboundPacketLossPercentage !== void 0 && outboundPacketLossPercentage !== void 0 && inboundPacketLossPercentage > 0.01 && outboundPacketLossPercentage > 0.01, 3e3);
  if (inboundPacketLossPercentage === void 0 || outboundPacketLossPercentage === void 0) {
    return null;
  }
  if (!hasIssues) {
    return null;
  }
  const inbound = (inboundPacketLossPercentage * 100).toFixed(2);
  const outbound = (outboundPacketLossPercentage * 100).toFixed(2);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { duration: Infinity, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast_default.Title, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { type: "WifiIcon" }, void 0, false, {
        fileName: "app/components/HighPacketLossWarningsToast.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this),
      "Unstable connection"
    ] }, void 0, true, {
      fileName: "app/components/HighPacketLossWarningsToast.tsx",
      lineNumber: 65,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/HighPacketLossWarningsToast.tsx",
      lineNumber: 64,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast_default.Description, { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Call quality may be affected." }, void 0, false, {
        fileName: "app/components/HighPacketLossWarningsToast.tsx",
        lineNumber: 71,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 dark:text-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Packet Loss" }, void 0, false, {
          fileName: "app/components/HighPacketLossWarningsToast.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sr-only", children: "Outbound" }, void 0, false, {
              fileName: "app/components/HighPacketLossWarningsToast.tsx",
              lineNumber: 76,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "text-gray-400 dark:text-gray-300", type: "ArrowUpOnSquareIcon" }, void 0, false, {
              fileName: "app/components/HighPacketLossWarningsToast.tsx",
              lineNumber: 77,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              outbound,
              "%"
            ] }, void 0, true, {
              fileName: "app/components/HighPacketLossWarningsToast.tsx",
              lineNumber: 78,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/HighPacketLossWarningsToast.tsx",
            lineNumber: 75,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sr-only", children: "Inbound" }, void 0, false, {
              fileName: "app/components/HighPacketLossWarningsToast.tsx",
              lineNumber: 81,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "text-gray-400 dark:text-gray-300", type: "ArrowDownOnSquareIcon" }, void 0, false, {
              fileName: "app/components/HighPacketLossWarningsToast.tsx",
              lineNumber: 82,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              inbound,
              "%"
            ] }, void 0, true, {
              fileName: "app/components/HighPacketLossWarningsToast.tsx",
              lineNumber: 83,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/HighPacketLossWarningsToast.tsx",
            lineNumber: 80,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/HighPacketLossWarningsToast.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/HighPacketLossWarningsToast.tsx",
        lineNumber: 72,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/HighPacketLossWarningsToast.tsx",
      lineNumber: 70,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/HighPacketLossWarningsToast.tsx",
    lineNumber: 63,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/HighPacketLossWarningsToast.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s2(HighPacketLossWarningsToast, "N0ZuKp9MyhqJYi4waqkBkf6JuhI=", false, function() {
  return [usePacketLossInformation, useConditionForAtLeast];
});
_c = HighPacketLossWarningsToast;
var _c;
$RefreshReg$(_c, "HighPacketLossWarningsToast");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/IceDisconnectedToast.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/IceDisconnectedToast.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/IceDisconnectedToast.tsx"
  );
  import.meta.hot.lastModified = "1712808153523.848";
}
function IceDisconnectedToast() {
  _s3();
  const {
    iceConnectionState
  } = useRoomContext();
  const disconnectedForAtLeastTwoSeconds = useConditionForAtLeast(iceConnectionState === "disconnected", 2e3);
  if (!disconnectedForAtLeastTwoSeconds) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Root, { duration: Infinity, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Toast_default.Title, { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { type: "WifiIcon" }, void 0, false, {
      fileName: "app/components/IceDisconnectedToast.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    "ICE disconnected"
  ] }, void 0, true, {
    fileName: "app/components/IceDisconnectedToast.tsx",
    lineNumber: 38,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/components/IceDisconnectedToast.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/IceDisconnectedToast.tsx",
    lineNumber: 36,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/IceDisconnectedToast.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s3(IceDisconnectedToast, "kw5YtL+bXi1/Z3X05DG2SGKTlOU=", false, function() {
  return [useRoomContext, useConditionForAtLeast];
});
_c2 = IceDisconnectedToast;
var _c2;
$RefreshReg$(_c2, "IceDisconnectedToast");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LeaveRoomButton.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LeaveRoomButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LeaveRoomButton.tsx"
  );
  import.meta.hot.lastModified = "1712808153524.5361";
}
var LeaveRoomButton = () => {
  _s4();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tooltip, { content: "Leave", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { displayType: "danger", onClick: () => {
    navigate("/");
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($ea1ef594cf570d83$export$439d29a4e110a164, { children: "Leave" }, void 0, false, {
      fileName: "app/components/LeaveRoomButton.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { type: "phoneXMark" }, void 0, false, {
      fileName: "app/components/LeaveRoomButton.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/LeaveRoomButton.tsx",
    lineNumber: 31,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/LeaveRoomButton.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s4(LeaveRoomButton, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c3 = LeaveRoomButton;
var _c3;
$RefreshReg$(_c3, "LeaveRoomButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/OverflowMenu.tsx
var import_react17 = __toESM(require_react());

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  Arrow: () => $d08ef79370b62062$export$21b07c8f274aebd5,
  CheckboxItem: () => $d08ef79370b62062$export$16ce288f89fa631c,
  Content: () => $d08ef79370b62062$export$7c6e2c02157bb7d2,
  DropdownMenu: () => $d08ef79370b62062$export$e44a253a59704894,
  DropdownMenuArrow: () => $d08ef79370b62062$export$34b8980744021ec5,
  DropdownMenuCheckboxItem: () => $d08ef79370b62062$export$53a69729da201fa9,
  DropdownMenuContent: () => $d08ef79370b62062$export$6e76d93a37c01248,
  DropdownMenuGroup: () => $d08ef79370b62062$export$246bebaba3a2f70e,
  DropdownMenuItem: () => $d08ef79370b62062$export$ed97964d1871885d,
  DropdownMenuItemIndicator: () => $d08ef79370b62062$export$42355ae145153fb6,
  DropdownMenuLabel: () => $d08ef79370b62062$export$76e48c5b57f24495,
  DropdownMenuPortal: () => $d08ef79370b62062$export$cd369b4d4d54efc9,
  DropdownMenuRadioGroup: () => $d08ef79370b62062$export$3323ad73d55f587e,
  DropdownMenuRadioItem: () => $d08ef79370b62062$export$e4f69b41b1637536,
  DropdownMenuSeparator: () => $d08ef79370b62062$export$da160178fd3bc7e9,
  DropdownMenuSub: () => $d08ef79370b62062$export$2f307d81a64f5442,
  DropdownMenuSubContent: () => $d08ef79370b62062$export$f34ec8bc2482cc5f,
  DropdownMenuSubTrigger: () => $d08ef79370b62062$export$21dcb7ec56f874cf,
  DropdownMenuTrigger: () => $d08ef79370b62062$export$d2469213b3befba9,
  Group: () => $d08ef79370b62062$export$eb2fcfdbd7ba97d4,
  Item: () => $d08ef79370b62062$export$6d08773d2e66f8f2,
  ItemIndicator: () => $d08ef79370b62062$export$c3468e2714d175fa,
  Label: () => $d08ef79370b62062$export$b04be29aa201d4f5,
  Portal: () => $d08ef79370b62062$export$602eac185826482c,
  RadioGroup: () => $d08ef79370b62062$export$a98f0dcb43a68a25,
  RadioItem: () => $d08ef79370b62062$export$371ab307eab489c0,
  Root: () => $d08ef79370b62062$export$be92b6f5f03c0fe9,
  Separator: () => $d08ef79370b62062$export$1ff3c3f08ae963c0,
  Sub: () => $d08ef79370b62062$export$d7a01e11500dfb6f,
  SubContent: () => $d08ef79370b62062$export$6d4de93b380beddf,
  SubTrigger: () => $d08ef79370b62062$export$2ea8a7a591ac5eac,
  Trigger: () => $d08ef79370b62062$export$41fb9f06171c75f4,
  createDropdownMenuScope: () => $d08ef79370b62062$export$c0623cd925aeb687
});
var import_react7 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-menu/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
var $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d7bdfb9eb0fdf311$var$GROUP_NAME = "RovingFocusGroup";
var [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($d7bdfb9eb0fdf311$var$GROUP_NAME);
var [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d7bdfb9eb0fdf311$var$GROUP_NAME, [
  $d7bdfb9eb0fdf311$var$createCollectionScope
]);
var [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
var $d7bdfb9eb0fdf311$export$8699f7c8af148338 = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react5.createElement)($d7bdfb9eb0fdf311$var$Collection.Provider, {
    scope: props.__scopeRovingFocusGroup
  }, /* @__PURE__ */ (0, import_react5.createElement)($d7bdfb9eb0fdf311$var$Collection.Slot, {
    scope: props.__scopeRovingFocusGroup
  }, /* @__PURE__ */ (0, import_react5.createElement)($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, _extends({}, props, {
    ref: forwardedRef
  }))));
});
var $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, ...groupProps } = props;
  const ref = (0, import_react5.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = (0, import_react5.useState)(false);
  const handleEntryFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEntryFocus);
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = (0, import_react5.useRef)(false);
  const [focusableItemsCount, setFocusableItemsCount] = (0, import_react5.useState)(0);
  (0, import_react5.useEffect)(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
    }
  }, [
    handleEntryFocus
  ]);
  return /* @__PURE__ */ (0, import_react5.createElement)($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: (0, import_react5.useCallback)(
      (tabStopId) => setCurrentTabStopId(tabStopId),
      [
        setCurrentTabStopId
      ]
    ),
    onItemShiftTab: (0, import_react5.useCallback)(
      () => setIsTabbingBackOut(true),
      []
    ),
    onFocusableItemAdd: (0, import_react5.useCallback)(
      () => setFocusableItemsCount(
        (prevCount) => prevCount + 1
      ),
      []
    ),
    onFocusableItemRemove: (0, import_react5.useCallback)(
      () => setFocusableItemsCount(
        (prevCount) => prevCount - 1
      ),
      []
    )
  }, /* @__PURE__ */ (0, import_react5.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
    "data-orientation": orientation
  }, groupProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...props.style
    },
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, () => {
      isClickFocusRef.current = true;
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, (event) => {
      const isKeyboardFocus = !isClickFocusRef.current;
      if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
        const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
        event.currentTarget.dispatchEvent(entryFocusEvent);
        if (!entryFocusEvent.defaultPrevented) {
          const items = getItems().filter(
            (item) => item.focusable
          );
          const activeItem = items.find(
            (item) => item.active
          );
          const currentItem = items.find(
            (item) => item.id === currentTabStopId
          );
          const candidateItems = [
            activeItem,
            currentItem,
            ...items
          ].filter(Boolean);
          const candidateNodes = candidateItems.map(
            (item) => item.ref.current
          );
          $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
        }
      }
      isClickFocusRef.current = false;
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsTabbingBackOut(false)
    )
  })));
});
var $d7bdfb9eb0fdf311$var$ITEM_NAME = "RovingFocusGroupItem";
var $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
  const autoId = $1746a345f3d73bb7$export$f680877a34711e37();
  const id = tabStopId || autoId;
  const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove } = context;
  (0, import_react5.useEffect)(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [
    focusable,
    onFocusableItemAdd,
    onFocusableItemRemove
  ]);
  return /* @__PURE__ */ (0, import_react5.createElement)($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id,
    focusable,
    active
  }, /* @__PURE__ */ (0, import_react5.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    tabIndex: isCurrentTabStop ? 0 : -1,
    "data-orientation": context.orientation
  }, itemProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!focusable)
        event.preventDefault();
      else
        context.onItemFocus(id);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => context.onItemFocus(id)
    ),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget)
        return;
      const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
      if (focusIntent !== void 0) {
        event.preventDefault();
        const items = getItems().filter(
          (item) => item.focusable
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if (focusIntent === "last")
          candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev")
            candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
        );
      }
    })
  })));
});
var $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
  const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(key))
    return void 0;
  if (orientation === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(key))
    return void 0;
  return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
  return array.map(
    (_2, index) => array[(startIndex + index) % array.length]
  );
}
var $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
var $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;

// node_modules/@radix-ui/react-menu/dist/index.mjs
var $6cc32821e9371a1c$var$SELECTION_KEYS = [
  "Enter",
  " "
];
var $6cc32821e9371a1c$var$FIRST_KEYS = [
  "ArrowDown",
  "PageUp",
  "Home"
];
var $6cc32821e9371a1c$var$LAST_KEYS = [
  "ArrowUp",
  "PageDown",
  "End"
];
var $6cc32821e9371a1c$var$FIRST_LAST_KEYS = [
  ...$6cc32821e9371a1c$var$FIRST_KEYS,
  ...$6cc32821e9371a1c$var$LAST_KEYS
];
var $6cc32821e9371a1c$var$SUB_OPEN_KEYS = {
  ltr: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowRight"
  ],
  rtl: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowLeft"
  ]
};
var $6cc32821e9371a1c$var$SUB_CLOSE_KEYS = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
};
var $6cc32821e9371a1c$var$MENU_NAME = "Menu";
var [$6cc32821e9371a1c$var$Collection, $6cc32821e9371a1c$var$useCollection, $6cc32821e9371a1c$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$createMenuContext, $6cc32821e9371a1c$export$4027731b685e72eb] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6cc32821e9371a1c$var$MENU_NAME, [
  $6cc32821e9371a1c$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $6cc32821e9371a1c$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var $6cc32821e9371a1c$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var [$6cc32821e9371a1c$var$MenuProvider, $6cc32821e9371a1c$var$useMenuContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$MenuRootProvider, $6cc32821e9371a1c$var$useMenuRootContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var $6cc32821e9371a1c$export$d9b273488cd8ce6f = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const [content, setContent] = (0, import_react6.useState)(null);
  const isUsingKeyboardRef = (0, import_react6.useRef)(false);
  const handleOpenChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onOpenChange);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  (0, import_react6.useEffect)(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, {
        capture: true,
        once: true
      });
      document.addEventListener("pointermove", handlePointer, {
        capture: true,
        once: true
      });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, {
      capture: true
    });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, {
        capture: true
      });
      document.removeEventListener("pointerdown", handlePointer, {
        capture: true
      });
      document.removeEventListener("pointermove", handlePointer, {
        capture: true
      });
    };
  }, []);
  return /* @__PURE__ */ (0, import_react6.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent
  }, /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuRootProvider, {
    scope: __scopeMenu,
    onClose: (0, import_react6.useCallback)(
      () => handleOpenChange(false),
      [
        handleOpenChange
      ]
    ),
    isUsingKeyboardRef,
    dir: direction,
    modal
  }, children)));
};
var $6cc32821e9371a1c$export$9fa5ebd18bee4d43 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...anchorProps } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  return /* @__PURE__ */ (0, import_react6.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({}, popperScope, anchorProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$PORTAL_NAME = "MenuPortal";
var [$6cc32821e9371a1c$var$PortalProvider, $6cc32821e9371a1c$var$usePortalContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, {
  forceMount: void 0
});
var $6cc32821e9371a1c$export$793392f970497feb = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, __scopeMenu);
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$PortalProvider, {
    scope: __scopeMenu,
    forceMount
  }, /* @__PURE__ */ (0, import_react6.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react6.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
var $6cc32821e9371a1c$var$CONTENT_NAME = "MenuContent";
var [$6cc32821e9371a1c$var$MenuContentProvider, $6cc32821e9371a1c$var$useMenuContentContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$CONTENT_NAME);
var $6cc32821e9371a1c$export$479f0f2f71193efe = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ (0, import_react6.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, rootContext.modal ? /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuRootContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuRootContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })))));
});
var $6cc32821e9371a1c$var$MenuRootContentModal = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const ref = (0, import_react6.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react6.useEffect)(() => {
    const content = ref.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: context.open,
    disableOutsideScroll: true,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    ),
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuRootContentNonModal = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuContentImpl = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const getItems = $6cc32821e9371a1c$var$useCollection(__scopeMenu);
  const [currentItemId, setCurrentItemId] = (0, import_react6.useState)(null);
  const contentRef = (0, import_react6.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef, context.onContentChange);
  const timerRef = (0, import_react6.useRef)(0);
  const searchRef = (0, import_react6.useRef)("");
  const pointerGraceTimerRef = (0, import_react6.useRef)(0);
  const pointerGraceIntentRef = (0, import_react6.useRef)(null);
  const pointerDirRef = (0, import_react6.useRef)("right");
  const lastPointerXRef = (0, import_react6.useRef)(0);
  const ScrollLockWrapper = disableOutsideScroll ? Combination_default : import_react6.Fragment;
  const scrollLockWrapperProps = disableOutsideScroll ? {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  } : void 0;
  const handleTypeaheadSearch = (key) => {
    var _items$find, _items$find2;
    const search = searchRef.current + key;
    const items = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = document.activeElement;
    const currentMatch = (_items$find = items.find(
      (item) => item.ref.current === currentItem
    )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
    const values = items.map(
      (item) => item.textValue
    );
    const nextMatch = $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch);
    const newItem = (_items$find2 = items.find(
      (item) => item.textValue === nextMatch
    )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current;
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
    if (newItem)
      setTimeout(
        () => newItem.focus()
      );
  };
  (0, import_react6.useEffect)(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const isPointerMovingToSubmenu = (0, import_react6.useCallback)((event) => {
    var _pointerGraceIntentRe, _pointerGraceIntentRe2;
    const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
    return isMovingTowards && $6cc32821e9371a1c$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
  }, []);
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuContentProvider, {
    scope: __scopeMenu,
    searchRef,
    onItemEnter: (0, import_react6.useCallback)((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    onItemLeave: (0, import_react6.useCallback)((event) => {
      var _contentRef$current;
      if (isPointerMovingToSubmenu(event))
        return;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
      setCurrentItemId(null);
    }, [
      isPointerMovingToSubmenu
    ]),
    onTriggerLeave: (0, import_react6.useCallback)((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    pointerGraceTimerRef,
    onPointerGraceIntentChange: (0, import_react6.useCallback)((intent) => {
      pointerGraceIntentRef.current = intent;
    }, [])
  }, /* @__PURE__ */ (0, import_react6.createElement)(ScrollLockWrapper, scrollLockWrapperProps, /* @__PURE__ */ (0, import_react6.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: trapFocus,
    onMountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onOpenAutoFocus, (event) => {
      var _contentRef$current2;
      event.preventDefault();
      (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
    }),
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react6.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss
  }, /* @__PURE__ */ (0, import_react6.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    dir: rootContext.dir,
    orientation: "vertical",
    loop,
    currentTabStopId: currentItemId,
    onCurrentTabStopIdChange: setCurrentItemId,
    onEntryFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onEntryFocus, (event) => {
      if (!rootContext.isUsingKeyboardRef.current)
        event.preventDefault();
    })
  }), /* @__PURE__ */ (0, import_react6.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open),
    "data-radix-menu-content": "",
    dir: rootContext.dir
  }, popperScope, contentProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const target = event.target;
      const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      const isCharacterKey = event.key.length === 1;
      if (isKeyDownInside) {
        if (event.key === "Tab")
          event.preventDefault();
        if (!isModifierKey && isCharacterKey)
          handleTypeaheadSearch(event.key);
      }
      const content = contentRef.current;
      if (event.target !== content)
        return;
      if (!$6cc32821e9371a1c$var$FIRST_LAST_KEYS.includes(event.key))
        return;
      event.preventDefault();
      const items = getItems().filter(
        (item) => !item.disabled
      );
      const candidateNodes = items.map(
        (item) => item.ref.current
      );
      if ($6cc32821e9371a1c$var$LAST_KEYS.includes(event.key))
        candidateNodes.reverse();
      $6cc32821e9371a1c$var$focusFirst(candidateNodes);
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, (event) => {
      if (!event.currentTarget.contains(event.target)) {
        window.clearTimeout(timerRef.current);
        searchRef.current = "";
      }
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      const target = event.target;
      const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
      if (event.currentTarget.contains(target) && pointerXHasChanged) {
        const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
        pointerDirRef.current = newDir;
        lastPointerXRef.current = event.clientX;
      }
    }))
  })))))));
});
var $6cc32821e9371a1c$export$22a631d1f72787bb = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...groupProps } = props;
  return /* @__PURE__ */ (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "group"
  }, groupProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$export$dd37bec0e8a99143 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...labelProps } = props;
  return /* @__PURE__ */ (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, labelProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$ITEM_NAME = "MenuItem";
var $6cc32821e9371a1c$var$ITEM_SELECT = "menu.itemSelect";
var $6cc32821e9371a1c$export$2ce376c2cc3355c8 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { disabled = false, onSelect, ...itemProps } = props;
  const ref = (0, import_react6.useRef)(null);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const isPointerDownRef = (0, import_react6.useRef)(false);
  const handleSelect = () => {
    const menuItem = ref.current;
    if (!disabled && menuItem) {
      const itemSelectEvent = new CustomEvent($6cc32821e9371a1c$var$ITEM_SELECT, {
        bubbles: true,
        cancelable: true
      });
      menuItem.addEventListener(
        $6cc32821e9371a1c$var$ITEM_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(menuItem, itemSelectEvent);
      if (itemSelectEvent.defaultPrevented)
        isPointerDownRef.current = false;
      else
        rootContext.onClose();
    }
  };
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuItemImpl, _extends({}, itemProps, {
    ref: composedRefs,
    disabled,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, handleSelect),
    onPointerDown: (event) => {
      var _props$onPointerDown;
      (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
      isPointerDownRef.current = true;
    },
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      var _event$currentTarget;
      if (!isPointerDownRef.current)
        (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SELECTION_KEYS.includes(event.key)) {
        event.currentTarget.click();
        event.preventDefault();
      }
    })
  }));
});
var $6cc32821e9371a1c$var$MenuItemImpl = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, __scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const ref = (0, import_react6.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [isFocused, setIsFocused] = (0, import_react6.useState)(false);
  const [textContent, setTextContent] = (0, import_react6.useState)("");
  (0, import_react6.useEffect)(() => {
    const menuItem = ref.current;
    if (menuItem) {
      var _menuItem$textContent;
      setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : "").trim());
    }
  }, [
    itemProps.children
  ]);
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$Collection.ItemSlot, {
    scope: __scopeMenu,
    disabled,
    textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
  }, /* @__PURE__ */ (0, import_react6.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled
  }), /* @__PURE__ */ (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "menuitem",
    "data-highlighted": isFocused ? "" : void 0,
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0
  }, itemProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      if (disabled)
        contentContext.onItemLeave(event);
      else {
        contentContext.onItemEnter(event);
        if (!event.defaultPrevented) {
          const item = event.currentTarget;
          item.focus();
        }
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse(
      (event) => contentContext.onItemLeave(event)
    )),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsFocused(false)
    )
  }))));
});
var $6cc32821e9371a1c$export$f6f243521332502d = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemcheckbox",
    "aria-checked": $6cc32821e9371a1c$var$isIndeterminate(checked) ? "mixed" : checked
  }, checkboxItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      checkboxItemProps.onSelect,
      () => onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($6cc32821e9371a1c$var$isIndeterminate(checked) ? true : !checked),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
var $6cc32821e9371a1c$var$RADIO_GROUP_NAME = "MenuRadioGroup";
var [$6cc32821e9371a1c$var$RadioGroupProvider, $6cc32821e9371a1c$var$useRadioGroupContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$RADIO_GROUP_NAME, {
  value: void 0,
  onValueChange: () => {
  }
});
var $6cc32821e9371a1c$export$ea2200c9eee416b3 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { value, onValueChange, ...groupProps } = props;
  const handleValueChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onValueChange);
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$RadioGroupProvider, {
    scope: props.__scopeMenu,
    value,
    onValueChange: handleValueChange
  }, /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$export$22a631d1f72787bb, _extends({}, groupProps, {
    ref: forwardedRef
  })));
});
var $6cc32821e9371a1c$var$RADIO_ITEM_NAME = "MenuRadioItem";
var $6cc32821e9371a1c$export$69bd225e9817f6d0 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { value, ...radioItemProps } = props;
  const context = $6cc32821e9371a1c$var$useRadioGroupContext($6cc32821e9371a1c$var$RADIO_ITEM_NAME, props.__scopeMenu);
  const checked = value === context.value;
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemradio",
    "aria-checked": checked
  }, radioItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(radioItemProps.onSelect, () => {
      var _context$onValueChang;
      return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
var $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [$6cc32821e9371a1c$var$ItemIndicatorProvider, $6cc32821e9371a1c$var$useItemIndicatorContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, {
  checked: false
});
var $6cc32821e9371a1c$export$a2593e23056970a3 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
  const indicatorContext = $6cc32821e9371a1c$var$useItemIndicatorContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, __scopeMenu);
  return /* @__PURE__ */ (0, import_react6.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $6cc32821e9371a1c$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
  }, /* @__PURE__ */ (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, itemIndicatorProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(indicatorContext.checked)
  })));
});
var $6cc32821e9371a1c$export$1cec7dcdd713e220 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...separatorProps } = props;
  return /* @__PURE__ */ (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "separator",
    "aria-orientation": "horizontal"
  }, separatorProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$export$bcdda4773debf5fa = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...arrowProps } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  return /* @__PURE__ */ (0, import_react6.createElement)($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends({}, popperScope, arrowProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$SUB_NAME = "MenuSub";
var [$6cc32821e9371a1c$var$MenuSubProvider, $6cc32821e9371a1c$var$useMenuSubContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$SUB_NAME);
var $6cc32821e9371a1c$export$71bdb9d1e2909932 = (props) => {
  const { __scopeMenu, children, open = false, onOpenChange } = props;
  const parentMenuContext = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_NAME, __scopeMenu);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const [trigger, setTrigger] = (0, import_react6.useState)(null);
  const [content, setContent] = (0, import_react6.useState)(null);
  const handleOpenChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onOpenChange);
  (0, import_react6.useEffect)(() => {
    if (parentMenuContext.open === false)
      handleOpenChange(false);
    return () => handleOpenChange(false);
  }, [
    parentMenuContext.open,
    handleOpenChange
  ]);
  return /* @__PURE__ */ (0, import_react6.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent
  }, /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuSubProvider, {
    scope: __scopeMenu,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerId: $1746a345f3d73bb7$export$f680877a34711e37(),
    trigger,
    onTriggerChange: setTrigger
  }, children)));
};
var $6cc32821e9371a1c$var$SUB_TRIGGER_NAME = "MenuSubTrigger";
var $6cc32821e9371a1c$export$5fbbb3ba7297405f = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const openTimerRef = (0, import_react6.useRef)(null);
  const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
  const scope = {
    __scopeMenu: props.__scopeMenu
  };
  const clearOpenTimer = (0, import_react6.useCallback)(() => {
    if (openTimerRef.current)
      window.clearTimeout(openTimerRef.current);
    openTimerRef.current = null;
  }, []);
  (0, import_react6.useEffect)(
    () => clearOpenTimer,
    [
      clearOpenTimer
    ]
  );
  (0, import_react6.useEffect)(() => {
    const pointerGraceTimer = pointerGraceTimerRef.current;
    return () => {
      window.clearTimeout(pointerGraceTimer);
      onPointerGraceIntentChange(null);
    };
  }, [
    pointerGraceTimerRef,
    onPointerGraceIntentChange
  ]);
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$export$9fa5ebd18bee4d43, _extends({
    asChild: true
  }, scope), /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuItemImpl, _extends({
    id: subContext.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": subContext.contentId,
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open)
  }, props, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, subContext.onTriggerChange),
    onClick: (event) => {
      var _props$onClick;
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
      if (props.disabled || event.defaultPrevented)
        return;
      event.currentTarget.focus();
      if (!context.open)
        context.onOpenChange(true);
    },
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      contentContext.onItemEnter(event);
      if (event.defaultPrevented)
        return;
      if (!props.disabled && !context.open && !openTimerRef.current) {
        contentContext.onPointerGraceIntentChange(null);
        openTimerRef.current = window.setTimeout(() => {
          context.onOpenChange(true);
          clearOpenTimer();
        }, 100);
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse((event) => {
      var _context$content;
      clearOpenTimer();
      const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
      if (contentRect) {
        var _context$content2;
        const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
        const rightSide = side === "right";
        const bleed = rightSide ? -5 : 5;
        const contentNearEdge = contentRect[rightSide ? "left" : "right"];
        const contentFarEdge = contentRect[rightSide ? "right" : "left"];
        contentContext.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: event.clientX + bleed,
              y: event.clientY
            },
            {
              x: contentNearEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.bottom
            },
            {
              x: contentNearEdge,
              y: contentRect.bottom
            }
          ],
          side
        });
        window.clearTimeout(pointerGraceTimerRef.current);
        pointerGraceTimerRef.current = window.setTimeout(
          () => contentContext.onPointerGraceIntentChange(null),
          300
        );
      } else {
        contentContext.onTriggerLeave(event);
        if (event.defaultPrevented)
          return;
        contentContext.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (props.disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
        var _context$content3;
        context.onOpenChange(true);
        (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus();
        event.preventDefault();
      }
    })
  })));
});
var $6cc32821e9371a1c$var$SUB_CONTENT_NAME = "MenuSubContent";
var $6cc32821e9371a1c$export$e7142ab31822bde6 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...subContentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_CONTENT_NAME, props.__scopeMenu);
  const ref = (0, import_react6.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  return /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ (0, import_react6.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ (0, import_react6.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({
    id: subContext.contentId,
    "aria-labelledby": subContext.triggerId
  }, subContentProps, {
    ref: composedRefs,
    align: "start",
    side: rootContext.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    trapFocus: false,
    onOpenAutoFocus: (event) => {
      var _ref$current;
      if (rootContext.isUsingKeyboardRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
      event.preventDefault();
    },
    onCloseAutoFocus: (event) => event.preventDefault(),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      if (event.target !== subContext.trigger)
        context.onOpenChange(false);
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      rootContext.onClose();
      event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isKeyDownInside = event.currentTarget.contains(event.target);
      const isCloseKey = $6cc32821e9371a1c$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
      if (isKeyDownInside && isCloseKey) {
        var _subContext$trigger;
        context.onOpenChange(false);
        (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus();
        event.preventDefault();
      }
    })
  })))));
});
function $6cc32821e9371a1c$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $6cc32821e9371a1c$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $6cc32821e9371a1c$var$getCheckedState(checked) {
  return $6cc32821e9371a1c$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function $6cc32821e9371a1c$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $6cc32821e9371a1c$var$wrapArray(array, startIndex) {
  return array.map(
    (_2, index) => array[(startIndex + index) % array.length]
  );
}
function $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char) => char === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = $6cc32821e9371a1c$var$wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter(
      (v2) => v2 !== currentMatch
    );
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function $6cc32821e9371a1c$var$isPointInPolygon(point, polygon) {
  const { x: x2, y: y3 } = point;
  let inside = false;
  for (let i3 = 0, j2 = polygon.length - 1; i3 < polygon.length; j2 = i3++) {
    const xi = polygon[i3].x;
    const yi = polygon[i3].y;
    const xj = polygon[j2].x;
    const yj = polygon[j2].y;
    const intersect = yi > y3 !== yj > y3 && x2 < (xj - xi) * (y3 - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $6cc32821e9371a1c$var$isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return $6cc32821e9371a1c$var$isPointInPolygon(cursorPos, area);
}
function $6cc32821e9371a1c$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $6cc32821e9371a1c$export$be92b6f5f03c0fe9 = $6cc32821e9371a1c$export$d9b273488cd8ce6f;
var $6cc32821e9371a1c$export$b688253958b8dfe7 = $6cc32821e9371a1c$export$9fa5ebd18bee4d43;
var $6cc32821e9371a1c$export$602eac185826482c = $6cc32821e9371a1c$export$793392f970497feb;
var $6cc32821e9371a1c$export$7c6e2c02157bb7d2 = $6cc32821e9371a1c$export$479f0f2f71193efe;
var $6cc32821e9371a1c$export$eb2fcfdbd7ba97d4 = $6cc32821e9371a1c$export$22a631d1f72787bb;
var $6cc32821e9371a1c$export$b04be29aa201d4f5 = $6cc32821e9371a1c$export$dd37bec0e8a99143;
var $6cc32821e9371a1c$export$6d08773d2e66f8f2 = $6cc32821e9371a1c$export$2ce376c2cc3355c8;
var $6cc32821e9371a1c$export$16ce288f89fa631c = $6cc32821e9371a1c$export$f6f243521332502d;
var $6cc32821e9371a1c$export$a98f0dcb43a68a25 = $6cc32821e9371a1c$export$ea2200c9eee416b3;
var $6cc32821e9371a1c$export$371ab307eab489c0 = $6cc32821e9371a1c$export$69bd225e9817f6d0;
var $6cc32821e9371a1c$export$c3468e2714d175fa = $6cc32821e9371a1c$export$a2593e23056970a3;
var $6cc32821e9371a1c$export$1ff3c3f08ae963c0 = $6cc32821e9371a1c$export$1cec7dcdd713e220;
var $6cc32821e9371a1c$export$21b07c8f274aebd5 = $6cc32821e9371a1c$export$bcdda4773debf5fa;
var $6cc32821e9371a1c$export$d7a01e11500dfb6f = $6cc32821e9371a1c$export$71bdb9d1e2909932;
var $6cc32821e9371a1c$export$2ea8a7a591ac5eac = $6cc32821e9371a1c$export$5fbbb3ba7297405f;
var $6cc32821e9371a1c$export$6d4de93b380beddf = $6cc32821e9371a1c$export$e7142ab31822bde6;

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var $d08ef79370b62062$var$DROPDOWN_MENU_NAME = "DropdownMenu";
var [$d08ef79370b62062$var$createDropdownMenuContext, $d08ef79370b62062$export$c0623cd925aeb687] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d08ef79370b62062$var$DROPDOWN_MENU_NAME, [
  $6cc32821e9371a1c$export$4027731b685e72eb
]);
var $d08ef79370b62062$var$useMenuScope = $6cc32821e9371a1c$export$4027731b685e72eb();
var [$d08ef79370b62062$var$DropdownMenuProvider, $d08ef79370b62062$var$useDropdownMenuContext] = $d08ef79370b62062$var$createDropdownMenuContext($d08ef79370b62062$var$DROPDOWN_MENU_NAME);
var $d08ef79370b62062$export$e44a253a59704894 = (props) => {
  const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const triggerRef = (0, import_react7.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react7.createElement)($d08ef79370b62062$var$DropdownMenuProvider, {
    scope: __scopeDropdownMenu,
    triggerId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react7.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$be92b6f5f03c0fe9, _extends({}, menuScope, {
    open,
    onOpenChange: setOpen,
    dir,
    modal
  }), children));
};
var $d08ef79370b62062$var$TRIGGER_NAME = "DropdownMenuTrigger";
var $d08ef79370b62062$export$d2469213b3befba9 = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$TRIGGER_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$b688253958b8dfe7, _extends({
    asChild: true
  }, menuScope), /* @__PURE__ */ (0, import_react7.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    id: context.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": context.open ? context.contentId : void 0,
    "data-state": context.open ? "open" : "closed",
    "data-disabled": disabled ? "" : void 0,
    disabled
  }, triggerProps, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, context.triggerRef),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false) {
        context.onOpenToggle();
        if (!context.open)
          event.preventDefault();
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (disabled)
        return;
      if ([
        "Enter",
        " "
      ].includes(event.key))
        context.onOpenToggle();
      if (event.key === "ArrowDown")
        context.onOpenChange(true);
      if ([
        "Enter",
        " ",
        "ArrowDown"
      ].includes(event.key))
        event.preventDefault();
    })
  })));
});
var $d08ef79370b62062$export$cd369b4d4d54efc9 = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$602eac185826482c, _extends({}, menuScope, portalProps));
};
var $d08ef79370b62062$var$CONTENT_NAME = "DropdownMenuContent";
var $d08ef79370b62062$export$6e76d93a37c01248 = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...contentProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$CONTENT_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const hasInteractedOutsideRef = (0, import_react7.useRef)(false);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$7c6e2c02157bb7d2, _extends({
    id: context.contentId,
    "aria-labelledby": context.triggerId
  }, menuScope, contentProps, {
    ref: forwardedRef,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      if (!hasInteractedOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
      hasInteractedOutsideRef.current = false;
      event.preventDefault();
    }),
    onInteractOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onInteractOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!context.modal || isRightClick)
        hasInteractedOutsideRef.current = true;
    }),
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
var $d08ef79370b62062$export$246bebaba3a2f70e = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...groupProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$eb2fcfdbd7ba97d4, _extends({}, menuScope, groupProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$76e48c5b57f24495 = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...labelProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$b04be29aa201d4f5, _extends({}, menuScope, labelProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$ed97964d1871885d = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$6d08773d2e66f8f2, _extends({}, menuScope, itemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$53a69729da201fa9 = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$16ce288f89fa631c, _extends({}, menuScope, checkboxItemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$3323ad73d55f587e = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$a98f0dcb43a68a25, _extends({}, menuScope, radioGroupProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$e4f69b41b1637536 = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$371ab307eab489c0, _extends({}, menuScope, radioItemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$42355ae145153fb6 = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$c3468e2714d175fa, _extends({}, menuScope, itemIndicatorProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$da160178fd3bc7e9 = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$1ff3c3f08ae963c0, _extends({}, menuScope, separatorProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$34b8980744021ec5 = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...arrowProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$21b07c8f274aebd5, _extends({}, menuScope, arrowProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$2f307d81a64f5442 = (props) => {
  const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$d7a01e11500dfb6f, _extends({}, menuScope, {
    open,
    onOpenChange: setOpen
  }), children);
};
var $d08ef79370b62062$export$21dcb7ec56f874cf = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$2ea8a7a591ac5eac, _extends({}, menuScope, subTriggerProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$f34ec8bc2482cc5f = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react7.createElement)($6cc32821e9371a1c$export$6d4de93b380beddf, _extends({}, menuScope, subContentProps, {
    ref: forwardedRef,
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
var $d08ef79370b62062$export$be92b6f5f03c0fe9 = $d08ef79370b62062$export$e44a253a59704894;
var $d08ef79370b62062$export$41fb9f06171c75f4 = $d08ef79370b62062$export$d2469213b3befba9;
var $d08ef79370b62062$export$602eac185826482c = $d08ef79370b62062$export$cd369b4d4d54efc9;
var $d08ef79370b62062$export$7c6e2c02157bb7d2 = $d08ef79370b62062$export$6e76d93a37c01248;
var $d08ef79370b62062$export$eb2fcfdbd7ba97d4 = $d08ef79370b62062$export$246bebaba3a2f70e;
var $d08ef79370b62062$export$b04be29aa201d4f5 = $d08ef79370b62062$export$76e48c5b57f24495;
var $d08ef79370b62062$export$6d08773d2e66f8f2 = $d08ef79370b62062$export$ed97964d1871885d;
var $d08ef79370b62062$export$16ce288f89fa631c = $d08ef79370b62062$export$53a69729da201fa9;
var $d08ef79370b62062$export$a98f0dcb43a68a25 = $d08ef79370b62062$export$3323ad73d55f587e;
var $d08ef79370b62062$export$371ab307eab489c0 = $d08ef79370b62062$export$e4f69b41b1637536;
var $d08ef79370b62062$export$c3468e2714d175fa = $d08ef79370b62062$export$42355ae145153fb6;
var $d08ef79370b62062$export$1ff3c3f08ae963c0 = $d08ef79370b62062$export$da160178fd3bc7e9;
var $d08ef79370b62062$export$21b07c8f274aebd5 = $d08ef79370b62062$export$34b8980744021ec5;
var $d08ef79370b62062$export$d7a01e11500dfb6f = $d08ef79370b62062$export$2f307d81a64f5442;
var $d08ef79370b62062$export$2ea8a7a591ac5eac = $d08ef79370b62062$export$21dcb7ec56f874cf;
var $d08ef79370b62062$export$6d4de93b380beddf = $d08ef79370b62062$export$f34ec8bc2482cc5f;

// app/components/DropdownMenu.tsx
var import_react8 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/DropdownMenu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/DropdownMenu.tsx"
  );
  import.meta.hot.lastModified = "1712808153523.327";
}
var Arrow = (0, import_react8.forwardRef)(_c4 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($d08ef79370b62062$export$21b07c8f274aebd5, { ref, className: cn("fill-white dark:fill-zinc-600", className), ...rest }, void 0, false, {
  fileName: "app/components/DropdownMenu.tsx",
  lineNumber: 27,
  columnNumber: 12
}, this));
_c22 = Arrow;
Arrow.displayName = "Arrow";
var Content = (0, import_react8.forwardRef)(_c32 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($d08ef79370b62062$export$7c6e2c02157bb7d2, { ref, className: cn("bg-white", "dark:bg-zinc-600", "rounded-md", "p-1", "space-y-1", "shadow-lg", "dark:shadow-none", "will-change-[opacity,transform]", "data-[side=top]:animate-slideDownAndFade", "data-[side=right]:animate-slideLeftAndFade", "data-[side=bottom]:animate-slideUpAndFade", "data-[side=left]:animate-slideRightAndFade", className), ...rest }, void 0, false, {
  fileName: "app/components/DropdownMenu.tsx",
  lineNumber: 33,
  columnNumber: 12
}, this));
_c42 = Content;
Content.displayName = "Content";
var Item = (0, import_react8.forwardRef)(_c5 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)($d08ef79370b62062$export$6d08773d2e66f8f2, { ref, className: cn("group", "text-base", "leading-none", "text-zinc-800", "dark:text-zinc-200", "rounded", "flex", "items-center", "h-6", "py-6 md:py-5", "relative", "px-4", "select-none", "outline-none", "data-[disabled]:text-zinc-600", "data-[disabled]:cursor-not-allowed", "dark:data-[disabled]:text-zinc-400", "data-[highlighted]:bg-orange-500", "data-[highlighted]:text-white", className), ...rest }, void 0, false, {
  fileName: "app/components/DropdownMenu.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c6 = Item;
Item.displayName = "Item";
var DropdownMenu_default = {
  ...dist_exports,
  Arrow,
  Content,
  Item
};
var _c4;
var _c22;
var _c32;
var _c42;
var _c5;
var _c6;
$RefreshReg$(_c4, "Arrow$forwardRef");
$RefreshReg$(_c22, "Arrow");
$RefreshReg$(_c32, "Content$forwardRef");
$RefreshReg$(_c42, "Content");
$RefreshReg$(_c5, "Item$forwardRef");
$RefreshReg$(_c6, "Item");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/populateTraceLink.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/populateTraceLink.ts"
  );
  import.meta.hot.lastModified = "1712808153536.7563";
}
function populateTraceLink(sessionID, traceLink) {
  if (traceLink === void 0)
    return void 0;
  const url = new URL(traceLink);
  const end = +/* @__PURE__ */ new Date();
  const start = end - 36e5;
  url.searchParams.set("start", (start * 1e3).toString());
  url.searchParams.set("end", (end * 1e3).toString());
  url.searchParams.set("tags", JSON.stringify({ "peer.SessionID": sessionID }));
  return url.toString();
}

// node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var dist_exports2 = {};
__export(dist_exports2, {
  Action: () => $905f4ae918aab1aa$export$e19cd5f9376f8cee,
  AlertDialog: () => $905f4ae918aab1aa$export$de466dd8317b0b75,
  AlertDialogAction: () => $905f4ae918aab1aa$export$b454f818c58ee85d,
  AlertDialogCancel: () => $905f4ae918aab1aa$export$2f67a923571aaea0,
  AlertDialogContent: () => $905f4ae918aab1aa$export$94e6af45f0af4efd,
  AlertDialogDescription: () => $905f4ae918aab1aa$export$a23b55cde55ad9a5,
  AlertDialogOverlay: () => $905f4ae918aab1aa$export$a707a4895ce23256,
  AlertDialogPortal: () => $905f4ae918aab1aa$export$660f2bfdb986706c,
  AlertDialogTitle: () => $905f4ae918aab1aa$export$225e0da62d314b7,
  AlertDialogTrigger: () => $905f4ae918aab1aa$export$6edd7a623ef0f40b,
  Cancel: () => $905f4ae918aab1aa$export$848c9b7ead0df967,
  Content: () => $905f4ae918aab1aa$export$7c6e2c02157bb7d2,
  Description: () => $905f4ae918aab1aa$export$393edc798c47379d,
  Overlay: () => $905f4ae918aab1aa$export$c6fdb837b070b4ff,
  Portal: () => $905f4ae918aab1aa$export$602eac185826482c,
  Root: () => $905f4ae918aab1aa$export$be92b6f5f03c0fe9,
  Title: () => $905f4ae918aab1aa$export$f99233281efd08a0,
  Trigger: () => $905f4ae918aab1aa$export$41fb9f06171c75f4,
  createAlertDialogScope: () => $905f4ae918aab1aa$export$b8891880751c2c5b
});
var import_react9 = __toESM(require_react(), 1);
var $905f4ae918aab1aa$var$ROOT_NAME = "AlertDialog";
var [$905f4ae918aab1aa$var$createAlertDialogContext, $905f4ae918aab1aa$export$b8891880751c2c5b] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($905f4ae918aab1aa$var$ROOT_NAME, [
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41
]);
var $905f4ae918aab1aa$var$useDialogScope = $5d3850c4d0b4e6c7$export$cc702773b8ea3e41();
var $905f4ae918aab1aa$export$de466dd8317b0b75 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, _extends({}, dialogScope, alertDialogProps, {
    modal: true
  }));
};
var $905f4ae918aab1aa$export$6edd7a623ef0f40b = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...triggerProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$export$41fb9f06171c75f4, _extends({}, dialogScope, triggerProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$660f2bfdb986706c = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$export$602eac185826482c, _extends({}, dialogScope, portalProps));
};
var $905f4ae918aab1aa$export$a707a4895ce23256 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...overlayProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, _extends({}, dialogScope, overlayProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$var$CONTENT_NAME = "AlertDialogContent";
var [$905f4ae918aab1aa$var$AlertDialogContentProvider, $905f4ae918aab1aa$var$useAlertDialogContentContext] = $905f4ae918aab1aa$var$createAlertDialogContext($905f4ae918aab1aa$var$CONTENT_NAME);
var $905f4ae918aab1aa$export$94e6af45f0af4efd = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, children, ...contentProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const contentRef = (0, import_react9.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const cancelRef = (0, import_react9.useRef)(null);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$export$69b62a49393917d6, {
    contentName: $905f4ae918aab1aa$var$CONTENT_NAME,
    titleName: $905f4ae918aab1aa$var$TITLE_NAME,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ (0, import_react9.createElement)($905f4ae918aab1aa$var$AlertDialogContentProvider, {
    scope: __scopeAlertDialog,
    cancelRef
  }, /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, _extends({
    role: "alertdialog"
  }, dialogScope, contentProps, {
    ref: composedRefs,
    onOpenAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onOpenAutoFocus, (event) => {
      var _cancelRef$current;
      event.preventDefault();
      (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
        preventScroll: true
      });
    }),
    onPointerDownOutside: (event) => event.preventDefault(),
    onInteractOutside: (event) => event.preventDefault()
  }), /* @__PURE__ */ (0, import_react9.createElement)($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), false)));
});
var $905f4ae918aab1aa$var$TITLE_NAME = "AlertDialogTitle";
var $905f4ae918aab1aa$export$225e0da62d314b7 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...titleProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$export$f99233281efd08a0, _extends({}, dialogScope, titleProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$a23b55cde55ad9a5 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$export$393edc798c47379d, _extends({}, dialogScope, descriptionProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$b454f818c58ee85d = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...actionProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, actionProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$var$CANCEL_NAME = "AlertDialogCancel";
var $905f4ae918aab1aa$export$2f67a923571aaea0 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...cancelProps } = props;
  const { cancelRef } = $905f4ae918aab1aa$var$useAlertDialogContentContext($905f4ae918aab1aa$var$CANCEL_NAME, __scopeAlertDialog);
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, cancelRef);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, cancelProps, {
    ref
  }));
});
var $905f4ae918aab1aa$export$be92b6f5f03c0fe9 = $905f4ae918aab1aa$export$de466dd8317b0b75;
var $905f4ae918aab1aa$export$41fb9f06171c75f4 = $905f4ae918aab1aa$export$6edd7a623ef0f40b;
var $905f4ae918aab1aa$export$602eac185826482c = $905f4ae918aab1aa$export$660f2bfdb986706c;
var $905f4ae918aab1aa$export$c6fdb837b070b4ff = $905f4ae918aab1aa$export$a707a4895ce23256;
var $905f4ae918aab1aa$export$7c6e2c02157bb7d2 = $905f4ae918aab1aa$export$94e6af45f0af4efd;
var $905f4ae918aab1aa$export$e19cd5f9376f8cee = $905f4ae918aab1aa$export$b454f818c58ee85d;
var $905f4ae918aab1aa$export$848c9b7ead0df967 = $905f4ae918aab1aa$export$2f67a923571aaea0;
var $905f4ae918aab1aa$export$f99233281efd08a0 = $905f4ae918aab1aa$export$225e0da62d314b7;
var $905f4ae918aab1aa$export$393edc798c47379d = $905f4ae918aab1aa$export$a23b55cde55ad9a5;

// app/components/AlertDialog.tsx
var import_react10 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AlertDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AlertDialog.tsx"
  );
  import.meta.hot.lastModified = "1712808153522.2278";
}
var Overlay = (0, import_react10.forwardRef)(_c7 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($905f4ae918aab1aa$export$c6fdb837b070b4ff, { ref, className: cn("fixed inset-0 bg-black opacity-40", className), ...rest }, void 0, false, {
  fileName: "app/components/AlertDialog.tsx",
  lineNumber: 27,
  columnNumber: 12
}, this));
_c23 = Overlay;
Overlay.displayName = "Overlay";
var Content2 = (0, import_react10.forwardRef)(_c33 = ({
  className,
  children,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($905f4ae918aab1aa$export$7c6e2c02157bb7d2, { ref, className: cn("fixed", "rounded-lg", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "min-w-[min(400px,95vw)]", "max-w-[95vw]", "max-h-[85vh]", "overflow-y-auto", "p-6", "bg-inherit", "shadow-xl", "dark:shadow-none"), ...rest, children }, void 0, false, {
  fileName: "app/components/AlertDialog.tsx",
  lineNumber: 34,
  columnNumber: 12
}, this));
_c43 = Content2;
Content2.displayName = "Content";
var Title = (0, import_react10.forwardRef)(_c52 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($905f4ae918aab1aa$export$f99233281efd08a0, { ref, className: cn("text-zinc-800 dark:text-zinc-200 m-0 text-base font-medium", className), ...rest }, void 0, false, {
  fileName: "app/components/AlertDialog.tsx",
  lineNumber: 42,
  columnNumber: 12
}, this));
_c62 = Title;
Title.displayName = "Title";
var Description2 = (0, import_react10.forwardRef)(_c72 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($905f4ae918aab1aa$export$393edc798c47379d, { ref, className: cn("text-zinc-500 dark:text-zinc-400 mt-4 mb-5 text-sm leading-normal", className), ...rest }, void 0, false, {
  fileName: "app/components/AlertDialog.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c8 = Description2;
Description2.displayName = "Description";
var Actions = ({
  children,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: cn("flex justify-end gap-4", className), children }, void 0, false, {
    fileName: "app/components/AlertDialog.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
};
_c9 = Actions;
var AlertDialog_default = {
  ...dist_exports2,
  Overlay,
  Content: Content2,
  Title,
  Description: Description2,
  Actions
};
var _c7;
var _c23;
var _c33;
var _c43;
var _c52;
var _c62;
var _c72;
var _c8;
var _c9;
$RefreshReg$(_c7, "Overlay$forwardRef");
$RefreshReg$(_c23, "Overlay");
$RefreshReg$(_c33, "Content$forwardRef");
$RefreshReg$(_c43, "Content");
$RefreshReg$(_c52, "Title$forwardRef");
$RefreshReg$(_c62, "Title");
$RefreshReg$(_c72, "Description$forwardRef");
$RefreshReg$(_c8, "Description");
$RefreshReg$(_c9, "Actions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/MuteUserButton.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/MuteUserButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/MuteUserButton.tsx"
  );
  import.meta.hot.lastModified = "1712808153524.7725";
}
var MuteUserButton = ({
  user,
  displayType = "secondary",
  mutedDisplayType = "danger"
}) => {
  _s5();
  const {
    room
  } = useRoomContext();
  const {
    data
  } = useUserMetadata(user.name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertDialog_default.Root, { children: [
    user.tracks.audioEnabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Tooltip, { content: `Mute ${data == null ? void 0 : data.displayName}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertDialog_default.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { displayType, disabled: !user.tracks.audioEnabled, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { type: "micOn" }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 44,
      columnNumber: 8
    }, this) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 42,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 41,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Tooltip, { content: "Cannot unmute", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { displayType: mutedDisplayType, disabled: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { type: "micOff" }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 48,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 47,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertDialog_default.Portal, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertDialog_default.Overlay, {}, void 0, false, {
        fileName: "app/components/MuteUserButton.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        AlertDialog_default.Content,
        {
          onCloseAutoFocus: (e3) => e3.preventDefault(),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertDialog_default.Title, { children: [
              "Mute ",
              data == null ? void 0 : data.displayName
            ] }, void 0, true, {
              fileName: "app/components/MuteUserButton.tsx",
              lineNumber: 59,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertDialog_default.Description, { children: "They will need to unmute themselves to be heard again." }, void 0, false, {
              fileName: "app/components/MuteUserButton.tsx",
              lineNumber: 60,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertDialog_default.Actions, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertDialog_default.Cancel, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { className: "text-sm", displayType: "secondary", children: "Cancel" }, void 0, false, {
                fileName: "app/components/MuteUserButton.tsx",
                lineNumber: 65,
                columnNumber: 8
              }, this) }, void 0, false, {
                fileName: "app/components/MuteUserButton.tsx",
                lineNumber: 64,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertDialog_default.Action, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { onClick: () => {
                room.signal.sendMessage({
                  type: "muteUser",
                  id: user.id
                });
              }, className: "text-sm", displayType: "danger", children: "Mute" }, void 0, false, {
                fileName: "app/components/MuteUserButton.tsx",
                lineNumber: 70,
                columnNumber: 8
              }, this) }, void 0, false, {
                fileName: "app/components/MuteUserButton.tsx",
                lineNumber: 69,
                columnNumber: 7
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/MuteUserButton.tsx",
              lineNumber: 63,
              columnNumber: 6
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/MuteUserButton.tsx",
          lineNumber: 55,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 53,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/MuteUserButton.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s5(MuteUserButton, "Huxc+ViWRWeyT/WEbdbWjG8TD7w=", false, function() {
  return [useRoomContext, useUserMetadata];
});
_c10 = MuteUserButton;
var _c10;
$RefreshReg$(_c10, "MuteUserButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/OptionalLink.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/OptionalLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/OptionalLink.tsx"
  );
  import.meta.hot.lastModified = "1712808153524.8853";
}
function OptionalLink({
  children,
  className,
  href,
  ...rest
}) {
  if (href === void 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className, children }, void 0, false, {
      fileName: "app/components/OptionalLink.tsx",
      lineNumber: 29,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href, className: cn("no-underline hover:underline", className), ...rest, children }, void 0, false, {
    fileName: "app/components/OptionalLink.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c11 = OptionalLink;
var _c11;
$RefreshReg$(_c11, "OptionalLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PullAudioTracks.tsx
var import_react13 = __toESM(require_react());

// app/hooks/usePulledTracks.ts
var import_react11 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/usePulledTracks.ts"
  );
  import.meta.hot.lastModified = "1712808153528.5867";
}
function pullTrack(peer, track) {
  const [sessionId, trackName] = track.split("/");
  return peer.pullTrack({
    location: "remote",
    sessionId,
    trackName
  });
}
function usePulledTracks(tracksToPull) {
  const { peer } = useRoomContext();
  const [pulledTrackRecord, setPulledTrackRecord] = (0, import_react11.useState)({});
  const pendingTracksRef = (0, import_react11.useRef)({});
  const tracksToPullRef = (0, import_react11.useRef)(tracksToPull);
  tracksToPullRef.current = tracksToPull;
  const mountedRef = (0, import_react11.useRef)(true);
  useUnmount_default(() => {
    mountedRef.current = false;
  });
  (0, import_react11.useEffect)(() => {
    if (!peer)
      return;
    tracksToPull.forEach((track) => {
      const alreadyPulled = pulledTrackRecord[track] || pendingTracksRef.current[track] !== void 0;
      if (alreadyPulled)
        return;
      const pending = pullTrack(peer, track).then((mediaStreamTrack) => {
        if (!mountedRef.current)
          return mediaStreamTrack;
        if (tracksToPullRef.current.includes(track)) {
          setPulledTrackRecord((current) => ({
            ...current,
            [track]: mediaStreamTrack
          }));
          delete pendingTracksRef.current[track];
        } else {
          peer.closeTrack(mediaStreamTrack);
        }
        return mediaStreamTrack;
      });
      pendingTracksRef.current[track] = pending;
    });
    const trackSet = new Set(tracksToPull);
    Object.entries(pulledTrackRecord).forEach(([key, value]) => {
      if (trackSet.has(key)) {
        return;
      }
      peer.closeTrack(value);
      setPulledTrackRecord((current) => {
        const clone = { ...current };
        delete clone[key];
        return clone;
      });
    });
  }, [peer, pulledTrackRecord, tracksToPull]);
  (0, import_react11.useEffect)(() => {
    if (!peer)
      return;
    const pendingTracks = pendingTracksRef.current;
    return () => {
      if (mountedRef.current)
        return;
      Object.values(pendingTracks).forEach((promise) => {
        promise.then((t2) => peer.closeTrack(t2));
      });
      Object.values(pulledTrackRecord).forEach((t2) => peer.closeTrack(t2));
    };
  }, [peer, pulledTrackRecord]);
  return pulledTrackRecord;
}

// app/components/AudioStream.tsx
var import_react12 = __toESM(require_react());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AudioStream.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AudioStream.tsx"
  );
  import.meta.hot.lastModified = "1712808153522.624";
}
var AudioStream = ({
  mediaStreamTrack
}) => {
  _s6();
  const ref = (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(() => {
    const audio = ref.current;
    if (!audio)
      return;
    const mediaStream = new MediaStream();
    mediaStream.addTrack(mediaStreamTrack);
    audio.srcObject = mediaStream;
  }, [mediaStreamTrack]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("audio", { ref, autoPlay: true }, void 0, false, {
    fileName: "app/components/AudioStream.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s6(AudioStream, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c12 = AudioStream;
var _c12;
$RefreshReg$(_c12, "AudioStream");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PullAudioTracks.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PullAudioTracks.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
var _s22 = $RefreshSig$();
var _s32 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PullAudioTracks.tsx"
  );
  import.meta.hot.lastModified = "1712808153525.4446";
}
var AudioTrackContext = (0, import_react13.createContext)({});
var PullAudioTracks = ({
  audioTracks,
  children
}) => {
  _s7();
  const audioTrackMap = usePulledTracks(audioTracks);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AudioTrackContext.Provider, { value: audioTrackMap, children: [
    Object.entries(audioTrackMap).map(([trackKey, mediaStreamTrack]) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AudioStream, { mediaStreamTrack }, trackKey, false, {
      fileName: "app/components/PullAudioTracks.tsx",
      lineNumber: 35,
      columnNumber: 73
    }, this)),
    children
  ] }, void 0, true, {
    fileName: "app/components/PullAudioTracks.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s7(PullAudioTracks, "RBy1YdqEX3V5C3LWemo8r+919L8=", false, function() {
  return [usePulledTracks];
});
_c13 = PullAudioTracks;
function usePulledAudioTracks() {
  _s22();
  return (0, import_react13.useContext)(AudioTrackContext);
}
_s22(usePulledAudioTracks, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function usePulledAudioTrack(track) {
  _s32();
  const tracks = usePulledAudioTracks();
  return track ? tracks[track] : void 0;
}
_s32(usePulledAudioTrack, "rHylihL2cisJMF0dh+IUErkJ60Y=", false, function() {
  return [usePulledAudioTracks];
});
var _c13;
$RefreshReg$(_c13, "PullAudioTracks");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ParticipantsMenu.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ParticipantsMenu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
var _s23 = $RefreshSig$();
var _s33 = $RefreshSig$();
var _s42 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ParticipantsMenu.tsx"
  );
  import.meta.hot.lastModified = "1712808153525.3467";
}
var UserListItem = ({
  user,
  audioTrack
}) => {
  _s8();
  const {
    traceLink
  } = useRoomContext();
  const {
    data
  } = useUserMetadata(user.name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex items-center gap-4 text-base h-9", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mr-auto overflow-hidden whitespace-nowrap text-ellipsis", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(OptionalLink, { href: user.transceiverSessionId ? populateTraceLink(user.transceiverSessionId, traceLink) : void 0, target: "_blank", rel: "noopener noreferrer", children: data == null ? void 0 : data.displayName }, void 0, false, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 49,
      columnNumber: 4
    }, this),
    audioTrack && user.tracks.audioEnabled && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(AudioIndicator, { audioTrack }, void 0, false, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 55,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 54,
      columnNumber: 47
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(MuteUserButton, { user }, void 0, false, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 57,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_s8(UserListItem, "9Q/NPvAI5LaMd8Nz/PsChtpCCmc=", false, function() {
  return [useRoomContext, useUserMetadata];
});
_c14 = UserListItem;
var OtherUser = ({
  user
}) => {
  _s23();
  const audioTrack = usePulledAudioTrack(user.tracks.audio);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(UserListItem, { user, audioTrack }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
};
_s23(OtherUser, "/n3JAqIzuAb8VZjtuh9Jo33nezY=", false, function() {
  return [usePulledAudioTrack];
});
_c24 = OtherUser;
var participantCount = (count) => `${count} Participant${count > 1 ? "s" : ""}`;
var ParticipantsButton = ({
  className,
  ...rest
}) => {
  _s33();
  const {
    room: {
      otherUsers
    }
  } = useRoomContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ParticipantsDialog, { ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Tooltip, { content: participantCount(otherUsers.length + 1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { className: cn("relative", className), displayType: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Icon, { type: "userGroup" }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 89,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 87,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 86,
    columnNumber: 10
  }, this);
};
_s33(ParticipantsButton, "jXS23yfDln+RpYgvIFRILljo7nM=", false, function() {
  return [useRoomContext];
});
_c34 = ParticipantsButton;
var ParticipantsDialog = ({
  children,
  otherUsers,
  identity: identity2,
  open,
  onOpenChange
}) => {
  _s42();
  const {
    userMedia
  } = useRoomContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Dialog, { open, onOpenChange, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Portal, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DialogOverlay, {}, void 0, false, {
        fileName: "app/components/ParticipantsMenu.tsx",
        lineNumber: 115,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-xl font-bold", children: participantCount(otherUsers.length + 1) }, void 0, false, {
          fileName: "app/components/ParticipantsMenu.tsx",
          lineNumber: 118,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { className: "space-y-2", children: [
          identity2 && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(UserListItem, { user: identity2, audioTrack: userMedia.audioStreamTrack, children: identity2.name }, void 0, false, {
            fileName: "app/components/ParticipantsMenu.tsx",
            lineNumber: 122,
            columnNumber: 21
          }, this),
          otherUsers.map((u3) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(OtherUser, { user: u3 }, u3.id, false, {
            fileName: "app/components/ParticipantsMenu.tsx",
            lineNumber: 125,
            columnNumber: 29
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/ParticipantsMenu.tsx",
          lineNumber: 121,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ParticipantsMenu.tsx",
        lineNumber: 117,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/components/ParticipantsMenu.tsx",
        lineNumber: 116,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 114,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
};
_s42(ParticipantsDialog, "7lE0qpw/cqR15oBMizxgyG4BIvw=", false, function() {
  return [useRoomContext];
});
_c44 = ParticipantsDialog;
var _c14;
var _c24;
var _c34;
var _c44;
$RefreshReg$(_c14, "UserListItem");
$RefreshReg$(_c24, "OtherUser");
$RefreshReg$(_c34, "ParticipantsButton");
$RefreshReg$(_c44, "ParticipantsDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/useCopyToClipboard.tsx
var import_react14 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useCopyToClipboard.tsx"
  );
  import.meta.hot.lastModified = "1712808153528.054";
}
function useCopyToClipboard(delay = 2e3) {
  const [copied, setCopied] = (0, import_react14.useState)(false);
  const timeoutRef = (0, import_react14.useRef)(-1);
  const copy = (0, import_react14.useCallback)((value) => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
    }, delay);
  }, []);
  (0, import_react14.useEffect)(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return [copied, copy];
}

// app/components/TextArea.tsx
var import_react15 = __toESM(require_react());
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/TextArea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/TextArea.tsx"
  );
  import.meta.hot.lastModified = "1712808153526.3184";
}
var TextArea = (0, import_react15.forwardRef)(_c15 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("textarea", { className: cn("bg-zinc-50 dark:bg-zinc-600 text-base border-2 border-zinc-500 w-full resize-none block p-2 rounded", className), ...rest }, void 0, false, {
  fileName: "app/components/TextArea.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c25 = TextArea;
TextArea.displayName = "TextArea";
var _c15;
var _c25;
$RefreshReg$(_c15, "TextArea$forwardRef");
$RefreshReg$(_c25, "TextArea");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ReportBugDialog.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ReportBugDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s9 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ReportBugDialog.tsx"
  );
  import.meta.hot.lastModified = "1712808153525.7898";
}
var ReportBugDialog = ({
  onOpenChange
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Dialog, { open: true, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Portal, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogOverlay, {}, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ReportBugForm, {}, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 36,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ReportBugDialog.tsx",
    lineNumber: 33,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/ReportBugDialog.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_c16 = ReportBugDialog;
var ReportBugForm = () => {
  _s9();
  const {
    Form,
    data,
    state
  } = useFetcher();
  const {
    room,
    peerDebugInfo
  } = useRoomContext();
  const {
    roomName
  } = useParams();
  const {
    roomState,
    identity: identity2
  } = room;
  const info = {
    roomState,
    roomName,
    identity: identity2,
    peerDebugInfo,
    url: typeof location !== "undefined" ? location.href : void 0
  };
  const [copied, copy] = useCopyToClipboard();
  const infoString = JSON.stringify(info, null, 2);
  return data ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogTitle, { children: "Thank you!" }, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 70,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Description, { children: "Your report has been submitted!" }, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 71,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ReportBugDialog.tsx",
    lineNumber: 69,
    columnNumber: 17
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogTitle, { children: "Report a bug" }, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 73,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Description, { children: "The Calls team will be notified with tracing details." }, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 74,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("details", { className: "cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("summary", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: "Debug Info (included automatically)" }, void 0, false, {
        fileName: "app/components/ReportBugDialog.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/components/ReportBugDialog.tsx",
          lineNumber: 83,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button, { className: "text-sm", onClick: () => {
          copy(infoString);
        }, children: copied ? "Copied!" : "Copy" }, void 0, false, {
          fileName: "app/components/ReportBugDialog.tsx",
          lineNumber: 84,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TextArea, { rows: 10, readOnly: true, defaultValue: infoString }, void 0, false, {
          fileName: "app/components/ReportBugDialog.tsx",
          lineNumber: 89,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ReportBugDialog.tsx",
        lineNumber: 81,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 77,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Form, { method: "post", action: "/api/bugReport", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Label, { className: "font-bold", children: "Description" }, void 0, false, {
          fileName: "app/components/ReportBugDialog.tsx",
          lineNumber: 95,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TextArea, { name: "description", rows: 8 }, void 0, false, {
          fileName: "app/components/ReportBugDialog.tsx",
          lineNumber: 96,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ReportBugDialog.tsx",
        lineNumber: 94,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { name: "info", type: "hidden", value: JSON.stringify(info) }, void 0, false, {
        fileName: "app/components/ReportBugDialog.tsx",
        lineNumber: 98,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button, { className: "mt-4 text-sm", type: "submit", disabled: state === "submitting", children: state === "submitting" ? "Submitting..." : "Submit" }, void 0, false, {
        fileName: "app/components/ReportBugDialog.tsx",
        lineNumber: 99,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 93,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ReportBugDialog.tsx",
    lineNumber: 72,
    columnNumber: 12
  }, this);
};
_s9(ReportBugForm, "pGksc4uShuEeYVN6UWXqknP/K/4=", false, function() {
  return [useFetcher, useRoomContext, useParams, useCopyToClipboard];
});
_c26 = ReportBugForm;
var _c16;
var _c26;
$RefreshReg$(_c16, "ReportBugDialog");
$RefreshReg$(_c26, "ReportBugForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/OverflowMenu.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/OverflowMenu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s10 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/OverflowMenu.tsx"
  );
  import.meta.hot.lastModified = "1712808153525.0168";
}
var OverflowMenu = ({
  bugReportsEnabled
}) => {
  _s10();
  const {
    room: {
      otherUsers,
      identity: identity2
    }
  } = useRoomContext();
  const [settingsMenuOpen, setSettingMenuOpen] = (0, import_react17.useState)(false);
  const [bugReportMenuOpen, setBugReportMenuOpen] = (0, import_react17.useState)(false);
  const [participantsMenuOpen, setParticipantsMenuOpen] = (0, import_react17.useState)(false);
  const roomUrl = useRoomUrl();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DropdownMenu_default.Root, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DropdownMenu_default.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { displayType: "secondary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)($ea1ef594cf570d83$export$439d29a4e110a164, { children: "More options" }, void 0, false, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, { type: "EllipsisVerticalIcon" }, void 0, false, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/OverflowMenu.tsx",
        lineNumber: 49,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/components/OverflowMenu.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DropdownMenu_default.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DropdownMenu_default.Content, { sideOffset: 5, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DropdownMenu_default.Item, { onSelect: () => navigator.clipboard.writeText(roomUrl), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, { type: "ClipboardDocumentIcon", className: "mr-2" }, void 0, false, {
            fileName: "app/components/OverflowMenu.tsx",
            lineNumber: 57,
            columnNumber: 8
          }, this),
          "Copy URL"
        ] }, void 0, true, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DropdownMenu_default.Item, { onSelect: () => {
          setSettingMenuOpen(true);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, { type: "cog", className: "mr-2" }, void 0, false, {
            fileName: "app/components/OverflowMenu.tsx",
            lineNumber: 63,
            columnNumber: 8
          }, this),
          "Settings"
        ] }, void 0, true, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this),
        bugReportsEnabled && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DropdownMenu_default.Item, { onSelect: () => {
          setBugReportMenuOpen(true);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, { type: "bug", className: "mr-2" }, void 0, false, {
            fileName: "app/components/OverflowMenu.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this),
          "Report bug"
        ] }, void 0, true, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 66,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DropdownMenu_default.Item, { className: "md:hidden", onSelect: () => {
          setParticipantsMenuOpen(true);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, { type: "userGroup", className: "mr-2" }, void 0, false, {
            fileName: "app/components/OverflowMenu.tsx",
            lineNumber: 75,
            columnNumber: 8
          }, this),
          participantCount(otherUsers.length + 1)
        ] }, void 0, true, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DropdownMenu_default.Arrow, {}, void 0, false, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/OverflowMenu.tsx",
        lineNumber: 55,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/components/OverflowMenu.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/OverflowMenu.tsx",
      lineNumber: 47,
      columnNumber: 4
    }, this),
    settingsMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SettingsDialog, { open: true, onOpenChange: setSettingMenuOpen }, void 0, false, {
      fileName: "app/components/OverflowMenu.tsx",
      lineNumber: 82,
      columnNumber: 25
    }, this),
    bugReportsEnabled && bugReportMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ReportBugDialog, { onOpenChange: setBugReportMenuOpen }, void 0, false, {
      fileName: "app/components/OverflowMenu.tsx",
      lineNumber: 83,
      columnNumber: 47
    }, this),
    participantsMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ParticipantsDialog, { otherUsers, identity: identity2, open: true, onOpenChange: setParticipantsMenuOpen }, void 0, false, {
      fileName: "app/components/OverflowMenu.tsx",
      lineNumber: 84,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/OverflowMenu.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_s10(OverflowMenu, "aqTgf5cDCnthWfjurFg2bkJPDpQ=", false, function() {
  return [useRoomContext, useRoomUrl];
});
_c17 = OverflowMenu;
var _c17;
$RefreshReg$(_c17, "OverflowMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Participant.tsx
var import_react19 = __toESM(require_react());

// app/components/AudioGlow.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AudioGlow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s11 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AudioGlow.tsx"
  );
  import.meta.hot.lastModified = "1712808153522.333";
}
var AudioGlow = ({
  audioTrack,
  children,
  className,
  type
}) => {
  _s11();
  const audioLevel = useAudioLevel(audioTrack);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: cn(type === "text" ? "orange-glow-text" : "orange-glow-box", "opacity-[--opacity] transition-opacity", className), style: {
    "--opacity": Math.min(1, audioLevel * 4)
  }, "aria-hidden": true, children }, void 0, false, {
    fileName: "app/components/AudioGlow.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s11(AudioGlow, "eP3P6R8HO7u6c8gBbP7H3MTn6kE=", false, function() {
  return [useAudioLevel];
});
_c18 = AudioGlow;
var _c18;
$RefreshReg$(_c18, "AudioGlow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/HoverFade.tsx
var import_react18 = __toESM(require_react());
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/HoverFade.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s12 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/HoverFade.tsx"
  );
  import.meta.hot.lastModified = "1712808153523.7505";
}
var HoverFade = ({
  timeout = 2e3,
  children,
  className
}) => {
  _s12();
  const [activity, setActivity] = (0, import_react18.useState)(0);
  const [visible, setVisible] = (0, import_react18.useState)(false);
  (0, import_react18.useEffect)(() => {
    let mounted = true;
    if (visible) {
      const t2 = setTimeout(() => {
        if (mounted)
          setVisible(false);
      }, timeout);
      return () => {
        clearTimeout(t2);
      };
    }
  }, [timeout, visible, activity]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "div",
    {
      className: cn("hover-fade", !visible && "inactive", className),
      onPointerLeave: () => {
        setVisible(false);
      },
      onPointerMove: () => {
        setVisible(true);
        setActivity(Date.now());
      },
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/HoverFade.tsx",
      lineNumber: 44,
      columnNumber: 10
    },
    this
  );
};
_s12(HoverFade, "hc+syEWKR/jT501urlU6YRxufBI=");
_c19 = HoverFade;
var _c19;
$RefreshReg$(_c19, "HoverFade");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Participant.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Participant.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s13 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Participant.tsx"
  );
  import.meta.hot.lastModified = "1712808153525.239";
}
var Participant = _s13((0, import_react19.forwardRef)(_c20 = _s13(({
  videoTrack,
  isSelf = false,
  flipId,
  user,
  isScreenShare = false,
  audioTrack,
  pinnedId,
  setPinnedId
}, ref) => {
  _s13();
  const {
    data
  } = useUserMetadata(user.name);
  const {
    traceLink
  } = useRoomContext();
  const pinned = flipId === pinnedId;
  (0, import_react19.useEffect)(() => {
    if (isScreenShare) {
      setPinnedId(flipId);
    }
  }, [flipId, isScreenShare, setPinnedId]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "grow shrink text-base basis-[calc(var(--flex-container-width)_-_var(--gap)_*_3)]", ref, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(y2, { flipId: flipId + pinned, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: cn("h-full mx-auto overflow-hidden text-white opacity-0 animate-fadeIn", pinned ? "absolute inset-0 h-full w-full z-10 rounded-none bg-black" : "relative max-w-[--participant-max-width] rounded-xl"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: cn("absolute inset-0 h-full w-full grid place-items-center"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "h-[2em] w-[2em] grid place-items-center text-4xl md:text-6xl 2xl:text-8xl relative", children: (data == null ? void 0 : data.photob64) ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(AudioGlow, { className: "absolute inset-0 w-full h-full rounded-full", audioTrack, type: "box" }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "rounded-full", src: `data:image/png;base64,${data.photob64}`, alt: data.displayName }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 66,
      columnNumber: 27
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "relative grid w-full h-full uppercase rounded-full place-items-center bg-zinc-500", children: [
      user.speaking && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(AudioGlow, { type: "text", className: "absolute uppercase", audioTrack, children: user.name.charAt(0) }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 70,
        columnNumber: 29
      }, this),
      user.name.charAt(0)
    ] }, void 0, true, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 69,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 65,
      columnNumber: 8
    }, this) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(VideoSrcObject, { className: cn("absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity", isSelf && "-scale-x-100", {
      "opacity-100": isScreenShare ? user.tracks.screenShareEnabled : user.tracks.videoEnabled
    }), videoTrack }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(HoverFade, { className: "absolute inset-0 grid w-full h-full place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex gap-2 p-2 rounded bg-zinc-900/30", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Tooltip, { content: pinned ? "Restore" : "Maximize", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Button, { onClick: () => setPinnedId(pinned ? void 0 : flipId), displayType: "ghost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { type: pinned ? "arrowsIn" : "arrowsOut" }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 83,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      !isScreenShare && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(MuteUserButton, { displayType: "ghost", mutedDisplayType: "ghost", user }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 87,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 81,
      columnNumber: 8
    }, this) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    audioTrack && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "absolute left-4 top-4", children: [
      user.tracks.audioEnabled && user.tracks.videoEnabled && user.speaking && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(AudioIndicator, { audioTrack }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 91,
        columnNumber: 83
      }, this),
      !user.tracks.audioEnabled && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Tooltip, { content: "Mic is turned off", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "indication-shadow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { type: "micOff" }, void 0, false, {
          fileName: "app/components/Participant.tsx",
          lineNumber: 95,
          columnNumber: 12
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)($ea1ef594cf570d83$export$439d29a4e110a164, { children: "Mic is turned off" }, void 0, false, {
          fileName: "app/components/Participant.tsx",
          lineNumber: 96,
          columnNumber: 12
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 93,
        columnNumber: 39
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 90,
      columnNumber: 22
    }, this),
    (data == null ? void 0 : data.displayName) && user.transceiverSessionId && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(OptionalLink, { className: "absolute m-2 leading-none text-shadow left-1 bottom-1", href: populateTraceLink(user.transceiverSessionId, traceLink), target: "_blank", rel: "noopener noreferrer", children: data.displayName }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 100,
      columnNumber: 58
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "absolute top-0 right-0 flex gap-4 p-4", children: user.raisedHand && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Tooltip, { content: "Hand is raised", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { className: "indication-shadow", type: "handRaised" }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 107,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { className: "absolute top-0 left-0 text-orange-300 animate-ping", type: "handRaised" }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 108,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)($ea1ef594cf570d83$export$439d29a4e110a164, { children: "Hand is raised" }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 109,
        columnNumber: 12
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 105,
      columnNumber: 10
    }, this) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 104,
      columnNumber: 28
    }, this) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    user.speaking && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: cn("pointer-events-none absolute inset-0 h-full w-full border-4 border-orange-400", !pinned && "rounded-xl") }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 114,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Participant.tsx",
    lineNumber: 63,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/components/Participant.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/Participant.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}, "RtAUI4lWajvsuI6ZzF24mLBhKgU=", false, function() {
  return [useUserMetadata, useRoomContext];
})), "RtAUI4lWajvsuI6ZzF24mLBhKgU=", false, function() {
  return [useUserMetadata, useRoomContext];
});
_c27 = Participant;
Participant.displayName = "CallGridChild";
var _c20;
var _c27;
$RefreshReg$(_c20, "Participant$forwardRef");
$RefreshReg$(_c27, "Participant");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PullVideoTrack.tsx
var import_react20 = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PullVideoTrack.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s14 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PullVideoTrack.tsx"
  );
  import.meta.hot.lastModified = "1712808153525.5596";
}
var PullVideoTrack = ({
  video,
  audio,
  children
}) => {
  _s14();
  const {
    peer
  } = useRoomContext();
  const [videoTrack, setVideoTrack] = (0, import_react20.useState)();
  const audioTrack = usePulledAudioTrack(audio);
  (0, import_react20.useEffect)(() => {
    if (!video || !peer)
      return;
    let mounted = true;
    const cancel = keepTrying(() => {
      const [sessionId, trackName] = video.split("/");
      return peer.pullTrack({
        location: "remote",
        sessionId,
        trackName
      }).then((track) => {
        if (mounted)
          setVideoTrack(track);
      });
    });
    return () => {
      cancel();
      mounted = false;
    };
  }, [peer, video]);
  (0, import_react20.useEffect)(() => {
    if (videoTrack && peer)
      return () => {
        peer.closeTrack(videoTrack);
      };
  }, [videoTrack, peer]);
  return children({
    videoTrack,
    audioTrack
  });
};
_s14(PullVideoTrack, "lSkTLPbp8mfsYiVWszBuOY0pfik=", false, function() {
  return [useRoomContext, usePulledAudioTrack];
});
_c21 = PullVideoTrack;
var _c21;
$RefreshReg$(_c21, "PullVideoTrack");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/playSound/sounds/Join.mp3
var Join_default = "/build/_assets/Join-5QBI6SQX.mp3";

// app/utils/playSound/sounds/Leave.mp3
var Leave_default = "/build/_assets/Leave-W3LFEYQC.mp3";

// app/utils/playSound/sounds/RaiseHand.mp3
var RaiseHand_default = "/build/_assets/RaiseHand-42IIBYRT.mp3";

// app/utils/playSound/playSound.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/playSound/playSound.ts"
  );
  import.meta.hot.lastModified = "1712808153535.8235";
}
var fetchOnce = async (...args) => {
  invariant(
    !args.some((a2) => a2 instanceof Request),
    "fetchOnce cannot cache with Request parameters"
  );
  const cache = /* @__PURE__ */ new Map();
  const key = JSON.stringify(args);
  let result = cache.get(key);
  if (result) {
    return result.clone();
  } else {
    result = await fetch(...args);
    cache.set(key, result);
    return result.clone();
  }
};
var sounds = {
  leave: Leave_default,
  join: Join_default,
  raiseHand: RaiseHand_default
};
var volumeMap = {
  join: 0.2,
  leave: 0.2,
  raiseHand: 0.1
};
async function playSound(sound) {
  const arrayBuffer = await fetchOnce(sounds[sound]).then(
    (res) => res.arrayBuffer()
  );
  const context = new AudioContext();
  const audioBuffer = await context.decodeAudioData(arrayBuffer);
  const source = context.createBufferSource();
  const gainNode = context.createGain();
  source.buffer = audioBuffer;
  source.connect(gainNode);
  gainNode.connect(context.destination);
  gainNode.gain.setValueAtTime(volumeMap[sound], context.currentTime);
  source.start();
}

// app/utils/playSound/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/playSound/index.ts"
  );
  import.meta.hot.lastModified = "1712808153535.728";
}

// app/components/RaiseHandButton.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/RaiseHandButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/RaiseHandButton.tsx"
  );
  import.meta.hot.lastModified = "1712808153525.6824";
}
var RaiseHandButton = ({
  raisedHand,
  onClick
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Tooltip, { content: raisedHand ? "Lower hand" : "Raise Hand", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Button, { displayType: raisedHand ? "primary" : "secondary", onClick: (e3) => {
  onClick && onClick();
  if (!raisedHand)
    playSound("raiseHand");
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Icon, { type: "handRaised" }, void 0, false, {
  fileName: "app/components/RaiseHandButton.tsx",
  lineNumber: 33,
  columnNumber: 4
}, this) }, void 0, false, {
  fileName: "app/components/RaiseHandButton.tsx",
  lineNumber: 29,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/components/RaiseHandButton.tsx",
  lineNumber: 28,
  columnNumber: 7
}, this);
_c28 = RaiseHandButton;
var _c28;
$RefreshReg$(_c28, "RaiseHandButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ScreenshareButton.tsx
var import_react21 = __toESM(require_react());
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ScreenshareButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s15 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ScreenshareButton.tsx"
  );
  import.meta.hot.lastModified = "1712808153525.888";
}
var ScreenshareButton = () => {
  _s15();
  const {
    userMedia: {
      screenShareVideoTrack,
      startScreenShare,
      endScreenShare
    }
  } = useRoomContext();
  const sharing = screenShareVideoTrack !== void 0;
  const [canShareScreen, setCanShareScreen] = (0, import_react21.useState)(true);
  (0, import_react21.useEffect)(() => {
    setCanShareScreen(typeof navigator.mediaDevices !== "undefined" && navigator.mediaDevices.getDisplayMedia !== void 0);
  }, []);
  if (!canShareScreen)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Tooltip, { content: sharing ? "Stop sharing" : "Share screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Button, { displayType: sharing ? "danger" : "secondary", onClick: sharing ? endScreenShare : startScreenShare, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)($ea1ef594cf570d83$export$439d29a4e110a164, { children: "Share screen" }, void 0, false, {
      fileName: "app/components/ScreenshareButton.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Icon, { type: "screenshare" }, void 0, false, {
      fileName: "app/components/ScreenshareButton.tsx",
      lineNumber: 51,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ScreenshareButton.tsx",
    lineNumber: 49,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/ScreenshareButton.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_s15(ScreenshareButton, "cbdKZAr74jb0uZm68ypatLwzvFs=", false, function() {
  return [useRoomContext];
});
_c29 = ScreenshareButton;
var _c29;
$RefreshReg$(_c29, "ScreenshareButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/useBroadcastStatus.ts
var import_react22 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useBroadcastStatus.ts"
  );
  import.meta.hot.lastModified = "1712808153527.8318";
}
function useBroadcastStatus({
  userMedia,
  identity: identity2,
  signal,
  peer,
  pushedTracks,
  raisedHand,
  speaking
}) {
  const { audioEnabled, videoEnabled, screenShareEnabled } = userMedia;
  const { audio, video, screenshare } = pushedTracks;
  const id = identity2 == null ? void 0 : identity2.id;
  const name = identity2 == null ? void 0 : identity2.name;
  (0, import_react22.useEffect)(() => {
    if (id && name) {
      signal.sendMessage({
        type: "userUpdate",
        user: {
          id,
          name,
          joined: true,
          raisedHand,
          speaking,
          transceiverSessionId: peer == null ? void 0 : peer.sessionId,
          tracks: {
            audioEnabled,
            videoEnabled,
            screenShareEnabled,
            video,
            audio,
            screenshare
          }
        }
      });
    }
  }, [
    id,
    name,
    signal,
    peer == null ? void 0 : peer.sessionId,
    audio,
    video,
    screenshare,
    audioEnabled,
    videoEnabled,
    screenShareEnabled,
    raisedHand,
    speaking
  ]);
  useUnmount_default(() => {
    if (id && name) {
      signal.sendMessage({
        type: "userUpdate",
        user: {
          id,
          name,
          joined: false,
          raisedHand,
          speaking,
          transceiverSessionId: peer == null ? void 0 : peer.sessionId,
          tracks: {}
        }
      });
    }
  });
}

// app/hooks/useSounds.ts
var import_react23 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useSounds.ts"
  );
  import.meta.hot.lastModified = "1712808153529.3362";
}
function useSounds(users) {
  const previousUserCount = usePrevious(users.length);
  (0, import_react23.useEffect)(() => {
    if (users.length > 5 || previousUserCount === void 0 || previousUserCount === users.length)
      return;
    if (users.length > previousUserCount) {
      playSound("join");
    } else {
      playSound("leave");
    }
  }, [previousUserCount, users.length]);
  const raisedHandCound = users.filter((u3) => u3.raisedHand).length;
  const previousHandRaisedCount = usePrevious(raisedHandCound);
  (0, import_react23.useEffect)(() => {
    if (previousHandRaisedCount === void 0 || raisedHandCound === previousHandRaisedCount) {
      return;
    }
    if (raisedHandCound > previousHandRaisedCount) {
      playSound("raiseHand");
    }
  }, [raisedHandCound, previousHandRaisedCount]);
  useMount_default(() => {
    playSound("join");
  });
  useUnmount_default(() => {
    playSound("leave");
  });
}

// app/hooks/useStageManager.ts
var import_react24 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useStageManager.ts"
  );
  import.meta.hot.lastModified = "1712808153529.672";
}
var resolveRoster = (currentRoster, newRoster) => {
  const newRosterMap = new Map(newRoster.map((item) => [item.id, item]));
  const currentRosterMap = new Map(currentRoster.map((item) => [item.id, item]));
  const remainingNewItems = newRoster.filter(
    ({ id }) => !currentRosterMap.has(id)
  );
  return currentRoster.reduce((acc, currentRosterItem) => {
    const item = newRosterMap.get(currentRosterItem.id);
    if (item === void 0) {
      const firstNewItem = remainingNewItems[0];
      if (!firstNewItem)
        return acc;
      acc.push(firstNewItem);
      remainingNewItems.splice(0, 1);
    } else {
      acc.push(item);
    }
    return acc;
  }, []).concat(remainingNewItems);
};
function useStageManager(actors, limit) {
  const [actorsOnStage, setActorsOnStage] = (0, import_react24.useState)(
    actors.slice(0, limit)
  );
  const [activityRecord, setActivityRecord] = (0, import_react24.useState)(
    {}
  );
  const recordActivity = (0, import_react24.useCallback)((actor) => {
    setActivityRecord((ah) => ({ ...ah, [actor.id]: Date.now() }));
  }, []);
  const actorsThatShouldBeOnStage = (0, import_react24.useMemo)(
    () => [...actors].sort(
      (a2, b2) => {
        var _a, _b;
        return ((_a = activityRecord[b2.id]) != null ? _a : 0) - ((_b = activityRecord[a2.id]) != null ? _b : 0);
      }
    ).slice(0, limit),
    [activityRecord, actors, limit]
  );
  const newUsers = (0, import_react24.useMemo)(
    () => actors.filter((a2) => activityRecord[a2.id] === void 0),
    [activityRecord, actors]
  );
  (0, import_react24.useEffect)(() => {
    newUsers.forEach(recordActivity);
  }, [newUsers, recordActivity]);
  (0, import_react24.useEffect)(() => {
    setActorsOnStage(
      (actorsAlreadyOnStage) => resolveRoster(actorsAlreadyOnStage, actorsThatShouldBeOnStage)
    );
  }, [actorsThatShouldBeOnStage, limit]);
  return { actorsOnStage, recordActivity };
}

// app/hooks/useUserJoinLeaveToasts.tsx
var import_react25 = __toESM(require_react());
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/hooks/useUserJoinLeaveToasts.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s16 = $RefreshSig$();
var _s24 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useUserJoinLeaveToasts.tsx"
  );
  import.meta.hot.lastModified = "1712808153529.7805";
}
function UserJoinedOrLeftToast(props) {
  _s16();
  const {
    traceLink
  } = useRoomContext();
  const {
    data
  } = useUserMetadata(props.user.name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex items-center justify-center gap-2 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Toast_default.Title, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(OptionalLink, { href: props.user.transceiverSessionId ? populateTraceLink(props.user.transceiverSessionId, traceLink) : void 0, target: "_blank", rel: "noopener noreferrer", children: data == null ? void 0 : data.displayName }, void 0, false, {
        fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
        lineNumber: 40,
        columnNumber: 5
      }, this),
      " ",
      props.type
    ] }, void 0, true, {
      fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
      lineNumber: 39,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Toast_default.Close, { className: "flex items-center justify-center w-5 h-5 px-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { "aria-hidden": true, children: "\xD7" }, void 0, false, {
        fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
        lineNumber: 46,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)($ea1ef594cf570d83$export$439d29a4e110a164, { children: "Dismiss" }, void 0, false, {
        fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
        lineNumber: 47,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
      lineNumber: 45,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s16(UserJoinedOrLeftToast, "9Q/NPvAI5LaMd8Nz/PsChtpCCmc=", false, function() {
  return [useRoomContext, useUserMetadata];
});
_c30 = UserJoinedOrLeftToast;
function useUserJoinLeaveToasts(users) {
  _s24();
  const [trackedUsers, setTrackedUsers] = (0, import_react25.useState)(users);
  const dispatchToast = useDispatchToast();
  (0, import_react25.useEffect)(() => {
    const newUsers = users.filter((u3) => !trackedUsers.some((tu) => tu.id === u3.id));
    const usersLeft = trackedUsers.filter((u3) => !users.some((tu) => tu.id === u3.id));
    newUsers.forEach((u3) => dispatchToast(/* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(UserJoinedOrLeftToast, { user: u3, type: "joined" }, void 0, false, {
      fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
      lineNumber: 62,
      columnNumber: 41
    }, this)));
    usersLeft.forEach((u3) => dispatchToast(/* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(UserJoinedOrLeftToast, { user: u3, type: "left" }, void 0, false, {
      fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
      lineNumber: 63,
      columnNumber: 42
    }, this)));
  }, [dispatchToast, trackedUsers, users]);
  (0, import_react25.useEffect)(() => {
    setTrackedUsers(users);
  }, [users]);
}
_s24(useUserJoinLeaveToasts, "rC6VxHiuplQqrYYNF/bE3WoSunQ=", false, function() {
  return [useDispatchToast];
});
var _c30;
$RefreshReg$(_c30, "UserJoinedOrLeftToast");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/calculateLayout.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/calculateLayout.ts"
  );
  import.meta.hot.lastModified = "1712808153534.0403";
}
function possibleLayouts(count) {
  const max = Math.ceil(Math.sqrt(count));
  let layouts = [{ rows: max, cols: max }];
  for (let rows = 1; rows < max; rows++) {
    layouts.push({
      rows,
      cols: Math.ceil(count / rows)
    });
  }
  for (let cols = 1; cols < max; cols++) {
    layouts.push({
      cols,
      rows: Math.ceil(count / cols)
    });
  }
  return layouts;
}
function calculateLayout(config) {
  const { count, height, width } = config;
  if (height === 0 || width === 0) {
    return {
      cols: 0,
      rows: 0
    };
  }
  let idealLayout = null;
  let largestArea = 0;
  const targetTileAspectRatio = 4 / 3;
  for (const layout of possibleLayouts(count)) {
    const tileHeight = height / layout.rows;
    const tileWidth = width / layout.cols;
    const constrainingDimension = tileHeight > tileWidth ? "width" : "height";
    const area = constrainingDimension === "height" ? (
      // calculate tileWidth
      targetTileAspectRatio * tileHeight * // then multiply by tileHeight
      tileHeight
    ) : (
      // calculate tileHeight
      1 / targetTileAspectRatio * tileWidth * // then multiply by tileWidth
      tileWidth
    );
    if (area > largestArea) {
      largestArea = area;
      idealLayout = layout;
    }
  }
  invariant(idealLayout);
  return idealLayout;
}

// app/routes/_room.$roomName.room.tsx
var import_getUsername = __toESM(require_getUsername());

// app/utils/isNonNullable.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/isNonNullable.ts"
  );
  import.meta.hot.lastModified = "1712808153534.9133";
}
function isNonNullable(value) {
  return value !== null && value !== void 0;
}

// app/routes/_room.$roomName.room.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_room.$roomName.room.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s17 = $RefreshSig$();
var _s25 = $RefreshSig$();
var _s34 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_room.$roomName.room.tsx"
  );
  import.meta.hot.lastModified = "1712808153531.375";
}
function useGridDebugControls({
  initialCount,
  defaultEnabled
} = {
  initialCount: 0,
  defaultEnabled: false
}) {
  _s17();
  const [enabled, setEnabled] = (0, import_react27.useState)(defaultEnabled);
  const [fakeUsers, setFakeUsers] = (0, import_react27.useState)(Array.from({
    length: initialCount
  }).map(() => crypto.randomUUID()));
  (0, import_react27.useEffect)(() => {
    const handler = (e3) => {
      if (e3.key.toLowerCase() === "d" && e3.ctrlKey) {
        e3.preventDefault();
        setEnabled(!enabled);
      }
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [enabled]);
  const GridDebugControls = (0, import_react27.useCallback)(() => enabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Button, { onClick: () => setFakeUsers((fu) => [...fu, crypto.randomUUID()]), children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Icon, { type: "PlusIcon" }, void 0, false, {
      fileName: "app/routes/_room.$roomName.room.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/_room.$roomName.room.tsx",
      lineNumber: 89,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Button, { onClick: () => {
      setFakeUsers((fu) => {
        const randomLeaver = fu[Math.floor(Math.random() * fu.length)];
        return fu.filter((x2) => x2 !== randomLeaver);
      });
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Icon, { type: "MinusIcon" }, void 0, false, {
      fileName: "app/routes/_room.$roomName.room.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/_room.$roomName.room.tsx",
      lineNumber: 92,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_room.$roomName.room.tsx",
    lineNumber: 88,
    columnNumber: 57
  }, this) : null, [enabled]);
  return {
    GridDebugControls,
    fakeUsers
  };
}
_s17(useGridDebugControls, "TqNR5qjBs0BaQhfbipJbJuB7As8=");
function Room() {
  _s25();
  const {
    joined
  } = useRoomContext();
  const navigate = useNavigate();
  const {
    roomName
  } = useParams();
  const {
    mode,
    bugReportsEnabled
  } = useLoaderData();
  (0, import_react27.useEffect)(() => {
    if (!joined && mode !== "development")
      navigate(`/${roomName}`);
  }, [joined, mode, navigate, roomName]);
  if (!joined && mode !== "development")
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Toast_default.Provider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(JoinedRoom, { bugReportsEnabled }, void 0, false, {
    fileName: "app/routes/_room.$roomName.room.tsx",
    lineNumber: 125,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_room.$roomName.room.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_s25(Room, "QTy/vUKUUGhnwcaJ5V+nUEmisD4=", false, function() {
  return [useRoomContext, useNavigate, useParams, useLoaderData];
});
_c31 = Room;
function JoinedRoom({
  bugReportsEnabled
}) {
  _s34();
  const {
    userMedia,
    peer,
    pushedTracks,
    room: {
      otherUsers,
      signal,
      identity: identity2
    }
  } = useRoomContext();
  const {
    GridDebugControls,
    fakeUsers
  } = useGridDebugControls({
    defaultEnabled: false,
    initialCount: 0
  });
  const [containerRef, {
    width: containerWidth,
    height: containerHeight
  }] = useMeasure_default();
  const [firstFlexChildRef, {
    width: firstFlexChildWidth
  }] = useMeasure_default();
  const totalUsers = 1 + fakeUsers.length + otherUsers.length;
  const [raisedHand, setRaisedHand] = (0, import_react27.useState)(false);
  const speaking = useIsSpeaking(userMedia.audioStreamTrack);
  useMount_default(() => {
    if (otherUsers.length > 5) {
      userMedia.turnMicOff();
    }
  });
  useBroadcastStatus({
    userMedia,
    peer,
    signal,
    identity: identity2,
    pushedTracks,
    raisedHand,
    speaking
  });
  useSounds(otherUsers);
  useUserJoinLeaveToasts(otherUsers);
  const {
    width
  } = useWindowSize_default();
  const stageLimit = width < 600 ? 2 : 8;
  const {
    recordActivity,
    actorsOnStage
  } = useStageManager(otherUsers, stageLimit);
  (0, import_react27.useEffect)(() => {
    otherUsers.forEach((u3) => {
      if (u3.speaking || u3.raisedHand || u3.tracks.screenShareEnabled)
        recordActivity(u3);
    });
  }, [otherUsers, recordActivity]);
  const [pinnedId, setPinnedId] = (0, import_react27.useState)();
  const flexContainerWidth = (0, import_react27.useMemo)(() => 100 / calculateLayout({
    count: totalUsers,
    height: containerHeight,
    width: containerWidth
  }).cols + "%", [totalUsers, containerHeight, containerWidth]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PullAudioTracks, { audioTracks: otherUsers.map((u3) => u3.tracks.audio).filter(isNonNullable), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col h-full bg-white dark:bg-zinc-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(h2, { flipKey: totalUsers, className: "relative flex-grow overflow-hidden isolate", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "absolute inset-0 h-full w-full bg-black isolate flex flex-wrap justify-around gap-[--gap] p-[--gap]", style: {
          "--gap": "1rem",
          // the flex basis that is needed to achieve row layout
          "--flex-container-width": flexContainerWidth,
          // the size of the first user's flex container
          "--participant-max-width": firstFlexChildWidth + "px"
        }, ref: containerRef, children: [
          identity2 && userMedia.audioStreamTrack && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Participant, { user: identity2, isSelf: true, flipId: "identity user", ref: firstFlexChildRef, videoTrack: userMedia.videoStreamTrack, audioTrack: userMedia.audioStreamTrack, pinnedId, setPinnedId }, void 0, false, {
            fileName: "app/routes/_room.$roomName.room.tsx",
            lineNumber: 208,
            columnNumber: 50
          }, this),
          identity2 && userMedia.screenShareVideoTrack && userMedia.screenShareEnabled && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Participant, { user: identity2, flipId: "identity user screenshare", isScreenShare: true, videoTrack: userMedia.screenShareVideoTrack, pinnedId, setPinnedId }, void 0, false, {
            fileName: "app/routes/_room.$roomName.room.tsx",
            lineNumber: 210,
            columnNumber: 87
          }, this),
          actorsOnStage.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react27.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PullVideoTrack, { video: user.tracks.video, audio: user.tracks.audio, children: ({
              videoTrack,
              audioTrack
            }) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Participant, { user, flipId: user.id, videoTrack, audioTrack, pinnedId, setPinnedId }, void 0, false, {
              fileName: "app/routes/_room.$roomName.room.tsx",
              lineNumber: 216,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_room.$roomName.room.tsx",
              lineNumber: 212,
              columnNumber: 9
            }, this),
            user.tracks.screenshare && user.tracks.screenShareEnabled && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PullVideoTrack, { video: user.tracks.screenshare, children: ({
              videoTrack
            }) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Participant, { user, videoTrack, flipId: user.id + "screenshare", isScreenShare: true, pinnedId, setPinnedId }, void 0, false, {
              fileName: "app/routes/_room.$roomName.room.tsx",
              lineNumber: 221,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_room.$roomName.room.tsx",
              lineNumber: 218,
              columnNumber: 71
            }, this)
          ] }, user.id, true, {
            fileName: "app/routes/_room.$roomName.room.tsx",
            lineNumber: 211,
            columnNumber: 34
          }, this)),
          identity2 && userMedia.audioStreamTrack && userMedia.videoStreamTrack && fakeUsers.map((uid) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Participant, { user: identity2, isSelf: true, videoTrack: userMedia.videoStreamTrack, audioTrack: userMedia.audioStreamTrack, flipId: uid.toString(), pinnedId, setPinnedId }, uid, false, {
            fileName: "app/routes/_room.$roomName.room.tsx",
            lineNumber: 225,
            columnNumber: 101
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 201,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Toast_default.Viewport, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 227,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName.room.tsx",
        lineNumber: 200,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center gap-2 p-2 text-sm md:gap-4 md:p-5 md:text-base", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(GridDebugControls, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 230,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(MicButton, { warnWhenSpeakingWhileMuted: true }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 231,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(CameraButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 232,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ScreenshareButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 233,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(RaiseHandButton, { raisedHand, onClick: () => setRaisedHand(!raisedHand) }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 234,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ParticipantsButton, { identity: identity2, otherUsers, className: "hidden md:block" }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 235,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(OverflowMenu, { bugReportsEnabled }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 236,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(LeaveRoomButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 237,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName.room.tsx",
        lineNumber: 229,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_room.$roomName.room.tsx",
      lineNumber: 199,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(HighPacketLossWarningsToast, {}, void 0, false, {
      fileName: "app/routes/_room.$roomName.room.tsx",
      lineNumber: 240,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(IceDisconnectedToast, {}, void 0, false, {
      fileName: "app/routes/_room.$roomName.room.tsx",
      lineNumber: 241,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_room.$roomName.room.tsx",
    lineNumber: 198,
    columnNumber: 10
  }, this);
}
_s34(JoinedRoom, "Tsbwu2g7AE6K/PFhLU9CuYXw6i0=", false, function() {
  return [useRoomContext, useGridDebugControls, useMeasure_default, useMeasure_default, useIsSpeaking, useMount_default, useBroadcastStatus, useSounds, useUserJoinLeaveToasts, useWindowSize_default, useStageManager];
});
_c210 = JoinedRoom;
var _c31;
var _c210;
$RefreshReg$(_c31, "Room");
$RefreshReg$(_c210, "JoinedRoom");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Room as default
};
/*! Bundled license information:

rematrix/dist/rematrix.es.js:
  (*! @license Rematrix v0.2.2
  
  	Copyright 2018 Fisssion LLC.
  
  	Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  
  	The above copyright notice and this permission notice shall be included in
  	all copies or substantial portions of the Software.
  
  	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  	THE SOFTWARE.
  *)
*/
//# sourceMappingURL=/build/routes/_room.$roomName.room-2TCZZCHS.js.map
