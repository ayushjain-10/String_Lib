!function (o, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.index = e() : o.index = e() }(this, (() => { return o = { 10: o => { let e = 0; function l(o) { console.log(`Original - ${o}`); const e = o[0].toUpperCase() + o.slice(1); return console.log(`New - ${e}`), e } function n(o) { console.log(`Original - ${o}`); const e = o.toUpperCase(); return console.log(`New - ${e}`), e } function s(o) { console.log(`Original - ${o}`); let l = o.replace(o[0], o[0].toUpperCase()); const n = o.length; for (e = 0; e <= n; e += 1)" " === o[e] && (l = l.replace(l[e + 1], l[e + 1].toUpperCase())); return console.log(`New - ${l}`), l } function t(o) { console.log(`Original - ${o}`); const l = o.trim(), n = o.length; let s = ""; for (e = 0; e <= n; e += 1)if (" " === l[e]) { if (" " === l[e + 1]) continue; s += l.substring(e, e + 1) } else s += l.substring(e, e + 1); return console.log(`New - ${s}`), s } function r(o) { console.log(`Original - ${o}`); let l = o.toLowerCase(); l = l.trim(); const n = l.length; let s = ""; for (e = 0; e <= n; e += 1)if (" " === l[e]) { if (" " === l[e + 1]) continue; s += l.substring(e, e + 1) } else s += l.substring(e, e + 1); return s = s.replaceAll(" ", "-"), console.log(`New - ${s}`), s } function c(o) { console.log(`Original - ${o}`); let l = o.toLowerCase(); l = l.trim(); const n = l.length; let s = ""; for (e = 0; e <= n; e += 1)if (" " === l[e]) { if (" " === l[e + 1]) continue; s += l.substring(e, e + 1) } else s += l.substring(e, e + 1); return s = s.replaceAll(" ", "_"), console.log(`New - ${s}`), s } function i(o) { console.log(`Original - ${o}`); let l = o.toLowerCase(); l = l.trim(); const n = l.length; let s = ""; for (e = 0; e <= n; e += 1)" " === l[e] ? l = l.replace(l[e + 1], l[e + 1].toUpperCase()) : s += l.substring(e, e + 1); return console.log(`New - ${s}`), s } function g(o) { console.log(`Original - ${o}`); const e = o[0]; let l = o.slice(1); return l += e, console.log(`New - ${l}`), l } function a(o) { console.log(`Original - ${o}`); const l = o.split(" ").sort(((o, e) => e.length - o.length)); for (e = 0; e < l.length; e += 1)l[e] = `#${l[e]}`; return l.splice(3, l.length), console.log(l), l } function p(o) { console.log(`Original - ${o}`); const e = o.trim(); return "" === e || (console.log(`New - ${e}`), e) } console.log("Challenge 1- capitalize()"), l("ayush jain"), console.log("------"), console.log("Challenge 2- allCaps()"), n("ayush jain"), console.log("------"), console.log("Challenge 3- capitalizeWords()"), s("do all the things"), console.log("------"), console.log("Challenge 4- removeExtraSpaces()"), t("   Hello    world!   "), console.log("------"), console.log("Challenge 5- kebobCase()"), r("   Hello    world    "), console.log("------"), console.log("Challenge 6- snakeCase()"), c("   Hello    world   "), console.log("------"), console.log("Challenge 7- camelCase()"), i("   Hello world "), console.log("------"), console.log("Challenge 8- shift()"), g("Hello world"), console.log("------"), console.log("Challenge 9- makeHashTag()"), a("Amazing bongo drums for sale"), console.log("------"), console.log("Challenge 10- isEmpty()"), p("  "), console.log("------"), o.exports.capitalize = l, o.exports.allCaps = n, o.exports.capitalizeWords = s, o.exports.removeExtraSpaces = t, o.exports.kebobCase = r, o.exports.snakeCase = c, o.exports.camelCase = i, o.exports.shift = g, o.exports.makeHashTag = a, o.exports.isEmpty = p } }, e = {}, function l(n) { var s = e[n]; if (void 0 !== s) return s.exports; var t = e[n] = { exports: {} }; return o[n](t, t.exports, l), t.exports }(10); var o, e }));