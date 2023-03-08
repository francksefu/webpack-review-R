"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["print2"],{

/***/ "./src/completeTask.js":
/*!*****************************!*\
  !*** ./src/completeTask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checker\": () => (/* binding */ checker),\n/* harmony export */   \"completer\": () => (/* binding */ completer)\n/* harmony export */ });\nconst completer = (arrs) => {\n  const tbl = [];\n  const inputCheck = document.querySelectorAll('.checky');\n  const long = inputCheck.length;\n  for (let i = 0; i < long; i += 1) {\n    inputCheck[i].addEventListener('change', () => {\n      if (inputCheck[i].checked) {\n        inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'line-through';\n        inputCheck[i].parentNode.childNodes[1].style.color = '#ddd';\n        arrs[i].completed = true;\n        for (let b = 0; b < arrs.length; b += 1) {\n          tbl[b] = arrs[b];\n        }\n        localStorage.setItem('toDoList', JSON.stringify(tbl));\n      } else {\n        inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'none';\n        inputCheck[i].parentNode.childNodes[1].style.color = '#000';\n        arrs[i].completed = false;\n        for (let b = 0; b < arrs.length; b += 1) {\n          tbl[b] = arrs[b];\n        }\n        localStorage.setItem('toDoList', JSON.stringify(tbl));\n      }\n    });\n  }\n};\n\nconst checker = (arrs) => {\n  const inputCheck = document.querySelectorAll('.checky');\n  const long = inputCheck.length;\n  for (let i = 0; i < long; i += 1) {\n    if (arrs[i].completed === true) {\n      inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'line-through';\n      inputCheck[i].parentNode.childNodes[1].style.color = '#ddd';\n      inputCheck[i].checked = true;\n    } else {\n      inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'none';\n      inputCheck[i].parentNode.childNodes[1].style.color = '#000';\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/completeTask.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/completeTask.js"));
/******/ }
]);