(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["paperspace-client-sdk"] = factory();
	else
		root["paperspace-client-sdk"] = factory();
})((self || this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/example.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/example.js":
/*!****************************!*\
  !*** ./example/example.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _index = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\n\nfunction initialize() {\n  const vmStreamElement = document.querySelector('.vmStreamElement');\n  const vmInfo = {\n    machineId: 'ps2ndh0hu',\n    accessToken: 'qGy9bdrDMbvCpG2UNXwr76lvYHUN4k970baAP6VVCDHg3XizTHICZahtw7bEqqoh'\n  };\n\n  _index.streams.createStream(vmStreamElement, vmInfo).then(function (stream) {\n    stream.open();\n  });\n}\n\nif (document.readyState === 'loading') {\n  // Loading hasn't finished yet\n  document.addEventListener('DOMContentLoaded', initialize);\n} else {\n  // `DOMContentLoaded` has already fired\n  initialize();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leGFtcGxlL2V4YW1wbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBlcnNwYWNlLWNsaWVudC1zZGsvLi9leGFtcGxlL2V4YW1wbGUuanM/YWNhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJlYW1zIH0gZnJvbSAnLi4vc3JjL2luZGV4JztcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgY29uc3Qgdm1TdHJlYW1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZtU3RyZWFtRWxlbWVudCcpO1xuICBjb25zdCB2bUluZm8gPSB7XG4gICAgbWFjaGluZUlkOiAncHMybmRoMGh1JyxcbiAgICBhY2Nlc3NUb2tlbjogJ3FHeTliZHJETWJ2Q3BHMlVOWHdyNzZsdllIVU40azk3MGJhQVA2VlZDREhnM1hpelRISUNaYWh0dzdiRXFxb2gnXG4gIH07XG4gIHN0cmVhbXMuY3JlYXRlU3RyZWFtKHZtU3RyZWFtRWxlbWVudCwgdm1JbmZvKS50aGVuKGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgICBzdHJlYW0ub3BlbigpO1xuICB9KTtcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAvLyBMb2FkaW5nIGhhc24ndCBmaW5pc2hlZCB5ZXRcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpO1xufSBlbHNlIHtcbiAgLy8gYERPTUNvbnRlbnRMb2FkZWRgIGhhcyBhbHJlYWR5IGZpcmVkXG4gIGluaXRpYWxpemUoKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./example/example.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGVyc3BhY2UtY2xpZW50LXNkay8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzPzk1MjMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/defineProperty.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBlcnNwYWNlLWNsaWVudC1zZGsvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nmodule.exports = _objectSpread;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBlcnNwYWNlLWNsaWVudC1zZGsvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQuanM/MzE1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/objectSpread.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"streams\", {\n  enumerable: true,\n  get: function () {\n    return _streams.default;\n  }\n});\n\nvar _streams = _interopRequireDefault(__webpack_require__(/*! ./streams */ \"./src/streams/index.js\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBlcnNwYWNlLWNsaWVudC1zZGsvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RyZWFtcyBmcm9tICcuL3N0cmVhbXMnO1xuXG5leHBvcnQge1xuICBzdHJlYW1zXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/streams/index.js":
/*!******************************!*\
  !*** ./src/streams/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\"));\n\nvar _internalApi = _interopRequireDefault(__webpack_require__(/*! ./internalApi */ \"./src/streams/internalApi.js\"));\n\nvar _userApi = _interopRequireDefault(__webpack_require__(/*! ./userApi */ \"./src/streams/userApi.js\"));\n\nvar _default = (0, _objectSpread2.default)({}, _userApi.default, {\n  internalApi: _internalApi.default\n});\n\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RyZWFtcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGVyc3BhY2UtY2xpZW50LXNkay8uL3NyYy9zdHJlYW1zL2luZGV4LmpzP2NkOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGludGVybmFsQXBpIGZyb20gJy4vaW50ZXJuYWxBcGknO1xuaW1wb3J0IHVzZXJBcGkgZnJvbSAnLi91c2VyQXBpJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi51c2VyQXBpLFxuICBpbnRlcm5hbEFwaVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/streams/index.js\n");

/***/ }),

/***/ "./src/streams/internalApi.js":
/*!************************************!*\
  !*** ./src/streams/internalApi.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n\n  to be used inside the iframe\n\n usage:\n   api.onOpenVmRequest = function (vmInfo) {\n     // my openvm code\n   }\n\n   api.ready();\n\n*/\n// i like to define variables before they are used\n// see api object below for interface\nvar comToken = 0;\nvar buffer = [];\n\nvar sendMessage = function (payload) {\n  if (comToken === 0) {\n    buffer.push(payload);\n  } else {\n    window.parent.postMessage({\n      comToken,\n      payload\n    }, '*');\n  }\n\n  ;\n}; // ---------------------------------------\n// the api object\n\n\nvar api = {\n  ready: function () {\n    sendMessage({\n      type: 'ready'\n    });\n  },\n  onOpenVmRequest: function () {} // override with your event handler\n\n}; // internal event handlers\n\nvar handleMessageReceived = function (payload) {\n  if (payload.type === 'openvm') {\n    api.onOpenVmRequest(payload.vmInfo);\n  }\n};\n\nvar sendBuffered = function () {\n  var i = 0;\n\n  for (i = 0; i < buffer.length; ++i) {\n    sendMessage(buffer[i]);\n  }\n\n  buffer = [];\n};\n\nwindow.addEventListener('message', function (msg) {\n  var data = msg.data;\n\n  if (!data || !data.payload) {\n    return;\n  }\n\n  if (comToken === 0 && data.comToken) {\n    comToken = data.comToken;\n    sendBuffered();\n  }\n\n  ;\n  console.log(msg);\n  handleMessageReceived(data.payload);\n}, false);\nmodule.exports = api;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RyZWFtcy9pbnRlcm5hbEFwaS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGVyc3BhY2UtY2xpZW50LXNkay8uL3NyYy9zdHJlYW1zL2ludGVybmFsQXBpLmpzPzdjNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblxuICB0byBiZSB1c2VkIGluc2lkZSB0aGUgaWZyYW1lXG5cbiB1c2FnZTpcbiAgIGFwaS5vbk9wZW5WbVJlcXVlc3QgPSBmdW5jdGlvbiAodm1JbmZvKSB7XG4gICAgIC8vIG15IG9wZW52bSBjb2RlXG4gICB9XG5cbiAgIGFwaS5yZWFkeSgpO1xuXG4qL1xuXG4vLyBpIGxpa2UgdG8gZGVmaW5lIHZhcmlhYmxlcyBiZWZvcmUgdGhleSBhcmUgdXNlZFxuLy8gc2VlIGFwaSBvYmplY3QgYmVsb3cgZm9yIGludGVyZmFjZVxudmFyIGNvbVRva2VuID0gMDtcblxudmFyIGJ1ZmZlciA9IFtdO1xuXG52YXIgc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICBpZiAoY29tVG9rZW4gPT09IDApIHtcbiAgICBidWZmZXIucHVzaChwYXlsb2FkKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgIGNvbVRva2VuLFxuICAgICAgcGF5bG9hZFxuICAgIH0sICcqJyk7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdGhlIGFwaSBvYmplY3RcblxudmFyIGFwaSA9IHtcbiAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICBzZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiAncmVhZHknXG4gICAgfSk7XG4gIH0sXG4gIG9uT3BlblZtUmVxdWVzdDogZnVuY3Rpb24gKCkge30gLy8gb3ZlcnJpZGUgd2l0aCB5b3VyIGV2ZW50IGhhbmRsZXJcbn07XG5cbi8vIGludGVybmFsIGV2ZW50IGhhbmRsZXJzXG5cbnZhciBoYW5kbGVNZXNzYWdlUmVjZWl2ZWQgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC50eXBlID09PSAnb3BlbnZtJykge1xuICAgIGFwaS5vbk9wZW5WbVJlcXVlc3QocGF5bG9hZC52bUluZm8pO1xuICB9XG59O1xuXG52YXIgc2VuZEJ1ZmZlcmVkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSA9IDA7XG4gIGZvciAoaSA9IDA7IGkgPCBidWZmZXIubGVuZ3RoOyArK2kpIHtcbiAgICBzZW5kTWVzc2FnZShidWZmZXJbaV0pO1xuICB9XG4gIGJ1ZmZlciA9IFtdO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAobXNnKSB7XG4gIHZhciBkYXRhID0gbXNnLmRhdGE7XG4gIGlmICghZGF0YSB8fCAhZGF0YS5wYXlsb2FkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChjb21Ub2tlbiA9PT0gMCAmJiBkYXRhLmNvbVRva2VuKSB7XG4gICAgY29tVG9rZW4gPSBkYXRhLmNvbVRva2VuO1xuICAgIHNlbmRCdWZmZXJlZCgpO1xuICB9O1xuICBjb25zb2xlLmxvZyhtc2cpXG4gIGhhbmRsZU1lc3NhZ2VSZWNlaXZlZChkYXRhLnBheWxvYWQpO1xufSwgZmFsc2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwaTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/streams/internalApi.js\n");

/***/ }),

/***/ "./src/streams/userApi.js":
/*!********************************!*\
  !*** ./src/streams/userApi.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n\n  functions that end with 'Promise' will return a promise\n\n usage:\n   api.createStream(node, vmInfo).then(function (stream) {\n     stream.open();\n     // stream.resize(x, y);\n     // stream.destory();\n   }, function (err) {\n\n   })\n\n*/\n\n/*\nunfortunately there is no way to map a message to a cross domain iframe without risk of ambiguity\ntherefore we use a communication token and a global registry to identify our iframes and stream instances\n*/\nvar communicationToken = 1;\nvar instances = {};\nwindow.addEventListener('message', function (msg) {\n  var data = msg.data;\n  var instance = instances[data.comToken];\n\n  if (!instance) {\n    // dead instance\n    return;\n  }\n\n  ;\n\n  if (!data || !data.payload) {\n    return;\n  }\n\n  instance._handleMessageReceived(data.payload);\n}, false);\n\nvar StreamApi = function (domNode, vmInfo) {\n  return new Promise((resolve, reject) => {\n    if (!vmInfo || !vmInfo.machineId) {\n      reject(new Error('Please provide a machineId to connect the stream to.'));\n    }\n\n    var comToken = communicationToken;\n    communicationToken += 1;\n    instances[comToken] = this;\n    var intervalPoster = null;\n    var iframe = document.createElement('iframe');\n    var targetSrc = 'http://localhost:3002/machine/' + vmInfo.machineId;\n    iframe.setAttribute('src', targetSrc);\n    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');\n    domNode.appendChild(iframe);\n\n    function sendMessage(payload) {\n      iframe.contentWindow.postMessage({\n        comToken: comToken,\n        payload\n      }, '*');\n    }\n\n    iframe.addEventListener('load', () => {\n      intervalPoster = setInterval(() => {\n        sendMessage({\n          type: 'init'\n        });\n      }, 5000);\n    }, false);\n    var stream = {\n      resize: function (x, y) {},\n      open: function () {\n        sendMessage({\n          type: 'openvm',\n          vmInfo\n        });\n      },\n      destroy: function () {\n        delete instances[comToken];\n        iframe.parentNode.removeChild(iframe);\n        iframe = null;\n      }\n    };\n\n    this._handleMessageReceived = payload => {\n      if (intervalPoster) {\n        clearInterval(intervalPoster);\n        intervalPoster = null;\n      }\n\n      if (payload.type === 'ready') {\n        resolve(stream);\n      }\n    };\n  });\n};\n\nvar api = {\n  createStream: function (domNode, vmInfo) {\n    return new StreamApi(domNode, vmInfo);\n  }\n};\nmodule.exports = api;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RyZWFtcy91c2VyQXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwZXJzcGFjZS1jbGllbnQtc2RrLy4vc3JjL3N0cmVhbXMvdXNlckFwaS5qcz8wNzA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbiAgZnVuY3Rpb25zIHRoYXQgZW5kIHdpdGggJ1Byb21pc2UnIHdpbGwgcmV0dXJuIGEgcHJvbWlzZVxuXG4gdXNhZ2U6XG4gICBhcGkuY3JlYXRlU3RyZWFtKG5vZGUsIHZtSW5mbykudGhlbihmdW5jdGlvbiAoc3RyZWFtKSB7XG4gICAgIHN0cmVhbS5vcGVuKCk7XG4gICAgIC8vIHN0cmVhbS5yZXNpemUoeCwgeSk7XG4gICAgIC8vIHN0cmVhbS5kZXN0b3J5KCk7XG4gICB9LCBmdW5jdGlvbiAoZXJyKSB7XG5cbiAgIH0pXG5cbiovXG5cbi8qXG51bmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIHdheSB0byBtYXAgYSBtZXNzYWdlIHRvIGEgY3Jvc3MgZG9tYWluIGlmcmFtZSB3aXRob3V0IHJpc2sgb2YgYW1iaWd1aXR5XG50aGVyZWZvcmUgd2UgdXNlIGEgY29tbXVuaWNhdGlvbiB0b2tlbiBhbmQgYSBnbG9iYWwgcmVnaXN0cnkgdG8gaWRlbnRpZnkgb3VyIGlmcmFtZXMgYW5kIHN0cmVhbSBpbnN0YW5jZXNcbiovXG52YXIgY29tbXVuaWNhdGlvblRva2VuID0gMTtcbnZhciBpbnN0YW5jZXMgPSB7fTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAobXNnKSB7XG4gIHZhciBkYXRhID0gbXNnLmRhdGE7XG4gIHZhciBpbnN0YW5jZSA9IGluc3RhbmNlc1tkYXRhLmNvbVRva2VuXTtcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIC8vIGRlYWQgaW5zdGFuY2VcbiAgICByZXR1cm47XG4gIH07XG4gIGlmICghZGF0YSB8fCAhZGF0YS5wYXlsb2FkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaW5zdGFuY2UuX2hhbmRsZU1lc3NhZ2VSZWNlaXZlZChkYXRhLnBheWxvYWQpO1xufSwgZmFsc2UpO1xuXG5cbnZhciBTdHJlYW1BcGkgPSBmdW5jdGlvbiAoZG9tTm9kZSwgdm1JbmZvKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKCF2bUluZm8gfHwgIXZtSW5mby5tYWNoaW5lSWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgbWFjaGluZUlkIHRvIGNvbm5lY3QgdGhlIHN0cmVhbSB0by4nKSk7XG4gICAgfVxuXG4gICAgdmFyIGNvbVRva2VuID0gY29tbXVuaWNhdGlvblRva2VuO1xuICAgIGNvbW11bmljYXRpb25Ub2tlbiArPSAxO1xuICAgIGluc3RhbmNlc1tjb21Ub2tlbl0gPSB0aGlzO1xuXG4gICAgdmFyIGludGVydmFsUG9zdGVyID0gbnVsbDtcbiAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgdmFyIHRhcmdldFNyYyA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDIvbWFjaGluZS8nICsgdm1JbmZvLm1hY2hpbmVJZDtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCB0YXJnZXRTcmMpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NhbmRib3gnLCAnYWxsb3ctc2NyaXB0cyBhbGxvdy1zYW1lLW9yaWdpbicpO1xuICAgIGRvbU5vZGUuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblxuICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKHBheWxvYWQpIHtcbiAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgY29tVG9rZW46IGNvbVRva2VuLFxuICAgICAgICBwYXlsb2FkXG4gICAgICB9LCAnKicpO1xuICAgIH1cblxuICAgIGlmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgaW50ZXJ2YWxQb3N0ZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNlbmRNZXNzYWdlKHsgdHlwZTogJ2luaXQnIH0pO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgdmFyIHN0cmVhbSA9IHtcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24gKHgsIHkpIHtcblxuICAgICAgfSxcblxuICAgICAgb3BlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBzZW5kTWVzc2FnZSh7XG4gICAgICAgICAgdHlwZTogJ29wZW52bScsXG4gICAgICAgICAgdm1JbmZvXG4gICAgICAgIH0pXG4gICAgICB9LFxuXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSBpbnN0YW5jZXNbY29tVG9rZW5dO1xuXG4gICAgICAgIGlmcmFtZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgIGlmcmFtZSA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2hhbmRsZU1lc3NhZ2VSZWNlaXZlZCA9IChwYXlsb2FkKSA9PiB7XG4gICAgICBpZiAoaW50ZXJ2YWxQb3N0ZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFBvc3Rlcik7XG4gICAgICAgIGludGVydmFsUG9zdGVyID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBheWxvYWQudHlwZSA9PT0gJ3JlYWR5Jykge1xuICAgICAgICByZXNvbHZlKHN0cmVhbSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59O1xuXG52YXIgYXBpID0ge1xuICBjcmVhdGVTdHJlYW06IGZ1bmN0aW9uIChkb21Ob2RlLCB2bUluZm8pIHtcbiAgICByZXR1cm4gbmV3IFN0cmVhbUFwaShkb21Ob2RlLCB2bUluZm8pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwaTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBOzs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/streams/userApi.js\n");

/***/ })

/******/ });
});