"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Mona-Sans.woff2 */ "./src/Mona-Sans.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Mona Sans';\r\n    src:\r\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2 supports variations'),\r\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2-variations');\r\n    font-weight: 200 900;\r\n    font-stretch: 75% 125%;\r\n  }\r\n\r\n* {\r\n    /* border: 1px solid black; */\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Mona Sans', 'Courier New';\r\n    text-shadow: 0px 0px 5px #000000;\r\n}\r\n\r\n\r\nbody {\r\n    background-color: #b91c1c;\r\n    border: 25px double white;\r\n    position: relative;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    justify-content: start;\r\n}\r\n\r\n.nav {\r\n    grid-area: nav;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    list-style-type: none;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    background-color: #991b1b;\r\n    border-bottom-left-radius: 100px;\r\n    border-bottom-right-radius: 100px;\r\n    width: 500px;\r\n}\r\n\r\n.content > div:first-child {\r\n    display: flex;\r\n    position: sticky;\r\n    top: 0;\r\n    justify-content: center;\r\n}\r\n\r\n.content > div:first-child > img {\r\n    width: 200px;\r\n    justify-self: end;\r\n}\r\n\r\n\r\n.backimg {\r\n    position: absolute;\r\n    width: 1000px;\r\n    transform: scaleX(-1);\r\n    bottom: 0px;\r\n    right: 0;\r\n    opacity: 80%;\r\n    z-index: 999;\r\n}\r\n\r\n.hero {\r\n    padding-left: 23%;\r\n    padding-top: 5%;\r\n    margin-top: 2%;\r\n    background-color: #991b1b;\r\n    border-top-left-radius: 1000px;\r\n    height: 650px;\r\n}\r\n\r\n.hero > h1 {\r\n    color: white;\r\n    letter-spacing: .2rem;\r\n    font-size: 6rem;\r\n    text-shadow: 0px 0px 5px #000000;\r\n    \r\n}\r\n\r\n.btnhold {\r\n    display: flex;\r\n    color: white;\r\n    font-style: italic;\r\n    font-size: 2rem;\r\n    letter-spacing: .1rem;\r\n    gap: 50px;\r\n    align-items: center;\r\n    text-shadow: 0px 0px 5px #000000;\r\n    \r\n}\r\n\r\n.btnhold button {\r\n    background-color: #b91c1c;\r\n    width: 100px; \r\n    border: 5px solid white;\r\n    border-radius: 50px;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    font-style: italic;\r\n    height: 50px;\r\n}\r\n\r\n.btnhold button:hover {\r\n    background-color: white;\r\n    border: 5px solid #b91c1c;\r\n    color: #b91c1c;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na:hover {\r\n    color: black;\r\n}\r\n\r\n.btnhold button:active {\r\n    background-color: rgb(141, 141, 141);\r\n}\r\n\r\n.navhold {\r\n    width: 500px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.flag {\r\n    position: absolute;\r\n    top: -35px;\r\n    left: 0;\r\n}\r\n\r\n.curve {\r\n    position: absolute;\r\n    background-color: #991b1b;\r\n    z-index: 9;\r\n    width: 700px;\r\n    height: 300px;\r\n    right: 0;\r\n    top: 25px;\r\n    border-top-left-radius: 1000px;\r\n}\r\n\r\n.footer {\r\n\r\n    position: fixed;\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 1.2rem;\r\n    background-color: #991b1b;\r\n    color: white;\r\n    bottom: 0;\r\n    right: 25px;\r\n    border-radius: 50px;\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.menulist {\r\n    align-self: center;\r\n    justify-self: center;\r\n    background-color: #991b1b;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    border-radius: 50px;\r\n    padding: 25px;\r\n    line-height: 50px;\r\n    color: white;\r\n    grid-area: body;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 25px;\r\n}\r\n\r\n.menulist p {\r\n    font-size: 1rem;\r\n}\r\n\r\n.menulist div {\r\n    background-color: #b91c1c;\r\n    border-radius: 50px;\r\n    padding: 25px;\r\n    width: 800px;\r\n}\r\n\r\n\r\n.menulist img {\r\n    width: 500px;\r\n    border-radius: 50px;\r\n}\r\n\r\n.smaller-nav {\r\n    width: 250px;\r\n    font-size: 1rem;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB;;wEAEmD;IACnD,oBAAoB;IACpB,sBAAsB;EACxB;;AAEF;IACI,6BAA6B;IAC7B,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,uCAAuC;IACvC,gCAAgC;AACpC;;;AAGA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,gCAAgC;IAChC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,MAAM;IACN,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,qBAAqB;IACrB,WAAW;IACX,QAAQ;IACR,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,cAAc;IACd,yBAAyB;IACzB,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,gCAAgC;;AAEpC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,SAAS;IACT,mBAAmB;IACnB,gCAAgC;;AAEpC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,SAAS;IACT,8BAA8B;AAClC;;AAEA;;IAEI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,YAAY;IACZ,SAAS;IACT,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,YAAY;AAChB;;;AAGA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB","sourcesContent":["@font-face {\r\n    font-family: 'Mona Sans';\r\n    src:\r\n      url('Mona-Sans.woff2') format('woff2 supports variations'),\r\n      url('Mona-Sans.woff2') format('woff2-variations');\r\n    font-weight: 200 900;\r\n    font-stretch: 75% 125%;\r\n  }\r\n\r\n* {\r\n    /* border: 1px solid black; */\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Mona Sans', 'Courier New';\r\n    text-shadow: 0px 0px 5px #000000;\r\n}\r\n\r\n\r\nbody {\r\n    background-color: #b91c1c;\r\n    border: 25px double white;\r\n    position: relative;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    justify-content: start;\r\n}\r\n\r\n.nav {\r\n    grid-area: nav;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    list-style-type: none;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    background-color: #991b1b;\r\n    border-bottom-left-radius: 100px;\r\n    border-bottom-right-radius: 100px;\r\n    width: 500px;\r\n}\r\n\r\n.content > div:first-child {\r\n    display: flex;\r\n    position: sticky;\r\n    top: 0;\r\n    justify-content: center;\r\n}\r\n\r\n.content > div:first-child > img {\r\n    width: 200px;\r\n    justify-self: end;\r\n}\r\n\r\n\r\n.backimg {\r\n    position: absolute;\r\n    width: 1000px;\r\n    transform: scaleX(-1);\r\n    bottom: 0px;\r\n    right: 0;\r\n    opacity: 80%;\r\n    z-index: 999;\r\n}\r\n\r\n.hero {\r\n    padding-left: 23%;\r\n    padding-top: 5%;\r\n    margin-top: 2%;\r\n    background-color: #991b1b;\r\n    border-top-left-radius: 1000px;\r\n    height: 650px;\r\n}\r\n\r\n.hero > h1 {\r\n    color: white;\r\n    letter-spacing: .2rem;\r\n    font-size: 6rem;\r\n    text-shadow: 0px 0px 5px #000000;\r\n    \r\n}\r\n\r\n.btnhold {\r\n    display: flex;\r\n    color: white;\r\n    font-style: italic;\r\n    font-size: 2rem;\r\n    letter-spacing: .1rem;\r\n    gap: 50px;\r\n    align-items: center;\r\n    text-shadow: 0px 0px 5px #000000;\r\n    \r\n}\r\n\r\n.btnhold button {\r\n    background-color: #b91c1c;\r\n    width: 100px; \r\n    border: 5px solid white;\r\n    border-radius: 50px;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    font-style: italic;\r\n    height: 50px;\r\n}\r\n\r\n.btnhold button:hover {\r\n    background-color: white;\r\n    border: 5px solid #b91c1c;\r\n    color: #b91c1c;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na:hover {\r\n    color: black;\r\n}\r\n\r\n.btnhold button:active {\r\n    background-color: rgb(141, 141, 141);\r\n}\r\n\r\n.navhold {\r\n    width: 500px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.flag {\r\n    position: absolute;\r\n    top: -35px;\r\n    left: 0;\r\n}\r\n\r\n.curve {\r\n    position: absolute;\r\n    background-color: #991b1b;\r\n    z-index: 9;\r\n    width: 700px;\r\n    height: 300px;\r\n    right: 0;\r\n    top: 25px;\r\n    border-top-left-radius: 1000px;\r\n}\r\n\r\n.footer {\r\n\r\n    position: fixed;\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 1.2rem;\r\n    background-color: #991b1b;\r\n    color: white;\r\n    bottom: 0;\r\n    right: 25px;\r\n    border-radius: 50px;\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.menulist {\r\n    align-self: center;\r\n    justify-self: center;\r\n    background-color: #991b1b;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    border-radius: 50px;\r\n    padding: 25px;\r\n    line-height: 50px;\r\n    color: white;\r\n    grid-area: body;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 25px;\r\n}\r\n\r\n.menulist p {\r\n    font-size: 1rem;\r\n}\r\n\r\n.menulist div {\r\n    background-color: #b91c1c;\r\n    border-radius: 50px;\r\n    padding: 25px;\r\n    width: 800px;\r\n}\r\n\r\n\r\n.menulist img {\r\n    width: 500px;\r\n    border-radius: 50px;\r\n}\r\n\r\n.smaller-nav {\r\n    width: 250px;\r\n    font-size: 1rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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





(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();

const body = document.querySelector('body')
const content = document.querySelector('.content')
const menubtn = document.querySelector('.btn')

const nav = document.querySelector('.navhold');
const nav1 = document.querySelector('.nav')
const navTop = nav.offsetTop;
const menulist = document.querySelector('.menulist')

function stickyNav() {
  if (window.scrollY > navTop) {
    // add class to make nav smaller
    nav.classList.add('smaller-nav');
    nav1.classList.add('smaller-nav');
  } else if (window.scrollY === 0){
    // remove class to restore original size
    nav.classList.remove('smaller-nav');
    nav1.classList.remove('smaller-nav');
  }
}

function navItems(e) {
    if (e.target.textContent === 'Home') {
        body.innerHTML = ''
        body.style.height = '100vh'
        ;(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
    }
    else if (e.target.textContent === 'Menu') {
        if (menulist.classList.contains('menulist')) {
            console.log(typeof(menulist))
            window.scroll(0,0);
        }
        else {
            const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage)();
            menu.clearOld()
            menu.newDiv();
            body.style.height = '380vh';
            for (let i in _menu_js__WEBPACK_IMPORTED_MODULE_2__.FOOD) {
                menu.newItem(_menu_js__WEBPACK_IMPORTED_MODULE_2__.FOOD[i])
            }
        }   
    } else if (e.target.textContent === 'Contact') {
        console.log(e)
    }
    eventListeners();
}

function eventListeners() {
    const navlinks = document.querySelectorAll('a')
    navlinks.forEach(nav => nav.addEventListener('click', navItems))
    menubtn.addEventListener('click', (e) => {
        const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage)();
        menu.clearOld()
        menu.newDiv();
        body.style.height = '380vh';
        for (let i in _menu_js__WEBPACK_IMPORTED_MODULE_2__.FOOD) {
            menu.newItem(_menu_js__WEBPACK_IMPORTED_MODULE_2__.FOOD[i])
        }
        eventListeners();
    })
    window.addEventListener('scroll', stickyNav);    
}

eventListeners()

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
    const curve = document.querySelector('.curve')
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
        curve.style.display = 'none'
        hero.style.display = 'none'
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

/***/ "./src/Kimbap.jpg":
/*!************************!*\
  !*** ./src/Kimbap.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c147d43b1125e75c56ca.jpg";

/***/ }),

/***/ "./src/Mona-Sans.woff2":
/*!*****************************!*\
  !*** ./src/Mona-Sans.woff2 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "955a87eb3766a32ac970.woff2";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2R0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELGlDQUFpQywrTEFBK0wsNkJBQTZCLCtCQUErQixPQUFPLFdBQVcsb0NBQW9DLG9CQUFvQixtQkFBbUIsK0JBQStCLGdEQUFnRCx5Q0FBeUMsS0FBSyxrQkFBa0Isa0NBQWtDLGtDQUFrQywyQkFBMkIsc0JBQXNCLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLEtBQUssa0JBQWtCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLCtCQUErQixLQUFLLGNBQWMsdUJBQXVCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLGtCQUFrQixzQkFBc0IsOEJBQThCLDBCQUEwQiwyQkFBMkIsa0NBQWtDLHlDQUF5QywwQ0FBMEMscUJBQXFCLEtBQUssb0NBQW9DLHNCQUFzQix5QkFBeUIsZUFBZSxnQ0FBZ0MsS0FBSywwQ0FBMEMscUJBQXFCLDBCQUEwQixLQUFLLHNCQUFzQiwyQkFBMkIsc0JBQXNCLDhCQUE4QixvQkFBb0IsaUJBQWlCLHFCQUFxQixxQkFBcUIsS0FBSyxlQUFlLDBCQUEwQix3QkFBd0IsdUJBQXVCLGtDQUFrQyx1Q0FBdUMsc0JBQXNCLEtBQUssb0JBQW9CLHFCQUFxQiw4QkFBOEIsd0JBQXdCLHlDQUF5QyxhQUFhLGtCQUFrQixzQkFBc0IscUJBQXFCLDJCQUEyQix3QkFBd0IsOEJBQThCLGtCQUFrQiw0QkFBNEIseUNBQXlDLGFBQWEseUJBQXlCLGtDQUFrQyxzQkFBc0IsZ0NBQWdDLDRCQUE0QixxQkFBcUIsMEJBQTBCLDJCQUEyQixxQkFBcUIsS0FBSywrQkFBK0IsZ0NBQWdDLGtDQUFrQyx1QkFBdUIsS0FBSyxXQUFXLDhCQUE4QixxQkFBcUIsS0FBSyxpQkFBaUIscUJBQXFCLEtBQUssZ0NBQWdDLDZDQUE2QyxLQUFLLGtCQUFrQixxQkFBcUIsc0JBQXNCLCtCQUErQixLQUFLLGVBQWUsMkJBQTJCLG1CQUFtQixnQkFBZ0IsS0FBSyxnQkFBZ0IsMkJBQTJCLGtDQUFrQyxtQkFBbUIscUJBQXFCLHNCQUFzQixpQkFBaUIsa0JBQWtCLHVDQUF1QyxLQUFLLGlCQUFpQiw0QkFBNEIsMkJBQTJCLHNCQUFzQiwwQkFBMEIsa0NBQWtDLHFCQUFxQixrQkFBa0Isb0JBQW9CLDRCQUE0QixzQkFBc0Isa0JBQWtCLEtBQUssbUJBQW1CLDJCQUEyQiw2QkFBNkIsa0NBQWtDLG9CQUFvQiwyQkFBMkIsMEJBQTBCLDRCQUE0QixzQkFBc0IsMEJBQTBCLHFCQUFxQix3QkFBd0Isc0JBQXNCLCtCQUErQixnQ0FBZ0MsNEJBQTRCLGtCQUFrQixLQUFLLHFCQUFxQix3QkFBd0IsS0FBSyx1QkFBdUIsa0NBQWtDLDRCQUE0QixzQkFBc0IscUJBQXFCLEtBQUssMkJBQTJCLHFCQUFxQiw0QkFBNEIsS0FBSyxzQkFBc0IscUJBQXFCLHdCQUF3QixLQUFLLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxzQ0FBc0MsaUNBQWlDLDZJQUE2SSw2QkFBNkIsK0JBQStCLE9BQU8sV0FBVyxvQ0FBb0Msb0JBQW9CLG1CQUFtQiwrQkFBK0IsZ0RBQWdELHlDQUF5QyxLQUFLLGtCQUFrQixrQ0FBa0Msa0NBQWtDLDJCQUEyQixzQkFBc0Isc0JBQXNCLCtCQUErQixnQ0FBZ0MsS0FBSyxrQkFBa0Isc0JBQXNCLCtCQUErQixrQkFBa0IsK0JBQStCLEtBQUssY0FBYyx1QkFBdUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsa0JBQWtCLHNCQUFzQiw4QkFBOEIsMEJBQTBCLDJCQUEyQixrQ0FBa0MseUNBQXlDLDBDQUEwQyxxQkFBcUIsS0FBSyxvQ0FBb0Msc0JBQXNCLHlCQUF5QixlQUFlLGdDQUFnQyxLQUFLLDBDQUEwQyxxQkFBcUIsMEJBQTBCLEtBQUssc0JBQXNCLDJCQUEyQixzQkFBc0IsOEJBQThCLG9CQUFvQixpQkFBaUIscUJBQXFCLHFCQUFxQixLQUFLLGVBQWUsMEJBQTBCLHdCQUF3Qix1QkFBdUIsa0NBQWtDLHVDQUF1QyxzQkFBc0IsS0FBSyxvQkFBb0IscUJBQXFCLDhCQUE4Qix3QkFBd0IseUNBQXlDLGFBQWEsa0JBQWtCLHNCQUFzQixxQkFBcUIsMkJBQTJCLHdCQUF3Qiw4QkFBOEIsa0JBQWtCLDRCQUE0Qix5Q0FBeUMsYUFBYSx5QkFBeUIsa0NBQWtDLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHFCQUFxQiwwQkFBMEIsMkJBQTJCLHFCQUFxQixLQUFLLCtCQUErQixnQ0FBZ0Msa0NBQWtDLHVCQUF1QixLQUFLLFdBQVcsOEJBQThCLHFCQUFxQixLQUFLLGlCQUFpQixxQkFBcUIsS0FBSyxnQ0FBZ0MsNkNBQTZDLEtBQUssa0JBQWtCLHFCQUFxQixzQkFBc0IsK0JBQStCLEtBQUssZUFBZSwyQkFBMkIsbUJBQW1CLGdCQUFnQixLQUFLLGdCQUFnQiwyQkFBMkIsa0NBQWtDLG1CQUFtQixxQkFBcUIsc0JBQXNCLGlCQUFpQixrQkFBa0IsdUNBQXVDLEtBQUssaUJBQWlCLDRCQUE0QiwyQkFBMkIsc0JBQXNCLDBCQUEwQixrQ0FBa0MscUJBQXFCLGtCQUFrQixvQkFBb0IsNEJBQTRCLHNCQUFzQixrQkFBa0IsS0FBSyxtQkFBbUIsMkJBQTJCLDZCQUE2QixrQ0FBa0Msb0JBQW9CLDJCQUEyQiwwQkFBMEIsNEJBQTRCLHNCQUFzQiwwQkFBMEIscUJBQXFCLHdCQUF3QixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsa0JBQWtCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLHVCQUF1QixrQ0FBa0MsNEJBQTRCLHNCQUFzQixxQkFBcUIsS0FBSywyQkFBMkIscUJBQXFCLDRCQUE0QixLQUFLLHNCQUFzQixxQkFBcUIsd0JBQXdCLEtBQUssbUJBQW1CO0FBQ3hyVTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0Q2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNYYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3JFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2Y4QztBQUN6QjtBQUNvQjtBQUN6QztBQUNBO0FBQ0Esa0RBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBSTtBQUM5Qiw2QkFBNkIsMENBQUk7QUFDakM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBDQUFJO0FBQzFCLHlCQUF5QiwwQ0FBSTtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFa0M7QUFDRjtBQUNJO0FBQ0Y7QUFDRjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3Q0FBTTtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBSztBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBSztBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQ0FBSTtBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5Q0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVnQztBQUNGO0FBQ2M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiTW9uYS1TYW5zLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uYSBTYW5zJztcXHJcXG4gICAgc3JjOlxcclxcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMiBzdXBwb3J0cyB2YXJpYXRpb25zJyksXFxyXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyLXZhcmlhdGlvbnMnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMCA5MDA7XFxyXFxuICAgIGZvbnQtc3RyZXRjaDogNzUlIDEyNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uYSBTYW5zJywgJ0NvdXJpZXIgTmV3JztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkxYzFjO1xcclxcbiAgICBib3JkZXI6IDI1cHggZG91YmxlIHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTFiMWI7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHg7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+IGRpdjpmaXJzdC1jaGlsZCA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYWNraW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwMHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgb3BhY2l0eTogODAlO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMyU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTFiMWI7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMDBweDtcXHJcXG4gICAgaGVpZ2h0OiA2NTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8gPiBoMSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcclxcbiAgICBmb250LXNpemU6IDZyZW07XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCAjMDAwMDAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bmhvbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYnRuaG9sZCBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkxYzFjO1xcclxcbiAgICB3aWR0aDogMTAwcHg7IFxcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG5ob2xkIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjYjkxYzFjO1xcclxcbiAgICBjb2xvcjogI2I5MWMxYztcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuaG9sZCBidXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MSwgMTQxLCAxNDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aG9sZCB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZsYWcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTM1cHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5jdXJ2ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5MWIxYjtcXHJcXG4gICAgei1pbmRleDogOTtcXHJcXG4gICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAyNXB4O1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTFiMWI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWxpc3Qge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkxYjFiO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZ3JpZC1hcmVhOiBib2R5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWxpc3QgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVsaXN0IGRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTFjMWM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1lbnVsaXN0IGltZyB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtYWxsZXItbmF2IHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEI7O3dFQUVtRDtJQUNuRCxvQkFBb0I7SUFDcEIsc0JBQXNCO0VBQ3hCOztBQUVGO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxnQ0FBZ0M7QUFDcEM7OztBQUdBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7SUFDVCw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb25hIFNhbnMnO1xcclxcbiAgICBzcmM6XFxyXFxuICAgICAgdXJsKCdNb25hLVNhbnMud29mZjInKSBmb3JtYXQoJ3dvZmYyIHN1cHBvcnRzIHZhcmlhdGlvbnMnKSxcXHJcXG4gICAgICB1cmwoJ01vbmEtU2Fucy53b2ZmMicpIGZvcm1hdCgnd29mZjItdmFyaWF0aW9ucycpO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwIDkwMDtcXHJcXG4gICAgZm9udC1zdHJldGNoOiA3NSUgMTI1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb25hIFNhbnMnLCAnQ291cmllciBOZXcnO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTFjMWM7XFxyXFxuICAgIGJvcmRlcjogMjVweCBkb3VibGUgd2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5MWIxYjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+IGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50ID4gZGl2OmZpcnN0LWNoaWxkID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJhY2tpbWcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAwcHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBvcGFjaXR5OiA4MCU7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIzJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5MWIxYjtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDY1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyA+IGgxIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYnRuaG9sZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDAwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5idG5ob2xkIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTFjMWM7XFxyXFxuICAgIHdpZHRoOiAxMDBweDsgXFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bmhvbGQgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNiOTFjMWM7XFxyXFxuICAgIGNvbG9yOiAjYjkxYzFjO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5idG5ob2xkIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQxLCAxNDEsIDE0MSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZob2xkIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxhZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAtMzVweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnZlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkxYjFiO1xcclxcbiAgICB6LWluZGV4OiA5O1xcclxcbiAgICB3aWR0aDogNzAwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDI1cHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5MWIxYjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAyNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51bGlzdCB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTFiMWI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBncmlkLWFyZWE6IGJvZHk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51bGlzdCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWxpc3QgZGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5MWMxYztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgd2lkdGg6IDgwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWVudWxpc3QgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc21hbGxlci1uYXYge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLypcclxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xyXG4gIHZhciBsaXN0ID0gW107XHJcblxyXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuICAgIGlmIChkZWR1cGUpIHtcclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcclxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWVkaWEpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXBwb3J0cykge1xyXG4gICAgICAgIGlmICghaXRlbVs0XSkge1xyXG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcclxuICBpZiAoIW9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSB7fTtcclxuICB9XHJcbiAgaWYgKCF1cmwpIHtcclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcclxuXHJcbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXHJcbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XHJcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xyXG4gIH1cclxuICBpZiAob3B0aW9ucy5oYXNoKSB7XHJcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xyXG4gIH1cclxuXHJcbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xyXG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXHJcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xyXG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XHJcbiAgfVxyXG4gIHJldHVybiB1cmw7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xyXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xyXG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xyXG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcclxufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcclxuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcclxuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcclxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxyXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXHJcbiAgICAgICAgcmVmZXJlbmNlczogMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xyXG4gIGFwaS51cGRhdGUob2JqKTtcclxuXHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZXI7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XHJcblxyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuXHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcblxyXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XHJcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XHJcblxyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxyXG5cclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xyXG59XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuXHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG5cclxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG5cclxuICBpZiAobm9uY2UpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XHJcbiAgfVxyXG5cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgY3NzICs9IG9iai5jc3M7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9IC8vIEZvciBvbGQgSUVcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xyXG5cclxuXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxyXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcclxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtwYWdlTG9hZCwgY3JlYXRlRGl2fSBmcm9tICcuL3BhZ2UuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHttZW51UGFnZSwgRk9PRH0gZnJvbSAnLi9tZW51LmpzJztcclxuXHJcblxyXG5wYWdlTG9hZCgpO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG5jb25zdCBtZW51YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpXHJcblxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aG9sZCcpO1xyXG5jb25zdCBuYXYxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpXHJcbmNvbnN0IG5hdlRvcCA9IG5hdi5vZmZzZXRUb3A7XHJcbmNvbnN0IG1lbnVsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVsaXN0JylcclxuXHJcbmZ1bmN0aW9uIHN0aWNreU5hdigpIHtcclxuICBpZiAod2luZG93LnNjcm9sbFkgPiBuYXZUb3ApIHtcclxuICAgIC8vIGFkZCBjbGFzcyB0byBtYWtlIG5hdiBzbWFsbGVyXHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnc21hbGxlci1uYXYnKTtcclxuICAgIG5hdjEuY2xhc3NMaXN0LmFkZCgnc21hbGxlci1uYXYnKTtcclxuICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID09PSAwKXtcclxuICAgIC8vIHJlbW92ZSBjbGFzcyB0byByZXN0b3JlIG9yaWdpbmFsIHNpemVcclxuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdzbWFsbGVyLW5hdicpO1xyXG4gICAgbmF2MS5jbGFzc0xpc3QucmVtb3ZlKCdzbWFsbGVyLW5hdicpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmF2SXRlbXMoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnSG9tZScpIHtcclxuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnXHJcbiAgICAgICAgcGFnZUxvYWQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnTWVudScpIHtcclxuICAgICAgICBpZiAobWVudWxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51bGlzdCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZihtZW51bGlzdCkpXHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBtZW51UGFnZSgpO1xyXG4gICAgICAgICAgICBtZW51LmNsZWFyT2xkKClcclxuICAgICAgICAgICAgbWVudS5uZXdEaXYoKTtcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSAnMzgwdmgnO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIEZPT0QpIHtcclxuICAgICAgICAgICAgICAgIG1lbnUubmV3SXRlbShGT09EW2ldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ0NvbnRhY3QnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICAgIGV2ZW50TGlzdGVuZXJzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgbmF2bGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcclxuICAgIG5hdmxpbmtzLmZvckVhY2gobmF2ID0+IG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdkl0ZW1zKSlcclxuICAgIG1lbnVidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBtZW51UGFnZSgpO1xyXG4gICAgICAgIG1lbnUuY2xlYXJPbGQoKVxyXG4gICAgICAgIG1lbnUubmV3RGl2KCk7XHJcbiAgICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSAnMzgwdmgnO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gRk9PRCkge1xyXG4gICAgICAgICAgICBtZW51Lm5ld0l0ZW0oRk9PRFtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH0pXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RpY2t5TmF2KTsgICAgXHJcbn1cclxuXHJcbmV2ZW50TGlzdGVuZXJzKCkiLCJpbXBvcnQgS2ltYmFwIGZyb20gJy4vS2ltYmFwLmpwZyc7XHJcbmltcG9ydCBHYW1qYSBmcm9tICcuL2dhbWphLmpwZyc7XHJcbmltcG9ydCBCdWxnb2dpIGZyb20gJy4vYnVsZ29naS5qcGcnO1xyXG5pbXBvcnQgQmliaSBmcm9tICcuL2JpYmltYmFwLmpwZyc7XHJcbmltcG9ydCBHYWxiaSBmcm9tICcuL2dhbGJpLmpwZyc7XHJcblxyXG5jb25zdCBGT09EID0gW1xyXG4gICAge1xyXG4gICAgICAgICduYW1lJzogJ0tpbWJhcCcsXHJcbiAgICAgICAgJ2Rlc2MnOiAnQSBzdXNoaS1saWtlIHJpY2Ugcm9sbCBmaWxsZWQgd2l0aCB2ZWdldGFibGVzIGFuZCBtZWF0JyxcclxuICAgICAgICAndXJsJzogS2ltYmFwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdHYW1qYXRhbmcnLFxyXG4gICAgICAgICdkZXNjJzogJ0dhbWphdGFuZyBpcyBzb3VwIG1hZGUgd2l0aCBwb3JrIG5lY2sgYm9uZXMgYW5kIHZlZ2V0YWJsZXMsIGEgcGVyZmVjdCBtZWFsIGZvciBhIGNvbGQgZGF5JyxcclxuICAgICAgICAndXJsJzogR2FtamEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICduYW1lJzogJ0dhbGJpJyxcclxuICAgICAgICAnZGVzYyc6ICdHYWxiaSwgYWxzbyBrbm93biBhcyBrYWxiaSwgaXMgYSBLb3JlYW4gZGlzaCB0aGF0IGNvbnNpc3RzIG9mIG1hcmluYXRlZCBiZWVmIHNob3J0IHJpYnMgdGhhdCBhcmUgZ3JpbGxlZCBvciBicm9pbGVkIHRvIHBlcmZlY3Rpb24uJyxcclxuICAgICAgICAndXJsJzogR2FsYmksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICduYW1lJzogJ0JpYmltYmFwJyxcclxuICAgICAgICAnZGVzYyc6ICdCaWJpbWJhcCBpcyBhIEtvcmVhbiByaWNlIGRpc2ggdGhhdCBpcyB0b3BwZWQgd2l0aCBhIHZhcmlldHkgb2YgdmVnZXRhYmxlcywgbWVhdCAodXN1YWxseSBiZWVmKSwgYW5kIGEgZnJpZWQgZWdnLicsXHJcbiAgICAgICAgJ3VybCc6IEJpYmksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICduYW1lJzogJ0J1bGdvZ2knLFxyXG4gICAgICAgICdkZXNjJzogJ0J1bGdvZ2kgaXMgYSBwb3B1bGFyIEtvcmVhbiBiZWVmIGRpc2ggdGhhdCBpcyBtYXJpbmF0ZWQgaW4gYSBtaXh0dXJlIG9mIHNveSBzYXVjZSwgc3VnYXIsIGdhcmxpYywgYW5kIG90aGVyIHNwaWNlcywgdGhlbiBncmlsbGVkIG9yIHBhbi1mcmllZC4nLFxyXG4gICAgICAgICd1cmwnOiBCdWxnb2dpLFxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuZnVuY3Rpb24gbWVudVBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJylcclxuICAgIGNvbnN0IGN1cnZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnZlJylcclxuICAgIGNvbnN0IGJhY2tpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2ltZycpXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIGNvbnN0IG5ld0RpdiA9ICgpID0+IHtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudWxpc3QnKVxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3SXRlbSA9IChvYmopID0+IHtcclxuICAgICAgICBpZiAob2JqLm5hbWUpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBvYmoudXJsXHJcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBgJHtvYmoubmFtZX1gXHJcbiAgICAgICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBgJHtvYmouZGVzY31gXHJcbiAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmFtZSlcclxuICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChkZXNjKVxyXG4gICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGltZylcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5ld0l0ZW0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJPbGQgPSAoKSA9PiB7XHJcbiAgICAgICAgY3VydmUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGhlcm8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGJhY2tpbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXdJdGVtLFxyXG4gICAgICAgIGNsZWFyT2xkLFxyXG4gICAgICAgIG5ld0RpdlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge21lbnVQYWdlLCBGT09EfSIsImltcG9ydCBTZW91bCBmcm9tICcuL3Nlb3VsLnBuZyc7XHJcbmltcG9ydCBSZXN0IGZyb20gJy4vcmVzdC5wbmcnO1xyXG5pbXBvcnQgS29yZWEgZnJvbSAnLi9rb3JlYV90cmFuc3BhcmVudC5wbmcnO1xyXG5cclxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBuYXZob2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG5hdmhvbGQuY2xhc3NMaXN0LmFkZCgnbmF2aG9sZCcpXHJcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKVxyXG4gICAgYnRuLnRleHRDb250ZW50ID0gJ01lbnUnXHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcclxuICAgIGNvbnN0IGJ0bmhvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYnRuaG9sZC5jbGFzc0xpc3QuYWRkKCdidG5ob2xkJylcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmMgPSBTZW91bDtcclxuICAgIG5hdmhvbGQuYXBwZW5kQ2hpbGQoaW1nKVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdmhvbGQpXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ25hdicpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgIGlmIChpID09PSAwKSAgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+SG9tZTwvYT5gXHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gMSkgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+TWVudTwvYT5gXHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gMikgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5gXHJcbiAgICAgICBcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSlcclxuICAgIH1cclxuICAgIGNvbnN0IGltZzEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnYmFja2ltZycpXHJcbiAgICBpbWcxLnNyYyA9IFJlc3Q7XHJcbiAgICBoMS50ZXh0Q29udGVudCA9ICdTZW91bCBCaXN0cm8nXHJcbiAgICBwLnRleHRDb250ZW50ID0gJ0NoZWNrIG91dCBvdXIgTWVudSEnXHJcbiAgICBidG5ob2xkLmFwcGVuZENoaWxkKHApXHJcbiAgICBidG5ob2xkLmFwcGVuZENoaWxkKGJ0bilcclxuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaDEpXHJcbiAgICBoZXJvLmFwcGVuZENoaWxkKGJ0bmhvbGQpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltZzEpXHJcbiAgICBuYXZob2xkLmFwcGVuZENoaWxkKHVsKVxyXG4gICAgY29uc3Qga3JuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBrcm5pbWcuc3JjID0gS29yZWE7XHJcbiAgICBrcm5pbWcuY2xhc3NMaXN0LmFkZCgnZmxhZycpXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoa3JuaW1nKVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKG5hdilcclxuICAgIGRpdi5hcHBlbmRDaGlsZChoZXJvKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICBjb25zdCBjdXJ2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjdXJ2ZS5jbGFzc0xpc3QuYWRkKCdjdXJ2ZScpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3VydmUpXHJcblxyXG4gICAgLy8gZm9vdGVyXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBLeWxlIFBhcmsgRXN0LiAke2RhdGV9IDxhIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaXN0YXJyeS8nPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWluc3RhZ3JhbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgIDxwYXRoIGQ9XCJNOCAwQzUuODI5IDAgNS41NTYuMDEgNC43MDMuMDQ4IDMuODUuMDg4IDMuMjY5LjIyMiAyLjc2LjQyYTMuOTE3IDMuOTE3IDAgMCAwLTEuNDE3LjkyM0EzLjkyNyAzLjkyNyAwIDAgMCAuNDIgMi43NkMuMjIyIDMuMjY4LjA4NyAzLjg1LjA0OCA0LjcuMDEgNS41NTUgMCA1LjgyNyAwIDguMDAxYzAgMi4xNzIuMDEgMi40NDQuMDQ4IDMuMjk3LjA0Ljg1Mi4xNzQgMS40MzMuMzcyIDEuOTQyLjIwNS41MjYuNDc4Ljk3Mi45MjMgMS40MTcuNDQ0LjQ0NS44OS43MTkgMS40MTYuOTIzLjUxLjE5OCAxLjA5LjMzMyAxLjk0Mi4zNzJDNS41NTUgMTUuOTkgNS44MjcgMTYgOCAxNnMyLjQ0NC0uMDEgMy4yOTgtLjA0OGMuODUxLS4wNCAxLjQzNC0uMTc0IDEuOTQzLS4zNzJhMy45MTYgMy45MTYgMCAwIDAgMS40MTYtLjkyM2MuNDQ1LS40NDUuNzE4LS44OTEuOTIzLTEuNDE3LjE5Ny0uNTA5LjMzMi0xLjA5LjM3Mi0xLjk0MkMxNS45OSAxMC40NDUgMTYgMTAuMTczIDE2IDhzLS4wMS0yLjQ0NS0uMDQ4LTMuMjk5Yy0uMDQtLjg1MS0uMTc1LTEuNDMzLS4zNzItMS45NDFhMy45MjYgMy45MjYgMCAwIDAtLjkyMy0xLjQxN0EzLjkxMSAzLjkxMSAwIDAgMCAxMy4yNC40MmMtLjUxLS4xOTgtMS4wOTItLjMzMy0xLjk0My0uMzcyQzEwLjQ0My4wMSAxMC4xNzIgMCA3Ljk5OCAwaC4wMDN6bS0uNzE3IDEuNDQyaC43MThjMi4xMzYgMCAyLjM4OS4wMDcgMy4yMzIuMDQ2Ljc4LjAzNSAxLjIwNC4xNjYgMS40ODYuMjc1LjM3My4xNDUuNjQuMzE5LjkyLjU5OS4yOC4yOC40NTMuNTQ2LjU5OC45Mi4xMS4yODEuMjQuNzA1LjI3NSAxLjQ4NS4wMzkuODQzLjA0NyAxLjA5Ni4wNDcgMy4yMzFzLS4wMDggMi4zODktLjA0NyAzLjIzMmMtLjAzNS43OC0uMTY2IDEuMjAzLS4yNzUgMS40ODVhMi40NyAyLjQ3IDAgMCAxLS41OTkuOTE5Yy0uMjguMjgtLjU0Ni40NTMtLjkyLjU5OC0uMjguMTEtLjcwNC4yNC0xLjQ4NS4yNzYtLjg0My4wMzgtMS4wOTYuMDQ3LTMuMjMyLjA0N3MtMi4zOS0uMDA5LTMuMjMzLS4wNDdjLS43OC0uMDM2LTEuMjAzLS4xNjYtMS40ODUtLjI3NmEyLjQ3OCAyLjQ3OCAwIDAgMS0uOTItLjU5OCAyLjQ4IDIuNDggMCAwIDEtLjYtLjkyYy0uMTA5LS4yODEtLjI0LS43MDUtLjI3NS0xLjQ4NS0uMDM4LS44NDMtLjA0Ni0xLjA5Ni0uMDQ2LTMuMjMzIDAtMi4xMzYuMDA4LTIuMzg4LjA0Ni0zLjIzMS4wMzYtLjc4LjE2Ni0xLjIwNC4yNzYtMS40ODYuMTQ1LS4zNzMuMzE5LS42NC41OTktLjkyLjI4LS4yOC41NDYtLjQ1My45Mi0uNTk4LjI4Mi0uMTEuNzA1LS4yNCAxLjQ4NS0uMjc2LjczOC0uMDM0IDEuMDI0LS4wNDQgMi41MTUtLjA0NXYuMDAyem00Ljk4OCAxLjMyOGEuOTYuOTYgMCAxIDAgMCAxLjkyLjk2Ljk2IDAgMCAwIDAtMS45MnptLTQuMjcgMS4xMjJhNC4xMDkgNC4xMDkgMCAxIDAgMCA4LjIxNyA0LjEwOSA0LjEwOSAwIDAgMCAwLTguMjE3em0wIDEuNDQxYTIuNjY3IDIuNjY3IDAgMSAxIDAgNS4zMzQgMi42NjcgMi42NjcgMCAwIDEgMC01LjMzNHpcIi8+XHJcbiAgPC9zdmc+PC9hPmBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7cGFnZUxvYWR9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9