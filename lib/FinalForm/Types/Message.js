'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageType = function (_Component) {
  _inherits(MessageType, _Component);

  function MessageType() {
    _classCallCheck(this, MessageType);

    return _possibleConstructorReturn(this, (MessageType.__proto__ || Object.getPrototypeOf(MessageType)).apply(this, arguments));
  }

  _createClass(MessageType, [{
    key: 'render',
    value: function render() {
      var field = this.props.field;


      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get3.default)(this.props.field, 'parent')) === true) {
          return;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction3.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get3.default)(this.props.field, 'parent')) !== true) {
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
        if (this.props.valid === false && this.props.submitFailed === true) {
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
}(_react.Component);

MessageType.propTypes = {
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'valid': _propTypes2.default.bool,
  'invalid': _propTypes2.default.bool,
  'submitFailed': _propTypes2.default.bool,
  'submitSucceeded': _propTypes2.default.bool,
  'submitting': _propTypes2.default.bool
};
exports.default = MessageType;