/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* #region Reset CSS */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* #endregion */\n\n/* Color theme */\n:root {\n  --bg-color: hsl(0, 0%, 18%);\n  --bg-color-2: hsl(0, 0%, 25%);\n  --bg-color-3: hsl(0, 0%, 43%);\n  --text-color: hsl(72, 48%, 94%);\n  --highlight-color: hsl(39, 100%, 50%);\n  --pri-1-color: hsl(96, 100%, 50%);\n  --pri-2-color: hsl(54, 100%, 50%);\n  --pri-3-color: hsl(0, 100%, 50%);\n}\n\nbody {\n  display: grid;\n  justify-items: center;\n  background-color: var(--bg-color);\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--text-color);\n}\n\n.grid-container {\n  display: grid;\n}\n\n.main-grid {\n  grid-template-rows: 5% min-content 5% min-content 5% 1fr 5%;\n  grid-template-areas:\n    \".\"\n    \"title\"\n    \".\"\n    \"search\"\n    \".\"\n    \"details\"\n    \".\";\n  width: calc(100% - 20px);\n}\n\n.title-grid {\n  grid-area: title;\n  justify-items: center;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n\n  font-size: 2rem;\n  color: var(--highlight-color);\n}\n\n.search-grid {\n  grid-area: search;\n  grid-template: 45px 45px/ 10% 10% 1fr 5% 1fr 10%;\n  grid-template-areas:\n    \". input input input input .\"\n    \". checkbox label . btn .\";\n  row-gap: 10px;\n}\n\n.search-input {\n  grid-area: input;\n  display: flex;\n  align-items: center;\n  background-color: var(--text-color);\n  font-size: 1.2rem;\n  color: var(--bg-color);\n  border: 2px solid var(--bg-color-3);\n  border-radius: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.search-btn {\n  grid-area: btn;\n  font-size: 0.95rem;\n  font-weight: bold;\n  background-color: var(--bg-color-2);\n  color: var(--text-color);\n  border: 2px solid var(--highlight-color);\n  border-radius: 7px;\n}\n\n.metric-checkbox-label {\n  grid-area: label;\n  align-self: center;\n  font-weight: bold;\n}\n\n.metric-checkbox {\n  grid-area: checkbox;\n}\n\n.details-grid {\n  grid-area: details;\n  justify-self: center;\n  grid-template: 2fr 1fr 1fr 1fr / 10% 1fr 5% 1fr 10%;\n  grid-template-areas:\n    \". condition condition temperature .\"\n    \". humidity . feels .\"\n    \". vis . pressure .\"\n    \" . wind . gust .\";\n  row-gap: 25px;\n  align-items: center;\n  width: 100%;\n}\n\n.condition {\n  grid-area: condition;\n  font-size: 1.4rem;\n}\n\n.temperature {\n  grid-area: temperature;\n  font-size: 1.5rem;\n  justify-self: end;\n}\n\n.feels-like {\n  grid-area: feels;\n  justify-self: end;\n}\n\n.humidity {\n  grid-area: humidity;\n}\n\n.visibility {\n  grid-area: vis;\n}\n\n.wind {\n  grid-area: wind;\n}\n\n.gust {\n  grid-area: gust;\n  justify-self: end;\n}\n\n.pressure {\n  grid-area: pressure;\n  justify-self: end;\n}\n\n@media screen and (min-width: 700px) {\n  .main-grid {\n    width: 500px;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .main-grid {\n    width: 700px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA,eAAe;;AAEf,gBAAgB;AAChB;EACE,2BAA2B;EAC3B,6BAA6B;EAC7B,6BAA6B;EAC7B,+BAA+B;EAC/B,qCAAqC;EACrC,iCAAiC;EACjC,iCAAiC;EACjC,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,iCAAiC;EACjC,yCAAyC;EACzC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,2DAA2D;EAC3D;;;;;;;OAOK;EACL,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;;EAEnB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,gDAAgD;EAChD;;8BAE4B;EAC5B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,iBAAiB;EACjB,sBAAsB;EACtB,mCAAmC;EACnC,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,mCAAmC;EACnC,wBAAwB;EACxB,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,mDAAmD;EACnD;;;;sBAIoB;EACpB,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF","sourcesContent":["/* #region Reset CSS */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* #endregion */\n\n/* Color theme */\n:root {\n  --bg-color: hsl(0, 0%, 18%);\n  --bg-color-2: hsl(0, 0%, 25%);\n  --bg-color-3: hsl(0, 0%, 43%);\n  --text-color: hsl(72, 48%, 94%);\n  --highlight-color: hsl(39, 100%, 50%);\n  --pri-1-color: hsl(96, 100%, 50%);\n  --pri-2-color: hsl(54, 100%, 50%);\n  --pri-3-color: hsl(0, 100%, 50%);\n}\n\nbody {\n  display: grid;\n  justify-items: center;\n  background-color: var(--bg-color);\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--text-color);\n}\n\n.grid-container {\n  display: grid;\n}\n\n.main-grid {\n  grid-template-rows: 5% min-content 5% min-content 5% 1fr 5%;\n  grid-template-areas:\n    \".\"\n    \"title\"\n    \".\"\n    \"search\"\n    \".\"\n    \"details\"\n    \".\";\n  width: calc(100% - 20px);\n}\n\n.title-grid {\n  grid-area: title;\n  justify-items: center;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n\n  font-size: 2rem;\n  color: var(--highlight-color);\n}\n\n.search-grid {\n  grid-area: search;\n  grid-template: 45px 45px/ 10% 10% 1fr 5% 1fr 10%;\n  grid-template-areas:\n    \". input input input input .\"\n    \". checkbox label . btn .\";\n  row-gap: 10px;\n}\n\n.search-input {\n  grid-area: input;\n  display: flex;\n  align-items: center;\n  background-color: var(--text-color);\n  font-size: 1.2rem;\n  color: var(--bg-color);\n  border: 2px solid var(--bg-color-3);\n  border-radius: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.search-btn {\n  grid-area: btn;\n  font-size: 0.95rem;\n  font-weight: bold;\n  background-color: var(--bg-color-2);\n  color: var(--text-color);\n  border: 2px solid var(--highlight-color);\n  border-radius: 7px;\n}\n\n.metric-checkbox-label {\n  grid-area: label;\n  align-self: center;\n  font-weight: bold;\n}\n\n.metric-checkbox {\n  grid-area: checkbox;\n}\n\n.details-grid {\n  grid-area: details;\n  justify-self: center;\n  grid-template: 2fr 1fr 1fr 1fr / 10% 1fr 5% 1fr 10%;\n  grid-template-areas:\n    \". condition condition temperature .\"\n    \". humidity . feels .\"\n    \". vis . pressure .\"\n    \" . wind . gust .\";\n  row-gap: 25px;\n  align-items: center;\n  width: 100%;\n}\n\n.condition {\n  grid-area: condition;\n  font-size: 1.4rem;\n}\n\n.temperature {\n  grid-area: temperature;\n  font-size: 1.5rem;\n  justify-self: end;\n}\n\n.feels-like {\n  grid-area: feels;\n  justify-self: end;\n}\n\n.humidity {\n  grid-area: humidity;\n}\n\n.visibility {\n  grid-area: vis;\n}\n\n.wind {\n  grid-area: wind;\n}\n\n.gust {\n  grid-area: gust;\n  justify-self: end;\n}\n\n.pressure {\n  grid-area: pressure;\n  justify-self: end;\n}\n\n@media screen and (min-width: 700px) {\n  .main-grid {\n    width: 500px;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .main-grid {\n    width: 700px;\n  }\n}\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/weatherInfoGetter.js":
/*!**********************************!*\
  !*** ./src/weatherInfoGetter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weatherInfoGetter = (location) => {
  const requestWeather = async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=fc5008ce75624eafa22190524231305&q=${location}`
    );
    if (response.ok) {
      const weatherInfoJson = await response.json();
      return weatherInfoJson;
    }
    return Promise.reject(response);
  };

  return requestWeather();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherInfoGetter);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weatherInfoGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherInfoGetter */ "./src/weatherInfoGetter.js");



// References
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const metricCheckbox = document.querySelector(".metric-checkbox");
const detailsGrid = document.querySelector(".details-grid");
const conditionP = detailsGrid.querySelector(".condition");
const temperatureP = detailsGrid.querySelector(".temperature");
const feelsLikeP = detailsGrid.querySelector(".feels-like");
const humidityP = detailsGrid.querySelector(".humidity");
const visibilityP = detailsGrid.querySelector(".visibility");
const windP = detailsGrid.querySelector(".wind");
const gustP = detailsGrid.querySelector(".gust");
const pressureP = detailsGrid.querySelector(".pressure");

// Variables
let weatherInfo;
let metricToggle = false;

// Search input validation
const setSearchInputInvalid = (message) => {
  searchInput.setCustomValidity(message);
  searchInput.reportValidity();
};

const setSearchInputValid = () => {
  searchInput.setCustomValidity("");
};

// #region Render Details
// Search value
const renderSearchValue = () => {
  if (weatherInfo.location.name) {
    searchInput.value = weatherInfo.location.name;
  }
  if (weatherInfo.location.region) {
    searchInput.value += `, ${weatherInfo.location.region}`;
  }
  if (weatherInfo.location.country && weatherInfo.location.country) {
    searchInput.value += `, ${weatherInfo.location.country}`;
  }
};
// Condition
const renderCondition = () => {
  if (weatherInfo.current.condition.text) {
    conditionP.textContent = weatherInfo.current.condition.text;
  }
};
// Temp
const renderTemperature = (metric = false) => {
  if (weatherInfo.current.temp_f && !metric) {
    temperatureP.textContent = `${weatherInfo.current.temp_f} °F`;
  } else if (weatherInfo.current.temp_c && metric) {
    temperatureP.textContent = `${weatherInfo.current.temp_c} °C`;
  } else {
    temperatureP.textContent = `Temperature N/A`;
  }
};
// Feels like
const renderFeelsLike = (metric = false) => {
  if (weatherInfo.current.feelslike_f && !metric) {
    feelsLikeP.textContent = `Feels like: ${weatherInfo.current.feelslike_f} °F`;
  } else if (weatherInfo.current.feelslike_c && metric) {
    feelsLikeP.textContent = `Feels like: ${weatherInfo.current.feelslike_c} °C`;
  } else {
    feelsLikeP.textContent = "Feels like: n/a";
  }
};
// Humidity
const renderHumidity = () => {
  if (weatherInfo.current.humidity) {
    humidityP.textContent = `Humidity: ${weatherInfo.current.humidity}%`;
  }
};
// Visibility
const renderVisibility = (metric = false) => {
  if (weatherInfo.current.vis_miles && !metric) {
    visibilityP.textContent = `Visibility: ${weatherInfo.current.vis_miles} miles`;
  } else if (weatherInfo.current.vis_km && metric) {
    visibilityP.textContent = `Visibility: ${weatherInfo.current.vis_km} km`;
  } else {
    visibilityP.textContent = "Visibility: n/a";
  }
};
// Wind
const renderWind = (metric = false) => {
  if (weatherInfo.current.wind_dir && weatherInfo.current.wind_mph && !metric) {
    windP.textContent = `Wind: ${weatherInfo.current.wind_mph} mph, ${weatherInfo.current.wind_dir}`;
  } else if (
    weatherInfo.current.wind_dir &&
    weatherInfo.current.wind_kph &&
    metric
  ) {
    windP.textContent = `Wind: ${weatherInfo.current.wind_kph} kph, ${weatherInfo.current.wind_dir}`;
  } else {
    windP.textContent = "Wind: n/a";
  }
};
// Gust
const renderGust = (metric = false) => {
  if (weatherInfo.current.gust_mph && !metric) {
    gustP.textContent = `Gust: ${weatherInfo.current.gust_mph} mph`;
  } else if (weatherInfo.current.gust_kph && metric) {
    gustP.textContent = `Gust: ${weatherInfo.current.gust_kph} kph`;
  } else gustP.textContent = "Gust: n/a";
};
// Pressure
const renderPressure = (metric = false) => {
  if (weatherInfo.current.pressure_in && !metric) {
    pressureP.textContent = `Pressure: ${weatherInfo.current.pressure_in} in`;
  } else if (weatherInfo.current.pressure_mb && metric) {
    pressureP.textContent = `Pressure: ${weatherInfo.current.pressure_mb} mb`;
  } else pressureP.textContent = "Pressure: n/a";
};
// Meta render method
const renderDetails = () => {
  renderSearchValue();
  renderCondition();
  renderTemperature(metricToggle);
  renderFeelsLike(metricToggle);
  renderHumidity(metricToggle);
  renderVisibility(metricToggle);
  renderWind(metricToggle);
  renderGust(metricToggle);
  renderPressure(metricToggle);
};

// #endregion

// Handle metric system option
const toggleMetricSystem = () => {
  metricToggle = metricCheckbox.checked;
  if (weatherInfo) {
    renderDetails(metricToggle);
  }
};
// When checkbox checked
metricCheckbox.addEventListener("change", toggleMetricSystem);

// Search for input term
const weatherSearch = async () => {
  if (searchInput.value.trim() === "") {
    setSearchInputInvalid("Cannot search for nowhere.");
    return;
  }

  try {
    weatherInfo = await (0,_weatherInfoGetter__WEBPACK_IMPORTED_MODULE_1__["default"])(searchInput.value.trim());
    setSearchInputValid();
    renderDetails();
  } catch (err) {
    setSearchInputInvalid("Search failed. Location not found.");
  }
};
// When search input enter key
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    weatherSearch();
  }
});
// Or when search btn clicked
searchBtn.addEventListener("click", weatherSearch);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qy9ELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpQ0FBaUM7QUFDMUUsSUFBSTtBQUNKLHlDQUF5QyxpQ0FBaUM7QUFDMUUsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsOERBQVU7QUFDbEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVySW5mb0dldHRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICNyZWdpb24gUmVzZXQgQ1NTICovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIENvbG9yIHRoZW1lICovXFxuOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogaHNsKDAsIDAlLCAxOCUpO1xcbiAgLS1iZy1jb2xvci0yOiBoc2woMCwgMCUsIDI1JSk7XFxuICAtLWJnLWNvbG9yLTM6IGhzbCgwLCAwJSwgNDMlKTtcXG4gIC0tdGV4dC1jb2xvcjogaHNsKDcyLCA0OCUsIDk0JSk7XFxuICAtLWhpZ2hsaWdodC1jb2xvcjogaHNsKDM5LCAxMDAlLCA1MCUpO1xcbiAgLS1wcmktMS1jb2xvcjogaHNsKDk2LCAxMDAlLCA1MCUpO1xcbiAgLS1wcmktMi1jb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcbiAgLS1wcmktMy1jb2xvcjogaHNsKDAsIDEwMCUsIDUwJSk7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm1haW4tZ3JpZCB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUlIG1pbi1jb250ZW50IDUlIG1pbi1jb250ZW50IDUlIDFmciA1JTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCIuXFxcIlxcbiAgICBcXFwidGl0bGVcXFwiXFxuICAgIFxcXCIuXFxcIlxcbiAgICBcXFwic2VhcmNoXFxcIlxcbiAgICBcXFwiLlxcXCJcXG4gICAgXFxcImRldGFpbHNcXFwiXFxuICAgIFxcXCIuXFxcIjtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG59XFxuXFxuLnRpdGxlLWdyaWQge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWhpZ2hsaWdodC1jb2xvcik7XFxufVxcblxcbi5zZWFyY2gtZ3JpZCB7XFxuICBncmlkLWFyZWE6IHNlYXJjaDtcXG4gIGdyaWQtdGVtcGxhdGU6IDQ1cHggNDVweC8gMTAlIDEwJSAxZnIgNSUgMWZyIDEwJTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCIuIGlucHV0IGlucHV0IGlucHV0IGlucHV0IC5cXFwiXFxuICAgIFxcXCIuIGNoZWNrYm94IGxhYmVsIC4gYnRuIC5cXFwiO1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICBncmlkLWFyZWE6IGlucHV0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLTMpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGdyaWQtYXJlYTogYnRuO1xcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhpZ2hsaWdodC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5tZXRyaWMtY2hlY2tib3gtbGFiZWwge1xcbiAgZ3JpZC1hcmVhOiBsYWJlbDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWV0cmljLWNoZWNrYm94IHtcXG4gIGdyaWQtYXJlYTogY2hlY2tib3g7XFxufVxcblxcbi5kZXRhaWxzLWdyaWQge1xcbiAgZ3JpZC1hcmVhOiBkZXRhaWxzO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlOiAyZnIgMWZyIDFmciAxZnIgLyAxMCUgMWZyIDUlIDFmciAxMCU7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiLiBjb25kaXRpb24gY29uZGl0aW9uIHRlbXBlcmF0dXJlIC5cXFwiXFxuICAgIFxcXCIuIGh1bWlkaXR5IC4gZmVlbHMgLlxcXCJcXG4gICAgXFxcIi4gdmlzIC4gcHJlc3N1cmUgLlxcXCJcXG4gICAgXFxcIiAuIHdpbmQgLiBndXN0IC5cXFwiO1xcbiAgcm93LWdhcDogMjVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbmRpdGlvbiB7XFxuICBncmlkLWFyZWE6IGNvbmRpdGlvbjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgZ3JpZC1hcmVhOiB0ZW1wZXJhdHVyZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5mZWVscy1saWtlIHtcXG4gIGdyaWQtYXJlYTogZmVlbHM7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmh1bWlkaXR5IHtcXG4gIGdyaWQtYXJlYTogaHVtaWRpdHk7XFxufVxcblxcbi52aXNpYmlsaXR5IHtcXG4gIGdyaWQtYXJlYTogdmlzO1xcbn1cXG5cXG4ud2luZCB7XFxuICBncmlkLWFyZWE6IHdpbmQ7XFxufVxcblxcbi5ndXN0IHtcXG4gIGdyaWQtYXJlYTogZ3VzdDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ucHJlc3N1cmUge1xcbiAgZ3JpZC1hcmVhOiBwcmVzc3VyZTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgLm1haW4tZ3JpZCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAubWFpbi1ncmlkIHtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjtBQUN0Qjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBLGVBQWU7O0FBRWYsZ0JBQWdCO0FBQ2hCO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsaUNBQWlDO0VBQ2pDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLHlDQUF5QztFQUN6Qyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0Q7Ozs7Ozs7T0FPSztFQUNMLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdEQUFnRDtFQUNoRDs7OEJBRTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsd0NBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtREFBbUQ7RUFDbkQ7Ozs7c0JBSW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAjcmVnaW9uIFJlc2V0IENTUyAqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBDb2xvciB0aGVtZSAqL1xcbjpyb290IHtcXG4gIC0tYmctY29sb3I6IGhzbCgwLCAwJSwgMTglKTtcXG4gIC0tYmctY29sb3ItMjogaHNsKDAsIDAlLCAyNSUpO1xcbiAgLS1iZy1jb2xvci0zOiBoc2woMCwgMCUsIDQzJSk7XFxuICAtLXRleHQtY29sb3I6IGhzbCg3MiwgNDglLCA5NCUpO1xcbiAgLS1oaWdobGlnaHQtY29sb3I6IGhzbCgzOSwgMTAwJSwgNTAlKTtcXG4gIC0tcHJpLTEtY29sb3I6IGhzbCg5NiwgMTAwJSwgNTAlKTtcXG4gIC0tcHJpLTItY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXG4gIC0tcHJpLTMtY29sb3I6IGhzbCgwLCAxMDAlLCA1MCUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tYWluLWdyaWQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1JSBtaW4tY29udGVudCA1JSBtaW4tY29udGVudCA1JSAxZnIgNSU7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiLlxcXCJcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwiLlxcXCJcXG4gICAgXFxcInNlYXJjaFxcXCJcXG4gICAgXFxcIi5cXFwiXFxuICAgIFxcXCJkZXRhaWxzXFxcIlxcbiAgICBcXFwiLlxcXCI7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcblxcbi50aXRsZS1ncmlkIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uc2VhcmNoLWdyaWQge1xcbiAgZ3JpZC1hcmVhOiBzZWFyY2g7XFxuICBncmlkLXRlbXBsYXRlOiA0NXB4IDQ1cHgvIDEwJSAxMCUgMWZyIDUlIDFmciAxMCU7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiLiBpbnB1dCBpbnB1dCBpbnB1dCBpbnB1dCAuXFxcIlxcbiAgICBcXFwiLiBjaGVja2JveCBsYWJlbCAuIGJ0biAuXFxcIjtcXG4gIHJvdy1nYXA6IDEwcHg7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZy1jb2xvci0zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBncmlkLWFyZWE6IGJ0bjtcXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4ubWV0cmljLWNoZWNrYm94LWxhYmVsIHtcXG4gIGdyaWQtYXJlYTogbGFiZWw7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1ldHJpYy1jaGVja2JveCB7XFxuICBncmlkLWFyZWE6IGNoZWNrYm94O1xcbn1cXG5cXG4uZGV0YWlscy1ncmlkIHtcXG4gIGdyaWQtYXJlYTogZGV0YWlscztcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMmZyIDFmciAxZnIgMWZyIC8gMTAlIDFmciA1JSAxZnIgMTAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIi4gY29uZGl0aW9uIGNvbmRpdGlvbiB0ZW1wZXJhdHVyZSAuXFxcIlxcbiAgICBcXFwiLiBodW1pZGl0eSAuIGZlZWxzIC5cXFwiXFxuICAgIFxcXCIuIHZpcyAuIHByZXNzdXJlIC5cXFwiXFxuICAgIFxcXCIgLiB3aW5kIC4gZ3VzdCAuXFxcIjtcXG4gIHJvdy1nYXA6IDI1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb25kaXRpb24ge1xcbiAgZ3JpZC1hcmVhOiBjb25kaXRpb247XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gIGdyaWQtYXJlYTogdGVtcGVyYXR1cmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uZmVlbHMtbGlrZSB7XFxuICBncmlkLWFyZWE6IGZlZWxzO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICBncmlkLWFyZWE6IGh1bWlkaXR5O1xcbn1cXG5cXG4udmlzaWJpbGl0eSB7XFxuICBncmlkLWFyZWE6IHZpcztcXG59XFxuXFxuLndpbmQge1xcbiAgZ3JpZC1hcmVhOiB3aW5kO1xcbn1cXG5cXG4uZ3VzdCB7XFxuICBncmlkLWFyZWE6IGd1c3Q7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnByZXNzdXJlIHtcXG4gIGdyaWQtYXJlYTogcHJlc3N1cmU7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gIC5tYWluLWdyaWQge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgLm1haW4tZ3JpZCB7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHdlYXRoZXJJbmZvR2V0dGVyID0gKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3RXZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1mYzUwMDhjZTc1NjI0ZWFmYTIyMTkwNTI0MjMxMzA1JnE9JHtsb2NhdGlvbn1gXG4gICAgKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IHdlYXRoZXJJbmZvSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiB3ZWF0aGVySW5mb0pzb247XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSk7XG4gIH07XG5cbiAgcmV0dXJuIHJlcXVlc3RXZWF0aGVyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVySW5mb0dldHRlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi93ZWF0aGVySW5mb0dldHRlclwiO1xuXG4vLyBSZWZlcmVuY2VzXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWlucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnRuXCIpO1xuY29uc3QgbWV0cmljQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1ldHJpYy1jaGVja2JveFwiKTtcbmNvbnN0IGRldGFpbHNHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWdyaWRcIik7XG5jb25zdCBjb25kaXRpb25QID0gZGV0YWlsc0dyaWQucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb25cIik7XG5jb25zdCB0ZW1wZXJhdHVyZVAgPSBkZXRhaWxzR3JpZC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xuY29uc3QgZmVlbHNMaWtlUCA9IGRldGFpbHNHcmlkLnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHMtbGlrZVwiKTtcbmNvbnN0IGh1bWlkaXR5UCA9IGRldGFpbHNHcmlkLnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG5jb25zdCB2aXNpYmlsaXR5UCA9IGRldGFpbHNHcmlkLnF1ZXJ5U2VsZWN0b3IoXCIudmlzaWJpbGl0eVwiKTtcbmNvbnN0IHdpbmRQID0gZGV0YWlsc0dyaWQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpO1xuY29uc3QgZ3VzdFAgPSBkZXRhaWxzR3JpZC5xdWVyeVNlbGVjdG9yKFwiLmd1c3RcIik7XG5jb25zdCBwcmVzc3VyZVAgPSBkZXRhaWxzR3JpZC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzdXJlXCIpO1xuXG4vLyBWYXJpYWJsZXNcbmxldCB3ZWF0aGVySW5mbztcbmxldCBtZXRyaWNUb2dnbGUgPSBmYWxzZTtcblxuLy8gU2VhcmNoIGlucHV0IHZhbGlkYXRpb25cbmNvbnN0IHNldFNlYXJjaElucHV0SW52YWxpZCA9IChtZXNzYWdlKSA9PiB7XG4gIHNlYXJjaElucHV0LnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpO1xuICBzZWFyY2hJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xufTtcblxuY29uc3Qgc2V0U2VhcmNoSW5wdXRWYWxpZCA9ICgpID0+IHtcbiAgc2VhcmNoSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG59O1xuXG4vLyAjcmVnaW9uIFJlbmRlciBEZXRhaWxzXG4vLyBTZWFyY2ggdmFsdWVcbmNvbnN0IHJlbmRlclNlYXJjaFZhbHVlID0gKCkgPT4ge1xuICBpZiAod2VhdGhlckluZm8ubG9jYXRpb24ubmFtZSkge1xuICAgIHNlYXJjaElucHV0LnZhbHVlID0gd2VhdGhlckluZm8ubG9jYXRpb24ubmFtZTtcbiAgfVxuICBpZiAod2VhdGhlckluZm8ubG9jYXRpb24ucmVnaW9uKSB7XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgKz0gYCwgJHt3ZWF0aGVySW5mby5sb2NhdGlvbi5yZWdpb259YDtcbiAgfVxuICBpZiAod2VhdGhlckluZm8ubG9jYXRpb24uY291bnRyeSAmJiB3ZWF0aGVySW5mby5sb2NhdGlvbi5jb3VudHJ5KSB7XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgKz0gYCwgJHt3ZWF0aGVySW5mby5sb2NhdGlvbi5jb3VudHJ5fWA7XG4gIH1cbn07XG4vLyBDb25kaXRpb25cbmNvbnN0IHJlbmRlckNvbmRpdGlvbiA9ICgpID0+IHtcbiAgaWYgKHdlYXRoZXJJbmZvLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpIHtcbiAgICBjb25kaXRpb25QLnRleHRDb250ZW50ID0gd2VhdGhlckluZm8uY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgfVxufTtcbi8vIFRlbXBcbmNvbnN0IHJlbmRlclRlbXBlcmF0dXJlID0gKG1ldHJpYyA9IGZhbHNlKSA9PiB7XG4gIGlmICh3ZWF0aGVySW5mby5jdXJyZW50LnRlbXBfZiAmJiAhbWV0cmljKSB7XG4gICAgdGVtcGVyYXR1cmVQLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uY3VycmVudC50ZW1wX2Z9IMKwRmA7XG4gIH0gZWxzZSBpZiAod2VhdGhlckluZm8uY3VycmVudC50ZW1wX2MgJiYgbWV0cmljKSB7XG4gICAgdGVtcGVyYXR1cmVQLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckluZm8uY3VycmVudC50ZW1wX2N9IMKwQ2A7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGVyYXR1cmVQLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlIE4vQWA7XG4gIH1cbn07XG4vLyBGZWVscyBsaWtlXG5jb25zdCByZW5kZXJGZWVsc0xpa2UgPSAobWV0cmljID0gZmFsc2UpID0+IHtcbiAgaWYgKHdlYXRoZXJJbmZvLmN1cnJlbnQuZmVlbHNsaWtlX2YgJiYgIW1ldHJpYykge1xuICAgIGZlZWxzTGlrZVAudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHt3ZWF0aGVySW5mby5jdXJyZW50LmZlZWxzbGlrZV9mfSDCsEZgO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJJbmZvLmN1cnJlbnQuZmVlbHNsaWtlX2MgJiYgbWV0cmljKSB7XG4gICAgZmVlbHNMaWtlUC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke3dlYXRoZXJJbmZvLmN1cnJlbnQuZmVlbHNsaWtlX2N9IMKwQ2A7XG4gIH0gZWxzZSB7XG4gICAgZmVlbHNMaWtlUC50ZXh0Q29udGVudCA9IFwiRmVlbHMgbGlrZTogbi9hXCI7XG4gIH1cbn07XG4vLyBIdW1pZGl0eVxuY29uc3QgcmVuZGVySHVtaWRpdHkgPSAoKSA9PiB7XG4gIGlmICh3ZWF0aGVySW5mby5jdXJyZW50Lmh1bWlkaXR5KSB7XG4gICAgaHVtaWRpdHlQLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJJbmZvLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gIH1cbn07XG4vLyBWaXNpYmlsaXR5XG5jb25zdCByZW5kZXJWaXNpYmlsaXR5ID0gKG1ldHJpYyA9IGZhbHNlKSA9PiB7XG4gIGlmICh3ZWF0aGVySW5mby5jdXJyZW50LnZpc19taWxlcyAmJiAhbWV0cmljKSB7XG4gICAgdmlzaWJpbGl0eVAudGV4dENvbnRlbnQgPSBgVmlzaWJpbGl0eTogJHt3ZWF0aGVySW5mby5jdXJyZW50LnZpc19taWxlc30gbWlsZXNgO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJJbmZvLmN1cnJlbnQudmlzX2ttICYmIG1ldHJpYykge1xuICAgIHZpc2liaWxpdHlQLnRleHRDb250ZW50ID0gYFZpc2liaWxpdHk6ICR7d2VhdGhlckluZm8uY3VycmVudC52aXNfa219IGttYDtcbiAgfSBlbHNlIHtcbiAgICB2aXNpYmlsaXR5UC50ZXh0Q29udGVudCA9IFwiVmlzaWJpbGl0eTogbi9hXCI7XG4gIH1cbn07XG4vLyBXaW5kXG5jb25zdCByZW5kZXJXaW5kID0gKG1ldHJpYyA9IGZhbHNlKSA9PiB7XG4gIGlmICh3ZWF0aGVySW5mby5jdXJyZW50LndpbmRfZGlyICYmIHdlYXRoZXJJbmZvLmN1cnJlbnQud2luZF9tcGggJiYgIW1ldHJpYykge1xuICAgIHdpbmRQLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7d2VhdGhlckluZm8uY3VycmVudC53aW5kX21waH0gbXBoLCAke3dlYXRoZXJJbmZvLmN1cnJlbnQud2luZF9kaXJ9YDtcbiAgfSBlbHNlIGlmIChcbiAgICB3ZWF0aGVySW5mby5jdXJyZW50LndpbmRfZGlyICYmXG4gICAgd2VhdGhlckluZm8uY3VycmVudC53aW5kX2twaCAmJlxuICAgIG1ldHJpY1xuICApIHtcbiAgICB3aW5kUC50ZXh0Q29udGVudCA9IGBXaW5kOiAke3dlYXRoZXJJbmZvLmN1cnJlbnQud2luZF9rcGh9IGtwaCwgJHt3ZWF0aGVySW5mby5jdXJyZW50LndpbmRfZGlyfWA7XG4gIH0gZWxzZSB7XG4gICAgd2luZFAudGV4dENvbnRlbnQgPSBcIldpbmQ6IG4vYVwiO1xuICB9XG59O1xuLy8gR3VzdFxuY29uc3QgcmVuZGVyR3VzdCA9IChtZXRyaWMgPSBmYWxzZSkgPT4ge1xuICBpZiAod2VhdGhlckluZm8uY3VycmVudC5ndXN0X21waCAmJiAhbWV0cmljKSB7XG4gICAgZ3VzdFAudGV4dENvbnRlbnQgPSBgR3VzdDogJHt3ZWF0aGVySW5mby5jdXJyZW50Lmd1c3RfbXBofSBtcGhgO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJJbmZvLmN1cnJlbnQuZ3VzdF9rcGggJiYgbWV0cmljKSB7XG4gICAgZ3VzdFAudGV4dENvbnRlbnQgPSBgR3VzdDogJHt3ZWF0aGVySW5mby5jdXJyZW50Lmd1c3Rfa3BofSBrcGhgO1xuICB9IGVsc2UgZ3VzdFAudGV4dENvbnRlbnQgPSBcIkd1c3Q6IG4vYVwiO1xufTtcbi8vIFByZXNzdXJlXG5jb25zdCByZW5kZXJQcmVzc3VyZSA9IChtZXRyaWMgPSBmYWxzZSkgPT4ge1xuICBpZiAod2VhdGhlckluZm8uY3VycmVudC5wcmVzc3VyZV9pbiAmJiAhbWV0cmljKSB7XG4gICAgcHJlc3N1cmVQLnRleHRDb250ZW50ID0gYFByZXNzdXJlOiAke3dlYXRoZXJJbmZvLmN1cnJlbnQucHJlc3N1cmVfaW59IGluYDtcbiAgfSBlbHNlIGlmICh3ZWF0aGVySW5mby5jdXJyZW50LnByZXNzdXJlX21iICYmIG1ldHJpYykge1xuICAgIHByZXNzdXJlUC50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHt3ZWF0aGVySW5mby5jdXJyZW50LnByZXNzdXJlX21ifSBtYmA7XG4gIH0gZWxzZSBwcmVzc3VyZVAudGV4dENvbnRlbnQgPSBcIlByZXNzdXJlOiBuL2FcIjtcbn07XG4vLyBNZXRhIHJlbmRlciBtZXRob2RcbmNvbnN0IHJlbmRlckRldGFpbHMgPSAoKSA9PiB7XG4gIHJlbmRlclNlYXJjaFZhbHVlKCk7XG4gIHJlbmRlckNvbmRpdGlvbigpO1xuICByZW5kZXJUZW1wZXJhdHVyZShtZXRyaWNUb2dnbGUpO1xuICByZW5kZXJGZWVsc0xpa2UobWV0cmljVG9nZ2xlKTtcbiAgcmVuZGVySHVtaWRpdHkobWV0cmljVG9nZ2xlKTtcbiAgcmVuZGVyVmlzaWJpbGl0eShtZXRyaWNUb2dnbGUpO1xuICByZW5kZXJXaW5kKG1ldHJpY1RvZ2dsZSk7XG4gIHJlbmRlckd1c3QobWV0cmljVG9nZ2xlKTtcbiAgcmVuZGVyUHJlc3N1cmUobWV0cmljVG9nZ2xlKTtcbn07XG5cbi8vICNlbmRyZWdpb25cblxuLy8gSGFuZGxlIG1ldHJpYyBzeXN0ZW0gb3B0aW9uXG5jb25zdCB0b2dnbGVNZXRyaWNTeXN0ZW0gPSAoKSA9PiB7XG4gIG1ldHJpY1RvZ2dsZSA9IG1ldHJpY0NoZWNrYm94LmNoZWNrZWQ7XG4gIGlmICh3ZWF0aGVySW5mbykge1xuICAgIHJlbmRlckRldGFpbHMobWV0cmljVG9nZ2xlKTtcbiAgfVxufTtcbi8vIFdoZW4gY2hlY2tib3ggY2hlY2tlZFxubWV0cmljQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0b2dnbGVNZXRyaWNTeXN0ZW0pO1xuXG4vLyBTZWFyY2ggZm9yIGlucHV0IHRlcm1cbmNvbnN0IHdlYXRoZXJTZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gIGlmIChzZWFyY2hJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICBzZXRTZWFyY2hJbnB1dEludmFsaWQoXCJDYW5ub3Qgc2VhcmNoIGZvciBub3doZXJlLlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIHdlYXRoZXJJbmZvID0gYXdhaXQgZ2V0V2VhdGhlcihzZWFyY2hJbnB1dC52YWx1ZS50cmltKCkpO1xuICAgIHNldFNlYXJjaElucHV0VmFsaWQoKTtcbiAgICByZW5kZXJEZXRhaWxzKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHNldFNlYXJjaElucHV0SW52YWxpZChcIlNlYXJjaCBmYWlsZWQuIExvY2F0aW9uIG5vdCBmb3VuZC5cIik7XG4gIH1cbn07XG4vLyBXaGVuIHNlYXJjaCBpbnB1dCBlbnRlciBrZXlcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgd2VhdGhlclNlYXJjaCgpO1xuICB9XG59KTtcbi8vIE9yIHdoZW4gc2VhcmNoIGJ0biBjbGlja2VkXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdlYXRoZXJTZWFyY2gpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9