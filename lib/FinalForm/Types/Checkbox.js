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

var _reactFinalForm = require('react-final-form');

var _WrapListMulti2 = require('./WrapListMulti');

var _WrapListMulti3 = _interopRequireDefault(_WrapListMulti2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_WrapListMulti) {
  _inherits(Checkbox, _WrapListMulti);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      // Added the search property, to trigger render on filter
      return _react2.default.createElement(_reactFinalForm.Field, _extends({
        component: this.renderField
      }, (0, _omit3.default)(this.props.field, ['disabled', 'hidden', 'type']), {
        size: this.props.size,
        search: this.state.value,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled,
        checkHidden: this.props.checkHidden,
        checkShow: this.props.checkShow
      }));
    }
  }]);

  return Checkbox;
}(_WrapListMulti3.default);

Checkbox.propTypes = {
  'dispatch': _propTypes2.default.func,
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'size': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'locale': _propTypes2.default.object
};
Checkbox.defaultProps = {};

exports.default = Checkbox;