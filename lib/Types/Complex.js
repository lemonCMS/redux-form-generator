'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _get3 = require('lodash/get');

var _get4 = _interopRequireDefault(_get3);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

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

var _components = {
  Complex: {
    displayName: 'Complex'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Types/Complex.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Complex = _wrapComponent('Complex')(function (_React$Component) {
  (0, _inherits3.default)(Complex, _React$Component);

  function Complex() {
    (0, _classCallCheck3.default)(this, Complex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Complex.__proto__ || (0, _getPrototypeOf2.default)(Complex)).call(this));

    _this.renderComplex = _this.renderComplex.bind(_this);

    if (!(typeof _this.renderComplex === 'function')) {
      throw new TypeError('Value of "this.renderComplex" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.renderComplex));
    }

    _this.renderChildren = _this.renderChildren.bind(_this);

    if (!(typeof _this.renderChildren === 'function')) {
      throw new TypeError('Value of "this.renderChildren" violates contract.\n\nExpected:\n(any, any, any, any, any, any, any, any, any, any) => any\n\nGot:\n' + _inspect(_this.renderChildren));
    }

    _this.state = {
      collapsed: null
    };
    return _this;
  }

  (0, _createClass3.default)(Complex, [{
    key: 'renderChildren',
    value: function renderChildren(children, name, count, remove, move, complexIndex, removeBtn, size, staticField, disabled) {
      var _this2 = this;

      var buttons = function buttons() {
        var returnButtons = [];
        if (staticField !== true) {
          if (complexIndex > 0 && count > 1) {
            returnButtons.push(_react3.default.createElement(
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
              _react3.default.createElement('i', { className: 'fa fa-chevron-up' })
            ));
          }
          if (count > 1 && complexIndex < count - 1) {
            returnButtons.push(_react3.default.createElement(
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
              _react3.default.createElement('i', { className: 'fa fa-chevron-down' })
            ));
          }

          returnButtons.push(_react3.default.createElement(
            _Button2.default,
            { key: 1,
              onClick: function onClick() {
                return remove(complexIndex);
              },
              bsStyle: (0, _get4.default)(_this2.props.field.removeBtn, 'bsStyle', 'danger'),
              bsSize: (0, _get4.default)(_this2.props.field.removeBtn, 'bsSize', undefined),
              disabled: disabled,
              type: 'button'
            },
            _react3.default.createElement('i', { className: 'fa fa-trash' })
          ));
        }
        return returnButtons;
      };

      var _get2 = (0, _get4.default)(this.props.field, 'panel', {}),
          header = _get2.header,
          footer = _get2.footer;

      var headerDiv = _react3.default.createElement(
        'div',
        { className: 'clearfix' },
        _react3.default.createElement(
          _ButtonToolbar2.default,
          null,
          buttons()
        ),
        header
      );

      return _react3.default.createElement(
        _Panel2.default,
        { className: 'rfg-cmplx-btn-flds', header: headerDiv, footer: footer },
        children.map(function (child, key) {
          var clone = (0, _clone3.default)(child);
          clone.name = name + '.' + child.name;
          clone.parent = '' + name;
          return _this2.props.addField(clone, key, size);
        })
      );
    }
  }, {
    key: 'renderComplex',
    value: function renderComplex(props) {
      var _this3 = this;

      var fields = props.fields,
          name = props.name,
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
        return { sm: 2 };
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this3.props.field, 'fieldSize')) {
          return _this3.props.field.fieldSize;
        }
        return { sm: 10 };
      };

      var toggle = function toggle() {
        var state = false;
        if (_this3.state.collapsed === null) {
          state = _this3.props.field.collapsed && _this3.props.field.collapsed === true ? false : true;
        } else if (_this3.state.collapsed === false) {
          state = true;
        }
        var complexName = fields.name + '_collapsed';

        _this3.setState({ 'collapsed': state }, function () {
          dispatch((0, _reduxForm.change)(_this3.props.formName, complexName, state));
        });
      };

      if (this.state.collapsed === true || this.state.collapsed === null && this.props.field.collapsed && this.props.field.collapsed === true) {
        return _react3.default.createElement(
          _Row2.default,
          { className: 'rfg-cmplx rfg-cmplx-collapsed' },
          _react3.default.createElement(
            _Col2.default,
            (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
            _react3.default.createElement(
              _Button2.default,
              (0, _extends3.default)({ type: 'button', onClick: toggle, bsStyle: 'link' }, thisSize()),
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
          return _react3.default.createElement(
            'div',
            { className: 'rfg-cmplx-btn-add' },
            staticField !== true && _react3.default.createElement(
              _Button2.default,
              (0, _extends3.default)({ type: 'button',
                onClick: function onClick() {
                  return fields.push({});
                },
                disabled: disabled
              }, thisSize(), bsStyle(), {
                className: (0, _get4.default)(addBtn, 'className')
              }),
              (0, _get4.default)(addBtn, 'label', locale.complex.buttonAdd)
            ),
            touched && error && _react3.default.createElement(
              'span',
              null,
              error
            )
          );
        }
      };

      return _react3.default.createElement(
        _Row2.default,
        { className: 'rfg-cmplx rfg-cmplx-collapsed' },
        _react3.default.createElement(
          _Col2.default,
          (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
          _react3.default.createElement(
            _Button2.default,
            (0, _extends3.default)({ type: 'button', onClick: toggle, bsStyle: 'link' }, thisSize()),
            '- ',
            label
          )
        ),
        _react3.default.createElement(
          _Col2.default,
          fieldSize(),
          fields.map(function (field, key) {
            return _react3.default.createElement(
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

      return _react3.default.createElement(_reduxForm.FieldArray, {
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
        locale: this.props.locale
      });
    }
  }]);
  return Complex;
}(_react3.default.Component));

Complex.propTypes = {
  'size': _react3.default.PropTypes.string,
  'dispatch': _react3.default.PropTypes.func,
  'addField': _react3.default.PropTypes.func,
  'field': _react3.default.PropTypes.object,
  'formName': _react3.default.PropTypes.string,
  'static': _react3.default.PropTypes.bool,
  'locale': _react3.default.PropTypes.object
};
Complex.defaultProps = {};

exports.default = Complex;

function _inspect(input, depth) {
  var maxDepth = 4;
  var maxKeys = 15;

  if (depth === undefined) {
    depth = 0;
  }

  depth += 1;

  if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'void';
  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
  } else if (Array.isArray(input)) {
    if (input.length > 0) {
      var _ret = function () {
        if (depth > maxDepth) return {
            v: '[...]'
          };

        var first = _inspect(input[0], depth);

        if (input.every(function (item) {
          return _inspect(item, depth) === first;
        })) {
          return {
            v: first.trim() + '[]'
          };
        } else {
          return {
            v: '[' + input.slice(0, maxKeys).map(function (item) {
              return _inspect(item, depth);
            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
          };
        }
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    } else {
      return 'Array';
    }
  } else {
    var keys = (0, _keys2.default)(input);

    if (!keys.length) {
      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
        return input.constructor.name;
      } else {
        return 'Object';
      }
    }

    if (depth > maxDepth) return '{...}';
    var indent = '  '.repeat(depth - 1);
    var entries = keys.slice(0, maxKeys).map(function (key) {
      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
    }).join('\n  ' + indent);

    if (keys.length >= maxKeys) {
      entries += '\n  ' + indent + '...';
    }

    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
    } else {
      return '{\n  ' + indent + entries + '\n' + indent + '}';
    }
  }
}

module.exports = exports['default'];