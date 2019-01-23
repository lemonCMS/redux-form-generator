(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./Wrappers/Wrap", "../Components/Resource", "../utils/decorator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./Wrappers/Wrap"), require("../Components/Resource"), require("../utils/decorator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Wrap, global.Resource, global.decorator);
    global.Resource = mod.exports;
  }
})(this, function (_exports, _react, _Wrap, _Resource, _decorator) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _Wrap = _interopRequireDefault(_Wrap);
  _Resource = _interopRequireDefault(_Resource);
  _decorator = _interopRequireDefault(_decorator);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = (0, _decorator.default)({
    type: 'text',
    component: _Resource.default
  })(_Wrap.default);

  _exports.default = _default;
});