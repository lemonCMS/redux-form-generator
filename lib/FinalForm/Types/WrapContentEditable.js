'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

var _ContentEditableComponent = require('./ContentEditableComponent');

var _ContentEditableComponent2 = _interopRequireDefault(_ContentEditableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrapContentEditable = function (_React$Component) {
  _inherits(WrapContentEditable, _React$Component);

  function WrapContentEditable() {
    _classCallCheck(this, WrapContentEditable);

    var _this = _possibleConstructorReturn(this, (WrapContentEditable.__proto__ || Object.getPrototypeOf(WrapContentEditable)).call(this));

    _this.input = {};
    _this.custom = {};
    _this.renderField = _this.renderField.bind(_this);
    return _this;
  }

  _createClass(WrapContentEditable, [{
    key: 'renderField',
    value: function renderField(props) {
      var _this2 = this;

      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get3.default)(props, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction3.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get3.default)(props, 'parent')) !== true) {
          return null;
        }
      }

      var input = props.input,
          label = props.label,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          submitError = _props$meta.submitError,
          submitFailed = _props$meta.submitFailed,
          valid = _props$meta.valid,
          custom = _objectWithoutProperties(props, ['input', 'label', 'help', 'meta']);

      this.input = input;
      this.custom = custom;
      var size = (0, _get3.default)(this.props.field, 'bsSize', this.props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { bsSize: size };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has3.default)(_this2.props.field, 'labelSize')) {
          return _this2.props.field.labelSize;
        }
        if (_this2.props.horizontal) {
          return { sm: 2 };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this2.props.field, 'fieldSize')) {
          return _this2.props.field.fieldSize;
        }
        if (_this2.props.horizontal) {
          return { sm: 10 };
        }
      };

      if (custom.disabled && (0, _isFunction3.default)(custom.disabled)) {
        this.props.field.attributes.disabled = this.props.checkDisabled(custom.disabled(), (0, _get3.default)(props, 'parent'));
      }

      var validationState = function validationState() {
        if (touched && error || submitFailed && submitError) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

      var getField = function getField() {
        return _react2.default.createElement(_ContentEditableComponent2.default, _extends({
          tagName: _this2.props.field.tagName || 'div',
          html: _this2.input.value,
          onChange: _this2.input.onChange
        }, _this2.props.field.attributes));
      };

      if (this.props.field.type === 'dropDown' && !(0, _has3.default)(this.props.field, 'label')) {
        return getField();
      }

      var getLabel = function getLabel() {
        if (label) {
          return _react2.default.createElement(
            _Col2.default,
            _extends({ componentClass: _ControlLabel2.default }, labelSize()),
            label
          );
        }
      };

      return _react2.default.createElement(
        _FormGroup2.default,
        _extends({}, thisSize(), {
          validationState: validationState()
        }),
        getLabel(),
        _react2.default.createElement(
          _Col2.default,
          fieldSize(),
          getField(),
          (touched && error || submitFailed && submitError) && _react2.default.createElement(_FormControl2.default.Feedback, null),
          help && (!touched || !submitError && !error) && _react2.default.createElement(
            _HelpBlock2.default,
            null,
            help
          ),
          (touched && error || submitFailed && submitError) && _react2.default.createElement(
            _HelpBlock2.default,
            null,
            submitError || error
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return WrapContentEditable;
}(_react2.default.Component);

WrapContentEditable.propTypes = {
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'size': _propTypes2.default.string,
  'horizontal': _propTypes2.default.bool.isRequired
};
WrapContentEditable.defaultProps = {};

exports.default = WrapContentEditable;