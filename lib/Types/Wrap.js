(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash/has", "lodash/map", "lodash/get", "lodash/pick", "lodash/filter", "lodash/isFunction", "react-bootstrap/lib/Col", "react-bootstrap/lib/FormControl", "react-bootstrap/lib/InputGroup", "react-bootstrap/lib/FormGroup", "react-bootstrap/lib/ControlLabel", "react-bootstrap/lib/HelpBlock", "react-bootstrap/lib/MenuItem", "react-bootstrap/lib/DropdownButton"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash/has"), require("lodash/map"), require("lodash/get"), require("lodash/pick"), require("lodash/filter"), require("lodash/isFunction"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/FormControl"), require("react-bootstrap/lib/InputGroup"), require("react-bootstrap/lib/FormGroup"), require("react-bootstrap/lib/ControlLabel"), require("react-bootstrap/lib/HelpBlock"), require("react-bootstrap/lib/MenuItem"), require("react-bootstrap/lib/DropdownButton"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.has, global.map, global.get, global.pick, global.filter, global.isFunction, global.Col, global.FormControl, global.InputGroup, global.FormGroup, global.ControlLabel, global.HelpBlock, global.MenuItem, global.DropdownButton);
    global.Wrap = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _has2, _map2, _get2, _pick2, _filter2, _isFunction2, _Col, _FormControl, _InputGroup, _FormGroup, _ControlLabel, _HelpBlock, _MenuItem, _DropdownButton) {
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

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

    _proto.options = function options() {
      if (this.props.field.type === 'select') {
        return (0, _map2.default)((0, _get2.default)(this.props.field, 'options', []), function (option, key) {
          return _react.default.createElement("option", {
            key: key,
            value: option.value
          }, option.desc);
        });
      }
    };

    _proto.dropDown = function dropDown() {
      var _this2 = this;

      var menuItem = [];
      var dropDownTitle = null;
      (0, _map2.default)(this.custom.items, function (item, key) {
        var select =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this2.input.onBlur();

                  case 2:
                    _context.next = 4;
                    return _this2.input.onChange(item.value);

                  case 4:
                    if (_this2.props.field.submit) {
                      _this2.props.submit();
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function select() {
            return _ref.apply(this, arguments);
          };
        }();

        if (item.hasOwnProperty('default')) {
          dropDownTitle = item.default;
          menuItem.push(_react.default.createElement(_MenuItem.default, {
            key: key,
            onSelect: select
          }, item.default));
          menuItem.push(_react.default.createElement(_MenuItem.default, {
            key: key + '_div',
            divider: true
          }));
        } else {
          if (_this2.input.value === item.value) {
            dropDownTitle = item.desc;
          }

          menuItem.push(_react.default.createElement(_MenuItem.default, {
            key: key,
            onSelect: select
          }, item.desc));
        }
      });
      return {
        dropDownTitle: dropDownTitle,
        menuItem: menuItem
      };
    };

    _proto.dropdownButton = function dropdownButton(isStatic) {
      var _this$dropDown = this.dropDown(),
          dropDownTitle = _this$dropDown.dropDownTitle,
          menuItem = _this$dropDown.menuItem;

      var size = (0, _get2.default)(this.props.field, 'bsSize', this.props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return {
            bsSize: size
          };
        }
      };

      var disabled = false;

      if (this.props.field && this.props.field.disabled && (0, _isFunction2.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      if (isStatic === true || disabled === true) {
        return _react.default.createElement(_FormControl.default.Static, null, dropDownTitle || (0, _get2.default)(this.custom, 'placeholder'));
      }

      return _react.default.createElement(_DropdownButton.default, _extends({
        key: this.input.name,
        onClick: function onClick(event) {
          event.preventDefault();
        }
      }, this.props.field.addon ? {
        componentClass: _InputGroup.default.Button
      } : {}, thisSize(), (0, _pick2.default)(this.props.field, ['bsStyle']), {
        title: dropDownTitle || (0, _get2.default)(this.custom, 'placeholder'),
        id: 'input-dropdown-addon' + this.input.name
      }), menuItem);
    };

    _proto.renderField = function renderField(props) {
      var _this3 = this;

      var input = props.input,
          label = props.label,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          valid = _props$meta.valid,
          custom = _objectWithoutPropertiesLoose(props, ["input", "label", "help", "meta"]);

      this.input = input;
      this.custom = custom;
      var size = (0, _get2.default)(this.props.field, 'bsSize', this.props.size);

      if (this.props.field && this.props.field.hidden && (0, _isFunction2.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get2.default)(props, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get2.default)(props, 'parent')) !== true) {
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
        if ((0, _has2.default)(_this3.props.field, 'labelSize')) {
          return _this3.props.field.labelSize;
        }

        if (_this3.props.horizontal) {
          return {
            sm: 2
          };
        }
      };

      var fieldSize = function fieldSize() {
        var attrs = {};

        if ((0, _has2.default)(_this3.props.field, 'fieldSize')) {
          attrs = Object.assign(attrs, {}, _this3.props.field.fieldSize);
        } else if (_this3.props.horizontal) {
          attrs.sm = 10;
        }

        if ((0, _has2.default)(_this3.props.field, 'style')) {
          attrs.style = _this3.props.field.style;
        }

        if ((0, _has2.default)(_this3.props.field, 'className')) {
          attrs.className = _this3.props.field.className;
        }

        return attrs;
      };

      var add = (0, _pick2.default)(custom, ['type', 'placeholder', 'rows', 'cols']);

      if (add.type === 'select') {
        add.componentClass = 'select';
      }

      if (custom.disabled && (0, _isFunction2.default)(custom.disabled)) {
        add.disabled = this.props.checkDisabled(custom.disabled(), (0, _get2.default)(props, 'parent'));
      }

      var component = function component() {
        if (_this3.props.static === true || (0, _get2.default)(_this3.props.field, 'static', false) === true) {
          var value = function value() {
            if (props.type === 'select') {
              return (0, _map2.default)((0, _filter2.default)(_this3.props.field.options, {
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
            case 'dropDown':
              return _this3.dropdownButton(true);

            default:
              {
                return _react.default.createElement(_FormControl.default.Static, null, value());
              }
          }
        }

        switch (props.type) {
          case 'dropDown':
            return _this3.dropdownButton(false);

          case 'textarea':
            return _react.default.createElement(_FormControl.default, _extends({
              componentClass: "textarea"
            }, input, add));

          case 'select':
            return _react.default.createElement(_FormControl.default, _extends({
              componentClass: "textarea"
            }, input, add), _this3.options());

          default:
            return _react.default.createElement(_FormControl.default, _extends({}, input, add));
        }
      };

      var validationState = function validationState() {
        if (touched && error) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

      var buttonBefore = function buttonBefore() {
        if ((0, _has2.default)(_this3.props.field, 'buttonBefore')) {
          if (_this3.props.field.buttonBefore.type === 'button') {
            return _react.default.createElement(_InputGroup.default.Button, null, _this3.props.addField(_this3.props.field.buttonBefore, 1, size));
          }

          if (_this3.props.field.buttonBefore.type === 'dropDown') {
            return _this3.props.addField(_this3.props.field.buttonBefore, 1, size);
          }

          return _react.default.createElement(_InputGroup.default.Button, null, _this3.props.addField(_this3.props.field.buttonBefore, 1, size));
        }
      };

      var buttonAfter = function buttonAfter() {
        if ((0, _has2.default)(_this3.props.field, 'buttonAfter')) {
          if (_this3.props.field.buttonAfter.type === 'button') {
            return _react.default.createElement(_InputGroup.default.Button, null, _this3.props.addField(_this3.props.field.buttonAfter, 1, size));
          }

          if (_this3.props.field.buttonAfter.type === 'dropDown') {
            return _this3.props.addField(_this3.props.field.buttonAfter, 1, size);
          }

          return _react.default.createElement(_InputGroup.default.Button, null, _this3.props.addField(_this3.props.field.buttonAfter, 1, size));
        }
      };

      var addonBefore = function addonBefore() {
        if ((0, _has2.default)(_this3.props.field, 'addonBefore')) {
          return _react.default.createElement(_InputGroup.default.Addon, null, (0, _get2.default)(_this3.props.field, 'addonBefore'));
        }
      };

      var addonAfter = function addonAfter() {
        if ((0, _has2.default)(_this3.props.field, 'addonAfter')) {
          return _react.default.createElement(_InputGroup.default.Addon, null, (0, _get2.default)(_this3.props.field, 'addonAfter'));
        }
      };

      var getField = function getField() {
        if ((0, _has2.default)(_this3.props.field, 'addonBefore') || (0, _has2.default)(_this3.props.field, 'addonAfter') || (0, _has2.default)(_this3.props.field, 'buttonBefore') || (0, _has2.default)(_this3.props.field, 'buttonAfter')) {
          return _react.default.createElement(_InputGroup.default, null, buttonBefore(), addonBefore(), component(), addonAfter(), buttonAfter());
        }

        return component();
      };

      if (this.props.field.type === 'dropDown' && !(0, _has2.default)(this.props.field, 'label')) {
        return getField();
      }

      var getLabel = function getLabel() {
        if (label) {
          return _react.default.createElement(_Col.default, _extends({
            componentClass: _ControlLabel.default
          }, labelSize()), label);
        }
      };

      return _react.default.createElement(_FormGroup.default, _extends({}, thisSize(), {
        validationState: validationState()
      }), getLabel(), _react.default.createElement(_Col.default, _extends({}, fieldSize(), {
        className: (0, _get2.default)(this.props.field, 'fieldClassName', '')
      }), getField(), touched && error && _react.default.createElement(_FormControl.default.Feedback, null), help && (!touched || !error) && _react.default.createElement(_HelpBlock.default, null, help), touched && error && _react.default.createElement(_HelpBlock.default, null, error)));
    };

    _proto.render = function render() {
      return null;
    };

    return Wrap;
  }(_react.default.Component);

  Wrap.propTypes = {
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'checkShow': _propTypes.default.func,
    'field': _propTypes.default.object,
    'size': _propTypes.default.string,
    'submit': _propTypes.default.func,
    'addField': _propTypes.default.func,
    'static': _propTypes.default.bool,
    'horizontal': _propTypes.default.bool.isRequired
  };
  Wrap.defaultProps = {};
  var _default = Wrap;
  _exports.default = _default;
});