'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Plain = function (_Component) {
  _inherits(Plain, _Component);

  function Plain() {
    _classCallCheck(this, Plain);

    return _possibleConstructorReturn(this, (Plain.__proto__ || Object.getPrototypeOf(Plain)).apply(this, arguments));
  }

  _createClass(Plain, [{
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
        return _react2.default.createElement('div', _extends({ dangerouslySetInnerHTML: createMarkup(this.props.field.value) }, (0, _pick3.default)(this.props.field, ['className', 'style', 'id', 'onClick', 'rel'])));
      }

      if ((0, _isObject3.default)(this.props.field.value)) {
        return this.props.field.value;
      }

      return null;
    }
  }]);

  return Plain;
}(_react.Component);

Plain.propTypes = {
  'field': _propTypes2.default.object.isRequired,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func
};
exports.default = Plain;