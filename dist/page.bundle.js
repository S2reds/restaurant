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
    btn.classList.add('btn')
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

module.exports = __webpack_require__.p + "55620832489b05048dee.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNGO0FBQ2M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLEtBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VvdWwgZnJvbSAnLi9zZW91bC5wbmcnO1xyXG5pbXBvcnQgUmVzdCBmcm9tICcuL3Jlc3QucG5nJztcclxuaW1wb3J0IEtvcmVhIGZyb20gJy4va29yZWFfdHJhbnNwYXJlbnQucG5nJztcclxuXHJcbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbmF2aG9sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBuYXZob2xkLmNsYXNzTGlzdC5hZGQoJ25hdmhvbGQnKVxyXG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJylcclxuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdNZW51J1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXHJcbiAgICBjb25zdCBidG5ob2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ0bmhvbGQuY2xhc3NMaXN0LmFkZCgnYnRuaG9sZCcpXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gU2VvdWw7XHJcbiAgICBuYXZob2xkLmFwcGVuZENoaWxkKGltZylcclxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZob2xkKVxyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXHJcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCduYXYnKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICBpZiAoaSA9PT0gMCkgIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiPkhvbWU8L2E+YFxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT09IDEpIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiPk1lbnU8L2E+YFxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT09IDIpIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+YFxyXG4gICAgICAgXHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpXHJcbiAgICB9XHJcbiAgICBjb25zdCBpbWcxID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcxLmNsYXNzTGlzdC5hZGQoJ2JhY2tpbWcnKVxyXG4gICAgaW1nMS5zcmMgPSBSZXN0O1xyXG4gICAgaDEudGV4dENvbnRlbnQgPSAnU2VvdWwgQmlzdHJvJ1xyXG4gICAgcC50ZXh0Q29udGVudCA9ICdDaGVjayBvdXQgb3VyIE1lbnUhJ1xyXG4gICAgYnRuaG9sZC5hcHBlbmRDaGlsZChwKVxyXG4gICAgYnRuaG9sZC5hcHBlbmRDaGlsZChidG4pXHJcbiAgICBoZXJvLmFwcGVuZENoaWxkKGgxKVxyXG4gICAgaGVyby5hcHBlbmRDaGlsZChidG5ob2xkKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWcxKVxyXG4gICAgbmF2aG9sZC5hcHBlbmRDaGlsZCh1bClcclxuICAgIGNvbnN0IGtybmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAga3JuaW1nLnNyYyA9IEtvcmVhO1xyXG4gICAga3JuaW1nLmNsYXNzTGlzdC5hZGQoJ2ZsYWcnKVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGtybmltZylcclxuICAgIGRpdi5hcHBlbmRDaGlsZChuYXYpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVybylcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgY29uc3QgY3VydmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY3VydmUuY2xhc3NMaXN0LmFkZCgnY3VydmUnKVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGN1cnZlKVxyXG5cclxuICAgIC8vIGZvb3RlclxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgS3lsZSBQYXJrIEVzdC4gJHtkYXRlfWBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7cGFnZUxvYWR9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9