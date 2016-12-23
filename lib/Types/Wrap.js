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

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputGroup = require('react-bootstrap/lib/InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DropdownButton = require('react-bootstrap/lib/DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Wrap: {
    displayName: 'Wrap'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Types/Wrap.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Wrap = _wrapComponent('Wrap')(function (_React$Component) {
  (0, _inherits3.default)(Wrap, _React$Component);

  function Wrap() {
    (0, _classCallCheck3.default)(this, Wrap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Wrap.__proto__ || (0, _getPrototypeOf2.default)(Wrap)).call(this));

    _this.input = {};
    _this.custom = {};
    _this.dropdownButton = _this.dropdownButton.bind(_this);

    if (!(typeof _this.dropdownButton === 'function')) {
      throw new TypeError('Value of "this.dropdownButton" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.dropdownButton));
    }

    _this.dropDown = _this.dropDown.bind(_this);

    if (!(typeof _this.dropDown === 'function')) {
      throw new TypeError('Value of "this.dropDown" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.dropDown));
    }

    _this.renderField = _this.renderField.bind(_this);

    if (!(typeof _this.renderField === 'function')) {
      throw new TypeError('Value of "this.renderField" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.renderField));
    }

    _this.options = _this.options.bind(_this);

    if (!(typeof _this.options === 'function')) {
      throw new TypeError('Value of "this.options" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.options));
    }

    return _this;
  }

  (0, _createClass3.default)(Wrap, [{
    key: 'options',
    value: function options() {
      if (this.props.field.type === 'select') {
        return (0, _map3.default)((0, _get3.default)(this.props.field, 'options', []), function (option, key) {
          return _react3.default.createElement(
            'option',
            { key: key, value: option.value },
            option.desc
          );
        });
      }
    }
  }, {
    key: 'dropDown',
    value: function dropDown() {
      var _this2 = this;

      var menuItem = [];
      var dropDownTitle = null;
      (0, _map3.default)(this.custom.items, function (item, key) {
        var select = function select() {
          _this2.input.onBlur();
          _this2.input.onChange(item.value);
        };

        if (item.hasOwnProperty('default')) {
          dropDownTitle = item.default;
          menuItem.push(_react3.default.createElement(
            _MenuItem2.default,
            { key: key, onSelect: select },
            item.default
          ));
          menuItem.push(_react3.default.createElement(_MenuItem2.default, { key: key + '_div', divider: true }));
        } else {
          if (_this2.input.value === item.value) {
            dropDownTitle = item.desc;
          }
          menuItem.push(_react3.default.createElement(
            _MenuItem2.default,
            { key: key, onSelect: select },
            item.desc
          ));
        }
      });
      return { dropDownTitle: dropDownTitle, menuItem: menuItem };
    }
  }, {
    key: 'dropdownButton',
    value: function dropdownButton(isStatic) {
      var _dropDown = this.dropDown(),
          dropDownTitle = _dropDown.dropDownTitle,
          menuItem = _dropDown.menuItem;

      var size = (0, _get3.default)(this.props.field, 'bsSize', this.props.size);
      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { bsSize: size };
        }
      };

      if (isStatic === true) {
        return _react3.default.createElement(
          _FormControl2.default.Static,
          null,
          dropDownTitle || (0, _get3.default)(this.custom, 'placeholder')
        );
      }

      return _react3.default.createElement(
        _DropdownButton2.default,
        (0, _extends3.default)({ key: this.input.name,
          onClick: function onClick(event) {
            event.preventDefault();
          }
        }, thisSize(), {
          title: dropDownTitle || (0, _get3.default)(this.custom, 'placeholder'),
          id: 'input-dropdown-addon' + this.input.name }),
        menuItem
      );
    }
  }, {
    key: 'renderField',
    value: function renderField(props) {
      var _this3 = this;

      var input = props.input,
          label = props.label,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          valid = _props$meta.valid,
          custom = (0, _objectWithoutProperties3.default)(props, ['input', 'label', 'help', 'meta']);

      this.input = input;
      this.custom = custom;
      var size = (0, _get3.default)(this.props.field, 'bsSize', this.props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { bsSize: size };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has3.default)(_this3.props.field, 'labelSize')) {
          return _this3.props.field.labelSize;
        }
        return { sm: 2 };
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this3.props.field, 'fieldSize')) {
          return _this3.props.field.fieldSize;
        }
        return { sm: 10 };
      };

      var add = (0, _pick3.default)(custom, ['type', 'placeholder', 'rows', 'cols']);
      if (add.type === 'select') {
        add.componentClass = 'select';
      }

      var component = function component() {
        if (_this3.props.static === true || (0, _get3.default)(_this3.props.field, 'static', false) === true) {
          var value = function value() {
            if (props.type === 'select') {
              return (0, _map3.default)((0, _filter3.default)(_this3.props.field.options, { value: _this3.input.value }), function (item, key) {
                return _react3.default.createElement(
                  'span',
                  { key: key },
                  item.desc
                );
              });
            }
            return _this3.input.value;
          };

          switch (props.type) {
            case 'dropDown':
              return _this3.dropdownButton(true);
            default:
              {
                return _react3.default.createElement(
                  _FormControl2.default.Static,
                  null,
                  value()
                );
              }
          }
        }

        switch (props.type) {
          case 'dropDown':
            return _this3.dropdownButton(false);
          case 'textarea':
            return _react3.default.createElement(_FormControl2.default, (0, _extends3.default)({
              componentClass: 'textarea'
            }, input, add));
          default:
            return _react3.default.createElement(
              _FormControl2.default,
              (0, _extends3.default)({}, input, add),
              _this3.options()
            );
        }
      };

      var validationState = function validationState() {
        if (touched && error) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

      var buttonBefore = function buttonBefore() {
        if ((0, _has3.default)(_this3.props.field, 'buttonBefore')) {
          if (_this3.props.field.buttonBefore.type === 'button') {
            return _react3.default.createElement(
              _InputGroup2.default.Button,
              null,
              _this3.props.addField(_this3.props.field.buttonBefore, 1, size)
            );
          }
          return _react3.default.createElement(
            _InputGroup2.default.Button,
            null,
            _this3.props.addField(_this3.props.field.buttonBefore, 1, size)
          );
        }
      };

      var buttonAfter = function buttonAfter() {
        if ((0, _has3.default)(_this3.props.field, 'buttonAfter')) {
          if (_this3.props.field.buttonAfter.type === 'button') {
            return _react3.default.createElement(
              _InputGroup2.default.Button,
              null,
              _this3.props.addField(_this3.props.field.buttonAfter, 1, size)
            );
          }
          return _this3.props.addField(_this3.props.field.buttonAfter, 1, size);
        }
      };

      var addonBefore = function addonBefore() {
        if ((0, _has3.default)(_this3.props.field, 'addonBefore')) {
          return _react3.default.createElement(
            _InputGroup2.default.Addon,
            null,
            (0, _get3.default)(_this3.props.field, 'addonBefore')
          );
        }
      };

      var addonAfter = function addonAfter() {
        if ((0, _has3.default)(_this3.props.field, 'addonAfter')) {
          return _react3.default.createElement(
            _InputGroup2.default.Addon,
            null,
            (0, _get3.default)(_this3.props.field, 'addonAfter')
          );
        }
      };

      var getField = function getField() {
        if ((0, _has3.default)(_this3.props.field, 'addonBefore') || (0, _has3.default)(_this3.props.field, 'addonAfter') || (0, _has3.default)(_this3.props.field, 'buttonBefore') || (0, _has3.default)(_this3.props.field, 'buttonAfter')) {
          return _react3.default.createElement(
            _InputGroup2.default,
            null,
            buttonBefore(),
            addonBefore(),
            component(),
            addonAfter(),
            buttonAfter()
          );
        }

        return component();
      };

      if (this.props.field.type === 'dropDown' && !(0, _has3.default)(this.props.field, 'label')) {
        return getField();
      }

      return _react3.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({}, thisSize(), {
          validationState: validationState()
        }),
        _react3.default.createElement(
          _Col2.default,
          (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
          label
        ),
        _react3.default.createElement(
          _Col2.default,
          fieldSize(),
          getField(),
          touched && error && _react3.default.createElement(_FormControl2.default.Feedback, null),
          help && (!touched || !error) && _react3.default.createElement(
            _HelpBlock2.default,
            null,
            help
          ),
          touched && error && _react3.default.createElement(
            _HelpBlock2.default,
            null,
            error
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Wrap;
}(_react3.default.Component));

Wrap.propTypes = {
  'field': _react3.default.PropTypes.object,
  'size': _react3.default.PropTypes.string,
  'addField': _react3.default.PropTypes.func,
  'static': _react3.default.PropTypes.bool,
  'locale': _react3.default.PropTypes.object
};
Wrap.defaultProps = {};

exports.default = Wrap;

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