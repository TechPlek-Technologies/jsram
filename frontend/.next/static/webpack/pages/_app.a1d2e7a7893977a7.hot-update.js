"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/data-context.js":
/*!**************************************!*\
  !*** ./src/contexts/data-context.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DataConsumer: function() { return /* binding */ DataConsumer; },\n/* harmony export */   DataContext: function() { return /* binding */ DataContext; },\n/* harmony export */   DataProvider: function() { return /* binding */ DataProvider; },\n/* harmony export */   useDataContext: function() { return /* binding */ useDataContext; }\n/* harmony export */ });\n/* harmony import */ var E_jsram_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var E_jsram_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var E_jsram_frontend_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var E_jsram_frontend_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_jsram_frontend_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/config */ \"./src/config.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"E:\\\\jsram\\\\frontend\\\\src\\\\contexts\\\\data-context.js\",\n  _dataHandlers,\n  _this = undefined,\n  _s = $RefreshSig$(),\n  _s2 = $RefreshSig$();\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,E_jsram_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n\n\n\n\n\nvar DATA_HANDLERS = {\n  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',\n  FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',\n  SET_LOADING: 'SET_LOADING'\n};\nvar initialDataState = {\n  data: null,\n  error: null,\n  isLoading: false\n};\nvar dataHandlers = (_dataHandlers = {}, (0,E_jsram_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dataHandlers, DATA_HANDLERS.FETCH_DATA_SUCCESS, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    data: action.payload,\n    isLoading: false,\n    error: null\n  });\n}), (0,E_jsram_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dataHandlers, DATA_HANDLERS.FETCH_DATA_FAILURE, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoading: false,\n    error: action.payload\n  });\n}), (0,E_jsram_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dataHandlers, DATA_HANDLERS.SET_LOADING, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoading: action.payload\n  });\n}), _dataHandlers);\nvar dataReducer = function dataReducer(state, action) {\n  return dataHandlers[action.type] ? dataHandlers[action.type](state, action) : state;\n};\nvar DataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n  undefined: undefined\n});\nvar DataProvider = function DataProvider(props) {\n  _s();\n  var children = props.children;\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(dataReducer, initialDataState),\n    state = _useReducer[0],\n    dispatch = _useReducer[1];\n  var initialized = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n    loading = _useState[0],\n    setLoading = _useState[1];\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = (0,E_jsram_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/E_jsram_frontend_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var response;\n      return E_jsram_frontend_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            dispatch({\n              type: DATA_HANDLERS.SET_LOADING,\n              payload: true\n            });\n            _context.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(src_config__WEBPACK_IMPORTED_MODULE_4__.domain, \"/api/read\"));\n          case 4:\n            response = _context.sent;\n            if (response.data) {\n              dispatch({\n                type: DATA_HANDLERS.FETCH_DATA_SUCCESS,\n                payload: response.data\n              });\n            } else {\n              dispatch({\n                type: DATA_HANDLERS.FETCH_DATA_FAILURE,\n                payload: \"No data found\"\n              });\n            }\n            _context.next = 11;\n            break;\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            dispatch({\n              type: DATA_HANDLERS.FETCH_DATA_FAILURE,\n              payload: _context.t0.message\n            });\n          case 11:\n            _context.prev = 11;\n            dispatch({\n              type: DATA_HANDLERS.SET_LOADING,\n              payload: false\n            });\n            return _context.finish(11);\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 8, 11, 14]]);\n    }));\n    return function fetchData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  var initializeDataFromServer = /*#__PURE__*/function () {\n    var _ref2 = (0,E_jsram_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/E_jsram_frontend_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n      var result;\n      return E_jsram_frontend_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            dispatch({\n              type: DATA_HANDLERS.SET_LOADING,\n              payload: true\n            });\n            _context2.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(src_config__WEBPACK_IMPORTED_MODULE_4__.domain, \"/getData\"));\n          case 4:\n            result = _context2.sent.data;\n            // console.log(result);\n            dispatch({\n              type: DATA_HANDLERS.FETCH_DATA_SUCCESS,\n              payload: result\n            });\n            _context2.next = 11;\n            break;\n          case 8:\n            _context2.prev = 8;\n            _context2.t0 = _context2[\"catch\"](0);\n            dispatch({\n              type: DATA_HANDLERS.FETCH_DATA_FAILURE,\n              payload: _context2.t0.message\n            });\n          case 11:\n            _context2.prev = 11;\n            dispatch({\n              type: DATA_HANDLERS.SET_LOADING,\n              payload: false\n            });\n            return _context2.finish(11);\n          case 14:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2, null, [[0, 8, 11, 14]]);\n    }));\n    return function initializeDataFromServer() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (!initialized.current) {\n      initializeDataFromServer();\n      initialized.current = true;\n    }\n  }, []);\n  var handleSyncButtonClick = /*#__PURE__*/function () {\n    var _ref3 = (0,E_jsram_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/E_jsram_frontend_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {\n      return E_jsram_frontend_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return fetchData();\n          case 3:\n            window.location.reload();\n            _context3.next = 9;\n            break;\n          case 6:\n            _context3.prev = 6;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.error('Error syncing data:', _context3.t0);\n          case 9:\n          case \"end\":\n            return _context3.stop();\n        }\n      }, _callee3, null, [[0, 6]]);\n    }));\n    return function handleSyncButtonClick() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(DataContext.Provider, {\n    value: _objectSpread(_objectSpread({}, state), {}, {\n      loading: loading,\n      fetchData: fetchData,\n      handleSyncButtonClick: handleSyncButtonClick\n    }),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, _this);\n};\n_s(DataProvider, \"Pc8nR9aw0Mrr8PbORYOz/1pXiaY=\");\n_c = DataProvider;\nDataProvider.propTypes = {\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node)\n};\nvar DataConsumer = DataContext.Consumer;\nvar useDataContext = function useDataContext() {\n  _s2();\n  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(DataContext);\n};\n_s2(useDataContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQUFyQkE7SUFBcUIsRUFDckI7SUFBQW5DLFFBQUEsRUFFREE7RUFBUTtJQUFBOEMsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQ1csQ0FBQztBQUUzQixDQUFDO0FBQUNuRCxFQUFBLENBaEVXRixZQUFZO0FBQUFzRCxFQUFBLEdBQVp0RCxZQUFZO0FBa0V6QkEsWUFBWSxDQUFDdUQsU0FBUyxHQUFHO0VBQ3ZCcEQsUUFBUSxFQUFFM0Isd0RBQWNnRjtBQUMxQixDQUFDO0FBRU0sSUFBTUMsWUFBWSxHQUFHM0QsV0FBVyxDQUFDNEQsUUFBUTtBQUV6QyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUE7RUFBQUMsR0FBQTtFQUFBLE9BQVN6RixpREFBVSxDQUFDMkIsV0FBVyxDQUFDO0FBQUE7QUFBQzhELEdBQUEsQ0FBL0NELGNBQWM7QUFBQSxJQUFBTCxFQUFBO0FBQUFPLFlBQUEsQ0FBQVAsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvZGF0YS1jb250ZXh0LmpzP2JjNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBkb21haW4gfSBmcm9tICdzcmMvY29uZmlnJztcclxuXHJcbmNvbnN0IERBVEFfSEFORExFUlMgPSB7XHJcbiAgRkVUQ0hfREFUQV9TVUNDRVNTOiAnRkVUQ0hfREFUQV9TVUNDRVNTJyxcclxuICBGRVRDSF9EQVRBX0ZBSUxVUkU6ICdGRVRDSF9EQVRBX0ZBSUxVUkUnLFxyXG4gIFNFVF9MT0FESU5HOiAnU0VUX0xPQURJTkcnXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsRGF0YVN0YXRlID0ge1xyXG4gIGRhdGE6IG51bGwsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgaXNMb2FkaW5nOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3QgZGF0YUhhbmRsZXJzID0ge1xyXG4gIFtEQVRBX0hBTkRMRVJTLkZFVENIX0RBVEFfU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogbnVsbFxyXG4gIH0pLFxyXG4gIFtEQVRBX0hBTkRMRVJTLkZFVENIX0RBVEFfRkFJTFVSRV06IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgfSksXHJcbiAgW0RBVEFfSEFORExFUlMuU0VUX0xPQURJTkddOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgaXNMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZFxyXG4gIH0pXHJcbn07XHJcblxyXG5jb25zdCBkYXRhUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PlxyXG4gIGRhdGFIYW5kbGVyc1thY3Rpb24udHlwZV0gPyBkYXRhSGFuZGxlcnNbYWN0aW9uLnR5cGVdKHN0YXRlLCBhY3Rpb24pIDogc3RhdGU7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgdW5kZWZpbmVkIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihkYXRhUmVkdWNlciwgaW5pdGlhbERhdGFTdGF0ZSk7XHJcbiAgY29uc3QgaW5pdGlhbGl6ZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBEQVRBX0hBTkRMRVJTLlNFVF9MT0FESU5HLCBwYXlsb2FkOiB0cnVlIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtkb21haW59L2FwaS9yZWFkYCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogREFUQV9IQU5ETEVSUy5GRVRDSF9EQVRBX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBEQVRBX0hBTkRMRVJTLkZFVENIX0RBVEFfRkFJTFVSRSwgcGF5bG9hZDogXCJObyBkYXRhIGZvdW5kXCIgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogREFUQV9IQU5ETEVSUy5GRVRDSF9EQVRBX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IERBVEFfSEFORExFUlMuU0VUX0xPQURJTkcsIHBheWxvYWQ6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVEYXRhRnJvbVNlcnZlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogREFUQV9IQU5ETEVSUy5TRVRfTE9BRElORywgcGF5bG9hZDogdHJ1ZSB9KTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IGF4aW9zLmdldChgJHtkb21haW59L2dldERhdGFgKSkuZGF0YTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBEQVRBX0hBTkRMRVJTLkZFVENIX0RBVEFfU1VDQ0VTUywgcGF5bG9hZDogcmVzdWx0IH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBEQVRBX0hBTkRMRVJTLkZFVENIX0RBVEFfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogREFUQV9IQU5ETEVSUy5TRVRfTE9BRElORywgcGF5bG9hZDogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaW5pdGlhbGl6ZWQuY3VycmVudCkge1xyXG4gICAgICBpbml0aWFsaXplRGF0YUZyb21TZXJ2ZXIoKTtcclxuICAgICAgaW5pdGlhbGl6ZWQuY3VycmVudCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTeW5jQnV0dG9uQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgIGF3YWl0IGZldGNoRGF0YSgpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzeW5jaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgIGZldGNoRGF0YSxcclxuICAgICAgICBoYW5kbGVTeW5jQnV0dG9uQ2xpY2ssXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkRhdGFQcm92aWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnN1bWVyID0gRGF0YUNvbnRleHQuQ29uc3VtZXI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRGF0YUNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZVJlZiIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiYXhpb3MiLCJkb21haW4iLCJqc3hERVYiLCJfanN4REVWIiwiREFUQV9IQU5ETEVSUyIsIkZFVENIX0RBVEFfU1VDQ0VTUyIsIkZFVENIX0RBVEFfRkFJTFVSRSIsIlNFVF9MT0FESU5HIiwiaW5pdGlhbERhdGFTdGF0ZSIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyIsImRhdGFIYW5kbGVycyIsIl9kYXRhSGFuZGxlcnMiLCJfZGVmaW5lUHJvcGVydHkiLCJzdGF0ZSIsImFjdGlvbiIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwiZGF0YVJlZHVjZXIiLCJ0eXBlIiwiRGF0YUNvbnRleHQiLCJ1bmRlZmluZWQiLCJEYXRhUHJvdmlkZXIiLCJwcm9wcyIsIl9zIiwiY2hpbGRyZW4iLCJfdXNlUmVkdWNlciIsImRpc3BhdGNoIiwiaW5pdGlhbGl6ZWQiLCJfdXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRGF0YSIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImdldCIsImNvbmNhdCIsInNlbnQiLCJ0MCIsIm1lc3NhZ2UiLCJmaW5pc2giLCJzdG9wIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpbml0aWFsaXplRGF0YUZyb21TZXJ2ZXIiLCJfcmVmMiIsIl9jYWxsZWUyIiwicmVzdWx0IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY3VycmVudCIsImhhbmRsZVN5bmNCdXR0b25DbGljayIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNvbnNvbGUiLCJQcm92aWRlciIsInZhbHVlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJfYyIsInByb3BUeXBlcyIsIm5vZGUiLCJEYXRhQ29uc3VtZXIiLCJDb25zdW1lciIsInVzZURhdGFDb250ZXh0IiwiX3MyIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/data-context.js\n"));

/***/ })

});