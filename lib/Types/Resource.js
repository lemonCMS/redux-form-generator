'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _uniq2 = require('lodash/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _indexOf2 = require('lodash/indexOf');

var _indexOf3 = _interopRequireDefault(_indexOf2);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resource = function (_React$Component) {
  _inherits(Resource, _React$Component);

  function Resource() {
    _classCallCheck(this, Resource);

    var _this = _possibleConstructorReturn(this, (Resource.__proto__ || Object.getPrototypeOf(Resource)).call(this));

    _this.renderField = _this.renderField.bind(_this);
    _this.openResource = _this.openResource.bind(_this);
    _this.closeResource = _this.closeResource.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.options = _this.options.bind(_this);
    _this.callBack = _this.callBack.bind(_this);
    _this.state = {
      showResource: false
    };
    _this.input = null;
    return _this;
  }

  _createClass(Resource, [{
    key: 'onChange',
    value: function onChange(e, value) {
      var values = this.input.value;
      if ((typeof values === 'undefined' ? 'undefined' : _typeof(values)) !== 'object') {
        values = [values];
      }
      if (e.target.checked === true) {
        values.push(value);
      } else {
        values.splice((0, _indexOf3.default)(values, value), 1);
      }

      this.input.onChange((0, _uniq3.default)(values));
    }
  }, {
    key: 'options',
    value: function options() {
      var _this2 = this;

      var field = this.props.field;

      var options = (0, _map3.default)(this.state.list || (0, _get3.default)(field, 'list', []), function (option, key) {
        if ((0, _indexOf3.default)(_this2.input.value, option.value) > -1) {
          return _react2.default.createElement(
            'p',
            { className: 'form-control-static', key: key },
            (0, _indexOf3.default)(_this2.input.value, option.value) > -1 ? _react2.default.createElement('i', { className: 'fa fa-check-square-o' }) : _react2.default.createElement('i', { className: 'fa fa-square-o' }),
            ' ',
            option.desc
          );
        }
      });

      return _react2.default.createElement(
        'div',
        { className: 'checkbox' },
        options
      );
    }
  }, {
    key: 'callBack',
    value: function callBack(values, list) {
      var _this3 = this;

      console.log(this);

      this.setState({
        list: list
      }, function () {
        _this3.input.onChange((0, _uniq3.default)(values));
      });
    }
  }, {
    key: 'openResource',
    value: function openResource() {
      this.setState({ showResource: true });
    }
  }, {
    key: 'closeResource',
    value: function closeResource() {
      this.setState({ showResource: false });
    }
  }, {
    key: 'renderField',
    value: function renderField(props) {
      var _this4 = this;

      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get3.default)(this.props.field, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction3.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get3.default)(this.props.field, 'parent')) !== true) {
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
        if ((0, _has3.default)(_this4.props.field, 'labelSize')) {
          return _this4.props.field.labelSize;
        }
        if (_this4.props.horizontal) {
          return { sm: 2 };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this4.props.field, 'fieldSize')) {
          return _this4.props.field.fieldSize;
        }
        if (_this4.props.horizontal) {
          return { sm: 10 };
        }
      };

      var disabled = false;
      if (this.props.field && this.props.field.disabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      var component = function component() {
        var button = function button() {
          if (!_this4.props.static) {
            return _react2.default.createElement(
              _Button2.default,
              { onClick: _this4.openResource, disabled: disabled },
              (0, _get3.default)(_this4.props, 'field.buttonResource', 'open')
            );
          }
        };

        var clonedValues = function clonedValues() {
          if ((0, _isEmpty3.default)(_this4.input.value)) {
            return [];
          }

          return (0, _clone3.default)(_this4.input.value);
        };

        var resourceProps = {
          clonedValues: clonedValues(),
          clonedList: (0, _clone3.default)(_this4.state.list) || (0, _clone3.default)(_this4.props.field.list),
          callBack: _this4.callBack,
          show: _this4.state.showResource,
          closeResource: _this4.closeResource
        };

        return _react2.default.createElement(
          'div',
          null,
          button(),
          _this4.options(),
          _this4.props.field.resource(resourceProps)
        );
      };

      var getLabel = function getLabel() {
        if (label && !(0, _isEmpty3.default)(label)) {
          return _react2.default.createElement(
            _Col2.default,
            _extends({ componentClass: _ControlLabel2.default }, labelSize()),
            label
          );
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

      return _react2.default.createElement(
        _FormGroup2.default,
        _extends({}, thisSize(), {
          validationState: validationState()
        }),
        getLabel(),
        _react2.default.createElement(
          _Col2.default,
          fieldSize(),
          component(),
          help && (!touched || !error) && _react2.default.createElement(
            _HelpBlock2.default,
            null,
            help
          ),
          touched && error && _react2.default.createElement(
            _HelpBlock2.default,
            null,
            error
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reduxForm.Field, _extends({
        component: this.renderField
      }, (0, _omit3.default)(this.props.field, ['disabled', 'hidden', 'type']), {
        size: this.props.size,
        showResource: this.state.showResource,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled,
        checkHidden: this.props.checkHidden,
        checkShow: this.props.checkShow
      }));
    }
  }]);

  return Resource;
}(_react2.default.Component);

Resource.propTypes = {
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'size': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'locale': _propTypes2.default.object,
  'horizontal': _propTypes2.default.bool.isRequired
};
Resource.defaultProps = {};

exports.default = Resource;