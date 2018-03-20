(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash/omit", "prop-types", "react", "./WrapContentEditable", "redux-form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash/omit"), require("prop-types"), require("react"), require("./WrapContentEditable"), require("redux-form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.omit, global.propTypes, global.react, global.WrapContentEditable, global.reduxForm);
    global.ContentEditable = mod.exports;
  }
})(this, function (_exports, _omit2, _propTypes, _react, _WrapContentEditable, _reduxForm) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _omit2 = _interopRequireDefault(_omit2);
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _WrapContentEditable = _interopRequireDefault(_WrapContentEditable);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var ContentEditable =
  /*#__PURE__*/
  function (_Wrap) {
    _inheritsLoose(ContentEditable, _Wrap);

    function ContentEditable() {
      return _Wrap.apply(this, arguments) || this;
    }

    var _proto = ContentEditable.prototype;

    _proto.render = function render() {
      return _react.default.createElement(_reduxForm.Field, _extends({
        component: this.renderField
      }, (0, _omit2.default)(this.props.field, ['disabled', 'hidden', 'type']), {
        size: this.props.size,
        "static": this.props.static,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled
      }));
    };

    return ContentEditable;
  }(_WrapContentEditable.default);

  ContentEditable.propTypes = {
    'field': _propTypes.default.object,
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'size': _propTypes.default.string,
    'static': _propTypes.default.bool,
    'addField': _propTypes.default.func,
    'locale': _propTypes.default.object
  };
  ContentEditable.defaultProps = {};
  var _default = ContentEditable;
  _exports.default = _default;
});