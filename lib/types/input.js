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

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  InputType: {
    displayName: 'InputType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/input.js',
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

    _this.options = _this.options.bind(_this);

    if (!(typeof _this.options === 'function')) {
      throw new TypeError('Value of "this.options" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.options));
    }

    _this.getValue = _this.getValue.bind(_this);

    if (!(typeof _this.getValue === 'function')) {
      throw new TypeError('Value of "this.getValue" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.getValue));
    }

    return _this;
  }

  (0, _createClass3.default)(InputType, [{
    key: 'options',
    value: function options() {
      if (this.props.field.type === 'select') {
        return _lodash2.default.map(_lodash2.default.get(this.props.field, 'options', []), function (option, key) {
          return _react3.default.createElement(
            'option',
            { key: key, value: option.value },
            option.desc
          );
        });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var options = _lodash2.default.get(this.props.field, 'options', []);
      var value = this.props.properties.initialValue || this.props.properties.value;
      return _lodash2.default.get(options, [_lodash2.default.findIndex(options, ['value', value]), 'desc'], '');
    }
  }, {
    key: 'render',
    value: function render() {
      var thisSize = _lodash2.default.get(this.props.field, 'bsSize', this.props.size);
      var extraProps = {};
      if (this.props.properties.touched && this.props.properties.error) {
        extraProps.bsStyle = 'error';
      }
      if (this.props.properties.touched && this.props.properties.error) {
        extraProps.help = this.props.properties.error;
      }

      if (this.props.static === true && this.props.field.type === 'checkbox') {
        var value = this.props.properties.initialValue || this.props.properties.value;
        return _react3.default.createElement(
          _reactBootstrap.FormControls.Static,
          (0, _extends3.default)({
            bsSize: thisSize
          }, _lodash2.default.omit(this.props.field, ['value', 'label']), _lodash2.default.omit(this.props.properties, ['value', 'initialValue']), {
            buttonBefore: this.props.addField(_lodash2.default.get(this.props.field, 'buttonBefore', {}), thisSize),
            buttonAfter: this.props.addField(_lodash2.default.get(this.props.field, 'buttonAfter', {}), thisSize)
          }),
          value === true ? _react3.default.createElement('i', { className: 'fa fa-check-square-o' }) : _react3.default.createElement('i', { className: 'fa fa-square-o' }),
          ' ',
          this.props.field.label
        );
      }

      if (this.props.static === true && this.props.field.type === 'select') {
        return _react3.default.createElement(_reactBootstrap.FormControls.Static, (0, _extends3.default)({
          bsSize: thisSize,
          value: this.getValue()
        }, _lodash2.default.omit(this.props.field, ['value']), _lodash2.default.omit(this.props.properties, ['value', 'initialValue']), {
          buttonBefore: this.props.addField(_lodash2.default.get(this.props.field, 'buttonBefore', {}), thisSize),
          buttonAfter: this.props.addField(_lodash2.default.get(this.props.field, 'buttonAfter', {}), thisSize)
        }));
      }

      if (this.props.static === true) {
        return _react3.default.createElement(
          _reactBootstrap.FormControls.Static,
          (0, _extends3.default)({
            bsSize: thisSize
          }, this.props.field, {
            value: this.props.properties.initialValue || this.props.properties.value
          }, _lodash2.default.omit(this.props.properties, ['value', 'initialValue']), {
            buttonBefore: this.props.addField(_lodash2.default.get(this.props.field, 'buttonBefore', {}), thisSize),
            buttonAfter: this.props.addField(_lodash2.default.get(this.props.field, 'buttonAfter', {}), thisSize)
          }),
          this.options()
        );
      }

      return _react3.default.createElement(
        _reactBootstrap.Input,
        (0, _extends3.default)({
          key: this.props.field.name,
          name: 'search',
          bsSize: thisSize
        }, extraProps, this.props.field, this.props.properties, {
          buttonBefore: this.props.addField(_lodash2.default.get(this.props.field, 'buttonBefore', {}), thisSize),
          buttonAfter: this.props.addField(_lodash2.default.get(this.props.field, 'buttonAfter', {}), thisSize)
        }),
        this.options()
      );
    }
  }]);
  return InputType;
}(_react2.Component), _class.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'properties': _react2.PropTypes.object.isRequired,
  'size': _react2.PropTypes.string,
  'addField': _react2.PropTypes.func.isRequired,
  'static': _react2.PropTypes.bool
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