/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_1_Array_functions_1_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/1. Array functions/1.1 */ \"./src/modules/1. Array functions/1.1.js\");\n/* harmony import */ var _modules_1_Array_functions_1_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/1. Array functions/1.2 */ \"./src/modules/1. Array functions/1.2.js\");\n/* harmony import */ var _modules_1_Array_functions_1_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/1. Array functions/1.3 */ \"./src/modules/1. Array functions/1.3.js\");\n/* harmony import */ var _modules_1_Array_functions_1_4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/1. Array functions/1.4 */ \"./src/modules/1. Array functions/1.4.js\");\n/* harmony import */ var _modules_1_Array_functions_1_5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/1. Array functions/1.5 */ \"./src/modules/1. Array functions/1.5.js\");\n/* harmony import */ var _modules_1_Array_functions_1_6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/1. Array functions/1.6 */ \"./src/modules/1. Array functions/1.6.js\");\n/* harmony import */ var _modules_2_String_functions_2_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/2. String functions/2.1 */ \"./src/modules/2. String functions/2.1.js\");\n/* harmony import */ var _modules_2_String_functions_2_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/2. String functions/2.2 */ \"./src/modules/2. String functions/2.2.js\");\n/* harmony import */ var _modules_2_String_functions_2_3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/2. String functions/2.3 */ \"./src/modules/2. String functions/2.3.js\");\n/* harmony import */ var _modules_2_String_functions_2_4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/2. String functions/2.4 */ \"./src/modules/2. String functions/2.4.js\");\n/* harmony import */ var _modules_2_String_functions_2_5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/2. String functions/2.5 */ \"./src/modules/2. String functions/2.5.js\");\n/* harmony import */ var _modules_2_String_functions_2_6__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/2. String functions/2.6 */ \"./src/modules/2. String functions/2.6.js\");\n/* harmony import */ var _modules_3_Algorithms_and_functional_programming_3_1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/3. Algorithms and functional programming/3.1 */ \"./src/modules/3. Algorithms and functional programming/3.1.js\");\n/* harmony import */ var _modules_3_Algorithms_and_functional_programming_3_2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/3. Algorithms and functional programming/3.2 */ \"./src/modules/3. Algorithms and functional programming/3.2.js\");\n/* harmony import */ var _modules_3_Algorithms_and_functional_programming_3_3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/3. Algorithms and functional programming/3.3 */ \"./src/modules/3. Algorithms and functional programming/3.3.js\");\n/* harmony import */ var _modules_3_Algorithms_and_functional_programming_3_4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/3. Algorithms and functional programming/3.4 */ \"./src/modules/3. Algorithms and functional programming/3.4.js\");\n/* harmony import */ var _modules_3_Algorithms_and_functional_programming_3_5__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/3. Algorithms and functional programming/3.5 */ \"./src/modules/3. Algorithms and functional programming/3.5.js\");\n/* harmony import */ var _modules_3_Algorithms_and_functional_programming_3_6__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/3. Algorithms and functional programming/3.6 */ \"./src/modules/3. Algorithms and functional programming/3.6.js\");\n/* harmony import */ var _modules_4_Higher_Order_Functions_4_1__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/4. Higher Order Functions/4.1 */ \"./src/modules/4. Higher Order Functions/4.1.js\");\n/* harmony import */ var _modules_4_Higher_Order_Functions_4_2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/4. Higher Order Functions/4.2 */ \"./src/modules/4. Higher Order Functions/4.2.js\");\n/* harmony import */ var _modules_5_Recursion_5_1__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/5. Recursion/5.1 */ \"./src/modules/5. Recursion/5.1.js\");\n/* harmony import */ var _modules_5_Recursion_5_2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/5. Recursion/5.2 */ \"./src/modules/5. Recursion/5.2.js\");\n/* harmony import */ var _modules_6_Classes_and_Patterns_6_1__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/6. Classes and Patterns/6.1 */ \"./src/modules/6. Classes and Patterns/6.1.js\");\n/* harmony import */ var _modules_6_Classes_and_Patterns_6_2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/6. Classes and Patterns/6.2 */ \"./src/modules/6. Classes and Patterns/6.2.js\");\n/* harmony import */ var _modules_7_Sort_7_1__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/7. Sort/7.1 */ \"./src/modules/7. Sort/7.1.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// 1.1 Усредненная сумма массивов [очень просто]\r\nconsole.log('1.1 sumAverage ', Object(_modules_1_Array_functions_1_1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([[1, 2, 2, 1], [2, 2, 2, 1]]))\r\n\r\n// 1.2. Сумма трех максимальных значений [очень просто]\r\nconsole.log('1.2 maxTripletSum', Object(_modules_1_Array_functions_1_2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([3, 2, 6, 8, 2, 3]))\r\n\r\n// 1.3. Сортировка к максимальному значению [просто]\r\nconsole.log('1.3 biggest', Object(_modules_1_Array_functions_1_3__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([3, 30, 34, 5, 9]))\r\nconsole.log('1.3 biggest', Object(_modules_1_Array_functions_1_3__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([1, 2, 3]))\r\n\r\n// 1.4. Комбинации сдвига [просто]\r\nconsole.group('1.4 pattern')\r\nconsole.log(Object(_modules_1_Array_functions_1_4__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(3))\r\nconsole.log(Object(_modules_1_Array_functions_1_4__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(6))\r\nconsole.groupEnd()\r\n\r\n// 1.5. Арифметическая последовательность - сумма из n элементов [просто]\r\nconsole.log('1.5 arithmeticSequenceSum', Object(_modules_1_Array_functions_1_5__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2, 3, 5))\r\n\r\n// 1.6. Диагональная сумма матрицы [просто]\r\nconsole.group('1.6 diagonalSum')\r\nconsole.log(\r\n  Object(_modules_1_Array_functions_1_6__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\r\n    [\r\n      [5, 9, 1, 0],\r\n      [8, 7, 2, 3],\r\n      [1, 4, 1, 9],\r\n      [2, 3, 8, 2]\r\n    ]\r\n  )\r\n)\r\n\r\nconsole.log(\r\n  Object(_modules_1_Array_functions_1_6__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\r\n    [\r\n      [1, 2],\r\n      [3, 4]\r\n    ]\r\n  )\r\n)\r\nconsole.groupEnd()\r\n\r\n// ####################################################################\r\n\r\n// 2.1. Машиночитаемые имена [очень просто]\r\nconsole.group('2.1 toMachineName')\r\nconsole.log(Object(_modules_2_String_functions_2_1__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('Hello, my name is Andrew', '-'))\r\nconsole.log(Object(_modules_2_String_functions_2_1__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('Lorem ipsum sit       DOLOR', '-'))\r\nconsole.log(Object(_modules_2_String_functions_2_1__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('3 basics and 1 advance', '-'))\r\nconsole.groupEnd()\r\n\r\n// 2.2. Валютный формат [просто]\r\nconsole.group('2.2 formatCurrency')\r\nconsole.log(Object(_modules_2_String_functions_2_2__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(2546.2562))\r\nconsole.log(Object(_modules_2_String_functions_2_2__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('1500.342626'))\r\nconsole.log(Object(_modules_2_String_functions_2_2__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100.2134))\r\nconsole.groupEnd()\r\n\r\n// 2.3. Алфавитизация [очень просто]\r\nconsole.group('2.3 alphabetized')\r\nconsole.log(Object(_modules_2_String_functions_2_3__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('The Holy Bible.'))\r\nconsole.log(Object(_modules_2_String_functions_2_3__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('Hello!!!!!!!!!!!!!!!!!!!!!!'))\r\nconsole.groupEnd()\r\n\r\n// 2.4. Декодирование римских цифр [просто]\r\nconsole.group('2.4 romanToNumber')\r\nconsole.log(Object(_modules_2_String_functions_2_4__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('I'))\r\nconsole.log(Object(_modules_2_String_functions_2_4__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('C'))\r\nconsole.log(Object(_modules_2_String_functions_2_4__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('CI'))\r\nconsole.log(Object(_modules_2_String_functions_2_4__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('XXI'))\r\nconsole.log(Object(_modules_2_String_functions_2_4__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('IX'))\r\nconsole.groupEnd()\r\n\r\n// 2.5. Декодирование римских цифр [просто]\r\nconsole.group('2.5 countDuplicates')\r\nconsole.log(Object(_modules_2_String_functions_2_5__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('abcde'))\r\nconsole.log(Object(_modules_2_String_functions_2_5__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('aabbcde'))\r\nconsole.log(Object(_modules_2_String_functions_2_5__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('aabBcde'))\r\nconsole.log(Object(_modules_2_String_functions_2_5__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('indivisibility'))\r\nconsole.log(Object(_modules_2_String_functions_2_5__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('aA11'))\r\nconsole.groupEnd()\r\n\r\n// 2.6. Замена букв на их позиции [просто]\r\nconsole.log('2.6 replaceWithAlphPositions', Object(_modules_2_String_functions_2_6__WEBPACK_IMPORTED_MODULE_11__[\"default\"])('The sunset sets at twelve o’clock'))\r\n\r\n// ####################################################################\r\n\r\n// 3. Algorithms and functional programming\r\n\r\n// 3.1. Сведение и сортировка массива [очень просто]\r\nconsole.log('3.1 flattenAndSort', Object(_modules_3_Algorithms_and_functional_programming_3_1__WEBPACK_IMPORTED_MODULE_12__[\"default\"])([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))\r\n\r\n// 3.2. Функциональное сложение [просто]\r\nconst addOne = Object(_modules_3_Algorithms_and_functional_programming_3_2__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(1)\r\nconst addThree = Object(_modules_3_Algorithms_and_functional_programming_3_2__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(3)\r\n\r\nconsole.group('3.2 add')\r\nconsole.log('3.2 addOne(3); : ', addOne(3))\r\nconsole.log('3.2 addThree(3); : ', addThree(3))\r\nconsole.groupEnd()\r\n\r\n// 3.3. Умножение всех элементов массива [просто]\r\nconsole.log('3.3 multiplyAll: ', Object(_modules_3_Algorithms_and_functional_programming_3_3__WEBPACK_IMPORTED_MODULE_14__[\"default\"])([1, 2, 3])(2))\r\n\r\n// 3.4. Сумма уникальных значений [просто, имеет различные решения]\r\nconsole.group('3.4 uniqueSum')\r\nconsole.log(Object(_modules_3_Algorithms_and_functional_programming_3_4__WEBPACK_IMPORTED_MODULE_15__[\"default\"])([1, 2, 3]))\r\nconsole.log(Object(_modules_3_Algorithms_and_functional_programming_3_4__WEBPACK_IMPORTED_MODULE_15__[\"default\"])([1, 3, 8, 1, 8]))\r\nconsole.log(Object(_modules_3_Algorithms_and_functional_programming_3_4__WEBPACK_IMPORTED_MODULE_15__[\"default\"])([-1, -1, 5, 2, -7]))\r\nconsole.log(Object(_modules_3_Algorithms_and_functional_programming_3_4__WEBPACK_IMPORTED_MODULE_15__[\"default\"])([]))\r\nconsole.groupEnd()\r\n\r\n// 3.5. Reduce [просто +]\r\nconsole.log('3.5 Reduce', Object(_modules_3_Algorithms_and_functional_programming_3_5__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(\r\n  [1, 2, 3, 4],\r\n  (acc, value) => acc * value,\r\n  1\r\n))\r\n\r\n// 3.6. Функциональная композиция [не просто]\r\n\r\nconst f = (a) => a + 1\r\nconst g = (a) => a + 2\r\nconst h = (a) => a + 3\r\nconsole.log('3.6 compose: ', Object(_modules_3_Algorithms_and_functional_programming_3_6__WEBPACK_IMPORTED_MODULE_17__[\"default\"])(f, g, h)(1))\r\n\r\n// ##################################################\r\n// 4. Функции высшего порядка\r\n\r\n// 4.1. Распаковка аргументов [просто]\r\nconst fn = (num, bool) => {\r\n  return { num, bool }\r\n}\r\nconsole.log('4.1 spread', Object(_modules_4_Higher_Order_Functions_4_1__WEBPACK_IMPORTED_MODULE_18__[\"default\"])(fn, [1, true]))\r\n\r\n// 4.2. ZipWith [просто +]\r\nconsole.group('4.2 zipWith')\r\nconsole.log(Object(_modules_4_Higher_Order_Functions_4_2__WEBPACK_IMPORTED_MODULE_19__[\"default\"])(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]))\r\nconsole.log(Object(_modules_4_Higher_Order_Functions_4_2__WEBPACK_IMPORTED_MODULE_19__[\"default\"])(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]))\r\nconsole.groupEnd()\r\n\r\n// 5. Рекурсия\r\n// 5.1. Сумма последовательности [просто]\r\nconsole.group('5.1 sequenceSum')\r\nconsole.log(Object(_modules_5_Recursion_5_1__WEBPACK_IMPORTED_MODULE_20__[\"default\"])(2, 2, 2))\r\nconsole.log(Object(_modules_5_Recursion_5_1__WEBPACK_IMPORTED_MODULE_20__[\"default\"])(2, 6, 2))\r\nconsole.log(Object(_modules_5_Recursion_5_1__WEBPACK_IMPORTED_MODULE_20__[\"default\"])(1, 5, 1))\r\nconsole.log(Object(_modules_5_Recursion_5_1__WEBPACK_IMPORTED_MODULE_20__[\"default\"])(1, 5, 3))\r\nconsole.groupEnd()\r\n\r\n// 5.2. Связанный список в строку [просто]\r\nclass Node {\r\n  constructor (data, next = null) {\r\n    this.data = data\r\n    this.next = next\r\n  }\r\n}\r\n\r\nconsole.group('5.2 stringify')\r\nconsole.log(Object(_modules_5_Recursion_5_2__WEBPACK_IMPORTED_MODULE_21__[\"default\"])(new Node(1, new Node(2, new Node(3)))))\r\nconsole.log(Object(_modules_5_Recursion_5_2__WEBPACK_IMPORTED_MODULE_21__[\"default\"])(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))))\r\nconsole.groupEnd()\r\n\r\n// 6. Классы и паттерны\r\n// 6.1. Singleton [просто]\r\nconst o1 = new _modules_6_Classes_and_Patterns_6_1__WEBPACK_IMPORTED_MODULE_22__[\"default\"]()\r\nconst o2 = new _modules_6_Classes_and_Patterns_6_1__WEBPACK_IMPORTED_MODULE_22__[\"default\"]()\r\n\r\no1.name = 'Singleton'\r\n\r\nconsole.group('6.1 Singleton')\r\nconsole.log(o1 === o2)\r\nconsole.log(o2.name)\r\nconsole.groupEnd()\r\n\r\n// 6.2. Расширение String [просто]\r\nconsole.group('6.2 customUpperCase')\r\nconsole.log('abc'.customUpperCase())\r\nconsole.log('Hello, world!'.customUpperCase())\r\nconsole.groupEnd()\r\n\r\n// 7. Сортировка\r\n// 7.1. Сортированный список объектов [очень просто]\r\nlet arr = [\r\n  { a: 1, b: 3 },\r\n  { a: 3, b: 2 },\r\n  { a: 2, b: 40 },\r\n  { a: 4, b: 12 }\r\n]\r\n\r\narr = Object(_modules_7_Sort_7_1__WEBPACK_IMPORTED_MODULE_24__[\"default\"])(arr, 'a')\r\nconsole.log('7.1 customSort', arr)\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/1. Array functions/1.1.js":
/*!***********************************************!*\
  !*** ./src/modules/1. Array functions/1.1.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// 1.1 Усредненная сумма массивов [очень просто]\r\n\r\nconst sumAverage = (arr) => {\r\n  const result = arr.reduce((sum, current) => {\r\n    const arrayResult = current.reduce((sum, number) => {\r\n      return sum + number\r\n    })\r\n\r\n    return sum + arrayResult\r\n  }, 0)\r\n\r\n  return Math.floor(result / arr.length)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sumAverage);\r\n\n\n//# sourceURL=webpack:///./src/modules/1._Array_functions/1.1.js?");

/***/ }),

/***/ "./src/modules/1. Array functions/1.2.js":
/*!***********************************************!*\
  !*** ./src/modules/1. Array functions/1.2.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// 1.2. Сумма трех максимальных значений [очень просто]\r\n\r\nconst maxTripletSum = (arr) => {\r\n  const resultArr = []\r\n\r\n  for (let i = 0; i < 3; i++) {\r\n    const maxElem = Math.max(...arr)\r\n    resultArr.push(maxElem)\r\n    arr.splice(arr.indexOf(maxElem, 0), 1)\r\n  }\r\n\r\n  return resultArr.reduce((sum, current) => sum + current, 0)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (maxTripletSum);\n\n\n//# sourceURL=webpack:///./src/modules/1._Array_functions/1.2.js?");

/***/ }),

/***/ "./src/modules/1. Array functions/1.3.js":
/*!***********************************************!*\
  !*** ./src/modules/1. Array functions/1.3.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst biggest = (nums) => nums.sort().reverse().join('')\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (biggest);\r\n\n\n//# sourceURL=webpack:///./src/modules/1._Array_functions/1.3.js?");

/***/ }),

/***/ "./src/modules/1. Array functions/1.4.js":
/*!***********************************************!*\
  !*** ./src/modules/1. Array functions/1.4.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst pattern = (amount) => {\r\n  const arr = []\r\n  const rezult = []\r\n\r\n  for (let i = 0; i < amount; i++) {\r\n    arr.push(i + 1)\r\n  }\r\n\r\n  for (let i = 0; i < amount; i++) {\r\n    arr.push(...arr.splice(0, 1))\r\n    rezult[i] = arr.slice()\r\n  }\r\n\r\n  return rezult\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (pattern);\r\n\n\n//# sourceURL=webpack:///./src/modules/1._Array_functions/1.4.js?");

/***/ }),

/***/ "./src/modules/1. Array functions/1.5.js":
/*!***********************************************!*\
  !*** ./src/modules/1. Array functions/1.5.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst arithmeticSequenceSum = (a, r, n) => {\r\n  let result = 0\r\n  for (let i = 0; i < n; i++) {\r\n    result = (result + a) + (i * r)\r\n  }\r\n  return result\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (arithmeticSequenceSum);\r\n\n\n//# sourceURL=webpack:///./src/modules/1._Array_functions/1.5.js?");

/***/ }),

/***/ "./src/modules/1. Array functions/1.6.js":
/*!***********************************************!*\
  !*** ./src/modules/1. Array functions/1.6.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst diagonalSum = (matrix) => {\r\n  let rezult = 0\r\n\r\n  for (let i = 0; i < matrix.length; i++) {\r\n    for (let j = 0; j < matrix[i].length; j++) {\r\n      if (i === j) rezult += matrix[i][j]\r\n    }\r\n  }\r\n\r\n  return rezult\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (diagonalSum);\r\n\n\n//# sourceURL=webpack:///./src/modules/1._Array_functions/1.6.js?");

/***/ }),

/***/ "./src/modules/2. String functions/2.1.js":
/*!************************************************!*\
  !*** ./src/modules/2. String functions/2.1.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// 2.1. Машиночитаемые имена [очень просто]\r\n\r\nconst toMachineName = (name, separator) => {\r\n  return name\r\n    .replace(/^[1-9]\\s|[,.]/, '')\r\n    .replace(/ +/g, `${separator}`)\r\n    .trim().toLowerCase()\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (toMachineName);\r\n\n\n//# sourceURL=webpack:///./src/modules/2._String_functions/2.1.js?");

/***/ }),

/***/ "./src/modules/2. String functions/2.2.js":
/*!************************************************!*\
  !*** ./src/modules/2. String functions/2.2.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// 2.2. Валютный формат [просто]\r\n\r\nconst formatCurrency = (amount) => {\r\n  return amount\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatCurrency);\r\n\n\n//# sourceURL=webpack:///./src/modules/2._String_functions/2.2.js?");

/***/ }),

/***/ "./src/modules/2. String functions/2.3.js":
/*!************************************************!*\
  !*** ./src/modules/2. String functions/2.3.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst alphabetized = (text) => {\r\n  return text\r\n    .replace(/\\s+|\\W+|\\d+|[_!&,.]+/g, '')\r\n    .split('')\r\n    .map(letter => letter)\r\n    .sort(([a], [b]) => {\r\n      if (a.toLowerCase() < b.toLowerCase()) {\r\n        return -1\r\n      } else {\r\n        return 1\r\n      }\r\n    })\r\n    .join('')\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (alphabetized);\r\n\n\n//# sourceURL=webpack:///./src/modules/2._String_functions/2.3.js?");

/***/ }),

/***/ "./src/modules/2. String functions/2.4.js":
/*!************************************************!*\
  !*** ./src/modules/2. String functions/2.4.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst romanToNumber = (number) => {\r\n  const romanNumbers = {\r\n    I: 1,\r\n    V: 5,\r\n    X: 10,\r\n    L: 50,\r\n    C: 100,\r\n    D: 500,\r\n    M: 1000\r\n  }\r\n\r\n  return number = number\r\n    .split('')\r\n    .map(element => {\r\n      for (const key in romanNumbers) {\r\n        if (element === key) {\r\n          element = romanNumbers[key]\r\n        }\r\n      }\r\n      return element\r\n    })\r\n    .reduce((accumulator, currentValue, index) => {\r\n      if (index >= number.indexOf(Math.max(...number))) return accumulator + currentValue\r\n      else return accumulator - currentValue\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (romanToNumber);\n\n\n//# sourceURL=webpack:///./src/modules/2._String_functions/2.4.js?");

/***/ }),

/***/ "./src/modules/2. String functions/2.5.js":
/*!************************************************!*\
  !*** ./src/modules/2. String functions/2.5.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst countDuplicates = (text) => {\r\n  const myObj = {}\r\n  let counter = 0\r\n  const str = text.toLowerCase()\r\n  for (let i = 0; i < str.length; i++) {\r\n    if (!myObj[str[i]]) {\r\n      myObj[str[i]] = 1\r\n    } else if (myObj[str[i]] < 2) {\r\n      myObj[str[i]] += 1\r\n      counter++\r\n    }\r\n  }\r\n  return counter\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (countDuplicates);\n\n\n//# sourceURL=webpack:///./src/modules/2._String_functions/2.5.js?");

/***/ }),

/***/ "./src/modules/2. String functions/2.6.js":
/*!************************************************!*\
  !*** ./src/modules/2. String functions/2.6.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst replaceWithAlphPositions = (text) => {\r\n  const rezult = text\r\n    .replace(/\\s+|\\W+|\\d+|[_!&,.]+/g, '')\r\n    .toLowerCase()\r\n    .split('')\r\n    .map(letter => letter.charCodeAt() - 96)\r\n    .join(' ')\r\n  return rezult\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (replaceWithAlphPositions);\n\n\n//# sourceURL=webpack:///./src/modules/2._String_functions/2.6.js?");

/***/ }),

/***/ "./src/modules/3. Algorithms and functional programming/3.1.js":
/*!*********************************************************************!*\
  !*** ./src/modules/3. Algorithms and functional programming/3.1.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst flattenAndSort = (arr) => [].concat(...arr).sort()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (flattenAndSort);\n\n\n//# sourceURL=webpack:///./src/modules/3._Algorithms_and_functional_programming/3.1.js?");

/***/ }),

/***/ "./src/modules/3. Algorithms and functional programming/3.2.js":
/*!*********************************************************************!*\
  !*** ./src/modules/3. Algorithms and functional programming/3.2.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst add = n => x => n + x\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n\n//# sourceURL=webpack:///./src/modules/3._Algorithms_and_functional_programming/3.2.js?");

/***/ }),

/***/ "./src/modules/3. Algorithms and functional programming/3.3.js":
/*!*********************************************************************!*\
  !*** ./src/modules/3. Algorithms and functional programming/3.3.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst multiplyAll = arr => number => arr.map(element => element * number)\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (multiplyAll);\n\n\n//# sourceURL=webpack:///./src/modules/3._Algorithms_and_functional_programming/3.3.js?");

/***/ }),

/***/ "./src/modules/3. Algorithms and functional programming/3.4.js":
/*!*********************************************************************!*\
  !*** ./src/modules/3. Algorithms and functional programming/3.4.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst uniqueSum = (arr) => {\r\n  arr = new Set(arr)\r\n  return [...arr].reduce((accumulator, currentValue) => (accumulator + currentValue), 0)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (uniqueSum);\n\n\n//# sourceURL=webpack:///./src/modules/3._Algorithms_and_functional_programming/3.4.js?");

/***/ }),

/***/ "./src/modules/3. Algorithms and functional programming/3.5.js":
/*!*********************************************************************!*\
  !*** ./src/modules/3. Algorithms and functional programming/3.5.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst reduce = (arr, callback, initialValue) => {\r\n  arr.forEach(element => {\r\n    initialValue = callback(initialValue, element)\r\n  })\r\n\r\n  return initialValue\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (reduce);\n\n\n//# sourceURL=webpack:///./src/modules/3._Algorithms_and_functional_programming/3.5.js?");

/***/ }),

/***/ "./src/modules/3. Algorithms and functional programming/3.6.js":
/*!*********************************************************************!*\
  !*** ./src/modules/3. Algorithms and functional programming/3.6.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst compose = (...rest) => (a) => {\r\n  return rest.reverse().reduce((accum, item) => {\r\n    return item(accum)\r\n  }, a)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (compose);\n\n\n//# sourceURL=webpack:///./src/modules/3._Algorithms_and_functional_programming/3.6.js?");

/***/ }),

/***/ "./src/modules/4. Higher Order Functions/4.1.js":
/*!******************************************************!*\
  !*** ./src/modules/4. Higher Order Functions/4.1.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst spread = (callback, arr) => {\r\n  return callback(...arr)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (spread);\n\n\n//# sourceURL=webpack:///./src/modules/4._Higher_Order_Functions/4.1.js?");

/***/ }),

/***/ "./src/modules/4. Higher Order Functions/4.2.js":
/*!******************************************************!*\
  !*** ./src/modules/4. Higher Order Functions/4.2.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst zipWith = (fn, a0, a1) => {\r\n  const arrayRezult = []\r\n  for (let i = 0; i < a0.length && a1.length; i++) {\r\n    arrayRezult[i] = fn(a0[i], a1[i])\r\n  }\r\n  return arrayRezult\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (zipWith);\n\n\n//# sourceURL=webpack:///./src/modules/4._Higher_Order_Functions/4.2.js?");

/***/ }),

/***/ "./src/modules/5. Recursion/5.1.js":
/*!*****************************************!*\
  !*** ./src/modules/5. Recursion/5.1.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst sequenceSum = (begin, end, step, sum = begin) => {\r\n  if (begin + step <= end) {\r\n    begin += step\r\n    sum += begin\r\n    return sequenceSum(begin, end, step, sum)\r\n  }\r\n  return sum\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequenceSum);\n\n\n//# sourceURL=webpack:///./src/modules/5._Recursion/5.1.js?");

/***/ }),

/***/ "./src/modules/5. Recursion/5.2.js":
/*!*****************************************!*\
  !*** ./src/modules/5. Recursion/5.2.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst stringify = (list, arr = []) => {\r\n  arr.push(list.data)\r\n  if (list.next !== null) {\r\n    return stringify(list.next, arr)\r\n  } else {\r\n    arr.push(null)\r\n    return arr\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (stringify);\r\n\n\n//# sourceURL=webpack:///./src/modules/5._Recursion/5.2.js?");

/***/ }),

/***/ "./src/modules/6. Classes and Patterns/6.1.js":
/*!****************************************************!*\
  !*** ./src/modules/6. Classes and Patterns/6.1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nlet singletonInstance = null\r\nclass Singleton {\r\n  constructor (name) {\r\n    if (!singletonInstance) {\r\n      singletonInstance = this\r\n    }\r\n    this.name = name\r\n    return singletonInstance\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Singleton);\n\n\n//# sourceURL=webpack:///./src/modules/6._Classes_and_Patterns/6.1.js?");

/***/ }),

/***/ "./src/modules/6. Classes and Patterns/6.2.js":
/*!****************************************************!*\
  !*** ./src/modules/6. Classes and Patterns/6.2.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (String.prototype.customUpperCase = function () {\r\n  const rezult = this\r\n    .split('')\r\n    .map(element => {\r\n      if (element.charCodeAt() >= 97 && element.charCodeAt() <= 122) {\r\n        return element.charCodeAt() - 32\r\n      } else {\r\n        return element.charCodeAt()\r\n      }\r\n    })\r\n  return String.fromCharCode(...rezult)\r\n});\n\n\n//# sourceURL=webpack:///./src/modules/6._Classes_and_Patterns/6.2.js?");

/***/ }),

/***/ "./src/modules/7. Sort/7.1.js":
/*!************************************!*\
  !*** ./src/modules/7. Sort/7.1.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst customSort = (list, sortBy) => {\r\n  list.sort((element1, element2) => {\r\n    if (element1[sortBy] > element2[sortBy]) {\r\n      return -1\r\n    } else if (element1[sortBy] < element2[sortBy]) {\r\n      return 1\r\n    } else {\r\n      return 0\r\n    }\r\n  })\r\n  return list\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (customSort);\n\n\n//# sourceURL=webpack:///./src/modules/7._Sort/7.1.js?");

/***/ })

/******/ });