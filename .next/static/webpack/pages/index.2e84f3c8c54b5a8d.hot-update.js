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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined;\n\n\n\n\nvar Home = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Pokemon!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/test.webp\",\n                        alt: \"Picture of the author\",\n                        width: 100,\n                        height: 50\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, _this),\n                    data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                        children: data === null || data === void 0 ? void 0 : data.map(function(param) {\n                            var id = param.id, userId = param.userId, title = param.title, body = param.body;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Col, {\n                                xs: 4,\n                                style: {\n                                    padding: 5\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                    href: \"/post/\".concat(id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card.Body, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card.Title, {\n                                                    children: title\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card.Subtitle, {\n                                                    children: body\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, id, false, {\n                                fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\ssr\\\\pages\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUM2QjtBQUNFO0FBQ2E7QUFrQjVDLElBQU1HLElBQUksR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7O0lBRWxCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXOzswQkFDeEIsOERBQUNOLGtEQUFJOztrQ0FDSCw4REFBQ08sT0FBSztrQ0FBQyxVQUFROzs7Ozs2QkFBUTtrQ0FDdkIsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NkJBQUc7Ozs7OztxQkFDbEM7MEJBRVAsOERBQUNSLHNEQUFTOztrQ0FDViw4REFBQ0QsbURBQUs7d0JBQ1JVLEdBQUcsRUFBQyxZQUFZO3dCQUNoQkMsR0FBRyxFQUFDLHVCQUF1Qjt3QkFDM0JDLEtBQUssRUFBRSxHQUFHO3dCQUNWQyxNQUFNLEVBQUUsRUFBRTs7Ozs7NkJBQ1Q7b0JBRUlWLElBQUksa0JBQ0gsOERBQUNXLEdBQUc7a0NBQ0RYLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFWSxHQUFHLENBQUM7Z0NBQUdDLEVBQUUsU0FBRkEsRUFBRSxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFBRVgsS0FBSyxTQUFMQSxLQUFLLEVBQUVZLElBQUksU0FBSkEsSUFBSTtpREFDbkMsOERBQUNDLEdBQUc7Z0NBQUNDLEVBQUUsRUFBRSxDQUFDO2dDQUFXQyxLQUFLLEVBQUU7b0NBQUVDLE9BQU8sRUFBRSxDQUFDO2lDQUFFOzBDQUN4Qyw0RUFBQ0MsSUFBSTtvQ0FBQ2QsSUFBSSxFQUFFLFFBQU8sQ0FBSyxPQUFITyxFQUFFLENBQUU7OENBQ3ZCLDRFQUFDUSxJQUFJO2tEQUVILDRFQUFDQSxJQUFJLENBQUNDLElBQUk7OzhEQUNSLDhEQUFDRCxJQUFJLENBQUNFLEtBQUs7OERBQUVwQixLQUFLOzs7OzswREFBYzs4REFDaEMsOERBQUNrQixJQUFJLENBQUNHLFFBQVE7OERBQUVULElBQUk7Ozs7OzBEQUFpQjs7Ozs7O2tEQUMzQjs7Ozs7OENBQ1A7Ozs7OzBDQUNGOytCQVRRRixFQUFFOzs7O3NDQVViO3lCQUNQLENBQUM7Ozs7OzZCQUNFOzs7Ozs7cUJBRUU7Ozs7OzthQUNSLENBQ047Q0FDSDtBQXJDS2QsS0FBQUEsSUFBSTs7QUF1Q1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuXG5jb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQb3N0cygpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgSG9tZSA9ICh7IGRhdGEgfSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9rZW1vbiE8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICA8SW1hZ2Vcblx0XHRcdFx0c3JjPVwiL3Rlc3Qud2VicFwiXG5cdFx0XHRcdGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG5cdFx0XHRcdHdpZHRoPXsxMDB9XG5cdFx0XHRcdGhlaWdodD17NTB9XG5cdFx0XHQvPlxuICAgICAgXG4gICAgICAgIHtkYXRhICYmIChcbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAge2RhdGE/Lm1hcCgoeyBpZCwgdXNlcklkLCB0aXRsZSwgYm9keSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezR9IGtleT17aWR9IHN0eWxlPXt7IHBhZGRpbmc6IDUgfX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7aWR9YH0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZD5cblxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnt0aXRsZX08L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGU+e2JvZHl9PC9DYXJkLlN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIkNvbnRhaW5lciIsIkhvbWUiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiUm93IiwibWFwIiwiaWQiLCJ1c2VySWQiLCJib2R5IiwiQ29sIiwieHMiLCJzdHlsZSIsInBhZGRpbmciLCJMaW5rIiwiQ2FyZCIsIkJvZHkiLCJUaXRsZSIsIlN1YnRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});