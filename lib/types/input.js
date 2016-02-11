Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

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
    _classCallCheck(this, InputType);

    _get(Object.getPrototypeOf(InputType.prototype), 'constructor', this).call(this);
    this.options = this.options.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  _createClass(InputType, [{
    key: 'options',
    value: function options() {
      if (this.props.field.type === 'select') {
        return _lodash2['default'].map(_lodash2['default'].get(this.props.field, 'options', []), function (option, key) {
          return _react2['default'].createElement(
            'option',
            { key: key, value: option.value },
            option.desc
          );
        });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var options = _lodash2['default'].get(this.props.field, 'options', []);
      var value = this.props.properties.defaultValue || this.props.properties.value;
      return _lodash2['default'].get(options, [_lodash2['default'].findIndex(options, 'value', value), 'desc'], '');
    }
  }, {
    key: 'render',
    value: function render() {
      var thisSize = _lodash2['default'].get(this.props.field, 'bsSize', this.props.size);
      var extraProps = {};
      if (this.props.properties.touched && this.props.properties.error) {
        extraProps.bsStyle = 'error';
      }
      if (this.props.properties.touched && this.props.properties.error) {
        extraProps.help = this.props.properties.error;
      }

      if (this.props['static'] === true && this.props.field.type === 'checkbox') {
        var value = this.props.properties.defaultValue || this.props.properties.value;
        return _react2['default'].createElement(
          _reactBootstrap.FormControls.Static,
          _extends({
            bsSize: thisSize
          }, _lodash2['default'].omit(this.props.field, ['value', 'label']), _lodash2['default'].omit(this.props.properties, ['value', 'defaultValue']), {
            buttonBefore: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonBefore', {}), thisSize),
            buttonAfter: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonAfter', {}), thisSize)
          }),
          value === true ? _react2['default'].createElement('i', { className: 'fa fa-check-square-o' }) : _react2['default'].createElement('i', { className: 'fa fa-square-o' }),
          ' ',
          this.props.field.label
        );
      }

      if (this.props['static'] === true && this.props.field.type === 'select') {
        return _react2['default'].createElement(_reactBootstrap.FormControls.Static, _extends({
          bsSize: thisSize,
          value: this.getValue()
        }, _lodash2['default'].omit(this.props.field, ['value']), _lodash2['default'].omit(this.props.properties, ['value', 'defaultValue']), {
          buttonBefore: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonBefore', {}), thisSize),
          buttonAfter: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonAfter', {}), thisSize)
        }));
      }

      if (this.props['static'] === true) {
        return _react2['default'].createElement(
          _reactBootstrap.FormControls.Static,
          _extends({
            bsSize: thisSize
          }, this.props.field, {
            value: this.props.properties.defaultValue || this.props.properties.value
          }, _lodash2['default'].omit(this.props.properties, ['value', 'defaultValue']), {
            buttonBefore: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonBefore', {}), thisSize),
            buttonAfter: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonAfter', {}), thisSize)
          }),
          this.options()
        );
      }

      return _react2['default'].createElement(
        _reactBootstrap.Input,
        _extends({
          key: this.props.field.name,
          name: 'search',
          bsSize: thisSize
        }, extraProps, this.props.field, this.props.properties, {
          buttonBefore: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonBefore', {}), thisSize),
          buttonAfter: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonAfter', {}), thisSize)
        }),
        this.options()
      );
    }
  }]);

  return InputType;
})(_react.Component);

exports['default'] = InputType;
module.exports = exports['default'];