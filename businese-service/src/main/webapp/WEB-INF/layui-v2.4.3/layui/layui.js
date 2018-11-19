/** layui-v2.4.3 MIT License By https://www.layui.com */
;!function (e) {
    "use strict";
    var t = document, o = {modules: {}, status: {}, timeout: 10, event: {}}, n = function () {
        this.v = "2.4.3"
    }, r = function () {
        var e = t.currentScript ? t.currentScript.src : function () {
            for (var e, o = t.scripts, n = o.length - 1, r = n; r > 0; r--) if ("interactive" === o[r].readyState) {
                e = o[r].src;
                break
            }
            return e || o[n].src
        }();
        return e.substring(0, e.lastIndexOf("/") + 1)
    }(), i = function (t) {
        e.console && console.error && console.error("Layui hint: " + t)
    }, a = "undefined" != typeof opera && "[object Opera]" === opera.toString(), u = {
        layer: "modules/layer",
        laydate: "modules/laydate",
        laypage: "modules/laypage",
        laytpl: "modules/laytpl",
        layim: "modules/layim",
        layedit: "modules/layedit",
        form: "modules/form",
        upload: "modules/upload",
        tree: "modules/tree",
        table: "modules/table",
        element: "modules/element",
        rate: "modules/rate",
        colorpicker: "modules/colorpicker",
        slider: "modules/slider",
        carousel: "modules/carousel",
        flow: "modules/flow",
        util: "modules/util",
        code: "modules/code",
        jquery: "modules/jquery",
        mobile: "modules/mobile",
        "layui.all": "../layui.all"
    };
    n.prototype.cache = o, n.prototype.define = function (e, t) {
        var n = this, r = "function" == typeof e, i = function () {
            var e = function (e, t) {
                layui[e] = t, o.status[e] = !0
            };
            return "function" == typeof t && t(function (n, r) {
                e(n, r), o.callback[n] = function () {
                    t(e)
                }
            }), this
        };
        return r && (t = e, e = []), layui["layui.all"] || !layui["layui.all"] && layui["layui.mobile"] ? i.call(n) : (n.use(e, i), n)
    }, n.prototype.use = function (e, n, l) {
        function s(e, t) {
            var n = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
            ("load" === e.type || n.test((e.currentTarget || e.srcElement).readyState)) && (o.modules[f] = t, d.removeChild(v), function r() {
                return ++m > 1e3 * o.timeout / 4 ? i(f + " is not a valid module") : void(o.status[f] ? c() : setTimeout(r, 4))
            }())
        }

        function c() {
            l.push(layui[f]), e.length > 1 ? y.use(e.slice(1), n, l) : "function" == typeof n && n.apply(layui, l)
        }

        var y = this, p = o.dir = o.dir ? o.dir : r, d = t.getElementsByTagName("head")[0];
        e = "string" == typeof e ? [e] : e, window.jQuery && jQuery.fn.on && (y.each(e, function (t, o) {
            "jquery" === o && e.splice(t, 1)
        }), layui.jquery = layui.$ = jQuery);
        var f = e[0], m = 0;
        if (l = l || [], o.host = o.host || (p.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0], 0 === e.length || layui["layui.all"] && u[f] || !layui["layui.all"] && layui["layui.mobile"] && u[f]) return c(), y;
        if (o.modules[f]) !function g() {
            return ++m > 1e3 * o.timeout / 4 ? i(f + " is not a valid module") : void("string" == typeof o.modules[f] && o.status[f] ? c() : setTimeout(g, 4))
        }(); else {
            var v = t.createElement("script"),
                h = (u[f] ? p + "lay/" : /^\{\/\}/.test(y.modules[f]) ? "" : o.base || "") + (y.modules[f] || f) + ".js";
            h = h.replace(/^\{\/\}/, ""), v.async = !0, v.charset = "utf-8", v.src = h + function () {
                var e = o.version === !0 ? o.v || (new Date).getTime() : o.version || "";
                return e ? "?v=" + e : ""
            }(), d.appendChild(v), !v.attachEvent || v.attachEvent.toString && v.attachEvent.toString().indexOf("[native code") < 0 || a ? v.addEventListener("load", function (e) {
                s(e, h)
            }, !1) : v.attachEvent("onreadystatechange", function (e) {
                s(e, h)
            }), o.modules[f] = h
        }
        return y
    }, n.prototype.getStyle = function (t, o) {
        var n = t.currentStyle ? t.currentStyle : e.getComputedStyle(t, null);
        return n[n.getPropertyValue ? "getPropertyValue" : "getAttribute"](o)
    }, n.prototype.link = function (e, n, r) {
        var a = this, u = t.createElement("link"), l = t.getElementsByTagName("head")[0];
        "string" == typeof n && (r = n);
        var s = (r || e).replace(/\.|\//g, ""), c = u.id = "layuicss-" + s, y = 0;
        return u.rel = "stylesheet", u.href = e + (o.debug ? "?v=" + (new Date).getTime() : ""), u.media = "all", t.getElementById(c) || l.appendChild(u), "function" != typeof n ? a : (function p() {
            return ++y > 1e3 * o.timeout / 100 ? i(e + " timeout") : void(1989 === parseInt(a.getStyle(t.getElementById(c), "width")) ? function () {
                n()
            }() : setTimeout(p, 100))
        }(), a)
    }, o.callback = {}, n.prototype.factory = function (e) {
        if (layui[e]) return "function" == typeof o.callback[e] ? o.callback[e] : null
    }, n.prototype.addcss = function (e, t, n) {
        return layui.link(o.dir + "css/" + e, t, n)
    }, n.prototype.img = function (e, t, o) {
        var n = new Image;
        return n.src = e, n.complete ? t(n) : (n.onload = function () {
            n.onload = null, "function" == typeof t && t(n)
        }, void(n.onerror = function (e) {
            n.onerror = null, "function" == typeof o && o(e)
        }))
    }, n.prototype.config = function (e) {
        e = e || {};
        for (var t in e) o[t] = e[t];
        return this
    }, n.prototype.modules = function () {
        var e = {};
        for (var t in u) e[t] = u[t];
        return e
    }(), n.prototype.extend = function (e) {
        var t = this;
        e = e || {};
        for (var o in e) t[o] || t.modules[o] ? i("模块名 " + o + " 已被占用") : t.modules[o] = e[o];
        return t
    }, n.prototype.router = function (e) {
        var t = this, e = e || location.hash, o = {path: [], search: {}, hash: (e.match(/[^#](#.*$)/) || [])[1] || ""};
        return /^#\//.test(e) ? (e = e.replace(/^#\//, ""), o.href = "/" + e, e = e.replace(/([^#])(#.*$)/, "$1").split("/") || [], t.each(e, function (e, t) {
            /^\w+=/.test(t) ? function () {
                t = t.split("="), o.search[t[0]] = t[1]
            }() : o.path.push(t)
        }), o) : o
    }, n.prototype.data = function (t, o, n) {
        if (t = t || "layui", n = n || localStorage, e.JSON && e.JSON.parse) {
            if (null === o) return delete n[t];
            o = "object" == typeof o ? o : {key: o};
            try {
                var r = JSON.parse(n[t])
            } catch (i) {
                var r = {}
            }
            return "value" in o && (r[o.key] = o.value), o.remove && delete r[o.key], n[t] = JSON.stringify(r), o.key ? r[o.key] : r
        }
    }, n.prototype.sessionData = function (e, t) {
        return this.data(e, t, sessionStorage)
    }, n.prototype.device = function (t) {
        var o = navigator.userAgent.toLowerCase(), n = function (e) {
            var t = new RegExp(e + "/([^\\s\\_\\-]+)");
            return e = (o.match(t) || [])[1], e || !1
        }, r = {
            os: function () {
                return /windows/.test(o) ? "windows" : /linux/.test(o) ? "linux" : /iphone|ipod|ipad|ios/.test(o) ? "ios" : /mac/.test(o) ? "mac" : void 0
            }(), ie: function () {
                return !!(e.ActiveXObject || "ActiveXObject" in e) && ((o.match(/msie\s(\d+)/) || [])[1] || "11")
            }(), weixin: n("micromessenger")
        };
        return t && !r[t] && (r[t] = n(t)), r.android = /android/.test(o), r.ios = "ios" === r.os, r
    }, n.prototype.hint = function () {
        return {error: i}
    }, n.prototype.each = function (e, t) {
        var o, n = this;
        if ("function" != typeof t) return n;
        if (e = e || [], e.constructor === Object) {
            for (o in e) if (t.call(e[o], o, e[o])) break
        } else for (o = 0; o < e.length && !t.call(e[o], o, e[o]); o++) ;
        return n
    }, n.prototype.sort = function (e, t, o) {
        var n = JSON.parse(JSON.stringify(e || []));
        return t ? (n.sort(function (e, o) {
            var n = /^-?\d+$/, r = e[t], i = o[t];
            return n.test(r) && (r = parseFloat(r)), n.test(i) && (i = parseFloat(i)), r && !i ? 1 : !r && i ? -1 : r > i ? 1 : r < i ? -1 : 0
        }), o && n.reverse(), n) : n
    }, n.prototype.stope = function (t) {
        t = t || e.event;
        try {
            t.stopPropagation()
        } catch (o) {
            t.cancelBubble = !0
        }
    }, n.prototype.onevent = function (e, t, o) {
        return "string" != typeof e || "function" != typeof o ? this : n.event(e, t, null, o)
    }, n.prototype.event = n.event = function (e, t, n, r) {
        var i = this, a = null, u = t.match(/\((.*)\)$/) || [], l = (e + "." + t).replace(u[0], ""), s = u[1] || "",
            c = function (e, t) {
                var o = t && t.call(i, n);
                o === !1 && null === a && (a = !1)
            };
        return r ? (o.event[l] = o.event[l] || {}, o.event[l][s] = [r], this) : (layui.each(o.event[l], function (e, t) {
            return "{*}" === s ? void layui.each(t, c) : ("" === e && layui.each(t, c), void(e === s && layui.each(t, c)))
        }), a)
    }, e.layui = new n
}(window);

layui.define("jquery", function (t) {
    "use strict";
    var a = layui.$, i = (layui.hint(), layui.device()), e = "element", l = "layui-this", n = "layui-show",
        s = function () {
            this.config = {}
        };
    s.prototype.set = function (t) {
        var i = this;
        return a.extend(!0, i.config, t), i
    }, s.prototype.on = function (t, a) {
        return layui.onevent.call(this, e, t, a)
    }, s.prototype.tabAdd = function (t, i) {
        var e = ".layui-tab-title", l = a(".layui-tab[lay-filter=" + t + "]"), n = l.children(e),
            s = n.children(".layui-tab-bar"), o = l.children(".layui-tab-content"),
            r = '<li lay-id="' + (i.id || "") + '"' + (i.attr ? ' lay-attr="' + i.attr + '"' : "") + ">" + (i.title || "unnaming") + "</li>";
        return s[0] ? s.before(r) : n.append(r), o.append('<div class="layui-tab-item">' + (i.content || "") + "</div>"), f.hideTabMore(!0), f.tabAuto(), this
    }, s.prototype.tabDelete = function (t, i) {
        var e = ".layui-tab-title", l = a(".layui-tab[lay-filter=" + t + "]"), n = l.children(e),
            s = n.find('>li[lay-id="' + i + '"]');
        return f.tabDelete(null, s), this
    }, s.prototype.tabChange = function (t, i) {
        var e = ".layui-tab-title", l = a(".layui-tab[lay-filter=" + t + "]"), n = l.children(e),
            s = n.find('>li[lay-id="' + i + '"]');
        return f.tabClick.call(s[0], null, null, s), this
    }, s.prototype.tab = function (t) {
        t = t || {}, b.on("click", t.headerElem, function (i) {
            var e = a(this).index();
            f.tabClick.call(this, i, e, null, t)
        })
    }, s.prototype.progress = function (t, i) {
        var e = "layui-progress", l = a("." + e + "[lay-filter=" + t + "]"), n = l.find("." + e + "-bar"),
            s = n.find("." + e + "-text");
        return n.css("width", i), s.text(i), this
    };
    var o = ".layui-nav", r = "layui-nav-item", c = "layui-nav-bar", u = "layui-nav-tree", d = "layui-nav-child",
        y = "layui-nav-more", h = "layui-anim layui-anim-upbit", f = {
            tabClick: function (t, i, s, o) {
                o = o || {};
                var r = s || a(this), i = i || r.parent().children("li").index(r),
                    c = o.headerElem ? r.parent() : r.parents(".layui-tab").eq(0),
                    u = o.bodyElem ? a(o.bodyElem) : c.children(".layui-tab-content").children(".layui-tab-item"),
                    d = r.find("a"), y = c.attr("lay-filter");
                "javascript:;" !== d.attr("href") && "_blank" === d.attr("target") || (r.addClass(l).siblings().removeClass(l), u.eq(i).addClass(n).siblings().removeClass(n)), layui.event.call(this, e, "tab(" + y + ")", {
                    elem: c,
                    index: i
                })
            }, tabDelete: function (t, i) {
                var n = i || a(this).parent(), s = n.index(), o = n.parents(".layui-tab").eq(0),
                    r = o.children(".layui-tab-content").children(".layui-tab-item"), c = o.attr("lay-filter");
                n.hasClass(l) && (n.next()[0] ? f.tabClick.call(n.next()[0], null, s + 1) : n.prev()[0] && f.tabClick.call(n.prev()[0], null, s - 1)), n.remove(), r.eq(s).remove(), setTimeout(function () {
                    f.tabAuto()
                }, 50), layui.event.call(this, e, "tabDelete(" + c + ")", {elem: o, index: s})
            }, tabAuto: function () {
                var t = "layui-tab-more", e = "layui-tab-bar", l = "layui-tab-close", n = this;
                a(".layui-tab").each(function () {
                    var s = a(this), o = s.children(".layui-tab-title"),
                        r = (s.children(".layui-tab-content").children(".layui-tab-item"), 'lay-stope="tabmore"'),
                        c = a('<span class="layui-unselect layui-tab-bar" ' + r + "><i " + r + ' class="layui-icon">&#xe61a;</i></span>');
                    if (n === window && 8 != i.ie && f.hideTabMore(!0), s.attr("lay-allowClose") && o.find("li").each(function () {
                        var t = a(this);
                        if (!t.find("." + l)[0]) {
                            var i = a('<i class="layui-icon layui-unselect ' + l + '">&#x1006;</i>');
                            i.on("click", f.tabDelete), t.append(i)
                        }
                    }), "string" != typeof s.attr("lay-unauto")) if (o.prop("scrollWidth") > o.outerWidth() + 1) {
                        if (o.find("." + e)[0]) return;
                        o.append(c), s.attr("overflow", ""), c.on("click", function (a) {
                            o[this.title ? "removeClass" : "addClass"](t), this.title = this.title ? "" : "收缩"
                        })
                    } else o.find("." + e).remove(), s.removeAttr("overflow")
                })
            }, hideTabMore: function (t) {
                var i = a(".layui-tab-title");
                t !== !0 && "tabmore" === a(t.target).attr("lay-stope") || (i.removeClass("layui-tab-more"), i.find(".layui-tab-bar").attr("title", ""))
            }, clickThis: function () {
                var t = a(this), i = t.parents(o), n = i.attr("lay-filter"), s = t.parent(), c = t.siblings("." + d),
                    y = "string" == typeof s.attr("lay-unselect");
                "javascript:;" !== t.attr("href") && "_blank" === t.attr("target") || y || c[0] || (i.find("." + l).removeClass(l), s.addClass(l)), i.hasClass(u) && (c.removeClass(h), c[0] && (s["none" === c.css("display") ? "addClass" : "removeClass"](r + "ed"), "all" === i.attr("lay-shrink") && s.siblings().removeClass(r + "ed"))), layui.event.call(this, e, "nav(" + n + ")", t)
            }, collapse: function () {
                var t = a(this), i = t.find(".layui-colla-icon"), l = t.siblings(".layui-colla-content"),
                    s = t.parents(".layui-collapse").eq(0), o = s.attr("lay-filter"), r = "none" === l.css("display");
                if ("string" == typeof s.attr("lay-accordion")) {
                    var c = s.children(".layui-colla-item").children("." + n);
                    c.siblings(".layui-colla-title").children(".layui-colla-icon").html("&#xe602;"), c.removeClass(n)
                }
                l[r ? "addClass" : "removeClass"](n), i.html(r ? "&#xe61a;" : "&#xe602;"), layui.event.call(this, e, "collapse(" + o + ")", {
                    title: t,
                    content: l,
                    show: r
                })
            }
        };
    s.prototype.init = function (t, e) {
        var l = function () {
            return e ? '[lay-filter="' + e + '"]' : ""
        }(), s = {
            tab: function () {
                f.tabAuto.call({})
            }, nav: function () {
                var t = 200, e = {}, s = {}, p = {}, b = function (l, o, r) {
                    var c = a(this), f = c.find("." + d);
                    o.hasClass(u) ? l.css({
                        top: c.position().top,
                        height: c.children("a").outerHeight(),
                        opacity: 1
                    }) : (f.addClass(h), l.css({
                        left: c.position().left + parseFloat(c.css("marginLeft")),
                        top: c.position().top + c.height() - l.height()
                    }), e[r] = setTimeout(function () {
                        l.css({width: c.width(), opacity: 1})
                    }, i.ie && i.ie < 10 ? 0 : t), clearTimeout(p[r]), "block" === f.css("display") && clearTimeout(s[r]), s[r] = setTimeout(function () {
                        f.addClass(n), c.find("." + y).addClass(y + "d")
                    }, 300))
                };
                a(o + l).each(function (i) {
                    var l = a(this), o = a('<span class="' + c + '"></span>'), h = l.find("." + r);
                    l.find("." + c)[0] || (l.append(o), h.on("mouseenter", function () {
                        b.call(this, o, l, i)
                    }).on("mouseleave", function () {
                        l.hasClass(u) || (clearTimeout(s[i]), s[i] = setTimeout(function () {
                            l.find("." + d).removeClass(n), l.find("." + y).removeClass(y + "d")
                        }, 300))
                    }), l.on("mouseleave", function () {
                        clearTimeout(e[i]), p[i] = setTimeout(function () {
                            l.hasClass(u) ? o.css({
                                height: 0,
                                top: o.position().top + o.height() / 2,
                                opacity: 0
                            }) : o.css({width: 0, left: o.position().left + o.width() / 2, opacity: 0})
                        }, t)
                    })), h.find("a").each(function () {
                        var t = a(this), i = (t.parent(), t.siblings("." + d));
                        i[0] && !t.children("." + y)[0] && t.append('<span class="' + y + '"></span>'), t.off("click", f.clickThis).on("click", f.clickThis)
                    })
                })
            }, breadcrumb: function () {
                var t = ".layui-breadcrumb";
                a(t + l).each(function () {
                    var t = a(this), i = "lay-separator", e = t.attr(i) || "/", l = t.find("a");
                    l.next("span[" + i + "]")[0] || (l.each(function (t) {
                        t !== l.length - 1 && a(this).after("<span " + i + ">" + e + "</span>")
                    }), t.css("visibility", "visible"))
                })
            }, progress: function () {
                var t = "layui-progress";
                a("." + t + l).each(function () {
                    var i = a(this), e = i.find(".layui-progress-bar"), l = e.attr("lay-percent");
                    e.css("width", function () {
                        return /^.+\/.+$/.test(l) ? 100 * new Function("return " + l)() + "%" : l
                    }()), i.attr("lay-showPercent") && setTimeout(function () {
                        e.html('<span class="' + t + '-text">' + l + "</span>")
                    }, 350)
                })
            }, collapse: function () {
                var t = "layui-collapse";
                a("." + t + l).each(function () {
                    var t = a(this).find(".layui-colla-item");
                    t.each(function () {
                        var t = a(this), i = t.find(".layui-colla-title"), e = t.find(".layui-colla-content"),
                            l = "none" === e.css("display");
                        i.find(".layui-colla-icon").remove(), i.append('<i class="layui-icon layui-colla-icon">' + (l ? "&#xe602;" : "&#xe61a;") + "</i>"), i.off("click", f.collapse).on("click", f.collapse)
                    })
                })
            }
        };
        return s[t] ? s[t]() : layui.each(s, function (t, a) {
            a()
        })
    }, s.prototype.render = s.prototype.init;
    var p = new s, b = a(document);
    p.render();
    var v = ".layui-tab-title li";
    b.on("click", v, f.tabClick), b.on("click", f.hideTabMore), a(window).on("resize", f.tabAuto), t(e, p)
});
layui.define("layer", function (e) {
    "use strict";
    var i = layui.$, t = layui.layer, n = layui.hint(), a = layui.device(), o = {
            config: {}, set: function (e) {
                var t = this;
                return t.config = i.extend({}, t.config, e), t
            }, on: function (e, i) {
                return layui.onevent.call(this, r, e, i)
            }
        }, l = function () {
            var e = this;
            return {
                upload: function (i) {
                    e.upload.call(e, i)
                }, config: e.config
            }
        }, r = "upload", u = "layui-upload-file", c = "layui-upload-form", f = "layui-upload-iframe",
        s = "layui-upload-choose", p = function (e) {
            var t = this;
            t.config = i.extend({}, t.config, o.config, e), t.render()
        };
    p.prototype.config = {
        accept: "images",
        exts: "",
        auto: !0,
        bindAction: "",
        url: "",
        field: "file",
        method: "post",
        data: {},
        drag: !0,
        size: 0,
        number: 0,
        multiple: !1
    }, p.prototype.render = function (e) {
        var t = this, e = t.config;
        e.elem = i(e.elem), e.bindAction = i(e.bindAction), t.file(), t.events()
    }, p.prototype.file = function () {
        var e = this, t = e.config,
            n = e.elemFile = i(['<input class="' + u + '" type="file" accept="' + t.acceptMime + '" name="' + t.field + '"', t.multiple ? " multiple" : "", ">"].join("")),
            o = t.elem.next();
        (o.hasClass(u) || o.hasClass(c)) && o.remove(), a.ie && a.ie < 10 && t.elem.wrap('<div class="layui-upload-wrap"></div>'), e.isFile() ? (e.elemFile = t.elem, t.field = t.elem[0].name) : t.elem.after(n), a.ie && a.ie < 10 && e.initIE()
    }, p.prototype.initIE = function () {
        var e = this, t = e.config,
            n = i('<iframe id="' + f + '" class="' + f + '" name="' + f + '" frameborder="0"></iframe>'),
            a = i(['<form target="' + f + '" class="' + c + '" method="post" key="set-mine" enctype="multipart/form-data" action="' + t.url + '">', "</form>"].join(""));
        i("#" + f)[0] || i("body").append(n), t.elem.next().hasClass(c) || (e.elemFile.wrap(a), t.elem.next("." + c).append(function () {
            var e = [];
            return layui.each(t.data, function (i, t) {
                t = "function" == typeof t ? t() : t, e.push('<input type="hidden" name="' + i + '" value="' + t + '">')
            }), e.join("")
        }()))
    }, p.prototype.msg = function (e) {
        return t.msg(e, {icon: 2, shift: 6})
    }, p.prototype.isFile = function () {
        var e = this.config.elem[0];
        if (e) return "input" === e.tagName.toLocaleLowerCase() && "file" === e.type
    }, p.prototype.preview = function (e) {
        var i = this;
        window.FileReader && layui.each(i.chooseFiles, function (i, t) {
            var n = new FileReader;
            n.readAsDataURL(t), n.onload = function () {
                e && e(i, t, this.result)
            }
        })
    }, p.prototype.upload = function (e, t) {
        var n, o = this, l = o.config, r = o.elemFile[0], u = function () {
            var t = 0, n = 0, a = e || o.files || o.chooseFiles || r.files, u = function () {
                l.multiple && t + n === o.fileLength && "function" == typeof l.allDone && l.allDone({
                    total: o.fileLength,
                    successful: t,
                    aborted: n
                })
            };
            layui.each(a, function (e, a) {
                var r = new FormData;
                r.append(l.field, a), layui.each(l.data, function (e, i) {
                    i = "function" == typeof i ? i() : i, r.append(e, i)
                }), i.ajax({
                    url: l.url,
                    type: "post",
                    data: r,
                    contentType: !1,
                    processData: !1,
                    dataType: "json",
                    headers: l.headers || {},
                    success: function (i) {
                        t++, d(e, i), u()
                    },
                    error: function () {
                        n++, o.msg("请求上传接口出现异常"), m(e), u()
                    }
                })
            })
        }, c = function () {
            var e = i("#" + f);
            o.elemFile.parent().submit(), clearInterval(p.timer), p.timer = setInterval(function () {
                var i, t = e.contents().find("body");
                try {
                    i = t.text()
                } catch (n) {
                    o.msg("获取上传后的响应信息出现异常"), clearInterval(p.timer), m()
                }
                i && (clearInterval(p.timer), t.html(""), d(0, i))
            }, 30)
        }, d = function (e, i) {
            if (o.elemFile.next("." + s).remove(), r.value = "", "object" != typeof i) try {
                i = JSON.parse(i)
            } catch (t) {
                return i = {}, o.msg("请对上传接口返回有效JSON")
            }
            "function" == typeof l.done && l.done(i, e || 0, function (e) {
                o.upload(e)
            })
        }, m = function (e) {
            l.auto && (r.value = ""), "function" == typeof l.error && l.error(e || 0, function (e) {
                o.upload(e)
            })
        }, h = l.exts, v = function () {
            var i = [];
            return layui.each(e || o.chooseFiles, function (e, t) {
                i.push(t.name)
            }), i
        }(), g = {
            preview: function (e) {
                o.preview(e)
            }, upload: function (e, i) {
                var t = {};
                t[e] = i, o.upload(t)
            }, pushFile: function () {
                return o.files = o.files || {}, layui.each(o.chooseFiles, function (e, i) {
                    o.files[e] = i
                }), o.files
            }, resetFile: function (e, i, t) {
                var n = new File([i], t);
                o.files = o.files || {}, o.files[e] = n
            }
        }, y = function () {
            if ("choose" !== t && !l.auto || (l.choose && l.choose(g), "choose" !== t)) return l.before && l.before(g), a.ie ? a.ie > 9 ? u() : c() : void u()
        };
        if (v = 0 === v.length ? r.value.match(/[^\/\\]+\..+/g) || [] || "" : v, 0 !== v.length) {
            switch (l.accept) {
                case"file":
                    if (h && !RegExp("\\w\\.(" + h + ")$", "i").test(escape(v))) return o.msg("选择的文件中包含不支持的格式"), r.value = "";
                    break;
                case"video":
                    if (!RegExp("\\w\\.(" + (h || "avi|mp4|wma|rmvb|rm|flash|3gp|flv") + ")$", "i").test(escape(v))) return o.msg("选择的视频中包含不支持的格式"), r.value = "";
                    break;
                case"audio":
                    if (!RegExp("\\w\\.(" + (h || "mp3|wav|mid") + ")$", "i").test(escape(v))) return o.msg("选择的音频中包含不支持的格式"), r.value = "";
                    break;
                default:
                    if (layui.each(v, function (e, i) {
                        RegExp("\\w\\.(" + (h || "jpg|png|gif|bmp|jpeg$") + ")", "i").test(escape(i)) || (n = !0)
                    }), n) return o.msg("选择的图片中包含不支持的格式"), r.value = ""
            }
            if (o.fileLength = function () {
                var i = 0, t = e || o.files || o.chooseFiles || r.files;
                return layui.each(t, function () {
                    i++
                }), i
            }(), l.number && o.fileLength > l.number) return o.msg("同时最多只能上传的数量为：" + l.number);
            if (l.size > 0 && !(a.ie && a.ie < 10)) {
                var F;
                if (layui.each(o.chooseFiles, function (e, i) {
                    if (i.size > 1024 * l.size) {
                        var t = l.size / 1024;
                        t = t >= 1 ? t.toFixed(2) + "MB" : l.size + "KB", r.value = "", F = t
                    }
                }), F) return o.msg("文件不能超过" + F)
            }
            y()
        }
    }, p.prototype.events = function () {
        var e = this, t = e.config, o = function (i) {
            e.chooseFiles = {}, layui.each(i, function (i, t) {
                var n = (new Date).getTime();
                e.chooseFiles[n + "-" + i] = t
            })
        }, l = function (i, n) {
            var a = e.elemFile,
                o = i.length > 1 ? i.length + "个文件" : (i[0] || {}).name || a[0].value.match(/[^\/\\]+\..+/g) || [] || "";
            a.next().hasClass(s) && a.next().remove(), e.upload(null, "choose"), e.isFile() || t.choose || a.after('<span class="layui-inline ' + s + '">' + o + "</span>")
        };
        t.elem.off("upload.start").on("upload.start", function () {
            var a = i(this), o = a.attr("lay-data");
            if (o) try {
                o = new Function("return " + o)(), e.config = i.extend({}, t, o)
            } catch (l) {
                n.error("Upload element property lay-data configuration item has a syntax error: " + o)
            }
            e.config.item = a, e.elemFile[0].click()
        }), a.ie && a.ie < 10 || t.elem.off("upload.over").on("upload.over", function () {
            var e = i(this);
            e.attr("lay-over", "")
        }).off("upload.leave").on("upload.leave", function () {
            var e = i(this);
            e.removeAttr("lay-over")
        }).off("upload.drop").on("upload.drop", function (n, a) {
            var r = i(this), u = a.originalEvent.dataTransfer.files || [];
            r.removeAttr("lay-over"), o(u), t.auto ? e.upload(u) : l(u)
        }), e.elemFile.off("upload.change").on("upload.change", function () {
            var i = this.files || [];
            o(i), t.auto ? e.upload() : l(i)
        }), t.bindAction.off("upload.action").on("upload.action", function () {
            e.upload()
        }), t.elem.data("haveEvents") || (e.elemFile.on("change", function () {
            i(this).trigger("upload.change")
        }), t.elem.on("click", function () {
            e.isFile() || i(this).trigger("upload.start")
        }), t.drag && t.elem.on("dragover", function (e) {
            e.preventDefault(), i(this).trigger("upload.over")
        }).on("dragleave", function (e) {
            i(this).trigger("upload.leave")
        }).on("drop", function (e) {
            e.preventDefault(), i(this).trigger("upload.drop", e)
        }), t.bindAction.on("click", function () {
            i(this).trigger("upload.action")
        }), t.elem.data("haveEvents", !0))
    }, o.render = function (e) {
        var i = new p(e);
        return l.call(i)
    }, e(r, o)
});
layui.define("jquery", function (e) {
    "use strict";
    var i = layui.jquery, t = {
            config: {}, index: layui.slider ? layui.slider.index + 1e4 : 0, set: function (e) {
                var t = this;
                return t.config = i.extend({}, t.config, e), t
            }, on: function (e, i) {
                return layui.onevent.call(this, n, e, i)
            }
        }, a = function () {
            var e = this, i = e.config;
            return {
                setValue: function (i, t) {
                    return e.slide("set", i, t || 0)
                }, config: i
            }
        }, n = "slider", l = "layui-disabled", s = "layui-slider", r = "layui-slider-bar", o = "layui-slider-wrap",
        u = "layui-slider-wrap-btn", d = "layui-slider-tips", v = "layui-slider-input", c = "layui-slider-input-txt",
        f = "layui-slider-input-btn", m = "layui-slider-hover", p = function (e) {
            var a = this;
            a.index = ++t.index, a.config = i.extend({}, a.config, t.config, e), a.render()
        };
    p.prototype.config = {
        type: "default",
        min: 0,
        max: 100,
        value: 0,
        step: 1,
        showstep: !1,
        tips: !0,
        input: !1,
        range: !1,
        height: 200,
        disabled: !1,
        theme: "#009688"
    }, p.prototype.render = function () {
        var e = this, t = e.config;
        if (t.min = t.min < 0 ? 0 : t.min, t.range) {
            t.value = "object" == typeof t.value ? t.value : [t.min, t.value];
            var a = Math.min(t.value[0], t.value[1]), n = Math.max(t.value[0], t.value[1]);
            t.value[0] = a > t.min ? a : t.min, t.value[1] = n > t.min ? n : t.min, t.value[0] = t.value[0] > t.max ? t.max : t.value[0], t.value[1] = t.value[1] > t.max ? t.max : t.value[1];
            var r = Math.floor((t.value[0] - t.min) / (t.max - t.min) * 100),
                v = Math.floor((t.value[1] - t.min) / (t.max - t.min) * 100), f = v - r + "%";
            r += "%", v += "%"
        } else {
            t.value = "object" == typeof t.value ? Math.min(t.value[0], t.value[1]) : t.value, t.value = t.value > t.min ? t.value : t.min;
            var f = Math.floor((t.value - t.min) / (t.max - t.min) * 100) + "%"
        }
        var m = t.disabled ? "#c2c2c2" : t.theme,
            p = '<div class="layui-slider ' + ("vertical" === t.type ? "layui-slider-vertical" : "") + '">' + (t.tips ? '<div class="layui-slider-tips"></div>' : "") + '<div class="layui-slider-bar" style="background:' + m + "; " + ("vertical" === t.type ? "height" : "width") + ":" + f + ";" + ("vertical" === t.type ? "bottom" : "left") + ":" + (r || 0) + ';"></div><div class="layui-slider-wrap" style="' + ("vertical" === t.type ? "bottom" : "left") + ":" + (r || f) + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + m + ';"></div></div>' + (t.range ? '<div class="layui-slider-wrap" style="' + ("vertical" === t.type ? "bottom" : "left") + ":" + v + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + m + ';"></div></div>' : "") + "</div>",
            h = i(t.elem), y = h.next("." + s);
        if (y[0] && y.remove(), e.elemTemp = i(p), t.range ? (e.elemTemp.find("." + o).eq(0).data("value", t.value[0]), e.elemTemp.find("." + o).eq(1).data("value", t.value[1])) : e.elemTemp.find("." + o).data("value", t.value), h.html(e.elemTemp), "vertical" === t.type && e.elemTemp.height(t.height + "px"), t.showstep) {
            for (var g = (t.max - t.min) / t.step, b = "", x = 1; x < g + 1; x++) {
                var T = 100 * x / g;
                T < 100 && (b += '<div class="layui-slider-step" style="' + ("vertical" === t.type ? "bottom" : "left") + ":" + T + '%"></div>')
            }
            e.elemTemp.append(b)
        }
        if (t.input && !t.range) {
            var w = i('<div class="layui-slider-input layui-input"><div class="layui-slider-input-txt"><input type="text" class="layui-input"></div><div class="layui-slider-input-btn"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>');
            h.css("position", "relative"), h.append(w), h.find("." + c).children("input").val(t.value), "vertical" === t.type ? w.css({
                left: 0,
                top: -48
            }) : e.elemTemp.css("margin-right", w.outerWidth() + 15)
        }
        t.disabled ? (e.elemTemp.addClass(l), e.elemTemp.find("." + u).addClass(l)) : e.slide(), e.elemTemp.find("." + u).on("mouseover", function () {
            var a = "vertical" === t.type ? t.height : e.elemTemp[0].offsetWidth, n = e.elemTemp.find("." + o),
                l = "vertical" === t.type ? a - i(this).parent()[0].offsetTop - n.height() : i(this).parent()[0].offsetLeft,
                s = l / a * 100, r = i(this).parent().data("value"), u = t.setTips ? t.setTips(r) : r;
            e.elemTemp.find("." + d).html(u), "vertical" === t.type ? e.elemTemp.find("." + d).css({
                bottom: s + "%",
                "margin-bottom": "20px",
                display: "inline-block"
            }) : e.elemTemp.find("." + d).css({left: s + "%", display: "inline-block"})
        }).on("mouseout", function () {
            e.elemTemp.find("." + d).css("display", "none")
        })
    }, p.prototype.slide = function (e, t, a) {
        var n = this, l = n.config, s = n.elemTemp, p = function () {
                return "vertical" === l.type ? l.height : s[0].offsetWidth
            }, h = s.find("." + o), y = s.next("." + v), g = y.children("." + c).children("input").val(),
            b = 100 / ((l.max - l.min) / Math.ceil(l.step)), x = function (e, i) {
                e = Math.ceil(e) * b > 100 ? Math.ceil(e) * b : Math.round(e) * b, e = e > 100 ? 100 : e, h.eq(i).css("vertical" === l.type ? "bottom" : "left", e + "%");
                var t = T(h[0].offsetLeft), a = l.range ? T(h[1].offsetLeft) : 0;
                "vertical" === l.type ? (s.find("." + d).css({
                    bottom: e + "%",
                    "margin-bottom": "20px"
                }), t = T(p() - h[0].offsetTop - h.height()), a = l.range ? T(p() - h[1].offsetTop - h.height()) : 0) : s.find("." + d).css("left", e + "%"), t = t > 100 ? 100 : t, a = a > 100 ? 100 : a;
                var n = Math.min(t, a), o = Math.abs(t - a);
                "vertical" === l.type ? s.find("." + r).css({
                    height: o + "%",
                    bottom: n + "%"
                }) : s.find("." + r).css({width: o + "%", left: n + "%"});
                var u = l.min + Math.round((l.max - l.min) * e / 100);
                if (g = u, y.children("." + c).children("input").val(g), h.eq(i).data("value", u), u = l.setTips ? l.setTips(u) : u, s.find("." + d).html(u), l.range) {
                    var v = [h.eq(0).data("value"), h.eq(1).data("value")];
                    v[0] > v[1] && v.reverse()
                }
                l.change && l.change(l.range ? v : u)
            }, T = function (e) {
                var i = e / p() * 100 / b, t = Math.round(i) * b;
                return e == p() && (t = Math.ceil(i) * b), t
            }, w = i(['<div class="layui-auxiliar-moving" id="LAY-slider-moving"></div'].join("")), M = function (e, t) {
                var a = function () {
                    t && t(), w.remove()
                };
                i("#LAY-slider-moving")[0] || i("body").append(w), w.on("mousemove", e), w.on("mouseup", a).on("mouseleave", a)
            };
        if ("set" === e) return x(t, a);
        s.find("." + u).each(function (e) {
            var t = i(this);
            t.on("mousedown", function (i) {
                i = i || window.event;
                var a = t.parent()[0].offsetLeft, n = i.clientX;
                "vertical" === l.type && (a = p() - t.parent()[0].offsetTop - h.height(), n = i.clientY);
                var r = function (i) {
                    i = i || window.event;
                    var r = a + ("vertical" === l.type ? n - i.clientY : i.clientX - n);
                    r < 0 && (r = 0), r > p() && (r = p());
                    var o = r / p() * 100 / b;
                    x(o, e), t.addClass(m), s.find("." + d).show(), i.preventDefault()
                }, o = function () {
                    t.removeClass(m), s.find("." + d).hide()
                };
                M(r, o)
            })
        }), s.on("click", function (e) {
            var t = i("." + u);
            if (!t.is(event.target) && 0 === t.has(event.target).length && t.length) {
                var a,
                    n = "vertical" === l.type ? p() - e.clientY + i(this).offset().top : e.clientX - i(this).offset().left;
                n < 0 && (n = 0), n > p() && (n = p());
                var s = n / p() * 100 / b;
                a = l.range ? "vertical" === l.type ? Math.abs(n - parseInt(i(h[0]).css("bottom"))) > Math.abs(n - parseInt(i(h[1]).css("bottom"))) ? 1 : 0 : Math.abs(n - h[0].offsetLeft) > Math.abs(n - h[1].offsetLeft) ? 1 : 0 : 0, x(s, a), e.preventDefault()
            }
        }), y.hover(function () {
            var e = i(this);
            e.children("." + f).fadeIn("fast")
        }, function () {
            var e = i(this);
            e.children("." + f).fadeOut("fast")
        }), y.children("." + f).children("i").each(function (e) {
            i(this).on("click", function () {
                g = 1 == e ? g - b < l.min ? l.min : g - b : Number(g) + b > l.max ? l.max : Number(g) + b;
                var i = (g - l.min) / (l.max - l.min) * 100 / b;
                x(i, 0)
            })
        });
        var q = function () {
            var e = this.value;
            e = isNaN(e) ? 0 : e, e = e < l.min ? l.min : e, e = e > l.max ? l.max : e, this.value = e;
            var i = (e - l.min) / (l.max - l.min) * 100 / b;
            x(i, 0)
        };
        y.children("." + c).children("input").on("keydown", function (e) {
            13 === e.keyCode && (e.preventDefault(), q.call(this))
        }).on("change", q)
    }, p.prototype.events = function () {
        var e = this;
        e.config
    }, t.render = function (e) {
        var i = new p(e);
        return a.call(i)
    }, e(n, t)
});
layui.define("jquery", function (e) {
    "use strict";
    var i = layui.jquery, o = {
            config: {}, index: layui.colorpicker ? layui.colorpicker.index + 1e4 : 0, set: function (e) {
                var o = this;
                return o.config = i.extend({}, o.config, e), o
            }, on: function (e, i) {
                return layui.onevent.call(this, "colorpicker", e, i)
            }
        }, r = function () {
            var e = this, i = e.config;
            return {config: i}
        }, t = "colorpicker", n = "layui-show", l = "layui-colorpicker", c = ".layui-colorpicker-main",
        a = "layui-icon-down", s = "layui-icon-close", f = "layui-colorpicker-trigger-span",
        d = "layui-colorpicker-trigger-i", u = "layui-colorpicker-side", p = "layui-colorpicker-side-slider",
        g = "layui-colorpicker-basis", v = "layui-colorpicker-alpha-bgcolor", h = "layui-colorpicker-alpha-slider",
        m = "layui-colorpicker-basis-cursor", b = "layui-colorpicker-main-input", k = function (e) {
            var i = {h: 0, s: 0, b: 0}, o = Math.min(e.r, e.g, e.b), r = Math.max(e.r, e.g, e.b), t = r - o;
            return i.b = r, i.s = 0 != r ? 255 * t / r : 0, 0 != i.s ? e.r == r ? i.h = (e.g - e.b) / t : e.g == r ? i.h = 2 + (e.b - e.r) / t : i.h = 4 + (e.r - e.g) / t : i.h = -1, r == o && (i.h = 0), i.h *= 60, i.h < 0 && (i.h += 360), i.s *= 100 / 255, i.b *= 100 / 255, i
        }, y = function (e) {
            var e = e.indexOf("#") > -1 ? e.substring(1) : e;
            if (3 == e.length) {
                var i = e.split("");
                e = i[0] + i[0] + i[1] + i[1] + i[2] + i[2]
            }
            e = parseInt(e, 16);
            var o = {r: e >> 16, g: (65280 & e) >> 8, b: 255 & e};
            return k(o)
        }, x = function (e) {
            var i = {}, o = e.h, r = 255 * e.s / 100, t = 255 * e.b / 100;
            if (0 == r) i.r = i.g = i.b = t; else {
                var n = t, l = (255 - r) * t / 255, c = (n - l) * (o % 60) / 60;
                360 == o && (o = 0), o < 60 ? (i.r = n, i.b = l, i.g = l + c) : o < 120 ? (i.g = n, i.b = l, i.r = n - c) : o < 180 ? (i.g = n, i.r = l, i.b = l + c) : o < 240 ? (i.b = n, i.r = l, i.g = n - c) : o < 300 ? (i.b = n, i.g = l, i.r = l + c) : o < 360 ? (i.r = n, i.g = l, i.b = n - c) : (i.r = 0, i.g = 0, i.b = 0)
            }
            return {r: Math.round(i.r), g: Math.round(i.g), b: Math.round(i.b)}
        }, C = function (e) {
            var o = x(e), r = [o.r.toString(16), o.g.toString(16), o.b.toString(16)];
            return i.each(r, function (e, i) {
                1 == i.length && (r[e] = "0" + i)
            }), r.join("")
        }, P = function (e) {
            var i = /[0-9]{1,3}/g, o = e.match(i) || [];
            return {r: o[0], g: o[1], b: o[2]}
        }, B = i(window), w = i(document), D = function (e) {
            var r = this;
            r.index = ++o.index, r.config = i.extend({}, r.config, o.config, e), r.render()
        };
    D.prototype.config = {
        color: "",
        size: null,
        alpha: !1,
        format: "hex",
        predefine: !1,
        colors: ["#009688", "#5FB878", "#1E9FFF", "#FF5722", "#FFB800", "#01AAED", "#999", "#c00", "#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585", "rgb(0, 186, 189)", "rgb(255, 120, 0)", "rgb(250, 212, 0)", "#393D49", "rgba(0,0,0,.5)", "rgba(255, 69, 0, 0.68)", "rgba(144, 240, 144, 0.5)", "rgba(31, 147, 255, 0.73)"]
    }, D.prototype.render = function () {
        var e = this, o = e.config,
            r = i(['<div class="layui-unselect layui-colorpicker">', "<span " + ("rgb" == o.format && o.alpha ? 'class="layui-colorpicker-trigger-bgcolor"' : "") + ">", '<span class="layui-colorpicker-trigger-span" ', 'lay-type="' + ("rgb" == o.format ? o.alpha ? "rgba" : "torgb" : "") + '" ', 'style="' + function () {
                var e = "";
                return o.color ? (e = o.color, (o.color.match(/[0-9]{1,3}/g) || []).length > 3 && (o.alpha && "rgb" == o.format || (e = "#" + C(k(P(o.color))))), "background: " + e) : e
            }() + '">', '<i class="layui-icon layui-colorpicker-trigger-i ' + (o.color ? a : s) + '"></i>', "</span>", "</span>", "</div>"].join("")),
            t = i(o.elem);
        o.size && r.addClass("layui-colorpicker-" + o.size), t.addClass("layui-inline").html(e.elemColorBox = r), e.color = e.elemColorBox.find("." + f)[0].style.background, e.events()
    }, D.prototype.renderPicker = function () {
        var e = this, o = e.config, r = e.elemColorBox[0],
            t = e.elemPicker = i(['<div id="layui-colorpicker' + e.index + '" data-index="' + e.index + '" class="layui-anim layui-anim-upbit layui-colorpicker-main">', '<div class="layui-colorpicker-main-wrapper">', '<div class="layui-colorpicker-basis">', '<div class="layui-colorpicker-basis-white"></div>', '<div class="layui-colorpicker-basis-black"></div>', '<div class="layui-colorpicker-basis-cursor"></div>', "</div>", '<div class="layui-colorpicker-side">', '<div class="layui-colorpicker-side-slider"></div>', "</div>", "</div>", '<div class="layui-colorpicker-main-alpha ' + (o.alpha ? n : "") + '">', '<div class="layui-colorpicker-alpha-bgcolor">', '<div class="layui-colorpicker-alpha-slider"></div>', "</div>", "</div>", function () {
                if (o.predefine) {
                    var e = ['<div class="layui-colorpicker-main-pre">'];
                    return layui.each(o.colors, function (i, o) {
                        e.push(['<div class="layui-colorpicker-pre' + ((o.match(/[0-9]{1,3}/g) || []).length > 3 ? " layui-colorpicker-pre-isalpha" : "") + '">', '<div style="background:' + o + '"></div>', "</div>"].join(""))
                    }), e.push("</div>"), e.join("")
                }
                return ""
            }(), '<div class="layui-colorpicker-main-input">', '<div class="layui-inline">', '<input type="text" class="layui-input">', "</div>", '<div class="layui-btn-container">', '<button class="layui-btn layui-btn-primary layui-btn-sm" colorpicker-events="clear">清空</button>', '<button class="layui-btn layui-btn-sm" colorpicker-events="confirm">确定</button>', "</div", "</div>", "</div>"].join(""));
        e.elemColorBox.find("." + f)[0];
        i(c)[0] && i(c).data("index") == e.index ? e.removePicker(D.thisElemInd) : (e.removePicker(D.thisElemInd), i("body").append(t)), D.thisElemInd = e.index, D.thisColor = r.style.background, e.position(), e.pickerEvents()
    }, D.prototype.removePicker = function (e) {
        var o = this;
        o.config;
        return i("#layui-colorpicker" + (e || o.index)).remove(), o
    }, D.prototype.position = function () {
        var e = this, i = e.config, o = e.bindElem || e.elemColorBox[0], r = e.elemPicker[0],
            t = o.getBoundingClientRect(), n = r.offsetWidth, l = r.offsetHeight, c = function (e) {
                return e = e ? "scrollLeft" : "scrollTop", document.body[e] | document.documentElement[e]
            }, a = function (e) {
                return document.documentElement[e ? "clientWidth" : "clientHeight"]
            }, s = 5, f = t.left, d = t.bottom;
        f -= (n - o.offsetWidth) / 2, d += s, f + n + s > a("width") ? f = a("width") - n - s : f < s && (f = s), d + l + s > a() && (d = t.top > l ? t.top - l : a() - l, d -= 2 * s), i.position && (r.style.position = i.position), r.style.left = f + ("fixed" === i.position ? 0 : c(1)) + "px", r.style.top = d + ("fixed" === i.position ? 0 : c()) + "px"
    }, D.prototype.val = function () {
        var e = this, i = (e.config, e.elemColorBox.find("." + f)), o = e.elemPicker.find("." + b), r = i[0],
            t = r.style.backgroundColor;
        if (t) {
            var n = k(P(t)), l = i.attr("lay-type");
            if (e.select(n.h, n.s, n.b), "torgb" === l && o.find("input").val(t), "rgba" === l) {
                var c = P(t);
                if (3 == (t.match(/[0-9]{1,3}/g) || []).length) o.find("input").val("rgba(" + c.r + ", " + c.g + ", " + c.b + ", 1)"), e.elemPicker.find("." + h).css("left", 280); else {
                    o.find("input").val(t);
                    var a = 280 * t.slice(t.lastIndexOf(",") + 1, t.length - 1);
                    e.elemPicker.find("." + h).css("left", a)
                }
                e.elemPicker.find("." + v)[0].style.background = "linear-gradient(to right, rgba(" + c.r + ", " + c.g + ", " + c.b + ", 0), rgb(" + c.r + ", " + c.g + ", " + c.b + "))"
            }
        } else e.select(0, 100, 100), o.find("input").val(""), e.elemPicker.find("." + v)[0].style.background = "", e.elemPicker.find("." + h).css("left", 280)
    }, D.prototype.side = function () {
        var e = this, o = e.config, r = e.elemColorBox.find("." + f), t = r.attr("lay-type"),
            n = e.elemPicker.find("." + u), l = e.elemPicker.find("." + p), c = e.elemPicker.find("." + g),
            y = e.elemPicker.find("." + m), C = e.elemPicker.find("." + v), w = e.elemPicker.find("." + h),
            D = l[0].offsetTop / 180 * 360, E = 100 - (y[0].offsetTop + 3) / 180 * 100,
            H = (y[0].offsetLeft + 3) / 260 * 100, W = Math.round(w[0].offsetLeft / 280 * 100) / 100,
            j = e.elemColorBox.find("." + d), F = e.elemPicker.find(".layui-colorpicker-pre").children("div"),
            L = function (i, n, l, c) {
                e.select(i, n, l);
                var f = x({h: i, s: n, b: l});
                if (j.addClass(a).removeClass(s), r[0].style.background = "rgb(" + f.r + ", " + f.g + ", " + f.b + ")", "torgb" === t && e.elemPicker.find("." + b).find("input").val("rgb(" + f.r + ", " + f.g + ", " + f.b + ")"), "rgba" === t) {
                    var d = 0;
                    d = 280 * c, w.css("left", d), e.elemPicker.find("." + b).find("input").val("rgba(" + f.r + ", " + f.g + ", " + f.b + ", " + c + ")"), r[0].style.background = "rgba(" + f.r + ", " + f.g + ", " + f.b + ", " + c + ")", C[0].style.background = "linear-gradient(to right, rgba(" + f.r + ", " + f.g + ", " + f.b + ", 0), rgb(" + f.r + ", " + f.g + ", " + f.b + "))"
                }
                o.change && o.change(e.elemPicker.find("." + b).find("input").val())
            }, M = i(['<div class="layui-auxiliar-moving" id="LAY-colorpicker-moving"></div'].join("")),
            Y = function (e) {
                i("#LAY-colorpicker-moving")[0] || i("body").append(M), M.on("mousemove", e), M.on("mouseup", function () {
                    M.remove()
                }).on("mouseleave", function () {
                    M.remove()
                })
            };
        l.on("mousedown", function (e) {
            var i = this.offsetTop, o = e.clientY, r = function (e) {
                var r = i + (e.clientY - o), t = n[0].offsetHeight;
                r < 0 && (r = 0), r > t && (r = t);
                var l = r / 180 * 360;
                D = l, L(l, H, E, W), e.preventDefault()
            };
            Y(r), e.preventDefault()
        }), n.on("click", function (e) {
            var o = e.clientY - i(this).offset().top;
            o < 0 && (o = 0), o > this.offsetHeight && (o = this.offsetHeight);
            var r = o / 180 * 360;
            D = r, L(r, H, E, W), e.preventDefault()
        }), y.on("mousedown", function (e) {
            var i = this.offsetTop, o = this.offsetLeft, r = e.clientY, t = e.clientX, n = function (e) {
                var n = i + (e.clientY - r), l = o + (e.clientX - t), a = c[0].offsetHeight - 3,
                    s = c[0].offsetWidth - 3;
                n < -3 && (n = -3), n > a && (n = a), l < -3 && (l = -3), l > s && (l = s);
                var f = (l + 3) / 260 * 100, d = 100 - (n + 3) / 180 * 100;
                E = d, H = f, L(D, f, d, W), e.preventDefault()
            };
            layui.stope(e), Y(n), e.preventDefault()
        }), c.on("mousedown", function (e) {
            var o = e.clientY - i(this).offset().top - 3 + B.scrollTop(),
                r = e.clientX - i(this).offset().left - 3 + B.scrollLeft();
            o < -3 && (o = -3), o > this.offsetHeight - 3 && (o = this.offsetHeight - 3), r < -3 && (r = -3), r > this.offsetWidth - 3 && (r = this.offsetWidth - 3);
            var t = (r + 3) / 260 * 100, n = 100 - (o + 3) / 180 * 100;
            E = n, H = t, L(D, t, n, W), e.preventDefault(), y.trigger(e, "mousedown")
        }), w.on("mousedown", function (e) {
            var i = this.offsetLeft, o = e.clientX, r = function (e) {
                var r = i + (e.clientX - o), t = C[0].offsetWidth;
                r < 0 && (r = 0), r > t && (r = t);
                var n = Math.round(r / 280 * 100) / 100;
                W = n, L(D, H, E, n), e.preventDefault()
            };
            Y(r), e.preventDefault()
        }), C.on("click", function (e) {
            var o = e.clientX - i(this).offset().left;
            o < 0 && (o = 0), o > this.offsetWidth && (o = this.offsetWidth);
            var r = Math.round(o / 280 * 100) / 100;
            W = r, L(D, H, E, r), e.preventDefault()
        }), F.each(function () {
            i(this).on("click", function () {
                i(this).parent(".layui-colorpicker-pre").addClass("selected").siblings().removeClass("selected");
                var e, o = this.style.backgroundColor, r = k(P(o)), t = o.slice(o.lastIndexOf(",") + 1, o.length - 1);
                D = r.h, H = r.s, E = r.b, 3 == (o.match(/[0-9]{1,3}/g) || []).length && (t = 1), W = t, e = 280 * t, L(r.h, r.s, r.b, t)
            })
        })
    }, D.prototype.select = function (e, i, o, r) {
        var t = this, n = (t.config, C({h: e, s: 100, b: 100})), l = C({h: e, s: i, b: o}), c = e / 360 * 180,
            a = 180 - o / 100 * 180 - 3, s = i / 100 * 260 - 3;
        t.elemPicker.find("." + p).css("top", c), t.elemPicker.find("." + g)[0].style.background = "#" + n, t.elemPicker.find("." + m).css({
            top: a,
            left: s
        }), "change" !== r && t.elemPicker.find("." + b).find("input").val("#" + l)
    }, D.prototype.pickerEvents = function () {
        var e = this, o = e.config, r = e.elemColorBox.find("." + f), t = e.elemPicker.find("." + b + " input"), n = {
            clear: function (i) {
                r[0].style.background = "", e.elemColorBox.find("." + d).removeClass(a).addClass(s), e.color = "", o.done && o.done(""), e.removePicker()
            }, confirm: function (i, n) {
                var l = t.val(), c = l, f = {};
                if (l.indexOf(",") > -1) {
                    if (f = k(P(l)), e.select(f.h, f.s, f.b), r[0].style.background = c = "#" + C(f), (l.match(/[0-9]{1,3}/g) || []).length > 3 && "rgba" === r.attr("lay-type")) {
                        var u = 280 * l.slice(l.lastIndexOf(",") + 1, l.length - 1);
                        e.elemPicker.find("." + h).css("left", u), r[0].style.background = l, c = l
                    }
                } else f = y(l), r[0].style.background = c = "#" + C(f), e.elemColorBox.find("." + d).removeClass(s).addClass(a);
                return "change" === n ? (e.select(f.h, f.s, f.b, n), void(o.change && o.change(c))) : (e.color = l, o.done && o.done(l), void e.removePicker())
            }
        };
        e.elemPicker.on("click", "*[colorpicker-events]", function () {
            var e = i(this), o = e.attr("colorpicker-events");
            n[o] && n[o].call(this, e)
        }), t.on("keyup", function (e) {
            var o = i(this);
            n.confirm.call(this, o, 13 === e.keyCode ? null : "change")
        })
    }, D.prototype.events = function () {
        var e = this, o = e.config, r = e.elemColorBox.find("." + f);
        e.elemColorBox.on("click", function () {
            e.renderPicker(), i(c)[0] && (e.val(), e.side())
        }), o.elem[0] && !e.elemColorBox[0].eventHandler && (w.on("click", function (o) {
            if (!i(o.target).hasClass(l) && !i(o.target).parents("." + l)[0] && !i(o.target).hasClass(c.replace(/\./g, "")) && !i(o.target).parents(c)[0] && e.elemPicker) {
                if (e.color) {
                    var t = k(P(e.color));
                    e.select(t.h, t.s, t.b)
                } else e.elemColorBox.find("." + d).removeClass(a).addClass(s);
                r[0].style.background = e.color || "", e.removePicker()
            }
        }), B.on("resize", function () {
            return !(!e.elemPicker || !i(c)[0]) && void e.position()
        }), e.elemColorBox[0].eventHandler = !0)
    }, o.render = function (e) {
        var i = new D(e);
        return r.call(i)
    }, e(t, o)
});
layui.define("layer", function (e) {
    "use strict";
    var i = layui.$, t = layui.layer, a = layui.hint(), n = layui.device(), l = "form", r = ".layui-form",
        s = "layui-this", o = "layui-hide", c = "layui-disabled", u = function () {
            this.config = {
                verify: {
                    required: [/[\S]+/, "必填项不能为空"],
                    phone: [/^1\d{10}$/, "请输入正确的手机号"],
                    email: [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, "邮箱格式不正确"],
                    url: [/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/, "链接格式不正确"],
                    number: function (e) {
                        if (!e || isNaN(e)) return "只能填写数字"
                    },
                    date: [/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/, "日期格式不正确"],
                    identity: [/(^\d{15}$)|(^\d{17}(x|X|\d)$)/, "请输入正确的身份证号"]
                }
            }
        };
    u.prototype.set = function (e) {
        var t = this;
        return i.extend(!0, t.config, e), t
    }, u.prototype.verify = function (e) {
        var t = this;
        return i.extend(!0, t.config.verify, e), t
    }, u.prototype.on = function (e, i) {
        return layui.onevent.call(this, l, e, i)
    }, u.prototype.val = function (e, t) {
        var a = i(r + '[lay-filter="' + e + '"]');
        a.each(function (e, a) {
            var n = i(this);
            layui.each(t, function (e, i) {
                var t, a = n.find('[name="' + e + '"]');
                a[0] && (t = a[0].type, "checkbox" === t ? a[0].checked = i : "radio" === t ? a.each(function () {
                    this.value === i && (this.checked = !0)
                }) : a.val(i))
            })
        }), f.render(null, e)
    }, u.prototype.render = function (e, t) {
        var n = this, u = i(r + function () {
            return t ? '[lay-filter="' + t + '"]' : ""
        }()), d = {
            select: function () {
                var e, t = "请选择", a = "layui-form-select", n = "layui-select-title", r = "layui-select-none", d = "",
                    f = u.find("select"), v = function (t, l) {
                        i(t.target).parent().hasClass(n) && !l || (i("." + a).removeClass(a + "ed " + a + "up"), e && d && e.val(d)), e = null
                    }, y = function (t, u, f) {
                        var y, p = i(this), m = t.find("." + n), k = m.find("input"), x = t.find("dl"),
                            g = x.children("dd"), b = this.selectedIndex;
                        if (!u) {
                            var C = function () {
                                var e = t.offset().top + t.outerHeight() + 5 - h.scrollTop(), i = x.outerHeight();
                                b = p[0].selectedIndex, t.addClass(a + "ed"), g.removeClass(o), y = null, g.eq(b).addClass(s).siblings().removeClass(s), e + i > h.height() && e >= i && t.addClass(a + "up"), $()
                            }, w = function (e) {
                                t.removeClass(a + "ed " + a + "up"), k.blur(), y = null, e || T(k.val(), function (e) {
                                    e && (d = x.find("." + s).html(), k && k.val(d))
                                })
                            }, $ = function () {
                                var e = x.children("dd." + s);
                                if (e[0]) {
                                    var i = e.position().top, t = x.height(), a = e.height();
                                    i > t && x.scrollTop(i + x.scrollTop() - t + a - 5), i < 0 && x.scrollTop(i + x.scrollTop() - 5)
                                }
                            };
                            m.on("click", function (e) {
                                t.hasClass(a + "ed") ? w() : (v(e, !0), C()), x.find("." + r).remove()
                            }), m.find(".layui-edge").on("click", function () {
                                k.focus()
                            }), k.on("keyup", function (e) {
                                var i = e.keyCode;
                                9 === i && C()
                            }).on("keydown", function (e) {
                                var i = e.keyCode;
                                9 === i && w();
                                var t = function (i, a) {
                                    var n, l;
                                    e.preventDefault();
                                    var r = function () {
                                        var e = x.children("dd." + s);
                                        if (x.children("dd." + o)[0] && "next" === i) {
                                            var t = x.children("dd:not(." + o + ",." + c + ")"), n = t.eq(0).index();
                                            if (n >= 0 && n < e.index() && !t.hasClass(s)) return t.eq(0).prev()[0] ? t.eq(0).prev() : x.children(":last")
                                        }
                                        return a && a[0] ? a : y && y[0] ? y : e
                                    }();
                                    return l = r[i](), n = r[i]("dd:not(." + o + ")"), l[0] ? (y = r[i](), n[0] && !n.hasClass(c) || !y[0] ? (n.addClass(s).siblings().removeClass(s), void $()) : t(i, y)) : y = null
                                };
                                38 === i && t("prev"), 40 === i && t("next"), 13 === i && (e.preventDefault(), x.children("dd." + s).trigger("click"))
                            });
                            var T = function (e, t, a) {
                                var n = 0;
                                layui.each(g, function () {
                                    var t = i(this), l = t.text(), r = l.indexOf(e) === -1;
                                    ("" === e || "blur" === a ? e !== l : r) && n++, "keyup" === a && t[r ? "addClass" : "removeClass"](o)
                                });
                                var l = n === g.length;
                                return t(l), l
                            }, j = function (e) {
                                var i = this.value, t = e.keyCode;
                                return 9 !== t && 13 !== t && 37 !== t && 38 !== t && 39 !== t && 40 !== t && (T(i, function (e) {
                                    e ? x.find("." + r)[0] || x.append('<p class="' + r + '">无匹配项</p>') : x.find("." + r).remove()
                                }, "keyup"), "" === i && x.find("." + r).remove(), void $())
                            };
                            f && k.on("keyup", j).on("blur", function (t) {
                                var a = p[0].selectedIndex;
                                e = k, d = i(p[0].options[a]).html(), setTimeout(function () {
                                    T(k.val(), function (e) {
                                        d || k.val("")
                                    }, "blur")
                                }, 200)
                            }), g.on("click", function () {
                                var e = i(this), a = e.attr("lay-value"), n = p.attr("lay-filter");
                                return !e.hasClass(c) && (e.hasClass("layui-select-tips") ? k.val("") : (k.val(e.text()), e.addClass(s)), e.siblings().removeClass(s), p.val(a).removeClass("layui-form-danger"), layui.event.call(this, l, "select(" + n + ")", {
                                    elem: p[0],
                                    value: a,
                                    othis: t
                                }), w(!0), !1)
                            }), t.find("dl>dt").on("click", function (e) {
                                return !1
                            }), i(document).off("click", v).on("click", v)
                        }
                    };
                f.each(function (e, l) {
                    var r = i(this), o = r.next("." + a), u = this.disabled, d = l.value,
                        f = i(l.options[l.selectedIndex]), v = l.options[0];
                    if ("string" == typeof r.attr("lay-ignore")) return r.show();
                    var h = "string" == typeof r.attr("lay-search"), p = v ? v.value ? t : v.innerHTML || t : t,
                        m = i(['<div class="' + (h ? "" : "layui-unselect ") + a, (u ? " layui-select-disabled" : "") + '">', '<div class="' + n + '">', '<input type="text" placeholder="' + p + '" ' + ('value="' + (d ? f.html() : "") + '"') + (h ? "" : " readonly") + ' class="layui-input' + (h ? "" : " layui-unselect") + (u ? " " + c : "") + '">', '<i class="layui-edge"></i></div>', '<dl class="layui-anim layui-anim-upbit' + (r.find("optgroup")[0] ? " layui-select-group" : "") + '">', function (e) {
                            var i = [];
                            return layui.each(e, function (e, a) {
                                0 !== e || a.value ? "optgroup" === a.tagName.toLowerCase() ? i.push("<dt>" + a.label + "</dt>") : i.push('<dd lay-value="' + a.value + '" class="' + (d === a.value ? s : "") + (a.disabled ? " " + c : "") + '">' + a.innerHTML + "</dd>") : i.push('<dd lay-value="" class="layui-select-tips">' + (a.innerHTML || t) + "</dd>")
                            }), 0 === i.length && i.push('<dd lay-value="" class="' + c + '">没有选项</dd>'), i.join("")
                        }(r.find("*")) + "</dl>", "</div>"].join(""));
                    o[0] && o.remove(), r.after(m), y.call(this, m, u, h)
                })
            }, checkbox: function () {
                var e = {
                    checkbox: ["layui-form-checkbox", "layui-form-checked", "checkbox"],
                    _switch: ["layui-form-switch", "layui-form-onswitch", "switch"]
                }, t = u.find("input[type=checkbox]"), a = function (e, t) {
                    var a = i(this);
                    e.on("click", function () {
                        var i = a.attr("lay-filter"), n = (a.attr("lay-text") || "").split("|");
                        a[0].disabled || (a[0].checked ? (a[0].checked = !1, e.removeClass(t[1]).find("em").text(n[1])) : (a[0].checked = !0, e.addClass(t[1]).find("em").text(n[0])), layui.event.call(a[0], l, t[2] + "(" + i + ")", {
                            elem: a[0],
                            value: a[0].value,
                            othis: e
                        }))
                    })
                };
                t.each(function (t, n) {
                    var l = i(this), r = l.attr("lay-skin"), s = (l.attr("lay-text") || "").split("|"),
                        o = this.disabled;
                    "switch" === r && (r = "_" + r);
                    var u = e[r] || e.checkbox;
                    if ("string" == typeof l.attr("lay-ignore")) return l.show();
                    var d = l.next("." + u[0]),
                        f = i(['<div class="layui-unselect ' + u[0], n.checked ? " " + u[1] : "", o ? " layui-checkbox-disbaled " + c : "", '"', r ? ' lay-skin="' + r + '"' : "", ">", function () {
                            var e = n.title.replace(/\s/g, ""), i = {
                                checkbox: [e ? "<span>" + n.title + "</span>" : "", '<i class="layui-icon layui-icon-ok"></i>'].join(""),
                                _switch: "<em>" + ((n.checked ? s[0] : s[1]) || "") + "</em><i></i>"
                            };
                            return i[r] || i.checkbox
                        }(), "</div>"].join(""));
                    d[0] && d.remove(), l.after(f), a.call(this, f, u)
                })
            }, radio: function () {
                var e = "layui-form-radio", t = ["&#xe643;", "&#xe63f;"], a = u.find("input[type=radio]"),
                    n = function (a) {
                        var n = i(this), s = "layui-anim-scaleSpring";
                        a.on("click", function () {
                            var o = n[0].name, c = n.parents(r), u = n.attr("lay-filter"),
                                d = c.find("input[name=" + o.replace(/(\.|#|\[|\])/g, "\\$1") + "]");
                            n[0].disabled || (layui.each(d, function () {
                                var a = i(this).next("." + e);
                                this.checked = !1, a.removeClass(e + "ed"), a.find(".layui-icon").removeClass(s).html(t[1])
                            }), n[0].checked = !0, a.addClass(e + "ed"), a.find(".layui-icon").addClass(s).html(t[0]), layui.event.call(n[0], l, "radio(" + u + ")", {
                                elem: n[0],
                                value: n[0].value,
                                othis: a
                            }))
                        })
                    };
                a.each(function (a, l) {
                    var r = i(this), s = r.next("." + e), o = this.disabled;
                    if ("string" == typeof r.attr("lay-ignore")) return r.show();
                    s[0] && s.remove();
                    var u = i(['<div class="layui-unselect ' + e, l.checked ? " " + e + "ed" : "", (o ? " layui-radio-disbaled " + c : "") + '">', '<i class="layui-anim layui-icon">' + t[l.checked ? 0 : 1] + "</i>", "<div>" + function () {
                        var e = l.title || "";
                        return "string" == typeof r.next().attr("lay-radio") && (e = r.next().html(), r.next().remove()), e
                    }() + "</div>", "</div>"].join(""));
                    r.after(u), n.call(this, u)
                })
            }
        };
        return e ? d[e] ? d[e]() : a.error("不支持的" + e + "表单渲染") : layui.each(d, function (e, i) {
            i()
        }), n
    };
    var d = function () {
        var e = i(this), a = f.config.verify, s = null, o = "layui-form-danger", c = {}, u = e.parents(r),
            d = u.find("*[lay-verify]"), v = e.parents("form")[0], h = u.find("input,select,textarea"),
            y = e.attr("lay-filter");
        if (layui.each(d, function (e, l) {
            var r = i(this), c = r.attr("lay-verify").split("|"), u = r.attr("lay-verType"), d = r.val();
            if (r.removeClass(o), layui.each(c, function (e, i) {
                var c, f = "", v = "function" == typeof a[i];
                if (a[i]) {
                    var c = v ? f = a[i](d, l) : !a[i][0].test(d);
                    if (f = f || a[i][1], c) return "tips" === u ? t.tips(f, function () {
                        return "string" == typeof r.attr("lay-ignore") || "select" !== l.tagName.toLowerCase() && !/^checkbox|radio$/.test(l.type) ? r : r.next()
                    }(), {tips: 1}) : "alert" === u ? t.alert(f, {title: "提示", shadeClose: !0}) : t.msg(f, {
                        icon: 5,
                        shift: 6
                    }), n.android || n.ios || l.focus(), r.addClass(o), s = !0
                }
            }), s) return s
        }), s) return !1;
        var p = {};
        return layui.each(h, function (e, i) {
            if (i.name = (i.name || "").replace(/^\s*|\s*&/, ""), i.name) {
                if (/^.*\[\]$/.test(i.name)) {
                    var t = i.name.match(/^(.*)\[\]$/g)[0];
                    p[t] = 0 | p[t], i.name = i.name.replace(/^(.*)\[\]$/, "$1[" + p[t]++ + "]")
                }
                /^checkbox|radio$/.test(i.type) && !i.checked || (c[i.name] = i.value)
            }
        }), layui.event.call(this, l, "submit(" + y + ")", {elem: this, form: v, field: c})
    }, f = new u, v = i(document), h = i(window);
    f.render(), v.on("reset", r, function () {
        var e = i(this).attr("lay-filter");
        setTimeout(function () {
            f.render(null, e)
        }, 50)
    }), v.on("submit", r, d).on("click", "*[lay-submit]", d), e(l, f)
});
layui.define("jquery", function (e) {
    "use strict";
    var o = layui.$, a = layui.hint(), i = "layui-tree-enter", r = function (e) {
        this.options = e
    }, t = {
        arrow: ["&#xe623;", "&#xe625;"],
        checkbox: ["&#xe626;", "&#xe627;"],
        radio: ["&#xe62b;", "&#xe62a;"],
        branch: ["&#xe622;", "&#xe624;"],
        leaf: "&#xe621;"
    };
    r.prototype.init = function (e) {
        var o = this;
        e.addClass("layui-box layui-tree"), o.options.skin && e.addClass("layui-tree-skin-" + o.options.skin), o.tree(e), o.on(e)
    }, r.prototype.tree = function (e, a) {
        var i = this, r = i.options, n = a || r.nodes;
        layui.each(n, function (a, n) {
            var l = n.children && n.children.length > 0,
                c = o('<ul class="' + (n.spread ? "layui-show" : "") + '"></ul>'),
                s = o(["<li " + (n.spread ? 'data-spread="' + n.spread + '"' : "") + ">", function () {
                    return l ? '<i class="layui-icon layui-tree-spread">' + (n.spread ? t.arrow[1] : t.arrow[0]) + "</i>" : ""
                }(), function () {
                    return r.check ? '<i class="layui-icon layui-tree-check">' + ("checkbox" === r.check ? t.checkbox[0] : "radio" === r.check ? t.radio[0] : "") + "</i>" : ""
                }(), function () {
                    return '<a href="' + (n.href || "javascript:;") + '" ' + (r.target && n.href ? 'target="' + r.target + '"' : "") + ">" + ('<i class="layui-icon layui-tree-' + (l ? "branch" : "leaf") + '">' + (l ? n.spread ? t.branch[1] : t.branch[0] : t.leaf) + "</i>") + ("<cite>" + (n.name || "未命名") + "</cite></a>")
                }(), "</li>"].join(""));
            l && (s.append(c), i.tree(c, n.children)), e.append(s), "function" == typeof r.click && i.click(s, n), i.spread(s, n), r.drag && i.drag(s, n)
        })
    }, r.prototype.click = function (e, o) {
        var a = this, i = a.options;
        e.children("a").on("click", function (e) {
            layui.stope(e), i.click(o)
        })
    }, r.prototype.spread = function (e, o) {
        var a = this, i = (a.options, e.children(".layui-tree-spread")), r = e.children("ul"), n = e.children("a"),
            l = function () {
                e.data("spread") ? (e.data("spread", null), r.removeClass("layui-show"), i.html(t.arrow[0]), n.find(".layui-icon").html(t.branch[0])) : (e.data("spread", !0), r.addClass("layui-show"), i.html(t.arrow[1]), n.find(".layui-icon").html(t.branch[1]))
            };
        r[0] && (i.on("click", l), n.on("dblclick", l))
    }, r.prototype.on = function (e) {
        var a = this, r = a.options, t = "layui-tree-drag";
        e.find("i").on("selectstart", function (e) {
            return !1
        }), r.drag && o(document).on("mousemove", function (e) {
            var i = a.move;
            if (i.from) {
                var r = (i.to, o('<div class="layui-box ' + t + '"></div>'));
                e.preventDefault(), o("." + t)[0] || o("body").append(r);
                var n = o("." + t)[0] ? o("." + t) : r;
                n.addClass("layui-show").html(i.from.elem.children("a").html()), n.css({
                    left: e.pageX + 10,
                    top: e.pageY + 10
                })
            }
        }).on("mouseup", function () {
            var e = a.move;
            e.from && (e.from.elem.children("a").removeClass(i), e.to && e.to.elem.children("a").removeClass(i), a.move = {}, o("." + t).remove())
        })
    }, r.prototype.move = {}, r.prototype.drag = function (e, a) {
        var r = this, t = (r.options, e.children("a")), n = function () {
            var t = o(this), n = r.move;
            n.from && (n.to = {item: a, elem: e}, t.addClass(i))
        };
        t.on("mousedown", function () {
            var o = r.move;
            o.from = {item: a, elem: e}
        }), t.on("mouseenter", n).on("mousemove", n).on("mouseleave", function () {
            var e = o(this), a = r.move;
            a.from && (delete a.to, e.removeClass(i))
        })
    }, e("tree", function (e) {
        var i = new r(e = e || {}), t = o(e.elem);
        return t[0] ? void i.init(t) : a.error("layui.tree 没有找到" + e.elem + "元素")
    })
});
layui.define(["laytpl", "laypage", "layer", "form", "util"], function (e) {
    "use strict";
    var t = layui.$, i = layui.laytpl, a = layui.laypage, l = layui.layer, n = layui.form,
        o = (layui.util, layui.hint()), r = layui.device(), d = {
            config: {checkName: "LAY_CHECKED", indexName: "LAY_TABLE_INDEX"},
            cache: {},
            index: layui.table ? layui.table.index + 1e4 : 0,
            set: function (e) {
                var i = this;
                return i.config = t.extend({}, i.config, e), i
            },
            on: function (e, t) {
                return layui.onevent.call(this, s, e, t)
            }
        }, c = function () {
            var e = this, t = e.config, i = t.id || t.index;
            return i && (c.config[i] = t), {
                reload: function (t) {
                    e.reload.call(e, t)
                }, setColsWidth: function () {
                    e.setColsWidth.call(e)
                }, config: t
            }
        }, s = "table", u = ".layui-table", y = "layui-hide", h = "layui-none", f = "layui-table-view",
        p = ".layui-table-tool", v = ".layui-table-box", m = ".layui-table-init", g = ".layui-table-header",
        b = ".layui-table-body", x = ".layui-table-main", k = ".layui-table-fixed", C = ".layui-table-fixed-l",
        w = ".layui-table-fixed-r", T = ".layui-table-total", A = ".layui-table-page", L = ".layui-table-sort",
        S = "layui-table-edit", N = "layui-table-hover", W = function (e) {
            var t = '{{#if(item2.colspan){}} colspan="{{item2.colspan}}"{{#} if(item2.rowspan){}} rowspan="{{item2.rowspan}}"{{#}}}';
            return e = e || {}, ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<thead>", "{{# layui.each(d.data.cols, function(i1, item1){ }}", "<tr>", "{{# layui.each(item1, function(i2, item2){ }}", '{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}', '{{# if(item2.fixed === "right"){ right = true; } }}', function () {
                return e.fixed && "right" !== e.fixed ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}' : "right" === e.fixed ? '{{# if(item2.fixed === "right"){ }}' : ""
            }(), "{{# var isSort = !(item2.colGroup) && item2.sort; }}", '<th data-field="{{ item2.field||i2 }}" data-key="{{d.index}}-{{i1}}-{{i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{ item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{item2.minWidth}}"{{# } }} ' + t + ' {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}">', '<div class="layui-table-cell laytable-cell-', "{{# if(item2.colGroup){ }}", "group", "{{# } else { }}", "{{d.index}}-{{i1}}-{{i2}}", '{{# if(item2.type !== "normal"){ }}', " laytable-cell-{{ item2.type }}", "{{# } }}", "{{# } }}", '" {{#if(item2.align){}}align="{{item2.align}}"{{#}}}>', '{{# if(item2.type === "checkbox"){ }}', '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>', "{{# } else { }}", '<span>{{item2.title||""}}</span>', "{{# if(isSort){ }}", '<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="升序"></i><i class="layui-edge layui-table-sort-desc" title="降序"></i></span>', "{{# } }}", "{{# } }}", "</div>", "</th>", e.fixed ? "{{# }; }}" : "", "{{# }); }}", "</tr>", "{{# }); }}", "</thead>", "</table>"].join("")
        },
        _ = ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<tbody></tbody>", "</table>"].join(""),
        E = ['<div class="layui-form layui-border-box {{d.VIEW_CLASS}}" lay-filter="LAY-table-{{d.index}}" style="{{# if(d.data.width){ }}width:{{d.data.width}}px;{{# } }} {{# if(d.data.height){ }}height:{{d.data.height}}px;{{# } }}">', "{{# if(d.data.toolbar){ }}", '<div class="layui-table-tool">', '<div class="layui-table-tool-temp"></div>', '<div class="layui-table-tool-self"></div>', "</div>", "{{# } }}", '<div class="layui-table-box">', "{{# if(d.loading){ }}", '<div class="layui-table-init" style="background-color: #fff;">', '<i class="layui-icon layui-icon-loading layui-icon"></i>', "</div>", "{{# } }}", "{{# var left, right; }}", '<div class="layui-table-header">', W(), "</div>", '<div class="layui-table-body layui-table-main">', _, "</div>", "{{# if(left){ }}", '<div class="layui-table-fixed layui-table-fixed-l">', '<div class="layui-table-header">', W({fixed: !0}), "</div>", '<div class="layui-table-body">', _, "</div>", "</div>", "{{# }; }}", "{{# if(right){ }}", '<div class="layui-table-fixed layui-table-fixed-r">', '<div class="layui-table-header">', W({fixed: "right"}), '<div class="layui-table-mend"></div>', "</div>", '<div class="layui-table-body">', _, "</div>", "</div>", "{{# }; }}", "</div>", "{{# if(d.data.totalRow){ }}", '<div class="layui-table-total">', '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', '<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>', "</table>", "</div>", "{{# } }}", "{{# if(d.data.page){ }}", '<div class="layui-table-page">', '<div id="layui-table-page{{d.index}}"></div>', "</div>", "{{# } }}", "<style>", "{{# layui.each(d.data.cols, function(i1, item1){", "layui.each(item1, function(i2, item2){ }}", ".laytable-cell-{{d.index}}-{{i1}}-{{i2}}{ ", "{{# if(item2.width){ }}", "width: {{item2.width}}px;", "{{# } }}", " }", "{{# });", "}); }}", "</style>", "</div>"].join(""),
        R = t(window), H = t(document), j = function (e) {
            var i = this;
            i.index = ++d.index, i.config = t.extend({}, i.config, d.config, e), i.render()
        };
    j.prototype.config = {
        limit: 10,
        loading: !0,
        cellMinWidth: 60,
        defaultToolbar: ["filter", "exports", "print"],
        text: {none: "无数据"}
    }, j.prototype.render = function () {
        var e = this, a = e.config;
        if (a.elem = t(a.elem), a.where = a.where || {}, a.id = a.id || a.elem.attr("id") || a.index, a.request = t.extend({
            pageName: "page",
            limitName: "limit"
        }, a.request), a.response = t.extend({
            statusName: "code",
            statusCode: 0,
            msgName: "msg",
            dataName: "data",
            countName: "count"
        }, a.response), "object" == typeof a.page && (a.limit = a.page.limit || a.limit, a.limits = a.page.limits || a.limits, e.page = a.page.curr = a.page.curr || 1, delete a.page.elem, delete a.page.jump), !a.elem[0]) return e;
        a.height && /^full-\d+$/.test(a.height) && (e.fullHeightGap = a.height.split("-")[1], a.height = R.height() - e.fullHeightGap), e.setInit();
        var l = a.elem, n = l.next("." + f), o = e.elem = t(i(E).render({VIEW_CLASS: f, data: a, index: e.index}));
        if (a.index = e.index, n[0] && n.remove(), l.after(o), e.layTool = o.find(p), e.layBox = o.find(v), e.layHeader = o.find(g), e.layMain = o.find(x), e.layBody = o.find(b), e.layFixed = o.find(k), e.layFixLeft = o.find(C), e.layFixRight = o.find(w), e.layTotal = o.find(T), e.layPage = o.find(A), e.renderToolbar(), e.fullSize(), a.cols.length > 1) {
            var r = e.layFixed.find(g).find("th");
            r.height(e.layHeader.height() - 1 - parseFloat(r.css("padding-top")) - parseFloat(r.css("padding-bottom")))
        }
        e.pullData(e.page), e.events()
    }, j.prototype.initOpts = function (e) {
        var t = this, i = (t.config, {checkbox: 48, radio: 48, space: 15, numbers: 40});
        e.checkbox && (e.type = "checkbox"), e.space && (e.type = "space"), e.type || (e.type = "normal"), "normal" !== e.type && (e.unresize = !0, e.width = e.width || i[e.type])
    }, j.prototype.setInit = function (e) {
        var t = this, i = t.config;
        return i.clientWidth = i.width || function () {
            var e = function (t) {
                var a, l;
                t = t || i.elem.parent(), a = t.width();
                try {
                    l = "none" === t.css("display")
                } catch (n) {
                }
                return !t[0] || a && !l ? a : e(t.parent())
            };
            return e()
        }(), "width" === e ? i.clientWidth : void layui.each(i.cols, function (e, a) {
            layui.each(a, function (l, n) {
                if (!n) return void a.splice(l, 1);
                if (n.key = e + "-" + l, n.hide = n.hide || !1, n.colGroup || n.colspan > 1) {
                    var o = 0;
                    layui.each(i.cols[e + 1], function (t, i) {
                        i.HAS_PARENT || o > 1 && o == n.colspan || (i.HAS_PARENT = !0, i.parentKey = e + "-" + l, o += parseInt(i.colspan > 1 ? i.colspan : 1))
                    }), n.colGroup = !0
                }
                t.initOpts(n)
            })
        })
    }, j.prototype.renderToolbar = function () {
        var e = this, a = e.config,
            l = ['<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>', '<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>', '<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'].join(""),
            n = e.layTool.find(".layui-table-tool-temp");
        if ("default" === a.toolbar) n.html(l); else if (a.toolbar) {
            var o = t(a.toolbar).html() || "";
            o && n.html(i(o).render(a))
        }
        var r = {
            filter: {title: "筛选列", layEvent: "LAYTABLE_COLS", icon: "layui-icon-cols"},
            exports: {title: "导出", layEvent: "LAYTABLE_EXPORT", icon: "layui-icon-export"},
            print: {title: "打印", layEvent: "LAYTABLE_PRINT", icon: "layui-icon-print"}
        }, d = [];
        "object" == typeof a.defaultToolbar && layui.each(a.defaultToolbar, function (e, t) {
            var i = r[t];
            i && d.push('<div class="layui-inline" title="' + i.title + '" lay-event="' + i.layEvent + '"><i class="layui-icon ' + i.icon + '"></i></div>')
        }), e.layTool.find(".layui-table-tool-self").html(d.join(""))
    }, j.prototype.setParentCol = function (e, t) {
        var i = this, a = i.config, l = i.layHeader.find('th[data-key="' + a.index + "-" + t + '"]'),
            n = parseInt(l.attr("colspan")) || 0;
        if (l[0]) {
            var o = t.split("-"), r = a.cols[o[0]][o[1]];
            e ? n-- : n++, l.attr("colspan", n), l[n < 1 ? "addClass" : "removeClass"](y), r.colspan = n, r.hide = n < 1;
            var d = l.data("parentkey");
            d && i.setParentCol(e, d)
        }
    }, j.prototype.setColsPatch = function () {
        var e = this, t = e.config;
        layui.each(t.cols, function (t, i) {
            layui.each(i, function (t, i) {
                i.hide && e.setParentCol(i.hide, i.parentKey)
            })
        })
    }, j.prototype.setColsWidth = function () {
        var e = this, t = e.config, i = 0, a = 0, l = 0, n = 0, o = e.setInit("width");
        e.eachCols(function (e, t) {
            t.hide || i++
        }), o = o - function () {
            return "line" === t.skin || "nob" === t.skin ? 2 : i + 1
        }() - e.getScrollWidth(e.layMain[0]) - 1;
        var r = function (e) {
            layui.each(t.cols, function (i, r) {
                layui.each(r, function (i, d) {
                    var c = 0, s = d.minWidth || t.cellMinWidth;
                    return d ? void(d.colGroup || d.hide || (e ? l && l < s && (a--, c = s) : (c = d.width || 0, /\d+%$/.test(c) ? (c = Math.floor(parseFloat(c) / 100 * o), c < s && (c = s)) : c || (d.width = c = 0, a++)), d.hide && (c = 0), n += c)) : void r.splice(i, 1)
                })
            }), o > n && a && (l = (o - n) / a)
        };
        r(), r(!0), e.autoColNums = a, e.eachCols(function (i, a) {
            var n = a.minWidth || t.cellMinWidth;
            a.colGroup || a.hide || (0 === a.width ? e.getCssRule(t.index + "-" + a.key, function (e) {
                e.style.width = Math.floor(l >= n ? l : n) + "px"
            }) : /\d+%$/.test(a.width) && e.getCssRule(t.index + "-" + a.key, function (e) {
                e.style.width = Math.floor(parseFloat(a.width) / 100 * o) + "px"
            }))
        });
        var d = e.layMain.width() - e.getScrollWidth(e.layMain[0]) - e.layMain.children("table").outerWidth();
        if (e.autoColNums && d >= -i && d <= i) {
            var c = function (t) {
                var i;
                return t = t || e.layHeader.eq(0).find("thead th:last-child"), i = t.data("field"), !i && t.prev()[0] ? c(t.prev()) : t
            }, s = c(), u = s.data("key");
            e.getCssRule(u, function (t) {
                var i = t.style.width || s.outerWidth();
                t.style.width = parseFloat(i) + d + "px", e.layMain.height() - e.layMain.prop("clientHeight") > 0 && (t.style.width = parseFloat(t.style.width) - 1 + "px")
            })
        }
        e.loading(!0)
    }, j.prototype.reload = function (e) {
        var i = this;
        i.config.data && i.config.data.constructor === Array && delete i.config.data, i.config = t.extend({}, i.config, e), i.render()
    }, j.prototype.page = 1, j.prototype.pullData = function (e) {
        var i = this, a = i.config, l = a.request, n = a.response, o = function () {
            "object" == typeof a.initSort && i.sort(a.initSort.field, a.initSort.type)
        };
        if (i.startTime = (new Date).getTime(), a.url) {
            var r = {};
            r[l.pageName] = e, r[l.limitName] = a.limit;
            var d = t.extend(r, a.where);
            a.contentType && 0 == a.contentType.indexOf("application/json") && (d = JSON.stringify(d)), t.ajax({
                type: a.method || "get",
                url: a.url,
                contentType: a.contentType,
                data: d,
                dataType: "json",
                headers: a.headers || {},
                success: function (t) {
                    "function" == typeof a.parseData && (t = a.parseData(t) || t), t[n.statusName] != n.statusCode ? (i.renderForm(), i.layMain.html('<div class="' + h + '">' + (t[n.msgName] || "返回的数据不符合规范，正确的成功状态码 (" + n.statusName + ") 应为：" + n.statusCode) + "</div>")) : (i.renderData(t, e, t[n.countName]), o(), a.time = (new Date).getTime() - i.startTime + " ms"), i.setColsWidth(), "function" == typeof a.done && a.done(t, e, t[n.countName])
                },
                error: function (e, t) {
                    i.layMain.html('<div class="' + h + '">数据接口请求异常：' + t + "</div>"), i.renderForm(), i.setColsWidth()
                }
            })
        } else if (a.data && a.data.constructor === Array) {
            var c = {}, s = e * a.limit - a.limit;
            c[n.dataName] = a.data.concat().splice(s, a.limit), c[n.countName] = a.data.length, i.renderData(c, e, a.data.length), o(), i.setColsWidth(), "function" == typeof a.done && a.done(c, e, c[n.countName])
        }
    }, j.prototype.eachCols = function (e) {
        var t = this;
        return d.eachCols(null, e, t.config.cols), t
    }, j.prototype.renderData = function (e, n, o, r) {
        var c = this, s = c.config, u = e[s.response.dataName] || [], f = [], p = [], v = [], m = function () {
            var e;
            return !r && c.sortKey ? c.sort(c.sortKey.field, c.sortKey.sort, !0) : (layui.each(u, function (a, l) {
                var o = [], u = [], h = [], m = a + s.limit * (n - 1) + 1;
                0 !== l.length && (r || (l[d.config.indexName] = a), c.eachCols(function (n, r) {
                    var c = r.field || n, f = s.index + "-" + r.key, p = l[c];
                    if (void 0 !== p && null !== p || (p = ""), !r.colGroup) {
                        var v = ['<td data-field="' + c + '" data-key="' + f + '" ' + function () {
                            var e = [];
                            return r.edit && e.push('data-edit="' + r.edit + '"'), r.align && e.push('align="' + r.align + '"'), r.templet && e.push('data-content="' + p + '"'), r.toolbar && e.push('data-off="true"'), r.event && e.push('lay-event="' + r.event + '"'), r.style && e.push('style="' + r.style + '"'), r.minWidth && e.push('data-minwidth="' + r.minWidth + '"'), e.join(" ")
                        }() + ' class="' + function () {
                            var e = [];
                            return r.hide && e.push(y), r.field || e.push("layui-table-col-special"), e.join(" ")
                        }() + '">', '<div class="layui-table-cell laytable-cell-' + function () {
                            return "normal" === r.type ? f : f + " laytable-cell-" + r.type
                        }() + '">' + function () {
                            var n = t.extend(!0, {LAY_INDEX: m}, l), o = d.config.checkName;
                            switch (r.type) {
                                case"checkbox":
                                    return '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' + function () {
                                        return r[o] ? (l[o] = r[o], r[o] ? "checked" : "") : n[o] ? "checked" : ""
                                    }() + ">";
                                case"radio":
                                    return n[o] && (e = a), '<input type="radio" name="layTableRadio_' + s.index + '" ' + (n[o] ? "checked" : "") + ' lay-type="layTableRadio">';
                                case"numbers":
                                    return m
                            }
                            return r.toolbar ? i(t(r.toolbar).html() || "").render(n) : r.templet ? function () {
                                return "function" == typeof r.templet ? r.templet(n) : i(t(r.templet).html() || String(p)).render(n)
                            }() : p
                        }(), "</div></td>"].join("");
                        o.push(v), r.fixed && "right" !== r.fixed && u.push(v), "right" === r.fixed && h.push(v)
                    }
                }), f.push('<tr data-index="' + a + '">' + o.join("") + "</tr>"), p.push('<tr data-index="' + a + '">' + u.join("") + "</tr>"), v.push('<tr data-index="' + a + '">' + h.join("") + "</tr>"))
            }), c.layBody.scrollTop(0), c.layMain.find("." + h).remove(), c.layMain.find("tbody").html(f.join("")), c.layFixLeft.find("tbody").html(p.join("")), c.layFixRight.find("tbody").html(v.join("")), c.renderForm(), "number" == typeof e && c.setThisRowChecked(e), c.syncCheckAll(), c.scrollPatch(), l.close(c.tipsIndex), s.HAS_SET_COLS_PATCH || c.setColsPatch(), void(s.HAS_SET_COLS_PATCH = !0))
        };
        return c.key = s.id || s.index, d.cache[c.key] = u, c.layPage[0 == o || 0 === u.length && 1 == n ? "addClass" : "removeClass"](y), r ? m() : 0 === u.length ? (c.renderForm(), c.layFixed.remove(), c.layMain.find("tbody").html(""), c.layMain.find("." + h).remove(), c.layMain.append('<div class="' + h + '">' + s.text.none + "</div>")) : (m(), c.renderTotal(u), void(s.page && (s.page = t.extend({
            elem: "layui-table-page" + s.index,
            count: o,
            limit: s.limit,
            limits: s.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
            groups: 3,
            layout: ["prev", "page", "next", "skip", "count", "limit"],
            prev: '<i class="layui-icon">&#xe603;</i>',
            next: '<i class="layui-icon">&#xe602;</i>',
            jump: function (e, t) {
                t || (c.page = e.curr, s.limit = e.limit, c.loading(), c.pullData(e.curr))
            }
        }, s.page), s.page.count = o, a.render(s.page))))
    }, j.prototype.renderTotal = function (e) {
        var t = this, i = t.config, a = {};
        if (i.totalRow) {
            layui.each(e, function (e, i) {
                0 !== i.length && t.eachCols(function (e, t) {
                    var l = t.field || e, n = i[l];
                    t.totalRow && (a[l] = (a[l] || 0) + (parseFloat(n) || 0))
                })
            });
            var l = [];
            t.eachCols(function (e, t) {
                var n = t.field || e;
                if (!t.hide) {
                    var o = ['<td data-field="' + n + '" data-key="' + t.key + '" ' + function () {
                        var e = [];
                        return t.align && e.push('align="' + t.align + '"'), t.style && e.push('style="' + t.style + '"'), t.minWidth && e.push('data-minwidth="' + t.minWidth + '"'), e.join(" ")
                    }() + ">", '<div class="layui-table-cell laytable-cell-' + function () {
                        var e = i.index + "-" + t.key;
                        return "normal" === t.type ? e : e + " laytable-cell-" + t.type
                    }() + '">' + function () {
                        var e = t.totalRowText || "";
                        return t.totalRow ? a[n] || e : e
                    }(), "</div></td>"].join("");
                    l.push(o)
                }
            }), t.layTotal.find("tbody").html("<tr>" + l.join("") + "</tr>")
        }
    }, j.prototype.getColElem = function (e, t) {
        var i = this, a = i.config;
        return e.eq(0).find(".laytable-cell-" + (a.index + "-" + t) + ":eq(0)")
    }, j.prototype.renderForm = function (e) {
        n.render(e, "LAY-table-" + this.index)
    }, j.prototype.setThisRowChecked = function (e) {
        var t = this, i = (t.config, "layui-table-click"), a = t.layBody.find('tr[data-index="' + e + '"]');
        a.addClass(i).siblings("tr").removeClass(i)
    }, j.prototype.sort = function (e, i, a, l) {
        var n, r, c = this, u = {}, y = c.config, h = y.elem.attr("lay-filter"), f = d.cache[c.key];
        "string" == typeof e && c.layHeader.find("th").each(function (i, a) {
            var l = t(this), o = l.data("field");
            if (o === e) return e = l, n = o, !1
        });
        try {
            var n = n || e.data("field"), p = e.data("key");
            if (c.sortKey && !a && n === c.sortKey.field && i === c.sortKey.sort) return;
            var v = c.layHeader.find("th .laytable-cell-" + p).find(L);
            c.layHeader.find("th").find(L).removeAttr("lay-sort"), v.attr("lay-sort", i || null), c.layFixed.find("th")
        } catch (m) {
            return o.error("Table modules: Did not match to field")
        }
        c.sortKey = {
            field: n,
            sort: i
        }, "asc" === i ? r = layui.sort(f, n) : "desc" === i ? r = layui.sort(f, n, !0) : (r = layui.sort(f, d.config.indexName), delete c.sortKey), u[y.response.dataName] = r, c.renderData(u, c.page, c.count, !0), l && layui.event.call(e, s, "sort(" + h + ")", {
            field: n,
            type: i
        })
    }, j.prototype.loading = function (e) {
        var i = this, a = i.config;
        a.loading && (e ? (i.layInit && i.layInit.remove(), delete i.layInit, i.layBox.find(m).remove()) : (i.layInit = t(['<div class="layui-table-init">', '<i class="layui-icon layui-icon-loading layui-icon"></i>', "</div>"].join("")), i.layBox.append(i.layInit)))
    }, j.prototype.setCheckData = function (e, t) {
        var i = this, a = i.config, l = d.cache[i.key];
        l[e] && l[e].constructor !== Array && (l[e][a.checkName] = t)
    }, j.prototype.syncCheckAll = function () {
        var e = this, t = e.config, i = e.layHeader.find('input[name="layTableCheckbox"]'), a = function (i) {
            return e.eachCols(function (e, a) {
                "checkbox" === a.type && (a[t.checkName] = i)
            }), i
        };
        i[0] && (d.checkStatus(e.key).isAll ? (i[0].checked || (i.prop("checked", !0), e.renderForm("checkbox")), a(!0)) : (i[0].checked && (i.prop("checked", !1), e.renderForm("checkbox")), a(!1)))
    }, j.prototype.getCssRule = function (e, t) {
        var i = this, a = i.elem.find("style")[0], l = a.sheet || a.styleSheet || {}, n = l.cssRules || l.rules;
        layui.each(n, function (i, a) {
            if (a.selectorText === ".laytable-cell-" + e) return t(a), !0
        })
    }, j.prototype.fullSize = function () {
        var e, t = this, i = t.config, a = i.height;
        t.fullHeightGap && (a = R.height() - t.fullHeightGap, a < 135 && (a = 135), t.elem.css("height", a)), a && (e = parseFloat(a) - (t.layHeader.outerHeight() || 38), i.toolbar && (e -= t.layTool.outerHeight() || 50), i.totalRow && (e -= t.layTotal.outerHeight() || 40), i.page && (e = e - (t.layPage.outerHeight() || 41) - 2), t.layMain.css("height", e))
    }, j.prototype.getScrollWidth = function (e) {
        var t = 0;
        return e ? t = e.offsetWidth - e.clientWidth : (e = document.createElement("div"), e.style.width = "100px", e.style.height = "100px", e.style.overflowY = "scroll", document.body.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e)), t
    }, j.prototype.scrollPatch = function () {
        var e = this, i = e.layMain.children("table"), a = e.layMain.width() - e.layMain.prop("clientWidth"),
            l = e.layMain.height() - e.layMain.prop("clientHeight"),
            n = (e.getScrollWidth(e.layMain[0]), i.outerWidth() - e.layMain.width()), o = function (e) {
                if (a && l) {
                    if (e = e.eq(0), !e.find(".layui-table-patch")[0]) {
                        var i = t('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>');
                        i.find("div").css({width: a}), e.find("tr").append(i)
                    }
                } else e.find(".layui-table-patch").remove()
            };
        o(e.layHeader), o(e.layTotal);
        var r = e.layMain.height(), d = r - l;
        e.layFixed.find(b).css("height", i.height() > d ? d : "auto"), e.layFixRight[n > 0 ? "removeClass" : "addClass"](y), e.layFixRight.css("right", a - 1)
    }, j.prototype.events = function () {
        var e, a = this, o = a.config, c = t("body"), u = {}, h = a.layHeader.find("th"), f = ".layui-table-cell",
            p = o.elem.attr("lay-filter");
        a.layTool.on("click", "*[lay-event]", function (e) {
            var i = t(this), c = i.attr("lay-event"), u = function (e) {
                var l = t(e.list), n = t('<ul class="layui-table-tool-panel"></ul>');
                n.html(l), i.find(".layui-table-tool-panel")[0] || i.append(n), a.renderForm(), n.on("click", function (e) {
                    layui.stope(e)
                }), e.done && e.done(n, l)
            };
            switch (layui.stope(e), H.trigger("table.tool.panel.remove"), l.close(a.tipsIndex), c) {
                case"LAYTABLE_COLS":
                    u({
                        list: function () {
                            var e = [];
                            return a.eachCols(function (t, i) {
                                i.field && "normal" == i.type && e.push('<li><input type="checkbox" name="' + i.field + '" data-key="' + i.key + '" data-parentkey="' + (i.parentKey || "") + '" lay-skin="primary" ' + (i.hide ? "" : "checked") + ' title="' + (i.title || i.field) + '" lay-filter="LAY_TABLE_TOOL_COLS"></li>')
                            }), e.join("")
                        }(), done: function () {
                            n.on("checkbox(LAY_TABLE_TOOL_COLS)", function (e) {
                                var i = t(e.elem), l = this.checked, n = i.data("key"), r = i.data("parentkey");
                                layui.each(o.cols, function (e, t) {
                                    layui.each(t, function (t, i) {
                                        if (e + "-" + t === n) {
                                            var d = i.hide;
                                            i.hide = !l, a.elem.find('*[data-key="' + o.index + "-" + n + '"]')[l ? "removeClass" : "addClass"](y), d != i.hide && a.setParentCol(!l, r), a.fullSize(), a.scrollPatch(), a.setColsWidth()
                                        }
                                    })
                                })
                            })
                        }
                    });
                    break;
                case"LAYTABLE_EXPORT":
                    r.ie ? l.tips("导出功能不支持 IE，请用 Chrome 等高级浏览器导出", this, {tips: 3}) : u({
                        list: function () {
                            return ['<li data-type="csv">导出到 Csv 文件</li>', '<li data-type="xls">导出到 Excel 文件</li>'].join("")
                        }(), done: function (e, i) {
                            i.on("click", function () {
                                var e = t(this).data("type");
                                d.exportFile(o.id, null, e)
                            })
                        }
                    });
                    break;
                case"LAYTABLE_PRINT":
                    var h = window.open("打印窗口", "_blank"),
                        f = ["<style>", "body{font-size: 12px; color: #666;}", "table{width: 100%; border-collapse: collapse; border-spacing: 0;}", "th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #666;}", "a{color: #666; text-decoration:none;}", "*.layui-hide{display: none}", "</style>"].join(""),
                        v = t(a.layHeader.html());
                    v.append(a.layMain.find("table").html()), v.find("th.layui-table-patch").remove(), v.find(".layui-table-col-special").remove(), h.document.write(f + v.prop("outerHTML")), h.document.close(), h.print(), h.close()
            }
            layui.event.call(this, s, "toolbar(" + p + ")", t.extend({event: c, config: o}, {}))
        }), h.on("mousemove", function (e) {
            var i = t(this), a = i.offset().left, l = e.clientX - a;
            i.data("unresize") || u.resizeStart || (u.allowResize = i.width() - l <= 10, c.css("cursor", u.allowResize ? "col-resize" : ""))
        }).on("mouseleave", function () {
            t(this);
            u.resizeStart || c.css("cursor", "")
        }).on("mousedown", function (e) {
            var i = t(this);
            if (u.allowResize) {
                var l = i.data("key");
                e.preventDefault(), u.resizeStart = !0, u.offset = [e.clientX, e.clientY], a.getCssRule(l, function (e) {
                    var t = e.style.width || i.outerWidth();
                    u.rule = e, u.ruleWidth = parseFloat(t), u.minWidth = i.data("minwidth") || o.cellMinWidth
                })
            }
        }), H.on("mousemove", function (t) {
            if (u.resizeStart) {
                if (t.preventDefault(), u.rule) {
                    var i = u.ruleWidth + t.clientX - u.offset[0];
                    i < u.minWidth && (i = u.minWidth), u.rule.style.width = i + "px", l.close(a.tipsIndex)
                }
                e = 1
            }
        }).on("mouseup", function (t) {
            u.resizeStart && (u = {}, c.css("cursor", ""), a.scrollPatch()), 2 === e && (e = null)
        }), h.on("click", function (i) {
            var l, n = t(this), o = n.find(L), r = o.attr("lay-sort");
            return o[0] && 1 !== e ? (l = "asc" === r ? "desc" : "desc" === r ? null : "asc", void a.sort(n, l, null, !0)) : e = 2
        }).find(L + " .layui-edge ").on("click", function (e) {
            var i = t(this), l = i.index(), n = i.parents("th").eq(0).data("field");
            layui.stope(e), 0 === l ? a.sort(n, "asc", null, !0) : a.sort(n, "desc", null, !0)
        });
        var v = function (e) {
            var l = t(this), n = l.parents("tr").eq(0).data("index"), o = a.layBody.find('tr[data-index="' + n + '"]'),
                r = d.cache[a.key][n];
            return t.extend({
                tr: o, data: d.clearCacheKey(r), del: function () {
                    d.cache[a.key][n] = [], o.remove(), a.scrollPatch()
                }, update: function (e) {
                    e = e || {}, layui.each(e, function (e, l) {
                        if (e in r) {
                            var n, d = o.children('td[data-field="' + e + '"]');
                            r[e] = l, a.eachCols(function (t, i) {
                                i.field == e && i.templet && (n = i.templet)
                            }), d.children(f).html(function () {
                                return n ? function () {
                                    return "function" == typeof n ? n(r) : i(t(n).html() || l).render(r)
                                }() : l
                            }()), d.data("content", l)
                        }
                    })
                }
            }, e)
        };
        a.elem.on("click", 'input[name="layTableCheckbox"]+', function () {
            var e = t(this).prev(), i = a.layBody.find('input[name="layTableCheckbox"]'),
                l = e.parents("tr").eq(0).data("index"), n = e[0].checked,
                o = "layTableAllChoose" === e.attr("lay-filter");
            o ? (i.each(function (e, t) {
                t.checked = n, a.setCheckData(e, n)
            }), a.syncCheckAll(), a.renderForm("checkbox")) : (a.setCheckData(l, n), a.syncCheckAll()), layui.event.call(this, s, "checkbox(" + p + ")", v.call(this, {
                checked: n,
                type: o ? "all" : "one"
            }))
        }), a.elem.on("click", 'input[lay-type="layTableRadio"]+', function () {
            var e = t(this).prev(), i = e[0].checked, l = d.cache[a.key], n = e.parents("tr").eq(0).data("index");
            layui.each(l, function (e, t) {
                n === e ? t.LAY_CHECKED = !0 : delete t.LAY_CHECKED
            }), a.setThisRowChecked(n), layui.event.call(this, s, "radio(" + p + ")", v.call(this, {checked: i}))
        }), a.layBody.on("mouseenter", "tr", function () {
            var e = t(this), i = e.index();
            a.layBody.find("tr:eq(" + i + ")").addClass(N)
        }).on("mouseleave", "tr", function () {
            var e = t(this), i = e.index();
            a.layBody.find("tr:eq(" + i + ")").removeClass(N)
        }).on("click", "tr", function () {
            m.call(this, "row")
        }).on("dblclick", "tr", function () {
            m.call(this, "rowDouble")
        });
        var m = function (e) {
            var i = t(this);
            layui.event.call(this, s, e + "(" + p + ")", v.call(i.children("td")[0]))
        };
        a.layBody.on("change", "." + S, function () {
            var e = t(this), i = this.value, l = e.parent().data("field"), n = e.parents("tr").eq(0).data("index"),
                o = d.cache[a.key][n];
            o[l] = i, layui.event.call(this, s, "edit(" + p + ")", v.call(this, {value: i, field: l}))
        }).on("blur", "." + S, function () {
            var e, l = t(this), n = l.parent().data("field"), o = l.parents("tr").eq(0).data("index"),
                r = d.cache[a.key][o];
            a.eachCols(function (t, i) {
                i.field == n && i.templet && (e = i.templet)
            }), l.siblings(f).html(function (a) {
                return e ? function () {
                    return "function" == typeof e ? e(r) : i(t(e).html() || this.value).render(r)
                }() : a
            }(this.value)), l.parent().data("content", this.value), l.remove()
        }), a.layBody.on("click", "td", function () {
            var e = t(this), i = (e.data("field"), e.data("edit")), a = e.children(f);
            if (!e.data("off") && i) {
                var l = t('<input class="layui-input ' + S + '">');
                return l[0].value = e.data("content") || a.text(), e.find("." + S)[0] || e.append(l), void l.focus()
            }
        }).on("mouseenter", "td", function () {
            x.call(this)
        }).on("mouseleave", "td", function () {
            x.call(this, "hide")
        });
        var g = "layui-table-grid-down", x = function (e) {
            var i = t(this), a = i.children(f);
            if (e) i.find(".layui-table-grid-down").remove(); else if (a.prop("scrollWidth") > a.outerWidth()) {
                if (a.find("." + g)[0]) return;
                i.append('<div class="' + g + '"><i class="layui-icon layui-icon-down"></i></div>')
            }
        };
        a.layBody.on("click", "." + g, function () {
            var e = t(this), i = e.parent(), n = i.children(f);
            a.tipsIndex = l.tips(['<div class="layui-table-tips-main" style="margin-top: -' + (n.height() + 16) + "px;" + function () {
                return "sm" === o.size ? "padding: 4px 15px; font-size: 12px;" : "lg" === o.size ? "padding: 14px 15px;" : ""
            }() + '">', n.html(), "</div>", '<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'].join(""), n[0], {
                tips: [3, ""],
                time: -1,
                anim: -1,
                maxWidth: r.ios || r.android ? 300 : a.elem.width() / 2,
                isOutAnim: !1,
                skin: "layui-table-tips",
                success: function (e, t) {
                    e.find(".layui-table-tips-c").on("click", function () {
                        l.close(t)
                    })
                }
            })
        }), a.layBody.on("click", "*[lay-event]", function () {
            var e = t(this), i = e.parents("tr").eq(0).data("index");
            layui.event.call(this, s, "tool(" + p + ")", v.call(this, {event: e.attr("lay-event")})), a.setThisRowChecked(i)
        }), a.layMain.on("scroll", function () {
            var e = t(this), i = e.scrollLeft(), n = e.scrollTop();
            a.layHeader.scrollLeft(i), a.layTotal.scrollLeft(i), a.layFixed.find(b).scrollTop(n), l.close(a.tipsIndex)
        }), H.on("click", function () {
            H.trigger("table.remove.tool.panel")
        }), H.on("table.remove.tool.panel", function () {
            t(".layui-table-tool-panel").remove()
        }), R.on("resize", function () {
            a.fullSize(), a.scrollPatch(), a.setColsWidth()
        })
    }, d.init = function (e, i) {
        i = i || {};
        var a = this, l = t(e ? 'table[lay-filter="' + e + '"]' : u + "[lay-data]"),
            n = "Table element property lay-data configuration item has a syntax error: ";
        return l.each(function () {
            var a = t(this), l = a.attr("lay-data");
            try {
                l = new Function("return " + l)()
            } catch (r) {
                o.error(n + l)
            }
            var c = [], s = t.extend({
                elem: this,
                cols: [],
                data: [],
                skin: a.attr("lay-skin"),
                size: a.attr("lay-size"),
                even: "string" == typeof a.attr("lay-even")
            }, d.config, i, l);
            e && a.hide(), a.find("thead>tr").each(function (e) {
                s.cols[e] = [], t(this).children().each(function (i) {
                    var a = t(this), l = a.attr("lay-data");
                    try {
                        l = new Function("return " + l)()
                    } catch (r) {
                        return o.error(n + l)
                    }
                    var d = t.extend({
                        title: a.text(),
                        colspan: a.attr("colspan") || 0,
                        rowspan: a.attr("rowspan") || 0
                    }, l);
                    d.colspan < 2 && c.push(d), s.cols[e].push(d)
                })
            }), a.find("tbody>tr").each(function (e) {
                var i = t(this), a = {};
                i.children("td").each(function (e, i) {
                    var l = t(this), n = l.data("field");
                    if (n) return a[n] = l.html()
                }), layui.each(c, function (e, t) {
                    var l = i.children("td").eq(e);
                    a[t.field] = l.html()
                }), s.data[e] = a
            }), d.render(s)
        }), a
    }, c.config = {}, d.eachCols = function (e, i, a) {
        var l = c.config[e] || {}, n = [], o = 0;
        a = t.extend(!0, [], a || l.cols), layui.each(a, function (e, t) {
            layui.each(t, function (t, i) {
                if (i.colGroup) {
                    var l = 0;
                    o++, i.CHILD_COLS = [], layui.each(a[e + 1], function (e, t) {
                        t.PARENT_COL_INDEX || l > 1 && l == i.colspan || (t.PARENT_COL_INDEX = o, i.CHILD_COLS.push(t), l += parseInt(t.colspan > 1 ? t.colspan : 1))
                    })
                }
                i.PARENT_COL_INDEX || n.push(i)
            })
        });
        var r = function (e) {
            layui.each(e || n, function (e, t) {
                return t.CHILD_COLS ? r(t.CHILD_COLS) : void("function" == typeof i && i(e, t))
            })
        };
        r()
    }, d.checkStatus = function (e) {
        var t = 0, i = 0, a = [], l = d.cache[e] || [];
        return layui.each(l, function (e, l) {
            return l.constructor === Array ? void i++ : void(l[d.config.checkName] && (t++, a.push(d.clearCacheKey(l))))
        }), {data: a, isAll: !!l.length && t === l.length - i}
    }, d.exportFile = function (e, t, i) {
        t = t || d.clearCacheKey(d.cache[e]), i = i || "csv";
        var a = c.config[e] || {}, l = {csv: "text/csv", xls: "application/vnd.ms-excel"}[i],
            n = document.createElement("a");
        return r.ie ? o.error("IE_NOT_SUPPORT_EXPORTS") : (n.href = "data:" + l + ";charset=utf-8,\ufeff" + encodeURIComponent(function () {
            var i = [], a = [];
            return layui.each(t, function (t, l) {
                var n = [];
                "object" == typeof e ? (layui.each(e, function (e, a) {
                    0 == t && i.push(a || "")
                }), layui.each(d.clearCacheKey(l), function (e, t) {
                    n.push(t)
                })) : d.eachCols(e, function (e, a) {
                    a.field && "normal" == a.type && !a.hide && (0 == t && i.push(a.title || ""), n.push(l[a.field]))
                }), a.push(n.join(","))
            }), i.join(",") + "\r\n" + a.join("\r\n")
        }()), n.download = (a.title || "table_" + (a.index || "")) + "." + i, document.body.appendChild(n), n.click(), void document.body.removeChild(n))
    }, d.reload = function (e, i) {
        var a = c.config[e];
        return i = i || {}, a ? (i.data && i.data.constructor === Array && delete a.data, d.render(t.extend(!0, {}, a, i))) : o.error("The ID option was not found in the table instance")
    }, d.render = function (e) {
        var t = new j(e);
        return c.call(t)
    }, d.clearCacheKey = function (e) {
        return e = t.extend({}, e), delete e[d.config.checkName], delete e[d.config.indexName], e
    }, d.init(), e(s, d)
});
layui.define("jquery", function (e) {
    "use strict";
    var i = layui.$, n = (layui.hint(), layui.device(), {
            config: {}, set: function (e) {
                var n = this;
                return n.config = i.extend({}, n.config, e), n
            }, on: function (e, i) {
                return layui.onevent.call(this, t, e, i)
            }
        }), t = "carousel", a = "layui-this", l = ">*[carousel-item]>*", o = "layui-carousel-left",
        r = "layui-carousel-right", d = "layui-carousel-prev", s = "layui-carousel-next", u = "layui-carousel-arrow",
        c = "layui-carousel-ind", m = function (e) {
            var t = this;
            t.config = i.extend({}, t.config, n.config, e), t.render()
        };
    m.prototype.config = {
        width: "600px",
        height: "280px",
        full: !1,
        arrow: "hover",
        indicator: "inside",
        autoplay: !0,
        interval: 3e3,
        anim: "",
        trigger: "click",
        index: 0
    }, m.prototype.render = function () {
        var e = this, n = e.config;
        n.elem = i(n.elem), n.elem[0] && (e.elemItem = n.elem.find(l), n.index < 0 && (n.index = 0), n.index >= e.elemItem.length && (n.index = e.elemItem.length - 1), n.interval < 800 && (n.interval = 800), n.full ? n.elem.css({
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 9999
        }) : n.elem.css({
            width: n.width,
            height: n.height
        }), n.elem.attr("lay-anim", n.anim), e.elemItem.eq(n.index).addClass(a), e.elemItem.length <= 1 || (e.indicator(), e.arrow(), e.autoplay(), e.events()))
    }, m.prototype.reload = function (e) {
        var n = this;
        clearInterval(n.timer), n.config = i.extend({}, n.config, e), n.render()
    }, m.prototype.prevIndex = function () {
        var e = this, i = e.config, n = i.index - 1;
        return n < 0 && (n = e.elemItem.length - 1), n
    }, m.prototype.nextIndex = function () {
        var e = this, i = e.config, n = i.index + 1;
        return n >= e.elemItem.length && (n = 0), n
    }, m.prototype.addIndex = function (e) {
        var i = this, n = i.config;
        e = e || 1, n.index = n.index + e, n.index >= i.elemItem.length && (n.index = 0)
    }, m.prototype.subIndex = function (e) {
        var i = this, n = i.config;
        e = e || 1, n.index = n.index - e, n.index < 0 && (n.index = i.elemItem.length - 1)
    }, m.prototype.autoplay = function () {
        var e = this, i = e.config;
        i.autoplay && (e.timer = setInterval(function () {
            e.slide()
        }, i.interval))
    }, m.prototype.arrow = function () {
        var e = this, n = e.config,
            t = i(['<button class="layui-icon ' + u + '" lay-type="sub">' + ("updown" === n.anim ? "&#xe619;" : "&#xe603;") + "</button>", '<button class="layui-icon ' + u + '" lay-type="add">' + ("updown" === n.anim ? "&#xe61a;" : "&#xe602;") + "</button>"].join(""));
        n.elem.attr("lay-arrow", n.arrow), n.elem.find("." + u)[0] && n.elem.find("." + u).remove(), n.elem.append(t), t.on("click", function () {
            var n = i(this), t = n.attr("lay-type");
            e.slide(t)
        })
    }, m.prototype.indicator = function () {
        var e = this, n = e.config, t = e.elemInd = i(['<div class="' + c + '"><ul>', function () {
            var i = [];
            return layui.each(e.elemItem, function (e) {
                i.push("<li" + (n.index === e ? ' class="layui-this"' : "") + "></li>")
            }), i.join("")
        }(), "</ul></div>"].join(""));
        n.elem.attr("lay-indicator", n.indicator), n.elem.find("." + c)[0] && n.elem.find("." + c).remove(), n.elem.append(t), "updown" === n.anim && t.css("margin-top", -(t.height() / 2)), t.find("li").on("hover" === n.trigger ? "mouseover" : n.trigger, function () {
            var t = i(this), a = t.index();
            a > n.index ? e.slide("add", a - n.index) : a < n.index && e.slide("sub", n.index - a)
        })
    }, m.prototype.slide = function (e, i) {
        var n = this, l = n.elemItem, u = n.config, c = u.index, m = u.elem.attr("lay-filter");
        n.haveSlide || ("sub" === e ? (n.subIndex(i), l.eq(u.index).addClass(d), setTimeout(function () {
            l.eq(c).addClass(r), l.eq(u.index).addClass(r)
        }, 50)) : (n.addIndex(i), l.eq(u.index).addClass(s), setTimeout(function () {
            l.eq(c).addClass(o), l.eq(u.index).addClass(o)
        }, 50)), setTimeout(function () {
            l.removeClass(a + " " + d + " " + s + " " + o + " " + r), l.eq(u.index).addClass(a), n.haveSlide = !1
        }, 300), n.elemInd.find("li").eq(u.index).addClass(a).siblings().removeClass(a), n.haveSlide = !0, layui.event.call(this, t, "change(" + m + ")", {
            index: u.index,
            prevIndex: c,
            item: l.eq(u.index)
        }))
    }, m.prototype.events = function () {
        var e = this, i = e.config;
        i.elem.data("haveEvents") || (i.elem.on("mouseenter", function () {
            clearInterval(e.timer)
        }).on("mouseleave", function () {
            e.autoplay()
        }), i.elem.data("haveEvents", !0))
    }, n.render = function (e) {
        var i = new m(e);
        return i
    }, e(t, n)
});
layui.define("jquery", function (e) {
    "use strict";
    var a = layui.jquery, i = {
            config: {}, index: layui.rate ? layui.rate.index + 1e4 : 0, set: function (e) {
                var i = this;
                return i.config = a.extend({}, i.config, e), i
            }, on: function (e, a) {
                return layui.onevent.call(this, n, e, a)
            }
        }, l = function () {
            var e = this, a = e.config;
            return {
                setvalue: function (a) {
                    e.setvalue.call(e, a)
                }, config: a
            }
        }, n = "rate", t = "layui-rate", o = "layui-icon-rate", s = "layui-icon-rate-solid", u = "layui-icon-rate-half",
        r = "layui-icon-rate-solid layui-icon-rate-half", c = "layui-icon-rate-solid layui-icon-rate",
        f = "layui-icon-rate layui-icon-rate-half", v = function (e) {
            var l = this;
            l.index = ++i.index, l.config = a.extend({}, l.config, i.config, e), l.render()
        };
    v.prototype.config = {
        length: 5,
        text: !1,
        readonly: !1,
        half: !1,
        value: 0,
        theme: ""
    }, v.prototype.render = function () {
        var e = this, i = e.config, l = i.theme ? 'style="color: ' + i.theme + ';"' : "";
        i.elem = a(i.elem), parseInt(i.value) !== i.value && (i.half || (i.value = Math.ceil(i.value) - i.value < .5 ? Math.ceil(i.value) : Math.floor(i.value)));
        for (var n = '<ul class="layui-rate" ' + (i.readonly ? "readonly" : "") + ">", u = 1; u <= i.length; u++) {
            var r = '<li class="layui-inline"><i class="layui-icon ' + (u > Math.floor(i.value) ? o : s) + '" ' + l + "></i></li>";
            i.half && parseInt(i.value) !== i.value && u == Math.ceil(i.value) ? n = n + '<li><i class="layui-icon layui-icon-rate-half" ' + l + "></i></li>" : n += r
        }
        n += "</ul>" + (i.text ? '<span class="layui-inline">' + i.value + "星" : "") + "</span>";
        var c = i.elem, f = c.next("." + t);
        f[0] && f.remove(), e.elemTemp = a(n), i.span = e.elemTemp.next("span"), i.setText && i.setText(i.value), c.html(e.elemTemp), c.addClass("layui-inline"), i.readonly || e.action()
    }, v.prototype.setvalue = function (e) {
        var a = this, i = a.config;
        i.value = e, a.render()
    }, v.prototype.action = function () {
        var e = this, i = e.config, l = e.elemTemp, n = l.find("i").width();
        l.children("li").each(function (e) {
            var t = e + 1, v = a(this);
            v.on("click", function (e) {
                if (i.value = t, i.half) {
                    var o = e.pageX - a(this).offset().left;
                    o <= n / 2 && (i.value = i.value - .5)
                }
                i.text && l.next("span").text(i.value + "星"), i.choose && i.choose(i.value), i.setText && i.setText(i.value)
            }), v.on("mousemove", function (e) {
                if (l.find("i").each(function () {
                    a(this).addClass(o).removeClass(r)
                }), l.find("i:lt(" + t + ")").each(function () {
                    a(this).addClass(s).removeClass(f)
                }), i.half) {
                    var c = e.pageX - a(this).offset().left;
                    c <= n / 2 && v.children("i").addClass(u).removeClass(s)
                }
            }), v.on("mouseleave", function () {
                l.find("i").each(function () {
                    a(this).addClass(o).removeClass(r)
                }), l.find("i:lt(" + Math.floor(i.value) + ")").each(function () {
                    a(this).addClass(s).removeClass(f)
                }), i.half && parseInt(i.value) !== i.value && l.children("li:eq(" + Math.floor(i.value) + ")").children("i").addClass(u).removeClass(c)
            })
        })
    }, v.prototype.events = function () {
        var e = this;
        e.config
    }, i.render = function (e) {
        var a = new v(e);
        return l.call(a)
    }, e(n, i)
});
layui.define("jquery", function (t) {
    "use strict";
    var e = layui.$, i = {
        fixbar: function (t) {
            var i, a, n = "layui-fixbar", r = "layui-fixbar-top", o = e(document), l = e("body");
            t = e.extend({showHeight: 200}, t), t.bar1 = t.bar1 === !0 ? "&#xe606;" : t.bar1, t.bar2 = t.bar2 === !0 ? "&#xe607;" : t.bar2, t.bgcolor = t.bgcolor ? "background-color:" + t.bgcolor : "";
            var c = [t.bar1, t.bar2, "&#xe604;"],
                g = e(['<ul class="' + n + '">', t.bar1 ? '<li class="layui-icon" lay-type="bar1" style="' + t.bgcolor + '">' + c[0] + "</li>" : "", t.bar2 ? '<li class="layui-icon" lay-type="bar2" style="' + t.bgcolor + '">' + c[1] + "</li>" : "", '<li class="layui-icon ' + r + '" lay-type="top" style="' + t.bgcolor + '">' + c[2] + "</li>", "</ul>"].join("")),
                s = g.find("." + r), u = function () {
                    var e = o.scrollTop();
                    e >= t.showHeight ? i || (s.show(), i = 1) : i && (s.hide(), i = 0)
                };
            e("." + n)[0] || ("object" == typeof t.css && g.css(t.css), l.append(g), u(), g.find("li").on("click", function () {
                var i = e(this), a = i.attr("lay-type");
                "top" === a && e("html,body").animate({scrollTop: 0}, 200), t.click && t.click.call(this, a)
            }), o.on("scroll", function () {
                clearTimeout(a), a = setTimeout(function () {
                    u()
                }, 100)
            }))
        }, countdown: function (t, e, i) {
            var a = this, n = "function" == typeof e, r = new Date(t).getTime(),
                o = new Date(!e || n ? (new Date).getTime() : e).getTime(), l = r - o,
                c = [Math.floor(l / 864e5), Math.floor(l / 36e5) % 24, Math.floor(l / 6e4) % 60, Math.floor(l / 1e3) % 60];
            n && (i = e);
            var g = setTimeout(function () {
                a.countdown(t, o + 1e3, i)
            }, 1e3);
            return i && i(l > 0 ? c : [0, 0, 0, 0], e, g), l <= 0 && clearTimeout(g), g
        }, timeAgo: function (t, e) {
            var i = this, a = [[], []], n = (new Date).getTime() - new Date(t).getTime();
            return n > 6912e5 ? (n = new Date(t), a[0][0] = i.digit(n.getFullYear(), 4), a[0][1] = i.digit(n.getMonth() + 1), a[0][2] = i.digit(n.getDate()), e || (a[1][0] = i.digit(n.getHours()), a[1][1] = i.digit(n.getMinutes()), a[1][2] = i.digit(n.getSeconds())), a[0].join("-") + " " + a[1].join(":")) : n >= 864e5 ? (n / 1e3 / 60 / 60 / 24 | 0) + "天前" : n >= 36e5 ? (n / 1e3 / 60 / 60 | 0) + "小时前" : n >= 12e4 ? (n / 1e3 / 60 | 0) + "分钟前" : n < 0 ? "未来" : "刚刚"
        }, digit: function (t, e) {
            var i = "";
            t = String(t), e = e || 2;
            for (var a = t.length; a < e; a++) i += "0";
            return t < Math.pow(10, e) ? i + (0 | t) : t
        }, toDateString: function (t, e) {
            var i = this, a = new Date(t || new Date),
                n = [i.digit(a.getFullYear(), 4), i.digit(a.getMonth() + 1), i.digit(a.getDate())],
                r = [i.digit(a.getHours()), i.digit(a.getMinutes()), i.digit(a.getSeconds())];
            return e = e || "yyyy-MM-dd HH:mm:ss", e.replace(/yyyy/g, n[0]).replace(/MM/g, n[1]).replace(/dd/g, n[2]).replace(/HH/g, r[0]).replace(/mm/g, r[1]).replace(/ss/g, r[2])
        }, escape: function (t) {
            return String(t || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
        }
    };
    !function (t, e, i) {
        "$:nomunge";

        function a() {
            n = e[l](function () {
                r.each(function () {
                    var e = t(this), i = e.width(), a = e.height(), n = t.data(this, g);
                    (i !== n.w || a !== n.h) && e.trigger(c, [n.w = i, n.h = a])
                }), a()
            }, o[s])
        }

        var n, r = t([]), o = t.resize = t.extend(t.resize, {}), l = "setTimeout", c = "resize",
            g = c + "-special-event", s = "delay", u = "throttleWindow";
        o[s] = 250, o[u] = !0, t.event.special[c] = {
            setup: function () {
                if (!o[u] && this[l]) return !1;
                var e = t(this);
                r = r.add(e), t.data(this, g, {w: e.width(), h: e.height()}), 1 === r.length && a()
            }, teardown: function () {
                if (!o[u] && this[l]) return !1;
                var e = t(this);
                r = r.not(e), e.removeData(g), r.length || clearTimeout(n)
            }, add: function (e) {
                function a(e, a, r) {
                    var o = t(this), l = t.data(this, g) || {};
                    l.w = a !== i ? a : o.width(), l.h = r !== i ? r : o.height(), n.apply(this, arguments)
                }

                if (!o[u] && this[l]) return !1;
                var n;
                return t.isFunction(e) ? (n = e, a) : (n = e.handler, void(e.handler = a))
            }
        }
    }(e, window), t("util", i)
});
layui.define("jquery", function (e) {
    "use strict";
    var l = layui.$, o = function (e) {
    }, t = '<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>';
    o.prototype.load = function (e) {
        var o, i, n, r, a = this, c = 0;
        e = e || {};
        var f = l(e.elem);
        if (f[0]) {
            var m = l(e.scrollElem || document), u = e.mb || 50, s = !("isAuto" in e) || e.isAuto, v = e.end || "没有更多了",
                y = e.scrollElem && e.scrollElem !== document, d = "<cite>加载更多</cite>",
                h = l('<div class="layui-flow-more"><a href="javascript:;">' + d + "</a></div>");
            f.find(".layui-flow-more")[0] || f.append(h);
            var p = function (e, t) {
                e = l(e), h.before(e), t = 0 == t || null, t ? h.html(v) : h.find("a").html(d), i = t, o = null, n && n()
            }, g = function () {
                o = !0, h.find("a").html(t), "function" == typeof e.done && e.done(++c, p)
            };
            if (g(), h.find("a").on("click", function () {
                l(this);
                i || o || g()
            }), e.isLazyimg) var n = a.lazyimg({elem: e.elem + " img", scrollElem: e.scrollElem});
            return s ? (m.on("scroll", function () {
                var e = l(this), t = e.scrollTop();
                r && clearTimeout(r), i || (r = setTimeout(function () {
                    var i = y ? e.height() : l(window).height(),
                        n = y ? e.prop("scrollHeight") : document.documentElement.scrollHeight;
                    n - t - i <= u && (o || g())
                }, 100))
            }), a) : a
        }
    }, o.prototype.lazyimg = function (e) {
        var o, t = this, i = 0;
        e = e || {};
        var n = l(e.scrollElem || document), r = e.elem || "img", a = e.scrollElem && e.scrollElem !== document,
            c = function (e, l) {
                var o = n.scrollTop(), r = o + l, c = a ? function () {
                    return e.offset().top - n.offset().top + o
                }() : e.offset().top;
                if (c >= o && c <= r && !e.attr("src")) {
                    var m = e.attr("lay-src");
                    layui.img(m, function () {
                        var l = t.lazyimg.elem.eq(i);
                        e.attr("src", m).removeAttr("lay-src"), l[0] && f(l), i++
                    })
                }
            }, f = function (e, o) {
                var f = a ? (o || n).height() : l(window).height(), m = n.scrollTop(), u = m + f;
                if (t.lazyimg.elem = l(r), e) c(e, f); else for (var s = 0; s < t.lazyimg.elem.length; s++) {
                    var v = t.lazyimg.elem.eq(s), y = a ? function () {
                        return v.offset().top - n.offset().top + m
                    }() : v.offset().top;
                    if (c(v, f), i = s, y > u) break
                }
            };
        if (f(), !o) {
            var m;
            n.on("scroll", function () {
                var e = l(this);
                m && clearTimeout(m), m = setTimeout(function () {
                    f(null, e)
                }, 50)
            }), o = !0
        }
        return f
    }, e("flow", new o)
});
layui.define(["layer", "form"], function (t) {
    "use strict";
    var e = layui.$, i = layui.layer, a = layui.form, l = (layui.hint(), layui.device()), n = "layedit",
        o = "layui-show", r = "layui-disabled", c = function () {
            var t = this;
            t.index = 0, t.config = {
                tool: ["strong", "italic", "underline", "del", "|", "left", "center", "right", "|", "link", "unlink", "face", "image"],
                hideTool: [],
                height: 280
            }
        };
    c.prototype.set = function (t) {
        var i = this;
        return e.extend(!0, i.config, t), i
    }, c.prototype.on = function (t, e) {
        return layui.onevent(n, t, e)
    }, c.prototype.build = function (t, i) {
        i = i || {};
        var a = this, n = a.config, r = "layui-layedit", c = e("string" == typeof t ? "#" + t : t),
            u = "LAY_layedit_" + ++a.index, d = c.next("." + r), y = e.extend({}, n, i), f = function () {
                var t = [], e = {};
                return layui.each(y.hideTool, function (t, i) {
                    e[i] = !0
                }), layui.each(y.tool, function (i, a) {
                    C[a] && !e[a] && t.push(C[a])
                }), t.join("")
            }(),
            m = e(['<div class="' + r + '">', '<div class="layui-unselect layui-layedit-tool">' + f + "</div>", '<div class="layui-layedit-iframe">', '<iframe id="' + u + '" name="' + u + '" textarea="' + t + '" frameborder="0"></iframe>', "</div>", "</div>"].join(""));
        return l.ie && l.ie < 8 ? c.removeClass("layui-hide").addClass(o) : (d[0] && d.remove(), s.call(a, m, c[0], y), c.addClass("layui-hide").after(m), a.index)
    }, c.prototype.getContent = function (t) {
        var e = u(t);
        if (e[0]) return d(e[0].document.body.innerHTML)
    }, c.prototype.getText = function (t) {
        var i = u(t);
        if (i[0]) return e(i[0].document.body).text()
    }, c.prototype.setContent = function (t, i, a) {
        var l = u(t);
        l[0] && (a ? e(l[0].document.body).append(i) : e(l[0].document.body).html(i), layedit.sync(t))
    }, c.prototype.sync = function (t) {
        var i = u(t);
        if (i[0]) {
            var a = e("#" + i[1].attr("textarea"));
            a.val(d(i[0].document.body.innerHTML))
        }
    }, c.prototype.getSelection = function (t) {
        var e = u(t);
        if (e[0]) {
            var i = m(e[0].document);
            return document.selection ? i.text : i.toString()
        }
    };
    var s = function (t, i, a) {
        var l = this, n = t.find("iframe");
        n.css({height: a.height}).on("load", function () {
            var o = n.contents(), r = n.prop("contentWindow"), c = o.find("head"),
                s = e(["<style>", "*{margin: 0; padding: 0;}", "body{padding: 10px; line-height: 20px; overflow-x: hidden; word-wrap: break-word; font: 14px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Tahoma,Arial,sans-serif; -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important;}", "a{color:#01AAED; text-decoration:none;}a:hover{color:#c00}", "p{margin-bottom: 10px;}", "img{display: inline-block; border: none; vertical-align: middle;}", "pre{margin: 10px 0; padding: 10px; line-height: 20px; border: 1px solid #ddd; border-left-width: 6px; background-color: #F2F2F2; color: #333; font-family: Courier New; font-size: 12px;}", "</style>"].join("")),
                u = o.find("body");
            c.append(s), u.attr("contenteditable", "true").css({"min-height": a.height}).html(i.value || ""), y.apply(l, [r, n, i, a]), g.call(l, r, t, a)
        })
    }, u = function (t) {
        var i = e("#LAY_layedit_" + t), a = i.prop("contentWindow");
        return [a, i]
    }, d = function (t) {
        return 8 == l.ie && (t = t.replace(/<.+>/g, function (t) {
            return t.toLowerCase()
        })), t
    }, y = function (t, a, n, o) {
        var r = t.document, c = e(r.body);
        c.on("keydown", function (t) {
            var e = t.keyCode;
            if (13 === e) {
                var a = m(r), l = p(a), n = l.parentNode;
                if ("pre" === n.tagName.toLowerCase()) {
                    if (t.shiftKey) return;
                    return i.msg("请暂时用shift+enter"), !1
                }
                r.execCommand("formatBlock", !1, "<p>")
            }
        }), e(n).parents("form").on("submit", function () {
            var t = c.html();
            8 == l.ie && (t = t.replace(/<.+>/g, function (t) {
                return t.toLowerCase()
            })), n.value = t
        }), c.on("paste", function (e) {
            r.execCommand("formatBlock", !1, "<p>"), setTimeout(function () {
                f.call(t, c), n.value = c.html()
            }, 100)
        })
    }, f = function (t) {
        var i = this;
        i.document;
        t.find("*[style]").each(function () {
            var t = this.style.textAlign;
            this.removeAttribute("style"), e(this).css({"text-align": t || ""})
        }), t.find("table").addClass("layui-table"), t.find("script,link").remove()
    }, m = function (t) {
        return t.selection ? t.selection.createRange() : t.getSelection().getRangeAt(0)
    }, p = function (t) {
        return t.endContainer || t.parentElement().childNodes[0]
    }, v = function (t, i, a) {
        var l = this.document, n = document.createElement(t);
        for (var o in i) n.setAttribute(o, i[o]);
        if (n.removeAttribute("text"), l.selection) {
            var r = a.text || i.text;
            if ("a" === t && !r) return;
            r && (n.innerHTML = r), a.pasteHTML(e(n).prop("outerHTML")), a.select()
        } else {
            var r = a.toString() || i.text;
            if ("a" === t && !r) return;
            r && (n.innerHTML = r), a.deleteContents(), a.insertNode(n)
        }
    }, h = function (t, i) {
        var a = this.document, l = "layedit-tool-active", n = p(m(a)), o = function (e) {
            return t.find(".layedit-tool-" + e)
        };
        i && i[i.hasClass(l) ? "removeClass" : "addClass"](l), t.find(">i").removeClass(l), o("unlink").addClass(r), e(n).parents().each(function () {
            var t = this.tagName.toLowerCase(), e = this.style.textAlign;
            "b" !== t && "strong" !== t || o("b").addClass(l), "i" !== t && "em" !== t || o("i").addClass(l), "u" === t && o("u").addClass(l), "strike" === t && o("d").addClass(l), "p" === t && ("center" === e ? o("center").addClass(l) : "right" === e ? o("right").addClass(l) : o("left").addClass(l)), "a" === t && (o("link").addClass(l), o("unlink").removeClass(r))
        })
    }, g = function (t, a, l) {
        var n = t.document, o = e(n.body), c = {
            link: function (i) {
                var a = p(i), l = e(a).parent();
                b.call(o, {href: l.attr("href"), target: l.attr("target")}, function (e) {
                    var a = l[0];
                    "A" === a.tagName ? a.href = e.url : v.call(t, "a", {target: e.target, href: e.url, text: e.url}, i)
                })
            }, unlink: function (t) {
                n.execCommand("unlink")
            }, face: function (e) {
                x.call(this, function (i) {
                    v.call(t, "img", {src: i.src, alt: i.alt}, e)
                })
            }, image: function (a) {
                var n = this;
                layui.use("upload", function (o) {
                    var r = l.uploadImage || {};
                    o.render({
                        url: r.url, method: r.type, elem: e(n).find("input")[0], done: function (e) {
                            0 == e.code ? (e.data = e.data || {}, v.call(t, "img", {
                                src: e.data.src,
                                alt: e.data.title
                            }, a)) : i.msg(e.msg || "上传失败")
                        }
                    })
                })
            }, code: function (e) {
                k.call(o, function (i) {
                    v.call(t, "pre", {text: i.code, "lay-lang": i.lang}, e)
                })
            }, help: function () {
                i.open({
                    type: 2,
                    title: "帮助",
                    area: ["600px", "380px"],
                    shadeClose: !0,
                    shade: .1,
                    skin: "layui-layer-msg",
                    content: ["http://www.layui.com/about/layedit/help.html", "no"]
                })
            }
        }, s = a.find(".layui-layedit-tool"), u = function () {
            var i = e(this), a = i.attr("layedit-event"), l = i.attr("lay-command");
            if (!i.hasClass(r)) {
                o.focus();
                var u = m(n);
                u.commonAncestorContainer;
                l ? (n.execCommand(l), /justifyLeft|justifyCenter|justifyRight/.test(l) && n.execCommand("formatBlock", !1, "<p>"), setTimeout(function () {
                    o.focus()
                }, 10)) : c[a] && c[a].call(this, u), h.call(t, s, i)
            }
        }, d = /image/;
        s.find(">i").on("mousedown", function () {
            var t = e(this), i = t.attr("layedit-event");
            d.test(i) || u.call(this)
        }).on("click", function () {
            var t = e(this), i = t.attr("layedit-event");
            d.test(i) && u.call(this)
        }), o.on("click", function () {
            h.call(t, s), i.close(x.index)
        })
    }, b = function (t, e) {
        var l = this, n = i.open({
            type: 1,
            id: "LAY_layedit_link",
            area: "350px",
            shade: .05,
            shadeClose: !0,
            moveType: 1,
            title: "超链接",
            skin: "layui-layer-msg",
            content: ['<ul class="layui-form" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">URL</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input name="url" lay-verify="url" value="' + (t.href || "") + '" autofocus="true" autocomplete="off" class="layui-input">', "</div>", "</li>", '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">打开方式</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input type="radio" name="target" value="_self" class="layui-input" title="当前窗口"' + ("_self" !== t.target && t.target ? "" : "checked") + ">", '<input type="radio" name="target" value="_blank" class="layui-input" title="新窗口" ' + ("_blank" === t.target ? "checked" : "") + ">", "</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-link-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', "</li>", "</ul>"].join(""),
            success: function (t, n) {
                var o = "submit(layedit-link-yes)";
                a.render("radio"), t.find(".layui-btn-primary").on("click", function () {
                    i.close(n), l.focus()
                }), a.on(o, function (t) {
                    i.close(b.index), e && e(t.field)
                })
            }
        });
        b.index = n
    }, x = function (t) {
        var a = function () {
            var t = ["[微笑]", "[嘻嘻]", "[哈哈]", "[可爱]", "[可怜]", "[挖鼻]", "[吃惊]", "[害羞]", "[挤眼]", "[闭嘴]", "[鄙视]", "[爱你]", "[泪]", "[偷笑]", "[亲亲]", "[生病]", "[太开心]", "[白眼]", "[右哼哼]", "[左哼哼]", "[嘘]", "[衰]", "[委屈]", "[吐]", "[哈欠]", "[抱抱]", "[怒]", "[疑问]", "[馋嘴]", "[拜拜]", "[思考]", "[汗]", "[困]", "[睡]", "[钱]", "[失望]", "[酷]", "[色]", "[哼]", "[鼓掌]", "[晕]", "[悲伤]", "[抓狂]", "[黑线]", "[阴险]", "[怒骂]", "[互粉]", "[心]", "[伤心]", "[猪头]", "[熊猫]", "[兔子]", "[ok]", "[耶]", "[good]", "[NO]", "[赞]", "[来]", "[弱]", "[草泥马]", "[神马]", "[囧]", "[浮云]", "[给力]", "[围观]", "[威武]", "[奥特曼]", "[礼物]", "[钟]", "[话筒]", "[蜡烛]", "[蛋糕]"],
                e = {};
            return layui.each(t, function (t, i) {
                e[i] = layui.cache.dir + "images/face/" + t + ".gif"
            }), e
        }();
        return x.hide = x.hide || function (t) {
            "face" !== e(t.target).attr("layedit-event") && i.close(x.index)
        }, x.index = i.tips(function () {
            var t = [];
            return layui.each(a, function (e, i) {
                t.push('<li title="' + e + '"><img src="' + i + '" alt="' + e + '"></li>')
            }), '<ul class="layui-clear">' + t.join("") + "</ul>"
        }(), this, {
            tips: 1, time: 0, skin: "layui-box layui-util-face", maxWidth: 500, success: function (l, n) {
                l.css({marginTop: -4, marginLeft: -10}).find(".layui-clear>li").on("click", function () {
                    t && t({src: a[this.title], alt: this.title}), i.close(n)
                }), e(document).off("click", x.hide).on("click", x.hide)
            }
        })
    }, k = function (t) {
        var e = this, l = i.open({
            type: 1,
            id: "LAY_layedit_code",
            area: "550px",
            shade: .05,
            shadeClose: !0,
            moveType: 1,
            title: "插入代码",
            skin: "layui-layer-msg",
            content: ['<ul class="layui-form layui-form-pane" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label">请选择语言</label>', '<div class="layui-input-block">', '<select name="lang">', '<option value="JavaScript">JavaScript</option>', '<option value="HTML">HTML</option>', '<option value="CSS">CSS</option>', '<option value="Java">Java</option>', '<option value="PHP">PHP</option>', '<option value="C#">C#</option>', '<option value="Python">Python</option>', '<option value="Ruby">Ruby</option>', '<option value="Go">Go</option>', "</select>", "</div>", "</li>", '<li class="layui-form-item layui-form-text">', '<label class="layui-form-label">代码</label>', '<div class="layui-input-block">', '<textarea name="code" lay-verify="required" autofocus="true" class="layui-textarea" style="height: 200px;"></textarea>', "</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-code-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', "</li>", "</ul>"].join(""),
            success: function (l, n) {
                var o = "submit(layedit-code-yes)";
                a.render("select"), l.find(".layui-btn-primary").on("click", function () {
                    i.close(n), e.focus()
                }), a.on(o, function (e) {
                    i.close(k.index), t && t(e.field)
                })
            }
        });
        k.index = l
    }, C = {
        html: '<i class="layui-icon layedit-tool-html" title="HTML源代码" lay-command="html" layedit-event="html"">&#xe64b;</i><span class="layedit-tool-mid"></span>',
        strong: '<i class="layui-icon layedit-tool-b" title="加粗" lay-command="Bold" layedit-event="b"">&#xe62b;</i>',
        italic: '<i class="layui-icon layedit-tool-i" title="斜体" lay-command="italic" layedit-event="i"">&#xe644;</i>',
        underline: '<i class="layui-icon layedit-tool-u" title="下划线" lay-command="underline" layedit-event="u"">&#xe646;</i>',
        del: '<i class="layui-icon layedit-tool-d" title="删除线" lay-command="strikeThrough" layedit-event="d"">&#xe64f;</i>',
        "|": '<span class="layedit-tool-mid"></span>',
        left: '<i class="layui-icon layedit-tool-left" title="左对齐" lay-command="justifyLeft" layedit-event="left"">&#xe649;</i>',
        center: '<i class="layui-icon layedit-tool-center" title="居中对齐" lay-command="justifyCenter" layedit-event="center"">&#xe647;</i>',
        right: '<i class="layui-icon layedit-tool-right" title="右对齐" lay-command="justifyRight" layedit-event="right"">&#xe648;</i>',
        link: '<i class="layui-icon layedit-tool-link" title="插入链接" layedit-event="link"">&#xe64c;</i>',
        unlink: '<i class="layui-icon layedit-tool-unlink layui-disabled" title="清除链接" lay-command="unlink" layedit-event="unlink"">&#xe64d;</i>',
        face: '<i class="layui-icon layedit-tool-face" title="表情" layedit-event="face"">&#xe650;</i>',
        image: '<i class="layui-icon layedit-tool-image" title="图片" layedit-event="image">&#xe64a;<input type="file" name="file"></i>',
        code: '<i class="layui-icon layedit-tool-code" title="插入代码" layedit-event="code">&#xe64e;</i>',
        help: '<i class="layui-icon layedit-tool-help" title="帮助" layedit-event="help">&#xe607;</i>'
    }, w = new c;
    t(n, w)
});
layui.define("jquery", function (e) {
    "use strict";
    var a = layui.$, l = "http://www.layui.com/doc/modules/code.html";
    e("code", function (e) {
        var t = [];
        e = e || {}, e.elem = a(e.elem || ".layui-code"), e.about = !("about" in e) || e.about, e.elem.each(function () {
            t.push(this)
        }), layui.each(t.reverse(), function (t, i) {
            var c = a(i), o = c.html();
            (c.attr("lay-encode") || e.encode) && (o = o.replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")), c.html('<ol class="layui-code-ol"><li>' + o.replace(/[\r\t\n]+/g, "</li><li>") + "</li></ol>"), c.find(">.layui-code-h3")[0] || c.prepend('<h3 class="layui-code-h3">' + (c.attr("lay-title") || e.title || "code") + (e.about ? '<a href="' + l + '" target="_blank">layui.code</a>' : "") + "</h3>");
            var d = c.find(">.layui-code-ol");
            c.addClass("layui-box layui-code-view"), (c.attr("lay-skin") || e.skin) && c.addClass("layui-code-" + (c.attr("lay-skin") || e.skin)), (d.find("li").length / 100 | 0) > 0 && d.css("margin-left", (d.find("li").length / 100 | 0) + "px"), (c.attr("lay-height") || e.height) && d.css("max-height", c.attr("lay-height") || e.height)
        })
    })
}).addcss("modules/code.css", "skincodecss");