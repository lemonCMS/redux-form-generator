(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash/omit", "prop-types", "react", "react-final-form", "./WrapRte"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash/omit"), require("prop-types"), require("react"), require("react-final-form"), require("./WrapRte"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.omit, global.propTypes, global.react, global.reactFinalForm, global.WrapRte);
    global.Rte = mod.exports;
  }
})(this, function (_exports, _omit2, _propTypes, _react, _reactFinalForm, _WrapRte2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _omit2 = _interopRequireDefault(_omit2);
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _WrapRte2 = _interopRequireDefault(_WrapRte2);
  var _jsxFileName = "example/app/components/Form/FinalForm/Types/Rte.jsx";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Rte =
  /*#__PURE__*/
  function (_WrapRte) {
    _inheritsLoose(Rte, _WrapRte);

    function Rte() {
      return _WrapRte.apply(this, arguments) || this;
    }

    var _proto = Rte.prototype;

    _proto.render = function render() {
      return _react.default.createElement(_reactFinalForm.Field, _extends({
        component: this.renderField
      }, (0, _omit2.default)(this.props.field, ['disabled', 'hidden', 'type']), {
        size: this.props.size,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled,
        checkHidden: this.props.checkHidden,
        checkShow: this.props.checkShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }));
    };

    return Rte;
  }(_WrapRte2.default);

  Rte.propTypes = {
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'checkShow': _propTypes.default.func,
    'field': _propTypes.default.object,
    'size': _propTypes.default.string,
    'static': _propTypes.default.bool,
    'locale': _propTypes.default.object
  };
  Rte.defaultProps = {};
  var _default = Rte;
  _exports.default = _default;
});