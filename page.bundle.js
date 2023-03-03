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
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const btn = document.createElement("button");
  const hero = document.createElement("div");
  const navhold = document.createElement("div");
  navhold.classList.add("navhold");
  hero.classList.add("hero");
  btn.textContent = "Menu";
  btn.classList.add("btn");
  const btnhold = document.createElement("div");
  btnhold.classList.add("btnhold");
  const content = document.querySelector("body");
  content.classList.add("Home");
  div.classList.add("content");
  const nav = document.createElement("div");
  nav.classList.add("navbar");
  const img = document.createElement("img");
  img.src = _seoul_png__WEBPACK_IMPORTED_MODULE_0__;
  navhold.appendChild(img);
  nav.appendChild(navhold);
  const ul = document.createElement("ul");
  ul.classList.add("nav");
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    if (i === 0) li.innerHTML = `<a href="#">Home</a>`;
    else if (i === 1) li.innerHTML = `<a href="#">Menu</a>`;
    else if (i === 2) li.innerHTML = `<a href="#">Contact</a>`;

    ul.appendChild(li);
  }
  const img1 = new Image();
  img1.classList.add("backimg");
  img1.src = _rest_png__WEBPACK_IMPORTED_MODULE_1__;
  h1.textContent = "Seoul Bistro";
  p.textContent = "Check out our Menu!";
  btnhold.appendChild(p);
  btnhold.appendChild(btn);
  hero.appendChild(h1);
  hero.appendChild(btnhold);
  content.appendChild(img1);
  navhold.appendChild(ul);
  const krnimg = new Image();
  krnimg.src = _korea_transparent_png__WEBPACK_IMPORTED_MODULE_2__;
  krnimg.classList.add("flag");
  nav.appendChild(krnimg);
  content.appendChild(nav);
  div.appendChild(hero);
  content.appendChild(div);
  const curve = document.createElement("div");
  curve.classList.add("curve");
  div.appendChild(curve);

  // footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const date = new Date().getFullYear();
  footer.innerHTML = `Kyle Park Est. ${date} <a href='https://www.instagram.com/istarry/'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg></a>`;
  content.appendChild(footer);
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

module.exports = __webpack_require__.p + "36c639340324b6066489.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNGO0FBQ2M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdUNBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsTUFBTTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZW91bCBmcm9tIFwiLi9zZW91bC5wbmdcIjtcclxuaW1wb3J0IFJlc3QgZnJvbSBcIi4vcmVzdC5wbmdcIjtcclxuaW1wb3J0IEtvcmVhIGZyb20gXCIuL2tvcmVhX3RyYW5zcGFyZW50LnBuZ1wiO1xyXG5cclxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYXZob2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYXZob2xkLmNsYXNzTGlzdC5hZGQoXCJuYXZob2xkXCIpO1xyXG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XHJcbiAgYnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XHJcbiAgY29uc3QgYnRuaG9sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnRuaG9sZC5jbGFzc0xpc3QuYWRkKFwiYnRuaG9sZFwiKTtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiSG9tZVwiKTtcclxuICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGltZy5zcmMgPSBTZW91bDtcclxuICBuYXZob2xkLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgbmF2LmFwcGVuZENoaWxkKG5hdmhvbGQpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIHVsLmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgaWYgKGkgPT09IDApIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiPkhvbWU8L2E+YDtcclxuICAgIGVsc2UgaWYgKGkgPT09IDEpIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiPk1lbnU8L2E+YDtcclxuICAgIGVsc2UgaWYgKGkgPT09IDIpIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+YDtcclxuXHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgfVxyXG4gIGNvbnN0IGltZzEgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWcxLmNsYXNzTGlzdC5hZGQoXCJiYWNraW1nXCIpO1xyXG4gIGltZzEuc3JjID0gUmVzdDtcclxuICBoMS50ZXh0Q29udGVudCA9IFwiU2VvdWwgQmlzdHJvXCI7XHJcbiAgcC50ZXh0Q29udGVudCA9IFwiQ2hlY2sgb3V0IG91ciBNZW51IVwiO1xyXG4gIGJ0bmhvbGQuYXBwZW5kQ2hpbGQocCk7XHJcbiAgYnRuaG9sZC5hcHBlbmRDaGlsZChidG4pO1xyXG4gIGhlcm8uYXBwZW5kQ2hpbGQoaDEpO1xyXG4gIGhlcm8uYXBwZW5kQ2hpbGQoYnRuaG9sZCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbWcxKTtcclxuICBuYXZob2xkLmFwcGVuZENoaWxkKHVsKTtcclxuICBjb25zdCBrcm5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBrcm5pbWcuc3JjID0gS29yZWE7XHJcbiAga3JuaW1nLmNsYXNzTGlzdC5hZGQoXCJmbGFnXCIpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChrcm5pbWcpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcclxuICBkaXYuYXBwZW5kQ2hpbGQoaGVybyk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIGNvbnN0IGN1cnZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjdXJ2ZS5jbGFzc0xpc3QuYWRkKFwiY3VydmVcIik7XHJcbiAgZGl2LmFwcGVuZENoaWxkKGN1cnZlKTtcclxuXHJcbiAgLy8gZm9vdGVyXHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgS3lsZSBQYXJrIEVzdC4gJHtkYXRlfSA8YSBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2lzdGFycnkvJz48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1pbnN0YWdyYW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICA8cGF0aCBkPVwiTTggMEM1LjgyOSAwIDUuNTU2LjAxIDQuNzAzLjA0OCAzLjg1LjA4OCAzLjI2OS4yMjIgMi43Ni40MmEzLjkxNyAzLjkxNyAwIDAgMC0xLjQxNy45MjNBMy45MjcgMy45MjcgMCAwIDAgLjQyIDIuNzZDLjIyMiAzLjI2OC4wODcgMy44NS4wNDggNC43LjAxIDUuNTU1IDAgNS44MjcgMCA4LjAwMWMwIDIuMTcyLjAxIDIuNDQ0LjA0OCAzLjI5Ny4wNC44NTIuMTc0IDEuNDMzLjM3MiAxLjk0Mi4yMDUuNTI2LjQ3OC45NzIuOTIzIDEuNDE3LjQ0NC40NDUuODkuNzE5IDEuNDE2LjkyMy41MS4xOTggMS4wOS4zMzMgMS45NDIuMzcyQzUuNTU1IDE1Ljk5IDUuODI3IDE2IDggMTZzMi40NDQtLjAxIDMuMjk4LS4wNDhjLjg1MS0uMDQgMS40MzQtLjE3NCAxLjk0My0uMzcyYTMuOTE2IDMuOTE2IDAgMCAwIDEuNDE2LS45MjNjLjQ0NS0uNDQ1LjcxOC0uODkxLjkyMy0xLjQxNy4xOTctLjUwOS4zMzItMS4wOS4zNzItMS45NDJDMTUuOTkgMTAuNDQ1IDE2IDEwLjE3MyAxNiA4cy0uMDEtMi40NDUtLjA0OC0zLjI5OWMtLjA0LS44NTEtLjE3NS0xLjQzMy0uMzcyLTEuOTQxYTMuOTI2IDMuOTI2IDAgMCAwLS45MjMtMS40MTdBMy45MTEgMy45MTEgMCAwIDAgMTMuMjQuNDJjLS41MS0uMTk4LTEuMDkyLS4zMzMtMS45NDMtLjM3MkMxMC40NDMuMDEgMTAuMTcyIDAgNy45OTggMGguMDAzem0tLjcxNyAxLjQ0MmguNzE4YzIuMTM2IDAgMi4zODkuMDA3IDMuMjMyLjA0Ni43OC4wMzUgMS4yMDQuMTY2IDEuNDg2LjI3NS4zNzMuMTQ1LjY0LjMxOS45Mi41OTkuMjguMjguNDUzLjU0Ni41OTguOTIuMTEuMjgxLjI0LjcwNS4yNzUgMS40ODUuMDM5Ljg0My4wNDcgMS4wOTYuMDQ3IDMuMjMxcy0uMDA4IDIuMzg5LS4wNDcgMy4yMzJjLS4wMzUuNzgtLjE2NiAxLjIwMy0uMjc1IDEuNDg1YTIuNDcgMi40NyAwIDAgMS0uNTk5LjkxOWMtLjI4LjI4LS41NDYuNDUzLS45Mi41OTgtLjI4LjExLS43MDQuMjQtMS40ODUuMjc2LS44NDMuMDM4LTEuMDk2LjA0Ny0zLjIzMi4wNDdzLTIuMzktLjAwOS0zLjIzMy0uMDQ3Yy0uNzgtLjAzNi0xLjIwMy0uMTY2LTEuNDg1LS4yNzZhMi40NzggMi40NzggMCAwIDEtLjkyLS41OTggMi40OCAyLjQ4IDAgMCAxLS42LS45MmMtLjEwOS0uMjgxLS4yNC0uNzA1LS4yNzUtMS40ODUtLjAzOC0uODQzLS4wNDYtMS4wOTYtLjA0Ni0zLjIzMyAwLTIuMTM2LjAwOC0yLjM4OC4wNDYtMy4yMzEuMDM2LS43OC4xNjYtMS4yMDQuMjc2LTEuNDg2LjE0NS0uMzczLjMxOS0uNjQuNTk5LS45Mi4yOC0uMjguNTQ2LS40NTMuOTItLjU5OC4yODItLjExLjcwNS0uMjQgMS40ODUtLjI3Ni43MzgtLjAzNCAxLjAyNC0uMDQ0IDIuNTE1LS4wNDV2LjAwMnptNC45ODggMS4zMjhhLjk2Ljk2IDAgMSAwIDAgMS45Mi45Ni45NiAwIDAgMCAwLTEuOTJ6bS00LjI3IDEuMTIyYTQuMTA5IDQuMTA5IDAgMSAwIDAgOC4yMTcgNC4xMDkgNC4xMDkgMCAwIDAgMC04LjIxN3ptMCAxLjQ0MWEyLjY2NyAyLjY2NyAwIDEgMSAwIDUuMzM0IDIuNjY3IDIuNjY3IDAgMCAxIDAtNS4zMzR6XCIvPlxyXG4gIDwvc3ZnPjwvYT5gO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcGFnZUxvYWQgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9