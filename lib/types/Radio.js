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

var _dec, _class, _class2, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Wrap = require('./Wrap');

var _Wrap2 = _interopRequireDefault(_Wrap);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  RadioType: {
    displayName: 'RadioType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/Radio.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var RadioType = _wrapComponent('RadioType')((_dec = (0, _Wrap2.default)(), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(RadioType, _Component);

  function RadioType() {
    (0, _classCallCheck3.default)(this, RadioType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RadioType.__proto__ || (0, _getPrototypeOf2.default)(RadioType)).call(this));

    _this.radioButtons = _this.radioButtons.bind(_this);

    if (!(typeof _this.radioButtons === 'function')) {
      throw new TypeError('Value of "this.radioButtons" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.radioButtons));
    }

    _this.radioButtonList = _this.radioButtonList.bind(_this);

    if (!(typeof _this.radioButtonList === 'function')) {
      throw new TypeError('Value of "this.radioButtonList" violates contract.\n\nExpected:\n(any, any) => any\n\nGot:\n' + _inspect(_this.radioButtonList));
    }

    _this.getValue = _this.getValue.bind(_this);

    if (!(typeof _this.getValue === 'function')) {
      throw new TypeError('Value of "this.getValue" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.getValue));
    }

    _this.filtered = _this.filtered.bind(_this);

    if (!(typeof _this.filtered === 'function')) {
      throw new TypeError('Value of "this.filtered" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.filtered));
    }

    _this.searchBox = _this.searchBox.bind(_this);

    if (!(typeof _this.searchBox === 'function')) {
      throw new TypeError('Value of "this.searchBox" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.searchBox));
    }

    _this.handleChange = _this.handleChange.bind(_this);

    if (!(typeof _this.handleChange === 'function')) {
      throw new TypeError('Value of "this.handleChange" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.handleChange));
    }

    _this.state = { value: '' };
    return _this;
  }

  (0, _createClass3.default)(RadioType, [{
    key: 'filtered',
    value: function filtered(options) {
      var value = this.state.value;

      var strValue = String(value).toLowerCase();
      if (value !== '') {
        return _lodash2.default.filter(options, function (option) {
          return _lodash2.default.includes(String(option.desc).toLowerCase(), strValue);
        });
      }
      return options;
    }
  }, {
    key: 'radioButtonList',
    value: function radioButtonList(list, selectedValue) {
      var _this2 = this;

      return _lodash2.default.map(list, function (option, key) {
        return _react3.default.createElement(
          _reactBootstrap.Radio,
          {
            key: key,
            name: _this2.props.field.name,
            value: option.value,
            onChange: _this2.props.properties.onChange,
            onFocus: _this2.props.properties.onFocus,
            onUpdate: _this2.props.properties.onUpdate,
            checked: selectedValue === String(option.value)
          },
          option.desc
        );
      });
    }
  }, {
    key: 'radioButtons',
    value: function radioButtons() {
      var _this3 = this;

      var selectedValue = String(_lodash2.default.get(this.props.properties, 'value') || _lodash2.default.get(this.props.properties, 'initialValue'));
      var filtered = this.filtered(_lodash2.default.get(this.props.field, 'options', []));
      var field = _lodash2.default.get(this.props, 'field');

      if (filtered.length === 0) {
        return _react3.default.createElement(
          _reactBootstrap.Alert,
          null,
          'Er zijn geen resultaten'
        );
      }

      if (!!field.chunks) {
        var _ret = function () {
          var split = Math.ceil(filtered.length / field.chunks);
          var chunks = function chunks() {
            var chunkData = _lodash2.default.chunk(filtered, split);
            return _lodash2.default.map(chunkData, function (chunk, key) {
              return _react3.default.createElement(
                _reactBootstrap.Col,
                { key: key, md: Math.round(12 / field.chunks) },
                _this3.radioButtonList(chunk, selectedValue)
              );
            });
          };
          return {
            v: _react3.default.createElement(
              _reactBootstrap.Row,
              null,
              chunks()
            )
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
      }

      return _lodash2.default.map(filtered, function (option, key) {
        return _react3.default.createElement(
          _reactBootstrap.Radio,
          {
            key: key,
            name: _this3.props.field.name,
            value: option.value,
            onChange: _this3.props.properties.onChange,
            onFocus: _this3.props.properties.onFocus,
            onUpdate: _this3.props.properties.onUpdate,
            checked: selectedValue === String(option.value)
          },
          option.desc
        );
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var options = _lodash2.default.get(this.props.field, 'options', []);
      var value = String(this.props.properties.initialValue || this.props.properties.value);
      var index = _lodash2.default.findIndex(options, ['value', value]);
      if (index > -1 && _lodash2.default.has(options, [index, 'desc'])) {
        return _react3.default.createElement(
          'span',
          null,
          _react3.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
          ' ',
          _lodash2.default.get(options, [index, 'desc'], '-')
        );
      }
    }
  }, {
    key: 'handlePrevent',
    value: function handlePrevent(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'searchBox',
    value: function searchBox() {
      if (!!this.props.field.searchable && !this.props.static) {
        return _react3.default.createElement('input', { type: 'text', placeholder: 'search', defaultValue: this.state.value, onKeyDown: this.handlePrevent, onKeyUp: this.handleChange, className: 'form-control' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.static === true) {
        return _react3.default.createElement(
          _reactBootstrap.FormControl.Static,
          { type: 'text', placeholder: _lodash2.default.get(this.props.field, 'placeholder', '')
          },
          this.getValue()
        );
      }

      return _react3.default.createElement(
        'div',
        null,
        this.searchBox(),
        this.radioButtons()
      );
    }
  }]);
  return RadioType;
}(_react2.Component), _class2.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'properties': _react2.PropTypes.object.isRequired,
  'size': _react2.PropTypes.string,
  'addField': _react2.PropTypes.func.isRequired,
  'static': _react2.PropTypes.bool
}, _temp)) || _class));

exports.default = RadioType;

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
      var _ret2 = function () {
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

      if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
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