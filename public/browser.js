/*!
 * OracleJS-0.1.0
 * Copyright (c) 2021 Ridwan Olanrewaju.
 * Licensed under the MIT license.
 */
!(function (e, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define(r)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).oracle =
        r());
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
    return new (t || (t = Promise))(function (o, a) {
      function i(e) {
        try {
          s(n.next(e));
        } catch (e) {
          a(e);
        }
      }
      function u(e) {
        try {
          s(n.throw(e));
        } catch (e) {
          a(e);
        }
      }
      function s(e) {
        var r;
        e.done
          ? o(e.value)
          : ((r = e.value),
            r instanceof t
              ? r
              : new t(function (e) {
                  e(r);
                })).then(i, u);
      }
      s((n = n.apply(e, r || [])).next());
    });
  }
  function r(e, r) {
    var t,
      n,
      o,
      a,
      i = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: u(0), throw: u(1), return: u(2) }),
      "function" == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function u(a) {
      return function (u) {
        return (function (a) {
          if (t) throw new TypeError("Generator is already executing.");
          for (; i; )
            try {
              if (
                ((t = 1),
                n &&
                  (o =
                    2 & a[0]
                      ? n.return
                      : a[0]
                      ? n.throw || ((o = n.return) && o.call(n), 0)
                      : n.next) &&
                  !(o = o.call(n, a[1])).done)
              )
                return o;
              switch (((n = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                case 0:
                case 1:
                  o = a;
                  break;
                case 4:
                  return i.label++, { value: a[1], done: !1 };
                case 5:
                  i.label++, (n = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = i.ops.pop()), i.trys.pop();
                  continue;
                default:
                  if (
                    !((o = i.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                    i.label = a[1];
                    break;
                  }
                  if (6 === a[0] && i.label < o[1]) {
                    (i.label = o[1]), (o = a);
                    break;
                  }
                  if (o && i.label < o[2]) {
                    (i.label = o[2]), i.ops.push(a);
                    break;
                  }
                  o[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              a = r.call(e, i);
            } catch (e) {
              (a = [6, e]), (n = 0);
            } finally {
              t = o = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, u]);
      };
    }
  }
  var t = [
      "child_process",
      "cluster",
      "dgram",
      "dns",
      "fs",
      "module",
      "net",
      "querystring",
      "readline",
      "repl",
      "stream",
      "sys",
      "timers",
      "tls",
      "url",
      "util",
      "_shims",
      "_stream_duplex",
      "_stream_readable",
      "_stream_writable",
      "_stream_transform",
      "_stream_passthrough",
    ],
    n = Object.fromEntries(
      Object.entries({
        assert: "assert",
        buffer: "buffer",
        console: "console-browserify",
        constants: "constants-browserify",
        crypto: "crypto-browserify",
        domain: "domain-browser",
        events: "events",
        http: "http-browserify",
        https: "https-browserify",
        os: "os-browserify/browser.js",
        path: "path-browserify",
        process: "process/browser.js",
        punycode: "punycode",
        string_decoder: "string_decoder",
        tty: "tty-browserify",
        vm: "vm-browserify",
        zlib: "zlib-browserify",
      }).map(function (e) {
        return [e[0], "http://www.unpkg.com/" + e[1]];
      })
    );
  var o = {
    defConv: function (e) {
      var r = [/export default (?<module>.*)/, "module.exports = $<module>"];
      return this.appease(e, /export default .*/g, function (e) {
        return [e, e.replace.apply(e, r)];
      });
    },
  };
  var a = {
    varConv: function (e) {
      var r = [
          /.*(let|var|const) (?<variable>\w+)[\s*;]$/,
          "module.exports.$<variable> = undefined;",
        ],
        t = [
          /.*(let|var|const) (?<variable>\w+)(?<whatever>.*)/,
          "module.exports.$<variable>$<whatever>",
        ];
      return this.appease(e, /export (let|var|const) .*/g, function (e) {
        var n;
        return [e, (n = e.replace.apply(e, r)).replace.apply(n, t)];
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
  var i = {
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
          o = r
            ? [
                /.* from (?<name>.[.\\\w/:]+.);?/,
                "const { " + t.join(", ") + " } = require($<name>);\n" + n,
              ]
            : [/.*/, n];
        return [e, e.replace.apply(e, o)];
      });
    },
  };
  var u = {
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
  var s = {
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
  var c = {
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
  var l = {
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
  var p = {
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
  function f(e, r, t) {
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
  function m(e) {
    return [c, s, l, p, u]
      .map(function (e) {
        return Object.values(e);
      })
      .flat()
      .reduce(function (e, r) {
        return r.call({ appease: f }, e);
      }, e);
  }
  function d(e) {
    return [o, a, i]
      .map(function (e) {
        return Object.values(e);
      })
      .flat()
      .reduce(function (e, r) {
        return r.call({ appease: f }, e);
      }, e);
  }
  function v(e) {
    return [o, a, i, c, s, l, p, u]
      .map(function (e) {
        return Object.values(e);
      })
      .flat()
      .reduce(function (e, r) {
        return r.call({ appease: f }, e);
      }, e);
  }
  (m.emptyImports = c),
    (m.defaultImports = s),
    (m.namedImports = l),
    (m.namespaceImports = p),
    (m.combinedImports = u),
    (d.defaultExports = o),
    (d.namedExports = a),
    (d.reExports = i);
  var h = function (e) {
      return "string" == typeof e;
    },
    w = console.log,
    y =
      ("undefined" != typeof window && window) ||
      ("undefined" != typeof global && global) ||
      {},
    b = "http://wzrd.in/standalone/";
  function g(e, r) {
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
  function x(e, r, t) {
    return r.startsWith(".")
      ? [r, g(e, r)]
      : r.endsWith("/")
      ? [r, r + r.split("/").filter(Boolean).pop()]
      : n.hasOwnProperty(r)
      ? [r, n[r]]
      : [t || r, r];
  }
  var $ = { aforolagba: new Map(), track: [], deps: {} };
  function j(e, r) {
    var t = { exports: {}, __esModule: !0 },
      n = Object.fromEntries($.aforolagba),
      o = [y, t.exports, t, window, n];
    try {
      return (
        new Function(
          "global",
          "exports",
          "module",
          "window",
          "aforolagba",
          e
        ).apply(n, o),
        t.exports
      );
    } catch (t) {
      console.log(r, t), console.log(e);
    }
  }
  function k(t, n, o) {
    return (
      void 0 === o && (o = 3),
      e(this, void 0, void 0, function () {
        return r(this, function (a) {
          return [
            2,
            fetch(t, n).catch(function (a) {
              return e(this, void 0, void 0, function () {
                return r(this, function (e) {
                  if (!o) throw a;
                  return [2, k(t, n, --o)];
                });
              });
            }),
          ];
        });
      })
    );
  }
  function O(t, n) {
    return e(this, void 0, void 0, function () {
      var o = this;
      return r(this, function (a) {
        switch (a.label) {
          case 0:
            return [
              4,
              Promise.all(
                t.map(function (t) {
                  var a = t[0],
                    i = t[1];
                  return e(o, void 0, void 0, function () {
                    var e, t, o, u, s, c;
                    return r(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return (
                            (e = i.startsWith("http")),
                            (t = e ? i.replace("https", "http") : ""),
                            (o = i.startsWith("@") || -1 != i.indexOf("^")),
                            (u = o ? "http://unpkg.com/" : n),
                            [4, k(e ? t : "" + u + i)]
                          );
                        case 1:
                          return (
                            (s = r.sent()),
                            (c = { name: a, url: s.url }),
                            [4, s.text()]
                          );
                        case 2:
                          return [2, ((c.value = r.sent()), c)];
                      }
                    });
                  });
                })
              ).catch(function (e) {
                return console.log(e), Promise.reject(e);
              }),
            ];
          case 1:
            return [2, a.sent()];
        }
      });
    });
  }
  function _(n, o) {
    return (
      void 0 === o && (o = b),
      e(this, void 0, void 0, function () {
        var a, i, u;
        return r(this, function (s) {
          switch (s.label) {
            case 0:
              return (
                (a = $.aforolagba),
                (i = $.track),
                (u = $.deps),
                [
                  4,
                  O(
                    (n = n.filter(function (e) {
                      var r = e[0];
                      return !a.has(r);
                    })),
                    o
                  ).then(function (n) {
                    return e(this, void 0, void 0, function () {
                      return r(this, function (o) {
                        switch (o.label) {
                          case 0:
                            return [
                              4,
                              Promise.all(
                                n.map(function (n) {
                                  var o = n.value,
                                    s = n.name,
                                    c = n.url;
                                  return e(this, void 0, void 0, function () {
                                    var e, n, l, p;
                                    return r(this, function (r) {
                                      return (
                                        (e =
                                          /require\([`'"](?<mod>[^`'"]+)[`'"]\)/),
                                        (n =
                                          /(?<=.*[\s(])require\([`'"](?<mod>[^`'"]+)[`'"]\)/g),
                                        (l = function (e) {
                                          return e.replace(
                                            /.use strict.;?[\s]*/,
                                            ""
                                          );
                                        }),
                                        (p = function (r) {
                                          return r.replace(e, "$<mod>");
                                        }),
                                        h(o)
                                          ? ((o = v(l(o))),
                                            a.set(
                                              s,
                                              o.replace(
                                                n,
                                                "aforolagba['$<mod>']"
                                              )
                                            ),
                                            !t.includes(s) &&
                                            /.*[\s(]require\([`'"][^`'"]+["'`]\).*/.test(
                                              o
                                            )
                                              ? ((u[s] = Array.from(
                                                  new Set(o.match(n).map(p))
                                                )),
                                                i.push(
                                                  (function (e, r) {
                                                    return e
                                                      .map(function (e) {
                                                        return e.replace(
                                                          /.*require\([`'"](?<module>.*)["'`]\).*/,
                                                          "$<module>"
                                                        );
                                                      })
                                                      .map(function (e) {
                                                        return x(r, e);
                                                      });
                                                  })(o.match(n), c)
                                                ))
                                              : !(function (e) {
                                                  try {
                                                    JSON.parse(e);
                                                  } catch (e) {
                                                    return !1;
                                                  }
                                                  return !0;
                                                })(o)
                                              ? a.set(s, j(o, s))
                                              : a.set(s, JSON.parse(o)))
                                          : a.set(s, o),
                                        [2]
                                      );
                                    });
                                  });
                                })
                              ).catch(function (e) {
                                return w(e), Promise.reject();
                              }),
                            ];
                          case 1:
                            return o.sent(), [2];
                        }
                      });
                    });
                  }),
                ]
              );
            case 1:
              return s.sent(), [2];
          }
        });
      })
    );
  }
  function q(t, n) {
    return (
      void 0 === n && (n = b),
      e(this, void 0, void 0, function () {
        var e, o;
        return r(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, _(t, n)];
            case 1:
              return (
                r.sent(),
                (o = $.deps),
                (e = $.track).length
                  ? [2, q(e.pop())]
                  : [
                      2,
                      Array.from(new Set(Object.values(o).flat())).filter(
                        function (e) {
                          return !y.hasOwnProperty(e);
                        }
                      ),
                    ]
              );
          }
        });
      })
    );
  }
  function E(t, n) {
    return (
      void 0 === n && (n = b),
      e(this, void 0, void 0, function () {
        var e, o, a, i, u, s;
        return r(this, function (r) {
          switch (r.label) {
            case 0:
              return (
                (e = $.aforolagba),
                (o = $.deps),
                (a = function (e) {
                  var r = e[0],
                    t = e[1];
                  return x(n, t, r);
                }),
                [4, q(Object.entries(t).map(a), n)]
              );
            case 1:
              for (i = r.sent(), u = 0; u < i.length; u++)
                i = i.filter(function (r) {
                  var t = function (r) {
                    return e.get(r);
                  };
                  return (
                    !!h(t(r)) &&
                    (!(
                      !o.hasOwnProperty(r) ||
                      !o[r].some(function (e) {
                        return h(t(e));
                      })
                    ) ||
                      (e.set(r, j(t(r), r)), !1))
                  );
                });
              return i.length
                ? [
                    4,
                    _(
                      i.map(function (e) {
                        return [e, b + e];
                      })
                    ),
                  ]
                : [3, 3];
            case 2:
              r.sent(), (r.label = 3);
            case 3:
              for (s in (Array.from(e).forEach(function (r) {
                var t = r[0],
                  n = r[1];
                h(n) && e.set(t, j(n, t));
              }),
              t))
                t[s] = e.get(s);
              return [2, t];
          }
        });
      })
    );
  }
  function I(t, n) {
    return e(this, void 0, void 0, function () {
      return r(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, E(t, n || b)];
          case 1:
            return [2, e.sent()];
        }
      });
    });
  }
  return (I.convertImports = m), (I.convertExports = d), (I.convertAll = v), I;
});