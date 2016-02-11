Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _utilsFunctions = require('./utils/functions');

var _reactBootstrap = require('react-bootstrap');

var _Pending = require('./Pending');

var _Pending2 = _interopRequireDefault(_Pending);

var _types = require('./types');

var BaseForm = (function (_Component) {
  _inherits(BaseForm, _Component);

  _createClass(BaseForm, null, [{
    key: 'propTypes',
    value: {
      clearActionState: _react.PropTypes.func.isRequired,
      dispatch: _react.PropTypes.func.isRequired,
      fields: _react.PropTypes.object.isRequired,
      fieldsNeeded: _react.PropTypes.array.isRequired,
      formName: _react.PropTypes.string.isRequired,
      formKey: _react.PropTypes.string,
      formClass: _react.PropTypes.string,
      handleSubmit: _react.PropTypes.func.isRequired,
      invalid: _react.PropTypes.bool.isRequired,
      pristine: _react.PropTypes.bool.isRequired,
      submit: _react.PropTypes.func.isRequired,
      getActionState: _react.PropTypes.func.isRequired,
      success: _react.PropTypes.bool,
      token: _react.PropTypes.string,
      valid: _react.PropTypes.bool.isRequired,
      'static': _react.PropTypes.bool
    },
    enumerable: true
  }]);

  function BaseForm() {
    _classCallCheck(this, _BaseForm);

    _get(Object.getPrototypeOf(_BaseForm.prototype), 'constructor', this).call(this);
    this.addField = this.addField.bind(this);
    this.row = this.row.bind(this);
    this.col = this.col.bind(this);
    this.tabs = this.tabs.bind(this);
    this.tab = this.tab.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { displayErrors: false };
  }

  _createClass(BaseForm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$getActionState = this.props.getActionState();

      var success = _props$getActionState.success;

      if (success) {
        this.submit();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$getActionState = nextProps.getActionState();

      var success = _nextProps$getActionState.success;

      if (_lodash2['default'].isEmpty(nextProps.active) && success) {
        this.props.clearActionState();
      }
    }
  }, {
    key: 'submitForm',
    value: function submitForm() {
      this.refs.button.click();
    }
  }, {
    key: 'tabs',
    value: function tabs(field, key, size) {
      var _this = this;

      // Hide fields that are only visible in static mode
      if (!this.props['static'] && !!field.tabs.showOnStatic) {
        return false;
      }
      // Hide fields that are only visible in edit mode
      if (!!this.props['static'] && !!field.tabs.hideOnStatic) {
        return false;
      }

      return _react2['default'].createElement(
        _reactBootstrap.Tabs,
        _extends({ key: key }, _lodash2['default'].omit(field, 'tab')),
        _lodash2['default'].map(field, function (tabs) {
          var thisSize = _lodash2['default'].get(tabs, 'bsSize', size);
          return _this.tab(tabs.tab, thisSize);
        })
      );
    }
  }, {
    key: 'tab',
    value: function tab(tabs, size) {
      var _this2 = this;

      return _lodash2['default'].map(tabs, function (tab, key) {
        var thisSize = _lodash2['default'].get(tab, 'bsSize', size);

        // Hide fields that are only visible in static mode
        if (!_this2.props['static'] && !!tab.showOnStatic) {
          return false;
        }
        // Hide fields that are only visible in edit mode
        if (!!_this2.props['static'] && !!tab.hideOnStatic) {
          return false;
        }

        return _react2['default'].createElement(
          _reactBootstrap.Tab,
          _extends({ key: key, eventKey: key }, _lodash2['default'].omit(col, 'children')),
          _lodash2['default'].map(_lodash2['default'].omit(col.children, ['hideOnStatic']), function (child) {
            return _this2.addField(child, thisSize);
          })
        );
      });
    }
  }, {
    key: 'row',
    value: function row(field, key, size) {
      var _this3 = this;

      // Hide fields that are only visible in static mode
      if (!this.props['static'] && !!field.row.showOnStatic) {
        return false;
      }
      // Hide fields that are only visible in edit mode
      if (!!this.props['static'] && !!field.row.hideOnStatic) {
        return false;
      }

      return _react2['default'].createElement(
        _reactBootstrap.Row,
        { key: key },
        _lodash2['default'].map(field, function (row) {
          var thisSize = _lodash2['default'].get(row, 'bsSize', size);
          return _this3.col(row.col, thisSize);
        })
      );
    }
  }, {
    key: 'col',
    value: function col(cols, size) {
      var _this4 = this;

      return _lodash2['default'].map(cols, function (col, key) {
        var thisSize = _lodash2['default'].get(col, 'bsSize', size);

        // Hide fields that are only visible in static mode
        if (!_this4.props['static'] && !!col.showOnStatic) {
          return false;
        }
        // Hide fields that are only visible in edit mode
        if (!!_this4.props['static'] && !!col.hideOnStatic) {
          return false;
        }

        return _react2['default'].createElement(
          _reactBootstrap.Col,
          _extends({ key: key }, _lodash2['default'].omit(col, 'children')),
          _lodash2['default'].map(_lodash2['default'].omit(col.children, ['hideOnStatic']), function (child) {
            return _this4.addField(child, thisSize);
          })
        );
      });
    }
  }, {
    key: 'addField',
    value: function addField(field, size) {
      // Hide fields that are only visible in static mode
      if (!this.props['static'] && !!field.showOnStatic) {
        return false;
      }
      // Hide fields that are only visible in edit mode
      if (!!this.props['static'] && !!field.hideOnStatic) {
        return false;
      }

      if (!_lodash2['default'].isEmpty(field)) {
        var properties = this.props.fields[field.name];

        switch (field.type) {
          case 'submit':
            return _react2['default'].createElement(_types.GenSubmit, { 'static': this.props['static'], key: field.name, field: field, size: size, properties: properties, addField: this.addField });
          case 'button':
            return _react2['default'].createElement(_types.GenButton, { 'static': this.props['static'], key: field.name, field: field, size: size, properties: properties, addField: this.addField });
          case 'dropdown':
            return _react2['default'].createElement(_types.GenDropDown, { 'static': this.props['static'], submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch, key: field.name, field: field, size: size, properties: properties }); // inputType.input(field, size);
          case 'success':
          case 'error':
            return _react2['default'].createElement(_types.GenMessage, { 'static': this.props['static'], key: field.type, displayErrors: this.state.displayErrors, field: field, size: size, properties: properties, valid: this.props.valid, invalid: this.props.invalid, pristine: this.props.pristine, getActionState: this.props.getActionState }); // return this.message(field, size);
          case 'file':
            return _react2['default'].createElement(_types.GenFile, { 'static': this.props['static'], key: field.name, field: field, size: size, properties: properties, addField: this.addField });
          case 'static':
            return _react2['default'].createElement(_types.GenStatic, { 'static': this.props['static'], key: field.name, field: field, size: size, properties: properties, addField: this.addField });
          case 'plupload':
            return _react2['default'].createElement(_types.GenPlupload, { 'static': this.props['static'], key: field.name, field: field, formKey: this.props.formKey, dispatch: this.props.dispatch, formName: this.props.formName, properties: properties, addField: this.addField }); // return this.plupload(field);
          case 'radio':
            return _react2['default'].createElement(_types.GenRadio, { 'static': this.props['static'], key: field.name, field: field, size: size, properties: properties, addField: this.addField });
          case 'checkboxList':
            return _react2['default'].createElement(_types.GenCheckboxList, { 'static': this.props['static'], formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch, key: field.name, field: field, size: size, properties: properties, addField: this.addField });
          case 'checkboxListiOs':
            return _react2['default'].createElement(_types.GenCheckboxListiOs, { 'static': this.props['static'], formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch, key: field.name, field: field, size: size, properties: properties, addField: this.addField });
          case 'resource':
            return _react2['default'].createElement(_types.GenResource, { 'static': this.props['static'], formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch, key: field.name, field: field, size: size, properties: properties, addField: this.addField });
          case 'rte':
            return _react2['default'].createElement(_types.GenRte, { 'static': this.props['static'], dispatch: this.props.dispatch, key: field.name, field: field, size: size, properties: properties, addField: this.addField, formName: this.props.formName, formKey: this.props.formKey });
          case 'dateTime':
            return _react2['default'].createElement(_types.GenDateTime, { 'static': this.props['static'], key: field.name, field: field, size: size, properties: properties, addField: this.addField });
          case 'react':
            return field.component();
          default:
            return _react2['default'].createElement(_types.GenInput, { 'static': this.props['static'], key: field.name, field: field, size: size, properties: properties, addField: this.addField });
        }
      }
    }
  }, {
    key: 'submit',
    value: function submit() {
      this.setState({ 'displayErrors': true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props$getActionState2 = this.props.getActionState();

      var pending = _props$getActionState2.pending;
      var fieldsNeeded = this.props.fieldsNeeded;

      var handleSubmit = this.props.handleSubmit(this.props.submit);
      return _react2['default'].createElement(
        'form',
        { onSubmit: function (e) {
            _this5.submit();handleSubmit(e);
          }, ref: 'form', className: _lodash2['default'].get(this.props, 'formClass', 'form-horizontal') },
        _react2['default'].createElement('input', { type: 'button', ref: 'button', onClick: function (e) {
            _this5.submit();handleSubmit(e);
          }, className: 'hidden' }),
        _react2['default'].createElement(
          _Pending2['default'],
          { state: pending || false },
          _react2['default'].createElement(
            'div',
            { formKey: this.props.formKey },
            _lodash2['default'].map(fieldsNeeded, function (field, key) {
              var size = _lodash2['default'].get(field, 'bsSize', 'medium');
              if (field.hasOwnProperty('name')) {
                return _this5.addField(field, size);
              } else if (field.hasOwnProperty('row')) {
                return _this5.row(field, key, size);
              } else if (field.hasOwnProperty('tabs')) {
                return _this5.tabs(field, key, size);
              }
            })
          )
        )
      );
    }
  }]);

  var _BaseForm = BaseForm;
  BaseForm = (0, _reactRedux.connect)(function () {
    return {};
  }, _utilsFunctions.mapDispatchToProps)(BaseForm) || BaseForm;
  return BaseForm;
})(_react.Component);

exports['default'] = BaseForm;
module.exports = exports['default'];