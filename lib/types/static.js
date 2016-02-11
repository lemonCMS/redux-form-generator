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

var StaticType = (function (_Component) {
  _inherits(StaticType, _Component);

  function StaticType() {
    _classCallCheck(this, StaticType);

    _get(Object.getPrototypeOf(StaticType.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(StaticType, [{
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

      return _react2['default'].createElement(_reactBootstrap.FormControls.Static, _extends({
        key: this.props.field.name,
        name: 'search',
        bsSize: thisSize
      }, extraProps, this.props.field, this.props.properties, {
        buttonBefore: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonBefore', {}), thisSize),
        buttonAfter: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonAfter', {}), thisSize)
      }));
    }
  }], [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'addField': _react.PropTypes.func.isRequired

    },
    enumerable: true
  }]);

  return StaticType;
})(_react.Component);

exports['default'] = StaticType;
module.exports = exports['default'];