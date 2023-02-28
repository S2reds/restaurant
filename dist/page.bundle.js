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
z


function pageLoad() {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const btn = document.createElement('button')
    btn.textContent = 'Menu'
    const btnhold = document.createElement('div')
    btnhold.classList.add('btnhold')
    const content = document.querySelector('body')
    div.classList.add('content')
    const nav = document.createElement('div')
    const img = document.createElement('img');
    img.src = _seoul_png__WEBPACK_IMPORTED_MODULE_0__;
    nav.appendChild(img)
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
    content.appendChild(img1)
    nav.appendChild(ul)
    div.appendChild(nav)
    div.appendChild(h1)
    div.appendChild(btnhold)
    content.appendChild(div)
}





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0Y7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUNBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZW91bCBmcm9tICcuL3Nlb3VsLnBuZyc7XG5pbXBvcnQgUmVzdCBmcm9tICcuL3Jlc3QucG5nJztcblxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidG4udGV4dENvbnRlbnQgPSAnTWVudSdcbiAgICBjb25zdCBidG5ob2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5ob2xkLmNsYXNzTGlzdC5hZGQoJ2J0bmhvbGQnKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gU2VvdWw7XG4gICAgbmF2LmFwcGVuZENoaWxkKGltZylcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBpZiAoaSA9PT0gMCkgIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiPkhvbWU8L2E+YFxuICAgICAgICBlbHNlIGlmIChpID09PSAxKSBsaS5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiNcIj5NZW51PC9hPmBcbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gMikgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5gXG4gICAgICAgXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgIH1cbiAgICBjb25zdCBpbWcxID0gbmV3IEltYWdlKCk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdiYWNraW1nJylcbiAgICBpbWcxLnNyYyA9IFJlc3Q7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnU2VvdWwgQmlzdHJvJ1xuICAgIHAudGV4dENvbnRlbnQgPSAnQ2hlY2sgb3V0IG91ciBNZW51ISdcbiAgICBidG5ob2xkLmFwcGVuZENoaWxkKHApXG4gICAgYnRuaG9sZC5hcHBlbmRDaGlsZChidG4pXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWcxKVxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bClcbiAgICBkaXYuYXBwZW5kQ2hpbGQobmF2KVxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuaG9sZClcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdilcbn1cblxuXG5cbmV4cG9ydCB7cGFnZUxvYWR9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9