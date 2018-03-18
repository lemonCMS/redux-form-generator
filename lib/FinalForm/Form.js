'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _reactFinalForm = require('react-final-form');

var _finalFormArrays = require('final-form-arrays');

var _finalFormArrays2 = _interopRequireDefault(_finalFormArrays);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _isBoolean2 = require('lodash/isBoolean');

var _isBoolean3 = _interopRequireDefault(_isBoolean2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isObject2 = require('lodash/isObject');

var _isObject3 = _interopRequireDefault(_isObject2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _Form = require('react-bootstrap/lib/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

var _ButtonToolbar2 = _interopRequireDefault(_ButtonToolbar);

var _Input = require('./Types/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Plupload = require('./Types/Plupload');

var _Plupload2 = _interopRequireDefault(_Plupload);

var _Checkbox = require('./Types/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _DateTime = require('./Types/DateTime');

var _DateTime2 = _interopRequireDefault(_DateTime);

var _Radio = require('./Types/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Select = require('./Types/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Button = require('./Types/Button');

var _Button2 = _interopRequireDefault(_Button);

var _DropDown = require('./Types/DropDown');

var _DropDown2 = _interopRequireDefault(_DropDown);

var _Rte = require('./Types/Rte');

var _Rte2 = _interopRequireDefault(_Rte);

var _Resource = require('./Types/Resource');

var _Resource2 = _interopRequireDefault(_Resource);

var _Message = require('./Types/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Complex = require('./Types/Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Plain = require('./Types/Plain');

var _Plain2 = _interopRequireDefault(_Plain);

var _ContentEditable = require('./Types/ContentEditable');

var _ContentEditable2 = _interopRequireDefault(_ContentEditable);

var _locales = require('../locales');

var _locales2 = _interopRequireDefault(_locales);

var _Pending = require('./Pending');

var _Pending2 = _interopRequireDefault(_Pending);

var _ExportValues = require('./ExportValues');

var _ExportValues2 = _interopRequireDefault(_ExportValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var locale = {};

var InnerForm = function InnerForm(props) {
  if (typeof props.locale === 'string') {
    if (!_locales2.default[props.locale]) {
      console.warn('Final form generator locale ' + props.locale + ' not implemented');
    } else {
      locale = _locales2.default[props.locale];
    }
  } else if (_typeof(props.locale) === 'object') {
    locale = props.locale;
  } else {
    locale = _locales2.default['en_US'];
  }

  if (locale.default !== undefined) {
    locale = locale.default;
  }

  var col = function col(cols, size, parent) {
    return (0, _map3.default)(cols, function (colItem, key) {
      var thisSize = (0, _get3.default)(colItem, 'bsSize', size);

      // Hide fields that are only visible in static mode
      if (!props.static && !!colItem.showOnStatic) {
        return false;
      }
      // Hide fields that are only visible in edit mode
      if (!!props.static && !!colItem.hideOnStatic) {
        return false;
      }

      return _react2.default.createElement(
        _Col2.default,
        _extends({ key: key }, (0, _omit3.default)(colItem, ['children', 'showOnStatic', 'hideOnStatic'])),
        (0, _map3.default)((0, _omit3.default)(colItem.children, ['hideOnStatic']), function (child, keyCol) {
          var clonedChild = (0, _clone3.default)(child);
          if (parent !== null) {
            clonedChild.name = parent + '.' + child.name;
            clonedChild.parent = parent;
          }
          return addField(clonedChild, keyCol, thisSize);
        })
      );
    });
  };

  var row = function row(field, key, size) {
    // Hide fields that are only visible in static mode
    if (!props.static && !!field.row.showOnStatic) {
      return false;
    }
    // Hide fields that are only visible in edit mode
    if (!!props.static && !!field.row.hideOnStatic) {
      return false;
    }

    if (field.row.hidden && (0, _isFunction3.default)(field.row.hidden)) {
      if (checkHidden(field.row.hidden, (0, _get3.default)(field, 'parent', null)) === true) {
        return null;
      }
    } else if (field.row.show && (0, _isFunction3.default)(field.row.show)) {
      if (checkShow(field.row.show, (0, _get3.default)(field, 'parent', null)) !== true) {
        return null;
      }
    }
    return _react2.default.createElement(
      _Row2.default,
      { key: key },
      col(field.row.col, size, (0, _get3.default)(field, 'parent', null))
    );
  };

  var checker = function checker(args, parent) {
    if ((0, _isString3.default)(args)) {
      var words = (0, _filter3.default)(args.split(/\s|\r?\n/));
      var i = 0;
      var field = {};
      var startField = 0;
      var operator = 'and';
      var result = true;
      var check = true;
      (0, _map3.default)(words, function (word, index) {
        if (word === 'field') {
          i += 1;
          startField = index;

          if (index > 0) {
            switch (operator) {
              default:
              case 'and':
                check = check && result;
                break;
              case 'or':
                check = check || result;
                break;
            }
            operator = null;
            field = {};
          }
        }

        if (index === startField + 1) {
          // Field name
          field.field = word;
        } else if (index === startField + 2) {
          var indexOf = ['===', '<=', '>=', '!=='].indexOf(word);
          if (indexOf > -1) {
            field.logical = word;
          }
        } else if (index === startField + 3) {
          field.value = word;
          result = checker(field);
        } else if (index === startField + 4) {
          var _indexOf = ['and', 'or'].indexOf(word);
          if (_indexOf > -1) {
            operator = word;
          } else {
            operator = 'and';
          }
        }
      });

      if (i > 1) {
        switch (operator) {
          default:
          case 'and':
            check = check && result;
            break;
          case 'or':
            check = check || result;
            break;
        }
      }
      return check;
    } else if ((0, _isBoolean3.default)(args)) {
      return args;
    } else if ((0, _isObject3.default)(args)) {
      var value = null;

      if (parent !== undefined) {
        value = (0, _get3.default)(props.values, parent + '.' + args.field, (0, _get3.default)(props.values, '' + args.field, (0, _get3.default)(props.initialValues, [args.field])));
      } else {
        value = (0, _get3.default)(props.values, args.field, (0, _get3.default)(props.initialValues, [args.field]));
      }

      if (!(0, _isUndefined3.default)(args.value)) {
        if (!value && (0, _isUndefined3.default)(args.logical)) {
          return false;
        } else if ((0, _isArray3.default)(args.value)) {
          if ((0, _isString3.default)(value)) {
            value = [value];
          }
          var _check = (0, _filter3.default)(args.value, function (item) {
            return value.indexOf(item) > -1;
          });

          if ((0, _isUndefined3.default)(args.operator) || String(args.operator).toLowerCase() === 'or') {
            return (0, _isArray3.default)(_check) && _check.length > 0;
          }
          return (0, _isArray3.default)(_check) && _check.length === args.value.length;
        } else if ((0, _isArray3.default)(value)) {
          if (value.indexOf(args.value) > -1) {
            return true;
          }
        } else if (args.logical) {
          if (args.value === 'null') {
            switch (args.logical) {
              default:
              case '===':
                return (0, _isEmpty3.default)(value);
              case '!==':
                return !(0, _isEmpty3.default)(value);
            }
          }

          switch (args.logical) {
            default:
            case '===':
              return args.value === value;
            case '!==':
              return args.value !== value;
            case '>=':
              return args.value >= value;
            case '<=':
              return args.value <= value;
          }
        } else if (args.value === value) {
          return true;
        }
        return false;
      }

      if (!(0, _isUndefined3.default)(args.value_not)) {
        if (!value) return true;
        if (value) {
          if ((0, _isArray3.default)(args.value_not)) {
            if ((0, _isString3.default)(value)) {
              value = [value];
            }
            var _check2 = (0, _filter3.default)(args.value_not, function (item) {
              return value.indexOf(item) > -1;
            });
            if ((0, _isUndefined3.default)(args.operator) || String(args.operator).toLowerCase() === 'or') {
              return !((0, _isArray3.default)(_check2) && _check2.length > 0);
            }
            return !((0, _isArray3.default)(_check2) && _check2.length === args.value_not.length);
          } else if ((0, _isArray3.default)(value)) {
            if (value.indexOf(args.value_not) > -1) {
              return false;
            }
          } else if (args.value_not === value) {
            return false;
          }
        }
        return true;
      }
    } else if ((0, _isString3.default)(args)) {
      var _value = (0, _get3.default)(props.values, args.field, (0, _get3.default)(props.initialValues, [args.field]));
      return _value !== '';
    }
  };

  var checkDisabled = function checkDisabled(args, parent) {
    if ((0, _isArray3.default)(args)) {
      var check = (0, _filter3.default)(args, function (item) {
        return checker(item, parent);
      });
      return (0, _isArray3.default)(check) && check.length === args.length;
    }
    return checker(args, parent);
  };

  var checkHidden = function checkHidden(args, parent) {
    return checkDisabled(args(props.values, parent), parent);
  };

  var checkShow = function checkShow(args, parent) {
    return checkDisabled(args(props.values, parent), parent);
  };

  var buttonToolbar = function buttonToolbar(field, key, size) {
    var toolbar = field.buttonToolbar;
    var thisSize = (0, _get3.default)(toolbar, 'bsSize', size);
    // Hide fields that are only visible in static mode
    if (props.static !== true && toolbar.showOnStatic === true) {
      return false;
    }
    // Hide fields that are only visible in edit mode
    if (props.static === true && toolbar.hideOnStatic === true) {
      return false;
    }

    return _react2.default.createElement(
      _Row2.default,
      { key: key },
      _react2.default.createElement(
        _Col2.default,
        (0, _pick3.default)(toolbar, ['lg', 'lgHidden', 'lgOffset', 'lgPull', 'lgPush', 'md', 'mdHidden', 'mdOffset', 'mdPull', 'mdPush', 'sm', 'smHidden', 'smOffset', 'smPull', 'smPush', 'xs', 'xsHidden', 'xsOffset', 'xsPull', 'xsPush', 'componentClass', 'bsClass']),
        _react2.default.createElement(
          _ButtonToolbar2.default,
          (0, _pick3.default)(toolbar, ['className']),
          (0, _map3.default)(toolbar.children, function (child, keyCol) {
            return addField(child, keyCol, thisSize);
          })
        )
      )
    );
  };

  var addField = function addField(field, key, size) {
    if (Object.prototype.hasOwnProperty.call(field, 'row')) {
      return row(field, key, size);
    }

    if (Object.prototype.hasOwnProperty.call(field, 'buttonToolbar')) {
      return buttonToolbar(field, key, size);
    }

    if (field.showOnStatic && !props.static) {
      return;
    }

    if (field.hideOnStatic && props.static) {
      return;
    }

    var spread = {
      checkDisabled: checkDisabled,
      checkHidden: checkHidden,
      checkShow: checkShow,
      locale: locale,
      key: key,
      field: field,
      size: size,
      dispatch: props.dispatch,
      static: props.static,
      horizontal: props.horizontal,
      formChange: props.change

    };

    switch (field.type) {
      case 'resource':
        return _react2.default.createElement(_Resource2.default, spread);
      case 'checkbox':
        return _react2.default.createElement(_Checkbox2.default, spread);
      case 'plupload':
        return _react2.default.createElement(_Plupload2.default, spread);
      case 'select':
        return _react2.default.createElement(_Select2.default, spread);
      case 'radio':
        return _react2.default.createElement(_Radio2.default, spread);
      case 'contentEditable':
        return _react2.default.createElement(_ContentEditable2.default, spread);
      case 'complex':
        return _react2.default.createElement(_Complex2.default, _extends({}, spread, { addField: addField, formName: props.name }));
      case 'submit':
      case 'button':
        return _react2.default.createElement(_Button2.default, spread);
      case 'dropdown':
        return _react2.default.createElement(_DropDown2.default, spread);
      case 'rte':
        return _react2.default.createElement(_Rte2.default, spread);
      case 'plain':
        return _react2.default.createElement(_Plain2.default, spread);
      case 'jsx':
      case 'react':
        return field.component();
      case 'success':
      case 'error':
        {
          return _react2.default.createElement(_Message2.default, { locale: locale,
            key: key,
            field: field,
            pristine: props.pristine,
            dirty: props.dirty,
            invalid: props.invalid,
            anyTouched: props.anyTouched,
            submitting: props.submitting,
            submitFailed: props.submitFailed,
            submitSucceeded: props.submitSucceeded,
            'static': props.static,
            size: size,
            valid: props.valid,
            horizontal: props.horizontal,
            checkDisabled: checkDisabled
          });
        }
      case 'datetime':
        return _react2.default.createElement(_DateTime2.default, spread);
      default:
        return _react2.default.createElement(_Input2.default, _extends({}, spread, { addField: addField }));
    }
  };

  var wrap = function wrap(field, key, size) {
    // Hide fields that are only visible in static mode
    if (!props.static && !!field.showOnStatic) {
      return false;
    }
    // Hide fields that are only visible in edit mode
    if (!!props.static && !!field.hideOnStatic) {
      return false;
    }

    if (field.hidden && (0, _isFunction3.default)(field.hidden)) {
      if (checkHidden(field.hidden) === true) {
        return null;
      }
    } else if (field.show && (0, _isFunction3.default)(field.show)) {
      if (checkShow(field.show) !== true) {
        return null;
      }
    }

    return _react2.default.createElement(
      'div',
      { key: key },
      (0, _map3.default)(field.wrap, function (child, keyField) {
        return addField(child, keyField, size);
      })
    );
  };

  var fields = function fields() {
    return (0, _map3.default)(props.fields, function (field, key) {
      var size = (0, _get3.default)(field, 'bsSize', null);
      if (Object.prototype.hasOwnProperty.call(field, 'type')) {
        return addField(field, key, size);
      } else if (Object.prototype.hasOwnProperty.call(field, 'row')) {
        return row(field, key, size);
      } else if (Object.prototype.hasOwnProperty.call(field, 'wrap')) {
        return wrap(field, key, size);
      } else if (Object.prototype.hasOwnProperty.call(field, 'buttonToolbar')) {
        return buttonToolbar(field, key, size);
      }
    });
  };

  return _react2.default.createElement(
    _Pending2.default,
    { pending: props.submitting },
    fields()
  );
};

var onSubmit = function onSubmit() {
  console.warn('Implement onSubmit function');
};

var FormObj = function (_React$Component) {
  _inherits(FormObj, _React$Component);

  function FormObj() {
    _classCallCheck(this, FormObj);

    return _possibleConstructorReturn(this, (FormObj.__proto__ || Object.getPrototypeOf(FormObj)).apply(this, arguments));
  }

  _createClass(FormObj, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactFinalForm.Form, {
        onSubmit: this.props.onSubmit || onSubmit,
        validate: this.props.validate || function (values) {},
        initialValues: this.props.initialValues || {},
        mutators: _extends({}, _finalFormArrays2.default),
        render: function render(_ref) {
          var handleSubmit = _ref.handleSubmit,
              reset = _ref.reset,
              submitting = _ref.submitting,
              pristine = _ref.pristine,
              validating = _ref.validating,
              values = _ref.values,
              submitSucceeded = _ref.submitSucceeded,
              submitError = _ref.submitError,
              submitFailed = _ref.submitFailed,
              valid = _ref.valid,
              change = _ref.change;

          return _react2.default.createElement(
            _Form2.default,
            { horizontal: _this2.props.horizontal, onSubmit: handleSubmit },
            _this2.props.exportValues && _react2.default.createElement(_ExportValues2.default, { callback: _this2.props.exportValues }),
            _react2.default.createElement(InnerForm, _extends({}, _this2.props, { reset: reset, submitting: submitting, pristine: pristine, validating: validating, values: values, submitFailed: submitFailed, submitSucceeded: submitSucceeded, submitError: submitError, valid: valid, change: change }))
          );
        } });
    }
  }]);

  return FormObj;
}(_react2.default.Component);

FormObj.propTypes = {
  horizontal: _propTypes2.default.bool,
  exportValues: _propTypes2.default.func,
  initialValues: _propTypes2.default.object
};

exports.default = FormObj;