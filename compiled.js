"use strict";

var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App.tsx"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var rootElement = document.getElementById("root");
if (rootElement) {
  var root = _client["default"].createRoot(rootElement);
  root.render(/*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_App["default"], null))));
}
