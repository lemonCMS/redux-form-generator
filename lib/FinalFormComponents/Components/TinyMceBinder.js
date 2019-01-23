(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./TinyMceInput"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./TinyMceInput"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.TinyMceInput);
    global.TinyMceBinder = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _TinyMceInput) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _TinyMceInput = _interopRequireDefault(_TinyMceInput);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var ContextBinder =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ContextBinder, _React$Component);

    function ContextBinder() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = ContextBinder.prototype;

    _proto.render = function render() {
      if (this.context.isStatic || this.props.field.static) {
        return _react.default.createElement("div", {
          className: 'rte-readonly',
          dangerouslySetInnerHTML: {
            __html: this.props.input.value
          }
        });
      }

      return _react.default.createElement(_TinyMceInput.default, _extends({
        readOnly: true
      }, this.props.input, {
        className: this.props.field.className,
        tinymceConfig: Object.assign({}, this.props.field.config)
      }));
    };

    return ContextBinder;
  }(_react.default.Component);

  ContextBinder.propTypes = {
    field: _propTypes.default.object,
    input: _propTypes.default.object
  };
  ContextBinder.contextTypes = {
    checkHidden: _propTypes.default.func,
    checkShow: _propTypes.default.func,
    isStatic: _propTypes.default.bool
  };

  var _default = function _default(_ref) {
    var input = _ref.input,
        field = _ref.field;
    return _react.default.createElement(ContextBinder, {
      input: input,
      field: field
    });
  };

  _exports.default = _default;
});