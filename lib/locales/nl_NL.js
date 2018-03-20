(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.nl_NL = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  var _default = {
    'numeral': 'nl-nl',
    'moment': 'nl',
    'datetimepicker': {
      'dateFormat': 'YYYY-MM-DD',
      'timeFormat': 'HH:mm',
      'locale': 'nl'
    },
    'filter': {
      'norecords': 'Niets gevonden.',
      'placeholder': 'Doorzoek de opties'
    },
    'resource': {
      'buttonOpen': 'Open'
    },
    'complex': {
      'buttonAdd': 'Toevoegen'
    }
  };
  _exports.default = _default;
});