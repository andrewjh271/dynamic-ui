/*! For license information please see main.js.LICENSE.txt */
(()=>{var n={297:()=>{(()=>{"use strict";var n={"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu.scss":(n,e,r)=>{r.r(e),r.d(e,{default:()=>s});var t=r("./node_modules/css-loader/dist/runtime/sourceMaps.js"),o=r.n(t),i=r("./node_modules/css-loader/dist/runtime/api.js"),a=r.n(i)()(o());a.push([n.id,'/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  padding: 5px 18px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n}\n.hamburger:hover {\n  opacity: 0.7;\n}\n.hamburger.is-active:hover {\n  opacity: 0.7;\n}\n.hamburger.is-active .hamburger-inner,\n.hamburger.is-active .hamburger-inner::before,\n.hamburger.is-active .hamburger-inner::after {\n  background-color: #475480;\n}\n\n.hamburger-box {\n  width: 25px;\n  height: 19.5px;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -1.25px;\n}\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 25px;\n  height: 2.5px;\n  background-color: #475480;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n}\n.hamburger-inner::before, .hamburger-inner::after {\n  content: "";\n  display: block;\n}\n.hamburger-inner::before {\n  top: -8.5px;\n}\n.hamburger-inner::after {\n  bottom: -8.5px;\n}\n\n/*\n * Spin Reverse\n */\n.hamburger--spin-r .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin-r .hamburger-inner::before {\n  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n}\n.hamburger--spin-r .hamburger-inner::after {\n  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin-r.is-active .hamburger-inner {\n  transform: rotate(-225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--spin-r.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n}\n.hamburger--spin-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.menu {\n  margin: 0;\n  padding: 0;\n  color: #475480;\n}\n.menu > * {\n  display: inline-block;\n}\n.menu a {\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  color: inherit;\n}\n.menu .title {\n  padding: 0 9px;\n  color: #475480;\n  font-size: 30px;\n  margin: 0;\n}\n.menu .title a {\n  color: #475480;\n}\n.menu .title a:hover {\n  color: #629cf3;\n}\n.menu .dropdown {\n  margin: 0 9px;\n  display: inline-block;\n}\n.menu .dropdown .dropdown-header {\n  border-left: 2px solid transparent;\n  padding: 18px 9px;\n}\n.menu .dropdown ul {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  max-height: 0;\n  overflow: hidden;\n}\n.menu .dropdown ul li {\n  min-width: 130px;\n  padding: 9px;\n}\n.menu .dropdown ul li:hover {\n  color: white;\n  background-color: #629cf3;\n}\n.menu .dropdown:hover > * {\n  border-left: 2px solid #629cf3;\n  cursor: pointer;\n  background-color: #f0e7ff;\n}\n.menu .dropdown:hover > ul {\n  max-height: 700px;\n  transition: max-height 0.9s;\n}\n.menu .hamburger {\n  height: 40px;\n  display: none;\n}\n@media (max-width: 800px) {\n  .menu .hamburger {\n    display: inline-block;\n  }\n  .menu .dropdown-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(45vw, 1fr));\n    min-height: 90vh;\n    max-width: 90vw;\n    padding-top: 20px;\n    background-color: #f0e7ff;\n    transform: translateX(-800px);\n    transition: 0.15s;\n    position: absolute;\n  }\n  .menu .dropdown-container.hide-mobile {\n    display: none;\n  }\n  .menu .dropdown-container.is-active {\n    transform: translateX(0);\n  }\n  .menu .hamburger.is-active {\n    background-color: #f0e7ff;\n  }\n  .menu .hamburger.flash {\n    background-color: #629cf3;\n  }\n  .menu .dropdown:hover > * {\n    cursor: inherit;\n  }\n  .menu .dropdown ul {\n    max-height: 700px;\n    position: relative;\n    padding-left: 9px;\n  }\n  .menu .dropdown ul li:hover {\n    color: #629cf3;\n    background-color: inherit;\n  }\n  .menu .dropdown .dropdown-header {\n    border-left: none;\n    padding: 9px;\n    font-size: 18px;\n    font-weight: 900;\n  }\n  .menu .dropdown:hover > * {\n    border-left: none;\n    background-color: inherit;\n  }\n}',"",{version:3,sources:["webpack://./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/_base.scss","webpack://./sass/menu.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_spin-r.scss"],names:[],mappings:"AACA;;;;;;EAAA;ACGA;EACE,iBAAA;EACA,qBAAA;EACA,eAAA;EAEA,oCAAA;EACA,0BAAA;EACA,kCAAA;EAGA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,6BAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;ACCF;ADCE;EAKI,YDT2B;AEMjC;ADQI;EAKI,YDnByB;AESjC;ADcI;;;EAGE,yBC5CY;AAgClB;;ADiBA;EACE,WC1CsB;ED2CtB,cAAA;EACA,qBAAA;EACA,kBAAA;ACdF;;ADiBA;EACE,cAAA;EACA,QAAA;EACA,mBAAA;ACdF;ADgBE;EAGE,WCxDoB;EDyDpB,aCxDqB;EDyDrB,yBClEc;EDmEd,kBDlD6B;ECmD7B,kBAAA;EACA,8BAAA;EACA,0BAAA;EACA,gCAAA;AChBJ;ADmBE;EAEE,WAAA;EACA,cAAA;AClBJ;ADqBE;EACE,WAAA;ACnBJ;ADsBE;EACE,cAAA;ACpBJ;;AChEE;;EAAA;AAIE;EACE,0BAAA;EACA,kEAAA;ADkEN;AChEM;EACE,wDAAA;ADkER;AC9DM;EACE,6FAAA;ADgER;AC1DM;EACE,0BAAA;EACA,uBAAA;EACA,+DAAA;AD4DR;AC1DQ;EACE,MAAA;EACA,UAAA;EACA,0DAAA;AD4DV;ACxDQ;EACE,SAAA;EACA,wBAAA;EACA,2FAAA;AD0DV;;AA/EA;EACE,SAAA;EACA,UAAA;EACA,cAlBgB;AAoGlB;AAhFE;EACE,qBAAA;AAkFJ;AA/EE;EACE,qBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;AAiFJ;AA9EE;EACE,cAAA;EACA,cAjCc;EAkCd,eAAA;EACA,SAAA;AAgFJ;AA9EI;EACE,cAtCY;AAsHlB;AA9EM;EACE,cAvCa;AAuHrB;AA3EE;EACE,aAAA;EACA,qBAAA;AA6EJ;AA3EI;EACE,kCAAA;EACA,iBAAA;AA6EN;AA1EI;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,aAAA;EACA,gBAAA;AA4EN;AA1EM;EACE,gBAAA;EACA,YA9DO;AA0If;AA1EQ;EACE,YAAA;EACA,yBAnEW;AA+IrB;AAvEI;EACE,8BAAA;EACA,eAAA;EACA,yBA5EW;AAqJjB;AAtEI;EACE,iBA7EO;EA8EP,2BAAA;AAwEN;AApEE;EACE,YAAA;EACA,aAAA;AAsEJ;AAnEE;EACE;IACE,qBAAA;EAqEJ;EAlEE;IACE,aAAA;IACA,0DAAA;IACA,gBAAA;IACA,eAAA;IACA,iBAAA;IACA,yBArGW;IAsGX,6BAAA;IACA,iBAAA;IACA,kBAAA;EAoEJ;EAjEE;IACE,aAAA;EAmEJ;EAhEE;IACE,wBAAA;EAkEJ;EA/DE;IACE,yBApHW;EAqLf;EA9DE;IACE,yBAvHe;EAuLnB;EA5DI;IACE,eAAA;EA8DN;EA3DI;IACE,iBA9HK;IA+HL,kBAAA;IACA,iBAjIO;EA8Lb;EA3DM;IACE,cArIW;IAsIX,yBAAA;EA6DR;EAzDI;IACE,iBAAA;IACA,YA3IO;IA4IP,eAAA;IACA,gBAAA;EA2DN;EAxDI;IACE,iBAAA;IACA,yBAAA;EA0DN;AACF",sourcesContent:['@charset "UTF-8";\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n\n// Settings\n// ==================================================\n$hamburger-padding-x           : 15px !default;\n$hamburger-padding-y           : 15px !default;\n$hamburger-layer-width         : 40px !default;\n$hamburger-layer-height        : 4px !default;\n$hamburger-layer-spacing       : 6px !default;\n$hamburger-layer-color         : #000 !default;\n$hamburger-layer-border-radius : 4px !default;\n$hamburger-hover-opacity       : 0.7 !default;\n$hamburger-active-layer-color  : $hamburger-layer-color !default;\n$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;\n\n// To use CSS filters as the hover effect instead of opacity,\n// set $hamburger-hover-use-filter as true and\n// change the value of $hamburger-hover-filter accordingly.\n$hamburger-hover-use-filter   : false !default;\n$hamburger-hover-filter       : opacity(50%) !default;\n$hamburger-active-hover-filter: $hamburger-hover-filter !default;\n\n// Types (Remove or comment out what you don’t need)\n// ==================================================\n$hamburger-types: (\n  // 3dx,\n  // 3dx-r,\n  // 3dy,\n  // 3dy-r,\n  // 3dxy,\n  // 3dxy-r,\n  // arrow,\n  // arrow-r,\n  // arrowalt,\n  // arrowalt-r,\n  // arrowturn,\n  // arrowturn-r,\n  // boring,\n  // collapse,\n  // collapse-r,\n  // elastic,\n  // elastic-r,\n  // emphatic,\n  // emphatic-r,\n  // minus,\n  // slider,\n  // slider-r,\n  // spin,\n  spin-r,\n  // spring,\n  // spring-r,\n  // stand,\n  // stand-r,\n  // squeeze,\n  // vortex,\n  // vortex-r\n) !default;\n\n// Base Hamburger (We need this)\n// ==================================================\n@import "base";\n\n// Hamburger types\n// ==================================================\n// @import "types/3dx";\n// @import "types/3dx-r";\n// @import "types/3dy";\n// @import "types/3dy-r";\n// @import "types/3dxy";\n// @import "types/3dxy-r";\n// @import "types/arrow";\n// @import "types/arrow-r";\n// @import "types/arrowalt";\n// @import "types/arrowalt-r";\n// @import "types/arrowturn";\n// @import "types/arrowturn-r";\n// @import "types/boring";\n// @import "types/collapse";\n// @import "types/collapse-r";\n// @import "types/elastic";\n// @import "types/elastic-r";\n// @import "types/emphatic";\n// @import "types/emphatic-r";\n// @import "types/minus";\n// @import "types/slider";\n// @import "types/slider-r";\n// @import "types/spin";\n@import "types/spin-r";\n// @import "types/spring";\n// @import "types/spring-r";\n// @import "types/stand";\n// @import "types/stand-r";\n// @import "types/squeeze";\n// @import "types/vortex";\n// @import "types/vortex-r";\n\n// ==================================================\n// Cooking up additional types:\n//\n// The Sass for each hamburger type should be nested\n// inside an @if directive to check whether or not\n// it exists in $hamburger-types so only the CSS for\n// included types are generated.\n//\n// e.g. hamburgers/types/_new-type.scss\n//\n// @if index($hamburger-types, new-type) {\n//   .hamburger--new-type {\n//     ...\n//   }\n// }\n','@use "sass:math";\n\n// Hamburger\n// ==================================================\n.hamburger {\n  padding: $hamburger-padding-y $hamburger-padding-x;\n  display: inline-block;\n  cursor: pointer;\n\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n\n  // Normalize (<button>)\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n\n  &:hover {\n    @if $hamburger-hover-use-filter == true {\n      filter: $hamburger-hover-filter;\n    }\n    @else {\n      opacity: $hamburger-hover-opacity;\n    }\n  }\n\n  &.is-active {\n    &:hover {\n      @if $hamburger-hover-use-filter == true {\n        filter: $hamburger-active-hover-filter;\n      }\n      @else {\n        opacity: $hamburger-active-hover-opacity;\n      }\n    }\n\n    .hamburger-inner,\n    .hamburger-inner::before,\n    .hamburger-inner::after {\n      background-color: $hamburger-active-layer-color;\n    }\n  }\n}\n\n.hamburger-box {\n  width: $hamburger-layer-width;\n  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: math.div($hamburger-layer-height, -2);\n\n  &,\n  &::before,\n  &::after {\n    width: $hamburger-layer-width;\n    height: $hamburger-layer-height;\n    background-color: $hamburger-layer-color;\n    border-radius: $hamburger-layer-border-radius;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease;\n  }\n\n  &::before,\n  &::after {\n    content: "";\n    display: block;\n  }\n\n  &::before {\n    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n\n  &::after {\n    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n}\n',"$menu-color-main: #475480;\n$dropdown-color: #f0e7ff;\n$dropdown-highlight: #629cf3;\n$spacing-base: 9px;\n$max-height: 700px;\n\n$hamburger-padding-x: 18px !default;\n$hamburger-padding-y: 5px !default;\n$hamburger-layer-width: 25px !default; // default = 40px\n$hamburger-layer-height: 2.5px !default; // default = 4px\n$hamburger-layer-color: $menu-color-main !default;\n// comment out hamburger types that are unneeded (node_modules/hamburgers/_sass/hamburgers/hamburgers.scss)\n\n@import '../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss';\n\n.menu {\n  margin: 0;\n  padding: 0;\n  color: $menu-color-main;\n\n  & > * {\n    display: inline-block;\n  }\n\n  a {\n    text-decoration: none;\n    margin: 0;\n    padding: 0;\n    color: inherit;\n  }\n\n  .title {\n    padding: 0 $spacing-base;\n    color: $menu-color-main;\n    font-size: 30px;\n    margin: 0;\n\n    a {\n      color: $menu-color-main;\n\n      &:hover {\n        color: $dropdown-highlight;\n      }\n    }\n  }\n\n  .dropdown {\n    margin: 0 $spacing-base;\n    display: inline-block;\n\n    .dropdown-header {\n      border-left: 2px solid transparent;\n      padding: calc($spacing-base * 2) $spacing-base;\n    }\n\n    ul {\n      position: absolute;\n      margin: 0;\n      padding: 0;\n      list-style-type: none;\n      max-height: 0;\n      overflow: hidden;\n\n      li {\n        min-width: 130px;\n        padding: $spacing-base;\n\n        &:hover {\n          color: white;\n          background-color: $dropdown-highlight;\n        }\n      }\n    }\n\n    &:hover > * {\n      border-left: 2px solid $dropdown-highlight;\n      cursor: pointer;\n      background-color: $dropdown-color;\n    }\n\n    &:hover > ul {\n      max-height: $max-height;\n      transition: max-height 0.9s;\n    }\n  }\n\n  .hamburger {\n    height: 40px;\n    display: none;\n  }\n\n  @media (max-width: 800px) {\n    .hamburger {\n      display: inline-block;\n    }\n\n    .dropdown-container {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(45vw, 1fr));\n      min-height: 90vh;\n      max-width: 90vw;\n      padding-top: 20px;\n      background-color: $dropdown-color;\n      transform: translateX(-800px);\n      transition: 0.15s;\n      position: absolute;\n    }\n\n    .dropdown-container.hide-mobile {\n      display: none;\n    }\n\n    .dropdown-container.is-active {\n      transform: translateX(0);\n    }\n\n    .hamburger.is-active {\n      background-color: $dropdown-color;\n    }\n\n    .hamburger.flash {\n      background-color: $dropdown-highlight;\n    }\n\n    .dropdown {\n      &:hover > * {\n        cursor: inherit;\n      }\n\n      ul {\n        max-height: $max-height;\n        position: relative;\n        padding-left: $spacing-base;\n\n        li:hover {\n          color: $dropdown-highlight;\n          background-color: inherit;\n        }\n      }\n\n      .dropdown-header {\n        border-left: none;\n        padding: $spacing-base;\n        font-size: 18px;\n        font-weight: 900;\n      }\n\n      &:hover > * {\n        border-left: none;\n        background-color: inherit;\n      }\n    }\n  }\n}\n","@if index($hamburger-types, spin-r) {\n  /*\n   * Spin Reverse\n   */\n  .hamburger--spin-r {\n    .hamburger-inner {\n      transition-duration: 0.22s;\n      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\n      &::before {\n        transition: top 0.1s 0.25s ease-in,\n                    opacity 0.1s ease-in;\n      }\n\n      &::after {\n        transition: bottom 0.1s 0.25s ease-in,\n                    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: rotate(-225deg);\n        transition-delay: 0.12s;\n        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\n        &::before {\n          top: 0;\n          opacity: 0;\n          transition: top 0.1s ease-out,\n                      opacity 0.1s 0.12s ease-out;\n        }\n\n        &::after {\n          bottom: 0;\n          transform: rotate(90deg);\n          transition: bottom 0.1s ease-out,\n                      transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const s=a},"./node_modules/css-loader/dist/runtime/api.js":n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(a[A]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);t&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */"),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},"./sass/menu.scss":(n,e,r)=>{r.r(e),r.d(e,{default:()=>b});var t=r("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=r.n(t),i=r("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=r.n(i),s=r("./node_modules/style-loader/dist/runtime/insertBySelector.js"),A=r.n(s),d=r("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),u=r.n(d),l=r("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=r.n(l),p=r("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=r.n(p),h=r("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu.scss"),g={};g.styleTagTransform=m(),g.setAttributes=u(),g.insert=A().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=c(),o()(h.default,g);const b=h.default&&h.default.locals?h.default.locals:void 0},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var A=n[s],d=t.base?A[0]+t.base:A[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var c=r(l),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==c)e[c].references++,e[c].updater(p);else{var m=o(p,t);t.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var A=t(n,o),d=0;d<i.length;d++){var u=r(i[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=A}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var t={};(()=>{r.r(t),r("./sass/menu.scss");const n=document.querySelector(".hamburger"),e=document.querySelector(".dropdown-container");n.addEventListener("click",(function(){n.classList.add("flash"),setTimeout((()=>n.classList.remove("flash")),150),this.classList.toggle("is-active"),e.classList.toggle("is-active")}));const o=window.matchMedia("(max-width: 800px)"),i=window.matchMedia("(min-width: 800px)");function a(){e.classList.add("hide-mobile"),setTimeout((()=>e.classList.remove("hide-mobile")),800)}o.addEventListener("change",(function(n){n.matches&&a()})),i.addEventListener("change",(function(){n.classList.remove("is-active"),e.classList.remove("is-active")})),a()})()})()}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";r(297)})()})();