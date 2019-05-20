(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./Wrappers/Wrap", "../Components/Radio", "../utils/decorator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./Wrappers/Wrap"), require("../Components/Radio"), require("../utils/decorator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Wrap, global.Radio, global.decorator);
    global.Radio = mod.exports;
  }
})(this, function (_exports, _react, _Wrap, _Radio, _decorator) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _Wrap = _interopRequireDefault(_Wrap);
  _Radio = _interopRequireDefault(_Radio);
  _decorator = _interopRequireDefault(_decorator);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = (0, _decorator["default"])({
    type: 'text',
    component: _Radio["default"]
  })(_Wrap["default"]);

  _exports["default"] = _default;
});