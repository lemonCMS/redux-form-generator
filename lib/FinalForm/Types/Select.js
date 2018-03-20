(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash/omit", "prop-types", "react", "react-final-form", "./Wrap"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash/omit"), require("prop-types"), require("react"), require("react-final-form"), require("./Wrap"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.omit, global.propTypes, global.react, global.reactFinalForm, global.Wrap);
    global.Select = mod.exports;
  }
})(this, function (_exports, _omit2, _propTypes, _react, _reactFinalForm, _Wrap2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _omit2 = _interopRequireDefault(_omit2);
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _Wrap2 = _interopRequireDefault(_Wrap2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Select =
  /*#__PURE__*/
  function (_Wrap) {
    _inheritsLoose(Select, _Wrap);

    function Select() {
      return _Wrap.apply(this, arguments) || this;
    }

    var _proto = Select.prototype;

    _proto.render = function render() {
      return _react.default.createElement(_reactFinalForm.Field, _extends({
        component: this.renderField
      }, (0, _omit2.default)(this.props.field, ['disabled', 'hidden']), {
        size: this.props.size,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled,
        checkHidden: this.props.checkHidden,
        checkShow: this.props.checkShow
      }));
    };

    return Select;
  }(_Wrap2.default);

  Select.propTypes = {
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'checkShow': _propTypes.default.func,
    'field': _propTypes.default.object,
    'size': _propTypes.default.string,
    'static': _propTypes.default.bool,
    'locale': _propTypes.default.object
  };
  Select.defaultProps = {};
  var _default = Select;
  _exports.default = _default;
});