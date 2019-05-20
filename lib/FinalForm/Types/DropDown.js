(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash/get", "lodash/find", "lodash/map", "lodash/pick", "lodash/isFunction", "react-bootstrap/lib/DropdownButton", "react-bootstrap/lib/InputGroup", "react-bootstrap/lib/MenuItem", "react-final-form", "lodash/omit"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash/get"), require("lodash/find"), require("lodash/map"), require("lodash/pick"), require("lodash/isFunction"), require("react-bootstrap/lib/DropdownButton"), require("react-bootstrap/lib/InputGroup"), require("react-bootstrap/lib/MenuItem"), require("react-final-form"), require("lodash/omit"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.get, global.find, global.map, global.pick, global.isFunction, global.DropdownButton, global.InputGroup, global.MenuItem, global.reactFinalForm, global.omit);
    global.DropDown = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _get2, _find2, _map2, _pick2, _isFunction2, _DropdownButton, _InputGroup, _MenuItem, _reactFinalForm, _omit2) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _get2 = _interopRequireDefault(_get2);
  _find2 = _interopRequireDefault(_find2);
  _map2 = _interopRequireDefault(_map2);
  _pick2 = _interopRequireDefault(_pick2);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _DropdownButton = _interopRequireDefault(_DropdownButton);
  _InputGroup = _interopRequireDefault(_InputGroup);
  _MenuItem = _interopRequireDefault(_MenuItem);
  _omit2 = _interopRequireDefault(_omit2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Input =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Input, _React$Component);

    function Input() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.renderComponent = _this.renderComponent.bind(_assertThisInitialized(_this));
      _this.state = {
        value: '',
        menuItems: []
      };
      _this.input = null;
      _this.meta = null;
      return _this;
    }

    var _proto = Input.prototype;

    _proto.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var menuItems = [];
      var dropDownTitle = (0, _get2["default"])(this.props.field, 'title', '');

      var change = function change(item) {
        _this2.input.onChange(item.value);

        _this2.setState({
          title: item.desc
        });
      };

      (0, _map2["default"])(this.props.field.items, function (item, key) {
        if (item.hasOwnProperty('default')) {
          dropDownTitle = item["default"];
          menuItems.push(_react["default"].createElement(_MenuItem["default"], {
            key: key,
            onSelect: function onSelect() {
              change(item);
            }
          }, item["default"]));
          menuItems.push(_react["default"].createElement(_MenuItem["default"], {
            key: key + '_div',
            divider: true
          }));
        } else {
          if ((0, _get2["default"])(_this2.meta, ['initial']) === item.value) {
            dropDownTitle = item.desc;
          }

          menuItems.push(_react["default"].createElement(_MenuItem["default"], {
            key: key,
            onSelect: function onSelect() {
              change(item);
            }
          }, item.desc));
        }
      });
      this.setState({
        title: dropDownTitle,
        menuItems: menuItems
      });
    };

    _proto.renderComponent = function renderComponent(props) {
      this.input = props.input;
      this.meta = props.meta;
      var defaultTitle = null;

      if (this.meta.initial !== undefined && this.input.value === this.meta.initial) {
        defaultTitle = (0, _get2["default"])((0, _find2["default"])(props.items, {
          value: this.meta.initial
        }), 'desc', null);
      }

      if (this.props.field && this.props.field.hidden && (0, _isFunction2["default"])(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get2["default"])(this.props.field, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2["default"])(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get2["default"])(this.props.field, 'parent')) !== true) {
          return null;
        }
      }

      var size = (0, _get2["default"])(this.props.field, 'bsSize', this.props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return {
            bsSize: size
          };
        }
      };

      var disabled = false;

      if (this.props.field && this.props.field.disabled && (0, _isFunction2["default"])(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      return _react["default"].createElement(_DropdownButton["default"], _extends({
        componentClass: _InputGroup["default"].Button
      }, thisSize(), {
        type: 'button',
        pullRight: true
      }, (0, _pick2["default"])(this.props.field, ['placeholder', 'bsStyle', 'onClick', 'onBlur', 'block', 'active', 'href', 'id', 'pullRight', 'dropup']), {
        disabled: disabled,
        title: this.state.title || defaultTitle
      }), this.state.menuItems);
    };

    _proto.render = function render() {
      return _react["default"].createElement(_reactFinalForm.Field, _extends({
        component: this.renderComponent
      }, (0, _omit2["default"])(this.props.field, ['hidden']), {
        size: this.props.size,
        checkDisabled: this.props.checkDisabled,
        checkHidden: this.props.checkHidden,
        checkShow: this.props.checkShow
      }));
    };

    return Input;
  }(_react["default"].Component);

  Input.propTypes = {
    'field': _propTypes["default"].object,
    'checkDisabled': _propTypes["default"].func,
    'checkHidden': _propTypes["default"].func,
    'checkShow': _propTypes["default"].func,
    'size': _propTypes["default"].string
  };
  Input.defaultProps = {};
  var _default = Input;
  _exports["default"] = _default;
});