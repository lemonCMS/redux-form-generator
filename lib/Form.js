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

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _Form = require('react-bootstrap/lib/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

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
    locale = require('./locale');
    console.log(locale);
    if (!locale[props.locale]) {
      console.warn('Redux form generator locale ' + props.locale + ' not implemented');
    } else {
      locale = locale[props.locale];
    }
  }
  if ((0, _typeof3.default)(props.locale) === 'object') {
    locale = props.locale;
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

  var addField = function addField(field, key, size) {
    if (Object.prototype.hasOwnProperty.call(field, 'row')) {
      return row(field, key, size);
    }

    switch (field.type) {
      case 'resource':
        return _react3.default.createElement(_Resource2.default, { locale: locale, key: key, field: field, dispatch: props.dispatch, size: size, 'static': props.static });
      case 'checkbox':
        return _react3.default.createElement(_Checkbox2.default, { locale: locale, key: key, field: field, dispatch: props.dispatch, size: size, 'static': props.static });
      case 'plupload':
        return _react3.default.createElement(_Plupload2.default, { locale: locale, key: key, field: field, dispatch: props.dispatch, size: size, 'static': props.static });
      case 'select':
        return _react3.default.createElement(_Select2.default, { locale: locale, key: key, field: field, size: size, 'static': props.static });
      case 'radio':
        return _react3.default.createElement(_Radio2.default, { locale: locale, key: key, field: field, dispatch: props.dispatch, size: size, 'static': props.static });
      case 'complex':
        return _react3.default.createElement(_Complex2.default, { locale: locale, key: key, field: field, dispatch: props.dispatch, size: size, addField: addField, formName: props.name, 'static': props.static });
      case 'submit':
      case 'button':
        return _react3.default.createElement(_Button2.default, { locale: locale, key: key, field: field, dispatch: props.dispatch, size: size, 'static': props.static });
      case 'rte':
        return _react3.default.createElement(_Rte2.default, { locale: locale, key: key, field: field, size: size, 'static': props.static });
      case 'success':
      case 'error':
        return _react3.default.createElement(_Message2.default, { locale: locale,
          key: key,
          field: field,
          pristine: props.pristine,
          dirty: props.dirty,
          invalid: props.invalid,
          valid: props.valid,
          submitFailed: props.submitFailed,
          submitSucceeded: props.submitSucceeded,
          'static': props.static,
          size: size
        });
      case 'datetime':
        return _react3.default.createElement(_DateTime2.default, { locale: locale, key: key, field: field, size: size, 'static': props.static });
      default:
        return _react3.default.createElement(_Input2.default, { locale: locale, key: key, field: field, size: size, addField: addField, 'static': props.static });
    }
  };

  var fields = function fields() {
    return (0, _map3.default)(props.fields, function (field, key) {
      var size = (0, _get3.default)(field, 'bsSize', null);
      if (Object.prototype.hasOwnProperty.call(field, 'type')) {
        return addField(field, key, size);
      } else if (Object.prototype.hasOwnProperty.call(field, 'row')) {
        return row(field, key, size);
      }
    });
  };

  return _react3.default.createElement(
    _Form2.default,
    { onSubmit: handleSubmit, horizontal: true },
    fields()
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
      return !(0, _isEqual3.default)(nextProps.initialValues, this.props.initialValues);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var DynForm = (0, _reduxForm.reduxForm)({
        form: this.props.name, // a unique identifier for this form
        destroyOnUnmount: (0, _get3.default)(this.props, 'destroyOnUnmount', true)
      })(InnerForm);
      return _react3.default.createElement(DynForm, {
        fields: this.props.fields,
        dispatch: this.props.dispatch,
        initialValues: this.props.initialValues,
        name: this.props.name,
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
  'name': _react3.default.PropTypes.string.isRequired,
  'fields': _react3.default.PropTypes.array.isRequired,
  'initialValues': _react3.default.PropTypes.object,
  'dispatch': _react3.default.PropTypes.func.isRequired,
  'onSubmit': _react3.default.PropTypes.func,
  'static': _react3.default.PropTypes.bool,
  'destroyOnUnmount': _react3.default.PropTypes.bool,
  'locale': _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.string, _react3.default.PropTypes.object])
};

exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, function (dispatch) {
  return { dispatch: dispatch };
})(RenderForm);
module.exports = exports['default'];