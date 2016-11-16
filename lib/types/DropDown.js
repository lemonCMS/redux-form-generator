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

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  DropDownType: {
    displayName: 'DropDownType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/DropDown.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var DropDownType = _wrapComponent('DropDownType')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(DropDownType, _Component);

  function DropDownType() {
    (0, _classCallCheck3.default)(this, DropDownType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DropDownType).call(this));

    _this.dropDownSelect = _this.dropDownSelect.bind(_this);

    if (!(typeof _this.dropDownSelect === 'function')) {
      throw new TypeError('Value of "this.dropDownSelect" violates contract.\n\nExpected:\n(string, Object) => any\n\nGot:\n' + _inspect(_this.dropDownSelect));
    }

    _this.dropDown = _this.dropDown.bind(_this);

    if (!(typeof _this.dropDown === 'function')) {
      throw new TypeError('Value of "this.dropDown" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.dropDown));
    }

    return _this;
  }

  (0, _createClass3.default)(DropDownType, [{
    key: 'dropDownSelect',
    value: function dropDownSelect(name, item) {
      var _this2 = this;

      if (!(typeof name === 'string')) {
        throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
      }

      if (!(item instanceof Object)) {
        throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(item));
      }

      this.setState(_lodash2.default.set((0, _assign2.default)({}, this.state), ['dropDownTitle', name], item.desc || item.default));
      return new _promise2.default(function (resolve) {
        if (_lodash2.default.has(_this2.props, 'formKey')) {
          resolve(_this2.props.dispatch((0, _reduxForm.changeWithKey)(_this2.props.formName, _this2.props.formKey, name, item.value)));
        } else {
          resolve(_this2.props.dispatch((0, _reduxForm.change)(_this2.props.formName, name, item.value)));
        }
      }).then(function () {
        if (!!_this2.props.field.submit && typeof _this2.props.submit === 'function') {
          _this2.props.submit();
        }
      });
    }
  }, {
    key: 'dropDown',
    value: function dropDown() {
      var _this3 = this;

      var menuItem = [];
      var dropDownTitle = null;
      _lodash2.default.map(this.props.field.items, function (item, key) {
        var select = function select() {
          _this3.dropDownSelect(_this3.props.field.name, item);
        };

        if (item.hasOwnProperty('default')) {
          dropDownTitle = item.default;
          menuItem.push(_react3.default.createElement(
            _reactBootstrap.MenuItem,
            { key: key, onSelect: select },
            item.default
          ));
          menuItem.push(_react3.default.createElement(_reactBootstrap.MenuItem, { key: key + '_div', divider: true }));
        } else {
          if (_lodash2.default.get(_this3.props, ['properties', 'initialValue']) === item.value) {
            dropDownTitle = item.desc;
          }
          menuItem.push(_react3.default.createElement(
            _reactBootstrap.MenuItem,
            { key: key, onSelect: select },
            item.desc
          ));
        }
      });
      return { dropDownTitle: dropDownTitle, menuItem: menuItem };
    }
  }, {
    key: 'render',
    value: function render() {
      var _dropDown = this.dropDown();

      var dropDownTitle = _dropDown.dropDownTitle;
      var menuItem = _dropDown.menuItem;


      if (this.props.static) {
        return _react3.default.createElement(
          'div',
          null,
          dropDownTitle
        );
      }

      return _react3.default.createElement(
        _reactBootstrap.DropdownButton,
        { key: this.props.field.name, className: _lodash2.default.get(this.props.field, 'className'),
          onClick: function onClick(e) {
            e.preventDefault();
          },
          bsSize: _lodash2.default.get(this.props.field, 'bsSize', this.props.size),
          bsStyle: _lodash2.default.get(this.props.field, 'bsStyle', 'primary'),
          title: _lodash2.default.get(this.state, ['dropDownTitle', this.props.field.name]) || dropDownTitle,
          id: 'input-dropdown-addon' + this.props.field.name },
        menuItem
      );
    }
  }]);
  return DropDownType;
}(_react2.Component), _class.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'properties': _react2.PropTypes.object.isRequired,
  'size': _react2.PropTypes.string,
  'dispatch': _react2.PropTypes.func.isRequired,
  'submit': _react2.PropTypes.func.isRequired,
  'formName': _react2.PropTypes.string.isRequired,
  'formKey': _react2.PropTypes.string,
  'static': _react2.PropTypes.bool
}, _temp));

exports.default = DropDownType;

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