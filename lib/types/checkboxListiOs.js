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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  CheckboxListTypeiOs: {
    displayName: 'CheckboxListTypeiOs'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/checkboxListiOs.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var CheckboxListTypeiOs = _wrapComponent('CheckboxListTypeiOs')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(CheckboxListTypeiOs, _Component);

  function CheckboxListTypeiOs() {
    (0, _classCallCheck3.default)(this, CheckboxListTypeiOs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckboxListTypeiOs).call(this));

    _this.options = _this.options.bind(_this);

    if (!(typeof _this.options === 'function')) {
      throw new TypeError('Value of "this.options" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.options));
    }

    _this.onChange = _this.onChange.bind(_this);

    if (!(typeof _this.onChange === 'function')) {
      throw new TypeError('Value of "this.onChange" violates contract.\n\nExpected:\n(any, any) => any\n\nGot:\n' + _inspect(_this.onChange));
    }

    _this.options = _this.options.bind(_this);

    if (!(typeof _this.options === 'function')) {
      throw new TypeError('Value of "this.options" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.options));
    }

    _this.optionsWrite = _this.optionsWrite.bind(_this);

    if (!(typeof _this.optionsWrite === 'function')) {
      throw new TypeError('Value of "this.optionsWrite" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.optionsWrite));
    }

    _this.optionsStatic = _this.optionsStatic.bind(_this);

    if (!(typeof _this.optionsStatic === 'function')) {
      throw new TypeError('Value of "this.optionsStatic" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.optionsStatic));
    }

    return _this;
  }

  (0, _createClass3.default)(CheckboxListTypeiOs, [{
    key: 'onChange',
    value: function onChange(e, value) {
      var properties = this.props.properties;

      var values = _lodash2.default.get(properties, 'value') || _lodash2.default.get(properties, 'initialValue', []);

      if ((typeof values === 'undefined' ? 'undefined' : (0, _typeof3.default)(values)) !== 'object') {
        values = [values];
      }
      if (e.target.checked === true) {
        values.push(value);
      } else {
        values.splice(_lodash2.default.indexOf(values, value), 1);
      }

      if (_lodash2.default.has(this.props, 'formKey')) {
        this.props.dispatch((0, _reduxForm.changeWithKey)(this.props.formName, this.props.formKey, this.props.field.name, _lodash2.default.uniq(values)));
      } else {
        this.props.dispatch((0, _reduxForm.change)(this.props.formName, this.props.field.name, _lodash2.default.uniq(values)));
      }
    }
  }, {
    key: 'options',
    value: function options() {
      var properties = this.props.properties;

      var selectedValue = properties.value || properties.defaultValue;

      if (this.props.static === true) {
        return this.optionsStatic(selectedValue);
      }
      return this.optionsWrite(selectedValue);
    }
  }, {
    key: 'optionsWrite',
    value: function optionsWrite(selectedValue) {
      var _this2 = this;

      var field = this.props.field;

      return _lodash2.default.map(_lodash2.default.get(field, 'options', []), function (option, key) {
        return _react3.default.createElement(
          'div',
          { className: 'checkbox', key: key },
          _react3.default.createElement(
            'div',
            { className: 'onoffswitch' },
            _react3.default.createElement('input', {
              type: 'checkbox',
              className: 'onoffswitch-checkbox',
              value: option.value,
              checked: _lodash2.default.indexOf(selectedValue, option.value) > -1,
              onChange: function onChange(e) {
                _this2.onChange(e, option.value);
              },
              id: 'myonoff-' + field.name + option.value
            }),
            _react3.default.createElement('label', { className: 'onoffswitch-label', htmlFor: 'myonoff-' + field.name + option.value })
          ),
          ' ',
          option.desc
        );
      });
    }
  }, {
    key: 'optionsStatic',
    value: function optionsStatic(selectedValue) {
      var field = this.props.field;

      var options = _lodash2.default.map(_lodash2.default.get(field, 'options', []), function (option, key) {
        return _react3.default.createElement(
          'div',
          { className: 'checkbox', key: key },
          _react3.default.createElement(
            'div',
            { className: 'onoffswitch' },
            _react3.default.createElement('input', {
              type: 'checkbox',
              className: 'onoffswitch-checkbox',
              value: option.value,
              checked: _lodash2.default.indexOf(selectedValue, option.value) > -1,
              id: 'myonoff-' + field.name + option.value,
              readOnly: true
            }),
            _react3.default.createElement('label', { className: 'onoffswitch-label', htmlFor: 'myonoff-' + field.name + option.value })
          ),
          ' ',
          option.desc
        );
      });

      return _react3.default.createElement(
        'div',
        { className: 'checkbox' },
        options
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

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

        if (_this3.props.properties.touched && _this3.props.properties.error) {
          return ret + ' has-error';
        }
        return ret;
      };

      var help = function help() {
        if (_this3.props.properties.touched && _lodash2.default.has(_this3.props.properties, 'error')) {
          return _react3.default.createElement(
            'span',
            { className: 'help-block' },
            _this3.props.properties.error
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

      return _react3.default.createElement(
        'div',
        { key: field.name, className: getClass('form-group') },
        label(),
        _react3.default.createElement(
          'div',
          { className: field.wrapperClassName },
          this.options(),
          help()
        )
      );
    }
  }]);
  return CheckboxListTypeiOs;
}(_react2.Component), _class.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'dispatch': _react2.PropTypes.func.isRequired,
  'properties': _react2.PropTypes.object.isRequired,
  'size': _react2.PropTypes.string,
  'formName': _react2.PropTypes.string.isRequired,
  'formKey': _react2.PropTypes.string,
  'addField': _react2.PropTypes.func.isRequired,
  'static': _react2.PropTypes.bool
}, _temp));

exports.default = CheckboxListTypeiOs;

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