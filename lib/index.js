(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Form", "./FinalForm/Form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Form"), require("./FinalForm/Form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Form, global.Form);
    global.index = mod.exports;
  }
})(this, function (_exports, _Form, _Form2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _Form = _interopRequireDefault(_Form);
  _Form2 = _interopRequireDefault(_Form2);
  _exports.FinalForm = _Form2.default;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = _Form.default;
  _exports.default = _default;
});