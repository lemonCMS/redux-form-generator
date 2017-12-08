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

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WrapContentEditable = require('./WrapContentEditable');

var _WrapContentEditable2 = _interopRequireDefault(_WrapContentEditable);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentEditable = function (_Wrap) {
  (0, _inherits3.default)(ContentEditable, _Wrap);

  function ContentEditable() {
    (0, _classCallCheck3.default)(this, ContentEditable);
    return (0, _possibleConstructorReturn3.default)(this, (ContentEditable.__proto__ || (0, _getPrototypeOf2.default)(ContentEditable)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContentEditable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reduxForm.Field, (0, _extends3.default)({
        component: this.renderField
      }, (0, _omit3.default)(this.props.field, ['disabled', 'hidden', 'type']), {
        size: this.props.size,
        'static': this.props.static,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled
      }));
    }
  }]);
  return ContentEditable;
}(_WrapContentEditable2.default);

ContentEditable.propTypes = {
  'field': _propTypes2.default.object,
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'size': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'addField': _propTypes2.default.func,
  'locale': _propTypes2.default.object
};
ContentEditable.defaultProps = {};

exports.default = ContentEditable;