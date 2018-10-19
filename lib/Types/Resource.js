(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash/omit", "prop-types", "lodash/get", "lodash/has", "lodash/uniq", "lodash/map", "lodash/indexOf", "lodash/clone", "lodash/isEmpty", "react", "redux-form", "react-bootstrap/lib/Button", "react-bootstrap/lib/FormGroup", "react-bootstrap/lib/Col", "react-bootstrap/lib/ControlLabel", "react-bootstrap/lib/FormControl", "react-bootstrap/lib/HelpBlock", "lodash/isFunction"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash/omit"), require("prop-types"), require("lodash/get"), require("lodash/has"), require("lodash/uniq"), require("lodash/map"), require("lodash/indexOf"), require("lodash/clone"), require("lodash/isEmpty"), require("react"), require("redux-form"), require("react-bootstrap/lib/Button"), require("react-bootstrap/lib/FormGroup"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/ControlLabel"), require("react-bootstrap/lib/FormControl"), require("react-bootstrap/lib/HelpBlock"), require("lodash/isFunction"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.omit, global.propTypes, global.get, global.has, global.uniq, global.map, global.indexOf, global.clone, global.isEmpty, global.react, global.reduxForm, global.Button, global.FormGroup, global.Col, global.ControlLabel, global.FormControl, global.HelpBlock, global.isFunction);
    global.Resource = mod.exports;
  }
})(this, function (_exports, _omit2, _propTypes, _get2, _has2, _uniq2, _map2, _indexOf2, _clone2, _isEmpty2, _react, _reduxForm, _Button, _FormGroup, _Col, _ControlLabel, _FormControl, _HelpBlock, _isFunction2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _omit2 = _interopRequireDefault(_omit2);
  _propTypes = _interopRequireDefault(_propTypes);
  _get2 = _interopRequireDefault(_get2);
  _has2 = _interopRequireDefault(_has2);
  _uniq2 = _interopRequireDefault(_uniq2);
  _map2 = _interopRequireDefault(_map2);
  _indexOf2 = _interopRequireDefault(_indexOf2);
  _clone2 = _interopRequireDefault(_clone2);
  _isEmpty2 = _interopRequireDefault(_isEmpty2);
  _react = _interopRequireDefault(_react);
  _Button = _interopRequireDefault(_Button);
  _FormGroup = _interopRequireDefault(_FormGroup);
  _Col = _interopRequireDefault(_Col);
  _ControlLabel = _interopRequireDefault(_ControlLabel);
  _FormControl = _interopRequireDefault(_FormControl);
  _HelpBlock = _interopRequireDefault(_HelpBlock);
  _isFunction2 = _interopRequireDefault(_isFunction2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var Resource =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Resource, _React$Component);

    function Resource() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.renderField = _this.renderField.bind(_assertThisInitialized(_this));
      _this.openResource = _this.openResource.bind(_assertThisInitialized(_this));
      _this.closeResource = _this.closeResource.bind(_assertThisInitialized(_this));
      _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
      _this.options = _this.options.bind(_assertThisInitialized(_this));
      _this.callBack = _this.callBack.bind(_assertThisInitialized(_this));
      _this.state = {
        showResource: false
      };
      _this.input = null;
      return _this;
    }

    var _proto = Resource.prototype;

    _proto.onChange = function onChange(e, value) {
      var values = this.input.value;

      if (typeof values !== 'object') {
        values = [values];
      }

      if (e.target.checked === true) {
        values.push(value);
      } else {
        values.splice((0, _indexOf2.default)(values, value), 1);
      }

      this.input.onChange((0, _uniq2.default)(values));
    };

    _proto.options = function options() {
      var _this2 = this;

      var field = this.props.field;
      var options = [];

      if (typeof field.multiple !== 'undefined' && field.multiple === false) {
        options = (0, _map2.default)(this.state.list || (0, _get2.default)(field, 'list', []), function (option, key) {
          if (String(_this2.input.value) === String(option.value)) {
            return _react.default.createElement("p", {
              className: "form-control-static",
              key: key
            }, _react.default.createElement("i", {
              className: "fa fa-check-square-o"
            }), ' ', option.desc);
          }
        });
      } else {
        options = (0, _map2.default)(this.state.list || (0, _get2.default)(field, 'list', []), function (option, key) {
          if ((0, _indexOf2.default)(_this2.input.value, option.value) > -1) {
            return _react.default.createElement("p", {
              className: "form-control-static",
              key: key
            }, (0, _indexOf2.default)(_this2.input.value, option.value) > -1 ? _react.default.createElement("i", {
              className: "fa fa-check-square-o"
            }) : _react.default.createElement("i", {
              className: "fa fa-square-o"
            }), ' ', option.desc);
          }
        });
      }

      return _react.default.createElement("div", {
        className: "checkbox"
      }, options);
    };

    _proto.callBack = function callBack(values, list) {
      var _this3 = this;

      this.setState({
        list: list
      }, function () {
        if (typeof _this3.props.field.multiple !== 'undefined' && _this3.props.field.multiple === false) {
          _this3.input.onChange(values);
        } else {
          _this3.input.onChange((0, _uniq2.default)(values));
        }
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

    _proto.renderField = function renderField(props) {
      var _this4 = this;

      if (this.props.field && this.props.field.hidden && (0, _isFunction2.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get2.default)(this.props.field, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get2.default)(this.props.field, 'parent')) !== true) {
          return null;
        }
      }

      var input = props.input,
          label = props.label,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          valid = _props$meta.valid,
          custom = _objectWithoutProperties(props, ["input", "label", "help", "meta"]);

      this.input = input;
      this.custom = custom;
      var size = (0, _get2.default)(this.props.field, 'bsSize', this.props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return {
            bsSize: size
          };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has2.default)(_this4.props.field, 'labelSize')) {
          return _this4.props.field.labelSize;
        }

        if (_this4.props.horizontal) {
          return {
            sm: 2
          };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has2.default)(_this4.props.field, 'fieldSize')) {
          return _this4.props.field.fieldSize;
        }

        if (_this4.props.horizontal) {
          return {
            sm: 10
          };
        }
      };

      var disabled = false;

      if (this.props.field && this.props.field.disabled && (0, _isFunction2.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      var component = function component() {
        var button = function button() {
          if (!_this4.props.static) {
            return _react.default.createElement(_Button.default, {
              onClick: _this4.openResource,
              disabled: disabled
            }, (0, _get2.default)(_this4.props, 'field.buttonResource', 'open'));
          }
        };

        var clonedValues = function clonedValues() {
          if (typeof _this4.props.field.multiple !== 'undefined' && _this4.props.field.multiple === false) {
            return _this4.input.value;
          }

          if ((0, _isEmpty2.default)(_this4.input.value)) {
            return [];
          }

          return (0, _clone2.default)(_this4.input.value);
        };

        var resourceProps = {
          clonedValues: clonedValues(),
          clonedList: (0, _clone2.default)(_this4.state.list) || (0, _clone2.default)(_this4.props.field.list),
          callBack: _this4.callBack,
          show: _this4.state.showResource,
          multiple: !(typeof _this4.props.field.multiple !== 'undefined' && _this4.props.field.multiple === false),
          closeResource: _this4.closeResource
        };
        return _react.default.createElement("div", null, button(), _this4.options(), _this4.props.field.resource(resourceProps));
      };

      var getLabel = function getLabel() {
        if (label && !(0, _isEmpty2.default)(label)) {
          return _react.default.createElement(_Col.default, _extends({
            componentClass: _ControlLabel.default
          }, labelSize()), label);
        }
      };

      var validationState = function validationState() {
        if (touched && error) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

      return _react.default.createElement(_FormGroup.default, _extends({}, thisSize(), {
        validationState: validationState()
      }), getLabel(), _react.default.createElement(_Col.default, fieldSize(), component(), help && (!touched || !error) && _react.default.createElement(_HelpBlock.default, null, help), touched && error && _react.default.createElement(_HelpBlock.default, null, error)));
    };

    _proto.render = function render() {
      return _react.default.createElement(_reduxForm.Field, _extends({
        component: this.renderField
      }, (0, _omit2.default)(this.props.field, ['disabled', 'hidden', 'type']), {
        size: this.props.size,
        showResource: this.state.showResource,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled,
        checkHidden: this.props.checkHidden,
        checkShow: this.props.checkShow
      }));
    };

    return Resource;
  }(_react.default.Component);

  Resource.propTypes = {
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'checkShow': _propTypes.default.func,
    'field': _propTypes.default.object,
    'size': _propTypes.default.string,
    'static': _propTypes.default.bool,
    'locale': _propTypes.default.object,
    'horizontal': _propTypes.default.bool.isRequired
  };
  Resource.defaultProps = {};
  var _default = Resource;
  _exports.default = _default;
});