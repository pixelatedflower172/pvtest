(() => {
    "use strict";
    var __webpack_modules__ = {8045: a => {
      a.exports = function (a, e) {
        for (var t = new Array(arguments.length - 1), i = 0, o = 2, s = true; o < arguments.length;) t[i++] = arguments[o++];
        return new Promise(function (o, n) {
          t[i] = function (a) {
            if (s) if (s = false, a) n(a); else {
              for (var e = new Array(arguments.length - 1), t = 0; t < e.length;) e[t++] = arguments[t];
              o.apply(null, e);
            }
          };
          try {
            a.apply(e || null, t);
          } catch (a) {
            s && (s = false, n(a));
          }
        });
      };
    }, 8839: (a, e) => {
      var t = e;
      t.length = function (a) {
        var e = a.length;
        if (!e) return 0;
        for (var t = 0; --e % 4 > 1 && "=" === a.charAt(e);) ++t;
        return Math.ceil(3 * a.length) / 4 - t;
      };
      for (var i = new Array(64), o = new Array(123), s = 0; s < 64;) o[i[s] = s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : s - 59 | 43] = s++;
      t.encode = function (a, e, t) {
        for (var o, s = null, n = [], r = 0, f = 0; e < t;) {
          var l = a[e++];
          switch (f) {
            case 0:
              n[r++] = i[l >> 2], o = (3 & l) << 4, f = 1;
              break;
            case 1:
              n[r++] = i[o | l >> 4], o = (15 & l) << 2, f = 2;
              break;
            case 2:
              n[r++] = i[o | l >> 6], n[r++] = i[63 & l], f = 0;
          }
          r > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, n)), r = 0);
        }
        return f && (n[r++] = i[o], n[r++] = 61, 1 === f && (n[r++] = 61)), s ? (r && s.push(String.fromCharCode.apply(String, n.slice(0, r))), s.join("")) : String.fromCharCode.apply(String, n.slice(0, r));
      };
      var n = "invalid encoding";
      t.decode = function (a, e, t) {
        for (var i, s = t, r = 0, f = 0; f < a.length;) {
          var l = a.charCodeAt(f++);
          if (61 === l && r > 1) break;
          if (undefined === (l = o[l])) throw Error(n);
          switch (r) {
            case 0:
              i = l, r = 1;
              break;
            case 1:
              e[t++] = i << 2 | (48 & l) >> 4, i = l, r = 2;
              break;
            case 2:
              e[t++] = (15 & i) << 4 | (60 & l) >> 2, i = l, r = 3;
              break;
            case 3:
              e[t++] = (3 & i) << 6 | l, r = 0;
          }
        }
        if (1 === r) throw Error(n);
        return t - s;
      }, t.test = function (a) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
      };
    }, 4358: a => {
      function e() {
        this._listeners = {};
      }
      a.exports = e, e.prototype.on = function (a, e, t) {
        return (this._listeners[a] || (this._listeners[a] = [])).push({fn: e, ctx: t || this}), this;
      }, e.prototype.off = function (a, e) {
        if (undefined === a) this._listeners = {}; else if (undefined === e) this._listeners[a] = []; else for (var t = this._listeners[a], i = 0; i < t.length;) t[i].fn === e ? t.splice(i, 1) : ++i;
        return this;
      }, e.prototype.emit = function (a) {
        var e = this._listeners[a];
        if (e) {
          for (var t = [], i = 1; i < arguments.length;) t.push(arguments[i++]);
          for (i = 0; i < e.length;) e[i].fn.apply(e[i++].ctx, t);
        }
        return this;
      };
    }, 9410: a => {
      function e(a) {
        return "undefined" != typeof Float32Array ? function () {
          var e = new Float32Array([-0]), t = new Uint8Array(e.buffer), i = 128 === t[3];
          function o(a, i, o) {
            e[0] = a, i[o] = t[0], i[o + 1] = t[1], i[o + 2] = t[2], i[o + 3] = t[3];
          }
          function s(a, i, o) {
            e[0] = a, i[o] = t[3], i[o + 1] = t[2], i[o + 2] = t[1], i[o + 3] = t[0];
          }
          a.writeFloatLE = i ? o : s, a.writeFloatBE = i ? s : o, a.readFloatLE = i ? n : r, a.readFloatBE = i ? r : n;
        }() : function () {
          function e(a, e, t, i) {
            var o = e < 0 ? 1 : 0;
            if (o && (e = -e), 0 === e) a(1 / e > 0 ? 0 : 2147483648, t, i); else if (isNaN(e)) a(2143289344, t, i); else if (e > 3.4028234663852886e38) a((o << 31 | 2139095040) >>> 0, t, i); else if (e < 1.1754943508222875e-38) a((o << 31 | Math.round(e / 1.401298464324817e-45)) >>> 0, t, i); else {
              var s = Math.floor(Math.log(e) / Math.LN2);
              a((o << 31 | s + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, -s) * 8388608)) >>> 0, t, i);
            }
          }
          function n(a, e, t) {
            var i = a(e, t), o = 2 * (i >> 31) + 1, s = i >>> 23 & 255, n = 8388607 & i;
            return 255 === s ? n ? NaN : o * Infinity : 0 === s ? 1.401298464324817e-45 * o * n : o * Math.pow(2, s - 150) * (n + 8388608);
          }
          a.writeFloatLE = e.bind(null, t), a.writeFloatBE = e.bind(null, i), a.readFloatLE = n.bind(null, o), a.readFloatBE = n.bind(null, s);
        }(), "undefined" != typeof Float64Array ? function () {
          var e = new Float64Array([-0]), t = new Uint8Array(e.buffer), i = 128 === t[7];
          function o(a, i, o) {
            e[0] = a, i[o] = t[0], i[o + 1] = t[1], i[o + 2] = t[2], i[o + 3] = t[3], i[o + 4] = t[4], i[o + 5] = t[5], i[o + 6] = t[6], i[o + 7] = t[7];
          }
          function s(a, i, o) {
            e[0] = a, i[o] = t[7], i[o + 1] = t[6], i[o + 2] = t[5], i[o + 3] = t[4], i[o + 4] = t[3], i[o + 5] = t[2], i[o + 6] = t[1], i[o + 7] = t[0];
          }
          a.writeDoubleLE = i ? o : s, a.writeDoubleBE = i ? s : o, a.readDoubleLE = i ? n : r, a.readDoubleBE = i ? r : n;
        }() : function () {
          function e(a, e, t, i, o, s) {
            var n = i < 0 ? 1 : 0;
            if (n && (i = -i), 0 === i) a(0, o, s + e), a(1 / i > 0 ? 0 : 2147483648, o, s + t); else if (isNaN(i)) a(0, o, s + e), a(2146959360, o, s + t); else if (i > 1.7976931348623157e308) a(0, o, s + e), a((n << 31 | 2146435072) >>> 0, o, s + t); else {
              var r;
              if (i < 2.2250738585072014e-308) a((r = i / 5e-324) >>> 0, o, s + e), a((n << 31 | r / 4294967296) >>> 0, o, s + t); else {
                var f = Math.floor(Math.log(i) / Math.LN2);
                1024 === f && (f = 1023), a(0x10000000000000 * (r = i * Math.pow(2, -f)) >>> 0, o, s + e), a((n << 31 | f + 1023 << 20 | 1048576 * r & 1048575) >>> 0, o, s + t);
              }
            }
          }
          function n(a, e, t, i, o) {
            var s = a(i, o + e), n = a(i, o + t), r = 2 * (n >> 31) + 1, f = n >>> 20 & 2047, l = 4294967296 * (1048575 & n) + s;
            return 2047 === f ? l ? NaN : r * Infinity : 0 === f ? 5e-324 * r * l : r * Math.pow(2, f - 1075) * (l + 0x10000000000000);
          }
          a.writeDoubleLE = e.bind(null, t, 0, 4), a.writeDoubleBE = e.bind(null, i, 4, 0), a.readDoubleLE = n.bind(null, o, 0, 4), a.readDoubleBE = n.bind(null, s, 4, 0);
        }(), a;
      }
      function t(a, e, t) {
        e[t] = 255 & a, e[t + 1] = a >>> 8 & 255, e[t + 2] = a >>> 16 & 255, e[t + 3] = a >>> 24;
      }
      function i(a, e, t) {
        e[t] = a >>> 24, e[t + 1] = a >>> 16 & 255, e[t + 2] = a >>> 8 & 255, e[t + 3] = 255 & a;
      }
      a.exports = e(e);
    }, 4153: module => {
      function inquire(moduleName) {
        try {
          var mod = eval("quire".replace(/^/, "re"))(moduleName);
          if (mod && (mod.length || Object.keys(mod).length)) return mod;
        } catch (a) {}
        return null;
      }
      module.exports = inquire;
    }, 9390: a => {
      a.exports = function (a, e, t) {
        var i = t || 8192, o = i >>> 1, s = null, n = i;
        return function (t) {
          if (t < 1 || t > o) return a(t);
          n + t > i && (s = a(i), n = 0);
          var r = e.call(s, n, n += t);
          return 7 & n && (n = 1 + (7 | n)), r;
        };
      };
    }, 1447: (a, e) => {
      var t = e;
      t.length = function (a) {
        for (var e = 0, t = 0, i = 0; i < a.length; ++i) (t = a.charCodeAt(i)) < 128 ? e += 1 : t < 2048 ? e += 2 : 55296 == (64512 & t) && 56320 == (64512 & a.charCodeAt(i + 1)) ? (++i, e += 4) : e += 3;
        return e;
      }, t.read = function (a, e, t) {
        if (t - e < 1) return "";
        for (var i, o = null, s = [], n = 0; e < t;) (i = a[e++]) < 128 ? s[n++] = i : i > 191 && i < 224 ? s[n++] = (31 & i) << 6 | 63 & a[e++] : i > 239 && i < 365 ? (i = ((7 & i) << 18 | (63 & a[e++]) << 12 | (63 & a[e++]) << 6 | 63 & a[e++]) - 65536, s[n++] = 55296 + (i >> 10), s[n++] = 56320 + (1023 & i)) : s[n++] = (15 & i) << 12 | (63 & a[e++]) << 6 | 63 & a[e++], n > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)), n = 0);
        return o ? (n && o.push(String.fromCharCode.apply(String, s.slice(0, n))), o.join("")) : String.fromCharCode.apply(String, s.slice(0, n));
      }, t.write = function (a, e, t) {
        for (var i, o, s = t, n = 0; n < a.length; ++n) (i = a.charCodeAt(n)) < 128 ? e[t++] = i : i < 2048 ? (e[t++] = i >> 6 | 192, e[t++] = 63 & i | 128) : 55296 == (64512 & i) && 56320 == (64512 & (o = a.charCodeAt(n + 1))) ? (i = 65536 + ((1023 & i) << 10) + (1023 & o), ++n, e[t++] = i >> 18 | 240, e[t++] = i >> 12 & 63 | 128, e[t++] = i >> 6 & 63 | 128, e[t++] = 63 & i | 128) : (e[t++] = i >> 12 | 224, e[t++] = i >> 6 & 63 | 128, e[t++] = 63 & i | 128);
        return t - s;
      };
    }, 8728: (a, e, t) => {
      t.d(e, {A: () => p});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9662), t.b), c = n()(o()), d = f()(l);
      c.push([a.id, `@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes bounce{from{transform:translateY(2px)}to{transform:translateY(0)}}@keyframes waveform{0%{height:40px}100%{height:4px}}@keyframes heartbeat{0%{opacity:1;transform:scale(1)}50%{opacity:.8;transform:scale(0.9)}100%{opacity:.8;transform:scale(0.9)}}@keyframes greenPulse{0%{box-shadow:0 0 0 0 var(--color-green)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes yellowPulse{0%{box-shadow:0 0 0 0 var(--color-yellow)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes orangePulse{0%{box-shadow:0 0 0 0 var(--color-orange)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes redPulse{0%{box-shadow:0 0 0 0 var(--color-red)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes slideUpIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes slideUpOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}@keyframes slideLeftIn{from{opacity:0;transform:translateX(8px)}to{opacity:1;transform:translateX(0)}}@keyframes slideLeftOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-8px)}}@keyframes slideRightIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}@keyframes slideRightOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(8px)}}@keyframes slideDownIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes slideDownOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(8px)}}@keyframes bounceUpIn{0%{opacity:0;transform:translateY(8px)}40%{opacity:1;transform:translateY(-6px)}100%{opacity:1;transform:translateY(0)}}@keyframes bounceLeftIn{0%{opacity:0;transform:translateX(8px)}40%{opacity:.85;transform:translateX(-6px)}100%{opacity:.85;transform:translateX(0)}}@keyframes bounceRightOut{0%{transform:translateX(0)}20%{opacity:.85;transform:translateX(-4px)}100%{opacity:0;transform:translateX(16px)}}@keyframes bounceDownIn{0%{opacity:0;transform:translateY(-8px)}40%{opacity:1;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}@keyframes timeout{from{width:100%}to{width:0%}}pv-notification{overflow:hidden;position:relative;opacity:.85;border-radius:max(.4vw,4px);animation:bounceLeftIn 400ms ease-in-out;z-index:150;transition:250ms;cursor:url(${d}),auto}pv-notification:not(:disabled):hover{transition:0ms}pv-notification .container{overflow:visible;position:relative;padding:10px 14px;margin:0px;background:var(--color-cards);color:var(--color-text);border-radius:max(.4vw,4px);border:1px solid var(--color-hover);box-shadow:var(--shadow);display:flex;flex-direction:row;gap:14px}pv-notification .container .notification-icon{display:flex;flex-direction:column;justify-content:center;align-items:center}pv-notification .container .notification-icon i{font-size:22px}pv-notification .container .notification-icon i.success{color:var(--color-green)}pv-notification .container .notification-icon i.warning{color:var(--color-yellow)}pv-notification .container .notification-icon i.error{color:var(--color-red)}pv-notification .container .notification-title{font-weight:bold}pv-notification .container .notification-text{font-weight:normal;opacity:.7}pv-notification:hover{opacity:1}pv-notification.closing{animation:bounceRightOut 400ms ease-in-out}pv-notification .notification-bar{opacity:0;z-index:999;position:absolute;bottom:0px;left:0;width:100%;height:2px;background-color:var(--color-text);-webkit-animation:timeout 10s linear forwards;-moz-animation:timeout 10s linear forwards;-o-animation:timeout 10s linear forwards;animation:timeout 10s linear forwards}pv-notification:hover+.notification-bar{-webkit-animation-play-state:paused;-moz-animation-play-state:paused;-o-animation-play-state:paused;animation-play-state:paused}`, ""]);
      const p = c;
    }, 4912: (a, e, t) => {
      t.d(e, {A: () => v});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9662), t.b), c = new URL(t(1873), t.b), d = n()(o()), p = f()(l), u = f()(c);
      d.push([a.id, `dialog{padding:0;background-color:var(--color-cards);border:none;outline:none;overflow:visible;color:var(--color-text);position:absolute;bottom:0;top:0}dialog .header{display:flex;justify-content:space-between;padding:14px;font-size:1.2em;font-weight:bold;border-bottom:2px solid var(--color-hover)}dialog .header .title i{font-size:.87em;margin-right:5px}dialog .header .x{opacity:.4;transition:250ms;font-size:14px;border-radius:99px;padding:2px;width:26px;height:26px;background-color:var(--color-hover);display:flex;align-items:center;justify-content:center}dialog .header .x:hover{transition:0ms;opacity:1;cursor:url(${p}),auto}dialog .content{display:flex;flex-direction:column;padding:14px}dialog .content .buttons{display:flex;justify-content:right;align-items:end;gap:6px;margin-top:6px}dialog[modal]{border-radius:6px;box-shadow:var(--shadow);border:2px solid var(--color-hover)}dialog[modal][open]{animation:bounceUpIn 320ms ease-out}dialog[modal][open]::backdrop{animation:fadeIn 200ms ease-out}dialog[modal][closing]{animation:slideDownOut 100ms ease-out}dialog[modal][closing]::backdrop{animation:fadeOut 200ms ease-out}dialog[modal]::backdrop{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background-color:rgba(0,0,0,.8);cursor:url(${u}),auto}dialog:not([modal]){z-index:100;border-radius:max(.4vw,4px);box-shadow:var(--shadow)}dialog:not([modal]) .content{border-radius:max(.4vw,4px)}dialog:not([modal])[open]{animation:slideDownIn 100ms ease-out}dialog:not([modal])[closing]{animation:slideUpOut 100ms ease-out}dialog:not([modal])::backdrop{background-color:rgba(0,0,0,0);cursor:url(${u}),auto;pointer-events:all}`, ""]);
      const v = d;
    }, 7966: (a, e, t) => {
      t.d(e, {A: () => p});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9738), t.b), c = n()(o()), d = f()(l);
      c.push([a.id, `pv-actions dialog{min-width:170px;background-color:var(--color-cards-alt);border:1px solid var(--color-hover-alt)}pv-actions dialog .content{background:rgba(0,0,0,0);padding:4px}pv-actions dialog .content hr{margin:4px 0;border:0;border-top:1px solid var(--color-hover-alt);width:100%}pv-actions dialog .content div:first-child{padding:3px 10px 5px 10px;opacity:.4;font-size:.9em;user-select:text;text-align:center;cursor:url(${d}),auto}pv-actions dialog .content div:not(:first-child){display:flex;flex-direction:row;justify-content:space-between;align-items:center;border-radius:calc(max(.4vw,4px) - 2px);padding:9px 10px 9px 10px;font-size:.9em;font-weight:bold;transition:250ms}pv-actions dialog .content div:not(:first-child):not(:disabled):hover{transition:0ms}pv-actions dialog .content div:not(:first-child) i{display:flex;justify-content:center;align-items:center;transition:250ms;opacity:.5;width:16px;height:16px}pv-actions dialog .content div:not(:first-child):hover{background-color:var(--color-hover-alt)}pv-actions dialog .content div:not(:first-child):hover i{transition:0ms;opacity:1}pv-actions dialog .content div:not(:first-child):active{opacity:.8}pv-actions dialog .content div:not(:first-child).unmute-notes,pv-actions dialog .content div:not(:first-child).unmute-chat{color:var(--color-red);display:none}pv-actions dialog .content div:not(:first-child).kick,pv-actions dialog .content div:not(:first-child).ban,pv-actions dialog .content div:not(:first-child).banip{color:var(--color-red)}`, ""]);
      const p = c;
    }, 8138: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-ban dialog{width:290px}pv-ban dialog .content{gap:8px}", ""]);
      const r = n;
    }, 6138: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-devices dialog .content{display:flex;flex-direction:column;gap:14px}pv-devices dialog .content table{border-collapse:collapse;padding:0}pv-devices dialog .content table th{padding-bottom:6px}pv-devices dialog .content table td{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-wrap:none}pv-devices dialog .content table tr>td:first-child{max-width:220px;width:140px}pv-devices dialog .content table tr:not(:last-child)>th,pv-devices dialog .content table tr:not(:last-child)>td{padding:0;padding-bottom:6px}pv-devices dialog .content table th:first-child,pv-devices dialog .content table td:first-child{text-align:left;padding-right:32px}pv-devices dialog .content table th:nth-child(2),pv-devices dialog .content table td:nth-child(2){padding-right:6px}pv-devices dialog .content table td:not(:last-child){width:45px}pv-devices dialog .content table .muted{color:var(--color-text);opacity:.4}pv-devices dialog .content>.field{position:relative;display:flex;flex-direction:column;gap:3px}pv-devices dialog .content>.field label{font-size:14px;margin-left:1px;opacity:.5}", ""]);
      const r = n;
    }, 9114: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-message dialog{width:330px}pv-message dialog .content .message{margin-bottom:0px}", ""]);
      const r = n;
    }, 7108: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-more dialog{width:130px;background-color:var(--color-cards-alt)}pv-more dialog .content{gap:2px;padding:4px}pv-more dialog .content .link{display:flex;flex-direction:row;justify-content:space-between;align-items:center;border-radius:calc(max(.4vw,4px) - 2px);padding:9px 10px 9px 10px;font-size:.9em;font-weight:bold;outline:none;color:var(--color-text);text-decoration:none;transition:250ms}pv-more dialog .content .link i{transition:250ms;opacity:.4}pv-more dialog .content .link:not(:disabled):hover{transition:0ms}pv-more dialog .content .link:hover{background-color:var(--color-hover-alt)}pv-more dialog .content .link:hover i{transition:0ms;opacity:1}", ""]);
      const r = n;
    }, 9728: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-new-room dialog{width:280px}pv-new-room dialog .content{gap:8px}pv-new-room dialog .content .field{display:flex;flex-direction:column;gap:3px}pv-new-room dialog .content .field label{font-size:14px;margin-left:1px;opacity:.5}pv-new-room dialog .content .private{display:flex;flex-direction:row;align-items:center;gap:8px;font-size:14px}pv-new-room dialog .content .buttons{margin-top:0}", ""]);
      const r = n;
    }, 8394: (a, e, t) => {
      t.d(e, {A: () => p});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9662), t.b), c = n()(o()), d = f()(l);
      c.push([a.id, `pv-profile dialog{width:290px}pv-profile dialog .content{gap:8px}pv-profile dialog .content .grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;grid-template-areas:"a b" "c c";gap:8px}pv-profile dialog .content .grid .a{grid-area:a}pv-profile dialog .content .grid .b{grid-area:b}pv-profile dialog .content .grid .c{grid-area:c}pv-profile dialog .content .field{position:relative;display:flex;flex-direction:column;gap:3px}pv-profile dialog .content .field label{font-size:14px;margin-left:1px;opacity:.5}pv-profile dialog .content .input-color-text{position:relative}pv-profile dialog .content input[type=color]{position:absolute;height:22px;width:22px;bottom:6px;right:6px;border:none;outline:none;cursor:url(${d}),auto;background-color:rgba(0,0,0,0);padding:0;margin:0}pv-profile dialog .content input[type=color]::-webkit-color-swatch{border:none;border-radius:4px;transition:250ms}pv-profile dialog .content input[type=color]::-webkit-color-swatch:not(:disabled):hover{transition:0ms}pv-profile dialog .content input[type=color]::-webkit-color-swatch:hover{filter:brightness(1.1)}pv-profile dialog .content input[type=color]::-webkit-color-swatch-wrapper{border:none;padding:0;margin:0}pv-profile dialog .content input[type=color]::-moz-color-swatch{border:none;border-radius:max(.4vw,4px);transition:250ms}pv-profile dialog .content input[type=color]::-moz-color-swatch:not(:disabled):hover{transition:0ms}pv-profile dialog .content input[type=color]::-moz-color-swatch:hover{filter:brightness(1.1)}pv-profile dialog .content input[type=color]::-moz-color-swatch-wrapper{border:none;padding:0;margin:0}`, ""]);
      const p = c;
    }, 5760: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes bounce{from{transform:translateY(2px)}to{transform:translateY(0)}}@keyframes waveform{0%{height:40px}100%{height:4px}}@keyframes heartbeat{0%{opacity:1;transform:scale(1)}50%{opacity:.8;transform:scale(0.9)}100%{opacity:.8;transform:scale(0.9)}}@keyframes greenPulse{0%{box-shadow:0 0 0 0 var(--color-green)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes yellowPulse{0%{box-shadow:0 0 0 0 var(--color-yellow)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes orangePulse{0%{box-shadow:0 0 0 0 var(--color-orange)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes redPulse{0%{box-shadow:0 0 0 0 var(--color-red)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes slideUpIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes slideUpOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}@keyframes slideLeftIn{from{opacity:0;transform:translateX(8px)}to{opacity:1;transform:translateX(0)}}@keyframes slideLeftOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-8px)}}@keyframes slideRightIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}@keyframes slideRightOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(8px)}}@keyframes slideDownIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes slideDownOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(8px)}}@keyframes bounceUpIn{0%{opacity:0;transform:translateY(8px)}40%{opacity:1;transform:translateY(-6px)}100%{opacity:1;transform:translateY(0)}}@keyframes bounceLeftIn{0%{opacity:0;transform:translateX(8px)}40%{opacity:.85;transform:translateX(-6px)}100%{opacity:.85;transform:translateX(0)}}@keyframes bounceRightOut{0%{transform:translateX(0)}20%{opacity:.85;transform:translateX(-4px)}100%{opacity:0;transform:translateX(16px)}}@keyframes bounceDownIn{0%{opacity:0;transform:translateY(-8px)}40%{opacity:1;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}@keyframes timeout{from{width:100%}to{width:0%}}@keyframes slideDownIn1{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}pv-rooms dialog{min-width:220px;max-width:270px;background-color:var(--color-cards-alt)}pv-rooms dialog .content{padding:0;color:var(--color-text);padding:4px;display:flex;flex-direction:column;gap:2px}pv-rooms dialog .content div.animate:nth-child(1){animation-delay:.05s}pv-rooms dialog .content div.animate:nth-child(2){animation-delay:.1s}pv-rooms dialog .content div.animate:nth-child(3){animation-delay:.15s}pv-rooms dialog .content div.animate:nth-child(4){animation-delay:.2s}pv-rooms dialog .content div.animate:nth-child(5){animation-delay:.25s}pv-rooms dialog .content div.animate:nth-child(6){animation-delay:.3s}pv-rooms dialog .content div.animate:nth-child(7){animation-delay:.35s}pv-rooms dialog .content div.animate:nth-child(8){animation-delay:.4s}pv-rooms dialog .content div.animate:nth-child(9){animation-delay:.45s}pv-rooms dialog .content div.animate:nth-child(10){animation-delay:.5s}pv-rooms dialog .content div.animate:nth-child(11){animation-delay:.55s}pv-rooms dialog .content div.animate:nth-child(12){animation-delay:.6s}pv-rooms dialog .content div.animate:nth-child(13){animation-delay:.65s}pv-rooms dialog .content div.animate:nth-child(14){animation-delay:.7s}pv-rooms dialog .content div.animate:nth-child(15){animation-delay:.75s}pv-rooms dialog .content div.animate:nth-child(16){animation-delay:.8s}pv-rooms dialog .content div.animate:nth-child(17){animation-delay:.85s}pv-rooms dialog .content div.animate:nth-child(18){animation-delay:.9s}pv-rooms dialog .content div.animate:nth-child(19){animation-delay:.95s}pv-rooms dialog .content div.animate:nth-child(20){animation-delay:1s}pv-rooms dialog .content div.animate:nth-child(21){animation-delay:1.05s}pv-rooms dialog .content div.animate:nth-child(22){animation-delay:1.1s}pv-rooms dialog .content div.animate:nth-child(23){animation-delay:1.15s}pv-rooms dialog .content div.animate:nth-child(24){animation-delay:1.2s}pv-rooms dialog .content>div{border-radius:calc(max(.4vw,4px) - 2px);padding:9px 10px 9px 10px;z-index:200;transition:150ms;font-size:.9em;font-weight:bold;display:flex;justify-content:space-between;gap:10px;transition:250ms}pv-rooms dialog .content>div:not(:disabled):hover{transition:0ms}pv-rooms dialog .content>div .name{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-wrap:none;pointer-events:none}pv-rooms dialog .content>div .count{min-width:fit-content;pointer-events:none}pv-rooms dialog .content>div.lobby>.name,pv-rooms dialog .content>div.lobby>.count{color:var(--color-lobby)}pv-rooms dialog .content>div.animate{opacity:0;animation:slideDownIn1 250ms ease-out forwards}pv-rooms dialog .content>div:hover,pv-rooms dialog .content>div.selected{transition:50ms;background-color:var(--color-hover-alt)}pv-rooms dialog .content>div:last-child span{opacity:.5}", ""]);
      const r = n;
    }, 672: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-settings dialog{min-width:310px}pv-settings dialog .content{padding-bottom:12px}pv-settings dialog .content .container{display:flex;flex-direction:column;justify-content:flex-start}pv-settings dialog .content .container h3{margin-bottom:4px}pv-settings dialog .content .container .field{display:flex;flex-direction:row;align-items:center;justify-content:space-between;height:38px;gap:3px}pv-settings dialog .content .container .field select{width:46%}pv-settings dialog .content .container .buttons{font-size:.85em}pv-settings dialog .content .footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-top:16px;padding:0 2px}", ""]);
      const r = n;
    }, 5500: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes bounce{from{transform:translateY(2px)}to{transform:translateY(0)}}@keyframes waveform{0%{height:40px}100%{height:4px}}@keyframes heartbeat{0%{opacity:1;transform:scale(1)}50%{opacity:.8;transform:scale(0.9)}100%{opacity:.8;transform:scale(0.9)}}@keyframes greenPulse{0%{box-shadow:0 0 0 0 var(--color-green)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes yellowPulse{0%{box-shadow:0 0 0 0 var(--color-yellow)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes orangePulse{0%{box-shadow:0 0 0 0 var(--color-orange)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes redPulse{0%{box-shadow:0 0 0 0 var(--color-red)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes slideUpIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes slideUpOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}@keyframes slideLeftIn{from{opacity:0;transform:translateX(8px)}to{opacity:1;transform:translateX(0)}}@keyframes slideLeftOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-8px)}}@keyframes slideRightIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}@keyframes slideRightOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(8px)}}@keyframes slideDownIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes slideDownOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(8px)}}@keyframes bounceUpIn{0%{opacity:0;transform:translateY(8px)}40%{opacity:1;transform:translateY(-6px)}100%{opacity:1;transform:translateY(0)}}@keyframes bounceLeftIn{0%{opacity:0;transform:translateX(8px)}40%{opacity:.85;transform:translateX(-6px)}100%{opacity:.85;transform:translateX(0)}}@keyframes bounceRightOut{0%{transform:translateX(0)}20%{opacity:.85;transform:translateX(-4px)}100%{opacity:0;transform:translateX(16px)}}@keyframes bounceDownIn{0%{opacity:0;transform:translateY(-8px)}40%{opacity:1;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}@keyframes timeout{from{width:100%}to{width:0%}}@keyframes slideDownIn2{from{opacity:0;transform:translateY(-8px)}to{opacity:.7;transform:translateY(0)}}pv-sounds dialog{min-width:170px}pv-sounds dialog .content{padding:0;color:var(--color-text);padding:4px;display:flex;flex-direction:column;gap:2px}pv-sounds dialog .content div:nth-child(1){animation-delay:.05s}pv-sounds dialog .content div:nth-child(2){animation-delay:.1s}pv-sounds dialog .content div:nth-child(3){animation-delay:.15s}pv-sounds dialog .content div:nth-child(4){animation-delay:.2s}pv-sounds dialog .content div{border-radius:calc(max(.4vw,4px) - 2px);padding:9px 32px 9px 10px;z-index:200;transition:150ms;font-size:.9em;font-weight:bold;opacity:0;animation:slideDownIn2 250ms ease-out forwards}pv-sounds dialog .content div:hover,pv-sounds dialog .content div[selected]{transition:50ms;background-color:var(--color-hover)}pv-sounds dialog .content div i{margin-right:6px;width:18px;height:18px;text-align:center}", ""]);
      const r = n;
    }, 7030: (a, e, t) => {
      t.d(e, {A: () => p});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9662), t.b), c = n()(o()), d = f()(l);
      c.push([a.id, `pv-transpose dialog{overflow:hidden;width:180px}pv-transpose dialog .content{display:flex;flex-direction:column;gap:10px}pv-transpose dialog .content .field{display:flex;flex-direction:row;gap:1px}pv-transpose dialog .content .field input[type=number]{font-weight:bold;border-top-right-radius:0;border-bottom-right-radius:0;flex:1}pv-transpose dialog .content .field .minus,pv-transpose dialog .content .field .plus{height:34px;width:34px;background-color:var(--color-hover);display:flex;justify-content:center;align-items:center;cursor:url(${d}),auto}pv-transpose dialog .content .field .plus{border-top-right-radius:4px;border-bottom-right-radius:4px}pv-transpose dialog .content small{opacity:.4;font:var(--font-small)}`, ""]);
      const p = c;
    }, 9952: (a, e, t) => {
      t.d(e, {A: () => p});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9662), t.b), c = n()(o()), d = f()(l);
      c.push([a.id, `pv-velocity dialog{overflow:hidden;width:192px}pv-velocity dialog .content{display:flex;flex-direction:column;gap:10px}pv-velocity dialog .content .field{display:flex;flex-direction:row;gap:1px}pv-velocity dialog .content .field input[type=number]{font-weight:bold;border-top-right-radius:0;border-bottom-right-radius:0;flex:1}pv-velocity dialog .content .field .minus,pv-velocity dialog .content .field .plus{height:34px;width:34px;background-color:var(--color-hover);display:flex;justify-content:center;align-items:center;cursor:url(${d}),auto}pv-velocity dialog .content .field .plus{border-top-right-radius:4px;border-bottom-right-radius:4px}pv-velocity dialog .content small{opacity:.4;font:var(--font-small)}`, ""]);
      const p = c;
    }, 5734: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-canvas{display:flex;position:relative;flex-direction:column;background-color:var(--color-background);overflow:hidden;flex:1}pv-canvas .bg-canvas,pv-canvas .fg-canvas{position:absolute;pointer-events:none;image-rendering:pixelated;z-index:8}pv-canvas pv-note{z-index:9}pv-canvas #notifications{position:absolute;bottom:max(.7vw,8px);right:0;display:flex;flex-direction:column;gap:10px;width:365px;height:auto;padding:0;margin:0}", ""]);
      const r = n;
    }, 9546: (a, e, t) => {
      t.d(e, {A: () => v});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9738), t.b), c = new URL(t(9662), t.b), d = n()(o()), p = f()(l), u = f()(c);
      d.push([a.id, `pv-chat{flex:1;width:20vw;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;z-index:80;gap:8px}pv-chat .messages{display:flex;height:100%;overflow-y:auto;overflow-x:hidden;flex-direction:column;padding:10px;gap:2px;margin:0;list-style-type:none;mask-image:linear-gradient(to top, black calc(100% - 120px), transparent 100%)}pv-chat .messages:not(:hover)::-webkit-scrollbar{transition:all 1s ease-in;background-color:var(--color-cards)}pv-chat .messages :first-child{margin-top:auto;padding-top:14px}pv-chat .messages .message{user-select:text;cursor:url(${p}),auto;overflow-wrap:anywhere;width:100%;animation:slideUpIn 120ms ease-in-out;padding:0 6px;clip-path:view-box;font:var(--font-default);line-height:21px}pv-chat .messages .message img{transition:250ms;height:19px;max-width:32px;vertical-align:top;image-rendering:auto;cursor:url(${p}),auto}pv-chat .messages .message .username{user-select:text;cursor:url(${p}),auto;margin-right:8px;font-weight:bold}pv-chat .messages .message .username .fa-discord{padding:0;color:#5865f2;font-size:14px}pv-chat .messages .message .mention{background-color:var(--color-hover);color:var(--color-text);cursor:url(${u}),auto;border-radius:2px;font-weight:bold;transition:250ms}pv-chat .messages .message .mention:hover{transition:0ms;background-color:var(--color-hover)}pv-chat .messages .system{display:flex;justify-content:center;text-align:center;font-style:italic;animation:none;width:100%;color:var(--color-text);opacity:.4}pv-chat>div{position:relative;display:flex;flex-direction:row}pv-chat>div input[type=text]{display:flex;align-items:center;height:46px;padding:0 42px 0 14px;border:none;outline:none;cursor:url(${p}),auto;color:var(--color-text);font-size:1em;box-sizing:border-box;width:100%;border-radius:6px;transition:background-color 80ms;background-color:rgba(0,0,0,0);border:1px solid var(--color-hover);z-index:25}pv-chat>div input[type=text]:focus{background-color:var(--color-hover)}pv-chat>div button{position:absolute;right:2px;z-index:26;background-color:rgba(0,0,0,0);cursor:url(${u}),auto;font-size:1em;border:none;height:46px;aspect-ratio:1;padding:0;border-radius:0;box-shadow:none;margin:0;flex:0;color:var(--color-text)}pv-chat>div button i{opacity:.4;cursor:url(${u}),auto;transition:250ms;font-size:1.1em}pv-chat>div button:hover{background:rgba(0,0,0,0) !important}pv-chat>div button:hover i{transition:0ms;opacity:1}`, ""]);
      const v = d;
    }, 6610: (a, e, t) => {
      t.d(e, {A: () => p});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(1873), t.b), c = n()(o()), d = f()(l);
      c.push([a.id, `pv-cursor{position:absolute;display:flex;z-index:90;transition:30ms ease-out;pointer-events:none;opacity:.9}pv-cursor.idle{opacity:.4;transition:opacity 300ms ease-out}pv-cursor .icon{position:fixed;width:18px;height:24px;background-image:url(${d});pointer-events:none;animation-name:heartbeat;animation-duration:.6s;animation-timing-function:linear;animation-iteration-count:infinite}pv-cursor .badge{padding:4px 6px;font-size:14px;font-weight:bold;margin-top:20px;margin-left:6px;max-width:170px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-color:var(--color-hover);border-radius:6px}`, ""]);
      const p = c;
    }, 4950: (a, e, t) => {
      t.d(e, {A: () => v});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9662), t.b), c = new URL(t(4675), t.b), d = n()(o()), p = f()(l), u = f()(c);
      d.push([a.id, `pv-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:var(--color-text);background-color:var(--color-cards);height:48px;gap:8px;padding:0 8px 0 12px;border-bottom:1px solid var(--color-hover)}pv-header .left{gap:12px !important}pv-header .left .pianoverse{display:flex;flex-direction:row;align-items:center;gap:6px;font:var(--font-title);cursor:url(${p}),auto}pv-header .left .pianoverse svg{width:22px;height:22px;fill:var(--color-text)}pv-header .left .pianoverse .title{font-weight:bold;opacity:.6}pv-header .left,pv-header .right,pv-header .center{display:flex;flex-direction:row;align-items:center;gap:2px}pv-header .left .thing,pv-header .right .thing,pv-header .center .thing{display:flex;flex-direction:row;align-items:center;gap:14px}pv-header .left .volume,pv-header .right .volume,pv-header .center .volume{display:flex;flex-direction:row;justify-content:space-between;margin-right:4px}pv-header .left .volume i,pv-header .right .volume i,pv-header .center .volume i{height:100%;aspect-ratio:1;display:flex;justify-content:center;align-items:center}pv-header .left>.icon,pv-header .right>.icon,pv-header .center>.icon{height:28px;width:28px;border-radius:0;display:flex;justify-content:center;align-items:center;transition:250ms;border-radius:6px;transition:250ms}pv-header .left>.icon:not(:disabled):hover,pv-header .right>.icon:not(:disabled):hover,pv-header .center>.icon:not(:disabled):hover{transition:0ms}pv-header .left>.icon:not([disabled]):hover,pv-header .left>.icon.open,pv-header .right>.icon:not([disabled]):hover,pv-header .right>.icon.open,pv-header .center>.icon:not([disabled]):hover,pv-header .center>.icon.open{background-color:var(--color-hover)}pv-header .left>.icon[disabled],pv-header .right>.icon[disabled],pv-header .center>.icon[disabled]{cursor:url(${u}),auto;opacity:.4}pv-header .left>.icon[disabled] i,pv-header .right>.icon[disabled] i,pv-header .center>.icon[disabled] i{cursor:url(${u}),auto}pv-header .left .divider,pv-header .right .divider,pv-header .center .divider{background-color:var(--color-hover);border-radius:2px;margin:0 2px;height:16px;width:2px}`, ""]);
      const v = d;
    }, 5750: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-keys{display:flex;flex-direction:row;gap:1px;width:100%;aspect-ratio:8;overflow:hidden;min-height:100px;background-color:var(--color-hover);border-radius:max(.4vw,4px);box-shadow:var(--shadow);z-index:80}pv-keys .key{position:relative;opacity:1;flex:1}pv-keys .key .show-label[data-label]::after{content:attr(data-label);position:absolute;bottom:0;left:0;width:100%;display:flex;align-items:center;justify-content:center}pv-keys .key .white{opacity:1;background-color:#fff;width:100%;height:100%;transition-property:background-color,opacity;transition-timing-function:ease-out;transition-duration:300ms}pv-keys .key .white.loading{opacity:.3}pv-keys .key .white.show-label[data-label]::after{color:#000;font-size:.65vw}pv-keys .key .black{opacity:1;background-color:#1b1b1b;border-bottom-left-radius:3px;border-bottom-right-radius:3px;width:60%;height:64%;position:absolute;top:0;left:70%;z-index:20;transition-property:background-color,opacity;transition-duration:200ms;transition-timing-function:ease-out}pv-keys .key .black.loading{opacity:.3}pv-keys .key .black.show-label[data-label]::after{color:#fff;font-size:.5vw}", ""]);
      const r = n;
    }, 5146: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, '@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes bounce{from{transform:translateY(2px)}to{transform:translateY(0)}}@keyframes waveform{0%{height:40px}100%{height:4px}}@keyframes heartbeat{0%{opacity:1;transform:scale(1)}50%{opacity:.8;transform:scale(0.9)}100%{opacity:.8;transform:scale(0.9)}}@keyframes greenPulse{0%{box-shadow:0 0 0 0 var(--color-green)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes yellowPulse{0%{box-shadow:0 0 0 0 var(--color-yellow)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes orangePulse{0%{box-shadow:0 0 0 0 var(--color-orange)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes redPulse{0%{box-shadow:0 0 0 0 var(--color-red)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes slideUpIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes slideUpOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}@keyframes slideLeftIn{from{opacity:0;transform:translateX(8px)}to{opacity:1;transform:translateX(0)}}@keyframes slideLeftOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-8px)}}@keyframes slideRightIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}@keyframes slideRightOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(8px)}}@keyframes slideDownIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes slideDownOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(8px)}}@keyframes bounceUpIn{0%{opacity:0;transform:translateY(8px)}40%{opacity:1;transform:translateY(-6px)}100%{opacity:1;transform:translateY(0)}}@keyframes bounceLeftIn{0%{opacity:0;transform:translateX(8px)}40%{opacity:.85;transform:translateX(-6px)}100%{opacity:.85;transform:translateX(0)}}@keyframes bounceRightOut{0%{transform:translateX(0)}20%{opacity:.85;transform:translateX(-4px)}100%{opacity:0;transform:translateX(16px)}}@keyframes bounceDownIn{0%{opacity:0;transform:translateY(-8px)}40%{opacity:1;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}@keyframes timeout{from{width:100%}to{width:0%}}pv-loader{position:absolute;top:0px;left:0;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(0,0,0,.8);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);color:#dbdbdb;z-index:200;animation:fadeIn 200ms forwards;pointer-events:all}pv-loader .animation{display:flex;justify-content:space-around;align-items:center;height:40px;width:100%}pv-loader .animation .loader{width:8px;height:40px;border-radius:4px;display:block;position:relative;background:#dbdbdb;color:#dbdbdb;box-sizing:border-box;animation:waveform .3s .15s linear infinite alternate}pv-loader .animation .loader::after,pv-loader .animation .loader::before{content:"";width:8px;height:40px;border-radius:4px;background:currentColor;position:absolute;top:50%;transform:translateY(-50%);left:15px;box-sizing:border-box;animation:waveform .3s .3s linear infinite alternate}pv-loader .animation .loader::before{left:-15px;animation-delay:0s}pv-loader .caption{color:#dbdbdb;text-align:center;font-size:1.1rem;margin-top:1rem}pv-loader.closing{animation:slideDownOut 200ms forwards;animation-delay:350ms;pointer-events:none}', ""]);
      const r = n;
    }, 1230: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "@keyframes press{from{height:0}to{height:100dvh}}@keyframes release{from{transform:translateY(0)}to{transform:translateY(-100dvh)}}pv-note{position:absolute;bottom:0;box-sizing:border-box;border-radius:.5vw;border-bottom-left-radius:0;border-bottom-right-radius:0;background-color:#fff;box-shadow:rgba(255,255,255,.4) 0px 5px,rgba(255,255,255,.3) 0px 10px,rgba(255,255,255,.2) 0px 15px,rgba(255,255,255,.1) 0px 20px,rgba(255,255,255,.05) 0px 25px;animation-duration:2.5s;animation-name:press;animation-timing-function:linear;animation-fill-mode:forwards;pointer-events:none}pv-note.released{border-bottom-left-radius:.5vw;border-bottom-right-radius:.5vw;animation-name:release}", ""]);
      const r = n;
    }, 1358: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-ping{position:relative;display:flex;flex-direction:row;align-items:center;text-align:right;width:auto;gap:6px;opacity:.5}pv-ping .icon{color:var(--color-text);border-radius:50%;font-size:.5em}pv-ping .icon.green{color:var(--color-green);animation:greenPulse 5s infinite}pv-ping .icon.yellow{color:var(--color-yellow);animation:yellowPulse 5s infinite}pv-ping .icon.orange{color:var(--color-orange);animation:orangePulse 5s infinite}pv-ping .icon.red{color:var(--color-red);animation:redPulse 5s infinite}pv-ping .ms{color:var(--color-text);font-size:.8em}", ""]);
      const r = n;
    }, 6898: (a, e, t) => {
      t.d(e, {A: () => v});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9662), t.b), c = new URL(t(1873), t.b), d = n()(o()), p = f()(l), u = f()(c);
      d.push([a.id, `@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes bounce{from{transform:translateY(2px)}to{transform:translateY(0)}}@keyframes waveform{0%{height:40px}100%{height:4px}}@keyframes heartbeat{0%{opacity:1;transform:scale(1)}50%{opacity:.8;transform:scale(0.9)}100%{opacity:.8;transform:scale(0.9)}}@keyframes greenPulse{0%{box-shadow:0 0 0 0 var(--color-green)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes yellowPulse{0%{box-shadow:0 0 0 0 var(--color-yellow)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes orangePulse{0%{box-shadow:0 0 0 0 var(--color-orange)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes redPulse{0%{box-shadow:0 0 0 0 var(--color-red)}20%{box-shadow:0 0 0 6px rgba(0,0,0,0)}100%{box-shadow:0 0 0 6px rgba(0,0,0,0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes slideUpIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes slideUpOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}@keyframes slideLeftIn{from{opacity:0;transform:translateX(8px)}to{opacity:1;transform:translateX(0)}}@keyframes slideLeftOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-8px)}}@keyframes slideRightIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}@keyframes slideRightOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(8px)}}@keyframes slideDownIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes slideDownOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(8px)}}@keyframes bounceUpIn{0%{opacity:0;transform:translateY(8px)}40%{opacity:1;transform:translateY(-6px)}100%{opacity:1;transform:translateY(0)}}@keyframes bounceLeftIn{0%{opacity:0;transform:translateX(8px)}40%{opacity:.85;transform:translateX(-6px)}100%{opacity:.85;transform:translateX(0)}}@keyframes bounceRightOut{0%{transform:translateX(0)}20%{opacity:.85;transform:translateX(-4px)}100%{opacity:0;transform:translateX(16px)}}@keyframes bounceDownIn{0%{opacity:0;transform:translateY(-8px)}40%{opacity:1;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}@keyframes timeout{from{width:100%}to{width:0%}}pv-room{display:flex;flex-direction:row;justify-content:space-between;max-width:12vw}pv-room .room-selector{display:flex;flex-direction:row;justify-content:left;align-items:center;text-align:left;font-weight:bold;gap:10px;cursor:url(${p}),auto;height:100%;transition:250ms}pv-room .room-selector:not(:disabled):hover{transition:0ms}pv-room .room-selector.open{border-bottom-left-radius:0;border-bottom-right-radius:0}pv-room .room-selector .room-name{font-size:1.2em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;text-align:left;width:min-content}pv-room .room-list{padding:6px;position:absolute;top:48px;left:max(.7vw,8px);width:calc(20vw + max(.7vw,8px)*2);max-height:60vh;cursor:url(${u}),auto;border-radius:max(.4vw,4px);border-top-left-radius:0;border-top-right-radius:0;background-color:var(--color-cards);border:1px solid var(--color-hover);border-top:0;display:flex;flex-direction:column;overflow:auto;font-weight:normal;box-shadow:var(--shadow);transition:background-color 250ms;opacity:1;animation:slideDownIn 80ms ease-out;-moz-animation:none;color:var(--color-text);gap:2px;pointer-events:none;animation:slideUpOut 80ms ease-out;-moz-animation:none;opacity:0}pv-room .room-list>*{font-weight:bold;padding:8px 10px;display:flex;justify-content:space-between;transition:250ms;border-radius:max(.4vw,4px)}pv-room .room-list>*:not(:disabled):hover{transition:0ms}pv-room .room-list>* .room-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;max-width:80%;font-size:1em}pv-room .room-list>* .room-count{pointer-events:none;opacity:.4}pv-room .room-list>*:hover{transition:0ms;background-color:var(--color-hover)}pv-room .room-list>*:not([data-id]){color:color-mix(in lch, var(--color-text), var(--color-hover));font-size:1em}`, ""]);
      const v = d;
    }, 2732: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-toolbar{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:var(--color-text);background-color:var(--color-cards);height:48px;gap:6px;border-radius:max(.4vw,4px);z-index:80;box-shadow:var(--shadow)}pv-toolbar .left,pv-toolbar .right{display:flex;flex-direction:row;align-items:center;gap:6px;height:100%;border-radius:max(.4vw,4px);flex:1;padding:8px}pv-toolbar .left>*,pv-toolbar .right>*{padding:6px 8px;display:flex;flex-direction:row;gap:6px;justify-content:center;align-items:center;transition:250ms;border-radius:8px;color:var(--color-text-muted);font-size:.9em;transition:250ms}pv-toolbar .left>*:not(:disabled):hover,pv-toolbar .right>*:not(:disabled):hover{transition:0ms}pv-toolbar .left>*:not([disabled]):not(.sustain):hover,pv-toolbar .left>*.open,pv-toolbar .right>*:not([disabled]):not(.sustain):hover,pv-toolbar .right>*.open{background-color:var(--color-hover)}pv-toolbar .left>* .title,pv-toolbar .right>* .title{font-weight:bold}pv-toolbar .left>* span,pv-toolbar .right>* span{font-weight:bold;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}pv-toolbar .left>* .value,pv-toolbar .right>* .value{opacity:.4}pv-toolbar .left .divider,pv-toolbar .right .divider{background-color:var(--color-hover);border-radius:2px;margin:0 2px;height:16px;width:2px}pv-toolbar .right{justify-content:end}pv-toolbar .center{width:100%;justify-content:end}", ""]);
      const r = n;
    }, 8098: (a, e, t) => {
      t.d(e, {A: () => p});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9662), t.b), c = n()(o()), d = f()(l);
      c.push([a.id, `pv-user{display:flex;align-items:center;border-radius:6px;padding:4px 6px;font-size:14px;margin:0;max-width:170px;line-height:1.4em;transition:250ms;cursor:url(${d}),auto;transition:250ms;border:none;position:relative}pv-user:not(:disabled):hover{transition:0ms}pv-user .text{font-weight:bold;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}pv-user .badges{color:var(--color-text);font-size:xx-small;font-weight:bold;border-radius:5px;line-height:18px;margin-left:5px;padding:0 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:.7}pv-user .badges i{color:var(--color-text);opacity:.3;font-size:.8em}pv-user.muted{opacity:.4}pv-user:hover,pv-user.open{background-color:var(--color-hover) !important}`, ""]);
      const p = c;
    }, 8758: (a, e, t) => {
      t.d(e, {A: () => r});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s)()(o());
      n.push([a.id, "pv-users{display:flex;flex-direction:column;justify-content:space-between;width:20vw;position:relative;overflow:visible;padding-bottom:6px}pv-users .users{display:flex;flex-wrap:wrap;max-height:25vh;padding-bottom:2px;margin:0 0 4px 0;gap:5px;overflow:auto}", ""]);
      const r = n;
    }, 2100: (a, e, t) => {
      t.d(e, {A: () => P});
      var i = t(1601), o = t.n(i), s = t(6314), n = t.n(s), r = t(4417), f = t.n(r), l = new URL(t(9738), t.b), c = new URL(t(4675), t.b), d = new URL(t(9662), t.b), p = new URL(t(3369), t.b), u = new URL(t(651), t.b), v = new URL(t(2459), t.b), h = new URL(t(4189), t.b), m = new URL(t(1873), t.b), g = n()(o());
      g.push([a.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);"]);
      var _ = f()(l), b = f()(c), y = f()(d), w = f()(p), k = f()(u), x = f()(v), S = f()(h), E = f()(m);
      g.push([a.id, `input{font-family:"Nunito",sans-serif}input[type=text]{width:100%;font-size:14px;color:var(--color-text);background-color:var(--color-hover);border-radius:4px;border:1px solid var(--color-hover);padding:6px;cursor:url(${_}),auto;outline:none}input[type=text]::placeholder{opacity:.4;color:var(--color-text)}input[type=text]:disabled{opacity:.4;cursor:url(${b}),auto}input[type=number]{-moz-appearance:textfield;appearance:textfield;width:100%;font-size:14px;padding:0 4px 0 6px;height:34px;border-radius:4px;background-color:var(--color-hover);color:var(--color-text);border:none;outline:none;border:1px solid var(--color-hover);cursor:url(${_}),auto;transition:250ms}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]:not(:disabled):hover{transition:0ms}input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{background-color:var(--color-hover)}input[type=range]{-webkit-appearance:none;appearance:none;background:rgba(0,0,0,0);cursor:url(${y}),auto}input[type=range]::-webkit-slider-runnable-track{background:var(--color-hover);border-radius:max(.4vw,4px);height:.5rem}input[type=range]::-moz-range-track{background:var(--color-hover);border-radius:max(.4vw,4px);height:.5rem}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:.5rem;height:1.3rem;background:var(--color-text);border-radius:99px;cursor:url(${y}),auto;margin-top:-0.4rem;border:none}input[type=range]::-moz-range-thumb{-webkit-appearance:none;appearance:none;width:.5rem;height:1.3rem;background:var(--color-text);border-radius:99px;cursor:url(${y}),auto;margin-top:-0.4rem;border:none}input[type=range]:focus{outline:none}button{outline:0;border:none;border-radius:8px;height:34px;font-size:13px;background-color:var(--color-hover);color:var(--color-text);padding:7px 14px;cursor:url(${y}),auto;font-family:"Nunito",sans-serif;transition:250ms;box-sizing:border-box}button:not(:disabled):hover{transition:0ms}button:not(:disabled):hover{background-color:var(--color-hover)}button:disabled{opacity:.4;cursor:url(${b}),auto}.toggle{position:relative;display:inline-block;width:45px;height:26px}.toggle input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:url(${y}),auto;top:0;left:0;right:0;bottom:0;background-color:var(--color-hover);transition:100ms;border-radius:32px;transition:250ms}.slider:not(:disabled):hover{transition:0ms}.slider:hover{background-color:var(--color-hover)}.slider:before{position:absolute;bottom:5px;left:5px;content:"";background-color:#fff;border-radius:50%;transition:100ms;height:16px;width:16px}input:checked+.slider{background-color:var(--color-toggles)}input:checked+.slider:before{-webkit-transform:translateX(19px);-ms-transform:translateX(19px);transform:translateX(19px)}input:disabled+.slider{opacity:.4;cursor:url(${b}),auto}input:disabled+.slider:before{opacity:.4;cursor:url(${b}),auto}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:10px}a{cursor:url(${y}),auto;text-decoration:none;color:var(--color-links);font-weight:bold;user-select:auto;transition:250ms}a *{cursor:url(${y}),auto}a:hover{transition:0ms;text-decoration:underline}select{width:100%;font-size:14px;padding:0 4px;height:34px;border-radius:6px;background-color:var(--color-hover);color:var(--color-text);border:none;outline:none;border:1px solid var(--color-hover);transition:250ms}select:not(:disabled):hover{transition:0ms}select:focus{outline:none}select:disabled{cursor:url(${b}),auto}kbd{background-color:var(--color-background);border-bottom:2px solid var(--color-hover);padding:0px 3px;border-radius:3px;color:var(--color-text)}[data-tooltip]{position:relative}[data-tooltip]:before{display:block;opacity:0;pointer-events:none;position:absolute;z-index:100;background:var(--color-hover);color:var(--color-text);border-radius:max(.4vw,4px);border:1px solid var(--color-hover);content:attr(data-tooltip);font-size:14px;padding:6px 9px;top:36px;white-space:nowrap;transform:translate3d(0, -10px, 0);transition:transform 100ms ease-in-out,opacity 100ms ease-in-out;transition-delay:0;box-shadow:var(--shadow)}[data-tooltip][right-edge]:before{right:0px}[data-tooltip][left-edge]:before{left:0px}[data-tooltip]:not(:disabled):not(.open):hover:before{opacity:1;transform:translate3d(0, 0, 0);transition-delay:100ms}[data-tooltip].open:before{transition-delay:0ms;opacity:0}@media only screen and (max-device-width: 641px){[data-tooltip]:before{display:none}}/*!\n * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n * Copyright 2024 Fonticons, Inc.\n */.fa{font-family:var(--fa-style-family, "Font Awesome 6 Free");font-weight:var(--fa-style, 900)}.fas,.far,.fab,.fa-solid,.fa-regular,.fa-brands,.fa{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display, inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fas::before,.far::before,.fab::before,.fa-solid::before,.fa-regular::before,.fa-brands::before,.fa::before{content:var(--fa)}.fa-classic,.fas,.fa-solid,.far,.fa-regular{font-family:"Font Awesome 6 Free"}.fa-brands,.fab{font-family:"Font Awesome 6 Brands"}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-0.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-0.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin, 2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(-1*var(--fa-li-width, 2em));position:absolute;text-align:center;width:var(--fa-li-width, 2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color, #eee);border-radius:var(--fa-border-radius, 0.1em);border-style:var(--fa-border-style, solid);border-width:var(--fa-border-width, 0.08em);padding:var(--fa-border-padding, 0.2em 0.25em 0.15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin, 0.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin, 0.3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 2s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, linear)}.fa-spin-reverse{--fa-animation-direction: reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, steps(8))}@media(prefers-reduced-motion: reduce){.fa-beat,.fa-bounce,.fa-fade,.fa-beat-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale, 1.25))}}@keyframes fa-bounce{0%{transform:scale(1, 1) translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0)}57%{transform:scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em))}64%{transform:scale(1, 1) translateY(0)}100%{transform:scale(1, 1) translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity, 0.4)}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity, 0.4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale, 1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}8%,24%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}40%,100%{transform:rotate(0deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scale(-1, 1)}.fa-flip-vertical{transform:scale(1, -1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1, -1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle, 0))}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%;z-index:var(--fa-stack-z-index, auto)}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:var(--fa-inverse, #fff)}.fa-0{--fa:"\\30 ";--fa--fa:"\\30 \\30 "}.fa-1{--fa:"\\31 ";--fa--fa:"\\31 \\31 "}.fa-2{--fa:"\\32 ";--fa--fa:"\\32 \\32 "}.fa-3{--fa:"\\33 ";--fa--fa:"\\33 \\33 "}.fa-4{--fa:"\\34 ";--fa--fa:"\\34 \\34 "}.fa-5{--fa:"\\35 ";--fa--fa:"\\35 \\35 "}.fa-6{--fa:"\\36 ";--fa--fa:"\\36 \\36 "}.fa-7{--fa:"\\37 ";--fa--fa:"\\37 \\37 "}.fa-8{--fa:"\\38 ";--fa--fa:"\\38 \\38 "}.fa-9{--fa:"\\39 ";--fa--fa:"\\39 \\39 "}.fa-fill-drip{--fa:"";--fa--fa:""}.fa-arrows-to-circle{--fa:"";--fa--fa:""}.fa-circle-chevron-right{--fa:"";--fa--fa:""}.fa-chevron-circle-right{--fa:"";--fa--fa:""}.fa-at{--fa:"\\@";--fa--fa:"\\@\\@"}.fa-trash-can{--fa:"";--fa--fa:""}.fa-trash-alt{--fa:"";--fa--fa:""}.fa-text-height{--fa:"";--fa--fa:""}.fa-user-xmark{--fa:"";--fa--fa:""}.fa-user-times{--fa:"";--fa--fa:""}.fa-stethoscope{--fa:"";--fa--fa:""}.fa-message{--fa:"";--fa--fa:""}.fa-comment-alt{--fa:"";--fa--fa:""}.fa-info{--fa:"";--fa--fa:""}.fa-down-left-and-up-right-to-center{--fa:"";--fa--fa:""}.fa-compress-alt{--fa:"";--fa--fa:""}.fa-explosion{--fa:"";--fa--fa:""}.fa-file-lines{--fa:"";--fa--fa:""}.fa-file-alt{--fa:"";--fa--fa:""}.fa-file-text{--fa:"";--fa--fa:""}.fa-wave-square{--fa:"";--fa--fa:""}.fa-ring{--fa:"";--fa--fa:""}.fa-building-un{--fa:"";--fa--fa:""}.fa-dice-three{--fa:"";--fa--fa:""}.fa-calendar-days{--fa:"";--fa--fa:""}.fa-calendar-alt{--fa:"";--fa--fa:""}.fa-anchor-circle-check{--fa:"";--fa--fa:""}.fa-building-circle-arrow-right{--fa:"";--fa--fa:""}.fa-volleyball{--fa:"";--fa--fa:""}.fa-volleyball-ball{--fa:"";--fa--fa:""}.fa-arrows-up-to-line{--fa:"";--fa--fa:""}.fa-sort-down{--fa:"";--fa--fa:""}.fa-sort-desc{--fa:"";--fa--fa:""}.fa-circle-minus{--fa:"";--fa--fa:""}.fa-minus-circle{--fa:"";--fa--fa:""}.fa-door-open{--fa:"";--fa--fa:""}.fa-right-from-bracket{--fa:"";--fa--fa:""}.fa-sign-out-alt{--fa:"";--fa--fa:""}.fa-atom{--fa:"";--fa--fa:""}.fa-soap{--fa:"";--fa--fa:""}.fa-icons{--fa:"";--fa--fa:""}.fa-heart-music-camera-bolt{--fa:"";--fa--fa:""}.fa-microphone-lines-slash{--fa:"";--fa--fa:""}.fa-microphone-alt-slash{--fa:"";--fa--fa:""}.fa-bridge-circle-check{--fa:"";--fa--fa:""}.fa-pump-medical{--fa:"";--fa--fa:""}.fa-fingerprint{--fa:"";--fa--fa:""}.fa-hand-point-right{--fa:"";--fa--fa:""}.fa-magnifying-glass-location{--fa:"";--fa--fa:""}.fa-search-location{--fa:"";--fa--fa:""}.fa-forward-step{--fa:"";--fa--fa:""}.fa-step-forward{--fa:"";--fa--fa:""}.fa-face-smile-beam{--fa:"";--fa--fa:""}.fa-smile-beam{--fa:"";--fa--fa:""}.fa-flag-checkered{--fa:"";--fa--fa:""}.fa-football{--fa:"";--fa--fa:""}.fa-football-ball{--fa:"";--fa--fa:""}.fa-school-circle-exclamation{--fa:"";--fa--fa:""}.fa-crop{--fa:"";--fa--fa:""}.fa-angles-down{--fa:"";--fa--fa:""}.fa-angle-double-down{--fa:"";--fa--fa:""}.fa-users-rectangle{--fa:"";--fa--fa:""}.fa-people-roof{--fa:"";--fa--fa:""}.fa-people-line{--fa:"";--fa--fa:""}.fa-beer-mug-empty{--fa:"";--fa--fa:""}.fa-beer{--fa:"";--fa--fa:""}.fa-diagram-predecessor{--fa:"";--fa--fa:""}.fa-arrow-up-long{--fa:"";--fa--fa:""}.fa-long-arrow-up{--fa:"";--fa--fa:""}.fa-fire-flame-simple{--fa:"";--fa--fa:""}.fa-burn{--fa:"";--fa--fa:""}.fa-person{--fa:"";--fa--fa:""}.fa-male{--fa:"";--fa--fa:""}.fa-laptop{--fa:"";--fa--fa:""}.fa-file-csv{--fa:"";--fa--fa:""}.fa-menorah{--fa:"";--fa--fa:""}.fa-truck-plane{--fa:"";--fa--fa:""}.fa-record-vinyl{--fa:"";--fa--fa:""}.fa-face-grin-stars{--fa:"";--fa--fa:""}.fa-grin-stars{--fa:"";--fa--fa:""}.fa-bong{--fa:"";--fa--fa:""}.fa-spaghetti-monster-flying{--fa:"";--fa--fa:""}.fa-pastafarianism{--fa:"";--fa--fa:""}.fa-arrow-down-up-across-line{--fa:"";--fa--fa:""}.fa-spoon{--fa:"";--fa--fa:""}.fa-utensil-spoon{--fa:"";--fa--fa:""}.fa-jar-wheat{--fa:"";--fa--fa:""}.fa-envelopes-bulk{--fa:"";--fa--fa:""}.fa-mail-bulk{--fa:"";--fa--fa:""}.fa-file-circle-exclamation{--fa:"";--fa--fa:""}.fa-circle-h{--fa:"";--fa--fa:""}.fa-hospital-symbol{--fa:"";--fa--fa:""}.fa-pager{--fa:"";--fa--fa:""}.fa-address-book{--fa:"";--fa--fa:""}.fa-contact-book{--fa:"";--fa--fa:""}.fa-strikethrough{--fa:"";--fa--fa:""}.fa-k{--fa:"K";--fa--fa:"KK"}.fa-landmark-flag{--fa:"";--fa--fa:""}.fa-pencil{--fa:"";--fa--fa:""}.fa-pencil-alt{--fa:"";--fa--fa:""}.fa-backward{--fa:"";--fa--fa:""}.fa-caret-right{--fa:"";--fa--fa:""}.fa-comments{--fa:"";--fa--fa:""}.fa-paste{--fa:"";--fa--fa:""}.fa-file-clipboard{--fa:"";--fa--fa:""}.fa-code-pull-request{--fa:"";--fa--fa:""}.fa-clipboard-list{--fa:"";--fa--fa:""}.fa-truck-ramp-box{--fa:"";--fa--fa:""}.fa-truck-loading{--fa:"";--fa--fa:""}.fa-user-check{--fa:"";--fa--fa:""}.fa-vial-virus{--fa:"";--fa--fa:""}.fa-sheet-plastic{--fa:"";--fa--fa:""}.fa-blog{--fa:"";--fa--fa:""}.fa-user-ninja{--fa:"";--fa--fa:""}.fa-person-arrow-up-from-line{--fa:"";--fa--fa:""}.fa-scroll-torah{--fa:"";--fa--fa:""}.fa-torah{--fa:"";--fa--fa:""}.fa-broom-ball{--fa:"";--fa--fa:""}.fa-quidditch{--fa:"";--fa--fa:""}.fa-quidditch-broom-ball{--fa:"";--fa--fa:""}.fa-toggle-off{--fa:"";--fa--fa:""}.fa-box-archive{--fa:"";--fa--fa:""}.fa-archive{--fa:"";--fa--fa:""}.fa-person-drowning{--fa:"";--fa--fa:""}.fa-arrow-down-9-1{--fa:"";--fa--fa:""}.fa-sort-numeric-desc{--fa:"";--fa--fa:""}.fa-sort-numeric-down-alt{--fa:"";--fa--fa:""}.fa-face-grin-tongue-squint{--fa:"";--fa--fa:""}.fa-grin-tongue-squint{--fa:"";--fa--fa:""}.fa-spray-can{--fa:"";--fa--fa:""}.fa-truck-monster{--fa:"";--fa--fa:""}.fa-w{--fa:"W";--fa--fa:"WW"}.fa-earth-africa{--fa:"";--fa--fa:""}.fa-globe-africa{--fa:"";--fa--fa:""}.fa-rainbow{--fa:"";--fa--fa:""}.fa-circle-notch{--fa:"";--fa--fa:""}.fa-tablet-screen-button{--fa:"";--fa--fa:""}.fa-tablet-alt{--fa:"";--fa--fa:""}.fa-paw{--fa:"";--fa--fa:""}.fa-cloud{--fa:"";--fa--fa:""}.fa-trowel-bricks{--fa:"";--fa--fa:""}.fa-face-flushed{--fa:"";--fa--fa:""}.fa-flushed{--fa:"";--fa--fa:""}.fa-hospital-user{--fa:"";--fa--fa:""}.fa-tent-arrow-left-right{--fa:"";--fa--fa:""}.fa-gavel{--fa:"";--fa--fa:""}.fa-legal{--fa:"";--fa--fa:""}.fa-binoculars{--fa:"";--fa--fa:""}.fa-microphone-slash{--fa:"";--fa--fa:""}.fa-box-tissue{--fa:"";--fa--fa:""}.fa-motorcycle{--fa:"";--fa--fa:""}.fa-bell-concierge{--fa:"";--fa--fa:""}.fa-concierge-bell{--fa:"";--fa--fa:""}.fa-pen-ruler{--fa:"";--fa--fa:""}.fa-pencil-ruler{--fa:"";--fa--fa:""}.fa-people-arrows{--fa:"";--fa--fa:""}.fa-people-arrows-left-right{--fa:"";--fa--fa:""}.fa-mars-and-venus-burst{--fa:"";--fa--fa:""}.fa-square-caret-right{--fa:"";--fa--fa:""}.fa-caret-square-right{--fa:"";--fa--fa:""}.fa-scissors{--fa:"";--fa--fa:""}.fa-cut{--fa:"";--fa--fa:""}.fa-sun-plant-wilt{--fa:"";--fa--fa:""}.fa-toilets-portable{--fa:"";--fa--fa:""}.fa-hockey-puck{--fa:"";--fa--fa:""}.fa-table{--fa:"";--fa--fa:""}.fa-magnifying-glass-arrow-right{--fa:"";--fa--fa:""}.fa-tachograph-digital{--fa:"";--fa--fa:""}.fa-digital-tachograph{--fa:"";--fa--fa:""}.fa-users-slash{--fa:"";--fa--fa:""}.fa-clover{--fa:"";--fa--fa:""}.fa-reply{--fa:"";--fa--fa:""}.fa-mail-reply{--fa:"";--fa--fa:""}.fa-star-and-crescent{--fa:"";--fa--fa:""}.fa-house-fire{--fa:"";--fa--fa:""}.fa-square-minus{--fa:"";--fa--fa:""}.fa-minus-square{--fa:"";--fa--fa:""}.fa-helicopter{--fa:"";--fa--fa:""}.fa-compass{--fa:"";--fa--fa:""}.fa-square-caret-down{--fa:"";--fa--fa:""}.fa-caret-square-down{--fa:"";--fa--fa:""}.fa-file-circle-question{--fa:"";--fa--fa:""}.fa-laptop-code{--fa:"";--fa--fa:""}.fa-swatchbook{--fa:"";--fa--fa:""}.fa-prescription-bottle{--fa:"";--fa--fa:""}.fa-bars{--fa:"";--fa--fa:""}.fa-navicon{--fa:"";--fa--fa:""}.fa-people-group{--fa:"";--fa--fa:""}.fa-hourglass-end{--fa:"";--fa--fa:""}.fa-hourglass-3{--fa:"";--fa--fa:""}.fa-heart-crack{--fa:"";--fa--fa:""}.fa-heart-broken{--fa:"";--fa--fa:""}.fa-square-up-right{--fa:"";--fa--fa:""}.fa-external-link-square-alt{--fa:"";--fa--fa:""}.fa-face-kiss-beam{--fa:"";--fa--fa:""}.fa-kiss-beam{--fa:"";--fa--fa:""}.fa-film{--fa:"";--fa--fa:""}.fa-ruler-horizontal{--fa:"";--fa--fa:""}.fa-people-robbery{--fa:"";--fa--fa:""}.fa-lightbulb{--fa:"";--fa--fa:""}.fa-caret-left{--fa:"";--fa--fa:""}.fa-circle-exclamation{--fa:"";--fa--fa:""}.fa-exclamation-circle{--fa:"";--fa--fa:""}.fa-school-circle-xmark{--fa:"";--fa--fa:""}.fa-arrow-right-from-bracket{--fa:"";--fa--fa:""}.fa-sign-out{--fa:"";--fa--fa:""}.fa-circle-chevron-down{--fa:"";--fa--fa:""}.fa-chevron-circle-down{--fa:"";--fa--fa:""}.fa-unlock-keyhole{--fa:"";--fa--fa:""}.fa-unlock-alt{--fa:"";--fa--fa:""}.fa-cloud-showers-heavy{--fa:"";--fa--fa:""}.fa-headphones-simple{--fa:"";--fa--fa:""}.fa-headphones-alt{--fa:"";--fa--fa:""}.fa-sitemap{--fa:"";--fa--fa:""}.fa-circle-dollar-to-slot{--fa:"";--fa--fa:""}.fa-donate{--fa:"";--fa--fa:""}.fa-memory{--fa:"";--fa--fa:""}.fa-road-spikes{--fa:"";--fa--fa:""}.fa-fire-burner{--fa:"";--fa--fa:""}.fa-flag{--fa:"";--fa--fa:""}.fa-hanukiah{--fa:"";--fa--fa:""}.fa-feather{--fa:"";--fa--fa:""}.fa-volume-low{--fa:"";--fa--fa:""}.fa-volume-down{--fa:"";--fa--fa:""}.fa-comment-slash{--fa:"";--fa--fa:""}.fa-cloud-sun-rain{--fa:"";--fa--fa:""}.fa-compress{--fa:"";--fa--fa:""}.fa-wheat-awn{--fa:"";--fa--fa:""}.fa-wheat-alt{--fa:"";--fa--fa:""}.fa-ankh{--fa:"";--fa--fa:""}.fa-hands-holding-child{--fa:"";--fa--fa:""}.fa-asterisk{--fa:"\\*";--fa--fa:"\\*\\*"}.fa-square-check{--fa:"";--fa--fa:""}.fa-check-square{--fa:"";--fa--fa:""}.fa-peseta-sign{--fa:"";--fa--fa:""}.fa-heading{--fa:"";--fa--fa:""}.fa-header{--fa:"";--fa--fa:""}.fa-ghost{--fa:"";--fa--fa:""}.fa-list{--fa:"";--fa--fa:""}.fa-list-squares{--fa:"";--fa--fa:""}.fa-square-phone-flip{--fa:"";--fa--fa:""}.fa-phone-square-alt{--fa:"";--fa--fa:""}.fa-cart-plus{--fa:"";--fa--fa:""}.fa-gamepad{--fa:"";--fa--fa:""}.fa-circle-dot{--fa:"";--fa--fa:""}.fa-dot-circle{--fa:"";--fa--fa:""}.fa-face-dizzy{--fa:"";--fa--fa:""}.fa-dizzy{--fa:"";--fa--fa:""}.fa-egg{--fa:"";--fa--fa:""}.fa-house-medical-circle-xmark{--fa:"";--fa--fa:""}.fa-campground{--fa:"";--fa--fa:""}.fa-folder-plus{--fa:"";--fa--fa:""}.fa-futbol{--fa:"";--fa--fa:""}.fa-futbol-ball{--fa:"";--fa--fa:""}.fa-soccer-ball{--fa:"";--fa--fa:""}.fa-paintbrush{--fa:"";--fa--fa:""}.fa-paint-brush{--fa:"";--fa--fa:""}.fa-lock{--fa:"";--fa--fa:""}.fa-gas-pump{--fa:"";--fa--fa:""}.fa-hot-tub-person{--fa:"";--fa--fa:""}.fa-hot-tub{--fa:"";--fa--fa:""}.fa-map-location{--fa:"";--fa--fa:""}.fa-map-marked{--fa:"";--fa--fa:""}.fa-house-flood-water{--fa:"";--fa--fa:""}.fa-tree{--fa:"";--fa--fa:""}.fa-bridge-lock{--fa:"";--fa--fa:""}.fa-sack-dollar{--fa:"";--fa--fa:""}.fa-pen-to-square{--fa:"";--fa--fa:""}.fa-edit{--fa:"";--fa--fa:""}.fa-car-side{--fa:"";--fa--fa:""}.fa-share-nodes{--fa:"";--fa--fa:""}.fa-share-alt{--fa:"";--fa--fa:""}.fa-heart-circle-minus{--fa:"";--fa--fa:""}.fa-hourglass-half{--fa:"";--fa--fa:""}.fa-hourglass-2{--fa:"";--fa--fa:""}.fa-microscope{--fa:"";--fa--fa:""}.fa-sink{--fa:"";--fa--fa:""}.fa-bag-shopping{--fa:"";--fa--fa:""}.fa-shopping-bag{--fa:"";--fa--fa:""}.fa-arrow-down-z-a{--fa:"";--fa--fa:""}.fa-sort-alpha-desc{--fa:"";--fa--fa:""}.fa-sort-alpha-down-alt{--fa:"";--fa--fa:""}.fa-mitten{--fa:"";--fa--fa:""}.fa-person-rays{--fa:"";--fa--fa:""}.fa-users{--fa:"";--fa--fa:""}.fa-eye-slash{--fa:"";--fa--fa:""}.fa-flask-vial{--fa:"";--fa--fa:""}.fa-hand{--fa:"";--fa--fa:""}.fa-hand-paper{--fa:"";--fa--fa:""}.fa-om{--fa:"";--fa--fa:""}.fa-worm{--fa:"";--fa--fa:""}.fa-house-circle-xmark{--fa:"";--fa--fa:""}.fa-plug{--fa:"";--fa--fa:""}.fa-chevron-up{--fa:"";--fa--fa:""}.fa-hand-spock{--fa:"";--fa--fa:""}.fa-stopwatch{--fa:"";--fa--fa:""}.fa-face-kiss{--fa:"";--fa--fa:""}.fa-kiss{--fa:"";--fa--fa:""}.fa-bridge-circle-xmark{--fa:"";--fa--fa:""}.fa-face-grin-tongue{--fa:"";--fa--fa:""}.fa-grin-tongue{--fa:"";--fa--fa:""}.fa-chess-bishop{--fa:"";--fa--fa:""}.fa-face-grin-wink{--fa:"";--fa--fa:""}.fa-grin-wink{--fa:"";--fa--fa:""}.fa-ear-deaf{--fa:"";--fa--fa:""}.fa-deaf{--fa:"";--fa--fa:""}.fa-deafness{--fa:"";--fa--fa:""}.fa-hard-of-hearing{--fa:"";--fa--fa:""}.fa-road-circle-check{--fa:"";--fa--fa:""}.fa-dice-five{--fa:"";--fa--fa:""}.fa-square-rss{--fa:"";--fa--fa:""}.fa-rss-square{--fa:"";--fa--fa:""}.fa-land-mine-on{--fa:"";--fa--fa:""}.fa-i-cursor{--fa:"";--fa--fa:""}.fa-stamp{--fa:"";--fa--fa:""}.fa-stairs{--fa:"";--fa--fa:""}.fa-i{--fa:"I";--fa--fa:"II"}.fa-hryvnia-sign{--fa:"";--fa--fa:""}.fa-hryvnia{--fa:"";--fa--fa:""}.fa-pills{--fa:"";--fa--fa:""}.fa-face-grin-wide{--fa:"";--fa--fa:""}.fa-grin-alt{--fa:"";--fa--fa:""}.fa-tooth{--fa:"";--fa--fa:""}.fa-v{--fa:"V";--fa--fa:"VV"}.fa-bangladeshi-taka-sign{--fa:"";--fa--fa:""}.fa-bicycle{--fa:"";--fa--fa:""}.fa-staff-snake{--fa:"";--fa--fa:""}.fa-rod-asclepius{--fa:"";--fa--fa:""}.fa-rod-snake{--fa:"";--fa--fa:""}.fa-staff-aesculapius{--fa:"";--fa--fa:""}.fa-head-side-cough-slash{--fa:"";--fa--fa:""}.fa-truck-medical{--fa:"";--fa--fa:""}.fa-ambulance{--fa:"";--fa--fa:""}.fa-wheat-awn-circle-exclamation{--fa:"";--fa--fa:""}.fa-snowman{--fa:"";--fa--fa:""}.fa-mortar-pestle{--fa:"";--fa--fa:""}.fa-road-barrier{--fa:"";--fa--fa:""}.fa-school{--fa:"";--fa--fa:""}.fa-igloo{--fa:"";--fa--fa:""}.fa-joint{--fa:"";--fa--fa:""}.fa-angle-right{--fa:"";--fa--fa:""}.fa-horse{--fa:"";--fa--fa:""}.fa-q{--fa:"Q";--fa--fa:"QQ"}.fa-g{--fa:"G";--fa--fa:"GG"}.fa-notes-medical{--fa:"";--fa--fa:""}.fa-temperature-half{--fa:"";--fa--fa:""}.fa-temperature-2{--fa:"";--fa--fa:""}.fa-thermometer-2{--fa:"";--fa--fa:""}.fa-thermometer-half{--fa:"";--fa--fa:""}.fa-dong-sign{--fa:"";--fa--fa:""}.fa-capsules{--fa:"";--fa--fa:""}.fa-poo-storm{--fa:"";--fa--fa:""}.fa-poo-bolt{--fa:"";--fa--fa:""}.fa-face-frown-open{--fa:"";--fa--fa:""}.fa-frown-open{--fa:"";--fa--fa:""}.fa-hand-point-up{--fa:"";--fa--fa:""}.fa-money-bill{--fa:"";--fa--fa:""}.fa-bookmark{--fa:"";--fa--fa:""}.fa-align-justify{--fa:"";--fa--fa:""}.fa-umbrella-beach{--fa:"";--fa--fa:""}.fa-helmet-un{--fa:"";--fa--fa:""}.fa-bullseye{--fa:"";--fa--fa:""}.fa-bacon{--fa:"";--fa--fa:""}.fa-hand-point-down{--fa:"";--fa--fa:""}.fa-arrow-up-from-bracket{--fa:"";--fa--fa:""}.fa-folder{--fa:"";--fa--fa:""}.fa-folder-blank{--fa:"";--fa--fa:""}.fa-file-waveform{--fa:"";--fa--fa:""}.fa-file-medical-alt{--fa:"";--fa--fa:""}.fa-radiation{--fa:"";--fa--fa:""}.fa-chart-simple{--fa:"";--fa--fa:""}.fa-mars-stroke{--fa:"";--fa--fa:""}.fa-vial{--fa:"";--fa--fa:""}.fa-gauge{--fa:"";--fa--fa:""}.fa-dashboard{--fa:"";--fa--fa:""}.fa-gauge-med{--fa:"";--fa--fa:""}.fa-tachometer-alt-average{--fa:"";--fa--fa:""}.fa-wand-magic-sparkles{--fa:"";--fa--fa:""}.fa-magic-wand-sparkles{--fa:"";--fa--fa:""}.fa-e{--fa:"E";--fa--fa:"EE"}.fa-pen-clip{--fa:"";--fa--fa:""}.fa-pen-alt{--fa:"";--fa--fa:""}.fa-bridge-circle-exclamation{--fa:"";--fa--fa:""}.fa-user{--fa:"";--fa--fa:""}.fa-school-circle-check{--fa:"";--fa--fa:""}.fa-dumpster{--fa:"";--fa--fa:""}.fa-van-shuttle{--fa:"";--fa--fa:""}.fa-shuttle-van{--fa:"";--fa--fa:""}.fa-building-user{--fa:"";--fa--fa:""}.fa-square-caret-left{--fa:"";--fa--fa:""}.fa-caret-square-left{--fa:"";--fa--fa:""}.fa-highlighter{--fa:"";--fa--fa:""}.fa-key{--fa:"";--fa--fa:""}.fa-bullhorn{--fa:"";--fa--fa:""}.fa-globe{--fa:"";--fa--fa:""}.fa-synagogue{--fa:"";--fa--fa:""}.fa-person-half-dress{--fa:"";--fa--fa:""}.fa-road-bridge{--fa:"";--fa--fa:""}.fa-location-arrow{--fa:"";--fa--fa:""}.fa-c{--fa:"C";--fa--fa:"CC"}.fa-tablet-button{--fa:"";--fa--fa:""}.fa-building-lock{--fa:"";--fa--fa:""}.fa-pizza-slice{--fa:"";--fa--fa:""}.fa-money-bill-wave{--fa:"";--fa--fa:""}.fa-chart-area{--fa:"";--fa--fa:""}.fa-area-chart{--fa:"";--fa--fa:""}.fa-house-flag{--fa:"";--fa--fa:""}.fa-person-circle-minus{--fa:"";--fa--fa:""}.fa-ban{--fa:"";--fa--fa:""}.fa-cancel{--fa:"";--fa--fa:""}.fa-camera-rotate{--fa:"";--fa--fa:""}.fa-spray-can-sparkles{--fa:"";--fa--fa:""}.fa-air-freshener{--fa:"";--fa--fa:""}.fa-star{--fa:"";--fa--fa:""}.fa-repeat{--fa:"";--fa--fa:""}.fa-cross{--fa:"";--fa--fa:""}.fa-box{--fa:"";--fa--fa:""}.fa-venus-mars{--fa:"";--fa--fa:""}.fa-arrow-pointer{--fa:"";--fa--fa:""}.fa-mouse-pointer{--fa:"";--fa--fa:""}.fa-maximize{--fa:"";--fa--fa:""}.fa-expand-arrows-alt{--fa:"";--fa--fa:""}.fa-charging-station{--fa:"";--fa--fa:""}.fa-shapes{--fa:"";--fa--fa:""}.fa-triangle-circle-square{--fa:"";--fa--fa:""}.fa-shuffle{--fa:"";--fa--fa:""}.fa-random{--fa:"";--fa--fa:""}.fa-person-running{--fa:"";--fa--fa:""}.fa-running{--fa:"";--fa--fa:""}.fa-mobile-retro{--fa:"";--fa--fa:""}.fa-grip-lines-vertical{--fa:"";--fa--fa:""}.fa-spider{--fa:"";--fa--fa:""}.fa-hands-bound{--fa:"";--fa--fa:""}.fa-file-invoice-dollar{--fa:"";--fa--fa:""}.fa-plane-circle-exclamation{--fa:"";--fa--fa:""}.fa-x-ray{--fa:"";--fa--fa:""}.fa-spell-check{--fa:"";--fa--fa:""}.fa-slash{--fa:"";--fa--fa:""}.fa-computer-mouse{--fa:"";--fa--fa:""}.fa-mouse{--fa:"";--fa--fa:""}.fa-arrow-right-to-bracket{--fa:"";--fa--fa:""}.fa-sign-in{--fa:"";--fa--fa:""}.fa-shop-slash{--fa:"";--fa--fa:""}.fa-store-alt-slash{--fa:"";--fa--fa:""}.fa-server{--fa:"";--fa--fa:""}.fa-virus-covid-slash{--fa:"";--fa--fa:""}.fa-shop-lock{--fa:"";--fa--fa:""}.fa-hourglass-start{--fa:"";--fa--fa:""}.fa-hourglass-1{--fa:"";--fa--fa:""}.fa-blender-phone{--fa:"";--fa--fa:""}.fa-building-wheat{--fa:"";--fa--fa:""}.fa-person-breastfeeding{--fa:"";--fa--fa:""}.fa-right-to-bracket{--fa:"";--fa--fa:""}.fa-sign-in-alt{--fa:"";--fa--fa:""}.fa-venus{--fa:"";--fa--fa:""}.fa-passport{--fa:"";--fa--fa:""}.fa-thumbtack-slash{--fa:"";--fa--fa:""}.fa-thumb-tack-slash{--fa:"";--fa--fa:""}.fa-heart-pulse{--fa:"";--fa--fa:""}.fa-heartbeat{--fa:"";--fa--fa:""}.fa-people-carry-box{--fa:"";--fa--fa:""}.fa-people-carry{--fa:"";--fa--fa:""}.fa-temperature-high{--fa:"";--fa--fa:""}.fa-microchip{--fa:"";--fa--fa:""}.fa-crown{--fa:"";--fa--fa:""}.fa-weight-hanging{--fa:"";--fa--fa:""}.fa-xmarks-lines{--fa:"";--fa--fa:""}.fa-file-prescription{--fa:"";--fa--fa:""}.fa-weight-scale{--fa:"";--fa--fa:""}.fa-weight{--fa:"";--fa--fa:""}.fa-user-group{--fa:"";--fa--fa:""}.fa-user-friends{--fa:"";--fa--fa:""}.fa-arrow-up-a-z{--fa:"";--fa--fa:""}.fa-sort-alpha-up{--fa:"";--fa--fa:""}.fa-chess-knight{--fa:"";--fa--fa:""}.fa-face-laugh-squint{--fa:"";--fa--fa:""}.fa-laugh-squint{--fa:"";--fa--fa:""}.fa-wheelchair{--fa:"";--fa--fa:""}.fa-circle-arrow-up{--fa:"";--fa--fa:""}.fa-arrow-circle-up{--fa:"";--fa--fa:""}.fa-toggle-on{--fa:"";--fa--fa:""}.fa-person-walking{--fa:"";--fa--fa:""}.fa-walking{--fa:"";--fa--fa:""}.fa-l{--fa:"L";--fa--fa:"LL"}.fa-fire{--fa:"";--fa--fa:""}.fa-bed-pulse{--fa:"";--fa--fa:""}.fa-procedures{--fa:"";--fa--fa:""}.fa-shuttle-space{--fa:"";--fa--fa:""}.fa-space-shuttle{--fa:"";--fa--fa:""}.fa-face-laugh{--fa:"";--fa--fa:""}.fa-laugh{--fa:"";--fa--fa:""}.fa-folder-open{--fa:"";--fa--fa:""}.fa-heart-circle-plus{--fa:"";--fa--fa:""}.fa-code-fork{--fa:"";--fa--fa:""}.fa-city{--fa:"";--fa--fa:""}.fa-microphone-lines{--fa:"";--fa--fa:""}.fa-microphone-alt{--fa:"";--fa--fa:""}.fa-pepper-hot{--fa:"";--fa--fa:""}.fa-unlock{--fa:"";--fa--fa:""}.fa-colon-sign{--fa:"";--fa--fa:""}.fa-headset{--fa:"";--fa--fa:""}.fa-store-slash{--fa:"";--fa--fa:""}.fa-road-circle-xmark{--fa:"";--fa--fa:""}.fa-user-minus{--fa:"";--fa--fa:""}.fa-mars-stroke-up{--fa:"";--fa--fa:""}.fa-mars-stroke-v{--fa:"";--fa--fa:""}.fa-champagne-glasses{--fa:"";--fa--fa:""}.fa-glass-cheers{--fa:"";--fa--fa:""}.fa-clipboard{--fa:"";--fa--fa:""}.fa-house-circle-exclamation{--fa:"";--fa--fa:""}.fa-file-arrow-up{--fa:"";--fa--fa:""}.fa-file-upload{--fa:"";--fa--fa:""}.fa-wifi{--fa:"";--fa--fa:""}.fa-wifi-3{--fa:"";--fa--fa:""}.fa-wifi-strong{--fa:"";--fa--fa:""}.fa-bath{--fa:"";--fa--fa:""}.fa-bathtub{--fa:"";--fa--fa:""}.fa-underline{--fa:"";--fa--fa:""}.fa-user-pen{--fa:"";--fa--fa:""}.fa-user-edit{--fa:"";--fa--fa:""}.fa-signature{--fa:"";--fa--fa:""}.fa-stroopwafel{--fa:"";--fa--fa:""}.fa-bold{--fa:"";--fa--fa:""}.fa-anchor-lock{--fa:"";--fa--fa:""}.fa-building-ngo{--fa:"";--fa--fa:""}.fa-manat-sign{--fa:"";--fa--fa:""}.fa-not-equal{--fa:"";--fa--fa:""}.fa-border-top-left{--fa:"";--fa--fa:""}.fa-border-style{--fa:"";--fa--fa:""}.fa-map-location-dot{--fa:"";--fa--fa:""}.fa-map-marked-alt{--fa:"";--fa--fa:""}.fa-jedi{--fa:"";--fa--fa:""}.fa-square-poll-vertical{--fa:"";--fa--fa:""}.fa-poll{--fa:"";--fa--fa:""}.fa-mug-hot{--fa:"";--fa--fa:""}.fa-car-battery{--fa:"";--fa--fa:""}.fa-battery-car{--fa:"";--fa--fa:""}.fa-gift{--fa:"";--fa--fa:""}.fa-dice-two{--fa:"";--fa--fa:""}.fa-chess-queen{--fa:"";--fa--fa:""}.fa-glasses{--fa:"";--fa--fa:""}.fa-chess-board{--fa:"";--fa--fa:""}.fa-building-circle-check{--fa:"";--fa--fa:""}.fa-person-chalkboard{--fa:"";--fa--fa:""}.fa-mars-stroke-right{--fa:"";--fa--fa:""}.fa-mars-stroke-h{--fa:"";--fa--fa:""}.fa-hand-back-fist{--fa:"";--fa--fa:""}.fa-hand-rock{--fa:"";--fa--fa:""}.fa-square-caret-up{--fa:"";--fa--fa:""}.fa-caret-square-up{--fa:"";--fa--fa:""}.fa-cloud-showers-water{--fa:"";--fa--fa:""}.fa-chart-bar{--fa:"";--fa--fa:""}.fa-bar-chart{--fa:"";--fa--fa:""}.fa-hands-bubbles{--fa:"";--fa--fa:""}.fa-hands-wash{--fa:"";--fa--fa:""}.fa-less-than-equal{--fa:"";--fa--fa:""}.fa-train{--fa:"";--fa--fa:""}.fa-eye-low-vision{--fa:"";--fa--fa:""}.fa-low-vision{--fa:"";--fa--fa:""}.fa-crow{--fa:"";--fa--fa:""}.fa-sailboat{--fa:"";--fa--fa:""}.fa-window-restore{--fa:"";--fa--fa:""}.fa-square-plus{--fa:"";--fa--fa:""}.fa-plus-square{--fa:"";--fa--fa:""}.fa-torii-gate{--fa:"";--fa--fa:""}.fa-frog{--fa:"";--fa--fa:""}.fa-bucket{--fa:"";--fa--fa:""}.fa-image{--fa:"";--fa--fa:""}.fa-microphone{--fa:"";--fa--fa:""}.fa-cow{--fa:"";--fa--fa:""}.fa-caret-up{--fa:"";--fa--fa:""}.fa-screwdriver{--fa:"";--fa--fa:""}.fa-folder-closed{--fa:"";--fa--fa:""}.fa-house-tsunami{--fa:"";--fa--fa:""}.fa-square-nfi{--fa:"";--fa--fa:""}.fa-arrow-up-from-ground-water{--fa:"";--fa--fa:""}.fa-martini-glass{--fa:"";--fa--fa:""}.fa-glass-martini-alt{--fa:"";--fa--fa:""}.fa-square-binary{--fa:"";--fa--fa:""}.fa-rotate-left{--fa:"";--fa--fa:""}.fa-rotate-back{--fa:"";--fa--fa:""}.fa-rotate-backward{--fa:"";--fa--fa:""}.fa-undo-alt{--fa:"";--fa--fa:""}.fa-table-columns{--fa:"";--fa--fa:""}.fa-columns{--fa:"";--fa--fa:""}.fa-lemon{--fa:"";--fa--fa:""}.fa-head-side-mask{--fa:"";--fa--fa:""}.fa-handshake{--fa:"";--fa--fa:""}.fa-gem{--fa:"";--fa--fa:""}.fa-dolly{--fa:"";--fa--fa:""}.fa-dolly-box{--fa:"";--fa--fa:""}.fa-smoking{--fa:"";--fa--fa:""}.fa-minimize{--fa:"";--fa--fa:""}.fa-compress-arrows-alt{--fa:"";--fa--fa:""}.fa-monument{--fa:"";--fa--fa:""}.fa-snowplow{--fa:"";--fa--fa:""}.fa-angles-right{--fa:"";--fa--fa:""}.fa-angle-double-right{--fa:"";--fa--fa:""}.fa-cannabis{--fa:"";--fa--fa:""}.fa-circle-play{--fa:"";--fa--fa:""}.fa-play-circle{--fa:"";--fa--fa:""}.fa-tablets{--fa:"";--fa--fa:""}.fa-ethernet{--fa:"";--fa--fa:""}.fa-euro-sign{--fa:"";--fa--fa:""}.fa-eur{--fa:"";--fa--fa:""}.fa-euro{--fa:"";--fa--fa:""}.fa-chair{--fa:"";--fa--fa:""}.fa-circle-check{--fa:"";--fa--fa:""}.fa-check-circle{--fa:"";--fa--fa:""}.fa-circle-stop{--fa:"";--fa--fa:""}.fa-stop-circle{--fa:"";--fa--fa:""}.fa-compass-drafting{--fa:"";--fa--fa:""}.fa-drafting-compass{--fa:"";--fa--fa:""}.fa-plate-wheat{--fa:"";--fa--fa:""}.fa-icicles{--fa:"";--fa--fa:""}.fa-person-shelter{--fa:"";--fa--fa:""}.fa-neuter{--fa:"";--fa--fa:""}.fa-id-badge{--fa:"";--fa--fa:""}.fa-marker{--fa:"";--fa--fa:""}.fa-face-laugh-beam{--fa:"";--fa--fa:""}.fa-laugh-beam{--fa:"";--fa--fa:""}.fa-helicopter-symbol{--fa:"";--fa--fa:""}.fa-universal-access{--fa:"";--fa--fa:""}.fa-circle-chevron-up{--fa:"";--fa--fa:""}.fa-chevron-circle-up{--fa:"";--fa--fa:""}.fa-lari-sign{--fa:"";--fa--fa:""}.fa-volcano{--fa:"";--fa--fa:""}.fa-person-walking-dashed-line-arrow-right{--fa:"";--fa--fa:""}.fa-sterling-sign{--fa:"";--fa--fa:""}.fa-gbp{--fa:"";--fa--fa:""}.fa-pound-sign{--fa:"";--fa--fa:""}.fa-viruses{--fa:"";--fa--fa:""}.fa-square-person-confined{--fa:"";--fa--fa:""}.fa-user-tie{--fa:"";--fa--fa:""}.fa-arrow-down-long{--fa:"";--fa--fa:""}.fa-long-arrow-down{--fa:"";--fa--fa:""}.fa-tent-arrow-down-to-line{--fa:"";--fa--fa:""}.fa-certificate{--fa:"";--fa--fa:""}.fa-reply-all{--fa:"";--fa--fa:""}.fa-mail-reply-all{--fa:"";--fa--fa:""}.fa-suitcase{--fa:"";--fa--fa:""}.fa-person-skating{--fa:"";--fa--fa:""}.fa-skating{--fa:"";--fa--fa:""}.fa-filter-circle-dollar{--fa:"";--fa--fa:""}.fa-funnel-dollar{--fa:"";--fa--fa:""}.fa-camera-retro{--fa:"";--fa--fa:""}.fa-circle-arrow-down{--fa:"";--fa--fa:""}.fa-arrow-circle-down{--fa:"";--fa--fa:""}.fa-file-import{--fa:"";--fa--fa:""}.fa-arrow-right-to-file{--fa:"";--fa--fa:""}.fa-square-arrow-up-right{--fa:"";--fa--fa:""}.fa-external-link-square{--fa:"";--fa--fa:""}.fa-box-open{--fa:"";--fa--fa:""}.fa-scroll{--fa:"";--fa--fa:""}.fa-spa{--fa:"";--fa--fa:""}.fa-location-pin-lock{--fa:"";--fa--fa:""}.fa-pause{--fa:"";--fa--fa:""}.fa-hill-avalanche{--fa:"";--fa--fa:""}.fa-temperature-empty{--fa:"";--fa--fa:""}.fa-temperature-0{--fa:"";--fa--fa:""}.fa-thermometer-0{--fa:"";--fa--fa:""}.fa-thermometer-empty{--fa:"";--fa--fa:""}.fa-bomb{--fa:"";--fa--fa:""}.fa-registered{--fa:"";--fa--fa:""}.fa-address-card{--fa:"";--fa--fa:""}.fa-contact-card{--fa:"";--fa--fa:""}.fa-vcard{--fa:"";--fa--fa:""}.fa-scale-unbalanced-flip{--fa:"";--fa--fa:""}.fa-balance-scale-right{--fa:"";--fa--fa:""}.fa-subscript{--fa:"";--fa--fa:""}.fa-diamond-turn-right{--fa:"";--fa--fa:""}.fa-directions{--fa:"";--fa--fa:""}.fa-burst{--fa:"";--fa--fa:""}.fa-house-laptop{--fa:"";--fa--fa:""}.fa-laptop-house{--fa:"";--fa--fa:""}.fa-face-tired{--fa:"";--fa--fa:""}.fa-tired{--fa:"";--fa--fa:""}.fa-money-bills{--fa:"";--fa--fa:""}.fa-smog{--fa:"";--fa--fa:""}.fa-crutch{--fa:"";--fa--fa:""}.fa-cloud-arrow-up{--fa:"";--fa--fa:""}.fa-cloud-upload{--fa:"";--fa--fa:""}.fa-cloud-upload-alt{--fa:"";--fa--fa:""}.fa-palette{--fa:"";--fa--fa:""}.fa-arrows-turn-right{--fa:"";--fa--fa:""}.fa-vest{--fa:"";--fa--fa:""}.fa-ferry{--fa:"";--fa--fa:""}.fa-arrows-down-to-people{--fa:"";--fa--fa:""}.fa-seedling{--fa:"";--fa--fa:""}.fa-sprout{--fa:"";--fa--fa:""}.fa-left-right{--fa:"";--fa--fa:""}.fa-arrows-alt-h{--fa:"";--fa--fa:""}.fa-boxes-packing{--fa:"";--fa--fa:""}.fa-circle-arrow-left{--fa:"";--fa--fa:""}.fa-arrow-circle-left{--fa:"";--fa--fa:""}.fa-group-arrows-rotate{--fa:"";--fa--fa:""}.fa-bowl-food{--fa:"";--fa--fa:""}.fa-candy-cane{--fa:"";--fa--fa:""}.fa-arrow-down-wide-short{--fa:"";--fa--fa:""}.fa-sort-amount-asc{--fa:"";--fa--fa:""}.fa-sort-amount-down{--fa:"";--fa--fa:""}.fa-cloud-bolt{--fa:"";--fa--fa:""}.fa-thunderstorm{--fa:"";--fa--fa:""}.fa-text-slash{--fa:"";--fa--fa:""}.fa-remove-format{--fa:"";--fa--fa:""}.fa-face-smile-wink{--fa:"";--fa--fa:""}.fa-smile-wink{--fa:"";--fa--fa:""}.fa-file-word{--fa:"";--fa--fa:""}.fa-file-powerpoint{--fa:"";--fa--fa:""}.fa-arrows-left-right{--fa:"";--fa--fa:""}.fa-arrows-h{--fa:"";--fa--fa:""}.fa-house-lock{--fa:"";--fa--fa:""}.fa-cloud-arrow-down{--fa:"";--fa--fa:""}.fa-cloud-download{--fa:"";--fa--fa:""}.fa-cloud-download-alt{--fa:"";--fa--fa:""}.fa-children{--fa:"";--fa--fa:""}.fa-chalkboard{--fa:"";--fa--fa:""}.fa-blackboard{--fa:"";--fa--fa:""}.fa-user-large-slash{--fa:"";--fa--fa:""}.fa-user-alt-slash{--fa:"";--fa--fa:""}.fa-envelope-open{--fa:"";--fa--fa:""}.fa-handshake-simple-slash{--fa:"";--fa--fa:""}.fa-handshake-alt-slash{--fa:"";--fa--fa:""}.fa-mattress-pillow{--fa:"";--fa--fa:""}.fa-guarani-sign{--fa:"";--fa--fa:""}.fa-arrows-rotate{--fa:"";--fa--fa:""}.fa-refresh{--fa:"";--fa--fa:""}.fa-sync{--fa:"";--fa--fa:""}.fa-fire-extinguisher{--fa:"";--fa--fa:""}.fa-cruzeiro-sign{--fa:"";--fa--fa:""}.fa-greater-than-equal{--fa:"";--fa--fa:""}.fa-shield-halved{--fa:"";--fa--fa:""}.fa-shield-alt{--fa:"";--fa--fa:""}.fa-book-atlas{--fa:"";--fa--fa:""}.fa-atlas{--fa:"";--fa--fa:""}.fa-virus{--fa:"";--fa--fa:""}.fa-envelope-circle-check{--fa:"";--fa--fa:""}.fa-layer-group{--fa:"";--fa--fa:""}.fa-arrows-to-dot{--fa:"";--fa--fa:""}.fa-archway{--fa:"";--fa--fa:""}.fa-heart-circle-check{--fa:"";--fa--fa:""}.fa-house-chimney-crack{--fa:"";--fa--fa:""}.fa-house-damage{--fa:"";--fa--fa:""}.fa-file-zipper{--fa:"";--fa--fa:""}.fa-file-archive{--fa:"";--fa--fa:""}.fa-square{--fa:"";--fa--fa:""}.fa-martini-glass-empty{--fa:"";--fa--fa:""}.fa-glass-martini{--fa:"";--fa--fa:""}.fa-couch{--fa:"";--fa--fa:""}.fa-cedi-sign{--fa:"";--fa--fa:""}.fa-italic{--fa:"";--fa--fa:""}.fa-table-cells-column-lock{--fa:"";--fa--fa:""}.fa-church{--fa:"";--fa--fa:""}.fa-comments-dollar{--fa:"";--fa--fa:""}.fa-democrat{--fa:"";--fa--fa:""}.fa-z{--fa:"Z";--fa--fa:"ZZ"}.fa-person-skiing{--fa:"";--fa--fa:""}.fa-skiing{--fa:"";--fa--fa:""}.fa-road-lock{--fa:"";--fa--fa:""}.fa-a{--fa:"A";--fa--fa:"AA"}.fa-temperature-arrow-down{--fa:"";--fa--fa:""}.fa-temperature-down{--fa:"";--fa--fa:""}.fa-feather-pointed{--fa:"";--fa--fa:""}.fa-feather-alt{--fa:"";--fa--fa:""}.fa-p{--fa:"P";--fa--fa:"PP"}.fa-snowflake{--fa:"";--fa--fa:""}.fa-newspaper{--fa:"";--fa--fa:""}.fa-rectangle-ad{--fa:"";--fa--fa:""}.fa-ad{--fa:"";--fa--fa:""}.fa-circle-arrow-right{--fa:"";--fa--fa:""}.fa-arrow-circle-right{--fa:"";--fa--fa:""}.fa-filter-circle-xmark{--fa:"";--fa--fa:""}.fa-locust{--fa:"";--fa--fa:""}.fa-sort{--fa:"";--fa--fa:""}.fa-unsorted{--fa:"";--fa--fa:""}.fa-list-ol{--fa:"";--fa--fa:""}.fa-list-1-2{--fa:"";--fa--fa:""}.fa-list-numeric{--fa:"";--fa--fa:""}.fa-person-dress-burst{--fa:"";--fa--fa:""}.fa-money-check-dollar{--fa:"";--fa--fa:""}.fa-money-check-alt{--fa:"";--fa--fa:""}.fa-vector-square{--fa:"";--fa--fa:""}.fa-bread-slice{--fa:"";--fa--fa:""}.fa-language{--fa:"";--fa--fa:""}.fa-face-kiss-wink-heart{--fa:"";--fa--fa:""}.fa-kiss-wink-heart{--fa:"";--fa--fa:""}.fa-filter{--fa:"";--fa--fa:""}.fa-question{--fa:"\\?";--fa--fa:"\\?\\?"}.fa-file-signature{--fa:"";--fa--fa:""}.fa-up-down-left-right{--fa:"";--fa--fa:""}.fa-arrows-alt{--fa:"";--fa--fa:""}.fa-house-chimney-user{--fa:"";--fa--fa:""}.fa-hand-holding-heart{--fa:"";--fa--fa:""}.fa-puzzle-piece{--fa:"";--fa--fa:""}.fa-money-check{--fa:"";--fa--fa:""}.fa-star-half-stroke{--fa:"";--fa--fa:""}.fa-star-half-alt{--fa:"";--fa--fa:""}.fa-code{--fa:"";--fa--fa:""}.fa-whiskey-glass{--fa:"";--fa--fa:""}.fa-glass-whiskey{--fa:"";--fa--fa:""}.fa-building-circle-exclamation{--fa:"";--fa--fa:""}.fa-magnifying-glass-chart{--fa:"";--fa--fa:""}.fa-arrow-up-right-from-square{--fa:"";--fa--fa:""}.fa-external-link{--fa:"";--fa--fa:""}.fa-cubes-stacked{--fa:"";--fa--fa:""}.fa-won-sign{--fa:"";--fa--fa:""}.fa-krw{--fa:"";--fa--fa:""}.fa-won{--fa:"";--fa--fa:""}.fa-virus-covid{--fa:"";--fa--fa:""}.fa-austral-sign{--fa:"";--fa--fa:""}.fa-f{--fa:"F";--fa--fa:"FF"}.fa-leaf{--fa:"";--fa--fa:""}.fa-road{--fa:"";--fa--fa:""}.fa-taxi{--fa:"";--fa--fa:""}.fa-cab{--fa:"";--fa--fa:""}.fa-person-circle-plus{--fa:"";--fa--fa:""}.fa-chart-pie{--fa:"";--fa--fa:""}.fa-pie-chart{--fa:"";--fa--fa:""}.fa-bolt-lightning{--fa:"";--fa--fa:""}.fa-sack-xmark{--fa:"";--fa--fa:""}.fa-file-excel{--fa:"";--fa--fa:""}.fa-file-contract{--fa:"";--fa--fa:""}.fa-fish-fins{--fa:"";--fa--fa:""}.fa-building-flag{--fa:"";--fa--fa:""}.fa-face-grin-beam{--fa:"";--fa--fa:""}.fa-grin-beam{--fa:"";--fa--fa:""}.fa-object-ungroup{--fa:"";--fa--fa:""}.fa-poop{--fa:"";--fa--fa:""}.fa-location-pin{--fa:"";--fa--fa:""}.fa-map-marker{--fa:"";--fa--fa:""}.fa-kaaba{--fa:"";--fa--fa:""}.fa-toilet-paper{--fa:"";--fa--fa:""}.fa-helmet-safety{--fa:"";--fa--fa:""}.fa-hard-hat{--fa:"";--fa--fa:""}.fa-hat-hard{--fa:"";--fa--fa:""}.fa-eject{--fa:"";--fa--fa:""}.fa-circle-right{--fa:"";--fa--fa:""}.fa-arrow-alt-circle-right{--fa:"";--fa--fa:""}.fa-plane-circle-check{--fa:"";--fa--fa:""}.fa-face-rolling-eyes{--fa:"";--fa--fa:""}.fa-meh-rolling-eyes{--fa:"";--fa--fa:""}.fa-object-group{--fa:"";--fa--fa:""}.fa-chart-line{--fa:"";--fa--fa:""}.fa-line-chart{--fa:"";--fa--fa:""}.fa-mask-ventilator{--fa:"";--fa--fa:""}.fa-arrow-right{--fa:"";--fa--fa:""}.fa-signs-post{--fa:"";--fa--fa:""}.fa-map-signs{--fa:"";--fa--fa:""}.fa-cash-register{--fa:"";--fa--fa:""}.fa-person-circle-question{--fa:"";--fa--fa:""}.fa-h{--fa:"H";--fa--fa:"HH"}.fa-tarp{--fa:"";--fa--fa:""}.fa-screwdriver-wrench{--fa:"";--fa--fa:""}.fa-tools{--fa:"";--fa--fa:""}.fa-arrows-to-eye{--fa:"";--fa--fa:""}.fa-plug-circle-bolt{--fa:"";--fa--fa:""}.fa-heart{--fa:"";--fa--fa:""}.fa-mars-and-venus{--fa:"";--fa--fa:""}.fa-house-user{--fa:"";--fa--fa:""}.fa-home-user{--fa:"";--fa--fa:""}.fa-dumpster-fire{--fa:"";--fa--fa:""}.fa-house-crack{--fa:"";--fa--fa:""}.fa-martini-glass-citrus{--fa:"";--fa--fa:""}.fa-cocktail{--fa:"";--fa--fa:""}.fa-face-surprise{--fa:"";--fa--fa:""}.fa-surprise{--fa:"";--fa--fa:""}.fa-bottle-water{--fa:"";--fa--fa:""}.fa-circle-pause{--fa:"";--fa--fa:""}.fa-pause-circle{--fa:"";--fa--fa:""}.fa-toilet-paper-slash{--fa:"";--fa--fa:""}.fa-apple-whole{--fa:"";--fa--fa:""}.fa-apple-alt{--fa:"";--fa--fa:""}.fa-kitchen-set{--fa:"";--fa--fa:""}.fa-r{--fa:"R";--fa--fa:"RR"}.fa-temperature-quarter{--fa:"";--fa--fa:""}.fa-temperature-1{--fa:"";--fa--fa:""}.fa-thermometer-1{--fa:"";--fa--fa:""}.fa-thermometer-quarter{--fa:"";--fa--fa:""}.fa-cube{--fa:"";--fa--fa:""}.fa-bitcoin-sign{--fa:"";--fa--fa:""}.fa-shield-dog{--fa:"";--fa--fa:""}.fa-solar-panel{--fa:"";--fa--fa:""}.fa-lock-open{--fa:"";--fa--fa:""}.fa-elevator{--fa:"";--fa--fa:""}.fa-money-bill-transfer{--fa:"";--fa--fa:""}.fa-money-bill-trend-up{--fa:"";--fa--fa:""}.fa-house-flood-water-circle-arrow-right{--fa:"";--fa--fa:""}.fa-square-poll-horizontal{--fa:"";--fa--fa:""}.fa-poll-h{--fa:"";--fa--fa:""}.fa-circle{--fa:"";--fa--fa:""}.fa-backward-fast{--fa:"";--fa--fa:""}.fa-fast-backward{--fa:"";--fa--fa:""}.fa-recycle{--fa:"";--fa--fa:""}.fa-user-astronaut{--fa:"";--fa--fa:""}.fa-plane-slash{--fa:"";--fa--fa:""}.fa-trademark{--fa:"";--fa--fa:""}.fa-basketball{--fa:"";--fa--fa:""}.fa-basketball-ball{--fa:"";--fa--fa:""}.fa-satellite-dish{--fa:"";--fa--fa:""}.fa-circle-up{--fa:"";--fa--fa:""}.fa-arrow-alt-circle-up{--fa:"";--fa--fa:""}.fa-mobile-screen-button{--fa:"";--fa--fa:""}.fa-mobile-alt{--fa:"";--fa--fa:""}.fa-volume-high{--fa:"";--fa--fa:""}.fa-volume-up{--fa:"";--fa--fa:""}.fa-users-rays{--fa:"";--fa--fa:""}.fa-wallet{--fa:"";--fa--fa:""}.fa-clipboard-check{--fa:"";--fa--fa:""}.fa-file-audio{--fa:"";--fa--fa:""}.fa-burger{--fa:"";--fa--fa:""}.fa-hamburger{--fa:"";--fa--fa:""}.fa-wrench{--fa:"";--fa--fa:""}.fa-bugs{--fa:"";--fa--fa:""}.fa-rupee-sign{--fa:"";--fa--fa:""}.fa-rupee{--fa:"";--fa--fa:""}.fa-file-image{--fa:"";--fa--fa:""}.fa-circle-question{--fa:"";--fa--fa:""}.fa-question-circle{--fa:"";--fa--fa:""}.fa-plane-departure{--fa:"";--fa--fa:""}.fa-handshake-slash{--fa:"";--fa--fa:""}.fa-book-bookmark{--fa:"";--fa--fa:""}.fa-code-branch{--fa:"";--fa--fa:""}.fa-hat-cowboy{--fa:"";--fa--fa:""}.fa-bridge{--fa:"";--fa--fa:""}.fa-phone-flip{--fa:"";--fa--fa:""}.fa-phone-alt{--fa:"";--fa--fa:""}.fa-truck-front{--fa:"";--fa--fa:""}.fa-cat{--fa:"";--fa--fa:""}.fa-anchor-circle-exclamation{--fa:"";--fa--fa:""}.fa-truck-field{--fa:"";--fa--fa:""}.fa-route{--fa:"";--fa--fa:""}.fa-clipboard-question{--fa:"";--fa--fa:""}.fa-panorama{--fa:"";--fa--fa:""}.fa-comment-medical{--fa:"";--fa--fa:""}.fa-teeth-open{--fa:"";--fa--fa:""}.fa-file-circle-minus{--fa:"";--fa--fa:""}.fa-tags{--fa:"";--fa--fa:""}.fa-wine-glass{--fa:"";--fa--fa:""}.fa-forward-fast{--fa:"";--fa--fa:""}.fa-fast-forward{--fa:"";--fa--fa:""}.fa-face-meh-blank{--fa:"";--fa--fa:""}.fa-meh-blank{--fa:"";--fa--fa:""}.fa-square-parking{--fa:"";--fa--fa:""}.fa-parking{--fa:"";--fa--fa:""}.fa-house-signal{--fa:"";--fa--fa:""}.fa-bars-progress{--fa:"";--fa--fa:""}.fa-tasks-alt{--fa:"";--fa--fa:""}.fa-faucet-drip{--fa:"";--fa--fa:""}.fa-cart-flatbed{--fa:"";--fa--fa:""}.fa-dolly-flatbed{--fa:"";--fa--fa:""}.fa-ban-smoking{--fa:"";--fa--fa:""}.fa-smoking-ban{--fa:"";--fa--fa:""}.fa-terminal{--fa:"";--fa--fa:""}.fa-mobile-button{--fa:"";--fa--fa:""}.fa-house-medical-flag{--fa:"";--fa--fa:""}.fa-basket-shopping{--fa:"";--fa--fa:""}.fa-shopping-basket{--fa:"";--fa--fa:""}.fa-tape{--fa:"";--fa--fa:""}.fa-bus-simple{--fa:"";--fa--fa:""}.fa-bus-alt{--fa:"";--fa--fa:""}.fa-eye{--fa:"";--fa--fa:""}.fa-face-sad-cry{--fa:"";--fa--fa:""}.fa-sad-cry{--fa:"";--fa--fa:""}.fa-audio-description{--fa:"";--fa--fa:""}.fa-person-military-to-person{--fa:"";--fa--fa:""}.fa-file-shield{--fa:"";--fa--fa:""}.fa-user-slash{--fa:"";--fa--fa:""}.fa-pen{--fa:"";--fa--fa:""}.fa-tower-observation{--fa:"";--fa--fa:""}.fa-file-code{--fa:"";--fa--fa:""}.fa-signal{--fa:"";--fa--fa:""}.fa-signal-5{--fa:"";--fa--fa:""}.fa-signal-perfect{--fa:"";--fa--fa:""}.fa-bus{--fa:"";--fa--fa:""}.fa-heart-circle-xmark{--fa:"";--fa--fa:""}.fa-house-chimney{--fa:"";--fa--fa:""}.fa-home-lg{--fa:"";--fa--fa:""}.fa-window-maximize{--fa:"";--fa--fa:""}.fa-face-frown{--fa:"";--fa--fa:""}.fa-frown{--fa:"";--fa--fa:""}.fa-prescription{--fa:"";--fa--fa:""}.fa-shop{--fa:"";--fa--fa:""}.fa-store-alt{--fa:"";--fa--fa:""}.fa-floppy-disk{--fa:"";--fa--fa:""}.fa-save{--fa:"";--fa--fa:""}.fa-vihara{--fa:"";--fa--fa:""}.fa-scale-unbalanced{--fa:"";--fa--fa:""}.fa-balance-scale-left{--fa:"";--fa--fa:""}.fa-sort-up{--fa:"";--fa--fa:""}.fa-sort-asc{--fa:"";--fa--fa:""}.fa-comment-dots{--fa:"";--fa--fa:""}.fa-commenting{--fa:"";--fa--fa:""}.fa-plant-wilt{--fa:"";--fa--fa:""}.fa-diamond{--fa:"";--fa--fa:""}.fa-face-grin-squint{--fa:"";--fa--fa:""}.fa-grin-squint{--fa:"";--fa--fa:""}.fa-hand-holding-dollar{--fa:"";--fa--fa:""}.fa-hand-holding-usd{--fa:"";--fa--fa:""}.fa-chart-diagram{--fa:"";--fa--fa:""}.fa-bacterium{--fa:"";--fa--fa:""}.fa-hand-pointer{--fa:"";--fa--fa:""}.fa-drum-steelpan{--fa:"";--fa--fa:""}.fa-hand-scissors{--fa:"";--fa--fa:""}.fa-hands-praying{--fa:"";--fa--fa:""}.fa-praying-hands{--fa:"";--fa--fa:""}.fa-arrow-rotate-right{--fa:"";--fa--fa:""}.fa-arrow-right-rotate{--fa:"";--fa--fa:""}.fa-arrow-rotate-forward{--fa:"";--fa--fa:""}.fa-redo{--fa:"";--fa--fa:""}.fa-biohazard{--fa:"";--fa--fa:""}.fa-location-crosshairs{--fa:"";--fa--fa:""}.fa-location{--fa:"";--fa--fa:""}.fa-mars-double{--fa:"";--fa--fa:""}.fa-child-dress{--fa:"";--fa--fa:""}.fa-users-between-lines{--fa:"";--fa--fa:""}.fa-lungs-virus{--fa:"";--fa--fa:""}.fa-face-grin-tears{--fa:"";--fa--fa:""}.fa-grin-tears{--fa:"";--fa--fa:""}.fa-phone{--fa:"";--fa--fa:""}.fa-calendar-xmark{--fa:"";--fa--fa:""}.fa-calendar-times{--fa:"";--fa--fa:""}.fa-child-reaching{--fa:"";--fa--fa:""}.fa-head-side-virus{--fa:"";--fa--fa:""}.fa-user-gear{--fa:"";--fa--fa:""}.fa-user-cog{--fa:"";--fa--fa:""}.fa-arrow-up-1-9{--fa:"";--fa--fa:""}.fa-sort-numeric-up{--fa:"";--fa--fa:""}.fa-door-closed{--fa:"";--fa--fa:""}.fa-shield-virus{--fa:"";--fa--fa:""}.fa-dice-six{--fa:"";--fa--fa:""}.fa-mosquito-net{--fa:"";--fa--fa:""}.fa-file-fragment{--fa:"";--fa--fa:""}.fa-bridge-water{--fa:"";--fa--fa:""}.fa-person-booth{--fa:"";--fa--fa:""}.fa-text-width{--fa:"";--fa--fa:""}.fa-hat-wizard{--fa:"";--fa--fa:""}.fa-pen-fancy{--fa:"";--fa--fa:""}.fa-person-digging{--fa:"";--fa--fa:""}.fa-digging{--fa:"";--fa--fa:""}.fa-trash{--fa:"";--fa--fa:""}.fa-gauge-simple{--fa:"";--fa--fa:""}.fa-gauge-simple-med{--fa:"";--fa--fa:""}.fa-tachometer-average{--fa:"";--fa--fa:""}.fa-book-medical{--fa:"";--fa--fa:""}.fa-poo{--fa:"";--fa--fa:""}.fa-quote-right{--fa:"";--fa--fa:""}.fa-quote-right-alt{--fa:"";--fa--fa:""}.fa-shirt{--fa:"";--fa--fa:""}.fa-t-shirt{--fa:"";--fa--fa:""}.fa-tshirt{--fa:"";--fa--fa:""}.fa-cubes{--fa:"";--fa--fa:""}.fa-divide{--fa:"";--fa--fa:""}.fa-tenge-sign{--fa:"";--fa--fa:""}.fa-tenge{--fa:"";--fa--fa:""}.fa-headphones{--fa:"";--fa--fa:""}.fa-hands-holding{--fa:"";--fa--fa:""}.fa-hands-clapping{--fa:"";--fa--fa:""}.fa-republican{--fa:"";--fa--fa:""}.fa-arrow-left{--fa:"";--fa--fa:""}.fa-person-circle-xmark{--fa:"";--fa--fa:""}.fa-ruler{--fa:"";--fa--fa:""}.fa-align-left{--fa:"";--fa--fa:""}.fa-dice-d6{--fa:"";--fa--fa:""}.fa-restroom{--fa:"";--fa--fa:""}.fa-j{--fa:"J";--fa--fa:"JJ"}.fa-users-viewfinder{--fa:"";--fa--fa:""}.fa-file-video{--fa:"";--fa--fa:""}.fa-up-right-from-square{--fa:"";--fa--fa:""}.fa-external-link-alt{--fa:"";--fa--fa:""}.fa-table-cells{--fa:"";--fa--fa:""}.fa-th{--fa:"";--fa--fa:""}.fa-file-pdf{--fa:"";--fa--fa:""}.fa-book-bible{--fa:"";--fa--fa:""}.fa-bible{--fa:"";--fa--fa:""}.fa-o{--fa:"O";--fa--fa:"OO"}.fa-suitcase-medical{--fa:"";--fa--fa:""}.fa-medkit{--fa:"";--fa--fa:""}.fa-user-secret{--fa:"";--fa--fa:""}.fa-otter{--fa:"";--fa--fa:""}.fa-person-dress{--fa:"";--fa--fa:""}.fa-female{--fa:"";--fa--fa:""}.fa-comment-dollar{--fa:"";--fa--fa:""}.fa-business-time{--fa:"";--fa--fa:""}.fa-briefcase-clock{--fa:"";--fa--fa:""}.fa-table-cells-large{--fa:"";--fa--fa:""}.fa-th-large{--fa:"";--fa--fa:""}.fa-book-tanakh{--fa:"";--fa--fa:""}.fa-tanakh{--fa:"";--fa--fa:""}.fa-phone-volume{--fa:"";--fa--fa:""}.fa-volume-control-phone{--fa:"";--fa--fa:""}.fa-hat-cowboy-side{--fa:"";--fa--fa:""}.fa-clipboard-user{--fa:"";--fa--fa:""}.fa-child{--fa:"";--fa--fa:""}.fa-lira-sign{--fa:"";--fa--fa:""}.fa-satellite{--fa:"";--fa--fa:""}.fa-plane-lock{--fa:"";--fa--fa:""}.fa-tag{--fa:"";--fa--fa:""}.fa-comment{--fa:"";--fa--fa:""}.fa-cake-candles{--fa:"";--fa--fa:""}.fa-birthday-cake{--fa:"";--fa--fa:""}.fa-cake{--fa:"";--fa--fa:""}.fa-envelope{--fa:"";--fa--fa:""}.fa-angles-up{--fa:"";--fa--fa:""}.fa-angle-double-up{--fa:"";--fa--fa:""}.fa-paperclip{--fa:"";--fa--fa:""}.fa-arrow-right-to-city{--fa:"";--fa--fa:""}.fa-ribbon{--fa:"";--fa--fa:""}.fa-lungs{--fa:"";--fa--fa:""}.fa-arrow-up-9-1{--fa:"";--fa--fa:""}.fa-sort-numeric-up-alt{--fa:"";--fa--fa:""}.fa-litecoin-sign{--fa:"";--fa--fa:""}.fa-border-none{--fa:"";--fa--fa:""}.fa-circle-nodes{--fa:"";--fa--fa:""}.fa-parachute-box{--fa:"";--fa--fa:""}.fa-indent{--fa:"";--fa--fa:""}.fa-truck-field-un{--fa:"";--fa--fa:""}.fa-hourglass{--fa:"";--fa--fa:""}.fa-hourglass-empty{--fa:"";--fa--fa:""}.fa-mountain{--fa:"";--fa--fa:""}.fa-user-doctor{--fa:"";--fa--fa:""}.fa-user-md{--fa:"";--fa--fa:""}.fa-circle-info{--fa:"";--fa--fa:""}.fa-info-circle{--fa:"";--fa--fa:""}.fa-cloud-meatball{--fa:"";--fa--fa:""}.fa-camera{--fa:"";--fa--fa:""}.fa-camera-alt{--fa:"";--fa--fa:""}.fa-square-virus{--fa:"";--fa--fa:""}.fa-meteor{--fa:"";--fa--fa:""}.fa-car-on{--fa:"";--fa--fa:""}.fa-sleigh{--fa:"";--fa--fa:""}.fa-arrow-down-1-9{--fa:"";--fa--fa:""}.fa-sort-numeric-asc{--fa:"";--fa--fa:""}.fa-sort-numeric-down{--fa:"";--fa--fa:""}.fa-hand-holding-droplet{--fa:"";--fa--fa:""}.fa-hand-holding-water{--fa:"";--fa--fa:""}.fa-water{--fa:"";--fa--fa:""}.fa-calendar-check{--fa:"";--fa--fa:""}.fa-braille{--fa:"";--fa--fa:""}.fa-prescription-bottle-medical{--fa:"";--fa--fa:""}.fa-prescription-bottle-alt{--fa:"";--fa--fa:""}.fa-landmark{--fa:"";--fa--fa:""}.fa-truck{--fa:"";--fa--fa:""}.fa-crosshairs{--fa:"";--fa--fa:""}.fa-person-cane{--fa:"";--fa--fa:""}.fa-tent{--fa:"";--fa--fa:""}.fa-vest-patches{--fa:"";--fa--fa:""}.fa-check-double{--fa:"";--fa--fa:""}.fa-arrow-down-a-z{--fa:"";--fa--fa:""}.fa-sort-alpha-asc{--fa:"";--fa--fa:""}.fa-sort-alpha-down{--fa:"";--fa--fa:""}.fa-money-bill-wheat{--fa:"";--fa--fa:""}.fa-cookie{--fa:"";--fa--fa:""}.fa-arrow-rotate-left{--fa:"";--fa--fa:""}.fa-arrow-left-rotate{--fa:"";--fa--fa:""}.fa-arrow-rotate-back{--fa:"";--fa--fa:""}.fa-arrow-rotate-backward{--fa:"";--fa--fa:""}.fa-undo{--fa:"";--fa--fa:""}.fa-hard-drive{--fa:"";--fa--fa:""}.fa-hdd{--fa:"";--fa--fa:""}.fa-face-grin-squint-tears{--fa:"";--fa--fa:""}.fa-grin-squint-tears{--fa:"";--fa--fa:""}.fa-dumbbell{--fa:"";--fa--fa:""}.fa-rectangle-list{--fa:"";--fa--fa:""}.fa-list-alt{--fa:"";--fa--fa:""}.fa-tarp-droplet{--fa:"";--fa--fa:""}.fa-house-medical-circle-check{--fa:"";--fa--fa:""}.fa-person-skiing-nordic{--fa:"";--fa--fa:""}.fa-skiing-nordic{--fa:"";--fa--fa:""}.fa-calendar-plus{--fa:"";--fa--fa:""}.fa-plane-arrival{--fa:"";--fa--fa:""}.fa-circle-left{--fa:"";--fa--fa:""}.fa-arrow-alt-circle-left{--fa:"";--fa--fa:""}.fa-train-subway{--fa:"";--fa--fa:""}.fa-subway{--fa:"";--fa--fa:""}.fa-chart-gantt{--fa:"";--fa--fa:""}.fa-indian-rupee-sign{--fa:"";--fa--fa:""}.fa-indian-rupee{--fa:"";--fa--fa:""}.fa-inr{--fa:"";--fa--fa:""}.fa-crop-simple{--fa:"";--fa--fa:""}.fa-crop-alt{--fa:"";--fa--fa:""}.fa-money-bill-1{--fa:"";--fa--fa:""}.fa-money-bill-alt{--fa:"";--fa--fa:""}.fa-left-long{--fa:"";--fa--fa:""}.fa-long-arrow-alt-left{--fa:"";--fa--fa:""}.fa-dna{--fa:"";--fa--fa:""}.fa-virus-slash{--fa:"";--fa--fa:""}.fa-minus{--fa:"";--fa--fa:""}.fa-subtract{--fa:"";--fa--fa:""}.fa-chess{--fa:"";--fa--fa:""}.fa-arrow-left-long{--fa:"";--fa--fa:""}.fa-long-arrow-left{--fa:"";--fa--fa:""}.fa-plug-circle-check{--fa:"";--fa--fa:""}.fa-street-view{--fa:"";--fa--fa:""}.fa-franc-sign{--fa:"";--fa--fa:""}.fa-volume-off{--fa:"";--fa--fa:""}.fa-hands-asl-interpreting{--fa:"";--fa--fa:""}.fa-american-sign-language-interpreting{--fa:"";--fa--fa:""}.fa-asl-interpreting{--fa:"";--fa--fa:""}.fa-hands-american-sign-language-interpreting{--fa:"";--fa--fa:""}.fa-gear{--fa:"";--fa--fa:""}.fa-cog{--fa:"";--fa--fa:""}.fa-droplet-slash{--fa:"";--fa--fa:""}.fa-tint-slash{--fa:"";--fa--fa:""}.fa-mosque{--fa:"";--fa--fa:""}.fa-mosquito{--fa:"";--fa--fa:""}.fa-star-of-david{--fa:"";--fa--fa:""}.fa-person-military-rifle{--fa:"";--fa--fa:""}.fa-cart-shopping{--fa:"";--fa--fa:""}.fa-shopping-cart{--fa:"";--fa--fa:""}.fa-vials{--fa:"";--fa--fa:""}.fa-plug-circle-plus{--fa:"";--fa--fa:""}.fa-place-of-worship{--fa:"";--fa--fa:""}.fa-grip-vertical{--fa:"";--fa--fa:""}.fa-hexagon-nodes{--fa:"";--fa--fa:""}.fa-arrow-turn-up{--fa:"";--fa--fa:""}.fa-level-up{--fa:"";--fa--fa:""}.fa-u{--fa:"U";--fa--fa:"UU"}.fa-square-root-variable{--fa:"";--fa--fa:""}.fa-square-root-alt{--fa:"";--fa--fa:""}.fa-clock{--fa:"";--fa--fa:""}.fa-clock-four{--fa:"";--fa--fa:""}.fa-backward-step{--fa:"";--fa--fa:""}.fa-step-backward{--fa:"";--fa--fa:""}.fa-pallet{--fa:"";--fa--fa:""}.fa-faucet{--fa:"";--fa--fa:""}.fa-baseball-bat-ball{--fa:"";--fa--fa:""}.fa-s{--fa:"S";--fa--fa:"SS"}.fa-timeline{--fa:"";--fa--fa:""}.fa-keyboard{--fa:"";--fa--fa:""}.fa-caret-down{--fa:"";--fa--fa:""}.fa-house-chimney-medical{--fa:"";--fa--fa:""}.fa-clinic-medical{--fa:"";--fa--fa:""}.fa-temperature-three-quarters{--fa:"";--fa--fa:""}.fa-temperature-3{--fa:"";--fa--fa:""}.fa-thermometer-3{--fa:"";--fa--fa:""}.fa-thermometer-three-quarters{--fa:"";--fa--fa:""}.fa-mobile-screen{--fa:"";--fa--fa:""}.fa-mobile-android-alt{--fa:"";--fa--fa:""}.fa-plane-up{--fa:"";--fa--fa:""}.fa-piggy-bank{--fa:"";--fa--fa:""}.fa-battery-half{--fa:"";--fa--fa:""}.fa-battery-3{--fa:"";--fa--fa:""}.fa-mountain-city{--fa:"";--fa--fa:""}.fa-coins{--fa:"";--fa--fa:""}.fa-khanda{--fa:"";--fa--fa:""}.fa-sliders{--fa:"";--fa--fa:""}.fa-sliders-h{--fa:"";--fa--fa:""}.fa-folder-tree{--fa:"";--fa--fa:""}.fa-network-wired{--fa:"";--fa--fa:""}.fa-map-pin{--fa:"";--fa--fa:""}.fa-hamsa{--fa:"";--fa--fa:""}.fa-cent-sign{--fa:"";--fa--fa:""}.fa-flask{--fa:"";--fa--fa:""}.fa-person-pregnant{--fa:"";--fa--fa:""}.fa-wand-sparkles{--fa:"";--fa--fa:""}.fa-ellipsis-vertical{--fa:"";--fa--fa:""}.fa-ellipsis-v{--fa:"";--fa--fa:""}.fa-ticket{--fa:"";--fa--fa:""}.fa-power-off{--fa:"";--fa--fa:""}.fa-right-long{--fa:"";--fa--fa:""}.fa-long-arrow-alt-right{--fa:"";--fa--fa:""}.fa-flag-usa{--fa:"";--fa--fa:""}.fa-laptop-file{--fa:"";--fa--fa:""}.fa-tty{--fa:"";--fa--fa:""}.fa-teletype{--fa:"";--fa--fa:""}.fa-diagram-next{--fa:"";--fa--fa:""}.fa-person-rifle{--fa:"";--fa--fa:""}.fa-house-medical-circle-exclamation{--fa:"";--fa--fa:""}.fa-closed-captioning{--fa:"";--fa--fa:""}.fa-person-hiking{--fa:"";--fa--fa:""}.fa-hiking{--fa:"";--fa--fa:""}.fa-venus-double{--fa:"";--fa--fa:""}.fa-images{--fa:"";--fa--fa:""}.fa-calculator{--fa:"";--fa--fa:""}.fa-people-pulling{--fa:"";--fa--fa:""}.fa-n{--fa:"N";--fa--fa:"NN"}.fa-cable-car{--fa:"";--fa--fa:""}.fa-tram{--fa:"";--fa--fa:""}.fa-cloud-rain{--fa:"";--fa--fa:""}.fa-building-circle-xmark{--fa:"";--fa--fa:""}.fa-ship{--fa:"";--fa--fa:""}.fa-arrows-down-to-line{--fa:"";--fa--fa:""}.fa-download{--fa:"";--fa--fa:""}.fa-face-grin{--fa:"";--fa--fa:""}.fa-grin{--fa:"";--fa--fa:""}.fa-delete-left{--fa:"";--fa--fa:""}.fa-backspace{--fa:"";--fa--fa:""}.fa-eye-dropper{--fa:"";--fa--fa:""}.fa-eye-dropper-empty{--fa:"";--fa--fa:""}.fa-eyedropper{--fa:"";--fa--fa:""}.fa-file-circle-check{--fa:"";--fa--fa:""}.fa-forward{--fa:"";--fa--fa:""}.fa-mobile{--fa:"";--fa--fa:""}.fa-mobile-android{--fa:"";--fa--fa:""}.fa-mobile-phone{--fa:"";--fa--fa:""}.fa-face-meh{--fa:"";--fa--fa:""}.fa-meh{--fa:"";--fa--fa:""}.fa-align-center{--fa:"";--fa--fa:""}.fa-book-skull{--fa:"";--fa--fa:""}.fa-book-dead{--fa:"";--fa--fa:""}.fa-id-card{--fa:"";--fa--fa:""}.fa-drivers-license{--fa:"";--fa--fa:""}.fa-outdent{--fa:"";--fa--fa:""}.fa-dedent{--fa:"";--fa--fa:""}.fa-heart-circle-exclamation{--fa:"";--fa--fa:""}.fa-house{--fa:"";--fa--fa:""}.fa-home{--fa:"";--fa--fa:""}.fa-home-alt{--fa:"";--fa--fa:""}.fa-home-lg-alt{--fa:"";--fa--fa:""}.fa-calendar-week{--fa:"";--fa--fa:""}.fa-laptop-medical{--fa:"";--fa--fa:""}.fa-b{--fa:"B";--fa--fa:"BB"}.fa-file-medical{--fa:"";--fa--fa:""}.fa-dice-one{--fa:"";--fa--fa:""}.fa-kiwi-bird{--fa:"";--fa--fa:""}.fa-arrow-right-arrow-left{--fa:"";--fa--fa:""}.fa-exchange{--fa:"";--fa--fa:""}.fa-rotate-right{--fa:"";--fa--fa:""}.fa-redo-alt{--fa:"";--fa--fa:""}.fa-rotate-forward{--fa:"";--fa--fa:""}.fa-utensils{--fa:"";--fa--fa:""}.fa-cutlery{--fa:"";--fa--fa:""}.fa-arrow-up-wide-short{--fa:"";--fa--fa:""}.fa-sort-amount-up{--fa:"";--fa--fa:""}.fa-mill-sign{--fa:"";--fa--fa:""}.fa-bowl-rice{--fa:"";--fa--fa:""}.fa-skull{--fa:"";--fa--fa:""}.fa-tower-broadcast{--fa:"";--fa--fa:""}.fa-broadcast-tower{--fa:"";--fa--fa:""}.fa-truck-pickup{--fa:"";--fa--fa:""}.fa-up-long{--fa:"";--fa--fa:""}.fa-long-arrow-alt-up{--fa:"";--fa--fa:""}.fa-stop{--fa:"";--fa--fa:""}.fa-code-merge{--fa:"";--fa--fa:""}.fa-upload{--fa:"";--fa--fa:""}.fa-hurricane{--fa:"";--fa--fa:""}.fa-mound{--fa:"";--fa--fa:""}.fa-toilet-portable{--fa:"";--fa--fa:""}.fa-compact-disc{--fa:"";--fa--fa:""}.fa-file-arrow-down{--fa:"";--fa--fa:""}.fa-file-download{--fa:"";--fa--fa:""}.fa-caravan{--fa:"";--fa--fa:""}.fa-shield-cat{--fa:"";--fa--fa:""}.fa-bolt{--fa:"";--fa--fa:""}.fa-zap{--fa:"";--fa--fa:""}.fa-glass-water{--fa:"";--fa--fa:""}.fa-oil-well{--fa:"";--fa--fa:""}.fa-vault{--fa:"";--fa--fa:""}.fa-mars{--fa:"";--fa--fa:""}.fa-toilet{--fa:"";--fa--fa:""}.fa-plane-circle-xmark{--fa:"";--fa--fa:""}.fa-yen-sign{--fa:"";--fa--fa:""}.fa-cny{--fa:"";--fa--fa:""}.fa-jpy{--fa:"";--fa--fa:""}.fa-rmb{--fa:"";--fa--fa:""}.fa-yen{--fa:"";--fa--fa:""}.fa-ruble-sign{--fa:"";--fa--fa:""}.fa-rouble{--fa:"";--fa--fa:""}.fa-rub{--fa:"";--fa--fa:""}.fa-ruble{--fa:"";--fa--fa:""}.fa-sun{--fa:"";--fa--fa:""}.fa-guitar{--fa:"";--fa--fa:""}.fa-face-laugh-wink{--fa:"";--fa--fa:""}.fa-laugh-wink{--fa:"";--fa--fa:""}.fa-horse-head{--fa:"";--fa--fa:""}.fa-bore-hole{--fa:"";--fa--fa:""}.fa-industry{--fa:"";--fa--fa:""}.fa-circle-down{--fa:"";--fa--fa:""}.fa-arrow-alt-circle-down{--fa:"";--fa--fa:""}.fa-arrows-turn-to-dots{--fa:"";--fa--fa:""}.fa-florin-sign{--fa:"";--fa--fa:""}.fa-arrow-down-short-wide{--fa:"";--fa--fa:""}.fa-sort-amount-desc{--fa:"";--fa--fa:""}.fa-sort-amount-down-alt{--fa:"";--fa--fa:""}.fa-less-than{--fa:"\\<";--fa--fa:"\\<\\<"}.fa-angle-down{--fa:"";--fa--fa:""}.fa-car-tunnel{--fa:"";--fa--fa:""}.fa-head-side-cough{--fa:"";--fa--fa:""}.fa-grip-lines{--fa:"";--fa--fa:""}.fa-thumbs-down{--fa:"";--fa--fa:""}.fa-user-lock{--fa:"";--fa--fa:""}.fa-arrow-right-long{--fa:"";--fa--fa:""}.fa-long-arrow-right{--fa:"";--fa--fa:""}.fa-anchor-circle-xmark{--fa:"";--fa--fa:""}.fa-ellipsis{--fa:"";--fa--fa:""}.fa-ellipsis-h{--fa:"";--fa--fa:""}.fa-chess-pawn{--fa:"";--fa--fa:""}.fa-kit-medical{--fa:"";--fa--fa:""}.fa-first-aid{--fa:"";--fa--fa:""}.fa-person-through-window{--fa:"";--fa--fa:""}.fa-toolbox{--fa:"";--fa--fa:""}.fa-hands-holding-circle{--fa:"";--fa--fa:""}.fa-bug{--fa:"";--fa--fa:""}.fa-credit-card{--fa:"";--fa--fa:""}.fa-credit-card-alt{--fa:"";--fa--fa:""}.fa-car{--fa:"";--fa--fa:""}.fa-automobile{--fa:"";--fa--fa:""}.fa-hand-holding-hand{--fa:"";--fa--fa:""}.fa-book-open-reader{--fa:"";--fa--fa:""}.fa-book-reader{--fa:"";--fa--fa:""}.fa-mountain-sun{--fa:"";--fa--fa:""}.fa-arrows-left-right-to-line{--fa:"";--fa--fa:""}.fa-dice-d20{--fa:"";--fa--fa:""}.fa-truck-droplet{--fa:"";--fa--fa:""}.fa-file-circle-xmark{--fa:"";--fa--fa:""}.fa-temperature-arrow-up{--fa:"";--fa--fa:""}.fa-temperature-up{--fa:"";--fa--fa:""}.fa-medal{--fa:"";--fa--fa:""}.fa-bed{--fa:"";--fa--fa:""}.fa-square-h{--fa:"";--fa--fa:""}.fa-h-square{--fa:"";--fa--fa:""}.fa-podcast{--fa:"";--fa--fa:""}.fa-temperature-full{--fa:"";--fa--fa:""}.fa-temperature-4{--fa:"";--fa--fa:""}.fa-thermometer-4{--fa:"";--fa--fa:""}.fa-thermometer-full{--fa:"";--fa--fa:""}.fa-bell{--fa:"";--fa--fa:""}.fa-superscript{--fa:"";--fa--fa:""}.fa-plug-circle-xmark{--fa:"";--fa--fa:""}.fa-star-of-life{--fa:"";--fa--fa:""}.fa-phone-slash{--fa:"";--fa--fa:""}.fa-paint-roller{--fa:"";--fa--fa:""}.fa-handshake-angle{--fa:"";--fa--fa:""}.fa-hands-helping{--fa:"";--fa--fa:""}.fa-location-dot{--fa:"";--fa--fa:""}.fa-map-marker-alt{--fa:"";--fa--fa:""}.fa-file{--fa:"";--fa--fa:""}.fa-greater-than{--fa:"\\>";--fa--fa:"\\>\\>"}.fa-person-swimming{--fa:"";--fa--fa:""}.fa-swimmer{--fa:"";--fa--fa:""}.fa-arrow-down{--fa:"";--fa--fa:""}.fa-droplet{--fa:"";--fa--fa:""}.fa-tint{--fa:"";--fa--fa:""}.fa-eraser{--fa:"";--fa--fa:""}.fa-earth-americas{--fa:"";--fa--fa:""}.fa-earth{--fa:"";--fa--fa:""}.fa-earth-america{--fa:"";--fa--fa:""}.fa-globe-americas{--fa:"";--fa--fa:""}.fa-person-burst{--fa:"";--fa--fa:""}.fa-dove{--fa:"";--fa--fa:""}.fa-battery-empty{--fa:"";--fa--fa:""}.fa-battery-0{--fa:"";--fa--fa:""}.fa-socks{--fa:"";--fa--fa:""}.fa-inbox{--fa:"";--fa--fa:""}.fa-section{--fa:"";--fa--fa:""}.fa-gauge-high{--fa:"";--fa--fa:""}.fa-tachometer-alt{--fa:"";--fa--fa:""}.fa-tachometer-alt-fast{--fa:"";--fa--fa:""}.fa-envelope-open-text{--fa:"";--fa--fa:""}.fa-hospital{--fa:"";--fa--fa:""}.fa-hospital-alt{--fa:"";--fa--fa:""}.fa-hospital-wide{--fa:"";--fa--fa:""}.fa-wine-bottle{--fa:"";--fa--fa:""}.fa-chess-rook{--fa:"";--fa--fa:""}.fa-bars-staggered{--fa:"";--fa--fa:""}.fa-reorder{--fa:"";--fa--fa:""}.fa-stream{--fa:"";--fa--fa:""}.fa-dharmachakra{--fa:"";--fa--fa:""}.fa-hotdog{--fa:"";--fa--fa:""}.fa-person-walking-with-cane{--fa:"";--fa--fa:""}.fa-blind{--fa:"";--fa--fa:""}.fa-drum{--fa:"";--fa--fa:""}.fa-ice-cream{--fa:"";--fa--fa:""}.fa-heart-circle-bolt{--fa:"";--fa--fa:""}.fa-fax{--fa:"";--fa--fa:""}.fa-paragraph{--fa:"";--fa--fa:""}.fa-check-to-slot{--fa:"";--fa--fa:""}.fa-vote-yea{--fa:"";--fa--fa:""}.fa-star-half{--fa:"";--fa--fa:""}.fa-boxes-stacked{--fa:"";--fa--fa:""}.fa-boxes{--fa:"";--fa--fa:""}.fa-boxes-alt{--fa:"";--fa--fa:""}.fa-link{--fa:"";--fa--fa:""}.fa-chain{--fa:"";--fa--fa:""}.fa-ear-listen{--fa:"";--fa--fa:""}.fa-assistive-listening-systems{--fa:"";--fa--fa:""}.fa-tree-city{--fa:"";--fa--fa:""}.fa-play{--fa:"";--fa--fa:""}.fa-font{--fa:"";--fa--fa:""}.fa-table-cells-row-lock{--fa:"";--fa--fa:""}.fa-rupiah-sign{--fa:"";--fa--fa:""}.fa-magnifying-glass{--fa:"";--fa--fa:""}.fa-search{--fa:"";--fa--fa:""}.fa-table-tennis-paddle-ball{--fa:"";--fa--fa:""}.fa-ping-pong-paddle-ball{--fa:"";--fa--fa:""}.fa-table-tennis{--fa:"";--fa--fa:""}.fa-person-dots-from-line{--fa:"";--fa--fa:""}.fa-diagnoses{--fa:"";--fa--fa:""}.fa-trash-can-arrow-up{--fa:"";--fa--fa:""}.fa-trash-restore-alt{--fa:"";--fa--fa:""}.fa-naira-sign{--fa:"";--fa--fa:""}.fa-cart-arrow-down{--fa:"";--fa--fa:""}.fa-walkie-talkie{--fa:"";--fa--fa:""}.fa-file-pen{--fa:"";--fa--fa:""}.fa-file-edit{--fa:"";--fa--fa:""}.fa-receipt{--fa:"";--fa--fa:""}.fa-square-pen{--fa:"";--fa--fa:""}.fa-pen-square{--fa:"";--fa--fa:""}.fa-pencil-square{--fa:"";--fa--fa:""}.fa-suitcase-rolling{--fa:"";--fa--fa:""}.fa-person-circle-exclamation{--fa:"";--fa--fa:""}.fa-chevron-down{--fa:"";--fa--fa:""}.fa-battery-full{--fa:"";--fa--fa:""}.fa-battery{--fa:"";--fa--fa:""}.fa-battery-5{--fa:"";--fa--fa:""}.fa-skull-crossbones{--fa:"";--fa--fa:""}.fa-code-compare{--fa:"";--fa--fa:""}.fa-list-ul{--fa:"";--fa--fa:""}.fa-list-dots{--fa:"";--fa--fa:""}.fa-school-lock{--fa:"";--fa--fa:""}.fa-tower-cell{--fa:"";--fa--fa:""}.fa-down-long{--fa:"";--fa--fa:""}.fa-long-arrow-alt-down{--fa:"";--fa--fa:""}.fa-ranking-star{--fa:"";--fa--fa:""}.fa-chess-king{--fa:"";--fa--fa:""}.fa-person-harassing{--fa:"";--fa--fa:""}.fa-brazilian-real-sign{--fa:"";--fa--fa:""}.fa-landmark-dome{--fa:"";--fa--fa:""}.fa-landmark-alt{--fa:"";--fa--fa:""}.fa-arrow-up{--fa:"";--fa--fa:""}.fa-tv{--fa:"";--fa--fa:""}.fa-television{--fa:"";--fa--fa:""}.fa-tv-alt{--fa:"";--fa--fa:""}.fa-shrimp{--fa:"";--fa--fa:""}.fa-list-check{--fa:"";--fa--fa:""}.fa-tasks{--fa:"";--fa--fa:""}.fa-jug-detergent{--fa:"";--fa--fa:""}.fa-circle-user{--fa:"";--fa--fa:""}.fa-user-circle{--fa:"";--fa--fa:""}.fa-user-shield{--fa:"";--fa--fa:""}.fa-wind{--fa:"";--fa--fa:""}.fa-car-burst{--fa:"";--fa--fa:""}.fa-car-crash{--fa:"";--fa--fa:""}.fa-y{--fa:"Y";--fa--fa:"YY"}.fa-person-snowboarding{--fa:"";--fa--fa:""}.fa-snowboarding{--fa:"";--fa--fa:""}.fa-truck-fast{--fa:"";--fa--fa:""}.fa-shipping-fast{--fa:"";--fa--fa:""}.fa-fish{--fa:"";--fa--fa:""}.fa-user-graduate{--fa:"";--fa--fa:""}.fa-circle-half-stroke{--fa:"";--fa--fa:""}.fa-adjust{--fa:"";--fa--fa:""}.fa-clapperboard{--fa:"";--fa--fa:""}.fa-circle-radiation{--fa:"";--fa--fa:""}.fa-radiation-alt{--fa:"";--fa--fa:""}.fa-baseball{--fa:"";--fa--fa:""}.fa-baseball-ball{--fa:"";--fa--fa:""}.fa-jet-fighter-up{--fa:"";--fa--fa:""}.fa-diagram-project{--fa:"";--fa--fa:""}.fa-project-diagram{--fa:"";--fa--fa:""}.fa-copy{--fa:"";--fa--fa:""}.fa-volume-xmark{--fa:"";--fa--fa:""}.fa-volume-mute{--fa:"";--fa--fa:""}.fa-volume-times{--fa:"";--fa--fa:""}.fa-hand-sparkles{--fa:"";--fa--fa:""}.fa-grip{--fa:"";--fa--fa:""}.fa-grip-horizontal{--fa:"";--fa--fa:""}.fa-share-from-square{--fa:"";--fa--fa:""}.fa-share-square{--fa:"";--fa--fa:""}.fa-child-combatant{--fa:"";--fa--fa:""}.fa-child-rifle{--fa:"";--fa--fa:""}.fa-gun{--fa:"";--fa--fa:""}.fa-square-phone{--fa:"";--fa--fa:""}.fa-phone-square{--fa:"";--fa--fa:""}.fa-plus{--fa:"\\+";--fa--fa:"\\+\\+"}.fa-add{--fa:"\\+";--fa--fa:"\\+\\+"}.fa-expand{--fa:"";--fa--fa:""}.fa-computer{--fa:"";--fa--fa:""}.fa-xmark{--fa:"";--fa--fa:""}.fa-close{--fa:"";--fa--fa:""}.fa-multiply{--fa:"";--fa--fa:""}.fa-remove{--fa:"";--fa--fa:""}.fa-times{--fa:"";--fa--fa:""}.fa-arrows-up-down-left-right{--fa:"";--fa--fa:""}.fa-arrows{--fa:"";--fa--fa:""}.fa-chalkboard-user{--fa:"";--fa--fa:""}.fa-chalkboard-teacher{--fa:"";--fa--fa:""}.fa-peso-sign{--fa:"";--fa--fa:""}.fa-building-shield{--fa:"";--fa--fa:""}.fa-baby{--fa:"";--fa--fa:""}.fa-users-line{--fa:"";--fa--fa:""}.fa-quote-left{--fa:"";--fa--fa:""}.fa-quote-left-alt{--fa:"";--fa--fa:""}.fa-tractor{--fa:"";--fa--fa:""}.fa-trash-arrow-up{--fa:"";--fa--fa:""}.fa-trash-restore{--fa:"";--fa--fa:""}.fa-arrow-down-up-lock{--fa:"";--fa--fa:""}.fa-lines-leaning{--fa:"";--fa--fa:""}.fa-ruler-combined{--fa:"";--fa--fa:""}.fa-copyright{--fa:"";--fa--fa:""}.fa-equals{--fa:"\\=";--fa--fa:"\\=\\="}.fa-blender{--fa:"";--fa--fa:""}.fa-teeth{--fa:"";--fa--fa:""}.fa-shekel-sign{--fa:"";--fa--fa:""}.fa-ils{--fa:"";--fa--fa:""}.fa-shekel{--fa:"";--fa--fa:""}.fa-sheqel{--fa:"";--fa--fa:""}.fa-sheqel-sign{--fa:"";--fa--fa:""}.fa-map{--fa:"";--fa--fa:""}.fa-rocket{--fa:"";--fa--fa:""}.fa-photo-film{--fa:"";--fa--fa:""}.fa-photo-video{--fa:"";--fa--fa:""}.fa-folder-minus{--fa:"";--fa--fa:""}.fa-hexagon-nodes-bolt{--fa:"";--fa--fa:""}.fa-store{--fa:"";--fa--fa:""}.fa-arrow-trend-up{--fa:"";--fa--fa:""}.fa-plug-circle-minus{--fa:"";--fa--fa:""}.fa-sign-hanging{--fa:"";--fa--fa:""}.fa-sign{--fa:"";--fa--fa:""}.fa-bezier-curve{--fa:"";--fa--fa:""}.fa-bell-slash{--fa:"";--fa--fa:""}.fa-tablet{--fa:"";--fa--fa:""}.fa-tablet-android{--fa:"";--fa--fa:""}.fa-school-flag{--fa:"";--fa--fa:""}.fa-fill{--fa:"";--fa--fa:""}.fa-angle-up{--fa:"";--fa--fa:""}.fa-drumstick-bite{--fa:"";--fa--fa:""}.fa-holly-berry{--fa:"";--fa--fa:""}.fa-chevron-left{--fa:"";--fa--fa:""}.fa-bacteria{--fa:"";--fa--fa:""}.fa-hand-lizard{--fa:"";--fa--fa:""}.fa-notdef{--fa:"";--fa--fa:""}.fa-disease{--fa:"";--fa--fa:""}.fa-briefcase-medical{--fa:"";--fa--fa:""}.fa-genderless{--fa:"";--fa--fa:""}.fa-chevron-right{--fa:"";--fa--fa:""}.fa-retweet{--fa:"";--fa--fa:""}.fa-car-rear{--fa:"";--fa--fa:""}.fa-car-alt{--fa:"";--fa--fa:""}.fa-pump-soap{--fa:"";--fa--fa:""}.fa-video-slash{--fa:"";--fa--fa:""}.fa-battery-quarter{--fa:"";--fa--fa:""}.fa-battery-2{--fa:"";--fa--fa:""}.fa-radio{--fa:"";--fa--fa:""}.fa-baby-carriage{--fa:"";--fa--fa:""}.fa-carriage-baby{--fa:"";--fa--fa:""}.fa-traffic-light{--fa:"";--fa--fa:""}.fa-thermometer{--fa:"";--fa--fa:""}.fa-vr-cardboard{--fa:"";--fa--fa:""}.fa-hand-middle-finger{--fa:"";--fa--fa:""}.fa-percent{--fa:"\\%";--fa--fa:"\\%\\%"}.fa-percentage{--fa:"\\%";--fa--fa:"\\%\\%"}.fa-truck-moving{--fa:"";--fa--fa:""}.fa-glass-water-droplet{--fa:"";--fa--fa:""}.fa-display{--fa:"";--fa--fa:""}.fa-face-smile{--fa:"";--fa--fa:""}.fa-smile{--fa:"";--fa--fa:""}.fa-thumbtack{--fa:"";--fa--fa:""}.fa-thumb-tack{--fa:"";--fa--fa:""}.fa-trophy{--fa:"";--fa--fa:""}.fa-person-praying{--fa:"";--fa--fa:""}.fa-pray{--fa:"";--fa--fa:""}.fa-hammer{--fa:"";--fa--fa:""}.fa-hand-peace{--fa:"";--fa--fa:""}.fa-rotate{--fa:"";--fa--fa:""}.fa-sync-alt{--fa:"";--fa--fa:""}.fa-spinner{--fa:"";--fa--fa:""}.fa-robot{--fa:"";--fa--fa:""}.fa-peace{--fa:"";--fa--fa:""}.fa-gears{--fa:"";--fa--fa:""}.fa-cogs{--fa:"";--fa--fa:""}.fa-warehouse{--fa:"";--fa--fa:""}.fa-arrow-up-right-dots{--fa:"";--fa--fa:""}.fa-splotch{--fa:"";--fa--fa:""}.fa-face-grin-hearts{--fa:"";--fa--fa:""}.fa-grin-hearts{--fa:"";--fa--fa:""}.fa-dice-four{--fa:"";--fa--fa:""}.fa-sim-card{--fa:"";--fa--fa:""}.fa-transgender{--fa:"";--fa--fa:""}.fa-transgender-alt{--fa:"";--fa--fa:""}.fa-mercury{--fa:"";--fa--fa:""}.fa-arrow-turn-down{--fa:"";--fa--fa:""}.fa-level-down{--fa:"";--fa--fa:""}.fa-person-falling-burst{--fa:"";--fa--fa:""}.fa-award{--fa:"";--fa--fa:""}.fa-ticket-simple{--fa:"";--fa--fa:""}.fa-ticket-alt{--fa:"";--fa--fa:""}.fa-building{--fa:"";--fa--fa:""}.fa-angles-left{--fa:"";--fa--fa:""}.fa-angle-double-left{--fa:"";--fa--fa:""}.fa-qrcode{--fa:"";--fa--fa:""}.fa-clock-rotate-left{--fa:"";--fa--fa:""}.fa-history{--fa:"";--fa--fa:""}.fa-face-grin-beam-sweat{--fa:"";--fa--fa:""}.fa-grin-beam-sweat{--fa:"";--fa--fa:""}.fa-file-export{--fa:"";--fa--fa:""}.fa-arrow-right-from-file{--fa:"";--fa--fa:""}.fa-shield{--fa:"";--fa--fa:""}.fa-shield-blank{--fa:"";--fa--fa:""}.fa-arrow-up-short-wide{--fa:"";--fa--fa:""}.fa-sort-amount-up-alt{--fa:"";--fa--fa:""}.fa-comment-nodes{--fa:"";--fa--fa:""}.fa-house-medical{--fa:"";--fa--fa:""}.fa-golf-ball-tee{--fa:"";--fa--fa:""}.fa-golf-ball{--fa:"";--fa--fa:""}.fa-circle-chevron-left{--fa:"";--fa--fa:""}.fa-chevron-circle-left{--fa:"";--fa--fa:""}.fa-house-chimney-window{--fa:"";--fa--fa:""}.fa-pen-nib{--fa:"";--fa--fa:""}.fa-tent-arrow-turn-left{--fa:"";--fa--fa:""}.fa-tents{--fa:"";--fa--fa:""}.fa-wand-magic{--fa:"";--fa--fa:""}.fa-magic{--fa:"";--fa--fa:""}.fa-dog{--fa:"";--fa--fa:""}.fa-carrot{--fa:"";--fa--fa:""}.fa-moon{--fa:"";--fa--fa:""}.fa-wine-glass-empty{--fa:"";--fa--fa:""}.fa-wine-glass-alt{--fa:"";--fa--fa:""}.fa-cheese{--fa:"";--fa--fa:""}.fa-yin-yang{--fa:"";--fa--fa:""}.fa-music{--fa:"";--fa--fa:""}.fa-code-commit{--fa:"";--fa--fa:""}.fa-temperature-low{--fa:"";--fa--fa:""}.fa-person-biking{--fa:"";--fa--fa:""}.fa-biking{--fa:"";--fa--fa:""}.fa-broom{--fa:"";--fa--fa:""}.fa-shield-heart{--fa:"";--fa--fa:""}.fa-gopuram{--fa:"";--fa--fa:""}.fa-earth-oceania{--fa:"";--fa--fa:""}.fa-globe-oceania{--fa:"";--fa--fa:""}.fa-square-xmark{--fa:"";--fa--fa:""}.fa-times-square{--fa:"";--fa--fa:""}.fa-xmark-square{--fa:"";--fa--fa:""}.fa-hashtag{--fa:"\\#";--fa--fa:"\\#\\#"}.fa-up-right-and-down-left-from-center{--fa:"";--fa--fa:""}.fa-expand-alt{--fa:"";--fa--fa:""}.fa-oil-can{--fa:"";--fa--fa:""}.fa-t{--fa:"T";--fa--fa:"TT"}.fa-hippo{--fa:"";--fa--fa:""}.fa-chart-column{--fa:"";--fa--fa:""}.fa-infinity{--fa:"";--fa--fa:""}.fa-vial-circle-check{--fa:"";--fa--fa:""}.fa-person-arrow-down-to-line{--fa:"";--fa--fa:""}.fa-voicemail{--fa:"";--fa--fa:""}.fa-fan{--fa:"";--fa--fa:""}.fa-person-walking-luggage{--fa:"";--fa--fa:""}.fa-up-down{--fa:"";--fa--fa:""}.fa-arrows-alt-v{--fa:"";--fa--fa:""}.fa-cloud-moon-rain{--fa:"";--fa--fa:""}.fa-calendar{--fa:"";--fa--fa:""}.fa-trailer{--fa:"";--fa--fa:""}.fa-bahai{--fa:"";--fa--fa:""}.fa-haykal{--fa:"";--fa--fa:""}.fa-sd-card{--fa:"";--fa--fa:""}.fa-dragon{--fa:"";--fa--fa:""}.fa-shoe-prints{--fa:"";--fa--fa:""}.fa-circle-plus{--fa:"";--fa--fa:""}.fa-plus-circle{--fa:"";--fa--fa:""}.fa-face-grin-tongue-wink{--fa:"";--fa--fa:""}.fa-grin-tongue-wink{--fa:"";--fa--fa:""}.fa-hand-holding{--fa:"";--fa--fa:""}.fa-plug-circle-exclamation{--fa:"";--fa--fa:""}.fa-link-slash{--fa:"";--fa--fa:""}.fa-chain-broken{--fa:"";--fa--fa:""}.fa-chain-slash{--fa:"";--fa--fa:""}.fa-unlink{--fa:"";--fa--fa:""}.fa-clone{--fa:"";--fa--fa:""}.fa-person-walking-arrow-loop-left{--fa:"";--fa--fa:""}.fa-arrow-up-z-a{--fa:"";--fa--fa:""}.fa-sort-alpha-up-alt{--fa:"";--fa--fa:""}.fa-fire-flame-curved{--fa:"";--fa--fa:""}.fa-fire-alt{--fa:"";--fa--fa:""}.fa-tornado{--fa:"";--fa--fa:""}.fa-file-circle-plus{--fa:"";--fa--fa:""}.fa-book-quran{--fa:"";--fa--fa:""}.fa-quran{--fa:"";--fa--fa:""}.fa-anchor{--fa:"";--fa--fa:""}.fa-border-all{--fa:"";--fa--fa:""}.fa-face-angry{--fa:"";--fa--fa:""}.fa-angry{--fa:"";--fa--fa:""}.fa-cookie-bite{--fa:"";--fa--fa:""}.fa-arrow-trend-down{--fa:"";--fa--fa:""}.fa-rss{--fa:"";--fa--fa:""}.fa-feed{--fa:"";--fa--fa:""}.fa-draw-polygon{--fa:"";--fa--fa:""}.fa-scale-balanced{--fa:"";--fa--fa:""}.fa-balance-scale{--fa:"";--fa--fa:""}.fa-gauge-simple-high{--fa:"";--fa--fa:""}.fa-tachometer{--fa:"";--fa--fa:""}.fa-tachometer-fast{--fa:"";--fa--fa:""}.fa-shower{--fa:"";--fa--fa:""}.fa-desktop{--fa:"";--fa--fa:""}.fa-desktop-alt{--fa:"";--fa--fa:""}.fa-m{--fa:"M";--fa--fa:"MM"}.fa-table-list{--fa:"";--fa--fa:""}.fa-th-list{--fa:"";--fa--fa:""}.fa-comment-sms{--fa:"";--fa--fa:""}.fa-sms{--fa:"";--fa--fa:""}.fa-book{--fa:"";--fa--fa:""}.fa-user-plus{--fa:"";--fa--fa:""}.fa-check{--fa:"";--fa--fa:""}.fa-battery-three-quarters{--fa:"";--fa--fa:""}.fa-battery-4{--fa:"";--fa--fa:""}.fa-house-circle-check{--fa:"";--fa--fa:""}.fa-angle-left{--fa:"";--fa--fa:""}.fa-diagram-successor{--fa:"";--fa--fa:""}.fa-truck-arrow-right{--fa:"";--fa--fa:""}.fa-arrows-split-up-and-left{--fa:"";--fa--fa:""}.fa-hand-fist{--fa:"";--fa--fa:""}.fa-fist-raised{--fa:"";--fa--fa:""}.fa-cloud-moon{--fa:"";--fa--fa:""}.fa-briefcase{--fa:"";--fa--fa:""}.fa-person-falling{--fa:"";--fa--fa:""}.fa-image-portrait{--fa:"";--fa--fa:""}.fa-portrait{--fa:"";--fa--fa:""}.fa-user-tag{--fa:"";--fa--fa:""}.fa-rug{--fa:"";--fa--fa:""}.fa-earth-europe{--fa:"";--fa--fa:""}.fa-globe-europe{--fa:"";--fa--fa:""}.fa-cart-flatbed-suitcase{--fa:"";--fa--fa:""}.fa-luggage-cart{--fa:"";--fa--fa:""}.fa-rectangle-xmark{--fa:"";--fa--fa:""}.fa-rectangle-times{--fa:"";--fa--fa:""}.fa-times-rectangle{--fa:"";--fa--fa:""}.fa-window-close{--fa:"";--fa--fa:""}.fa-baht-sign{--fa:"";--fa--fa:""}.fa-book-open{--fa:"";--fa--fa:""}.fa-book-journal-whills{--fa:"";--fa--fa:""}.fa-journal-whills{--fa:"";--fa--fa:""}.fa-handcuffs{--fa:"";--fa--fa:""}.fa-triangle-exclamation{--fa:"";--fa--fa:""}.fa-exclamation-triangle{--fa:"";--fa--fa:""}.fa-warning{--fa:"";--fa--fa:""}.fa-database{--fa:"";--fa--fa:""}.fa-share{--fa:"";--fa--fa:""}.fa-mail-forward{--fa:"";--fa--fa:""}.fa-bottle-droplet{--fa:"";--fa--fa:""}.fa-mask-face{--fa:"";--fa--fa:""}.fa-hill-rockslide{--fa:"";--fa--fa:""}.fa-right-left{--fa:"";--fa--fa:""}.fa-exchange-alt{--fa:"";--fa--fa:""}.fa-paper-plane{--fa:"";--fa--fa:""}.fa-road-circle-exclamation{--fa:"";--fa--fa:""}.fa-dungeon{--fa:"";--fa--fa:""}.fa-align-right{--fa:"";--fa--fa:""}.fa-money-bill-1-wave{--fa:"";--fa--fa:""}.fa-money-bill-wave-alt{--fa:"";--fa--fa:""}.fa-life-ring{--fa:"";--fa--fa:""}.fa-hands{--fa:"";--fa--fa:""}.fa-sign-language{--fa:"";--fa--fa:""}.fa-signing{--fa:"";--fa--fa:""}.fa-calendar-day{--fa:"";--fa--fa:""}.fa-water-ladder{--fa:"";--fa--fa:""}.fa-ladder-water{--fa:"";--fa--fa:""}.fa-swimming-pool{--fa:"";--fa--fa:""}.fa-arrows-up-down{--fa:"";--fa--fa:""}.fa-arrows-v{--fa:"";--fa--fa:""}.fa-face-grimace{--fa:"";--fa--fa:""}.fa-grimace{--fa:"";--fa--fa:""}.fa-wheelchair-move{--fa:"";--fa--fa:""}.fa-wheelchair-alt{--fa:"";--fa--fa:""}.fa-turn-down{--fa:"";--fa--fa:""}.fa-level-down-alt{--fa:"";--fa--fa:""}.fa-person-walking-arrow-right{--fa:"";--fa--fa:""}.fa-square-envelope{--fa:"";--fa--fa:""}.fa-envelope-square{--fa:"";--fa--fa:""}.fa-dice{--fa:"";--fa--fa:""}.fa-bowling-ball{--fa:"";--fa--fa:""}.fa-brain{--fa:"";--fa--fa:""}.fa-bandage{--fa:"";--fa--fa:""}.fa-band-aid{--fa:"";--fa--fa:""}.fa-calendar-minus{--fa:"";--fa--fa:""}.fa-circle-xmark{--fa:"";--fa--fa:""}.fa-times-circle{--fa:"";--fa--fa:""}.fa-xmark-circle{--fa:"";--fa--fa:""}.fa-gifts{--fa:"";--fa--fa:""}.fa-hotel{--fa:"";--fa--fa:""}.fa-earth-asia{--fa:"";--fa--fa:""}.fa-globe-asia{--fa:"";--fa--fa:""}.fa-id-card-clip{--fa:"";--fa--fa:""}.fa-id-card-alt{--fa:"";--fa--fa:""}.fa-magnifying-glass-plus{--fa:"";--fa--fa:""}.fa-search-plus{--fa:"";--fa--fa:""}.fa-thumbs-up{--fa:"";--fa--fa:""}.fa-user-clock{--fa:"";--fa--fa:""}.fa-hand-dots{--fa:"";--fa--fa:""}.fa-allergies{--fa:"";--fa--fa:""}.fa-file-invoice{--fa:"";--fa--fa:""}.fa-window-minimize{--fa:"";--fa--fa:""}.fa-mug-saucer{--fa:"";--fa--fa:""}.fa-coffee{--fa:"";--fa--fa:""}.fa-brush{--fa:"";--fa--fa:""}.fa-file-half-dashed{--fa:"";--fa--fa:""}.fa-mask{--fa:"";--fa--fa:""}.fa-magnifying-glass-minus{--fa:"";--fa--fa:""}.fa-search-minus{--fa:"";--fa--fa:""}.fa-ruler-vertical{--fa:"";--fa--fa:""}.fa-user-large{--fa:"";--fa--fa:""}.fa-user-alt{--fa:"";--fa--fa:""}.fa-train-tram{--fa:"";--fa--fa:""}.fa-user-nurse{--fa:"";--fa--fa:""}.fa-syringe{--fa:"";--fa--fa:""}.fa-cloud-sun{--fa:"";--fa--fa:""}.fa-stopwatch-20{--fa:"";--fa--fa:""}.fa-square-full{--fa:"";--fa--fa:""}.fa-magnet{--fa:"";--fa--fa:""}.fa-jar{--fa:"";--fa--fa:""}.fa-note-sticky{--fa:"";--fa--fa:""}.fa-sticky-note{--fa:"";--fa--fa:""}.fa-bug-slash{--fa:"";--fa--fa:""}.fa-arrow-up-from-water-pump{--fa:"";--fa--fa:""}.fa-bone{--fa:"";--fa--fa:""}.fa-table-cells-row-unlock{--fa:"";--fa--fa:""}.fa-user-injured{--fa:"";--fa--fa:""}.fa-face-sad-tear{--fa:"";--fa--fa:""}.fa-sad-tear{--fa:"";--fa--fa:""}.fa-plane{--fa:"";--fa--fa:""}.fa-tent-arrows-down{--fa:"";--fa--fa:""}.fa-exclamation{--fa:"\\!";--fa--fa:"\\!\\!"}.fa-arrows-spin{--fa:"";--fa--fa:""}.fa-print{--fa:"";--fa--fa:""}.fa-turkish-lira-sign{--fa:"";--fa--fa:""}.fa-try{--fa:"";--fa--fa:""}.fa-turkish-lira{--fa:"";--fa--fa:""}.fa-dollar-sign{--fa:"\\$";--fa--fa:"\\$\\$"}.fa-dollar{--fa:"\\$";--fa--fa:"\\$\\$"}.fa-usd{--fa:"\\$";--fa--fa:"\\$\\$"}.fa-x{--fa:"X";--fa--fa:"XX"}.fa-magnifying-glass-dollar{--fa:"";--fa--fa:""}.fa-search-dollar{--fa:"";--fa--fa:""}.fa-users-gear{--fa:"";--fa--fa:""}.fa-users-cog{--fa:"";--fa--fa:""}.fa-person-military-pointing{--fa:"";--fa--fa:""}.fa-building-columns{--fa:"";--fa--fa:""}.fa-bank{--fa:"";--fa--fa:""}.fa-institution{--fa:"";--fa--fa:""}.fa-museum{--fa:"";--fa--fa:""}.fa-university{--fa:"";--fa--fa:""}.fa-umbrella{--fa:"";--fa--fa:""}.fa-trowel{--fa:"";--fa--fa:""}.fa-d{--fa:"D";--fa--fa:"DD"}.fa-stapler{--fa:"";--fa--fa:""}.fa-masks-theater{--fa:"";--fa--fa:""}.fa-theater-masks{--fa:"";--fa--fa:""}.fa-kip-sign{--fa:"";--fa--fa:""}.fa-hand-point-left{--fa:"";--fa--fa:""}.fa-handshake-simple{--fa:"";--fa--fa:""}.fa-handshake-alt{--fa:"";--fa--fa:""}.fa-jet-fighter{--fa:"";--fa--fa:""}.fa-fighter-jet{--fa:"";--fa--fa:""}.fa-square-share-nodes{--fa:"";--fa--fa:""}.fa-share-alt-square{--fa:"";--fa--fa:""}.fa-barcode{--fa:"";--fa--fa:""}.fa-plus-minus{--fa:"";--fa--fa:""}.fa-video{--fa:"";--fa--fa:""}.fa-video-camera{--fa:"";--fa--fa:""}.fa-graduation-cap{--fa:"";--fa--fa:""}.fa-mortar-board{--fa:"";--fa--fa:""}.fa-hand-holding-medical{--fa:"";--fa--fa:""}.fa-person-circle-check{--fa:"";--fa--fa:""}.fa-turn-up{--fa:"";--fa--fa:""}.fa-level-up-alt{--fa:"";--fa--fa:""}.sr-only,.fa-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only-focusable:not(:focus),.fa-sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}/*!\n * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n * Copyright 2024 Fonticons, Inc.\n */:root,:host{--fa-style-family-classic: "Font Awesome 6 Free";--fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url(${w}) format("woff2"),url(${k}) format("truetype")}.fas,.fa-solid{font-weight:900}/*!\n * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n * Copyright 2024 Fonticons, Inc.\n */:root,:host{--fa-style-family-brands: "Font Awesome 6 Brands";--fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands"}@font-face{font-family:"Font Awesome 6 Brands";font-style:normal;font-weight:400;font-display:block;src:url(${x}) format("woff2"),url(${S}) format("truetype")}.fab,.fa-brands{font-weight:400}.fa-monero{--fa:""}.fa-hooli{--fa:""}.fa-yelp{--fa:""}.fa-cc-visa{--fa:""}.fa-lastfm{--fa:""}.fa-shopware{--fa:""}.fa-creative-commons-nc{--fa:""}.fa-aws{--fa:""}.fa-redhat{--fa:""}.fa-yoast{--fa:""}.fa-cloudflare{--fa:""}.fa-ups{--fa:""}.fa-pixiv{--fa:""}.fa-wpexplorer{--fa:""}.fa-dyalog{--fa:""}.fa-bity{--fa:""}.fa-stackpath{--fa:""}.fa-buysellads{--fa:""}.fa-first-order{--fa:""}.fa-modx{--fa:""}.fa-guilded{--fa:""}.fa-vnv{--fa:""}.fa-square-js{--fa:""}.fa-js-square{--fa:""}.fa-microsoft{--fa:""}.fa-qq{--fa:""}.fa-orcid{--fa:""}.fa-java{--fa:""}.fa-invision{--fa:""}.fa-creative-commons-pd-alt{--fa:""}.fa-centercode{--fa:""}.fa-glide-g{--fa:""}.fa-drupal{--fa:""}.fa-jxl{--fa:""}.fa-dart-lang{--fa:""}.fa-hire-a-helper{--fa:""}.fa-creative-commons-by{--fa:""}.fa-unity{--fa:""}.fa-whmcs{--fa:""}.fa-rocketchat{--fa:""}.fa-vk{--fa:""}.fa-untappd{--fa:""}.fa-mailchimp{--fa:""}.fa-css3-alt{--fa:""}.fa-square-reddit{--fa:""}.fa-reddit-square{--fa:""}.fa-vimeo-v{--fa:""}.fa-contao{--fa:""}.fa-square-font-awesome{--fa:""}.fa-deskpro{--fa:""}.fa-brave{--fa:""}.fa-sistrix{--fa:""}.fa-square-instagram{--fa:""}.fa-instagram-square{--fa:""}.fa-battle-net{--fa:""}.fa-the-red-yeti{--fa:""}.fa-square-hacker-news{--fa:""}.fa-hacker-news-square{--fa:""}.fa-edge{--fa:""}.fa-threads{--fa:""}.fa-napster{--fa:""}.fa-square-snapchat{--fa:""}.fa-snapchat-square{--fa:""}.fa-google-plus-g{--fa:""}.fa-artstation{--fa:""}.fa-markdown{--fa:""}.fa-sourcetree{--fa:""}.fa-google-plus{--fa:""}.fa-diaspora{--fa:""}.fa-foursquare{--fa:""}.fa-stack-overflow{--fa:""}.fa-github-alt{--fa:""}.fa-phoenix-squadron{--fa:""}.fa-pagelines{--fa:""}.fa-algolia{--fa:""}.fa-red-river{--fa:""}.fa-creative-commons-sa{--fa:""}.fa-safari{--fa:""}.fa-google{--fa:""}.fa-square-font-awesome-stroke{--fa:""}.fa-font-awesome-alt{--fa:""}.fa-atlassian{--fa:""}.fa-linkedin-in{--fa:""}.fa-digital-ocean{--fa:""}.fa-nimblr{--fa:""}.fa-chromecast{--fa:""}.fa-evernote{--fa:""}.fa-hacker-news{--fa:""}.fa-creative-commons-sampling{--fa:""}.fa-adversal{--fa:""}.fa-creative-commons{--fa:""}.fa-watchman-monitoring{--fa:""}.fa-fonticons{--fa:""}.fa-weixin{--fa:""}.fa-shirtsinbulk{--fa:""}.fa-codepen{--fa:""}.fa-git-alt{--fa:""}.fa-lyft{--fa:""}.fa-rev{--fa:""}.fa-windows{--fa:""}.fa-wizards-of-the-coast{--fa:""}.fa-square-viadeo{--fa:""}.fa-viadeo-square{--fa:""}.fa-meetup{--fa:""}.fa-centos{--fa:""}.fa-adn{--fa:""}.fa-cloudsmith{--fa:""}.fa-opensuse{--fa:""}.fa-pied-piper-alt{--fa:""}.fa-square-dribbble{--fa:""}.fa-dribbble-square{--fa:""}.fa-codiepie{--fa:""}.fa-node{--fa:""}.fa-mix{--fa:""}.fa-steam{--fa:""}.fa-cc-apple-pay{--fa:""}.fa-scribd{--fa:""}.fa-debian{--fa:""}.fa-openid{--fa:""}.fa-instalod{--fa:""}.fa-files-pinwheel{--fa:""}.fa-expeditedssl{--fa:""}.fa-sellcast{--fa:""}.fa-square-twitter{--fa:""}.fa-twitter-square{--fa:""}.fa-r-project{--fa:""}.fa-delicious{--fa:""}.fa-freebsd{--fa:""}.fa-vuejs{--fa:""}.fa-accusoft{--fa:""}.fa-ioxhost{--fa:""}.fa-fonticons-fi{--fa:""}.fa-app-store{--fa:""}.fa-cc-mastercard{--fa:""}.fa-itunes-note{--fa:""}.fa-golang{--fa:""}.fa-kickstarter{--fa:""}.fa-square-kickstarter{--fa:""}.fa-grav{--fa:""}.fa-weibo{--fa:""}.fa-uncharted{--fa:""}.fa-firstdraft{--fa:""}.fa-square-youtube{--fa:""}.fa-youtube-square{--fa:""}.fa-wikipedia-w{--fa:""}.fa-wpressr{--fa:""}.fa-rendact{--fa:""}.fa-angellist{--fa:""}.fa-galactic-republic{--fa:""}.fa-nfc-directional{--fa:""}.fa-skype{--fa:""}.fa-joget{--fa:""}.fa-fedora{--fa:""}.fa-stripe-s{--fa:""}.fa-meta{--fa:""}.fa-laravel{--fa:""}.fa-hotjar{--fa:""}.fa-bluetooth-b{--fa:""}.fa-square-letterboxd{--fa:""}.fa-sticker-mule{--fa:""}.fa-creative-commons-zero{--fa:""}.fa-hips{--fa:""}.fa-css{--fa:""}.fa-behance{--fa:""}.fa-reddit{--fa:""}.fa-discord{--fa:""}.fa-chrome{--fa:""}.fa-app-store-ios{--fa:""}.fa-cc-discover{--fa:""}.fa-wpbeginner{--fa:""}.fa-confluence{--fa:""}.fa-shoelace{--fa:""}.fa-mdb{--fa:""}.fa-dochub{--fa:""}.fa-accessible-icon{--fa:""}.fa-ebay{--fa:""}.fa-amazon{--fa:""}.fa-unsplash{--fa:""}.fa-yarn{--fa:""}.fa-square-steam{--fa:""}.fa-steam-square{--fa:""}.fa-500px{--fa:""}.fa-square-vimeo{--fa:""}.fa-vimeo-square{--fa:""}.fa-asymmetrik{--fa:""}.fa-font-awesome{--fa:""}.fa-font-awesome-flag{--fa:""}.fa-font-awesome-logo-full{--fa:""}.fa-gratipay{--fa:""}.fa-apple{--fa:""}.fa-hive{--fa:""}.fa-gitkraken{--fa:""}.fa-keybase{--fa:""}.fa-apple-pay{--fa:""}.fa-padlet{--fa:""}.fa-amazon-pay{--fa:""}.fa-square-github{--fa:""}.fa-github-square{--fa:""}.fa-stumbleupon{--fa:""}.fa-fedex{--fa:""}.fa-phoenix-framework{--fa:""}.fa-shopify{--fa:""}.fa-neos{--fa:""}.fa-square-threads{--fa:""}.fa-hackerrank{--fa:""}.fa-researchgate{--fa:""}.fa-swift{--fa:""}.fa-angular{--fa:""}.fa-speakap{--fa:""}.fa-angrycreative{--fa:""}.fa-y-combinator{--fa:""}.fa-empire{--fa:""}.fa-envira{--fa:""}.fa-google-scholar{--fa:""}.fa-square-gitlab{--fa:""}.fa-gitlab-square{--fa:""}.fa-studiovinari{--fa:""}.fa-pied-piper{--fa:""}.fa-wordpress{--fa:""}.fa-product-hunt{--fa:""}.fa-firefox{--fa:""}.fa-linode{--fa:""}.fa-goodreads{--fa:""}.fa-square-odnoklassniki{--fa:""}.fa-odnoklassniki-square{--fa:""}.fa-jsfiddle{--fa:""}.fa-sith{--fa:""}.fa-themeisle{--fa:""}.fa-page4{--fa:""}.fa-hashnode{--fa:""}.fa-react{--fa:""}.fa-cc-paypal{--fa:""}.fa-squarespace{--fa:""}.fa-cc-stripe{--fa:""}.fa-creative-commons-share{--fa:""}.fa-bitcoin{--fa:""}.fa-keycdn{--fa:""}.fa-opera{--fa:""}.fa-itch-io{--fa:""}.fa-umbraco{--fa:""}.fa-galactic-senate{--fa:""}.fa-ubuntu{--fa:""}.fa-draft2digital{--fa:""}.fa-stripe{--fa:""}.fa-houzz{--fa:""}.fa-gg{--fa:""}.fa-dhl{--fa:""}.fa-square-pinterest{--fa:""}.fa-pinterest-square{--fa:""}.fa-xing{--fa:""}.fa-blackberry{--fa:""}.fa-creative-commons-pd{--fa:""}.fa-playstation{--fa:""}.fa-quinscape{--fa:""}.fa-less{--fa:""}.fa-blogger-b{--fa:""}.fa-opencart{--fa:""}.fa-vine{--fa:""}.fa-signal-messenger{--fa:""}.fa-paypal{--fa:""}.fa-gitlab{--fa:""}.fa-typo3{--fa:""}.fa-reddit-alien{--fa:""}.fa-yahoo{--fa:""}.fa-dailymotion{--fa:""}.fa-affiliatetheme{--fa:""}.fa-pied-piper-pp{--fa:""}.fa-bootstrap{--fa:""}.fa-odnoklassniki{--fa:""}.fa-nfc-symbol{--fa:""}.fa-mintbit{--fa:""}.fa-ethereum{--fa:""}.fa-speaker-deck{--fa:""}.fa-creative-commons-nc-eu{--fa:""}.fa-patreon{--fa:""}.fa-avianex{--fa:""}.fa-ello{--fa:""}.fa-gofore{--fa:""}.fa-bimobject{--fa:""}.fa-brave-reverse{--fa:""}.fa-facebook-f{--fa:""}.fa-square-google-plus{--fa:""}.fa-google-plus-square{--fa:""}.fa-web-awesome{--fa:""}.fa-mandalorian{--fa:""}.fa-first-order-alt{--fa:""}.fa-osi{--fa:""}.fa-google-wallet{--fa:""}.fa-d-and-d-beyond{--fa:""}.fa-periscope{--fa:""}.fa-fulcrum{--fa:""}.fa-cloudscale{--fa:""}.fa-forumbee{--fa:""}.fa-mizuni{--fa:""}.fa-schlix{--fa:""}.fa-square-xing{--fa:""}.fa-xing-square{--fa:""}.fa-bandcamp{--fa:""}.fa-wpforms{--fa:""}.fa-cloudversify{--fa:""}.fa-usps{--fa:""}.fa-megaport{--fa:""}.fa-magento{--fa:""}.fa-spotify{--fa:""}.fa-optin-monster{--fa:""}.fa-fly{--fa:""}.fa-square-bluesky{--fa:""}.fa-aviato{--fa:""}.fa-itunes{--fa:""}.fa-cuttlefish{--fa:""}.fa-blogger{--fa:""}.fa-flickr{--fa:""}.fa-viber{--fa:""}.fa-soundcloud{--fa:""}.fa-digg{--fa:""}.fa-tencent-weibo{--fa:""}.fa-letterboxd{--fa:""}.fa-symfony{--fa:""}.fa-maxcdn{--fa:""}.fa-etsy{--fa:""}.fa-facebook-messenger{--fa:""}.fa-audible{--fa:""}.fa-think-peaks{--fa:""}.fa-bilibili{--fa:""}.fa-erlang{--fa:""}.fa-x-twitter{--fa:""}.fa-cotton-bureau{--fa:""}.fa-dashcube{--fa:""}.fa-42-group{--fa:""}.fa-innosoft{--fa:""}.fa-stack-exchange{--fa:""}.fa-elementor{--fa:""}.fa-square-pied-piper{--fa:""}.fa-pied-piper-square{--fa:""}.fa-creative-commons-nd{--fa:""}.fa-palfed{--fa:""}.fa-superpowers{--fa:""}.fa-resolving{--fa:""}.fa-xbox{--fa:""}.fa-square-web-awesome-stroke{--fa:""}.fa-searchengin{--fa:""}.fa-tiktok{--fa:""}.fa-square-facebook{--fa:""}.fa-facebook-square{--fa:""}.fa-renren{--fa:""}.fa-linux{--fa:""}.fa-glide{--fa:""}.fa-linkedin{--fa:""}.fa-hubspot{--fa:""}.fa-deploydog{--fa:""}.fa-twitch{--fa:""}.fa-flutter{--fa:""}.fa-ravelry{--fa:""}.fa-mixer{--fa:""}.fa-square-lastfm{--fa:""}.fa-lastfm-square{--fa:""}.fa-vimeo{--fa:""}.fa-mendeley{--fa:""}.fa-uniregistry{--fa:""}.fa-figma{--fa:""}.fa-creative-commons-remix{--fa:""}.fa-cc-amazon-pay{--fa:""}.fa-dropbox{--fa:""}.fa-instagram{--fa:""}.fa-cmplid{--fa:""}.fa-upwork{--fa:""}.fa-facebook{--fa:""}.fa-gripfire{--fa:""}.fa-jedi-order{--fa:""}.fa-uikit{--fa:""}.fa-fort-awesome-alt{--fa:""}.fa-phabricator{--fa:""}.fa-ussunnah{--fa:""}.fa-earlybirds{--fa:""}.fa-trade-federation{--fa:""}.fa-autoprefixer{--fa:""}.fa-whatsapp{--fa:""}.fa-square-upwork{--fa:""}.fa-slideshare{--fa:""}.fa-google-play{--fa:""}.fa-viadeo{--fa:""}.fa-line{--fa:""}.fa-google-drive{--fa:""}.fa-servicestack{--fa:""}.fa-simplybuilt{--fa:""}.fa-bitbucket{--fa:""}.fa-imdb{--fa:""}.fa-deezer{--fa:""}.fa-raspberry-pi{--fa:""}.fa-jira{--fa:""}.fa-docker{--fa:""}.fa-screenpal{--fa:""}.fa-bluetooth{--fa:""}.fa-gitter{--fa:""}.fa-d-and-d{--fa:""}.fa-microblog{--fa:""}.fa-cc-diners-club{--fa:""}.fa-gg-circle{--fa:""}.fa-pied-piper-hat{--fa:""}.fa-kickstarter-k{--fa:""}.fa-yandex{--fa:""}.fa-readme{--fa:""}.fa-html5{--fa:""}.fa-sellsy{--fa:""}.fa-square-web-awesome{--fa:""}.fa-sass{--fa:""}.fa-wirsindhandwerk{--fa:""}.fa-wsh{--fa:""}.fa-buromobelexperte{--fa:""}.fa-salesforce{--fa:""}.fa-octopus-deploy{--fa:""}.fa-medapps{--fa:""}.fa-ns8{--fa:""}.fa-pinterest-p{--fa:""}.fa-apper{--fa:""}.fa-fort-awesome{--fa:""}.fa-waze{--fa:""}.fa-bluesky{--fa:""}.fa-cc-jcb{--fa:""}.fa-snapchat{--fa:""}.fa-snapchat-ghost{--fa:""}.fa-fantasy-flight-games{--fa:""}.fa-rust{--fa:""}.fa-wix{--fa:""}.fa-square-behance{--fa:""}.fa-behance-square{--fa:""}.fa-supple{--fa:""}.fa-webflow{--fa:""}.fa-rebel{--fa:""}.fa-css3{--fa:""}.fa-staylinked{--fa:""}.fa-kaggle{--fa:""}.fa-space-awesome{--fa:""}.fa-deviantart{--fa:""}.fa-cpanel{--fa:""}.fa-goodreads-g{--fa:""}.fa-square-git{--fa:""}.fa-git-square{--fa:""}.fa-square-tumblr{--fa:""}.fa-tumblr-square{--fa:""}.fa-trello{--fa:""}.fa-creative-commons-nc-jp{--fa:""}.fa-get-pocket{--fa:""}.fa-perbyte{--fa:""}.fa-grunt{--fa:""}.fa-weebly{--fa:""}.fa-connectdevelop{--fa:""}.fa-leanpub{--fa:""}.fa-black-tie{--fa:""}.fa-themeco{--fa:""}.fa-python{--fa:""}.fa-android{--fa:""}.fa-bots{--fa:""}.fa-free-code-camp{--fa:""}.fa-hornbill{--fa:""}.fa-js{--fa:""}.fa-ideal{--fa:""}.fa-git{--fa:""}.fa-dev{--fa:""}.fa-sketch{--fa:""}.fa-yandex-international{--fa:""}.fa-cc-amex{--fa:""}.fa-uber{--fa:""}.fa-github{--fa:""}.fa-php{--fa:""}.fa-alipay{--fa:""}.fa-youtube{--fa:""}.fa-skyatlas{--fa:""}.fa-firefox-browser{--fa:""}.fa-replyd{--fa:""}.fa-suse{--fa:""}.fa-jenkins{--fa:""}.fa-twitter{--fa:""}.fa-rockrms{--fa:""}.fa-pinterest{--fa:""}.fa-buffer{--fa:""}.fa-npm{--fa:""}.fa-yammer{--fa:""}.fa-btc{--fa:""}.fa-dribbble{--fa:""}.fa-stumbleupon-circle{--fa:""}.fa-internet-explorer{--fa:""}.fa-stubber{--fa:""}.fa-telegram{--fa:""}.fa-telegram-plane{--fa:""}.fa-old-republic{--fa:""}.fa-odysee{--fa:""}.fa-square-whatsapp{--fa:""}.fa-whatsapp-square{--fa:""}.fa-node-js{--fa:""}.fa-edge-legacy{--fa:""}.fa-slack{--fa:""}.fa-slack-hash{--fa:""}.fa-medrt{--fa:""}.fa-usb{--fa:""}.fa-tumblr{--fa:""}.fa-vaadin{--fa:""}.fa-quora{--fa:""}.fa-square-x-twitter{--fa:""}.fa-reacteurope{--fa:""}.fa-medium{--fa:""}.fa-medium-m{--fa:""}.fa-amilia{--fa:""}.fa-mixcloud{--fa:""}.fa-flipboard{--fa:""}.fa-viacoin{--fa:""}.fa-critical-role{--fa:""}.fa-sitrox{--fa:""}.fa-discourse{--fa:""}.fa-joomla{--fa:""}.fa-mastodon{--fa:""}.fa-airbnb{--fa:""}.fa-wolf-pack-battalion{--fa:""}.fa-buy-n-large{--fa:""}.fa-gulp{--fa:""}.fa-creative-commons-sampling-plus{--fa:""}.fa-strava{--fa:""}.fa-ember{--fa:""}.fa-canadian-maple-leaf{--fa:""}.fa-teamspeak{--fa:""}.fa-pushed{--fa:""}.fa-wordpress-simple{--fa:""}.fa-nutritionix{--fa:""}.fa-wodu{--fa:""}.fa-google-pay{--fa:""}.fa-intercom{--fa:""}.fa-zhihu{--fa:""}.fa-korvue{--fa:""}.fa-pix{--fa:""}.fa-steam-symbol{--fa:""}:root{--color-green: #56c756;--color-yellow: #e9ad3f;--color-orange: #e9833f;--color-red: #bb4949;--font-title: bold 1.2rem "Nunito", sans-serif;--font-default: 1rem "Nunito", sans-serif;--font-small: 0.8rem "Nunito", sans-serif}:root [data-theme=dark]{--color-background: #050608;--color-cards: #0c0d14;--color-cards-alt: #16171f;--color-hover: #1d1e27;--color-hover-alt: #21222c;--color-badge: #282e41;--color-badge-text: #8d9dbb;--color-text: #a5abb3;--color-text-muted: #6d7277;--color-toggles: #384a8b;--color-links: #384a8b;--color-lobby: #b3a38c;--color-white: white;--color-black: black;--shadow: none}:root [data-theme=light]{--color-background: #101116;--color-cards: #ffffff;--color-cards-alt: var(--color-cards);--color-hover: #ececec;--color-hover-alt: var(--color-hover);--color-badge: #aab0c4;--color-badge-text: #3a3a3a;--color-text: #353535;--color-toggles: #384a8b;--color-links: #384a8b;--color-lobby: #8a6f48;--color-white: black;--color-black: white;--shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px}::selection{background-color:var(--color-text);color:var(--color-hover)}::-webkit-scrollbar{display:none;width:8px;height:16px}::-webkit-scrollbar-track{background:rgba(0,0,0,0)}::-webkit-scrollbar-thumb{background:var(--color-hover);border-radius:max(.4vw,4px)}::-webkit-scrollbar-thumb:hover{background:var(--color-hover)}*{box-sizing:border-box}html{overflow:hidden;height:100%;width:100vw}html body{font-family:"Nunito",sans-serif;cursor:url(${E}),auto;user-select:none;position:relative;overflow:hidden;height:100%;width:100%;margin:0}html body>.app{position:relative;display:flex;width:100%;height:calc(100% - 48px);background:var(--color-background);color:var(--color-text);overflow:hidden;padding:max(.7vw,8px);gap:max(.7vw,8px)}html body>.app>.chat{display:flex;flex-direction:column;position:relative;padding:max(.7vw,8px);border-radius:max(.4vw,4px);box-shadow:var(--shadow);background-color:var(--color-cards)}html body>.app>.piano{display:flex;flex-direction:column;width:calc(100% - max(.7vw,8px)*3 - 20vw);height:100%}@media only screen and (max-device-width: 641px){body pv-header .title,body pv-header .divider,body pv-header .volume.icon,body pv-header .volume-slider{display:none !important}body .app>.chat{width:100% !important}body .app>.chat>*{width:100% !important}body .app>.piano{display:none !important}}@media only screen and (max-device-height: 480px){body>.app>.chat{display:none !important}body>.app>.piano{width:100% !important}}@media only screen and (max-device-height: 480px)and (max-device-width: 641px){body>.app>.chat{display:flex !important}}`, ""]);
      const P = g;
    }, 6314: a => {
      a.exports = function (a) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var t = "", i = undefined !== e[5];
            return e[4] && (t += "@supports (".concat(e[4], ") {")), e[2] && (t += "@media ".concat(e[2], " {")), i && (t += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), t += a(e), i && (t += "}"), e[2] && (t += "}"), e[4] && (t += "}"), t;
          }).join("");
        }, e.i = function (a, t, i, o, s) {
          "string" == typeof a && (a = [[null, a, undefined]]);
          var n = {};
          if (i) for (var r = 0; r < this.length; r++) {
            var f = this[r][0];
            null != f && (n[f] = true);
          }
          for (var l = 0; l < a.length; l++) {
            var c = [].concat(a[l]);
            i && n[c[0]] || (undefined !== s && (undefined === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = s), t && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = t) : c[2] = t), o && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = o) : c[4] = "".concat(o)), e.push(c));
          }
        }, e;
      };
    }, 4417: a => {
      a.exports = function (a, e) {
        return e || (e = {}), a ? (a = String(a.__esModule ? a.default : a), /^['"].*['"]$/.test(a) && (a = a.slice(1, -1)), e.hash && (a += e.hash), /["'() \t\n]|(%20)/.test(a) || e.needQuotes ? '"'.concat(a.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : a) : a;
      };
    }, 1601: a => {
      a.exports = function (a) {
        return a[1];
      };
    }, 7007: a => {
      var e, t = "object" == typeof Reflect ? Reflect : null, i = t && "function" == typeof t.apply ? t.apply : function (a, e, t) {
        return Function.prototype.apply.call(a, e, t);
      };
      e = t && "function" == typeof t.ownKeys ? t.ownKeys : Object.getOwnPropertySymbols ? function (a) {
        return Object.getOwnPropertyNames(a).concat(Object.getOwnPropertySymbols(a));
      } : function (a) {
        return Object.getOwnPropertyNames(a);
      };
      var o = Number.isNaN || function (a) {
        return a != a;
      };
      function s() {
        s.init.call(this);
      }
      a.exports = s, a.exports.once = function (a, e) {
        return new Promise(function (t, i) {
          function o(t) {
            a.removeListener(e, s), i(t);
          }
          function s() {
            "function" == typeof a.removeListener && a.removeListener("error", o), t([].slice.call(arguments));
          }
          h(a, e, s, {once: true}), "error" !== e && function (a, e, t) {
            "function" == typeof a.on && h(a, "error", e, {once: true});
          }(a, o);
        });
      }, s.EventEmitter = s, s.prototype._events = undefined, s.prototype._eventsCount = 0, s.prototype._maxListeners = undefined;
      var n = 10;
      function r(a) {
        if ("function" != typeof a) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof a);
      }
      function f(a) {
        return undefined === a._maxListeners ? s.defaultMaxListeners : a._maxListeners;
      }
      function l(a, e, t, i) {
        var o, s, n;
        if (r(t), undefined === (s = a._events) ? (s = a._events = Object.create(null), a._eventsCount = 0) : (undefined !== s.newListener && (a.emit("newListener", e, t.listener ? t.listener : t), s = a._events), n = s[e]), undefined === n) n = s[e] = t, ++a._eventsCount; else if ("function" == typeof n ? n = s[e] = i ? [t, n] : [n, t] : i ? n.unshift(t) : n.push(t), (o = f(a)) > 0 && n.length > o && !n.warned) {
          n.warned = true;
          var l = new Error("Possible EventEmitter memory leak detected. " + n.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          l.name = "MaxListenersExceededWarning", l.emitter = a, l.type = e, l.count = n.length, console && console.warn;
        }
        return a;
      }
      function c() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      function d(a, e, t) {
        var i = {fired: false, wrapFn: undefined, target: a, type: e, listener: t}, o = c.bind(i);
        return o.listener = t, i.wrapFn = o, o;
      }
      function p(a, e, t) {
        var i = a._events;
        if (undefined === i) return [];
        var o = i[e];
        return undefined === o ? [] : "function" == typeof o ? t ? [o.listener || o] : [o] : t ? function (a) {
          for (var e = new Array(a.length), t = 0; t < e.length; ++t) e[t] = a[t].listener || a[t];
          return e;
        }(o) : v(o, o.length);
      }
      function u(a) {
        var e = this._events;
        if (undefined !== e) {
          var t = e[a];
          if ("function" == typeof t) return 1;
          if (undefined !== t) return t.length;
        }
        return 0;
      }
      function v(a, e) {
        for (var t = new Array(e), i = 0; i < e; ++i) t[i] = a[i];
        return t;
      }
      function h(a, e, t, i) {
        if ("function" == typeof a.on) i.once ? a.once(e, t) : a.on(e, t); else {
          if ("function" != typeof a.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof a);
          a.addEventListener(e, function o(s) {
            i.once && a.removeEventListener(e, o), t(s);
          });
        }
      }
      Object.defineProperty(s, "defaultMaxListeners", {enumerable: true, get: function () {
        return n;
      }, set: function (a) {
        if ("number" != typeof a || a < 0 || o(a)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + a + ".");
        n = a;
      }}), s.init = function () {
        undefined !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
      }, s.prototype.setMaxListeners = function (a) {
        if ("number" != typeof a || a < 0 || o(a)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + a + ".");
        return this._maxListeners = a, this;
      }, s.prototype.getMaxListeners = function () {
        return f(this);
      }, s.prototype.emit = function (a) {
        for (var e = [], t = 1; t < arguments.length; t++) e.push(arguments[t]);
        var o = "error" === a, s = this._events;
        if (undefined !== s) o = o && undefined === s.error; else if (!o) return false;
        if (o) {
          var n;
          if (e.length > 0 && (n = e[0]), n instanceof Error) throw n;
          var r = new Error("Unhandled error." + (n ? " (" + n.message + ")" : ""));
          throw r.context = n, r;
        }
        var f = s[a];
        if (undefined === f) return false;
        if ("function" == typeof f) i(f, this, e); else {
          var l = f.length, c = v(f, l);
          for (t = 0; t < l; ++t) i(c[t], this, e);
        }
        return true;
      }, s.prototype.addListener = function (a, e) {
        return l(this, a, e, false);
      }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function (a, e) {
        return l(this, a, e, true);
      }, s.prototype.once = function (a, e) {
        return r(e), this.on(a, d(this, a, e)), this;
      }, s.prototype.prependOnceListener = function (a, e) {
        return r(e), this.prependListener(a, d(this, a, e)), this;
      }, s.prototype.removeListener = function (a, e) {
        var t, i, o, s, n;
        if (r(e), undefined === (i = this._events)) return this;
        if (undefined === (t = i[a])) return this;
        if (t === e || t.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[a], i.removeListener && this.emit("removeListener", a, t.listener || e)); else if ("function" != typeof t) {
          for (o = -1, s = t.length - 1; s >= 0; s--) if (t[s] === e || t[s].listener === e) {
            n = t[s].listener, o = s;
            break;
          }
          if (o < 0) return this;
          0 === o ? t.shift() : function (a, e) {
            for (; e + 1 < a.length; e++) a[e] = a[e + 1];
            a.pop();
          }(t, o), 1 === t.length && (i[a] = t[0]), undefined !== i.removeListener && this.emit("removeListener", a, n || e);
        }
        return this;
      }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function (a) {
        var e, t, i;
        if (undefined === (t = this._events)) return this;
        if (undefined === t.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : undefined !== t[a] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete t[a]), this;
        if (0 === arguments.length) {
          var o, s = Object.keys(t);
          for (i = 0; i < s.length; ++i) "removeListener" !== (o = s[i]) && this.removeAllListeners(o);
          return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
        }
        if ("function" == typeof (e = t[a])) this.removeListener(a, e); else if (undefined !== e) for (i = e.length - 1; i >= 0; i--) this.removeListener(a, e[i]);
        return this;
      }, s.prototype.listeners = function (a) {
        return p(this, a, true);
      }, s.prototype.rawListeners = function (a) {
        return p(this, a, false);
      }, s.listenerCount = function (a, e) {
        return "function" == typeof a.listenerCount ? a.listenerCount(e) : u.call(a, e);
      }, s.prototype.listenerCount = u, s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? e(this._events) : [];
      };
    }, 6946: (a, e, t) => {
      a.exports = t(4394);
    }, 4394: (a, e, t) => {
      var i = e;
      function o() {
        i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
      }
      i.build = "minimal", i.Writer = t(3449), i.BufferWriter = t(818), i.Reader = t(6237), i.BufferReader = t(3158), i.util = t(3610), i.rpc = t(5047), i.roots = t(4529), i.configure = o, o();
    }, 6237: (a, e, t) => {
      a.exports = f;
      var i, o = t(3610), s = o.LongBits, n = o.utf8;
      function f(a) {
        this.buf = a, this.pos = 0, this.len = a.length;
      }
      var l, c = "undefined" != typeof Uint8Array ? function (a) {
        if (a instanceof Uint8Array || Array.isArray(a)) return new f(a);
        throw Error("illegal buffer");
      } : function (a) {
        if (Array.isArray(a)) return new f(a);
        throw Error("illegal buffer");
      }, d = function () {
        return o.Buffer ? function (a) {
          return (f.create = function (a) {
            return o.Buffer.isBuffer(a) ? new i(a) : c(a);
          })(a);
        } : c;
      };
      function p() {
        var a = new s(0, 0), e = 0;
        if (!(this.len - this.pos > 4)) {
          for (; e < 3; ++e) {
            if (this.pos >= this.len) throw RangeError("index out of range: " + this.pos + " + " + (e || 1) + " > " + this.len);
            if (a.lo = (a.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return a;
          }
          return a.lo = (a.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, a;
        }
        for (; e < 4; ++e) if (a.lo = (a.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return a;
        if (a.lo = (a.lo | (127 & this.buf[this.pos]) << 28) >>> 0, a.hi = (a.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return a;
        if (e = 0, this.len - this.pos > 4) {
          for (; e < 5; ++e) if (a.hi = (a.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return a;
        } else for (; e < 5; ++e) {
          if (this.pos >= this.len) throw RangeError("index out of range: " + this.pos + " + " + (e || 1) + " > " + this.len);
          if (a.hi = (a.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return a;
        }
        throw Error("invalid varint encoding");
      }
      function v() {
        if (this.pos + 8 > this.len) throw RangeError("index out of range: " + this.pos + " + " + (8 || 1) + " > " + this.len);
        return new s((this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0, (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0);
      }
      f.create = d(), f.prototype._slice = o.Array.prototype.subarray || o.Array.prototype.slice, f.prototype.uint32 = (l = 4294967295, function () {
        if (l = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return l;
        if ((this.pos += 5) > this.len) throw this.pos = this.len, RangeError("index out of range: " + this.pos + " + " + (10 || 1) + " > " + this.len);
        return l;
      }), f.prototype.int32 = function () {
        return 0 | this.uint32();
      }, f.prototype.sint32 = function () {
        var a = this.uint32();
        return a >>> 1 ^ -(1 & a) | 0;
      }, f.prototype.bool = function () {
        return 0 !== this.uint32();
      }, f.prototype.fixed32 = function () {
        if (this.pos + 4 > this.len) throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
        return (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0;
      }, f.prototype.sfixed32 = function () {
        if (this.pos + 4 > this.len) throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
        return 0 | (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0;
      }, f.prototype.float = function () {
        if (this.pos + 4 > this.len) throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
        var a = o.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, a;
      }, f.prototype.double = function () {
        if (this.pos + 8 > this.len) throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
        var a = o.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, a;
      }, f.prototype.bytes = function () {
        var a = this.uint32(), e = this.pos, t = this.pos + a;
        if (t > this.len) throw RangeError("index out of range: " + this.pos + " + " + (a || 1) + " > " + this.len);
        if (this.pos += a, Array.isArray(this.buf)) return this.buf.slice(e, t);
        if (e === t) {
          var i = o.Buffer;
          return i ? i.alloc(0) : new this.buf.constructor(0);
        }
        return this._slice.call(this.buf, e, t);
      }, f.prototype.string = function () {
        var a = this.bytes();
        return n.read(a, 0, a.length);
      }, f.prototype.skip = function (a) {
        if ("number" == typeof a) {
          if (this.pos + a > this.len) throw RangeError("index out of range: " + this.pos + " + " + (a || 1) + " > " + this.len);
          this.pos += a;
        } else do {
          if (this.pos >= this.len) throw RangeError("index out of range: " + this.pos + " + " + (e || 1) + " > " + this.len);
        } while (128 & this.buf[this.pos++]);
        return this;
      }, f.prototype.skipType = function (a) {
        switch (a) {
          case 0:
            this.skip();
            break;
          case 1:
            this.skip(8);
            break;
          case 2:
            this.skip(this.uint32());
            break;
          case 3:
            for (; 4 != (a = 7 & this.uint32());) this.skipType(a);
            break;
          case 5:
            this.skip(4);
            break;
          default:
            throw Error("invalid wire type " + a + " at offset " + this.pos);
        }
        return this;
      }, f._configure = function (a) {
        i = a, f.create = d(), i._configure();
        var e = o.Long ? "toLong" : "toNumber";
        o.merge(f.prototype, {int64: function () {
          return p.call(this)[e](false);
        }, uint64: function () {
          return p.call(this)[e](true);
        }, sint64: function () {
          return p.call(this).zzDecode()[e](false);
        }, fixed64: function () {
          return v.call(this)[e](true);
        }, sfixed64: function () {
          return v.call(this)[e](false);
        }});
      };
    }, 3158: (a, e, t) => {
      a.exports = s;
      var i = t(6237);
      (s.prototype = Object.create(i.prototype)).constructor = s;
      var o = t(3610);
      function s(a) {
        i.call(this, a);
      }
      s._configure = function () {
        o.Buffer && (s.prototype._slice = o.Buffer.prototype.slice);
      }, s.prototype.string = function () {
        var a = this.uint32();
        return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + a, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + a, this.len));
      }, s._configure();
    }, 4529: a => {
      a.exports = {};
    }, 5047: (a, e, t) => {
      e.Service = t(7595);
    }, 7595: (a, e, t) => {
      a.exports = o;
      var i = t(3610);
      function o(a, e, t) {
        if ("function" != typeof a) throw TypeError("rpcImpl must be a function");
        i.EventEmitter.call(this), this.rpcImpl = a, this.requestDelimited = Boolean(e), this.responseDelimited = Boolean(t);
      }
      (o.prototype = Object.create(i.EventEmitter.prototype)).constructor = o, o.prototype.rpcCall = function a(e, t, o, s, n) {
        if (!s) throw TypeError("request must be specified");
        var r = this;
        if (!n) return i.asPromise(a, r, e, t, o, s);
        if (r.rpcImpl) try {
          return r.rpcImpl(e, t[r.requestDelimited ? "encodeDelimited" : "encode"](s).finish(), function (a, t) {
            if (a) return r.emit("error", a, e), n(a);
            if (null !== t) {
              if (!(t instanceof o)) try {
                t = o[r.responseDelimited ? "decodeDelimited" : "decode"](t);
              } catch (a) {
                return r.emit("error", a, e), n(a);
              }
              return r.emit("data", t, e), n(null, t);
            }
            r.end(true);
          });
        } catch (a) {
          return r.emit("error", a, e), void setTimeout(function () {
            n(a);
          }, 0);
        } else setTimeout(function () {
          n(Error("already ended"));
        }, 0);
      }, o.prototype.end = function (a) {
        return this.rpcImpl && (a || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
      };
    }, 2239: (a, e, t) => {
      a.exports = o;
      var i = t(3610);
      function o(a, e) {
        this.lo = a >>> 0, this.hi = e >>> 0;
      }
      var s = o.zero = new o(0, 0);
      s.toNumber = function () {
        return 0;
      }, s.zzEncode = s.zzDecode = function () {
        return this;
      }, s.length = function () {
        return 1;
      };
      var n = o.zeroHash = "";
      o.fromNumber = function (a) {
        if (0 === a) return s;
        var e = a < 0;
        e && (a = -a);
        var t = a >>> 0, i = (a - t) / 4294967296 >>> 0;
        return e && (i = ~i >>> 0, t = ~t >>> 0, ++t > 4294967295 && (t = 0, ++i > 4294967295 && (i = 0))), new o(t, i);
      }, o.from = function (a) {
        if ("number" == typeof a) return o.fromNumber(a);
        if (i.isString(a)) {
          if (!i.Long) return o.fromNumber(parseInt(a, 10));
          a = i.Long.fromString(a);
        }
        return a.low || a.high ? new o(a.low >>> 0, a.high >>> 0) : s;
      }, o.prototype.toNumber = function (a) {
        if (!a && this.hi >>> 31) {
          var e = 1 + ~this.lo >>> 0, t = ~this.hi >>> 0;
          return e || (t = t + 1 >>> 0), -(e + 4294967296 * t);
        }
        return this.lo + 4294967296 * this.hi;
      }, o.prototype.toLong = function (a) {
        return i.Long ? new i.Long(0 | this.lo, 0 | this.hi, Boolean(a)) : {low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(a)};
      };
      var r = String.prototype.charCodeAt;
      o.fromHash = function (a) {
        return a === n ? s : new o((r.call(a, 0) | r.call(a, 1) << 8 | r.call(a, 2) << 16 | r.call(a, 3) << 24) >>> 0, (r.call(a, 4) | r.call(a, 5) << 8 | r.call(a, 6) << 16 | r.call(a, 7) << 24) >>> 0);
      }, o.prototype.toHash = function () {
        return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
      }, o.prototype.zzEncode = function () {
        var a = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ a) >>> 0, this.lo = (this.lo << 1 ^ a) >>> 0, this;
      }, o.prototype.zzDecode = function () {
        var a = -(1 & this.lo);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ a) >>> 0, this.hi = (this.hi >>> 1 ^ a) >>> 0, this;
      }, o.prototype.length = function () {
        var a = this.lo, e = (this.lo >>> 28 | this.hi << 4) >>> 0, t = this.hi >>> 24;
        return 0 === t ? 0 === e ? a < 16384 ? a < 128 ? 1 : 2 : a < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : t < 128 ? 9 : 10;
      };
    }, 3610: function (a, e, t) {
      var i = e;
      function o(a, e, t) {
        for (var i = Object.keys(e), o = 0; o < i.length; ++o) undefined !== a[i[o]] && t || (a[i[o]] = e[i[o]]);
        return a;
      }
      function s(a) {
        function e(a, t) {
          if (!(this instanceof e)) return new e(a, t);
          Object.defineProperty(this, "message", {get: function () {
            return a;
          }}), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {value: (new Error).stack || ""}), t && o(this, t);
        }
        return e.prototype = Object.create(Error.prototype, {constructor: {value: e, writable: true, enumerable: false, configurable: true}, name: {get: function () {
          return a;
        }, set: undefined, enumerable: false, configurable: true}, toString: {value: function () {
          return this.name + ": " + this.message;
        }, writable: true, enumerable: false, configurable: true}}), e;
      }
      i.asPromise = t(8045), i.base64 = t(8839), i.EventEmitter = t(4358), i.float = t(9410), i.inquire = t(4153), i.utf8 = t(1447), i.pool = t(9390), i.LongBits = t(2239), i.isNode = Boolean(undefined !== t.g && t.g && t.g.process && t.g.process.versions && t.g.process.versions.node), i.global = i.isNode && t.g || "undefined" != typeof window && window || "undefined" != typeof self && self || this, i.emptyArray = Object.freeze ? Object.freeze([]) : [], i.emptyObject = Object.freeze ? Object.freeze({}) : {}, i.isInteger = Number.isInteger || function (a) {
        return "number" == typeof a && isFinite(a) && Math.floor(a) === a;
      }, i.isString = function (a) {
        return "string" == typeof a || a instanceof String;
      }, i.isObject = function (a) {
        return a && "object" == typeof a;
      }, i.isset = i.isSet = function (a, e) {
        var t = a[e];
        return !(null == t || !a.hasOwnProperty(e)) && ("object" != typeof t || (Array.isArray(t) ? t.length : Object.keys(t).length) > 0);
      }, i.Buffer = function () {
        try {
          var a = i.inquire("buffer").Buffer;
          return a.prototype.utf8Write ? a : null;
        } catch (a) {
          return null;
        }
      }(), i._Buffer_from = null, i._Buffer_allocUnsafe = null, i.newBuffer = function (a) {
        return "number" == typeof a ? i.Buffer ? i._Buffer_allocUnsafe(a) : new i.Array(a) : i.Buffer ? i._Buffer_from(a) : "undefined" == typeof Uint8Array ? a : new Uint8Array(a);
      }, i.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, i.Long = i.global.dcodeIO && i.global.dcodeIO.Long || i.global.Long || i.inquire("long"), i.key2Re = /^true|false|0|1$/, i.key32Re = /^-?(?:0|[1-9][0-9]*)$/, i.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, i.longToHash = function (a) {
        return a ? i.LongBits.from(a).toHash() : i.LongBits.zeroHash;
      }, i.longFromHash = function (a, e) {
        var t = i.LongBits.fromHash(a);
        return i.Long ? i.Long.fromBits(t.lo, t.hi, e) : t.toNumber(Boolean(e));
      }, i.merge = o, i.lcFirst = function (a) {
        return a.charAt(0).toLowerCase() + a.substring(1);
      }, i.newError = s, i.ProtocolError = s("ProtocolError"), i.oneOfGetter = function (a) {
        for (var e = {}, t = 0; t < a.length; ++t) e[a[t]] = 1;
        return function () {
          for (var a = Object.keys(this), t = a.length - 1; t > -1; --t) if (1 === e[a[t]] && undefined !== this[a[t]] && null !== this[a[t]]) return a[t];
        };
      }, i.oneOfSetter = function (a) {
        return function (e) {
          for (var t = 0; t < a.length; ++t) a[t] !== e && delete this[a[t]];
        };
      }, i.toJSONOptions = {longs: String, enums: String, bytes: String, json: true}, i._configure = function () {
        var a = i.Buffer;
        a ? (i._Buffer_from = a.from !== Uint8Array.from && a.from || function (e, t) {
          return new a(e, t);
        }, i._Buffer_allocUnsafe = a.allocUnsafe || function (e) {
          return new a(e);
        }) : i._Buffer_from = i._Buffer_allocUnsafe = null;
      };
    }, 3449: (a, e, t) => {
      a.exports = d;
      var i, o = t(3610), s = o.LongBits, n = o.base64, r = o.utf8;
      function f(a, e, t) {
        this.fn = a, this.len = e, this.next = undefined, this.val = t;
      }
      function l() {}
      function c(a) {
        this.head = a.head, this.tail = a.tail, this.len = a.len, this.next = a.states;
      }
      function d() {
        this.len = 0, this.head = new f(l, 0, 0), this.tail = this.head, this.states = null;
      }
      var p = function () {
        return o.Buffer ? function () {
          return (d.create = function () {
            return new i;
          })();
        } : function () {
          return new d;
        };
      };
      function u(a, e, t) {
        e[t] = 255 & a;
      }
      function v(a, e) {
        this.len = a, this.next = undefined, this.val = e;
      }
      function h(a, e, t) {
        for (; a.hi;) e[t++] = 127 & a.lo | 128, a.lo = (a.lo >>> 7 | a.hi << 25) >>> 0, a.hi >>>= 7;
        for (; a.lo > 127;) e[t++] = 127 & a.lo | 128, a.lo = a.lo >>> 7;
        e[t++] = a.lo;
      }
      function m(a, e, t) {
        e[t] = 255 & a, e[t + 1] = a >>> 8 & 255, e[t + 2] = a >>> 16 & 255, e[t + 3] = a >>> 24;
      }
      d.create = p(), d.alloc = function (a) {
        return new o.Array(a);
      }, o.Array !== Array && (d.alloc = o.pool(d.alloc, o.Array.prototype.subarray)), d.prototype._push = function (a, e, t) {
        return this.tail = this.tail.next = new f(a, e, t), this.len += e, this;
      }, v.prototype = Object.create(f.prototype), v.prototype.fn = function (a, e, t) {
        for (; a > 127;) e[t++] = 127 & a | 128, a >>>= 7;
        e[t] = a;
      }, d.prototype.uint32 = function (a) {
        return this.len += (this.tail = this.tail.next = new v((a >>>= 0) < 128 ? 1 : a < 16384 ? 2 : a < 2097152 ? 3 : a < 268435456 ? 4 : 5, a)).len, this;
      }, d.prototype.int32 = function (a) {
        return a < 0 ? this._push(h, 10, s.fromNumber(a)) : this.uint32(a);
      }, d.prototype.sint32 = function (a) {
        return this.uint32((a << 1 ^ a >> 31) >>> 0);
      }, d.prototype.uint64 = function (a) {
        var e = s.from(a);
        return this._push(h, e.length(), e);
      }, d.prototype.int64 = d.prototype.uint64, d.prototype.sint64 = function (a) {
        var e = s.from(a).zzEncode();
        return this._push(h, e.length(), e);
      }, d.prototype.bool = function (a) {
        return this._push(u, 1, a ? 1 : 0);
      }, d.prototype.fixed32 = function (a) {
        return this._push(m, 4, a >>> 0);
      }, d.prototype.sfixed32 = d.prototype.fixed32, d.prototype.fixed64 = function (a) {
        var e = s.from(a);
        return this._push(m, 4, e.lo)._push(m, 4, e.hi);
      }, d.prototype.sfixed64 = d.prototype.fixed64, d.prototype.float = function (a) {
        return this._push(o.float.writeFloatLE, 4, a);
      }, d.prototype.double = function (a) {
        return this._push(o.float.writeDoubleLE, 8, a);
      };
      var g = o.Array.prototype.set ? function (a, e, t) {
        e.set(a, t);
      } : function (a, e, t) {
        for (var i = 0; i < a.length; ++i) e[t + i] = a[i];
      };
      d.prototype.bytes = function (a) {
        var e = a.length >>> 0;
        if (!e) return this._push(u, 1, 0);
        if (o.isString(a)) {
          var t = d.alloc(e = n.length(a));
          n.decode(a, t, 0), a = t;
        }
        return this.uint32(e)._push(g, e, a);
      }, d.prototype.string = function (a) {
        var e = r.length(a);
        return e ? this.uint32(e)._push(r.write, e, a) : this._push(u, 1, 0);
      }, d.prototype.fork = function () {
        return this.states = new c(this), this.head = this.tail = new f(l, 0, 0), this.len = 0, this;
      }, d.prototype.reset = function () {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new f(l, 0, 0), this.len = 0), this;
      }, d.prototype.ldelim = function () {
        var a = this.head, e = this.tail, t = this.len;
        return this.reset().uint32(t), t && (this.tail.next = a.next, this.tail = e, this.len += t), this;
      }, d.prototype.finish = function () {
        for (var a = this.head.next, e = this.constructor.alloc(this.len), t = 0; a;) a.fn(a.val, e, t), t += a.len, a = a.next;
        return e;
      }, d._configure = function (a) {
        i = a, d.create = p(), i._configure();
      };
    }, 818: (a, e, t) => {
      a.exports = s;
      var i = t(3449);
      (s.prototype = Object.create(i.prototype)).constructor = s;
      var o = t(3610);
      function s() {
        i.call(this);
      }
      function n(a, e, t) {
        a.length < 40 ? o.utf8.write(a, e, t) : e.utf8Write ? e.utf8Write(a, t) : e.write(a, t);
      }
      s._configure = function () {
        s.alloc = o._Buffer_allocUnsafe, s.writeBytesBuffer = o.Buffer && o.Buffer.prototype instanceof Uint8Array && "set" === o.Buffer.prototype.set.name ? function (a, e, t) {
          e.set(a, t);
        } : function (a, e, t) {
          if (a.copy) a.copy(e, t, 0, a.length); else for (var i = 0; i < a.length;) e[t++] = a[i++];
        };
      }, s.prototype.bytes = function (a) {
        o.isString(a) && (a = o._Buffer_from(a, "base64"));
        var e = a.length >>> 0;
        return this.uint32(e), e && this._push(s.writeBytesBuffer, e, a), this;
      }, s.prototype.string = function (a) {
        var e = o.Buffer.byteLength(a);
        return this.uint32(e), e && this._push(n, e, a), this;
      }, s._configure();
    }, 5072: a => {
      var e = [];
      function t(a) {
        for (var t = -1, i = 0; i < e.length; i++) if (e[i].identifier === a) {
          t = i;
          break;
        }
        return t;
      }
      function i(a, i) {
        for (var s = {}, n = [], r = 0; r < a.length; r++) {
          var f = a[r], l = i.base ? f[0] + i.base : f[0], c = s[l] || 0, d = "".concat(l, " ").concat(c);
          s[l] = c + 1;
          var p = t(d), u = {css: f[1], media: f[2], sourceMap: f[3], supports: f[4], layer: f[5]};
          if (-1 !== p) e[p].references++, e[p].updater(u); else {
            var v = o(u, i);
            i.byIndex = r, e.splice(r, 0, {identifier: d, updater: v, references: 1});
          }
          n.push(d);
        }
        return n;
      }
      function o(a, e) {
        var t = e.domAPI(e);
        return t.update(a), function (e) {
          if (e) {
            if (e.css === a.css && e.media === a.media && e.sourceMap === a.sourceMap && e.supports === a.supports && e.layer === a.layer) return;
            t.update(a = e);
          } else t.remove();
        };
      }
      a.exports = function (a, o) {
        var s = i(a = a || [], o = o || {});
        return function (a) {
          a = a || [];
          for (var n = 0; n < s.length; n++) {
            var r = t(s[n]);
            e[r].references--;
          }
          for (var f = i(a, o), l = 0; l < s.length; l++) {
            var c = t(s[l]);
            0 === e[c].references && (e[c].updater(), e.splice(c, 1));
          }
          s = f;
        };
      };
    }, 7659: a => {
      var e = {};
      a.exports = function (a, t) {
        var i = function (a) {
          if (undefined === e[a]) {
            var t = document.querySelector(a);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
              t = t.contentDocument.head;
            } catch (a) {
              t = null;
            }
            e[a] = t;
          }
          return e[a];
        }(a);
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        i.appendChild(t);
      };
    }, 540: a => {
      a.exports = function (a) {
        var e = document.createElement("style");
        return a.setAttributes(e, a.attributes), a.insert(e, a.options), e;
      };
    }, 5056: (a, e, t) => {
      a.exports = function (a) {
        var e = t.nc;
        e && a.setAttribute("nonce", e);
      };
    }, 7825: a => {
      a.exports = function (a) {
        if ("undefined" == typeof document) return {update: function () {}, remove: function () {}};
        var e = a.insertStyleElement(a);
        return {update: function (t) {
          !function (a, e, t) {
            var i = "";
            t.supports && (i += "@supports (".concat(t.supports, ") {")), t.media && (i += "@media ".concat(t.media, " {"));
            var o = undefined !== t.layer;
            o && (i += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), i += t.css, o && (i += "}"), t.media && (i += "}"), t.supports && (i += "}");
            var s = t.sourceMap;
            s && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), e.styleTagTransform(i, a, e.options);
          }(e, a, t);
        }, remove: function () {
          !function (a) {
            if (null === a.parentNode) return false;
            a.parentNode.removeChild(a);
          }(e);
        }};
      };
    }, 1113: a => {
      a.exports = function (a, e) {
        if (e.styleSheet) e.styleSheet.cssText = a; else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(a));
        }
      };
    }, 4189: (a, e, t) => {
      a.exports = t.p + "26b80c8830bebf340211.ttf";
    }, 2459: (a, e, t) => {
      a.exports = t.p + "fdbb558523a380307689.woff2";
    }, 651: (a, e, t) => {
      a.exports = t.p + "ad1782c70927ebc5bc87.ttf";
    }, 3369: (a, e, t) => {
      a.exports = t.p + "83a538a018a9e44b023a.woff2";
    }, 1873: (a, e, t) => {
      a.exports = t.p + "5dd1fe40dbea45cd26d2.cur";
    }, 9662: (a, e, t) => {
      a.exports = t.p + "88b4a467a18e813218f8.cur";
    }, 9738: (a, e, t) => {
      a.exports = t.p + "c7283f73cbd89e54a615.cur";
    }, 4675: (a, e, t) => {
      a.exports = t.p + "27f230d7609eeee55225.cur";
    }}, __webpack_module_cache__ = {};
    function __webpack_require__(a) {
      var e = __webpack_module_cache__[a];
      if (undefined !== e) return e.exports;
      var t = __webpack_module_cache__[a] = {id: a, exports: {}};
      return __webpack_modules__[a].call(t.exports, t, t.exports, __webpack_require__), t.exports;
    }
    __webpack_require__.m = __webpack_modules__, __webpack_require__.n = a => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return __webpack_require__.d(e, {a: e}), e;
    }, __webpack_require__.d = (a, e) => {
      for (var t in e) __webpack_require__.o(e, t) && !__webpack_require__.o(a, t) && Object.defineProperty(a, t, {enumerable: true, get: e[t]});
    }, __webpack_require__.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    }(), __webpack_require__.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e), (() => {
      var a;
      __webpack_require__.g.importScripts && (a = __webpack_require__.g.location + "");
      var e = __webpack_require__.g.document;
      if (!a && e && (e.currentScript && "SCRIPT" === e.currentScript.tagName.toUpperCase() && (a = e.currentScript.src), !a)) {
        var t = e.getElementsByTagName("script");
        if (t.length) for (var i = t.length - 1; i > -1 && (!a || !/^http(s?):/.test(a));) a = t[i--].src;
      }
      if (!a) throw new Error("Automatic publicPath is not supported in this browser");
      a = a.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), __webpack_require__.p = a;
    })(), __webpack_require__.b = document.baseURI || self.location.href, __webpack_require__.nc = undefined;
    var __webpack_exports__ = {}, injectStylesIntoStyleTag = __webpack_require__(5072), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__(7825), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__(7659), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__(5056), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__(540), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__(1113), styleTagTransform_default = __webpack_require__.n(styleTagTransform), style = __webpack_require__(2100), options = {};
    options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
    var update = injectStylesIntoStyleTag_default()(style.A, options);
    const scss_style = style.A && style.A.locals ? style.A.locals : undefined;
    function escapeHtml(a) {
      const e = document.createElement("p");
      return e.appendChild(document.createTextNode(a)), e.innerHTML;
    }
    function getTextColor(a) {
      return `color-mix(in hsl, var(--color-white) 50%, ${a})`;
    }
    function getBackground(a) {
      return `linear-gradient(135deg, ${a}55, ${a}40)`;
    }
    class PvComponent extends HTMLElement {
      constructor() {
        super();
      }
      attributeChangedCallback(a, e, t) {
        var i;
        this.isConnected && (null === (i = this[`on_${a}_change`.replace(/_([a-z])/g, a => `on_${a}_change`[1].toUpperCase())]) || undefined === i || i.call(this, t));
      }
    }
    PvComponent.observedAttributes = [];
    const pv_component = PvComponent, format = a => a.replace(/[A-Z]/g, a => `-${a.toLowerCase()}`), child = (a, e) => ({get() {
      return this.querySelector(`.${format(e.name.toString())}`);
    }}), decorators_child = child;
    var code = '<div class="animation"> <div class="loader"></div> </div> <div class="caption">Loading, please wait...</div> ';
    const pv_loader = code;
    var pv_loader_pv_loader = __webpack_require__(5146), pv_loader_options = {};
    pv_loader_options.styleTagTransform = styleTagTransform_default(), pv_loader_options.setAttributes = setAttributesWithoutAttributes_default(), pv_loader_options.insert = insertBySelector_default().bind(null, "head"), pv_loader_options.domAPI = styleDomAPI_default(), pv_loader_options.insertStyleElement = insertStyleElement_default();
    var pv_loader_update = injectStylesIntoStyleTag_default()(pv_loader_pv_loader.A, pv_loader_options);
    const components_pv_loader_pv_loader = pv_loader_pv_loader.A && pv_loader_pv_loader.A.locals ? pv_loader_pv_loader.A.locals : undefined;
    var __esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, __runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, __classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, __classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvLoader = (() => {
      var a, e;
      let t, i = pv_component, o = [], s = [];
      return a = class extends i {
        get caption() {
          return __classPrivateFieldGet(this, e, "f");
        }
        set caption (a) {
          __classPrivateFieldSet(this, e, a, "f");
        }
        constructor() {
          super(), e.set(this, (__runInitializers(this, o), __runInitializers(this, s, undefined))), this.innerHTML = pv_loader;
        }
        setCaption(a) {
          this.caption.textContent = a || "Loading, please wait...";
        }
      }, e = new WeakMap, (() => {
        var e;
        const n = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = i[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        t = [decorators_child], __esDecorate(a, null, t, {kind: "accessor", name: "caption", static: false, private: false, access: {has: a => "caption" in a, get: a => a.caption, set: (a, e) => {
          a.caption = e;
        }}, metadata: n}, s, o), n && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: n});
      })(), a;
    })();
    const src_components_pv_loader_pv_loader = PvLoader;
    function bind(a, e) {
      e.addInitializer(function () {
        this[e.name] = this[e.name].bind(this);
      });
    }
    customElements.define("pv-loader", PvLoader);
    var pv_popup = __webpack_require__(4912), pv_popup_options = {};
    pv_popup_options.styleTagTransform = styleTagTransform_default(), pv_popup_options.setAttributes = setAttributesWithoutAttributes_default(), pv_popup_options.insert = insertBySelector_default().bind(null, "head"), pv_popup_options.domAPI = styleDomAPI_default(), pv_popup_options.insertStyleElement = insertStyleElement_default();
    var pv_popup_update = injectStylesIntoStyleTag_default()(pv_popup.A, pv_popup_options);
    const pv_popup_pv_popup = pv_popup.A && pv_popup.A.locals ? pv_popup.A.locals : undefined;
    var pv_popup_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_popup_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_popup_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_popup_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvPopup = (() => {
      var a, e, t;
      let i, o, s, n, r = pv_component, f = [], l = [], c = [];
      return a = class extends r {
        get popup() {
          return pv_popup_classPrivateFieldGet(this, e, "f");
        }
        set popup (a) {
          pv_popup_classPrivateFieldSet(this, e, a, "f");
        }
        get x() {
          return pv_popup_classPrivateFieldGet(this, t, "f");
        }
        set x (a) {
          pv_popup_classPrivateFieldSet(this, t, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_popup_runInitializers(this, f), pv_popup_runInitializers(this, l, undefined))), t.set(this, pv_popup_runInitializers(this, c, undefined));
        }
        onClose() {}
        onOpen(...a) {}
        onClosing(a) {
          this.closingCallback = a;
        }
        isOpen() {
          var a;
          return null === (a = this.popup) || undefined === a ? undefined : a.hasAttribute("open");
        }
        open(a, ...e) {
          this.args = e, this.anchor = a, this.anchor ? (this.popup.show(), this.reposition(this.anchor)) : this.popup.showModal();
        }
        reposition(a) {
          const e = a.getBoundingClientRect();
          let t = 0, i = e.left + e.width / 2 - this.popup.clientWidth / 2, o = e.top + e.height + 16;
          i < 8 && (t = 8 - i, i = 8), i + this.popup.clientWidth > window.innerWidth && (t = window.innerWidth - i - this.popup.clientWidth - 8, i = window.innerWidth - this.popup.clientWidth - 8), this.popup.hasAttribute("left-edge") && (i = e.left - 8), this.popup.hasAttribute("right-edge") && (i = e.left + e.width + 8 - this.popup.clientWidth), this.popup.style.marginLeft = `${i}px`, this.popup.style.marginTop = `${o}px`, this.popup.style.setProperty("--offset", `${t}px`);
        }
        close() {
          var a;
          null === (a = this.closingCallback) || undefined === a || a.call(this), this.popup.setAttribute("closing", ""), this.popup.addEventListener("animationend", () => {
            this.popup.removeAttribute("closing"), this.popup.close(), document.body.removeEventListener("mousedown", this.onMouseDown), this.onClose(), this.remove();
          }, {once: true});
        }
        connectedCallback() {
          var a;
          this.popup.addEventListener("keydown", a => {
            a.stopPropagation(), "Escape" === a.key && (a.preventDefault(), this.popup.hasAttribute("blocking") || this.close());
          }), null === (a = this.x) || undefined === a || a.addEventListener("click", this.close), new MutationObserver(a => {
            this.isOpen() && a.some(a => "attributes" === a.type && "open" === a.attributeName) && (document.body.addEventListener("mousedown", this.onMouseDown), this.onOpen(...this.args));
          }).observe(this.popup, {attributes: true});
        }
        onMouseDown(a) {
          var e;
          const t = this.popup.getBoundingClientRect();
          this.isOpen() && "OPTION" !== a.target.tagName && !this.popup.hasAttribute("blocking") && !(null === (e = this.anchor) || undefined === e ? undefined : e.contains(a.target)) && (a.clientX < t.left || a.clientX > t.right || a.clientY < t.top || a.clientY > t.bottom) && this.close();
        }
      }, e = new WeakMap, t = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = r[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        i = [decorators_child], o = [decorators_child], s = [bind], n = [bind], pv_popup_esDecorate(a, null, i, {kind: "accessor", name: "popup", static: false, private: false, access: {has: a => "popup" in a, get: a => a.popup, set: (a, e) => {
          a.popup = e;
        }}, metadata: t}, l, f), pv_popup_esDecorate(a, null, o, {kind: "accessor", name: "x", static: false, private: false, access: {has: a => "x" in a, get: a => a.x, set: (a, e) => {
          a.x = e;
        }}, metadata: t}, c, f), pv_popup_esDecorate(a, null, s, {kind: "method", name: "close", static: false, private: false, access: {has: a => "close" in a, get: a => a.close}, metadata: t}, null, f), pv_popup_esDecorate(a, null, n, {kind: "method", name: "onMouseDown", static: false, private: false, access: {has: a => "onMouseDown" in a, get: a => a.onMouseDown}, metadata: t}, null, f), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_pv_popup_pv_popup = PvPopup;
    class SettingsManager {
      constructor() {
        this.settings = new Map, this.callbacks = new Map;
      }
      notifyChange(a, e) {
        const t = this.callbacks.get(a) || [];
        for (const a of t) a(e);
      }
      restore() {
        const a = localStorage.getItem("settings");
        if (a) {
          this.settings = new Map(JSON.parse(a));
          for (const [a, e] of this.settings) this.notifyChange(a, e);
        }
      }
      save() {
        localStorage.setItem("settings", JSON.stringify(Array.from(this.settings)));
      }
      setDefault(a, e) {
        this.settings.has(a) || (this.settings.set(a, e), this.notifyChange(a, e));
      }
      set(a, e) {
        this.settings.set(a, e), this.notifyChange(a, e), this.save();
      }
      get(a) {
        var e;
        return null !== (e = this.settings.get(a)) && undefined !== e && e;
      }
      has(a) {
        return this.settings.has(a);
      }
      on(a, e) {
        const t = this.callbacks.get(a) || [];
        t.push(e), this.callbacks.set(a, t);
      }
      remove(a) {
        this.settings.delete(a), this.save();
      }
    }
    const settings = new SettingsManager, settingsmanager = settings;
    var pv_transpose_code = '<dialog class="popup"> <div class="content"> <div class="field"> <input type="number" class="number" min="-36" max="36" step="1"/> <div class="minus"><i class="fas fa-minus"></i></div> <div class="plus"><i class="fas fa-plus"></i></div> </div> <small> Press <kbd>🠉</kbd>, <kbd>🠋</kbd>, <kbd>🠈</kbd>, <kbd>🠊</kbd> to transpose while playing.</small> </div> </dialog> ';
    const pv_transpose = pv_transpose_code;
    var pv_transpose_pv_transpose = __webpack_require__(7030), pv_transpose_options = {};
    pv_transpose_options.styleTagTransform = styleTagTransform_default(), pv_transpose_options.setAttributes = setAttributesWithoutAttributes_default(), pv_transpose_options.insert = insertBySelector_default().bind(null, "head"), pv_transpose_options.domAPI = styleDomAPI_default(), pv_transpose_options.insertStyleElement = insertStyleElement_default();
    var pv_transpose_update = injectStylesIntoStyleTag_default()(pv_transpose_pv_transpose.A, pv_transpose_options);
    const popups_pv_transpose_pv_transpose = pv_transpose_pv_transpose.A && pv_transpose_pv_transpose.A.locals ? pv_transpose_pv_transpose.A.locals : undefined;
    var pv_transpose_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_transpose_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_transpose_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_transpose_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvTranspose = (() => {
      var a, e, t, i;
      let o, s, n, r, f, l = components_pv_popup_pv_popup, c = [], d = [], p = [], u = [];
      return a = class extends l {
        get minus() {
          return pv_transpose_classPrivateFieldGet(this, e, "f");
        }
        set minus (a) {
          pv_transpose_classPrivateFieldSet(this, e, a, "f");
        }
        get number() {
          return pv_transpose_classPrivateFieldGet(this, t, "f");
        }
        set number (a) {
          pv_transpose_classPrivateFieldSet(this, t, a, "f");
        }
        get plus() {
          return pv_transpose_classPrivateFieldGet(this, i, "f");
        }
        set plus (a) {
          pv_transpose_classPrivateFieldSet(this, i, a, "f");
        }
        constructor() {
          super(), this.MIN = (pv_transpose_runInitializers(this, c), -36), this.MAX = 36, e.set(this, pv_transpose_runInitializers(this, d, undefined)), t.set(this, pv_transpose_runInitializers(this, p, undefined)), i.set(this, pv_transpose_runInitializers(this, u, undefined)), this.innerHTML = pv_transpose, this.value = settingsmanager.get("transpose"), settingsmanager.on("transpose", a => this.value = a);
        }
        onOpen() {
          this.number.value = this.value.toString(), settingsmanager.on("transpose", a => this.number.value = a), this.number.addEventListener("input", () => {
            isNaN(parseInt(this.number.value)) || (parseInt(this.number.value) > this.MAX ? this.number.value = this.MAX.toString() : parseInt(this.number.value) < this.MIN && (this.number.value = this.MIN.toString()), settingsmanager.set("transpose", parseInt(this.number.value)));
          }), this.minus.addEventListener("pointerdown", () => {
            this.decrease();
            const a = setInterval(this.decrease, 100);
            document.addEventListener("pointerup", () => clearInterval(a), {once: true});
          }), this.plus.addEventListener("pointerdown", () => {
            this.increase();
            const a = setInterval(this.increase, 100);
            document.addEventListener("pointerup", () => clearInterval(a), {once: true});
          });
        }
        decrease() {
          this.value > this.MIN && settingsmanager.set("transpose", this.value - 1);
        }
        increase() {
          this.value < this.MAX && settingsmanager.set("transpose", this.value + 1);
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = l[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        o = [decorators_child], s = [decorators_child], n = [decorators_child], r = [bind], f = [bind], pv_transpose_esDecorate(a, null, o, {kind: "accessor", name: "minus", static: false, private: false, access: {has: a => "minus" in a, get: a => a.minus, set: (a, e) => {
          a.minus = e;
        }}, metadata: t}, d, c), pv_transpose_esDecorate(a, null, s, {kind: "accessor", name: "number", static: false, private: false, access: {has: a => "number" in a, get: a => a.number, set: (a, e) => {
          a.number = e;
        }}, metadata: t}, p, c), pv_transpose_esDecorate(a, null, n, {kind: "accessor", name: "plus", static: false, private: false, access: {has: a => "plus" in a, get: a => a.plus, set: (a, e) => {
          a.plus = e;
        }}, metadata: t}, u, c), pv_transpose_esDecorate(a, null, r, {kind: "method", name: "decrease", static: false, private: false, access: {has: a => "decrease" in a, get: a => a.decrease}, metadata: t}, null, c), pv_transpose_esDecorate(a, null, f, {kind: "method", name: "increase", static: false, private: false, access: {has: a => "increase" in a, get: a => a.increase}, metadata: t}, null, c), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_popups_pv_transpose_pv_transpose = PvTranspose;
    customElements.define("pv-transpose", PvTranspose);
    var pv_velocity_code = '<dialog class="popup"> <div class="content"> <div class="field"> <input type="number" class="number" min="1" max="127" step="1"/> <div class="minus"><i class="fas fa-minus"></i></div> <div class="plus"><i class="fas fa-plus"></i></div> </div> <small> Press <kbd><i class="fas fa-minus"></i></kbd> and <kbd><i class="fas fa-plus"></i></kbd> to change velocity while playing.</small> </div> </dialog> ';
    const pv_velocity = pv_velocity_code;
    var pv_velocity_pv_velocity = __webpack_require__(9952), pv_velocity_options = {};
    pv_velocity_options.styleTagTransform = styleTagTransform_default(), pv_velocity_options.setAttributes = setAttributesWithoutAttributes_default(), pv_velocity_options.insert = insertBySelector_default().bind(null, "head"), pv_velocity_options.domAPI = styleDomAPI_default(), pv_velocity_options.insertStyleElement = insertStyleElement_default();
    var pv_velocity_update = injectStylesIntoStyleTag_default()(pv_velocity_pv_velocity.A, pv_velocity_options);
    const popups_pv_velocity_pv_velocity = pv_velocity_pv_velocity.A && pv_velocity_pv_velocity.A.locals ? pv_velocity_pv_velocity.A.locals : undefined;
    var pv_velocity_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_velocity_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_velocity_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_velocity_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvVelocity = (() => {
      var a, e, t, i;
      let o, s, n, r, f, l = components_pv_popup_pv_popup, c = [], d = [], p = [], u = [];
      return a = class extends l {
        get minus() {
          return pv_velocity_classPrivateFieldGet(this, e, "f");
        }
        set minus (a) {
          pv_velocity_classPrivateFieldSet(this, e, a, "f");
        }
        get number() {
          return pv_velocity_classPrivateFieldGet(this, t, "f");
        }
        set number (a) {
          pv_velocity_classPrivateFieldSet(this, t, a, "f");
        }
        get plus() {
          return pv_velocity_classPrivateFieldGet(this, i, "f");
        }
        set plus (a) {
          pv_velocity_classPrivateFieldSet(this, i, a, "f");
        }
        constructor() {
          super(), this.MIN = (pv_velocity_runInitializers(this, c), 1), this.MAX = 127, e.set(this, pv_velocity_runInitializers(this, d, undefined)), t.set(this, pv_velocity_runInitializers(this, p, undefined)), i.set(this, pv_velocity_runInitializers(this, u, undefined)), this.innerHTML = pv_velocity, this.value = settingsmanager.get("velocity"), settingsmanager.on("velocity", a => this.value = a);
        }
        onOpen() {
          this.number.value = this.value.toString(), settingsmanager.on("velocity", a => this.number.value = a), this.number.addEventListener("input", () => {
            isNaN(parseInt(this.number.value)) || (parseInt(this.number.value) > this.MAX ? this.number.value = this.MAX.toString() : parseInt(this.number.value) < this.MIN && (this.number.value = this.MIN.toString()), settingsmanager.set("velocity", parseInt(this.number.value)));
          }), this.minus.addEventListener("pointerdown", () => {
            this.decrease();
            const a = setInterval(this.decrease, 100);
            document.addEventListener("pointerup", () => clearInterval(a), {once: true});
          }), this.plus.addEventListener("pointerdown", () => {
            this.increase();
            const a = setInterval(this.increase, 100);
            document.addEventListener("pointerup", () => clearInterval(a), {once: true});
          });
        }
        decrease() {
          this.value > this.MIN && settingsmanager.set("velocity", this.value - 1);
        }
        increase() {
          this.value < this.MAX && settingsmanager.set("velocity", this.value + 1);
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = l[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        o = [decorators_child], s = [decorators_child], n = [decorators_child], r = [bind], f = [bind], pv_velocity_esDecorate(a, null, o, {kind: "accessor", name: "minus", static: false, private: false, access: {has: a => "minus" in a, get: a => a.minus, set: (a, e) => {
          a.minus = e;
        }}, metadata: t}, d, c), pv_velocity_esDecorate(a, null, s, {kind: "accessor", name: "number", static: false, private: false, access: {has: a => "number" in a, get: a => a.number, set: (a, e) => {
          a.number = e;
        }}, metadata: t}, p, c), pv_velocity_esDecorate(a, null, n, {kind: "accessor", name: "plus", static: false, private: false, access: {has: a => "plus" in a, get: a => a.plus, set: (a, e) => {
          a.plus = e;
        }}, metadata: t}, u, c), pv_velocity_esDecorate(a, null, r, {kind: "method", name: "decrease", static: false, private: false, access: {has: a => "decrease" in a, get: a => a.decrease}, metadata: t}, null, c), pv_velocity_esDecorate(a, null, f, {kind: "method", name: "increase", static: false, private: false, access: {has: a => "increase" in a, get: a => a.increase}, metadata: t}, null, c), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_popups_pv_velocity_pv_velocity = PvVelocity;
    customElements.define("pv-velocity", PvVelocity);
    var pv_settings_code = '<dialog class="popup" modal> <div class="header"> <div class="title"><i class="fas fa-gear"></i> Settings</div> <div class="x"><i class="fas fa-xmark"></i></div> </div> <div class="content"> <div class="container"> <div class="field"> <label>Keyboard layout</label> <select class="keyboard-layout"> <option value="pianoverse">Pianoverse</option> <option value="virtualpiano">Virtual Piano</option> <option value="multiplayerpiano">MPP</option> </select> </div> <div class="field"> <label>Special effects</label> <label class="toggle"> <input type="checkbox" class="show-effects"/> <span class="slider"></span> </label> </div> <div class="field"> <label>Share cursor positions</label> <label class="toggle"> <input type="checkbox" class="show-cursors"/> <span class="slider"></span> </label> </div> <div class="field"> <label>Show key labels</label> <label class="toggle"> <input type="checkbox" class="show-labels"/> <span class="slider"></span> </label> </div> </div> <div class="footer"> <pv-ping></pv-ping> </div> </div> </dialog> ';
    const pv_settings = pv_settings_code;
    var pv_settings_pv_settings = __webpack_require__(672), pv_settings_options = {};
    pv_settings_options.styleTagTransform = styleTagTransform_default(), pv_settings_options.setAttributes = setAttributesWithoutAttributes_default(), pv_settings_options.insert = insertBySelector_default().bind(null, "head"), pv_settings_options.domAPI = styleDomAPI_default(), pv_settings_options.insertStyleElement = insertStyleElement_default();
    var pv_settings_update = injectStylesIntoStyleTag_default()(pv_settings_pv_settings.A, pv_settings_options);
    const popups_pv_settings_pv_settings = pv_settings_pv_settings.A && pv_settings_pv_settings.A.locals ? pv_settings_pv_settings.A.locals : undefined;
    var pv_settings_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_settings_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_settings_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_settings_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvSettings = (() => {
      var a, e, t, i, o;
      let s, n, r, f, l = components_pv_popup_pv_popup, c = [], d = [], p = [], u = [], v = [];
      return a = class extends l {
        get keyboardLayout() {
          return pv_settings_classPrivateFieldGet(this, e, "f");
        }
        set keyboardLayout (a) {
          pv_settings_classPrivateFieldSet(this, e, a, "f");
        }
        get showEffects() {
          return pv_settings_classPrivateFieldGet(this, t, "f");
        }
        set showEffects (a) {
          pv_settings_classPrivateFieldSet(this, t, a, "f");
        }
        get showCursors() {
          return pv_settings_classPrivateFieldGet(this, i, "f");
        }
        set showCursors (a) {
          pv_settings_classPrivateFieldSet(this, i, a, "f");
        }
        get showLabels() {
          return pv_settings_classPrivateFieldGet(this, o, "f");
        }
        set showLabels (a) {
          pv_settings_classPrivateFieldSet(this, o, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_settings_runInitializers(this, c), pv_settings_runInitializers(this, d, undefined))), t.set(this, pv_settings_runInitializers(this, p, undefined)), i.set(this, pv_settings_runInitializers(this, u, undefined)), o.set(this, pv_settings_runInitializers(this, v, undefined)), this.innerHTML = pv_settings, this.keyboardLayout.value = settingsmanager.get("keyboardLayout") || "pianoverse", this.showCursors.checked = settingsmanager.get("showCursors"), this.showEffects.checked = settingsmanager.get("showEffects"), this.showLabels.checked = settingsmanager.get("showLabels");
        }
        connectedCallback() {
          super.connectedCallback(), this.keyboardLayout.addEventListener("change", () => {
            settingsmanager.set("keyboardLayout", this.keyboardLayout.value);
          }), this.showEffects.addEventListener("change", () => {
            settingsmanager.set("showEffects", this.showEffects.checked);
          }), this.showCursors.addEventListener("change", () => {
            settingsmanager.set("showCursors", this.showCursors.checked);
          }), this.showLabels.addEventListener("change", () => {
            settingsmanager.set("showLabels", this.showLabels.checked);
          });
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, o = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = l[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        s = [decorators_child], n = [decorators_child], r = [decorators_child], f = [decorators_child], pv_settings_esDecorate(a, null, s, {kind: "accessor", name: "keyboardLayout", static: false, private: false, access: {has: a => "keyboardLayout" in a, get: a => a.keyboardLayout, set: (a, e) => {
          a.keyboardLayout = e;
        }}, metadata: t}, d, c), pv_settings_esDecorate(a, null, n, {kind: "accessor", name: "showEffects", static: false, private: false, access: {has: a => "showEffects" in a, get: a => a.showEffects, set: (a, e) => {
          a.showEffects = e;
        }}, metadata: t}, p, c), pv_settings_esDecorate(a, null, r, {kind: "accessor", name: "showCursors", static: false, private: false, access: {has: a => "showCursors" in a, get: a => a.showCursors, set: (a, e) => {
          a.showCursors = e;
        }}, metadata: t}, u, c), pv_settings_esDecorate(a, null, f, {kind: "accessor", name: "showLabels", static: false, private: false, access: {has: a => "showLabels" in a, get: a => a.showLabels, set: (a, e) => {
          a.showLabels = e;
        }}, metadata: t}, v, c), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_popups_pv_settings_pv_settings = PvSettings;
    customElements.define("pv-settings", PvSettings);
    var pv_notification_code = '<div class="container"> <div class="notification-icon"> <i class="fas fa-exclamation-circle"></i> </div> <div> <div class="notification-title"></div> <div class="notification-text"></div> </div> </div> <div class="notification-bar"></div> ';
    const pv_notification = pv_notification_code;
    var pv_notification_pv_notification = __webpack_require__(8728), pv_notification_options = {};
    pv_notification_options.styleTagTransform = styleTagTransform_default(), pv_notification_options.setAttributes = setAttributesWithoutAttributes_default(), pv_notification_options.insert = insertBySelector_default().bind(null, "head"), pv_notification_options.domAPI = styleDomAPI_default(), pv_notification_options.insertStyleElement = insertStyleElement_default();
    var pv_notification_update = injectStylesIntoStyleTag_default()(pv_notification_pv_notification.A, pv_notification_options);
    const components_pv_notification_pv_notification = pv_notification_pv_notification.A && pv_notification_pv_notification.A.locals ? pv_notification_pv_notification.A.locals : undefined;
    var pv_notification_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_notification_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_notification_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_notification_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvNotification = (() => {
      var a, e, t, i, o;
      let s, n, r, f, l = pv_component, c = [], d = [], p = [], u = [], v = [];
      return a = class extends l {
        get notificationIcon() {
          return pv_notification_classPrivateFieldGet(this, e, "f");
        }
        set notificationIcon (a) {
          pv_notification_classPrivateFieldSet(this, e, a, "f");
        }
        get notificationTitle() {
          return pv_notification_classPrivateFieldGet(this, t, "f");
        }
        set notificationTitle (a) {
          pv_notification_classPrivateFieldSet(this, t, a, "f");
        }
        get notificationText() {
          return pv_notification_classPrivateFieldGet(this, i, "f");
        }
        set notificationText (a) {
          pv_notification_classPrivateFieldSet(this, i, a, "f");
        }
        get notificationBar() {
          return pv_notification_classPrivateFieldGet(this, o, "f");
        }
        set notificationBar (a) {
          pv_notification_classPrivateFieldSet(this, o, a, "f");
        }
        constructor(a, s, n, r = 0) {
          super(), e.set(this, (pv_notification_runInitializers(this, c), pv_notification_runInitializers(this, d, undefined))), t.set(this, pv_notification_runInitializers(this, p, undefined)), i.set(this, pv_notification_runInitializers(this, u, undefined)), o.set(this, pv_notification_runInitializers(this, v, undefined)), this.innerHTML = pv_notification, this.notificationTitle.textContent = s, this.notificationText.textContent = n, this.timeout = r;
          const f = this.notificationIcon.querySelector("i");
          switch (f.className = "fa", a) {
            case NotificationLevel.INFO:
              f.classList.add("fa-circle-info");
              break;
            case NotificationLevel.SUCCESS:
              f.classList.add("fa-circle-check"), f.classList.add("success");
              break;
            case NotificationLevel.WARNING:
              f.classList.add("fa-circle-exclamation"), f.classList.add("warning");
              break;
            case NotificationLevel.ERROR:
              f.classList.add("fa-circle-xmark"), f.classList.add("error");
          }
        }
        connectedCallback() {
          this.timeout > 0 ? (this.notificationBar.style.opacity = "1", this.notificationBar.style.animationDuration = `${this.timeout}s`, this.notificationBar.addEventListener("animationend", a => a.stopPropagation()), setTimeout(() => this.close(), 1e3 * this.timeout)) : setTimeout(() => this.close(), 3e5), this.addEventListener("click", () => this.close());
        }
        close() {
          this.classList.add("closing"), this.addEventListener("animationend", () => this.remove());
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, o = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = l[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        s = [decorators_child], n = [decorators_child], r = [decorators_child], f = [decorators_child], pv_notification_esDecorate(a, null, s, {kind: "accessor", name: "notificationIcon", static: false, private: false, access: {has: a => "notificationIcon" in a, get: a => a.notificationIcon, set: (a, e) => {
          a.notificationIcon = e;
        }}, metadata: t}, d, c), pv_notification_esDecorate(a, null, n, {kind: "accessor", name: "notificationTitle", static: false, private: false, access: {has: a => "notificationTitle" in a, get: a => a.notificationTitle, set: (a, e) => {
          a.notificationTitle = e;
        }}, metadata: t}, p, c), pv_notification_esDecorate(a, null, r, {kind: "accessor", name: "notificationText", static: false, private: false, access: {has: a => "notificationText" in a, get: a => a.notificationText, set: (a, e) => {
          a.notificationText = e;
        }}, metadata: t}, u, c), pv_notification_esDecorate(a, null, f, {kind: "accessor", name: "notificationBar", static: false, private: false, access: {has: a => "notificationBar" in a, get: a => a.notificationBar, set: (a, e) => {
          a.notificationBar = e;
        }}, metadata: t}, v, c), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const common_components_pv_notification_pv_notification = PvNotification;
    var NotificationLevel;
    customElements.define("pv-notification", PvNotification), function (a) {
      a.INFO = "info", a.SUCCESS = "success", a.WARNING = "warning", a.ERROR = "error";
    }(NotificationLevel || (NotificationLevel = {}));
    class NotificationManager {
      static info(a, e, t) {
        const i = new common_components_pv_notification_pv_notification(NotificationLevel.INFO, a, e, t), o = document.getElementById("notifications");
        return null == o || o.insertBefore(i, o.firstChild), i;
      }
      static success(a, e, t) {
        const i = new common_components_pv_notification_pv_notification(NotificationLevel.SUCCESS, a, e, t), o = document.getElementById("notifications");
        return null == o || o.insertBefore(i, o.firstChild), i;
      }
      static warning(a, e, t) {
        const i = new common_components_pv_notification_pv_notification(NotificationLevel.WARNING, a, e, t), o = document.getElementById("notifications");
        return null == o || o.insertBefore(i, o.firstChild), i;
      }
      static error(a, e, t) {
        const i = new common_components_pv_notification_pv_notification(NotificationLevel.ERROR, a, e, t), o = document.getElementById("notifications");
        return null == o || o.insertBefore(i, o.firstChild), i;
      }
    }
    var minimal = __webpack_require__(6946);
    const protobufPackage = "pianoverse";
    var pianoverse_NotificationLevel, ServerMessage_Event, ClientMessage_Event;
    function notificationLevelFromJSON(a) {
      switch (a) {
        case 0:
        case "INFO":
          return pianoverse_NotificationLevel.INFO;
        case 1:
        case "SUCCESS":
          return pianoverse_NotificationLevel.SUCCESS;
        case 2:
        case "WARNING":
          return pianoverse_NotificationLevel.WARNING;
        case 3:
        case "ERROR":
          return pianoverse_NotificationLevel.ERROR;
        default:
          return pianoverse_NotificationLevel.UNRECOGNIZED;
      }
    }
    function notificationLevelToJSON(a) {
      switch (a) {
        case pianoverse_NotificationLevel.INFO:
          return "INFO";
        case pianoverse_NotificationLevel.SUCCESS:
          return "SUCCESS";
        case pianoverse_NotificationLevel.WARNING:
          return "WARNING";
        case pianoverse_NotificationLevel.ERROR:
          return "ERROR";
        case pianoverse_NotificationLevel.UNRECOGNIZED:
        default:
          return "UNRECOGNIZED";
      }
    }
    function serverMessage_EventFromJSON(a) {
      switch (a) {
        case 0:
        case "CLEAR":
          return ServerMessage_Event.CLEAR;
        case 1:
        case "PONG":
          return ServerMessage_Event.PONG;
        case 2:
        case "CHAT":
          return ServerMessage_Event.CHAT;
        case 3:
        case "ROOMS":
          return ServerMessage_Event.ROOMS;
        case 4:
        case "WELCOME":
          return ServerMessage_Event.WELCOME;
        case 5:
        case "MOVE":
          return ServerMessage_Event.MOVE;
        case 6:
        case "PRESS":
          return ServerMessage_Event.PRESS;
        case 7:
        case "RELEASE":
          return ServerMessage_Event.RELEASE;
        case 8:
        case "SUSTAIN":
          return ServerMessage_Event.SUSTAIN;
        case 9:
        case "PROFILE":
          return ServerMessage_Event.PROFILE;
        case 10:
        case "JOIN":
          return ServerMessage_Event.JOIN;
        case 11:
        case "LEAVE":
          return ServerMessage_Event.LEAVE;
        case 12:
        case "RATELIMIT":
          return ServerMessage_Event.RATELIMIT;
        case 13:
        case "POPUP":
          return ServerMessage_Event.POPUP;
        case 14:
        case "HOST":
          return ServerMessage_Event.HOST;
        case 15:
        case "NOTIFICATION":
          return ServerMessage_Event.NOTIFICATION;
        case 16:
        case "TOKEN":
          return ServerMessage_Event.TOKEN;
        default:
          return ServerMessage_Event.UNRECOGNIZED;
      }
    }
    function serverMessage_EventToJSON(a) {
      switch (a) {
        case ServerMessage_Event.CLEAR:
          return "CLEAR";
        case ServerMessage_Event.PONG:
          return "PONG";
        case ServerMessage_Event.CHAT:
          return "CHAT";
        case ServerMessage_Event.ROOMS:
          return "ROOMS";
        case ServerMessage_Event.WELCOME:
          return "WELCOME";
        case ServerMessage_Event.MOVE:
          return "MOVE";
        case ServerMessage_Event.PRESS:
          return "PRESS";
        case ServerMessage_Event.RELEASE:
          return "RELEASE";
        case ServerMessage_Event.SUSTAIN:
          return "SUSTAIN";
        case ServerMessage_Event.PROFILE:
          return "PROFILE";
        case ServerMessage_Event.JOIN:
          return "JOIN";
        case ServerMessage_Event.LEAVE:
          return "LEAVE";
        case ServerMessage_Event.RATELIMIT:
          return "RATELIMIT";
        case ServerMessage_Event.POPUP:
          return "POPUP";
        case ServerMessage_Event.HOST:
          return "HOST";
        case ServerMessage_Event.NOTIFICATION:
          return "NOTIFICATION";
        case ServerMessage_Event.TOKEN:
          return "TOKEN";
        case ServerMessage_Event.UNRECOGNIZED:
        default:
          return "UNRECOGNIZED";
      }
    }
    function clientMessage_EventFromJSON(a) {
      switch (a) {
        case 0:
        case "HOST":
          return ClientMessage_Event.HOST;
        case 1:
        case "PING":
          return ClientMessage_Event.PING;
        case 2:
        case "ROOM":
          return ClientMessage_Event.ROOM;
        case 3:
        case "PROFILE":
          return ClientMessage_Event.PROFILE;
        case 4:
        case "CHAT":
          return ClientMessage_Event.CHAT;
        case 5:
        case "MOVE":
          return ClientMessage_Event.MOVE;
        case 6:
        case "MUTE":
          return ClientMessage_Event.MUTE;
        case 7:
        case "UNMUTE":
          return ClientMessage_Event.UNMUTE;
        case 8:
        case "KICK":
          return ClientMessage_Event.KICK;
        case 9:
        case "PRESS":
          return ClientMessage_Event.PRESS;
        case 10:
        case "RELEASE":
          return ClientMessage_Event.RELEASE;
        case 11:
        case "SUSTAIN":
          return ClientMessage_Event.SUSTAIN;
        case 12:
        case "HEARTBEAT":
          return ClientMessage_Event.HEARTBEAT;
        case 13:
        case "BAN":
          return ClientMessage_Event.BAN;
        case 14:
        case "MOD":
          return ClientMessage_Event.MOD;
        case 15:
        case "UNMOD":
          return ClientMessage_Event.UNMOD;
        case 16:
        case "IPBAN":
          return ClientMessage_Event.IPBAN;
        default:
          return ClientMessage_Event.UNRECOGNIZED;
      }
    }
    function clientMessage_EventToJSON(a) {
      switch (a) {
        case ClientMessage_Event.HOST:
          return "HOST";
        case ClientMessage_Event.PING:
          return "PING";
        case ClientMessage_Event.ROOM:
          return "ROOM";
        case ClientMessage_Event.PROFILE:
          return "PROFILE";
        case ClientMessage_Event.CHAT:
          return "CHAT";
        case ClientMessage_Event.MOVE:
          return "MOVE";
        case ClientMessage_Event.MUTE:
          return "MUTE";
        case ClientMessage_Event.UNMUTE:
          return "UNMUTE";
        case ClientMessage_Event.KICK:
          return "KICK";
        case ClientMessage_Event.PRESS:
          return "PRESS";
        case ClientMessage_Event.RELEASE:
          return "RELEASE";
        case ClientMessage_Event.SUSTAIN:
          return "SUSTAIN";
        case ClientMessage_Event.HEARTBEAT:
          return "HEARTBEAT";
        case ClientMessage_Event.BAN:
          return "BAN";
        case ClientMessage_Event.MOD:
          return "MOD";
        case ClientMessage_Event.UNMOD:
          return "UNMOD";
        case ClientMessage_Event.IPBAN:
          return "IPBAN";
        case ClientMessage_Event.UNRECOGNIZED:
        default:
          return "UNRECOGNIZED";
      }
    }
    function createBaseServerMessage() {
      return {clear: undefined, event: 0, pong: undefined, chat: undefined, rooms: [], welcome: undefined, move: undefined, press: undefined, release: undefined, sustain: undefined, profile: undefined, join: undefined, leave: "", ratelimit: 0, popup: "", host: "", notification: undefined, token: ""};
    }
    !function (a) {
      a[a.INFO = 0] = "INFO", a[a.SUCCESS = 1] = "SUCCESS", a[a.WARNING = 2] = "WARNING", a[a.ERROR = 3] = "ERROR", a[a.UNRECOGNIZED = -1] = "UNRECOGNIZED";
    }(pianoverse_NotificationLevel || (pianoverse_NotificationLevel = {})), function (a) {
      a[a.CLEAR = 0] = "CLEAR", a[a.PONG = 1] = "PONG", a[a.CHAT = 2] = "CHAT", a[a.ROOMS = 3] = "ROOMS", a[a.WELCOME = 4] = "WELCOME", a[a.MOVE = 5] = "MOVE", a[a.PRESS = 6] = "PRESS", a[a.RELEASE = 7] = "RELEASE", a[a.SUSTAIN = 8] = "SUSTAIN", a[a.PROFILE = 9] = "PROFILE", a[a.JOIN = 10] = "JOIN", a[a.LEAVE = 11] = "LEAVE", a[a.RATELIMIT = 12] = "RATELIMIT", a[a.POPUP = 13] = "POPUP", a[a.HOST = 14] = "HOST", a[a.NOTIFICATION = 15] = "NOTIFICATION", a[a.TOKEN = 16] = "TOKEN", a[a.UNRECOGNIZED = -1] = "UNRECOGNIZED";
    }(ServerMessage_Event || (ServerMessage_Event = {})), function (a) {
      a[a.HOST = 0] = "HOST", a[a.PING = 1] = "PING", a[a.ROOM = 2] = "ROOM", a[a.PROFILE = 3] = "PROFILE", a[a.CHAT = 4] = "CHAT", a[a.MOVE = 5] = "MOVE", a[a.MUTE = 6] = "MUTE", a[a.UNMUTE = 7] = "UNMUTE", a[a.KICK = 8] = "KICK", a[a.PRESS = 9] = "PRESS", a[a.RELEASE = 10] = "RELEASE", a[a.SUSTAIN = 11] = "SUSTAIN", a[a.HEARTBEAT = 12] = "HEARTBEAT", a[a.BAN = 13] = "BAN", a[a.MOD = 14] = "MOD", a[a.UNMOD = 15] = "UNMOD", a[a.IPBAN = 16] = "IPBAN", a[a.UNRECOGNIZED = -1] = "UNRECOGNIZED";
    }(ClientMessage_Event || (ClientMessage_Event = {}));
    const ServerMessage = {encode(a, e = minimal.Writer.create()) {
      undefined !== a.clear && Void.encode(a.clear, e.uint32(10).fork()).ldelim(), 0 !== a.event && e.uint32(16).int32(a.event), undefined !== a.pong && Void.encode(a.pong, e.uint32(26).fork()).ldelim(), undefined !== a.chat && Chat.encode(a.chat, e.uint32(34).fork()).ldelim();
      for (const t of a.rooms) Room.encode(t, e.uint32(42).fork()).ldelim();
      return undefined !== a.welcome && Welcome.encode(a.welcome, e.uint32(50).fork()).ldelim(), undefined !== a.move && Move.encode(a.move, e.uint32(58).fork()).ldelim(), undefined !== a.press && KeyPress.encode(a.press, e.uint32(66).fork()).ldelim(), undefined !== a.release && KeyRelease.encode(a.release, e.uint32(74).fork()).ldelim(), undefined !== a.sustain && Sustain.encode(a.sustain, e.uint32(82).fork()).ldelim(), undefined !== a.profile && UserInfo.encode(a.profile, e.uint32(90).fork()).ldelim(), undefined !== a.join && UserInfo.encode(a.join, e.uint32(98).fork()).ldelim(), "" !== a.leave && e.uint32(106).string(a.leave), 0 !== a.ratelimit && e.uint32(112).uint32(a.ratelimit), "" !== a.popup && e.uint32(122).string(a.popup), "" !== a.host && e.uint32(130).string(a.host), undefined !== a.notification && Notification.encode(a.notification, e.uint32(138).fork()).ldelim(), "" !== a.token && e.uint32(146).string(a.token), e;
    }, decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseServerMessage();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.clear = Void.decode(t, t.uint32());
            continue;
          case 2:
            if (16 !== a) break;
            o.event = t.int32();
            continue;
          case 3:
            if (26 !== a) break;
            o.pong = Void.decode(t, t.uint32());
            continue;
          case 4:
            if (34 !== a) break;
            o.chat = Chat.decode(t, t.uint32());
            continue;
          case 5:
            if (42 !== a) break;
            o.rooms.push(Room.decode(t, t.uint32()));
            continue;
          case 6:
            if (50 !== a) break;
            o.welcome = Welcome.decode(t, t.uint32());
            continue;
          case 7:
            if (58 !== a) break;
            o.move = Move.decode(t, t.uint32());
            continue;
          case 8:
            if (66 !== a) break;
            o.press = KeyPress.decode(t, t.uint32());
            continue;
          case 9:
            if (74 !== a) break;
            o.release = KeyRelease.decode(t, t.uint32());
            continue;
          case 10:
            if (82 !== a) break;
            o.sustain = Sustain.decode(t, t.uint32());
            continue;
          case 11:
            if (90 !== a) break;
            o.profile = UserInfo.decode(t, t.uint32());
            continue;
          case 12:
            if (98 !== a) break;
            o.join = UserInfo.decode(t, t.uint32());
            continue;
          case 13:
            if (106 !== a) break;
            o.leave = t.string();
            continue;
          case 14:
            if (112 !== a) break;
            o.ratelimit = t.uint32();
            continue;
          case 15:
            if (122 !== a) break;
            o.popup = t.string();
            continue;
          case 16:
            if (130 !== a) break;
            o.host = t.string();
            continue;
          case 17:
            if (138 !== a) break;
            o.notification = Notification.decode(t, t.uint32());
            continue;
          case 18:
            if (146 !== a) break;
            o.token = t.string();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({clear: null != a.clear ? Void.fromJSON(a.clear) : undefined, event: null != a.event ? serverMessage_EventFromJSON(a.event) : 0, pong: null != a.pong ? Void.fromJSON(a.pong) : undefined, chat: null != a.chat ? Chat.fromJSON(a.chat) : undefined, rooms: globalThis.Array.isArray(null == a ? undefined : a.rooms) ? a.rooms.map(a => Room.fromJSON(a)) : [], welcome: null != a.welcome ? Welcome.fromJSON(a.welcome) : undefined, move: null != a.move ? Move.fromJSON(a.move) : undefined, press: null != a.press ? KeyPress.fromJSON(a.press) : undefined, release: null != a.release ? KeyRelease.fromJSON(a.release) : undefined, sustain: null != a.sustain ? Sustain.fromJSON(a.sustain) : undefined, profile: null != a.profile ? UserInfo.fromJSON(a.profile) : undefined, join: null != a.join ? UserInfo.fromJSON(a.join) : undefined, leave: null != a.leave ? globalThis.String(a.leave) : "", ratelimit: null != a.ratelimit ? globalThis.Number(a.ratelimit) : 0, popup: null != a.popup ? globalThis.String(a.popup) : "", host: null != a.host ? globalThis.String(a.host) : "", notification: null != a.notification ? Notification.fromJSON(a.notification) : undefined, token: null != a.token ? globalThis.String(a.token) : ""}), toJSON(a) {
      var e;
      const t = {};
      return undefined !== a.clear && (t.clear = Void.toJSON(a.clear)), 0 !== a.event && (t.event = serverMessage_EventToJSON(a.event)), undefined !== a.pong && (t.pong = Void.toJSON(a.pong)), undefined !== a.chat && (t.chat = Chat.toJSON(a.chat)), (null === (e = a.rooms) || undefined === e ? undefined : e.length) && (t.rooms = a.rooms.map(a => Room.toJSON(a))), undefined !== a.welcome && (t.welcome = Welcome.toJSON(a.welcome)), undefined !== a.move && (t.move = Move.toJSON(a.move)), undefined !== a.press && (t.press = KeyPress.toJSON(a.press)), undefined !== a.release && (t.release = KeyRelease.toJSON(a.release)), undefined !== a.sustain && (t.sustain = Sustain.toJSON(a.sustain)), undefined !== a.profile && (t.profile = UserInfo.toJSON(a.profile)), undefined !== a.join && (t.join = UserInfo.toJSON(a.join)), "" !== a.leave && (t.leave = a.leave), 0 !== a.ratelimit && (t.ratelimit = Math.round(a.ratelimit)), "" !== a.popup && (t.popup = a.popup), "" !== a.host && (t.host = a.host), undefined !== a.notification && (t.notification = Notification.toJSON(a.notification)), "" !== a.token && (t.token = a.token), t;
    }, create: a => ServerMessage.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t, i, o, s, n, r;
      const f = createBaseServerMessage();
      return f.clear = undefined !== a.clear && null !== a.clear ? Void.fromPartial(a.clear) : undefined, f.event = null !== (e = a.event) && undefined !== e ? e : 0, f.pong = undefined !== a.pong && null !== a.pong ? Void.fromPartial(a.pong) : undefined, f.chat = undefined !== a.chat && null !== a.chat ? Chat.fromPartial(a.chat) : undefined, f.rooms = (null === (t = a.rooms) || undefined === t ? undefined : t.map(a => Room.fromPartial(a))) || [], f.welcome = undefined !== a.welcome && null !== a.welcome ? Welcome.fromPartial(a.welcome) : undefined, f.move = undefined !== a.move && null !== a.move ? Move.fromPartial(a.move) : undefined, f.press = undefined !== a.press && null !== a.press ? KeyPress.fromPartial(a.press) : undefined, f.release = undefined !== a.release && null !== a.release ? KeyRelease.fromPartial(a.release) : undefined, f.sustain = undefined !== a.sustain && null !== a.sustain ? Sustain.fromPartial(a.sustain) : undefined, f.profile = undefined !== a.profile && null !== a.profile ? UserInfo.fromPartial(a.profile) : undefined, f.join = undefined !== a.join && null !== a.join ? UserInfo.fromPartial(a.join) : undefined, f.leave = null !== (i = a.leave) && undefined !== i ? i : "", f.ratelimit = null !== (o = a.ratelimit) && undefined !== o ? o : 0, f.popup = null !== (s = a.popup) && undefined !== s ? s : "", f.host = null !== (n = a.host) && undefined !== n ? n : "", f.notification = undefined !== a.notification && null !== a.notification ? Notification.fromPartial(a.notification) : undefined, f.token = null !== (r = a.token) && undefined !== r ? r : "", f;
    }};
    function createBaseClientMessage() {
      return {host: "", event: 0, ping: undefined, room: undefined, profile: undefined, chat: "", move: undefined, mute: "", unmute: "", kick: "", press: undefined, release: undefined, sustain: false, heartbeat: undefined, ban: undefined, mod: "", unmod: "", ipban: ""};
    }
    const ClientMessage = {encode: (a, e = minimal.Writer.create()) => ("" !== a.host && e.uint32(10).string(a.host), 0 !== a.event && e.uint32(16).int32(a.event), undefined !== a.ping && Void.encode(a.ping, e.uint32(26).fork()).ldelim(), undefined !== a.room && Enter.encode(a.room, e.uint32(34).fork()).ldelim(), undefined !== a.profile && UserInfo.encode(a.profile, e.uint32(42).fork()).ldelim(), "" !== a.chat && e.uint32(50).string(a.chat), undefined !== a.move && Move.encode(a.move, e.uint32(58).fork()).ldelim(), "" !== a.mute && e.uint32(66).string(a.mute), "" !== a.unmute && e.uint32(74).string(a.unmute), "" !== a.kick && e.uint32(82).string(a.kick), undefined !== a.press && KeyPress.encode(a.press, e.uint32(90).fork()).ldelim(), undefined !== a.release && KeyRelease.encode(a.release, e.uint32(98).fork()).ldelim(), false !== a.sustain && e.uint32(104).bool(a.sustain), undefined !== a.heartbeat && Void.encode(a.heartbeat, e.uint32(114).fork()).ldelim(), undefined !== a.ban && Ban.encode(a.ban, e.uint32(122).fork()).ldelim(), "" !== a.mod && e.uint32(130).string(a.mod), "" !== a.unmod && e.uint32(138).string(a.unmod), "" !== a.ipban && e.uint32(146).string(a.ipban), e), decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseClientMessage();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.host = t.string();
            continue;
          case 2:
            if (16 !== a) break;
            o.event = t.int32();
            continue;
          case 3:
            if (26 !== a) break;
            o.ping = Void.decode(t, t.uint32());
            continue;
          case 4:
            if (34 !== a) break;
            o.room = Enter.decode(t, t.uint32());
            continue;
          case 5:
            if (42 !== a) break;
            o.profile = UserInfo.decode(t, t.uint32());
            continue;
          case 6:
            if (50 !== a) break;
            o.chat = t.string();
            continue;
          case 7:
            if (58 !== a) break;
            o.move = Move.decode(t, t.uint32());
            continue;
          case 8:
            if (66 !== a) break;
            o.mute = t.string();
            continue;
          case 9:
            if (74 !== a) break;
            o.unmute = t.string();
            continue;
          case 10:
            if (82 !== a) break;
            o.kick = t.string();
            continue;
          case 11:
            if (90 !== a) break;
            o.press = KeyPress.decode(t, t.uint32());
            continue;
          case 12:
            if (98 !== a) break;
            o.release = KeyRelease.decode(t, t.uint32());
            continue;
          case 13:
            if (104 !== a) break;
            o.sustain = t.bool();
            continue;
          case 14:
            if (114 !== a) break;
            o.heartbeat = Void.decode(t, t.uint32());
            continue;
          case 15:
            if (122 !== a) break;
            o.ban = Ban.decode(t, t.uint32());
            continue;
          case 16:
            if (130 !== a) break;
            o.mod = t.string();
            continue;
          case 17:
            if (138 !== a) break;
            o.unmod = t.string();
            continue;
          case 18:
            if (146 !== a) break;
            o.ipban = t.string();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({host: null != a.host ? globalThis.String(a.host) : "", event: null != a.event ? clientMessage_EventFromJSON(a.event) : 0, ping: null != a.ping ? Void.fromJSON(a.ping) : undefined, room: null != a.room ? Enter.fromJSON(a.room) : undefined, profile: null != a.profile ? UserInfo.fromJSON(a.profile) : undefined, chat: null != a.chat ? globalThis.String(a.chat) : "", move: null != a.move ? Move.fromJSON(a.move) : undefined, mute: null != a.mute ? globalThis.String(a.mute) : "", unmute: null != a.unmute ? globalThis.String(a.unmute) : "", kick: null != a.kick ? globalThis.String(a.kick) : "", press: null != a.press ? KeyPress.fromJSON(a.press) : undefined, release: null != a.release ? KeyRelease.fromJSON(a.release) : undefined, sustain: !!(null != a.sustain) && globalThis.Boolean(a.sustain), heartbeat: null != a.heartbeat ? Void.fromJSON(a.heartbeat) : undefined, ban: null != a.ban ? Ban.fromJSON(a.ban) : undefined, mod: null != a.mod ? globalThis.String(a.mod) : "", unmod: null != a.unmod ? globalThis.String(a.unmod) : "", ipban: null != a.ipban ? globalThis.String(a.ipban) : ""}), toJSON(a) {
      const e = {};
      return "" !== a.host && (e.host = a.host), 0 !== a.event && (e.event = clientMessage_EventToJSON(a.event)), undefined !== a.ping && (e.ping = Void.toJSON(a.ping)), undefined !== a.room && (e.room = Enter.toJSON(a.room)), undefined !== a.profile && (e.profile = UserInfo.toJSON(a.profile)), "" !== a.chat && (e.chat = a.chat), undefined !== a.move && (e.move = Move.toJSON(a.move)), "" !== a.mute && (e.mute = a.mute), "" !== a.unmute && (e.unmute = a.unmute), "" !== a.kick && (e.kick = a.kick), undefined !== a.press && (e.press = KeyPress.toJSON(a.press)), undefined !== a.release && (e.release = KeyRelease.toJSON(a.release)), false !== a.sustain && (e.sustain = a.sustain), undefined !== a.heartbeat && (e.heartbeat = Void.toJSON(a.heartbeat)), undefined !== a.ban && (e.ban = Ban.toJSON(a.ban)), "" !== a.mod && (e.mod = a.mod), "" !== a.unmod && (e.unmod = a.unmod), "" !== a.ipban && (e.ipban = a.ipban), e;
    }, create: a => ClientMessage.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t, i, o, s, n, r, f, l, c;
      const d = createBaseClientMessage();
      return d.host = null !== (e = a.host) && undefined !== e ? e : "", d.event = null !== (t = a.event) && undefined !== t ? t : 0, d.ping = undefined !== a.ping && null !== a.ping ? Void.fromPartial(a.ping) : undefined, d.room = undefined !== a.room && null !== a.room ? Enter.fromPartial(a.room) : undefined, d.profile = undefined !== a.profile && null !== a.profile ? UserInfo.fromPartial(a.profile) : undefined, d.chat = null !== (i = a.chat) && undefined !== i ? i : "", d.move = undefined !== a.move && null !== a.move ? Move.fromPartial(a.move) : undefined, d.mute = null !== (o = a.mute) && undefined !== o ? o : "", d.unmute = null !== (s = a.unmute) && undefined !== s ? s : "", d.kick = null !== (n = a.kick) && undefined !== n ? n : "", d.press = undefined !== a.press && null !== a.press ? KeyPress.fromPartial(a.press) : undefined, d.release = undefined !== a.release && null !== a.release ? KeyRelease.fromPartial(a.release) : undefined, d.sustain = null !== (r = a.sustain) && undefined !== r && r, d.heartbeat = undefined !== a.heartbeat && null !== a.heartbeat ? Void.fromPartial(a.heartbeat) : undefined, d.ban = undefined !== a.ban && null !== a.ban ? Ban.fromPartial(a.ban) : undefined, d.mod = null !== (f = a.mod) && undefined !== f ? f : "", d.unmod = null !== (l = a.unmod) && undefined !== l ? l : "", d.ipban = null !== (c = a.ipban) && undefined !== c ? c : "", d;
    }};
    function createBaseVoid() {
      return {};
    }
    const Void = {encode: (a, e = minimal.Writer.create()) => e, decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseVoid();
      for (; t.pos < i;) {
        const a = t.uint32();
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({}), toJSON: a => ({}), create: a => Void.fromPartial(null != a ? a : {}), fromPartial: a => createBaseVoid()};
    function createBaseUserInfo() {
      return {id: undefined, name: undefined, color: undefined, tags: [], muted: undefined, x: undefined, y: undefined};
    }
    const UserInfo = {encode(a, e = minimal.Writer.create()) {
      undefined !== a.id && e.uint32(10).string(a.id), undefined !== a.name && e.uint32(18).string(a.name), undefined !== a.color && e.uint32(26).string(a.color);
      for (const t of a.tags) e.uint32(34).string(t);
      return undefined !== a.muted && e.uint32(40).bool(a.muted), undefined !== a.x && e.uint32(53).float(a.x), undefined !== a.y && e.uint32(61).float(a.y), e;
    }, decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseUserInfo();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.id = t.string();
            continue;
          case 2:
            if (18 !== a) break;
            o.name = t.string();
            continue;
          case 3:
            if (26 !== a) break;
            o.color = t.string();
            continue;
          case 4:
            if (34 !== a) break;
            o.tags.push(t.string());
            continue;
          case 5:
            if (40 !== a) break;
            o.muted = t.bool();
            continue;
          case 6:
            if (53 !== a) break;
            o.x = t.float();
            continue;
          case 7:
            if (61 !== a) break;
            o.y = t.float();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({id: null != a.id ? globalThis.String(a.id) : undefined, name: null != a.name ? globalThis.String(a.name) : undefined, color: null != a.color ? globalThis.String(a.color) : undefined, tags: globalThis.Array.isArray(null == a ? undefined : a.tags) ? a.tags.map(a => globalThis.String(a)) : [], muted: null != a.muted ? globalThis.Boolean(a.muted) : undefined, x: null != a.x ? globalThis.Number(a.x) : undefined, y: null != a.y ? globalThis.Number(a.y) : undefined}), toJSON(a) {
      var e;
      const t = {};
      return undefined !== a.id && (t.id = a.id), undefined !== a.name && (t.name = a.name), undefined !== a.color && (t.color = a.color), (null === (e = a.tags) || undefined === e ? undefined : e.length) && (t.tags = a.tags), undefined !== a.muted && (t.muted = a.muted), undefined !== a.x && (t.x = a.x), undefined !== a.y && (t.y = a.y), t;
    }, create: a => UserInfo.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t, i, o, s, n, r;
      const f = createBaseUserInfo();
      return f.id = null !== (e = a.id) && undefined !== e ? e : undefined, f.name = null !== (t = a.name) && undefined !== t ? t : undefined, f.color = null !== (i = a.color) && undefined !== i ? i : undefined, f.tags = (null === (o = a.tags) || undefined === o ? undefined : o.map(a => a)) || [], f.muted = null !== (s = a.muted) && undefined !== s ? s : undefined, f.x = null !== (n = a.x) && undefined !== n ? n : undefined, f.y = null !== (r = a.y) && undefined !== r ? r : undefined, f;
    }};
    function createBaseRoom() {
      return {id: undefined, count: undefined};
    }
    const Room = {encode: (a, e = minimal.Writer.create()) => (undefined !== a.id && e.uint32(10).string(a.id), undefined !== a.count && e.uint32(16).uint32(a.count), e), decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseRoom();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.id = t.string();
            continue;
          case 2:
            if (16 !== a) break;
            o.count = t.uint32();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({id: null != a.id ? globalThis.String(a.id) : undefined, count: null != a.count ? globalThis.Number(a.count) : undefined}), toJSON(a) {
      const e = {};
      return undefined !== a.id && (e.id = a.id), undefined !== a.count && (e.count = Math.round(a.count)), e;
    }, create: a => Room.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t;
      const i = createBaseRoom();
      return i.id = null !== (e = a.id) && undefined !== e ? e : undefined, i.count = null !== (t = a.count) && undefined !== t ? t : undefined, i;
    }};
    function createBaseMove() {
      return {id: undefined, x: undefined, y: undefined};
    }
    const Move = {encode: (a, e = minimal.Writer.create()) => (undefined !== a.id && e.uint32(10).string(a.id), undefined !== a.x && e.uint32(21).float(a.x), undefined !== a.y && e.uint32(29).float(a.y), e), decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseMove();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.id = t.string();
            continue;
          case 2:
            if (21 !== a) break;
            o.x = t.float();
            continue;
          case 3:
            if (29 !== a) break;
            o.y = t.float();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({id: null != a.id ? globalThis.String(a.id) : undefined, x: null != a.x ? globalThis.Number(a.x) : undefined, y: null != a.y ? globalThis.Number(a.y) : undefined}), toJSON(a) {
      const e = {};
      return undefined !== a.id && (e.id = a.id), undefined !== a.x && (e.x = a.x), undefined !== a.y && (e.y = a.y), e;
    }, create: a => Move.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t, i;
      const o = createBaseMove();
      return o.id = null !== (e = a.id) && undefined !== e ? e : undefined, o.x = null !== (t = a.x) && undefined !== t ? t : undefined, o.y = null !== (i = a.y) && undefined !== i ? i : undefined, o;
    }};
    function createBaseKeyPress() {
      return {id: undefined, key: undefined, vel: undefined};
    }
    const KeyPress = {encode: (a, e = minimal.Writer.create()) => (undefined !== a.id && e.uint32(10).string(a.id), undefined !== a.key && e.uint32(16).uint32(a.key), undefined !== a.vel && e.uint32(24).uint32(a.vel), e), decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseKeyPress();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.id = t.string();
            continue;
          case 2:
            if (16 !== a) break;
            o.key = t.uint32();
            continue;
          case 3:
            if (24 !== a) break;
            o.vel = t.uint32();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({id: null != a.id ? globalThis.String(a.id) : undefined, key: null != a.key ? globalThis.Number(a.key) : undefined, vel: null != a.vel ? globalThis.Number(a.vel) : undefined}), toJSON(a) {
      const e = {};
      return undefined !== a.id && (e.id = a.id), undefined !== a.key && (e.key = Math.round(a.key)), undefined !== a.vel && (e.vel = Math.round(a.vel)), e;
    }, create: a => KeyPress.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t, i;
      const o = createBaseKeyPress();
      return o.id = null !== (e = a.id) && undefined !== e ? e : undefined, o.key = null !== (t = a.key) && undefined !== t ? t : undefined, o.vel = null !== (i = a.vel) && undefined !== i ? i : undefined, o;
    }};
    function createBaseKeyRelease() {
      return {id: undefined, key: undefined};
    }
    const KeyRelease = {encode: (a, e = minimal.Writer.create()) => (undefined !== a.id && e.uint32(10).string(a.id), undefined !== a.key && e.uint32(16).uint32(a.key), e), decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseKeyRelease();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.id = t.string();
            continue;
          case 2:
            if (16 !== a) break;
            o.key = t.uint32();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({id: null != a.id ? globalThis.String(a.id) : undefined, key: null != a.key ? globalThis.Number(a.key) : undefined}), toJSON(a) {
      const e = {};
      return undefined !== a.id && (e.id = a.id), undefined !== a.key && (e.key = Math.round(a.key)), e;
    }, create: a => KeyRelease.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t;
      const i = createBaseKeyRelease();
      return i.id = null !== (e = a.id) && undefined !== e ? e : undefined, i.key = null !== (t = a.key) && undefined !== t ? t : undefined, i;
    }};
    function createBaseSustain() {
      return {id: undefined, enabled: undefined};
    }
    const Sustain = {encode: (a, e = minimal.Writer.create()) => (undefined !== a.id && e.uint32(10).string(a.id), undefined !== a.enabled && e.uint32(16).bool(a.enabled), e), decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseSustain();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.id = t.string();
            continue;
          case 2:
            if (16 !== a) break;
            o.enabled = t.bool();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({id: null != a.id ? globalThis.String(a.id) : undefined, enabled: null != a.enabled ? globalThis.Boolean(a.enabled) : undefined}), toJSON(a) {
      const e = {};
      return undefined !== a.id && (e.id = a.id), undefined !== a.enabled && (e.enabled = a.enabled), e;
    }, create: a => Sustain.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t;
      const i = createBaseSustain();
      return i.id = null !== (e = a.id) && undefined !== e ? e : undefined, i.enabled = null !== (t = a.enabled) && undefined !== t ? t : undefined, i;
    }};
    function createBaseWelcome() {
      return {id: undefined, name: undefined, color: undefined, room: undefined, host: undefined, chat: [], tags: [], private: undefined};
    }
    const Welcome = {encode(a, e = minimal.Writer.create()) {
      undefined !== a.id && e.uint32(10).string(a.id), undefined !== a.name && e.uint32(18).string(a.name), undefined !== a.color && e.uint32(26).string(a.color), undefined !== a.room && e.uint32(34).string(a.room), undefined !== a.host && e.uint32(42).string(a.host);
      for (const t of a.chat) Chat.encode(t, e.uint32(50).fork()).ldelim();
      for (const t of a.tags) e.uint32(58).string(t);
      return undefined !== a.private && e.uint32(64).bool(a.private), e;
    }, decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseWelcome();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.id = t.string();
            continue;
          case 2:
            if (18 !== a) break;
            o.name = t.string();
            continue;
          case 3:
            if (26 !== a) break;
            o.color = t.string();
            continue;
          case 4:
            if (34 !== a) break;
            o.room = t.string();
            continue;
          case 5:
            if (42 !== a) break;
            o.host = t.string();
            continue;
          case 6:
            if (50 !== a) break;
            o.chat.push(Chat.decode(t, t.uint32()));
            continue;
          case 7:
            if (58 !== a) break;
            o.tags.push(t.string());
            continue;
          case 8:
            if (64 !== a) break;
            o.private = t.bool();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({id: null != a.id ? globalThis.String(a.id) : undefined, name: null != a.name ? globalThis.String(a.name) : undefined, color: null != a.color ? globalThis.String(a.color) : undefined, room: null != a.room ? globalThis.String(a.room) : undefined, host: null != a.host ? globalThis.String(a.host) : undefined, chat: globalThis.Array.isArray(null == a ? undefined : a.chat) ? a.chat.map(a => Chat.fromJSON(a)) : [], tags: globalThis.Array.isArray(null == a ? undefined : a.tags) ? a.tags.map(a => globalThis.String(a)) : [], private: null != a.private ? globalThis.Boolean(a.private) : undefined}), toJSON(a) {
      var e, t;
      const i = {};
      return undefined !== a.id && (i.id = a.id), undefined !== a.name && (i.name = a.name), undefined !== a.color && (i.color = a.color), undefined !== a.room && (i.room = a.room), undefined !== a.host && (i.host = a.host), (null === (e = a.chat) || undefined === e ? undefined : e.length) && (i.chat = a.chat.map(a => Chat.toJSON(a))), (null === (t = a.tags) || undefined === t ? undefined : t.length) && (i.tags = a.tags), undefined !== a.private && (i.private = a.private), i;
    }, create: a => Welcome.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t, i, o, s, n, r, f;
      const l = createBaseWelcome();
      return l.id = null !== (e = a.id) && undefined !== e ? e : undefined, l.name = null !== (t = a.name) && undefined !== t ? t : undefined, l.color = null !== (i = a.color) && undefined !== i ? i : undefined, l.room = null !== (o = a.room) && undefined !== o ? o : undefined, l.host = null !== (s = a.host) && undefined !== s ? s : undefined, l.chat = (null === (n = a.chat) || undefined === n ? undefined : n.map(a => Chat.fromPartial(a))) || [], l.tags = (null === (r = a.tags) || undefined === r ? undefined : r.map(a => a)) || [], l.private = null !== (f = a.private) && undefined !== f ? f : undefined, l;
    }};
    function createBaseChat() {
      return {id: undefined, content: undefined, name: undefined, color: undefined};
    }
    const Chat = {encode: (a, e = minimal.Writer.create()) => (undefined !== a.id && e.uint32(10).string(a.id), undefined !== a.content && e.uint32(18).string(a.content), undefined !== a.name && e.uint32(26).string(a.name), undefined !== a.color && e.uint32(34).string(a.color), e), decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseChat();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.id = t.string();
            continue;
          case 2:
            if (18 !== a) break;
            o.content = t.string();
            continue;
          case 3:
            if (26 !== a) break;
            o.name = t.string();
            continue;
          case 4:
            if (34 !== a) break;
            o.color = t.string();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({id: null != a.id ? globalThis.String(a.id) : undefined, content: null != a.content ? globalThis.String(a.content) : undefined, name: null != a.name ? globalThis.String(a.name) : undefined, color: null != a.color ? globalThis.String(a.color) : undefined}), toJSON(a) {
      const e = {};
      return undefined !== a.id && (e.id = a.id), undefined !== a.content && (e.content = a.content), undefined !== a.name && (e.name = a.name), undefined !== a.color && (e.color = a.color), e;
    }, create: a => Chat.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t, i, o;
      const s = createBaseChat();
      return s.id = null !== (e = a.id) && undefined !== e ? e : undefined, s.content = null !== (t = a.content) && undefined !== t ? t : undefined, s.name = null !== (i = a.name) && undefined !== i ? i : undefined, s.color = null !== (o = a.color) && undefined !== o ? o : undefined, s;
    }};
    function createBaseEnter() {
      return {room: undefined, private: undefined};
    }
    const Enter = {encode: (a, e = minimal.Writer.create()) => (undefined !== a.room && e.uint32(10).string(a.room), undefined !== a.private && e.uint32(16).bool(a.private), e), decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseEnter();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.room = t.string();
            continue;
          case 2:
            if (16 !== a) break;
            o.private = t.bool();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({room: null != a.room ? globalThis.String(a.room) : undefined, private: null != a.private ? globalThis.Boolean(a.private) : undefined}), toJSON(a) {
      const e = {};
      return undefined !== a.room && (e.room = a.room), undefined !== a.private && (e.private = a.private), e;
    }, create: a => Enter.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t;
      const i = createBaseEnter();
      return i.room = null !== (e = a.room) && undefined !== e ? e : undefined, i.private = null !== (t = a.private) && undefined !== t ? t : undefined, i;
    }};
    function createBaseBan() {
      return {id: undefined, minutes: undefined};
    }
    const Ban = {encode: (a, e = minimal.Writer.create()) => (undefined !== a.id && e.uint32(10).string(a.id), undefined !== a.minutes && e.uint32(16).uint32(a.minutes), e), decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseBan();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (10 !== a) break;
            o.id = t.string();
            continue;
          case 2:
            if (16 !== a) break;
            o.minutes = t.uint32();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({id: null != a.id ? globalThis.String(a.id) : undefined, minutes: null != a.minutes ? globalThis.Number(a.minutes) : undefined}), toJSON(a) {
      const e = {};
      return undefined !== a.id && (e.id = a.id), undefined !== a.minutes && (e.minutes = Math.round(a.minutes)), e;
    }, create: a => Ban.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t;
      const i = createBaseBan();
      return i.id = null !== (e = a.id) && undefined !== e ? e : undefined, i.minutes = null !== (t = a.minutes) && undefined !== t ? t : undefined, i;
    }};
    function createBaseNotification() {
      return {level: undefined, title: undefined, text: undefined, timeout: undefined};
    }
    const Notification = {encode: (a, e = minimal.Writer.create()) => (undefined !== a.level && e.uint32(8).int32(a.level), undefined !== a.title && e.uint32(18).string(a.title), undefined !== a.text && e.uint32(26).string(a.text), undefined !== a.timeout && e.uint32(32).uint32(a.timeout), e), decode(a, e) {
      const t = a instanceof minimal.Reader ? a : minimal.Reader.create(a);
      let i = undefined === e ? t.len : t.pos + e;
      const o = createBaseNotification();
      for (; t.pos < i;) {
        const a = t.uint32();
        switch (a >>> 3) {
          case 1:
            if (8 !== a) break;
            o.level = t.int32();
            continue;
          case 2:
            if (18 !== a) break;
            o.title = t.string();
            continue;
          case 3:
            if (26 !== a) break;
            o.text = t.string();
            continue;
          case 4:
            if (32 !== a) break;
            o.timeout = t.uint32();
            continue;
        }
        if (4 == (7 & a) || 0 === a) break;
        t.skipType(7 & a);
      }
      return o;
    }, fromJSON: a => ({level: null != a.level ? notificationLevelFromJSON(a.level) : undefined, title: null != a.title ? globalThis.String(a.title) : undefined, text: null != a.text ? globalThis.String(a.text) : undefined, timeout: null != a.timeout ? globalThis.Number(a.timeout) : undefined}), toJSON(a) {
      const e = {};
      return undefined !== a.level && (e.level = notificationLevelToJSON(a.level)), undefined !== a.title && (e.title = a.title), undefined !== a.text && (e.text = a.text), undefined !== a.timeout && (e.timeout = Math.round(a.timeout)), e;
    }, create: a => Notification.fromPartial(null != a ? a : {}), fromPartial(a) {
      var e, t, i, o;
      const s = createBaseNotification();
      return s.level = null !== (e = a.level) && undefined !== e ? e : undefined, s.title = null !== (t = a.title) && undefined !== t ? t : undefined, s.text = null !== (i = a.text) && undefined !== i ? i : undefined, s.timeout = null !== (o = a.timeout) && undefined !== o ? o : undefined, s;
    }};
    var events = __webpack_require__(7007), events_default = __webpack_require__.n(events), client_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, client_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    };
    let Client = (() => {
      var a;
      let e, t = events_default(), i = [];
      return a = class extends t {
        constructor() {
          super(), this._ws = void client_runInitializers(this, i), this._users = new Map, this._popStateTriggered = false, this._reconnectTimeout = 0, this.me = {}, this.room = {}, new Worker("heartbeat.js").onmessage = () => this.heartbeat(), window.location.search || window.history.replaceState({}, "", ""), window.addEventListener("popstate", () => {
            const a = new URLSearchParams(window.location.search);
            this._popStateTriggered = true, this.enter(a.get("r") || "Lobby");
          });
        }
        get users() {
          return Array.from(this._users.values());
        }
        get(a) {
          return a && a !== this.me.id ? this._users.get(a) : this.me;
        }
        init() {
          let a = "wss://pianoverse.net";
          settingsmanager.has("token") && (a += `?t=${settingsmanager.get("token")}`), this._ws = new WebSocket(`${a}`, "pianoverse"), this._ws.binaryType = "arraybuffer", this._ws.onmessage = a => this.handleMessage(a), this._ws.onopen = () => {
            this.emit("connected"), loadermanager.stop(), this._reconnectTimeout = 0;
            const a = new URLSearchParams(window.location.search);
            settingsmanager.has("name") && settingsmanager.has("color") && this.profile(settingsmanager.get("name"), settingsmanager.get("color")), this.enter(a.get("r") || "Lobby", null !== a.get("p"));
          }, this._ws.onclose = () => {
            this.emit("reconnecting"), loadermanager.start("Reconnecting..."), this._reconnectTimeout += 500, setTimeout(this.init, Math.min(this._reconnectTimeout, 4e3));
          };
        }
        handleMessage(a) {
          let e, t;
          const i = new FileReader;
          i.onload = () => {
            if (i.result instanceof ArrayBuffer) {
              const a = new Uint8Array(i.result), o = ServerMessage.decode(a);
              e = serverMessage_EventToJSON(o.event).toLowerCase(), t = o[e], this.handleEventData(e, t);
            }
          }, i.readAsArrayBuffer(new Blob([a.data]));
        }
        handleEventData(a, e) {
          switch (a) {
            case "token":
              settingsmanager.set("token", e);
              break;
            case "welcome":
              this._users = new Map;
              const {id: a, name: t, color: i, tags: o, room: s, host: n} = e;
              this.me = {id: a, name: t, color: i, tags: o}, settingsmanager.set("name", this.me.name), settingsmanager.set("color", this.me.color), this.room = {id: s, host: n}, this._popStateTriggered || ("Lobby" === this.room.id ? window.history.pushState({}, "", window.location.pathname) : window.history.pushState({}, "", `?r=${encodeURI(this.room.id)}` + (e.private ? "&p" : ""))), this._popStateTriggered = false;
              const r = document.querySelector("pv-toolbar"), f = document.querySelector("pv-canvas"), l = document.querySelector("pv-keys"), c = document.querySelector("pv-chat");
              "Backrooms" === this.room.id ? (r.style.display = "none", f.style.display = "none", l.style.display = "none", c.style.display = "none", document.body.querySelector(".chat").style.display = "none") : (r.style.display = "", f.style.display = "", l.style.display = "", c.style.display = "", document.body.querySelector(".chat").style.display = "");
              break;
            case "join":
              this._users.set(e.id, e);
              break;
            case "profile":
              this.get(e.id).name = e.name, this.get(e.id).color = e.color, this.get(e.id).tags = e.tags, e.id === client.me.id && (settingsmanager.set("name", e.name), settingsmanager.set("color", e.color));
              break;
            case "host":
              this.room.host = e;
              break;
            case "leave":
              e = this.get(e), this._users.delete(e.id);
              break;
            case "notification":
              switch (e.level) {
                case pianoverse_NotificationLevel.INFO:
                  NotificationManager.info(e.title, e.text, e.timeout);
                  break;
                case pianoverse_NotificationLevel.SUCCESS:
                  NotificationManager.success(e.title, e.text, e.timeout);
                  break;
                case pianoverse_NotificationLevel.WARNING:
                  NotificationManager.warning(e.title, e.text, e.timeout);
                  break;
                case pianoverse_NotificationLevel.ERROR:
                  NotificationManager.error(e.title, e.text, e.timeout);
              }
              break;
            case "message":
            case "popup":
              PopupManager.closeEverything(), PopupManager.open(Modal.MESSAGE, null, e);
              break;
            case "ratelimit":
              NotificationManager.warning("Slow down!", "You've reached the ratelimit.");
          }
          this.emit(a, e);
        }
        send(a) {
          var e;
          return (null === (e = this._ws) || undefined === e ? undefined : e.readyState) === WebSocket.OPEN && (this._ws.send(ClientMessage.encode(a).finish()), true);
        }
        isConnected() {
          var a;
          return (null === (a = this._ws) || undefined === a ? undefined : a.readyState) === WebSocket.OPEN;
        }
        enter(a, e = false) {
          const t = ClientMessage.create({event: ClientMessage_Event.ROOM, room: {room: a, private: e}});
          return this.send(t);
        }
        profile(a, e) {
          const t = ClientMessage.create({event: ClientMessage_Event.PROFILE, profile: {name: a || this.me.name, color: e || this.me.color}});
          return this.send(t);
        }
        chat(a) {
          const e = ClientMessage.create({event: ClientMessage_Event.CHAT, chat: a});
          return this.send(e);
        }
        move(a, e) {
          const t = ClientMessage.create({event: ClientMessage_Event.MOVE, move: {x: a, y: e}});
          return this.send(t);
        }
        host(a) {
          const e = ClientMessage.create({event: ClientMessage_Event.HOST, host: a});
          return this.send(e);
        }
        mute(a) {
          this.get(a).muted = true;
          const e = ClientMessage.create({event: ClientMessage_Event.MUTE, mute: a});
          return this.send(e);
        }
        unmute(a) {
          this.get(a).muted = false;
          const e = ClientMessage.create({event: ClientMessage_Event.UNMUTE, unmute: a});
          return this.send(e);
        }
        kick(a) {
          const e = ClientMessage.create({event: ClientMessage_Event.KICK, kick: a});
          return this.send(e);
        }
        ban(a, e = 60) {
          const t = ClientMessage.create({event: ClientMessage_Event.BAN, ban: {id: a, minutes: e}});
          return this.send(t);
        }
        press(a, e) {
          const t = ClientMessage.create({event: ClientMessage_Event.PRESS, press: {key: a, vel: e}});
          return this.send(t);
        }
        release(a) {
          const e = ClientMessage.create({event: ClientMessage_Event.RELEASE, release: {key: a}});
          return this.send(e);
        }
        sustain(a) {
          const e = ClientMessage.create({event: ClientMessage_Event.SUSTAIN, sustain: a});
          return this.send(e);
        }
        mod(a) {
          const e = ClientMessage.create({event: ClientMessage_Event.MOD, mod: a});
          return this.send(e);
        }
        unmod(a) {
          const e = ClientMessage.create({event: ClientMessage_Event.UNMOD, unmod: a});
          return this.send(e);
        }
        ipban(a) {
          const e = ClientMessage.create({event: ClientMessage_Event.IPBAN, ipban: a});
          return this.send(e);
        }
        ping() {
          const a = ClientMessage.create({event: ClientMessage_Event.PING});
          return this.send(a);
        }
        heartbeat() {
          const a = ClientMessage.create({event: ClientMessage_Event.HEARTBEAT});
          return this.send(a);
        }
      }, (() => {
        var o;
        const s = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (o = t[Symbol.metadata]) && undefined !== o ? o : null) : undefined;
        e = [bind], client_esDecorate(a, null, e, {kind: "method", name: "init", static: false, private: false, access: {has: a => "init" in a, get: a => a.init}, metadata: s}, null, i), s && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: s});
      })(), a;
    })();
    const client = new Client, services_client = client;
    var pv_new_room_code = '<dialog class="popup" modal> <div class="header"> <div class="title"><i class="fas fa-house"></i> Create room</div> <div class="x"><i class="fas fa-xmark"></i></div> </div> <div class="content"> <div class="field"> <label for="room">Room name</label> <input type="text" class="input-room" placeholder="My room" spellcheck="false" maxlength="32"/> </div> <div class="private"> <label class="toggle"> <input type="checkbox" class="input-private"/> <span class="slider"></span> </label> <label>Private</label> </div> <div class="buttons"> <button class="button-save" disabled="disabled">Create</button> </div> </div> </dialog> ';
    const pv_new_room = pv_new_room_code;
    var pv_new_room_pv_new_room = __webpack_require__(9728), pv_new_room_options = {};
    pv_new_room_options.styleTagTransform = styleTagTransform_default(), pv_new_room_options.setAttributes = setAttributesWithoutAttributes_default(), pv_new_room_options.insert = insertBySelector_default().bind(null, "head"), pv_new_room_options.domAPI = styleDomAPI_default(), pv_new_room_options.insertStyleElement = insertStyleElement_default();
    var pv_new_room_update = injectStylesIntoStyleTag_default()(pv_new_room_pv_new_room.A, pv_new_room_options);
    const popups_pv_new_room_pv_new_room = pv_new_room_pv_new_room.A && pv_new_room_pv_new_room.A.locals ? pv_new_room_pv_new_room.A.locals : undefined;
    var pv_new_room_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_new_room_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_new_room_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_new_room_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvNewRoom = (() => {
      var a, e, t, i;
      let o, s, n, r, f, l, c = components_pv_popup_pv_popup, d = [], p = [], u = [], v = [];
      return a = class extends c {
        get inputRoom() {
          return pv_new_room_classPrivateFieldGet(this, e, "f");
        }
        set inputRoom (a) {
          pv_new_room_classPrivateFieldSet(this, e, a, "f");
        }
        get inputPrivate() {
          return pv_new_room_classPrivateFieldGet(this, t, "f");
        }
        set inputPrivate (a) {
          pv_new_room_classPrivateFieldSet(this, t, a, "f");
        }
        get buttonSave() {
          return pv_new_room_classPrivateFieldGet(this, i, "f");
        }
        set buttonSave (a) {
          pv_new_room_classPrivateFieldSet(this, i, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_new_room_runInitializers(this, d), pv_new_room_runInitializers(this, p, undefined))), t.set(this, pv_new_room_runInitializers(this, u, undefined)), i.set(this, pv_new_room_runInitializers(this, v, undefined)), this.innerHTML = pv_new_room;
        }
        onOpen() {
          this.inputRoom.value = "", this.inputRoom.focus();
        }
        connectedCallback() {
          super.connectedCallback(), this.buttonSave.addEventListener("click", this.submit), this.inputRoom.addEventListener("input", this.handleInput), this.inputRoom.addEventListener("keydown", this.handleKeyDown);
        }
        handleInput() {
          this.buttonSave.disabled = !this.isValid();
        }
        handleKeyDown(a) {
          "Enter" === a.key && this.isValid() && this.submit();
        }
        submit() {
          var a;
          this.close(), (null === (a = this.inputRoom.value) || undefined === a ? undefined : a.trim()) && services_client.enter(this.inputRoom.value.trim(), this.inputPrivate.checked);
        }
        isValid() {
          return this.inputRoom.value.trim().length >= 2 && this.inputRoom.value.trim().length <= 32;
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = c[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        o = [decorators_child], s = [decorators_child], n = [decorators_child], r = [bind], f = [bind], l = [bind], pv_new_room_esDecorate(a, null, o, {kind: "accessor", name: "inputRoom", static: false, private: false, access: {has: a => "inputRoom" in a, get: a => a.inputRoom, set: (a, e) => {
          a.inputRoom = e;
        }}, metadata: t}, p, d), pv_new_room_esDecorate(a, null, s, {kind: "accessor", name: "inputPrivate", static: false, private: false, access: {has: a => "inputPrivate" in a, get: a => a.inputPrivate, set: (a, e) => {
          a.inputPrivate = e;
        }}, metadata: t}, u, d), pv_new_room_esDecorate(a, null, n, {kind: "accessor", name: "buttonSave", static: false, private: false, access: {has: a => "buttonSave" in a, get: a => a.buttonSave, set: (a, e) => {
          a.buttonSave = e;
        }}, metadata: t}, v, d), pv_new_room_esDecorate(a, null, r, {kind: "method", name: "handleInput", static: false, private: false, access: {has: a => "handleInput" in a, get: a => a.handleInput}, metadata: t}, null, d), pv_new_room_esDecorate(a, null, f, {kind: "method", name: "handleKeyDown", static: false, private: false, access: {has: a => "handleKeyDown" in a, get: a => a.handleKeyDown}, metadata: t}, null, d), pv_new_room_esDecorate(a, null, l, {kind: "method", name: "submit", static: false, private: false, access: {has: a => "submit" in a, get: a => a.submit}, metadata: t}, null, d), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_popups_pv_new_room_pv_new_room = PvNewRoom;
    customElements.define("pv-new-room", PvNewRoom);
    var __awaiter = function (a, e, t, i) {
      return new (t || (t = Promise))(function (o, s) {
        function n(a) {
          try {
            f(i.next(a));
          } catch (a) {
            s(a);
          }
        }
        function r(a) {
          try {
            f(i.throw(a));
          } catch (a) {
            s(a);
          }
        }
        function f(a) {
          var e;
          a.done ? o(a.value) : (e = a.value, e instanceof t ? e : new t(function (a) {
            a(e);
          })).then(n, r);
        }
        f((i = i.apply(a, e || [])).next());
      });
    };
    class AudioEngine extends events_default() {
      constructor() {
        super(), this.volume = 100, this.ctx = new AudioContext({latencyHint: "interactive"}), this.sounds = new Map, this.currentlyPlaying = new Map;
        const a = new GainNode(this.ctx);
        a.gain.value = Math.min(this.volume / 100, 1), a.connect(this.ctx.destination), this.limiter = new DynamicsCompressorNode(this.ctx), this.limiter.threshold.value = -10, this.limiter.knee.value = 5, this.limiter.ratio.value = 20, this.limiter.attack.value = 0, this.limiter.release.value = 0.1, this.limiter.connect(a), settingsmanager.on("volume", e => {
          this.volume = e, a.gain.value = Math.min(this.volume / 100, 1);
        });
      }
      load(a, e) {
        return __awaiter(this, undefined, undefined, function* () {
          const t = yield fetch(e), i = yield t.arrayBuffer(), o = yield this.ctx.decodeAudioData(i);
          return this.sounds.set(a, o), a;
        });
      }
      unload(a) {
        return __awaiter(this, undefined, undefined, function* () {
          this.sounds.delete(a);
        });
      }
      play(a, e) {
        e > 127 && (e = 127);
        const t = this.ctx.currentTime, i = new AudioBufferSourceNode(this.ctx, {buffer: this.sounds.get(a)}), o = new GainNode(this.ctx, {gain: e / 127}), s = new StereoPannerNode(this.ctx, {pan: (Number(a) - 21) / 87 - 0.5});
        if (i.connect(o), o.connect(s), s.connect(this.limiter), i.start(), this.currentlyPlaying.has(a)) {
          const e = this.currentlyPlaying.get(a);
          e.gain.gain.setValueAtTime(e.gain.gain.value, 0), e.gain.gain.linearRampToValueAtTime(0, t + 0.2), e.source.stop(t + 0.21);
        }
        this.currentlyPlaying.set(a, {source: i, gain: o});
      }
      stop(a) {
        const e = this.ctx.currentTime;
        if (this.currentlyPlaying.has(a)) {
          const t = this.currentlyPlaying.get(a);
          t.gain.gain.setValueAtTime(t.gain.gain.value, e), t.gain.gain.linearRampToValueAtTime(0.1 * t.gain.gain.value, e + 0.16), t.gain.gain.linearRampToValueAtTime(0, e + 0.4), t.source.stop(e + 0.41), this.currentlyPlaying.delete(a);
        }
      }
    }
    const audio = new AudioEngine, audioengine = audio;
    var midi_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, midi_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, midi_awaiter = function (a, e, t, i) {
      return new (t || (t = Promise))(function (o, s) {
        function n(a) {
          try {
            f(i.next(a));
          } catch (a) {
            s(a);
          }
        }
        function r(a) {
          try {
            f(i.throw(a));
          } catch (a) {
            s(a);
          }
        }
        function f(a) {
          var e;
          a.done ? o(a.value) : (e = a.value, e instanceof t ? e : new t(function (a) {
            a(e);
          })).then(n, r);
        }
        f((i = i.apply(a, e || [])).next());
      });
    }, MIDICommand;
    !function (a) {
      a[a.NOTE_OFF = 128] = "NOTE_OFF", a[a.NOTE_ON = 144] = "NOTE_ON", a[a.AFTER_TOUCH = 160] = "AFTER_TOUCH", a[a.CONTROL_CHANGE = 176] = "CONTROL_CHANGE", a[a.PATCH_CHANGE = 192] = "PATCH_CHANGE", a[a.CHANNEL_PRESSURE = 208] = "CHANNEL_PRESSURE", a[a.PITCH_BEND = 224] = "PITCH_BEND", a[a.SYSTEM_EXCLUSIVE = 240] = "SYSTEM_EXCLUSIVE";
    }(MIDICommand || (MIDICommand = {}));
    let MIDIManager = (() => {
      var a;
      let e, t = events_default(), i = [];
      return a = class extends t {
        constructor() {
          super(), this.access = void midi_runInitializers(this, i), this.outputIds = new Set, this.pressed = {}, this.offset = 0, this.devices = new Map, this.velocityCurve = settingsmanager.get("velocity-curve"), this.init(), settingsmanager.on("transpose", a => this.offset = a), settingsmanager.on("velocity-curve", a => this.velocityCurve = a);
        }
        registerDevice(a) {
          this.devices.has(a.name) ? "input" === a.type ? this.devices.get(a.name).in = a : this.devices.get(a.name).out = a : this.devices.set(a.name, {name: a.name.trim(), in: "input" === a.type ? a : null, out: "output" === a.type ? a : null});
        }
        unregisterDevice(a) {
          this.devices.has(a.name) && ("input" === a.type ? this.devices.get(a.name).in = null : this.devices.get(a.name).out = null, null === this.devices.get(a.name).in && null === this.devices.get(a.name).out && this.devices.delete(a.name));
        }
        init() {
          return midi_awaiter(this, undefined, undefined, function* () {
            try {
              this.access = yield navigator.requestMIDIAccess({sysex: false, software: false}), this.access.onstatechange = a => {
                a instanceof MIDIConnectionEvent && this.handleConnectionEvent(a.port);
              }, this.access.inputs.forEach(a => {
                this.registerDevice(a), this.enableInput(a.id);
              }), this.access.outputs.forEach(a => {
                this.registerDevice(a), this.disableOutput(a.id);
              }), this.emit("update");
            } catch (a) {}
          });
        }
        handleConnectionEvent(a) {
          "connected" === a.state ? "input" === a.type ? this.devices.has(a.name) ? this.registerDevice(a) : (this.registerDevice(a), this.enableInput(a.id), NotificationManager.success("Connected to a MIDI device", a.name, 10)) : this.registerDevice(a) : this.unregisterDevice(a), this.emit("update");
        }
        onMidiInput(a) {
          if (9 == (15 & a.data[0])) return;
          const e = a.data[0] >> 4, t = a.data[1];
          let i = a.data[2], o = 0;
          switch (this.velocityCurve) {
            case "softer":
              o = Math.floor(127 * Math.pow(i / 127, 2));
              break;
            case "soft":
              o = Math.floor(127 * Math.pow(i / 127, 1.5));
              break;
            case "linear":
              o = i;
              break;
            case "hard":
              o = Math.floor(127 * Math.pow(i / 127, 0.666));
              break;
            case "harder":
              o = Math.floor(127 * Math.pow(i / 127, 0.5));
          }
          8 == e || 9 == e && 0 == i ? (services_keyboard.release(this.pressed[t], undefined, true), delete this.pressed[t]) : 9 == e ? (this.pressed[t] = t + this.offset, services_keyboard.press(t + this.offset, o, undefined, true)) : 11 == e && 64 == t && settingsmanager.set("sustain", i > 63);
        }
        isInputEnabled(a) {
          var e;
          let t = false;
          return null === (e = this.devices) || undefined === e || e.forEach(e => {
            e.in && e.in.id === a && null != e.in.onmidimessage && (t = true);
          }), t;
        }
        enableInput(a) {
          var e;
          null === (e = this.devices) || undefined === e || e.forEach(e => {
            e.in && e.in.id === a && (e.in.onmidimessage = this.onMidiInput);
          });
        }
        disableInput(a) {
          var e;
          null === (e = this.devices) || undefined === e || e.forEach(e => {
            e.in && e.in.id === a && (e.in.onmidimessage = null);
          });
        }
        sendNoteOn(a, e) {
          var t;
          null === (t = this.devices) || undefined === t || t.forEach(t => {
            t.out && this.outputIds.has(t.out.id) && t.out.send([MIDICommand.NOTE_ON, a, Math.min(e, 127)]);
          });
        }
        sendNoteOff(a) {
          var e;
          null === (e = this.devices) || undefined === e || e.forEach(e => {
            e.out && this.outputIds.has(e.out.id) && e.out.send([MIDICommand.NOTE_OFF, a, 0]);
          });
        }
        sendSustain(a) {
          var e;
          null === (e = this.devices) || undefined === e || e.forEach(e => {
            e.out && this.outputIds.has(e.out.id) && e.out.send([MIDICommand.CONTROL_CHANGE, 64, a ? 127 : 0]);
          });
        }
        isOutputEnabled(a) {
          return this.outputIds.has(a);
        }
        enableOutput(a) {
          this.outputIds.add(a);
        }
        disableOutput(a) {
          this.outputIds.delete(a);
        }
      }, (() => {
        var o;
        const s = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (o = t[Symbol.metadata]) && undefined !== o ? o : null) : undefined;
        e = [bind], midi_esDecorate(a, null, e, {kind: "method", name: "onMidiInput", static: false, private: false, access: {has: a => "onMidiInput" in a, get: a => a.onMidiInput}, metadata: s}, null, i), s && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: s});
      })(), a;
    })();
    const midi = new MIDIManager, services_midi = midi, layout = {65: 44, 90: 45, 83: 46, 88: 47, 67: 48, 70: 49, 86: 50, 71: 51, 66: 52, 78: 53, 74: 54, 77: 55, 75: 56, 188: 57, 76: 58, 190: 59, 59: 59, 191: 60, 222: 61, 49: 56, 81: 57, 50: 58, 87: 59, 69: 60, 52: 61, 82: 62, 53: 63, 84: 64, 89: 65, 55: 66, 85: 67, 56: 68, 73: 69, 57: 70, 79: 71, 80: 72, 189: 73, 173: 73, 219: 74, 169: 74, 187: 75, 61: 75, 221: 76, 160: 76}, multiplayer_piano = layout, virtual_piano_layout = {49: 36, 50: 38, 51: 40, 52: 41, 53: 43, 54: 45, 55: 47, 56: 48, 57: 50, 48: 52, 81: 53, 87: 55, 69: 57, 82: 59, 84: 60, 89: 62, 85: 64, 73: 65, 79: 67, 80: 69, 65: 71, 83: 72, 68: 74, 70: 76, 71: 77, 72: 79, 74: 81, 75: 83, 76: 84, 90: 86, 88: 88, 67: 89, 86: 91, 66: 93, 78: 95, 77: 96}, virtual_piano = virtual_piano_layout, pianoverse_layout = {Backquote: 54, Digit1: 56, Digit2: 58, Digit4: 61, Digit5: 63, Digit7: 66, Digit8: 68, Digit9: 70, Minus: 73, Equal: 75, KeyQ: 57, KeyW: 59, KeyE: 60, KeyR: 62, KeyT: 64, KeyY: 65, KeyU: 67, KeyI: 69, KeyO: 71, KeyP: 72, BracketLeft: 74, BracketRight: 76, KeyA: 44, KeyS: 46, KeyF: 49, KeyG: 51, KeyJ: 54, KeyK: 56, KeyL: 58, Quote: 61, Backslash: 63, IntlBackslash: 43, KeyZ: 45, KeyX: 47, KeyC: 48, KeyV: 50, KeyB: 52, KeyN: 53, KeyM: 55, Comma: 57, Period: 59, Slash: 60}, pianoverse = pianoverse_layout, info_namespaceObject = JSON.parse('{"H":["a-1","as-1","b-1","c0","cs0","d0","ds0","e0","f0","fs0","g0","gs0","a0","as0","b0","c1","cs1","d1","ds1","e1","f1","fs1","g1","gs1","a1","as1","b1","c2","cs2","d2","ds2","e2","f2","fs2","g2","gs2","a2","as2","b2","c3","cs3","d3","ds3","e3","f3","fs3","g3","gs3","a3","as3","b3","c4","cs4","d4","ds4","e4","f4","fs4","g4","gs4","a4","as4","b4","c5","cs5","d5","ds5","e5","f5","fs5","g5","gs5","a5","as5","b5","c6","cs6","d6","ds6","e6","f6","fs6","g6","gs6","a6","as6","b6","c7"]}');
    var layout_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, layout_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    };
    let offset = 0, vel = 109, LayoutManager = (() => {
      var a;
      let e, t, i = events_default(), o = [];
      return a = class extends i {
        constructor() {
          super(), this.layout = void layout_runInitializers(this, o), this.layout = new PianoverseLayout, settingsmanager.on("keyboardLayout", a => {
            switch (a) {
              case "pianoverse":
                this.layout = new PianoverseLayout;
                break;
              case "multiplayerpiano":
                this.layout = new MultiplayerPianoLayout;
                break;
              case "virtualpiano":
                this.layout = new VirtualPianoLayout;
            }
          }), settingsmanager.on("transpose", a => offset = a), settingsmanager.on("velocity", a => vel = a), document.addEventListener("keydown", e => {
            if (!e.repeat && !e.metaKey) {
              switch (e.code) {
                case "NumpadAdd":
                  return this.velocity(Math.max(a.MIN_VELOCITY, Math.min(a.MAX_VELOCITY, vel + 9))), void e.preventDefault();
                case "NumpadSubtract":
                  return this.velocity(Math.max(a.MIN_VELOCITY, Math.min(a.MAX_VELOCITY, vel - 9))), void e.preventDefault();
                case "ArrowDown":
                  return this.transpose(-12), void e.preventDefault();
                case "ArrowLeft":
                  return this.transpose(-1), void e.preventDefault();
                case "ArrowRight":
                  return this.transpose(1), void e.preventDefault();
                case "ArrowUp":
                  return this.transpose(12), void e.preventDefault();
                case "Backspace":
                  return void settingsmanager.set("sustain", !settingsmanager.get("sustain"));
                case "Space":
                  return settingsmanager.set("sustain", true), void e.preventDefault();
              }
              this.handleKeydown(e);
            }
          }), document.addEventListener("keyup", a => {
            a.repeat || a.metaKey || ("Space" !== a.code ? this.handleKeyup(a) : settingsmanager.set("sustain", false));
          });
        }
        transpose(e) {
          offset + e >= a.MIN_TRANSPOSE && offset + e <= a.MAX_TRANSPOSE && (offset += e), settingsmanager.set("transpose", offset);
        }
        velocity(e) {
          e >= a.MIN_VELOCITY && e <= a.MAX_VELOCITY && (vel = e), settingsmanager.set("velocity", vel);
        }
        handleKeydown(a) {
          this.layout.handleKeydown(a);
        }
        handleKeyup(a) {
          this.layout.handleKeyup(a);
        }
      }, (() => {
        var s;
        const n = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (s = i[Symbol.metadata]) && undefined !== s ? s : null) : undefined;
        e = [bind], t = [bind], layout_esDecorate(a, null, e, {kind: "method", name: "handleKeydown", static: false, private: false, access: {has: a => "handleKeydown" in a, get: a => a.handleKeydown}, metadata: n}, null, o), layout_esDecorate(a, null, t, {kind: "method", name: "handleKeyup", static: false, private: false, access: {has: a => "handleKeyup" in a, get: a => a.handleKeyup}, metadata: n}, null, o), n && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: n});
      })(), a.MIN_TRANSPOSE = -36, a.MAX_TRANSPOSE = 36, a.MIN_VELOCITY = 1, a.MAX_VELOCITY = 127, a;
    })();
    class PianoverseLayout {
      constructor() {
        this.pressed = {}, this.caps = false;
      }
      handleKeydown(a) {
        "CapsLock" === a.code && (this.caps = true);
        const e = a.ctrlKey || this.caps ? -12 : a.shiftKey ? 12 : 0, t = pianoverse[a.code] + e + offset;
        isNaN(t) || t < 21 || t > 108 || t && !this.pressed[a.code] && (services_keyboard.press(t, vel), this.pressed[a.code] = t);
      }
      handleKeyup(a) {
        "CapsLock" === a.code && (this.caps = false), this.pressed[a.code] && (services_keyboard.release(this.pressed[a.code]), delete this.pressed[a.code]);
      }
    }
    class MultiplayerPianoLayout {
      constructor() {
        this.pressed = {}, this.caps = false;
      }
      handleKeydown(a) {
        let e = 0;
        "CapsLock" === a.code && (this.caps = true), a.altKey ? (e = 24, a.preventDefault()) : a.ctrlKey || this.caps ? e = -12 : a.shiftKey && (e = 12);
        const t = multiplayer_piano[a.keyCode] + e + offset;
        isNaN(t) || t < 21 || t > 108 || t && !this.pressed[a.keyCode] && (services_keyboard.press(t, vel), this.pressed[a.keyCode] = t);
      }
      handleKeyup(a) {
        "CapsLock" === a.code && (this.caps = false), this.pressed[a.keyCode] && (services_keyboard.release(this.pressed[a.keyCode]), delete this.pressed[a.keyCode]);
      }
    }
    class VirtualPianoLayout {
      constructor() {
        this.pressed = {};
      }
      handleKeydown(a) {
        var e;
        let t = virtual_piano[a.keyCode];
        a.shiftKey && (null === (e = info_namespaceObject.H[t - 20]) || undefined === e ? undefined : e.includes("s")) && (t += 1), t += offset, isNaN(t) || t < 21 || t > 108 || t && !this.pressed[a.keyCode] && (services_keyboard.press(t, vel), this.pressed[a.keyCode] = t);
      }
      handleKeyup(a) {
        this.pressed[a.keyCode] && (services_keyboard.release(this.pressed[a.keyCode]), delete this.pressed[a.keyCode]);
      }
    }
    const layoutManager = new LayoutManager, services_layout = null;
    var keyboard_awaiter = function (a, e, t, i) {
      return new (t || (t = Promise))(function (o, s) {
        function n(a) {
          try {
            f(i.next(a));
          } catch (a) {
            s(a);
          }
        }
        function r(a) {
          try {
            f(i.throw(a));
          } catch (a) {
            s(a);
          }
        }
        function f(a) {
          var e;
          a.done ? o(a.value) : (e = a.value, e instanceof t ? e : new t(function (a) {
            a(e);
          })).then(n, r);
        }
        f((i = i.apply(a, e || [])).next());
      });
    };
    class KeyboardState extends events.EventEmitter {
      constructor(a) {
        super(), this.audioEngine = a, this.mapSustain = new Map, this.mapPressed = new Map, this.mapSustained = new Map, services_client.on("press", ({key: a, vel: e, id: t}) => this.press(a, e, t)), services_client.on("release", ({key: a, id: e}) => this.release(a, e)), services_client.on("sustain", ({enabled: a, id: e}) => this.sustain(a, e)), services_client.on("welcome", a => {
          this.releaseAllNotes(), this.mapPressed.set(a.id, new Set), this.mapSustained.set(a.id, new Set), this.mapSustain.set(a.id, !!this.mapSustain.get(services_client.me.id)), this.sustain(settingsmanager.get("sustain"), services_client.me.id, true);
        }), services_client.on("join", a => {
          this.mapPressed.set(a.id, new Set), this.mapSustained.set(a.id, new Set), this.mapSustain.set(a.id, false);
        }), services_client.on("leave", a => {
          this.releaseAllNotesFrom(a.id), this.mapPressed.delete(a.id), this.mapSustained.delete(a.id), this.mapSustain.delete(a.id);
        }), settingsmanager.on("sustain", a => this.sustain(a, undefined, true));
      }
      load(a) {
        const e = [];
        for (let t = 21; t <= 108; ++t) e.push((() => keyboard_awaiter(this, undefined, undefined, function* () {
          yield this.audioEngine.load(t.toString(), `sounds/${a}/${t}.mp3`), this.emit("loaded", t);
        }))());
        Promise.all(e).catch(() => {
          NotificationManager.error("Failed to load sounds", "Reload the page to try again.");
        });
      }
      press(a, e, t, i) {
        var o, s;
        "Backrooms" !== services_client.room.id && (this.audioEngine.play(a.toString(), e), i || services_midi.sendNoteOn(a, e), t || (t = services_client.me.id, services_client.press(a, e)), (null === (o = this.mapPressed.get(t)) || undefined === o ? undefined : o.has(a)) && this.emit("release", a), null === (s = this.mapPressed.get(t)) || undefined === s || s.add(a), this.mapSustain.get(t) && this.mapSustained.get(t).add(a), this.emit("press", a, e, t));
      }
      release(a, e, t) {
        var i, o;
        "Backrooms" !== services_client.room.id && (this.emit("release", a), e || (e = services_client.me.id, services_client.release(a)), null === (i = this.mapPressed.get(e)) || undefined === i || i.delete(a), (null === (o = this.mapSustained.get(e)) || undefined === o ? undefined : o.has(a)) || (this.audioEngine.stop(null == a ? undefined : a.toString()), t || services_midi.sendNoteOff(a)));
      }
      sustain(a, e, t) {
        var i, o;
        "Backrooms" !== services_client.room.id && (e || (e = services_client.me.id, services_client.sustain(a)), this.mapSustain.set(e, a), t && services_midi.sendSustain(a), a ? null === (i = this.mapPressed.get(e)) || undefined === i || i.forEach(a => {
          var t;
          return null === (t = this.mapSustained.get(e)) || undefined === t ? undefined : t.add(a);
        }) : (null === (o = this.mapSustained.get(e)) || undefined === o || o.forEach(a => {
          var t, i;
          (null === (t = this.mapPressed.get(e)) || undefined === t ? undefined : t.has(a)) || (null === (i = this.mapSustained.get(e)) || undefined === i || i.delete(a), this.release(a, e));
        }), this.mapSustained.set(e, new Set)));
      }
      releaseAllNotes() {
        for (const [a, e] of this.mapPressed.entries()) e.forEach(e => this.release(e, a));
      }
      releaseAllMyNotes() {
        this.releaseAllNotesFrom(services_client.me.id);
      }
      releaseAllNotesFrom(a) {
        this.mapSustained.set(a, new Set);
        for (const e of this.mapPressed.get(a)) this.release(e, a);
        for (const e of this.mapSustained.get(a)) this.release(e, a);
      }
      isSustainEnabled() {
        return this.mapSustain.get(services_client.me.id);
      }
    }
    KeyboardState.TRANSPOSE_MIN = -36, KeyboardState.TRANSPOSE_MAX = 36;
    const keyboard = new KeyboardState(audioengine), services_keyboard = keyboard;
    var pv_actions_code = '<dialog class="popup"> <div class="content"> <div class="userid">------</div> <div class="host"><span>Make host</span><i class="fas fa-crown"></i></div> <div class="mod"><span>Promote</span><i class="fas fa-angles-up"></i></div> <div class="unmod"><span>Demote</span><i class="fas fa-angles-down"></i></div> <div class="mute-notes"><span>Mute notes</span><i class="fas fa-microphone"></i></div> <div class="unmute-notes"><span>Muted notes</span><i class="fas fa-microphone-slash"></i></div> <div class="mute-chat"><span>Mute chat</span><i class="fas fa-comment"></i></div> <div class="unmute-chat"><span>Muted chat</span><i class="fas fa-comment-slash"></i></div> <hr class="kickban-divider"/> <div class="kick"><span>Kick</span><i class="fas fa-door-open"></i></div> <div class="ban"><span>Ban</span><i class="fas fa-ban"></i></div> <hr class="banip-divider"/> <div class="banip"><span>Site ban</span><i class="fas fa-globe"></i></div> </div> </dialog> ';
    const pv_actions = pv_actions_code;
    var pv_actions_pv_actions = __webpack_require__(7966), pv_actions_options = {};
    pv_actions_options.styleTagTransform = styleTagTransform_default(), pv_actions_options.setAttributes = setAttributesWithoutAttributes_default(), pv_actions_options.insert = insertBySelector_default().bind(null, "head"), pv_actions_options.domAPI = styleDomAPI_default(), pv_actions_options.insertStyleElement = insertStyleElement_default();
    var pv_actions_update = injectStylesIntoStyleTag_default()(pv_actions_pv_actions.A, pv_actions_options);
    const popups_pv_actions_pv_actions = pv_actions_pv_actions.A && pv_actions_pv_actions.A.locals ? pv_actions_pv_actions.A.locals : undefined;
    var pv_actions_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_actions_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_actions_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_actions_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvActions = (() => {
      var a, e, t, i, o, s, n, r, f, l, c, d, p, u;
      let v, h, m, g, _, b, y, w, k, x, S, E, P, T, I, C, A, M, O, N, L, D, j, z, F = components_pv_popup_pv_popup, R = [], B = [], q = [], U = [], W = [], G = [], K = [], V = [], H = [], Y = [], X = [], $ = [], J = [], Z = [];
      return a = class extends F {
        get userid() {
          return pv_actions_classPrivateFieldGet(this, e, "f");
        }
        set userid (a) {
          pv_actions_classPrivateFieldSet(this, e, a, "f");
        }
        get mod() {
          return pv_actions_classPrivateFieldGet(this, t, "f");
        }
        set mod (a) {
            this.role = "mod";
        }
        get unmod() {
          return pv_actions_classPrivateFieldGet(this, i, "f");
        }
        set unmod (a) {
          pv_actions_classPrivateFieldSet(this, i, a, "f");
        }
        get muteNotes() {
          return pv_actions_classPrivateFieldGet(this, o, "f");
        }
        set muteNotes (a) {
          pv_actions_classPrivateFieldSet(this, o, a, "f");
        }
        get unmuteNotes() {
          return pv_actions_classPrivateFieldGet(this, s, "f");
        }
        set unmuteNotes (a) {
          pv_actions_classPrivateFieldSet(this, s, a, "f");
        }
        get muteChat() {
          return pv_actions_classPrivateFieldGet(this, n, "f");
        }
        set muteChat (a) {
          pv_actions_classPrivateFieldSet(this, n, a, "f");
        }
        get unmuteChat() {
          return pv_actions_classPrivateFieldGet(this, r, "f");
        }
        set unmuteChat (a) {
          pv_actions_classPrivateFieldSet(this, r, a, "f");
        }
        get host() {
          return pv_actions_classPrivateFieldGet(this, f, "f");
        }
        set host (a) {
          pv_actions_classPrivateFieldSet(this, f, a, "f");
        }
        get kickbanDivider() {
          return pv_actions_classPrivateFieldGet(this, l, "f");
        }
        set kickbanDivider (a) {
          pv_actions_classPrivateFieldSet(this, l, a, "f");
        }
        get kick() {
          return pv_actions_classPrivateFieldGet(this, c, "f");
        }
        set kick (a) {
          pv_actions_classPrivateFieldSet(this, c, a, "f");
        }
        get ban() {
          return pv_actions_classPrivateFieldGet(this, d, "f");
        }
        set ban (a) {
          pv_actions_classPrivateFieldSet(this, d, a, "f");
        }
        get banipDivider() {
          return pv_actions_classPrivateFieldGet(this, p, "f");
        }
        set banipDivider (a) {
          pv_actions_classPrivateFieldSet(this, p, a, "f");
        }
        get banip() {
          return pv_actions_classPrivateFieldGet(this, u, "f");
        }
        set banip (a) {
          pv_actions_classPrivateFieldSet(this, u, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_actions_runInitializers(this, R), pv_actions_runInitializers(this, B, undefined))), t.set(this, pv_actions_runInitializers(this, q, undefined)), i.set(this, pv_actions_runInitializers(this, U, undefined)), o.set(this, pv_actions_runInitializers(this, W, undefined)), s.set(this, pv_actions_runInitializers(this, G, undefined)), n.set(this, pv_actions_runInitializers(this, K, undefined)), r.set(this, pv_actions_runInitializers(this, V, undefined)), f.set(this, pv_actions_runInitializers(this, H, undefined)), l.set(this, pv_actions_runInitializers(this, Y, undefined)), c.set(this, pv_actions_runInitializers(this, X, undefined)), d.set(this, pv_actions_runInitializers(this, $, undefined)), p.set(this, pv_actions_runInitializers(this, J, undefined)), u.set(this, pv_actions_runInitializers(this, Z, undefined)), this.innerHTML = pv_actions, services_client.once("leave", this.onLeave);
        }
        onOpen(a) {
          this.contextId = a, this.mod.addEventListener("click", this.onMod), this.unmod.addEventListener("click", this.onUnmod), this.host.addEventListener("click", this.onHost), this.muteNotes.addEventListener("click", this.onMuteNotes), this.unmuteNotes.addEventListener("click", this.onUnmuteNotes), this.muteChat.addEventListener("click", this.onMuteChat), this.unmuteChat.addEventListener("click", this.onUnmuteChat), this.kick.addEventListener("click", this.onKick), this.ban.addEventListener("click", this.onBan), this.banip.addEventListener("click", this.onBanIP, {once: true}), this.userid.textContent = this.contextId, a === services_client.room.host || services_client.me.id !== services_client.room.host && !services_client.me.tags.includes("DEV") || "Lobby" === services_client.room.id ? this.host.style.display = "none" : this.host.style.display = "flex", services_client.me.tags.includes("DEV") ? (this.banipDivider.style.display = "block", this.banip.style.display = "flex", services_client.get(a).tags.includes("MOD") ? (this.mod.style.display = "none", this.unmod.style.display = "flex") : (this.mod.style.display = "flex", this.unmod.style.display = "none")) : (this.banipDivider.style.display = "none", this.banip.style.display = "none", this.mod.style.display = "none", this.unmod.style.display = "none"), services_client.get(a).muted ? (this.unmuteNotes.style.display = "flex", this.muteNotes.style.display = "none") : (this.unmuteNotes.style.display = "none", this.muteNotes.style.display = "flex"), services_client.get(a).mutedChat ? (this.unmuteChat.style.display = "flex", this.muteChat.style.display = "none") : (this.unmuteChat.style.display = "none", this.muteChat.style.display = "flex");
          const e = services_client.me.id === services_client.room.host, t = a => a.tags.includes("DEV"), i = a => a.tags.includes("MOD") || t(a);
          t(services_client.me) || i(services_client.me) && !i(services_client.get(a)) || e && i(services_client.me) && !t(services_client.get(a)) || e && !i(services_client.me) && !i(services_client.get(a)) ? (this.kickbanDivider.style.display = "block", this.kick.style.display = "flex", this.ban.style.display = "flex") : (this.kickbanDivider.style.display = "none", this.kick.style.display = "none", this.ban.style.display = "none");
        }
        onClose() {
          this.muteNotes.removeEventListener("click", this.onMuteNotes), this.kick.removeEventListener("click", this.onKick), services_client.off("leave", this.onLeave);
        }
        onMod() {
          services_client.mod(this.contextId), this.mod.style.display = "none", this.unmod.style.display = "flex";
        }
        onUnmod() {
          services_client.unmod(this.contextId), this.mod.style.display = "flex", this.unmod.style.display = "none";
        }
        onHost() {
          services_client.host(this.contextId), this.close();
        }
        onMuteNotes() {
          var a;
          services_client.mute(this.contextId), setTimeout(() => services_keyboard.releaseAllNotesFrom(this.contextId), 250), this.unmuteNotes.style.display = "flex", this.muteNotes.style.display = "none", null === (a = document.querySelector("pv-users")) || undefined === a || a.initialize();
        }
        onUnmuteNotes() {
          var a;
          services_client.unmute(this.contextId), this.unmuteNotes.style.display = "none", this.muteNotes.style.display = "flex", null === (a = document.querySelector("pv-users")) || undefined === a || a.initialize();
        }
        onMuteChat() {
          var a, e;
          services_client.get(this.contextId).mutedChat = true, this.unmuteChat.style.display = "flex", this.muteChat.style.display = "none", null === (a = document.querySelector("pv-users")) || undefined === a || a.initialize(), null === (e = document.querySelector("pv-chat")) || undefined === e || e.updateMutedMessages();
        }
        onUnmuteChat() {
          var a, e;
          services_client.get(this.contextId).mutedChat = false, this.unmuteChat.style.display = "none", this.muteChat.style.display = "flex", null === (a = document.querySelector("pv-users")) || undefined === a || a.initialize(), null === (e = document.querySelector("pv-chat")) || undefined === e || e.updateMutedMessages();
        }
        onKick() {
          services_client.kick(this.contextId), this.close();
        }
        onBan() {
          PopupManager.open(Modal.BAN, null, this.contextId), this.close();
        }
        onBanIP() {
          this.banip.querySelector("span").textContent = "Are you sure?", this.banip.addEventListener("click", () => {
            services_client.ipban(this.contextId), this.close();
          }, {once: true});
        }
        onLeave(a) {
          a.id === this.contextId && this.isOpen() && this.close();
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, o = new WeakMap, s = new WeakMap, n = new WeakMap, r = new WeakMap, f = new WeakMap, l = new WeakMap, c = new WeakMap, d = new WeakMap, p = new WeakMap, u = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = F[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        v = [decorators_child], h = [decorators_child], m = [decorators_child], g = [decorators_child], _ = [decorators_child], b = [decorators_child], y = [decorators_child], w = [decorators_child], k = [decorators_child], x = [decorators_child], S = [decorators_child], E = [decorators_child], P = [decorators_child], T = [bind], I = [bind], C = [bind], A = [bind], M = [bind], O = [bind], N = [bind], L = [bind], D = [bind], j = [bind], z = [bind], pv_actions_esDecorate(a, null, v, {kind: "accessor", name: "userid", static: false, private: false, access: {has: a => "userid" in a, get: a => a.userid, set: (a, e) => {
          a.userid = e;
        }}, metadata: t}, B, R), pv_actions_esDecorate(a, null, h, {kind: "accessor", name: "mod", static: false, private: false, access: {has: a => "mod" in a, get: a => a.mod, set: (a, e) => {
          a.mod = e;
        }}, metadata: t}, q, R), pv_actions_esDecorate(a, null, m, {kind: "accessor", name: "unmod", static: false, private: false, access: {has: a => "unmod" in a, get: a => a.unmod, set: (a, e) => {
          a.unmod = e;
        }}, metadata: t}, U, R), pv_actions_esDecorate(a, null, g, {kind: "accessor", name: "muteNotes", static: false, private: false, access: {has: a => "muteNotes" in a, get: a => a.muteNotes, set: (a, e) => {
          a.muteNotes = e;
        }}, metadata: t}, W, R), pv_actions_esDecorate(a, null, _, {kind: "accessor", name: "unmuteNotes", static: false, private: false, access: {has: a => "unmuteNotes" in a, get: a => a.unmuteNotes, set: (a, e) => {
          a.unmuteNotes = e;
        }}, metadata: t}, G, R), pv_actions_esDecorate(a, null, b, {kind: "accessor", name: "muteChat", static: false, private: false, access: {has: a => "muteChat" in a, get: a => a.muteChat, set: (a, e) => {
          a.muteChat = e;
        }}, metadata: t}, K, R), pv_actions_esDecorate(a, null, y, {kind: "accessor", name: "unmuteChat", static: false, private: false, access: {has: a => "unmuteChat" in a, get: a => a.unmuteChat, set: (a, e) => {
          a.unmuteChat = e;
        }}, metadata: t}, V, R), pv_actions_esDecorate(a, null, w, {kind: "accessor", name: "host", static: false, private: false, access: {has: a => "host" in a, get: a => a.host, set: (a, e) => {
          a.host = e;
        }}, metadata: t}, H, R), pv_actions_esDecorate(a, null, k, {kind: "accessor", name: "kickbanDivider", static: false, private: false, access: {has: a => "kickbanDivider" in a, get: a => a.kickbanDivider, set: (a, e) => {
          a.kickbanDivider = e;
        }}, metadata: t}, Y, R), pv_actions_esDecorate(a, null, x, {kind: "accessor", name: "kick", static: false, private: false, access: {has: a => "kick" in a, get: a => a.kick, set: (a, e) => {
          a.kick = e;
        }}, metadata: t}, X, R), pv_actions_esDecorate(a, null, S, {kind: "accessor", name: "ban", static: false, private: false, access: {has: a => "ban" in a, get: a => a.ban, set: (a, e) => {
          a.ban = e;
        }}, metadata: t}, $, R), pv_actions_esDecorate(a, null, E, {kind: "accessor", name: "banipDivider", static: false, private: false, access: {has: a => "banipDivider" in a, get: a => a.banipDivider, set: (a, e) => {
          a.banipDivider = e;
        }}, metadata: t}, J, R), pv_actions_esDecorate(a, null, P, {kind: "accessor", name: "banip", static: false, private: false, access: {has: a => "banip" in a, get: a => a.banip, set: (a, e) => {
          a.banip = e;
        }}, metadata: t}, Z, R), pv_actions_esDecorate(a, null, T, {kind: "method", name: "onMod", static: false, private: false, access: {has: a => "onMod" in a, get: a => a.onMod}, metadata: t}, null, R), pv_actions_esDecorate(a, null, I, {kind: "method", name: "onUnmod", static: false, private: false, access: {has: a => "onUnmod" in a, get: a => a.onUnmod}, metadata: t}, null, R), pv_actions_esDecorate(a, null, C, {kind: "method", name: "onHost", static: false, private: false, access: {has: a => "onHost" in a, get: a => a.onHost}, metadata: t}, null, R), pv_actions_esDecorate(a, null, A, {kind: "method", name: "onMuteNotes", static: false, private: false, access: {has: a => "onMuteNotes" in a, get: a => a.onMuteNotes}, metadata: t}, null, R), pv_actions_esDecorate(a, null, M, {kind: "method", name: "onUnmuteNotes", static: false, private: false, access: {has: a => "onUnmuteNotes" in a, get: a => a.onUnmuteNotes}, metadata: t}, null, R), pv_actions_esDecorate(a, null, O, {kind: "method", name: "onMuteChat", static: false, private: false, access: {has: a => "onMuteChat" in a, get: a => a.onMuteChat}, metadata: t}, null, R), pv_actions_esDecorate(a, null, N, {kind: "method", name: "onUnmuteChat", static: false, private: false, access: {has: a => "onUnmuteChat" in a, get: a => a.onUnmuteChat}, metadata: t}, null, R), pv_actions_esDecorate(a, null, L, {kind: "method", name: "onKick", static: false, private: false, access: {has: a => "onKick" in a, get: a => a.onKick}, metadata: t}, null, R), pv_actions_esDecorate(a, null, D, {kind: "method", name: "onBan", static: false, private: false, access: {has: a => "onBan" in a, get: a => a.onBan}, metadata: t}, null, R), pv_actions_esDecorate(a, null, j, {kind: "method", name: "onBanIP", static: false, private: false, access: {has: a => "onBanIP" in a, get: a => a.onBanIP}, metadata: t}, null, R), pv_actions_esDecorate(a, null, z, {kind: "method", name: "onLeave", static: false, private: false, access: {has: a => "onLeave" in a, get: a => a.onLeave}, metadata: t}, null, R), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_popups_pv_actions_pv_actions = PvActions;
    customElements.define("pv-actions", PvActions);
    var pv_devices_code = '<dialog class="popup" right-edge> <div class="content"> <table> <thead> <tr> <th>Device</th> <th>In</th> <th>Out</th> </tr> </thead> <tbody class="devices"></tbody> </table> <div class="field"> <label>Velocity curve</label> <select class="velocity-curve"> <option value="harder">Harder</option> <option value="hard">Hard</option> <option value="linear">Default</option> <option value="soft">Soft</option> <option value="softer">Softer</option> </select> </div> </div> </dialog> ';
    const pv_devices = pv_devices_code;
    var pv_devices_pv_devices = __webpack_require__(6138), pv_devices_options = {};
    pv_devices_options.styleTagTransform = styleTagTransform_default(), pv_devices_options.setAttributes = setAttributesWithoutAttributes_default(), pv_devices_options.insert = insertBySelector_default().bind(null, "head"), pv_devices_options.domAPI = styleDomAPI_default(), pv_devices_options.insertStyleElement = insertStyleElement_default();
    var pv_devices_update = injectStylesIntoStyleTag_default()(pv_devices_pv_devices.A, pv_devices_options);
    const popups_pv_devices_pv_devices = pv_devices_pv_devices.A && pv_devices_pv_devices.A.locals ? pv_devices_pv_devices.A.locals : undefined;
    var pv_devices_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_devices_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_devices_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_devices_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvDevices = (() => {
      var a, e, t;
      let i, o, s, n = components_pv_popup_pv_popup, r = [], f = [], l = [];
      return a = class extends n {
        get devices() {
          return pv_devices_classPrivateFieldGet(this, e, "f");
        }
        set devices (a) {
          pv_devices_classPrivateFieldSet(this, e, a, "f");
        }
        get velocityCurve() {
          return pv_devices_classPrivateFieldGet(this, t, "f");
        }
        set velocityCurve (a) {
          pv_devices_classPrivateFieldSet(this, t, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_devices_runInitializers(this, r), pv_devices_runInitializers(this, f, undefined))), t.set(this, pv_devices_runInitializers(this, l, undefined)), this.innerHTML = pv_devices;
        }
        connectedCallback() {
          super.connectedCallback(), services_midi.on("update", this.updateDevices), this.updateDevices(), this.velocityCurve.value = settingsmanager.get("velocity-curve"), settingsmanager.on("velocity-curve", a => this.velocityCurve.value = a), this.velocityCurve.addEventListener("input", () => {
            settingsmanager.set("velocity-curve", this.velocityCurve.value);
          });
        }
        disconnectedCallback() {
          services_midi.off("update", this.updateDevices);
        }
        updateDevices() {
          this.devices.innerHTML = "";
          for (const a of services_midi.devices.values()) {
            const e = document.createElement("tr"), t = document.createElement("td"), i = document.createElement("td"), o = document.createElement("td");
            if (t.textContent = a.name, t.title = a.name, e.append(t), a.in) {
              const e = document.createElement("div");
              e.classList.add("field");
              const t = document.createElement("label");
              t.classList.add("toggle");
              const o = document.createElement("input");
              o.type = "checkbox", o.checked = services_midi.isInputEnabled(a.in.id);
              const s = document.createElement("span");
              s.classList.add("slider"), s.addEventListener("click", () => {
                services_midi.isInputEnabled(a.in.id) ? (services_midi.disableInput(a.in.id), services_keyboard.releaseAllMyNotes(), o.checked = true) : (services_midi.enableInput(a.in.id), o.checked = false);
              }), t.append(o), t.append(s), e.append(t), i.append(e);
            }
            if (a.out) {
              const e = document.createElement("div");
              e.classList.add("field");
              const t = document.createElement("label");
              t.classList.add("toggle");
              const i = document.createElement("input");
              i.type = "checkbox", i.checked = services_midi.isOutputEnabled(a.out.id);
              const s = document.createElement("span");
              s.classList.add("slider"), s.addEventListener("click", () => {
                services_midi.isOutputEnabled(a.out.id) ? (services_midi.disableOutput(a.out.id), services_keyboard.releaseAllMyNotes(), i.checked = true) : (services_midi.enableOutput(a.out.id), i.checked = false);
              }), t.append(i), t.append(s), e.append(t), o.append(e);
            }
            e.append(i), e.append(o), this.devices.append(e);
          }
          if (0 === services_midi.devices.size) {
            const a = document.createElement("tr"), e = document.createElement("td"), t = document.createElement("td"), i = document.createElement("td");
            e.textContent = "None", e.classList.add("muted"), a.append(e);
            {
              const a = document.createElement("div");
              a.classList.add("field");
              const e = document.createElement("label");
              e.classList.add("toggle");
              const i = document.createElement("input");
              i.type = "checkbox", i.checked = false, i.disabled = true;
              const o = document.createElement("span");
              o.classList.add("slider"), e.append(i), e.append(o), a.append(e), t.append(a);
            }
            {
              const a = document.createElement("div");
              a.classList.add("field");
              const e = document.createElement("label");
              e.classList.add("toggle");
              const t = document.createElement("input");
              t.type = "checkbox", t.checked = false, t.disabled = true;
              const o = document.createElement("span");
              o.classList.add("slider"), e.append(t), e.append(o), a.append(e), i.append(a);
            }
            a.append(t), a.append(i), this.devices.append(a);
          }
        }
      }, e = new WeakMap, t = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = n[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        i = [decorators_child], o = [decorators_child], s = [bind], pv_devices_esDecorate(a, null, i, {kind: "accessor", name: "devices", static: false, private: false, access: {has: a => "devices" in a, get: a => a.devices, set: (a, e) => {
          a.devices = e;
        }}, metadata: t}, f, r), pv_devices_esDecorate(a, null, o, {kind: "accessor", name: "velocityCurve", static: false, private: false, access: {has: a => "velocityCurve" in a, get: a => a.velocityCurve, set: (a, e) => {
          a.velocityCurve = e;
        }}, metadata: t}, l, r), pv_devices_esDecorate(a, null, s, {kind: "method", name: "updateDevices", static: false, private: false, access: {has: a => "updateDevices" in a, get: a => a.updateDevices}, metadata: t}, null, r), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_popups_pv_devices_pv_devices = PvDevices;
    customElements.define("pv-devices", PvDevices);
    var pv_message_code = '<dialog class="popup" modal blocking> <div class="header"> <div class="title"><i class="fas fa-info-circle"></i> Information</div> <div class="x"><i class="fas fa-xmark"></i></div> </div> <div class="content"> <div class="message"></div> <div class="buttons"> <button class="close-button">Close</button> </div> </div> </dialog> ';
    const pv_message = pv_message_code;
    var pv_message_pv_message = __webpack_require__(9114), pv_message_options = {};
    pv_message_options.styleTagTransform = styleTagTransform_default(), pv_message_options.setAttributes = setAttributesWithoutAttributes_default(), pv_message_options.insert = insertBySelector_default().bind(null, "head"), pv_message_options.domAPI = styleDomAPI_default(), pv_message_options.insertStyleElement = insertStyleElement_default();
    var pv_message_update = injectStylesIntoStyleTag_default()(pv_message_pv_message.A, pv_message_options);
    const popups_pv_message_pv_message = pv_message_pv_message.A && pv_message_pv_message.A.locals ? pv_message_pv_message.A.locals : undefined;
    var pv_message_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_message_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_message_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_message_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvMessage = (() => {
      var a, e, t;
      let i, o, s = components_pv_popup_pv_popup, n = [], r = [], f = [];
      return a = class extends s {
        get message() {
          return pv_message_classPrivateFieldGet(this, e, "f");
        }
        set message (a) {
          pv_message_classPrivateFieldSet(this, e, a, "f");
        }
        get closeButton() {
          return pv_message_classPrivateFieldGet(this, t, "f");
        }
        set closeButton (a) {
          pv_message_classPrivateFieldSet(this, t, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_message_runInitializers(this, n), pv_message_runInitializers(this, r, undefined))), t.set(this, pv_message_runInitializers(this, f, undefined)), this.innerHTML = pv_message;
        }
        onOpen(a) {
          this.message.textContent = a, this.closeButton.addEventListener("click", this.close);
        }
      }, e = new WeakMap, t = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = s[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        i = [decorators_child], o = [decorators_child], pv_message_esDecorate(a, null, i, {kind: "accessor", name: "message", static: false, private: false, access: {has: a => "message" in a, get: a => a.message, set: (a, e) => {
          a.message = e;
        }}, metadata: t}, r, n), pv_message_esDecorate(a, null, o, {kind: "accessor", name: "closeButton", static: false, private: false, access: {has: a => "closeButton" in a, get: a => a.closeButton, set: (a, e) => {
          a.closeButton = e;
        }}, metadata: t}, f, n), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_popups_pv_message_pv_message = PvMessage;
    customElements.define("pv-message", PvMessage);
    var pv_profile_code = '<dialog class="popup" modal> <div class="header"> <div class="title">My profile</div> <div class="x"><i class="fas fa-xmark"></i></div> </div> <div class="content"> <div class="grid"> <div class="field a"> <label for="input-username">Name</label> <input type="text" class="input-username" placeholder="Someone" spellcheck="false" maxlength="24"/> </div> <div class="field b"> <label for="input-username">ID</label> <input type="text" class="input-id" placeholder="XXXXXXXX" spellcheck="false" maxlength="8" disabled="disabled"/> </div> <div class="field c"> <label for="input-username">Color</label> <input type="text" class="input-color-text" placeholder="#012345" spellcheck="false" maxlength="7"/> <input type="color" class="input-color"/> </div> </div> <div class="buttons"> <button class="button-save">Save</button> </div> </div> </dialog> ';
    const pv_profile = pv_profile_code;
    var pv_profile_pv_profile = __webpack_require__(8394), pv_profile_options = {};
    pv_profile_options.styleTagTransform = styleTagTransform_default(), pv_profile_options.setAttributes = setAttributesWithoutAttributes_default(), pv_profile_options.insert = insertBySelector_default().bind(null, "head"), pv_profile_options.domAPI = styleDomAPI_default(), pv_profile_options.insertStyleElement = insertStyleElement_default();
    var pv_profile_update = injectStylesIntoStyleTag_default()(pv_profile_pv_profile.A, pv_profile_options);
    const popups_pv_profile_pv_profile = pv_profile_pv_profile.A && pv_profile_pv_profile.A.locals ? pv_profile_pv_profile.A.locals : undefined;
    var pv_profile_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_profile_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_profile_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_profile_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvProfile = (() => {
      var a, e, t, i, o, s;
      let n, r, f, l, c, d, p, u, v, h, m = components_pv_popup_pv_popup, g = [], _ = [], b = [], y = [], w = [], k = [];
      return a = class extends m {
        get inputId() {
          return pv_profile_classPrivateFieldGet(this, e, "f");
        }
        set inputId (a) {
          pv_profile_classPrivateFieldSet(this, e, a, "f");
        }
        get inputUsername() {
          return pv_profile_classPrivateFieldGet(this, t, "f");
        }
        set inputUsername (a) {
          pv_profile_classPrivateFieldSet(this, t, a, "f");
        }
        get inputColorText() {
          return pv_profile_classPrivateFieldGet(this, i, "f");
        }
        set inputColorText (a) {
          pv_profile_classPrivateFieldSet(this, i, a, "f");
        }
        get inputColor() {
          return pv_profile_classPrivateFieldGet(this, o, "f");
        }
        set inputColor (a) {
          pv_profile_classPrivateFieldSet(this, o, a, "f");
        }
        get buttonSave() {
          return pv_profile_classPrivateFieldGet(this, s, "f");
        }
        set buttonSave (a) {
          pv_profile_classPrivateFieldSet(this, s, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_profile_runInitializers(this, g), pv_profile_runInitializers(this, _, undefined))), t.set(this, pv_profile_runInitializers(this, b, undefined)), i.set(this, pv_profile_runInitializers(this, y, undefined)), o.set(this, pv_profile_runInitializers(this, w, undefined)), s.set(this, pv_profile_runInitializers(this, k, undefined)), this.innerHTML = pv_profile;
        }
        onOpen() {
          this.inputId.value = services_client.me.id, this.inputUsername.value = services_client.me.name, this.inputColor.value = services_client.me.color, this.inputColorText.value = services_client.me.color.toUpperCase(), this.inputUsername.focus();
        }
        connectedCallback() {
          super.connectedCallback(), this.buttonSave.addEventListener("click", this.submit), this.inputUsername.addEventListener("input", this.handleInput), this.inputUsername.addEventListener("keydown", this.handleKeyDown), this.inputColorText.addEventListener("input", this.handleColorTextInput), this.inputColorText.addEventListener("keydown", this.handleKeyDown), this.inputColor.addEventListener("input", this.handleColorInput);
        }
        handleColorTextInput() {
          null !== this.inputColorText.value.match(/^#[0-9A-F]{6}$/i) ? this.inputColor.value = this.inputColorText.value : this.inputColor.value = "#000000", this.buttonSave.disabled = !this.isValid();
        }
        handleColorInput() {
          this.inputColorText.value = this.inputColor.value.toUpperCase(), this.buttonSave.disabled = !this.isValid();
        }
        handleInput() {
          this.buttonSave.disabled = !this.isValid();
        }
        handleKeyDown(a) {
          "Enter" === a.key && this.isValid() && this.submit();
        }
        submit() {
          this.close(), services_client.profile(this.inputUsername.value, this.inputColor.value);
        }
        isValid() {
          return this.inputUsername.value.trim().length >= 2 && this.inputUsername.value.trim().length <= 24 && null !== this.inputColorText.value.match(/^#[0-9A-F]{6}$/i);
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, o = new WeakMap, s = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = m[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        n = [decorators_child], r = [decorators_child], f = [decorators_child], l = [decorators_child], c = [decorators_child], d = [bind], p = [bind], u = [bind], v = [bind], h = [bind], pv_profile_esDecorate(a, null, n, {kind: "accessor", name: "inputId", static: false, private: false, access: {has: a => "inputId" in a, get: a => a.inputId, set: (a, e) => {
          a.inputId = e;
        }}, metadata: t}, _, g), pv_profile_esDecorate(a, null, r, {kind: "accessor", name: "inputUsername", static: false, private: false, access: {has: a => "inputUsername" in a, get: a => a.inputUsername, set: (a, e) => {
          a.inputUsername = e;
        }}, metadata: t}, b, g), pv_profile_esDecorate(a, null, f, {kind: "accessor", name: "inputColorText", static: false, private: false, access: {has: a => "inputColorText" in a, get: a => a.inputColorText, set: (a, e) => {
          a.inputColorText = e;
        }}, metadata: t}, y, g), pv_profile_esDecorate(a, null, l, {kind: "accessor", name: "inputColor", static: false, private: false, access: {has: a => "inputColor" in a, get: a => a.inputColor, set: (a, e) => {
          a.inputColor = e;
        }}, metadata: t}, w, g), pv_profile_esDecorate(a, null, c, {kind: "accessor", name: "buttonSave", static: false, private: false, access: {has: a => "buttonSave" in a, get: a => a.buttonSave, set: (a, e) => {
          a.buttonSave = e;
        }}, metadata: t}, k, g), pv_profile_esDecorate(a, null, d, {kind: "method", name: "handleColorTextInput", static: false, private: false, access: {has: a => "handleColorTextInput" in a, get: a => a.handleColorTextInput}, metadata: t}, null, g), pv_profile_esDecorate(a, null, p, {kind: "method", name: "handleColorInput", static: false, private: false, access: {has: a => "handleColorInput" in a, get: a => a.handleColorInput}, metadata: t}, null, g), pv_profile_esDecorate(a, null, u, {kind: "method", name: "handleInput", static: false, private: false, access: {has: a => "handleInput" in a, get: a => a.handleInput}, metadata: t}, null, g), pv_profile_esDecorate(a, null, v, {kind: "method", name: "handleKeyDown", static: false, private: false, access: {has: a => "handleKeyDown" in a, get: a => a.handleKeyDown}, metadata: t}, null, g), pv_profile_esDecorate(a, null, h, {kind: "method", name: "submit", static: false, private: false, access: {has: a => "submit" in a, get: a => a.submit}, metadata: t}, null, g), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_popups_pv_profile_pv_profile = PvProfile;
    customElements.define("pv-profile", PvProfile);
    var pv_sounds_code = '<dialog class="popup" left-edge> <div class="content"> <div value="grand">Grand Piano</div> <div value="salamander">Salamander Piano</div> <div value="soft">Soft Piano</div> <div value="electric">Electric Piano</div> </div> </dialog> ';
    const pv_sounds = pv_sounds_code;
    var pv_sounds_pv_sounds = __webpack_require__(5500), pv_sounds_options = {};
    pv_sounds_options.styleTagTransform = styleTagTransform_default(), pv_sounds_options.setAttributes = setAttributesWithoutAttributes_default(), pv_sounds_options.insert = insertBySelector_default().bind(null, "head"), pv_sounds_options.domAPI = styleDomAPI_default(), pv_sounds_options.insertStyleElement = insertStyleElement_default();
    var pv_sounds_update = injectStylesIntoStyleTag_default()(pv_sounds_pv_sounds.A, pv_sounds_options);
    const popups_pv_sounds_pv_sounds = pv_sounds_pv_sounds.A && pv_sounds_pv_sounds.A.locals ? pv_sounds_pv_sounds.A.locals : undefined;
    var pv_sounds_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_sounds_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_sounds_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_sounds_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvSounds = (() => {
      var a, e;
      let t, i = components_pv_popup_pv_popup, o = [], s = [];
      return a = class extends i {
        get content() {
          return pv_sounds_classPrivateFieldGet(this, e, "f");
        }
        set content (a) {
          pv_sounds_classPrivateFieldSet(this, e, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_sounds_runInitializers(this, o), pv_sounds_runInitializers(this, s, undefined))), this.innerHTML = pv_sounds;
        }
        onOpen(a) {
          const e = settingsmanager.get("sound");
          e && this.querySelector(`[value=${e}]`).setAttribute("selected", ""), this.content.addEventListener("click", a => {
            const e = a.target;
            "DIV" === e.tagName && e.getAttribute("value") && (settingsmanager.set("sound", e.getAttribute("value") || ""), this.close());
          });
        }
      }, e = new WeakMap, (() => {
        var e;
        const n = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = i[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        t = [decorators_child], pv_sounds_esDecorate(a, null, t, {kind: "accessor", name: "content", static: false, private: false, access: {has: a => "content" in a, get: a => a.content, set: (a, e) => {
          a.content = e;
        }}, metadata: n}, s, o), n && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: n});
      })(), a;
    })();
    const components_popups_pv_sounds_pv_sounds = PvSounds;
    customElements.define("pv-sounds", PvSounds);
    var pv_rooms_code = '<dialog class="popup" left-edge> <div class="content"></div> </dialog> ';
    const pv_rooms = pv_rooms_code;
    var pv_rooms_pv_rooms = __webpack_require__(5760), pv_rooms_options = {};
    pv_rooms_options.styleTagTransform = styleTagTransform_default(), pv_rooms_options.setAttributes = setAttributesWithoutAttributes_default(), pv_rooms_options.insert = insertBySelector_default().bind(null, "head"), pv_rooms_options.domAPI = styleDomAPI_default(), pv_rooms_options.insertStyleElement = insertStyleElement_default();
    var pv_rooms_update = injectStylesIntoStyleTag_default()(pv_rooms_pv_rooms.A, pv_rooms_options);
    const popups_pv_rooms_pv_rooms = pv_rooms_pv_rooms.A && pv_rooms_pv_rooms.A.locals ? pv_rooms_pv_rooms.A.locals : undefined;
    var pv_rooms_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_rooms_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_rooms_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_rooms_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvRooms = (() => {
      var a, e;
      let t, i = components_pv_popup_pv_popup, o = [], s = [];
      return a = class extends i {
        get content() {
          return pv_rooms_classPrivateFieldGet(this, e, "f");
        }
        set content (a) {
          pv_rooms_classPrivateFieldSet(this, e, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_rooms_runInitializers(this, o), pv_rooms_runInitializers(this, s, undefined))), this.innerHTML = pv_rooms;
        }
        onOpen(a) {
          this.updateRooms(a, true), this.content.addEventListener("click", a => {
            const e = a.target;
            "DIV" === e.tagName && (e.getAttribute("value") ? services_client.enter(e.getAttribute("value")) : PopupManager.open(Modal.NEW_ROOM), this.close());
          });
        }
        updateRooms(a, e = false) {
          this.content.innerHTML = a.map(a => `\n          <div value="${a.id}" class="${e ? "animate" : ""} ${services_client.room.id === a.id ? "selected" : ""} ${!!a.id.match(/^Lobby(?: [2-9])?$|^Backrooms$/) ? "lobby" : ""}">\n            <span class="name">${a.id}</span>\n            <span class="count"><i class="fas fa-user-group"></i> ${a.count}</span>\n          </div>`).reverse().join(""), this.content.innerHTML += `\n      <div class="${e ? "animate" : ""}">\n          <span class="name">New room...</span>\n      </div>`;
        }
      }, e = new WeakMap, (() => {
        var e;
        const n = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = i[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        t = [decorators_child], pv_rooms_esDecorate(a, null, t, {kind: "accessor", name: "content", static: false, private: false, access: {has: a => "content" in a, get: a => a.content, set: (a, e) => {
          a.content = e;
        }}, metadata: n}, s, o), n && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: n});
      })(), a;
    })();
    const components_popups_pv_rooms_pv_rooms = PvRooms;
    customElements.define("pv-rooms", PvRooms);
    var pv_more_code = '<dialog class="popup"> <div class="content"> <a class="link" href="https://discord.gg/nDE7GK7Bru" target="_blank"> Discord <i class="fas fa-arrow-up-right-from-square"></i> </a> <a class="link" href="https://reddit.com/r/pianoverse" target="_blank"> Reddit <i class="fas fa-arrow-up-right-from-square"></i> </a> <a class="link" href="https://patreon.com/charledev" target="_blank"> Patreon <i class="fas fa-arrow-up-right-from-square"></i> </a> <a class="link" href="https://github.com/charleprr" target="_blank"> GitHub <i class="fas fa-arrow-up-right-from-square"></i> </a> </div> </dialog> ';
    const pv_more = pv_more_code;
    var pv_more_pv_more = __webpack_require__(7108), pv_more_options = {};
    pv_more_options.styleTagTransform = styleTagTransform_default(), pv_more_options.setAttributes = setAttributesWithoutAttributes_default(), pv_more_options.insert = insertBySelector_default().bind(null, "head"), pv_more_options.domAPI = styleDomAPI_default(), pv_more_options.insertStyleElement = insertStyleElement_default();
    var pv_more_update = injectStylesIntoStyleTag_default()(pv_more_pv_more.A, pv_more_options);
    const popups_pv_more_pv_more = pv_more_pv_more.A && pv_more_pv_more.A.locals ? pv_more_pv_more.A.locals : undefined;
    class PvMore extends components_pv_popup_pv_popup {
      constructor() {
        super(), this.innerHTML = pv_more;
      }
    }
    customElements.define("pv-more", PvMore);
    const attr = (a, e) => (pv_component.observedAttributes.push(e.name.toString()), {get() {
      return this.getAttribute(e.name);
    }, set(a) {
      this.setAttribute(e.name.toString(), a);
    }}), decorators_attr = attr;
    var pv_ban_code = '<dialog class="popup" modal> <div class="header"> <div class="title"><i class="fas fa-ban"></i> Ban player</div> <div class="x"><i class="fas fa-xmark"></i></div> </div> <div class="content"> Are you sure you want to ban this player from the room? <div class="buttons"> <select class="duration"> <option value="5">5 minutes</option> <option value="20">20 minutes</option> <option value="60">1 hour</option> <option value="120">2 hours</option> <option value="360">6 hours</option> <option value="720">12 hours</option> </select> <button class="submit">Ban</button> </div> </div> </dialog> ';
    const pv_ban = pv_ban_code;
    var pv_ban_pv_ban = __webpack_require__(8138), pv_ban_options = {};
    pv_ban_options.styleTagTransform = styleTagTransform_default(), pv_ban_options.setAttributes = setAttributesWithoutAttributes_default(), pv_ban_options.insert = insertBySelector_default().bind(null, "head"), pv_ban_options.domAPI = styleDomAPI_default(), pv_ban_options.insertStyleElement = insertStyleElement_default();
    var pv_ban_update = injectStylesIntoStyleTag_default()(pv_ban_pv_ban.A, pv_ban_options);
    const popups_pv_ban_pv_ban = pv_ban_pv_ban.A && pv_ban_pv_ban.A.locals ? pv_ban_pv_ban.A.locals : undefined;
    var pv_ban_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_ban_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_ban_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_ban_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvBan = (() => {
      var a, e, t, i;
      let o, s, n, r = components_pv_popup_pv_popup, f = [], l = [], c = [], d = [];
      return a = class extends r {
        get duration() {
          return pv_ban_classPrivateFieldGet(this, e, "f");
        }
        set duration (a) {
          pv_ban_classPrivateFieldSet(this, e, a, "f");
        }
        get submit() {
          return pv_ban_classPrivateFieldGet(this, t, "f");
        }
        set submit (a) {
          pv_ban_classPrivateFieldSet(this, t, a, "f");
        }
        get userId() {
          return pv_ban_classPrivateFieldGet(this, i, "f");
        }
        set userId (a) {
          pv_ban_classPrivateFieldSet(this, i, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_ban_runInitializers(this, f), pv_ban_runInitializers(this, l, undefined))), t.set(this, pv_ban_runInitializers(this, c, undefined)), i.set(this, pv_ban_runInitializers(this, d, undefined)), this.innerHTML = pv_ban;
        }
        connectedCallback() {
          super.connectedCallback(), this.duration.value = "60", this.submit.addEventListener("click", () => {
            const a = Number(this.duration.value);
            services_client.ban(this.userId, a), this.close();
          });
        }
        onOpen(a) {
          this.userId = a;
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = r[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        o = [decorators_child], s = [decorators_child], n = [decorators_attr], pv_ban_esDecorate(a, null, o, {kind: "accessor", name: "duration", static: false, private: false, access: {has: a => "duration" in a, get: a => a.duration, set: (a, e) => {
          a.duration = e;
        }}, metadata: t}, l, f), pv_ban_esDecorate(a, null, s, {kind: "accessor", name: "submit", static: false, private: false, access: {has: a => "submit" in a, get: a => a.submit, set: (a, e) => {
          a.submit = e;
        }}, metadata: t}, c, f), pv_ban_esDecorate(a, null, n, {kind: "accessor", name: "userId", static: false, private: false, access: {has: a => "userId" in a, get: a => a.userId, set: (a, e) => {
          a.userId = e;
        }}, metadata: t}, d, f), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_popups_pv_ban_pv_ban = PvBan;
    var Modal, Dialog;
    customElements.define("pv-ban", PvBan), function (a) {
      a.PROFILE = "pv-profile", a.SETTINGS = "pv-settings", a.NEW_ROOM = "pv-new-room", a.MESSAGE = "pv-message", a.BAN = "pv-ban";
    }(Modal || (Modal = {})), function (a) {
      a.ACTIONS = "pv-actions", a.DEVICES = "pv-devices", a.TRANSPOSE = "pv-transpose", a.VELOCITY = "pv-velocity", a.SOUNDS = "pv-sounds", a.ROOMS = "pv-rooms", a.MORE = "pv-more";
    }(Dialog || (Dialog = {}));
    class PopupManager {
      static open(a, ...e) {
        let t;
        if (t = document.querySelector(a), t && !t.querySelector("dialog").hasAttribute("closing")) return t.close(), t;
        switch (a) {
          case Modal.BAN:
            t = new components_popups_pv_ban_pv_ban;
            break;
          case Modal.PROFILE:
            t = new components_popups_pv_profile_pv_profile;
            break;
          case Modal.SETTINGS:
            t = new components_popups_pv_settings_pv_settings;
            break;
          case Modal.MESSAGE:
            t = new components_popups_pv_message_pv_message;
            break;
          case Modal.NEW_ROOM:
            t = new components_popups_pv_new_room_pv_new_room;
            break;
          case Dialog.ROOMS:
            t = new components_popups_pv_rooms_pv_rooms;
            break;
          case Dialog.ACTIONS:
            t = new components_popups_pv_actions_pv_actions;
            break;
          case Dialog.DEVICES:
            t = new components_popups_pv_devices_pv_devices;
            break;
          case Dialog.SOUNDS:
            t = new components_popups_pv_sounds_pv_sounds;
            break;
          case Dialog.TRANSPOSE:
            t = new components_popups_pv_transpose_pv_transpose;
            break;
          case Dialog.VELOCITY:
            t = new components_popups_pv_velocity_pv_velocity;
            break;
          case Dialog.MORE:
            t = new PvMore;
            break;
          default:
            throw new Error(`Popup ${a} not found`);
        }
        return t && (document.body.append(t), t.open(...e)), t;
      }
      static closeEverything() {
        PopupManager.closeDialogs(), PopupManager.closeModals();
      }
      static closeModals() {
        const a = Object.values(Modal).join(", ");
        document.querySelectorAll(a).forEach(a => a.close());
      }
      static closeDialogs() {
        const a = Object.values(Dialog).join(", ");
        document.querySelectorAll(a).forEach(a => a.close());
      }
    }
    window.addEventListener("resize", () => PopupManager.closeDialogs());
    class LoaderManager extends events_default() {
      constructor() {
        super();
      }
      start(a) {
        this.loader || (this.loader = new src_components_pv_loader_pv_loader, document.body.append(this.loader), PopupManager.closeDialogs(), PopupManager.closeModals()), this.loader.setCaption(a);
      }
      stop() {
        this.loader && (this.loader.classList.add("closing"), this.loader.addEventListener("animationend", () => {
          var a;
          null === (a = this.loader) || undefined === a || a.remove(), this.loader = null;
        }));
      }
    }
    const loader = new LoaderManager, loadermanager = loader;
    var pv_toolbar_code = '<div class="left"> <div class="sounds" aria-label="Sounds"> <span class="title"><i class="fas fa-music"></i></span> <span class="sounds-value"></span> <i class="fas fa-chevron-down"></i> </div> <div class="transpose" aria-label="Transpose"> <span class="title">Transpose</span> <span class="value transpose-value"></span> </div> <div class="velocity" aria-label="Velocity"> <span class="title">Velocity</span> <span class="value velocity-value"></span> </div> </div> <div class="right"> <div class="sustain"> <span class="title">Sustain</span> <label class="toggle"> <input type="checkbox" class="sustain-value"/> <span class="slider"></span> </label> </div> <div class="devices" aria-label="Devices"> <i class="fas fa-plug"></i> <span class="title">MIDI</span> </div> </div> ';
    const pv_toolbar = pv_toolbar_code;
    var pv_toolbar_pv_toolbar = __webpack_require__(2732), pv_toolbar_options = {};
    pv_toolbar_options.styleTagTransform = styleTagTransform_default(), pv_toolbar_options.setAttributes = setAttributesWithoutAttributes_default(), pv_toolbar_options.insert = insertBySelector_default().bind(null, "head"), pv_toolbar_options.domAPI = styleDomAPI_default(), pv_toolbar_options.insertStyleElement = insertStyleElement_default();
    var pv_toolbar_update = injectStylesIntoStyleTag_default()(pv_toolbar_pv_toolbar.A, pv_toolbar_options);
    const components_pv_toolbar_pv_toolbar = pv_toolbar_pv_toolbar.A && pv_toolbar_pv_toolbar.A.locals ? pv_toolbar_pv_toolbar.A.locals : undefined;
    var pv_toolbar_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_toolbar_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_toolbar_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_toolbar_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvToolbar = (() => {
      var a, e, t, i, o, s, n, r, f;
      let l, c, d, p, u, v, h, m, g = pv_component, _ = [], b = [], y = [], w = [], k = [], x = [], S = [], E = [], P = [];
      return a = class extends g {
        get sounds() {
          return pv_toolbar_classPrivateFieldGet(this, e, "f");
        }
        set sounds (a) {
          pv_toolbar_classPrivateFieldSet(this, e, a, "f");
        }
        get soundsValue() {
          return pv_toolbar_classPrivateFieldGet(this, t, "f");
        }
        set soundsValue (a) {
          pv_toolbar_classPrivateFieldSet(this, t, a, "f");
        }
        get transpose() {
          return pv_toolbar_classPrivateFieldGet(this, i, "f");
        }
        set transpose (a) {
          pv_toolbar_classPrivateFieldSet(this, i, a, "f");
        }
        get transposeValue() {
          return pv_toolbar_classPrivateFieldGet(this, o, "f");
        }
        set transposeValue (a) {
          pv_toolbar_classPrivateFieldSet(this, o, a, "f");
        }
        get velocity() {
          return pv_toolbar_classPrivateFieldGet(this, s, "f");
        }
        set velocity (a) {
          pv_toolbar_classPrivateFieldSet(this, s, a, "f");
        }
        get velocityValue() {
          return pv_toolbar_classPrivateFieldGet(this, n, "f");
        }
        set velocityValue (a) {
          pv_toolbar_classPrivateFieldSet(this, n, a, "f");
        }
        get sustainValue() {
          return pv_toolbar_classPrivateFieldGet(this, r, "f");
        }
        set sustainValue (a) {
          pv_toolbar_classPrivateFieldSet(this, r, a, "f");
        }
        get devices() {
          return pv_toolbar_classPrivateFieldGet(this, f, "f");
        }
        set devices (a) {
          pv_toolbar_classPrivateFieldSet(this, f, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_toolbar_runInitializers(this, _), pv_toolbar_runInitializers(this, b, undefined))), t.set(this, pv_toolbar_runInitializers(this, y, undefined)), i.set(this, pv_toolbar_runInitializers(this, w, undefined)), o.set(this, pv_toolbar_runInitializers(this, k, undefined)), s.set(this, pv_toolbar_runInitializers(this, x, undefined)), n.set(this, pv_toolbar_runInitializers(this, S, undefined)), r.set(this, pv_toolbar_runInitializers(this, E, undefined)), f.set(this, pv_toolbar_runInitializers(this, P, undefined)), this.innerHTML = pv_toolbar;
        }
        connectedCallback() {
          this.sounds.addEventListener("click", () => {
            this.sounds.classList.add("open"), PopupManager.open(Dialog.SOUNDS, this.sounds).onClosing(() => this.sounds.classList.remove("open"));
          }), this.devices.addEventListener("click", () => {
            this.devices.classList.add("open"), PopupManager.open(Dialog.DEVICES, this.devices).onClosing(() => this.devices.classList.remove("open"));
          }), this.transpose.addEventListener("click", () => {
            this.transpose.classList.add("open"), PopupManager.open(Dialog.TRANSPOSE, this.transpose).onClosing(() => this.transpose.classList.remove("open"));
          }), this.velocity.addEventListener("click", () => {
            this.velocity.classList.add("open"), PopupManager.open(Dialog.VELOCITY, this.velocity).onClosing(() => this.velocity.classList.remove("open"));
          }), settingsmanager.on("sound", a => {
            switch (a) {
              case "grand":
                this.soundsValue.textContent = "Grand Piano";
                break;
              case "salamander":
                this.soundsValue.textContent = "Salamander Piano";
                break;
              case "soft":
                this.soundsValue.textContent = "Soft Piano";
                break;
              case "electric":
                this.soundsValue.textContent = "Electric Piano";
            }
          }), settingsmanager.on("transpose", a => this.transposeValue.textContent = a <= 0 ? a.toString() : "+" + a.toString()), settingsmanager.on("velocity", a => this.velocityValue.textContent = a.toString()), settingsmanager.on("sustain", a => this.sustainValue.checked = a), this.sustainValue.addEventListener("click", () => {
            settingsmanager.set("sustain", !settingsmanager.get("sustain"));
          });
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, o = new WeakMap, s = new WeakMap, n = new WeakMap, r = new WeakMap, f = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = g[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        l = [decorators_child], c = [decorators_child], d = [decorators_child], p = [decorators_child], u = [decorators_child], v = [decorators_child], h = [decorators_child], m = [decorators_child], pv_toolbar_esDecorate(a, null, l, {kind: "accessor", name: "sounds", static: false, private: false, access: {has: a => "sounds" in a, get: a => a.sounds, set: (a, e) => {
          a.sounds = e;
        }}, metadata: t}, b, _), pv_toolbar_esDecorate(a, null, c, {kind: "accessor", name: "soundsValue", static: false, private: false, access: {has: a => "soundsValue" in a, get: a => a.soundsValue, set: (a, e) => {
          a.soundsValue = e;
        }}, metadata: t}, y, _), pv_toolbar_esDecorate(a, null, d, {kind: "accessor", name: "transpose", static: false, private: false, access: {has: a => "transpose" in a, get: a => a.transpose, set: (a, e) => {
          a.transpose = e;
        }}, metadata: t}, w, _), pv_toolbar_esDecorate(a, null, p, {kind: "accessor", name: "transposeValue", static: false, private: false, access: {has: a => "transposeValue" in a, get: a => a.transposeValue, set: (a, e) => {
          a.transposeValue = e;
        }}, metadata: t}, k, _), pv_toolbar_esDecorate(a, null, u, {kind: "accessor", name: "velocity", static: false, private: false, access: {has: a => "velocity" in a, get: a => a.velocity, set: (a, e) => {
          a.velocity = e;
        }}, metadata: t}, x, _), pv_toolbar_esDecorate(a, null, v, {kind: "accessor", name: "velocityValue", static: false, private: false, access: {has: a => "velocityValue" in a, get: a => a.velocityValue, set: (a, e) => {
          a.velocityValue = e;
        }}, metadata: t}, S, _), pv_toolbar_esDecorate(a, null, h, {kind: "accessor", name: "sustainValue", static: false, private: false, access: {has: a => "sustainValue" in a, get: a => a.sustainValue, set: (a, e) => {
          a.sustainValue = e;
        }}, metadata: t}, E, _), pv_toolbar_esDecorate(a, null, m, {kind: "accessor", name: "devices", static: false, private: false, access: {has: a => "devices" in a, get: a => a.devices, set: (a, e) => {
          a.devices = e;
        }}, metadata: t}, P, _), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const src_components_pv_toolbar_pv_toolbar = null;
    customElements.define("pv-toolbar", PvToolbar);
    var pv_header_code = '<div class="left"> <div class="pianoverse"> <svg xmlns="http://www.w3.org/2000/svg" width="1889.764" height="1889.764" viewBox="0 0 500 500"> <path d="M250 0C111.929 0 0 111.929 0 250c.071 22.873 3.277 45.427 9.385 67.082 17.968 63.705 59.232 50.002 59.232-16.839V183.258c0-24.468 19.698-44.166 44.166-44.166s44.166 19.698 44.166 44.166V424.85c0 31.252 23.57 66.888 54.35 71.902 12.769 2.08 25.707 3.17 38.701 3.248 138.071 0 250-111.929 250-250-.01-23.101-3.218-45.884-9.385-67.751-17.968-63.705-59.232-50.003-59.232 16.838V316.74c0 24.468-19.698 44.166-44.166 44.166s-44.166-19.698-44.166-44.166V74.607c0-31.252-23.63-66.75-54.438-71.584C275.867 1.022 262.958.007 250 0zm0 43.75c24.468 0 44.166 19.699 44.166 44.167v324.167c0 24.468-19.698 44.167-44.166 44.167s-44.167-19.699-44.167-44.167V87.917c0-24.468 19.699-44.167 44.167-44.167z"/> </svg> <span class="title">Pianoverse</span> </div> <div class="divider"></div> <pv-room></pv-room> </div> <div class="right"> <div class="volume icon" data-tooltip="Volume"> <i class="fas fa-volume-high"></i> </div> <div> <div class="volume"> <input class="volume-slider" type="range" name="volume" min="0" max="100" step="1"/> </div> </div> <div class="mode icon" aria-label="Dark mode" data-tooltip="Dark mode"> <i class="fas fa-moon"></i> </div> <div class="settings icon" aria-label="Settings" data-tooltip="Settings"> <i class="fas fa-gear"></i> </div> <div class="more icon" aria-label="More" data-tooltip="More" right-edge> <i class="fas fa-ellipsis-vertical"></i> </div> </div> ';
    const pv_header = pv_header_code;
    var pv_header_pv_header = __webpack_require__(4950), pv_header_options = {};
    pv_header_options.styleTagTransform = styleTagTransform_default(), pv_header_options.setAttributes = setAttributesWithoutAttributes_default(), pv_header_options.insert = insertBySelector_default().bind(null, "head"), pv_header_options.domAPI = styleDomAPI_default(), pv_header_options.insertStyleElement = insertStyleElement_default();
    var pv_header_update = injectStylesIntoStyleTag_default()(pv_header_pv_header.A, pv_header_options);
    const components_pv_header_pv_header = pv_header_pv_header.A && pv_header_pv_header.A.locals ? pv_header_pv_header.A.locals : undefined;
    var pv_header_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_header_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_header_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_header_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvHeader = (() => {
      var a, e, t, i, o, s, n;
      let r, f, l, c, d, p, u, v = pv_component, h = [], m = [], g = [], _ = [], b = [], y = [], w = [];
      return a = class extends v {
        get pianoverse() {
          return pv_header_classPrivateFieldGet(this, e, "f");
        }
        set pianoverse (a) {
          pv_header_classPrivateFieldSet(this, e, a, "f");
        }
        get volume() {
          return pv_header_classPrivateFieldGet(this, t, "f");
        }
        set volume (a) {
          pv_header_classPrivateFieldSet(this, t, a, "f");
        }
        get volumeSlider() {
          return pv_header_classPrivateFieldGet(this, i, "f");
        }
        set volumeSlider (a) {
          pv_header_classPrivateFieldSet(this, i, a, "f");
        }
        get mode() {
          return pv_header_classPrivateFieldGet(this, o, "f");
        }
        set mode (a) {
          pv_header_classPrivateFieldSet(this, o, a, "f");
        }
        get settings() {
          return pv_header_classPrivateFieldGet(this, s, "f");
        }
        set settings (a) {
          pv_header_classPrivateFieldSet(this, s, a, "f");
        }
        get more() {
          return pv_header_classPrivateFieldGet(this, n, "f");
        }
        set more (a) {
          pv_header_classPrivateFieldSet(this, n, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_header_runInitializers(this, h), pv_header_runInitializers(this, m, undefined))), t.set(this, pv_header_runInitializers(this, g, undefined)), i.set(this, pv_header_runInitializers(this, _, undefined)), o.set(this, pv_header_runInitializers(this, b, undefined)), s.set(this, pv_header_runInitializers(this, y, undefined)), n.set(this, pv_header_runInitializers(this, w, undefined)), this.volumeBackup = 100, this.innerHTML = pv_header, this.pianoverse.addEventListener("click", () => {
            var a;
            "Lobby" !== (null === (a = services_client.room) || undefined === a ? undefined : a.id) && services_client.enter("Lobby");
          }), this.volumeSlider.addEventListener("input", () => {
            settingsmanager.set("volume", parseInt(this.volumeSlider.value));
          }), settingsmanager.on("volume", a => {
            this.volumeSlider.value = a || 0, a <= 0 ? this.volume.getElementsByTagName("i")[0].className = "fas fa-volume-xmark" : a < 50 ? (this.volume.getElementsByTagName("i")[0].className = "fas fa-volume-low", this.volumeBackup = a) : (this.volume.getElementsByTagName("i")[0].className = "fas fa-volume-high", this.volumeBackup = a);
          }), this.volume.addEventListener("wheel", this.onVolumeWheel, {passive: true}), this.volume.getElementsByTagName("i")[0].addEventListener("click", () => {
            0 == settingsmanager.get("volume") ? settingsmanager.set("volume", this.volumeBackup) : settingsmanager.set("volume", 0);
          }), this.mode.addEventListener("click", () => {
            settingsmanager.set("theme", "dark" === settingsmanager.get("theme") ? "light" : "dark"), this.mode.dataset.tooltip = "dark" === settingsmanager.get("theme") ? "Dark mode" : "Light mode", this.mode.querySelector("i").className = "dark" === settingsmanager.get("theme") ? "fas fa-moon" : "fas fa-sun";
          }), this.settings.addEventListener("click", () => PopupManager.open(Modal.SETTINGS)), this.more.addEventListener("click", () => {
            this.more.classList.add("open"), PopupManager.open(Dialog.MORE, this.more).onClosing(() => this.more.classList.remove("open"));
          });
        }
        onVolumeWheel(a) {
          const e = settingsmanager.get("volume");
          a.deltaY > 0 ? settingsmanager.set("volume", Math.max(e - 5, 0)) : settingsmanager.set("volume", Math.min(e + 5, 100));
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, o = new WeakMap, s = new WeakMap, n = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = v[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        r = [decorators_child], f = [decorators_child], l = [decorators_child], c = [decorators_child], d = [decorators_child], p = [decorators_child], u = [bind], pv_header_esDecorate(a, null, r, {kind: "accessor", name: "pianoverse", static: false, private: false, access: {has: a => "pianoverse" in a, get: a => a.pianoverse, set: (a, e) => {
          a.pianoverse = e;
        }}, metadata: t}, m, h), pv_header_esDecorate(a, null, f, {kind: "accessor", name: "volume", static: false, private: false, access: {has: a => "volume" in a, get: a => a.volume, set: (a, e) => {
          a.volume = e;
        }}, metadata: t}, g, h), pv_header_esDecorate(a, null, l, {kind: "accessor", name: "volumeSlider", static: false, private: false, access: {has: a => "volumeSlider" in a, get: a => a.volumeSlider, set: (a, e) => {
          a.volumeSlider = e;
        }}, metadata: t}, _, h), pv_header_esDecorate(a, null, c, {kind: "accessor", name: "mode", static: false, private: false, access: {has: a => "mode" in a, get: a => a.mode, set: (a, e) => {
          a.mode = e;
        }}, metadata: t}, b, h), pv_header_esDecorate(a, null, d, {kind: "accessor", name: "settings", static: false, private: false, access: {has: a => "settings" in a, get: a => a.settings, set: (a, e) => {
          a.settings = e;
        }}, metadata: t}, y, h), pv_header_esDecorate(a, null, p, {kind: "accessor", name: "more", static: false, private: false, access: {has: a => "more" in a, get: a => a.more, set: (a, e) => {
          a.more = e;
        }}, metadata: t}, w, h), pv_header_esDecorate(a, null, u, {kind: "method", name: "onVolumeWheel", static: false, private: false, access: {has: a => "onVolumeWheel" in a, get: a => a.onVolumeWheel}, metadata: t}, null, h), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const src_components_pv_header_pv_header = null;
    customElements.define("pv-header", PvHeader);
    var pv_note = __webpack_require__(1230), pv_note_options = {};
    pv_note_options.styleTagTransform = styleTagTransform_default(), pv_note_options.setAttributes = setAttributesWithoutAttributes_default(), pv_note_options.insert = insertBySelector_default().bind(null, "head"), pv_note_options.domAPI = styleDomAPI_default(), pv_note_options.insertStyleElement = insertStyleElement_default();
    var pv_note_update = injectStylesIntoStyleTag_default()(pv_note.A, pv_note_options);
    const pv_note_pv_note = pv_note.A && pv_note.A.locals ? pv_note.A.locals : undefined;
    var pv_note_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_note_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_note_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_note_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvNote = (() => {
      var a, e, t, i;
      let o, s, n, r, f = pv_component, l = [], c = [], d = [], p = [];
      return a = class extends f {
        get left() {
          return pv_note_classPrivateFieldGet(this, e, "f");
        }
        set left (a) {
          pv_note_classPrivateFieldSet(this, e, a, "f");
        }
        get width() {
          return pv_note_classPrivateFieldGet(this, t, "f");
        }
        set width (a) {
          pv_note_classPrivateFieldSet(this, t, a, "f");
        }
        get color() {
          return pv_note_classPrivateFieldGet(this, i, "f");
        }
        set color (a) {
          pv_note_classPrivateFieldSet(this, i, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_note_runInitializers(this, l), pv_note_runInitializers(this, c, undefined))), t.set(this, pv_note_runInitializers(this, d, undefined)), i.set(this, pv_note_runInitializers(this, p, undefined)), this.released = false;
        }
        get h() {
          return this.getBoundingClientRect().height;
        }
        get w() {
          return this.getBoundingClientRect().width;
        }
        connectedCallback() {
          this.style.left = this.left, this.style.width = this.width, this.style.boxShadow = `\n      ${this.color}7F 0px 5px,\n      ${this.color}66 0px 10px,\n      ${this.color}4C 0px 15px,\n      ${this.color}33 0px 20px,\n      ${this.color}19 0px 25px\n    `;
        }
        release() {
          this.released || (this.released = true, this.style.height = `${Math.max(this.clientHeight + 2, 10)}px`, this.classList.add("released"), this.addEventListener("animationend", this.onAnimationEnd, {once: true}));
        }
        onAnimationEnd() {
          this.remove();
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = f[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        o = [decorators_attr], s = [decorators_attr], n = [decorators_attr], r = [bind], pv_note_esDecorate(a, null, o, {kind: "accessor", name: "left", static: false, private: false, access: {has: a => "left" in a, get: a => a.left, set: (a, e) => {
          a.left = e;
        }}, metadata: t}, c, l), pv_note_esDecorate(a, null, s, {kind: "accessor", name: "width", static: false, private: false, access: {has: a => "width" in a, get: a => a.width, set: (a, e) => {
          a.width = e;
        }}, metadata: t}, d, l), pv_note_esDecorate(a, null, n, {kind: "accessor", name: "color", static: false, private: false, access: {has: a => "color" in a, get: a => a.color, set: (a, e) => {
          a.color = e;
        }}, metadata: t}, p, l), pv_note_esDecorate(a, null, r, {kind: "method", name: "onAnimationEnd", static: false, private: false, access: {has: a => "onAnimationEnd" in a, get: a => a.onAnimationEnd}, metadata: t}, null, l), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const components_pv_note_pv_note = PvNote;
    customElements.define("pv-note", PvNote);
    var pv_canvas_code = '<pv-toolbar></pv-toolbar> <canvas class="bg-canvas"></canvas> <canvas class="fg-canvas"></canvas> <ul id="notifications"></ul> ';
    const pv_canvas = pv_canvas_code;
    var pv_canvas_pv_canvas = __webpack_require__(5734), pv_canvas_options = {};
    pv_canvas_options.styleTagTransform = styleTagTransform_default(), pv_canvas_options.setAttributes = setAttributesWithoutAttributes_default(), pv_canvas_options.insert = insertBySelector_default().bind(null, "head"), pv_canvas_options.domAPI = styleDomAPI_default(), pv_canvas_options.insertStyleElement = insertStyleElement_default();
    var pv_canvas_update = injectStylesIntoStyleTag_default()(pv_canvas_pv_canvas.A, pv_canvas_options);
    const components_pv_canvas_pv_canvas = pv_canvas_pv_canvas.A && pv_canvas_pv_canvas.A.locals ? pv_canvas_pv_canvas.A.locals : undefined;
    var pv_canvas_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_canvas_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_canvas_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_canvas_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvCanvas = (() => {
      var a, e, t;
      let i, o, s, n, r, f, l = pv_component, c = [], d = [], p = [];
      return a = class extends l {
        get bgCanvas() {
          return pv_canvas_classPrivateFieldGet(this, e, "f");
        }
        set bgCanvas (a) {
          pv_canvas_classPrivateFieldSet(this, e, a, "f");
        }
        get fgCanvas() {
          return pv_canvas_classPrivateFieldGet(this, t, "f");
        }
        set fgCanvas (a) {
          pv_canvas_classPrivateFieldSet(this, t, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_canvas_runInitializers(this, c), pv_canvas_runInitializers(this, d, undefined))), t.set(this, pv_canvas_runInitializers(this, p, undefined)), this.particles = [], this.notes = [], this.start = 0, this.frames = 0, this.lastTime = 0;
        }
        connectedCallback() {
          this.innerHTML = pv_canvas, this.fgContext = this.fgCanvas.getContext("2d"), this.bgContext = this.bgCanvas.getContext("2d"), window.addEventListener("resize", this.onResize, {passive: true}), document.addEventListener("DOMContentLoaded", this.onResize, {passive: true, once: true}), document.addEventListener("visibilitychange", this.onResize, {passive: true}), services_keyboard.on("press", this.onKeyPressed), services_keyboard.on("release", this.onKeyReleased), settingsmanager.on("showEffects", a => {
            this.showEffects = a, this.particles = [];
          }), requestAnimationFrame(this.drawingAnimation);
        }
        drawingAnimation(a) {
          0 === this.start && (this.start = a, this.lastTime = a);
          const e = (a - this.lastTime) / 7;
          this.lastTime = a, this.frames++, this.drawForeground(), this.update(e), requestAnimationFrame(this.drawingAnimation);
        }
        update(e) {
          for (let a = this.particles.length - 1; a >= 0; --a) {
            const t = this.particles[a];
            t.r *= Math.pow(t.vr, e), t.r <= 0.5 && this.particles.splice(a, 1), t.x += t.vx * e, t.y += t.vy * e, t.vx *= Math.pow(0.95, e), t.vy *= Math.pow(0.95, e);
          }
          for (const e of this.notes) if (e.pressed) {
            const t = e.element.w, i = e.element.offsetLeft;
            for (let e = 0; e < 10; e++) {
              const e = i + t / 2 + 1.5 * (Math.random() * (t / 2 - -t / 2) + -t / 2);
              this.showEffects && Math.random() > 0.7 && (this.particles.push({x: e, y: this.fgCanvas.height, vx: (e - i - t / 2) / 20, vy: Math.random() * 3 + -4, r: Math.random() * 0.3999999999999999 + 2, vr: Math.random() * 0.18999999999999995 + 0.8}), this.particles.length > a.MAX_PARTICLES && this.particles.shift());
            }
          } else e.element.isConnected || (this.notes = this.notes.filter(a => a !== e));
        }
        onKeyPressed(a, e, t) {
          var i;
          if (document.hidden || !this.showEffects) return;
          const o = info_namespaceObject.H[a - 21];
          if (!o) return;
          const s = o.includes("s"), n = o.replace("s", ""), r = info_namespaceObject.H.filter(a => !a.includes("s")).indexOf(n), f = this.fgCanvas.width * (r / 52), l = s ? this.fgCanvas.width / 52 * 0.6 : this.fgCanvas.width / 52, c = new components_pv_note_pv_note;
          c.setAttribute("left", `${s ? f + 1.2 * l : f}px`), c.setAttribute("width", `${l}px`), c.setAttribute("color", null === (i = services_client.get(t)) || undefined === i ? undefined : i.color), this.append(c), this.notes.push({key: a, pressed: true, pressedAt: Date.now(), element: c});
        }
        onKeyReleased(a, e) {
          const t = this.notes.filter(e => a === e.key && e.pressed);
          for (const a of t) a.pressed = false, a.element.release();
        }
        onResize() {
          this.bgCanvas.width = this.clientWidth, this.bgCanvas.height = this.clientHeight, this.fgCanvas.width = this.clientWidth, this.fgCanvas.height = this.clientHeight, this.drawBackground();
        }
        drawForeground() {
          this.clear(this.fgContext), this.showEffects && this.drawParticles(this.fgContext);
        }
        drawBackground() {
          this.clear(this.bgContext), this.drawOctaveLines(this.bgContext);
        }
        clear(a) {
          a.clearRect(0, 0, a.canvas.width, a.canvas.height);
        }
        drawParticles(a) {
          a.fillStyle = "white", a.shadowColor = "white", a.shadowBlur = 10, a.beginPath();
          for (let e = this.particles.length - 1; e >= 0; --e) {
            const t = this.particles[e];
            a.moveTo(t.x + t.r, t.y), a.arc(t.x, t.y, t.r, 0, 2 * Math.PI);
          }
          a.fill();
        }
        drawOctaveLines(a) {
          a.strokeStyle = "white", a.shadowBlur = 0, a.globalAlpha = 0.02, a.lineWidth = 1;
          const e = 0.03809 * this.bgCanvas.width, t = 0.1346 * this.bgCanvas.width;
          a.beginPath();
          for (let i = 0; i < 8; ++i) a.moveTo(e + i * t, 0), a.lineTo(e + i * t, this.bgCanvas.height);
          a.stroke();
        }
      }, e = new WeakMap, t = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = l[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        i = [decorators_child], o = [decorators_child], s = [bind], n = [bind], r = [bind], f = [bind], pv_canvas_esDecorate(a, null, i, {kind: "accessor", name: "bgCanvas", static: false, private: false, access: {has: a => "bgCanvas" in a, get: a => a.bgCanvas, set: (a, e) => {
          a.bgCanvas = e;
        }}, metadata: t}, d, c), pv_canvas_esDecorate(a, null, o, {kind: "accessor", name: "fgCanvas", static: false, private: false, access: {has: a => "fgCanvas" in a, get: a => a.fgCanvas, set: (a, e) => {
          a.fgCanvas = e;
        }}, metadata: t}, p, c), pv_canvas_esDecorate(a, null, s, {kind: "method", name: "drawingAnimation", static: false, private: false, access: {has: a => "drawingAnimation" in a, get: a => a.drawingAnimation}, metadata: t}, null, c), pv_canvas_esDecorate(a, null, n, {kind: "method", name: "onKeyPressed", static: false, private: false, access: {has: a => "onKeyPressed" in a, get: a => a.onKeyPressed}, metadata: t}, null, c), pv_canvas_esDecorate(a, null, r, {kind: "method", name: "onKeyReleased", static: false, private: false, access: {has: a => "onKeyReleased" in a, get: a => a.onKeyReleased}, metadata: t}, null, c), pv_canvas_esDecorate(a, null, f, {kind: "method", name: "onResize", static: false, private: false, access: {has: a => "onResize" in a, get: a => a.onResize}, metadata: t}, null, c), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a.MAX_PARTICLES = 2e3, a;
    })();
    const src_components_pv_canvas_pv_canvas = null;
    customElements.define("pv-canvas", PvCanvas);
    var pv_cursor_code = '<span class="icon"></span> <span class="badge">Anyonmous</span> ';
    const pv_cursor = pv_cursor_code;
    var pv_cursor_pv_cursor = __webpack_require__(6610), pv_cursor_options = {};
    pv_cursor_options.styleTagTransform = styleTagTransform_default(), pv_cursor_options.setAttributes = setAttributesWithoutAttributes_default(), pv_cursor_options.insert = insertBySelector_default().bind(null, "head"), pv_cursor_options.domAPI = styleDomAPI_default(), pv_cursor_options.insertStyleElement = insertStyleElement_default();
    var pv_cursor_update = injectStylesIntoStyleTag_default()(pv_cursor_pv_cursor.A, pv_cursor_options);
    const components_pv_cursor_pv_cursor = pv_cursor_pv_cursor.A && pv_cursor_pv_cursor.A.locals ? pv_cursor_pv_cursor.A.locals : undefined;
    var pv_cursor_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_cursor_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_cursor_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_cursor_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvCursor = (() => {
      var a, e, t, i;
      let o, s, n, r = pv_component, f = [], l = [], c = [], d = [];
      return a = class extends r {
        get badge() {
          return pv_cursor_classPrivateFieldGet(this, e, "f");
        }
        set badge (a) {
          pv_cursor_classPrivateFieldSet(this, e, a, "f");
        }
        get name() {
          return pv_cursor_classPrivateFieldGet(this, t, "f");
        }
        set name (a) {
          pv_cursor_classPrivateFieldSet(this, t, a, "f");
        }
        get color() {
          return pv_cursor_classPrivateFieldGet(this, i, "f");
        }
        set color (a) {
          pv_cursor_classPrivateFieldSet(this, i, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_cursor_runInitializers(this, f), pv_cursor_runInitializers(this, l, undefined))), t.set(this, pv_cursor_runInitializers(this, c, undefined)), i.set(this, pv_cursor_runInitializers(this, d, undefined));
        }
        connectedCallback() {
          this.innerHTML = pv_cursor, this.onNameChange(this.name), this.onColorChange(this.color), this.style.display = settingsmanager.get("showCursors") ? "flex" : "none", settingsmanager.on("showCursors", a => {
            this.style.display = a ? "flex" : "none";
          });
        }
        onNameChange(a) {
          this.badge.textContent = a;
        }
        onColorChange(a) {
          this.badge.style.color = getTextColor(a), this.badge.style.background = getBackground(a);
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = r[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        o = [decorators_child], s = [decorators_attr], n = [decorators_attr], pv_cursor_esDecorate(a, null, o, {kind: "accessor", name: "badge", static: false, private: false, access: {has: a => "badge" in a, get: a => a.badge, set: (a, e) => {
          a.badge = e;
        }}, metadata: t}, l, f), pv_cursor_esDecorate(a, null, s, {kind: "accessor", name: "name", static: false, private: false, access: {has: a => "name" in a, get: a => a.name, set: (a, e) => {
          a.name = e;
        }}, metadata: t}, c, f), pv_cursor_esDecorate(a, null, n, {kind: "accessor", name: "color", static: false, private: false, access: {has: a => "color" in a, get: a => a.color, set: (a, e) => {
          a.color = e;
        }}, metadata: t}, d, f), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const src_components_pv_cursor_pv_cursor = PvCursor;
    customElements.define("pv-cursor", PvCursor);
    var pv_user_code = '<span class="text"></span> <span class="badges"></span> ';
    const pv_user = pv_user_code;
    var pv_user_pv_user = __webpack_require__(8098), pv_user_options = {};
    pv_user_options.styleTagTransform = styleTagTransform_default(), pv_user_options.setAttributes = setAttributesWithoutAttributes_default(), pv_user_options.insert = insertBySelector_default().bind(null, "head"), pv_user_options.domAPI = styleDomAPI_default(), pv_user_options.insertStyleElement = insertStyleElement_default();
    var pv_user_update = injectStylesIntoStyleTag_default()(pv_user_pv_user.A, pv_user_options);
    const components_pv_user_pv_user = pv_user_pv_user.A && pv_user_pv_user.A.locals ? pv_user_pv_user.A.locals : undefined;
    var pv_user_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_user_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_user_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_user_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvUser = (() => {
      var a, e, t;
      let i, o, s, n = pv_component, r = [], f = [], l = [];
      return a = class extends n {
        get text() {
          return pv_user_classPrivateFieldGet(this, e, "f");
        }
        set text (a) {
          pv_user_classPrivateFieldSet(this, e, a, "f");
        }
        get badges() {
          return pv_user_classPrivateFieldGet(this, t, "f");
        }
        set badges (a) {
          pv_user_classPrivateFieldSet(this, t, a, "f");
        }
        constructor(a) {
          super(), e.set(this, (pv_user_runInitializers(this, r), pv_user_runInitializers(this, f, undefined))), t.set(this, pv_user_runInitializers(this, l, undefined)), this.user = a, this.id = null == a ? undefined : a.id;
        }
        update(a) {
          this.user = a, this.initialize();
        }
        connectedCallback() {
          this.innerHTML = pv_user, this.initialize(), this.addEventListener("click", this.openActions);
        }
        initialize() {
          this.text.textContent = this.user.name, this.text.style.color = getTextColor(this.user.color), this.style.background = getBackground(this.user.color), this.badges.style.backgroundColor = `color-mix(in hsl, var(--color-black) 90%, ${this.user.color})`, this.badges.innerHTML = "";
          const a = Array.from(this.user.tags);
          services_client.me.id === this.user.id && a.unshift("ME"), services_client.room.host === this.user.id && a.push("HOST"), a.length > 0 ? (this.badges.style.display = "block", this.badges.innerHTML = a.join(" / ")) : this.badges.style.display = "none";
        }
        openActions() {
          this.classList.add("open"), (this.id === services_client.me.id ? PopupManager.open(Modal.PROFILE) : PopupManager.open(Dialog.ACTIONS, this, this.id)).onClosing(() => this.classList.remove("open"));
        }
      }, e = new WeakMap, t = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = n[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        i = [decorators_child], o = [decorators_child], s = [bind], pv_user_esDecorate(a, null, i, {kind: "accessor", name: "text", static: false, private: false, access: {has: a => "text" in a, get: a => a.text, set: (a, e) => {
          a.text = e;
        }}, metadata: t}, f, r), pv_user_esDecorate(a, null, o, {kind: "accessor", name: "badges", static: false, private: false, access: {has: a => "badges" in a, get: a => a.badges, set: (a, e) => {
          a.badges = e;
        }}, metadata: t}, l, r), pv_user_esDecorate(a, null, s, {kind: "method", name: "openActions", static: false, private: false, access: {has: a => "openActions" in a, get: a => a.openActions}, metadata: t}, null, r), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const src_components_pv_user_pv_user = PvUser;
    customElements.define("pv-user", PvUser);
    var pv_users_code = '<div class="users"></div> ';
    const pv_users = pv_users_code;
    var pv_users_pv_users = __webpack_require__(8758), pv_users_options = {};
    pv_users_options.styleTagTransform = styleTagTransform_default(), pv_users_options.setAttributes = setAttributesWithoutAttributes_default(), pv_users_options.insert = insertBySelector_default().bind(null, "head"), pv_users_options.domAPI = styleDomAPI_default(), pv_users_options.insertStyleElement = insertStyleElement_default();
    var pv_users_update = injectStylesIntoStyleTag_default()(pv_users_pv_users.A, pv_users_options);
    const components_pv_users_pv_users = pv_users_pv_users.A && pv_users_pv_users.A.locals ? pv_users_pv_users.A.locals : undefined;
    var pv_users_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_users_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_users_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_users_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvUsers = (() => {
      var a, e;
      let t, i, o, s, n, r = pv_component, f = [], l = [];
      return a = class extends r {
        get users() {
          return pv_users_classPrivateFieldGet(this, e, "f");
        }
        set users (a) {
          pv_users_classPrivateFieldSet(this, e, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_users_runInitializers(this, f), pv_users_runInitializers(this, l, undefined)));
        }
        connectedCallback() {
          this.innerHTML = pv_users, services_client.on("welcome", this.initialize), services_client.on("host", this.initialize), services_client.on("join", this.addUser), services_client.on("profile", this.updateUser), services_client.on("leave", this.removeUser), services_keyboard.on("press", (a, e, t) => {
            const i = document.getElementById(t);
            i && (i.style.animation = "none", i.offsetHeight, i.style.animation = "bounce 180ms ease-out");
          });
        }
        initialize() {
          this.users.innerHTML = "", this.addUser(services_client.me);
          for (const a of services_client.users) this.addUser(a);
        }
        addUser(a) {
          const e = new src_components_pv_user_pv_user(a);
          null == e || e.classList.toggle("muted", !(!services_client.get(a.id).muted && !services_client.get(a.id).mutedChat)), this.users.append(e);
        }
        updateUser(a) {
          const e = document.getElementById(a.id);
          null == e || e.update(a), null == e || e.classList.toggle("muted", !(!services_client.get(a.id).muted && !services_client.get(a.id).mutedChat));
        }
        removeUser(a) {
          var e;
          null === (e = document.getElementById(a.id)) || undefined === e || e.remove();
        }
      }, e = new WeakMap, (() => {
        var e;
        const c = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = r[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        t = [decorators_child], i = [bind], o = [bind], s = [bind], n = [bind], pv_users_esDecorate(a, null, t, {kind: "accessor", name: "users", static: false, private: false, access: {has: a => "users" in a, get: a => a.users, set: (a, e) => {
          a.users = e;
        }}, metadata: c}, l, f), pv_users_esDecorate(a, null, i, {kind: "method", name: "initialize", static: false, private: false, access: {has: a => "initialize" in a, get: a => a.initialize}, metadata: c}, null, f), pv_users_esDecorate(a, null, o, {kind: "method", name: "addUser", static: false, private: false, access: {has: a => "addUser" in a, get: a => a.addUser}, metadata: c}, null, f), pv_users_esDecorate(a, null, s, {kind: "method", name: "updateUser", static: false, private: false, access: {has: a => "updateUser" in a, get: a => a.updateUser}, metadata: c}, null, f), pv_users_esDecorate(a, null, n, {kind: "method", name: "removeUser", static: false, private: false, access: {has: a => "removeUser" in a, get: a => a.removeUser}, metadata: c}, null, f), c && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: c});
      })(), a;
    })();
    const src_components_pv_users_pv_users = null;
    customElements.define("pv-users", PvUsers);
    var pv_keys_code = ' <div class="key"> <div class="white loading" data-key="21" data-label="A"></div> <div class="black loading" data-key="22" data-label="A#"></div> </div> <div class="key"> <div class="white loading" data-key="23" data-label="B"></div> </div> <div class="key"> <div class="white loading" data-key="24" data-label="C1"></div> <div class="black loading" data-key="25" data-label="C#"></div> </div> <div class="key"> <div class="white loading" data-key="26" data-label="D"></div> <div class="black loading" data-key="27" data-label="D#"></div> </div> <div class="key"> <div class="white loading" data-key="28" data-label="E"></div> </div> <div class="key"> <div class="white loading" data-key="29" data-label="F"></div> <div class="black loading" data-key="30" data-label="F#"></div> </div> <div class="key"> <div class="white loading" data-key="31" data-label="G"></div> <div class="black loading" data-key="32" data-label="G#"></div> </div> <div class="key"> <div class="white loading" data-key="33" data-label="A"></div> <div class="black loading" data-key="34" data-label="A#"></div> </div> <div class="key"> <div class="white loading" data-key="35" data-label="B"></div> </div> <div class="key"> <div class="white loading" data-key="36" data-label="C2"></div> <div class="black loading" data-key="37" data-label="C#"></div> </div> <div class="key"> <div class="white loading" data-key="38" data-label="D"></div> <div class="black loading" data-key="39" data-label="D#"></div> </div> <div class="key"> <div class="white loading" data-key="40" data-label="E"></div> </div> <div class="key"> <div class="white loading" data-key="41" data-label="F"></div> <div class="black loading" data-key="42" data-label="F#"></div> </div> <div class="key"> <div class="white loading" data-key="43" data-label="G"></div> <div class="black loading" data-key="44" data-label="G#"></div> </div> <div class="key"> <div class="white loading" data-key="45" data-label="A"></div> <div class="black loading" data-key="46" data-label="A#"></div> </div> <div class="key"> <div class="white loading" data-key="47" data-label="B"></div> </div> <div class="key"> <div class="white loading" data-key="48" data-label="C3"></div> <div class="black loading" data-key="49" data-label="C#"></div> </div> <div class="key"> <div class="white loading" data-key="50" data-label="D"></div> <div class="black loading" data-key="51" data-label="D#"></div> </div> <div class="key"> <div class="white loading" data-key="52" data-label="E"></div> </div> <div class="key"> <div class="white loading" data-key="53" data-label="F"></div> <div class="black loading" data-key="54" data-label="F#"></div> </div> <div class="key"> <div class="white loading" data-key="55" data-label="G"></div> <div class="black loading" data-key="56" data-label="G#"></div> </div> <div class="key"> <div class="white loading" data-key="57" data-label="A"></div> <div class="black loading" data-key="58" data-label="A#"></div> </div> <div class="key"> <div class="white loading" data-key="59" data-label="B"></div> </div> <div class="key"> <div class="white loading" data-key="60" data-label="C4"></div> <div class="black loading" data-key="61" data-label="C#"></div> </div> <div class="key"> <div class="white loading" data-key="62" data-label="D"></div> <div class="black loading" data-key="63" data-label="D#"></div> </div> <div class="key"> <div class="white loading" data-key="64" data-label="E"></div> </div> <div class="key"> <div class="white loading" data-key="65" data-label="F"></div> <div class="black loading" data-key="66" data-label="F#"></div> </div> <div class="key"> <div class="white loading" data-key="67" data-label="G"></div> <div class="black loading" data-key="68" data-label="G#"></div> </div> <div class="key"> <div class="white loading" data-key="69" data-label="A"></div> <div class="black loading" data-key="70" data-label="A#"></div> </div> <div class="key"> <div class="white loading" data-key="71" data-label="B"></div> </div> <div class="key"> <div class="white loading" data-key="72" data-label="C5"></div> <div class="black loading" data-key="73" data-label="C#"></div> </div> <div class="key"> <div class="white loading" data-key="74" data-label="D"></div> <div class="black loading" data-key="75" data-label="D#"></div> </div> <div class="key"> <div class="white loading" data-key="76" data-label="E"></div> </div> <div class="key"> <div class="white loading" data-key="77" data-label="F"></div> <div class="black loading" data-key="78" data-label="F#"></div> </div> <div class="key"> <div class="white loading" data-key="79" data-label="G"></div> <div class="black loading" data-key="80" data-label="G#"></div> </div> <div class="key"> <div class="white loading" data-key="81" data-label="A"></div> <div class="black loading" data-key="82" data-label="A#"></div> </div> <div class="key"> <div class="white loading" data-key="83" data-label="B"></div> </div> <div class="key"> <div class="white loading" data-key="84" data-label="C6"></div> <div class="black loading" data-key="85" data-label="C#"></div> </div> <div class="key"> <div class="white loading" data-key="86" data-label="D"></div> <div class="black loading" data-key="87" data-label="D#"></div> </div> <div class="key"> <div class="white loading" data-key="88" data-label="E"></div> </div> <div class="key"> <div class="white loading" data-key="89" data-label="F"></div> <div class="black loading" data-key="90" data-label="F#"></div> </div> <div class="key"> <div class="white loading" data-key="91" data-label="G"></div> <div class="black loading" data-key="92" data-label="G#"></div> </div> <div class="key"> <div class="white loading" data-key="93" data-label="A"></div> <div class="black loading" data-key="94" data-label="A#"></div> </div> <div class="key"> <div class="white loading" data-key="95" data-label="B"></div> </div> <div class="key"> <div class="white loading" data-key="96" data-label="C7"></div> <div class="black loading" data-key="97" data-label="C#"></div> </div> <div class="key"> <div class="white loading" data-key="98" data-label="D"></div> <div class="black loading" data-key="99" data-label="D#"></div> </div> <div class="key"> <div class="white loading" data-key="100" data-label="E"></div> </div> <div class="key"> <div class="white loading" data-key="101" data-label="F"></div> <div class="black loading" data-key="102" data-label="F#"></div> </div> <div class="key"> <div class="white loading" data-key="103" data-label="G"></div> <div class="black loading" data-key="104" data-label="G#"></div> </div> <div class="key"> <div class="white loading" data-key="105" data-label="A"></div> <div class="black loading" data-key="106" data-label="A#"></div> </div> <div class="key"> <div class="white loading" data-key="107" data-label="B"></div> </div> <div class="key"> <div class="white loading" data-key="108" data-label="C8"></div> </div> ';
    const pv_keys = pv_keys_code;
    var pv_keys_pv_keys = __webpack_require__(5750), pv_keys_options = {};
    pv_keys_options.styleTagTransform = styleTagTransform_default(), pv_keys_options.setAttributes = setAttributesWithoutAttributes_default(), pv_keys_options.insert = insertBySelector_default().bind(null, "head"), pv_keys_options.domAPI = styleDomAPI_default(), pv_keys_options.insertStyleElement = insertStyleElement_default();
    var pv_keys_update = injectStylesIntoStyleTag_default()(pv_keys_pv_keys.A, pv_keys_options);
    const components_pv_keys_pv_keys = pv_keys_pv_keys.A && pv_keys_pv_keys.A.locals ? pv_keys_pv_keys.A.locals : undefined;
    var pv_keys_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_keys_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    };
    let PvKeys = (() => {
      var a;
      let e, t, i, o, s = pv_component, n = [];
      return a = class extends s {
        constructor() {
          super(), this.isTactile = (pv_keys_runInitializers(this, n), false);
        }
        connectedCallback() {
          this.innerHTML = pv_keys, this.setupKeysListeners(), services_keyboard.on("loaded", this.onLoaded), services_keyboard.on("unloaded", this.onUnloaded), services_keyboard.on("press", this.onPress), services_keyboard.on("release", this.onRelease), settingsmanager.on("showLabels", a => {
            const e = this.querySelectorAll("[data-key]");
            for (const t of Array.from(e)) t.classList.toggle("show-label", a);
          }), settingsmanager.on("sound", a => {
            const e = this.querySelectorAll("[data-key]");
            for (const a of Array.from(e)) null == a || a.classList.add("loading");
            services_keyboard.load(a);
          });
        }
        setupKeysListeners() {
          const a = this.querySelectorAll("[data-key]");
          for (const e of Array.from(a)) e.addEventListener("mousedown", a => {
            if (this.isTactile) return;
            const t = a.target, i = Number(t.dataset.key), o = Math.floor(a.offsetY / e.clientHeight * 127);
            services_keyboard.press(i, o);
            const s = () => {
              services_keyboard.release(i), document.removeEventListener("mouseup", s);
            };
            document.addEventListener("mouseup", s);
          }), e.addEventListener("touchstart", a => {
            a.preventDefault(), this.isTactile = true;
            const e = a.target, t = Number(e.dataset.key);
            services_keyboard.press(t, 110);
            const i = () => {
              services_keyboard.release(t), document.removeEventListener("touchend", i);
            };
            document.addEventListener("touchend", i);
          });
        }
        onLoaded(a) {
          const e = this.querySelector(`[data-key="${a}"]`);
          null == e || e.classList.remove("loading");
        }
        onUnloaded() {
          const a = this.querySelectorAll("[data-key]");
          for (const e of Array.from(a)) e.classList.add("loading");
        }
        onPress(a, e, t) {
          const i = this.querySelector(`[data-key="${a}"]`);
          i && (i.style.transitionDuration = "0ms", i.style.backgroundColor = services_client.get(t).color);
        }
        onRelease(a) {
          const e = this.querySelector(`[data-key="${a}"]`);
          e && (e.style.transitionDuration = "", e.style.backgroundColor = "");
        }
      }, (() => {
        var r;
        const f = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (r = s[Symbol.metadata]) && undefined !== r ? r : null) : undefined;
        e = [bind], t = [bind], i = [bind], o = [bind], pv_keys_esDecorate(a, null, e, {kind: "method", name: "onLoaded", static: false, private: false, access: {has: a => "onLoaded" in a, get: a => a.onLoaded}, metadata: f}, null, n), pv_keys_esDecorate(a, null, t, {kind: "method", name: "onUnloaded", static: false, private: false, access: {has: a => "onUnloaded" in a, get: a => a.onUnloaded}, metadata: f}, null, n), pv_keys_esDecorate(a, null, i, {kind: "method", name: "onPress", static: false, private: false, access: {has: a => "onPress" in a, get: a => a.onPress}, metadata: f}, null, n), pv_keys_esDecorate(a, null, o, {kind: "method", name: "onRelease", static: false, private: false, access: {has: a => "onRelease" in a, get: a => a.onRelease}, metadata: f}, null, n), f && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: f});
      })(), a;
    })();
    const src_components_pv_keys_pv_keys = null;
    customElements.define("pv-keys", PvKeys);
    var pv_chat_code = '<ul class="messages"></ul> <div> <input class="input" type="text" placeholder="Send a message..." maxlength="512" name="message"/> <button class="send" type="submit" aria-label="Send message"><i class="fas fa-paper-plane"></i></button> </div> ';
    const pv_chat = pv_chat_code;
    var pv_chat_pv_chat = __webpack_require__(9546), pv_chat_options = {};
    pv_chat_options.styleTagTransform = styleTagTransform_default(), pv_chat_options.setAttributes = setAttributesWithoutAttributes_default(), pv_chat_options.insert = insertBySelector_default().bind(null, "head"), pv_chat_options.domAPI = styleDomAPI_default(), pv_chat_options.insertStyleElement = insertStyleElement_default();
    var pv_chat_update = injectStylesIntoStyleTag_default()(pv_chat_pv_chat.A, pv_chat_options);
    const components_pv_chat_pv_chat = pv_chat_pv_chat.A && pv_chat_pv_chat.A.locals ? pv_chat_pv_chat.A.locals : undefined;
    var pv_chat_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_chat_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_chat_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_chat_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvChat = (() => {
      var a, e, t, i;
      let o, s, n, r, f, l, c, d, p, u, v, h, m = pv_component, g = [], _ = [], b = [], y = [];
      return a = class extends m {
        get messages() {
          return pv_chat_classPrivateFieldGet(this, e, "f");
        }
        set messages (a) {
          pv_chat_classPrivateFieldSet(this, e, a, "f");
        }
        get input() {
          return pv_chat_classPrivateFieldGet(this, t, "f");
        }
        set input (a) {
          pv_chat_classPrivateFieldSet(this, t, a, "f");
        }
        get send() {
          return pv_chat_classPrivateFieldGet(this, i, "f");
        }
        set send (a) {
          pv_chat_classPrivateFieldSet(this, i, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_chat_runInitializers(this, g), pv_chat_runInitializers(this, _, undefined))), t.set(this, pv_chat_runInitializers(this, b, undefined)), i.set(this, pv_chat_runInitializers(this, y, undefined));
        }
        connectedCallback() {
          this.innerHTML = pv_chat, window.addEventListener("resize", this.scrollDown, {passive: true}), document.addEventListener("keydown", this.onDocumentKeyDown), this.input.addEventListener("keydown", this.onInputKeyDown), this.input.addEventListener("keyup", this.onInputKeyUp), this.send.addEventListener("click", this.sendChatMessage), services_client.on("welcome", this.onWelcome), services_client.on("chat", this.onMessage), services_client.on("join", this.onJoin), services_client.on("clear", this.clearChat);
        }
        updateMutedMessages() {
          var a;
          const e = this.messages.querySelectorAll("li");
          for (let t = 0; t < e.length; t++) {
            const i = e[t];
            if (i.hasAttribute("from")) {
              const e = i.getAttribute("from");
              (null === (a = services_client.get(e)) || undefined === a ? undefined : a.mutedChat) ? i.style.display = "none" : i.style.display = "";
            }
          }
          this.scrollDown();
        }
        isAtChatBottom() {
          return this.messages.scrollTop >= this.messages.scrollHeight - this.messages.clientHeight - 100;
        }
        scrollDown() {
          this.messages.scrollTop = this.messages.scrollHeight;
        }
        onDocumentKeyDown(a) {
          document.activeElement === this.input ? "Escape" === a.key && this.input.blur() : "Enter" === a.key && this.input.focus();
        }
        onInputKeyDown(a) {
          switch (a.key) {
            case "Enter":
              this.sendChatMessage();
              break;
            case "Escape":
              this.input.blur();
          }
          a.stopPropagation();
        }
        onInputKeyUp(a) {
          a.stopPropagation();
        }
        onWelcome({chat: a}) {
          this.clearChat();
          for (const e of a) e.name ? this.onMessage(e) : this.sendSystemMessage(e.content);
          this.messages.scrollTop = this.messages.scrollHeight;
        }
        onJoin() {
          this.messages.scrollTop = this.messages.scrollHeight;
        }
        supercharge(e) {
          let t = "";
          for (let i of e.content.split(" ")) {
            const e = i.match(a.REGEX_HYPERLINK);
            if (i.startsWith("@") && i.length > 2 && i.length <= 24) i = `<span class="mention">${escapeHtml(i)}</span>`; else if (e) {
              const a = escapeHtml(e[0]).replace(/&amp;/g, "&");
              i = `<a href="${a}" target="_blank">${a}</a>`;
            }
            t += `${i} `;
          }
          const i = t.matchAll(a.REGEX_EMOJI);
          for (const a of i) {
            const e = "a" === a[0][4], i = a[1];
            t = t.replace(a[0], `<img src="https://cdn.discordapp.com/emojis/${i}.${e ? "gif" : "png"}" alt="emoji" />`);
          }
          return t;
        }
        onMessage(e) {
          var t;
          const i = this.isAtChatBottom();
          if (!e.name) return void this.sendSystemMessage(e.content);
          e.content = escapeHtml(e.content), e.name = escapeHtml(e.name);
          const o = this.supercharge(e), s = document.createElement("span");
          s.classList.add("username"), s.style.color = e.color, s.innerHTML = "discord" === e.id ? `${e.name} <i class="fa-brands fa-discord"></i>` : e.name, s.title = e.id;
          const n = document.createElement("li");
          for (n.classList.add("message"), e.id && (n.setAttribute("from", e.id), (null === (t = services_client.get(e.id)) || undefined === t ? undefined : t.mutedChat) && (n.style.display = "none")), n.innerHTML = `${s.outerHTML}${o.trim()}`, this.messages.append(n); this.messages.children.length > a.MAX_MESSAGES;) this.messages.removeChild(this.messages.firstChild);
          i && this.scrollDown();
        }
        sendChatMessage() {
          this.input.value.trim() && (services_client.chat(this.input.value), this.input.value = "");
        }
        clearChat() {
          this.messages.innerHTML = "";
        }
        sendSystemMessage(a) {
          const e = this.isAtChatBottom(), t = document.createElement("li");
          t.textContent = a, t.classList.add("system"), this.messages.append(t), e && this.scrollDown();
        }
      }, e = new WeakMap, t = new WeakMap, i = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = m[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        o = [decorators_child], s = [decorators_child], n = [decorators_child], r = [bind], f = [bind], l = [bind], c = [bind], d = [bind], p = [bind], u = [bind], v = [bind], h = [bind], pv_chat_esDecorate(a, null, o, {kind: "accessor", name: "messages", static: false, private: false, access: {has: a => "messages" in a, get: a => a.messages, set: (a, e) => {
          a.messages = e;
        }}, metadata: t}, _, g), pv_chat_esDecorate(a, null, s, {kind: "accessor", name: "input", static: false, private: false, access: {has: a => "input" in a, get: a => a.input, set: (a, e) => {
          a.input = e;
        }}, metadata: t}, b, g), pv_chat_esDecorate(a, null, n, {kind: "accessor", name: "send", static: false, private: false, access: {has: a => "send" in a, get: a => a.send, set: (a, e) => {
          a.send = e;
        }}, metadata: t}, y, g), pv_chat_esDecorate(a, null, r, {kind: "method", name: "scrollDown", static: false, private: false, access: {has: a => "scrollDown" in a, get: a => a.scrollDown}, metadata: t}, null, g), pv_chat_esDecorate(a, null, f, {kind: "method", name: "onDocumentKeyDown", static: false, private: false, access: {has: a => "onDocumentKeyDown" in a, get: a => a.onDocumentKeyDown}, metadata: t}, null, g), pv_chat_esDecorate(a, null, l, {kind: "method", name: "onInputKeyDown", static: false, private: false, access: {has: a => "onInputKeyDown" in a, get: a => a.onInputKeyDown}, metadata: t}, null, g), pv_chat_esDecorate(a, null, c, {kind: "method", name: "onInputKeyUp", static: false, private: false, access: {has: a => "onInputKeyUp" in a, get: a => a.onInputKeyUp}, metadata: t}, null, g), pv_chat_esDecorate(a, null, d, {kind: "method", name: "onWelcome", static: false, private: false, access: {has: a => "onWelcome" in a, get: a => a.onWelcome}, metadata: t}, null, g), pv_chat_esDecorate(a, null, p, {kind: "method", name: "onJoin", static: false, private: false, access: {has: a => "onJoin" in a, get: a => a.onJoin}, metadata: t}, null, g), pv_chat_esDecorate(a, null, u, {kind: "method", name: "onMessage", static: false, private: false, access: {has: a => "onMessage" in a, get: a => a.onMessage}, metadata: t}, null, g), pv_chat_esDecorate(a, null, v, {kind: "method", name: "sendChatMessage", static: false, private: false, access: {has: a => "sendChatMessage" in a, get: a => a.sendChatMessage}, metadata: t}, null, g), pv_chat_esDecorate(a, null, h, {kind: "method", name: "clearChat", static: false, private: false, access: {has: a => "clearChat" in a, get: a => a.clearChat}, metadata: t}, null, g), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a.MAX_MESSAGES = 150, a.REGEX_HYPERLINK = /https?:\/\/[^\s@"'\$\{\}\\]{2,}/, a.REGEX_EMOJI = /&lt;a?:.*?:(\d+)&gt;/g, a;
    })();
    const src_components_pv_chat_pv_chat = null;
    customElements.define("pv-chat", PvChat);
    var pv_ping_code = '<i class="icon fas fa-circle"></i> <span class="ms">Pinging...</span> ';
    const pv_ping = pv_ping_code;
    var pv_ping_pv_ping = __webpack_require__(1358), pv_ping_options = {};
    pv_ping_options.styleTagTransform = styleTagTransform_default(), pv_ping_options.setAttributes = setAttributesWithoutAttributes_default(), pv_ping_options.insert = insertBySelector_default().bind(null, "head"), pv_ping_options.domAPI = styleDomAPI_default(), pv_ping_options.insertStyleElement = insertStyleElement_default();
    var pv_ping_update = injectStylesIntoStyleTag_default()(pv_ping_pv_ping.A, pv_ping_options);
    const components_pv_ping_pv_ping = pv_ping_pv_ping.A && pv_ping_pv_ping.A.locals ? pv_ping_pv_ping.A.locals : undefined;
    var pv_ping_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_ping_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_ping_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_ping_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvPing = (() => {
      var a, e, t;
      let i, o, s, n = pv_component, r = [], f = [], l = [];
      return a = class extends n {
        get icon() {
          return pv_ping_classPrivateFieldGet(this, e, "f");
        }
        set icon (a) {
          pv_ping_classPrivateFieldSet(this, e, a, "f");
        }
        get ms() {
          return pv_ping_classPrivateFieldGet(this, t, "f");
        }
        set ms (a) {
          pv_ping_classPrivateFieldSet(this, t, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_ping_runInitializers(this, r), pv_ping_runInitializers(this, f, undefined))), t.set(this, pv_ping_runInitializers(this, l, undefined)), this.pingDelay = 2e3;
        }
        connectedCallback() {
          this.innerHTML = pv_ping, this.pingInterval = setInterval(this.sendPing, this.pingDelay), services_client.isConnected() ? this.sendPing() : services_client.once("connected", this.sendPing);
        }
        sendPing() {
          let a = Date.now();
          services_client.ping() && (services_client.removeAllListeners("pong"), services_client.once("pong", () => {
            const e = Date.now() - a;
            this.icon.className = e < 200 ? "icon green fas fa-circle" : e < 500 ? "icon yellow fas fa-circle" : e < 1e3 ? "icon orange fas fa-circle" : "icon red fas fa-circle", this.ms.textContent = `${e} ms`;
          }));
        }
        disconnectedCallback() {
          clearInterval(this.pingInterval), services_client.off("connected", this.sendPing);
        }
      }, e = new WeakMap, t = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = n[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        i = [decorators_child], o = [decorators_child], s = [bind], pv_ping_esDecorate(a, null, i, {kind: "accessor", name: "icon", static: false, private: false, access: {has: a => "icon" in a, get: a => a.icon, set: (a, e) => {
          a.icon = e;
        }}, metadata: t}, f, r), pv_ping_esDecorate(a, null, o, {kind: "accessor", name: "ms", static: false, private: false, access: {has: a => "ms" in a, get: a => a.ms, set: (a, e) => {
          a.ms = e;
        }}, metadata: t}, l, r), pv_ping_esDecorate(a, null, s, {kind: "method", name: "sendPing", static: false, private: false, access: {has: a => "sendPing" in a, get: a => a.sendPing}, metadata: t}, null, r), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const src_components_pv_ping_pv_ping = null;
    customElements.define("pv-ping", PvPing);
    var pv_room_code = '<div class="room-selector"> <div class="room-name">Offline</div> <i class="fas fa-angle-down"></i> </div> ';
    const pv_room = pv_room_code;
    var pv_room_pv_room = __webpack_require__(6898), pv_room_options = {};
    pv_room_options.styleTagTransform = styleTagTransform_default(), pv_room_options.setAttributes = setAttributesWithoutAttributes_default(), pv_room_options.insert = insertBySelector_default().bind(null, "head"), pv_room_options.domAPI = styleDomAPI_default(), pv_room_options.insertStyleElement = insertStyleElement_default();
    var pv_room_update = injectStylesIntoStyleTag_default()(pv_room_pv_room.A, pv_room_options);
    const components_pv_room_pv_room = pv_room_pv_room.A && pv_room_pv_room.A.locals ? pv_room_pv_room.A.locals : undefined;
    var pv_room_esDecorate = function (a, e, t, i, o, s) {
      function n(a) {
        if (undefined !== a && "function" != typeof a) throw new TypeError("Function expected");
        return a;
      }
      for (var r, f = i.kind, l = "getter" === f ? "get" : "setter" === f ? "set" : "value", c = !e && a ? i.static ? a : a.prototype : null, d = e || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), p = false, u = t.length - 1; u >= 0; u--) {
        var v = {};
        for (var h in i) v[h] = "access" === h ? {} : i[h];
        for (var h in i.access) v.access[h] = i.access[h];
        v.addInitializer = function (a) {
          if (p) throw new TypeError("Cannot add initializers after decoration has completed");
          s.push(n(a || null));
        };
        var m = (0, t[u])("accessor" === f ? {get: d.get, set: d.set} : d[l], v);
        if ("accessor" === f) {
          if (undefined === m) continue;
          if (null === m || "object" != typeof m) throw new TypeError("Object expected");
          (r = n(m.get)) && (d.get = r), (r = n(m.set)) && (d.set = r), (r = n(m.init)) && o.unshift(r);
        } else (r = n(m)) && ("field" === f ? o.unshift(r) : d[l] = r);
      }
      c && Object.defineProperty(c, i.name, d), p = true;
    }, pv_room_runInitializers = function (a, e, t) {
      for (var i = arguments.length > 2, o = 0; o < e.length; o++) t = i ? e[o].call(a, t) : e[o].call(a);
      return i ? t : undefined;
    }, pv_room_classPrivateFieldGet = function (a, e, t, i) {
      if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? a !== e || !i : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === t ? i : "a" === t ? i.call(a) : i ? i.value : e.get(a);
    }, pv_room_classPrivateFieldSet = function (a, e, t, i, o) {
      if ("m" === i) throw new TypeError("Private method is not writable");
      if ("a" === i && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? a !== e || !o : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i ? o.call(a, t) : o ? o.value = t : e.set(a, t), t;
    };
    let PvRoom = (() => {
      var a, e, t;
      let i, o, s, n, r, f, l = pv_component, c = [], d = [], p = [];
      return a = class extends l {
        get roomSelector() {
          return pv_room_classPrivateFieldGet(this, e, "f");
        }
        set roomSelector (a) {
          pv_room_classPrivateFieldSet(this, e, a, "f");
        }
        get roomName() {
          return pv_room_classPrivateFieldGet(this, t, "f");
        }
        set roomName (a) {
          pv_room_classPrivateFieldSet(this, t, a, "f");
        }
        constructor() {
          super(), e.set(this, (pv_room_runInitializers(this, c), pv_room_runInitializers(this, d, undefined))), t.set(this, pv_room_runInitializers(this, p, undefined)), this.rooms = [], this.popup = null;
        }
        connectedCallback() {
          this.innerHTML = pv_room, this.roomSelector.addEventListener("click", this.onClickRoomSelector), services_client.on("welcome", this.updateAll), services_client.on("join", this.updateAll), services_client.on("leave", this.updateAll), services_client.on("rooms", this.updateRoomList), services_client.on("reconnecting", this.updateBrowserTab);
        }
        onClickRoomSelector(a) {
          this.popup = PopupManager.open(Dialog.ROOMS, this, this.rooms), this.popup.onClosing(() => this.popup = null);
        }
        updateRoomList(a) {
          var e;
          this.rooms = a, null === (e = this.popup) || undefined === e || e.updateRooms(a);
        }
        updateAll() {
          this.updateBrowserTab(), this.roomName.textContent = services_client.room.id + ` (${1 + services_client.users.length})` || "--";
          const a = services_client.room.id.match(/^Lobby(?: [1-9])?$|^Backrooms$/);
          this.roomSelector.classList.toggle("lobby", !!a);
        }
        updateBrowserTab() {
          services_client.room.id ? services_client.isConnected() ? document.title = `Pianoverse - ${services_client.room.id} (${1 + services_client.users.length})` : document.title = `Pianoverse - ${services_client.room.id}` : document.title = "Pianoverse";
        }
      }, e = new WeakMap, t = new WeakMap, (() => {
        var e;
        const t = "function" == typeof Symbol && Symbol.metadata ? Object.create(null !== (e = l[Symbol.metadata]) && undefined !== e ? e : null) : undefined;
        i = [decorators_child], o = [decorators_child], s = [bind], n = [bind], r = [bind], f = [bind], pv_room_esDecorate(a, null, i, {kind: "accessor", name: "roomSelector", static: false, private: false, access: {has: a => "roomSelector" in a, get: a => a.roomSelector, set: (a, e) => {
          a.roomSelector = e;
        }}, metadata: t}, d, c), pv_room_esDecorate(a, null, o, {kind: "accessor", name: "roomName", static: false, private: false, access: {has: a => "roomName" in a, get: a => a.roomName, set: (a, e) => {
          a.roomName = e;
        }}, metadata: t}, p, c), pv_room_esDecorate(a, null, s, {kind: "method", name: "onClickRoomSelector", static: false, private: false, access: {has: a => "onClickRoomSelector" in a, get: a => a.onClickRoomSelector}, metadata: t}, null, c), pv_room_esDecorate(a, null, n, {kind: "method", name: "updateRoomList", static: false, private: false, access: {has: a => "updateRoomList" in a, get: a => a.updateRoomList}, metadata: t}, null, c), pv_room_esDecorate(a, null, r, {kind: "method", name: "updateAll", static: false, private: false, access: {has: a => "updateAll" in a, get: a => a.updateAll}, metadata: t}, null, c), pv_room_esDecorate(a, null, f, {kind: "method", name: "updateBrowserTab", static: false, private: false, access: {has: a => "updateBrowserTab" in a, get: a => a.updateBrowserTab}, metadata: t}, null, c), t && Object.defineProperty(a, Symbol.metadata, {enumerable: true, configurable: true, writable: true, value: t});
      })(), a;
    })();
    const src_components_pv_room_pv_room = null;
    customElements.define("pv-room", PvRoom);
    let lastSent = Date.now(), lastCoords = {x: 0, y: 0}, hideMyCursor = !settingsmanager.get("showCursors");
    settingsmanager.on("showCursors", a => {
      hideMyCursor = !a, hideMyCursor && services_client.move(1, 1);
    }), document.addEventListener("touchmove", a => {
      var e, t, i, o, s, n;
      hideMyCursor || Date.now() - lastSent < 10 || Math.sqrt(Math.pow(lastCoords.x - {x: null === (e = a.touches[0]) || undefined === e ? undefined : e.clientX, y: null === (t = a.touches[0]) || undefined === t ? undefined : t.clientY}.x, 2) + Math.pow(lastCoords.y - {x: null === (e = a.touches[0]) || undefined === e ? undefined : e.clientX, y: null === (t = a.touches[0]) || undefined === t ? undefined : t.clientY}.y, 2)) < 3 || (services_client.move((null === (i = a.touches[0]) || undefined === i ? undefined : i.clientX) / window.innerWidth, (null === (o = a.touches[0]) || undefined === o ? undefined : o.clientY) / window.innerHeight), lastSent = Date.now(), lastCoords = {x: null === (s = a.touches[0]) || undefined === s ? undefined : s.clientX, y: null === (n = a.touches[0]) || undefined === n ? undefined : n.clientY});
    }), document.addEventListener("mousemove", a => {
      hideMyCursor || Date.now() - lastSent < 10 || Math.sqrt(Math.pow(lastCoords.x - {x: a.clientX, y: a.clientY}.x, 2) + Math.pow(lastCoords.y - {x: a.clientX, y: a.clientY}.y, 2)) < 3 || (services_client.move(a.clientX / window.innerWidth, a.clientY / window.innerHeight), lastSent = Date.now(), lastCoords = {x: a.clientX, y: a.clientY});
    });
    const cursors = new Map, timeouts = new Map;
    function setFavicon(a) {
      document.querySelector("link[rel=icon]").href = a ? "favicon-light.svg" : "favicon-dark.svg";
    }
    services_client.on("welcome", a => {
      cursors.forEach(a => a.parentNode.removeChild(a)), cursors.clear();
    }), services_client.on("join", a => {
      if (cursors.has(a.id)) return;
      const e = new src_components_pv_cursor_pv_cursor;
      services_client.me.tags.push("DEV");
      e.setAttribute("name", a.name), e.setAttribute("color", a.color), e.classList.add("idle"), e.style.left = a.x * window.innerWidth + "px", e.style.top = a.y * window.innerHeight + "px", e.style.color = a.color, document.body.append(e), cursors.set(a.id, e);
    }), services_client.on("move", a => {
      if (!cursors.has(a.id)) return;
      const e = cursors.get(a.id);
      e.style.left = a.x * window.innerWidth + "px", e.style.top = a.y * window.innerHeight + "px", e.classList.remove("idle"), timeouts.has(a.id) && (clearTimeout(timeouts.get(a.id)), timeouts.delete(a.id)), timeouts.set(a.id, setTimeout(() => e.classList.add("idle"), 1500));
    }), services_client.on("leave", a => {
      var e;
      if (!cursors.has(a.id)) return;
      const t = cursors.get(a.id);
      null === (e = t.parentNode) || undefined === e || e.removeChild(t), cursors.delete(a.id);
    }), services_client.on("profile", a => {
      if (!cursors.has(a.id)) return;
      const e = cursors.get(a.id);
      e.setAttribute("name", a.name), e.setAttribute("color", a.color);
    }), services_client.on("reconnecting", () => {
      Array.from(cursors.values()).forEach(a => {
        var e;
        null === (e = a.parentNode) || undefined === e || e.removeChild(a);
      }), cursors.clear();
    }), settingsmanager.on("theme", a => document.body.dataset.theme = a), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", a => setFavicon(a.matches)), setFavicon(window.matchMedia("(prefers-color-scheme: dark)").matches), loadermanager.start("Joining the room..."), settingsmanager.restore(), settingsmanager.setDefault("volume", 100), settingsmanager.setDefault("transpose", 0), settingsmanager.setDefault("velocity", 110), settingsmanager.setDefault("sustain", false), settingsmanager.setDefault("theme", "dark"), settingsmanager.setDefault("keyboardLayout", "virtualpiano"), settingsmanager.setDefault("showCursors", true), settingsmanager.setDefault("showEffects", true), settingsmanager.setDefault("showLabels", false), settingsmanager.setDefault("sound", "salamander"), settingsmanager.setDefault("velocity-curve", "linear"), settingsmanager.remove("snow"), services_client.init();
  })();
  