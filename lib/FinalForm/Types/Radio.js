(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash/omit", "prop-types", "react", "react-final-form", "./WrapList"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash/omit"), require("prop-types"), require("react"), require("react-final-form"), require("./WrapList"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.omit, global.propTypes, global.react, global.reactFinalForm, global.WrapList);
    global.Radio = mod.exports;
  }
})(this, function (_exports, _omit2, _propTypes, _react, _reactFinalForm, _WrapList2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _omit2 = _interopRequireDefault(_omit2);
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _WrapList2 = _interopRequireDefault(_WrapList2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Radio =
  /*#__PURE__*/
  function (_WrapList) {
    _inheritsLoose(Radio, _WrapList);

    function Radio() {
      return _WrapList.apply(this, arguments) || this;
    }

    var _proto = Radio.prototype;

    _proto.render = function render() {
      // [1] Set type to text, because we handle the radio button internally
      // --- This way we receive the value property
      // [2] Added the search property, to trigger render on filter
      return _react.default.createElement(_reactFinalForm.Field, _extends({
        component: this.renderField
      }, (0, _omit2.default)(this.props.field, ['disabled', 'hidden', 'type']), {
        size: this.props.size,
        search: this.state.value,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled,
        checkHidden: this.props.checkHidden,
        checkShow: this.props.checkShow
      }));
    };

    return Radio;
  }(_WrapList2.default);

  Radio.propTypes = {
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'checkShow': _propTypes.default.func,
    'dispatch': _propTypes.default.func,
    'field': _propTypes.default.object,
    'size': _propTypes.default.string,
    'static': _propTypes.default.bool,
    'locale': _propTypes.default.object
  };
  Radio.defaultProps = {};
  var _default = Radio;
  _exports.default = _default;
});