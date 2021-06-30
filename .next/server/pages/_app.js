/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VkZGluZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VkZGluZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1R0FBNkMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, pageProps);\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VkZGluZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanM/MDc5NSJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImRlZmF1bHQiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxvSEFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0gsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSUcsTUFBTSxHQUFDSCxtQkFBTyxDQUFDLDBEQUFELENBQWxCOztBQUErQ0MsdUJBQUEsR0FBd0JFLE1BQU0sQ0FBQ0MsZUFBL0I7QUFBK0NILDJCQUFBLEdBQTRCRSxNQUFNLENBQUNFLG1CQUFuQztBQUF1RDtBQUN4VjtBQUNBO0FBQ0E7O0FBQUcsZUFBZUMsa0JBQWYsQ0FBa0M7QUFBQ0MsV0FBRDtBQUFXQztBQUFYLENBQWxDLEVBQWtEO0FBQUMsUUFBTUMsU0FBUyxHQUFDLE1BQUssQ0FBQyxHQUFFTixNQUFNLENBQUNPLG1CQUFWLEVBQStCSCxTQUEvQixFQUF5Q0MsR0FBekMsQ0FBckI7QUFBbUUsU0FBTTtBQUFDQztBQUFELEdBQU47QUFBbUI7O0FBQUEsTUFBTUUsR0FBTixTQUFrQlQsTUFBTSxDQUFDVSxPQUFQLENBQWVMLFNBQWpDLENBQTBDO0FBQUNNLFFBQU0sR0FBRTtBQUFDLFVBQUs7QUFBQ04sZUFBRDtBQUFXRTtBQUFYLFFBQXNCLEtBQUtLLEtBQWhDO0FBQXNDLFdBQU0sYUFBYVosTUFBTSxDQUFDVSxPQUFQLENBQWVHLGFBQWYsQ0FBNkJSLFNBQTdCLEVBQXVDRSxTQUF2QyxDQUFuQjtBQUFzRTs7QUFBdEg7O0FBQXVIUixlQUFBLEdBQWdCVSxHQUFoQjtBQUFvQkEsR0FBRyxDQUFDSyxtQkFBSixHQUF3QlYsa0JBQXhCO0FBQTJDSyxHQUFHLENBQUNNLGVBQUosR0FBb0JYLGtCQUFwQiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/home/cloudroad/\\uB2E4\\uC6B4\\uB85C\\uB4DC/rouDDine-client/pages/_app.js\";\n\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  store\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 7\n  }, undefined);\n};\n\nconst configureStore = (initialState, options) => {\n  const middlewares = [];\n  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_7__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_5__.applyMiddleware)(...middlewares));\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_5__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_6__.default, initialState, enhancer);\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(configureStore)(MyApp)); // class MyApp extends App {\n//   render() {\n//     const {Component, pageProps} = this.props\n//     return (\n//         <Component {...pageProps}></Component>      \n//     );        \n//   }\n// }\n// export default MyApp//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VkZGluZS1jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwib3B0aW9ucyIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBMEI7QUFDdEMsc0JBQ0ksOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFHRCxDQUpEOztBQU1BLE1BQU1DLGNBQWMsR0FBRyxDQUFDQyxZQUFELEVBQWVDLE9BQWYsS0FBMkI7QUFDaEQsUUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLFNBQ2ZDLENBRGUsR0FFYkMsNkVBQW1CLENBQ2pCQyxzREFBZSxDQUFDLEdBQUdKLFdBQUosQ0FERSxDQUZ2QjtBQUtBLFFBQU1KLEtBQUssR0FBR1Msa0RBQVcsQ0FBQ0MsOENBQUQsRUFBVVIsWUFBVixFQUF3QkcsUUFBeEIsQ0FBekI7QUFDQSxTQUFPTCxLQUFQO0FBQ0QsQ0FURDs7QUFZQSwrREFBZVcseURBQVMsQ0FBQ1YsY0FBRCxDQUFULENBQTBCSCxLQUExQixDQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgc3RvcmUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudD48L0NvbXBvbmVudD5cbiAgKVxufVxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbXTtcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID9cbiAgICBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpIDogXG4gICAgICBjb21wb3NlV2l0aERldlRvb2xzKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpXG4gICAgICApXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG4gIHJldHVybiBzdG9yZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29uZmlndXJlU3RvcmUpKE15QXBwKTtcblxuLy8gY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzfSA9IHRoaXMucHJvcHNcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9PjwvQ29tcG9uZW50PiAgICAgIFxuLy8gICAgICk7ICAgICAgICBcbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/count.js":
/*!***************************!*\
  !*** ./reducers/count.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"COUNT_PLUS\": function() { return /* binding */ COUNT_PLUS; },\n/* harmony export */   \"COUNT_MINUS\": function() { return /* binding */ COUNT_MINUS; },\n/* harmony export */   \"countPlusAction\": function() { return /* binding */ countPlusAction; },\n/* harmony export */   \"countMinusAction\": function() { return /* binding */ countMinusAction; }\n/* harmony export */ });\nconst initialState = 0; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.\n\nconst COUNT_PLUS = 'COUNT_PLUS'; // count 1을 증가시킬 액션 타입이다.\n\nconst COUNT_MINUS = 'COUNT_MINUS'; // count 1을 감소시킬 액션 타입이다.\n\nconst countPlusAction = () => ({\n  // 액션 생성 함수\n  type: COUNT_PLUS\n});\nconst countMinusAction = () => ({\n  type: COUNT_MINUS\n});\n\nconst reducer = (state = initialState, action) => {\n  // 리듀서\n  switch (action.type) {\n    // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1\n    case COUNT_PLUS:\n      return state + 1;\n\n    case COUNT_MINUS:\n      return state - 1;\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VkZGluZS1jbGllbnQvLi9yZWR1Y2Vycy9jb3VudC5qcz9kY2ZiIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIkNPVU5UX1BMVVMiLCJDT1VOVF9NSU5VUyIsImNvdW50UGx1c0FjdGlvbiIsInR5cGUiLCJjb3VudE1pbnVzQWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLE1BQU1BLFlBQVksR0FBRyxDQUFyQixDLENBQXdCOztBQUV4QixNQUFNQyxVQUFVLEdBQUcsWUFBbkIsQyxDQUFpQzs7QUFDakMsTUFBTUMsV0FBVyxHQUFHLGFBQXBCLEMsQ0FBbUM7O0FBRW5DLE1BQU1DLGVBQWUsR0FBRyxPQUFPO0FBQUU7QUFDcENDLE1BQUksRUFBR0g7QUFEMkIsQ0FBUCxDQUF4QjtBQUlBLE1BQU1JLGdCQUFnQixHQUFHLE9BQU87QUFDbkNELE1BQUksRUFBR0Y7QUFENEIsQ0FBUCxDQUF6Qjs7QUFJUCxNQUFNSSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFDUCxZQUFQLEVBQXFCUSxNQUFyQixLQUFnQztBQUFFO0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUF3QjtBQUNwQixTQUFLSCxVQUFMO0FBQ0ksYUFBT00sS0FBSyxHQUFHLENBQWY7O0FBQ0osU0FBS0wsV0FBTDtBQUNJLGFBQU9LLEtBQUssR0FBRyxDQUFmOztBQUNKO0FBQ0ksYUFBT0EsS0FBUDtBQU5SO0FBUUgsQ0FURDs7QUFXQSwrREFBZUQsT0FBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2NvdW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IDA7IC8vIOyymOydjCBzdGF0ZeqwkuycvOuhnCBjb3VudCAw7J2EIOyjvOyXiOuLpC4gc3RhdGXqsJLsnYAg6rCd7LK0LCDrsLDsl7TroZzrj4Qg7IKs7Jqp7ZWgIOyImCDsnojri6QuXG5cbmV4cG9ydCBjb25zdCBDT1VOVF9QTFVTID0gJ0NPVU5UX1BMVVMnOyAvLyBjb3VudCAx7J2EIOymneqwgOyLnO2CrCDslaHshZgg7YOA7J6F7J2064ukLlxuZXhwb3J0IGNvbnN0IENPVU5UX01JTlVTID0gJ0NPVU5UX01JTlVTJzsgLy8gY291bnQgMeydhCDqsJDshozsi5ztgqwg7JWh7IWYIO2DgOyeheydtOuLpC5cblxuZXhwb3J0IGNvbnN0IGNvdW50UGx1c0FjdGlvbiA9ICgpID0+ICh7IC8vIOyVoeyFmCDsg53shLEg7ZWo7IiYXG4gICAgdHlwZSA6IENPVU5UX1BMVVNcbn0pO1xuXG5leHBvcnQgY29uc3QgY291bnRNaW51c0FjdGlvbiA9ICgpID0+ICh7XG4gICAgdHlwZSA6IENPVU5UX01JTlVTXG59KVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7IC8vIOumrOuTgOyEnFxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHsgIC8vIOyVoeyFmOydmCB0eXBl7J20IENPVU5UX1BMVVPsnbzrlZAgc3RhdGXsl5AgKyAxIENPVU5UX01JTlVTIOydvCDrlZAgc3RhdGXsl5AgLTFcbiAgICAgICAgY2FzZSBDT1VOVF9QTFVTOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICAgICAgY2FzZSBDT1VOVF9NSU5VUzpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/count.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count */ \"./reducers/count.js\");\n/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle */ \"./reducers/toggle.js\");\n // 여러 리듀서들을 하나로 합쳐준다.\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  count: _count__WEBPACK_IMPORTED_MODULE_1__.default,\n  // 여기에 다른 리듀서들을 더 적으면 된다!\n  toggle: _toggle__WEBPACK_IMPORTED_MODULE_2__.default\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer); // _app.js에서 reducer로 사용된다!//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VkZGluZS1jbGllbnQvLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY291bnQiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7O0NBQXlDOztBQUN6QztBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyxzREFBZSxDQUFDO0FBQ2hDQyxPQURnQztBQUN6QjtBQUNQQyxRQUFNQTtBQUYwQixDQUFELENBQW5DO0FBS0EsK0RBQWVILFdBQWYsRSxDQUE0QiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnOyAvLyDsl6zrn6wg66as65OA7ISc65Ok7J2EIO2VmOuCmOuhnCDtlanss5DspIDri6QuXG5pbXBvcnQgY291bnQgZnJvbSAnLi9jb3VudCc7XG5pbXBvcnQgdG9nZ2xlIGZyb20gJy4vdG9nZ2xlJ1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnQsIC8vIOyXrOq4sOyXkCDri6Trpbgg66as65OA7ISc65Ok7J2EIOuNlCDsoIHsnLzrqbQg65Cc64ukIVxuICAgIHRvZ2dsZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsgLy8gX2FwcC5qc+yXkOyEnCByZWR1Y2Vy66GcIOyCrOyaqeuQnOuLpCEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/toggle.js":
/*!****************************!*\
  !*** ./reducers/toggle.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"TOGGLE_TRUE\": function() { return /* binding */ TOGGLE_TRUE; },\n/* harmony export */   \"TOGGLE_FALSE\": function() { return /* binding */ TOGGLE_FALSE; },\n/* harmony export */   \"toggleTrue\": function() { return /* binding */ toggleTrue; },\n/* harmony export */   \"toggleFalse\": function() { return /* binding */ toggleFalse; }\n/* harmony export */ });\nconst initialState = false; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.\n\nconst TOGGLE_TRUE = 'TOGGLE_TRUE'; // count 1을 증가시킬 액션 타입이다.\n\nconst TOGGLE_FALSE = 'TOGGLE_FALSE'; // count 1을 감소시킬 액션 타입이다.\n\nconst toggleTrue = () => ({\n  // 액션 생성 함수\n  type: TOGGLE_TRUE\n});\nconst toggleFalse = () => ({\n  type: TOGGLE_FALSE\n});\n\nconst reducer = (state = initialState, action) => {\n  // 리듀서\n  switch (action.type) {\n    // 액션의 type이 COUNT_PLUS일땐 state에 + 1 TOGGLE_FALSE 일 땐 state에 -1\n    case TOGGLE_TRUE:\n      return state = true;\n\n    case TOGGLE_FALSE:\n      return state = false;\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3VkZGluZS1jbGllbnQvLi9yZWR1Y2Vycy90b2dnbGUuanM/MWVjMiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJUT0dHTEVfVFJVRSIsIlRPR0dMRV9GQUxTRSIsInRvZ2dsZVRydWUiLCJ0eXBlIiwidG9nZ2xlRmFsc2UiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHLEtBQXJCLEMsQ0FBNEI7O0FBRTVCLE1BQU1DLFdBQVcsR0FBRyxhQUFwQixDLENBQW1DOztBQUNuQyxNQUFNQyxZQUFZLEdBQUcsY0FBckIsQyxDQUFxQzs7QUFFckMsTUFBTUMsVUFBVSxHQUFHLE9BQU87QUFBRTtBQUMvQkMsTUFBSSxFQUFHSDtBQURzQixDQUFQLENBQW5CO0FBSUEsTUFBTUksV0FBVyxHQUFHLE9BQU87QUFDOUJELE1BQUksRUFBR0Y7QUFEdUIsQ0FBUCxDQUFwQjs7QUFJUCxNQUFNSSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFDUCxZQUFQLEVBQXFCUSxNQUFyQixLQUFnQztBQUFFO0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUF3QjtBQUNwQixTQUFLSCxXQUFMO0FBQ0ksYUFBT00sS0FBSyxHQUFHLElBQWY7O0FBQ0osU0FBS0wsWUFBTDtBQUNJLGFBQU9LLEtBQUssR0FBRyxLQUFmOztBQUNKO0FBQ0ksYUFBT0EsS0FBUDtBQU5SO0FBUUgsQ0FURDs7QUFXQSwrREFBZUQsT0FBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3RvZ2dsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSBmYWxzZTsgLy8g7LKY7J2MIHN0YXRl6rCS7Jy866GcIGNvdW50IDDsnYQg7KO87JeI64ukLiBzdGF0ZeqwkuydgCDqsJ3ssrQsIOuwsOyXtOuhnOuPhCDsgqzsmqntlaAg7IiYIOyeiOuLpC5cblxuZXhwb3J0IGNvbnN0IFRPR0dMRV9UUlVFID0gJ1RPR0dMRV9UUlVFJzsgLy8gY291bnQgMeydhCDspp3qsIDsi5ztgqwg7JWh7IWYIO2DgOyeheydtOuLpC5cbmV4cG9ydCBjb25zdCBUT0dHTEVfRkFMU0UgPSAnVE9HR0xFX0ZBTFNFJzsgLy8gY291bnQgMeydhCDqsJDshozsi5ztgqwg7JWh7IWYIO2DgOyeheydtOuLpC5cblxuZXhwb3J0IGNvbnN0IHRvZ2dsZVRydWUgPSAoKSA9PiAoeyAvLyDslaHshZgg7IOd7ISxIO2VqOyImFxuICAgIHR5cGUgOiBUT0dHTEVfVFJVRVxufSk7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVGYWxzZSA9ICgpID0+ICh7XG4gICAgdHlwZSA6IFRPR0dMRV9GQUxTRVxufSlcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4geyAvLyDrpqzrk4DshJxcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7ICAvLyDslaHshZjsnZggdHlwZeydtCBDT1VOVF9QTFVT7J2865WQIHN0YXRl7JeQICsgMSBUT0dHTEVfRkFMU0Ug7J28IOuVkCBzdGF0ZeyXkCAtMVxuICAgICAgICBjYXNlIFRPR0dMRV9UUlVFOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0gdHJ1ZTtcbiAgICAgICAgY2FzZSBUT0dHTEVfRkFMU0U6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/toggle.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();