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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Mona Sans';\r\n    src:\r\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2 supports variations'),\r\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2-variations');\r\n    font-weight: 200 900;\r\n    font-stretch: 75% 125%;\r\n  }\r\n\r\n* {\r\n    /* border: 1px solid black; */\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Mona Sans', 'Courier New';\r\n    text-shadow: 0px 0px 5px #000000;\r\n}\r\n\r\n  \r\n\r\n.content {\r\n    background-color: #b91c1c;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n.content {\r\n    display: grid;\r\n    height: 100vh;\r\n    grid-template-rows: 1fr 12fr;\r\n    grid-template-areas: \r\n        \"nav\"\r\n        \"body\";\r\n    border: 25px double white;\r\n}\r\n\r\n.nav {\r\n    grid-area: nav;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    list-style-type: none;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    background-color: #991b1b;\r\n    border-bottom-left-radius: 100px;\r\n    border-bottom-right-radius: 100px;\r\n    width: 500px;\r\n}\r\n\r\n.content > div:first-child {\r\n    display: flex;\r\n    position: sticky;\r\n    top: 0;\r\n    justify-content: center;\r\n}\r\n\r\n.content > div:first-child > img {\r\n    width: 200px;\r\n    justify-self: end;\r\n}\r\n\r\n\r\n.backimg {\r\n    position: absolute;\r\n    width: 1000px;\r\n    transform: scaleX(-1);\r\n    bottom: 0px;\r\n    right: 25px;\r\n    opacity: 80%;\r\n    z-index: 999;\r\n}\r\n\r\n.hero {\r\n    padding-left: 20%;\r\n    padding-top: 10%;\r\n    margin-top: 2%;\r\n    background-color: #991b1b;\r\n    border-top-left-radius: 1000px;\r\n}\r\n\r\n.hero > h1 {\r\n    color: white;\r\n    letter-spacing: .2rem;\r\n    font-size: 6rem;\r\n    text-shadow: 0px 0px 5px #000000;\r\n    \r\n}\r\n\r\n.btnhold {\r\n    display: flex;\r\n    color: white;\r\n    font-style: italic;\r\n    font-size: 2rem;\r\n    letter-spacing: .1rem;\r\n    gap: 50px;\r\n    align-items: center;\r\n    text-shadow: 0px 0px 5px #000000;\r\n    \r\n}\r\n\r\n.btnhold button {\r\n    background-color: #b91c1c;\r\n    width: 100px; \r\n    border: 5px solid white;\r\n    border-radius: 50px;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    font-style: italic;\r\n    height: 50px;\r\n}\r\n\r\n.btnhold button:hover {\r\n    background-color: white;\r\n    border: 5px solid #b91c1c;\r\n    color: #b91c1c;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na:hover {\r\n    color: black;\r\n}\r\n\r\n.btnhold button:active {\r\n    background-color: rgb(141, 141, 141);\r\n}\r\n\r\n.navhold {\r\n    width: 500px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.flag {\r\n    position: absolute;\r\n    top: -35px;\r\n    left: 0;\r\n}\r\n\r\n.curve {\r\n    position: absolute;\r\n    background-color: #991b1b;\r\n    z-index: 9;\r\n    width: 700px;\r\n    height: 300px;\r\n    right: 25px;\r\n    top: 25px;\r\n    border-top-left-radius: 1000px;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    position: absolute;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    font-size: 1.5rem;\r\n    background-color: #991b1b;\r\n    color: white;\r\n}\r\n\r\n.menulist {\r\n    align-self: center;\r\n    justify-self: center;\r\n    background-color: #991b1b;\r\n    width: 800px;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    border-radius: 50px;\r\n    padding: 25px;\r\n    line-height: 50px;\r\n    color: white;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB;;wEAEmD;IACnD,oBAAoB;IACpB,sBAAsB;EACxB;;AAEF;IACI,6BAA6B;IAC7B,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,uCAAuC;IACvC,gCAAgC;AACpC;;;;AAIA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,4BAA4B;IAC5B;;cAEU;IACV,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,gCAAgC;IAChC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,MAAM;IACN,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,qBAAqB;IACrB,WAAW;IACX,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,yBAAyB;IACzB,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,gCAAgC;;AAEpC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,SAAS;IACT,mBAAmB;IACnB,gCAAgC;;AAEpC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,WAAW;IACX,SAAS;IACT,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,YAAY;AAChB","sourcesContent":["@font-face {\r\n    font-family: 'Mona Sans';\r\n    src:\r\n      url('Mona-Sans.woff2') format('woff2 supports variations'),\r\n      url('Mona-Sans.woff2') format('woff2-variations');\r\n    font-weight: 200 900;\r\n    font-stretch: 75% 125%;\r\n  }\r\n\r\n* {\r\n    /* border: 1px solid black; */\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Mona Sans', 'Courier New';\r\n    text-shadow: 0px 0px 5px #000000;\r\n}\r\n\r\n  \r\n\r\n.content {\r\n    background-color: #b91c1c;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n.content {\r\n    display: grid;\r\n    height: 100vh;\r\n    grid-template-rows: 1fr 12fr;\r\n    grid-template-areas: \r\n        \"nav\"\r\n        \"body\";\r\n    border: 25px double white;\r\n}\r\n\r\n.nav {\r\n    grid-area: nav;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    list-style-type: none;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    background-color: #991b1b;\r\n    border-bottom-left-radius: 100px;\r\n    border-bottom-right-radius: 100px;\r\n    width: 500px;\r\n}\r\n\r\n.content > div:first-child {\r\n    display: flex;\r\n    position: sticky;\r\n    top: 0;\r\n    justify-content: center;\r\n}\r\n\r\n.content > div:first-child > img {\r\n    width: 200px;\r\n    justify-self: end;\r\n}\r\n\r\n\r\n.backimg {\r\n    position: absolute;\r\n    width: 1000px;\r\n    transform: scaleX(-1);\r\n    bottom: 0px;\r\n    right: 25px;\r\n    opacity: 80%;\r\n    z-index: 999;\r\n}\r\n\r\n.hero {\r\n    padding-left: 20%;\r\n    padding-top: 10%;\r\n    margin-top: 2%;\r\n    background-color: #991b1b;\r\n    border-top-left-radius: 1000px;\r\n}\r\n\r\n.hero > h1 {\r\n    color: white;\r\n    letter-spacing: .2rem;\r\n    font-size: 6rem;\r\n    text-shadow: 0px 0px 5px #000000;\r\n    \r\n}\r\n\r\n.btnhold {\r\n    display: flex;\r\n    color: white;\r\n    font-style: italic;\r\n    font-size: 2rem;\r\n    letter-spacing: .1rem;\r\n    gap: 50px;\r\n    align-items: center;\r\n    text-shadow: 0px 0px 5px #000000;\r\n    \r\n}\r\n\r\n.btnhold button {\r\n    background-color: #b91c1c;\r\n    width: 100px; \r\n    border: 5px solid white;\r\n    border-radius: 50px;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    font-style: italic;\r\n    height: 50px;\r\n}\r\n\r\n.btnhold button:hover {\r\n    background-color: white;\r\n    border: 5px solid #b91c1c;\r\n    color: #b91c1c;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na:hover {\r\n    color: black;\r\n}\r\n\r\n.btnhold button:active {\r\n    background-color: rgb(141, 141, 141);\r\n}\r\n\r\n.navhold {\r\n    width: 500px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.flag {\r\n    position: absolute;\r\n    top: -35px;\r\n    left: 0;\r\n}\r\n\r\n.curve {\r\n    position: absolute;\r\n    background-color: #991b1b;\r\n    z-index: 9;\r\n    width: 700px;\r\n    height: 300px;\r\n    right: 25px;\r\n    top: 25px;\r\n    border-top-left-radius: 1000px;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    position: absolute;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    font-size: 1.5rem;\r\n    background-color: #991b1b;\r\n    color: white;\r\n}\r\n\r\n.menulist {\r\n    align-self: center;\r\n    justify-self: center;\r\n    background-color: #991b1b;\r\n    width: 800px;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    border-radius: 50px;\r\n    padding: 25px;\r\n    line-height: 50px;\r\n    color: white;\r\n}"],"sourceRoot":""}]);
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

const menubtn = document.querySelector('.btn')
menubtn.addEventListener('click', (e) => {
    console.log(e)
    console.log(_menu_js__WEBPACK_IMPORTED_MODULE_2__.FOOD)
    const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage)();
    menu.clearOld()
    menu.newDiv();
    menu.newItem(_menu_js__WEBPACK_IMPORTED_MODULE_2__.FOOD[0])
})

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
const FOOD = [
    {
        'name': 'Kimbap',
        'desc': 'A sushi-like rice roll filled with vegetables and meat',
        'url': './Kimbap.jpg'
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
        curve.style.visibility = 'hidden'
        hero.style.visibility = 'hidden'
        backimg.style.visibility = 'hidden'
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
    footer.innerHTML = `Kyle Park Est. ${date}`
    content.appendChild(footer)
}





/***/ }),

/***/ "./src/Mona-Sans.woff2":
/*!*****************************!*\
  !*** ./src/Mona-Sans.woff2 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "955a87eb3766a32ac970.woff2";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtREFBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxLQUFLO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiTW9uYS1TYW5zLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uYSBTYW5zJztcXHJcXG4gICAgc3JjOlxcclxcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMiBzdXBwb3J0cyB2YXJpYXRpb25zJyksXFxyXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyLXZhcmlhdGlvbnMnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMCA5MDA7XFxyXFxuICAgIGZvbnQtc3RyZXRjaDogNzUlIDEyNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uYSBTYW5zJywgJ0NvdXJpZXIgTmV3JztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbiAgXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkxYzFjO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgXFxcIm5hdlxcXCJcXHJcXG4gICAgICAgIFxcXCJib2R5XFxcIjtcXHJcXG4gICAgYm9yZGVyOiAyNXB4IGRvdWJsZSB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTFiMWI7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHg7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+IGRpdjpmaXJzdC1jaGlsZCA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYWNraW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwMHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICByaWdodDogMjVweDtcXHJcXG4gICAgb3BhY2l0eTogODAlO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkxYjFiO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvID4gaDEge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDAwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5idG5ob2xkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCAjMDAwMDAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bmhvbGQgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5MWMxYztcXHJcXG4gICAgd2lkdGg6IDEwMHB4OyBcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuaG9sZCBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2I5MWMxYztcXHJcXG4gICAgY29sb3I6ICNiOTFjMWM7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bmhvbGQgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDEsIDE0MSwgMTQxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmhvbGQge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mbGFnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC0zNXB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VydmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTFiMWI7XFxyXFxuICAgIHotaW5kZXg6IDk7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcmlnaHQ6IDI1cHg7XFxyXFxuICAgIHRvcDogMjVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkxYjFiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tZW51bGlzdCB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTFiMWI7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qjs7d0VBRW1EO0lBQ25ELG9CQUFvQjtJQUNwQixzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSw2QkFBNkI7SUFDN0IsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsdUNBQXVDO0lBQ3ZDLGdDQUFnQztBQUNwQzs7OztBQUlBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCOztjQUVVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uYSBTYW5zJztcXHJcXG4gICAgc3JjOlxcclxcbiAgICAgIHVybCgnTW9uYS1TYW5zLndvZmYyJykgZm9ybWF0KCd3b2ZmMiBzdXBwb3J0cyB2YXJpYXRpb25zJyksXFxyXFxuICAgICAgdXJsKCdNb25hLVNhbnMud29mZjInKSBmb3JtYXQoJ3dvZmYyLXZhcmlhdGlvbnMnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMCA5MDA7XFxyXFxuICAgIGZvbnQtc3RyZXRjaDogNzUlIDEyNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9uYSBTYW5zJywgJ0NvdXJpZXIgTmV3JztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbiAgXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkxYzFjO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgXFxcIm5hdlxcXCJcXHJcXG4gICAgICAgIFxcXCJib2R5XFxcIjtcXHJcXG4gICAgYm9yZGVyOiAyNXB4IGRvdWJsZSB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTFiMWI7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHg7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+IGRpdjpmaXJzdC1jaGlsZCA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYWNraW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwMHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICByaWdodDogMjVweDtcXHJcXG4gICAgb3BhY2l0eTogODAlO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkxYjFiO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvID4gaDEge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDAwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5idG5ob2xkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCAjMDAwMDAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bmhvbGQgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5MWMxYztcXHJcXG4gICAgd2lkdGg6IDEwMHB4OyBcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuaG9sZCBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2I5MWMxYztcXHJcXG4gICAgY29sb3I6ICNiOTFjMWM7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bmhvbGQgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDEsIDE0MSwgMTQxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmhvbGQge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mbGFnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC0zNXB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VydmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTFiMWI7XFxyXFxuICAgIHotaW5kZXg6IDk7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcmlnaHQ6IDI1cHg7XFxyXFxuICAgIHRvcDogMjVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkxYjFiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tZW51bGlzdCB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTFiMWI7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLypcclxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xyXG4gIHZhciBsaXN0ID0gW107XHJcblxyXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuICAgIGlmIChkZWR1cGUpIHtcclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcclxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWVkaWEpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXBwb3J0cykge1xyXG4gICAgICAgIGlmICghaXRlbVs0XSkge1xyXG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcclxuICBpZiAoIW9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSB7fTtcclxuICB9XHJcbiAgaWYgKCF1cmwpIHtcclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcclxuXHJcbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXHJcbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XHJcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xyXG4gIH1cclxuICBpZiAob3B0aW9ucy5oYXNoKSB7XHJcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xyXG4gIH1cclxuXHJcbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xyXG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXHJcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xyXG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XHJcbiAgfVxyXG4gIHJldHVybiB1cmw7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xyXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xyXG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xyXG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcclxufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcclxuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcclxuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcclxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxyXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXHJcbiAgICAgICAgcmVmZXJlbmNlczogMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xyXG4gIGFwaS51cGRhdGUob2JqKTtcclxuXHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZXI7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XHJcblxyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuXHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcblxyXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XHJcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XHJcblxyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxyXG5cclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xyXG59XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuXHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG5cclxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG5cclxuICBpZiAobm9uY2UpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XHJcbiAgfVxyXG5cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgY3NzICs9IG9iai5jc3M7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9IC8vIEZvciBvbGQgSUVcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xyXG5cclxuXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxyXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcclxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtwYWdlTG9hZCwgY3JlYXRlRGl2fSBmcm9tICcuL3BhZ2UuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHttZW51UGFnZSwgRk9PRH0gZnJvbSAnLi9tZW51LmpzJztcclxuXHJcbnBhZ2VMb2FkKCk7XHJcblxyXG5jb25zdCBtZW51YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpXHJcbm1lbnVidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGNvbnNvbGUubG9nKEZPT0QpXHJcbiAgICBjb25zdCBtZW51ID0gbWVudVBhZ2UoKTtcclxuICAgIG1lbnUuY2xlYXJPbGQoKVxyXG4gICAgbWVudS5uZXdEaXYoKTtcclxuICAgIG1lbnUubmV3SXRlbShGT09EWzBdKVxyXG59KSIsImNvbnN0IEZPT0QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnS2ltYmFwJyxcclxuICAgICAgICAnZGVzYyc6ICdBIHN1c2hpLWxpa2UgcmljZSByb2xsIGZpbGxlZCB3aXRoIHZlZ2V0YWJsZXMgYW5kIG1lYXQnLFxyXG4gICAgICAgICd1cmwnOiAnLi9LaW1iYXAuanBnJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuZnVuY3Rpb24gbWVudVBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJylcclxuICAgIGNvbnN0IGN1cnZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnZlJylcclxuICAgIGNvbnN0IGJhY2tpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2ltZycpXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIGNvbnN0IG5ld0RpdiA9ICgpID0+IHtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudWxpc3QnKVxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3SXRlbSA9IChvYmopID0+IHtcclxuICAgICAgICBpZiAob2JqLm5hbWUpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBvYmoudXJsXHJcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBgJHtvYmoubmFtZX1gXHJcbiAgICAgICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBgJHtvYmouZGVzY31gXHJcbiAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmFtZSlcclxuICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChkZXNjKVxyXG4gICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGltZylcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5ld0l0ZW0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJPbGQgPSAoKSA9PiB7XHJcbiAgICAgICAgY3VydmUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICAgICAgaGVyby5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgICAgICBiYWNraW1nLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXdJdGVtLFxyXG4gICAgICAgIGNsZWFyT2xkLFxyXG4gICAgICAgIG5ld0RpdlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge21lbnVQYWdlLCBGT09EfSIsImltcG9ydCBTZW91bCBmcm9tICcuL3Nlb3VsLnBuZyc7XHJcbmltcG9ydCBSZXN0IGZyb20gJy4vcmVzdC5wbmcnO1xyXG5pbXBvcnQgS29yZWEgZnJvbSAnLi9rb3JlYV90cmFuc3BhcmVudC5wbmcnO1xyXG5cclxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBuYXZob2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG5hdmhvbGQuY2xhc3NMaXN0LmFkZCgnbmF2aG9sZCcpXHJcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKVxyXG4gICAgYnRuLnRleHRDb250ZW50ID0gJ01lbnUnXHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcclxuICAgIGNvbnN0IGJ0bmhvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYnRuaG9sZC5jbGFzc0xpc3QuYWRkKCdidG5ob2xkJylcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmMgPSBTZW91bDtcclxuICAgIG5hdmhvbGQuYXBwZW5kQ2hpbGQoaW1nKVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdmhvbGQpXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ25hdicpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgIGlmIChpID09PSAwKSAgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+SG9tZTwvYT5gXHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gMSkgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+TWVudTwvYT5gXHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gMikgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5gXHJcbiAgICAgICBcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSlcclxuICAgIH1cclxuICAgIGNvbnN0IGltZzEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnYmFja2ltZycpXHJcbiAgICBpbWcxLnNyYyA9IFJlc3Q7XHJcbiAgICBoMS50ZXh0Q29udGVudCA9ICdTZW91bCBCaXN0cm8nXHJcbiAgICBwLnRleHRDb250ZW50ID0gJ0NoZWNrIG91dCBvdXIgTWVudSEnXHJcbiAgICBidG5ob2xkLmFwcGVuZENoaWxkKHApXHJcbiAgICBidG5ob2xkLmFwcGVuZENoaWxkKGJ0bilcclxuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaDEpXHJcbiAgICBoZXJvLmFwcGVuZENoaWxkKGJ0bmhvbGQpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltZzEpXHJcbiAgICBuYXZob2xkLmFwcGVuZENoaWxkKHVsKVxyXG4gICAgY29uc3Qga3JuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBrcm5pbWcuc3JjID0gS29yZWE7XHJcbiAgICBrcm5pbWcuY2xhc3NMaXN0LmFkZCgnZmxhZycpXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoa3JuaW1nKVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKG5hdilcclxuICAgIGRpdi5hcHBlbmRDaGlsZChoZXJvKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICBjb25zdCBjdXJ2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjdXJ2ZS5jbGFzc0xpc3QuYWRkKCdjdXJ2ZScpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3VydmUpXHJcblxyXG4gICAgLy8gZm9vdGVyXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBLeWxlIFBhcmsgRXN0LiAke2RhdGV9YFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtwYWdlTG9hZH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=