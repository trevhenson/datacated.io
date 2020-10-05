webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoTop */ "./components/_App/GoTop.js");
/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Preloader */ "./components/_App/Preloader.js");


var _this = undefined,
    _jsxFileName = "T:\\NextJs\\themeforest-sbq2Kslh-zoko-react-it-solutions-template\\zoko-react\\components\\_App\\Layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children;

  // Preloader
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      loader = _React$useState2[0],
      setLoader = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setTimeout(function () {
      return setLoader(false);
    }, 1500);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Datacated.io"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Datacated Solutions - IT Consultancy Services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "Datacated.io",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "Datacated.io",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "canonical",
    href: "https://zoko-react.hibootstrap.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), children, loader ? __jsx(_Preloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  }) : null, __jsx(_GoTop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    scrollStepInPx: "100",
    delayInMs: "10.50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }));
};

_s(Layout, "v9Gmr36LIRqHprS819AlpxmZHdc=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBRTdCO0FBRjZCLHdCQUdEQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUhDO0FBQUE7QUFBQSxNQUd0QkMsTUFIc0I7QUFBQSxNQUdkQyxTQUhjOztBQUs3QkgsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFNO0FBQ2xCQyxjQUFVLENBQUM7QUFBQSxhQUFNRixTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsS0FBRCxFQUF5QixJQUF6QixDQUFWO0FBQ0gsR0FGRCxFQUVHLEVBRkg7QUFJQSxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdURBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLCtDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFlBQVEsRUFBQyxVQUEvQjtBQUEwQyxXQUFPLEVBQUMsY0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixXQUFPLEVBQUMsY0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBTSxPQUFHLEVBQUMsV0FBVjtBQUFzQixRQUFJLEVBQUMscUNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURKLEVBVUtKLFFBVkwsRUFZS0csTUFBTSxHQUFHLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQW1CLElBWjlCLEVBY0ksTUFBQyw4Q0FBRDtBQUFPLGtCQUFjLEVBQUMsS0FBdEI7QUFBNEIsYUFBUyxFQUFDLE9BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixDQURKO0FBa0JILENBM0JEOztHQUFNSixNOztLQUFBQSxNO0FBNkJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjViODliZDAwM2Q0YzI4MTA5NDU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgR29Ub3AgZnJvbSAnLi9Hb1RvcCdcclxuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL1ByZWxvYWRlcidcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICAvLyBQcmVsb2FkZXJcclxuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGVyKGZhbHNlKSwgMTUwMCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRhY2F0ZWQuaW88L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEYXRhY2F0ZWQgU29sdXRpb25zIC0gSVQgQ29uc3VsdGFuY3kgU2VydmljZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJEYXRhY2F0ZWQuaW9cIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIkRhdGFjYXRlZC5pb1wiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3pva28tcmVhY3QuaGlib290c3RyYXAuY29tL1wiPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAge2xvYWRlciA/IDxQcmVsb2FkZXIgLz4gOiBudWxsfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCIxMDBcIiBkZWxheUluTXM9XCIxMC41MFwiIC8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9