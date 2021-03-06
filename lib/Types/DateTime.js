(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash/has", "lodash/merge", "lodash/get", "lodash/pick", "lodash/omit", "react-datetime", "react-bootstrap/lib/Col", "react-bootstrap/lib/FormControl", "react-bootstrap/lib/FormGroup", "react-bootstrap/lib/ControlLabel", "react-bootstrap/lib/HelpBlock", "redux-form", "lodash/isFunction", "../helpers/moment"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash/has"), require("lodash/merge"), require("lodash/get"), require("lodash/pick"), require("lodash/omit"), require("react-datetime"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/FormControl"), require("react-bootstrap/lib/FormGroup"), require("react-bootstrap/lib/ControlLabel"), require("react-bootstrap/lib/HelpBlock"), require("redux-form"), require("lodash/isFunction"), require("../helpers/moment"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.has, global.merge, global.get, global.pick, global.omit, global.reactDatetime, global.Col, global.FormControl, global.FormGroup, global.ControlLabel, global.HelpBlock, global.reduxForm, global.isFunction, global.moment);
    global.DateTime = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _has2, _merge2, _get2, _pick2, _omit2, _reactDatetime, _Col, _FormControl, _FormGroup, _ControlLabel, _HelpBlock, _reduxForm, _isFunction2, _moment) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _has2 = _interopRequireDefault(_has2);
  _merge2 = _interopRequireDefault(_merge2);
  _get2 = _interopRequireDefault(_get2);
  _pick2 = _interopRequireDefault(_pick2);
  _omit2 = _interopRequireDefault(_omit2);
  _reactDatetime = _interopRequireDefault(_reactDatetime);
  _Col = _interopRequireDefault(_Col);
  _FormControl = _interopRequireDefault(_FormControl);
  _FormGroup = _interopRequireDefault(_FormGroup);
  _ControlLabel = _interopRequireDefault(_ControlLabel);
  _HelpBlock = _interopRequireDefault(_HelpBlock);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _moment = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Input =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Input, _React$Component);

    function Input() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.renderField = _this.renderField.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = Input.prototype;

    _proto.renderField = function renderField(props) {
      var _this2 = this;

      if (this.props.field && this.props.field.hidden && (0, _isFunction2["default"])(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get2["default"])(this.props.field, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2["default"])(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get2["default"])(this.props.field, 'parent')) !== true) {
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
          custom = _objectWithoutPropertiesLoose(props, ["input", "label", "help", "meta"]);

      var size = (0, _get2["default"])(props.field, 'bsSize', props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return {
            bsSize: size
          };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has2["default"])(_this2.props.field, 'labelSize')) {
          return _this2.props.field.labelSize;
        }

        if (_this2.props.horizontal) {
          return {
            sm: 2
          };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has2["default"])(_this2.props.field, 'fieldSize')) {
          return _this2.props.field.fieldSize;
        }

        if (_this2.props.horizontal) {
          return {
            sm: 10
          };
        }
      };

      var add = (0, _pick2["default"])(custom, ['placeholder', 'inputProps']);
      var conf = Object.assign({}, Object.assign({}, props.locale.datetimepicker), Object.assign({}, props.config));

      var validationState = function validationState() {
        if (touched && error) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

      var disabled = false;

      if (this.props.field && this.props.field.diabled && (0, _isFunction2["default"])(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      var component = function component() {
        var value = (0, _has2["default"])(conf, 'parse') ? (0, _moment["default"])(input.value, (0, _get2["default"])(conf, 'parse')) : (0, _moment["default"])(input.value);
        return _react["default"].createElement(_reactDatetime["default"], _extends({
          key: props.name,
          onChange: function onChange(val) {
            input.onChange((0, _has2["default"])(conf, 'parse') ? (0, _moment["default"])(val).format((0, _get2["default"])(conf, 'parse')) : val);
          },
          value: value
        }, add, (0, _omit2["default"])(conf, ['parse']), {
          inputProps: {
            disabled: disabled
          }
        }));
      };

      var getLabel = function getLabel() {
        if (label) {
          return _react["default"].createElement(_Col["default"], _extends({
            componentClass: _ControlLabel["default"]
          }, labelSize()), label);
        }
      };

      return _react["default"].createElement(_FormGroup["default"], _extends({}, thisSize(), {
        validationState: validationState()
      }), getLabel(), _react["default"].createElement(_Col["default"], fieldSize(), component(), touched && error && _react["default"].createElement(_FormControl["default"].Feedback, null), help && (!touched || !error) && _react["default"].createElement(_HelpBlock["default"], null, help), touched && error && _react["default"].createElement(_HelpBlock["default"], null, error)));
    };

    _proto.render = function render() {
      return _react["default"].createElement(_reduxForm.Field, _extends({
        component: this.renderField
      }, this.props.field, {
        size: this.props.size,
        "static": this.props["static"],
        locale: this.props.locale
      }));
    };

    return Input;
  }(_react["default"].Component);

  Input.propTypes = {
    'field': _propTypes["default"].object,
    'checkDisabled': _propTypes["default"].func,
    'checkHidden': _propTypes["default"].func,
    'checkShow': _propTypes["default"].func,
    'size': _propTypes["default"].string,
    'static': _propTypes["default"].bool,
    'locale': _propTypes["default"].object,
    'horizontal': _propTypes["default"].bool.isRequired
  };
  Input.defaultProps = {};
  var _default = Input;
  _exports["default"] = _default;
});