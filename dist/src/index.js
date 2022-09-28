/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory();
	else
		root["lib"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module) => {

eval("/* eslint-disable no-continue */\n/* eslint-disable prefer-destructuring */\n/* eslint-disable no-param-reassign */\n/* eslint-disable eqeqeq */\n/* eslint-disable no-plusplus */\n/* eslint-disable no-undef */\n/* eslint-disable camelcase */\n// capitalize(): hello world -> Hello world\nconsole.log('Challenge 1- capitalize()');\nfunction capitalize(str) {\n  console.log(`Original - ${str}`);\n  const ntr = str[0].toUpperCase() + str.slice(1);\n  console.log(`New - ${ntr}`);\n  return ntr;\n}\ncapitalize('ayush jain');\nconsole.log('------');\n\n// allCaps(): foo bar -> FOO BAR\nconsole.log('Challenge 2- allCaps()');\nfunction allCaps(str) {\n  console.log(`Original - ${str}`);\n  const ntr = str.toUpperCase();\n  console.log(`New - ${ntr}`);\n  return ntr;\n}\nallCaps('ayush jain');\nconsole.log('------');\n\n// capitalizeWords(): do all the things -> Do All The Things\nconsole.log('Challenge 3- capitalizeWords()');\nfunction capitalizeWords(str) {\n  console.log(`Original - ${str}`);\n  newStr = str.replace(str[0], str[0].toUpperCase());\n  len = str.length;\n  for (i = 0; i <= len; i += 1) {\n    if (str[i] === ' ') {\n      newStr = newStr.replace(newStr[i + 1], newStr[i + 1].toUpperCase());\n    }\n  }\n  console.log(`New - ${newStr}`);\n  return newStr;\n}\ncapitalizeWords('do all the things');\nconsole.log('------');\n\n// removeExtraSpaces(): \"   Hello    world!   \" -> \"Hello world!\"\nconsole.log('Challenge 4- removeExtraSpaces()');\nfunction removeExtraSpaces(str) {\n  console.log(`Original - ${str}`);\n  Str = str.trim();\n  len = str.length;\n  newStr = '';\n  // eslint-disable-next-line no-plusplus\n  for (i = 0; i <= len; i++) {\n    if (Str[i] === ' ') {\n      if (Str[i + 1] === ' ') {\n        continue;\n      } else {\n        newStr += Str.substring(i, i + 1);\n      }\n    } else {\n      newStr += Str.substring(i, i + 1);\n    }\n  }\n  console.log(`New - ${newStr}`);\n  return newStr;\n}\nremoveExtraSpaces('   Hello    world!   ');\nconsole.log('------');\n\n// kebobCase(): \" Hello world \" -> \"hello-world\"\nconsole.log('Challenge 5- kebobCase()');\nfunction kebobCase(str) {\n  console.log(`Original - ${str}`);\n  str = str.toLowerCase();\n  str = str.trim();\n  len = str.length;\n  newStr = '';\n  for (i = 0; i <= len; i++) {\n    if (str[i] == ' ') {\n      if (str[i + 1] == ' ') {\n        continue;\n      } else {\n        newStr += str.substring(i, i + 1);\n      }\n    } else {\n      newStr += str.substring(i, i + 1);\n    }\n  }\n  newStr = newStr.replaceAll(' ', '-');\n  console.log(`New - ${newStr}`);\n  return newStr;\n}\nkebobCase('   Hello    world    ');\nconsole.log('------');\n\n// snakeCase(): \" what the heck \" -> \"what_the_heck\"\nconsole.log('Challenge 6- snakeCase()');\nfunction snakeCase(str) {\n  console.log(`Original - ${str}`);\n  str = str.toLowerCase();\n  str = str.trim();\n  len = str.length;\n  newStr = '';\n  for (i = 0; i <= len; i++) {\n    if (str[i] == ' ') {\n      if (str[i + 1] == ' ') {\n        continue;\n      } else {\n        newStr += str.substring(i, i + 1);\n      }\n    } else {\n      newStr += str.substring(i, i + 1);\n    }\n  }\n  newStr = newStr.replaceAll(' ', '_');\n  console.log(`New - ${newStr}`);\n  return newStr;\n}\nsnakeCase('   Hello    world   ');\nconsole.log('------');\n\n// camelCase(): Hello world -> helloWorld\nconsole.log('Challenge 7- camelCase()');\nfunction camelCase(str) {\n  console.log(`Original - ${str}`);\n  str = str.toLowerCase();\n  str = str.trim();\n  len = str.length;\n  newStr = '';\n  for (i = 0; i <= len; i++) {\n    if (str[i] == ' ') {\n      str = str.replace(str[i + 1], str[i + 1].toUpperCase());\n    } else {\n      newStr += str.substring(i, i + 1);\n    }\n  }\n  console.log(`New - ${newStr}`);\n  return newStr;\n}\ncamelCase('   Hello world ');\nconsole.log('------');\n\n// shift(): Hello World -> ello WorldH\nconsole.log('Challenge 8- shift()');\nfunction shift(str) {\n  console.log(`Original - ${str}`);\n  char = str[0];\n  str = str.slice(1);\n  str += char;\n  console.log(`New - ${str}`);\n  return str;\n}\nshift('Hello world');\nconsole.log('------');\n\n// makeHashTag(): \"Amazing bongo drums for sale\" -> ['#amazing', '#bongo', '#drums']\nconsole.log('Challenge 9- makeHashTag()');\nfunction makeHashTag(str) {\n  console.log(`Original - ${str}`);\n  list = str.split(' ');\n  const sort = list.sort((a, b) => b.length - a.length);\n  for (let i = 0; i < sort.length; i++) {\n    sort[i] = `#${sort[i]}`;\n  }\n  sort.splice(3, sort.length);\n  console.log(sort);\n  return sort;\n}\nmakeHashTag('Amazing bongo drums for sale');\nconsole.log('------');\n\n// isEmpty(): \"Abc def\" -> isEmpty(\"Abc def\") // false\nconsole.log('Challenge 10- isEmpty()');\nfunction isEmpty(str) {\n  console.log(`Original - ${str}`);\n  str = str.trim();\n  if (str == '') {\n    return true;\n  }\n\n  console.log(`New - ${str}`);\n  return str;\n}\nisEmpty('  ');\nconsole.log('------');\n\nmodule.exports.capitalize = capitalize;\nmodule.exports.allCaps = allCaps;\nmodule.exports.capitalizeWords = capitalizeWords;\nmodule.exports.removeExtraSpaces = removeExtraSpaces;\nmodule.exports.kebobCase = kebobCase;\nmodule.exports.snakeCase = snakeCase;\nmodule.exports.camelCase = camelCase;\nmodule.exports.shift = shift;\nmodule.exports.makeHashTag = makeHashTag;\nmodule.exports.isEmpty = isEmpty;\n\n\n//# sourceURL=webpack://lib/./index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});