/*!
 * OracleJS-0.0.3
 * Copyright (c) 2021 Ridwan Olanrewaju.
 * Licensed under the MIT license.
 */
!(function (e, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define(r)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).oracle = r());
})(this, function () {
  "use strict";
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ function e(
    e,
    r,
    t,
    n
  ) {
    return new (t || (t = Promise))(function (i, o) {
      function s(e) {
        try {
          u(n.next(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        try {
          u(n.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function u(e) {
        var r;
        e.done
          ? i(e.value)
          : ((r = e.value),
            r instanceof t
              ? r
              : new t(function (e) {
                  e(r);
                })).then(s, a);
      }
      u((n = n.apply(e, r || [])).next());
    });
  }
  function r(e, r) {
    var t,
      n,
      i,
      o,
      s = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (o = { next: a(0), throw: a(1), return: a(2) }),
      "function" == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function a(o) {
      return function (a) {
        return (function (o) {
          if (t) throw new TypeError("Generator is already executing.");
          for (; s; )
            try {
              if (
                ((t = 1),
                n &&
                  (i =
                    2 & o[0]
                      ? n.return
                      : o[0]
                      ? n.throw || ((i = n.return) && i.call(n), 0)
                      : n.next) &&
                  !(i = i.call(n, o[1])).done)
              )
                return i;
              switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return s.label++, { value: o[1], done: !1 };
                case 5:
                  s.label++, (n = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !((i = s.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    s.label = o[1];
                    break;
                  }
                  if (6 === o[0] && s.label < i[1]) {
                    (s.label = i[1]), (i = o);
                    break;
                  }
                  if (i && s.label < i[2]) {
                    (s.label = i[2]), s.ops.push(o);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              o = r.call(e, s);
            } catch (e) {
              (o = [6, e]), (n = 0);
            } finally {
              t = i = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        })([o, a]);
      };
    }
  }
  var t = Object.entries({
    console: "console-browserify",
    constants: "constants-browserify",
    crypto: "crypto-browserify",
    http: "http-browserify",
    buffer: "buffer",
    os: "os-browserify/browser.js",
    vm: "vm-browserify",
    zlib: "zlib-browserify",
    assert: "assert",
    child_process: "browser-builtins/builtin/child_process.js",
    cluster: "browser-builtins/builtin/cluster.js",
    dgram: "browser-builtins/builtin/dgram.js",
    dns: "browser-builtins/builtin/dns.js",
    domain: "domain-browser",
    events: "events",
    fs: "browser-builtins/builtin/fs.js",
    https: "https-browserify",
    module: "browser-builtins/builtin/module.js",
    net: "browser-builtins/builtin/net.js",
    path: "path-browserify",
    process: "process/browser.js",
    punycode: "punycode",
    querystring: "browser-builtins/builtin/querystring.js",
    readline: "browser-builtins/builtin/readline.js",
    repl: "browser-builtins/builtin/repl.js",
    stream: "browser-builtins/builtin/stream.js",
    string_decoder: "string_decoder",
    sys: "browser-builtins/builtin/sys.js",
    timers: "browser-builtins/builtin/timers.js",
    tls: "browser-builtins/builtin/tls.js",
    tty: "tty-browserify",
    url: "browser-builtins/builtin/url.js",
    util: "browser-builtins/builtin/util.js",
    _shims: "browser-builtins/builtin/_shims.js",
    _stream_duplex: "browser-builtins/builtin/_stream_duplex.js",
    _stream_readable: "browser-builtins/builtin/_stream_readable.js",
    _stream_writable: "browser-builtins/builtin/_stream_writable.js",
    _stream_transform: "browser-builtins/builtin/_stream_transform.js",
    _stream_passthrough: "browser-builtins/builtin/_stream_passthrough.js",
  }).reduce(function (e, r) {
    var t = r[0],
      n = r[1];
    return (e[t] = "http://www.unpkg.com/" + n), e;
  }, {});
  var n = {
    defConv: function (e) {
      var r = [/export default (?<module>.*)/, "module.exports = $<module>"];
      return this.appease(e, /export default .*/g, function (e) {
        return [e, e.replace.apply(e, r)];
      });
    },
  };
  var i = {
    varConv: function (e) {
      var r = [
        /.*(let|var|const) (?<variable>.*)/,
        "module.exports.$<variable> = undefined",
      ];
      return this.appease(e, /export (let|var|const) .*/g, function (e) {
        return [e, e.replace.apply(e, r)];
      });
    },
    fnConv: function (e) {
      var r = [
        /export (?<initial>.*)(?<main>function\*? )(?<name>\w+)(?<rest>.*)/,
        "module.exports.$<name> = $<initial>$<main>$<name>$<rest>",
      ];
      return this.appease(e, /export (async )?function.*/g, function (e) {
        return [e, e.replace.apply(e, r)];
      });
    },
    classConv: function (e) {
      var r = [
        /export class (?<name>\w+)(?<rest>.*)/,
        "module.exports.$<name> = class $<name>$<rest>",
      ];
      return this.appease(e, /export class .*/g, function (e) {
        return [e, e.replace.apply(e, r)];
      });
    },
  };
  var o = {
    reExpEvConv: function (e) {
      var r = [
        /export \* from (?<name>.[.\\\w/:]+.)/,
        "Object.entries(require($<name>)).forEach(\n ([name, exported]) => (module.exports[name] = exported)\n)",
      ];
      return this.appease(e, /export \* from .*/g, function (e) {
        return [e, e.replace.apply(e, r)];
      });
    },
    reExpClauseConv: function (e) {
      return this.appease(e, /export {.*}( from .*)?/g, function (e) {
        var r = e.includes("from"),
          t = e
            .match(/(?<={.*)(\w.*\w)(?=.*})/g)[0]
            .split(", ")
            .map(function (e) {
              if (/\w+ as \w+/.test(e)) {
                return e.replace(
                  /(?<module>[\w]+) as (?<key>[\w]+)/,
                  "$<module>: $<key>"
                );
              }
              return e;
            }),
          n = t
            .map(function (e) {
              return r ? e.split(": ").pop() : e.split(": ");
            })
            .map(function (e) {
              return r
                ? "module.exports." + e + " = " + e + ";"
                : "module.exports." + (e[1] || e[0]) + " = " + e[0];
            })
            .join("\n"),
          i = r
            ? [
                /.* from (?<name>.[.\\\w/:]+.);?/,
                "const { " + t.join(", ") + " } = require($<name>);\n" + n,
              ]
            : [/.*/, n];
        return [e, e.replace.apply(e, i)];
      });
    },
  };
  var s = {
    combinedImpt: function (e) {
      return this.appease(e, /import \w+, (.*) from .*/g, function (e) {
        var r = e
          .match(/(?<=import )(.*)(?= from)/g)[0]
          .replace(",", "!")
          .split("!")
          .map(function (r) {
            return /.+\* as (?<key>\w+).+/.test(r)
              ? ((t = [
                  /.*as (?<ns>\w+).*from (?<file>.[.\\\w/:]+.).*/,
                  "const $<ns> = Object.entries(require($<file>))\n .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})",
                ]),
                e.replace.apply(e, t))
              : /.?{.*}/.test(r)
              ? (function (r) {
                  var t = [
                    /.*from (?<name>.[.\\\w/:]+.);?/,
                    "const { " +
                      r
                        .match(/(?<={.*)(\w.*\w)(?=.*})/g)[0]
                        .split(", ")
                        .map(function (e) {
                          if (/\w+ as \w+/.test(e)) {
                            var r = /(?<module>[\w]+) as (?<key>[\w]+)/;
                            return e.replace(r, "$<module>: $<key>");
                          }
                          return e;
                        })
                        .join(", ") +
                      " } = require($<name>);",
                  ];
                  return e.replace.apply(e, t);
                })(r)
              : (function (r) {
                  var t = [
                    /.*from (?<name>.[.\\\w/:]+.);?/,
                    "const " + r + " = require($<name>);",
                  ];
                  return e.replace.apply(e, t);
                })(r);
            var t;
          })
          .join("\n");
        return [e, r];
      });
    },
  };
  var a = {
    defImpt: function (e) {
      var r = [
        /import (?<variable>\w+) from (?<file>.[.\\\w/:]+["'`]).*/,
        "const $<variable> = require($<file>);",
      ];
      return this.appease(e, /import \w+ from .*/g, function (e) {
        return [e, e.replace.apply(e, r)];
      });
    },
  };
  var u = {
    empImpt: function (e) {
      var r = [
        /import (?<name>.[.\\\w/:]+["'`]).*/,
        'new Function("require($<name>)")()',
      ];
      return this.appease(e, /import .[.\\\w/:]+["'`];?/g, function (e) {
        return [e, e.replace.apply(e, r)];
      });
    },
  };
  var c = {
    namedImpt: function (e) {
      return this.appease(e, /import {.*} from .*/g, function (e) {
        var r = [
          /.* from (?<name>.[.\\\w/:]+.);?/,
          "const { " +
            e
              .match(/(?<={.*)(\w.*\w)(?=.*})/g)[0]
              .split(", ")
              .map(function (e) {
                if (/\w+ as \w+/.test(e)) {
                  return e.replace(
                    /(?<module>[\w]+) as (?<key>[\w]+)/,
                    "$<module>: $<key>"
                  );
                }
                return e;
              })
              .join(", ") +
            " } = require($<name>);",
        ];
        return [e, e.replace.apply(e, r)];
      });
    },
  };
  var l = {
    namespaceImpt: function (e) {
      var r = [
        /.*as (?<ns>\w+).*from (?<file>.[.\\\w/:]+.).*/,
        "const $<ns> = Object.entries(require($<file>))\n .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})",
      ];
      return this.appease(e, /import \* as \w+ from .*/g, function (e) {
        return [e, e.replace.apply(e, r)];
      });
    },
  };
  function p(e, r, t) {
    if (r.test(e)) {
      var n = e.match(r).map(t);
      return (function (e, r) {
        return (
          r.forEach(function (r) {
            var t = r[0],
              n = r[1];
            e = e.replace(t, n);
          }),
          e
        );
      })(e, n);
    }
    return e;
  }
  function f(e) {
    return [u, a, c, l, s]
      .map(function (e) {
        return Object.values(e);
      })
      .flat()
      .reduce(function (e, r) {
        return r.call({ appease: p }, e);
      }, e);
  }
  function m(e) {
    return [n, i, o]
      .map(function (e) {
        return Object.values(e);
      })
      .flat()
      .reduce(function (e, r) {
        return r.call({ appease: p }, e);
      }, e);
  }
  function b(e) {
    return [n, i, o, u, a, c, l, s]
      .map(function (e) {
        return Object.values(e);
      })
      .flat()
      .reduce(function (e, r) {
        return r.call({ appease: p }, e);
      }, e);
  }
  (f.emptyImports = u),
    (f.defaultImports = a),
    (f.namedImports = c),
    (f.namespaceImports = l),
    (f.combinedImports = s),
    (m.defaultExports = n),
    (m.namedExports = i),
    (m.reExports = o);
  var d = console.log,
    h = "undefined" != typeof window && window,
    v =
      ("undefined" != typeof global &&
        "undefined" != typeof require &&
        require("cross-fetch")) ||
      fetch;
  function w(e, r) {
    return (
      (e = e.split(/(?<=\w)\//)),
      r.split("/").forEach(function (r) {
        return "." === r
          ? --e.length
          : ".." === r
          ? e.splice(-2)
          : void e.push(r);
      }),
      e.filter(Boolean).join("/")
    );
  }
  function y(e, r, n) {
    return (r = r.replace(
      /.*require\([`'"](?<module>.*)["'`]\).*/,
      "$<module>"
    )).startsWith(".")
      ? [r, w(e, r)]
      : r.endsWith("/")
      ? [r, r + r.split("/").filter(Boolean).pop()]
      : t.hasOwnProperty(r)
      ? [r, t[r]]
      : [n || r, r];
  }
  var g = (function () {
    var e = new Map();
    for (var r in globalThis) e.set(r, globalThis[r]);
    return { aforolagba: e, track: [], exists: {} };
  })();
  function j(e) {
    var r = g.aforolagba,
      t = Object.fromEntries(r);
    try {
      var n = (h || require("browser-env")).window,
        i = { exports: {}, __esModule: !0 },
        o = [globalThis, i.exports, i, n, t];
      return (
        new Function(
          "global",
          "exports",
          "module",
          "window",
          "aforolagba",
          e
        ).apply(t, o),
        i.exports
      );
    } catch (e) {
      console.log(e);
    }
  }
  function x(t, n, i) {
    return (
      void 0 === i && (i = 3),
      e(this, void 0, void 0, function () {
        return r(this, function (o) {
          return [
            2,
            v(t, n).catch(function (o) {
              return e(this, void 0, void 0, function () {
                return r(this, function (e) {
                  if (!i) throw o;
                  return [2, x(t, n, --i)];
                });
              });
            }),
          ];
        });
      })
    );
  }
  function $(t, n) {
    return e(this, void 0, void 0, function () {
      var i = this;
      return r(this, function (o) {
        switch (o.label) {
          case 0:
            return [
              4,
              Promise.all(
                t.map(function (t) {
                  var o = t[0],
                    s = t[1];
                  return e(i, void 0, void 0, function () {
                    var e, t, i, a, u;
                    return r(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return (
                            (e = s.startsWith("http")),
                            (t = e ? s.replace("https", "http") : ""),
                            [4, x(e ? t : "" + n + s)]
                          );
                        case 1:
                          return [4, (i = r.sent()).text()];
                        case 2:
                          return (
                            (a = r.sent()),
                            s.endsWith(".json") &&
                              (a = Function("return " + a)()),
                            (u = i.url),
                            [2, { name: o, url: u, value: a }]
                          );
                      }
                    });
                  });
                })
              ).catch(function (e) {
                return d(e), Promise.reject(e);
              }),
            ];
          case 1:
            return [2, o.sent()];
        }
      });
    });
  }
  function _(t, n, i) {
    return (
      void 0 === i && (i = []),
      e(this, void 0, void 0, function () {
        var o, s, a;
        return r(this, function (u) {
          switch (u.label) {
            case 0:
              return (
                (o = g.aforolagba),
                (s = g.track),
                (a = g.exists),
                t.forEach(function (e, r) {
                  var n = e[0];
                  o.has(n) || i.push(t[r]);
                }),
                i.length
                  ? [
                      4,
                      $(i, n).then(function (t) {
                        return e(this, void 0, void 0, function () {
                          return r(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [
                                  4,
                                  Promise.all(
                                    t.map(function (t) {
                                      return e(
                                        this,
                                        void 0,
                                        void 0,
                                        function () {
                                          var e, n, i, u, c, l, p;
                                          return r(this, function (r) {
                                            return (
                                              (e = t.value),
                                              (n = t.name),
                                              (i = t.url),
                                              (u = /(?<=.*[\s(])require\([`'"](?<mod>[^`'"]+)[`'"]\)/g),
                                              (c = /require\([`'"](?<mod>[^`'"]+)[`'"]\)/),
                                              "aforolagba['$<mod>']",
                                              (l = function (e) {
                                                return e.replace(c, "$<mod>");
                                              }),
                                              (p = function (e) {
                                                return y(i, e);
                                              }),
                                              "string" == typeof e
                                                ? (o.set(
                                                    n,
                                                    (e = b(
                                                      e.replace(
                                                        /.use strict.;?[\s]*/,
                                                        ""
                                                      )
                                                    ))
                                                  ),
                                                  o.set(
                                                    n,
                                                    e.replace(
                                                      u,
                                                      "aforolagba['$<mod>']"
                                                    )
                                                  ),
                                                  e.startsWith("Cannot find") &&
                                                    d(n + ": " + e),
                                                  /.*[\s(]require\([`'"][^`'"]+["'`]\).*/.test(
                                                    e
                                                  ) &&
                                                    ((a[n] = Array.from(
                                                      new Set(e.match(u).map(l))
                                                    )),
                                                    s.push(e.match(u).map(p))))
                                                : o.set(n, e),
                                              [2]
                                            );
                                          });
                                        }
                                      );
                                    })
                                  ).catch(function (e) {
                                    return d(e), Promise.reject();
                                  }),
                                ];
                              case 1:
                                return n.sent(), [2];
                            }
                          });
                        });
                      }),
                    ]
                  : [2]
              );
            case 1:
              return u.sent(), [2];
          }
        });
      })
    );
  }
  function k(t, n) {
    return e(this, void 0, void 0, function () {
      var i,
        o,
        s,
        a = this;
      return r(this, function (u) {
        switch (u.label) {
          case 0:
            return [4, _(t, n)];
          case 1:
            u.sent(),
              (i = g.aforolagba),
              (o = g.track),
              (s = function (t) {
                return e(a, void 0, void 0, function () {
                  return r(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, _(t, n)];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              }),
              (u.label = 2);
          case 2:
            return o.length ? [4, Promise.all(o.splice(0).map(s))] : [3, 4];
          case 3:
            return u.sent(), [3, 2];
          case 4:
            return [2, i];
        }
      });
    });
  }
  function q(t, n) {
    return e(this, void 0, void 0, function () {
      function e(e) {
        var r = e[0],
          t = e[1];
        "string" == typeof t &&
          (a.hasOwnProperty(r)
            ? (function (e, r, t, n) {
                void 0 === n && (n = []);
                var i = [];
                function o(e) {
                  n.push(e);
                  var o = t[e];
                  Array.isArray(o) &&
                    o.forEach(function (e) {
                      "string" == typeof r.get(e) && i.push(e);
                    });
                }
                for (o(e); i.length; ) o(i.pop());
                return n;
              })(r, s, a)
                .reverse()
                .forEach(i)
            : s.set(r, j(t)));
      }
      function i(e) {
        var r = s.get(e);
        "string" == typeof r && s.set(e, j(r));
      }
      var o, s, a, u;
      return r(this, function (r) {
        switch (r.label) {
          case 0:
            return (
              (o = function (e) {
                var r = e[0],
                  t = e[1];
                return y(n, t, r);
              }),
              [4, k(Object.entries(t).map(o), n)]
            );
          case 1:
            for (u in (r.sent(),
            (s = g.aforolagba),
            (a = g.exists),
            Array.from(s)
              .filter(function (e) {
                var r = e[0];
                return e[1], !globalThis.hasOwnProperty(r);
              })
              .reverse()
              .forEach(e),
            t))
              t[u] = s.get(u);
            return [2, t];
        }
      });
    });
  }
  function E(t, n) {
    return (
      void 0 === n && (n = "http://www.unpkg.com/"),
      e(this, void 0, void 0, function () {
        var e, i;
        return r(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, q(t, n)];
            case 1:
              for (i in (e = r.sent())) globalThis[i] = e[i];
              return [2, e];
          }
        });
      })
    );
  }
  return (E.convertImports = f), (E.convertExports = m), (E.convertAll = b), E;
});
