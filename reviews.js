let t, i, e = !1,
    s = !1;
const o = t => Z.t = t,
    n = {},
    l = t => "object" == (t = typeof t) || "function" === t,
    r = (t, i, ...e) => {
        let s = null,
            o = null,
            n = !1,
            r = !1;
        const h = [],
            d = i => {
                for (let e = 0; e < i.length; e++) s = i[e], Array.isArray(s) ? d(s) : null != s && "boolean" != typeof s && ((n = "function" != typeof t && !l(s)) && (s += ""), n && r ? h[h.length - 1].i += s : h.push(n ? a(null, s) : s), r = n)
            };
        if (d(e), i) {
            i.key && (o = i.key);
            {
                const t = i.className || i.class;
                t && (i.class = "object" != typeof t ? t : Object.keys(t).filter((i => t[i])).join(" "))
            }
        }
        if ("function" == typeof t) return t(null === i ? {} : i, h, c);
        const p = a(t, null);
        return p.o = i, h.length > 0 && (p.l = h), p.p = o, p
    },
    a = (t, i) => ({
        u: 0,
        g: t,
        i: i,
        v: null,
        l: null,
        o: null,
        p: null
    }),
    h = {},
    c = {
        forEach: (t, i) => t.map(d).forEach(i),
        map: (t, i) => t.map(d).map(i).map(p)
    },
    d = t => ({
        vattrs: t.o,
        vchildren: t.l,
        vkey: t.p,
        vname: t.k,
        vtag: t.g,
        vtext: t.i
    }),
    p = t => {
        if ("function" == typeof t.vtag) {
            const i = Object.assign({}, t.vattrs);
            return t.vkey && (i.key = t.vkey), t.vname && (i.name = t.vname), r(t.vtag, i, ...t.vchildren || [])
        }
        const i = a(t.vtag, t.vtext);
        return i.o = t.vattrs, i.l = t.vchildren, i.p = t.vkey, i.k = t.vname, i
    },
    u = (t, i, e) => {
        const s = t;
        return {
            emit: t => f(s, i, {
                bubbles: !!(4 & e),
                composed: !!(2 & e),
                cancelable: !!(1 & e),
                detail: t
            })
        }
    },
    f = (t, i, e) => {
        const s = Z.ce(i, e);
        return t.dispatchEvent(s), s
    },
    m = new WeakMap,
    g = t => "sc-" + t.$,
    x = (t, i, e, s, o, n) => {
        if (e !== s) {
            let r = T(t, i),
                a = i.toLowerCase();
            if ("class" === i) {
                const i = t.classList,
                    o = w(e),
                    n = w(s);
                i.remove(...o.filter((t => t && !n.includes(t)))), i.add(...n.filter((t => t && !o.includes(t))))
            } else if ("style" === i) {
                for (const i in e) s && null != s[i] || (i.includes("-") ? t.style.removeProperty(i) : t.style[i] = "");
                for (const i in s) e && s[i] === e[i] || (i.includes("-") ? t.style.setProperty(i, s[i]) : t.style[i] = s[i])
            } else if ("key" === i);
            else if ("ref" === i) s && s(t);
            else if (t.__lookupSetter__(i) || "o" !== i[0] || "n" !== i[1]) {
                const a = l(s);
                if ((r || a && null !== s) && !o) try {
                    if (t.tagName.includes("-")) t[i] = s;
                    else {
                        const o = null == s ? "" : s;
                        "list" === i ? r = !1 : null != e && t[i] == o || (t[i] = o)
                    }
                } catch (t) {}
                null == s || !1 === s ? !1 === s && "" !== t.getAttribute(i) || t.removeAttribute(i) : (!r || 4 & n || o) && !a && t.setAttribute(i, s = !0 === s ? "" : s)
            } else i = "-" === i[2] ? i.slice(3) : T(X, a) ? a.slice(2) : a[2] + i.slice(3), e && Z.rel(t, i, e, !1), s && Z.ael(t, i, s, !1)
        }
    },
    v = /\s/,
    w = t => t ? t.split(v) : [],
    b = (t, i, e, s) => {
        const o = 11 === i.v.nodeType && i.v.host ? i.v.host : i.v,
            l = t && t.o || n,
            r = i.o || n;
        for (s in l) s in r || x(o, s, l[s], void 0, e, i.u);
        for (s in r) x(o, s, l[s], r[s], e, i.u)
    },
    y = (i, s, o) => {
        const n = s.l[o];
        let l, r, a = 0;
        if (null !== n.i) l = n.v = Q.createTextNode(n.i);
        else {
            if (e || (e = "svg" === n.g), l = n.v = Q.createElementNS(e ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n.g), e && "foreignObject" === n.g && (e = !1), b(null, n, e), null != t && l["s-si"] !== t && l.classList.add(l["s-si"] = t), n.l)
                for (a = 0; a < n.l.length; ++a) r = y(i, n, a), r && l.appendChild(r);
            "svg" === n.g ? e = !1 : "foreignObject" === l.tagName && (e = !0)
        }
        return l
    },
    k = (t, e, s, o, n, l) => {
        let r, a = t;
        for (a.shadowRoot && a.tagName === i && (a = a.shadowRoot); n <= l; ++n) o[n] && (r = y(null, s, n), r && (o[n].v = r, a.insertBefore(r, e)))
    },
    z = (t, i, e, s, o) => {
        for (; i <= e; ++i)(s = t[i]) && (o = s.v, M(s), o.remove())
    },
    $ = (t, i) => t.g === i.g && t.p === i.p,
    C = (t, i) => {
        const s = i.v = t.v,
            o = t.l,
            n = i.l,
            l = i.g,
            r = i.i;
        null === r ? (e = "svg" === l || "foreignObject" !== l && e, b(t, i, e), null !== o && null !== n ? ((t, i, e, s) => {
            let o, n, l = 0,
                r = 0,
                a = 0,
                h = 0,
                c = i.length - 1,
                d = i[0],
                p = i[c],
                u = s.length - 1,
                f = s[0],
                m = s[u];
            for (; l <= c && r <= u;)
                if (null == d) d = i[++l];
                else if (null == p) p = i[--c];
            else if (null == f) f = s[++r];
            else if (null == m) m = s[--u];
            else if ($(d, f)) C(d, f), d = i[++l], f = s[++r];
            else if ($(p, m)) C(p, m), p = i[--c], m = s[--u];
            else if ($(d, m)) C(d, m), t.insertBefore(d.v, p.v.nextSibling), d = i[++l], m = s[--u];
            else if ($(p, f)) C(p, f), t.insertBefore(p.v, d.v), p = i[--c], f = s[++r];
            else {
                for (a = -1, h = l; h <= c; ++h)
                    if (i[h] && null !== i[h].p && i[h].p === f.p) {
                        a = h;
                        break
                    } a >= 0 ? (n = i[a], n.g !== f.g ? o = y(i && i[r], e, a) : (C(n, f), i[a] = void 0, o = n.v), f = s[++r]) : (o = y(i && i[r], e, r), f = s[++r]), o && d.v.parentNode.insertBefore(o, d.v)
            }
            l > c ? k(t, null == s[u + 1] ? null : s[u + 1].v, e, s, r, u) : r > u && z(i, l, c)
        })(s, o, i, n) : null !== n ? (null !== t.i && (s.textContent = ""), k(s, null, i, n, 0, n.length - 1)) : null !== o && z(o, 0, o.length - 1), e && "svg" === l && (e = !1)) : t.i !== r && (s.data = r)
    },
    M = t => {
        t.o && t.o.ref && t.o.ref(null), t.l && t.l.map(M)
    },
    j = (t, i) => {
        i && !t.C && i["s-p"] && i["s-p"].push(new Promise((i => t.C = i)))
    },
    S = (t, i) => {
        if (t.u |= 16, !(4 & t.u)) return j(t, t.M), rt((() => P(t, i)));
        t.u |= 512
    },
    P = (t, i) => {
        const e = t.j;
        let s;
        return i && (s = I(e, "componentWillLoad")), L(s, (() => q(t, e, i)))
    },
    q = async (t, i, e) => {
        const s = t.j,
            o = s["s-rc"];
        e && (t => {
            const i = t.S,
                e = t.j,
                s = i.u,
                o = ((t, i) => {
                    var e;
                    let s = g(i);
                    const o = J.get(s);
                    if (t = 11 === t.nodeType ? t : Q, o)
                        if ("string" == typeof o) {
                            let i, n = m.get(t = t.head || t);
                            if (n || m.set(t, n = new Set), !n.has(s)) {
                                {
                                    i = Q.createElement("style"), i.innerHTML = o;
                                    const s = null !== (e = Z.P) && void 0 !== e ? e : function(t) {
                                        var i, e, s;
                                        return null !== (s = null === (e = null === (i = t.head) || void 0 === i ? void 0 : i.querySelector('meta[name="csp-nonce"]')) || void 0 === e ? void 0 : e.getAttribute("content")) && void 0 !== s ? s : void 0
                                    }(Q);
                                    null != s && i.setAttribute("nonce", s), t.insertBefore(i, t.querySelector("link"))
                                }
                                n && n.add(s)
                            }
                        } else t.adoptedStyleSheets.includes(o) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, o]);
                    return s
                })(e.shadowRoot ? e.shadowRoot : e.getRootNode(), i);
            10 & s && (e["s-sc"] = o, e.classList.add(o + "-h"))
        })(t);
        O(t, i), o && (o.map((t => t())), s["s-rc"] = void 0);
        {
            const i = s["s-p"],
                e = () => _(t);
            0 === i.length ? e() : (Promise.all(i).then(e), t.u |= 4, i.length = 0)
        }
    }, O = (e, s) => {
        try {
            s = s.render(), e.u &= -17, e.u |= 2, ((e, s) => {
                const o = e.j,
                    n = e.q || a(null, null),
                    l = (t => t && t.g === h)(s) ? s : r(null, null, s);
                i = o.tagName, l.g = null, l.u |= 4, e.q = l, l.v = n.v = o.shadowRoot || o, t = o["s-sc"], C(n, l)
            })(e, s)
        } catch (t) {
            G(t, e.j)
        }
        return null
    }, _ = t => {
        const i = t.j,
            e = i,
            s = t.M;
        64 & t.u || (t.u |= 64, F(i), I(e, "componentDidLoad"), t.O(i), s || E()), t.C && (t.C(), t.C = void 0), 512 & t.u && lt((() => S(t, !1))), t.u &= -517
    }, E = () => {
        F(Q.documentElement), lt((() => f(X, "appload", {
            detail: {
                namespace: "rw-widgets"
            }
        })))
    }, I = (t, i, e) => {
        if (t && t[i]) try {
            return t[i](e)
        } catch (t) {
            G(t)
        }
    }, L = (t, i) => t && t.then ? t.then(i) : i(), F = t => t.classList.add("hydrated"), D = (t, i) => {
        if (i._) {
            t.watchers && (i.I = t.watchers);
            const e = Object.entries(i._),
                s = t.prototype;
            e.map((([t, [e]]) => {
                (31 & e || 32 & e) && Object.defineProperty(s, t, {
                    get() {
                        return ((t, i) => K(this).L.get(i))(0, t)
                    },
                    set(e) {
                        ((t, i, e, s) => {
                            const o = K(t),
                                n = t,
                                r = o.L.get(i),
                                a = o.u,
                                h = n;
                            if (!((e = ((t, i) => null == t || l(t) ? t : 4 & i ? "false" !== t && ("" === t || !!t) : 2 & i ? parseFloat(t) : 1 & i ? t + "" : t)(e, s._[i][0])) === r || Number.isNaN(r) && Number.isNaN(e))) {
                                if (o.L.set(i, e), s.I && 128 & a) {
                                    const t = s.I[i];
                                    t && t.map((t => {
                                        try {
                                            h[t](e, r, i)
                                        } catch (t) {
                                            G(t, n)
                                        }
                                    }))
                                }
                                2 == (18 & a) && S(o, !1)
                            }
                        })(this, t, e, i)
                    },
                    configurable: !0,
                    enumerable: !0
                })
            }));
            {
                const i = new Map;
                s.attributeChangedCallback = function(t, e, o) {
                    Z.jmp((() => {
                        const e = i.get(t);
                        if (this.hasOwnProperty(e)) o = this[e], delete this[e];
                        else if (s.hasOwnProperty(e) && "number" == typeof this[e] && this[e] == o) return;
                        this[e] = (null !== o || "boolean" != typeof this[e]) && o
                    }))
                }, t.observedAttributes = e.filter((([t, i]) => 15 & i[0])).map((([t, e]) => {
                    const s = e[1] || t;
                    return i.set(s, t), s
                }))
            }
        }
        return t
    }, A = (t, i) => {
        const e = {
            u: i[0],
            $: i[1]
        };
        e._ = i[2], e.F = i[3], e.I = t.I;
        const s = t.prototype.connectedCallback,
            o = t.prototype.disconnectedCallback;
        return Object.assign(t.prototype, {
            __registerHost() {
                U(this, e)
            },
            connectedCallback() {
                (t => {
                    if (0 == (1 & Z.u)) {
                        const i = K(t),
                            e = i.S,
                            s = () => {};
                        if (1 & i.u) R(t, i, e.F);
                        else {
                            i.u |= 1;
                            {
                                let e = t;
                                for (; e = e.parentNode || e.host;)
                                    if (e["s-p"]) {
                                        j(i, i.M = e);
                                        break
                                    }
                            }
                            e._ && Object.entries(e._).map((([i, [e]]) => {
                                if (31 & e && t.hasOwnProperty(i)) {
                                    const e = t[i];
                                    delete t[i], t[i] = e
                                }
                            })), (async (t, i, e, s, o) => {
                                if (0 == (32 & i.u) && (o = t.constructor, i.u |= 32, customElements.whenDefined(e.$).then((() => i.u |= 128)), o.style)) {
                                    let t = o.style;
                                    const i = g(e);
                                    if (!J.has(i)) {
                                        const s = () => {};
                                        ((t, i, e) => {
                                            let s = J.get(t);
                                            tt && e ? (s = s || new CSSStyleSheet, "string" == typeof s ? s = i : s.replaceSync(i)) : s = i, J.set(t, s)
                                        })(i, t, !!(1 & e.u)), s()
                                    }
                                }
                                const n = i.M,
                                    l = () => S(i, !0);
                                n && n["s-rc"] ? n["s-rc"].push(l) : l()
                            })(t, i, e)
                        }
                        s()
                    }
                })(this), s && s.call(this)
            },
            disconnectedCallback() {
                (() => {
                    if (0 == (1 & Z.u)) {
                        const t = K(this);
                        t.D && (t.D.map((t => t())), t.D = void 0)
                    }
                })(), o && o.call(this)
            },
            __attachShadow() {
                this.attachShadow({
                    mode: "open"
                })
            }
        }), t.is = e.$, D(t, e)
    }, R = (t, i, e) => {
        e && e.map((([e, s, o]) => {
            const n = W(t, e),
                l = B(i, o),
                r = H(e);
            Z.ael(n, s, l, r), (i.D = i.D || []).push((() => Z.rel(n, s, l, r)))
        }))
    }, B = (t, i) => e => {
        try {
            t.j[i](e)
        } catch (t) {
            G(t)
        }
    }, W = (t, i) => 4 & i ? Q : t, H = t => 0 != (2 & t), N = t => Object.assign(Z, t), V = new WeakMap, K = t => V.get(t), U = (t, i) => {
        const e = {
            u: 0,
            j: t,
            S: i,
            L: new Map
        };
        return e.A = new Promise((t => e.O = t)), t["s-p"] = [], t["s-rc"] = [], R(t, e, i.F), V.set(t, e)
    }, T = (t, i) => i in t, G = (t, i) => (0, console.error)(t, i), J = new Map, X = "undefined" != typeof window ? window : {}, Q = X.document || {
        head: {}
    }, Y = X.HTMLElement || class {}, Z = {
        u: 0,
        t: "",
        jmp: t => t(),
        raf: t => requestAnimationFrame(t),
        ael: (t, i, e, s) => t.addEventListener(i, e, s),
        rel: (t, i, e, s) => t.removeEventListener(i, e, s),
        ce: (t, i) => new CustomEvent(t, i)
    }, tt = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replaceSync
        } catch (t) {}
        return !1
    })(), it = [], et = [], st = (t, i) => e => {
        t.push(e), s || (s = !0, i && 4 & Z.u ? lt(nt) : Z.raf(nt))
    }, ot = t => {
        for (let i = 0; i < t.length; i++) try {
            t[i](performance.now())
        } catch (t) {
            G(t)
        }
        t.length = 0
    }, nt = () => {
        ot(it), ot(et), (s = it.length > 0) && Z.raf(nt)
    }, lt = t => Promise.resolve(void 0).then(t), rt = st(et, !0);

function at(t) {
    return "https://widgets.thereviewsplace.com/2.0/" + t
}

function ht(t, i) {
    const e = i.filter(Boolean).join("&");
    return "https://api.thereviewsplace.com/v1/widgets/posts/" + t + (e ? "?" + e : "")
}

function ct(t) {
    return "https://repuso.com/?utm_source=widget&utm_medium=" + t + "&utm_campaign=powered"
}

function dt(t, i, e, s) {
    let o = e || "0,400";
    return "Roboto" === i && (o = o.replace(/400/g, "300")),
        function(t, i, e, s) {
            let o = "https://fonts.googleapis.com/css2?family=" + i.split(" ").join("+") + ":ital,wght@" + e + "&display=swap";
            return s && (o += "&text=" + s), pt(t, "stylesheet", o)
        }(t, i, o, s).then((() => function(t, i) {
            if ("fonts" in document) {
                const e = i.split(";").map((t => t.replace("0,", "normal ").replace("1,", "italic "))).map((i => i + " 1em " + t));
                return Promise.all(e.map((t => document.fonts.load(t))))
            }
        }(i, o)))
}

function pt(t, i, e, s, o, n) {
    return new Promise(((l, r) => {
        if (null === t.querySelector(`link[href="${e}"]`)) {
            const a = document.createElement("link");
            a.onload = l, a.onerror = () => r(a.remove()), a.setAttribute("rel", i), a.setAttribute("href", e), null != s && a.setAttribute("as", s), null != o && a.setAttribute("type", o), null != n && a.setAttribute("crossorigin", n), t.appendChild(a)
        } else l(null)
    }))
}

function ut(t) {
    t.target.onerror = null, t.target.src = at("images/no-img.png")
}

function ft(t) {
    if (t.ok) return t.json().catch((() => {
        throw Error("Widget [ID] not found")
    }));
    throw Error(t.status + " " + t.statusText)
}

function mt(t) {
    return Array.isArray(t.items) && t.items.forEach((i => {
        t.settings.remove_line_breaks && (i.text = function(t) {
            const i = document.createElement("div");
            return i.innerHTML = t, i.textContent || i.innerText || ""
        }(i.text)), Array.isArray(i.media_arr) && (i.media_arr = i.media_arr.slice(0, t.settings.slider_enabled_popup ? 12 : 1), i.media_arr_small = i.media_arr.slice(0, t.settings.slider_enabled_small ? 3 : 1))
    })), Promise.resolve(t)
}

function gt(t) {
    const date = new Date(t * 1000); // Convert timestamp to milliseconds
    const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = date.getFullYear();
    return (month < 10 ? '0' : '') + month + '/' + year;
}

const xt = class extends Y {
        constructor() {
            super(), this.__registerHost(), this.action = () => {
                this.item.content.url && (this.item.content.newwindow ? window.open(this.item.content.url, "_blank") : top.location.href = this.item.content.url)
            }, this.item = void 0
        }
        render() {
            return r(h, {
                class: "post",
                dir: "ltr",
                onClick: this.action,
                style: {
                    cursor: this.item.content.url ? "pointer" : "default"
                }
            }, r("img", {
                alt: "",
                class: "post-left",
                src: at("images/lauwer-left.png")
            }), r("div", {
                class: "post-middle"
            }, r("div", {
                class: "post-title"
            }, this.item.content.title), this.item.content.banner_text ? r("div", {
                class: "post-banner-text"
            }, this.item.content.banner_text) : r("img", {
                alt: "custom post banner",
                class: "post-banner",
                src: this.item.media
            }), r("div", {
                class: "post-body"
            }, this.item.content.body)), r("img", {
                alt: "",
                class: "post-right",
                src: at("images/lauwer-right.png")
            }))
        }
        static get style() {
            return ".post{display:flex;align-items:center;justify-content:center;height:100%;width:100%;padding:15px;box-sizing:border-box;overflow:hidden;animation:fadein 0.6s}.post-left,.post-right{min-width:43px;height:100px}.post-left{margin-left:10px}.post-right{margin-right:10px}.post-middle{display:flex;flex-direction:column;align-items:center;min-width:140px;text-align:center}.post-title{font-weight:bold;font-size:0.9em}.post-banner-text{font-size:1.5em;font-weight:bold;padding-top:10px;padding-bottom:10px}.post-banner{max-height:65px;margin:5px 0px}.post-body{font-style:italic;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}"
        }
    },
    vt = class extends Y {
        constructor() {
            super(), this.__registerHost(), this.imgLoad = u(this, "imgLoad", 7), this.imgError = u(this, "imgError", 7), this.load = () => {
                const t = new Image;
                t.onload = () => {
                    this.image = "url(" + this.src + ")", this.imgLoad.emit({
                        w: t.width,
                        h: t.height
                    })
                }, t.onerror = () => this.imgError.emit(), t.src = this.src
            }, this.onIntersection = t => {
                t[0].isIntersecting && (this.io && this.io.disconnect(), this.loadImage())
            }, this.src = void 0, this.type = void 0, this.index = 0, this.preload = !1, this.image = "none"
        }
        componentDidLoad() {
            this.preload && 0 === this.index && "none" === this.image ? this.loadImage() : "IntersectionObserver" in window ? (this.io = new IntersectionObserver(this.onIntersection, {
                rootMargin: "100px"
            }), this.io.observe(this.host)) : this.loadImage()
        }
        loadImage() {
            0 === this.index ? this.load() : window.setTimeout(this.load, 1400 * Math.min(3, this.index))
        }
        render() {
            return r(h, {
                style: {
                    "background-image": this.image
                }
            }, "none" === this.image && "image" === this.type ? r("div", {
                class: "spin"
            }, r("div", {
                class: "bounce1"
            }), r("div", {
                class: "bounce2"
            }), r("div", null)) : null)
        }
        get host() {
            return this
        }
        static get style() {
            return "rw-ll-image{display:flex;align-items:center;justify-content:center}.spin{display:flex;justify-content:space-between;width:45px}.spin>div{background-color:currentColor;width:10px;height:10px;border-radius:100%;display:inline-block;-webkit-animation:bounce 1.4s infinite ease-in-out both;animation:bounce 1.4s infinite ease-in-out both}.spin>.bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spin>.bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes bounce{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1.0)}}@keyframes bounce{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1.0);transform:scale(1.0)}}"
        }
    },
    wt = class extends Y {
        constructor() {
            super(), this.__registerHost()
        }
        render() {
            return r("span", {
                class: "loader"
            })
        }
        static get style() {
            return ".loader{margin-left:8px;width:16px;height:16px;vertical-align:middle;border:2px solid;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"
        }
    },
    bt = t => "object" == (t = typeof t) || "function" === t,
    yt = (t, i, ...e) => {
        let s = null,
            o = null,
            n = !1,
            l = !1;
        const r = [],
            a = i => {
                for (let e = 0; e < i.length; e++) s = i[e], Array.isArray(s) ? a(s) : null != s && "boolean" != typeof s && ((n = "function" != typeof t && !bt(s)) && (s += ""), n && l ? r[r.length - 1].i += s : r.push(n ? kt(null, s) : s), l = n)
            };
        if (a(e), i) {
            i.key && (o = i.key);
            {
                const t = i.className || i.class;
                t && (i.class = "object" != typeof t ? t : Object.keys(t).filter((i => t[i])).join(" "))
            }
        }
        if ("function" == typeof t) return t(null === i ? {} : i, r, zt);
        const h = kt(t, null);
        return h.o = i, r.length > 0 && (h.l = r), h.p = o, h
    },
    kt = (t, i) => ({
        u: 0,
        g: t,
        i: i,
        v: null,
        l: null,
        o: null,
        p: null
    }),
    zt = {
        forEach: (t, i) => t.map($t).forEach(i),
        map: (t, i) => t.map($t).map(i).map(Ct)
    },
    $t = t => ({
        vattrs: t.o,
        vchildren: t.l,
        vkey: t.p,
        vname: t.k,
        vtag: t.g,
        vtext: t.i
    }),
    Ct = t => {
        if ("function" == typeof t.vtag) {
            const i = Object.assign({}, t.vattrs);
            return t.vkey && (i.key = t.vkey), t.vname && (i.name = t.vname), yt(t.vtag, i, ...t.vchildren || [])
        }
        const i = kt(t.vtag, t.vtext);
        return i.o = t.vattrs, i.l = t.vchildren, i.p = t.vkey, i.k = t.vname, i
    },
    Mt = () => yt("symbol", {
        id: "icon-chevron-left",
        viewBox: "0 0 21 28",
        width: "75%",
        height: "100%"
    }, yt("path", {
        d: "M18.297 4.703l-8.297 8.297 8.297 8.297c0.391 0.391 0.391 1.016 0 1.406l-2.594 2.594c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.594c-0.391-0.391-0.391-1.016 0-1.406l11.594-11.594c0.391-0.391 1.016-0.391 1.406 0l2.594 2.594c0.391 0.391 0.391 1.016 0 1.406z"
    })),
    jt = () => yt("symbol", {
        id: "icon-cross",
        viewBox: "0 0 32 32"
    }, yt("path", {
        d: "M22.957 23.758c-0.75 0.75-1.966 0.75-2.715 0l-4.242-4.848-4.242 4.846c-0.75 0.75-1.966 0.75-2.715 0-0.75-0.75-0.75-1.966 0-2.715l4.413-5.040-4.414-5.043c-0.75-0.75-0.75-1.965 0-2.715s1.965-0.75 2.715 0l4.243 4.85 4.242-4.85c0.75-0.75 1.965-0.75 2.715 0s0.75 1.966 0 2.715l-4.413 5.043 4.413 5.040c0.75 0.75 0.75 1.966 0 2.717z"
    })),
    St = () => yt("symbol", {
        id: "icon-share-square-o",
        viewBox: "0 0 1792 1792"
    }, yt("path", {
        d: "M1472 989v259q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h255q13 0 22.5 9.5t9.5 22.5q0 27-26 32-77 26-133 60-10 4-16 4h-112q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-214q0-19 18-29 28-13 54-37 16-16 35-8 21 9 21 29zm237-496l-384 384q-18 19-45 19-12 0-25-5-39-17-39-59v-192h-160q-323 0-438 131-119 137-74 473 3 23-20 34-8 2-12 2-16 0-26-13-10-14-21-31t-39.5-68.5-49.5-99.5-38.5-114-17.5-122q0-49 3.5-91t14-90 28-88 47-81.5 68.5-74 94.5-61.5 124.5-48.5 159.5-30.5 196.5-11h160v-192q0-42 39-59 13-5 25-5 26 0 45 19l384 384q19 19 19 45t-19 45z"
    })),
    Pt = () => yt("symbol", {
        id: "icon-quote",
        viewBox: "0 0 20 20"
    }, yt("path", {
        d: "M5.315 3.401c-1.61 0-2.916 1.343-2.916 3s1.306 3 2.916 3c2.915 0 0.972 5.799-2.916 5.799v1.4c6.939 0.001 9.658-13.199 2.916-13.199zM13.715 3.401c-1.609 0-2.915 1.343-2.915 3s1.306 3 2.915 3c2.916 0 0.973 5.799-2.915 5.799v1.4c6.938 0.001 9.657-13.199 2.915-13.199z"
    })),
    qt = () => yt("symbol", {
        id: "icon-star-outline",
        viewBox: "0 0 24 24"
    }, yt("path", {
        d: "M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"
    })),
    Ot = () => yt("symbol", {
        id: "icon-star-half",
        viewBox: "0 0 24 24"
    }, yt("path", {
        d: "M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031v9.328zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"
    })),
    _t = () => yt("symbol", {
        id: "icon-star",
        viewBox: "0 0 24 24"
    }, yt("path", {
        d: "M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"
    })),
    Et = () => yt("symbol", {
        id: "icon-resize-plus",
        viewBox: "0 0 512 512"
    }, yt("path", {
        d: "M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"
    })),
    It = () => yt("symbol", {
        id: "icon-resize-minus",
        viewBox: "0 0 512 512"
    }, yt("path", {
        d: "M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"
    })),
    Lt = () => yt("symbol", {
        id: "plyr-play",
        viewBox: "0 0 18 18"
    }, yt("path", {
        d: "M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"
    })),
    Ft = ({
        item: {
            source_logos: t,
            type: i
        },
        settings: {
            branded: e
        },
        size: s
    }) => {
        let o, n, l;
        return t ? (o = t[s], n = [t[2 * s] ? t[2 * s] + " 2x" : null, t[3 * s] ? t[3 * s] + " 3x" : null].filter((t => null == t ? void 0 : t.length)).join(",") || null, l = "review source logo") : ("repuso" !== i || e) && (o = at(`images/${s}x${s}/logo-${i}.png`), n = [at(`images/${2*s}x${2*s}/logo-${i}.png`) + " 2x", at(`images/${3*s}x${3*s}/logo-${i}.png`) + " 3x"].join(","), l = i + " logo"), o ? yt("img", {
            src: o,
            srcset: n,
            alt: l,
            style: {
                display: "block"
            }
        }) : null
    },
    Dt = t => yt("div", {
        class: t.class
    }, yt("a", {
        onClick: t => t.stopPropagation(),
        href: t.href,
        target: "_blank",
        style: {
            "font-size": "inherit",
            color: "inherit",
            "text-decoration": "none"
        }
    }, t.prefix, yt("span", {
        style: {
            "font-family": "Courgette, cursive",
            "font-size": "1.2em"
        }
    }, "Repuso"))),
    At = t => {
        if (!t.value) return null;
        let i = t.value;
        const e = [];
        for (; i > 0;) i >= 1 ? e.push(yt(Bt, {
            type: "icon-star"
        })) : i > 0 && e.push(yt(Bt, {
            type: "icon-star-half"
        })), i--;
        for (let i = Math.ceil(t.value) + 1; i <= 5; i++) e.push(yt(Bt, {
            type: "icon-star-outline"
        }));
        return yt("div", {
            class: t.class,
            style: {
                color: t.color,
                "line-height": "0"
            },
            role: "img",
            "aria-label": t.value + " star rating"
        }, e)
    },
    Rt = t => yt("div", {
        role: "img",
        class: t.class,
        style: {
            height: t.size,
            width: t.size,
            "font-size": t.size,
            color: t.color
        }
    }, yt(Bt, {
        type: "icon-quote"
    })),
    Bt = t => yt("svg", {
        class: "icon " + t.type,
        "aria-label": t.type
    }, yt("use", {
        href: "#" + t.type,
        "aria-hidden": "true"
    })),
    Wt = (t, i) => yt("svg", {
        "aria-hidden": "true",
        style: {
            position: "absolute",
            width: "0",
            height: "0",
            overflow: "hidden"
        }
    }, yt("style", null, ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor;}"), yt("defs", null, i)),
    Ht = class extends Y {
        constructor() {
            super(), this.__registerHost(), this.itemSizeReceived = u(this, "itemSizeReceived", 7), this.touchPos = null, this.onChangePlayerSize = t => {
                this.itemSizeReceived.emit(t)
            }, this.arrows = "hover", this.dots = "always", this.zoom = "hover", this.autoplay = 0, this.loadDelay = !0, this.preload = !1, this.zoomAction = void 0, this.index = 0, this.maxed = !1, this.videoControls = !1, this.resumePlayback = 0, this.src = void 0, this.source = void 0, this.playerReady = !1, this.playerRef = void 0
        }
        handleKeyDown(t) {
            return "ArrowLeft" === t.key ? this.showPrev() : "ArrowRight" === t.key ? this.showNext() : void 0
        }
        onSrcChange() {
            this.source = "string" == typeof this.src ? JSON.parse(this.src) : this.src || []
        }
        componentWillLoad() {
            this.onSrcChange()
        }
        componentDidLoad() {
            this.host.addEventListener("touchstart", (t => {
                this.touchPos = {
                    x: t.touches[0].clientX,
                    y: t.touches[0].clientY
                }
            }), {
                passive: !0
            }), this.host.addEventListener("touchmove", (t => {
                if (!this.touchPos) return;
                const i = this.touchPos.x - t.touches[0].clientX,
                    e = this.touchPos.y - t.touches[0].clientY;
                Math.abs(i) > Math.abs(e) && (i > 0 ? this.showNext() : this.showPrev()), this.touchPos = null
            }), {
                passive: !0
            })
        }
        connectedCallback() {
            this.autoplay > 0 && this.source.length > 1 && window.setTimeout((() => {
                this.timer = window.setInterval((() => this.showNext()), this.autoplay)
            }), 1e3 * Math.random())
        }
        disconnectedCallback() {
            window.clearInterval(this.timer)
        }
        showNext() {
            this.index = this.index === this.source.length - 1 ? 0 : this.index + 1
        }
        showPrev() {
            this.index = 0 === this.index ? this.source.length - 1 : this.index - 1
        }
        playerInit() {
            Ht.player_init || (Ht.player_init = function(t, i, e) {
                return new Promise(((s, o) => {
                    if (null === t.querySelector(`script[src="${i}"]`)) {
                        const n = document.createElement("script");
                        n.onload = s, n.onerror = () => o(n.remove()), n.setAttribute("src", i), n.setAttribute("type", e), t.appendChild(n)
                    } else s(null)
                }))
            }(document.head, at("rw-component-player.js"), "module")), Ht.player_init.then((() => this.playerReady = !0)).catch((() => console.warn("Failed to load video player")))
        }
        onIndexChange() {
            this.playerReady = !1, this.itemSizeReceived.emit(this.source[this.index].size)
        }
        onMaxedChange() {
            var t, i;
            (null === (i = null === (t = this.playerRef) || void 0 === t ? void 0 : t.plyr) || void 0 === i ? void 0 : i.playing) ? this.itemSizeReceived.emit(this.playerRef.size): this.itemSizeReceived.emit(this.source[this.index].size)
        }
        saveItemSize(t, i) {
            this.source.forEach((e => {
                e.id === t && (e.size = i, this.source[this.index].id === t && this.itemSizeReceived.emit(i))
            }))
        }
        onAction(t) {
            t.stopImmediatePropagation(), window.clearInterval(this.timer)
        }
        removeItem(t) {
            this.source = this.source.filter((i => i.id !== t)), this.itemSizeReceived.emit(this.source[this.index].size)
        }
        render() {
            if (0 === this.source.length) return r(h, {
                style: {
                    display: "none"
                }
            });
            let t = null,
                i = null,
                e = null;
            if (this.source.length > 0 && "hover" === this.zoom && (t = r("span", {
                    role: "button",
                    "aria-label": this.maxed ? "minimize" : "maximize",
                    class: "resize hover" + (this.maxed ? " maxed" : ""),
                    onClick: t => {
                        var i;
                        this.onAction(t), null === (i = this.zoomAction) || void 0 === i || i.call(this)
                    }
                }, r(Bt, {
                    type: this.maxed ? "icon-resize-minus" : "icon-resize-plus"
                }))), this.source.length > 1) {
                const t = "video" === this.source[this.index].type ? " onvideo" : "";
                "always" !== this.arrows && "hover" !== this.arrows || (i = [r("div", {
                    role: "button",
                    "aria-label": "previous",
                    class: "arrows a-prev " + this.arrows + t,
                    onClick: t => {
                        this.onAction(t), this.showPrev()
                    }
                }, r(Bt, {
                    type: "icon-chevron-left"
                })), r("div", {
                    role: "button",
                    "aria-label": "next",
                    class: "arrows a-next " + this.arrows + t,
                    onClick: t => {
                        this.onAction(t), this.showNext()
                    }
                }, r(Bt, {
                    type: "icon-chevron-left"
                }))]), "always" !== this.dots && "hover" !== this.dots || (e = r("div", {
                    class: "dots " + this.dots
                }, this.source.map(((t, i) => r("span", {
                    role: "button",
                    "aria-label": "Photo " + (i + 1),
                    class: i === this.index ? "dot-selected" : "dot",
                    onClick: t => {
                        this.onAction(t), this.index = i
                    }
                })))))
            }
            return r(h, {
                tabindex: "0",
                dir: "ltr",
                onClick: t => this.onAction(t)
            }, this.source.map(((t, i) => r("rw-ll-image", {
                key: t.id,
                class: "media-item",
                src: t.url,
                type: t.type,
                index: this.loadDelay ? i : 0,
                style: {
                    opacity: i === this.index ? "1" : "0"
                },
                onImgError: () => {
                    "image" === t.type && this.removeItem(t.id), "video" === t.type && this.saveItemSize(t.id, {
                        w: 320,
                        h: 200
                    })
                },
                onImgLoad: i => this.saveItemSize(t.id, i.detail),
                preload: this.preload
            }, "video" === t.type && i === this.index ? this.playerReady || this.resumePlayback ? r("rw-player", {
                onItemSizeReceived: this.onChangePlayerSize,
                ref: t => {
                    this.playerRef !== t && (this.playerRef = t)
                },
                source: t.src,
                poster: t.url,
                controls: this.videoControls,
                autoplay: !0,
                resumePlayback: this.resumePlayback
            }) : r("div", {
                class: "starter",
                onClick: t => {
                    this.onAction(t), this.playerInit()
                }
            }, r(Bt, {
                type: "plyr-play"
            })) : null))), t, i, e, r(Wt, null, r(Mt, null), r(Et, null), r(It, null), r(Lt, null)))
        }
        get host() {
            return this
        }
        static get watchers() {
            return {
                src: ["onSrcChange"],
                index: ["onIndexChange"],
                maxed: ["onMaxedChange"]
            }
        }
        static get style() {
            return "rw-media{cursor:default;position:relative;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;overflow:hidden;outline:none}@media (hover: hover){rw-media:hover>.hover{visibility:visible}}rw-media:focus>.hover{visibility:visible}.media-item{border-radius:inherit;position:absolute;top:0px;left:0px;width:100%;height:100%;background-position:center center;background-size:cover;background-clip:content-box;background-repeat:no-repeat;transition:opacity 0.6s ease-in}.resize{z-index:2;position:absolute;padding:4px;top:0px;right:0px;color:whitesmoke;filter:drop-shadow(0px 0px 2px gray);line-height:0;font-size:22px;cursor:pointer;visibility:hidden}.resize:hover{color:white}.arrows{z-index:1;position:absolute;top:0px;bottom:0px;display:flex;align-items:center;font-size:16px;line-height:0;cursor:pointer;color:whitesmoke;filter:drop-shadow(0px 0px 2px gray);visibility:hidden;padding:0px 10px}.arrows.onvideo{top:50px;bottom:50px}.arrows:hover{color:white}.arrows.always{visibility:visible}.a-prev{left:0px}.a-next{right:0px;transform:scaleX(-1)}.dots{display:flex;align-items:center;z-index:1;position:absolute;left:50%;transform:translate(-50%, 0);bottom:8%;visibility:hidden}.dots.always{visibility:visible}.dot{width:6px;height:6px;display:inline-block;border-radius:100%;background:lightgray;opacity:0.8;border:1px solid white;margin:0 4px;cursor:pointer}.dot-selected{width:8px;height:8px;display:inline-block;border-radius:100%;background:white;margin:0 4px;cursor:pointer}.starter{display:flex;justify-content:center;align-items:center;padding:15px;font-size:36px;color:white;filter:drop-shadow(0px 0px 2px gray);cursor:pointer;opacity:0.9;z-index:1}.starter:hover{opacity:1}"
        }
    },
    Nt = class extends Y {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.popupClosed = u(this, "popupClosed", 7), this.onItemSizeReceived = t => {
                this.size = this.maxed ? t.detail : null
            }, this.item = void 0, this.settings = void 0, this.index = 0, this.resumePlayback = 0, this.maxed = !1, this.size = void 0
        }
        connectedCallback() {
            window.onorientationchange = () => window.setTimeout((() => {
                this.maxed && this.size && (this.size = Object.assign({}, this.size))
            }), 1e3)
        }
        disconnectedCallback() {
            window.onorientationchange = null
        }
        getWH() {
            if (this.size) {
                let t = this.size.w,
                    i = this.size.h;
                const e = t / i,
                    s = .85 * window.innerWidth,
                    o = .85 * window.innerHeight;
                return i > o && (t = o * e, i = o), t > s && (t = s, i = s / e), {
                    width: Math.trunc(t) + "px",
                    height: Math.trunc(i) + "px"
                }
            }
            return null
        }
        handleKeyDown(t) {
            "Escape" === t.key && this.close()
        }
        handleClick() {
            this.close()
        }
        close() {
            this.popupClosed.emit(), this.host.remove()
        }
        resize() {
            this.maxed || (this.main.style.setProperty("width", this.main.offsetWidth + "px"), this.main.style.setProperty("height", this.main.offsetHeight + "px")), this.maxed = !this.maxed
        }
        render() {
            let t = null;
            this.maxed || (t = [r("div", {
                class: "header"
            }, this.item.from_image && r("div", {
                class: "avatar"
            }, r("img", {
                alt: "",
                src: this.item.from_image,
                onError: ut
            })), r("div", {
                class: "info"
            }, r("div", {
                class: "name"
            }, this.item.from_name), this.item.channel_id || this.item.source_id ? r("div", {
                class: "channel-link"
            }, !this.item.post_url && !this.item.from_url || this.settings.disable_external_links ? this.item.label : r("a", {
                href: this.item.post_url || this.item.from_url,
                target: "_blank"
            }, this.item.label, this.item.label && r("span", null, "Â "), r(Bt, {
                type: "icon-share-square-o"
            }))) : null), r("div", {
                role: "button",
                "aria-label": "close",
                class: "close",
                onClick: () => this.close()
            }, r(Bt, {
                type: "icon-cross"
            }))), r("div", {
                class: "text",
                dir: "auto",
                innerHTML: this.item.text
            }), r("div", {
                class: "stat"
            }, r(At, {
                value: this.item.rating_value,
                class: "star"
            }), r("div", {
                class: "spacer"
            }), r("div", {
                class: "date"
            }, gt(this.item.ts), "Â Â "), r(Ft, {
                item: this.item,
                settings: this.settings,
                size: 28
            }))]);
            let i = null;
            return this.item.media_arr && this.item.media_arr.length > 0 && (i = r("rw-media", {
                onItemSizeReceived: this.onItemSizeReceived,
                class: this.maxed ? "media maxed" : "media",
                maxed: this.maxed,
                index: this.index,
                autoplay: this.settings.media_autoplay,
                loadDelay: !1,
                src: this.item.media_arr,
                videoControls: !0,
                zoomAction: () => this.resize(),
                resumePlayback: this.resumePlayback
            })), r(h, null, r("div", {
                class: "popup container",
                dir: "ltr",
                onClick: t => t.stopPropagation(),
                style: this.settings.popup_font ? {
                    "font-family": this.settings.popup_font
                } : null
            }, r("div", {
                class: this.maxed ? "main maxed" : "main",
                ref: t => this.main = t,
                style: this.getWH()
            }, t, i), this.settings.branded && r(Dt, {
                class: "branding",
                prefix: "Powered by ",
                href: this.settings.branding_link_modal
            }), r(Wt, null, r(_t, null), r(Ot, null), r(qt, null), r(St, null), r(jt, null))), this.settings.custom_css && r("style", {
                "data-name": "custom-css"
            }, this.settings.custom_css))
        }
        get host() {
            return this
        }
        static get style() {
            return ":host{all:initial;display:flex;justify-content:center;align-items:center;z-index:2147483002;position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.8);font-size:14px;font-family:Verdana, Helvetica, Arial, sans-serif}.container{display:flex;flex-direction:column;margin:30px;border-radius:5px;overflow:hidden}.main{min-width:33vw;max-width:600px;max-height:85vh;padding:30px;display:flex;flex-direction:column;color:#565656;background-color:#ffffff;transition:width 0.5s, height 0.5s}.main.maxed{min-width:auto;max-width:85vw;padding:4px}.branding{align-self:flex-end;margin-top:4px;font-size:12px;color:#ffffff}.header{display:flex;align-items:flex-start;min-height:35px}.avatar{margin-right:10px}.avatar img{object-fit:cover;min-height:35px;min-width:35px;max-width:35px;border-radius:5px}.info{display:flex;flex-direction:column;align-items:flex-start;flex-grow:1;margin-right:10px}.name{font-weight:bold}.channel-link{color:#b8b8b8;font-size:13px}.channel-link a,.channel-link a:hover{display:flex;align-items:center;color:inherit;text-decoration:none}.channel-link svg{font-size:16px}.close{display:flex;cursor:pointer;font-size:28px}.text{overflow-y:auto;word-break:break-word;line-height:24px;min-height:48px;margin-top:10px;margin-bottom:10px}.stat{display:flex;align-items:center;min-height:28px}.spacer{flex-grow:1}.star{font-size:22px;color:gold}.media{min-height:150px;height:30vh;margin-top:10px;border:1px solid #f2f2f2;border-radius:5px}.media.maxed{min-height:auto;height:100%;margin:0;border:0px}"
        }
    },
    Vt = class extends Y {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.media = [], this.dataRwGrid = void 0, this.dataDisableCustomPosts = void 0, this.dataContentTags = void 0, this.dataWebsiteId = void 0, this.reviews = [], this.loading = !1
        }
        componentWillLoad() {
            const t = {
                disable_custom_posts: this.dataDisableCustomPosts || null,
                tags: this.dataContentTags || null,
                website_id: this.dataWebsiteId || null
            };
            return "undefined" != typeof rw_schema_params && Object.entries(rw_schema_params).forEach((([i, e]) => t["schema[" + i + "]"] = e)), this.qs = function(t) {
                return Object.keys(t).filter((i => t[i])).map((i => encodeURIComponent(i) + "=" + encodeURIComponent("" + t[i]))).join("&")
            }(t), fetch(ht(this.dataRwGrid, [this.qs])).then((t => ft(t))).catch((t => console.warn(t.message))).then((t => function(t, i) {
                return t && t[i] && 0 !== t[i].length ? !0 === t.settings.hide_on_mobile && window.screen.width <= 468 ? new Promise((() => {})) : Promise.resolve(t) : new Promise((() => {}))
            }(t, "items"))).then((t => mt(t))).then((t => this.data = t)).then((() => this.data.settings.text_lines = Math.floor((this.data.settings.card_height - 30 - 35 - 18 - 5 - 4) / 26))).then((() => this.data.settings.text_lines < 1 ? this.data.settings.text_lines = 1 : null)).then((() => this.data.settings.branding_link = ct("grid"))).then((() => this.data.settings.branding_link_modal = ct("grid-modal")))
        }
        componentDidLoad() {
            const t = function(t, i) {
                switch (i || "Default") {
                    case "Default":
                        return Promise.resolve();
                    case "Inherit":
                        return Promise.resolve(t.style.setProperty("font-family", "inherit"));
                    default:
                        return dt(t, i, "0,400;0,700;1,400").then((() => t.style.setProperty("font-family", i))).catch((() => console.warn("Unable to load font. Fallback to default")))
                }
            }(this.host, this.data.settings.font);
            this.data.settings.branded && dt(this.host, "Courgette", "0,400", "Repuso"), t.then((() => {
                    this.host.style.setProperty("display", "inline-block"), this.onClickMore(this.data.settings.rows), this.data.settings.popup_font = window.getComputedStyle(this.host).getPropertyValue("font-family")
                })),
                function(t) {
                    t && null === document.querySelector("#rw-schema") && document.head.insertAdjacentHTML("beforeend", t)
                }(this.data.schema)
        }
        async onClickMore(t) {
            if (!this.loading) try {
                this.loading = !0, await this.showMore(t)
            } finally {
                this.loading = !1
            }
        }
        async showMore(t) {
            const i = this.calculateColumnCount();
            let e = t * i;
            this.reviews.length % i && (e = Math.floor(this.reviews.length / i) * i - this.reviews.length + e);
            const s = this.data.items.filter((t => t.ts_order)).pop(),
                o = this.data.items.splice(0, e);
            this.reviews = [...this.reviews, ...o];
            const n = await async function(t, i, e, s, o) {
                const n = e.items.length,
                    l = 3 * e.settings.more_rows;
                if (e.more && n - l < 0) {
                    const s = ht(t, [i, "before_ts=" + ((null == o ? void 0 : o.ts_order) || 0), "limit_posts=" + Math.abs(n - l)]),
                        {
                            more: r,
                            items: a = []
                        } = await fetch(s).then((t => ft(t))).then((t => mt(t)));
                    return {
                        more: r,
                        items: [...e.items, ...a]
                    }
                }
                return {}
            }(this.dataRwGrid, this.qs, this.data, 0, s);
            this.data = Object.assign(Object.assign({}, this.data), n), 0 !== this.data.items.length || this.data.more || (this.data.settings.enable_more_button = !1, (() => {
                {
                    const t = K(this);
                    t.j.isConnected && 2 == (18 & t.u) && S(t, !1)
                }
            })())
        }
        calculateColumnCount() {
            const t = this.host.offsetWidth / 250;
            return t >= 3 ? 3 : t >= 2 ? 2 : 1
        }
        popupReview(t, i, e = !1) {
            var s, o, n, l, r, a, h;
            const c = document.createElement("rw-popup-review");
            c.item = t, c.settings = this.data.settings, c.maxed = e, c.index = null === (s = this.media[i]) || void 0 === s ? void 0 : s.index, (null === (l = null === (n = null === (o = this.media[i]) || void 0 === o ? void 0 : o.playerRef) || void 0 === n ? void 0 : n.plyr) || void 0 === l ? void 0 : l.playing) && (c.resumePlayback = null === (h = null === (a = null === (r = this.media[i]) || void 0 === r ? void 0 : r.playerRef) || void 0 === a ? void 0 : a.plyr) || void 0 === h ? void 0 : h.currentTime), e && (c.size = {
                w: this.media[i].offsetWidth,
                h: this.media[i].offsetHeight
            }), document.body.appendChild(c)
        }
        render() {
            const t = {
                height: (this.data.settings.card_height || 170) + "px",
                color: this.data.settings.font_color || "#000000",
                "background-color": this.data.settings.no_background_color ? "transparent" : this.data.settings.background_color || "#FFFFFF",
                margin: 0 === this.data.settings.margin ? "-1px 0px 0px -1px" : this.data.settings.margin / 2 + "px"
            };
            return this.data.settings.show_border && Object.assign(t, {
                border: "1px solid " + (this.data.settings.border_color || "#CCCCCC"),
                "border-radius": (this.data.settings.border_radius || 0) + "px"
            }), r(h, null, r("div", {
                class: "widget container",
                dir: "ltr"
            }, r("div", {
                class: "grid"
            }, this.reviews.map(((i, e) => r("div", {
                class: "column",
                key: i.id
            }, i.content ? r("div", {
                class: "item",
                style: t
            }, r("rw-custom-post", {
                item: i
            })) : r("div", {
                class: "item",
                style: t
            }, i.media_arr_small && i.media_arr_small.length > 0 ? r("rw-media", {
                class: "media",
                ref: t => this.media[e] = t,
                zoomAction: () => this.popupReview(i, e, !0),
                autoplay: this.data.settings.media_autoplay,
                src: i.media_arr_small
            }) : r(Rt, {
                class: "quote-left",
                size: (this.data.settings.icon_size || 34) + "px",
                color: this.data.settings.button_color || "#E67E21"
            }), r("div", {
                class: "data"
            }, r("div", {
                dir: "auto"
            }, r("div", {
                class: "text",
                style: {
                    "-webkit-line-clamp": this.data.settings.text_lines
                },
                innerHTML: i.text
            }), r("div", {
                class: "rating"
            }, r(At, {
                value: i.rating_value,
                class: "star"
            }))), r("div", {
                class: "footer",
                onClick: () => this.popupReview(i, e)
            }, r("div", {
                class: "info"
            }, r("div", {
                class: "name"
            }, i.from_name), r("div", {
                class: "link"
            }, r("div", {
                class: "view-post"
            }, "Â ", this.data.settings.view_post_text, "Â "), r(Ft, {
                item: i,
                settings: this.data.settings,
                size: 15
            }))), i.from_image && r("div", {
                class: "avatar"
            }, r("img", {
                alt: "",
                src: i.from_image,
                onError: ut
            })))))))), r("div", {
                class: "column-ghost"
            }), r("div", {
                class: "column-ghost"
            })), this.data.settings.enable_more_button && r("a", {
                role: "button",
                href: "javascript:void(0)",
                class: this.loading ? "more loading" : "more",
                onClick: () => this.onClickMore(this.data.settings.more_rows),
                style: {
                    "background-color": this.data.settings.button_color || "#E67E21",
                    color: this.data.settings.button_text_color || "#FFFFFF",
                    "margin-bottom": this.data.settings.branded ? "0px" : "20px"
                }
            }, this.data.settings.button_text, this.loading && r("rw-loader", null)), this.data.settings.branded && r(Dt, {
                class: "branding",
                prefix: "Powered by ",
                href: this.data.settings.branding_link
            }), r(Wt, null, r(_t, null), r(Ot, null), r(qt, null), r(Pt, null))), this.data.settings.custom_css && r("style", {
                "data-name": "custom-css"
            }, this.data.settings.custom_css))
        }
        get host() {
            return this
        }
        static get style() {
            return ":host{all:initial;display:none;font-family:Verdana, Helvetica, Arial, sans-serif;width:100%}.container{display:flex;flex-direction:column;overflow-anchor:none}.grid{display:flex;flex-wrap:wrap}.column{flex:1 1 33.3%;min-width:250px;animation:fadein 0.6s}.column-ghost{flex:1 1 33.3%;min-width:250px;height:0px}@keyframes fadein{0%{opacity:0}100%{opacity:1}}.item{display:flex;overflow:hidden;padding:15px;box-sizing:border-box}.quote-left{transform:rotate(180deg);margin-right:5px}.media{margin-right:8px;min-width:120px;max-width:120px;border:1px solid #f2f2f2;border-radius:8px}.data{flex-grow:1;position:relative;overflow:hidden}.text{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;font-size:14px;line-height:26px;padding-left:3px}.footer{position:absolute;right:0px;bottom:0px;display:flex;justify-content:flex-end;cursor:pointer;max-width:100%;overflow:hidden}.rating{margin-top:5px}.star{font-size:18px;margin:0px -2px 0px 1px;color:gold}.info{display:flex;flex-direction:column;justify-content:space-around;align-items:flex-end;overflow:hidden}.name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px;font-weight:bold;max-width:100%}.link{display:flex;align-items:center}.view-post{opacity:0.6;font-size:12px;white-space:nowrap}.avatar{display:flex;align-items:flex-end}.avatar img{object-fit:cover;width:35px;height:35px;margin-left:10px;border-radius:5px}.more{align-self:center;margin:20px;padding:12px 30px;border-radius:5px;text-align:center;font-weight:bold;cursor:pointer;font-size:14px;user-select:none;-moz-user-select:none;-webkit-user-select:none;text-decoration:none;-webkit-touch-callout:none}.more:hover{opacity:.9}.more.loading{opacity:.8;cursor:default}.branding{margin-top:2px;font-size:12px;align-self:center;color:#b2b2b2}"
        }
    };
! function() {
    pt(document.head, "preconnect", "https://fonts.googleapis.com"), pt(document.head, "preconnect", "https://fonts.gstatic.com", null, null, "");
    const t = import.meta.url.split("/").pop().split(".").shift(),
        i = "div[data-rw-" + t.split("-").pop() + "]";
    document.querySelectorAll(i).forEach((i => {
        if (!i.querySelector(t)) {
            const e = document.createElement(t);
            for (let t of i.getAttributeNames()) e.setAttribute(t, i.getAttribute(t));
            e.removeAttribute("id"), e.removeAttribute("style"), i.appendChild(e)
        }
    }))
}();
const Kt = A(xt, [0, "rw-custom-post", {
        item: [8]
    }]),
    Ut = A(vt, [0, "rw-ll-image", {
        src: [1],
        type: [1],
        index: [2],
        preload: [4],
        image: [32]
    }]),
    Tt = A(wt, [0, "rw-loader"]),
    Gt = A(Ht, [0, "rw-media", {
            arrows: [1],
            dots: [1],
            zoom: [1],
            autoplay: [2],
            loadDelay: [4, "load-delay"],
            preload: [4],
            zoomAction: [16],
            index: [1026],
            maxed: [4],
            videoControls: [4, "video-controls"],
            resumePlayback: [2, "resume-playback"],
            src: [1],
            playerRef: [1032, "player-ref"],
            source: [32],
            playerReady: [32]
        },
        [
            [0, "keydown", "handleKeyDown"]
        ]
    ]),
    Jt = A(Nt, [1, "rw-popup-review", {
            item: [8],
            settings: [8],
            index: [2],
            resumePlayback: [2, "resume-playback"],
            maxed: [1028],
            size: [1040]
        },
        [
            [4, "keydown", "handleKeyDown"],
            [0, "click", "handleClick"]
        ]
    ]),
    Xt = A(Vt, [1, "rw-widget-grid", {
        dataRwGrid: [1, "data-rw-grid"],
        dataDisableCustomPosts: [1, "data-disable-custom-posts"],
        dataContentTags: [1, "data-content-tags"],
        dataWebsiteId: [1, "data-website-id"],
        reviews: [32],
        loading: [32]
    }]),
    Qt = t => {
        "undefined" != typeof customElements && [Kt, Ut, Tt, Gt, Jt, Xt].forEach((i => {
            customElements.get(i.is) || customElements.define(i.is, i, t)
        }))
    };
export {
    Kt as RwCustomPost, Ut as RwLlImage, Tt as RwLoader, Gt as RwMedia, Jt as RwPopupReview, Xt as RwWidgetGrid, Qt as defineCustomElements, o as setAssetPath, N as setPlatformOptions
};
Qt();