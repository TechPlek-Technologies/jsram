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

/***/ "./src/sections/overview/overview-telecalling-data.js":
/*!************************************************************!*\
  !*** ./src/sections/overview/overview-telecalling-data.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OverviewTelecallingData: function() { return /* binding */ OverviewTelecallingData; }\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _heroicons_react_24_solid_PhoneArrowUpRightIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid/PhoneArrowUpRightIcon */ \"./node_modules/@heroicons/react/24/solid/esm/PhoneArrowUpRightIcon.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"E:\\\\jsram\\\\frontend\\\\src\\\\sections\\\\overview\\\\overview-telecalling-data.js\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar OverviewTelecallingData = function OverviewTelecallingData(props) {\n  _s();\n  var _data$counts$CALLING, _data$counts, _ref, _data$counts2;\n  var sx = props.sx,\n    data = props.data;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"Used\"),\n    text = _useState[0],\n    setText = _useState[1];\n  var toggle = function toggle(text) {\n    var newText = text === \"Used\" ? \"Fresh\" : \"Used\";\n    setText(newText);\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n      sx: sx,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n          alignItems: \"flex-start\",\n          direction: \"row\",\n          justifyContent: \"space-between\",\n          spacing: 3,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n            spacing: 1,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n              color: \"text.secondary\",\n              variant: \"overline\",\n              children: \"Telecalling \".concat(text, \" Data\")\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n              variant: \"h4\",\n              children: text === \"Used\" ? (_data$counts$CALLING = data === null || data === void 0 || (_data$counts = data.counts) === null || _data$counts === void 0 ? void 0 : _data$counts.CALLING) !== null && _data$counts$CALLING !== void 0 ? _data$counts$CALLING : \"N/A\" : (_ref = (data === null || data === void 0 ? void 0 : data.total) - (data === null || data === void 0 || (_data$counts2 = data.counts) === null || _data$counts2 === void 0 ? void 0 : _data$counts2.CALLING)) !== null && _ref !== void 0 ? _ref : \"N/A\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n            sx: {\n              backgroundColor: \"warning.main\",\n              height: 56,\n              width: 56\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_24_solid_PhoneArrowUpRightIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardActions, {\n          sx: {\n            justifyContent: \"space-between\"\n          },\n          style: {\n            \"marginBottom\": \"-25px\"\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            color: \"inherit\",\n            endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {\n              fontSize: \"small\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_4__.ArrowRightIcon, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 17\n            }, _this),\n            size: \"small\",\n            variant: \"text\",\n            onClick: function onClick() {\n              toggle(text);\n            },\n            children: \"View \".concat(text === \"Used\" ? \"Fresh\" : \"Used\")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n_s(OverviewTelecallingData, \"FbH3c0QxUCWhX5KTaOSL83TVC3E=\");\n_c = OverviewTelecallingData;\nOverviewTelecallingData.propTypes = {\n  sx: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)\n};\nvar _c;\n$RefreshReg$(_c, \"OverviewTelecallingData\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvb3ZlcnZpZXcvb3ZlcnZpZXctdGVsZWNhbGxpbmctZGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ2lEO0FBa0I3RDtBQUM4QjtBQUNwQjtBQUFBO0FBQUE7QUFFMUIsSUFBTXVCLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBdUJBLENBQUlDLEtBQUssRUFBSztFQUFBQyxFQUFBO0VBQUEsSUFBQUMsb0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxJQUFBLEVBQUFDLGFBQUE7RUFDaEQsSUFBUUMsRUFBRSxHQUFXTixLQUFLLENBQWxCTSxFQUFFO0lBQUVDLElBQUksR0FBS1AsS0FBSyxDQUFkTyxJQUFJO0VBQ2hCLElBQUFDLFNBQUEsR0FBd0JkLCtDQUFRLENBQUMsTUFBTSxDQUFDO0lBQWpDZSxJQUFJLEdBQUFELFNBQUE7SUFBRUUsT0FBTyxHQUFBRixTQUFBO0VBQ3BCLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFJRixJQUFJLEVBQUs7SUFDdkIsSUFBSUcsT0FBTyxHQUFHSCxJQUFJLEtBQUssTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNO0lBQ2hEQyxPQUFPLENBQUNFLE9BQU8sQ0FBQztFQUNsQixDQUFDO0VBSUQsb0JBQ0VoQiw2REFBQSxDQUFBRSwyREFBQTtJQUFBZSxRQUFBLGVBQ0VqQiw2REFBQSxDQUFDaEIsK0NBQUk7TUFBQzBCLEVBQUUsRUFBRUEsRUFBRztNQUFBTyxRQUFBLGVBQ1hqQiw2REFBQSxDQUFDZCxzREFBVztRQUFBK0IsUUFBQSxnQkFDVmpCLDZEQUFBLENBQUNQLGdEQUFLO1VBQUN5QixVQUFVLEVBQUMsWUFBWTtVQUFDQyxTQUFTLEVBQUMsS0FBSztVQUFDQyxjQUFjLEVBQUMsZUFBZTtVQUFDQyxPQUFPLEVBQUUsQ0FBRTtVQUFBSixRQUFBLGdCQUN2RmpCLDZEQUFBLENBQUNQLGdEQUFLO1lBQUM0QixPQUFPLEVBQUUsQ0FBRTtZQUFBSixRQUFBLGdCQUNoQmpC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QTtVQUFBLEdBQUFDLEtBQ3JDO1FBQUM7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFDLEtBRUUsQ0FBQztNQUFBO1FBQUFKLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUNIO0lBQUM7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQ1Y7RUFBQyxnQkFDUCxDQUFDO0FBRVAsQ0FBQztBQUFDeEIsRUFBQSxDQXhFV0YsdUJBQXVCO0FBQUFzQyxFQUFBLEdBQXZCdEMsdUJBQXVCO0FBMEVwQ0EsdUJBQXVCLENBQUN1QyxTQUFTLEdBQUc7RUFDbENoQyxFQUFFLEVBQUU5QiwwREFBZ0IrRDtBQUN0QixDQUFDO0FBQUMsSUFBQUYsRUFBQTtBQUFBRyxZQUFBLENBQUFILEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL292ZXJ2aWV3L292ZXJ2aWV3LXRlbGVjYWxsaW5nLWRhdGEuanM/MmM3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBQaG9uZUFycm93VXBSaWdodEljb24gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZC9QaG9uZUFycm93VXBSaWdodEljb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBBdmF0YXIsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgRGlhbG9nLFxyXG4gIERpYWxvZ0FjdGlvbnMsXHJcbiAgRGlhbG9nQ29udGVudCxcclxuICBEaWFsb2dDb250ZW50VGV4dCxcclxuICBEaWFsb2dUaXRsZSxcclxuICBHcmlkLFxyXG4gIFN0YWNrLFxyXG4gIFN2Z0ljb24sXHJcbiAgVGV4dEZpZWxkLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQXJyb3dSaWdodEljb24gfSBmcm9tIFwiQG11aS94LWRhdGUtcGlja2Vyc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE92ZXJ2aWV3VGVsZWNhbGxpbmdEYXRhID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzeCwgZGF0YSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJVc2VkXCIpO1xyXG4gIGNvbnN0IHRvZ2dsZSA9ICh0ZXh0KSA9PiB7XHJcbiAgICBsZXQgbmV3VGV4dCA9IHRleHQgPT09IFwiVXNlZFwiID8gXCJGcmVzaFwiIDogXCJVc2VkXCI7XHJcbiAgICBzZXRUZXh0KG5ld1RleHQpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcmQgc3g9e3N4fT5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8U3RhY2sgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiB2YXJpYW50PVwib3ZlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIHtgVGVsZWNhbGxpbmcgJHt0ZXh0fSBEYXRhYH1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgICAgICAgICB7dGV4dCA9PT0gXCJVc2VkXCIgPyAoZGF0YT8uY291bnRzPy5DQUxMSU5HID8/IFwiTi9BXCIpIDogKGRhdGE/LnRvdGFsLWRhdGE/LmNvdW50cz8uQ0FMTElORyA/PyBcIk4vQVwiKX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3YXJuaW5nLm1haW5cIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTYsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTYsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdmdJY29uPlxyXG4gICAgICAgICAgICAgICAgPFBob25lQXJyb3dVcFJpZ2h0SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvU3ZnSWNvbj5cclxuICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG5cclxuICAgICAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIgfX0gc3R5bGU9e3sgXCJtYXJnaW5Cb3R0b21cIjogXCItMjVweFwiIH19PlxyXG4gICAgICAgICAgICB7LyogPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgZW5kSWNvbj17XHJcbiAgICAgICAgICAgICAgPFN2Z0ljb24gZm9udFNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgIDxBcnJvd0Rvd25PblNxdWFyZUljb24gLz5cclxuICAgICAgICAgICAgPC9TdmdJY29uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGlhbG9nT3Blbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBlbmRJY29uPXtcclxuICAgICAgICAgICAgICAgIDxTdmdJY29uIGZvbnRTaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZSh0ZXh0KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2BWaWV3ICR7dGV4dCA9PT0gXCJVc2VkXCIgPyBcIkZyZXNoXCIgOiBcIlVzZWRcIn1gfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5PdmVydmlld1RlbGVjYWxsaW5nRGF0YS5wcm9wVHlwZXMgPSB7XHJcbiAgc3g6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJQaG9uZUFycm93VXBSaWdodEljb24iLCJBdmF0YXIiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkRpYWxvZyIsIkRpYWxvZ0FjdGlvbnMiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nQ29udGVudFRleHQiLCJEaWFsb2dUaXRsZSIsIkdyaWQiLCJTdGFjayIsIlN2Z0ljb24iLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiQXJyb3dSaWdodEljb24iLCJ1c2VTdGF0ZSIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIk92ZXJ2aWV3VGVsZWNhbGxpbmdEYXRhIiwicHJvcHMiLCJfcyIsIl9kYXRhJGNvdW50cyRDQUxMSU5HIiwiX2RhdGEkY291bnRzIiwiX3JlZiIsIl9kYXRhJGNvdW50czIiLCJzeCIsImRhdGEiLCJfdXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInRvZ2dsZSIsIm5ld1RleHQiLCJjaGlsZHJlbiIsImFsaWduSXRlbXMiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInNwYWNpbmciLCJjb2xvciIsInZhcmlhbnQiLCJjb25jYXQiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsImNvdW50cyIsIkNBTExJTkciLCJ0b3RhbCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwic3R5bGUiLCJlbmRJY29uIiwiZm9udFNpemUiLCJzaXplIiwib25DbGljayIsIl9jIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/overview/overview-telecalling-data.js\n"));

/***/ })

});