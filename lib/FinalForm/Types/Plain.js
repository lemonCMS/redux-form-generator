(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash/isFunction", "lodash/isString", "lodash/isObject", "lodash/pick", "lodash/get"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash/isFunction"), require("lodash/isString"), require("lodash/isObject"), require("lodash/pick"), require("lodash/get"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.isFunction, global.isString, global.isObject, global.pick, global.get);
    global.Plain = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _isFunction2, _isString2, _isObject2, _pick2, _get2) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireWildcard(_react);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _isString2 = _interopRequireDefault(_isString2);
  _isObject2 = _interopRequireDefault(_isObject2);
  _pick2 = _interopRequireDefault(_pick2);
  _get2 = _interopRequireDefault(_get2);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Plain =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Plain, _Component);

    function Plain() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = Plain.prototype;

    _proto.render = function render() {
      if (this.props.field && this.props.field.hidden && (0, _isFunction2["default"])(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get2["default"])(this.props.field, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2["default"])(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get2["default"])(this.props.field, 'parent')) !== true) {
          return null;
        }
      }

      var createMarkup = function createMarkup(data) {
        return {
          __html: data
        };
      };

      if ((0, _isString2["default"])(this.props.field.value)) {
        return _react["default"].createElement("div", _extends({
          dangerouslySetInnerHTML: createMarkup(this.props.field.value)
        }, (0, _pick2["default"])(this.props.field, ['className', 'style', 'id', 'onClick', 'rel'])));
      }

      if ((0, _isObject2["default"])(this.props.field.value)) {
        return this.props.field.value;
      }

      return null;
    };

    return Plain;
  }(_react.Component);

  _exports["default"] = Plain;

  _defineProperty(Plain, "propTypes", {
    'field': _propTypes["default"].object.isRequired,
    'checkHidden': _propTypes["default"].func,
    'checkShow': _propTypes["default"].func
  });
});