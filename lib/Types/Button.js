'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get3.default)(this.props.field, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction3.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get3.default)(this.props.field, 'parent')) !== true) {
          return null;
        }
      }

      var size = (0, _get3.default)(this.props.field, 'bsSize', this.props.size);
      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { bsSize: size };
        }
      };

      var disabled = false;
      if (this.props.field && this.props.field.disabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      return _react2.default.createElement(
        _Button2.default,
        (0, _extends3.default)({}, thisSize(), (0, _pick3.default)(this.props.field, ['type', 'placeholder', 'bsStyle', 'onClick', 'onBlur', 'block', 'active', 'href']), {
          disabled: disabled
        }),
        this.props.field.value
      );
    }
  }]);
  return Input;
}(_react2.default.Component);

Input.propTypes = {
  'field': _propTypes2.default.object,
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'size': _propTypes2.default.string
};
Input.defaultProps = {};

exports.default = Input;
module.exports = exports['default'];