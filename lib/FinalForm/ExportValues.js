(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-final-form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-final-form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactFinalForm);
    global.ExportValues = mod.exports;
  }
})(this, function (_exports, _react, _reactFinalForm) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var ExportValues =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ExportValues, _React$Component);

    function ExportValues(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        values: props.values,
        submitting: false
      };
      return _this;
    }

    var _proto = ExportValues.prototype;

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var clone = Object.assign({}, nextProps);
      delete clone.callback;
      delete clone.render;
      this.props.callback(clone);
    };

    _proto.render = function render() {
      // This component doesn't have to render anything, but it can render
      // submitting state.
      return null;
    };

    return ExportValues;
  }(_react.default.Component);

  var _default = function _default(props) {
    return _react.default.createElement(_reactFinalForm.FormSpy, _extends({}, props, {
      subscription: {
        active: true,
        values: true
      },
      component: ExportValues
    }));
  };

  _exports.default = _default;
});