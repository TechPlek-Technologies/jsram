"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sections/overview/overview-email-data.js":
/*!******************************************************!*\
  !*** ./src/sections/overview/overview-email-data.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OverviewEmailData: function() { return /* binding */ OverviewEmailData; }\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _heroicons_react_24_solid_EnvelopeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid/EnvelopeIcon */ \"./node_modules/@heroicons/react/24/solid/esm/EnvelopeIcon.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"E:\\\\jsram\\\\frontend\\\\src\\\\sections\\\\overview\\\\overview-email-data.js\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar OverviewEmailData = function OverviewEmailData(props) {\n  _s();\n  var _data$counts$EMAIL, _data$counts, _ref, _data$counts2;\n  var sx = props.sx,\n    data = props.data;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"Used\"),\n    text = _useState[0],\n    setText = _useState[1];\n  var toggle = function toggle(text) {\n    var newText = text === \"Used\" ? \"Fresh\" : \"Used\";\n    setText(newText);\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n      sx: sx,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n          alignItems: \"flex-start\",\n          direction: \"row\",\n          justifyContent: \"space-between\",\n          spacing: 3,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n            spacing: 1,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n              color: \"text.secondary\",\n              variant: \"overline\",\n              children: \"email \".concat(text, \" Data\")\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n              variant: \"h4\",\n              children: text === \"Used\" ? (_data$counts$EMAIL = data === null || data === void 0 || (_data$counts = data.counts) === null || _data$counts === void 0 ? void 0 : _data$counts.EMAIL) !== null && _data$counts$EMAIL !== void 0 ? _data$counts$EMAIL : \"N/A\" : (_ref = (data === null || data === void 0 ? void 0 : data.total) - (data === null || data === void 0 || (_data$counts2 = data.counts) === null || _data$counts2 === void 0 ? void 0 : _data$counts2.EMAIL)) !== null && _ref !== void 0 ? _ref : \"N/A\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n            sx: {\n              backgroundColor: \"error.main\",\n              height: 56,\n              width: 56\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_24_solid_EnvelopeIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 13\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardActions, {\n          sx: {\n            justifyContent: \"space-between\"\n          },\n          style: {\n            \"marginBottom\": \"-25px\"\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            color: \"inherit\",\n            endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {\n              fontSize: \"small\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_4__.ArrowRightIcon, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 15\n            }, _this),\n            size: \"small\",\n            variant: \"text\",\n            onClick: function onClick() {\n              toggle(text);\n            },\n            children: \"View \".concat(text === \"Used\" ? \"Fresh\" : \"Used\")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n_s(OverviewEmailData, \"d+1y9QWuDAtnqsfhnMZngrhL+/c=\");\n_c = OverviewEmailData;\nOverviewEmailData.propTypes = {\n  sx: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)\n};\nvar _c;\n$RefreshReg$(_c, \"OverviewEmailData\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvb3ZlcnZpZXcvb3ZlcnZpZXctZW1haWwtZGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQytCO0FBa0IzQztBQUM4QjtBQUNwQjtBQUFBO0FBQUE7QUFFMUIsSUFBTXVCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlDLEtBQUssRUFBSztFQUFBQyxFQUFBO0VBQUEsSUFBQUMsa0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxJQUFBLEVBQUFDLGFBQUE7RUFDMUMsSUFBUUMsRUFBRSxHQUFXTixLQUFLLENBQWxCTSxFQUFFO0lBQUVDLElBQUksR0FBS1AsS0FBSyxDQUFkTyxJQUFJO0VBQ2hCLElBQUFDLFNBQUEsR0FBcUJkLCtDQUFRLENBQUMsTUFBTSxDQUFDO0lBQTlCZSxJQUFJLEdBQUFELFNBQUE7SUFBQ0UsT0FBTyxHQUFBRixTQUFBO0VBRW5CLElBQU1HLE1BQU0sR0FBQyxTQUFQQSxNQUFNQSxDQUFFRixJQUFJLEVBQUc7SUFDbkIsSUFBSUcsT0FBTyxHQUFDSCxJQUFJLEtBQUcsTUFBTSxHQUFFLE9BQU8sR0FBRSxNQUFNO0lBQzFDQyxPQUFPLENBQUNFLE9BQU8sQ0FBQztFQUNsQixDQUFDO0VBR0Qsb0JBQ0VoQiw2REFBQSxDQUFBRSwyREFBQTtJQUFBZSxRQUFBLGVBQ0FqQiw2REFBQSxDQUFDaEIsK0NBQUk7TUFBQzBCLEVBQUUsRUFBRUEsRUFBRztNQUFBTyxRQUFBLGVBQ1hqQiw2REFBQSxDQUFDZCxzREFBVztRQUFBK0IsUUFBQSxnQkFDVmpCLDZEQUFBLENBQUNQLGdEQUFLO1VBQUN5QixVQUFVLEVBQUMsWUFBWTtVQUFDQyxTQUFTLEVBQUMsS0FBSztVQUFDQyxjQUFjLEVBQUMsZUFBZTtVQUFDQyxPQUFPLEVBQUUsQ0FBRTtVQUFBSixRQUFBLGdCQUN2RmpCLDZEQUFBLENBQUNQLGdEQUFLO1lBQUM0QixPQUFPLEVBQUUsQ0FBRTtZQUFBSixRQUFBLGdCQUNoQmpCLDZEQUFB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QUFDLEtBQy9CO1FBQUM7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFDLEtBRUUsQ0FBQztNQUFBO1FBQUFKLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUNIO0lBQUM7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQ1Y7RUFBQyxnQkFDTCxDQUFDO0FBRVAsQ0FBQztBQUFDeEIsRUFBQSxDQXZFV0YsaUJBQWlCO0FBQUFzQyxFQUFBLEdBQWpCdEMsaUJBQWlCO0FBeUU5QkEsaUJBQWlCLENBQUN1QyxTQUFTLEdBQUc7RUFFNUJoQyxFQUFFLEVBQUU5QiwwREFBZ0IrRDtBQUN0QixDQUFDO0FBQUMsSUFBQUYsRUFBQTtBQUFBRyxZQUFBLENBQUFILEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL292ZXJ2aWV3L292ZXJ2aWV3LWVtYWlsLWRhdGEuanM/YjBkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBFbnZlbG9wZUljb24gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZC9FbnZlbG9wZUljb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBBdmF0YXIsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgRGlhbG9nLFxyXG4gIERpYWxvZ0FjdGlvbnMsXHJcbiAgRGlhbG9nQ29udGVudCxcclxuICBEaWFsb2dDb250ZW50VGV4dCxcclxuICBEaWFsb2dUaXRsZSxcclxuICBHcmlkLFxyXG4gIFN0YWNrLFxyXG4gIFN2Z0ljb24sXHJcbiAgVGV4dEZpZWxkLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQXJyb3dSaWdodEljb24gfSBmcm9tIFwiQG11aS94LWRhdGUtcGlja2Vyc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE92ZXJ2aWV3RW1haWxEYXRhID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzeCwgZGF0YSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3RleHQsc2V0VGV4dF09dXNlU3RhdGUoXCJVc2VkXCIpO1xyXG4gXHJcbiAgY29uc3QgdG9nZ2xlPSh0ZXh0KT0+e1xyXG4gICAgbGV0IG5ld1RleHQ9dGV4dD09PVwiVXNlZFwiPyBcIkZyZXNoXCIgOlwiVXNlZFwiO1xyXG4gICAgc2V0VGV4dChuZXdUZXh0KTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxDYXJkIHN4PXtzeH0+XHJcbiAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICA8U3RhY2sgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBzcGFjaW5nPXszfT5cclxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHZhcmlhbnQ9XCJvdmVybGluZVwiPlxyXG4gICAgICAgICAgICB7YGVtYWlsICR7dGV4dH0gRGF0YWB9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgICAgICAgICB7dGV4dCA9PT0gXCJVc2VkXCIgPyAoZGF0YT8uY291bnRzPy5FTUFJTCA/PyBcIk4vQVwiKSA6IChkYXRhPy50b3RhbC1kYXRhPy5jb3VudHM/LkVNQUlMID8/IFwiTi9BXCIpfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImVycm9yLm1haW5cIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDU2LFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA1NixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFN2Z0ljb24+XHJcbiAgICAgICAgICAgIDxFbnZlbG9wZUljb24gLz5cclxuICAgICAgICAgICAgPC9TdmdJY29uPlxyXG4gICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7IGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fSBzdHlsZT17eyBcIm1hcmdpbkJvdHRvbVwiOiBcIi0yNXB4XCIgfX0+XHJcbiAgICAgICAgey8qIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGVuZEljb249e1xyXG4gICAgICAgICAgICAgIDxTdmdJY29uIGZvbnRTaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICA8QXJyb3dEb3duT25TcXVhcmVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvU3ZnSWNvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURpYWxvZ09wZW59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgZW5kSWNvbj17XHJcbiAgICAgICAgICAgICAgPFN2Z0ljb24gZm9udFNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9TdmdJY29uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICB0b2dnbGUodGV4dCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtgVmlldyAke3RleHQ9PT1cIlVzZWRcIj9cIkZyZXNoXCI6XCJVc2VkXCJ9YH1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICBcclxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk92ZXJ2aWV3RW1haWxEYXRhLnByb3BUeXBlcyA9IHtcclxuIFxyXG4gIHN4OiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiRW52ZWxvcGVJY29uIiwiQXZhdGFyIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJEaWFsb2ciLCJEaWFsb2dBY3Rpb25zIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0NvbnRlbnRUZXh0IiwiRGlhbG9nVGl0bGUiLCJHcmlkIiwiU3RhY2siLCJTdmdJY29uIiwiVGV4dEZpZWxkIiwiVHlwb2dyYXBoeSIsIkFycm93UmlnaHRJY29uIiwidXNlU3RhdGUiLCJqc3hERVYiLCJfanN4REVWIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJPdmVydmlld0VtYWlsRGF0YSIsInByb3BzIiwiX3MiLCJfZGF0YSRjb3VudHMkRU1BSUwiLCJfZGF0YSRjb3VudHMiLCJfcmVmIiwiX2RhdGEkY291bnRzMiIsInN4IiwiZGF0YSIsIl91c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidG9nZ2xlIiwibmV3VGV4dCIsImNoaWxkcmVuIiwiYWxpZ25JdGVtcyIsImRpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50Iiwic3BhY2luZyIsImNvbG9yIiwidmFyaWFudCIsImNvbmNhdCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiY291bnRzIiwiRU1BSUwiLCJ0b3RhbCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwic3R5bGUiLCJlbmRJY29uIiwiZm9udFNpemUiLCJzaXplIiwib25DbGljayIsIl9jIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/overview/overview-email-data.js\n"));

/***/ })

});