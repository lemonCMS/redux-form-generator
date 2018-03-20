(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash/omit", "prop-types", "react", "react-final-form", "./WrapListMulti"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash/omit"), require("prop-types"), require("react"), require("react-final-form"), require("./WrapListMulti"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.omit, global.propTypes, global.react, global.reactFinalForm, global.WrapListMulti);
    global.Checkbox = mod.exports;
  }
})(this, function (_exports, _omit2, _propTypes, _react, _reactFinalForm, _WrapListMulti2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _omit2 = _interopRequireDefault(_omit2);
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _WrapListMulti2 = _interopRequireDefault(_WrapListMulti2);
  var _jsxFileName = "example/app/components/Form/FinalForm/Types/Checkbox.jsx";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Checkbox =
  /*#__PURE__*/
  function (_WrapListMulti) {
    _inheritsLoose(Checkbox, _WrapListMulti);

    function Checkbox() {
      return _WrapListMulti.apply(this, arguments) || this;
    }

    var _proto = Checkbox.prototype;

    _proto.render = function render() {
      // Added the search property, to trigger render on filter
      return _react.default.createElement(_reactFinalForm.Field, _extends({
        component: this.renderField
      }, (0, _omit2.default)(this.props.field, ['disabled', 'hidden', 'type']), {
        size: this.props.size,
        search: this.state.value,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled,
        checkHidden: this.props.checkHidden,
        checkShow: this.props.checkShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }));
    };

    return Checkbox;
  }(_WrapListMulti2.default);

  Checkbox.propTypes = {
    'dispatch': _propTypes.default.func,
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'checkShow': _propTypes.default.func,
    'field': _propTypes.default.object,
    'size': _propTypes.default.string,
    'static': _propTypes.default.bool,
    'locale': _propTypes.default.object
  };
  Checkbox.defaultProps = {};
  var _default = Checkbox;
  _exports.default = _default;
});