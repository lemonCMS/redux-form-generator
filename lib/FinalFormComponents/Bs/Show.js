(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "lodash/isFunction", "lodash/get"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("lodash/isFunction"), require("lodash/get"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.isFunction, global.get);
    global.Show = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _isFunction2, _get2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _get2 = _interopRequireDefault(_get2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Show =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Show, _React$Component);

    function Show() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Show.prototype;

    _proto.render = function render() {
      if (this.props.hidden && (0, _isFunction2.default)(this.props.hidden)) {
        if (this.context.checkHidden(this.props.hidden, (0, _get2.default)(this.props, 'parent')) === true) {
          return null;
        }
      } else if (this.props.show && (0, _isFunction2.default)(this.props.show)) {
        if (this.context.checkShow(this.props.show, (0, _get2.default)(this.props, 'parent')) !== true) {
          return null;
        }
      }

      return this.props.children;
    };

    return Show;
  }(_react.default.Component);

  Show.propTypes = {
    children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]).isRequired,
    hidden: _propTypes.default.func,
    show: _propTypes.default.func
  };
  Show.defaultProps = {};
  Show.contextTypes = {
    checkHidden: _propTypes.default.func.isRequired,
    checkShow: _propTypes.default.func.isRequired,
    isStatic: _propTypes.default.bool.isRequired
  };
  var _default = Show;
  _exports.default = _default;
});