'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

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

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

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

var _locales = require('./locales');

var _locales2 = _interopRequireDefault(_locales);

var _Pending = require('./Pending');

var _Pending2 = _interopRequireDefault(_Pending);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale = {};

var InnerForm = function InnerForm(props, context, context2) {
  var handleSubmit = props.handleSubmit;

  if (typeof props.locale === 'string') {
    if (!_locales2.default[props.locale]) {
      console.warn('Redux form generator locale ' + props.locale + ' not implemented');
    } else {
      locale = _locales2.default[props.locale];
    }
  } else if ((0, _typeof3.default)(props.locale) === 'object') {
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
        (0, _extends3.default)({ key: key }, (0, _omit3.default)(colItem, ['children', 'showOnStatic', 'hideOnStatic'])),
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
      if (checkHidden(field.row.hidden) === true) {
        return null;
      }
    } else if (field.row.show && (0, _isFunction3.default)(field.row.show)) {
      if (checkShow(field.row.show) !== true) {
        return null;
      }
    }
    return _react2.default.createElement(
      _Row2.default,
      { key: key },
      col(field.row.col, size, (0, _get3.default)(field, 'parent', null))
    );
    /*
        return (
          <Row key={key}>
            {_map(field.row, (rowItem, keyRow) => {
              const thisSize = _get(rowItem, 'bsSize', size);
              return (
                <div key={keyRow}>
                  {col(rowItem.col, thisSize, _get(field, 'parent', null))}
                </div>
              );
            })}
          </Row>
        );
    */
  };

  var checker = function checker(args, parent) {
    if ((0, _isString3.default)(args)) {
      var _ret = function () {
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
        return {
          v: check
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    } else if ((0, _isBoolean3.default)(args)) {
      return args;
    } else if ((0, _isObject3.default)(args)) {
      var _ret2 = function () {
        var value = null;

        if (parent !== undefined) {
          value = (0, _get3.default)(props.formValues, parent + '.' + args.field, (0, _get3.default)(props.formValues, '' + args.field, (0, _get3.default)(props.initialValues, [args.field])));
        } else {
          value = (0, _get3.default)(props.formValues, args.field, (0, _get3.default)(props.initialValues, [args.field]));
        }

        if (!(0, _isUndefined3.default)(args.value)) {
          if (!value && (0, _isUndefined3.default)(args.logical)) {
            return {
              v: false
            };
          } else if ((0, _isArray3.default)(args.value)) {
            if ((0, _isString3.default)(value)) {
              value = [value];
            }
            var check = (0, _filter3.default)(args.value, function (item) {
              return value.indexOf(item) > -1;
            });

            if ((0, _isUndefined3.default)(args.operator) || String(args.operator).toLowerCase() === 'or') {
              return {
                v: (0, _isArray3.default)(check) && check.length > 0
              };
            }
            return {
              v: (0, _isArray3.default)(check) && check.length === args.value.length
            };
          } else if ((0, _isArray3.default)(value)) {
            if (value.indexOf(args.value) > -1) {
              return {
                v: true
              };
            }
          } else if (args.logical) {
            if (args.value === 'null') {
              switch (args.logical) {
                default:
                case '===':
                  return {
                    v: (0, _isEmpty3.default)(value)
                  };
                case '!==':
                  return {
                    v: !(0, _isEmpty3.default)(value)
                  };
              }
            }

            switch (args.logical) {
              default:
              case '===':
                return {
                  v: args.value === value
                };
              case '!==':
                return {
                  v: args.value !== value
                };
              case '>=':
                return {
                  v: args.value >= value
                };
              case '<=':
                return {
                  v: args.value <= value
                };
            }
          } else if (args.value === value) {
            return {
              v: true
            };
          }
          return {
            v: false
          };
        }

        if (!(0, _isUndefined3.default)(args.value_not)) {
          if (!value) return {
              v: true
            };
          if (value) {
            if ((0, _isArray3.default)(args.value_not)) {
              if ((0, _isString3.default)(value)) {
                value = [value];
              }
              var _check = (0, _filter3.default)(args.value_not, function (item) {
                return value.indexOf(item) > -1;
              });
              if ((0, _isUndefined3.default)(args.operator) || String(args.operator).toLowerCase() === 'or') {
                return {
                  v: !((0, _isArray3.default)(_check) && _check.length > 0)
                };
              }
              return {
                v: !((0, _isArray3.default)(_check) && _check.length === args.value_not.length)
              };
            } else if ((0, _isArray3.default)(value)) {
              if (value.indexOf(args.value_not) > -1) {
                return {
                  v: false
                };
              }
            } else if (args.value_not === value) {
              return {
                v: false
              };
            }
          }
          return {
            v: true
          };
        }
      }();

      if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
    } else if ((0, _isString3.default)(args)) {
      var value = (0, _get3.default)(props.formValues, args.field, (0, _get3.default)(props.initialValues, [args.field]));
      return value !== '';
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
    return checkDisabled(args(props.formValues, parent), parent);
  };

  var checkShow = function checkShow(args, parent) {
    console.log('functie show', args);
    return checkDisabled(args(props.formValues, parent), parent);
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
      'dispatch': props.dispatch,
      'static': props.static,
      'horizontal': props.horizontal

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
        return _react2.default.createElement(_Complex2.default, (0, _extends3.default)({}, spread, { addField: addField, formName: props.name }));
      case 'submit':
      case 'button':
        return _react2.default.createElement(_Button2.default, spread);
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
        return _react2.default.createElement(_Input2.default, (0, _extends3.default)({}, spread, { addField: addField }));
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
    _Form2.default,
    { onSubmit: handleSubmit, horizontal: props.horizontal },
    _react2.default.createElement(
      _Pending2.default,
      { pending: props.submitting },
      fields()
    )
  );
};

var RenderForm = function (_React$Component) {
  (0, _inherits3.default)(RenderForm, _React$Component);

  function RenderForm() {
    (0, _classCallCheck3.default)(this, RenderForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RenderForm.__proto__ || (0, _getPrototypeOf2.default)(RenderForm)).call(this));

    _this.validate = _this.validate.bind(_this);
    _this.state = {
      validation: {}
    };
    return _this;
  }

  (0, _createClass3.default)(RenderForm, [{
    key: 'validate',
    value: function validate(path, type) {
      var state = this.state.validation;
      state.path = type;
      this.setState({ validation: state }, function () {});
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {

      if (this.props.reInitializeOn && this.props.reInitializeOn !== nextProps.reInitializeOn) {
        return true;
      }

      if (!(0, _isEqual3.default)(nextProps.initialValues, this.props.initialValues)) {
        return true;
      }

      return (0, _get3.default)(this.props, 'static', false) !== (0, _get3.default)(nextProps, 'static', false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var DynForm = (0, _reduxForm.reduxForm)({
        form: this.props.name, // a unique identifier for this form
        validate: function validate(values) {
          if ((0, _has3.default)(_this2.props, 'validate')) {
            return _this2.props.validate(values);
          }
          return {};
        },
        destroyOnUnmount: (0, _get3.default)(this.props, 'destroyOnUnmount', true)
      })((0, _reactRedux.connect)(function (state, form) {
        return {
          formValues: (0, _get3.default)(state, form.formReducer + '.' + form.name + '.values', {})
        };
      })(InnerForm));
      return _react2.default.createElement(DynForm, {
        fields: this.props.fields,
        horizontal: this.props.horizontal || false,
        dispatch: this.props.dispatch,
        initialValues: this.props.initialValues,
        name: this.props.name,
        formReducer: (0, _get3.default)(this.props, 'formReducer', 'form'),
        'static': this.props.static,
        locale: this.props.locale,
        setValidation: this.validate,
        onSubmit: function onSubmit(data, dispatch) {
          if (Object.constructor.hasOwnProperty.call(_this2.props, 'onSubmit')) {
            return _this2.props.onSubmit(data, dispatch);
          }
        }
      });
    }
  }]);
  return RenderForm;
}(_react2.default.Component);

RenderForm.propTypes = {
  'name': _propTypes2.default.string.isRequired,
  'horizontal': _propTypes2.default.bool,
  'fields': _propTypes2.default.array.isRequired,
  'initialValues': _propTypes2.default.object,
  'dispatch': _propTypes2.default.func.isRequired,
  'onSubmit': _propTypes2.default.func,
  'validate': _propTypes2.default.func,
  'static': _propTypes2.default.bool,
  'reInitializeOn': _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.bool]),
  'locale': _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, function (dispatch) {
  return { dispatch: dispatch };
})(RenderForm);
module.exports = exports['default'];