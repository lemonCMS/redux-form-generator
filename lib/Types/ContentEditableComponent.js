'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentEditable = function (_React$Component) {
  (0, _inherits3.default)(ContentEditable, _React$Component);

  function ContentEditable() {
    (0, _classCallCheck3.default)(this, ContentEditable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ContentEditable.__proto__ || (0, _getPrototypeOf2.default)(ContentEditable)).call(this));

    _this.emitChange = _this.emitChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ContentEditable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tagName = _props.tagName,
          html = _props.html,
          props = (0, _objectWithoutProperties3.default)(_props, ['tagName', 'html']);


      return _react2.default.createElement(tagName || 'div', (0, _extends3.default)({}, props, {
        ref: function ref(e) {
          return _this2.htmlEl = e;
        },
        onInput: this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: { __html: html }
      }), this.props.children);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      // We need not rerender if the change of props simply reflects the user's
      // edits. Rerendering in this case would make the cursor/caret jump.
      return (
        // Rerender if there is no element yet... (somehow?)
        !this.htmlEl
        // ...or if html really changed... (programmatically, not by user edit)
        || nextProps.html !== this.htmlEl.innerHTML && nextProps.html !== this.props.html
        // ...or if editing is enabled or disabled.
        || this.props.disabled !== nextProps.disabled
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
        // Perhaps React (whose VDOM gets outdated because we often prevent
        // rerendering) did not update the DOM. So we update it manually now.
        this.htmlEl.innerHTML = this.props.html;
      }
    }
  }, {
    key: 'emitChange',
    value: function emitChange(evt) {
      if (!this.htmlEl) return;
      var html = this.htmlEl.innerHTML;
      if (this.props.onChange && html !== this.lastHtml) {
        evt.target = { value: html };
        this.props.onChange(evt);
      }
      this.lastHtml = html;
    }
  }]);
  return ContentEditable;
}(_react2.default.Component);

exports.default = ContentEditable;
module.exports = exports['default'];