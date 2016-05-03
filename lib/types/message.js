'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  MessageType: {
    displayName: 'MessageType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/message.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var MessageType = _wrapComponent('MessageType')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(MessageType, _Component);

  function MessageType() {
    (0, _classCallCheck3.default)(this, MessageType);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MessageType).apply(this, arguments));
  }

  (0, _createClass3.default)(MessageType, [{
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
        return _react3.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: style, bsSize: _lodash2.default.get(field, 'bsSize', size) },
          field.message
        );
      }

      return _react3.default.createElement('span', null);
    }
  }]);
  return MessageType;
}(_react2.Component), _class.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'size': _react2.PropTypes.string,
  'getActionState': _react2.PropTypes.func.isRequired,
  'valid': _react2.PropTypes.bool.isRequired,
  'invalid': _react2.PropTypes.bool.isRequired,
  'pristine': _react2.PropTypes.bool.isRequired,
  'displayErrors': _react2.PropTypes.bool.isRequired
}, _temp));

exports.default = MessageType;
module.exports = exports['default'];