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
    footer.innerHTML = `Kyle Park Est. ${date} <a href='https://www.instagram.com/istarry/'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg></a>`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNGO0FBQ2M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlb3VsIGZyb20gJy4vc2VvdWwucG5nJztcclxuaW1wb3J0IFJlc3QgZnJvbSAnLi9yZXN0LnBuZyc7XHJcbmltcG9ydCBLb3JlYSBmcm9tICcuL2tvcmVhX3RyYW5zcGFyZW50LnBuZyc7XHJcblxyXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG5hdmhvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbmF2aG9sZC5jbGFzc0xpc3QuYWRkKCduYXZob2xkJylcclxuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpXHJcbiAgICBidG4udGV4dENvbnRlbnQgPSAnTWVudSdcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxyXG4gICAgY29uc3QgYnRuaG9sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBidG5ob2xkLmNsYXNzTGlzdC5hZGQoJ2J0bmhvbGQnKVxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IFNlb3VsO1xyXG4gICAgbmF2aG9sZC5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2aG9sZClcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxyXG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnbmF2JylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICAgICAgaWYgKGkgPT09IDApICBsaS5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiNcIj5Ib21lPC9hPmBcclxuICAgICAgICBlbHNlIGlmIChpID09PSAxKSBsaS5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiNcIj5NZW51PC9hPmBcclxuICAgICAgICBlbHNlIGlmIChpID09PSAyKSBsaS5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPmBcclxuICAgICAgIFxyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW1nMSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdiYWNraW1nJylcclxuICAgIGltZzEuc3JjID0gUmVzdDtcclxuICAgIGgxLnRleHRDb250ZW50ID0gJ1Nlb3VsIEJpc3RybydcclxuICAgIHAudGV4dENvbnRlbnQgPSAnQ2hlY2sgb3V0IG91ciBNZW51ISdcclxuICAgIGJ0bmhvbGQuYXBwZW5kQ2hpbGQocClcclxuICAgIGJ0bmhvbGQuYXBwZW5kQ2hpbGQoYnRuKVxyXG4gICAgaGVyby5hcHBlbmRDaGlsZChoMSlcclxuICAgIGhlcm8uYXBwZW5kQ2hpbGQoYnRuaG9sZClcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nMSlcclxuICAgIG5hdmhvbGQuYXBwZW5kQ2hpbGQodWwpXHJcbiAgICBjb25zdCBrcm5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGtybmltZy5zcmMgPSBLb3JlYTtcclxuICAgIGtybmltZy5jbGFzc0xpc3QuYWRkKCdmbGFnJylcclxuICAgIG5hdi5hcHBlbmRDaGlsZChrcm5pbWcpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobmF2KVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlcm8pXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdilcclxuICAgIGNvbnN0IGN1cnZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGN1cnZlLmNsYXNzTGlzdC5hZGQoJ2N1cnZlJylcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjdXJ2ZSlcclxuXHJcbiAgICAvLyBmb290ZXJcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYEt5bGUgUGFyayBFc3QuICR7ZGF0ZX0gPGEgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pc3RhcnJ5Lyc+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktaW5zdGFncmFtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgPHBhdGggZD1cIk04IDBDNS44MjkgMCA1LjU1Ni4wMSA0LjcwMy4wNDggMy44NS4wODggMy4yNjkuMjIyIDIuNzYuNDJhMy45MTcgMy45MTcgMCAwIDAtMS40MTcuOTIzQTMuOTI3IDMuOTI3IDAgMCAwIC40MiAyLjc2Qy4yMjIgMy4yNjguMDg3IDMuODUuMDQ4IDQuNy4wMSA1LjU1NSAwIDUuODI3IDAgOC4wMDFjMCAyLjE3Mi4wMSAyLjQ0NC4wNDggMy4yOTcuMDQuODUyLjE3NCAxLjQzMy4zNzIgMS45NDIuMjA1LjUyNi40NzguOTcyLjkyMyAxLjQxNy40NDQuNDQ1Ljg5LjcxOSAxLjQxNi45MjMuNTEuMTk4IDEuMDkuMzMzIDEuOTQyLjM3MkM1LjU1NSAxNS45OSA1LjgyNyAxNiA4IDE2czIuNDQ0LS4wMSAzLjI5OC0uMDQ4Yy44NTEtLjA0IDEuNDM0LS4xNzQgMS45NDMtLjM3MmEzLjkxNiAzLjkxNiAwIDAgMCAxLjQxNi0uOTIzYy40NDUtLjQ0NS43MTgtLjg5MS45MjMtMS40MTcuMTk3LS41MDkuMzMyLTEuMDkuMzcyLTEuOTQyQzE1Ljk5IDEwLjQ0NSAxNiAxMC4xNzMgMTYgOHMtLjAxLTIuNDQ1LS4wNDgtMy4yOTljLS4wNC0uODUxLS4xNzUtMS40MzMtLjM3Mi0xLjk0MWEzLjkyNiAzLjkyNiAwIDAgMC0uOTIzLTEuNDE3QTMuOTExIDMuOTExIDAgMCAwIDEzLjI0LjQyYy0uNTEtLjE5OC0xLjA5Mi0uMzMzLTEuOTQzLS4zNzJDMTAuNDQzLjAxIDEwLjE3MiAwIDcuOTk4IDBoLjAwM3ptLS43MTcgMS40NDJoLjcxOGMyLjEzNiAwIDIuMzg5LjAwNyAzLjIzMi4wNDYuNzguMDM1IDEuMjA0LjE2NiAxLjQ4Ni4yNzUuMzczLjE0NS42NC4zMTkuOTIuNTk5LjI4LjI4LjQ1My41NDYuNTk4LjkyLjExLjI4MS4yNC43MDUuMjc1IDEuNDg1LjAzOS44NDMuMDQ3IDEuMDk2LjA0NyAzLjIzMXMtLjAwOCAyLjM4OS0uMDQ3IDMuMjMyYy0uMDM1Ljc4LS4xNjYgMS4yMDMtLjI3NSAxLjQ4NWEyLjQ3IDIuNDcgMCAwIDEtLjU5OS45MTljLS4yOC4yOC0uNTQ2LjQ1My0uOTIuNTk4LS4yOC4xMS0uNzA0LjI0LTEuNDg1LjI3Ni0uODQzLjAzOC0xLjA5Ni4wNDctMy4yMzIuMDQ3cy0yLjM5LS4wMDktMy4yMzMtLjA0N2MtLjc4LS4wMzYtMS4yMDMtLjE2Ni0xLjQ4NS0uMjc2YTIuNDc4IDIuNDc4IDAgMCAxLS45Mi0uNTk4IDIuNDggMi40OCAwIDAgMS0uNi0uOTJjLS4xMDktLjI4MS0uMjQtLjcwNS0uMjc1LTEuNDg1LS4wMzgtLjg0My0uMDQ2LTEuMDk2LS4wNDYtMy4yMzMgMC0yLjEzNi4wMDgtMi4zODguMDQ2LTMuMjMxLjAzNi0uNzguMTY2LTEuMjA0LjI3Ni0xLjQ4Ni4xNDUtLjM3My4zMTktLjY0LjU5OS0uOTIuMjgtLjI4LjU0Ni0uNDUzLjkyLS41OTguMjgyLS4xMS43MDUtLjI0IDEuNDg1LS4yNzYuNzM4LS4wMzQgMS4wMjQtLjA0NCAyLjUxNS0uMDQ1di4wMDJ6bTQuOTg4IDEuMzI4YS45Ni45NiAwIDEgMCAwIDEuOTIuOTYuOTYgMCAwIDAgMC0xLjkyem0tNC4yNyAxLjEyMmE0LjEwOSA0LjEwOSAwIDEgMCAwIDguMjE3IDQuMTA5IDQuMTA5IDAgMCAwIDAtOC4yMTd6bTAgMS40NDFhMi42NjcgMi42NjcgMCAxIDEgMCA1LjMzNCAyLjY2NyAyLjY2NyAwIDAgMSAwLTUuMzM0elwiLz5cclxuICA8L3N2Zz48L2E+YFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtwYWdlTG9hZH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=