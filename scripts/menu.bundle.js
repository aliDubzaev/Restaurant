/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction createMenuItem(name, description, price) {\n  var row = document.createElement('tr');\n  var nameCell = document.createElement('th');\n  nameCell.setAttribute('scope', 'row');\n  nameCell.textContent = name;\n  var descCell = document.createElement('td');\n  descCell.textContent = description;\n  var priceCell = document.createElement('td');\n  priceCell.textContent = price;\n  row.append(nameCell, descCell, priceCell);\n  return row;\n}\nfunction loadMenu() {\n  var container = document.querySelector('.container');\n  container.innerHTML = '';\n  var menuTable = document.createElement('table');\n  var tableCaption = document.createElement('caption');\n  tableCaption.textContent = 'В нашем специальном меню представлены блюда, где лук играет главную роль, даря вам незабываемые вкусовые ощущения:';\n  var tableBody = document.createElement('tbody');\n  var menuItems = [{\n    name: 'Луковые крокеты',\n    description: 'Нежная начинка из лука, сыра и зелени в хрустящей панировке. Идеальная закуска!',\n    price: '2.300₽'\n  }, {\n    name: 'Луковый крем-суп',\n    description: 'Ароматный суп из карамелизированного лука с нежными специями. Согревающий и насыщенный вкус.',\n    price: '1.500₽'\n  }, {\n    name: 'Луковые оладьи',\n    description: 'Традиционные оладьи с начинкой из лука, грибов и зелени. Подаются со сметаной.',\n    price: '1.750₽'\n  }, {\n    name: 'Луковый тарт',\n    description: 'Хрустящая основа с нежной луковой начинкой, покрытая сливочным соусом и свежей зеленью.',\n    price: '1.200₽'\n  }, {\n    name: 'Луковый бургер',\n    description: 'Сочный бургер с луковой котлетой, овощами и фирменным луковым соусом.',\n    price: '2.400₽'\n  }, {\n    name: 'Паста с луком',\n    description: 'Паста аль денте с карамелизированным луком, чесноком и пикантными нотками. Просто и вкусно.',\n    price: '1.850₽'\n  }];\n  menuItems.forEach(function (item) {\n    var row = createMenuItem(item.name, item.description, item.price);\n    tableBody.append(row);\n  });\n  menuTable.append(tableCaption, tableBody);\n  container.append(menuTable);\n}\n\n\n//# sourceURL=webpack://team-rest/./src/scripts/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;