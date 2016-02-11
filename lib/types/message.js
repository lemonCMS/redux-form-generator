Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var MessageType = (function (_Component) {
  _inherits(MessageType, _Component);

  function MessageType() {
    _classCallCheck(this, MessageType);

    _get(Object.getPrototypeOf(MessageType.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MessageType, [{
    key: 'render',
    value: function render() {
      var _props$getActionState = this.props.getActionState();

      var success = _props$getActionState.success;
      var failed = _props$getActionState.failed;
      var _props = this.props;
      var field = _props.field;
      var size = _props.size;
      var valid = _props.valid;
      var invalid = _props.invalid;

      if (this.props.displayErrors === true && (field.type === 'success' && success && valid === true || field.type === 'error' && (failed || invalid === true))) {
        var style = field.type === 'success' ? 'success' : 'danger';
        return _react2['default'].createElement(
          _reactBootstrap.Alert,
          { bsStyle: style, bsSize: _lodash2['default'].get(field, 'bsSize', size) },
          field.message
        );
      }

      return _react2['default'].createElement('span', null);
    }
  }], [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'getActionState': _react.PropTypes.func.isRequired,
      'valid': _react.PropTypes.bool.isRequired,
      'invalid': _react.PropTypes.bool.isRequired,
      'pristine': _react.PropTypes.bool.isRequired,
      'displayErrors': _react.PropTypes.bool.isRequired
    },
    enumerable: true
  }]);

  return MessageType;
})(_react.Component);

exports['default'] = MessageType;
module.exports = exports['default'];