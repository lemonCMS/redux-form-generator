(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "react-bootstrap/lib/Alert", "lodash/isFunction", "lodash/get"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("react-bootstrap/lib/Alert"), require("lodash/isFunction"), require("lodash/get"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.Alert, global.isFunction, global.get);
    global.Message = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _Alert, _isFunction2, _get2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireWildcard(_react);
  _Alert = _interopRequireDefault(_Alert);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _get2 = _interopRequireDefault(_get2);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var MessageType =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MessageType, _Component);

    function MessageType() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = MessageType.prototype;

    _proto.render = function render() {
      var field = this.props.field;

      if (this.props.field && this.props.field.hidden && (0, _isFunction2.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get2.default)(this.props.field, 'parent')) === true) {
          return;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get2.default)(this.props.field, 'parent')) !== true) {
          return null;
        }
      }

      if (field.type === 'success' && !this.props.submitting) {
        if (this.props.valid === true && this.props.submitSucceeded === true && this.props.submitting === false) {
          return _react.default.createElement(_Alert.default, {
            bsStyle: "success"
          }, field.message);
        }
      }

      if (field.type === 'error' && !this.props.submitting) {
        if (this.props.submitFailed === true) {
          return _react.default.createElement(_Alert.default, {
            bsStyle: "danger"
          }, field.message);
        }
      }

      return _react.default.createElement("span", null);
    };

    return MessageType;
  }(_react.Component);

  _exports.default = MessageType;
  Object.defineProperty(MessageType, "propTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      'checkHidden': _propTypes.default.func,
      'checkShow': _propTypes.default.func,
      'field': _propTypes.default.object,
      'valid': _propTypes.default.bool,
      'invalid': _propTypes.default.bool,
      'submitFailed': _propTypes.default.bool,
      'submitSucceeded': _propTypes.default.bool,
      'submitting': _propTypes.default.bool
    }
  });
});