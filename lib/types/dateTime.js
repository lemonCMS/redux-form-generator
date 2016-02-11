Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _reactBootstrapDatetimepicker = require('react-bootstrap-datetimepicker');

var _reactBootstrapDatetimepicker2 = _interopRequireDefault(_reactBootstrapDatetimepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var InputType = (function (_Component) {
  _inherits(InputType, _Component);

  _createClass(InputType, null, [{
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

  function InputType() {
    var _this = this;

    _classCallCheck(this, InputType);

    _get(Object.getPrototypeOf(InputType.prototype), 'constructor', this).call(this);

    this.handleChange = function (newDate) {
      return _this.setState({ date: newDate });
    };

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      date: null
    };
  }

  _createClass(InputType, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!_lodash2['default'].isUndefined(_lodash2['default'].get(this.props, 'properties.defaultValue'))) {
        this.setState({ date: _lodash2['default'].get(this.props, 'properties.defaultValue') });
      }
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

      if (this.props['static'] === true) {
        var value = '';
        var dateTime = (0, _moment2['default'])(this.props.properties.defaultValue || this.props.properties.value, 'x');
        if (dateTime.isValid()) {
          value = dateTime.format('YYYY-MM-DD');
        }

        return _react2['default'].createElement(
          'div',
          { key: field.name, className: getClass('form-group') },
          label(),
          _react2['default'].createElement(
            'div',
            { className: field.wrapperClassName },
            _react2['default'].createElement(
              'p',
              { className: 'form-control-static' },
              value
            )
          )
        );
      }

      var props = {};
      if (this.state.date === null) {
        props.defaultText = '';
      } else {
        props.dateTime = this.state.date;
      }

      return _react2['default'].createElement(
        'div',
        { key: field.name, className: getClass('form-group') },
        label(),
        _react2['default'].createElement(
          'div',
          { className: field.wrapperClassName },
          _react2['default'].createElement(_reactBootstrapDatetimepicker2['default'], _extends({
            key: this.props.field.name,
            bsSize: thisSize
          }, this.props.field, this.props.properties, props)),
          help()
        )
      );
    }
  }]);

  return InputType;
})(_react.Component);

exports['default'] = InputType;
module.exports = exports['default'];