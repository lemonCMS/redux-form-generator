Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _BaseForm = require('./BaseForm');

var _BaseForm2 = _interopRequireDefault(_BaseForm);

var _utilsFunctions = require('./utils/functions');

var DynamicForm = (function (_Component) {
  _inherits(DynamicForm, _Component);

  function DynamicForm() {
    _classCallCheck(this, DynamicForm);

    _get(Object.getPrototypeOf(DynamicForm.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DynamicForm, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      // Important when using @connect, without this the form goes into a infinite loop.
      var updateComponent = true;
      if (this.props.checkKey === nextProps.checkKey) {
        updateComponent = false;
      }
      return updateComponent;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var _props = this.props;
      var formName = _props.formName;
      var fieldsNeeded = _props.fieldsNeeded;

      var DynamicInnerForm = (0, _reduxForm.reduxForm)({
        form: formName,
        fields: (0, _utilsFunctions.filterFields)(fieldsNeeded),
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
    }
  }], [{
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

  return DynamicForm;
})(_react.Component);

exports['default'] = DynamicForm;
module.exports = exports['default'];