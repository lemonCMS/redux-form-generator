(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.decorator = mod.exports;
  }
})(this, function (_exports, _react, _propTypes) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = connnectToConfirm;
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function connnectToConfirm(conf) {
    return function (WrappedComponent) {
      var TmpComponent =
      /*#__PURE__*/
      function (_Component) {
        _inheritsLoose(TmpComponent, _Component);

        function TmpComponent() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = TmpComponent.prototype;

        _proto.render = function render() {
          return _react.default.createElement(WrappedComponent, _extends({}, this.props, conf));
        };

        return TmpComponent;
      }(_react.Component);

      return TmpComponent;
    };
  }
});