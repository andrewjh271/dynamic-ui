/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@andrewjh271/menu/dist/main.js":
/*!*****************************************************!*\
  !*** ./node_modules/@andrewjh271/menu/dist/main.js ***!
  \*****************************************************/
/***/ (() => {

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __nested_webpack_require_562__) => {

__nested_webpack_require_562__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_562__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_562__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_562__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_562__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_562__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  padding: 5px 18px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n}\n.hamburger:hover {\n  opacity: 0.7;\n}\n.hamburger.is-active:hover {\n  opacity: 0.7;\n}\n.hamburger.is-active .hamburger-inner,\n.hamburger.is-active .hamburger-inner::before,\n.hamburger.is-active .hamburger-inner::after {\n  background-color: #475480;\n}\n\n.hamburger-box {\n  width: 25px;\n  height: 19.5px;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -1.25px;\n}\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 25px;\n  height: 2.5px;\n  background-color: #475480;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n}\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block;\n}\n.hamburger-inner::before {\n  top: -8.5px;\n}\n.hamburger-inner::after {\n  bottom: -8.5px;\n}\n\n/*\n * 3DX\n */\n.hamburger--3dx .hamburger-box {\n  perspective: 50px;\n}\n.hamburger--3dx .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dx.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateY(180deg);\n}\n.hamburger--3dx.is-active .hamburger-inner::before {\n  transform: translate3d(0, 8.5px, 0) rotate(45deg);\n}\n.hamburger--3dx.is-active .hamburger-inner::after {\n  transform: translate3d(0, -8.5px, 0) rotate(-45deg);\n}\n\n/*\n * 3DX Reverse\n */\n.hamburger--3dx-r .hamburger-box {\n  perspective: 50px;\n}\n.hamburger--3dx-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dx-r .hamburger-inner::before, .hamburger--3dx-r .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dx-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateY(-180deg);\n}\n.hamburger--3dx-r.is-active .hamburger-inner::before {\n  transform: translate3d(0, 8.5px, 0) rotate(45deg);\n}\n.hamburger--3dx-r.is-active .hamburger-inner::after {\n  transform: translate3d(0, -8.5px, 0) rotate(-45deg);\n}\n\n/*\n * 3DY\n */\n.hamburger--3dy .hamburger-box {\n  perspective: 50px;\n}\n.hamburger--3dy .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dy .hamburger-inner::before, .hamburger--3dy .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dy.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(-180deg);\n}\n.hamburger--3dy.is-active .hamburger-inner::before {\n  transform: translate3d(0, 8.5px, 0) rotate(45deg);\n}\n.hamburger--3dy.is-active .hamburger-inner::after {\n  transform: translate3d(0, -8.5px, 0) rotate(-45deg);\n}\n\n/*\n * 3DY Reverse\n */\n.hamburger--3dy-r .hamburger-box {\n  perspective: 50px;\n}\n.hamburger--3dy-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dy-r .hamburger-inner::before, .hamburger--3dy-r .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dy-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg);\n}\n.hamburger--3dy-r.is-active .hamburger-inner::before {\n  transform: translate3d(0, 8.5px, 0) rotate(45deg);\n}\n.hamburger--3dy-r.is-active .hamburger-inner::after {\n  transform: translate3d(0, -8.5px, 0) rotate(-45deg);\n}\n\n/*\n * 3DXY\n */\n.hamburger--3dxy .hamburger-box {\n  perspective: 50px;\n}\n.hamburger--3dxy .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dxy .hamburger-inner::before, .hamburger--3dxy .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dxy.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg) rotateY(180deg);\n}\n.hamburger--3dxy.is-active .hamburger-inner::before {\n  transform: translate3d(0, 8.5px, 0) rotate(45deg);\n}\n.hamburger--3dxy.is-active .hamburger-inner::after {\n  transform: translate3d(0, -8.5px, 0) rotate(-45deg);\n}\n\n/*\n * 3DXY Reverse\n */\n.hamburger--3dxy-r .hamburger-box {\n  perspective: 50px;\n}\n.hamburger--3dxy-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dxy-r .hamburger-inner::before, .hamburger--3dxy-r .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dxy-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);\n}\n.hamburger--3dxy-r.is-active .hamburger-inner::before {\n  transform: translate3d(0, 8.5px, 0) rotate(45deg);\n}\n.hamburger--3dxy-r.is-active .hamburger-inner::after {\n  transform: translate3d(0, -8.5px, 0) rotate(-45deg);\n}\n\n/*\n * Arrow\n */\n.hamburger--arrow.is-active .hamburger-inner::before {\n  transform: translate3d(-5px, 0, 0) rotate(-45deg) scale(0.7, 1);\n}\n.hamburger--arrow.is-active .hamburger-inner::after {\n  transform: translate3d(-5px, 0, 0) rotate(45deg) scale(0.7, 1);\n}\n\n/*\n * Arrow Right\n */\n.hamburger--arrow-r.is-active .hamburger-inner::before {\n  transform: translate3d(5px, 0, 0) rotate(45deg) scale(0.7, 1);\n}\n.hamburger--arrow-r.is-active .hamburger-inner::after {\n  transform: translate3d(5px, 0, 0) rotate(-45deg) scale(0.7, 1);\n}\n\n/*\n * Arrow Alt\n */\n.hamburger--arrowalt .hamburger-inner::before {\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.hamburger--arrowalt .hamburger-inner::after {\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.hamburger--arrowalt.is-active .hamburger-inner::before {\n  top: 0;\n  transform: translate3d(-5px, -6.25px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n}\n.hamburger--arrowalt.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: translate3d(-5px, 6.25px, 0) rotate(45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n}\n\n/*\n * Arrow Alt Right\n */\n.hamburger--arrowalt-r .hamburger-inner::before {\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.hamburger--arrowalt-r .hamburger-inner::after {\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.hamburger--arrowalt-r.is-active .hamburger-inner::before {\n  top: 0;\n  transform: translate3d(5px, -6.25px, 0) rotate(45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n}\n.hamburger--arrowalt-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: translate3d(5px, 6.25px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n}\n\n/*\n * Arrow Turn\n */\n.hamburger--arrowturn.is-active .hamburger-inner {\n  transform: rotate(-180deg);\n}\n.hamburger--arrowturn.is-active .hamburger-inner::before {\n  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);\n}\n.hamburger--arrowturn.is-active .hamburger-inner::after {\n  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n}\n\n/*\n * Arrow Turn Right\n */\n.hamburger--arrowturn-r.is-active .hamburger-inner {\n  transform: rotate(-180deg);\n}\n.hamburger--arrowturn-r.is-active .hamburger-inner::before {\n  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n}\n.hamburger--arrowturn-r.is-active .hamburger-inner::after {\n  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);\n}\n\n/*\n * Boring\n */\n.hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner::before, .hamburger--boring .hamburger-inner::after {\n  transition-property: none;\n}\n.hamburger--boring.is-active .hamburger-inner {\n  transform: rotate(45deg);\n}\n.hamburger--boring.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0;\n}\n.hamburger--boring.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n}\n\n/*\n * Collapse\n */\n.hamburger--collapse .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse .hamburger-inner::after {\n  top: -17px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n}\n.hamburger--collapse .hamburger-inner::before {\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse.is-active .hamburger-inner {\n  transform: translate3d(0, -8.5px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--collapse.is-active .hamburger-inner::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n}\n.hamburger--collapse.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(-90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n/*\n * Collapse Reverse\n */\n.hamburger--collapse-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse-r .hamburger-inner::after {\n  top: -17px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n}\n.hamburger--collapse-r .hamburger-inner::before {\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse-r.is-active .hamburger-inner {\n  transform: translate3d(0, -8.5px, 0) rotate(45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--collapse-r.is-active .hamburger-inner::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n}\n.hamburger--collapse-r.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n/*\n * Elastic\n */\n.hamburger--elastic .hamburger-inner {\n  top: 1.25px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.hamburger--elastic .hamburger-inner::before {\n  top: 8.5px;\n  transition: opacity 0.125s 0.275s ease;\n}\n.hamburger--elastic .hamburger-inner::after {\n  top: 17px;\n  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.hamburger--elastic.is-active .hamburger-inner {\n  transform: translate3d(0, 8.5px, 0) rotate(135deg);\n  transition-delay: 0.075s;\n}\n.hamburger--elastic.is-active .hamburger-inner::before {\n  transition-delay: 0s;\n  opacity: 0;\n}\n.hamburger--elastic.is-active .hamburger-inner::after {\n  transform: translate3d(0, -17px, 0) rotate(-270deg);\n  transition-delay: 0.075s;\n}\n\n/*\n * Elastic Reverse\n */\n.hamburger--elastic-r .hamburger-inner {\n  top: 1.25px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.hamburger--elastic-r .hamburger-inner::before {\n  top: 8.5px;\n  transition: opacity 0.125s 0.275s ease;\n}\n.hamburger--elastic-r .hamburger-inner::after {\n  top: 17px;\n  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.hamburger--elastic-r.is-active .hamburger-inner {\n  transform: translate3d(0, 8.5px, 0) rotate(-135deg);\n  transition-delay: 0.075s;\n}\n.hamburger--elastic-r.is-active .hamburger-inner::before {\n  transition-delay: 0s;\n  opacity: 0;\n}\n.hamburger--elastic-r.is-active .hamburger-inner::after {\n  transform: translate3d(0, -17px, 0) rotate(270deg);\n  transition-delay: 0.075s;\n}\n\n/*\n * Emphatic\n */\n.hamburger--emphatic {\n  overflow: hidden;\n}\n.hamburger--emphatic .hamburger-inner {\n  transition: background-color 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic .hamburger-inner::before {\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic .hamburger-inner::after {\n  top: 8.5px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic.is-active .hamburger-inner {\n  transition-delay: 0s;\n  transition-timing-function: ease-out;\n  background-color: transparent !important;\n}\n.hamburger--emphatic.is-active .hamburger-inner::before {\n  left: -50px;\n  top: -50px;\n  transform: translate3d(50px, 50px, 0) rotate(45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.hamburger--emphatic.is-active .hamburger-inner::after {\n  right: -50px;\n  top: -50px;\n  transform: translate3d(-50px, 50px, 0) rotate(-45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n/*\n * Emphatic Reverse\n */\n.hamburger--emphatic-r {\n  overflow: hidden;\n}\n.hamburger--emphatic-r .hamburger-inner {\n  transition: background-color 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic-r .hamburger-inner::before {\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic-r .hamburger-inner::after {\n  top: 8.5px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic-r.is-active .hamburger-inner {\n  transition-delay: 0s;\n  transition-timing-function: ease-out;\n  background-color: transparent !important;\n}\n.hamburger--emphatic-r.is-active .hamburger-inner::before {\n  left: -50px;\n  top: 50px;\n  transform: translate3d(50px, -50px, 0) rotate(-45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.hamburger--emphatic-r.is-active .hamburger-inner::after {\n  right: -50px;\n  top: 50px;\n  transform: translate3d(-50px, -50px, 0) rotate(45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n/*\n * Minus\n */\n.hamburger--minus .hamburger-inner::before, .hamburger--minus .hamburger-inner::after {\n  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;\n}\n.hamburger--minus.is-active .hamburger-inner::before, .hamburger--minus.is-active .hamburger-inner::after {\n  opacity: 0;\n  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;\n}\n.hamburger--minus.is-active .hamburger-inner::before {\n  top: 0;\n}\n.hamburger--minus.is-active .hamburger-inner::after {\n  bottom: 0;\n}\n\n/*\n * Slider\n */\n.hamburger--slider .hamburger-inner {\n  top: 1.25px;\n}\n.hamburger--slider .hamburger-inner::before {\n  top: 8.5px;\n  transition-property: transform, opacity;\n  transition-timing-function: ease;\n  transition-duration: 0.15s;\n}\n.hamburger--slider .hamburger-inner::after {\n  top: 17px;\n}\n.hamburger--slider.is-active .hamburger-inner {\n  transform: translate3d(0, 8.5px, 0) rotate(45deg);\n}\n.hamburger--slider.is-active .hamburger-inner::before {\n  transform: rotate(-45deg) translate3d(-3.5714285714px, -6px, 0);\n  opacity: 0;\n}\n.hamburger--slider.is-active .hamburger-inner::after {\n  transform: translate3d(0, -17px, 0) rotate(-90deg);\n}\n\n/*\n * Slider Reverse\n */\n.hamburger--slider-r .hamburger-inner {\n  top: 1.25px;\n}\n.hamburger--slider-r .hamburger-inner::before {\n  top: 8.5px;\n  transition-property: transform, opacity;\n  transition-timing-function: ease;\n  transition-duration: 0.15s;\n}\n.hamburger--slider-r .hamburger-inner::after {\n  top: 17px;\n}\n.hamburger--slider-r.is-active .hamburger-inner {\n  transform: translate3d(0, 8.5px, 0) rotate(-45deg);\n}\n.hamburger--slider-r.is-active .hamburger-inner::before {\n  transform: rotate(45deg) translate3d(3.5714285714px, -6px, 0);\n  opacity: 0;\n}\n.hamburger--slider-r.is-active .hamburger-inner::after {\n  transform: translate3d(0, -17px, 0) rotate(90deg);\n}\n\n/*\n * Spin\n */\n.hamburger--spin .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin .hamburger-inner::before {\n  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n}\n.hamburger--spin .hamburger-inner::after {\n  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin.is-active .hamburger-inner {\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--spin.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n}\n.hamburger--spin.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n/*\n * Spin Reverse\n */\n.hamburger--spin-r .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin-r .hamburger-inner::before {\n  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n}\n.hamburger--spin-r .hamburger-inner::after {\n  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin-r.is-active .hamburger-inner {\n  transform: rotate(-225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--spin-r.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n}\n.hamburger--spin-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n/*\n * Spring\n */\n.hamburger--spring .hamburger-inner {\n  top: 1.25px;\n  transition: background-color 0s 0.13s linear;\n}\n.hamburger--spring .hamburger-inner::before {\n  top: 8.5px;\n  transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spring .hamburger-inner::after {\n  top: 17px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spring.is-active .hamburger-inner {\n  transition-delay: 0.22s;\n  background-color: transparent !important;\n}\n.hamburger--spring.is-active .hamburger-inner::before {\n  top: 0;\n  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, 8.5px, 0) rotate(45deg);\n}\n.hamburger--spring.is-active .hamburger-inner::after {\n  top: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, 8.5px, 0) rotate(-45deg);\n}\n\n/*\n * Spring Reverse\n */\n.hamburger--spring-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spring-r .hamburger-inner::after {\n  top: -17px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear;\n}\n.hamburger--spring-r .hamburger-inner::before {\n  transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spring-r.is-active .hamburger-inner {\n  transform: translate3d(0, -8.5px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--spring-r.is-active .hamburger-inner::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear;\n}\n.hamburger--spring-r.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(90deg);\n  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n/*\n * Stand\n */\n.hamburger--stand .hamburger-inner {\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;\n}\n.hamburger--stand .hamburger-inner::before {\n  transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--stand .hamburger-inner::after {\n  transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--stand.is-active .hamburger-inner {\n  transform: rotate(90deg);\n  background-color: transparent !important;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n}\n.hamburger--stand.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(-45deg);\n  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--stand.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n/*\n * Stand Reverse\n */\n.hamburger--stand-r .hamburger-inner {\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;\n}\n.hamburger--stand-r .hamburger-inner::before {\n  transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--stand-r .hamburger-inner::after {\n  transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--stand-r.is-active .hamburger-inner {\n  transform: rotate(-90deg);\n  background-color: transparent !important;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n}\n.hamburger--stand-r.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(-45deg);\n  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--stand-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n/*\n * Squeeze\n */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.075s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--squeeze .hamburger-inner::before {\n  transition: top 0.075s 0.12s ease, opacity 0.075s ease;\n}\n.hamburger--squeeze .hamburger-inner::after {\n  transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--squeeze.is-active .hamburger-inner {\n  transform: rotate(45deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--squeeze.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.075s ease, opacity 0.075s 0.12s ease;\n}\n.hamburger--squeeze.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n/*\n * Vortex\n */\n.hamburger--vortex .hamburger-inner {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {\n  transition-duration: 0s;\n  transition-delay: 0.1s;\n  transition-timing-function: linear;\n}\n.hamburger--vortex .hamburger-inner::before {\n  transition-property: top, opacity;\n}\n.hamburger--vortex .hamburger-inner::after {\n  transition-property: bottom, transform;\n}\n.hamburger--vortex.is-active .hamburger-inner {\n  transform: rotate(765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {\n  transition-delay: 0s;\n}\n.hamburger--vortex.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0;\n}\n.hamburger--vortex.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(90deg);\n}\n\n/*\n * Vortex Reverse\n */\n.hamburger--vortex-r .hamburger-inner {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {\n  transition-duration: 0s;\n  transition-delay: 0.1s;\n  transition-timing-function: linear;\n}\n.hamburger--vortex-r .hamburger-inner::before {\n  transition-property: top, opacity;\n}\n.hamburger--vortex-r .hamburger-inner::after {\n  transition-property: bottom, transform;\n}\n.hamburger--vortex-r.is-active .hamburger-inner {\n  transform: rotate(-765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {\n  transition-delay: 0s;\n}\n.hamburger--vortex-r.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0;\n}\n.hamburger--vortex-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n}\n\n.menu {\n  margin: 0;\n  padding: 0;\n  color: #475480;\n}\n.menu > * {\n  display: inline-block;\n}\n.menu a {\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  color: inherit;\n}\n.menu .title {\n  padding: 0 9px;\n  color: #475480;\n  font-size: 30px;\n  margin: 0;\n}\n.menu .title a {\n  color: #475480;\n}\n.menu .title a:hover {\n  color: #629cf3;\n}\n.menu .dropdown {\n  margin: 0 9px;\n  display: inline-block;\n}\n.menu .dropdown .dropdown-header {\n  border-left: 2px solid transparent;\n  padding: 18px 9px;\n}\n.menu .dropdown ul {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  max-height: 0;\n  overflow: hidden;\n}\n.menu .dropdown ul li {\n  min-width: 130px;\n  padding: 9px;\n}\n.menu .dropdown ul li:hover {\n  color: white;\n  background-color: #629cf3;\n}\n.menu .dropdown:hover > * {\n  border-left: 2px solid #629cf3;\n  cursor: pointer;\n  background-color: #f0e7ff;\n}\n.menu .dropdown:hover > ul {\n  max-height: 700px;\n  transition: max-height 0.9s;\n}\n.menu .hamburger {\n  height: 40px;\n  display: none;\n}\n@media (max-width: 800px) {\n  .menu .hamburger {\n    display: inline-block;\n  }\n  .menu .dropdown-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(45vw, 1fr));\n    min-height: 90vh;\n    max-width: 90vw;\n    padding-top: 20px;\n    background-color: #f0e7ff;\n    transform: translateX(-800px);\n    transition: 0.15s;\n    position: absolute;\n  }\n  .menu .dropdown-container.hide-mobile {\n    display: none;\n  }\n  .menu .dropdown-container.is-active {\n    transform: translateX(0);\n  }\n  .menu .hamburger.is-active {\n    background-color: #f0e7ff;\n  }\n  .menu .hamburger.flash {\n    background-color: #629cf3;\n  }\n  .menu .dropdown:hover > * {\n    cursor: inherit;\n  }\n  .menu .dropdown ul {\n    max-height: 700px;\n    position: relative;\n    padding-left: 9px;\n  }\n  .menu .dropdown ul li:hover {\n    color: #629cf3;\n    background-color: inherit;\n  }\n  .menu .dropdown .dropdown-header {\n    border-left: none;\n    padding: 9px;\n    font-size: 18px;\n    font-weight: 900;\n  }\n  .menu .dropdown:hover > * {\n    border-left: none;\n    background-color: inherit;\n  }\n}", "",{"version":3,"sources":["webpack://./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/_base.scss","webpack://./sass/menu.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dx.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dx-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dy.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dy-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dxy.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dxy-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrow.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrow-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrowalt.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrowalt-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrowturn.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrowturn-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_boring.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_collapse.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_collapse-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_elastic.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_elastic-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_emphatic.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_emphatic-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_minus.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_slider.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_slider-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_spin.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_spin-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_spring.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_spring-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_stand.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_stand-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_squeeze.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_vortex.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_vortex-r.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n\n// Settings\n// ==================================================\n$hamburger-padding-x           : 15px !default;\n$hamburger-padding-y           : 15px !default;\n$hamburger-layer-width         : 40px !default;\n$hamburger-layer-height        : 4px !default;\n$hamburger-layer-spacing       : 6px !default;\n$hamburger-layer-color         : #000 !default;\n$hamburger-layer-border-radius : 4px !default;\n$hamburger-hover-opacity       : 0.7 !default;\n$hamburger-active-layer-color  : $hamburger-layer-color !default;\n$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;\n\n// To use CSS filters as the hover effect instead of opacity,\n// set $hamburger-hover-use-filter as true and\n// change the value of $hamburger-hover-filter accordingly.\n$hamburger-hover-use-filter   : false !default;\n$hamburger-hover-filter       : opacity(50%) !default;\n$hamburger-active-hover-filter: $hamburger-hover-filter !default;\n\n// Types (Remove or comment out what you don’t need)\n// ==================================================\n$hamburger-types: (\n  3dx,\n  3dx-r,\n  3dy,\n  3dy-r,\n  3dxy,\n  3dxy-r,\n  arrow,\n  arrow-r,\n  arrowalt,\n  arrowalt-r,\n  arrowturn,\n  arrowturn-r,\n  boring,\n  collapse,\n  collapse-r,\n  elastic,\n  elastic-r,\n  emphatic,\n  emphatic-r,\n  minus,\n  slider,\n  slider-r,\n  spin,\n  spin-r,\n  spring,\n  spring-r,\n  stand,\n  stand-r,\n  squeeze,\n  vortex,\n  vortex-r\n) !default;\n\n// Base Hamburger (We need this)\n// ==================================================\n@import \"base\";\n\n// Hamburger types\n// ==================================================\n@import \"types/3dx\";\n@import \"types/3dx-r\";\n@import \"types/3dy\";\n@import \"types/3dy-r\";\n@import \"types/3dxy\";\n@import \"types/3dxy-r\";\n@import \"types/arrow\";\n@import \"types/arrow-r\";\n@import \"types/arrowalt\";\n@import \"types/arrowalt-r\";\n@import \"types/arrowturn\";\n@import \"types/arrowturn-r\";\n@import \"types/boring\";\n@import \"types/collapse\";\n@import \"types/collapse-r\";\n@import \"types/elastic\";\n@import \"types/elastic-r\";\n@import \"types/emphatic\";\n@import \"types/emphatic-r\";\n@import \"types/minus\";\n@import \"types/slider\";\n@import \"types/slider-r\";\n@import \"types/spin\";\n@import \"types/spin-r\";\n@import \"types/spring\";\n@import \"types/spring-r\";\n@import \"types/stand\";\n@import \"types/stand-r\";\n@import \"types/squeeze\";\n@import \"types/vortex\";\n@import \"types/vortex-r\";\n\n// ==================================================\n// Cooking up additional types:\n//\n// The Sass for each hamburger type should be nested\n// inside an @if directive to check whether or not\n// it exists in $hamburger-types so only the CSS for\n// included types are generated.\n//\n// e.g. hamburgers/types/_new-type.scss\n//\n// @if index($hamburger-types, new-type) {\n//   .hamburger--new-type {\n//     ...\n//   }\n// }\n","@use \"sass:math\";\n\n// Hamburger\n// ==================================================\n.hamburger {\n  padding: $hamburger-padding-y $hamburger-padding-x;\n  display: inline-block;\n  cursor: pointer;\n\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n\n  // Normalize (<button>)\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n\n  &:hover {\n    @if $hamburger-hover-use-filter == true {\n      filter: $hamburger-hover-filter;\n    }\n    @else {\n      opacity: $hamburger-hover-opacity;\n    }\n  }\n\n  &.is-active {\n    &:hover {\n      @if $hamburger-hover-use-filter == true {\n        filter: $hamburger-active-hover-filter;\n      }\n      @else {\n        opacity: $hamburger-active-hover-opacity;\n      }\n    }\n\n    .hamburger-inner,\n    .hamburger-inner::before,\n    .hamburger-inner::after {\n      background-color: $hamburger-active-layer-color;\n    }\n  }\n}\n\n.hamburger-box {\n  width: $hamburger-layer-width;\n  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: math.div($hamburger-layer-height, -2);\n\n  &,\n  &::before,\n  &::after {\n    width: $hamburger-layer-width;\n    height: $hamburger-layer-height;\n    background-color: $hamburger-layer-color;\n    border-radius: $hamburger-layer-border-radius;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease;\n  }\n\n  &::before,\n  &::after {\n    content: \"\";\n    display: block;\n  }\n\n  &::before {\n    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n\n  &::after {\n    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n}\n","$menu-color-main: #475480;\n$dropdown-color: #f0e7ff;\n$dropdown-highlight: #629cf3;\n$spacing-base: 9px;\n$max-height: 700px;\n\n$hamburger-padding-x: 18px !default;\n$hamburger-padding-y: 5px !default;\n$hamburger-layer-width: 25px !default; // default = 40px\n$hamburger-layer-height: 2.5px !default; // default = 4px\n$hamburger-layer-color: $menu-color-main !default;\n\n@import '../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss';\n\n.menu {\n  margin: 0;\n  padding: 0;\n  color: $menu-color-main;\n\n  & > * {\n    display: inline-block;\n  }\n\n  a {\n    text-decoration: none;\n    margin: 0;\n    padding: 0;\n    color: inherit;\n  }\n\n  .title {\n    padding: 0 $spacing-base;\n    color: $menu-color-main;\n    font-size: 30px;\n    margin: 0;\n\n    a {\n      color: $menu-color-main;\n\n      &:hover {\n        color: $dropdown-highlight;\n      }\n    }\n  }\n\n  .dropdown {\n    margin: 0 $spacing-base;\n    display: inline-block;\n\n    .dropdown-header {\n      border-left: 2px solid transparent;\n      padding: calc($spacing-base * 2) $spacing-base;\n    }\n\n    ul {\n      position: absolute;\n      margin: 0;\n      padding: 0;\n      list-style-type: none;\n      max-height: 0;\n      overflow: hidden;\n\n      li {\n        min-width: 130px;\n        padding: $spacing-base;\n\n        &:hover {\n          color: white;\n          background-color: $dropdown-highlight;\n        }\n      }\n    }\n\n    &:hover > * {\n      border-left: 2px solid $dropdown-highlight;\n      cursor: pointer;\n      background-color: $dropdown-color;\n    }\n\n    &:hover > ul {\n      max-height: $max-height;\n      transition: max-height 0.9s;\n    }\n  }\n\n  .hamburger {\n    height: 40px;\n    display: none;\n  }\n\n  @media (max-width: 800px) {\n    .hamburger {\n      display: inline-block;\n    }\n\n    .dropdown-container {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(45vw, 1fr));\n      min-height: 90vh;\n      max-width: 90vw;\n      padding-top: 20px;\n      background-color: $dropdown-color;\n      transform: translateX(-800px);\n      transition: 0.15s;\n      position: absolute;\n    }\n\n    .dropdown-container.hide-mobile {\n      display: none;\n    }\n\n    .dropdown-container.is-active {\n      transform: translateX(0);\n    }\n\n    .hamburger.is-active {\n      background-color: $dropdown-color;\n    }\n\n    .hamburger.flash {\n      background-color: $dropdown-highlight;\n    }\n\n    .dropdown {\n      &:hover > * {\n        cursor: inherit;\n      }\n\n      ul {\n        max-height: $max-height;\n        position: relative;\n        padding-left: $spacing-base;\n\n        li:hover {\n          color: $dropdown-highlight;\n          background-color: inherit;\n        }\n      }\n\n      .dropdown-header {\n        border-left: none;\n        padding: $spacing-base;\n        font-size: 18px;\n        font-weight: 900;\n      }\n\n      &:hover > * {\n        border-left: none;\n        background-color: inherit;\n      }\n    }\n  }\n}\n","@if index($hamburger-types, 3dx) {\n  /*\n   * 3DX\n   */\n  .hamburger--3dx {\n    .hamburger-box {\n      perspective: $hamburger-layer-width * 2;\n    }\n\n    .hamburger-inner {\n      transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n                  background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n      &::before,\n      &::after {\n        transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        background-color: transparent !important;\n        transform: rotateY(180deg);\n\n        &::before {\n          transform: translate3d(0, $hamburger-layer-height + $hamburger-layer-spacing, 0) rotate(45deg);\n        }\n\n        &::after {\n          transform: translate3d(0, ($hamburger-layer-height + $hamburger-layer-spacing) * -1, 0) rotate(-45deg);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, 3dx-r) {\n  /*\n   * 3DX Reverse\n   */\n  .hamburger--3dx-r {\n    .hamburger-box {\n      perspective: $hamburger-layer-width * 2;\n    }\n\n    .hamburger-inner {\n      transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n                  background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n      &::before,\n      &::after {\n        transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        background-color: transparent !important;\n        transform: rotateY(-180deg);\n\n        &::before {\n          transform: translate3d(0, $hamburger-layer-height + $hamburger-layer-spacing, 0) rotate(45deg);\n        }\n\n        &::after {\n          transform: translate3d(0, ($hamburger-layer-height + $hamburger-layer-spacing) * -1, 0) rotate(-45deg);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, 3dy) {\n  /*\n   * 3DY\n   */\n  .hamburger--3dy {\n    .hamburger-box {\n      perspective: $hamburger-layer-width * 2;\n    }\n\n    .hamburger-inner {\n      transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n                  background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n      &::before,\n      &::after {\n        transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        background-color: transparent !important;\n        transform: rotateX(-180deg);\n\n        &::before {\n          transform: translate3d(0, $hamburger-layer-height + $hamburger-layer-spacing, 0) rotate(45deg);\n        }\n\n        &::after {\n          transform: translate3d(0, ($hamburger-layer-height + $hamburger-layer-spacing) * -1, 0) rotate(-45deg);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, 3dy-r) {\n  /*\n   * 3DY Reverse\n   */\n  .hamburger--3dy-r {\n    .hamburger-box {\n      perspective: $hamburger-layer-width * 2;\n    }\n\n    .hamburger-inner {\n      transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n                  background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n      &::before,\n      &::after {\n        transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        background-color: transparent !important;\n        transform: rotateX(180deg);\n\n        &::before {\n          transform: translate3d(0, $hamburger-layer-height + $hamburger-layer-spacing, 0) rotate(45deg);\n        }\n\n        &::after {\n          transform: translate3d(0, ($hamburger-layer-height + $hamburger-layer-spacing) * -1, 0) rotate(-45deg);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, 3dxy) {\n  /*\n   * 3DXY\n   */\n  .hamburger--3dxy {\n    .hamburger-box {\n      perspective: $hamburger-layer-width * 2;\n    }\n\n    .hamburger-inner {\n      transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n                  background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n      &::before,\n      &::after {\n        transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        background-color: transparent !important;\n        transform: rotateX(180deg) rotateY(180deg);\n\n        &::before {\n          transform: translate3d(0, $hamburger-layer-height + $hamburger-layer-spacing, 0) rotate(45deg);\n        }\n\n        &::after {\n          transform: translate3d(0, ($hamburger-layer-height + $hamburger-layer-spacing) * -1, 0) rotate(-45deg);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, 3dxy-r) {\n  /*\n   * 3DXY Reverse\n   */\n  .hamburger--3dxy-r {\n    .hamburger-box {\n      perspective: $hamburger-layer-width * 2;\n    }\n\n    .hamburger-inner {\n      transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n                  background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n      &::before,\n      &::after {\n        transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        background-color: transparent !important;\n        transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);\n\n        &::before {\n          transform: translate3d(0, $hamburger-layer-height + $hamburger-layer-spacing, 0) rotate(45deg);\n        }\n\n        &::after {\n          transform: translate3d(0, ($hamburger-layer-height + $hamburger-layer-spacing) * -1, 0) rotate(-45deg);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, arrow) {\n  /*\n   * Arrow\n   */\n  .hamburger--arrow.is-active {\n    .hamburger-inner {\n      &::before {\n        transform: translate3d($hamburger-layer-width * -0.2, 0, 0) rotate(-45deg) scale(0.7, 1);\n      }\n\n      &::after {\n        transform: translate3d($hamburger-layer-width * -0.2, 0, 0) rotate(45deg) scale(0.7, 1);\n      }\n    }\n  }\n}\n","@if index($hamburger-types, arrow-r) {\n  /*\n   * Arrow Right\n   */\n  .hamburger--arrow-r.is-active {\n    .hamburger-inner {\n      &::before {\n        transform: translate3d($hamburger-layer-width * 0.2, 0, 0) rotate(45deg) scale(0.7, 1);\n      }\n\n      &::after {\n        transform: translate3d($hamburger-layer-width * 0.2, 0, 0) rotate(-45deg) scale(0.7, 1);\n      }\n    }\n  }\n}\n","@if index($hamburger-types, arrowalt) {\n  /*\n   * Arrow Alt\n   */\n  .hamburger--arrowalt {\n    .hamburger-inner {\n      &::before {\n        transition: top 0.1s 0.1s ease,\n                    transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n      }\n\n      &::after {\n        transition: bottom 0.1s 0.1s ease,\n                    transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        &::before {\n          top: 0;\n          transform: translate3d($hamburger-layer-width * -0.2, $hamburger-layer-width * -0.25, 0) rotate(-45deg) scale(0.7, 1);\n          transition: top 0.1s ease,\n                      transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n        }\n\n        &::after {\n          bottom: 0;\n          transform: translate3d($hamburger-layer-width * -0.2, $hamburger-layer-width * 0.25, 0) rotate(45deg) scale(0.7, 1);\n          transition: bottom 0.1s ease,\n                      transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, arrowalt-r) {\n  /*\n   * Arrow Alt Right\n   */\n  .hamburger--arrowalt-r {\n    .hamburger-inner {\n      &::before {\n        transition: top 0.1s 0.1s ease,\n                    transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n      }\n\n      &::after {\n        transition: bottom 0.1s 0.1s ease,\n                    transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        &::before {\n          top: 0;\n          transform: translate3d($hamburger-layer-width * 0.2, $hamburger-layer-width * -0.25, 0) rotate(45deg) scale(0.7, 1);\n          transition: top 0.1s ease,\n                      transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n        }\n\n        &::after {\n          bottom: 0;\n          transform: translate3d($hamburger-layer-width * 0.2, $hamburger-layer-width * 0.25, 0) rotate(-45deg) scale(0.7, 1);\n          transition: bottom 0.1s ease,\n                      transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, arrowturn) {\n  /*\n   * Arrow Turn\n   */\n  .hamburger--arrowturn.is-active {\n    .hamburger-inner {\n      transform: rotate(-180deg);\n\n      &::before {\n        transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);\n      }\n\n      &::after {\n        transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n      }\n    }\n  }\n}\n","@if index($hamburger-types, arrowturn-r) {\n  /*\n   * Arrow Turn Right\n   */\n  .hamburger--arrowturn-r.is-active {\n    .hamburger-inner {\n      transform: rotate(-180deg);\n\n      &::before {\n        transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n      }\n\n      &::after {\n        transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);\n      }\n    }\n  }\n}\n","@if index($hamburger-types, boring) {\n  /*\n   * Boring\n   */\n  .hamburger--boring {\n    .hamburger-inner {\n      &,\n      &::before,\n      &::after {\n        transition-property: none;\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: rotate(45deg);\n\n        &::before {\n          top: 0;\n          opacity: 0;\n        }\n\n        &::after {\n          bottom: 0;\n          transform: rotate(-90deg);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, collapse) {\n  /*\n   * Collapse\n   */\n  .hamburger--collapse {\n    .hamburger-inner {\n      top: auto;\n      bottom: 0;\n      transition-duration: 0.13s;\n      transition-delay: 0.13s;\n      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\n      &::after {\n        top: ($hamburger-layer-spacing * 2 + $hamburger-layer-height * 2) * -1;\n        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    opacity 0.1s linear;\n      }\n\n      &::before {\n        transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: translate3d(0, ($hamburger-layer-spacing + $hamburger-layer-height) * -1, 0) rotate(-45deg);\n        transition-delay: 0.22s;\n        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\n        &::after {\n          top: 0;\n          opacity: 0;\n          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      opacity 0.1s 0.22s linear;\n        }\n\n        &::before {\n          top: 0;\n          transform: rotate(-90deg);\n          transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, collapse-r) {\n  /*\n   * Collapse Reverse\n   */\n  .hamburger--collapse-r {\n    .hamburger-inner {\n      top: auto;\n      bottom: 0;\n      transition-duration: 0.13s;\n      transition-delay: 0.13s;\n      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\n      &::after {\n        top: ($hamburger-layer-spacing * 2 + $hamburger-layer-height * 2) * -1;\n        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    opacity 0.1s linear;\n      }\n\n      &::before {\n        transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: translate3d(0, ($hamburger-layer-spacing + $hamburger-layer-height) * -1, 0) rotate(45deg);\n        transition-delay: 0.22s;\n        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\n        &::after {\n          top: 0;\n          opacity: 0;\n          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      opacity 0.1s 0.22s linear;\n        }\n\n        &::before {\n          top: 0;\n          transform: rotate(90deg);\n          transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n","@use \"sass:math\";\n\n@if index($hamburger-types, elastic) {\n  /*\n   * Elastic\n   */\n  .hamburger--elastic {\n    .hamburger-inner {\n      top: math.div($hamburger-layer-height, 2);\n      transition-duration: 0.275s;\n      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n\n      &::before {\n        top: $hamburger-layer-height + $hamburger-layer-spacing;\n        transition: opacity 0.125s 0.275s ease;\n      }\n\n      &::after {\n        top: ($hamburger-layer-height * 2) + ($hamburger-layer-spacing * 2);\n        transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        $y-offset: $hamburger-layer-spacing + $hamburger-layer-height;\n\n        transform: translate3d(0, $y-offset, 0) rotate(135deg);\n        transition-delay: 0.075s;\n\n        &::before {\n          transition-delay: 0s;\n          opacity: 0;\n        }\n\n        &::after {\n          transform: translate3d(0, $y-offset * -2, 0) rotate(-270deg);\n          transition-delay: 0.075s;\n        }\n      }\n    }\n  }\n}\n","@use \"sass:math\";\n\n@if index($hamburger-types, elastic-r) {\n  /*\n   * Elastic Reverse\n   */\n  .hamburger--elastic-r {\n    .hamburger-inner {\n      top: math.div($hamburger-layer-height, 2);\n      transition-duration: 0.275s;\n      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n\n      &::before {\n        top: $hamburger-layer-height + $hamburger-layer-spacing;\n        transition: opacity 0.125s 0.275s ease;\n      }\n\n      &::after {\n        top: ($hamburger-layer-height * 2) + ($hamburger-layer-spacing * 2);\n        transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        $y-offset: $hamburger-layer-spacing + $hamburger-layer-height;\n\n        transform: translate3d(0, $y-offset, 0) rotate(-135deg);\n        transition-delay: 0.075s;\n\n        &::before {\n          transition-delay: 0s;\n          opacity: 0;\n        }\n\n        &::after {\n          transform: translate3d(0, $y-offset * -2, 0) rotate(270deg);\n          transition-delay: 0.075s;\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, emphatic) {\n  /*\n   * Emphatic\n   */\n  .hamburger--emphatic {\n    overflow: hidden;\n\n    .hamburger-inner {\n      transition: background-color 0.125s 0.175s ease-in;\n\n      &::before {\n        left: 0;\n        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n                    top 0.05s 0.125s linear,\n                    left 0.125s 0.175s ease-in;\n      }\n\n      &::after {\n        top: ($hamburger-layer-height) + ($hamburger-layer-spacing);\n        right: 0;\n        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n                    top 0.05s 0.125s linear,\n                    right 0.125s 0.175s ease-in;\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transition-delay: 0s;\n        transition-timing-function: ease-out;\n        background-color: transparent !important;\n\n        &::before {\n          left: $hamburger-layer-width * -2;\n          top: $hamburger-layer-width * -2;\n          transform: translate3d($hamburger-layer-width * 2, $hamburger-layer-width * 2, 0) rotate(45deg);\n          transition: left 0.125s ease-out,\n                      top 0.05s 0.125s linear,\n                      transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n        }\n\n        &::after {\n          right: $hamburger-layer-width * -2;\n          top: $hamburger-layer-width * -2;\n          transform: translate3d($hamburger-layer-width * -2, $hamburger-layer-width * 2, 0) rotate(-45deg);\n          transition: right 0.125s ease-out,\n                      top 0.05s 0.125s linear,\n                      transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, emphatic-r) {\n  /*\n   * Emphatic Reverse\n   */\n  .hamburger--emphatic-r {\n    overflow: hidden;\n\n    .hamburger-inner {\n      transition: background-color 0.125s 0.175s ease-in;\n\n      &::before {\n        left: 0;\n        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n                    top 0.05s 0.125s linear,\n                    left 0.125s 0.175s ease-in;\n      }\n\n      &::after {\n        top: ($hamburger-layer-height) + ($hamburger-layer-spacing);\n        right: 0;\n        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n                    top 0.05s 0.125s linear,\n                    right 0.125s 0.175s ease-in;\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transition-delay: 0s;\n        transition-timing-function: ease-out;\n        background-color: transparent !important;\n\n        &::before {\n          left: $hamburger-layer-width * -2;\n          top: $hamburger-layer-width * 2;\n          transform: translate3d($hamburger-layer-width * 2, $hamburger-layer-width * -2, 0) rotate(-45deg);\n          transition: left 0.125s ease-out,\n                      top 0.05s 0.125s linear,\n                      transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n        }\n\n        &::after {\n          right: $hamburger-layer-width * -2;\n          top: $hamburger-layer-width * 2;\n          transform: translate3d($hamburger-layer-width * -2, $hamburger-layer-width * -2, 0) rotate(45deg);\n          transition: right 0.125s ease-out,\n                      top 0.05s 0.125s linear,\n                      transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, minus) {\n  /*\n   * Minus\n   */\n  .hamburger--minus {\n    .hamburger-inner {\n      &::before,\n      &::after {\n        transition: bottom 0.08s 0s ease-out,\n                    top 0.08s 0s ease-out,\n                    opacity 0s linear;\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        &::before,\n        &::after {\n          opacity: 0;\n          transition: bottom 0.08s ease-out,\n                      top 0.08s ease-out,\n                      opacity 0s 0.08s linear;\n        }\n        &::before {\n          top: 0;\n        }\n\n        &::after {\n          bottom: 0;\n        }\n      }\n    }\n  }\n}\n","@use \"sass:math\";\n\n@if index($hamburger-types, slider) {\n  /*\n   * Slider\n   */\n  .hamburger--slider {\n    .hamburger-inner {\n      top: math.div($hamburger-layer-height, 2);\n\n      &::before {\n        top: $hamburger-layer-height + $hamburger-layer-spacing;\n        transition-property: transform, opacity;\n        transition-timing-function: ease;\n        transition-duration: 0.15s;\n      }\n\n      &::after {\n        top: ($hamburger-layer-height * 2) + ($hamburger-layer-spacing * 2);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        $y-offset: $hamburger-layer-spacing + $hamburger-layer-height;\n\n        transform: translate3d(0, $y-offset, 0) rotate(45deg);\n\n        &::before {\n          transform: rotate(-45deg) translate3d(math.div($hamburger-layer-width, -7), $hamburger-layer-spacing * -1, 0);\n          opacity: 0;\n        }\n\n        &::after {\n          transform: translate3d(0, $y-offset * -2, 0) rotate(-90deg);\n        }\n      }\n    }\n  }\n}\n","@use \"sass:math\";\n\n@if index($hamburger-types, slider-r) {\n  /*\n   * Slider Reverse\n   */\n  .hamburger--slider-r {\n    .hamburger-inner {\n      top: math.div($hamburger-layer-height, 2);\n\n      &::before {\n        top: $hamburger-layer-height + $hamburger-layer-spacing;\n        transition-property: transform, opacity;\n        transition-timing-function: ease;\n        transition-duration: 0.15s;\n      }\n\n      &::after {\n        top: ($hamburger-layer-height * 2) + ($hamburger-layer-spacing * 2);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        $y-offset: $hamburger-layer-spacing + $hamburger-layer-height;\n\n        transform: translate3d(0, $y-offset, 0) rotate(-45deg);\n\n        &::before {\n          transform: rotate(45deg) translate3d(math.div($hamburger-layer-width, 7), $hamburger-layer-spacing * -1, 0);\n          opacity: 0;\n        }\n\n        &::after {\n          transform: translate3d(0, $y-offset * -2, 0) rotate(90deg);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, spin) {\n  /*\n   * Spin\n   */\n  .hamburger--spin {\n    .hamburger-inner {\n      transition-duration: 0.22s;\n      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\n      &::before {\n        transition: top 0.1s 0.25s ease-in,\n                    opacity 0.1s ease-in;\n      }\n\n      &::after {\n        transition: bottom 0.1s 0.25s ease-in,\n                    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: rotate(225deg);\n        transition-delay: 0.12s;\n        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\n        &::before {\n          top: 0;\n          opacity: 0;\n          transition: top 0.1s ease-out,\n                      opacity 0.1s 0.12s ease-out;\n        }\n\n        &::after {\n          bottom: 0;\n          transform: rotate(-90deg);\n          transition: bottom 0.1s ease-out,\n                      transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, spin-r) {\n  /*\n   * Spin Reverse\n   */\n  .hamburger--spin-r {\n    .hamburger-inner {\n      transition-duration: 0.22s;\n      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\n      &::before {\n        transition: top 0.1s 0.25s ease-in,\n                    opacity 0.1s ease-in;\n      }\n\n      &::after {\n        transition: bottom 0.1s 0.25s ease-in,\n                    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: rotate(-225deg);\n        transition-delay: 0.12s;\n        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\n        &::before {\n          top: 0;\n          opacity: 0;\n          transition: top 0.1s ease-out,\n                      opacity 0.1s 0.12s ease-out;\n        }\n\n        &::after {\n          bottom: 0;\n          transform: rotate(90deg);\n          transition: bottom 0.1s ease-out,\n                      transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n","@use \"sass:math\";\n\n@if index($hamburger-types, spring) {\n  /*\n   * Spring\n   */\n  .hamburger--spring {\n    .hamburger-inner {\n      top: math.div($hamburger-layer-height, 2);\n      transition: background-color 0s 0.13s linear;\n\n      &::before {\n        top: $hamburger-layer-height + $hamburger-layer-spacing;\n        transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n\n      &::after {\n        top: ($hamburger-layer-height * 2) + ($hamburger-layer-spacing * 2);\n        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transition-delay: 0.22s;\n        background-color: transparent !important;\n\n        &::before {\n          top: 0;\n          transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n          transform: translate3d(0, $hamburger-layer-spacing + $hamburger-layer-height, 0) rotate(45deg);\n        }\n\n        &::after {\n          top: 0;\n          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n          transform: translate3d(0, $hamburger-layer-spacing + $hamburger-layer-height, 0) rotate(-45deg);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, spring-r) {\n  /*\n   * Spring Reverse\n   */\n  .hamburger--spring-r {\n    .hamburger-inner {\n      top: auto;\n      bottom: 0;\n      transition-duration: 0.13s;\n      transition-delay: 0s;\n      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\n      &::after {\n        top: ($hamburger-layer-spacing * 2 + $hamburger-layer-height * 2) * -1;\n        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    opacity 0s linear;\n      }\n\n      &::before {\n        transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: translate3d(0, ($hamburger-layer-spacing + $hamburger-layer-height) * -1, 0) rotate(-45deg);\n        transition-delay: 0.22s;\n        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\n        &::after {\n          top: 0;\n          opacity: 0;\n          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      opacity 0s 0.22s linear;\n        }\n\n        &::before {\n          top: 0;\n          transform: rotate(90deg);\n          transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, stand) {\n  /*\n   * Stand\n   */\n  .hamburger--stand {\n    .hamburger-inner {\n      transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),\n                  background-color 0s 0.075s linear;\n\n      &::before {\n        transition: top 0.075s 0.075s ease-in,\n                    transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n\n      &::after {\n        transition: bottom 0.075s 0.075s ease-in,\n                    transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: rotate(90deg);\n        background-color: transparent !important;\n\n        transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1),\n                    background-color 0s 0.15s linear;\n\n        &::before {\n          top: 0;\n          transform: rotate(-45deg);\n          transition: top 0.075s 0.1s ease-out,\n                      transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n\n        &::after {\n          bottom: 0;\n          transform: rotate(45deg);\n          transition: bottom 0.075s 0.1s ease-out,\n                      transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, stand-r) {\n  /*\n   * Stand Reverse\n   */\n  .hamburger--stand-r {\n    .hamburger-inner {\n      transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),\n                  background-color 0s 0.075s linear;\n\n      &::before {\n        transition: top 0.075s 0.075s ease-in,\n                    transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n\n      &::after {\n        transition: bottom 0.075s 0.075s ease-in,\n                    transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: rotate(-90deg);\n        background-color: transparent !important;\n\n        transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1),\n                    background-color 0s 0.15s linear;\n\n        &::before {\n          top: 0;\n          transform: rotate(-45deg);\n          transition: top 0.075s 0.1s ease-out,\n                      transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n\n        &::after {\n          bottom: 0;\n          transform: rotate(45deg);\n          transition: bottom 0.075s 0.1s ease-out,\n                      transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, squeeze) {\n  /*\n   * Squeeze\n   */\n  .hamburger--squeeze {\n    .hamburger-inner {\n      transition-duration: 0.075s;\n      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\n      &::before {\n        transition: top 0.075s 0.12s ease,\n                    opacity 0.075s ease;\n      }\n\n      &::after {\n        transition: bottom 0.075s 0.12s ease,\n                    transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: rotate(45deg);\n        transition-delay: 0.12s;\n        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\n        &::before {\n          top: 0;\n          opacity: 0;\n          transition: top 0.075s ease,\n                      opacity 0.075s 0.12s ease;\n        }\n\n        &::after {\n          bottom: 0;\n          transform: rotate(-90deg);\n          transition: bottom 0.075s ease,\n                      transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, vortex) {\n  /*\n   * Vortex\n   */\n  .hamburger--vortex {\n    .hamburger-inner {\n      transition-duration: 0.2s;\n      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n\n      &::before,\n      &::after {\n        transition-duration: 0s;\n        transition-delay: 0.1s;\n        transition-timing-function: linear;\n      }\n\n      &::before {\n        transition-property: top, opacity;\n      }\n\n      &::after {\n        transition-property: bottom, transform;\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: rotate(765deg);\n        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n\n        &::before,\n        &::after {\n          transition-delay: 0s;\n        }\n\n        &::before {\n          top: 0;\n          opacity: 0;\n        }\n\n        &::after {\n          bottom: 0;\n          transform: rotate(90deg);\n        }\n      }\n    }\n  }\n}\n","@if index($hamburger-types, vortex-r) {\n  /*\n   * Vortex Reverse\n   */\n  .hamburger--vortex-r {\n    .hamburger-inner {\n      transition-duration: 0.2s;\n      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n\n      &::before,\n      &::after {\n        transition-duration: 0s;\n        transition-delay: 0.1s;\n        transition-timing-function: linear;\n      }\n\n      &::before {\n        transition-property: top, opacity;\n      }\n\n      &::after {\n        transition-property: bottom, transform;\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: rotate(-765deg);\n        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n\n        &::before,\n        &::after {\n          transition-delay: 0s;\n        }\n\n        &::before {\n          top: 0;\n          opacity: 0;\n        }\n\n        &::after {\n          bottom: 0;\n          transform: rotate(-90deg);\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./sass/menu.scss":
/*!************************!*\
  !*** ./sass/menu.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_86239__) => {

__nested_webpack_require_86239__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_86239__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_86239__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_86239__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_86239__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_86239__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_86239__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_86239__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_86239__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_86239__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_86239__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_86239__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_86239__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_86239__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_86239__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_96701__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =   true ? __nested_webpack_require_96701__.nc : 0;

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_99617__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_99617__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_99617__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_99617__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_99617__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_99617__.o(definition, key) && !__nested_webpack_require_99617__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_99617__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_99617__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__nested_webpack_require_99617__.r(__webpack_exports__);
/* harmony import */ var _sass_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99617__(/*! ../sass/menu.scss */ "./sass/menu.scss");


const hamburger = document.querySelector('.hamburger');
const dropdownContainer = document.querySelector('.dropdown-container');

hamburger.addEventListener('click', function hamburgerClick() {
  hamburger.classList.add('flash');
  setTimeout(() => hamburger.classList.remove('flash'), 150);
  this.classList.toggle('is-active');
  dropdownContainer.classList.toggle('is-active');
});

const smallWindow = window.matchMedia('(max-width: 800px)');
const largeWindow = window.matchMedia('(min-width: 800px)');

function temporarilyHideDropdown() {
  dropdownContainer.classList.add('hide-mobile');
  setTimeout(() => dropdownContainer.classList.remove('hide-mobile'), 800);
}

function hideDropdownTransition(e) {
  if (e.matches) {
    temporarilyHideDropdown();
  }
}

function resetDropdown() {
  hamburger.classList.remove('is-active');
  dropdownContainer.classList.remove('is-active');
}

smallWindow.addEventListener('change', hideDropdownTransition);
largeWindow.addEventListener('change', resetDropdown);

temporarilyHideDropdown();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ (() => {

const frame = document.querySelector('.frame');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const navigation = document.querySelector('.navigation');
let currentIndex = 0;
const maxIndex = 8;
rightArrow.addEventListener('click', slideRight);
leftArrow.addEventListener('click', slideLeft);
window.addEventListener('resize', renderImage);
window.addEventListener('keydown', keydown);
function keydown(e) {
  if (e.key === 'ArrowLeft') {
    leftArrow.classList.add('flash');
    setTimeout(() => leftArrow.classList.remove('flash'), 200);
    slideLeft();
  } else if (e.key === 'ArrowRight') {
    rightArrow.classList.add('flash');
    setTimeout(() => rightArrow.classList.remove('flash'), 200);
    slideRight();
  }
}
function slideRight() {
  currentIndex++;
  if (currentIndex > maxIndex) currentIndex = 0;
  updateNavigationDot(currentIndex);
  renderImage();
}
function slideLeft() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = maxIndex;
  updateNavigationDot(currentIndex);
  renderImage();
}
function renderImage() {
  // not sure why but window.innerWidth seems to be 4px too small
  const offset = currentIndex * (window.innerWidth + 4);
  frame.style.right = `${offset}px`;
}

// navigation

for (let i = 0; i <= maxIndex; i++) {
  const dot = document.createElement('div');
  dot.dataset.index = i;
  navigation.appendChild(dot);
}
navigation.addEventListener('click', navigate);
let currentlyActive = navigation.querySelector('[data-index="0"]');
currentlyActive.classList.add('active');
function navigate(e) {
  const index = e.target.dataset.index;
  if (index) {
    updateNavigationDot(index);
    currentIndex = index;
    renderImage();
  }
}
function updateNavigationDot(index) {
  currentlyActive.classList.remove('active');
  currentlyActive = navigation.querySelector(`[data-index="${index}"]`);
  currentlyActive.classList.add('active');
}

// play slides

const play = document.querySelector('.play-slides');
play.addEventListener('click', playSlideshow);
let currentlyPlaying = false;
let playing;
function playSlideshow() {
  if (currentlyPlaying) {
    clearInterval(playing);
    play.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
  } else {
    playing = setInterval(slideRight, 2000);
    play.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
  }
  currentlyPlaying = !currentlyPlaying;
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _andrewjh271_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @andrewjh271/menu */ "./node_modules/@andrewjh271/menu/dist/main.js");
/* harmony import */ var _andrewjh271_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_andrewjh271_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map