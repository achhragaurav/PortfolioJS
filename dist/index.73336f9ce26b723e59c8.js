/*! For license information please see index.73336f9ce26b723e59c8.js.LICENSE.txt */
(() => {
  var t = {
      721: (t) => {
        "use strict";
        var e = Object.prototype.toString,
          r = Object.prototype.hasOwnProperty;
        function i(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        t.exports = function (t) {
          if (!t)
            return console.warn("bindAll requires at least one argument.");
          var n = Array.prototype.slice.call(arguments, 1);
          if (0 === n.length)
            for (var s in t)
              r.call(t, s) &&
                "function" == typeof t[s] &&
                "[object Function]" == e.call(t[s]) &&
                n.push(s);
          for (var o = 0; o < n.length; o++) {
            var a = n[o];
            t[a] = i(t[a], t);
          }
        };
      },
      121: (t, e, r) => {
        var i = r(355),
          n = /\s+/,
          s = Object.prototype.toString;
        function o(t) {
          if (t.classList) return t.classList;
          var e = t.className.replace(/^\s+|\s+$/g, "").split(n);
          return "" === e[0] && e.shift(), e;
        }
        function a(t, e) {
          if (t.classList) t.classList.add(e);
          else {
            var r = o(t);
            ~i(r, e) || r.push(e), (t.className = r.join(" "));
          }
        }
        function l(t, e) {
          return t.classList ? t.classList.contains(e) : !!~i(o(t), e);
        }
        function u(t, e) {
          if ("[object RegExp]" == s.call(e)) return h(t, e);
          if (t.classList) t.classList.remove(e);
          else {
            var r = o(t),
              n = i(r, e);
            ~n && r.splice(n, 1), (t.className = r.join(" "));
          }
        }
        function h(t, e, r) {
          for (
            var i = Array.prototype.slice.call(o(t)), n = 0;
            n < i.length;
            n++
          )
            e.test(i[n]) && u(t, i[n]);
        }
        (t.exports = o),
          (t.exports.add = a),
          (t.exports.contains = l),
          (t.exports.has = l),
          (t.exports.toggle = function (t, e) {
            if (t.classList) return t.classList.toggle(e);
            l(t, e) ? u(t, e) : a(t, e);
          }),
          (t.exports.remove = u),
          (t.exports.removeMatching = h);
      },
      7: (t) => {
        t.exports = function (t) {
          t = t || {};
          var e = document.createElement(t.selector);
          if (t.attr)
            for (var r in t.attr)
              t.attr.hasOwnProperty(r) && e.setAttribute(r, t.attr[r]);
          return (
            "a" == t.selector &&
              t.link &&
              ((e.href = t.link),
              t.target && e.setAttribute("target", t.target)),
            "img" == t.selector &&
              t.src &&
              ((e.src = t.src),
              t.lazyload &&
                ((e.style.opacity = 0),
                (e.onload = function () {
                  e.style.opacity = 1;
                }))),
            t.id && (e.id = t.id),
            t.styles && (e.className = t.styles),
            t.html && (e.innerHTML = t.html),
            t.children && e.appendChild(t.children),
            e
          );
        };
      },
      322: (t, e, r) => {
        var i = r(485),
          n = function (t, e, r, i) {
            return t.addEventListener(e, r, i || !1);
          },
          s = function (t, e, r, i) {
            return t.removeEventListener(e, r, i || !1);
          },
          o = function (t, e, r) {
            var n = i(e, r);
            t.dispatchEvent(n);
          };
        document.addEventListener ||
          (n = function (t, e, r) {
            return t.attachEvent("on" + e, r);
          }),
          document.removeEventListener ||
            (s = function (t, e, r) {
              return t.detachEvent("on" + e, r);
            }),
          document.dispatchEvent ||
            (o = function (t, e, r) {
              var n = i(e, r);
              return t.fireEvent("on" + n.type, n);
            }),
          (t.exports = {
            on: n,
            off: s,
            once: function (t, e, r, i) {
              n(
                t,
                e,
                function n(o) {
                  s(t, e, n, i), r(o);
                },
                i
              );
            },
            emit: o,
          });
      },
      355: (t) => {
        var e = [].indexOf;
        t.exports = function (t, r) {
          if (e) return t.indexOf(r);
          for (var i = 0; i < t.length; ++i) if (t[i] === r) return i;
          return -1;
        };
      },
      714: function (t, e) {
        (function () {
          (null !== e ? e : this).Lethargy = (function () {
            function t(t, e, r, i) {
              (this.stability = null != t ? Math.abs(t) : 8),
                (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                (this.tolerance = null != r ? 1 + Math.abs(r) : 1.1),
                (this.delay = null != i ? i : 150),
                (this.lastUpDeltas = function () {
                  var t, e, r;
                  for (
                    r = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : t >= e;
                    1 <= e ? t++ : t--
                  )
                    r.push(null);
                  return r;
                }.call(this)),
                (this.lastDownDeltas = function () {
                  var t, e, r;
                  for (
                    r = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : t >= e;
                    1 <= e ? t++ : t--
                  )
                    r.push(null);
                  return r;
                }.call(this)),
                (this.deltasTimestamp = function () {
                  var t, e, r;
                  for (
                    r = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : t >= e;
                    1 <= e ? t++ : t--
                  )
                    r.push(null);
                  return r;
                }.call(this));
            }
            return (
              (t.prototype.check = function (t) {
                var e;
                return (
                  null != (t = t.originalEvent || t).wheelDelta
                    ? (e = t.wheelDelta)
                    : null != t.deltaY
                    ? (e = -40 * t.deltaY)
                    : (null == t.detail && 0 !== t.detail) ||
                      (e = -40 * t.detail),
                  this.deltasTimestamp.push(Date.now()),
                  this.deltasTimestamp.shift(),
                  e > 0
                    ? (this.lastUpDeltas.push(e),
                      this.lastUpDeltas.shift(),
                      this.isInertia(1))
                    : (this.lastDownDeltas.push(e),
                      this.lastDownDeltas.shift(),
                      this.isInertia(-1))
                );
              }),
              (t.prototype.isInertia = function (t) {
                var e, r, i, n, s, o, a;
                return null ===
                  (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                  ? t
                  : !(
                      this.deltasTimestamp[2 * this.stability - 2] +
                        this.delay >
                        Date.now() && e[0] === e[2 * this.stability - 1]
                    ) &&
                      ((i = e.slice(0, this.stability)),
                      (r = e.slice(this.stability, 2 * this.stability)),
                      (a = i.reduce(function (t, e) {
                        return t + e;
                      })),
                      (s = r.reduce(function (t, e) {
                        return t + e;
                      })),
                      (o = a / i.length),
                      (n = s / r.length),
                      Math.abs(o) < Math.abs(n * this.tolerance) &&
                        this.sensitivity < Math.abs(n) &&
                        t);
              }),
              (t.prototype.showLastUpDeltas = function () {
                return this.lastUpDeltas;
              }),
              (t.prototype.showLastDownDeltas = function () {
                return this.lastDownDeltas;
              }),
              t
            );
          })();
        }.call(this));
      },
      418: (t) => {
        "use strict";
        var e = Object.getOwnPropertySymbols,
          r = Object.prototype.hasOwnProperty,
          i = Object.prototype.propertyIsEnumerable;
        function n(t) {
          if (null == t)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(t);
        }
        t.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
              return !1;
            for (var e = {}, r = 0; r < 10; r++)
              e["_" + String.fromCharCode(r)] = r;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(e)
                .map(function (t) {
                  return e[t];
                })
                .join("")
            )
              return !1;
            var i = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (t) {
                i[t] = t;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, i)).join("")
            );
          } catch (t) {
            return !1;
          }
        })()
          ? Object.assign
          : function (t, s) {
              for (var o, a, l = n(t), u = 1; u < arguments.length; u++) {
                for (var h in (o = Object(arguments[u])))
                  r.call(o, h) && (l[h] = o[h]);
                if (e) {
                  a = e(o);
                  for (var c = 0; c < a.length; c++)
                    i.call(o, a[c]) && (l[a[c]] = o[a[c]]);
                }
              }
              return l;
            };
      },
      658: (t) => {
        var e =
            "undefined" != typeof document
              ? document.createElement("p").style
              : {},
          r = ["O", "ms", "Moz", "Webkit"],
          i = /([A-Z])/g,
          n = {};
        function s(t) {
          if (
            ((t = t.replace(/-([a-z])/g, function (t, e) {
              return e.toUpperCase();
            })),
            void 0 !== e[t])
          )
            return t;
          for (
            var i = t.charAt(0).toUpperCase() + t.slice(1), n = r.length;
            n--;

          ) {
            var s = r[n] + i;
            if (void 0 !== e[s]) return s;
          }
          return t;
        }
        (t.exports = function (t) {
          return t in n ? n[t] : (n[t] = s(t));
        }),
          (t.exports.dash = function (t) {
            return (
              (t = s(t)),
              i.test(t) && ((t = "-" + t.replace(i, "-$1")), (i.lastIndex = 0)),
              t.toLowerCase()
            );
          });
      },
      485: (t, e, r) => {
        window;
        var i = document || {},
          n = (i.documentElement, !0);
        try {
          i.createEvent("KeyEvents");
        } catch (t) {
          n = !1;
        }
        t.exports = i.createEvent
          ? function (t, e) {
              e = e || {};
              var r = a(t),
                o = r;
              "KeyboardEvent" === r &&
                n &&
                ((r = "KeyEvents"), (o = "KeyEvent"));
              var l = i.createEvent(r),
                u = "init" + o,
                h = "function" == typeof l[u] ? u : "initEvent",
                c = s[h],
                f = [],
                d = {};
              e.type = t;
              for (var p = 0; p < c.length; ++p) {
                var m = e[(v = c[p])];
                void 0 === m && (m = l[v]), (d[v] = !0), f.push(m);
              }
              for (var v in (l[h].apply(l, f),
              "KeyboardEvent" === r &&
                (l = (function (t, e) {
                  return (
                    (t.ctrlKey == (e.ctrlKey || !1) &&
                      t.altKey == (e.altKey || !1) &&
                      t.shiftKey == (e.shiftKey || !1) &&
                      t.metaKey == (e.metaKey || !1) &&
                      t.keyCode == (e.keyCode || 0) &&
                      t.charCode == (e.charCode || 0)) ||
                      ((t = document.createEvent("Event")).initEvent(
                        e.type,
                        e.bubbles,
                        e.cancelable
                      ),
                      (t.ctrlKey = e.ctrlKey || !1),
                      (t.altKey = e.altKey || !1),
                      (t.shiftKey = e.shiftKey || !1),
                      (t.metaKey = e.metaKey || !1),
                      (t.keyCode = e.keyCode || 0),
                      (t.charCode = e.charCode || 0)),
                    t
                  );
                })(l, e)),
              e))
                d[v] || (l[v] = e[v]);
              return l;
            }
          : function (t, e) {
              e = e || {};
              var r = i.createEventObject();
              for (var n in ((r.type = t), e)) void 0 !== e[n] && (r[n] = e[n]);
              return r;
            };
        var s = r(45),
          o = r(638),
          a = (function () {
            var t = {};
            for (var e in o)
              for (var r = o[e], i = 0; i < r.length; i++) t[r[i]] = e;
            return function (e) {
              return t[e] || "Event";
            };
          })();
      },
      45: (t) => {
        "use strict";
        t.exports = JSON.parse(
          '{"initEvent":["type","bubbles","cancelable"],"initUIEvent":["type","bubbles","cancelable","view","detail"],"initMouseEvent":["type","bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget"],"initMutationEvent":["type","bubbles","cancelable","relatedNode","prevValue","newValue","attrName","attrChange"],"initKeyboardEvent":["type","bubbles","cancelable","view","ctrlKey","altKey","shiftKey","metaKey","keyCode","charCode"],"initKeyEvent":["type","bubbles","cancelable","view","ctrlKey","altKey","shiftKey","metaKey","keyCode","charCode"]}'
        );
      },
      638: (t) => {
        "use strict";
        t.exports = JSON.parse(
          '{"MouseEvent":["click","mousedown","mouseup","mouseover","mousemove","mouseout"],"KeyboardEvent":["keydown","keyup","keypress"],"MutationEvent":["DOMSubtreeModified","DOMNodeInserted","DOMNodeRemoved","DOMNodeRemovedFromDocument","DOMNodeInsertedIntoDocument","DOMAttrModified","DOMCharacterDataModified"],"HTMLEvents":["load","unload","abort","error","select","change","submit","reset","focus","blur","resize","scroll"],"UIEvent":["DOMFocusIn","DOMFocusOut","DOMActivate"]}'
        );
      },
      279: (t) => {
        function e() {}
        (e.prototype = {
          on: function (t, e, r) {
            var i = this.e || (this.e = {});
            return (i[t] || (i[t] = [])).push({ fn: e, ctx: r }), this;
          },
          once: function (t, e, r) {
            var i = this;
            function n() {
              i.off(t, n), e.apply(r, arguments);
            }
            return (n._ = e), this.on(t, n, r);
          },
          emit: function (t) {
            for (
              var e = [].slice.call(arguments, 1),
                r = ((this.e || (this.e = {}))[t] || []).slice(),
                i = 0,
                n = r.length;
              i < n;
              i++
            )
              r[i].fn.apply(r[i].ctx, e);
            return this;
          },
          off: function (t, e) {
            var r = this.e || (this.e = {}),
              i = r[t],
              n = [];
            if (i && e)
              for (var s = 0, o = i.length; s < o; s++)
                i[s].fn !== e && i[s].fn._ !== e && n.push(i[s]);
            return n.length ? (r[t] = n) : delete r[t], this;
          },
        }),
          (t.exports = e);
      },
      593: (t) => {
        "use strict";
        t.exports = function (t) {
          return JSON.parse(JSON.stringify(t));
        };
      },
      809: (t, e, r) => {
        "use strict";
        var i = r(418),
          n = r(279),
          s = r(714).Lethargy,
          o = r(268),
          a = (r(593), r(721)),
          l = "virtualscroll";
        t.exports = u;
        function u(t) {
          a(
            this,
            "_onWheel",
            "_onMouseWheel",
            "_onTouchStart",
            "_onTouchMove",
            "_onKeyDown"
          ),
            (this.el = window),
            t && t.el && ((this.el = t.el), delete t.el),
            (this.options = i(
              {
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0,
              },
              t
            )),
            this.options.limitInertia && (this._lethargy = new s()),
            (this._emitter = new n()),
            (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
            (this.touchStartX = null),
            (this.touchStartY = null),
            (this.bodyTouchAction = null),
            void 0 !== this.options.passive &&
              (this.listenerOptions = { passive: this.options.passive });
        }
        (u.prototype._notify = function (t) {
          var e = this._event;
          (e.x += e.deltaX),
            (e.y += e.deltaY),
            this._emitter.emit(l, {
              x: e.x,
              y: e.y,
              deltaX: e.deltaX,
              deltaY: e.deltaY,
              originalEvent: t,
            });
        }),
          (u.prototype._onWheel = function (t) {
            var e = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
              var r = this._event;
              (r.deltaX = t.wheelDeltaX || -1 * t.deltaX),
                (r.deltaY = t.wheelDeltaY || -1 * t.deltaY),
                o.isFirefox &&
                  1 == t.deltaMode &&
                  ((r.deltaX *= e.firefoxMultiplier),
                  (r.deltaY *= e.firefoxMultiplier)),
                (r.deltaX *= e.mouseMultiplier),
                (r.deltaY *= e.mouseMultiplier),
                this._notify(t);
            }
          }),
          (u.prototype._onMouseWheel = function (t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
              var e = this._event;
              (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
                (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
                this._notify(t);
            }
          }),
          (u.prototype._onTouchStart = function (t) {
            var e = t.targetTouches ? t.targetTouches[0] : t;
            (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
          }),
          (u.prototype._onTouchMove = function (t) {
            var e = this.options;
            e.preventTouch &&
              !t.target.classList.contains(e.unpreventTouchClass) &&
              t.preventDefault();
            var r = this._event,
              i = t.targetTouches ? t.targetTouches[0] : t;
            (r.deltaX = (i.pageX - this.touchStartX) * e.touchMultiplier),
              (r.deltaY = (i.pageY - this.touchStartY) * e.touchMultiplier),
              (this.touchStartX = i.pageX),
              (this.touchStartY = i.pageY),
              this._notify(t);
          }),
          (u.prototype._onKeyDown = function (t) {
            var e = this._event;
            e.deltaX = e.deltaY = 0;
            var r = window.innerHeight - 40;
            switch (t.keyCode) {
              case 37:
              case 38:
                e.deltaY = this.options.keyStep;
                break;
              case 39:
              case 40:
                e.deltaY = -this.options.keyStep;
                break;
              case t.shiftKey:
                e.deltaY = r;
                break;
              case 32:
                e.deltaY = -r;
                break;
              default:
                return;
            }
            this._notify(t);
          }),
          (u.prototype._bind = function () {
            o.hasWheelEvent &&
              this.el.addEventListener(
                "wheel",
                this._onWheel,
                this.listenerOptions
              ),
              o.hasMouseWheelEvent &&
                this.el.addEventListener(
                  "mousewheel",
                  this._onMouseWheel,
                  this.listenerOptions
                ),
              o.hasTouch &&
                this.options.useTouch &&
                (this.el.addEventListener(
                  "touchstart",
                  this._onTouchStart,
                  this.listenerOptions
                ),
                this.el.addEventListener(
                  "touchmove",
                  this._onTouchMove,
                  this.listenerOptions
                )),
              o.hasPointer &&
                o.hasTouchWin &&
                ((this.bodyTouchAction = document.body.style.msTouchAction),
                (document.body.style.msTouchAction = "none"),
                this.el.addEventListener(
                  "MSPointerDown",
                  this._onTouchStart,
                  !0
                ),
                this.el.addEventListener(
                  "MSPointerMove",
                  this._onTouchMove,
                  !0
                )),
              o.hasKeyDown &&
                this.options.useKeyboard &&
                document.addEventListener("keydown", this._onKeyDown);
          }),
          (u.prototype._unbind = function () {
            o.hasWheelEvent &&
              this.el.removeEventListener("wheel", this._onWheel),
              o.hasMouseWheelEvent &&
                this.el.removeEventListener("mousewheel", this._onMouseWheel),
              o.hasTouch &&
                (this.el.removeEventListener("touchstart", this._onTouchStart),
                this.el.removeEventListener("touchmove", this._onTouchMove)),
              o.hasPointer &&
                o.hasTouchWin &&
                ((document.body.style.msTouchAction = this.bodyTouchAction),
                this.el.removeEventListener(
                  "MSPointerDown",
                  this._onTouchStart,
                  !0
                ),
                this.el.removeEventListener(
                  "MSPointerMove",
                  this._onTouchMove,
                  !0
                )),
              o.hasKeyDown &&
                this.options.useKeyboard &&
                document.removeEventListener("keydown", this._onKeyDown);
          }),
          (u.prototype.on = function (t, e) {
            this._emitter.on(l, t, e);
            var r = this._emitter.e;
            r && r[l] && 1 === r[l].length && this._bind();
          }),
          (u.prototype.off = function (t, e) {
            this._emitter.off(l, t, e);
            var r = this._emitter.e;
            (!r[l] || r[l].length <= 0) && this._unbind();
          }),
          (u.prototype.reset = function () {
            var t = this._event;
            (t.x = 0), (t.y = 0);
          }),
          (u.prototype.destroy = function () {
            this._emitter.off(), this._unbind();
          });
      },
      268: (t) => {
        "use strict";
        t.exports = {
          hasWheelEvent: "onwheel" in document,
          hasMouseWheelEvent: "onmousewheel" in document,
          hasTouch:
            "ontouchstart" in window ||
            window.TouchEvent ||
            (window.DocumentTouch && document instanceof DocumentTouch),
          hasTouchWin:
            navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
          hasPointer: !!window.navigator.msPointerEnabled,
          hasKeyDown: "onkeydown" in document,
          isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
        };
      },
    },
    e = {};
  function r(i) {
    var n = e[i];
    if (void 0 !== n) return n.exports;
    var s = (e[i] = { exports: {} });
    return t[i].call(s.exports, s, s.exports, r), s.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var i in e)
        r.o(e, i) &&
          !r.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      function t(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function e(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var i,
        n,
        s,
        o,
        a,
        l,
        u,
        h,
        c,
        f,
        d,
        p,
        m,
        v = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        g = { duration: 0.5, overwrite: !1, delay: 0 },
        _ = 1e8,
        y = 1e-8,
        b = 2 * Math.PI,
        w = b / 4,
        x = 0,
        T = Math.sqrt,
        M = Math.cos,
        k = Math.sin,
        O = function (t) {
          return "string" == typeof t;
        },
        C = function (t) {
          return "function" == typeof t;
        },
        E = function (t) {
          return "number" == typeof t;
        },
        S = function (t) {
          return void 0 === t;
        },
        D = function (t) {
          return "object" == typeof t;
        },
        A = function (t) {
          return !1 !== t;
        },
        P = function () {
          return "undefined" != typeof window;
        },
        L = function (t) {
          return C(t) || O(t);
        },
        F =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        z = Array.isArray,
        R = /(?:-?\.?\d|\.)+/gi,
        I = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        B = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        N = /[+-]=-?[.\d]+/,
        X = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        j = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        K = {},
        W = {},
        U = function (t) {
          return (W = gt(t, K)) && er;
        },
        q = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        V = function (t, e) {
          return !e && console.warn(t);
        },
        H = function (t, e) {
          return (t && (K[t] = e) && W && (W[t] = e)) || K;
        },
        $ = function () {
          return 0;
        },
        G = {},
        Q = [],
        Z = {},
        J = {},
        tt = {},
        et = 30,
        rt = [],
        it = "",
        nt = function (t) {
          var e,
            r,
            i = t[0];
          if ((D(i) || C(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
            for (r = rt.length; r-- && !rt[r].targetTest(i); );
            e = rt[r];
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new Oe(t[r], e)))) ||
              t.splice(r, 1);
          return t;
        },
        st = function (t) {
          return t._gsap || nt(Ut(t))[0]._gsap;
        },
        ot = function (t, e, r) {
          return (r = t[e]) && C(r)
            ? t[e]()
            : (S(r) && t.getAttribute && t.getAttribute(e)) || r;
        },
        at = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        lt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        ut = function (t, e) {
          for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
          return i < r;
        },
        ht = function (t, e, r) {
          var i,
            n = E(t[1]),
            s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[s];
          if ((n && (o.duration = t[1]), (o.parent = r), e)) {
            for (i = o; r && !("immediateRender" in i); )
              (i = r.vars.defaults || {}), (r = A(r.vars.inherit) && r.parent);
            (o.immediateRender = A(i.immediateRender)),
              e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
          }
          return o;
        },
        ct = function () {
          var t,
            e,
            r = Q.length,
            i = Q.slice(0);
          for (Z = {}, Q.length = 0, t = 0; t < r; t++)
            (e = i[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        ft = function (t, e, r, i) {
          Q.length && ct(), t.render(e, r, i), Q.length && ct();
        },
        dt = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(X).length < 2
            ? e
            : O(t)
            ? t.trim()
            : t;
        },
        pt = function (t) {
          return t;
        },
        mt = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        vt = function (t, e) {
          for (var r in e)
            r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
        },
        gt = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        _t = function t(e, r) {
          for (var i in r)
            "__proto__" !== i &&
              "constructor" !== i &&
              "prototype" !== i &&
              (e[i] = D(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
          return e;
        },
        yt = function (t, e) {
          var r,
            i = {};
          for (r in t) r in e || (i[r] = t[r]);
          return i;
        },
        bt = function (t) {
          var e = t.parent || n,
            r = t.keyframes ? vt : mt;
          if (A(t.inherit))
            for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
          return t;
        },
        wt = function (t, e, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var n = e._prev,
            s = e._next;
          n ? (n._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = n) : t[i] === e && (t[i] = n),
            (e._next = e._prev = e.parent = null);
        },
        xt = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
            (t._act = 0);
        },
        Tt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
          return t;
        },
        Mt = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        kt = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        Ot = function (t) {
          return t._repeat
            ? Ct(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        Ct = function (t, e) {
          var r = Math.floor((t /= e));
          return t && r === t ? r - 1 : r;
        },
        Et = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        St = function (t) {
          return (t._end = lt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || y) || 0)
          ));
        },
        Dt = function (t, e) {
          var r = t._dp;
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = lt(
                r._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              St(t),
              r._dirty || Tt(r, t)),
            t
          );
        },
        At = function (t, e) {
          var r;
          if (
            ((e._time || (e._initted && !e._dur)) &&
              ((r = Et(t.rawTime(), e)),
              (!e._dur || Xt(0, e.totalDuration(), r) - e._tTime > y) &&
                e.render(r, !0)),
            Tt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -1e-8;
          }
        },
        Pt = function (t, e, r, i) {
          return (
            e.parent && xt(e),
            (e._start = lt(r + e._delay)),
            (e._end = lt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            (function (t, e, r, i, n) {
              void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
              var s,
                o = t[i];
              if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
              o
                ? ((e._next = o._next), (o._next = e))
                : ((e._next = t[r]), (t[r] = e)),
                e._next ? (e._next._prev = e) : (t[i] = e),
                (e._prev = o),
                (e.parent = e._dp = t);
            })(t, e, "_first", "_last", t._sort ? "_start" : 0),
            (t._recent = e),
            i || At(t, e),
            t
          );
        },
        Lt = function (t, e) {
          return (
            (K.ScrollTrigger || q("scrollTrigger", e)) &&
            K.ScrollTrigger.create(e, t)
          );
        },
        Ft = function (t, e, r, i) {
          return (
            Le(t, e),
            t._initted
              ? !r &&
                t._pt &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                u !== de.frame
                ? (Q.push(t), (t._lazy = [e, i]), 1)
                : void 0
              : 1
          );
        },
        zt = function t(e) {
          var r = e.parent;
          return (
            r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
          );
        },
        Rt = function (t, e, r, i) {
          var n = t._repeat,
            s = lt(e) || 0,
            o = t._tTime / t._tDur;
          return (
            o && !i && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = n
              ? n < 0
                ? 1e10
                : lt(s * (n + 1) + t._rDelay * n)
              : s),
            o && !i ? Dt(t, (t._tTime = t._tDur * o)) : t.parent && St(t),
            r || Tt(t.parent, t),
            t
          );
        },
        It = function (t) {
          return t instanceof Ee ? Tt(t) : Rt(t, t._dur);
        },
        Bt = { _start: 0, endTime: $ },
        Yt = function t(e, r) {
          var i,
            n,
            s = e.labels,
            o = e._recent || Bt,
            a = e.duration() >= _ ? o.endTime(!1) : e._dur;
          return O(r) && (isNaN(r) || r in s)
            ? "<" === (i = r.charAt(0)) || ">" === i
              ? ("<" === i ? o._start : o.endTime(o._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0)
              : (i = r.indexOf("=")) < 0
              ? (r in s || (s[r] = a), s[r])
              : ((n = +(r.charAt(i - 1) + r.substr(i + 1))),
                i > 1 ? t(e, r.substr(0, i - 1)) + n : a + n)
            : null == r
            ? a
            : +r;
        },
        Nt = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        Xt = function (t, e, r) {
          return r < t ? t : r > e ? e : r;
        },
        jt = function (t) {
          if ("string" != typeof t) return "";
          var e = j.exec(t);
          return e ? t.substr(e.index + e[0].length) : "";
        },
        Kt = [].slice,
        Wt = function (t, e) {
          return (
            t &&
            D(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && D(t[0]))) &&
            !t.nodeType &&
            t !== s
          );
        },
        Ut = function (t, e) {
          return !O(t) || e || (!o && pe())
            ? z(t)
              ? (function (t, e, r) {
                  return (
                    void 0 === r && (r = []),
                    t.forEach(function (t) {
                      var i;
                      return (O(t) && !e) || Wt(t, 1)
                        ? (i = r).push.apply(i, Ut(t))
                        : r.push(t);
                    }) || r
                  );
                })(t, e)
              : Wt(t)
              ? Kt.call(t, 0)
              : t
              ? [t]
              : []
            : Kt.call(a.querySelectorAll(t), 0);
        },
        qt = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        Vt = function (t) {
          if (C(t)) return t;
          var e = D(t) ? t : { each: t },
            r = we(e.ease),
            i = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            o = i > 0 && i < 1,
            a = isNaN(i) || o,
            l = e.axis,
            u = i,
            h = i;
          return (
            O(i)
              ? (u = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
              : !o && a && ((u = i[0]), (h = i[1])),
            function (t, o, c) {
              var f,
                d,
                p,
                m,
                v,
                g,
                y,
                b,
                w,
                x = (c || e).length,
                M = s[x];
              if (!M) {
                if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, _])[1])) {
                  for (
                    y = -_;
                    y < (y = c[w++].getBoundingClientRect().left) && w < x;

                  );
                  w--;
                }
                for (
                  M = s[x] = [],
                    f = a ? Math.min(w, x) * u - 0.5 : i % w,
                    d = a ? (x * h) / w - 0.5 : (i / w) | 0,
                    y = 0,
                    b = _,
                    g = 0;
                  g < x;
                  g++
                )
                  (p = (g % w) - f),
                    (m = d - ((g / w) | 0)),
                    (M[g] = v =
                      l ? Math.abs("y" === l ? m : p) : T(p * p + m * m)),
                    v > y && (y = v),
                    v < b && (b = v);
                "random" === i && qt(M),
                  (M.max = y - b),
                  (M.min = b),
                  (M.v = x =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (w > x
                          ? x - 1
                          : l
                          ? "y" === l
                            ? x / w
                            : w
                          : Math.max(w, x / w)) ||
                      0) * ("edges" === i ? -1 : 1)),
                  (M.b = x < 0 ? n - x : n),
                  (M.u = jt(e.amount || e.each) || 0),
                  (r = r && x < 0 ? ye(r) : r);
              }
              return (
                (x = (M[t] - M.min) / M.max || 0),
                lt(M.b + (r ? r(x) : x) * M.v) + M.u
              );
            }
          );
        },
        Ht = function (t) {
          var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
          return function (r) {
            var i = Math.round(parseFloat(r) / t) * t * e;
            return (i - (i % 1)) / e + (E(r) ? 0 : jt(r));
          };
        },
        $t = function (t, e) {
          var r,
            i,
            n = z(t);
          return (
            !n &&
              D(t) &&
              ((r = n = t.radius || _),
              t.values
                ? ((t = Ut(t.values)), (i = !E(t[0])) && (r *= r))
                : (t = Ht(t.increment))),
            Nt(
              e,
              n
                ? C(t)
                  ? function (e) {
                      return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                    }
                  : function (e) {
                      for (
                        var n,
                          s,
                          o = parseFloat(i ? e.x : e),
                          a = parseFloat(i ? e.y : 0),
                          l = _,
                          u = 0,
                          h = t.length;
                        h--;

                      )
                        (n = i
                          ? (n = t[h].x - o) * n + (s = t[h].y - a) * s
                          : Math.abs(t[h] - o)) < l && ((l = n), (u = h));
                      return (
                        (u = !r || l <= r ? t[u] : e),
                        i || u === e || E(e) ? u : u + jt(e)
                      );
                    }
                : Ht(t)
            )
          );
        },
        Gt = function (t, e, r, i) {
          return Nt(z(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
            return z(t)
              ? t[~~(Math.random() * t.length)]
              : (r = r || 1e-5) &&
                  (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                    ) *
                      r *
                      i
                  ) / i;
          });
        },
        Qt = function (t, e, r) {
          return Nt(r, function (r) {
            return t[~~e(r)];
          });
        },
        Zt = function (t) {
          for (var e, r, i, n, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
            (i = t.indexOf(")", e)),
              (n = "[" === t.charAt(e + 7)),
              (r = t.substr(e + 7, i - e - 7).match(n ? X : R)),
              (o +=
                t.substr(s, e - s) +
                Gt(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
              (s = i + 1);
          return o + t.substr(s, t.length - s);
        },
        Jt = function (t, e, r, i, n) {
          var s = e - t,
            o = i - r;
          return Nt(n, function (e) {
            return r + (((e - t) / s) * o || 0);
          });
        },
        te = function (t, e, r) {
          var i,
            n,
            s,
            o = t.labels,
            a = _;
          for (i in o)
            (n = o[i] - e) < 0 == !!r &&
              n &&
              a > (n = Math.abs(n)) &&
              ((s = i), (a = n));
          return s;
        },
        ee = function (t, e, r) {
          var i,
            n,
            s = t.vars,
            o = s[e];
          if (o)
            return (
              (i = s[e + "Params"]),
              (n = s.callbackScope || t),
              r && Q.length && ct(),
              i ? o.apply(n, i) : o.call(n)
            );
        },
        re = function (t) {
          return (
            xt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!1),
            t.progress() < 1 && ee(t, "onInterrupt"),
            t
          );
        },
        ie = function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = C(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: $,
              render: qe,
              add: Ae,
              kill: He,
              modifier: Ve,
              rawVars: 0,
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: je,
              aliases: {},
              register: 0,
            };
          if ((pe(), t !== i)) {
            if (J[e]) return;
            mt(i, mt(yt(t, n), s)),
              gt(i.prototype, gt(n, yt(t, s))),
              (J[(i.prop = e)] = i),
              t.targetTest && (rt.push(i), (G[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          H(e, i), t.register && t.register(er, i, Qe);
        },
        ne = 255,
        se = {
          aqua: [0, ne, ne],
          lime: [0, ne, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ne],
          navy: [0, 0, 128],
          white: [ne, ne, ne],
          olive: [128, 128, 0],
          yellow: [ne, ne, 0],
          orange: [ne, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ne, 0, 0],
          pink: [ne, 192, 203],
          cyan: [0, ne, ne],
          transparent: [ne, ne, ne, 0],
        },
        oe = function (t, e, r) {
          return (
            ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) *
              ne +
              0.5) |
            0
          );
        },
        ae = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a,
            l,
            u,
            h,
            c,
            f,
            d = t ? (E(t) ? [t >> 16, (t >> 8) & ne, t & ne] : 0) : se.black;
          if (!d) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), se[t])
            )
              d = se[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((i = t.charAt(1)),
                  (n = t.charAt(2)),
                  (s = t.charAt(3)),
                  (t =
                    "#" +
                    i +
                    i +
                    n +
                    n +
                    s +
                    s +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (d = parseInt(t.substr(1, 6), 16)) >> 16,
                  (d >> 8) & ne,
                  d & ne,
                  parseInt(t.substr(7), 16) / 255,
                ];
              d = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & ne,
                t & ne,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((d = f = t.match(R)), e)) {
                if (~t.indexOf("="))
                  return (d = t.match(I)), r && d.length < 4 && (d[3] = 1), d;
              } else
                (o = (+d[0] % 360) / 360),
                  (a = +d[1] / 100),
                  (i =
                    2 * (l = +d[2] / 100) -
                    (n = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                  d.length > 3 && (d[3] *= 1),
                  (d[0] = oe(o + 1 / 3, i, n)),
                  (d[1] = oe(o, i, n)),
                  (d[2] = oe(o - 1 / 3, i, n));
            else d = t.match(R) || se.transparent;
            d = d.map(Number);
          }
          return (
            e &&
              !f &&
              ((i = d[0] / ne),
              (n = d[1] / ne),
              (s = d[2] / ne),
              (l = ((u = Math.max(i, n, s)) + (h = Math.min(i, n, s))) / 2),
              u === h
                ? (o = a = 0)
                : ((c = u - h),
                  (a = l > 0.5 ? c / (2 - u - h) : c / (u + h)),
                  (o =
                    u === i
                      ? (n - s) / c + (n < s ? 6 : 0)
                      : u === n
                      ? (s - i) / c + 2
                      : (i - n) / c + 4),
                  (o *= 60)),
              (d[0] = ~~(o + 0.5)),
              (d[1] = ~~(100 * a + 0.5)),
              (d[2] = ~~(100 * l + 0.5))),
            r && d.length < 4 && (d[3] = 1),
            d
          );
        },
        le = function (t) {
          var e = [],
            r = [],
            i = -1;
          return (
            t.split(he).forEach(function (t) {
              var n = t.match(B) || [];
              e.push.apply(e, n), r.push((i += n.length + 1));
            }),
            (e.c = r),
            e
          );
        },
        ue = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a = "",
            l = (t + a).match(he),
            u = e ? "hsla(" : "rgba(",
            h = 0;
          if (!l) return t;
          if (
            ((l = l.map(function (t) {
              return (
                (t = ae(t, e, 1)) &&
                u +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            r && ((s = le(t)), (i = r.c).join(a) !== s.c.join(a)))
          )
            for (o = (n = t.replace(he, "1").split(B)).length - 1; h < o; h++)
              a +=
                n[h] +
                (~i.indexOf(h)
                  ? l.shift() || u + "0,0,0,0)"
                  : (s.length ? s : l.length ? l : r).shift());
          if (!n)
            for (o = (n = t.split(he)).length - 1; h < o; h++) a += n[h] + l[h];
          return a + n[o];
        },
        he = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in se) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        ce = /hsl[a]?\(/,
        fe = function (t) {
          var e,
            r = t.join(" ");
          if (((he.lastIndex = 0), he.test(r)))
            return (
              (e = ce.test(r)),
              (t[1] = ue(t[1], e)),
              (t[0] = ue(t[0], e, le(t[1]))),
              !0
            );
        },
        de = (function () {
          var t,
            e,
            r,
            i,
            n,
            u,
            h = Date.now,
            f = 500,
            d = 33,
            p = h(),
            m = p,
            v = 1e3 / 240,
            g = v,
            _ = [],
            y = function r(s) {
              var o,
                a,
                l,
                c,
                y = h() - m,
                b = !0 === s;
              if (
                (y > f && (p += y - d),
                ((o = (l = (m += y) - p) - g) > 0 || b) &&
                  ((c = ++i.frame),
                  (n = l - 1e3 * i.time),
                  (i.time = l /= 1e3),
                  (g += o + (o >= v ? 4 : v - o)),
                  (a = 1)),
                b || (t = e(r)),
                a)
              )
                for (u = 0; u < _.length; u++) _[u](l, n, c, s);
            };
          return (i = {
            time: 0,
            frame: 0,
            tick: function () {
              y(!0);
            },
            deltaRatio: function (t) {
              return n / (1e3 / (t || 60));
            },
            wake: function () {
              l &&
                (!o &&
                  P() &&
                  ((s = o = window),
                  (a = s.document || {}),
                  (K.gsap = er),
                  (s.gsapVersions || (s.gsapVersions = [])).push(er.version),
                  U(W || s.GreenSockGlobals || (!s.gsap && s) || {}),
                  (r = s.requestAnimationFrame)),
                t && i.sleep(),
                (e =
                  r ||
                  function (t) {
                    return setTimeout(t, (g - 1e3 * i.time + 1) | 0);
                  }),
                (c = 1),
                y(2));
            },
            sleep: function () {
              (r ? s.cancelAnimationFrame : clearTimeout)(t), (c = 0), (e = $);
            },
            lagSmoothing: function (t, e) {
              (f = t || 1e8), (d = Math.min(e, f, 0));
            },
            fps: function (t) {
              (v = 1e3 / (t || 240)), (g = 1e3 * i.time + v);
            },
            add: function (t) {
              _.indexOf(t) < 0 && _.push(t), pe();
            },
            remove: function (t) {
              var e;
              ~(e = _.indexOf(t)) && _.splice(e, 1) && u >= e && u--;
            },
            _listeners: _,
          });
        })(),
        pe = function () {
          return !c && de.wake();
        },
        me = {},
        ve = /^[\d.\-M][\d.\-,\s]/,
        ge = /["']/g,
        _e = function (t) {
          for (
            var e,
              r,
              i,
              n = {},
              s = t.substr(1, t.length - 3).split(":"),
              o = s[0],
              a = 1,
              l = s.length;
            a < l;
            a++
          )
            (r = s[a]),
              (e = a !== l - 1 ? r.lastIndexOf(",") : r.length),
              (i = r.substr(0, e)),
              (n[o] = isNaN(i) ? i.replace(ge, "").trim() : +i),
              (o = r.substr(e + 1).trim());
          return n;
        },
        ye = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        be = function t(e, r) {
          for (var i, n = e._first; n; )
            n instanceof Ee
              ? t(n, r)
              : !n.vars.yoyoEase ||
                (n._yoyo && n._repeat) ||
                n._yoyo === r ||
                (n.timeline
                  ? t(n.timeline, r)
                  : ((i = n._ease),
                    (n._ease = n._yEase),
                    (n._yEase = i),
                    (n._yoyo = r))),
              (n = n._next);
        },
        we = function (t, e) {
          return (
            (t &&
              (C(t)
                ? t
                : me[t] ||
                  (function (t) {
                    var e,
                      r,
                      i,
                      n,
                      s = (t + "").split("("),
                      o = me[s[0]];
                    return o && s.length > 1 && o.config
                      ? o.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [_e(s[1])]
                            : ((e = t),
                              (r = e.indexOf("(") + 1),
                              (i = e.indexOf(")")),
                              (n = e.indexOf("(", r)),
                              e.substring(
                                r,
                                ~n && n < i ? e.indexOf(")", i + 1) : i
                              ))
                                .split(",")
                                .map(dt)
                        )
                      : me._CE && ve.test(t)
                      ? me._CE("", t)
                      : o;
                  })(t))) ||
            e
          );
        },
        xe = function (t, e, r, i) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === i &&
              (i = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var n,
            s = { easeIn: e, easeOut: r, easeInOut: i };
          return (
            at(t, function (t) {
              for (var e in ((me[t] = K[t] = s),
              (me[(n = t.toLowerCase())] = r),
              s))
                me[
                  n +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = me[t + "." + e] = s[e];
            }),
            s
          );
        },
        Te = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        Me = function t(e, r, i) {
          var n = r >= 1 ? r : 1,
            s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            o = (s / b) * (Math.asin(1 / n) || 0),
            a = function (t) {
              return 1 === t
                ? 1
                : n * Math.pow(2, -10 * t) * k((t - o) * s) + 1;
            },
            l =
              "out" === e
                ? a
                : "in" === e
                ? function (t) {
                    return 1 - a(1 - t);
                  }
                : Te(a);
          return (
            (s = b / s),
            (l.config = function (r, i) {
              return t(e, r, i);
            }),
            l
          );
        },
        ke = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var i = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            n =
              "out" === e
                ? i
                : "in" === e
                ? function (t) {
                    return 1 - i(1 - t);
                  }
                : Te(i);
          return (
            (n.config = function (r) {
              return t(e, r);
            }),
            n
          );
        };
      at("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        xe(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow(2 * (1 - t), r) / 2;
          }
        );
      }),
        (me.Linear.easeNone = me.none = me.Linear.easeIn),
        xe("Elastic", Me("in"), Me("out"), Me()),
        (f = 7.5625),
        (p = 1 / (d = 2.75)),
        xe(
          "Bounce",
          function (t) {
            return 1 - m(1 - t);
          },
          (m = function (t) {
            return t < p
              ? f * t * t
              : t < 0.7272727272727273
              ? f * Math.pow(t - 1.5 / d, 2) + 0.75
              : t < 0.9090909090909092
              ? f * (t -= 2.25 / d) * t + 0.9375
              : f * Math.pow(t - 2.625 / d, 2) + 0.984375;
          })
        ),
        xe("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        xe("Circ", function (t) {
          return -(T(1 - t * t) - 1);
        }),
        xe("Sine", function (t) {
          return 1 === t ? 1 : 1 - M(t * w);
        }),
        xe("Back", ke("in"), ke("out"), ke()),
        (me.SteppedEase =
          me.steps =
          K.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                  i = t + (e ? 0 : 1),
                  n = e ? 1 : 0;
                return function (t) {
                  return (((i * Xt(0, 0.99999999, t)) | 0) + n) * r;
                };
              },
            }),
        (g.ease = me["quad.out"]),
        at(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (it += t + "," + t + "Params,");
          }
        );
      var Oe = function (t, e) {
          (this.id = x++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : ot),
            (this.set = e ? e.getSetter : je);
        },
        Ce = (function () {
          function t(t, e) {
            var r = t.parent || n;
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Rt(this, +t.duration, 1, 1),
              (this.data = t.data),
              c || de.wake(),
              r && Pt(r, this, e || 0 === e ? e : r._time, 1),
              t.reversed && this.reverse(),
              t.paused && this.paused(!0);
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Rt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((pe(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (Dt(this, t), !r._dp || r.parent || At(r, this); r.parent; )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : (r.totalDuration() - r._tTime) / -r._ts) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Pt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === y) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), ft(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Ot(this)) % this._dur ||
                      (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Ot(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? Ct(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? Et(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                Mt(this.totalTime(Xt(-this._delay, this._tDur, e), !0))
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (pe(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            (this._tTime -= y) &&
                            Math.abs(this._zTime) !== y
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Pt(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (A(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Et(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (e._ts || 1)), (e = e._dp);
              return r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), It(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              return arguments.length
                ? ((this._rDelay = t), It(this))
                : this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Yt(this, t), A(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, A(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - y
                )
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var i = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((i[t] = e),
                      r && (i[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete i[t],
                  this)
                : i[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var i = C(t) ? t : pt,
                  n = function () {
                    var t = e.then;
                    (e.then = null),
                      C(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                      r(i),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? n()
                  : (e._prom = n);
              });
            }),
            (e.kill = function () {
              re(this);
            }),
            t
          );
        })();
      mt(Ce.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Ee = (function (r) {
        function i(e, i) {
          var n;
          return (
            void 0 === e && (e = {}),
            ((n = r.call(this, e, i) || this).labels = {}),
            (n.smoothChildTiming = !!e.smoothChildTiming),
            (n.autoRemoveChildren = !!e.autoRemoveChildren),
            (n._sort = A(e.sortChildren)),
            n.parent && At(n.parent, t(n)),
            e.scrollTrigger && Lt(t(n), e.scrollTrigger),
            n
          );
        }
        e(i, r);
        var s = i.prototype;
        return (
          (s.to = function (t, e, r) {
            return (
              new Ie(
                t,
                ht(arguments, 0, this),
                Yt(this, E(e) ? arguments[3] : r)
              ),
              this
            );
          }),
          (s.from = function (t, e, r) {
            return (
              new Ie(
                t,
                ht(arguments, 1, this),
                Yt(this, E(e) ? arguments[3] : r)
              ),
              this
            );
          }),
          (s.fromTo = function (t, e, r, i) {
            return (
              new Ie(
                t,
                ht(arguments, 2, this),
                Yt(this, E(e) ? arguments[4] : i)
              ),
              this
            );
          }),
          (s.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              bt(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Ie(t, e, Yt(this, r), 1),
              this
            );
          }),
          (s.call = function (t, e, r) {
            return Pt(this, Ie.delayedCall(0, t, e), Yt(this, r));
          }),
          (s.staggerTo = function (t, e, r, i, n, s, o) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || i),
              (r.onComplete = s),
              (r.onCompleteParams = o),
              (r.parent = this),
              new Ie(t, r, Yt(this, n)),
              this
            );
          }),
          (s.staggerFrom = function (t, e, r, i, n, s, o) {
            return (
              (r.runBackwards = 1),
              (bt(r).immediateRender = A(r.immediateRender)),
              this.staggerTo(t, e, r, i, n, s, o)
            );
          }),
          (s.staggerFromTo = function (t, e, r, i, n, s, o, a) {
            return (
              (i.startAt = r),
              (bt(i).immediateRender = A(i.immediateRender)),
              this.staggerTo(t, e, i, n, s, o, a)
            );
          }),
          (s.render = function (t, e, r) {
            var i,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              f,
              d,
              p,
              m,
              v = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              _ = this._dur,
              b = this !== n && t > g - y && t >= 0 ? g : t < y ? 0 : t,
              w = this._zTime < 0 != t < 0 && (this._initted || !_);
            if (b !== this._tTime || r || w) {
              if (
                (v !== this._time &&
                  _ &&
                  ((b += this._time - v), (t += this._time - v)),
                (i = b),
                (f = this._start),
                (u = !(c = this._ts)),
                w && (_ || (v = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((p = this._yoyo),
                  (l = _ + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * l + t, e, r);
                if (
                  ((i = lt(b % l)),
                  b === g
                    ? ((a = this._repeat), (i = _))
                    : ((a = ~~(b / l)) && a === b / l && ((i = _), a--),
                      i > _ && (i = _)),
                  (d = Ct(this._tTime, l)),
                  !v && this._tTime && d !== a && (d = a),
                  p && 1 & a && ((i = _ - i), (m = 1)),
                  a !== d && !this._lock)
                ) {
                  var x = p && 1 & d,
                    T = x === (p && 1 & a);
                  if (
                    (a < d && (x = !x),
                    (v = x ? 0 : _),
                    (this._lock = 1),
                    (this.render(v || (m ? 0 : lt(a * l)), e, !_)._lock = 0),
                    !e && this.parent && ee(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !m &&
                      (this.invalidate()._lock = 1),
                    (v && v !== this._time) ||
                      u !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((_ = this._dur),
                    (g = this._tDur),
                    T &&
                      ((this._lock = 2),
                      (v = x ? _ : -1e-4),
                      this.render(v, !0)),
                    (this._lock = 0),
                    !this._ts && !u)
                  )
                    return this;
                  be(this, m);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (h = (function (t, e, r) {
                    var i;
                    if (r > e)
                      for (i = t._first; i && i._start <= r; ) {
                        if (!i._dur && "isPause" === i.data && i._start > e)
                          return i;
                        i = i._next;
                      }
                    else
                      for (i = t._last; i && i._start >= r; ) {
                        if (!i._dur && "isPause" === i.data && i._start < e)
                          return i;
                        i = i._prev;
                      }
                  })(this, lt(v), lt(i))) &&
                  (b -= i - (i = h._start)),
                (this._tTime = b),
                (this._time = i),
                (this._act = !c),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (v = 0)),
                !v && i && !e && ee(this, "onStart"),
                i >= v && t >= 0)
              )
                for (s = this._first; s; ) {
                  if (
                    ((o = s._next),
                    (s._act || i >= s._start) && s._ts && h !== s)
                  ) {
                    if (s.parent !== this) return this.render(t, e, r);
                    if (
                      (s.render(
                        s._ts > 0
                          ? (i - s._start) * s._ts
                          : (s._dirty ? s.totalDuration() : s._tDur) +
                              (i - s._start) * s._ts,
                        e,
                        r
                      ),
                      i !== this._time || (!this._ts && !u))
                    ) {
                      (h = 0), o && (b += this._zTime = -1e-8);
                      break;
                    }
                  }
                  s = o;
                }
              else {
                s = this._last;
                for (var M = t < 0 ? t : i; s; ) {
                  if (
                    ((o = s._prev), (s._act || M <= s._end) && s._ts && h !== s)
                  ) {
                    if (s.parent !== this) return this.render(t, e, r);
                    if (
                      (s.render(
                        s._ts > 0
                          ? (M - s._start) * s._ts
                          : (s._dirty ? s.totalDuration() : s._tDur) +
                              (M - s._start) * s._ts,
                        e,
                        r
                      ),
                      i !== this._time || (!this._ts && !u))
                    ) {
                      (h = 0), o && (b += this._zTime = M ? -1e-8 : y);
                      break;
                    }
                  }
                  s = o;
                }
              }
              if (
                h &&
                !e &&
                (this.pause(),
                (h.render(i >= v ? 0 : -1e-8)._zTime = i >= v ? 1 : -1),
                this._ts)
              )
                return (this._start = f), St(this), this.render(t, e, r);
              this._onUpdate && !e && ee(this, "onUpdate", !0),
                ((b === g && g >= this.totalDuration()) || (!b && v)) &&
                  ((f !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !_) &&
                      ((b === g && this._ts > 0) || (!b && this._ts < 0)) &&
                      xt(this, 1),
                    e ||
                      (t < 0 && !v) ||
                      (!b && !v) ||
                      (ee(
                        this,
                        b === g ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(b < g && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (s.add = function (t, e) {
            var r = this;
            if ((E(e) || (e = Yt(this, e)), !(t instanceof Ce))) {
              if (z(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  this
                );
              if (O(t)) return this.addLabel(t, e);
              if (!C(t)) return this;
              t = Ie.delayedCall(0, t);
            }
            return this !== t ? Pt(this, t, e) : this;
          }),
          (s.getChildren = function (t, e, r, i) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === i && (i = -_);
            for (var n = [], s = this._first; s; )
              s._start >= i &&
                (s instanceof Ie
                  ? e && n.push(s)
                  : (r && n.push(s),
                    t && n.push.apply(n, s.getChildren(!0, e, r)))),
                (s = s._next);
            return n;
          }),
          (s.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (s.remove = function (t) {
            return O(t)
              ? this.removeLabel(t)
              : C(t)
              ? this.killTweensOf(t)
              : (wt(this, t),
                t === this._recent && (this._recent = this._last),
                Tt(this));
          }),
          (s.totalTime = function (t, e) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = lt(
                    de.time -
                      (this._ts > 0
                        ? t / this._ts
                        : (this.totalDuration() - t) / -this._ts)
                  )),
                r.prototype.totalTime.call(this, t, e),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (s.addLabel = function (t, e) {
            return (this.labels[t] = Yt(this, e)), this;
          }),
          (s.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (s.addPause = function (t, e, r) {
            var i = Ie.delayedCall(0, e || $, r);
            return (
              (i.data = "isPause"),
              (this._hasPause = 1),
              Pt(this, i, Yt(this, t))
            );
          }),
          (s.removePause = function (t) {
            var e = this._first;
            for (t = Yt(this, t); e; )
              e._start === t && "isPause" === e.data && xt(e), (e = e._next);
          }),
          (s.killTweensOf = function (t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
              Se !== i[n] && i[n].kill(t, e);
            return this;
          }),
          (s.getTweensOf = function (t, e) {
            for (var r, i = [], n = Ut(t), s = this._first, o = E(e); s; )
              s instanceof Ie
                ? ut(s._targets, n) &&
                  (o
                    ? (!Se || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  i.push(s)
                : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                (s = s._next);
            return i;
          }),
          (s.tweenTo = function (t, e) {
            e = e || {};
            var r = this,
              i = Yt(r, t),
              n = e,
              s = n.startAt,
              o = n.onStart,
              a = n.onStartParams,
              l = n.immediateRender,
              u = Ie.to(
                r,
                mt(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (s && "time" in s ? s.time : r._time)) /
                          r.timeScale()
                      ) ||
                      y,
                    onStart: function () {
                      r.pause();
                      var t =
                        e.duration || Math.abs((i - r._time) / r.timeScale());
                      u._dur !== t && Rt(u, t, 0, 1).render(u._time, !0, !0),
                        o && o.apply(u, a || []);
                    },
                  },
                  e
                )
              );
            return l ? u.render(0) : u;
          }),
          (s.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, mt({ startAt: { time: Yt(this, t) } }, r));
          }),
          (s.recent = function () {
            return this._recent;
          }),
          (s.nextLabel = function (t) {
            return void 0 === t && (t = this._time), te(this, Yt(this, t));
          }),
          (s.previousLabel = function (t) {
            return void 0 === t && (t = this._time), te(this, Yt(this, t), 1);
          }),
          (s.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + y);
          }),
          (s.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, s = this.labels; n; )
              n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
            if (e) for (i in s) s[i] >= r && (s[i] += t);
            return Tt(this);
          }),
          (s.invalidate = function () {
            var t = this._first;
            for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
            return r.prototype.invalidate.call(this);
          }),
          (s.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Tt(this)
            );
          }),
          (s.totalDuration = function (t) {
            var e,
              r,
              i,
              s = 0,
              o = this,
              a = o._last,
              l = _;
            if (arguments.length)
              return o.timeScale(
                (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                  (o.reversed() ? -t : t)
              );
            if (o._dirty) {
              for (i = o.parent; a; )
                (e = a._prev),
                  a._dirty && a.totalDuration(),
                  (r = a._start) > l && o._sort && a._ts && !o._lock
                    ? ((o._lock = 1), (Pt(o, a, r - a._delay, 1)._lock = 0))
                    : (l = r),
                  r < 0 &&
                    a._ts &&
                    ((s -= r),
                    ((!i && !o._dp) || (i && i.smoothChildTiming)) &&
                      ((o._start += r / o._ts),
                      (o._time -= r),
                      (o._tTime -= r)),
                    o.shiftChildren(-r, !1, -Infinity),
                    (l = 0)),
                  a._end > s && a._ts && (s = a._end),
                  (a = e);
              Rt(o, o === n && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
            }
            return o._tDur;
          }),
          (i.updateRoot = function (t) {
            if ((n._ts && (ft(n, Et(t, n)), (u = de.frame)), de.frame >= et)) {
              et += v.autoSleep || 120;
              var e = n._first;
              if ((!e || !e._ts) && v.autoSleep && de._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || de.sleep();
              }
            }
          }),
          i
        );
      })(Ce);
      mt(Ee.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Se,
        De = function (t, e, r, i, n, s, o) {
          var a,
            l,
            u,
            h,
            c,
            f,
            d,
            p,
            m = new Qe(this._pt, t, e, 0, 1, Ue, null, n),
            v = 0,
            g = 0;
          for (
            m.b = r,
              m.e = i,
              r += "",
              (d = ~(i += "").indexOf("random(")) && (i = Zt(i)),
              s && (s((p = [r, i]), t, e), (r = p[0]), (i = p[1])),
              l = r.match(Y) || [];
            (a = Y.exec(i));

          )
            (h = a[0]),
              (c = i.substring(v, a.index)),
              u ? (u = (u + 1) % 5) : "rgba(" === c.substr(-5) && (u = 1),
              h !== l[g++] &&
                ((f = parseFloat(l[g - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: c || 1 === g ? c : ",",
                  s: f,
                  c:
                    "=" === h.charAt(1)
                      ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1)
                      : parseFloat(h) - f,
                  m: u && u < 4 ? Math.round : 0,
                }),
                (v = Y.lastIndex));
          return (
            (m.c = v < i.length ? i.substring(v, i.length) : ""),
            (m.fp = o),
            (N.test(i) || d) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        Ae = function (t, e, r, i, n, s, o, a, l) {
          C(i) && (i = i(n || 0, t, s));
          var u,
            h = t[e],
            c =
              "get" !== r
                ? r
                : C(h)
                ? l
                  ? t[
                      e.indexOf("set") || !C(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](l)
                  : t[e]()
                : h,
            f = C(h) ? (l ? Ne : Ye) : Be;
          if (
            (O(i) &&
              (~i.indexOf("random(") && (i = Zt(i)),
              "=" === i.charAt(1) &&
                (i =
                  parseFloat(c) +
                  parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
                  (jt(c) || 0))),
            c !== i)
          )
            return isNaN(c * i)
              ? (!h && !(e in t) && q(e, i),
                De.call(this, t, e, c, i, f, a || v.stringFilter, l))
              : ((u = new Qe(
                  this._pt,
                  t,
                  e,
                  +c || 0,
                  i - (c || 0),
                  "boolean" == typeof h ? We : Ke,
                  0,
                  f
                )),
                l && (u.fp = l),
                o && u.modifier(o, this, t),
                (this._pt = u));
        },
        Pe = function (t, e, r, i, n, s) {
          var o, a, l, u;
          if (
            J[t] &&
            !1 !==
              (o = new J[t]()).init(
                n,
                o.rawVars
                  ? e[t]
                  : (function (t, e, r, i, n) {
                      if (
                        (C(t) && (t = Fe(t, n, e, r, i)),
                        !D(t) || (t.style && t.nodeType) || z(t) || F(t))
                      )
                        return O(t) ? Fe(t, n, e, r, i) : t;
                      var s,
                        o = {};
                      for (s in t) o[s] = Fe(t[s], n, e, r, i);
                      return o;
                    })(e[t], i, n, s, r),
                r,
                i,
                s
              ) &&
            ((r._pt = a =
              new Qe(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
            r !== h)
          )
            for (
              l = r._ptLookup[r._targets.indexOf(n)], u = o._props.length;
              u--;

            )
              l[o._props[u]] = a;
          return o;
        },
        Le = function t(e, r) {
          var s,
            o,
            a,
            l,
            u,
            h,
            c,
            f,
            d,
            p,
            m,
            v,
            _,
            b = e.vars,
            w = b.ease,
            x = b.startAt,
            T = b.immediateRender,
            M = b.lazy,
            k = b.onUpdate,
            O = b.onUpdateParams,
            C = b.callbackScope,
            E = b.runBackwards,
            S = b.yoyoEase,
            D = b.keyframes,
            P = b.autoRevert,
            L = e._dur,
            F = e._startAt,
            z = e._targets,
            R = e.parent,
            I = R && "nested" === R.data ? R.parent._targets : z,
            B = "auto" === e._overwrite && !i,
            Y = e.timeline;
          if (
            (Y && (!D || !w) && (w = "none"),
            (e._ease = we(w, g.ease)),
            (e._yEase = S ? ye(we(!0 === S ? w : S, g.ease)) : 0),
            S &&
              e._yoyo &&
              !e._repeat &&
              ((S = e._yEase), (e._yEase = e._ease), (e._ease = S)),
            !Y)
          ) {
            if (
              ((v = (f = z[0] ? st(z[0]).harness : 0) && b[f.prop]),
              (s = yt(b, G)),
              F && F.render(-1, !0).kill(),
              x)
            )
              if (
                (xt(
                  (e._startAt = Ie.set(
                    z,
                    mt(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: R,
                        immediateRender: !0,
                        lazy: A(M),
                        startAt: null,
                        delay: 0,
                        onUpdate: k,
                        onUpdateParams: O,
                        callbackScope: C,
                        stagger: 0,
                      },
                      x
                    )
                  ))
                ),
                T)
              ) {
                if (r > 0) P || (e._startAt = 0);
                else if (L && !(r < 0 && F)) return void (r && (e._zTime = r));
              } else !1 === P && (e._startAt = 0);
            else if (E && L)
              if (F) !P && (e._startAt = 0);
              else if (
                (r && (T = !1),
                (a = mt(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: T && A(M),
                    immediateRender: T,
                    stagger: 0,
                    parent: R,
                  },
                  s
                )),
                v && (a[f.prop] = v),
                xt((e._startAt = Ie.set(z, a))),
                T)
              ) {
                if (!r) return;
              } else t(e._startAt, y);
            for (
              e._pt = 0, M = (L && A(M)) || (M && !L), o = 0;
              o < z.length;
              o++
            ) {
              if (
                ((c = (u = z[o])._gsap || nt(z)[o]._gsap),
                (e._ptLookup[o] = p = {}),
                Z[c.id] && Q.length && ct(),
                (m = I === z ? o : I.indexOf(u)),
                f &&
                  !1 !== (d = new f()).init(u, v || s, e, m, I) &&
                  ((e._pt = l =
                    new Qe(e._pt, u, d.name, 0, 1, d.render, d, 0, d.priority)),
                  d._props.forEach(function (t) {
                    p[t] = l;
                  }),
                  d.priority && (h = 1)),
                !f || v)
              )
                for (a in s)
                  J[a] && (d = Pe(a, s, e, m, u, I))
                    ? d.priority && (h = 1)
                    : (p[a] = l =
                        Ae.call(e, u, a, "get", s[a], m, I, 0, b.stringFilter));
              e._op && e._op[o] && e.kill(u, e._op[o]),
                B &&
                  e._pt &&
                  ((Se = e),
                  n.killTweensOf(u, p, e.globalTime(0)),
                  (_ = !e.parent),
                  (Se = 0)),
                e._pt && M && (Z[c.id] = 1);
            }
            h && Ge(e), e._onInit && e._onInit(e);
          }
          (e._from = !Y && !!b.runBackwards),
            (e._onUpdate = k),
            (e._initted = (!e._op || e._pt) && !_);
        },
        Fe = function (t, e, r, i, n) {
          return C(t)
            ? t.call(e, r, i, n)
            : O(t) && ~t.indexOf("random(")
            ? Zt(t)
            : t;
        },
        ze = it + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Re = (ze + ",id,stagger,delay,duration,paused,scrollTrigger").split(
          ","
        ),
        Ie = (function (r) {
          function s(e, s, o, a) {
            var l;
            "number" == typeof s && ((o.duration = s), (s = o), (o = null));
            var u,
              h,
              c,
              f,
              d,
              p,
              m,
              g,
              _ = (l = r.call(this, a ? s : bt(s), o) || this).vars,
              y = _.duration,
              b = _.delay,
              w = _.immediateRender,
              x = _.stagger,
              T = _.overwrite,
              M = _.keyframes,
              k = _.defaults,
              O = _.scrollTrigger,
              C = _.yoyoEase,
              S = l.parent,
              P = (z(e) || F(e) ? E(e[0]) : "length" in s) ? [e] : Ut(e);
            if (
              ((l._targets = P.length
                ? nt(P)
                : V(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !v.nullTargetWarn
                  ) || []),
              (l._ptLookup = []),
              (l._overwrite = T),
              M || x || L(y) || L(b))
            ) {
              if (
                ((s = l.vars),
                (u = l.timeline =
                  new Ee({ data: "nested", defaults: k || {} })).kill(),
                (u.parent = u._dp = t(l)),
                (u._start = 0),
                M)
              )
                mt(u.vars.defaults, { ease: "none" }),
                  M.forEach(function (t) {
                    return u.to(P, t, ">");
                  });
              else {
                if (((f = P.length), (m = x ? Vt(x) : $), D(x)))
                  for (d in x) ~ze.indexOf(d) && (g || (g = {}), (g[d] = x[d]));
                for (h = 0; h < f; h++) {
                  for (d in ((c = {}), s)) Re.indexOf(d) < 0 && (c[d] = s[d]);
                  (c.stagger = 0),
                    C && (c.yoyoEase = C),
                    g && gt(c, g),
                    (p = P[h]),
                    (c.duration = +Fe(y, t(l), h, p, P)),
                    (c.delay = (+Fe(b, t(l), h, p, P) || 0) - l._delay),
                    !x &&
                      1 === f &&
                      c.delay &&
                      ((l._delay = b = c.delay),
                      (l._start += b),
                      (c.delay = 0)),
                    u.to(p, c, m(h, p, P));
                }
                u.duration() ? (y = b = 0) : (l.timeline = 0);
              }
              y || l.duration((y = u.duration()));
            } else l.timeline = 0;
            return (
              !0 !== T || i || ((Se = t(l)), n.killTweensOf(P), (Se = 0)),
              S && At(S, t(l)),
              (w ||
                (!y &&
                  !M &&
                  l._start === lt(S._time) &&
                  A(w) &&
                  kt(t(l)) &&
                  "nested" !== S.data)) &&
                ((l._tTime = -1e-8), l.render(Math.max(0, -b))),
              O && Lt(t(l), O),
              l
            );
          }
          e(s, r);
          var o = s.prototype;
          return (
            (o.render = function (t, e, r) {
              var i,
                n,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                f = this._time,
                d = this._tDur,
                p = this._dur,
                m = t > d - y && t >= 0 ? d : t < y ? 0 : t;
              if (p) {
                if (
                  m !== this._tTime ||
                  !t ||
                  r ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 != t < 0)
                ) {
                  if (((i = m), (h = this.timeline), this._repeat)) {
                    if (((o = p + this._rDelay), this._repeat < -1 && t < 0))
                      return this.totalTime(100 * o + t, e, r);
                    if (
                      ((i = lt(m % o)),
                      m === d
                        ? ((s = this._repeat), (i = p))
                        : ((s = ~~(m / o)) && s === m / o && ((i = p), s--),
                          i > p && (i = p)),
                      (l = this._yoyo && 1 & s) &&
                        ((c = this._yEase), (i = p - i)),
                      (a = Ct(this._tTime, o)),
                      i === f && !r && this._initted)
                    )
                      return this;
                    s !== a &&
                      (h && this._yEase && be(h, l),
                      !this.vars.repeatRefresh ||
                        l ||
                        this._lock ||
                        ((this._lock = r = 1),
                        (this.render(lt(o * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Ft(this, t < 0 ? t : i, r, e))
                      return (this._tTime = 0), this;
                    if (p !== this._dur) return this.render(t, e, r);
                  }
                  for (
                    this._tTime = m,
                      this._time = i,
                      !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                      this.ratio = u = (c || this._ease)(i / p),
                      this._from && (this.ratio = u = 1 - u),
                      i && !f && !e && ee(this, "onStart"),
                      n = this._pt;
                    n;

                  )
                    n.r(u, n.d), (n = n._next);
                  (h &&
                    h.render(t < 0 ? t : !i && l ? -1e-8 : h._dur * u, e, r)) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                      ee(this, "onUpdate")),
                    this._repeat &&
                      s !== a &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      ee(this, "onRepeat"),
                    (m !== this._tDur && m) ||
                      this._tTime !== m ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        this._startAt.render(t, !0, !0),
                      (t || !p) &&
                        ((m === this._tDur && this._ts > 0) ||
                          (!m && this._ts < 0)) &&
                        xt(this, 1),
                      e ||
                        (t < 0 && !f) ||
                        (!m && !f) ||
                        (ee(
                          this,
                          m === d ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(m < d && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else
                !(function (t, e, r, i) {
                  var n,
                    s,
                    o,
                    a = t.ratio,
                    l =
                      e < 0 ||
                      (!e &&
                        ((!t._start && zt(t)) ||
                          ((t._ts < 0 || t._dp._ts < 0) &&
                            "isFromStart" !== t.data &&
                            "isStart" !== t.data)))
                        ? 0
                        : 1,
                    u = t._rDelay,
                    h = 0;
                  if (
                    (u &&
                      t._repeat &&
                      ((h = Xt(0, t._tDur, e)),
                      (s = Ct(h, u)),
                      (o = Ct(t._tTime, u)),
                      t._yoyo && 1 & s && (l = 1 - l),
                      s !== o &&
                        ((a = 1 - l),
                        t.vars.repeatRefresh && t._initted && t.invalidate())),
                    l !== a || i || t._zTime === y || (!e && t._zTime))
                  ) {
                    if (!t._initted && Ft(t, e, i, r)) return;
                    for (
                      o = t._zTime,
                        t._zTime = e || (r ? y : 0),
                        r || (r = e && !o),
                        t.ratio = l,
                        t._from && (l = 1 - l),
                        t._time = 0,
                        t._tTime = h,
                        n = t._pt;
                      n;

                    )
                      n.r(l, n.d), (n = n._next);
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                      t._onUpdate && !r && ee(t, "onUpdate"),
                      h && t._repeat && !r && t.parent && ee(t, "onRepeat"),
                      (e >= t._tDur || e < 0) &&
                        t.ratio === l &&
                        (l && xt(t, 1),
                        r ||
                          (ee(t, l ? "onComplete" : "onReverseComplete", !0),
                          t._prom && t._prom()));
                  } else t._zTime || (t._zTime = e);
                })(this, t, e, r);
              return this;
            }),
            (o.targets = function () {
              return this._targets;
            }),
            (o.invalidate = function () {
              return (
                (this._pt =
                  this._op =
                  this._startAt =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                r.prototype.invalidate.call(this)
              );
            }),
            (o.kill = function (t, e) {
              if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
                return (
                  (this._lazy = this._pt = 0), this.parent ? re(this) : this
                );
              if (this.timeline) {
                var r = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    Se && !0 !== Se.vars.overwrite
                  )._first || re(this),
                  this.parent &&
                    r !== this.timeline.totalDuration() &&
                    Rt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                  this
                );
              }
              var i,
                n,
                s,
                o,
                a,
                l,
                u,
                h = this._targets,
                c = t ? Ut(t) : h,
                f = this._ptLookup,
                d = this._pt;
              if (
                (!e || "all" === e) &&
                (function (t, e) {
                  for (
                    var r = t.length, i = r === e.length;
                    i && r-- && t[r] === e[r];

                  );
                  return r < 0;
                })(h, c)
              )
                return "all" === e && (this._pt = 0), re(this);
              for (
                i = this._op = this._op || [],
                  "all" !== e &&
                    (O(e) &&
                      ((a = {}),
                      at(e, function (t) {
                        return (a[t] = 1);
                      }),
                      (e = a)),
                    (e = (function (t, e) {
                      var r,
                        i,
                        n,
                        s,
                        o = t[0] ? st(t[0]).harness : 0,
                        a = o && o.aliases;
                      if (!a) return e;
                      for (i in ((r = gt({}, e)), a))
                        if ((i in r))
                          for (n = (s = a[i].split(",")).length; n--; )
                            r[s[n]] = r[i];
                      return r;
                    })(h, e))),
                  u = h.length;
                u--;

              )
                if (~c.indexOf(h[u]))
                  for (a in ((n = f[u]),
                  "all" === e
                    ? ((i[u] = e), (o = n), (s = {}))
                    : ((s = i[u] = i[u] || {}), (o = e)),
                  o))
                    (l = n && n[a]) &&
                      (("kill" in l.d && !0 !== l.d.kill(a)) ||
                        wt(this, l, "_pt"),
                      delete n[a]),
                      "all" !== s && (s[a] = 1);
              return this._initted && !this._pt && d && re(this), this;
            }),
            (s.to = function (t, e) {
              return new s(t, e, arguments[2]);
            }),
            (s.from = function (t, e) {
              return new s(t, ht(arguments, 1));
            }),
            (s.delayedCall = function (t, e, r, i) {
              return new s(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i,
              });
            }),
            (s.fromTo = function (t, e, r) {
              return new s(t, ht(arguments, 2));
            }),
            (s.set = function (t, e) {
              return (
                (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e)
              );
            }),
            (s.killTweensOf = function (t, e, r) {
              return n.killTweensOf(t, e, r);
            }),
            s
          );
        })(Ce);
      mt(Ie.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        at("staggerTo,staggerFrom,staggerFromTo", function (t) {
          Ie[t] = function () {
            var e = new Ee(),
              r = Kt.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var Be = function (t, e, r) {
          return (t[e] = r);
        },
        Ye = function (t, e, r) {
          return t[e](r);
        },
        Ne = function (t, e, r, i) {
          return t[e](i.fp, r);
        },
        Xe = function (t, e, r) {
          return t.setAttribute(e, r);
        },
        je = function (t, e) {
          return C(t[e]) ? Ye : S(t[e]) && t.setAttribute ? Xe : Be;
        },
        Ke = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
        },
        We = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        Ue = function (t, e) {
          var r = e._pt,
            i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
            for (; r; )
              (i =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                i),
                (r = r._next);
            i += e.c;
          }
          e.set(e.t, e.p, i, e);
        },
        qe = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        Ve = function (t, e, r, i) {
          for (var n, s = this._pt; s; )
            (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
        },
        He = function (t) {
          for (var e, r, i = this._pt; i; )
            (r = i._next),
              (i.p === t && !i.op) || i.op === t
                ? wt(this, i, "_pt")
                : i.dep || (e = 1),
              (i = r);
          return !e;
        },
        $e = function (t, e, r, i) {
          i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
        },
        Ge = function (t) {
          for (var e, r, i, n, s = t._pt; s; ) {
            for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
            (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
              (s._next = r) ? (r._prev = s) : (n = s),
              (s = e);
          }
          t._pt = i;
        },
        Qe = (function () {
          function t(t, e, r, i, n, s, o, a, l) {
            (this.t = e),
              (this.s = i),
              (this.c = n),
              (this.p = r),
              (this.r = s || Ke),
              (this.d = o || this),
              (this.set = a || Be),
              (this.pr = l || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = $e),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
      at(
        it +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (G[t] = 1);
        }
      ),
        (K.TweenMax = K.TweenLite = Ie),
        (K.TimelineLite = K.TimelineMax = Ee),
        (n = new Ee({
          sortChildren: !1,
          defaults: g,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (v.stringFilter = fe);
      var Ze = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          e.forEach(function (t) {
            return ie(t);
          });
        },
        timeline: function (t) {
          return new Ee(t);
        },
        getTweensOf: function (t, e) {
          return n.getTweensOf(t, e);
        },
        getProperty: function (t, e, r, i) {
          O(t) && (t = Ut(t)[0]);
          var n = st(t || {}).get,
            s = r ? pt : dt;
          return (
            "native" === r && (r = ""),
            t
              ? e
                ? s(((J[e] && J[e].get) || n)(t, e, r, i))
                : function (e, r, i) {
                    return s(((J[e] && J[e].get) || n)(t, e, r, i));
                  }
              : t
          );
        },
        quickSetter: function (t, e, r) {
          if ((t = Ut(t)).length > 1) {
            var i = t.map(function (t) {
                return er.quickSetter(t, e, r);
              }),
              n = i.length;
            return function (t) {
              for (var e = n; e--; ) i[e](t);
            };
          }
          t = t[0] || {};
          var s = J[e],
            o = st(t),
            a = (o.harness && (o.harness.aliases || {})[e]) || e,
            l = s
              ? function (e) {
                  var i = new s();
                  (h._pt = 0),
                    i.init(t, r ? e + r : e, h, 0, [t]),
                    i.render(1, i),
                    h._pt && qe(1, h);
                }
              : o.set(t, a);
          return s
            ? l
            : function (e) {
                return l(t, a, r ? e + r : e, o, 1);
              };
        },
        isTweening: function (t) {
          return n.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = we(t.ease, g.ease)), _t(g, t || {});
        },
        config: function (t) {
          return _t(v, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            i = t.plugins,
            n = t.defaults,
            s = t.extendTimeline;
          (i || "").split(",").forEach(function (t) {
            return (
              t && !J[t] && !K[t] && V(e + " effect requires " + t + " plugin.")
            );
          }),
            (tt[e] = function (t, e, i) {
              return r(Ut(t), mt(e || {}, n), i);
            }),
            s &&
              (Ee.prototype[e] = function (t, r, i) {
                return this.add(tt[e](t, D(r) ? r : (i = r) && {}, this), i);
              });
        },
        registerEase: function (t, e) {
          me[t] = we(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? we(t, e) : me;
        },
        getById: function (t) {
          return n.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r,
            i,
            s = new Ee(t);
          for (
            s.smoothChildTiming = A(t.smoothChildTiming),
              n.remove(s),
              s._dp = 0,
              s._time = s._tTime = n._time,
              r = n._first;
            r;

          )
            (i = r._next),
              (!e &&
                !r._dur &&
                r instanceof Ie &&
                r.vars.onComplete === r._targets[0]) ||
                Pt(s, r, r._start - r._delay),
              (r = i);
          return Pt(n, s, 0), s;
        },
        utils: {
          wrap: function t(e, r, i) {
            var n = r - e;
            return z(e)
              ? Qt(e, t(0, e.length), r)
              : Nt(i, function (t) {
                  return ((n + ((t - e) % n)) % n) + e;
                });
          },
          wrapYoyo: function t(e, r, i) {
            var n = r - e,
              s = 2 * n;
            return z(e)
              ? Qt(e, t(0, e.length - 1), r)
              : Nt(i, function (t) {
                  return (
                    e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t)
                  );
                });
          },
          distribute: Vt,
          random: Gt,
          snap: $t,
          normalize: function (t, e, r) {
            return Jt(t, e, 0, 1, r);
          },
          getUnit: jt,
          clamp: function (t, e, r) {
            return Nt(r, function (r) {
              return Xt(t, e, r);
            });
          },
          splitColor: ae,
          toArray: Ut,
          mapRange: Jt,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || jt(r));
            };
          },
          interpolate: function t(e, r, i, n) {
            var s = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!s) {
              var o,
                a,
                l,
                u,
                h,
                c = O(e),
                f = {};
              if ((!0 === i && (n = 1) && (i = null), c))
                (e = { p: e }), (r = { p: r });
              else if (z(e) && !z(r)) {
                for (l = [], u = e.length, h = u - 2, a = 1; a < u; a++)
                  l.push(t(e[a - 1], e[a]));
                u--,
                  (s = function (t) {
                    t *= u;
                    var e = Math.min(h, ~~t);
                    return l[e](t - e);
                  }),
                  (i = r);
              } else n || (e = gt(z(e) ? [] : {}, e));
              if (!l) {
                for (o in r) Ae.call(f, e, o, "get", r[o]);
                s = function (t) {
                  return qe(t, f) || (c ? e.p : e);
                };
              }
            }
            return Nt(i, s);
          },
          shuffle: qt,
        },
        install: U,
        effects: tt,
        ticker: de,
        updateRoot: Ee.updateRoot,
        plugins: J,
        globalTimeline: n,
        core: {
          PropTween: Qe,
          globals: H,
          Tween: Ie,
          Timeline: Ee,
          Animation: Ce,
          getCache: st,
          _removeLinkedListItem: wt,
          suppressOverwrites: function (t) {
            return (i = t);
          },
        },
      };
      at("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (Ze[t] = Ie[t]);
      }),
        de.add(Ee.updateRoot),
        (h = Ze.to({}, { duration: 0 }));
      var Je = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
          return r;
        },
        tr = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, i) {
              i._onInit = function (t) {
                var i, n;
                if (
                  (O(r) &&
                    ((i = {}),
                    at(r, function (t) {
                      return (i[t] = 1);
                    }),
                    (r = i)),
                  e)
                ) {
                  for (n in ((i = {}), r)) i[n] = e(r[n]);
                  r = i;
                }
                !(function (t, e) {
                  var r,
                    i,
                    n,
                    s = t._targets;
                  for (r in e)
                    for (i = s.length; i--; )
                      (n = t._ptLookup[i][r]) &&
                        (n = n.d) &&
                        (n._pt && (n = Je(n, r)),
                        n && n.modifier && n.modifier(e[r], t, s[i], r));
                })(t, r);
              };
            },
          };
        },
        er =
          Ze.registerPlugin(
            {
              name: "attr",
              init: function (t, e, r, i, n) {
                var s, o;
                for (s in e)
                  (o = this.add(
                    t,
                    "setAttribute",
                    (t.getAttribute(s) || 0) + "",
                    e[s],
                    i,
                    n,
                    0,
                    0,
                    s
                  )) && (o.op = s),
                    this._props.push(s);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
              },
            },
            tr("roundProps", Ht),
            tr("modifiers"),
            tr("snap", $t)
          ) || Ze;
      (Ie.version = Ee.version = er.version = "3.6.1"),
        (l = 1),
        P() && pe(),
        me.Power0,
        me.Power1,
        me.Power2,
        me.Power3,
        me.Power4,
        me.Linear,
        me.Quad,
        me.Cubic,
        me.Quart,
        me.Quint,
        me.Strong,
        me.Elastic,
        me.Back,
        me.SteppedEase,
        me.Bounce,
        me.Sine,
        me.Expo,
        me.Circ;
      var rr,
        ir,
        nr,
        sr,
        or,
        ar,
        lr,
        ur = {},
        hr = 180 / Math.PI,
        cr = Math.PI / 180,
        fr = Math.atan2,
        dr = /([A-Z])/g,
        pr = /(?:left|right|width|margin|padding|x)/i,
        mr = /[\s,\(]\S/,
        vr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        gr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        _r = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        yr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        br = function (t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        wr = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        xr = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        Tr = function (t, e, r) {
          return (t.style[e] = r);
        },
        Mr = function (t, e, r) {
          return t.style.setProperty(e, r);
        },
        kr = function (t, e, r) {
          return (t._gsap[e] = r);
        },
        Or = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r);
        },
        Cr = function (t, e, r, i, n) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
        },
        Er = function (t, e, r, i, n) {
          var s = t._gsap;
          (s[e] = r), s.renderTransform(n, s);
        },
        Sr = "transform",
        Dr = Sr + "Origin",
        Ar = function (t, e) {
          var r = ir.createElementNS
            ? ir.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : ir.createElement(t);
          return r.style ? r : ir.createElement(t);
        },
        Pr = function t(e, r, i) {
          var n = getComputedStyle(e);
          return (
            n[r] ||
            n.getPropertyValue(r.replace(dr, "-$1").toLowerCase()) ||
            n.getPropertyValue(r) ||
            (!i && t(e, Fr(r) || r, 1)) ||
            ""
          );
        },
        Lr = "O,Moz,ms,Ms,Webkit".split(","),
        Fr = function (t, e, r) {
          var i = (e || or).style,
            n = 5;
          if (t in i && !r) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            n-- && !(Lr[n] + t in i);

          );
          return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Lr[n] : "") + t;
        },
        zr = function () {
          "undefined" != typeof window &&
            window.document &&
            ((rr = window),
            (ir = rr.document),
            (nr = ir.documentElement),
            (or = Ar("div") || { style: {} }),
            Ar("div"),
            (Sr = Fr(Sr)),
            (Dr = Sr + "Origin"),
            (or.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (lr = !!Fr("perspective")),
            (sr = 1));
        },
        Rr = function t(e) {
          var r,
            i = Ar(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            n = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText;
          if (
            (nr.appendChild(i),
            i.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
            nr.removeChild(i),
            (this.style.cssText = o),
            r
          );
        },
        Ir = function (t, e) {
          for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
        },
        Br = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (r) {
            e = Rr.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === Rr ||
              (e = Rr.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +Ir(t, ["x", "cx", "x1"]) || 0,
                  y: +Ir(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Yr = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Br(t));
        },
        Nr = function (t, e) {
          if (e) {
            var r = t.style;
            e in ur && e !== Dr && (e = Sr),
              r.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  r.removeProperty(e.replace(dr, "-$1").toLowerCase()))
                : r.removeAttribute(e);
          }
        },
        Xr = function (t, e, r, i, n, s) {
          var o = new Qe(t._pt, e, r, 0, 1, s ? xr : wr);
          return (t._pt = o), (o.b = i), (o.e = n), t._props.push(r), o;
        },
        jr = { deg: 1, rad: 1, turn: 1 },
        Kr = function t(e, r, i, n) {
          var s,
            o,
            a,
            l,
            u = parseFloat(i) || 0,
            h = (i + "").trim().substr((u + "").length) || "px",
            c = or.style,
            f = pr.test(r),
            d = "svg" === e.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            v = "px" === n,
            g = "%" === n;
          return n === h || !u || jr[n] || jr[h]
            ? u
            : ("px" !== h && !v && (u = t(e, r, i, "px")),
              (l = e.getCTM && Yr(e)),
              (!g && "%" !== h) || (!ur[r] && !~r.indexOf("adius"))
                ? ((c[f ? "width" : "height"] = m + (v ? h : n)),
                  (o =
                    ~r.indexOf("adius") || ("em" === n && e.appendChild && !d)
                      ? e
                      : e.parentNode),
                  l && (o = (e.ownerSVGElement || {}).parentNode),
                  (o && o !== ir && o.appendChild) || (o = ir.body),
                  (a = o._gsap) && g && a.width && f && a.time === de.time
                    ? lt((u / a.width) * m)
                    : ((g || "%" === h) && (c.position = Pr(e, "position")),
                      o === e && (c.position = "static"),
                      o.appendChild(or),
                      (s = or[p]),
                      o.removeChild(or),
                      (c.position = "absolute"),
                      f &&
                        g &&
                        (((a = st(o)).time = de.time), (a.width = o[p])),
                      lt(v ? (s * u) / m : s && u ? (m / s) * u : 0)))
                : ((s = l ? e.getBBox()[f ? "width" : "height"] : e[p]),
                  lt(g ? (u / s) * m : (u / 100) * s)));
        },
        Wr = function (t, e, r, i) {
          var n;
          return (
            sr || zr(),
            e in vr &&
              "transform" !== e &&
              ~(e = vr[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            ur[e] && "transform" !== e
              ? ((n = ei(t, i)),
                (n =
                  "transformOrigin" !== e
                    ? n[e]
                    : ri(Pr(t, Dr)) + " " + n.zOrigin + "px"))
              : (!(n = t.style[e]) ||
                  "auto" === n ||
                  i ||
                  ~(n + "").indexOf("calc(")) &&
                (n =
                  (Hr[e] && Hr[e](t, e, r)) ||
                  Pr(t, e) ||
                  ot(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            r && !~(n + "").trim().indexOf(" ") ? Kr(t, e, n, r) + r : n
          );
        },
        Ur = function (t, e, r, i) {
          if (!r || "none" === r) {
            var n = Fr(e, t, 1),
              s = n && Pr(t, n, 1);
            s && s !== r
              ? ((e = n), (r = s))
              : "borderColor" === e && (r = Pr(t, "borderTopColor"));
          }
          var o,
            a,
            l,
            u,
            h,
            c,
            f,
            d,
            p,
            m,
            g,
            _,
            y = new Qe(this._pt, t.style, e, 0, 1, Ue),
            b = 0,
            w = 0;
          if (
            ((y.b = r),
            (y.e = i),
            (r += ""),
            "auto" == (i += "") &&
              ((t.style[e] = i), (i = Pr(t, e) || i), (t.style[e] = r)),
            fe((o = [r, i])),
            (i = o[1]),
            (l = (r = o[0]).match(B) || []),
            (i.match(B) || []).length)
          ) {
            for (; (a = B.exec(i)); )
              (f = a[0]),
                (p = i.substring(b, a.index)),
                h
                  ? (h = (h + 1) % 5)
                  : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                    (h = 1),
                f !== (c = l[w++] || "") &&
                  ((u = parseFloat(c) || 0),
                  (g = c.substr((u + "").length)),
                  (_ = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) &&
                    (f = f.substr(2)),
                  (d = parseFloat(f)),
                  (m = f.substr((d + "").length)),
                  (b = B.lastIndex - m.length),
                  m ||
                    ((m = m || v.units[e] || g),
                    b === i.length && ((i += m), (y.e += m))),
                  g !== m && (u = Kr(t, e, c, m) || 0),
                  (y._pt = {
                    _next: y._pt,
                    p: p || 1 === w ? p : ",",
                    s: u,
                    c: _ ? _ * d : d - u,
                    m: (h && h < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            y.c = b < i.length ? i.substring(b, i.length) : "";
          } else y.r = "display" === e && "none" === i ? xr : wr;
          return N.test(i) && (y.e = 0), (this._pt = y), y;
        },
        qr = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        Vr = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              i,
              n,
              s = e.t,
              o = s.style,
              a = e.u,
              l = s._gsap;
            if ("all" === a || !0 === a) (o.cssText = ""), (i = 1);
            else
              for (n = (a = a.split(",")).length; --n > -1; )
                (r = a[n]),
                  ur[r] && ((i = 1), (r = "transformOrigin" === r ? Dr : Sr)),
                  Nr(s, r);
            i &&
              (Nr(s, Sr),
              l &&
                (l.svg && s.removeAttribute("transform"),
                ei(s, 1),
                (l.uncache = 1)));
          }
        },
        Hr = {
          clearProps: function (t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
              var s = (t._pt = new Qe(t._pt, e, r, 0, 0, Vr));
              return (
                (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1
              );
            }
          },
        },
        $r = [1, 0, 0, 1, 0, 0],
        Gr = {},
        Qr = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        Zr = function (t) {
          var e = Pr(t, Sr);
          return Qr(e) ? $r : e.substr(7).match(I).map(lt);
        },
        Jr = function (t, e) {
          var r,
            i,
            n,
            s,
            o = t._gsap || st(t),
            a = t.style,
            l = Zr(t);
          return o.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (l = [
                (n = t.transform.baseVal.consolidate().matrix).a,
                n.b,
                n.c,
                n.d,
                n.e,
                n.f,
              ]).join(",")
              ? $r
              : l
            : (l !== $r ||
                t.offsetParent ||
                t === nr ||
                o.svg ||
                ((n = a.display),
                (a.display = "block"),
                ((r = t.parentNode) && t.offsetParent) ||
                  ((s = 1), (i = t.nextSibling), nr.appendChild(t)),
                (l = Zr(t)),
                n ? (a.display = n) : Nr(t, "display"),
                s &&
                  (i
                    ? r.insertBefore(t, i)
                    : r
                    ? r.appendChild(t)
                    : nr.removeChild(t))),
              e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        },
        ti = function (t, e, r, i, n, s) {
          var o,
            a,
            l,
            u = t._gsap,
            h = n || Jr(t, !0),
            c = u.xOrigin || 0,
            f = u.yOrigin || 0,
            d = u.xOffset || 0,
            p = u.yOffset || 0,
            m = h[0],
            v = h[1],
            g = h[2],
            _ = h[3],
            y = h[4],
            b = h[5],
            w = e.split(" "),
            x = parseFloat(w[0]) || 0,
            T = parseFloat(w[1]) || 0;
          r
            ? h !== $r &&
              (a = m * _ - v * g) &&
              ((l = x * (-v / a) + T * (m / a) - (m * b - v * y) / a),
              (x = x * (_ / a) + T * (-g / a) + (g * b - _ * y) / a),
              (T = l))
            : ((x =
                (o = Br(t)).x + (~w[0].indexOf("%") ? (x / 100) * o.width : x)),
              (T =
                o.y +
                (~(w[1] || w[0]).indexOf("%") ? (T / 100) * o.height : T))),
            i || (!1 !== i && u.smooth)
              ? ((y = x - c),
                (b = T - f),
                (u.xOffset = d + (y * m + b * g) - y),
                (u.yOffset = p + (y * v + b * _) - b))
              : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = x),
            (u.yOrigin = T),
            (u.smooth = !!i),
            (u.origin = e),
            (u.originIsAbsolute = !!r),
            (t.style[Dr] = "0px 0px"),
            s &&
              (Xr(s, u, "xOrigin", c, x),
              Xr(s, u, "yOrigin", f, T),
              Xr(s, u, "xOffset", d, u.xOffset),
              Xr(s, u, "yOffset", p, u.yOffset)),
            t.setAttribute("data-svg-origin", x + " " + T);
        },
        ei = function (t, e) {
          var r = t._gsap || new Oe(t);
          if ("x" in r && !e && !r.uncache) return r;
          var i,
            n,
            s,
            o,
            a,
            l,
            u,
            h,
            c,
            f,
            d,
            p,
            m,
            g,
            _,
            y,
            b,
            w,
            x,
            T,
            M,
            k,
            O,
            C,
            E,
            S,
            D,
            A,
            P,
            L,
            F,
            z,
            R = t.style,
            I = r.scaleX < 0,
            B = "px",
            Y = "deg",
            N = Pr(t, Dr) || "0";
          return (
            (i = n = s = l = u = h = c = f = d = 0),
            (o = a = 1),
            (r.svg = !(!t.getCTM || !Yr(t))),
            (g = Jr(t, r.svg)),
            r.svg &&
              ((C = !r.uncache && !e && t.getAttribute("data-svg-origin")),
              ti(t, C || N, !!C || r.originIsAbsolute, !1 !== r.smooth, g)),
            (p = r.xOrigin || 0),
            (m = r.yOrigin || 0),
            g !== $r &&
              ((w = g[0]),
              (x = g[1]),
              (T = g[2]),
              (M = g[3]),
              (i = k = g[4]),
              (n = O = g[5]),
              6 === g.length
                ? ((o = Math.sqrt(w * w + x * x)),
                  (a = Math.sqrt(M * M + T * T)),
                  (l = w || x ? fr(x, w) * hr : 0),
                  (c = T || M ? fr(T, M) * hr + l : 0) &&
                    (a *= Math.abs(Math.cos(c * cr))),
                  r.svg &&
                    ((i -= p - (p * w + m * T)), (n -= m - (p * x + m * M))))
                : ((z = g[6]),
                  (L = g[7]),
                  (D = g[8]),
                  (A = g[9]),
                  (P = g[10]),
                  (F = g[11]),
                  (i = g[12]),
                  (n = g[13]),
                  (s = g[14]),
                  (u = (_ = fr(z, P)) * hr),
                  _ &&
                    ((C = k * (y = Math.cos(-_)) + D * (b = Math.sin(-_))),
                    (E = O * y + A * b),
                    (S = z * y + P * b),
                    (D = k * -b + D * y),
                    (A = O * -b + A * y),
                    (P = z * -b + P * y),
                    (F = L * -b + F * y),
                    (k = C),
                    (O = E),
                    (z = S)),
                  (h = (_ = fr(-T, P)) * hr),
                  _ &&
                    ((y = Math.cos(-_)),
                    (F = M * (b = Math.sin(-_)) + F * y),
                    (w = C = w * y - D * b),
                    (x = E = x * y - A * b),
                    (T = S = T * y - P * b)),
                  (l = (_ = fr(x, w)) * hr),
                  _ &&
                    ((C = w * (y = Math.cos(_)) + x * (b = Math.sin(_))),
                    (E = k * y + O * b),
                    (x = x * y - w * b),
                    (O = O * y - k * b),
                    (w = C),
                    (k = E)),
                  u &&
                    Math.abs(u) + Math.abs(l) > 359.9 &&
                    ((u = l = 0), (h = 180 - h)),
                  (o = lt(Math.sqrt(w * w + x * x + T * T))),
                  (a = lt(Math.sqrt(O * O + z * z))),
                  (_ = fr(k, O)),
                  (c = Math.abs(_) > 2e-4 ? _ * hr : 0),
                  (d = F ? 1 / (F < 0 ? -F : F) : 0)),
              r.svg &&
                ((C = t.getAttribute("transform")),
                (r.forceCSS =
                  t.setAttribute("transform", "") || !Qr(Pr(t, Sr))),
                C && t.setAttribute("transform", C))),
            Math.abs(c) > 90 &&
              Math.abs(c) < 270 &&
              (I
                ? ((o *= -1),
                  (c += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((a *= -1), (c += c <= 0 ? 180 : -180))),
            (r.x =
              i -
              ((r.xPercent =
                i &&
                (r.xPercent ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
                ? (t.offsetWidth * r.xPercent) / 100
                : 0) +
              B),
            (r.y =
              n -
              ((r.yPercent =
                n &&
                (r.yPercent ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-n)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * r.yPercent) / 100
                : 0) +
              B),
            (r.z = s + B),
            (r.scaleX = lt(o)),
            (r.scaleY = lt(a)),
            (r.rotation = lt(l) + Y),
            (r.rotationX = lt(u) + Y),
            (r.rotationY = lt(h) + Y),
            (r.skewX = c + Y),
            (r.skewY = f + Y),
            (r.transformPerspective = d + B),
            (r.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (R[Dr] = ri(N)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = v.force3D),
            (r.renderTransform = r.svg ? ui : lr ? li : ni),
            (r.uncache = 0),
            r
          );
        },
        ri = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        ii = function (t, e, r) {
          var i = jt(e);
          return lt(parseFloat(e) + parseFloat(Kr(t, "x", r + "px", i))) + i;
        },
        ni = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            li(t, e);
        },
        si = "0deg",
        oi = "0px",
        ai = ") ",
        li = function (t, e) {
          var r = e || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            o = r.y,
            a = r.z,
            l = r.rotation,
            u = r.rotationY,
            h = r.rotationX,
            c = r.skewX,
            f = r.skewY,
            d = r.scaleX,
            p = r.scaleY,
            m = r.transformPerspective,
            v = r.force3D,
            g = r.target,
            _ = r.zOrigin,
            y = "",
            b = ("auto" === v && t && 1 !== t) || !0 === v;
          if (_ && (h !== si || u !== si)) {
            var w,
              x = parseFloat(u) * cr,
              T = Math.sin(x),
              M = Math.cos(x);
            (x = parseFloat(h) * cr),
              (w = Math.cos(x)),
              (s = ii(g, s, T * w * -_)),
              (o = ii(g, o, -Math.sin(x) * -_)),
              (a = ii(g, a, M * w * -_ + _));
          }
          m !== oi && (y += "perspective(" + m + ai),
            (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
            (b || s !== oi || o !== oi || a !== oi) &&
              (y +=
                a !== oi || b
                  ? "translate3d(" + s + ", " + o + ", " + a + ") "
                  : "translate(" + s + ", " + o + ai),
            l !== si && (y += "rotate(" + l + ai),
            u !== si && (y += "rotateY(" + u + ai),
            h !== si && (y += "rotateX(" + h + ai),
            (c === si && f === si) || (y += "skew(" + c + ", " + f + ai),
            (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + ai),
            (g.style[Sr] = y || "translate(0, 0)");
        },
        ui = function (t, e) {
          var r,
            i,
            n,
            s,
            o,
            a = e || this,
            l = a.xPercent,
            u = a.yPercent,
            h = a.x,
            c = a.y,
            f = a.rotation,
            d = a.skewX,
            p = a.skewY,
            m = a.scaleX,
            v = a.scaleY,
            g = a.target,
            _ = a.xOrigin,
            y = a.yOrigin,
            b = a.xOffset,
            w = a.yOffset,
            x = a.forceCSS,
            T = parseFloat(h),
            M = parseFloat(c);
          (f = parseFloat(f)),
            (d = parseFloat(d)),
            (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
            f || d
              ? ((f *= cr),
                (d *= cr),
                (r = Math.cos(f) * m),
                (i = Math.sin(f) * m),
                (n = Math.sin(f - d) * -v),
                (s = Math.cos(f - d) * v),
                d &&
                  ((p *= cr),
                  (o = Math.tan(d - p)),
                  (n *= o = Math.sqrt(1 + o * o)),
                  (s *= o),
                  p &&
                    ((o = Math.tan(p)),
                    (r *= o = Math.sqrt(1 + o * o)),
                    (i *= o))),
                (r = lt(r)),
                (i = lt(i)),
                (n = lt(n)),
                (s = lt(s)))
              : ((r = m), (s = v), (i = n = 0)),
            ((T && !~(h + "").indexOf("px")) ||
              (M && !~(c + "").indexOf("px"))) &&
              ((T = Kr(g, "x", h, "px")), (M = Kr(g, "y", c, "px"))),
            (_ || y || b || w) &&
              ((T = lt(T + _ - (_ * r + y * n) + b)),
              (M = lt(M + y - (_ * i + y * s) + w))),
            (l || u) &&
              ((o = g.getBBox()),
              (T = lt(T + (l / 100) * o.width)),
              (M = lt(M + (u / 100) * o.height))),
            (o =
              "matrix(" +
              r +
              "," +
              i +
              "," +
              n +
              "," +
              s +
              "," +
              T +
              "," +
              M +
              ")"),
            g.setAttribute("transform", o),
            x && (g.style[Sr] = o);
        },
        hi = function (t, e, r, i, n, s) {
          var o,
            a,
            l = 360,
            u = O(n),
            h = parseFloat(n) * (u && ~n.indexOf("rad") ? hr : 1),
            c = s ? h * s : h - i,
            f = i + c + "deg";
          return (
            u &&
              ("short" === (o = n.split("_")[1]) &&
                (c %= l) != c % 180 &&
                (c += c < 0 ? l : -360),
              "cw" === o && c < 0
                ? (c = ((c + 36e9) % l) - ~~(c / l) * l)
                : "ccw" === o &&
                  c > 0 &&
                  (c = ((c - 36e9) % l) - ~~(c / l) * l)),
            (t._pt = a = new Qe(t._pt, e, r, i, c, _r)),
            (a.e = f),
            (a.u = "deg"),
            t._props.push(r),
            a
          );
        },
        ci = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        fi = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a,
            l,
            u,
            h = ci({}, r._gsap),
            c = r.style;
          for (n in (h.svg
            ? ((s = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (c[Sr] = e),
              (i = ei(r, 1)),
              Nr(r, Sr),
              r.setAttribute("transform", s))
            : ((s = getComputedStyle(r)[Sr]),
              (c[Sr] = e),
              (i = ei(r, 1)),
              (c[Sr] = s)),
          ur))
            (s = h[n]) !== (o = i[n]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
              ((a = jt(s) !== (u = jt(o)) ? Kr(r, n, s, u) : parseFloat(s)),
              (l = parseFloat(o)),
              (t._pt = new Qe(t._pt, i, n, a, l - a, gr)),
              (t._pt.u = u || 0),
              t._props.push(n));
          ci(i, h);
        };
      at("padding,margin,Width,Radius", function (t, e) {
        var r = "Top",
          i = "Right",
          n = "Bottom",
          s = "Left",
          o = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(
            function (r) {
              return e < 2 ? t + r : "border" + r + t;
            }
          );
        Hr[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
          var s, a;
          if (arguments.length < 4)
            return (
              (s = o.map(function (e) {
                return Wr(t, e, r);
              })),
              5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
            );
          (s = (i + "").split(" ")),
            (a = {}),
            o.forEach(function (t, e) {
              return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
            }),
            t.init(e, a, n);
        };
      });
      var di,
        pi,
        mi = {
          name: "css",
          register: zr,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, i, n) {
            var s,
              o,
              a,
              l,
              u,
              h,
              c,
              f,
              d,
              p,
              m,
              g,
              _,
              y,
              b,
              w,
              x,
              T,
              M,
              k = this._props,
              O = t.style,
              C = r.vars.startAt;
            for (c in (sr || zr(), e))
              if (
                "autoRound" !== c &&
                ((o = e[c]), !J[c] || !Pe(c, e, r, i, t, n))
              )
                if (
                  ((u = typeof o),
                  (h = Hr[c]),
                  "function" === u && (u = typeof (o = o.call(r, i, t, n))),
                  "string" === u && ~o.indexOf("random(") && (o = Zt(o)),
                  h)
                )
                  h(this, t, c, o, r) && (b = 1);
                else if ("--" === c.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
                    (o += ""),
                    (he.lastIndex = 0),
                    he.test(s) || ((f = jt(s)), (d = jt(o))),
                    d ? f !== d && (s = Kr(t, c, s, d) + d) : f && (o += f),
                    this.add(O, "setProperty", s, o, i, n, 0, 0, c);
                else if ("undefined" !== u) {
                  if (
                    (C && c in C
                      ? ((s =
                          "function" == typeof C[c]
                            ? C[c].call(r, i, t, n)
                            : C[c]),
                        c in v.units && !jt(s) && (s += v.units[c]),
                        "=" === (s + "").charAt(1) && (s = Wr(t, c)))
                      : (s = Wr(t, c)),
                    (l = parseFloat(s)),
                    (p =
                      "string" === u && "=" === o.charAt(1)
                        ? +(o.charAt(0) + "1")
                        : 0) && (o = o.substr(2)),
                    (a = parseFloat(o)),
                    c in vr &&
                      ("autoAlpha" === c &&
                        (1 === l &&
                          "hidden" === Wr(t, "visibility") &&
                          a &&
                          (l = 0),
                        Xr(
                          this,
                          O,
                          "visibility",
                          l ? "inherit" : "hidden",
                          a ? "inherit" : "hidden",
                          !a
                        )),
                      "scale" !== c &&
                        "transform" !== c &&
                        ~(c = vr[c]).indexOf(",") &&
                        (c = c.split(",")[0])),
                    (m = c in ur))
                  )
                    if (
                      (g ||
                        (((_ = t._gsap).renderTransform && !e.parseTransform) ||
                          ei(t, e.parseTransform),
                        (y = !1 !== e.smoothOrigin && _.smooth),
                        ((g = this._pt =
                          new Qe(
                            this._pt,
                            O,
                            Sr,
                            0,
                            1,
                            _.renderTransform,
                            _,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === c)
                    )
                      (this._pt = new Qe(
                        this._pt,
                        _,
                        "scaleY",
                        _.scaleY,
                        p ? p * a : a - _.scaleY
                      )),
                        k.push("scaleY", c),
                        (c += "X");
                    else {
                      if ("transformOrigin" === c) {
                        (x = void 0),
                          (T = void 0),
                          (M = void 0),
                          (T = (x = (w = o).split(" "))[0]),
                          (M = x[1] || "50%"),
                          ("top" !== T &&
                            "bottom" !== T &&
                            "left" !== M &&
                            "right" !== M) ||
                            ((w = T), (T = M), (M = w)),
                          (x[0] = qr[T] || T),
                          (x[1] = qr[M] || M),
                          (o = x.join(" ")),
                          _.svg
                            ? ti(t, o, 0, y, 0, this)
                            : ((d = parseFloat(o.split(" ")[2]) || 0) !==
                                _.zOrigin &&
                                Xr(this, _, "zOrigin", _.zOrigin, d),
                              Xr(this, O, c, ri(s), ri(o)));
                        continue;
                      }
                      if ("svgOrigin" === c) {
                        ti(t, o, 1, y, 0, this);
                        continue;
                      }
                      if (c in Gr) {
                        hi(this, _, c, l, o, p);
                        continue;
                      }
                      if ("smoothOrigin" === c) {
                        Xr(this, _, "smooth", _.smooth, o);
                        continue;
                      }
                      if ("force3D" === c) {
                        _[c] = o;
                        continue;
                      }
                      if ("transform" === c) {
                        fi(this, o, t);
                        continue;
                      }
                    }
                  else c in O || (c = Fr(c) || c);
                  if (
                    m ||
                    ((a || 0 === a) && (l || 0 === l) && !mr.test(o) && c in O)
                  )
                    a || (a = 0),
                      (f = (s + "").substr((l + "").length)) !==
                        (d = jt(o) || (c in v.units ? v.units[c] : f)) &&
                        (l = Kr(t, c, s, d)),
                      (this._pt = new Qe(
                        this._pt,
                        m ? _ : O,
                        c,
                        l,
                        p ? p * a : a - l,
                        m ||
                        ("px" !== d && "zIndex" !== c) ||
                        !1 === e.autoRound
                          ? gr
                          : br
                      )),
                      (this._pt.u = d || 0),
                      f !== d && ((this._pt.b = s), (this._pt.r = yr));
                  else if (c in O) Ur.call(this, t, c, s, o);
                  else {
                    if (!(c in t)) {
                      q(c, o);
                      continue;
                    }
                    this.add(t, c, t[c], o, i, n);
                  }
                  k.push(c);
                }
            b && Ge(this);
          },
          get: Wr,
          aliases: vr,
          getSetter: function (t, e, r) {
            var i = vr[e];
            return (
              i && i.indexOf(",") < 0 && (e = i),
              e in ur && e !== Dr && (t._gsap.x || Wr(t, "x"))
                ? r && ar === r
                  ? "scale" === e
                    ? Or
                    : kr
                  : (ar = r || {}) && ("scale" === e ? Cr : Er)
                : t.style && !S(t.style[e])
                ? Tr
                : ~e.indexOf("-")
                ? Mr
                : je(t, e)
            );
          },
          core: { _removeProperty: Nr, _getMatrix: Jr },
        };
      (er.utils.checkPrefix = Fr),
        (pi = at(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
            "," +
            (di = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            ur[t] = 1;
          }
        )),
        at(di, function (t) {
          (v.units[t] = "deg"), (Gr[t] = 1);
        }),
        (vr[pi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + di),
        at(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            vr[e[1]] = pi[e[0]];
          }
        ),
        at(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            v.units[t] = "px";
          }
        ),
        er.registerPlugin(mi);
      var vi,
        gi,
        _i,
        yi,
        bi,
        wi,
        xi,
        Ti,
        Mi,
        ki,
        Oi,
        Ci,
        Ei,
        Si,
        Di,
        Ai,
        Pi,
        Li,
        Fi,
        zi,
        Ri,
        Ii,
        Bi,
        Yi,
        Ni,
        Xi,
        ji,
        Ki = er.registerPlugin(mi) || er,
        Wi = (Ki.core.Tween, 1),
        Ui = [],
        qi = [],
        Vi = Date.now,
        Hi = Vi(),
        $i = 0,
        Gi = 1,
        Qi = function (t) {
          return t;
        },
        Zi = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        Ji = function () {
          return "undefined" != typeof window;
        },
        tn = function () {
          return vi || (Ji() && (vi = window.gsap) && vi.registerPlugin && vi);
        },
        en = function (t) {
          return !!~xi.indexOf(t);
        },
        rn = function (t, e) {
          return ~Ui.indexOf(t) && Ui[Ui.indexOf(t) + 1][e];
        },
        nn = function (t, e) {
          var r = e.s,
            i = e.sc,
            n = qi.indexOf(t),
            s = i === kn.sc ? 1 : 2;
          return (
            !~n && (n = qi.push(t) - 1),
            qi[n + s] ||
              (qi[n + s] =
                rn(t, r) ||
                (en(t)
                  ? i
                  : function (e) {
                      return arguments.length ? (t[r] = e) : t[r];
                    }))
          );
        },
        sn = function (t) {
          return (
            rn(t, "getBoundingClientRect") ||
            (en(t)
              ? function () {
                  return (
                    (hs.width = _i.innerWidth), (hs.height = _i.innerHeight), hs
                  );
                }
              : function () {
                  return En(t);
                })
          );
        },
        on = function (t, e) {
          var r = e.s,
            i = e.d2,
            n = e.d,
            s = e.a;
          return (r = "scroll" + i) && (s = rn(t, r))
            ? s() - sn(t)()[n]
            : en(t)
            ? Math.max(bi[r], wi[r]) -
              (_i["inner" + i] || bi["client" + i] || wi["client" + i])
            : t[r] - t["offset" + i];
        },
        an = function (t, e) {
          for (var r = 0; r < Ri.length; r += 3)
            (!e || ~e.indexOf(Ri[r + 1])) && t(Ri[r], Ri[r + 1], Ri[r + 2]);
        },
        ln = function (t) {
          return "string" == typeof t;
        },
        un = function (t) {
          return "function" == typeof t;
        },
        hn = function (t) {
          return "number" == typeof t;
        },
        cn = function (t) {
          return "object" == typeof t;
        },
        fn = function (t) {
          return un(t) && t();
        },
        dn = function (t, e) {
          return function () {
            var r = fn(t),
              i = fn(e);
            return function () {
              fn(r), fn(i);
            };
          };
        },
        pn = Math.abs,
        mn = "left",
        vn = "right",
        gn = "bottom",
        _n = "width",
        yn = "height",
        bn = "padding",
        wn = "margin",
        xn = "Width",
        Tn = "px",
        Mn = {
          s: "scrollLeft",
          p: mn,
          p2: "Left",
          os: vn,
          os2: "Right",
          d: _n,
          d2: xn,
          a: "x",
          sc: function (t) {
            return arguments.length
              ? _i.scrollTo(t, kn.sc())
              : _i.pageXOffset ||
                  yi.scrollLeft ||
                  bi.scrollLeft ||
                  wi.scrollLeft ||
                  0;
          },
        },
        kn = {
          s: "scrollTop",
          p: "top",
          p2: "Top",
          os: gn,
          os2: "Bottom",
          d: yn,
          d2: "Height",
          a: "y",
          op: Mn,
          sc: function (t) {
            return arguments.length
              ? _i.scrollTo(Mn.sc(), t)
              : _i.pageYOffset ||
                  yi.scrollTop ||
                  bi.scrollTop ||
                  wi.scrollTop ||
                  0;
          },
        },
        On = function (t) {
          return _i.getComputedStyle(t);
        },
        Cn = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        En = function (t, e) {
          var r =
              e &&
              "matrix(1, 0, 0, 1, 0, 0)" !== On(t)[Pi] &&
              vi
                .to(t, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                })
                .progress(1),
            i = t.getBoundingClientRect();
          return r && r.progress(0).kill(), i;
        },
        Sn = function (t, e) {
          var r = e.d2;
          return t["offset" + r] || t["client" + r] || 0;
        },
        Dn = function (t) {
          var e,
            r = [],
            i = t.labels,
            n = t.duration();
          for (e in i) r.push(i[e] / n);
          return r;
        },
        An = function (t, e, r, i) {
          return r.split(",").forEach(function (r) {
            return t(e, r, i);
          });
        },
        Pn = function (t, e, r) {
          return t.addEventListener(e, r, { passive: !0 });
        },
        Ln = function (t, e, r) {
          return t.removeEventListener(e, r);
        },
        Fn = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        zn = { toggleActions: "play", anticipatePin: 0 },
        Rn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        In = function (t, e) {
          if (ln(t)) {
            var r = t.indexOf("="),
              i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
            ~r &&
              (t.indexOf("%") > r && (i *= e / 100), (t = t.substr(0, r - 1))),
              (t =
                i +
                (t in Rn
                  ? Rn[t] * e
                  : ~t.indexOf("%")
                  ? (parseFloat(t) * e) / 100
                  : parseFloat(t) || 0));
          }
          return t;
        },
        Bn = function (t, e, r, i, n, s, o) {
          var a = n.startColor,
            l = n.endColor,
            u = n.fontSize,
            h = n.indent,
            c = n.fontWeight,
            f = yi.createElement("div"),
            d = en(r) || "fixed" === rn(r, "pinType"),
            p = -1 !== t.indexOf("scroller"),
            m = d ? wi : r,
            v = -1 !== t.indexOf("start"),
            g = v ? a : l,
            _ =
              "border-color:" +
              g +
              ";font-size:" +
              u +
              ";color:" +
              g +
              ";font-weight:" +
              c +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (_ += "position:" + (p && d ? "fixed;" : "absolute;")),
            (p || !d) &&
              (_ += (i === kn ? vn : gn) + ":" + (s + parseFloat(h)) + "px;"),
            o &&
              (_ +=
                "box-sizing:border-box;text-align:left;width:" +
                o.offsetWidth +
                "px;"),
            (f._isStart = v),
            f.setAttribute("class", "gsap-marker-" + t),
            (f.style.cssText = _),
            (f.innerText = e || 0 === e ? t + "-" + e : t),
            m.children[0] ? m.insertBefore(f, m.children[0]) : m.appendChild(f),
            (f._offset = f["offset" + i.op.d2]),
            Yn(f, 0, i, v),
            f
          );
        },
        Yn = function (t, e, r, i) {
          var n = { display: "block" },
            s = r[i ? "os2" : "p2"],
            o = r[i ? "p2" : "os2"];
          (t._isFlipped = i),
            (n[r.a + "Percent"] = i ? -100 : 0),
            (n[r.a] = i ? "1px" : 0),
            (n["border" + s + xn] = 1),
            (n["border" + o + xn] = 0),
            (n[r.p] = e + "px"),
            vi.set(t, n);
        },
        Nn = [],
        Xn = {},
        jn = function () {
          return ki || (ki = Mi(is));
        },
        Kn = function () {
          ki || ((ki = Mi(is)), $i || Gn("scrollStart"), ($i = Vi()));
        },
        Wn = function () {
          return !Di && !Yi && !yi.fullscreenElement && Ti.restart(!0);
        },
        Un = {},
        qn = [],
        Vn = [],
        Hn = function (t) {
          var e,
            r = vi.ticker.frame,
            i = [],
            n = 0;
          if (ji !== r || Wi) {
            for (Jn(); n < Vn.length; n += 4)
              (e = _i.matchMedia(Vn[n]).matches) !== Vn[n + 3] &&
                ((Vn[n + 3] = e),
                e ? i.push(n) : Jn(1, Vn[n]) || (un(Vn[n + 2]) && Vn[n + 2]()));
            for (Zn(), n = 0; n < i.length; n++)
              (e = i[n]), (Xi = Vn[e]), (Vn[e + 2] = Vn[e + 1](t));
            (Xi = 0), gi && ts(0, 1), (ji = r), Gn("matchMedia");
          }
        },
        $n = function t() {
          return Ln(ms, "scrollEnd", t) || ts(!0);
        },
        Gn = function (t) {
          return (
            (Un[t] &&
              Un[t].map(function (t) {
                return t();
              })) ||
            qn
          );
        },
        Qn = [],
        Zn = function (t) {
          for (var e = 0; e < Qn.length; e += 4)
            (t && Qn[e + 3] !== t) ||
              ((Qn[e].style.cssText = Qn[e + 1]), (Qn[e + 2].uncache = 1));
        },
        Jn = function (t, e) {
          var r;
          for (Li = 0; Li < Nn.length; Li++)
            (r = Nn[Li]),
              (e && r.media !== e) ||
                (t
                  ? r.kill(1)
                  : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
          Zn(e), e || Gn("revert");
        },
        ts = function (t, e) {
          if (!$i || t) {
            var r = Gn("refreshInit");
            for (Ii && ms.sort(), e || Jn(), Li = 0; Li < Nn.length; Li++)
              Nn[Li].refresh();
            for (
              r.forEach(function (t) {
                return t && t.render && t.render(-1);
              }),
                Li = Nn.length;
              Li--;

            )
              Nn[Li].scroll.rec = 0;
            Ti.pause(), Gn("refresh");
          } else Pn(ms, "scrollEnd", $n);
        },
        es = 0,
        rs = 1,
        is = function () {
          var t = Nn.length,
            e = Vi(),
            r = e - Hi >= 50,
            i = t && Nn[0].scroll();
          if (
            ((rs = es > i ? -1 : 1),
            (es = i),
            r &&
              ($i && !Ai && e - $i > 200 && (($i = 0), Gn("scrollEnd")),
              (Ei = Hi),
              (Hi = e)),
            rs < 0)
          ) {
            for (Li = t; Li-- > 0; ) Nn[Li] && Nn[Li].update(0, r);
            rs = 1;
          } else for (Li = 0; Li < t; Li++) Nn[Li] && Nn[Li].update(0, r);
          ki = 0;
        },
        ns = [
          mn,
          "top",
          gn,
          vn,
          "marginBottom",
          "marginRight",
          "marginTop",
          "marginLeft",
          "display",
          "flexShrink",
          "float",
          "zIndex",
        ],
        ss = ns.concat([
          _n,
          yn,
          "boxSizing",
          "maxWidth",
          "maxHeight",
          "position",
          wn,
          bn,
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
        ]),
        os = function (t, e, r, i) {
          if (t.parentNode !== e) {
            for (var n, s = ns.length, o = e.style, a = t.style; s--; )
              o[(n = ns[s])] = r[n];
            (o.position = "absolute" === r.position ? "absolute" : "relative"),
              "inline" === r.display && (o.display = "inline-block"),
              (a.bottom = a.right = "auto"),
              (o.overflow = "visible"),
              (o.boxSizing = "border-box"),
              (o.width = Sn(t, Mn) + Tn),
              (o.height = Sn(t, kn) + Tn),
              (o.padding = a.margin = a.top = a.left = "0"),
              ls(i),
              (a.width = a.maxWidth = r.width),
              (a.height = a.maxHeight = r.height),
              (a.padding = r.padding),
              t.parentNode.insertBefore(e, t),
              e.appendChild(t);
          }
        },
        as = /([A-Z])/g,
        ls = function (t) {
          if (t) {
            var e,
              r,
              i = t.t.style,
              n = t.length,
              s = 0;
            for (
              (t.t._gsap || vi.core.getCache(t.t)).uncache = 1;
              s < n;
              s += 2
            )
              (r = t[s + 1]),
                (e = t[s]),
                r
                  ? (i[e] = r)
                  : i[e] &&
                    i.removeProperty(e.replace(as, "-$1").toLowerCase());
          }
        },
        us = function (t) {
          for (var e = ss.length, r = t.style, i = [], n = 0; n < e; n++)
            i.push(ss[n], r[ss[n]]);
          return (i.t = t), i;
        },
        hs = { left: 0, top: 0 },
        cs = function (t, e, r, i, n, s, o, a, l, u, h, c) {
          if (
            (un(t) && (t = t(a)),
            ln(t) &&
              "max" === t.substr(0, 3) &&
              (t = c + ("=" === t.charAt(4) ? In("0" + t.substr(3), r) : 0)),
            hn(t))
          )
            o && Yn(o, r, i, !0);
          else {
            un(e) && (e = e(a));
            var f,
              d,
              p,
              m = Oi(e)[0] || wi,
              v = En(m) || {},
              g = t.split(" ");
            (v && (v.left || v.top)) ||
              "none" !== On(m).display ||
              ((p = m.style.display),
              (m.style.display = "block"),
              (v = En(m)),
              p ? (m.style.display = p) : m.style.removeProperty("display")),
              (f = In(g[0], v[i.d])),
              (d = In(g[1] || "0", r)),
              (t = v[i.p] - l[i.p] - u + f + n - d),
              o && Yn(o, d, i, r - d < 20 || (o._isStart && d > 20)),
              (r -= r - d);
          }
          if (s) {
            var _ = t + r,
              y = s._isStart;
            (c = "scroll" + i.d2),
              Yn(
                s,
                _,
                i,
                (y && _ > 20) ||
                  (!y &&
                    (h ? Math.max(wi[c], bi[c]) : s.parentNode[c]) <= _ + 1)
              ),
              h &&
                ((l = En(o)),
                h && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + Tn));
          }
          return Math.round(t);
        },
        fs = /(?:webkit|moz|length|cssText|inset)/i,
        ds = function (t, e, r, i) {
          if (t.parentNode !== e) {
            var n,
              s,
              o = t.style;
            if (e === wi) {
              for (n in ((t._stOrig = o.cssText), (s = On(t))))
                +n ||
                  fs.test(n) ||
                  !s[n] ||
                  "string" != typeof o[n] ||
                  "0" === n ||
                  (o[n] = s[n]);
              (o.top = r), (o.left = i);
            } else o.cssText = t._stOrig;
            (vi.core.getCache(t).uncache = 1), e.appendChild(t);
          }
        },
        ps = function (t, e) {
          var r,
            i,
            n = nn(t, e),
            s = "_scroll" + e.p2,
            o = function e(o, a, l, u, h) {
              var c = e.tween,
                f = a.onComplete,
                d = {};
              return (
                c && c.kill(),
                (r = Math.round(l)),
                (a[s] = o),
                (a.modifiers = d),
                (d[s] = function (t) {
                  return (
                    (t = Zi(n())) !== r && t !== i && Math.abs(t - r) > 2
                      ? (c.kill(), (e.tween = 0))
                      : (t = l + u * c.ratio + h * c.ratio * c.ratio),
                    (i = r),
                    (r = Zi(t))
                  );
                }),
                (a.onComplete = function () {
                  (e.tween = 0), f && f.call(c);
                }),
                (c = e.tween = vi.to(t, a))
              );
            };
          return (
            (t[s] = n),
            t.addEventListener("wheel", function () {
              return o.tween && o.tween.kill() && (o.tween = 0);
            }),
            o
          );
        };
      Mn.op = kn;
      var ms = (function () {
        function t(e, r) {
          gi ||
            t.register(vi) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            this.init(e, r);
        }
        return (
          (t.prototype.init = function (e, r) {
            if (
              ((this.progress = this.start = 0), this.vars && this.kill(1), Gi)
            ) {
              var i,
                n,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                f,
                d,
                p,
                m,
                v,
                g,
                _,
                y,
                b,
                w,
                x,
                T,
                M,
                k,
                O,
                C,
                E,
                S,
                D,
                A,
                P,
                L,
                F,
                z,
                R,
                I,
                B,
                Y,
                N,
                X,
                j = (e = Cn(
                  ln(e) || hn(e) || e.nodeType ? { trigger: e } : e,
                  zn
                )).horizontal
                  ? Mn
                  : kn,
                K = e,
                W = K.onUpdate,
                U = K.toggleClass,
                q = K.id,
                V = K.onToggle,
                H = K.onRefresh,
                $ = K.scrub,
                G = K.trigger,
                Q = K.pin,
                Z = K.pinSpacing,
                J = K.invalidateOnRefresh,
                tt = K.anticipatePin,
                et = K.onScrubComplete,
                rt = K.onSnapComplete,
                it = K.once,
                nt = K.snap,
                st = K.pinReparent,
                ot = !$ && 0 !== $,
                at = Oi(e.scroller || _i)[0],
                lt = vi.core.getCache(at),
                ut = en(at),
                ht =
                  "pinType" in e
                    ? "fixed" === e.pinType
                    : ut || "fixed" === rn(at, "pinType"),
                ct = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                ft = ot && e.toggleActions.split(" "),
                dt = "markers" in e ? e.markers : zn.markers,
                pt = ut ? 0 : parseFloat(On(at)["border" + j.p2 + xn]) || 0,
                mt = this,
                vt =
                  e.onRefreshInit &&
                  function () {
                    return e.onRefreshInit(mt);
                  },
                gt = (function (t, e, r) {
                  var i = r.d,
                    n = r.d2,
                    s = r.a;
                  return (s = rn(t, "getBoundingClientRect"))
                    ? function () {
                        return s()[i];
                      }
                    : function () {
                        return (e ? _i["inner" + n] : t["client" + n]) || 0;
                      };
                })(at, ut, j),
                _t = (function (t, e) {
                  return !e || ~Ui.indexOf(t)
                    ? sn(t)
                    : function () {
                        return hs;
                      };
                })(at, ut);
              (mt.media = Xi),
                (tt *= 45),
                Nn.push(mt),
                (mt.scroller = at),
                (mt.scroll = nn(at, j)),
                (a = mt.scroll()),
                (mt.vars = e),
                (r = r || e.animation),
                "refreshPriority" in e && (Ii = 1),
                (lt.tweenScroll = lt.tweenScroll || {
                  top: ps(at, kn),
                  left: ps(at, Mn),
                }),
                (mt.tweenTo = i = lt.tweenScroll[j.p]),
                r &&
                  ((r.vars.lazy = !1),
                  r._initted ||
                    (!1 !== r.vars.immediateRender &&
                      !1 !== e.immediateRender &&
                      r.render(0, !0, !0)),
                  (mt.animation = r.pause()),
                  (r.scrollTrigger = mt),
                  (F = hn($) && $) &&
                    (L = vi.to(r, {
                      ease: "power3",
                      duration: F,
                      onComplete: function () {
                        return et && et(mt);
                      },
                    })),
                  (A = 0),
                  q || (q = r.vars.id)),
                nt &&
                  (cn(nt) || (nt = { snapTo: nt }),
                  "scrollBehavior" in wi.style &&
                    vi.set(ut ? [wi, bi] : at, { scrollBehavior: "auto" }),
                  (s = un(nt.snapTo)
                    ? nt.snapTo
                    : "labels" === nt.snapTo
                    ? (function (t) {
                        return function (e) {
                          return vi.utils.snap(Dn(t), e);
                        };
                      })(r)
                    : "labelsDirectional" === nt.snapTo
                    ? ((N = r),
                      function (t, e) {
                        var r,
                          i = Dn(N);
                        if (
                          (i.sort(function (t, e) {
                            return t - e;
                          }),
                          e.direction > 0)
                        ) {
                          for (t -= 1e-4, r = 0; r < i.length; r++)
                            if (i[r] >= t) return i[r];
                          return i.pop();
                        }
                        for (r = i.length, t += 1e-4; r--; )
                          if (i[r] <= t) return i[r];
                        return i[0];
                      })
                    : vi.utils.snap(nt.snapTo)),
                  (z = nt.duration || { min: 0.1, max: 2 }),
                  (z = cn(z) ? Ci(z.min, z.max) : Ci(z, z)),
                  (R = vi
                    .delayedCall(nt.delay || F / 2 || 0.1, function () {
                      if (Math.abs(mt.getVelocity()) < 10 && !Ai) {
                        var t = r && !ot ? r.totalProgress() : mt.progress,
                          e = ((t - P) / (Vi() - Ei)) * 1e3 || 0,
                          n = (pn(e / 2) * e) / 0.185,
                          o = t + (!1 === nt.inertia ? 0 : n),
                          a = Ci(0, 1, s(o, mt)),
                          l = mt.scroll(),
                          c = Math.round(u + a * v),
                          f = nt,
                          d = f.onStart,
                          p = f.onInterrupt,
                          m = f.onComplete,
                          g = i.tween;
                        if (l <= h && l >= u && c !== l) {
                          if (g && !g._initted && g.data <= Math.abs(c - l))
                            return;
                          i(
                            c,
                            {
                              duration: z(
                                pn(
                                  (0.185 * Math.max(pn(o - t), pn(a - t))) /
                                    e /
                                    0.05 || 0
                                )
                              ),
                              ease: nt.ease || "power3",
                              data: Math.abs(c - l),
                              onInterrupt: function () {
                                return R.restart(!0) && p && p(mt);
                              },
                              onComplete: function () {
                                (A = P =
                                  r && !ot ? r.totalProgress() : mt.progress),
                                  rt && rt(mt),
                                  m && m(mt);
                              },
                            },
                            l,
                            n * v,
                            c - l - n * v
                          ),
                            d && d(mt, i.tween);
                        }
                      } else mt.isActive && R.restart(!0);
                    })
                    .pause())),
                q && (Xn[q] = mt),
                (G = mt.trigger = Oi(G || Q)[0]),
                (Q = !0 === Q ? G : Oi(Q)[0]),
                ln(U) && (U = { targets: G, className: U }),
                Q &&
                  (!1 === Z ||
                    Z === wn ||
                    (Z = !(!Z && "flex" === On(Q.parentNode).display) && bn),
                  (mt.pin = Q),
                  !1 !== e.force3D && vi.set(Q, { force3D: !0 }),
                  (n = vi.core.getCache(Q)).spacer
                    ? (g = n.pinState)
                    : ((n.spacer = b = yi.createElement("div")),
                      b.setAttribute(
                        "class",
                        "pin-spacer" + (q ? " pin-spacer-" + q : "")
                      ),
                      (n.pinState = g = us(Q))),
                  (mt.spacer = b = n.spacer),
                  (D = On(Q)),
                  (O = D[Z + j.os2]),
                  (x = vi.getProperty(Q)),
                  (T = vi.quickSetter(Q, j.a, Tn)),
                  os(Q, b, D),
                  (y = us(Q))),
                dt &&
                  ((m = cn(dt) ? Cn(dt, Fn) : Fn),
                  (d = Bn("scroller-start", q, at, j, m, 0)),
                  (p = Bn("scroller-end", q, at, j, m, 0, d)),
                  (w = d["offset" + j.op.d2]),
                  (c = Bn("start", q, at, j, m, w)),
                  (f = Bn("end", q, at, j, m, w)),
                  ht ||
                    (((X = ut ? wi : at).style.position =
                      "absolute" === On(X).position ? "absolute" : "relative"),
                    vi.set([d, p], { force3D: !0 }),
                    (E = vi.quickSetter(d, j.a, Tn)),
                    (S = vi.quickSetter(p, j.a, Tn)))),
                (mt.revert = function (t) {
                  var e = !1 !== t || !mt.enabled,
                    i = Di;
                  e !== o &&
                    (e &&
                      ((B = Math.max(mt.scroll(), mt.scroll.rec || 0)),
                      (I = mt.progress),
                      (Y = r && r.progress())),
                    c &&
                      [c, f, d, p].forEach(function (t) {
                        return (t.style.display = e ? "none" : "block");
                      }),
                    e && (Di = 1),
                    mt.update(e),
                    (Di = i),
                    Q &&
                      (e
                        ? (function (t, e, r) {
                            if ((ls(r), t.parentNode === e)) {
                              var i = e.parentNode;
                              i && (i.insertBefore(t, e), i.removeChild(e));
                            }
                          })(Q, b, g)
                        : (!st || !mt.isActive) && os(Q, b, On(Q), C)),
                    (o = e));
                }),
                (mt.refresh = function (i, n) {
                  if ((!Di && mt.enabled) || n)
                    if (Q && i && $i) Pn(t, "scrollEnd", $n);
                    else {
                      (Di = 1),
                        L && L.pause(),
                        J && r && r.progress(0).invalidate(),
                        o || mt.revert();
                      for (
                        var s,
                          m,
                          w,
                          T,
                          O,
                          E,
                          S,
                          D,
                          A,
                          P = gt(),
                          F = _t(),
                          z = on(at, j),
                          R = 0,
                          N = 0,
                          X = e.end,
                          K = e.endTrigger || G,
                          W =
                            e.start ||
                            (0 !== e.start && G ? (Q ? "0 0" : "0 100%") : 0),
                          U = (G && Math.max(0, Nn.indexOf(mt))) || 0,
                          q = U;
                        q--;

                      )
                        (E = Nn[q]).end || E.refresh(0, 1) || (Di = 1),
                          (S = E.pin) && (S === G || S === Q) && E.revert();
                      for (
                        u =
                          cs(W, G, P, j, mt.scroll(), c, d, mt, F, pt, ht, z) ||
                          (Q ? -0.001 : 0),
                          un(X) && (X = X(mt)),
                          ln(X) &&
                            !X.indexOf("+=") &&
                            (~X.indexOf(" ")
                              ? (X = (ln(W) ? W.split(" ")[0] : "") + X)
                              : ((R = In(X.substr(2), P)),
                                (X = ln(W) ? W : u + R),
                                (K = G))),
                          h =
                            Math.max(
                              u,
                              cs(
                                X || (K ? "100% 0" : z),
                                K,
                                P,
                                j,
                                mt.scroll() + R,
                                f,
                                p,
                                mt,
                                F,
                                pt,
                                ht,
                                z
                              )
                            ) || -0.001,
                          v = h - u || ((u -= 0.01) && 0.001),
                          R = 0,
                          q = U;
                        q--;

                      )
                        (S = (E = Nn[q]).pin) &&
                          E.start - E._pinPush < u &&
                          ((s = E.end - E.start),
                          S === G && (R += s),
                          S === Q && (N += s));
                      if (
                        ((u += R),
                        (h += R),
                        (mt._pinPush = N),
                        c &&
                          R &&
                          (((s = {})[j.a] = "+=" + R), vi.set([c, f], s)),
                        Q)
                      )
                        (s = On(Q)),
                          (T = j === kn),
                          (w = mt.scroll()),
                          (M = parseFloat(x(j.a)) + N),
                          !z &&
                            h > 1 &&
                            ((ut ? wi : at).style["overflow-" + j.a] =
                              "scroll"),
                          os(Q, b, s),
                          (y = us(Q)),
                          (m = En(Q, !0)),
                          (D = ht && nn(at, T ? Mn : kn)()),
                          Z &&
                            (((C = [Z + j.os2, v + N + Tn]).t = b),
                            (q = Z === bn ? Sn(Q, j) + v + N : 0) &&
                              C.push(j.d, q + Tn),
                            ls(C),
                            ht && mt.scroll(B)),
                          ht &&
                            (((O = {
                              top: m.top + (T ? w - u : D) + Tn,
                              left: m.left + (T ? D : w - u) + Tn,
                              boxSizing: "border-box",
                              position: "fixed",
                            }).width = O.maxWidth =
                              Math.ceil(m.width) + Tn),
                            (O.height = O.maxHeight = Math.ceil(m.height) + Tn),
                            (O.margin =
                              O.marginTop =
                              O.marginRight =
                              O.marginBottom =
                              O.marginLeft =
                                "0"),
                            (O.padding = s.padding),
                            (O.paddingTop = s.paddingTop),
                            (O.paddingRight = s.paddingRight),
                            (O.paddingBottom = s.paddingBottom),
                            (O.paddingLeft = s.paddingLeft),
                            (_ = (function (t, e, r) {
                              for (
                                var i, n = [], s = t.length, o = r ? 8 : 0;
                                o < s;
                                o += 2
                              )
                                (i = t[o]), n.push(i, i in e ? e[i] : t[o + 1]);
                              return (n.t = t.t), n;
                            })(g, O, st))),
                          r
                            ? ((A = r._initted),
                              Bi(1),
                              r.progress(1, !0),
                              (k = x(j.a) - M + v + N),
                              v !== k && _.splice(_.length - 2, 2),
                              r.progress(0, !0),
                              A || r.invalidate(),
                              Bi(0))
                            : (k = v);
                      else if (G && mt.scroll())
                        for (m = G.parentNode; m && m !== wi; )
                          m._pinOffset &&
                            ((u -= m._pinOffset), (h -= m._pinOffset)),
                            (m = m.parentNode);
                      for (q = 0; q < U; q++)
                        (E = Nn[q].pin) &&
                          (E === G || E === Q) &&
                          Nn[q].revert(!1);
                      (mt.start = u),
                        (mt.end = h),
                        (a = l = mt.scroll()) < B && mt.scroll(B),
                        mt.revert(!1),
                        (Di = 0),
                        r &&
                          ot &&
                          r._initted &&
                          r.progress(Y, !0).render(r.time(), !0, !0),
                        I !== mt.progress &&
                          (L && r.totalProgress(I, !0),
                          (mt.progress = I),
                          mt.update()),
                        Q && Z && (b._pinOffset = Math.round(mt.progress * k)),
                        H && H(mt);
                    }
                }),
                (mt.getVelocity = function () {
                  return ((mt.scroll() - l) / (Vi() - Ei)) * 1e3 || 0;
                }),
                (mt.update = function (t, e) {
                  var n,
                    s,
                    o,
                    c,
                    f,
                    p = mt.scroll(),
                    m = t ? 0 : (p - u) / v,
                    g = m < 0 ? 0 : m > 1 ? 1 : m || 0,
                    w = mt.progress;
                  if (
                    (e &&
                      ((l = a),
                      (a = p),
                      nt && ((P = A), (A = r && !ot ? r.totalProgress() : g))),
                    tt &&
                      !g &&
                      Q &&
                      !Di &&
                      !Wi &&
                      $i &&
                      u < p + ((p - l) / (Vi() - Ei)) * tt &&
                      (g = 1e-4),
                    g !== w && mt.enabled)
                  ) {
                    if (
                      ((c =
                        (f =
                          (n = mt.isActive = !!g && g < 1) != (!!w && w < 1)) ||
                        !!g != !!w),
                      (mt.direction = g > w ? 1 : -1),
                      (mt.progress = g),
                      ot ||
                        (!L || Di || Wi
                          ? r && r.totalProgress(g, !!Di)
                          : ((L.vars.totalProgress = g),
                            L.invalidate().restart())),
                      Q)
                    )
                      if ((t && Z && (b.style[Z + j.os2] = O), ht)) {
                        if (c) {
                          if (
                            ((o =
                              !t && g > w && h + 1 > p && p + 1 >= on(at, j)),
                            st)
                          )
                            if (t || (!n && !o)) ds(Q, b);
                            else {
                              var x = En(Q, !0),
                                C = p - u;
                              ds(
                                Q,
                                wi,
                                x.top + (j === kn ? C : 0) + Tn,
                                x.left + (j === kn ? 0 : C) + Tn
                              );
                            }
                          ls(n || o ? _ : y),
                            (k !== v && g < 1 && n) ||
                              T(M + (1 !== g || o ? 0 : k));
                        }
                      } else T(M + k * g);
                    nt && !i.tween && !Di && !Wi && R.restart(!0),
                      U &&
                        (f || (it && g && (g < 1 || !Ni))) &&
                        Oi(U.targets).forEach(function (t) {
                          return t.classList[n || it ? "add" : "remove"](
                            U.className
                          );
                        }),
                      W && !ot && !t && W(mt),
                      c && !Di
                        ? ((s = g && !w ? 0 : 1 === g ? 1 : 1 === w ? 2 : 3),
                          ot &&
                            ((o =
                              (!f && "none" !== ft[s + 1] && ft[s + 1]) ||
                              ft[s]),
                            r &&
                              ("complete" === o || "reset" === o || o in r) &&
                              ("complete" === o
                                ? r.pause().totalProgress(1)
                                : "reset" === o
                                ? r.restart(!0).pause()
                                : r[o]()),
                            W && W(mt)),
                          (!f && Ni) ||
                            (V && f && V(mt),
                            ct[s] && ct[s](mt),
                            it && (1 === g ? mt.kill(!1, 1) : (ct[s] = 0)),
                            f || (ct[(s = 1 === g ? 1 : 3)] && ct[s](mt))))
                        : ot && W && !Di && W(mt);
                  }
                  S && (E(p + (d._isFlipped ? 1 : 0)), S(p));
                }),
                (mt.enable = function () {
                  mt.enabled ||
                    ((mt.enabled = !0),
                    Pn(at, "resize", Wn),
                    Pn(at, "scroll", Kn),
                    vt && Pn(t, "refreshInit", vt),
                    r && r.add
                      ? vi.delayedCall(0.01, function () {
                          return u || h || mt.refresh();
                        }) &&
                        (v = 0.01) &&
                        (u = h = 0)
                      : mt.refresh());
                }),
                (mt.disable = function (e, r) {
                  if (
                    mt.enabled &&
                    (!1 !== e && mt.revert(),
                    (mt.enabled = mt.isActive = !1),
                    r || (L && L.pause()),
                    (B = 0),
                    n && (n.uncache = 1),
                    vt && Ln(t, "refreshInit", vt),
                    R &&
                      (R.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                    !ut)
                  ) {
                    for (var s = Nn.length; s--; )
                      if (Nn[s].scroller === at && Nn[s] !== mt) return;
                    Ln(at, "resize", Wn), Ln(at, "scroll", Kn);
                  }
                }),
                (mt.kill = function (t, e) {
                  mt.disable(t, e), q && delete Xn[q];
                  var i = Nn.indexOf(mt);
                  Nn.splice(i, 1),
                    i === Li && rs > 0 && Li--,
                    r &&
                      ((r.scrollTrigger = null),
                      t && r.render(-1),
                      e || r.kill()),
                    c &&
                      [c, f, d, p].forEach(function (t) {
                        return t.parentNode.removeChild(t);
                      }),
                    Q &&
                      (n && (n.uncache = 1),
                      (i = 0),
                      Nn.forEach(function (t) {
                        return t.pin === Q && i++;
                      }),
                      i || (n.spacer = 0));
                }),
                mt.enable();
            } else this.update = this.refresh = this.kill = Qi;
          }),
          (t.register = function (e) {
            if (
              !gi &&
              ((vi = e || tn()),
              Ji() &&
                window.document &&
                ((_i = window),
                (yi = document),
                (bi = yi.documentElement),
                (wi = yi.body)),
              vi &&
                ((Oi = vi.utils.toArray),
                (Ci = vi.utils.clamp),
                (Bi = vi.core.suppressOverwrites || Qi),
                vi.core.globals("ScrollTrigger", t),
                wi))
            ) {
              (Mi =
                _i.requestAnimationFrame ||
                function (t) {
                  return setTimeout(t, 16);
                }),
                Pn(_i, "wheel", Kn),
                (xi = [_i, yi, bi, wi]),
                Pn(yi, "scroll", Kn);
              var r,
                i = wi.style,
                n = i.borderTop;
              (i.borderTop = "1px solid #000"),
                (r = En(wi)),
                (kn.m = Math.round(r.top + kn.sc()) || 0),
                (Mn.m = Math.round(r.left + Mn.sc()) || 0),
                n ? (i.borderTop = n) : i.removeProperty("border-top"),
                (Si = setInterval(jn, 200)),
                vi.delayedCall(0.5, function () {
                  return (Wi = 0);
                }),
                Pn(yi, "touchcancel", Qi),
                Pn(wi, "touchstart", Qi),
                An(Pn, yi, "pointerdown,touchstart,mousedown", function () {
                  return (Ai = 1);
                }),
                An(Pn, yi, "pointerup,touchend,mouseup", function () {
                  return (Ai = 0);
                }),
                (Pi = vi.utils.checkPrefix("transform")),
                ss.push(Pi),
                (gi = Vi()),
                (Ti = vi.delayedCall(0.2, ts).pause()),
                (Ri = [
                  yi,
                  "visibilitychange",
                  function () {
                    var t = _i.innerWidth,
                      e = _i.innerHeight;
                    yi.hidden
                      ? ((Fi = t), (zi = e))
                      : (Fi === t && zi === e) || Wn();
                  },
                  yi,
                  "DOMContentLoaded",
                  ts,
                  _i,
                  "load",
                  function () {
                    return $i || ts();
                  },
                  _i,
                  "resize",
                  Wn,
                ]),
                an(Pn);
            }
            return gi;
          }),
          (t.defaults = function (t) {
            for (var e in t) zn[e] = t[e];
          }),
          (t.kill = function () {
            (Gi = 0),
              Nn.slice(0).forEach(function (t) {
                return t.kill(1);
              });
          }),
          (t.config = function (t) {
            "limitCallbacks" in t && (Ni = !!t.limitCallbacks);
            var e = t.syncInterval;
            (e && clearInterval(Si)) || ((Si = e) && setInterval(jn, e)),
              "autoRefreshEvents" in t &&
                (an(Ln) || an(Pn, t.autoRefreshEvents || "none"),
                (Yi = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
          }),
          (t.scrollerProxy = function (t, e) {
            var r = Oi(t)[0],
              i = qi.indexOf(r),
              n = en(r);
            ~i && qi.splice(i, n ? 6 : 2),
              n ? Ui.unshift(_i, e, wi, e, bi, e) : Ui.unshift(r, e);
          }),
          (t.matchMedia = function (t) {
            var e, r, i, n, s;
            for (r in t)
              (i = Vn.indexOf(r)),
                (n = t[r]),
                (Xi = r),
                "all" === r
                  ? n()
                  : (e = _i.matchMedia(r)) &&
                    (e.matches && (s = n()),
                    ~i
                      ? ((Vn[i + 1] = dn(Vn[i + 1], n)),
                        (Vn[i + 2] = dn(Vn[i + 2], s)))
                      : ((i = Vn.length),
                        Vn.push(r, n, s),
                        e.addListener
                          ? e.addListener(Hn)
                          : e.addEventListener("change", Hn)),
                    (Vn[i + 3] = e.matches)),
                (Xi = 0);
            return Vn;
          }),
          (t.clearMatchMedia = function (t) {
            t || (Vn.length = 0), (t = Vn.indexOf(t)) >= 0 && Vn.splice(t, 4);
          }),
          t
        );
      })();
      (ms.version = "3.6.1"),
        (ms.saveStyles = function (t) {
          return t
            ? Oi(t).forEach(function (t) {
                if (t && t.style) {
                  var e = Qn.indexOf(t);
                  e >= 0 && Qn.splice(e, 4),
                    Qn.push(t, t.style.cssText, vi.core.getCache(t), Xi);
                }
              })
            : Qn;
        }),
        (ms.revert = function (t, e) {
          return Jn(!t, e);
        }),
        (ms.create = function (t, e) {
          return new ms(t, e);
        }),
        (ms.refresh = function (t) {
          return t ? Wn() : ts(!0);
        }),
        (ms.update = is),
        (ms.maxScroll = function (t, e) {
          return on(t, e ? Mn : kn);
        }),
        (ms.getScrollFunc = function (t, e) {
          return nn(Oi(t)[0], e ? Mn : kn);
        }),
        (ms.getById = function (t) {
          return Xn[t];
        }),
        (ms.getAll = function () {
          return Nn.slice(0);
        }),
        (ms.isScrolling = function () {
          return !!$i;
        }),
        (ms.addEventListener = function (t, e) {
          var r = Un[t] || (Un[t] = []);
          ~r.indexOf(e) || r.push(e);
        }),
        (ms.removeEventListener = function (t, e) {
          var r = Un[t],
            i = r && r.indexOf(e);
          i >= 0 && r.splice(i, 1);
        }),
        (ms.batch = function (t, e) {
          var r,
            i = [],
            n = {},
            s = e.interval || 0.016,
            o = e.batchMax || 1e9,
            a = function (t, e) {
              var r = [],
                i = [],
                n = vi
                  .delayedCall(s, function () {
                    e(r, i), (r = []), (i = []);
                  })
                  .pause();
              return function (t) {
                r.length || n.restart(!0),
                  r.push(t.trigger),
                  i.push(t),
                  o <= r.length && n.progress(1);
              };
            };
          for (r in e)
            n[r] =
              "on" === r.substr(0, 2) && un(e[r]) && "onRefreshInit" !== r
                ? a(0, e[r])
                : e[r];
          return (
            un(o) &&
              ((o = o()),
              Pn(ms, "refresh", function () {
                return (o = e.batchMax());
              })),
            Oi(t).forEach(function (t) {
              var e = {};
              for (r in n) e[r] = n[r];
              (e.trigger = t), i.push(ms.create(e));
            }),
            i
          );
        }),
        (ms.sort = function (t) {
          return Nn.sort(
            t ||
              function (t, e) {
                return (
                  -1e6 * (t.vars.refreshPriority || 0) +
                  t.start -
                  (e.start + -1e6 * (e.vars.refreshPriority || 0))
                );
              }
          );
        }),
        tn() && vi.registerPlugin(ms);
      var vs = r(121),
        gs = r.n(vs),
        _s = r(7),
        ys = r.n(_s),
        bs = r(658),
        ws = r.n(bs),
        xs = r(809),
        Ts = r.n(xs),
        Ms = r(322),
        ks = r.n(Ms);
      class Os {
        constructor(t = {}) {
          this.createBound(),
            (this.options = t),
            (this.prefix = ws()("transform")),
            (this.rAF = void 0),
            (this.isRAFCanceled = !1);
          const e = this.constructor.name ? this.constructor.name : "Smooth";
          (this.extends =
            void 0 === t.extends ? this.constructor !== Os : t.extends),
            (this.callback = this.options.callback || null),
            (this.vars = {
              direction: this.options.direction || "vertical",
              native: this.options.native || !1,
              ease: this.options.ease || 0.075,
              preload: this.options.preload || !1,
              current: 0,
              last: 0,
              target: 0,
              height: window.innerHeight,
              width: window.innerWidth,
              bounding: 0,
              timer: null,
              ticking: !1,
            }),
            (this.vs = this.vars.native
              ? null
              : new (Ts())({
                  limitInertia:
                    (this.options.vs && this.options.vs.limitInertia) || !1,
                  mouseMultiplier:
                    (this.options.vs && this.options.vs.mouseMultiplier) || 1,
                  touchMultiplier:
                    (this.options.vs && this.options.vs.touchMultiplier) || 1.5,
                  firefoxMultiplier:
                    (this.options.vs && this.options.vs.firefoxMultiplier) ||
                    30,
                  preventTouch:
                    (this.options.vs && this.options.vs.preventTouch) || !0,
                })),
            (this.dom = {
              listener: this.options.listener || document.body,
              section:
                this.options.section ||
                document.querySelector(".vs-section") ||
                null,
              scrollbar:
                this.vars.native || this.options.noscrollbar
                  ? null
                  : {
                      state: { clicked: !1, x: 0 },
                      el: ys()({
                        selector: "div",
                        styles: `vs-scrollbar vs-${
                          this.vars.direction
                        } vs-scrollbar-${e.toLowerCase()}`,
                      }),
                      drag: {
                        el: ys()({ selector: "div", styles: "vs-scrolldrag" }),
                        delta: 0,
                        height: 50,
                      },
                    },
            });
        }
        createBound() {
          [
            "run",
            "calc",
            "debounce",
            "resize",
            "mouseUp",
            "mouseDown",
            "mouseMove",
            "calcScroll",
            "scrollTo",
          ].forEach((t) => (this[t] = this[t].bind(this)));
        }
        init() {
          this.addClasses(),
            this.vars.preload && this.preloadImages(),
            this.vars.native
              ? this.addFakeScrollHeight()
              : !this.options.noscrollbar && this.addFakeScrollBar(),
            this.addEvents(),
            this.resize();
        }
        addClasses() {
          const t = this.vars.native ? "native" : "virtual",
            e = "vertical" === this.vars.direction ? "y" : "x";
          gs().add(this.dom.listener, `is-${t}-scroll`),
            gs().add(this.dom.listener, `${e}-scroll`);
        }
        preloadImages() {
          const t = Array.prototype.slice.call(
            this.dom.listener.querySelectorAll("img"),
            0
          );
          t.forEach((e) => {
            const r = document.createElement("img");
            ks().once(r, "load", () => {
              t.splice(t.indexOf(e), 1), 0 === t.length && this.resize();
            }),
              (r.src = e.getAttribute("src"));
          });
        }
        calc(t) {
          const e = "horizontal" == this.vars.direction ? t.deltaX : t.deltaY;
          (this.vars.target += -1 * e), this.clampTarget();
        }
        debounce() {
          const t = this.dom.listener === document.body;
          (this.vars.target =
            "vertical" === this.vars.direction
              ? t
                ? window.scrollY || window.pageYOffset
                : this.dom.listener.scrollTop
              : t
              ? window.scrollX || window.pageXOffset
              : this.dom.listener.scrollLeft),
            clearTimeout(this.vars.timer),
            this.vars.ticking ||
              ((this.vars.ticking = !0),
              gs().add(this.dom.listener, "is-scrolling")),
            (this.vars.timer = setTimeout(() => {
              (this.vars.ticking = !1),
                gs().remove(this.dom.listener, "is-scrolling");
            }, 200));
        }
        run() {
          if (!this.isRAFCanceled) {
            if (
              ((this.vars.current +=
                (this.vars.target - this.vars.current) * this.vars.ease),
              this.vars.current < 0.1 && (this.vars.current = 0),
              this.requestAnimationFrame(),
              this.extends ||
                (this.dom.section.style[this.prefix] = this.getTransform(
                  -this.vars.current.toFixed(2)
                )),
              !this.vars.native && !this.options.noscrollbar)
            ) {
              const t = this.dom.scrollbar.drag.height,
                e =
                  "vertical" === this.vars.direction
                    ? this.vars.height
                    : this.vars.width,
                r =
                  Math.abs(this.vars.current) / (this.vars.bounding / (e - t)) +
                  t / 0.5 -
                  t,
                i = Math.max(0, Math.min(r - t, r + t));
              this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(
                i.toFixed(2)
              );
            }
            this.callback &&
              this.vars.current !== this.vars.last &&
              this.callback(this.vars.current),
              (this.vars.last = this.vars.current);
          }
        }
        getTransform(t) {
          return "vertical" === this.vars.direction
            ? `translate3d(0,${t}px,0)`
            : `translate3d(${t}px,0,0)`;
        }
        on(t = !0) {
          this.isRAFCanceled && (this.isRAFCanceled = !1);
          const e =
            this.dom.listener === document.body ? window : this.dom.listener;
          this.vars.native
            ? ks().on(e, "scroll", this.debounce)
            : this.vs && this.vs.on(this.calc),
            t && this.requestAnimationFrame();
        }
        off(t = !0) {
          const e =
            this.dom.listener === document.body ? window : this.dom.listener;
          this.vars.native
            ? ks().off(e, "scroll", this.debounce)
            : this.vs && this.vs.off(this.calc),
            t && this.cancelAnimationFrame();
        }
        requestAnimationFrame() {
          this.rAF = requestAnimationFrame(this.run);
        }
        cancelAnimationFrame() {
          (this.isRAFCanceled = !0), cancelAnimationFrame(this.rAF);
        }
        addEvents() {
          this.on(), ks().on(window, "resize", this.resize);
        }
        removeEvents() {
          this.off(), ks().off(window, "resize", this.resize);
        }
        addFakeScrollBar() {
          this.dom.listener.appendChild(this.dom.scrollbar.el),
            this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el),
            ks().on(this.dom.scrollbar.el, "click", this.calcScroll),
            ks().on(this.dom.scrollbar.el, "mousedown", this.mouseDown),
            ks().on(document, "mousemove", this.mouseMove),
            ks().on(document, "mouseup", this.mouseUp);
        }
        removeFakeScrollBar() {
          ks().off(this.dom.scrollbar.el, "click", this.calcScroll),
            ks().off(this.dom.scrollbar.el, "mousedown", this.mouseDown),
            ks().off(document, "mousemove", this.mouseMove),
            ks().off(document, "mouseup", this.mouseUp),
            this.dom.listener.removeChild(this.dom.scrollbar.el);
        }
        mouseDown(t) {
          t.preventDefault(),
            1 == t.which && (this.dom.scrollbar.state.clicked = !0);
        }
        mouseUp(t) {
          (this.dom.scrollbar.state.clicked = !1),
            gs().remove(this.dom.listener, "is-dragging");
        }
        mouseMove(t) {
          this.dom.scrollbar.state.clicked && this.calcScroll(t);
        }
        addFakeScrollHeight() {
          (this.dom.scroll = ys()({
            selector: "div",
            styles: "vs-scroll-view",
          })),
            this.dom.listener.appendChild(this.dom.scroll);
        }
        removeFakeScrollHeight() {
          this.dom.listener.removeChild(this.dom.scroll);
        }
        calcScroll(t) {
          const e = "vertical" == this.vars.direction ? t.clientY : t.clientX,
            r =
              "vertical" == this.vars.direction
                ? this.vars.height
                : this.vars.width,
            i = e * (this.vars.bounding / r);
          gs().add(this.dom.listener, "is-dragging"),
            (this.vars.target = i),
            this.clampTarget(),
            this.dom.scrollbar &&
              (this.dom.scrollbar.drag.delta = this.vars.target);
        }
        scrollTo(t) {
          this.vars.native
            ? "vertical" == this.vars.direction
              ? window.scrollTo(0, t)
              : window.scrollTo(t, 0)
            : ((this.vars.target = t), this.clampTarget());
        }
        resize() {
          const t = "vertical" === this.vars.direction ? "height" : "width";
          if (
            ((this.vars.height = window.innerHeight),
            (this.vars.width = window.innerWidth),
            !this.extends)
          ) {
            const t = this.dom.section.getBoundingClientRect();
            this.vars.bounding =
              "vertical" === this.vars.direction
                ? t.height - (this.vars.native ? 0 : this.vars.height)
                : t.right - (this.vars.native ? 0 : this.vars.width);
          }
          this.vars.native || this.options.noscrollbar
            ? this.vars.native &&
              (this.dom.scroll.style[t] = `${this.vars.bounding}px`)
            : ((this.dom.scrollbar.drag.height =
                this.vars.height *
                (this.vars.height / (this.vars.bounding + this.vars.height))),
              (this.dom.scrollbar.drag.el.style[
                t
              ] = `${this.dom.scrollbar.drag.height}px`)),
            !this.vars.native && this.clampTarget();
        }
        clampTarget() {
          this.vars.target = Math.round(
            Math.max(0, Math.min(this.vars.target, this.vars.bounding))
          );
        }
        destroy() {
          this.vars.native
            ? (gs().remove(this.dom.listener, "is-native-scroll"),
              this.removeFakeScrollHeight())
            : (gs().remove(this.dom.listener, "is-virtual-scroll"),
              !this.options.noscrollbar && this.removeFakeScrollBar()),
            "vertical" === this.vars.direction
              ? gs().remove(this.dom.listener, "y-scroll")
              : gs().remove(this.dom.listener, "x-scroll"),
            (this.vars.current = 0),
            this.vs && (this.vs.destroy(), (this.vs = null)),
            this.removeEvents();
        }
      }
      window.Smooth = Os;
      const Cs = (t, e) => {
        t.forEach(({ title: t, description: r, image: i, linkProject: n }) => {
          const s = t,
            o = r,
            a = i,
            l = n,
            u = document.createElement("img"),
            h = document.createElement("a"),
            c = document.createElement("button"),
            f = document.createElement("p"),
            d = document.createElement("h1"),
            p = document.createElement("div"),
            m = document.createElement("div"),
            v = document.createElement("div");
          (u.src = a),
            (d.textContent = s),
            (f.textContent = o),
            (h.target = "_blank"),
            (h.href = l),
            (h.textContent = "Checkout"),
            c.append(h),
            (p.className = "project-card"),
            (m.className = "project-card-image"),
            (v.className = "project-card-content"),
            (u.id = "image-id"),
            m.append(u),
            v.append(d),
            v.append(f),
            v.append(c),
            p.append(m),
            p.append(v),
            e.append(p);
        });
      };
      Ki.registerPlugin(ms);
      const Es = document.querySelector(".small-projects"),
        Ss = document.querySelector(".big-projects");
      (() => {
        const t = (t, e, r, i, n) =>
          Ki.timeline({
            scrollTrigger: {
              trigger: t,
              scrub: 1,
              start: "0",
              end: "50vh",
              markers: !1,
            },
          }).to(t, { x: i.x, z: i.z, y: i.y, duration: n });
        window.innerWidth < 500
          ? (console.log("Hello"),
            t(".image-partOne img", 0, 0, { x: -100, z: 80, y: 120 }, 6).then(
              ".image-partOne img",
              { y: "50vh", duration: 10 }
            ),
            t(".image-partTwo img", 0, 0, { x: 100, z: 80, y: 120 }, 6))
          : (t(".image-partOne img", 0, 0, { x: -450, z: 150, y: 350 }, 4),
            t(".image-partTwo img", 0, 0, { x: 450, z: 150, y: 350 }, 4));
        const e = document.querySelector(".who-am-i");
        e.addEventListener("mouseleave", () => {
          (e.children[0].textContent = "Who am I ??"),
            (e.children[1].textContent =
              "My name is Gaurav, and I am a self taught Frontend Web Devloper");
        }),
          e.addEventListener("mouseover", () => {
            (e.children[0].textContent = "What do I do??"),
              (e.children[1].textContent =
                "I create cool websites, My skillset includes HTML5, CSS3, Javascript, ES6, React, GSAP, Firebase, Wordpress, SASS and looking forward to learn more technologies");
          });
      })(),
        (() => {
          const t = document.getElementById("menuBtn"),
            e = document.querySelector(".actual-menu");
          t.addEventListener("click", () => {
            e.classList.toggle("menu-new"),
              document.body.classList.toggle("new-body-navbar"),
              document
                .querySelector("html")
                .classList.toggle("new-body-navbar");
          });
        })(),
        (() => {
          const t = document.querySelector(".smooth-scroll-wrapper");
          new Os({ native: !0, section: t, ease: 0.06 }).init();
        })(),
        (() => {
          const t = document.querySelector(".circle svg g");
          TweenMax.to(t, 8, {
            rotation: "475",
            ease: Linear.easeNone,
            repeat: -1,
            transformOrigin: "center",
          });
        })(),
        Cs(
          [
            {
              title: "COVID-19",
              description: "This is full fledged Covid 19 tracker",
              image: "https://i.ibb.co/DLV4vF6/Capture.png",
              linkProject: "https://covid19trackerapplication.firebaseapp.com/",
            },
            {
              title: "COVID-19",
              description: "This is full fledged Covid 19 tracker",
              image: "https://i.ibb.co/f9hmySc/ezgif-com-gif-maker.gif",
              linkProject: "https://covid19trackerapplication.firebaseapp.com/",
            },
            {
              title: "COVID-19",
              description: "This is full fledged Covid 19 tracker",
              image: "https://i.ibb.co/DLV4vF6/Capture.png",
              linkProject: "https://covid19trackerapplication.firebaseapp.com/",
            },
          ],
          Ss
        ),
        Cs(
          [
            {
              title: "COVID-19",
              description: "This is full fledged Covid 19 tracker",
              image: "https://i.ibb.co/DLV4vF6/Capture.png",
              linkProject: "https://covid19trackerapplication.firebaseapp.com/",
            },
            {
              title: "COVID-19",
              description: "This is full fledged Covid 19 tracker",
              image: "https://i.ibb.co/DLV4vF6/Capture.png",
              linkProject: "https://covid19trackerapplication.firebaseapp.com/",
            },
            {
              title: "COVID-19",
              description: "This is full fledged Covid 19 tracker",
              image: "https://i.ibb.co/DLV4vF6/Capture.png",
              linkProject: "https://covid19trackerapplication.firebaseapp.com/",
            },
          ],
          Es
        );
    })();
})();
