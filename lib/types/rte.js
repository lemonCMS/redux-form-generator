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

var _class, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxForm = require('redux-form');

var _reactTinymce = require('react-tinymce');

var _reactTinymce2 = _interopRequireDefault(_reactTinymce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  InputType: {
    displayName: 'InputType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/rte.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var InputType = _wrapComponent('InputType')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(InputType, _Component);

  function InputType() {
    (0, _classCallCheck3.default)(this, InputType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InputType).call(this));

    _this.handleEditorChange = _this.handleEditorChange.bind(_this);

    if (!(typeof _this.handleEditorChange === 'function')) {
      throw new TypeError('Value of "this.handleEditorChange" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.handleEditorChange));
    }

    return _this;
  }

  (0, _createClass3.default)(InputType, [{
    key: 'handleEditorChange',
    value: function handleEditorChange(e) {

      if (_lodash2.default.has(this.props, 'formKey')) {
        this.props.dispatch((0, _reduxForm.changeWithKey)(this.props.formName, this.props.formKey, this.props.field.name, e.target.getContent()));
      } else {
        this.props.dispatch((0, _reduxForm.change)(this.props.formName, this.props.field.name, e.target.getContent()));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var thisSize = _lodash2.default.get(this.props.field, 'bsSize', this.props.size);
      var field = this.props.field;

      var getClass = function getClass() {
        var classNames = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        var ret = classNames;
        if (thisSize === 'large') {
          ret = ret + ' form-group-lg';
        }

        if (thisSize === 'small') {
          ret = ret + ' form-group-sm';
        }

        if (_this2.props.properties.touched && _this2.props.properties.error) {
          return ret + ' has-error';
        }
        return ret;
      };

      var help = function help() {
        if (_this2.props.properties.touched && _lodash2.default.has(_this2.props.properties, 'error')) {
          return _react3.default.createElement(
            'span',
            { className: 'help-block' },
            _this2.props.properties.error
          );
        }
      };

      var label = function label() {
        if (!!field.label) {
          return _react3.default.createElement(
            'label',
            { className: 'control-label ' + _lodash2.default.get(field, 'labelClassName') },
            field.label
          );
        }
      };

      var createMarkup = function createMarkup(data) {
        return { __html: data };
      };

      if (this.props.static) {
        return _react3.default.createElement(
          'div',
          { key: field.name, className: getClass('form-group') },
          label(),
          _react3.default.createElement(
            'div',
            { className: field.wrapperClassName },
            _react3.default.createElement('div', { dangerouslySetInnerHTML: createMarkup(this.props.properties.defaultValue || this.props.properties.value) })
          )
        );
      }

      return _react3.default.createElement(
        'div',
        { key: field.name, className: getClass('form-group') },
        label(),
        _react3.default.createElement(
          'div',
          { className: field.wrapperClassName },
          _react3.default.createElement(_reactTinymce2.default, (0, _extends3.default)({
            content: this.props.properties.initialValue || this.props.properties.value
          }, this.props.field, {
            onChange: this.handleEditorChange
          })),
          help()
        )
      );
    }
  }]);
  return InputType;
}(_react2.Component), _class.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'properties': _react2.PropTypes.object.isRequired,
  'dispatch': _react2.PropTypes.func.isRequired,
  'size': _react2.PropTypes.string,
  'addField': _react2.PropTypes.func.isRequired,
  'static': _react2.PropTypes.bool,
  'formName': _react2.PropTypes.string,
  'formKey': _react2.PropTypes.string
}, _temp));

exports.default = InputType;

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