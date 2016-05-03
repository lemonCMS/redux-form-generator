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

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  RadioType: {
    displayName: 'RadioType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/radio.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var RadioType = _wrapComponent('RadioType')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(RadioType, _Component);

  function RadioType() {
    (0, _classCallCheck3.default)(this, RadioType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RadioType).call(this));

    _this.options = _this.options.bind(_this);

    if (!(typeof _this.options === 'function')) {
      throw new TypeError('Value of "this.options" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.options));
    }

    _this.radioButtons = _this.radioButtons.bind(_this);

    if (!(typeof _this.radioButtons === 'function')) {
      throw new TypeError('Value of "this.radioButtons" violates contract.\n\nExpected:\n(any, any, any) => any\n\nGot:\n' + _inspect(_this.radioButtons));
    }

    _this.radioButtonWrite = _this.radioButtonWrite.bind(_this);

    if (!(typeof _this.radioButtonWrite === 'function')) {
      throw new TypeError('Value of "this.radioButtonWrite" violates contract.\n\nExpected:\n(any, any, any, any) => any\n\nGot:\n' + _inspect(_this.radioButtonWrite));
    }

    _this.radioButtonStatic = _this.radioButtonStatic.bind(_this);

    if (!(typeof _this.radioButtonStatic === 'function')) {
      throw new TypeError('Value of "this.radioButtonStatic" violates contract.\n\nExpected:\n(any, any, any, any) => any\n\nGot:\n' + _inspect(_this.radioButtonStatic));
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

    _this.state = {
      value: ''
    };
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
    key: 'radioButtonWrite',
    value: function radioButtonWrite(name, option, selectedValue, key) {
      return _react3.default.createElement(
        'div',
        { className: 'radio', key: key },
        _react3.default.createElement(
          'label',
          null,
          _react3.default.createElement('input', {
            name: name,
            type: 'radio',
            value: option.value,
            onChange: this.props.properties.onChange,
            onFocus: this.props.properties.onFocus,
            onUpdate: this.props.properties.onUpdate,
            checked: selectedValue === String(option.value)
          }),
          ' ',
          option.desc
        )
      );
    }
  }, {
    key: 'radioButtonStatic',
    value: function radioButtonStatic(name, option, selectedValue, key) {
      return _react3.default.createElement(
        'p',
        { className: 'form-control-static', key: key },
        selectedValue === String(option.value) ? _react3.default.createElement('i', { className: 'fa fa-dot-circle-o' }) : _react3.default.createElement('i', { className: 'fa fa-circle-o' }),
        ' ',
        option.desc
      );
    }
  }, {
    key: 'radioButtons',
    value: function radioButtons(name, data, selectedValue) {
      var _this2 = this;

      return _lodash2.default.map(data, function (option, key) {
        if (_this2.props.static === true) {
          return _this2.radioButtonStatic(name, option, selectedValue, key);
        }
        return _this2.radioButtonWrite(name, option, selectedValue, key);
      });
    }
  }, {
    key: 'options',
    value: function options() {
      var _this3 = this;

      var _props = this.props;
      var field = _props.field;
      var properties = _props.properties;

      var selectedValue = String(properties.value || properties.initialValue);
      var filtered = this.filtered(_lodash2.default.get(field, 'options', []));

      if (filtered.length === 0) {
        return _react3.default.createElement(
          'span',
          { className: 'help-block' },
          'no results to show'
        );
      }

      if (!!field.chunks) {
        var _ret = function () {
          var split = Math.ceil(filtered.length / field.chunks);
          var chunks = function chunks() {
            var chunkData = _lodash2.default.chunk(filtered, split);
            return _lodash2.default.map(chunkData, function (data, key) {
              return _react3.default.createElement(
                _reactBootstrap.Col,
                { key: key, md: Math.round(12 / field.chunks) },
                _this3.radioButtons(field.name, data, selectedValue)
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

      return this.radioButtons(field.name, filtered, selectedValue);
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
      var _this4 = this;

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

        if (_this4.props.properties.touched && _this4.props.properties.error) {
          return ret + ' has-error';
        }
        return ret;
      };

      var help = function help() {
        if (_this4.props.properties.touched && _this4.props.properties.error) {
          return _react3.default.createElement(
            'span',
            { className: 'help-block' },
            _this4.props.properties.error
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
          this.searchBox(),
          this.options(),
          help()
        )
      );
    }
  }]);
  return RadioType;
}(_react2.Component), _class.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'properties': _react2.PropTypes.object.isRequired,
  'size': _react2.PropTypes.string,
  'addField': _react2.PropTypes.func.isRequired,
  'static': _react2.PropTypes.bool
}, _temp));

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