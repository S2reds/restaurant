"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["page"],{

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _seoul_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seoul.png */ "./src/seoul.png");
/* harmony import */ var _rest_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.png */ "./src/rest.png");
/* harmony import */ var _korea_transparent_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./korea_transparent.png */ "./src/korea_transparent.png");




function pageLoad() {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const btn = document.createElement('button')
    const hero = document.createElement('div')
    const navhold = document.createElement('div')
    navhold.classList.add('navhold')
    hero.classList.add('hero')
    btn.textContent = 'Menu'
    const btnhold = document.createElement('div')
    btnhold.classList.add('btnhold')
    const content = document.querySelector('body')
    div.classList.add('content')
    const nav = document.createElement('div')
    const img = document.createElement('img');
    img.src = _seoul_png__WEBPACK_IMPORTED_MODULE_0__;
    navhold.appendChild(img)
    nav.appendChild(navhold)
    const ul = document.createElement('ul')
    ul.classList.add('nav')
    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li')
        if (i === 0)  li.innerHTML = `<a href="#">Home</a>`
        else if (i === 1) li.innerHTML = `<a href="#">Menu</a>`
        else if (i === 2) li.innerHTML = `<a href="#">Contact</a>`
       
        ul.appendChild(li)
    }
    const img1 = new Image();
    img1.classList.add('backimg')
    img1.src = _rest_png__WEBPACK_IMPORTED_MODULE_1__;
    h1.textContent = 'Seoul Bistro'
    p.textContent = 'Check out our Menu!'
    btnhold.appendChild(p)
    btnhold.appendChild(btn)
    hero.appendChild(h1)
    hero.appendChild(btnhold)
    content.appendChild(img1)
    navhold.appendChild(ul)
    const krnimg = new Image();
    krnimg.src = _korea_transparent_png__WEBPACK_IMPORTED_MODULE_2__;
    krnimg.classList.add('flag')
    nav.appendChild(krnimg)
    div.appendChild(nav)
    div.appendChild(hero)
    content.appendChild(div)
    const curve = document.createElement('div')
    curve.classList.add('curve')
    div.appendChild(curve)

    // footer
    const footer = document.createElement('div')
    footer.classList.add('footer')
    const date = new Date().getFullYear();
    footer.innerHTML = `Kyle Park Est. ${date}`
    content.appendChild(footer)
}





/***/ }),

/***/ "./src/korea_transparent.png":
/*!***********************************!*\
  !*** ./src/korea_transparent.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df95b809fb076ba3fff3.png";

/***/ }),

/***/ "./src/rest.png":
/*!**********************!*\
  !*** ./src/rest.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f3e1f89647eb4139720.png";

/***/ }),

/***/ "./src/seoul.png":
/*!***********************!*\
  !*** ./src/seoul.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "856c1661ee5091b83ba0.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNGO0FBQ2M7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsS0FBSztBQUM5QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZW91bCBmcm9tICcuL3Nlb3VsLnBuZyc7XG5pbXBvcnQgUmVzdCBmcm9tICcuL3Jlc3QucG5nJztcbmltcG9ydCBLb3JlYSBmcm9tICcuL2tvcmVhX3RyYW5zcGFyZW50LnBuZyc7XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbmF2aG9sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmF2aG9sZC5jbGFzc0xpc3QuYWRkKCduYXZob2xkJylcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKVxuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdNZW51J1xuICAgIGNvbnN0IGJ0bmhvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bmhvbGQuY2xhc3NMaXN0LmFkZCgnYnRuaG9sZCcpXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBTZW91bDtcbiAgICBuYXZob2xkLmFwcGVuZENoaWxkKGltZylcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2aG9sZClcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBpZiAoaSA9PT0gMCkgIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiPkhvbWU8L2E+YFxuICAgICAgICBlbHNlIGlmIChpID09PSAxKSBsaS5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiNcIj5NZW51PC9hPmBcbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gMikgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5gXG4gICAgICAgXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgIH1cbiAgICBjb25zdCBpbWcxID0gbmV3IEltYWdlKCk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdiYWNraW1nJylcbiAgICBpbWcxLnNyYyA9IFJlc3Q7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnU2VvdWwgQmlzdHJvJ1xuICAgIHAudGV4dENvbnRlbnQgPSAnQ2hlY2sgb3V0IG91ciBNZW51ISdcbiAgICBidG5ob2xkLmFwcGVuZENoaWxkKHApXG4gICAgYnRuaG9sZC5hcHBlbmRDaGlsZChidG4pXG4gICAgaGVyby5hcHBlbmRDaGlsZChoMSlcbiAgICBoZXJvLmFwcGVuZENoaWxkKGJ0bmhvbGQpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWcxKVxuICAgIG5hdmhvbGQuYXBwZW5kQ2hpbGQodWwpXG4gICAgY29uc3Qga3JuaW1nID0gbmV3IEltYWdlKCk7XG4gICAga3JuaW1nLnNyYyA9IEtvcmVhO1xuICAgIGtybmltZy5jbGFzc0xpc3QuYWRkKCdmbGFnJylcbiAgICBuYXYuYXBwZW5kQ2hpbGQoa3JuaW1nKVxuICAgIGRpdi5hcHBlbmRDaGlsZChuYXYpXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlcm8pXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpXG4gICAgY29uc3QgY3VydmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGN1cnZlLmNsYXNzTGlzdC5hZGQoJ2N1cnZlJylcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3VydmUpXG5cbiAgICAvLyBmb290ZXJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBLeWxlIFBhcmsgRXN0LiAke2RhdGV9YFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxufVxuXG5cblxuZXhwb3J0IHtwYWdlTG9hZH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=