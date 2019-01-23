(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash/has", "lodash/get", "lodash/isFunction", "react-bootstrap/lib/Col", "react-bootstrap/lib/FormControl", "react-bootstrap/lib/FormGroup", "react-bootstrap/lib/ControlLabel", "react-bootstrap/lib/HelpBlock", "./ContentEditableComponent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash/has"), require("lodash/get"), require("lodash/isFunction"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/FormControl"), require("react-bootstrap/lib/FormGroup"), require("react-bootstrap/lib/ControlLabel"), require("react-bootstrap/lib/HelpBlock"), require("./ContentEditableComponent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.has, global.get, global.isFunction, global.Col, global.FormControl, global.FormGroup, global.ControlLabel, global.HelpBlock, global.ContentEditableComponent);
    global.WrapContentEditable = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _has2, _get2, _isFunction2, _Col, _FormControl, _FormGroup, _ControlLabel, _HelpBlock, _ContentEditableComponent) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _has2 = _interopRequireDefault(_has2);
  _get2 = _interopRequireDefault(_get2);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _Col = _interopRequireDefault(_Col);
  _FormControl = _interopRequireDefault(_FormControl);
  _FormGroup = _interopRequireDefault(_FormGroup);
  _ControlLabel = _interopRequireDefault(_ControlLabel);
  _HelpBlock = _interopRequireDefault(_HelpBlock);
  _ContentEditableComponent = _interopRequireDefault(_ContentEditableComponent);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var WrapContentEditable =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(WrapContentEditable, _React$Component);

    function WrapContentEditable() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.input = {};
      _this.custom = {};
      _this.renderField = _this.renderField.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    var _proto = WrapContentEditable.prototype;

    _proto.renderField = function renderField(props) {
      var _this2 = this;

      if (this.props.field && this.props.field.hidden && (0, _isFunction2.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get2.default)(props, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get2.default)(props, 'parent')) !== true) {
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
        if ((0, _has2.default)(_this2.props.field, 'labelSize')) {
          return _this2.props.field.labelSize;
        }

        if (_this2.props.horizontal) {
          return {
            sm: 2
          };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has2.default)(_this2.props.field, 'fieldSize')) {
          return _this2.props.field.fieldSize;
        }

        if (_this2.props.horizontal) {
          return {
            sm: 10
          };
        }
      };

      if (custom.disabled && (0, _isFunction2.default)(custom.disabled)) {
        this.props.field.attributes.disabled = this.props.checkDisabled(custom.disabled(), (0, _get2.default)(props, 'parent'));
      }

      var validationState = function validationState() {
        if (touched && error) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

      var getField = function getField() {
        return _react.default.createElement(_ContentEditableComponent.default, _extends({
          tagName: _this2.props.field.tagName || 'div',
          html: _this2.input.value,
          onChange: _this2.input.onChange
        }, _this2.props.field.attributes));
      };

      if (this.props.field.type === 'dropDown' && !(0, _has2.default)(this.props.field, 'label')) {
        return getField();
      }

      var getLabel = function getLabel() {
        if (label) {
          return _react.default.createElement(_Col.default, _extends({
            componentClass: _ControlLabel.default
          }, labelSize()), label);
        }
      };

      return _react.default.createElement(_FormGroup.default, _extends({}, thisSize(), {
        validationState: validationState()
      }), getLabel(), _react.default.createElement(_Col.default, _extends({}, fieldSize(), {
        className: (0, _get2.default)(this.props.field, 'fieldClassName', '')
      }), getField(), touched && error && _react.default.createElement(_FormControl.default.Feedback, null), help && (!touched || !error) && _react.default.createElement(_HelpBlock.default, null, help), touched && error && _react.default.createElement(_HelpBlock.default, null, error)));
    };

    _proto.render = function render() {
      return null;
    };

    return WrapContentEditable;
  }(_react.default.Component);

  WrapContentEditable.propTypes = {
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'checkShow': _propTypes.default.func,
    'field': _propTypes.default.object,
    'size': _propTypes.default.string,
    'horizontal': _propTypes.default.bool.isRequired
  };
  WrapContentEditable.defaultProps = {};
  var _default = WrapContentEditable;
  _exports.default = _default;
});