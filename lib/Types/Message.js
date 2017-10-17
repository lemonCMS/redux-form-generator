'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageType = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(MessageType, _Component);

  function MessageType() {
    (0, _classCallCheck3.default)(this, MessageType);
    return (0, _possibleConstructorReturn3.default)(this, (MessageType.__proto__ || (0, _getPrototypeOf2.default)(MessageType)).apply(this, arguments));
  }

  (0, _createClass3.default)(MessageType, [{
    key: 'render',
    value: function render() {
      var field = this.props.field;


      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden()) === true) {
          return;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction3.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show()) !== true) {
          return null;
        }
      }

      if (field.type === 'success' && !this.props.submitting) {
        if (this.props.valid === true && this.props.submitSucceeded === true && this.props.submitting === false) {
          return _react2.default.createElement(
            _Alert2.default,
            { bsStyle: 'success' },
            field.message
          );
        }
      }

      if (field.type === 'error' && !this.props.submitting) {
        if (this.props.invalid === true && this.props.submitFailed === true) {
          return _react2.default.createElement(
            _Alert2.default,
            { bsStyle: 'danger' },
            field.message
          );
        }
      }

      return _react2.default.createElement('span', null);
    }
  }]);
  return MessageType;
}(_react.Component), _class.propTypes = {
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'valid': _propTypes2.default.bool,
  'invalid': _propTypes2.default.bool,
  'submitFailed': _propTypes2.default.bool,
  'submitSucceeded': _propTypes2.default.bool,
  'submitting': _propTypes2.default.bool
}, _temp);
exports.default = MessageType;
module.exports = exports['default'];