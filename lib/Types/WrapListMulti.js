'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var _Checkbox = require('react-bootstrap/lib/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrapListMulti = function (_React$Component) {
  (0, _inherits3.default)(WrapListMulti, _React$Component);

  function WrapListMulti() {
    (0, _classCallCheck3.default)(this, WrapListMulti);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WrapListMulti.__proto__ || (0, _getPrototypeOf2.default)(WrapListMulti)).call(this));

    _this.renderField = _this.renderField.bind(_this);
    _this.handlePrevent = _this.handlePrevent.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.options = _this.options.bind(_this);
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

  (0, _createClass3.default)(WrapListMulti, [{
    key: 'filtered',
    value: function filtered(options) {
      var _this2 = this;

      if (this.props.static === true || (0, _get3.default)(this.props.field, 'static', false) === true) {
        return (0, _filter3.default)(options, function (option) {
          return _this2.input.value.indexOf(option.value) > -1;
        });
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
      var _this3 = this;

      var staticField = this.props.static || (0, _get3.default)(this.props.field, 'static', false);

      var disabled = false;
      if (this.props.field && this.props.field.disabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled(), (0, _get3.default)(this.props.field, 'parent'));
      }

      if ((0, _get3.default)(this.props, 'field.single', false) === true) {
        return (0, _map3.default)(list, function (option, key) {
          if (staticField === true) {
            return _react2.default.createElement(
              _FormControl2.default.Static,
              { key: key },
              option.desc
            );
          }

          return _react2.default.createElement(
            _Checkbox2.default,
            {
              key: key,
              name: '' + _this3.input.name,
              disabled: disabled,
              value: option.value,
              checked: String(_this3.input.value) === String(option.value),
              onChange: function onChange(event) {
                if (event.target.checked) {
                  _this3.input.onChange(option.value);
                } else {
                  _this3.input.onChange(null);
                }
              }
            },
            option.desc
          );
        });
      }

      return (0, _map3.default)(list, function (option, key) {
        if (staticField === true) {
          return _react2.default.createElement(
            _FormControl2.default.Static,
            { key: key },
            option.desc
          );
        }

        return _react2.default.createElement(
          _Checkbox2.default,
          {
            key: key,
            name: _this3.input.name + '[' + key + ']',
            disabled: disabled,
            value: option.value,
            checked: _this3.input.value.indexOf(option.value) !== -1,
            onChange: function onChange(event) {
              var newValue = [].concat((0, _toConsumableArray3.default)(_this3.input.value));
              if (event.target.checked) {
                newValue.push(option.value);
              } else {
                newValue.splice(newValue.indexOf(option.value), 1);
              }

              return _this3.input.onChange(newValue);
            }
          },
          option.desc
        );
      });
    }
  }, {
    key: 'radioButtons',
    value: function radioButtons() {
      var _this4 = this;

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
        var _ret = function () {
          var split = Math.ceil(filtered.length / field.chunks);
          var chunks = function chunks() {
            var chunkData = (0, _chunk3.default)(filtered, split);
            return (0, _map3.default)(chunkData, function (chunk, key) {
              return _react2.default.createElement(
                _Col2.default,
                { key: key, md: Math.round(12 / field.chunks) },
                _this4.radioButtonList(chunk)
              );
            });
          };
          return {
            v: _react2.default.createElement(
              _Row2.default,
              null,
              chunks()
            )
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
      }

      return this.radioButtonList(filtered);
    }
  }, {
    key: 'options',
    value: function options() {
      if (this.props.field.type === 'select') {
        return (0, _map3.default)((0, _get3.default)(this.props.field, 'options', []), function (option, key) {
          return _react2.default.createElement(
            'option',
            { key: key, value: option.value },
            option.desc
          );
        });
      }
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
      var _this5 = this;

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

      if (props.searchable) {
        console.warn('Property `searchable` is deprecated, use `filter` instead for');
      }

      var size = (0, _get3.default)(this.props.field, 'bsSize', this.props.size);
      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { bsSize: size };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has3.default)(_this5.props.field, 'labelSize')) {
          return _this5.props.field.labelSize;
        }
        if (_this5.props.horizontal) {
          return { sm: 2 };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this5.props.field, 'fieldSize')) {
          return _this5.props.field.fieldSize;
        }
        if (_this5.props.horizontal) {
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
            (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
            label
          );
        }
      };

      return _react2.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({}, thisSize(), {
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
  return WrapListMulti;
}(_react2.default.Component);

WrapListMulti.propTypes = {
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'horizontal': _propTypes2.default.bool.isRequired,
  'field': _propTypes2.default.object,
  'size': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'locale': _propTypes2.default.object
};
WrapListMulti.defaultProps = {};

exports.default = WrapListMulti;