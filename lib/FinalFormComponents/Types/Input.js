(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "react-final-form", "../Components/Input"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("react-final-form"), require("../Components/Input"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactFinalForm, global.Input);
    global.Input = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _reactFinalForm, _Input) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _Input = _interopRequireDefault(_Input);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      var _this$props = this.props,
          name = _this$props.name,
          rest = _objectWithoutPropertiesLoose(_this$props, ["name"]);

      return _react.default.createElement(_reactFinalForm.Field, {
        component: _Input.default,
        name: name,
        field: rest
      });
    };

    return Input;
  }(_react.default.Component);

  Input.propTypes = {
    type: _propTypes.default.string.isRequired,
    name: _propTypes.default.string
  };
  Input.contextTypes = {
    getProp: _propTypes.default.func
  };
  Input.defaultProps = {};
  var _default = Input;
  _exports.default = _default;
});