(function (t) { function e (e) { for (var s, r, o = e[0], u = e[1], c = e[2], p = 0, d = []; p < o.length; p++)r = o[p], Object.prototype.hasOwnProperty.call(n, r) && n[r] && d.push(n[r][0]), n[r] = 0; for (s in u)Object.prototype.hasOwnProperty.call(u, s) && (t[s] = u[s]); l && l(e); while (d.length)d.shift()(); return a.push.apply(a, c || []), i() } function i () { for (var t, e = 0; e < a.length; e++) { for (var i = a[e], s = !0, o = 1; o < i.length; o++) { var u = i[o]; n[u] !== 0 && (s = !1) }s && (a.splice(e--, 1), t = r(r.s = i[0])) } return t } var s = {}; var n = { app: 0 }; var a = []; function r (e) { if (s[e]) return s[e].exports; var i = s[e] = { i: e, l: !1, exports: {} }; return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports }r.m = t, r.c = s, r.d = function (t, e, i) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i }) }, r.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }) }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; var i = Object.create(null); if (r.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (var s in t)r.d(i, s, function (e) { return t[e] }.bind(null, s)); return i }, r.n = function (t) { var e = t && t.__esModule ? function () { return t['default'] } : function () { return t }; return r.d(e, 'a', e), e }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = '/test.antida/'; var o = window['webpackJsonp'] = window['webpackJsonp'] || []; var u = o.push.bind(o); o.push = e, o = o.slice(); for (var c = 0; c < o.length; c++)e(o[c]); var l = u; a.push([0, 'chunk-vendors']), i() })({ 0: function (t, e, i) { t.exports = i('56d7') }, '56d7': function (t, e, i) { 'use strict'; i.r(e); i('cadf'), i('551c'), i('f751'), i('097d'); var s = i('2b0e'); var n = function () { var t = this; var e = t.$createElement; t._self._c; return t._m(0) }; var a = [function () { var t = this; var e = t.$createElement; var i = t._self._c || e; return i('div', { attrs: { id: 'app' } }, [i('header', { staticClass: 'flex-container' }, [i('h1', [t._v('Илья Валякин')]), i('img', { staticClass: 'avatar', attrs: { src: 'img/avatar.jpg', alt: 'Моё фото' } }), i('nav', [i('li', [i('a', { attrs: { href: '#photo' } }, [t._v('Фотографии')])]), i('li', [i('a', { attrs: { href: '#about-myself' } }, [t._v('О себе')])]), i('li', [i('a', { attrs: { href: '#skill' } }, [t._v('Опыт')])]), i('li', [i('a', { attrs: { href: '#education' } }, [t._v('Образование')])])])]), i('div', { staticClass: 'window' }, [i('div', { staticClass: 'container-window' }, [i('h2', { attrs: { id: 'photo' } }, [t._v('Фотографии')]), i('hr', { staticClass: 'after' }), i('div', { staticClass: 'container' }, [i('div', { staticClass: 'photo-container' }, [i('img', { staticClass: 'photo', attrs: { src: 'img/photo-1.jpg' } })]), i('div', { staticClass: 'photo-container' }, [i('img', { staticClass: 'photo', attrs: { src: 'img/photo-2.png' } })]), i('div', { staticClass: 'photo-container' }, [i('img', { staticClass: 'photo', attrs: { src: 'img/photo-3.jpg' } })]), i('div', { staticClass: 'photo-container' }, [i('img', { staticClass: 'photo', attrs: { src: 'img/photo-4.jpg' } })])]), i('hr', { staticClass: 'before' }), i('h2', { attrs: { id: 'about-myself' } }, [t._v('О себе')]), i('hr', { staticClass: 'after' }), i('body', { staticClass: 'container' }, [i('p', [t._v('\n\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat porttitor eros, sit amet cursus dui. \n\t\t\tEtiam eros purus, venenatis vel ultricies nec, eleifend gravida nisl. Suspendisse dapibus urna sit amet lacus feugiat cursus. \n\t\t\tCurabitur turpis sem, ultricies et felis ac, convallis dignissim nisi. Donec ac eros aliquam, tincidunt nisi vel, semper nunc. \n\t\t\tPellentesque non venenatis mi, quis sodales sem. Nullam volutpat lorem facilisis erat efficitur feugiat. \n\t\t\tSed venenatis, libero nec rutrum convallis, justo leo interdum justo, ac facilisis lorem magna quis felis. \n\t\t\tUt elementum nisl non orci scelerisque laoreet. Nullam nec quam lobortis, varius lorem vel, venenatis felis. \n\t\t\tMorbi tincidunt odio eget mauris congue, non dictum dolor hendrerit.\n\t\t')])]), i('hr', { staticClass: 'before' }), i('h2', { attrs: { id: 'skill' } }, [t._v('Опыт')]), i('hr', { staticClass: 'after' }), i('body', { staticClass: 'container' }, [i('p', [t._v('\n\t\t\t\tВ свободное время разрабатываю с друзьями пилотный проект чата, который включает в себя фронтенд на Vue.js и бэкенд на C#. \n\t\t\t\tЕсть опыт работы с HTML, CSS и JavaScript.'), i('br')]), i('p', [t._v('\n\t\t\t\tliquam in lectus pharetra, pharetra risus non, tempor leo. Integer rhoncus vitae ligula non commodo. \n\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue orci, suscipit vel quam et, dapibus malesuada mi. \n\t\t\t\tProin vitae urna leo. Sed facilisis enim sed tellus suscipit suscipit. Sed quis dui ipsum. \n\t\t\t\tMaecenas malesuada sollicitudin leo, in volutpat velit interdum vitae. Duis nunc leo, auctor in dui non, interdum faucibus nisi. \n\t\t\t\tDonec sapien leo, congue a est quis, congue dictum orci. Morbi consequat eros eget arcu semper, consectetur ultricies enim feugiat.\n\t\t\t\t Quisque neque metus, blandit sit amet lectus sit amet, molestie fringilla ipsum.\n\t\t\t\t')])]), i('hr', { staticClass: 'before' }), i('h2', { attrs: { id: 'education' } }, [t._v('Образование')]), i('hr', { staticClass: 'after' }), i('body', { staticClass: 'container' }, [i('p', [t._v('\n\t\t\t\tНа данный момент являюсь студентом ЮУрГУ, обучаюсь на факультете математики, механики и компьютерных технологий \n\t\t\t\tна кафедре прикладной математики и программирования на третьем курсе.'), i('br')]), i('p', [t._v('\n\t\t\t\tEtiam ornare justo vel ultricies dictum. Praesent leo nisl, maximus ut nibh nec, mattis tempor metus. \n\t\t\t\tEtiam hendrerit risus sem, et ornare nisi sagittis sed. Duis eu dignissim urna, at dapibus nisi. \n\t\t\t\tDuis a consectetur orci, eget malesuada turpis. Maecenas finibus porta eros, vitae ornare neque semper porttitor.\n\t\t\t\t Morbi varius dictum gravida. Duis egestas ultrices eros, eget convallis nibh auctor quis. \n\t\t\t\t Praesent justo quam, ornare et elementum ut, vestibulum non tortor. Aenean quis odio accumsan, dictum sapien nec, placerat leo. \n\t\t\t\t Mauris quis sapien sit amet mi volutpat imperdiet eget nec nisi. Donec eget porta metus, eget maximus risus.\n\t\t\t\t')])])])])]) }]; var r = { data: function () { return {} } }; var o = r; var u = (i('9d14'), i('2877')); var c = Object(u['a'])(o, n, a, !1, null, null, null); var l = c.exports; s['a'].config.productionTip = !1, new s['a']({ render: function (t) { return t(l) } }).$mount('#app') }, '96c3': function (t, e, i) {}, '9d14': function (t, e, i) { 'use strict'; var s = i('96c3'); var n = i.n(s); n.a } })
// # sourceMappingURL=app.82ce989c.js.map
