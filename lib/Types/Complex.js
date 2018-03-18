'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _get3 = require('lodash/get');

var _get4 = _interopRequireDefault(_get3);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _Panel = require('react-bootstrap/lib/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

var _ButtonToolbar2 = _interopRequireDefault(_ButtonToolbar);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Complex = function (_React$Component) {
  _inherits(Complex, _React$Component);

  function Complex() {
    _classCallCheck(this, Complex);

    var _this = _possibleConstructorReturn(this, (Complex.__proto__ || Object.getPrototypeOf(Complex)).call(this));

    _this.renderComplex = _this.renderComplex.bind(_this);
    _this.renderChildren = _this.renderChildren.bind(_this);
    _this.state = {
      collapsed: null
    };
    return _this;
  }

  _createClass(Complex, [{
    key: 'renderChildren',
    value: function renderChildren(children, name, count, remove, move, complexIndex, removeBtn, size, staticField, disabled) {
      var _this2 = this;

      var buttons = function buttons() {
        var returnButtons = [];
        if (staticField !== true) {
          if (complexIndex > 0 && count > 1) {
            returnButtons.push(_react2.default.createElement(
              _Button2.default,
              { key: 2,
                onClick: function onClick() {
                  return move(complexIndex, complexIndex - 1);
                },
                bsStyle: (0, _get4.default)(_this2.props.field.moveBtn, 'bsStyle', 'default'),
                bsSize: (0, _get4.default)(_this2.props.field.moveBtn, 'bsSize', undefined),
                disabled: disabled,
                type: 'button'
              },
              _react2.default.createElement('i', { className: 'fa fa-chevron-up' })
            ));
          }
          if (count > 1 && complexIndex < count - 1) {
            returnButtons.push(_react2.default.createElement(
              _Button2.default,
              { key: 3,
                onClick: function onClick() {
                  return move(complexIndex, complexIndex + 1);
                },
                bsStyle: (0, _get4.default)(_this2.props.field.moveBtn, 'bsStyle', 'default'),
                bsSize: (0, _get4.default)(_this2.props.field.moveBtn, 'bsSize', undefined),
                disabled: disabled,
                type: 'button'
              },
              _react2.default.createElement('i', { className: 'fa fa-chevron-down' })
            ));
          }

          returnButtons.push(_react2.default.createElement(
            _Button2.default,
            { key: 1,
              onClick: function onClick() {
                return remove(complexIndex);
              },
              bsStyle: (0, _get4.default)(_this2.props.field.removeBtn, 'bsStyle', 'danger'),
              bsSize: (0, _get4.default)(_this2.props.field.removeBtn, 'bsSize', undefined),
              className: (0, _get4.default)(_this2.props.field.removeBtn, 'className', ''),
              title: (0, _get4.default)(_this2.props.field.removeBtn, 'title', ''),
              disabled: disabled,
              type: 'button'
            },
            _react2.default.createElement('i', { className: 'fa fa-trash' })
          ));
        }
        return returnButtons;
      };

      var _get2 = (0, _get4.default)(this.props.field, 'panel', {}),
          header = _get2.header,
          footer = _get2.footer;

      var headerDiv = _react2.default.createElement(
        'div',
        { className: 'clearfix' },
        _react2.default.createElement(
          _ButtonToolbar2.default,
          null,
          buttons()
        ),
        header
      );

      return _react2.default.createElement(
        _Panel2.default,
        { className: 'rfg-cmplx-btn-flds' },
        _react2.default.createElement(
          _Panel2.default.Heading,
          null,
          headerDiv
        ),
        _react2.default.createElement(
          _Panel2.default.Body,
          null,
          children.map(function (child, key) {
            var clone = (0, _clone3.default)(child);
            clone.name = name + '.' + child.name;
            clone.parent = '' + name;
            return _this2.props.addField(clone, key, size);
          })
        ),
        footer && _react2.default.createElement(
          _Panel2.default.Footer,
          null,
          footer
        )
      );
    }
  }, {
    key: 'renderComplex',
    value: function renderComplex(props) {
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
          return { bsSize: size };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has3.default)(_this3.props.field, 'labelSize')) {
          return _this3.props.field.labelSize;
        }
        if (_this3.props.horizontal) {
          return { sm: 2 };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this3.props.field, 'fieldSize')) {
          return _this3.props.field.fieldSize;
        }
        if (_this3.props.horizontal) {
          return { sm: 10 };
        }
      };

      var toggle = function toggle() {
        var state = false;
        if (_this3.state.collapsed === null) {
          state = !(_this3.props.field.collapsed && _this3.props.field.collapsed === true);
        } else if (_this3.state.collapsed === false) {
          state = true;
        }
        var complexName = fields.name + '_collapsed';

        _this3.setState({ 'collapsed': state }, function () {
          dispatch((0, _reduxForm.change)(_this3.props.formName, complexName, state));
        });
      };

      if (this.state.collapsed === true || this.state.collapsed === null && this.props.field.collapsed && this.props.field.collapsed === true) {
        return _react2.default.createElement(
          _Row2.default,
          { className: 'rfg-cmplx rfg-cmplx-collapsed' },
          _react2.default.createElement(
            _Col2.default,
            _extends({ componentClass: _ControlLabel2.default }, labelSize()),
            _react2.default.createElement(
              _Button2.default,
              _extends({ type: 'button', onClick: toggle, bsStyle: 'link' }, thisSize()),
              '+ ',
              label
            )
          )
        );
      }

      var disabled = false;
      if (this.props.field && this.props.field.disabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      var renderAddButton = function renderAddButton() {
        if ((0, _get4.default)(_this3.props.field, 'multiple', true) === true || fields.length === 0) {
          var bsStyle = function bsStyle() {
            if ((0, _get4.default)(addBtn, 'bsStyle') && (0, _get4.default)(addBtn, 'bsStyle') !== 'default') {
              return { bsStyle: (0, _get4.default)(addBtn, 'bsStyle') };
            }
          };
          return _react2.default.createElement(
            'div',
            { className: 'rfg-cmplx-btn-add' },
            staticField !== true && _react2.default.createElement(
              _Button2.default,
              _extends({ type: 'button',
                onClick: function onClick() {
                  return fields.push({});
                },
                disabled: disabled
              }, thisSize(), bsStyle(), {
                className: (0, _get4.default)(addBtn, 'className')
              }),
              (0, _get4.default)(addBtn, 'label', locale.complex.buttonAdd)
            ),
            touched && error && _react2.default.createElement(
              'span',
              null,
              error
            )
          );
        }
      };

      return _react2.default.createElement(
        _Row2.default,
        { className: 'rfg-cmplx rfg-cmplx-collapsed' },
        _react2.default.createElement(
          _Col2.default,
          _extends({ componentClass: _ControlLabel2.default }, labelSize()),
          _react2.default.createElement(
            _Button2.default,
            _extends({ type: 'button', onClick: toggle, bsStyle: 'link' }, thisSize()),
            '- ',
            label
          )
        ),
        _react2.default.createElement(
          _Col2.default,
          fieldSize(),
          fields.map(function (field, key) {
            return _react2.default.createElement(
              'div',
              { key: key, className: 'rfg-cmplx-fields' },
              _this3.renderChildren(children, field, fields.length, fields.remove, fields.move, key, removeBtn, size, staticField, disabled)
            );
          }),
          renderAddButton()
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          field = _props.field,
          size = _props.size;


      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get4.default)(this.props.field, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction3.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get4.default)(this.props.field, 'parent')) !== true) {
          return null;
        }
      }

      return _react2.default.createElement(_reduxForm.FieldArray, {
        name: field.name,
        label: field.label,
        addBtn: field.addBtn,
        removeBtn: field.removeBtn,
        children: field.children,
        dispatch: this.props.dispatch,
        size: (0, _get4.default)(field, 'bsSize', size),
        component: this.renderComplex,
        collapsed: this.state.collapsed,
        'static': this.props.static || field.static,
        locale: this.props.locale,
        rerenderOnEveryChange: (0, _get4.default)(field, 'rerenderOnEveryChange', false)
      });
    }
  }]);

  return Complex;
}(_react2.default.Component);

Complex.propTypes = {
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'size': _propTypes2.default.string,
  'dispatch': _propTypes2.default.func,
  'addField': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'formName': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'locale': _propTypes2.default.object,
  'horizontal': _propTypes2.default.bool.isRequired
};
Complex.defaultProps = {};

exports.default = Complex;