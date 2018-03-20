(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "lodash/clone", "lodash/get", "lodash/has", "react", "redux-form", "react-bootstrap/lib/Panel", "react-bootstrap/lib/Button", "react-bootstrap/lib/Row", "react-bootstrap/lib/Col", "react-bootstrap/lib/ButtonToolbar", "react-bootstrap/lib/ControlLabel", "lodash/isFunction"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("lodash/clone"), require("lodash/get"), require("lodash/has"), require("react"), require("redux-form"), require("react-bootstrap/lib/Panel"), require("react-bootstrap/lib/Button"), require("react-bootstrap/lib/Row"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/ButtonToolbar"), require("react-bootstrap/lib/ControlLabel"), require("lodash/isFunction"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.clone, global.get, global.has, global.react, global.reduxForm, global.Panel, global.Button, global.Row, global.Col, global.ButtonToolbar, global.ControlLabel, global.isFunction);
    global.Complex = mod.exports;
  }
})(this, function (_exports, _propTypes, _clone2, _get3, _has2, _react, _reduxForm, _Panel, _Button, _Row, _Col, _ButtonToolbar, _ControlLabel, _isFunction2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
            returnButtons.push(_react.default.createElement(_Button.default, {
              key: 2,
              onClick: function onClick() {
                return move(complexIndex, complexIndex - 1);
              },
              bsStyle: (0, _get3.default)(_this2.props.field.moveBtn, 'bsStyle', 'default'),
              bsSize: (0, _get3.default)(_this2.props.field.moveBtn, 'bsSize', undefined),
              disabled: disabled,
              type: "button"
            }, _react.default.createElement("i", {
              className: "fa fa-chevron-up"
            })));
          }

          if (count > 1 && complexIndex < count - 1) {
            returnButtons.push(_react.default.createElement(_Button.default, {
              key: 3,
              onClick: function onClick() {
                return move(complexIndex, complexIndex + 1);
              },
              bsStyle: (0, _get3.default)(_this2.props.field.moveBtn, 'bsStyle', 'default'),
              bsSize: (0, _get3.default)(_this2.props.field.moveBtn, 'bsSize', undefined),
              disabled: disabled,
              type: "button"
            }, _react.default.createElement("i", {
              className: "fa fa-chevron-down"
            })));
          }

          returnButtons.push(_react.default.createElement(_Button.default, {
            key: 1,
            onClick: function onClick() {
              return remove(complexIndex);
            },
            bsStyle: (0, _get3.default)(_this2.props.field.removeBtn, 'bsStyle', 'danger'),
            bsSize: (0, _get3.default)(_this2.props.field.removeBtn, 'bsSize', undefined),
            className: (0, _get3.default)(_this2.props.field.removeBtn, 'className', ''),
            title: (0, _get3.default)(_this2.props.field.removeBtn, 'title', ''),
            disabled: disabled,
            type: "button"
          }, _react.default.createElement("i", {
            className: "fa fa-trash"
          })));
        }

        return returnButtons;
      };

      var _get2 = (0, _get3.default)(this.props.field, 'panel', {}),
          header = _get2.header,
          footer = _get2.footer;

      var headerDiv = _react.default.createElement("div", {
        className: "clearfix"
      }, _react.default.createElement(_ButtonToolbar.default, null, buttons()), header);

      return _react.default.createElement(_Panel.default, {
        className: "rfg-cmplx-btn-flds"
      }, _react.default.createElement(_Panel.default.Heading, null, headerDiv), _react.default.createElement(_Panel.default.Body, null, children.map(function (child, key) {
        var clone = (0, _clone2.default)(child);
        clone.name = name + "." + child.name;
        clone.parent = "" + name;
        return _this2.props.addField(clone, key, size);
      })), footer && _react.default.createElement(_Panel.default.Footer, null, footer));
    };

    _proto.renderComplex = function renderComplex(props) {
      var _this3 = this;

      var fields = props.fields,
          locale = props.locale,
          dispatch = props.dispatch,
          removeBtn = props.removeBtn,
          addBtn = props.addBtn,
          size = props.size,
          label = props.label,
          children = props.children,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error;
      var staticField = props.static;

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
        if ((0, _has2.default)(_this3.props.field, 'fieldSize')) {
          return _this3.props.field.fieldSize;
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
          state = !(_this3.props.field.collapsed && _this3.props.field.collapsed === true);
        } else if (_this3.state.collapsed === false) {
          state = true;
        }

        var complexName = fields.name + "_collapsed";

        _this3.setState({
          'collapsed': state
        }, function () {
          dispatch((0, _reduxForm.change)(_this3.props.formName, complexName, state));
        });
      };

      if (this.state.collapsed === true || this.state.collapsed === null && this.props.field.collapsed && this.props.field.collapsed === true) {
        return _react.default.createElement(_Row.default, {
          className: "rfg-cmplx rfg-cmplx-collapsed"
        }, _react.default.createElement(_Col.default, _extends({
          componentClass: _ControlLabel.default
        }, labelSize()), _react.default.createElement(_Button.default, _extends({
          type: "button",
          onClick: toggle,
          bsStyle: "link"
        }, thisSize()), '+ ', label)));
      }

      var disabled = false;

      if (this.props.field && this.props.field.disabled && (0, _isFunction2.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      var renderAddButton = function renderAddButton() {
        if ((0, _get3.default)(_this3.props.field, 'multiple', true) === true || fields.length === 0) {
          var bsStyle = function bsStyle() {
            if ((0, _get3.default)(addBtn, 'bsStyle') && (0, _get3.default)(addBtn, 'bsStyle') !== 'default') {
              return {
                bsStyle: (0, _get3.default)(addBtn, 'bsStyle')
              };
            }
          };

          return _react.default.createElement("div", {
            className: "rfg-cmplx-btn-add"
          }, staticField !== true && _react.default.createElement(_Button.default, _extends({
            type: "button",
            onClick: function onClick() {
              return fields.push({});
            },
            disabled: disabled
          }, thisSize(), bsStyle(), {
            className: (0, _get3.default)(addBtn, 'className')
          }), (0, _get3.default)(addBtn, 'label', locale.complex.buttonAdd)), touched && error && _react.default.createElement("span", null, error));
        }
      };

      return _react.default.createElement(_Row.default, {
        className: "rfg-cmplx rfg-cmplx-collapsed"
      }, _react.default.createElement(_Col.default, _extends({
        componentClass: _ControlLabel.default
      }, labelSize()), _react.default.createElement(_Button.default, _extends({
        type: "button",
        onClick: toggle,
        bsStyle: "link"
      }, thisSize()), '- ', label)), _react.default.createElement(_Col.default, fieldSize(), fields.map(function (field, key) {
        return _react.default.createElement("div", {
          key: key,
          className: "rfg-cmplx-fields"
        }, _this3.renderChildren(children, field, fields.length, fields.remove, fields.move, key, removeBtn, size, staticField, disabled));
      }), renderAddButton()));
    };

    _proto.render = function render() {
      var _props = this.props,
          field = _props.field,
          size = _props.size;

      if (this.props.field && this.props.field.hidden && (0, _isFunction2.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get3.default)(this.props.field, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get3.default)(this.props.field, 'parent')) !== true) {
          return null;
        }
      }

      return _react.default.createElement(_reduxForm.FieldArray, {
        name: field.name,
        label: field.label,
        addBtn: field.addBtn,
        removeBtn: field.removeBtn,
        children: field.children,
        dispatch: this.props.dispatch,
        size: (0, _get3.default)(field, 'bsSize', size),
        component: this.renderComplex,
        collapsed: this.state.collapsed,
        "static": this.props.static || field.static,
        locale: this.props.locale,
        rerenderOnEveryChange: (0, _get3.default)(field, 'rerenderOnEveryChange', false)
      });
    };

    return Complex;
  }(_react.default.Component);

  Complex.propTypes = {
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'checkShow': _propTypes.default.func,
    'size': _propTypes.default.string,
    'dispatch': _propTypes.default.func,
    'addField': _propTypes.default.func,
    'field': _propTypes.default.object,
    'formName': _propTypes.default.string,
    'static': _propTypes.default.bool,
    'locale': _propTypes.default.object,
    'horizontal': _propTypes.default.bool.isRequired
  };
  Complex.defaultProps = {};
  var _default = Complex;
  _exports.default = _default;
});