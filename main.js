/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@andrewjh271/menu/dist/main.js":
/*!*****************************************************!*\
  !*** ./node_modules/@andrewjh271/menu/dist/main.js ***!
  \*****************************************************/
/***/ (() => {

/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
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
play.addEventListener('click', toggleSlideshow);
let currentlyPlaying = false;
let playing;
function toggleSlideshow() {
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