'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global tinymce */

// TinyMCE semi-controlled component.
//
// Limitations/Notes
// * `tinymce` be defined in the global scope.
// * `ignoreUpdatesWhenFocused` - sometimes TinyMCE has issues with cursor placement. This component tries very
//     hard to avoid such issues, but if the come up, this prop might help. Set it to true and the component
//     will only update the TinyMCE editor from new props when it does not have focus.
// * `onChange` - this is the main event you will want to handle. Note: unlike normal React onChange events,
//     it does not use a SyntheticEvent based event. It simply passes up the changed content.
// * events - the component listens for several events and maps them to something more React-like (ex. blur
//     => onBlur). Any event that changes the content should trigger both the original event plus onChange.
//     The event handler will receive the original tinymce event as a param.
//     [init, activate, deactivate, focus, blur, hide, remove reset, show, submit]
// * level of control - tinymce does not trigger an event on every character change. We could try binding to
//     a keyboard event. However, we have found that, in practice, getting changes in TinyMCE time is good enoug.
//     If you are trying to write a control that need per-character eventing, ex. a component that allows
//     multiple editors to work on the input at the same time, tinymce may not be right for you.

var DIRECT_PASSTHROUGH_EVENTS = ['Activate', 'Deactivate', 'Focus', 'Hide', 'Init', 'Remove', 'Reset', 'Show', 'Submit', 'Click'];
var PSEUDO_HIDDEN = { position: 'absolute', left: -200, top: -200, height: 0 };

var TinyMCEInput = function (_React$Component) {
  _inherits(TinyMCEInput, _React$Component);

  function TinyMCEInput() {
    _classCallCheck(this, TinyMCEInput);

    var _this = _possibleConstructorReturn(this, (TinyMCEInput.__proto__ || Object.getPrototypeOf(TinyMCEInput)).call(this));

    _this.setupPassthroughEvents = _this.setupPassthroughEvents.bind(_this);
    _this.setupEditor = _this.setupEditor.bind(_this);
    _this.createMCEContextForComponent = _this.createMCEContextForComponent.bind(_this);
    _this.initTinyMCE = _this.initTinyMCE.bind(_this);
    _this.clearDropOverride = _this.clearDropOverride.bind(_this);
    _this.flagDropOverride = _this.flagDropOverride.bind(_this);
    _this.isDropOverrideFlagged = _this.isDropOverrideFlagged.bind(_this);
    _this.syncChange = _this.syncChange.bind(_this);
    _this.triggerEventHandler = _this.triggerEventHandler.bind(_this);
    _this.checkForChanges = _this.checkForChanges.bind(_this);
    _this.onTinyMCEChange = _this.onTinyMCEChange.bind(_this);
    _this.onTinyMCEBlur = _this.onTinyMCEBlur.bind(_this);
    _this.onTinyMCEUndo = _this.onTinyMCEUndo.bind(_this);
    _this.onTinyMCERedo = _this.onTinyMCERedo.bind(_this);
    _this.onTinyMCEDrop = _this.onTinyMCEDrop.bind(_this);
    _this.onTextareaChange = _this.onTextareaChange.bind(_this);
    _this.getContainerID = _this.getContainerID.bind(_this);
    _this.state = {
      id: (0, _uuid2.default)()
    };
    _this.component = null;
    _this.componentId = null;
    return _this;
  }

  _createClass(TinyMCEInput, [{
    key: 'getComponentID',
    value: function getComponentID() {
      return this.componentId || (this.componentId = this.component.getAttribute('id'));
    }
  }, {
    key: 'getContainerID',
    value: function getContainerID() {
      return this.props.id || this.state.id;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ value: this.props.value || '' });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initStartTime = Date.now();
      if (typeof tinymce !== 'undefined') {
        this.initTinyMCE();
      } else {
        this.initTimeout = setTimeout(this.initTinyMCE, 100);
      }
      this.updateInterval = setInterval(this.checkForChanges, this.props.pollInterval);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.focus) {
        var editor = tinymce.get(this.getComponentID());
        if (editor) {
          editor.focus();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      tinymce.remove(this.getComponentID());
      clearTimeout(this.initTimeout);
      clearInterval(this.updateInterval);
      this.initTimeout = undefined;
      this.initStartTime = undefined;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value) {
        var editor = tinymce.get(this.getComponentID());
        if (editor) {
          if (!this.props.ignoreUpdatesWhenFocused || tinymce.focusedEditor !== editor || this.isDropOverrideFlagged()) {
            var bookmark = editor.selection.getBookmark(2, true);
            editor.setContent(nextProps.value);
            editor.selection.moveToBookmark(bookmark);
          }
        }
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'setupPassthroughEvents',
    value: function setupPassthroughEvents(editor) {
      var _this2 = this;

      DIRECT_PASSTHROUGH_EVENTS.map(function (event) {
        editor.on(event.toLowerCase(), function (tinyMCEEvent) {
          var handler = _this2.props['on' + event];
          if (typeof handler === 'function') {
            handler(tinyMCEEvent);
          }
        });
      });

      var handlers = this.props.otherEventHandlers;
      Object.keys(handlers).map(function (key, index) {
        editor.on(index, key);
      });
    }
  }, {
    key: 'setupEditor',
    value: function setupEditor(editor) {
      editor.on('change', this.onTinyMCEChange);
      editor.on('blur', this.onTinyMCEBlur);
      editor.on('drop', this.onTinyMCEDrop);
      editor.on('undo', this.onTinyMCEUndo);
      editor.on('redo', this.onTinyMCERedo);
      this.setupPassthroughEvents(editor);

      if (this.props.onSetupEditor) {
        this.props.onSetupEditor(editor);
      }

      if (this.props.focus) {
        editor.focus();
      }
      this.initTimeout = undefined;
    }
  }, {
    key: 'createMCEContextForComponent',
    value: function createMCEContextForComponent() {
      var tinymceConfig = Object.assign({}, this.props.tinymceConfig, {
        selector: '#' + this.getContainerID(),
        setup: this.setupEditor
      });
      tinymce.init(tinymceConfig);
    }
  }, {
    key: 'initTinyMCE',
    value: function initTinyMCE() {
      var currentTime = Date.now();
      if (!tinymce) {
        if (currentTime - this.initStartTime > this.props.maxInitWaitTime) {
          this.initTimeout = undefined;
        } else {
          this.initTimeout = setTimeout(this.initTinyMCE, 100);
        }
      } else {
        this.createMCEContextForComponent();
        this.initTimeout = undefined;
      }
    }
  }, {
    key: 'clearDropOverride',
    value: function clearDropOverride() {
      this._tempDropOverride = undefined;
      var editor = tinymce.get(this.getComponentID());
      if (editor) {
        this.syncChange(editor.getContent());
      }
    }
  }, {
    key: 'flagDropOverride',
    value: function flagDropOverride() {
      this._tempDropOverride = true;
      if (this._tempDropOverrideTimeout) {
        clearTimeout(this.clearDropOverride);
      }
      this._tempDropOverrideTimeout = setTimeout(this.clearDropOverride, 250);
    }
  }, {
    key: 'isDropOverrideFlagged',
    value: function isDropOverrideFlagged() {
      return this._tempDropOverride;
    }
  }, {
    key: 'syncChange',
    value: function syncChange(newValue) {
      if (newValue !== this.state.value) {
        if (this.props.onChange) {
          this.props.onChange(newValue);
        }
        this.setState({ value: newValue });
      }
    }
  }, {
    key: 'triggerEventHandler',
    value: function triggerEventHandler(handler, event) {
      if (handler) {
        handler(event);
      }
    }
  }, {
    key: 'checkForChanges',
    value: function checkForChanges() {
      var editor = tinymce.get(this.getComponentID());
      if (tinymce.focusedEditor === editor) {
        var content = editor.getContent();
        if (content !== this.state.value) {
          this.syncChange(content);
        }
      }
    }
  }, {
    key: 'onTinyMCEChange',
    value: function onTinyMCEChange(tinyMCEEvent) {
      this.syncChange(tinyMCEEvent.target.getContent());
    }
  }, {
    key: 'onTinyMCEBlur',
    value: function onTinyMCEBlur(tinyMCEEvent) {
      this.triggerEventHandler(this.props.onBlur, tinyMCEEvent);
      if (this.props.ignoreUpdatesWhenFocused) {
        // if we have been ignoring updates while focused (to preserve cursor position)
        // sync them now that we no longer have focus.
        tinyMCEEvent.target.setContent(this.state.value);
      }
    }
  }, {
    key: 'onTinyMCEUndo',
    value: function onTinyMCEUndo(tinyMCEEvent) {
      this.triggerEventHandler(this.props.onUndo, tinyMCEEvent);
      this.syncChange(tinyMCEEvent.target.getContent());
    }
  }, {
    key: 'onTinyMCERedo',
    value: function onTinyMCERedo(tinyMCEEvent) {
      this.triggerEventHandler(this.props.onRedo, tinyMCEEvent);
      this.syncChange(tinyMCEEvent.target.getContent());
    }
  }, {
    key: 'onTinyMCEDrop',
    value: function onTinyMCEDrop() {
      // We want to process updates just after a drop, even if processUpdatesWhenFocused
      // is false. The processUpdatesWhenFocused flag exists to keep the cursor from
      // jumping around, and we do not cares so much if the cursor jumps after dropping
      // an image because that is a mouse event. However, ignoring updates right after a
      // drop means that anything that relies on knowing the content has changed is
      // won't actually know.
      this.flagDropOverride();
    }
  }, {
    key: 'onTextareaChange',
    value: function onTextareaChange(e) {
      // should only be called when tinymce failed to load and we are getting changes directly in the textarea (fallback mode?)
      this.syncChange(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // the textarea is controlled by tinymce... and react, neither of which agree on the value
      // solution: keep a separate input element, controlled by just react, that will actually be submitted
      var Component = this.props.component;
      return _react2.default.createElement(
        'div',
        { className: this.props.className, style: this.props.style },
        _react2.default.createElement('input', { key: 0, type: 'hidden', name: this.props.name, value: this.state.value, readOnly: true }),
        _react2.default.createElement(Component, _extends({
          key: 1,
          id: this.getContainerID(),
          defaultValue: this.state.value,
          onChange: this.onTextareaChange,
          rows: this.props.rows,
          style: this.props.tinymceConfig.inline ? {} : PSEUDO_HIDDEN
        }, this.props.textareaProps, {
          ref: function ref(_ref) {
            return _this3.component = _ref;
          }
        }))
      );
    }
  }]);

  return TinyMCEInput;
}(_react2.default.Component);

TinyMCEInput.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  tinymceConfig: _propTypes2.default.object.isRequired,
  name: _propTypes2.default.string, // the form name for the input element
  component: _propTypes2.default.string,
  value: _propTypes2.default.string,
  rows: _propTypes2.default.number,
  focus: _propTypes2.default.bool, // focus the tinymce element if not already focused
  maxInitWaitTime: _propTypes2.default.number, // [20000] maximum amount of time to wait, in ms, for tinymce to create an editor before giving up
  style: _propTypes2.default.object,
  ignoreUpdatesWhenFocused: _propTypes2.default.bool, // tinymce can sometimes have cursor position issues on updates, if you app does not need live updates from the backing model, then set the prop and it will only update when the editor does not have focus

  pollInterval: _propTypes2.default.number.isRequired, // [1000] inteval to wait between polling for changes in tinymce editor (since blur does not always work), changes are then synced if the editor is focused

  // intercepted events
  onChange: _propTypes2.default.func.isRequired, // this is a controlled component, we require onChange
  onBlur: _propTypes2.default.func,
  onSetupEditor: _propTypes2.default.func,

  // direct pass through events
  onActivate: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onDeactivate: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  onInit: _propTypes2.default.func,
  onRedo: _propTypes2.default.func,
  onRemove: _propTypes2.default.func,
  onReset: _propTypes2.default.func,
  onShow: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onUndo: _propTypes2.default.func,

  textareaProps: _propTypes2.default.object.isRequired, // props passed through to the textarea
  otherEventHandlers: _propTypes2.default.objectOf(_propTypes2.default.func.isRequired).isRequired

};
TinyMCEInput.defaultProps = {
  tinymceConfig: {},
  maxInitWaitTime: 20000,
  pollInterval: 1000,
  textareaProps: {},
  otherEventHandlers: {},
  onChange: function onChange() {},
  component: 'textarea'

};
exports.default = TinyMCEInput;