(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "lodash/clone", "lodash/get", "lodash/has", "react", "react-final-form-arrays", "react-bootstrap/lib/Panel", "react-bootstrap/lib/Button", "react-bootstrap/lib/Row", "react-bootstrap/lib/Col", "react-bootstrap/lib/ButtonToolbar", "react-bootstrap/lib/ControlLabel", "lodash/isFunction", "lodash/isArray"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("lodash/clone"), require("lodash/get"), require("lodash/has"), require("react"), require("react-final-form-arrays"), require("react-bootstrap/lib/Panel"), require("react-bootstrap/lib/Button"), require("react-bootstrap/lib/Row"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/ButtonToolbar"), require("react-bootstrap/lib/ControlLabel"), require("lodash/isFunction"), require("lodash/isArray"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.clone, global.get, global.has, global.react, global.reactFinalFormArrays, global.Panel, global.Button, global.Row, global.Col, global.ButtonToolbar, global.ControlLabel, global.isFunction, global.isArray);
    global.Complex = mod.exports;
  }
})(this, function (_exports, _propTypes, _clone2, _get3, _has2, _react, _reactFinalFormArrays, _Panel, _Button, _Row, _Col, _ButtonToolbar, _ControlLabel, _isFunction2, _isArray2) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _clone2 = _interopRequireDefault(_clone2);
  _get3 = _interopRequireDefault(_get3);
  _has2 = _interopRequireDefault(_has2);
  _react = _interopRequireDefault(_react);
  _Panel = _interopRequireDefault(_Panel);
  _Button = _interopRequireDefault(_Button);
  _Row = _interopRequireDefault(_Row);
  _Col = _interopRequireDefault(_Col);
  _ButtonToolbar = _interopRequireDefault(_ButtonToolbar);
  _ControlLabel = _interopRequireDefault(_ControlLabel);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _isArray2 = _interopRequireDefault(_isArray2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Complex =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Complex, _React$Component);

    function Complex() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.renderComplex = _this.renderComplex.bind(_assertThisInitialized(_this));
      _this.renderChildren = _this.renderChildren.bind(_assertThisInitialized(_this));
      _this.state = {
        collapsed: null
      };
      return _this;
    }

    var _proto = Complex.prototype;

    _proto.renderChildren = function renderChildren(children, name, count, remove, move, complexIndex, removeBtn, size, staticField, disabled) {
      var _this2 = this;

      var buttons = function buttons() {
        var returnButtons = [];

        if (staticField !== true) {
          if (complexIndex > 0 && count > 1) {
            returnButtons.push(_react["default"].createElement(_Button["default"], {
              key: 2,
              onClick: function onClick() {
                return move(complexIndex, complexIndex - 1);
              },
              bsStyle: (0, _get3["default"])(_this2.props.moveBtn, 'bsStyle', 'default'),
              bsSize: (0, _get3["default"])(_this2.props.moveBtn, 'bsSize', undefined),
              disabled: disabled,
              type: "button"
            }, _react["default"].createElement("i", {
              className: "fa fa-chevron-up"
            })));
          }

          if (count > 1 && complexIndex < count - 1) {
            returnButtons.push(_react["default"].createElement(_Button["default"], {
              key: 3,
              onClick: function onClick() {
                return move(complexIndex, complexIndex + 1);
              },
              bsStyle: (0, _get3["default"])(_this2.props.moveBtn, 'bsStyle', 'default'),
              bsSize: (0, _get3["default"])(_this2.props.moveBtn, 'bsSize', undefined),
              disabled: disabled,
              type: "button"
            }, _react["default"].createElement("i", {
              className: "fa fa-chevron-down"
            })));
          }

          returnButtons.push(_react["default"].createElement(_Button["default"], {
            key: 1,
            onClick: function onClick() {
              return remove(complexIndex);
            },
            bsStyle: (0, _get3["default"])(_this2.props.removeBtn, 'bsStyle', 'danger'),
            bsSize: (0, _get3["default"])(_this2.props.removeBtn, 'bsSize', undefined),
            className: (0, _get3["default"])(_this2.props.removeBtn, 'className', ''),
            title: (0, _get3["default"])(_this2.props.removeBtn, 'title', ''),
            disabled: disabled,
            type: "button"
          }, _react["default"].createElement("i", {
            className: "fa fa-trash"
          })));
        }

        return returnButtons;
      };

      var _get2 = (0, _get3["default"])(this.props, 'panel', {}),
          header = _get2.header,
          footer = _get2.footer;

      var headerDiv = _react["default"].createElement("div", {
        className: "clearfix"
      }, _react["default"].createElement(_ButtonToolbar["default"], null, buttons()), header);

      var component = function component() {
        if (_this2.props.render) {
          return _this2.props.render(name);
        }

        return _react["default"].Children.map(_this2.props.children, function (child) {
          return _react["default"].cloneElement(child, {
            name: name + "." + child.props.name,
            parent: name
          });
        });
      };

      return _react["default"].createElement(_Panel["default"], {
        className: "rfg-cmplx-btn-flds"
      }, _react["default"].createElement(_Panel["default"].Heading, null, headerDiv), _react["default"].createElement(_Panel["default"].Body, null, component()), footer && _react["default"].createElement(_Panel["default"].Footer, null, footer));
    };

    _proto.renderComplex = function renderComplex(props) {
      var _this3 = this;

      var fields = props.fields,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          submitError = _props$meta.submitError;
      var staticField = props["static"];

      var thisSize = function thisSize() {
        if (_this3.props.size !== 'medium') {
          return {
            bsSize: size
          };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has2["default"])(_this3.props, 'labelSize')) {
          return _this3.props.labelSize;
        }

        if (_this3.props.horizontal) {
          return {
            sm: 2
          };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has2["default"])(_this3.props, 'fieldSize')) {
          return _this3.props.fieldSize;
        }

        if (_this3.props.horizontal) {
          return {
            sm: 10
          };
        }
      };

      var toggle = function toggle() {
        var state = false;

        if (_this3.state.collapsed === null) {
          state = !(_this3.props.collapsed && _this3.props.collapsed === true);
        } else if (_this3.state.collapsed === false) {
          state = true;
        }

        _this3.setState({
          'collapsed': state
        }, function () {// this.props.formChange('itemsx', state);
        });
      };

      if (this.state.collapsed === true || this.state.collapsed === null && this.props.collapsed && this.props.collapsed === true) {
        return _react["default"].createElement(_Row["default"], {
          className: "rfg-cmplx rfg-cmplx-collapsed"
        }, _react["default"].createElement(_Col["default"], _extends({
          componentClass: _ControlLabel["default"]
        }, labelSize()), _react["default"].createElement(_Button["default"], _extends({
          type: "button",
          onClick: toggle,
          bsStyle: "link"
        }, thisSize()), '+ ', this.props.label)));
      }

      var disabled = false;

      if (this.props && this.props.disabled && (0, _isFunction2["default"])(this.props.disabled)) {
        disabled = this.context.checkDisabled(this.props.disabled());
      }

      var renderAddButton = function renderAddButton() {
        if ((0, _get3["default"])(_this3.props, 'multiple', true) === true || fields.length === 0) {
          var bsStyle = function bsStyle() {
            if ((0, _get3["default"])(_this3.props.addBtn, 'bsStyle') && (0, _get3["default"])(addBtn, 'bsStyle') !== 'default') {
              return {
                bsStyle: (0, _get3["default"])(addBtn, 'bsStyle')
              };
            }
          };

          return _react["default"].createElement("div", {
            className: "rfg-cmplx-btn-add"
          }, staticField !== true && _react["default"].createElement(_Button["default"], _extends({
            type: "button",
            onClick: function onClick() {
              return fields.push({});
            },
            disabled: disabled
          }, thisSize(), bsStyle(), {
            className: (0, _get3["default"])(_this3.props.addBtn, 'className')
          }), (0, _get3["default"])(_this3.props.addBtn, 'label', 'toevoegen')), touched && error && _react["default"].createElement("span", null, error));
        }
      };

      return _react["default"].createElement(_Row["default"], {
        className: "rfg-cmplx rfg-cmplx-collapsed"
      }, _react["default"].createElement(_Col["default"], _extends({
        componentClass: _ControlLabel["default"]
      }, labelSize()), _react["default"].createElement(_Button["default"], _extends({
        type: "button",
        onClick: toggle,
        bsStyle: "link"
      }, thisSize()), '- ', this.props.label)), _react["default"].createElement(_Col["default"], fieldSize(), fields.map(function (field, key) {
        return _react["default"].createElement("div", {
          key: key,
          className: "rfg-cmplx-fields"
        }, _this3.renderChildren(children, field, fields.length, fields.remove, fields.move, key, removeBtn, size, staticField, disabled));
      }), renderAddButton()));
    };

    _proto.render = function render() {
      var _this$props = this.props,
          field = _this$props.field,
          size = _this$props.size;

      if (this.props && this.props.hidden && (0, _isFunction2["default"])(this.props.hidden)) {
        if (this.context.checkHidden(this.props.hidden, (0, _get3["default"])(this.props, 'parent')) === true) {
          return null;
        }
      } else if (this.props && this.props.show && (0, _isFunction2["default"])(this.props.show)) {
        if (this.context.checkShow(this.props.show, (0, _get3["default"])(this.props, 'parent')) !== true) {
          return null;
        }
      }

      return _react["default"].createElement(_reactFinalFormArrays.FieldArray, {
        component: this.renderComplex,
        collapsed: this.state.collapsed,
        rerenderOnEveryChange: (0, _get3["default"])(this.props, 'rerenderOnEveryChange', false)
      });
    };

    return Complex;
  }(_react["default"].Component);

  Complex.propTypes = {
    'size': _propTypes["default"].string,
    'dispatch': _propTypes["default"].func,
    'field': _propTypes["default"].object,
    'static': _propTypes["default"].bool,
    'locale': _propTypes["default"].object,
    'horizontal': _propTypes["default"].bool.isRequired,
    children: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]),
    show: _propTypes["default"].func,
    hidden: _propTypes["default"].func,
    disabled: _propTypes["default"].func,
    collapsed: _propTypes["default"].bool,
    render: _propTypes["default"].func,
    moveBtn: _propTypes["default"].object,
    removeBtn: _propTypes["default"].object,
    addBtn: _propTypes["default"].object,
    labelSize: _propTypes["default"].object,
    fieldSize: _propTypes["default"].object,
    label: _propTypes["default"].string,
    name: _propTypes["default"].string
  };
  Complex.defaultProps = {};
  Complex.contextTypes = {
    checkHidden: _propTypes["default"].func,
    checkShow: _propTypes["default"].func,
    checkDisabled: _propTypes["default"].func,
    isStatic: _propTypes["default"].bool
  };
  var _default = Complex;
  _exports["default"] = _default;
});