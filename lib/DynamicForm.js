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

var _class, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxForm = require('redux-form');

var _BaseForm = require('./BaseForm');

var _BaseForm2 = _interopRequireDefault(_BaseForm);

var _functions = require('./utils/functions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  DynamicForm: {
    displayName: 'DynamicForm'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/DynamicForm.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

RegExp.quote = function (str) {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
};

var DynamicForm = _wrapComponent('DynamicForm')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(DynamicForm, _Component);

  function DynamicForm() {
    (0, _classCallCheck3.default)(this, DynamicForm);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DynamicForm).apply(this, arguments));
  }

  (0, _createClass3.default)(DynamicForm, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (!(nextProps instanceof Object)) {
        throw new TypeError('Value of argument "nextProps" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(nextProps));
      }

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
      var _this2 = this;

      var _props = this.props;
      var formName = _props.formName;
      var fieldsNeeded = _props.fieldsNeeded;

      var DynamicInnerForm = (0, _reduxForm.reduxForm)({
        form: formName,
        fields: (0, _functions.filterFields)(fieldsNeeded),
        validate: function validate(values) {
          if (_lodash2.default.has(_this2.props, 'validate')) {
            return _this2.props.validate(values);
          }
          return {};
        },
        destroyOnUnmount: _lodash2.default.get(this.props, 'destroyOnUnmount', true)
      })(_BaseForm2.default);

      return _react3.default.createElement(DynamicInnerForm, {
        formClass: this.props.formClass,
        'static': this.props.static,
        formName: this.props.formName,
        formKey: this.props.formKey || null,
        initialValues: this.props.initialValues,
        fieldsNeeded: this.props.fieldsNeeded,
        submit: function submit(data, dispatch) {
          if (_this2.props.hasOwnProperty('onSubmit')) {
            return _this2.props.onSubmit(data, dispatch);
          }
        },

        getActionState: function getActionState() {
          if (_this2.props.hasOwnProperty('getActionState')) {
            return _this2.props.getActionState();
          }
          return function () {
            return {
              success: false,
              failed: false,
              pending: false
            };
          };
        },
        clearActionState: function clearActionState() {
          if (_this2.props.hasOwnProperty('clearActionState')) {
            return _this2.props.clearActionState();
          }
          return function () {};
        }
      });
    }
  }]);
  return DynamicForm;
}(_react2.Component), _class.propTypes = {
  checkKey: _react2.PropTypes.string.isRequired,
  formName: _react2.PropTypes.string.isRequired,
  formKey: _react2.PropTypes.string,
  fieldsNeeded: _react2.PropTypes.array.isRequired,
  formClass: _react2.PropTypes.string,
  initialValues: _react2.PropTypes.object,
  onSubmit: _react2.PropTypes.func,
  getActionState: _react2.PropTypes.func,
  clearActionState: _react2.PropTypes.func,
  validate: _react2.PropTypes.func,
  destroyOnUnmount: _react2.PropTypes.bool,
  success: _react2.PropTypes.bool,
  static: _react2.PropTypes.bool
}, _temp));

exports.default = DynamicForm;

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