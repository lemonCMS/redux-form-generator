(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash/has", "lodash/map", "lodash/get", "lodash/pick", "lodash/filter", "lodash/isFunction", "react-bootstrap/lib/Col", "react-bootstrap/lib/FormControl", "react-bootstrap/lib/InputGroup", "react-bootstrap/lib/FormGroup", "react-bootstrap/lib/ControlLabel", "react-bootstrap/lib/HelpBlock", "react-bootstrap/lib/MenuItem", "react-bootstrap/lib/DropdownButton", "react-final-form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash/has"), require("lodash/map"), require("lodash/get"), require("lodash/pick"), require("lodash/filter"), require("lodash/isFunction"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/FormControl"), require("react-bootstrap/lib/InputGroup"), require("react-bootstrap/lib/FormGroup"), require("react-bootstrap/lib/ControlLabel"), require("react-bootstrap/lib/HelpBlock"), require("react-bootstrap/lib/MenuItem"), require("react-bootstrap/lib/DropdownButton"), require("react-final-form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.has, global.map, global.get, global.pick, global.filter, global.isFunction, global.Col, global.FormControl, global.InputGroup, global.FormGroup, global.ControlLabel, global.HelpBlock, global.MenuItem, global.DropdownButton, global.reactFinalForm);
    global.Wrap = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _has2, _map2, _get2, _pick2, _filter2, _isFunction2, _Col, _FormControl, _InputGroup, _FormGroup, _ControlLabel, _HelpBlock, _MenuItem, _DropdownButton, _reactFinalForm) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _has2 = _interopRequireDefault(_has2);
  _map2 = _interopRequireDefault(_map2);
  _get2 = _interopRequireDefault(_get2);
  _pick2 = _interopRequireDefault(_pick2);
  _filter2 = _interopRequireDefault(_filter2);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _Col = _interopRequireDefault(_Col);
  _FormControl = _interopRequireDefault(_FormControl);
  _InputGroup = _interopRequireDefault(_InputGroup);
  _FormGroup = _interopRequireDefault(_FormGroup);
  _ControlLabel = _interopRequireDefault(_ControlLabel);
  _HelpBlock = _interopRequireDefault(_HelpBlock);
  _MenuItem = _interopRequireDefault(_MenuItem);
  _DropdownButton = _interopRequireDefault(_DropdownButton);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var Wrap =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Wrap, _React$Component);

    function Wrap() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.input = {};
      _this.custom = {};
      _this.dropdownButton = _this.dropdownButton.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.dropDown = _this.dropDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.renderField = _this.renderField.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.options = _this.options.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    var _proto = Wrap.prototype;

    _proto.options = function options(props) {
      if (props.type === 'select') {
        return this.props.children;
      }
    };

    _proto.dropDown = function dropDown(props) {
      var _this2 = this;

      var menuItem = [];
      var dropDownTitle = null;
      (0, _map2.default)(props.field.children, function (item, key) {
        var select = function select() {
          _this2.input.onBlur();

          _this2.input.onChange(item.props.value);
        };

        if (item.props.selected && !props.input.value) {
          dropDownTitle = item.props.children;
          menuItem.push(_react.default.createElement(_MenuItem.default, {
            key: key,
            onSelect: select
          }, item.props.children));
          menuItem.push(_react.default.createElement(_MenuItem.default, {
            key: key + '_div',
            divider: true
          }));
        } else {
          if (String(_this2.input.value) === String(item.props.value)) {
            dropDownTitle = item.props.children;
          }

          menuItem.push(_react.default.createElement(_MenuItem.default, {
            key: key,
            onSelect: select
          }, item.props.children));
        }
      });
      return {
        dropDownTitle: dropDownTitle,
        menuItem: menuItem
      };
    };

    _proto.dropdownButton = function dropdownButton(props, isStatic) {
      var _this$dropDown = this.dropDown(props),
          dropDownTitle = _this$dropDown.dropDownTitle,
          menuItem = _this$dropDown.menuItem;

      var size = (0, _get2.default)(props.field, 'bsSize', this.props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return {
            bsSize: size
          };
        }
      };

      var disabled = false;

      if (props.field && props.field.disabled && (0, _isFunction2.default)(props.field.disabled)) {
        disabled = this.context.checkDisabled(props.field.disabled());
      }

      if (isStatic === true || disabled === true) {
        return _react.default.createElement(_FormControl.default.Static, null, dropDownTitle || (0, _get2.default)(props.field, 'placeholder'));
      }

      return _react.default.createElement(_DropdownButton.default, _extends({
        key: this.input.name,
        onClick: function onClick(event) {
          event.preventDefault();
        }
      }, thisSize(), {
        title: dropDownTitle || (0, _get2.default)(props.field, 'placeholder'),
        id: 'input-dropdown-addon' + this.input.name
      }), menuItem);
    };

    _proto.renderField = function renderField(props) {
      var _this3 = this;

      var input = props.input,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          submitError = _props$meta.submitError,
          submitFailed = _props$meta.submitFailed,
          valid = _props$meta.valid,
          custom = _objectWithoutProperties(props, ["input", "help", "meta"]);

      this.input = input;
      var size = (0, _get2.default)(props.field, 'bsSize', this.props.size);

      if (props.field && props.field.hidden && (0, _isFunction2.default)(props.field.hidden)) {
        if (this.context.checkHidden(props.field.hidden, (0, _get2.default)(props, 'parent')) === true) {
          return null;
        }
      } else if (props.field && props.field.show && (0, _isFunction2.default)(props.field.show)) {
        if (this.context.checkShow(props.field.show, (0, _get2.default)(props, 'parent')) !== true) {
          return null;
        }
      }

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return {
            bsSize: size
          };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has2.default)(props.field, 'labelSize')) {
          return props.field.labelSize;
        }

        if (_this3.props.horizontal) {
          return {
            sm: 2
          };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has2.default)(props.field, 'fieldSize')) {
          return props.field.fieldSize;
        }

        if (_this3.props.horizontal) {
          return {
            sm: 10
          };
        }

        return {
          style: {
            position: 'relative'
          }
        };
      };

      var add = (0, _pick2.default)(custom, ['type', 'placeholder', 'rows', 'cols']);

      if (add.type === 'select') {
        add.componentClass = 'select';
      }

      if (custom.disabled && (0, _isFunction2.default)(custom.disabled)) {
        add.disabled = this.context.checkDisabled(custom.disabled(), (0, _get2.default)(props, 'parent'));
      }

      var component = function component() {
        // Render custom component
        if (_this3.props.component) {
          var Comp = _this3.props.component;
          return _react.default.createElement(Comp, props);
        }

        if (_this3.context.isStatic === true || (0, _get2.default)(props.field, 'static', false) === true) {
          var value = function value() {
            if (props.field.type === 'select') {
              return (0, _map2.default)((0, _filter2.default)(props.field.options, {
                value: _this3.input.value
              }), function (item, key) {
                return _react.default.createElement("span", {
                  key: key
                }, item.desc);
              });
            }

            return _this3.input.value;
          };

          switch (props.type) {
            case 'dropdown':
              return _this3.dropdownButton(props, true);

            default:
              {
                return _react.default.createElement(_FormControl.default.Static, null, value());
              }
          }
        }

        switch (props.field.type) {
          case 'dropdown':
            return _this3.dropdownButton(props, false);

          case 'textarea':
            return _react.default.createElement(_FormControl.default, _extends({
              componentClass: "textarea"
            }, input, add));

          case 'select':
            return _react.default.createElement(_FormControl.default, _extends({
              componentClass: "textarea"
            }, input, add), _this3.options(props));

          default:
            return _react.default.createElement(_FormControl.default, _extends({}, input, add));
        }
      };

      var validationState = function validationState() {
        if (touched && error || submitFailed && submitError) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

      var buttonBefore = function buttonBefore() {
        if ((0, _has2.default)(props.field, 'buttonBefore')) {
          if (props.field.buttonBefore.type === 'button') {
            return _react.default.createElement(_InputGroup.default.Button, null, _this3.props.addField(props.field.buttonBefore, 1, size));
          }

          return _react.default.createElement(_InputGroup.default.Button, null, _this3.props.addField(props.field.buttonBefore, 1, size));
        }
      };

      var buttonAfter = function buttonAfter() {
        if ((0, _has2.default)(props.field, 'buttonAfter')) {
          if (props.field.buttonAfter.type) {
            return _react.default.createElement(_InputGroup.default.Button, null, _this3.props.addField(props.field.buttonAfter, 1, size));
          }

          return _this3.props.addField(props.field.buttonAfter, 1, size);
        }
      };

      var addonBefore = function addonBefore() {
        if ((0, _has2.default)(props.field, 'addonBefore')) {
          return _react.default.createElement(_InputGroup.default.Addon, null, (0, _get2.default)(props.field, 'addonBefore'));
        }
      };

      var addonAfter = function addonAfter() {
        if ((0, _has2.default)(props.field, 'addonAfter')) {
          return _react.default.createElement(_InputGroup.default.Addon, null, (0, _get2.default)(props.field, 'addonAfter'));
        }
      };

      var getField = function getField() {
        if ((0, _has2.default)(props.field, 'addonBefore') || (0, _has2.default)(props.field, 'addonAfter') || (0, _has2.default)(props.field, 'buttonBefore') || (0, _has2.default)(props.field, 'buttonAfter')) {
          return _react.default.createElement(_InputGroup.default, null, buttonBefore(), addonBefore(), component(), addonAfter(), buttonAfter());
        }

        return component();
      };

      if (props.type === 'dropDown' && !(0, _has2.default)(props.field, 'label')) {
        return getField();
      }

      var getLabel = function getLabel() {
        if (props.field.label) {
          return _react.default.createElement(_Col.default, _extends({
            componentClass: _ControlLabel.default
          }, labelSize()), props.field.label);
        }
      };

      return _react.default.createElement(_FormGroup.default, _extends({}, thisSize(), {
        validationState: validationState()
      }), getLabel(), _react.default.createElement(_Col.default, fieldSize(), getField(), (touched && error || submitFailed && submitError) && _react.default.createElement(_FormControl.default.Feedback, null), props.field.help && (!touched || !submitError && !error) && _react.default.createElement(_HelpBlock.default, null, props.field.help), (touched && error || submitFailed && submitError) && _react.default.createElement(_HelpBlock.default, null, submitError || error)));
    };

    _proto.render = function render() {
      var _this$props = this.props,
          name = _this$props.name,
          rest = _objectWithoutProperties(_this$props, ["name"]);

      return _react.default.createElement(_reactFinalForm.Field, {
        component: this.renderField,
        type: this.props.type,
        name: name,
        field: rest
      });
    };

    return Wrap;
  }(_react.default.Component);

  Wrap.propTypes = {
    'field': _propTypes.default.object,
    'size': _propTypes.default.string,
    'addField': _propTypes.default.func,
    'static': _propTypes.default.bool,
    'horizontal': _propTypes.default.bool,
    'name': _propTypes.default.string.isRequired,
    type: _propTypes.default.string.isRequired,
    component: _propTypes.default.func,
    children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array])
  };
  Wrap.contextTypes = {
    checkDisabled: _propTypes.default.func.isRequired,
    checkHidden: _propTypes.default.func.isRequired,
    checkShow: _propTypes.default.func.isRequired,
    isStatic: _propTypes.default.bool.isRequired
  };
  Wrap.defaultProps = {};
  var _default = Wrap;
  _exports.default = _default;
});