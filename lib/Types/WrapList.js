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

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _chunk2 = require('lodash/chunk');

var _chunk3 = _interopRequireDefault(_chunk2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

var _Radio = require('react-bootstrap/lib/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrapList = function (_React$Component) {
  _inherits(WrapList, _React$Component);

  function WrapList() {
    _classCallCheck(this, WrapList);

    var _this = _possibleConstructorReturn(this, (WrapList.__proto__ || Object.getPrototypeOf(WrapList)).call(this));

    _this.renderField = _this.renderField.bind(_this);
    _this.handlePrevent = _this.handlePrevent.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.filtered = _this.filtered.bind(_this);
    _this.radioButtons = _this.radioButtons.bind(_this);
    _this.radioButtonList = _this.radioButtonList.bind(_this);
    _this.searchBox = _this.searchBox.bind(_this);
    _this.state = {
      value: '',
      selected: []
    };
    _this.input = {};
    return _this;
  }

  _createClass(WrapList, [{
    key: 'filtered',
    value: function filtered(options) {
      if (this.props.static === true || (0, _get3.default)(this.props.field, 'static', false) === true) {
        return (0, _filter3.default)(this.props.field.options, { value: this.input.value });
      }

      var value = this.state.value;

      var strValue = String(value).toLowerCase();
      if (value !== '') {
        return (0, _filter3.default)(options, function (option) {
          return (0, _includes3.default)(String(option.desc).toLowerCase(), strValue);
        });
      }
      return options;
    }
  }, {
    key: 'radioButtonList',
    value: function radioButtonList(list) {
      var _this2 = this;

      var staticField = this.props.static || (0, _get3.default)(this.props.field, 'static', false);
      return (0, _map3.default)(list, function (option, key) {
        if (staticField === true) {
          return _react2.default.createElement(
            _FormControl2.default.Static,
            { key: key },
            option.desc
          );
        }

        var disabled = false;
        if (_this2.props.field && _this2.props.field.disabled && (0, _isFunction3.default)(_this2.props.field.disabled)) {
          disabled = _this2.props.checkDisabled(_this2.props.field.disabled(), (0, _get3.default)(_this2.props.field, 'parent'));
        }

        return _react2.default.createElement(
          _Radio2.default,
          {
            key: key,
            disabled: disabled,
            name: _this2.input.name + '[' + key + ']',
            value: option.value,
            checked: String(_this2.input.value) === String(option.value),
            onChange: function onChange(event) {
              if (event.target.checked) {
                return _this2.input.onChange(option.value);
              }
            }
          },
          option.desc
        );
      });
    }
  }, {
    key: 'radioButtons',
    value: function radioButtons() {
      var _this3 = this;

      var filtered = this.filtered((0, _get3.default)(this.props.field, 'options', []));
      var field = (0, _get3.default)(this.props, 'field');
      if (filtered.length === 0) {
        return _react2.default.createElement(
          _Alert2.default,
          null,
          (0, _get3.default)(this.props.field, 'filter_norecords', (0, _get3.default)(this.props.locale, 'filter.norecords', 'No results'))
        );
      }

      if (field.chunks) {
        var split = Math.ceil(filtered.length / field.chunks);
        var chunks = function chunks() {
          var chunkData = (0, _chunk3.default)(filtered, split);
          return (0, _map3.default)(chunkData, function (chunk, key) {
            return _react2.default.createElement(
              _Col2.default,
              { key: key, md: Math.round(12 / field.chunks) },
              _this3.radioButtonList(chunk)
            );
          });
        };
        return _react2.default.createElement(
          _Row2.default,
          null,
          chunks()
        );
      }

      return this.radioButtonList(filtered);
    }
  }, {
    key: 'searchBox',
    value: function searchBox() {
      var disabled = false;
      if (this.props.field && this.props.field.disabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      if ((!!this.props.field.searchable || this.props.field.filter) && !this.props.static) {
        return _react2.default.createElement('input', {
          type: 'text',
          disabled: disabled,
          placeholder: (0, _get3.default)(this.props.field, 'filter_placeholder', (0, _get3.default)(this.props.locale, 'filter.placeholder', 'Filter')),
          defaultValue: this.state.value,
          onKeyDown: this.handlePrevent,
          onKeyUp: this.handleChange,
          className: 'form-control'
        });
      }
    }
  }, {
    key: 'handlePrevent',
    value: function handlePrevent(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'renderField',
    value: function renderField(props) {
      var _this4 = this;

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
          valid = _props$meta.valid;

      this.input = input;
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

      var validationState = function validationState() {
        if (touched && error) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

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
          this.searchBox(),
          this.radioButtons(),
          touched && error && _react2.default.createElement(_FormControl2.default.Feedback, null),
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
      return null;
    }
  }]);

  return WrapList;
}(_react2.default.Component);

WrapList.propTypes = {
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'size': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'locale': _propTypes2.default.object,
  'horizontal': _propTypes2.default.bool.isRequired
};
WrapList.defaultProps = {};

exports.default = WrapList;