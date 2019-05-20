(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "lodash/clone", "lodash/isFunction", "lodash/has", "lodash/get", "lodash/isEmpty", "lodash/map", "lodash/indexOf", "lodash/isArray", "lodash/uniq"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("lodash/clone"), require("lodash/isFunction"), require("lodash/has"), require("lodash/get"), require("lodash/isEmpty"), require("lodash/map"), require("lodash/indexOf"), require("lodash/isArray"), require("lodash/uniq"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.clone, global.isFunction, global.has, global.get, global.isEmpty, global.map, global.indexOf, global.isArray, global.uniq);
    global.Resource = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _clone2, _isFunction2, _has2, _get2, _isEmpty2, _map2, _indexOf2, _isArray2, _uniq2) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _clone2 = _interopRequireDefault(_clone2);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _has2 = _interopRequireDefault(_has2);
  _get2 = _interopRequireDefault(_get2);
  _isEmpty2 = _interopRequireDefault(_isEmpty2);
  _map2 = _interopRequireDefault(_map2);
  _indexOf2 = _interopRequireDefault(_indexOf2);
  _isArray2 = _interopRequireDefault(_isArray2);
  _uniq2 = _interopRequireDefault(_uniq2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Resourcebinder =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Resourcebinder, _React$Component);

    function Resourcebinder() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.openResource = _this.openResource.bind(_assertThisInitialized(_this));
      _this.closeResource = _this.closeResource.bind(_assertThisInitialized(_this));
      _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
      _this.options = _this.options.bind(_assertThisInitialized(_this));
      _this.callBack = _this.callBack.bind(_assertThisInitialized(_this));
      _this.state = {
        showResource: false,
        list: null
      };
      return _this;
    }

    var _proto = Resourcebinder.prototype;

    _proto.onChange = function onChange(e, value) {
      var values = this.props.input.value;

      if (typeof values !== 'object') {
        values = [values];
      }

      if (e.target.checked === true) {
        values.push(value);
      } else {
        values.splice((0, _indexOf2["default"])(values, value), 1);
      }

      this.props.input.onChange((0, _uniq2["default"])(values));
    };

    _proto.options = function options() {
      var _this2 = this;

      var field = this.props.field;
      var list = [];

      if (this.state.list === null) {
        if ((0, _has2["default"])(field, 'list')) {
          list = field.list;
        } else if (this.props.field.children) {
          list = (0, _map2["default"])((0, _isArray2["default"])(this.props.field.children) ? this.props.field.children : [this.props.field.children], function (option) {
            return {
              value: option.props.value,
              desc: option.props.children
            };
          });
        }
      } else {
        list = this.state.list;
      }

      var options = (0, _map2["default"])(list, function (option, key) {
        if ((0, _indexOf2["default"])(_this2.props.input.value, option.value) > -1) {
          return _react["default"].createElement("p", {
            className: "form-control-static",
            key: key
          }, (0, _indexOf2["default"])(_this2.props.input.value, option.value) > -1 ? _react["default"].createElement("i", {
            className: "fa fa-check-square-o"
          }) : _react["default"].createElement("i", {
            className: "fa fa-square-o"
          }), ' ', option.desc);
        }
      });
      return _react["default"].createElement("div", {
        className: "checkbox"
      }, options);
    };

    _proto.callBack = function callBack(values, list) {
      var _this3 = this;

      this.setState({
        list: list
      }, function () {
        _this3.props.input.onChange((0, _uniq2["default"])(values));
      });
    };

    _proto.openResource = function openResource() {
      this.setState({
        showResource: true
      });
    };

    _proto.closeResource = function closeResource() {
      this.setState({
        showResource: false
      });
    };

    _proto.render = function render() {
      var _this4 = this;

      var disabled = false;

      if (this.props.field && this.props.field.disabled && (0, _isFunction2["default"])(this.props.field.disabled)) {
        disabled = this.context.checkDisabled(this.props.field.disabled());
      }

      var button = function button() {
        if (!_this4.props.field["static"] && !_this4.context.isStatic) {
          return _react["default"].createElement("button", {
            onClick: _this4.openResource,
            disabled: disabled
          }, (0, _get2["default"])(_this4.props, 'field.buttonResource', 'open'));
        }
      };

      var clonedValues = function clonedValues() {
        if ((0, _isEmpty2["default"])(_this4.props.input.value)) {
          return [];
        }

        return (0, _clone2["default"])(_this4.props.input.value);
      };

      var resourceProps = {
        clonedValues: clonedValues(),
        clonedList: (0, _clone2["default"])(this.state.list) || (0, _clone2["default"])(this.props.field.list) || [],
        callBack: this.callBack,
        show: this.state.showResource,
        closeResource: this.closeResource
      };
      return _react["default"].createElement("div", null, button(), this.options(), this.props.field.resource(resourceProps));
    };

    return Resourcebinder;
  }(_react["default"].Component);

  Resourcebinder.propTypes = {
    field: _propTypes["default"].object,
    input: _propTypes["default"].object
  };
  Resourcebinder.contextTypes = {
    checkHidden: _propTypes["default"].func,
    checkShow: _propTypes["default"].func,
    isStatic: _propTypes["default"].bool
  };

  var _default = function _default(_ref) {
    var input = _ref.input,
        field = _ref.field;
    return _react["default"].createElement(Resourcebinder, {
      input: input,
      field: field
    });
  };

  _exports["default"] = _default;
});