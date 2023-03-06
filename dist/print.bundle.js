"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["print"],{

/***/ "./src/array-feature.js":
/*!******************************!*\
  !*** ./src/array-feature.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"arr\": () => (/* binding */ arr),\n/* harmony export */   \"checkerL\": () => (/* binding */ checkerL),\n/* harmony export */   \"inputAdd\": () => (/* binding */ inputAdd)\n/* harmony export */ });\nconst arr = [];\n\nconst inputAdd = document.querySelector('#writable');\nlet updateValue = '';\n\nconst checkerL = () => {\n  const inputCheck = document.querySelectorAll('.checky-left');\n  const li = document.querySelectorAll('li');\n  const long = li.length;\n  for (let i = 0; i < long; i += 1) {\n    if (arr[i].completed === true) {\n      inputCheck[i].checked = true;\n    } else {\n      inputCheck[i].checked = false;\n    }\n  }\n};\n\nconst add = () => {\n  if (arr.length !== 0) {\n    for (let y = 0; y < arr.length; y += 1) {\n      arr[y].index = y;\n    }\n  }\n\n  const obj = { description: inputAdd.value, completed: false, index: arr.length };\n  arr.push(obj);\n  localStorage.setItem('toDoList', JSON.stringify(arr));\n  const lilast = document.createElement('li');\n  const article = document.createElement('article');\n  const articleRemove = document.createElement('article');\n  const inputId = `in${arr.indexOf(obj)}`;\n  updateValue = arr[arr.indexOf(obj)].description;\n\n  const span = document.createElement('span');\n  const deleteButton = document.createElement('span');\n  span.classList.add('material-symbols-outlined', 'sombre', 'flotteur');\n  deleteButton.classList.add('material-symbols-outlined', 'sombre');\n  deleteButton.textContent = 'delete';\n  span.textContent = 'more_vert';\n  article.innerHTML = `\n    <span><input type=\"checkbox\" class=\"padding checky\" name=\"\" id=\"${arr.length - 1}\"><label for=\"${arr.length - 1}\">${updateValue}\n    </label><span>`;\n  // articleRemove.appendChild(inputRemove);\n  articleRemove.innerHTML = `<input type=\"checkbox\" class=\"padding-left checky-left\" name=\"\" id=\"${arr.length - 1}\">\n    <input type='text' id='${inputId}' value='${obj.description}'>`;\n  articleRemove.appendChild(deleteButton);\n  articleRemove.style.backgroundColor = 'rgba(222, 238, 79, 0.8)';\n  article.appendChild(span);\n  article.classList.add('flex');\n  articleRemove.classList.add('flex-around');\n  articleRemove.style.display = 'none';\n  const items = document.querySelectorAll('li');\n  const last = items[items.length - 1];\n  last.parentNode.insertBefore(lilast, last);\n  lilast.appendChild(article);\n  lilast.appendChild(articleRemove);\n  inputAdd.value = '';\n  span.addEventListener('click', () => {\n    articleRemove.style.display = 'flex';\n    article.style.display = 'none';\n    checkerL();\n  });\n  deleteButton.addEventListener('click', () => {\n    lilast.remove();\n    arr.splice(arr.indexOf(obj), 1);\n    for (let y = 0; y < arr.length; y += 1) {\n      arr[y].index = y;\n    }\n    localStorage.setItem('toDoList', JSON.stringify(arr));\n  });\n  articleRemove.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      arr[arr.indexOf(obj)].description = document.getElementById(inputId).value;\n      updateValue = document.getElementById(inputId).value;\n      articleRemove.style.display = 'none';\n      article.style.display = 'flex';\n      article.innerHTML = `\n            <span><input type=\"checkbox\" class=\"padding checky\" name=\"\" id=\"${arr.length - 1}\"><label for=\"${arr.length - 1}\">${updateValue}\n            </label><span>`;\n      article.appendChild(span);\n      for (let y = 0; y < arr.length; y += 1) {\n        arr[y].index = y;\n      }\n      localStorage.setItem('toDoList', JSON.stringify(arr));\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/array-feature.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/array-feature.js"));
/******/ }
]);