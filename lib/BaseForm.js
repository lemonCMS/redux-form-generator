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

var _dec, _class, _class2, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRedux = require('react-redux');

var _functions = require('./utils/functions');

var _reactBootstrap = require('react-bootstrap');

var _Pending = require('./Pending');

var _Pending2 = _interopRequireDefault(_Pending);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  BaseForm: {
    displayName: 'BaseForm'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/BaseForm.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var BaseForm = _wrapComponent('BaseForm')((_dec = (0, _reactRedux.connect)(function () {
  return {};
}, _functions.mapDispatchToProps), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(BaseForm, _Component);

  function BaseForm() {
    (0, _classCallCheck3.default)(this, BaseForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BaseForm).call(this));

    _this.addField = _this.addField.bind(_this);

    if (!(typeof _this.addField === 'function')) {
      throw new TypeError('Value of "this.addField" violates contract.\n\nExpected:\n(any, any) => any\n\nGot:\n' + _inspect(_this.addField));
    }

    _this.addComplexField = _this.addComplexField.bind(_this);

    if (!(typeof _this.addComplexField === 'function')) {
      throw new TypeError('Value of "this.addComplexField" violates contract.\n\nExpected:\n(any, any, any) => any\n\nGot:\n' + _inspect(_this.addComplexField));
    }

    _this.row = _this.row.bind(_this);

    if (!(typeof _this.row === 'function')) {
      throw new TypeError('Value of "this.row" violates contract.\n\nExpected:\n(any, any, any) => any\n\nGot:\n' + _inspect(_this.row));
    }

    _this.col = _this.col.bind(_this);

    if (!(typeof _this.col === 'function')) {
      throw new TypeError('Value of "this.col" violates contract.\n\nExpected:\n(any, any) => any\n\nGot:\n' + _inspect(_this.col));
    }

    _this.submitForm = _this.submitForm.bind(_this);

    if (!(typeof _this.submitForm === 'function')) {
      throw new TypeError('Value of "this.submitForm" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.submitForm));
    }

    _this.submit = _this.submit.bind(_this);

    if (!(typeof _this.submit === 'function')) {
      throw new TypeError('Value of "this.submit" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.submit));
    }

    _this.state = { displayErrors: false };
    return _this;
  }

  (0, _createClass3.default)(BaseForm, [{
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
      var _nextProps$getActionS = nextProps.getActionState();

      var success = _nextProps$getActionS.success;

      if (_lodash2.default.isEmpty(nextProps.active) && success) {
        this.props.clearActionState();
      }
    }
  }, {
    key: 'submitForm',
    value: function submitForm() {
      this.refs.button.click();
    }
  }, {
    key: 'row',
    value: function row(field, key, size) {
      var _this2 = this;

      // Hide fields that are only visible in static mode
      if (!this.props.static && !!field.row.showOnStatic) {
        return false;
      }
      // Hide fields that are only visible in edit mode
      if (!!this.props.static && !!field.row.hideOnStatic) {
        return false;
      }

      return _react3.default.createElement(
        _reactBootstrap.Row,
        { key: key },
        _lodash2.default.map(field, function (row, keyRow) {
          var thisSize = _lodash2.default.get(row, 'bsSize', size);
          return _react3.default.createElement(
            'div',
            { key: keyRow },
            _this2.col(row.col, thisSize)
          );
        })
      );
    }
  }, {
    key: 'col',
    value: function col(cols, size) {
      var _this3 = this;

      return _lodash2.default.map(cols, function (col, key) {
        var thisSize = _lodash2.default.get(col, 'bsSize', size);

        // Hide fields that are only visible in static mode
        if (!_this3.props.static && !!col.showOnStatic) {
          return false;
        }
        // Hide fields that are only visible in edit mode
        if (!!_this3.props.static && !!col.hideOnStatic) {
          return false;
        }

        return _react3.default.createElement(
          _reactBootstrap.Col,
          (0, _extends3.default)({ key: key }, _lodash2.default.omit(col, 'children')),
          _lodash2.default.map(_lodash2.default.omit(col.children, ['hideOnStatic']), function (child, keyCol) {
            return _react3.default.createElement(
              'div',
              { key: keyCol },
              _this3.addField(child, thisSize)
            );
          })
        );
      });
    }
  }, {
    key: 'addComplexField',
    value: function addComplexField(field, size, properties) {
      if (!_lodash2.default.isEmpty(field)) {
        switch (field.type) {
          case 'radio':
            return _react3.default.createElement(_types.RadioNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'checkbox':
            return _react3.default.createElement(_types.CheckboxNode, { 'static': this.props.static, formName: this.props.formName,
              formKey: this.props.formKey, dispatch: this.props.dispatch, key: field.name,
              field: field, size: size, properties: properties, addField: this.addField });
          case 'select':
            return _react3.default.createElement(_types.SelectNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'text':
            return _react3.default.createElement(_types.TextNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'password':
            return _react3.default.createElement(_types.PasswordNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'file':
            return _react3.default.createElement(_types.FileNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'plain':
            return _react3.default.createElement(_types.PlainNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'dateTime':
            return _react3.default.createElement(_types.DateTimeNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'textarea':
            return _react3.default.createElement(_types.TextareaNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'dropDown':
            return _react3.default.createElement(_types.DropDownNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField, submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch });
          case 'rte':
            return _react3.default.createElement(_types.RteNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField, submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch });
          case 'resource':
            return _react3.default.createElement(_types.ResourceNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField, submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch });
          case 'resource2':
            return _react3.default.createElement(_types.ResourceNode2, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField, submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch });
          case 'plupload':
            return _react3.default.createElement(_types.PluploadNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField, submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch });
          default:
            console.warn('No complex render available for:', field);
            return _react3.default.createElement(
              'div',
              null,
              'Failure'
            );
        }
      }
    }
  }, {
    key: 'addField',
    value: function addField(field, size) {
      // Hide fields that are only visible in static mode
      if (!this.props.static && !!field.showOnStatic) {
        return false;
      }
      // Hide fields that are only visible in edit mode
      if (!!this.props.static && !!field.hideOnStatic) {
        return false;
      }

      var createMarkup = function createMarkup(data) {
        return { __html: data };
      };

      if (!_lodash2.default.isEmpty(field)) {
        var properties = this.props.fields[String(field.name).replace(/[\[\]']+/g, '')];

        switch (field.type) {
          case 'complex':
            return _react3.default.createElement(_types.ComplexNode, { 'static': this.props.static, key: field.name, field: field, size: size,
              properties: properties, addComplexField: this.addComplexField });
          case 'submit':
            return _react3.default.createElement(_types.SubmitNode, { 'static': this.props.static, key: field.name, field: field, size: size,
              properties: properties, addField: this.addField });
          case 'button':
            return _react3.default.createElement(_types.ButtonNode, { 'static': this.props.static, key: field.name, field: field, size: size,
              properties: properties, addField: this.addField });
          case 'html':
            return _react3.default.createElement('div', { dangerouslySetInnerHTML: createMarkup(field.message) });

          case 'success':
          case 'error':
            return _react3.default.createElement(_types.MessageNode, { 'static': this.props.static, key: field.type, displayErrors: this.state.displayErrors,
              field: field, size: size, properties: properties, valid: this.props.valid,
              invalid: this.props.invalid, pristine: this.props.pristine,
              getActionState: this.props.getActionState }); // return this.message(field, size);
          case 'static':
            return _react3.default.createElement(_types.StaticNode, { 'static': this.props.static, key: field.name, field: field, size: size,
              properties: properties, addField: this.addField });
          case 'checkboxListiOs':
            return _react3.default.createElement(_types.CheckboxListiOsNode, { 'static': this.props.static, formName: this.props.formName,
              formKey: this.props.formKey, dispatch: this.props.dispatch, key: field.name,
              field: field, size: size, properties: properties, addField: this.addField });
          case 'jsx':
          case 'react':
            return field.component();
          case 'radio':
            return _react3.default.createElement(_types.RadioNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'checkbox':
            return _react3.default.createElement(_types.CheckboxNode, { 'static': this.props.static, formName: this.props.formName,
              formKey: this.props.formKey, dispatch: this.props.dispatch, key: field.name,
              field: field, size: size, properties: properties, addField: this.addField });
          case 'select':
            return _react3.default.createElement(_types.SelectNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'text':
            return _react3.default.createElement(_types.TextNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'password':
            return _react3.default.createElement(_types.PasswordNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'file':
            return _react3.default.createElement(_types.FileNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'plain':
            return _react3.default.createElement(_types.PlainNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'dateTime':
            return _react3.default.createElement(_types.DateTimeNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'textarea':
            return _react3.default.createElement(_types.TextareaNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField });
          case 'dropDown':
            return _react3.default.createElement(_types.DropDownNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField, submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch });
          case 'rte':
            return _react3.default.createElement(_types.RteNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField, submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch });
          case 'resource':
            return _react3.default.createElement(_types.ResourceNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField, submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch });
          case 'resource2':
            return _react3.default.createElement(_types.ResourceNode2, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField, submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch });
          case 'plupload':
            return _react3.default.createElement(_types.PluploadNode, { 'static': this.props.static, key: field.name, field: field, size: size, properties: properties,
              addField: this.addField, submit: this.submitForm, formName: this.props.formName, formKey: this.props.formKey, dispatch: this.props.dispatch });
          default:
            console.warn('No render available for:', field);
            return _react3.default.createElement(
              'div',
              null,
              'Failure'
            );
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
      var _this4 = this;

      var _props$getActionState2 = this.props.getActionState();

      var pending = _props$getActionState2.pending;
      var fieldsNeeded = this.props.fieldsNeeded;

      var handleSubmit = this.props.handleSubmit(this.props.submit);
      return _react3.default.createElement(
        _reactBootstrap.Form,
        { onSubmit: function onSubmit(e) {
            _this4.submit();handleSubmit(e);
          }, ref: 'form',
          horizontal: _lodash2.default.get(this.props, 'formClass', 'form-horizontal') === 'form-horizontal' },
        _react3.default.createElement('input', { type: 'button', ref: 'button', onClick: function onClick(e) {
            _this4.submit();handleSubmit(e);
          }, className: 'hidden' }),
        _react3.default.createElement(
          _Pending2.default,
          { state: pending || false },
          _react3.default.createElement(
            'div',
            { formKey: this.props.formKey },
            _lodash2.default.map(fieldsNeeded, function (field, key) {
              var size = _lodash2.default.get(field, 'bsSize', 'medium');
              if (field.hasOwnProperty('name')) {
                return _this4.addField(field, size);
              } else if (field.hasOwnProperty('row')) {
                return _this4.row(field, key, size);
              }
            })
          )
        )
      );
    }
  }]);
  return BaseForm;
}(_react2.Component), _class2.propTypes = {
  clearActionState: _react2.PropTypes.func.isRequired,
  dispatch: _react2.PropTypes.func.isRequired,
  fields: _react2.PropTypes.object.isRequired,
  fieldsNeeded: _react2.PropTypes.array.isRequired,
  formName: _react2.PropTypes.string.isRequired,
  formKey: _react2.PropTypes.string,
  formClass: _react2.PropTypes.string,
  handleSubmit: _react2.PropTypes.func.isRequired,
  invalid: _react2.PropTypes.bool.isRequired,
  pristine: _react2.PropTypes.bool.isRequired,
  submit: _react2.PropTypes.func.isRequired,
  getActionState: _react2.PropTypes.func.isRequired,
  success: _react2.PropTypes.bool,
  token: _react2.PropTypes.string,
  valid: _react2.PropTypes.bool.isRequired,
  static: _react2.PropTypes.bool
}, _temp)) || _class));

exports.default = BaseForm;

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