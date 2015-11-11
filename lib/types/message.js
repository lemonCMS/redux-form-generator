'use strict';

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _react = require('react');

var _redboxReact = require('redbox-react');

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _components = {
  _$MessageType: {
    displayName: 'MessageType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/message.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var MessageType = (function (_Component) {
  _inherits(MessageType, _Component);

  function MessageType() {
    _classCallCheck(this, _MessageType);

    _Component.apply(this, arguments);
  }

  MessageType.prototype.render = function render() {
    var _props$getActionState = this.props.getActionState();

    var success = _props$getActionState.success;
    var failed = _props$getActionState.failed;
    var _props = this.props;
    var field = _props.field;
    var size = _props.size;
    var valid = _props.valid;
    var invalid = _props.invalid;
    var pristine = _props.pristine;

    if (this.props.displayErrors === true && (field.type === 'success' && success && valid === true || field.type === 'error' && (failed || invalid === true && pristine === false))) {
      var style = field.type === 'success' ? 'success' : 'danger';
      return _react2['default'].createElement(
        _reactBootstrap.Alert,
        { bsStyle: style, bsSize: _lodash2['default'].get(field, 'bsSize', size) },
        field.message
      );
    }

    return _react2['default'].createElement('span', null);
  };

  _createClass(MessageType, null, [{
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

  var _MessageType = MessageType;
  MessageType = _wrapComponent('_$MessageType')(MessageType) || MessageType;
  return MessageType;
})(_react.Component);

exports['default'] = MessageType;
module.exports = exports['default'];