'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentEditable = function (_Wrap) {
  _inherits(ContentEditable, _Wrap);

  function ContentEditable() {
    _classCallCheck(this, ContentEditable);

    return _possibleConstructorReturn(this, (ContentEditable.__proto__ || Object.getPrototypeOf(ContentEditable)).apply(this, arguments));
  }

  _createClass(ContentEditable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reduxForm.Field, _extends({
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