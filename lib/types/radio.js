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

var RadioType = (function (_Component) {
  _inherits(RadioType, _Component);

  _createClass(RadioType, null, [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'addField': _react.PropTypes.func.isRequired,
      'static': _react.PropTypes.bool
    },
    enumerable: true
  }]);

  function RadioType() {
    _classCallCheck(this, RadioType);

    _get(Object.getPrototypeOf(RadioType.prototype), 'constructor', this).call(this);
    this.options = this.options.bind(this);
    this.radioButtons = this.radioButtons.bind(this);
    this.radioButtonWrite = this.radioButtonWrite.bind(this);
    this.radioButtonStatic = this.radioButtonStatic.bind(this);
    this.filtered = this.filtered.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  _createClass(RadioType, [{
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
    key: 'radioButtonWrite',
    value: function radioButtonWrite(name, option, selectedValue, key) {
      return _react2['default'].createElement(
        'div',
        { className: 'radio', key: key },
        _react2['default'].createElement(
          'label',
          null,
          _react2['default'].createElement('input', {
            name: name,
            type: 'radio',
            value: option.value,
            onChange: this.props.properties.onChange,
            onFocus: this.props.properties.onFocus,
            onUpdate: this.props.properties.onUpdate,
            checked: selectedValue === String(option.value)
          }),
          ' ',
          option.desc
        )
      );
    }
  }, {
    key: 'radioButtonStatic',
    value: function radioButtonStatic(name, option, selectedValue, key) {
      return _react2['default'].createElement(
        'p',
        { className: 'form-control-static', key: key },
        selectedValue === String(option.value) ? _react2['default'].createElement('i', { className: 'fa fa-dot-circle-o' }) : _react2['default'].createElement('i', { className: 'fa fa-circle-o' }),
        ' ',
        option.desc
      );
    }
  }, {
    key: 'radioButtons',
    value: function radioButtons(name, data, selectedValue) {
      var _this = this;

      return _lodash2['default'].map(data, function (option, key) {
        if (_this.props['static'] === true) {
          return _this.radioButtonStatic(name, option, selectedValue, key);
        }
        return _this.radioButtonWrite(name, option, selectedValue, key);
      });
    }
  }, {
    key: 'options',
    value: function options() {
      var _this2 = this;

      var _props = this.props;
      var field = _props.field;
      var properties = _props.properties;

      var selectedValue = String(properties.value || properties.defaultValue);
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
                _this2.radioButtons(field.name, data, selectedValue)
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

      return this.radioButtons(field.name, filtered, selectedValue);
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
      var _this3 = this;

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

        if (_this3.props.properties.touched && _this3.props.properties.error) {
          return ret + ' has-error';
        }
        return ret;
      };

      var help = function help() {
        if (_this3.props.properties.touched && _this3.props.properties.error) {
          return _react2['default'].createElement(
            'span',
            { className: 'help-block' },
            _this3.props.properties.error
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

  return RadioType;
})(_react.Component);

exports['default'] = RadioType;
module.exports = exports['default'];