"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["menu"],{

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
        'url': _Kimbap_jpg__WEBPACK_IMPORTED_MODULE_0__,
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

/***/ "./src/Kimbap.jpg":
/*!************************!*\
  !*** ./src/Kimbap.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./c147d43b1125e75c56ca.jpg";

/***/ }),

/***/ "./src/bibimbap.jpg":
/*!**************************!*\
  !*** ./src/bibimbap.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./66218df57f31cacc4910.jpg";

/***/ }),

/***/ "./src/bulgogi.jpg":
/*!*************************!*\
  !*** ./src/bulgogi.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./236ba187eefba8f85524.jpg";

/***/ }),

/***/ "./src/galbi.jpg":
/*!***********************!*\
  !*** ./src/galbi.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./40cc2f245f917dca8c62.jpg";

/***/ }),

/***/ "./src/gamja.jpg":
/*!***********************!*\
  !*** ./src/gamja.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./9991fdcdd4b6d8c600a7.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNGO0FBQ0k7QUFDRjtBQUNGO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdDQUFNO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVDQUFLO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVDQUFLO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBDQUFJO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlDQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtpbWJhcCBmcm9tICcuL0tpbWJhcC5qcGcnO1xyXG5pbXBvcnQgR2FtamEgZnJvbSAnLi9nYW1qYS5qcGcnO1xyXG5pbXBvcnQgQnVsZ29naSBmcm9tICcuL2J1bGdvZ2kuanBnJztcclxuaW1wb3J0IEJpYmkgZnJvbSAnLi9iaWJpbWJhcC5qcGcnO1xyXG5pbXBvcnQgR2FsYmkgZnJvbSAnLi9nYWxiaS5qcGcnO1xyXG5cclxuY29uc3QgRk9PRCA9IFtcclxuICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdLaW1iYXAnLFxyXG4gICAgICAgICdkZXNjJzogJ0Egc3VzaGktbGlrZSByaWNlIHJvbGwgZmlsbGVkIHdpdGggdmVnZXRhYmxlcyBhbmQgbWVhdCcsXHJcbiAgICAgICAgJ3VybCc6IEtpbWJhcCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnR2FtamF0YW5nJyxcclxuICAgICAgICAnZGVzYyc6ICdHYW1qYXRhbmcgaXMgc291cCBtYWRlIHdpdGggcG9yayBuZWNrIGJvbmVzIGFuZCB2ZWdldGFibGVzLCBhIHBlcmZlY3QgbWVhbCBmb3IgYSBjb2xkIGRheScsXHJcbiAgICAgICAgJ3VybCc6IEdhbWphLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdHYWxiaScsXHJcbiAgICAgICAgJ2Rlc2MnOiAnR2FsYmksIGFsc28ga25vd24gYXMga2FsYmksIGlzIGEgS29yZWFuIGRpc2ggdGhhdCBjb25zaXN0cyBvZiBtYXJpbmF0ZWQgYmVlZiBzaG9ydCByaWJzIHRoYXQgYXJlIGdyaWxsZWQgb3IgYnJvaWxlZCB0byBwZXJmZWN0aW9uLicsXHJcbiAgICAgICAgJ3VybCc6IEdhbGJpLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdCaWJpbWJhcCcsXHJcbiAgICAgICAgJ2Rlc2MnOiAnQmliaW1iYXAgaXMgYSBLb3JlYW4gcmljZSBkaXNoIHRoYXQgaXMgdG9wcGVkIHdpdGggYSB2YXJpZXR5IG9mIHZlZ2V0YWJsZXMsIG1lYXQgKHVzdWFsbHkgYmVlZiksIGFuZCBhIGZyaWVkIGVnZy4nLFxyXG4gICAgICAgICd1cmwnOiBCaWJpLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdCdWxnb2dpJyxcclxuICAgICAgICAnZGVzYyc6ICdCdWxnb2dpIGlzIGEgcG9wdWxhciBLb3JlYW4gYmVlZiBkaXNoIHRoYXQgaXMgbWFyaW5hdGVkIGluIGEgbWl4dHVyZSBvZiBzb3kgc2F1Y2UsIHN1Z2FyLCBnYXJsaWMsIGFuZCBvdGhlciBzcGljZXMsIHRoZW4gZ3JpbGxlZCBvciBwYW4tZnJpZWQuJyxcclxuICAgICAgICAndXJsJzogQnVsZ29naSxcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1lbnVQYWdlKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpXHJcbiAgICBjb25zdCBiYWNraW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tpbWcnKVxyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICBjb25zdCBuZXdEaXYgPSAoKSA9PiB7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnVsaXN0JylcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdilcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0l0ZW0gPSAob2JqKSA9PiB7XHJcbiAgICAgICAgaWYgKG9iai5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gb2JqLnVybFxyXG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7b2JqLm5hbWV9YFxyXG4gICAgICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gYCR7b2JqLmRlc2N9YFxyXG4gICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5hbWUpXHJcbiAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoZGVzYylcclxuICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChuZXdJdGVtKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyT2xkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJydcclxuICAgICAgICBiYWNraW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV3SXRlbSxcclxuICAgICAgICBjbGVhck9sZCxcclxuICAgICAgICBuZXdEaXZcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHttZW51UGFnZSwgRk9PRH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
