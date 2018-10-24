(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.ContentEditableComponent = mod.exports;
  }
})(this, function (_exports, _react) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var ContentEditable =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ContentEditable, _React$Component);

    function ContentEditable() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.emitChange = _this.emitChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    var _proto = ContentEditable.prototype;

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          tagName = _this$props.tagName,
          html = _this$props.html,
          props = _objectWithoutProperties(_this$props, ["tagName", "html"]);

      return _react.default.createElement(tagName || 'div', _objectSpread({}, props, {
        ref: function ref(e) {
          return _this2.htmlEl = e;
        },
        onInput: this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: {
          __html: html
        }
      }), this.props.children);
    };

    _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      // We need not rerender if the change of props simply reflects the user's
      // edits. Rerendering in this case would make the cursor/caret jump.
      return (// Rerender if there is no element yet... (somehow?)
        !this.htmlEl // ...or if html really changed... (programmatically, not by user edit)
        || nextProps.html !== this.htmlEl.innerHTML && nextProps.html !== this.props.html // ...or if editing is enabled or disabled.
        || this.props.disabled !== nextProps.disabled
      );
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
        // Perhaps React (whose VDOM gets outdated because we often prevent
        // rerendering) did not update the DOM. So we update it manually now.
        this.htmlEl.innerHTML = this.props.html;
      }
    };

    _proto.emitChange = function emitChange(evt) {
      if (!this.htmlEl) return;
      var html = this.htmlEl.innerHTML;

      if (this.props.onChange && html !== this.lastHtml) {
        evt.target = {
          value: html
        };
        this.props.onChange(evt);
      }

      this.lastHtml = html;
    };

    return ContentEditable;
  }(_react.default.Component);

  _exports.default = ContentEditable;
});