Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reduxForm = require('redux-form');

var CheckboxListType = (function (_Component) {
  _inherits(CheckboxListType, _Component);

  _createClass(CheckboxListType, null, [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'dispatch': _react.PropTypes.func.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'formName': _react.PropTypes.string.isRequired,
      'formKey': _react.PropTypes.string,
      'addField': _react.PropTypes.func.isRequired,
      'static': _react.PropTypes.bool
    },
    enumerable: true
  }]);

  function CheckboxListType() {
    _classCallCheck(this, CheckboxListType);

    _get(Object.getPrototypeOf(CheckboxListType.prototype), 'constructor', this).call(this);
    this.options = this.options.bind(this);
    this.onChange = this.onChange.bind(this);
    this.options = this.options.bind(this);
    this.filtered = this.filtered.bind(this);
    this.checkboxButtons = this.checkboxButtons.bind(this);
    this.optionsWrite = this.optionsWrite.bind(this);
    this.optionsStatic = this.optionsStatic.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  _createClass(CheckboxListType, [{
    key: 'onChange',
    value: function onChange(e, value) {
      var properties = this.props.properties;

      var values = _lodash2['default'].get(properties, 'value') || _lodash2['default'].get(properties, 'initialValue', []);

      if (typeof values !== 'object') {
        values = [values];
      }
      if (e.target.checked === true) {
        values.push(value);
      } else {
        values.splice(_lodash2['default'].indexOf(values, value), 1);
      }

      if (_lodash2['default'].has(this.props, 'formKey')) {
        this.props.dispatch((0, _reduxForm.changeWithKey)(this.props.formName, this.props.formKey, this.props.field.name, _lodash2['default'].uniq(values)));
      } else {
        this.props.dispatch((0, _reduxForm.change)(this.props.formName, this.props.field.name, _lodash2['default'].uniq(values)));
      }
    }
  }, {
    key: 'filtered',
    value: function filtered(options) {
      var value = this.state.value;

      var strValue = String(value).toLowerCase();
      if (value !== '') {
        return _lodash2['default'].filter(options, function (option) {
          return _lodash2['default'].includes(String(option.desc).toLowerCase(), strValue);
        });
      }
      return options;
    }
  }, {
    key: 'options',
    value: function options() {
      var _this = this;

      var _props = this.props;
      var field = _props.field;
      var properties = _props.properties;

      var selectedValue = properties.value || properties.defaultValue;
      var filtered = this.filtered(_lodash2['default'].get(field, 'options', []));

      if (filtered.length === 0) {
        return _react2['default'].createElement(
          'span',
          { className: 'help-block' },
          'no results to show'
        );
      }

      if (!!field.chunks) {
        var _ret = (function () {
          var split = Math.ceil(filtered.length / field.chunks);
          var chunks = function chunks() {
            var chunkData = _lodash2['default'].chunk(filtered, split);
            return _lodash2['default'].map(chunkData, function (data, key) {
              return _react2['default'].createElement(
                _reactBootstrap.Col,
                { key: key, md: Math.round(12 / field.chunks) },
                _this.checkboxButtons(field.name, data, selectedValue)
              );
            });
          };
          return {
            v: _react2['default'].createElement(
              _reactBootstrap.Row,
              null,
              chunks()
            )
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      }

      return this.checkboxButtons(field.name, filtered, selectedValue);
    }
  }, {
    key: 'checkboxButtons',
    value: function checkboxButtons(name, data, selectedValue) {
      var _this2 = this;

      return _lodash2['default'].map(data, function (option, key) {
        if (_this2.props['static'] === true) {
          return _this2.optionsStatic(name, option, selectedValue, key);
        }
        return _this2.optionsWrite(name, option, selectedValue, key);
      });
    }
  }, {
    key: 'optionsWrite',
    value: function optionsWrite(name, option, selectedValue, key) {
      var _this3 = this;

      return _react2['default'].createElement(
        'div',
        { className: 'checkbox', key: key },
        _react2['default'].createElement(
          'label',
          null,
          _react2['default'].createElement('input', {
            type: 'checkbox',
            name: name + '[]',
            value: option.value,
            checked: _lodash2['default'].indexOf(selectedValue, option.value) > -1,
            onChange: function (e) {
              _this3.onChange(e, option.value);
            }
          }),
          ' ',
          option.desc
        )
      );
    }
  }, {
    key: 'optionsStatic',
    value: function optionsStatic(name, option, selectedValue, key) {
      return _react2['default'].createElement(
        'p',
        { className: 'form-control-static', key: key },
        _lodash2['default'].indexOf(selectedValue, option.value) > -1 ? _react2['default'].createElement('i', { className: 'fa fa-check-square-o' }) : _react2['default'].createElement('i', { className: 'fa fa-square-o' }),
        ' ',
        option.desc
      );
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
    key: 'searchBox',
    value: function searchBox() {
      if (!!this.props.field.searchable && !this.props['static']) {
        return _react2['default'].createElement('input', { type: 'text', placeholder: 'search', defaultValue: this.state.value, onKeyDown: this.handlePrevent, onKeyUp: this.handleChange, className: 'form-control' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var thisSize = _lodash2['default'].get(this.props.field, 'bsSize', this.props.size);
      var field = this.props.field;

      var getClass = function getClass() {
        var classNames = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        var ret = classNames;
        if (thisSize === 'large') {
          ret = ret + ' form-group-lg';
        }

        if (thisSize === 'small') {
          ret = ret + ' form-group-sm';
        }

        if (_this4.props.properties.touched && _this4.props.properties.error) {
          return ret + ' has-error';
        }
        return ret;
      };

      var help = function help() {
        if (_this4.props.properties.touched && _lodash2['default'].has(_this4.props.properties, 'error')) {
          return _react2['default'].createElement(
            'span',
            { className: 'help-block' },
            _this4.props.properties.error
          );
        }
      };

      var label = function label() {
        if (!!field.label) {
          return _react2['default'].createElement(
            'label',
            { className: 'control-label ' + _lodash2['default'].get(field, 'labelClassName') },
            field.label
          );
        }
      };

      return _react2['default'].createElement(
        'div',
        { key: field.name, className: getClass('form-group') },
        label(),
        _react2['default'].createElement(
          'div',
          { className: field.wrapperClassName },
          this.searchBox(),
          this.options(),
          help()
        )
      );
    }
  }]);

  return CheckboxListType;
})(_react.Component);

exports['default'] = CheckboxListType;
module.exports = exports['default'];