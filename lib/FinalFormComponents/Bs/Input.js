(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Wrappers/Wrap"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Wrappers/Wrap"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Wrap);
    global.Input = mod.exports;
  }
})(this, function (_exports, _Wrap) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _Wrap = _interopRequireDefault(_Wrap);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = _Wrap.default;
  _exports.default = _default;
});