(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash/get", "lodash/pick", "lodash/isFunction", "react-bootstrap/lib/Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash/get"), require("lodash/pick"), require("lodash/isFunction"), require("react-bootstrap/lib/Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.get, global.pick, global.isFunction, global.Button);
    global.Button = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _get2, _pick2, _isFunction2, _Button) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _get2 = _interopRequireDefault(_get2);
  _pick2 = _interopRequireDefault(_pick2);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _Button = _interopRequireDefault(_Button);
  var _jsxFileName = "example/app/components/Form/FinalForm/Types/Button.jsx";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Input =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Input, _React$Component);

    function Input() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Input.prototype;

    _proto.render = function render() {
      if (this.props.field && this.props.field.hidden && (0, _isFunction2.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get2.default)(this.props.field, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get2.default)(this.props.field, 'parent')) !== true) {
          return null;
        }
      }

      var size = (0, _get2.default)(this.props.field, 'bsSize', this.props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return {
            bsSize: size
          };
        }
      };

      var disabled = false;

      if (this.props.field && this.props.field.disabled && (0, _isFunction2.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      return _react.default.createElement(_Button.default, _extends({}, thisSize(), (0, _pick2.default)(this.props.field, ['type', 'placeholder', 'bsStyle', 'onClick', 'onBlur', 'block', 'active', 'href']), {
        disabled: disabled,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), this.props.field.value);
    };

    return Input;
  }(_react.default.Component);

  Input.propTypes = {
    'field': _propTypes.default.object,
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'checkShow': _propTypes.default.func,
    'size': _propTypes.default.string
  };
  Input.defaultProps = {};
  var _default = Input;
  _exports.default = _default;
});