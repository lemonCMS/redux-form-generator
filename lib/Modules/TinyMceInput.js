(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "uuid"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("uuid"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.uuid);
    global.TinyMceInput = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _uuid) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _uuid = _interopRequireDefault(_uuid);
  var _jsxFileName = "example/app/components/Form/Modules/TinyMceInput.jsx";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var DIRECT_PASSTHROUGH_EVENTS = ['Activate', 'Deactivate', 'Focus', 'Hide', 'Init', 'Remove', 'Reset', 'Show', 'Submit', 'Click'];
  var PSEUDO_HIDDEN = {
    position: 'absolute',
    left: -200,
    top: -200,
    height: 0
  };

  var TinyMCEInput =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(TinyMCEInput, _React$Component);

    function TinyMCEInput() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.setupPassthroughEvents = _this.setupPassthroughEvents.bind(_assertThisInitialized(_this));
      _this.setupEditor = _this.setupEditor.bind(_assertThisInitialized(_this));
      _this.createMCEContextForComponent = _this.createMCEContextForComponent.bind(_assertThisInitialized(_this));
      _this.initTinyMCE = _this.initTinyMCE.bind(_assertThisInitialized(_this));
      _this.clearDropOverride = _this.clearDropOverride.bind(_assertThisInitialized(_this));
      _this.flagDropOverride = _this.flagDropOverride.bind(_assertThisInitialized(_this));
      _this.isDropOverrideFlagged = _this.isDropOverrideFlagged.bind(_assertThisInitialized(_this));
      _this.syncChange = _this.syncChange.bind(_assertThisInitialized(_this));
      _this.triggerEventHandler = _this.triggerEventHandler.bind(_assertThisInitialized(_this));
      _this.checkForChanges = _this.checkForChanges.bind(_assertThisInitialized(_this));
      _this.onTinyMCEChange = _this.onTinyMCEChange.bind(_assertThisInitialized(_this));
      _this.onTinyMCEBlur = _this.onTinyMCEBlur.bind(_assertThisInitialized(_this));
      _this.onTinyMCEUndo = _this.onTinyMCEUndo.bind(_assertThisInitialized(_this));
      _this.onTinyMCERedo = _this.onTinyMCERedo.bind(_assertThisInitialized(_this));
      _this.onTinyMCEDrop = _this.onTinyMCEDrop.bind(_assertThisInitialized(_this));
      _this.onTextareaChange = _this.onTextareaChange.bind(_assertThisInitialized(_this));
      _this.getContainerID = _this.getContainerID.bind(_assertThisInitialized(_this));
      _this.state = {
        id: (0, _uuid.default)()
      };
      _this.component = null;
      _this.componentId = null;
      return _this;
    }

    var _proto = TinyMCEInput.prototype;

    _proto.getComponentID = function getComponentID() {
      return this.componentId || (this.componentId = this.component.getAttribute('id'));
    };

    _proto.getContainerID = function getContainerID() {
      return this.props.id || this.state.id;
    };

    _proto.componentWillMount = function componentWillMount() {
      this.setState({
        value: this.props.value || ''
      });
    };

    _proto.componentDidMount = function componentDidMount() {
      this.initStartTime = Date.now();

      if (typeof tinymce !== 'undefined') {
        this.initTinyMCE();
      } else {
        this.initTimeout = setTimeout(this.initTinyMCE, 100);
      }

      this.updateInterval = setInterval(this.checkForChanges, this.props.pollInterval);
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      if (this.props.focus) {
        var editor = tinymce.get(this.getComponentID());

        if (editor) {
          editor.focus();
        }
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      tinymce.remove(this.getComponentID());
      clearTimeout(this.initTimeout);
      clearInterval(this.updateInterval);
      this.initTimeout = undefined;
      this.initStartTime = undefined;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value) {
        var editor = tinymce.get(this.getComponentID());

        if (editor) {
          if (!this.props.ignoreUpdatesWhenFocused || tinymce.focusedEditor !== editor || this.isDropOverrideFlagged()) {
            var bookmark = editor.selection.getBookmark(2, true);
            editor.setContent(nextProps.value);
            editor.selection.moveToBookmark(bookmark);
          }
        }

        this.setState({
          value: nextProps.value
        });
      }
    };

    _proto.setupPassthroughEvents = function setupPassthroughEvents(editor) {
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
    };

    _proto.setupEditor = function setupEditor(editor) {
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
    };

    _proto.createMCEContextForComponent = function createMCEContextForComponent() {
      var tinymceConfig = Object.assign({}, this.props.tinymceConfig, {
        selector: "#" + this.getContainerID(),
        setup: this.setupEditor
      });
      tinymce.init(tinymceConfig);
    };

    _proto.initTinyMCE = function initTinyMCE() {
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
    };

    _proto.clearDropOverride = function clearDropOverride() {
      this._tempDropOverride = undefined;
      var editor = tinymce.get(this.getComponentID());

      if (editor) {
        this.syncChange(editor.getContent());
      }
    };

    _proto.flagDropOverride = function flagDropOverride() {
      this._tempDropOverride = true;

      if (this._tempDropOverrideTimeout) {
        clearTimeout(this.clearDropOverride);
      }

      this._tempDropOverrideTimeout = setTimeout(this.clearDropOverride, 250);
    };

    _proto.isDropOverrideFlagged = function isDropOverrideFlagged() {
      return this._tempDropOverride;
    };

    _proto.syncChange = function syncChange(newValue) {
      if (newValue !== this.state.value) {
        if (this.props.onChange) {
          this.props.onChange(newValue);
        }

        this.setState({
          value: newValue
        });
      }
    };

    _proto.triggerEventHandler = function triggerEventHandler(handler, event) {
      if (handler) {
        handler(event);
      }
    };

    _proto.checkForChanges = function checkForChanges() {
      var editor = tinymce.get(this.getComponentID());

      if (tinymce.focusedEditor === editor) {
        var content = editor.getContent();

        if (content !== this.state.value) {
          this.syncChange(content);
        }
      }
    };

    _proto.onTinyMCEChange = function onTinyMCEChange(tinyMCEEvent) {
      this.syncChange(tinyMCEEvent.target.getContent());
    };

    _proto.onTinyMCEBlur = function onTinyMCEBlur(tinyMCEEvent) {
      this.triggerEventHandler(this.props.onBlur, tinyMCEEvent);

      if (this.props.ignoreUpdatesWhenFocused) {
        // if we have been ignoring updates while focused (to preserve cursor position)
        // sync them now that we no longer have focus.
        tinyMCEEvent.target.setContent(this.state.value);
      }
    };

    _proto.onTinyMCEUndo = function onTinyMCEUndo(tinyMCEEvent) {
      this.triggerEventHandler(this.props.onUndo, tinyMCEEvent);
      this.syncChange(tinyMCEEvent.target.getContent());
    };

    _proto.onTinyMCERedo = function onTinyMCERedo(tinyMCEEvent) {
      this.triggerEventHandler(this.props.onRedo, tinyMCEEvent);
      this.syncChange(tinyMCEEvent.target.getContent());
    };

    _proto.onTinyMCEDrop = function onTinyMCEDrop() {
      // We want to process updates just after a drop, even if processUpdatesWhenFocused
      // is false. The processUpdatesWhenFocused flag exists to keep the cursor from
      // jumping around, and we do not cares so much if the cursor jumps after dropping
      // an image because that is a mouse event. However, ignoring updates right after a
      // drop means that anything that relies on knowing the content has changed is
      // won't actually know.
      this.flagDropOverride();
    };

    _proto.onTextareaChange = function onTextareaChange(e) {
      // should only be called when tinymce failed to load and we are getting changes directly in the textarea (fallback mode?)
      this.syncChange(e.target.value);
    };

    _proto.render = function render() {
      var _this3 = this;

      // the textarea is controlled by tinymce... and react, neither of which agree on the value
      // solution: keep a separate input element, controlled by just react, that will actually be submitted
      var Component = this.props.component;
      return _react.default.createElement("div", {
        className: this.props.className,
        style: this.props.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, _react.default.createElement("input", {
        key: 0,
        type: "hidden",
        name: this.props.name,
        value: this.state.value,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }), _react.default.createElement(Component, _extends({
        key: 1,
        id: this.getContainerID(),
        defaultValue: this.state.value,
        onChange: this.onTextareaChange,
        rows: this.props.rows,
        style: this.props.tinymceConfig.inline ? {} : PSEUDO_HIDDEN
      }, this.props.textareaProps, {
        ref: function ref(_ref) {
          return _this3.component = _ref;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      })));
    };

    return TinyMCEInput;
  }(_react.default.Component);

  Object.defineProperty(TinyMCEInput, "propTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      id: _propTypes.default.string,
      className: _propTypes.default.string,
      tinymceConfig: _propTypes.default.object.isRequired,
      name: _propTypes.default.string,
      // the form name for the input element
      component: _propTypes.default.string,
      value: _propTypes.default.string,
      rows: _propTypes.default.number,
      focus: _propTypes.default.bool,
      // focus the tinymce element if not already focused
      maxInitWaitTime: _propTypes.default.number,
      // [20000] maximum amount of time to wait, in ms, for tinymce to create an editor before giving up
      style: _propTypes.default.object,
      ignoreUpdatesWhenFocused: _propTypes.default.bool,
      // tinymce can sometimes have cursor position issues on updates, if you app does not need live updates from the backing model, then set the prop and it will only update when the editor does not have focus
      pollInterval: _propTypes.default.number.isRequired,
      // [1000] inteval to wait between polling for changes in tinymce editor (since blur does not always work), changes are then synced if the editor is focused
      // intercepted events
      onChange: _propTypes.default.func.isRequired,
      // this is a controlled component, we require onChange
      onBlur: _propTypes.default.func,
      onSetupEditor: _propTypes.default.func,
      // direct pass through events
      onActivate: _propTypes.default.func,
      onClick: _propTypes.default.func,
      onDeactivate: _propTypes.default.func,
      onFocus: _propTypes.default.func,
      onHide: _propTypes.default.func,
      onInit: _propTypes.default.func,
      onRedo: _propTypes.default.func,
      onRemove: _propTypes.default.func,
      onReset: _propTypes.default.func,
      onShow: _propTypes.default.func,
      onSubmit: _propTypes.default.func,
      onUndo: _propTypes.default.func,
      textareaProps: _propTypes.default.object.isRequired,
      // props passed through to the textarea
      otherEventHandlers: _propTypes.default.objectOf(_propTypes.default.func.isRequired).isRequired
    }
  });
  Object.defineProperty(TinyMCEInput, "defaultProps", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      tinymceConfig: {},
      maxInitWaitTime: 20000,
      pollInterval: 1000,
      textareaProps: {},
      otherEventHandlers: {},
      onChange: function onChange() {},
      component: 'textarea'
    }
  });
  var _default = TinyMCEInput;
  _exports.default = _default;
});