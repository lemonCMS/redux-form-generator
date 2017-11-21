'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _isObject2 = require('lodash/isObject');

var _isObject3 = _interopRequireDefault(_isObject2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plain = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Plain, _Component);

  function Plain() {
    (0, _classCallCheck3.default)(this, Plain);
    return (0, _possibleConstructorReturn3.default)(this, (Plain.__proto__ || (0, _getPrototypeOf2.default)(Plain)).apply(this, arguments));
  }

  (0, _createClass3.default)(Plain, [{
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

      var createMarkup = function createMarkup(data) {
        return { __html: data };
      };

      if ((0, _isString3.default)(this.props.field.value)) {
        return _react2.default.createElement('div', (0, _extends3.default)({ dangerouslySetInnerHTML: createMarkup(this.props.field.value) }, (0, _pick3.default)(this.props.field, ['className', 'style', 'id', 'onClick', 'rel'])));
      }

      if ((0, _isObject3.default)(this.props.field.value)) {
        return this.props.field.value;
      }

      return null;
    }
  }]);
  return Plain;
}(_react.Component), _class.propTypes = {
  'field': _propTypes2.default.object.isRequired,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func
}, _temp);
exports.default = Plain;
module.exports = exports['default'];