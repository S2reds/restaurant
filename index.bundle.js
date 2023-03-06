"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
  const content = document.querySelector(".content");
  const body = document.querySelector("body");
  const backimg = document.querySelector(".backimg");
  const createContact = () => {
    const textdiv = document.createElement("div");
    textdiv.classList.add("contactDiv");
    const iframe = document.createElement("div");
    iframe.classList.add("iframe");
    const text = document.createElement("p");
    text.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
  </svg> 949-949-9494 <br> 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg> 123 Green Street, Irvine, California`;
    iframe.innerHTML = `<iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=irvine%20spectrum+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"></iframe>`;

    textdiv.appendChild(text);
    textdiv.appendChild(iframe);
    body.appendChild(textdiv);
  };
  const removeOld = () => {
    content.innerHTML = "";
    backimg.style.display = "none";
    const ifContact = document.querySelectorAll(".contactDiv");
    if (ifContact > 0) {
    }
  };
  const removeSelf = () => {
    const contactDiv = document.querySelectorAll(".contactDiv");
    if (contactDiv.length > 0) contactDiv[0].remove();
  };
  return {
    createContact,
    removeOld,
    removeSelf,
  };
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.js */ "./src/page.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();

const content = document.querySelector(".content");
const nav = document.querySelector(".navhold");
const navTop = nav.offsetTop;
const menulist = document.querySelector(".menulist");

function eventListeners() {
  const body = document.querySelector("body");
  const menubtn = document.querySelector(".btn");
  const navlinks = document.querySelectorAll("a");
  navlinks.forEach((nav) => nav.addEventListener("click", navItems));
  menubtn.addEventListener("click", () => {
    const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage)();
    menu.clearOld();
    menu.newDiv();
    body.attributes[0].value = "Menu";
    for (let i in _menu_js__WEBPACK_IMPORTED_MODULE_2__.FOOD) {
      menu.newItem(_menu_js__WEBPACK_IMPORTED_MODULE_2__.FOOD[i]);
    }
    eventListeners();
  });
  window.addEventListener("scroll", stickyNav);
}

function stickyNav() {
  const nav = document.querySelector(".navhold");
  const nav1 = document.querySelector(".nav");
  if (window.scrollY > navTop) {
    // add class to make nav smaller
    nav.classList.add("smaller-nav");
    nav1.classList.add("smaller-nav");
  } else if (window.scrollY === 0) {
    // remove class to restore original size
    nav.classList.remove("smaller-nav");
    nav1.classList.remove("smaller-nav");
  }
}

function navItems(e) {
  const body = document.querySelector("body");
  if (e.target.textContent === "Home") {
    body.innerHTML = "";
    body.style.height = "100%";
    body.attributes[0].value = "Home";
    (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
  } else if (e.target.textContent === "Menu") {
    if (body.attributes[0].value === "Menu") {
      window.scroll(0, 0);
    } else {
      const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage)();
      menu.clearOld();
      menu.newDiv();
      for (let i in _menu_js__WEBPACK_IMPORTED_MODULE_2__.FOOD) {
        menu.newItem(_menu_js__WEBPACK_IMPORTED_MODULE_2__.FOOD[i]);
      }
      body.attributes[0].value = "Menu";
    }
  } else if (e.target.textContent === "Contact") {
    if (body.attributes[0].value === "Contact") window.scroll(0, 0);
    else {
      const contact = (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      contact.removeSelf();
      contact.removeOld();
      contact.createContact();
    }
    body.attributes[0].value = "Contact";
  }
  eventListeners();
}

eventListeners();


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FOOD": () => (/* binding */ FOOD),
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _Kimbap_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kimbap.jpg */ "./src/Kimbap.jpg");
/* harmony import */ var _gamja_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamja.jpg */ "./src/gamja.jpg");
/* harmony import */ var _bulgogi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulgogi.jpg */ "./src/bulgogi.jpg");
/* harmony import */ var _bibimbap_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bibimbap.jpg */ "./src/bibimbap.jpg");
/* harmony import */ var _galbi_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./galbi.jpg */ "./src/galbi.jpg");






const FOOD = [
    {
        'name': 'Kimbap',
        'desc': 'A sushi-like rice roll filled with vegetables and meat',
        'url': "./c147d43b1125e75c56ca.jpg"
    },
    {
        'name': 'Gamjatang',
        'desc': 'Gamjatang is soup made with pork neck bones and vegetables, a perfect meal for a cold day',
        'url': _gamja_jpg__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
        'name': 'Galbi',
        'desc': 'Galbi, also known as kalbi, is a Korean dish that consists of marinated beef short ribs that are grilled or broiled to perfection.',
        'url': _galbi_jpg__WEBPACK_IMPORTED_MODULE_4__,
    },
    {
        'name': 'Bibimbap',
        'desc': 'Bibimbap is a Korean rice dish that is topped with a variety of vegetables, meat (usually beef), and a fried egg.',
        'url': _bibimbap_jpg__WEBPACK_IMPORTED_MODULE_3__,
    },
    {
        'name': 'Bulgogi',
        'desc': 'Bulgogi is a popular Korean beef dish that is marinated in a mixture of soy sauce, sugar, garlic, and other spices, then grilled or pan-fried.',
        'url': _bulgogi_jpg__WEBPACK_IMPORTED_MODULE_2__,
    }
]


function menuPage() {
    const content = document.querySelector('.content')
    const hero = document.querySelector('.hero')
    const backimg = document.querySelector('.backimg')
    const div = document.createElement('div')

    const newDiv = () => {
        div.classList.add('menulist')
        content.appendChild(div)
    }
    const newItem = (obj) => {
        if (obj.name) {
            const newItem = document.createElement('div')
            const name = document.createElement('h3')
            const desc = document.createElement('p')
            const img = new Image();
            img.src = obj.url
            name.textContent = `${obj.name}`
            desc.textContent = `${obj.desc}`
            newItem.appendChild(name)
            newItem.appendChild(desc)
            newItem.appendChild(img)
            div.appendChild(newItem)
        }
    }
    const clearOld = () => {
        content.innerHTML = ''
        backimg.style.display = 'none'
    }
    return {
        newItem,
        clearOld,
        newDiv
    }
}



/***/ }),

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

  // footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const date = new Date().getFullYear();
  footer.innerHTML = `Kyle Park Est. ${date} <a href='https://www.instagram.com/istarry/'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg></a> <a href='https://www.github.com/S2reds/'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>` ;
  content.appendChild(footer);
}




/***/ }),

/***/ "./src/Kimbap.jpg":
/*!************************!*\
  !*** ./src/Kimbap.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c147d43b1125e75c56ca.jpg";

/***/ }),

/***/ "./src/bibimbap.jpg":
/*!**************************!*\
  !*** ./src/bibimbap.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66218df57f31cacc4910.jpg";

/***/ }),

/***/ "./src/bulgogi.jpg":
/*!*************************!*\
  !*** ./src/bulgogi.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "236ba187eefba8f85524.jpg";

/***/ }),

/***/ "./src/galbi.jpg":
/*!***********************!*\
  !*** ./src/galbi.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40cc2f245f917dca8c62.jpg";

/***/ }),

/***/ "./src/gamja.jpg":
/*!***********************!*\
  !*** ./src/gamja.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9991fdcdd4b6d8c600a7.jpg";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBjb25zdCBiYWNraW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNraW1nXCIpO1xyXG4gIGNvbnN0IGNyZWF0ZUNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRleHRkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3REaXZcIik7XHJcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWZyYW1lLmNsYXNzTGlzdC5hZGQoXCJpZnJhbWVcIik7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0ZXh0LmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS10ZWxlcGhvbmUtZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuODg1LjUxMWExLjc0NSAxLjc0NSAwIDAgMSAyLjYxLjE2M0w2LjI5IDIuOThjLjMyOS40MjMuNDQ1Ljk3NC4zMTUgMS40OTRsLS41NDcgMi4xOWEuNjc4LjY3OCAwIDAgMCAuMTc4LjY0M2wyLjQ1NyAyLjQ1N2EuNjc4LjY3OCAwIDAgMCAuNjQ0LjE3OGwyLjE4OS0uNTQ3YTEuNzQ1IDEuNzQ1IDAgMCAxIDEuNDk0LjMxNWwyLjMwNiAxLjc5NGMuODI5LjY0NS45MDUgMS44Ny4xNjMgMi42MTFsLTEuMDM0IDEuMDM0Yy0uNzQuNzQtMS44NDYgMS4wNjUtMi44NzcuNzAyYTE4LjYzNCAxOC42MzQgMCAwIDEtNy4wMS00LjQyIDE4LjYzNCAxOC42MzQgMCAwIDEtNC40Mi03LjAwOWMtLjM2Mi0xLjAzLS4wMzctMi4xMzcuNzAzLTIuODc3TDEuODg1LjUxMXpcIi8+XHJcbiAgPC9zdmc+IDk0OS05NDktOTQ5NCA8YnI+IFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWhvdXNlLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgPHBhdGggZD1cIk04LjcwNyAxLjVhMSAxIDAgMCAwLTEuNDE0IDBMLjY0NiA4LjE0NmEuNS41IDAgMCAwIC43MDguNzA4TDggMi4yMDdsNi42NDYgNi42NDdhLjUuNSAwIDAgMCAuNzA4LS43MDhMMTMgNS43OTNWMi41YS41LjUgMCAwIDAtLjUtLjVoLTFhLjUuNSAwIDAgMC0uNS41djEuMjkzTDguNzA3IDEuNVpcIi8+XHJcbiAgPHBhdGggZD1cIm04IDMuMjkzIDYgNlYxMy41YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtOUExLjUgMS41IDAgMCAxIDIgMTMuNVY5LjI5M2w2LTZaXCIvPlxyXG48L3N2Zz4gMTIzIEdyZWVuIFN0cmVldCwgSXJ2aW5lLCBDYWxpZm9ybmlhYDtcclxuICAgIGlmcmFtZS5pbm5lckhUTUwgPSBgPGlmcmFtZSBzY3JvbGxpbmc9XCJub1wiIG1hcmdpbmhlaWdodD1cIjBcIiBtYXJnaW53aWR0aD1cIjBcIiBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzP3dpZHRoPTEwMCUyNSZhbXA7aGVpZ2h0PTYwMCZhbXA7aGw9ZW4mYW1wO3E9aXJ2aW5lJTIwc3BlY3RydW0rKE15JTIwQnVzaW5lc3MlMjBOYW1lKSZhbXA7dD0mYW1wO3o9MTQmYW1wO2llPVVURjgmYW1wO2l3bG9jPUImYW1wO291dHB1dD1lbWJlZFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjYwMFwiIGZyYW1lYm9yZGVyPVwiMFwiPjwvaWZyYW1lPmA7XHJcblxyXG4gICAgdGV4dGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIHRleHRkaXYuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGV4dGRpdik7XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmVPbGQgPSAoKSA9PiB7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBiYWNraW1nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNvbnN0IGlmQ29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGFjdERpdlwiKTtcclxuICAgIGlmIChpZkNvbnRhY3QgPiAwKSB7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmVTZWxmID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGFjdERpdlwiKTtcclxuICAgIGlmIChjb250YWN0RGl2Lmxlbmd0aCA+IDApIGNvbnRhY3REaXZbMF0ucmVtb3ZlKCk7XHJcbiAgfTtcclxuICByZXR1cm4ge1xyXG4gICAgY3JlYXRlQ29udGFjdCxcclxuICAgIHJlbW92ZU9sZCxcclxuICAgIHJlbW92ZVNlbGYsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBwYWdlTG9hZCwgY3JlYXRlRGl2IH0gZnJvbSBcIi4vcGFnZS5qc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBtZW51UGFnZSwgRk9PRCB9IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xyXG5cclxucGFnZUxvYWQoKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aG9sZFwiKTtcclxuY29uc3QgbmF2VG9wID0gbmF2Lm9mZnNldFRvcDtcclxuY29uc3QgbWVudWxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVsaXN0XCIpO1xyXG5cclxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gIGNvbnN0IG1lbnVidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blwiKTtcclxuICBjb25zdCBuYXZsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xyXG4gIG5hdmxpbmtzLmZvckVhY2goKG5hdikgPT4gbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZJdGVtcykpO1xyXG4gIG1lbnVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnUgPSBtZW51UGFnZSgpO1xyXG4gICAgbWVudS5jbGVhck9sZCgpO1xyXG4gICAgbWVudS5uZXdEaXYoKTtcclxuICAgIGJvZHkuYXR0cmlidXRlc1swXS52YWx1ZSA9IFwiTWVudVwiO1xyXG4gICAgZm9yIChsZXQgaSBpbiBGT09EKSB7XHJcbiAgICAgIG1lbnUubmV3SXRlbShGT09EW2ldKTtcclxuICAgIH1cclxuICAgIGV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc3RpY2t5TmF2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RpY2t5TmF2KCkge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aG9sZFwiKTtcclxuICBjb25zdCBuYXYxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gbmF2VG9wKSB7XHJcbiAgICAvLyBhZGQgY2xhc3MgdG8gbWFrZSBuYXYgc21hbGxlclxyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJzbWFsbGVyLW5hdlwiKTtcclxuICAgIG5hdjEuY2xhc3NMaXN0LmFkZChcInNtYWxsZXItbmF2XCIpO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPT09IDApIHtcclxuICAgIC8vIHJlbW92ZSBjbGFzcyB0byByZXN0b3JlIG9yaWdpbmFsIHNpemVcclxuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic21hbGxlci1uYXZcIik7XHJcbiAgICBuYXYxLmNsYXNzTGlzdC5yZW1vdmUoXCJzbWFsbGVyLW5hdlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdkl0ZW1zKGUpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkhvbWVcIikge1xyXG4gICAgYm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgYm9keS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIGJvZHkuYXR0cmlidXRlc1swXS52YWx1ZSA9IFwiSG9tZVwiO1xyXG4gICAgcGFnZUxvYWQoKTtcclxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIk1lbnVcIikge1xyXG4gICAgaWYgKGJvZHkuYXR0cmlidXRlc1swXS52YWx1ZSA9PT0gXCJNZW51XCIpIHtcclxuICAgICAgd2luZG93LnNjcm9sbCgwLCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1lbnUgPSBtZW51UGFnZSgpO1xyXG4gICAgICBtZW51LmNsZWFyT2xkKCk7XHJcbiAgICAgIG1lbnUubmV3RGl2KCk7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gRk9PRCkge1xyXG4gICAgICAgIG1lbnUubmV3SXRlbShGT09EW2ldKTtcclxuICAgICAgfVxyXG4gICAgICBib2R5LmF0dHJpYnV0ZXNbMF0udmFsdWUgPSBcIk1lbnVcIjtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkNvbnRhY3RcIikge1xyXG4gICAgaWYgKGJvZHkuYXR0cmlidXRlc1swXS52YWx1ZSA9PT0gXCJDb250YWN0XCIpIHdpbmRvdy5zY3JvbGwoMCwgMCk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgY29udGFjdCA9IENvbnRhY3QoKTtcclxuICAgICAgY29udGFjdC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgIGNvbnRhY3QucmVtb3ZlT2xkKCk7XHJcbiAgICAgIGNvbnRhY3QuY3JlYXRlQ29udGFjdCgpO1xyXG4gICAgfVxyXG4gICAgYm9keS5hdHRyaWJ1dGVzWzBdLnZhbHVlID0gXCJDb250YWN0XCI7XHJcbiAgfVxyXG4gIGV2ZW50TGlzdGVuZXJzKCk7XHJcbn1cclxuXHJcbmV2ZW50TGlzdGVuZXJzKCk7XHJcbiIsImltcG9ydCBLaW1iYXAgZnJvbSAnLi9LaW1iYXAuanBnJztcclxuaW1wb3J0IEdhbWphIGZyb20gJy4vZ2FtamEuanBnJztcclxuaW1wb3J0IEJ1bGdvZ2kgZnJvbSAnLi9idWxnb2dpLmpwZyc7XHJcbmltcG9ydCBCaWJpIGZyb20gJy4vYmliaW1iYXAuanBnJztcclxuaW1wb3J0IEdhbGJpIGZyb20gJy4vZ2FsYmkuanBnJztcclxuXHJcbmNvbnN0IEZPT0QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnS2ltYmFwJyxcclxuICAgICAgICAnZGVzYyc6ICdBIHN1c2hpLWxpa2UgcmljZSByb2xsIGZpbGxlZCB3aXRoIHZlZ2V0YWJsZXMgYW5kIG1lYXQnLFxyXG4gICAgICAgICd1cmwnOiBLaW1iYXAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICduYW1lJzogJ0dhbWphdGFuZycsXHJcbiAgICAgICAgJ2Rlc2MnOiAnR2FtamF0YW5nIGlzIHNvdXAgbWFkZSB3aXRoIHBvcmsgbmVjayBib25lcyBhbmQgdmVnZXRhYmxlcywgYSBwZXJmZWN0IG1lYWwgZm9yIGEgY29sZCBkYXknLFxyXG4gICAgICAgICd1cmwnOiBHYW1qYSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnR2FsYmknLFxyXG4gICAgICAgICdkZXNjJzogJ0dhbGJpLCBhbHNvIGtub3duIGFzIGthbGJpLCBpcyBhIEtvcmVhbiBkaXNoIHRoYXQgY29uc2lzdHMgb2YgbWFyaW5hdGVkIGJlZWYgc2hvcnQgcmlicyB0aGF0IGFyZSBncmlsbGVkIG9yIGJyb2lsZWQgdG8gcGVyZmVjdGlvbi4nLFxyXG4gICAgICAgICd1cmwnOiBHYWxiaSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnQmliaW1iYXAnLFxyXG4gICAgICAgICdkZXNjJzogJ0JpYmltYmFwIGlzIGEgS29yZWFuIHJpY2UgZGlzaCB0aGF0IGlzIHRvcHBlZCB3aXRoIGEgdmFyaWV0eSBvZiB2ZWdldGFibGVzLCBtZWF0ICh1c3VhbGx5IGJlZWYpLCBhbmQgYSBmcmllZCBlZ2cuJyxcclxuICAgICAgICAndXJsJzogQmliaSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnQnVsZ29naScsXHJcbiAgICAgICAgJ2Rlc2MnOiAnQnVsZ29naSBpcyBhIHBvcHVsYXIgS29yZWFuIGJlZWYgZGlzaCB0aGF0IGlzIG1hcmluYXRlZCBpbiBhIG1peHR1cmUgb2Ygc295IHNhdWNlLCBzdWdhciwgZ2FybGljLCBhbmQgb3RoZXIgc3BpY2VzLCB0aGVuIGdyaWxsZWQgb3IgcGFuLWZyaWVkLicsXHJcbiAgICAgICAgJ3VybCc6IEJ1bGdvZ2ksXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5mdW5jdGlvbiBtZW51UGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKVxyXG4gICAgY29uc3QgYmFja2ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNraW1nJylcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgY29uc3QgbmV3RGl2ID0gKCkgPT4ge1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51bGlzdCcpXHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdJdGVtID0gKG9iaikgPT4ge1xyXG4gICAgICAgIGlmIChvYmoubmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IG9iai51cmxcclxuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGAke29iai5uYW1lfWBcclxuICAgICAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGAke29iai5kZXNjfWBcclxuICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuYW1lKVxyXG4gICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGRlc2MpXHJcbiAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoaW1nKVxyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobmV3SXRlbSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhck9sZCA9ICgpID0+IHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgYmFja2ltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5ld0l0ZW0sXHJcbiAgICAgICAgY2xlYXJPbGQsXHJcbiAgICAgICAgbmV3RGl2XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7bWVudVBhZ2UsIEZPT0R9IiwiaW1wb3J0IFNlb3VsIGZyb20gXCIuL3Nlb3VsLnBuZ1wiO1xyXG5pbXBvcnQgUmVzdCBmcm9tIFwiLi9yZXN0LnBuZ1wiO1xyXG5pbXBvcnQgS29yZWEgZnJvbSBcIi4va29yZWFfdHJhbnNwYXJlbnQucG5nXCI7XHJcblxyXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5hdmhvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hdmhvbGQuY2xhc3NMaXN0LmFkZChcIm5hdmhvbGRcIik7XHJcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcclxuICBidG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBidG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcclxuICBjb25zdCBidG5ob2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidG5ob2xkLmNsYXNzTGlzdC5hZGQoXCJidG5ob2xkXCIpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJIb21lXCIpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xyXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaW1nLnNyYyA9IFNlb3VsO1xyXG4gIG5hdmhvbGQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQobmF2aG9sZCk7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgdWwuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBpZiAoaSA9PT0gMCkgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+SG9tZTwvYT5gO1xyXG4gICAgZWxzZSBpZiAoaSA9PT0gMSkgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+TWVudTwvYT5gO1xyXG4gICAgZWxzZSBpZiAoaSA9PT0gMikgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5gO1xyXG5cclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICB9XHJcbiAgY29uc3QgaW1nMSA9IG5ldyBJbWFnZSgpO1xyXG4gIGltZzEuY2xhc3NMaXN0LmFkZChcImJhY2tpbWdcIik7XHJcbiAgaW1nMS5zcmMgPSBSZXN0O1xyXG4gIGgxLnRleHRDb250ZW50ID0gXCJTZW91bCBCaXN0cm9cIjtcclxuICBwLnRleHRDb250ZW50ID0gXCJDaGVjayBvdXQgb3VyIE1lbnUhXCI7XHJcbiAgYnRuaG9sZC5hcHBlbmRDaGlsZChwKTtcclxuICBidG5ob2xkLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgaGVyby5hcHBlbmRDaGlsZChoMSk7XHJcbiAgaGVyby5hcHBlbmRDaGlsZChidG5ob2xkKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGltZzEpO1xyXG4gIG5hdmhvbGQuYXBwZW5kQ2hpbGQodWwpO1xyXG4gIGNvbnN0IGtybmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGtybmltZy5zcmMgPSBLb3JlYTtcclxuICBrcm5pbWcuY2xhc3NMaXN0LmFkZChcImZsYWdcIik7XHJcbiAgbmF2LmFwcGVuZENoaWxkKGtybmltZyk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChoZXJvKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gIC8vIGZvb3RlclxyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICBmb290ZXIuaW5uZXJIVE1MID0gYEt5bGUgUGFyayBFc3QuICR7ZGF0ZX0gPGEgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pc3RhcnJ5Lyc+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktaW5zdGFncmFtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgPHBhdGggZD1cIk04IDBDNS44MjkgMCA1LjU1Ni4wMSA0LjcwMy4wNDggMy44NS4wODggMy4yNjkuMjIyIDIuNzYuNDJhMy45MTcgMy45MTcgMCAwIDAtMS40MTcuOTIzQTMuOTI3IDMuOTI3IDAgMCAwIC40MiAyLjc2Qy4yMjIgMy4yNjguMDg3IDMuODUuMDQ4IDQuNy4wMSA1LjU1NSAwIDUuODI3IDAgOC4wMDFjMCAyLjE3Mi4wMSAyLjQ0NC4wNDggMy4yOTcuMDQuODUyLjE3NCAxLjQzMy4zNzIgMS45NDIuMjA1LjUyNi40NzguOTcyLjkyMyAxLjQxNy40NDQuNDQ1Ljg5LjcxOSAxLjQxNi45MjMuNTEuMTk4IDEuMDkuMzMzIDEuOTQyLjM3MkM1LjU1NSAxNS45OSA1LjgyNyAxNiA4IDE2czIuNDQ0LS4wMSAzLjI5OC0uMDQ4Yy44NTEtLjA0IDEuNDM0LS4xNzQgMS45NDMtLjM3MmEzLjkxNiAzLjkxNiAwIDAgMCAxLjQxNi0uOTIzYy40NDUtLjQ0NS43MTgtLjg5MS45MjMtMS40MTcuMTk3LS41MDkuMzMyLTEuMDkuMzcyLTEuOTQyQzE1Ljk5IDEwLjQ0NSAxNiAxMC4xNzMgMTYgOHMtLjAxLTIuNDQ1LS4wNDgtMy4yOTljLS4wNC0uODUxLS4xNzUtMS40MzMtLjM3Mi0xLjk0MWEzLjkyNiAzLjkyNiAwIDAgMC0uOTIzLTEuNDE3QTMuOTExIDMuOTExIDAgMCAwIDEzLjI0LjQyYy0uNTEtLjE5OC0xLjA5Mi0uMzMzLTEuOTQzLS4zNzJDMTAuNDQzLjAxIDEwLjE3MiAwIDcuOTk4IDBoLjAwM3ptLS43MTcgMS40NDJoLjcxOGMyLjEzNiAwIDIuMzg5LjAwNyAzLjIzMi4wNDYuNzguMDM1IDEuMjA0LjE2NiAxLjQ4Ni4yNzUuMzczLjE0NS42NC4zMTkuOTIuNTk5LjI4LjI4LjQ1My41NDYuNTk4LjkyLjExLjI4MS4yNC43MDUuMjc1IDEuNDg1LjAzOS44NDMuMDQ3IDEuMDk2LjA0NyAzLjIzMXMtLjAwOCAyLjM4OS0uMDQ3IDMuMjMyYy0uMDM1Ljc4LS4xNjYgMS4yMDMtLjI3NSAxLjQ4NWEyLjQ3IDIuNDcgMCAwIDEtLjU5OS45MTljLS4yOC4yOC0uNTQ2LjQ1My0uOTIuNTk4LS4yOC4xMS0uNzA0LjI0LTEuNDg1LjI3Ni0uODQzLjAzOC0xLjA5Ni4wNDctMy4yMzIuMDQ3cy0yLjM5LS4wMDktMy4yMzMtLjA0N2MtLjc4LS4wMzYtMS4yMDMtLjE2Ni0xLjQ4NS0uMjc2YTIuNDc4IDIuNDc4IDAgMCAxLS45Mi0uNTk4IDIuNDggMi40OCAwIDAgMS0uNi0uOTJjLS4xMDktLjI4MS0uMjQtLjcwNS0uMjc1LTEuNDg1LS4wMzgtLjg0My0uMDQ2LTEuMDk2LS4wNDYtMy4yMzMgMC0yLjEzNi4wMDgtMi4zODguMDQ2LTMuMjMxLjAzNi0uNzguMTY2LTEuMjA0LjI3Ni0xLjQ4Ni4xNDUtLjM3My4zMTktLjY0LjU5OS0uOTIuMjgtLjI4LjU0Ni0uNDUzLjkyLS41OTguMjgyLS4xMS43MDUtLjI0IDEuNDg1LS4yNzYuNzM4LS4wMzQgMS4wMjQtLjA0NCAyLjUxNS0uMDQ1di4wMDJ6bTQuOTg4IDEuMzI4YS45Ni45NiAwIDEgMCAwIDEuOTIuOTYuOTYgMCAwIDAgMC0xLjkyem0tNC4yNyAxLjEyMmE0LjEwOSA0LjEwOSAwIDEgMCAwIDguMjE3IDQuMTA5IDQuMTA5IDAgMCAwIDAtOC4yMTd6bTAgMS40NDFhMi42NjcgMi42NjcgMCAxIDEgMCA1LjMzNCAyLjY2NyAyLjY2NyAwIDAgMSAwLTUuMzM0elwiLz5cclxuICA8L3N2Zz48L2E+IDxhIGhyZWY9J2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vUzJyZWRzLyc+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktZ2l0aHViXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gIDxwYXRoIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTIgOC4wMTIgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHpcIi8+XHJcbjwvc3ZnPjwvYT5gIDtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBhZ2VMb2FkIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
