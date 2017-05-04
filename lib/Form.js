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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

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

var _components = {
  RenderForm: {
    displayName: 'RenderForm'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Form.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var locale = {};

var InnerForm = function InnerForm(props) {
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

      return _react3.default.createElement(
        _Col2.default,
        (0, _extends3.default)({ key: key }, (0, _omit3.default)(colItem, ['children', 'showOnStatic', 'hideOnStatic'])),
        (0, _map3.default)((0, _omit3.default)(colItem.children, ['hideOnStatic']), function (child, keyCol) {
          var clonedChild = (0, _clone3.default)(child);
          if (parent !== null) {
            clonedChild.name = parent + '.' + child.name;
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

    return _react3.default.createElement(
      _Row2.default,
      { key: key },
      (0, _map3.default)(field, function (rowItem, keyRow) {
        var thisSize = (0, _get3.default)(rowItem, 'bsSize', size);
        return _react3.default.createElement(
          'div',
          { key: keyRow },
          col(rowItem.col, thisSize, (0, _get3.default)(field, 'parent', null))
        );
      })
    );
  };

  var buttonToolbar = function buttonToolbar(field, key, size) {
    var toolbar = field.buttonToolbar;
    var thisSize = (0, _get3.default)(toolbar, 'bsSize', size);
    // Hide fields that are only visible in static mode
    if (!props.static && !!toolbar.showOnStatic) {
      return false;
    }
    // Hide fields that are only visible in edit mode
    if (!!props.static && !!toolbar.hideOnStatic) {
      return false;
    }

    return _react3.default.createElement(
      _Row2.default,
      { key: key },
      _react3.default.createElement(
        _Col2.default,
        (0, _pick3.default)(toolbar, ['lg', 'lgHidden', 'lgOffset', 'lgPull', 'lgPush', 'md', 'mdHidden', 'mdOffset', 'mdPull', 'mdPush', 'sm', 'smHidden', 'smOffset', 'smPull', 'smPush', 'xs', 'xsHidden', 'xsOffset', 'xsPull', 'xsPush', 'componentClass', 'bsClass']),
        _react3.default.createElement(
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
        return _react3.default.createElement(_Resource2.default, spread);
      case 'checkbox':
        return _react3.default.createElement(_Checkbox2.default, spread);
      case 'plupload':
        return _react3.default.createElement(_Plupload2.default, spread);
      case 'select':
        return _react3.default.createElement(_Select2.default, spread);
      case 'radio':
        return _react3.default.createElement(_Radio2.default, spread);
      case 'contentEditable':
        return _react3.default.createElement(_ContentEditable2.default, spread);
      case 'complex':
        return _react3.default.createElement(_Complex2.default, (0, _extends3.default)({}, spread, { addField: addField, formName: props.name }));
      case 'submit':
      case 'button':
        return _react3.default.createElement(_Button2.default, spread);
      case 'rte':
        return _react3.default.createElement(_Rte2.default, spread);
      case 'plain':
        return _react3.default.createElement(_Plain2.default, spread);
      case 'jsx':
      case 'react':
        return field.component();
      case 'success':
      case 'error':
        {
          return _react3.default.createElement(_Message2.default, { locale: locale,
            key: key,
            field: field,
            pristine: props.pristine,
            dirty: props.dirty,
            invalid: props.invalid,
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
        return _react3.default.createElement(_DateTime2.default, spread);
      default:
        return _react3.default.createElement(_Input2.default, (0, _extends3.default)({}, spread, { addField: addField }));
    }
  };

  var fields = function fields() {
    return (0, _map3.default)(props.fields, function (field, key) {
      var size = (0, _get3.default)(field, 'bsSize', null);
      if (Object.prototype.hasOwnProperty.call(field, 'type')) {
        return addField(field, key, size);
      } else if (Object.prototype.hasOwnProperty.call(field, 'row')) {
        return row(field, key, size);
      } else if (Object.prototype.hasOwnProperty.call(field, 'buttonToolbar')) {
        return buttonToolbar(field, key, size);
      }
    });
  };

  var checkDisabled = function checkDisabled(args) {
    if ((0, _isBoolean3.default)(args)) {
      return args;
    } else if ((0, _isObject3.default)(args)) {
      var value = (0, _get3.default)(props.formValues, args.field, (0, _get3.default)(props.initialValues, [args.field]));
      if (!(0, _isUndefined3.default)(args.value)) {
        if (value) {
          if ((0, _isString3.default)(value) && args.value === value) {
            return true;
          } else if ((0, _isArray3.default)(value)) {
            if (value.indexOf(args.value) > -1) {
              return true;
            }
          }
        }
        return false;
      }

      if (!(0, _isUndefined3.default)(args.value_not)) {
        if (value) {
          if ((0, _isString3.default)(value) && args.value_not === value) {
            return false;
          } else if ((0, _isArray3.default)(value)) {
            if (value.indexOf(args.value_not) > -1) {
              return false;
            }
          }
        }
        return true;
      }
    } else if ((0, _isString3.default)(args)) {
      var _value = (0, _get3.default)(props.formValues, args.field, (0, _get3.default)(props.initialValues, [args.field]));
      if (!isEmpty(_value)) {
        return true;
      }

      return false;
    }
  };

  var checkHidden = function checkHidden(args) {
    return checkDisabled(args);
  };

  var checkShow = function checkShow(args) {
    return checkDisabled(args);
  };

  return _react3.default.createElement(
    _Form2.default,
    { onSubmit: handleSubmit, horizontal: props.horizontal },
    _react3.default.createElement(
      _Pending2.default,
      { pending: props.submitting },
      fields()
    )
  );
};

var RenderForm = _wrapComponent('RenderForm')(function (_React$Component) {
  (0, _inherits3.default)(RenderForm, _React$Component);

  function RenderForm() {
    (0, _classCallCheck3.default)(this, RenderForm);
    return (0, _possibleConstructorReturn3.default)(this, (RenderForm.__proto__ || (0, _getPrototypeOf2.default)(RenderForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(RenderForm, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (!(0, _isEqual3.default)(nextProps.initialValues, this.props.initialValues)) {
        return true;
      }

      if ((0, _get3.default)(this.props, 'static', false) !== (0, _get3.default)(nextProps, 'static', false)) {
        return true;
      }

      return false;
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
      return _react3.default.createElement(DynForm, {
        fields: this.props.fields,
        horizontal: this.props.horizontal || false,
        dispatch: this.props.dispatch,
        initialValues: this.props.initialValues,
        name: this.props.name,
        formReducer: (0, _get3.default)(this.props, 'formReducer', 'form'),
        'static': this.props.static,
        locale: this.props.locale,
        onSubmit: function onSubmit(data, dispatch) {
          if (Object.constructor.hasOwnProperty.call(_this2.props, 'onSubmit')) {
            return _this2.props.onSubmit(data, dispatch);
          }
        }
      });
    }
  }]);
  return RenderForm;
}(_react3.default.Component));

RenderForm.propTypes = {
  'name': _propTypes2.default.string.isRequired,
  'horizontal': _propTypes2.default.bool,
  'fields': _propTypes2.default.array.isRequired,
  'initialValues': _propTypes2.default.object,
  'dispatch': _propTypes2.default.func.isRequired,
  'onSubmit': _propTypes2.default.func,
  'validate': _propTypes2.default.func,
  'static': _propTypes2.default.bool,
  'destroyOnUnmount': _propTypes2.default.bool,
  'locale': _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, function (dispatch) {
  return { dispatch: dispatch };
})(RenderForm);
module.exports = exports['default'];