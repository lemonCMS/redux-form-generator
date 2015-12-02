'use strict';

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _react = require('react');

var _redboxReact = require('redbox-react');

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _BaseForm = require('./BaseForm');

var _BaseForm2 = _interopRequireDefault(_BaseForm);

var _utilsFunctions = require('./utils/functions');

var _components = {
  _$DynamicForm: {
    displayName: 'DynamicForm'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/DynamicForm.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var DynamicForm = (function (_Component) {
  _inherits(DynamicForm, _Component);

  function DynamicForm() {
    _classCallCheck(this, _DynamicForm);

    _Component.apply(this, arguments);
  }

  DynamicForm.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    // Important when using @connect, without this the form goes into a infinite loop.
    var updateComponent = true;
    if (this.props.checkKey === nextProps.checkKey) {
      updateComponent = false;
    }
    return updateComponent;
  };

  DynamicForm.prototype.render = function render() {
    var _this = this;

    var _props = this.props;
    var formName = _props.formName;
    var fieldsNeeded = _props.fieldsNeeded;

    var DynamicInnerForm = _reduxForm.reduxForm({
      form: formName,
      fields: _utilsFunctions.filterFields(fieldsNeeded),
      validate: function validate(values) {
        if (_lodash2['default'].has(_this.props, 'validate')) {
          return _this.props.validate(values);
        }
        return {};
      }
    })(_BaseForm2['default']);

    return _react2['default'].createElement(DynamicInnerForm, {
      formClass: this.props.formClass,
      'static': this.props['static'],
      formName: this.props.formName,
      formKey: this.props.formKey || null,
      initialValues: this.props.initialValues,
      fieldsNeeded: this.props.fieldsNeeded,
      submit: function (data, dispatch) {
        if (_this.props.hasOwnProperty('onSubmit')) {
          return _this.props.onSubmit(data, dispatch);
        }
      },

      getActionState: function () {
        if (_this.props.hasOwnProperty('getActionState')) {
          return _this.props.getActionState();
        }
        return function () {
          return {
            success: false,
            failed: false,
            pending: false
          };
        };
      },
      clearActionState: function () {
        if (_this.props.hasOwnProperty('clearActionState')) {
          return _this.props.clearActionState();
        }
        return function () {};
      }
    });
  };

  _createClass(DynamicForm, null, [{
    key: 'propTypes',
    value: {
      checkKey: _react.PropTypes.string.isRequired,
      formName: _react.PropTypes.string.isRequired,
      formKey: _react.PropTypes.string,
      fieldsNeeded: _react.PropTypes.array.isRequired,
      formClass: _react.PropTypes.string,
      initialValues: _react.PropTypes.object,
      onSubmit: _react.PropTypes.func,
      getActionState: _react.PropTypes.func,
      clearActionState: _react.PropTypes.func,
      validate: _react.PropTypes.func,
      success: _react.PropTypes.bool,
      'static': _react.PropTypes.bool
    },
    enumerable: true
  }]);

  var _DynamicForm = DynamicForm;
  DynamicForm = _wrapComponent('_$DynamicForm')(DynamicForm) || DynamicForm;
  return DynamicForm;
})(_react.Component);

exports['default'] = DynamicForm;
module.exports = exports['default'];