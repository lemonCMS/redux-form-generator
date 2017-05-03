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

var _WrapPlupload2 = require('./WrapPlupload');

var _WrapPlupload3 = _interopRequireDefault(_WrapPlupload2);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plupload = function (_WrapPlupload) {
  (0, _inherits3.default)(Plupload, _WrapPlupload);

  function Plupload() {
    (0, _classCallCheck3.default)(this, Plupload);
    return (0, _possibleConstructorReturn3.default)(this, (Plupload.__proto__ || (0, _getPrototypeOf2.default)(Plupload)).apply(this, arguments));
  }

  (0, _createClass3.default)(Plupload, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reduxForm.Field, (0, _extends3.default)({
        component: this.renderField
      }, this.props.field, {
        size: this.props.size,
        changed: this.state.changed,
        locale: this.props.locale
      }));
    }
  }]);
  return Plupload;
}(_WrapPlupload3.default);

Plupload.propTypes = {
  'field': _propTypes2.default.object,
  'size': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'locale': _propTypes2.default.object
};
Plupload.defaultProps = {};

exports.default = Plupload;
module.exports = exports['default'];