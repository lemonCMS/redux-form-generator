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

var _reduxForm = require('redux-form');

var CheckboxListTypeiOs = (function (_Component) {
  _inherits(CheckboxListTypeiOs, _Component);

  _createClass(CheckboxListTypeiOs, null, [{
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

  function CheckboxListTypeiOs() {
    _classCallCheck(this, CheckboxListTypeiOs);

    _get(Object.getPrototypeOf(CheckboxListTypeiOs.prototype), 'constructor', this).call(this);
    this.options = this.options.bind(this);
    this.onChange = this.onChange.bind(this);
    this.options = this.options.bind(this);
    this.optionsWrite = this.optionsWrite.bind(this);
    this.optionsStatic = this.optionsStatic.bind(this);
  }

  _createClass(CheckboxListTypeiOs, [{
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
    key: 'options',
    value: function options() {
      var properties = this.props.properties;

      var selectedValue = properties.value || properties.defaultValue;

      if (this.props['static'] === true) {
        return this.optionsStatic(selectedValue);
      }
      return this.optionsWrite(selectedValue);
    }
  }, {
    key: 'optionsWrite',
    value: function optionsWrite(selectedValue) {
      var _this = this;

      var field = this.props.field;

      return _lodash2['default'].map(_lodash2['default'].get(field, 'options', []), function (option, key) {
        return _react2['default'].createElement(
          'div',
          { className: 'checkbox', key: key },
          _react2['default'].createElement(
            'div',
            { className: 'onoffswitch' },
            _react2['default'].createElement('input', {
              type: 'checkbox',
              className: 'onoffswitch-checkbox',
              value: option.value,
              checked: _lodash2['default'].indexOf(selectedValue, option.value) > -1,
              onChange: function (e) {
                _this.onChange(e, option.value);
              },
              id: 'myonoff-' + field.name + option.value
            }),
            _react2['default'].createElement('label', { className: 'onoffswitch-label', htmlFor: 'myonoff-' + field.name + option.value })
          ),
          ' ',
          option.desc
        );
      });
    }
  }, {
    key: 'optionsStatic',
    value: function optionsStatic(selectedValue) {
      var field = this.props.field;

      var options = _lodash2['default'].map(_lodash2['default'].get(field, 'options', []), function (option, key) {
        return _react2['default'].createElement(
          'div',
          { className: 'checkbox', key: key },
          _react2['default'].createElement(
            'div',
            { className: 'onoffswitch' },
            _react2['default'].createElement('input', {
              type: 'checkbox',
              className: 'onoffswitch-checkbox',
              value: option.value,
              checked: _lodash2['default'].indexOf(selectedValue, option.value) > -1,
              id: 'myonoff-' + field.name + option.value,
              readOnly: true
            }),
            _react2['default'].createElement('label', { className: 'onoffswitch-label', htmlFor: 'myonoff-' + field.name + option.value })
          ),
          ' ',
          option.desc
        );
      });

      return _react2['default'].createElement(
        'div',
        { className: 'checkbox' },
        options
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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

        if (_this2.props.properties.touched && _this2.props.properties.error) {
          return ret + ' has-error';
        }
        return ret;
      };

      var help = function help() {
        if (_this2.props.properties.touched && _lodash2['default'].has(_this2.props.properties, 'error')) {
          return _react2['default'].createElement(
            'span',
            { className: 'help-block' },
            _this2.props.properties.error
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
          this.options(),
          help()
        )
      );
    }
  }]);

  return CheckboxListTypeiOs;
})(_react.Component);

exports['default'] = CheckboxListTypeiOs;
module.exports = exports['default'];