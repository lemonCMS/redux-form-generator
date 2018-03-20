(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "moment", "moment/locale/nl"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("moment"), require("moment/locale/nl"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.moment, global.nl);
    global.moment = mod.exports;
  }
})(this, function (_exports, _moment, _nl) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _moment = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _moment.default.locale('nl');

  var mango = _moment.default;
  var _default = mango;
  _exports.default = _default;
});