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
    global.en_US = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  var _default = {
    'numeral': 'en-us',
    'moment': 'en',
    'datetimepicker': {
      'dateFormat': 'YYYY-MM-DD',
      'timeFormat': 'HH:mm',
      'locale': 'en'
    },
    'filter': {
      'norecords': 'No records.',
      'placeholder': 'Search the options'
    },
    'resource': {
      'buttonOpen': 'Open'
    },
    'complex': {
      'buttonAdd': 'Add'
    }
  };
  _exports["default"] = _default;
});