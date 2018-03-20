(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash/get", "react-final-form", "final-form-arrays", "lodash/clone", "lodash/isEmpty", "lodash/filter", "lodash/map", "lodash/omit", "lodash/isUndefined", "lodash/isBoolean", "lodash/isString", "lodash/isArray", "lodash/isObject", "lodash/pick", "lodash/isFunction", "react-bootstrap/lib/Form", "react-bootstrap/lib/Row", "react-bootstrap/lib/Col", "react-bootstrap/lib/ButtonToolbar", "./Types/Input", "./Types/Plupload", "./Types/Checkbox", "./Types/DateTime", "./Types/Radio", "./Types/Select", "./Types/Button", "./Types/DropDown", "./Types/Rte", "./Types/Resource", "./Types/Message", "./Types/Complex", "./Types/Plain", "./Types/ContentEditable", "../locales", "./Pending", "./ExportValues"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash/get"), require("react-final-form"), require("final-form-arrays"), require("lodash/clone"), require("lodash/isEmpty"), require("lodash/filter"), require("lodash/map"), require("lodash/omit"), require("lodash/isUndefined"), require("lodash/isBoolean"), require("lodash/isString"), require("lodash/isArray"), require("lodash/isObject"), require("lodash/pick"), require("lodash/isFunction"), require("react-bootstrap/lib/Form"), require("react-bootstrap/lib/Row"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/ButtonToolbar"), require("./Types/Input"), require("./Types/Plupload"), require("./Types/Checkbox"), require("./Types/DateTime"), require("./Types/Radio"), require("./Types/Select"), require("./Types/Button"), require("./Types/DropDown"), require("./Types/Rte"), require("./Types/Resource"), require("./Types/Message"), require("./Types/Complex"), require("./Types/Plain"), require("./Types/ContentEditable"), require("../locales"), require("./Pending"), require("./ExportValues"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.get, global.reactFinalForm, global.finalFormArrays, global.clone, global.isEmpty, global.filter, global.map, global.omit, global.isUndefined, global.isBoolean, global.isString, global.isArray, global.isObject, global.pick, global.isFunction, global.Form, global.Row, global.Col, global.ButtonToolbar, global.Input, global.Plupload, global.Checkbox, global.DateTime, global.Radio, global.Select, global.Button, global.DropDown, global.Rte, global.Resource, global.Message, global.Complex, global.Plain, global.ContentEditable, global.locales, global.Pending, global.ExportValues);
    global.Form = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _get2, _reactFinalForm, _finalFormArrays, _clone2, _isEmpty2, _filter2, _map2, _omit2, _isUndefined2, _isBoolean2, _isString2, _isArray2, _isObject2, _pick2, _isFunction2, _Form, _Row, _Col, _ButtonToolbar, _Input, _Plupload, _Checkbox, _DateTime, _Radio, _Select, _Button, _DropDown, _Rte, _Resource, _Message, _Complex, _Plain, _ContentEditable, _locales, _Pending, _ExportValues) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _get2 = _interopRequireDefault(_get2);
  _finalFormArrays = _interopRequireDefault(_finalFormArrays);
  _clone2 = _interopRequireDefault(_clone2);
  _isEmpty2 = _interopRequireDefault(_isEmpty2);
  _filter2 = _interopRequireDefault(_filter2);
  _map2 = _interopRequireDefault(_map2);
  _omit2 = _interopRequireDefault(_omit2);
  _isUndefined2 = _interopRequireDefault(_isUndefined2);
  _isBoolean2 = _interopRequireDefault(_isBoolean2);
  _isString2 = _interopRequireDefault(_isString2);
  _isArray2 = _interopRequireDefault(_isArray2);
  _isObject2 = _interopRequireDefault(_isObject2);
  _pick2 = _interopRequireDefault(_pick2);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _Form = _interopRequireDefault(_Form);
  _Row = _interopRequireDefault(_Row);
  _Col = _interopRequireDefault(_Col);
  _ButtonToolbar = _interopRequireDefault(_ButtonToolbar);
  _Input = _interopRequireDefault(_Input);
  _Plupload = _interopRequireDefault(_Plupload);
  _Checkbox = _interopRequireDefault(_Checkbox);
  _DateTime = _interopRequireDefault(_DateTime);
  _Radio = _interopRequireDefault(_Radio);
  _Select = _interopRequireDefault(_Select);
  _Button = _interopRequireDefault(_Button);
  _DropDown = _interopRequireDefault(_DropDown);
  _Rte = _interopRequireDefault(_Rte);
  _Resource = _interopRequireDefault(_Resource);
  _Message = _interopRequireDefault(_Message);
  _Complex = _interopRequireDefault(_Complex);
  _Plain = _interopRequireDefault(_Plain);
  _ContentEditable = _interopRequireDefault(_ContentEditable);
  _locales = _interopRequireDefault(_locales);
  _Pending = _interopRequireDefault(_Pending);
  _ExportValues = _interopRequireDefault(_ExportValues);
  var _jsxFileName = "example/app/components/Form/FinalForm/Form.jsx";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var locale = {};

  var InnerForm = function InnerForm(props) {
    if (typeof props.locale === 'string') {
      if (!_locales.default[props.locale]) {
        console.warn("Final form generator locale " + props.locale + " not implemented");
      } else {
        locale = _locales.default[props.locale];
      }
    } else if (typeof props.locale === 'object') {
      locale = props.locale;
    } else {
      locale = _locales.default['en_US'];
    }

    if (locale.default !== undefined) {
      locale = locale.default;
    }

    var col = function col(cols, size, parent) {
      return (0, _map2.default)(cols, function (colItem, key) {
        var thisSize = (0, _get2.default)(colItem, 'bsSize', size); // Hide fields that are only visible in static mode

        if (!props.static && !!colItem.showOnStatic) {
          return false;
        } // Hide fields that are only visible in edit mode


        if (!!props.static && !!colItem.hideOnStatic) {
          return false;
        }

        return _react.default.createElement(_Col.default, _extends({
          key: key
        }, (0, _omit2.default)(colItem, ['children', 'showOnStatic', 'hideOnStatic']), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }), (0, _map2.default)((0, _omit2.default)(colItem.children, ['hideOnStatic']), function (child, keyCol) {
          var clonedChild = (0, _clone2.default)(child);

          if (parent !== null) {
            clonedChild.name = parent + "." + child.name;
            clonedChild.parent = parent;
          }

          return addField(clonedChild, keyCol, thisSize);
        }));
      });
    };

    var row = function row(field, key, size) {
      // Hide fields that are only visible in static mode
      if (!props.static && !!field.row.showOnStatic) {
        return false;
      } // Hide fields that are only visible in edit mode


      if (!!props.static && !!field.row.hideOnStatic) {
        return false;
      }

      if (field.row.hidden && (0, _isFunction2.default)(field.row.hidden)) {
        if (checkHidden(field.row.hidden, (0, _get2.default)(field, 'parent', null)) === true) {
          return null;
        }
      } else if (field.row.show && (0, _isFunction2.default)(field.row.show)) {
        if (checkShow(field.row.show, (0, _get2.default)(field, 'parent', null)) !== true) {
          return null;
        }
      }

      return _react.default.createElement(_Row.default, {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, col(field.row.col, size, (0, _get2.default)(field, 'parent', null)));
    };

    var checker = function checker(args, parent) {
      if ((0, _isString2.default)(args)) {
        var words = (0, _filter2.default)(args.split(/\s|\r?\n/));
        var i = 0;
        var field = {};
        var startField = 0;
        var operator = 'and';
        var result = true;
        var check = true;
        (0, _map2.default)(words, function (word, index) {
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
      } else if ((0, _isBoolean2.default)(args)) {
        return args;
      } else if ((0, _isObject2.default)(args)) {
        var value = null;

        if (parent !== undefined) {
          value = (0, _get2.default)(props.values, parent + "." + args.field, (0, _get2.default)(props.values, "" + args.field, (0, _get2.default)(props.initialValues, [args.field])));
        } else {
          value = (0, _get2.default)(props.values, args.field, (0, _get2.default)(props.initialValues, [args.field]));
        }

        if (!(0, _isUndefined2.default)(args.value)) {
          if (!value && (0, _isUndefined2.default)(args.logical)) {
            return false;
          } else if ((0, _isArray2.default)(args.value)) {
            if ((0, _isString2.default)(value)) {
              value = [value];
            }

            var _check = (0, _filter2.default)(args.value, function (item) {
              return value.indexOf(item) > -1;
            });

            if ((0, _isUndefined2.default)(args.operator) || String(args.operator).toLowerCase() === 'or') {
              return (0, _isArray2.default)(_check) && _check.length > 0;
            }

            return (0, _isArray2.default)(_check) && _check.length === args.value.length;
          } else if ((0, _isArray2.default)(value)) {
            if (value.indexOf(args.value) > -1) {
              return true;
            }
          } else if (args.logical) {
            if (args.value === 'null') {
              switch (args.logical) {
                default:
                case '===':
                  return (0, _isEmpty2.default)(value);

                case '!==':
                  return !(0, _isEmpty2.default)(value);
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

        if (!(0, _isUndefined2.default)(args.value_not)) {
          if (!value) return true;

          if (value) {
            if ((0, _isArray2.default)(args.value_not)) {
              if ((0, _isString2.default)(value)) {
                value = [value];
              }

              var _check2 = (0, _filter2.default)(args.value_not, function (item) {
                return value.indexOf(item) > -1;
              });

              if ((0, _isUndefined2.default)(args.operator) || String(args.operator).toLowerCase() === 'or') {
                return !((0, _isArray2.default)(_check2) && _check2.length > 0);
              }

              return !((0, _isArray2.default)(_check2) && _check2.length === args.value_not.length);
            } else if ((0, _isArray2.default)(value)) {
              if (value.indexOf(args.value_not) > -1) {
                return false;
              }
            } else if (args.value_not === value) {
              return false;
            }
          }

          return true;
        }
      } else if ((0, _isString2.default)(args)) {
        var _value = (0, _get2.default)(props.values, args.field, (0, _get2.default)(props.initialValues, [args.field]));

        return _value !== '';
      }
    };

    var checkDisabled = function checkDisabled(args, parent) {
      if ((0, _isArray2.default)(args)) {
        var check = (0, _filter2.default)(args, function (item) {
          return checker(item, parent);
        });
        return (0, _isArray2.default)(check) && check.length === args.length;
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
      var thisSize = (0, _get2.default)(toolbar, 'bsSize', size); // Hide fields that are only visible in static mode

      if (props.static !== true && toolbar.showOnStatic === true) {
        return false;
      } // Hide fields that are only visible in edit mode


      if (props.static === true && toolbar.hideOnStatic === true) {
        return false;
      }

      return _react.default.createElement(_Row.default, {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, _react.default.createElement(_Col.default, _extends({}, (0, _pick2.default)(toolbar, ['lg', 'lgHidden', 'lgOffset', 'lgPull', 'lgPush', 'md', 'mdHidden', 'mdOffset', 'mdPull', 'mdPush', 'sm', 'smHidden', 'smOffset', 'smPull', 'smPush', 'xs', 'xsHidden', 'xsOffset', 'xsPull', 'xsPush', 'componentClass', 'bsClass']), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }), _react.default.createElement(_ButtonToolbar.default, _extends({}, (0, _pick2.default)(toolbar, ['className']), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }), (0, _map2.default)(toolbar.children, function (child, keyCol) {
        return addField(child, keyCol, thisSize);
      }))));
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
          return _react.default.createElement(_Resource.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 348
            }
          }));

        case 'checkbox':
          return _react.default.createElement(_Checkbox.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 350
            }
          }));

        case 'plupload':
          return _react.default.createElement(_Plupload.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 352
            }
          }));

        case 'select':
          return _react.default.createElement(_Select.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 354
            }
          }));

        case 'radio':
          return _react.default.createElement(_Radio.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 356
            }
          }));

        case 'contentEditable':
          return _react.default.createElement(_ContentEditable.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 358
            }
          }));

        case 'complex':
          return _react.default.createElement(_Complex.default, _extends({}, spread, {
            addField: addField,
            formName: props.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 360
            }
          }));

        case 'submit':
        case 'button':
          return _react.default.createElement(_Button.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            }
          }));

        case 'dropdown':
          return _react.default.createElement(_DropDown.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 365
            }
          }));

        case 'rte':
          return _react.default.createElement(_Rte.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 367
            }
          }));

        case 'plain':
          return _react.default.createElement(_Plain.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 369
            }
          }));

        case 'jsx':
        case 'react':
          return field.component();

        case 'success':
        case 'error':
          {
            return _react.default.createElement(_Message.default, {
              locale: locale,
              key: key,
              field: field,
              pristine: props.pristine,
              dirty: props.dirty,
              invalid: props.invalid,
              anyTouched: props.anyTouched,
              submitting: props.submitting,
              submitFailed: props.submitFailed,
              submitSucceeded: props.submitSucceeded,
              "static": props.static,
              size: size,
              valid: props.valid,
              horizontal: props.horizontal,
              checkDisabled: checkDisabled,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 375
              }
            });
          }

        case 'datetime':
          return _react.default.createElement(_DateTime.default, _extends({}, spread, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 393
            }
          }));

        default:
          return _react.default.createElement(_Input.default, _extends({}, spread, {
            addField: addField,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 395
            }
          }));
      }
    };

    var wrap = function wrap(field, key, size) {
      // Hide fields that are only visible in static mode
      if (!props.static && !!field.showOnStatic) {
        return false;
      } // Hide fields that are only visible in edit mode


      if (!!props.static && !!field.hideOnStatic) {
        return false;
      }

      if (field.hidden && (0, _isFunction2.default)(field.hidden)) {
        if (checkHidden(field.hidden) === true) {
          return null;
        }
      } else if (field.show && (0, _isFunction2.default)(field.show)) {
        if (checkShow(field.show) !== true) {
          return null;
        }
      }

      return _react.default.createElement("div", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      }, (0, _map2.default)(field.wrap, function (child, keyField) {
        return addField(child, keyField, size);
      }));
    };

    var fields = function fields() {
      return (0, _map2.default)(props.fields, function (field, key) {
        var size = (0, _get2.default)(field, 'bsSize', null);

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

    return _react.default.createElement(_Pending.default, {
      pending: props.submitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      }
    }, fields());
  };

  var onSubmit = function onSubmit() {
    console.warn('Implement onSubmit function');
  };

  var FormObj =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(FormObj, _React$Component);

    function FormObj() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = FormObj.prototype;

    _proto.render = function render() {
      var _this = this;

      return _react.default.createElement(_reactFinalForm.Form, {
        onSubmit: this.props.onSubmit || onSubmit,
        validate: this.props.validate || function (values) {},
        initialValues: this.props.initialValues || {},
        mutators: _objectSpread({}, _finalFormArrays.default),
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
          return _react.default.createElement(_Form.default, {
            horizontal: _this.props.horizontal,
            onSubmit: handleSubmit,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 479
            }
          }, _this.props.exportValues && _react.default.createElement(_ExportValues.default, {
            callback: _this.props.exportValues,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 480
            }
          }), _react.default.createElement(InnerForm, _extends({}, _this.props, {
            reset: reset,
            submitting: submitting,
            pristine: pristine,
            validating: validating,
            values: values,
            submitFailed: submitFailed,
            submitSucceeded: submitSucceeded,
            submitError: submitError,
            valid: valid,
            change: change
          }, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 481
            }
          })));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        }
      });
    };

    return FormObj;
  }(_react.default.Component);

  FormObj.propTypes = {
    horizontal: _propTypes.default.bool,
    exportValues: _propTypes.default.func,
    initialValues: _propTypes.default.object
  };
  var _default = FormObj;
  _exports.default = _default;
});