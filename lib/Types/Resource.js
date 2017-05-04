'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _uniq2 = require('lodash/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _indexOf2 = require('lodash/indexOf');

var _indexOf3 = _interopRequireDefault(_indexOf2);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _reduxForm = require('redux-form');

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Resource: {
    displayName: 'Resource'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Types/Resource.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Resource = _wrapComponent('Resource')(function (_React$Component) {
  (0, _inherits3.default)(Resource, _React$Component);

  function Resource() {
    (0, _classCallCheck3.default)(this, Resource);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Resource.__proto__ || (0, _getPrototypeOf2.default)(Resource)).call(this));

    _this.renderField = _this.renderField.bind(_this);

    if (!(typeof _this.renderField === 'function')) {
      throw new TypeError('Value of "this.renderField" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.renderField));
    }

    _this.openResource = _this.openResource.bind(_this);

    if (!(typeof _this.openResource === 'function')) {
      throw new TypeError('Value of "this.openResource" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.openResource));
    }

    _this.closeResource = _this.closeResource.bind(_this);

    if (!(typeof _this.closeResource === 'function')) {
      throw new TypeError('Value of "this.closeResource" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.closeResource));
    }

    _this.onChange = _this.onChange.bind(_this);

    if (!(typeof _this.onChange === 'function')) {
      throw new TypeError('Value of "this.onChange" violates contract.\n\nExpected:\n(any, any) => any\n\nGot:\n' + _inspect(_this.onChange));
    }

    _this.options = _this.options.bind(_this);

    if (!(typeof _this.options === 'function')) {
      throw new TypeError('Value of "this.options" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.options));
    }

    _this.callBack = _this.callBack.bind(_this);

    if (!(typeof _this.callBack === 'function')) {
      throw new TypeError('Value of "this.callBack" violates contract.\n\nExpected:\n(any, any) => any\n\nGot:\n' + _inspect(_this.callBack));
    }

    _this.state = {
      showResource: false
    };
    _this.input = null;
    return _this;
  }

  (0, _createClass3.default)(Resource, [{
    key: 'onChange',
    value: function onChange(e, value) {
      var values = this.input.value;
      if ((typeof values === 'undefined' ? 'undefined' : (0, _typeof3.default)(values)) !== 'object') {
        values = [values];
      }
      if (e.target.checked === true) {
        values.push(value);
      } else {
        values.splice((0, _indexOf3.default)(values, value), 1);
      }

      this.input.onChange((0, _uniq3.default)(values));
    }
  }, {
    key: 'options',
    value: function options() {
      var _this2 = this;

      var field = this.props.field;

      var options = (0, _map3.default)(this.state.list || (0, _get3.default)(field, 'list', []), function (option, key) {
        return _react3.default.createElement(
          'p',
          { className: 'form-control-static', key: key },
          (0, _indexOf3.default)(_this2.input.value, option.value) > -1 ? _react3.default.createElement('i', { className: 'fa fa-check-square-o' }) : _react3.default.createElement('i', { className: 'fa fa-square-o' }),
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
    key: 'callBack',
    value: function callBack(values, list) {
      var _this3 = this;

      this.setState({
        list: list
      }, function () {
        _this3.input.onChange((0, _uniq3.default)(values));
      });
    }
  }, {
    key: 'openResource',
    value: function openResource() {
      this.setState({ showResource: true });
    }
  }, {
    key: 'closeResource',
    value: function closeResource() {
      this.setState({ showResource: false });
    }
  }, {
    key: 'renderField',
    value: function renderField(props) {
      var _this4 = this;

      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden()) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction3.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show()) !== true) {
          return null;
        }
      }

      var input = props.input,
          label = props.label,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
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
        if ((0, _has3.default)(_this4.props.field, 'labelSize')) {
          return _this4.props.field.labelSize;
        }
        if (_this4.props.horizontal) {
          return { sm: 2 };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this4.props.field, 'fieldSize')) {
          return _this4.props.field.fieldSize;
        }
        if (_this4.props.horizontal) {
          return { sm: 10 };
        }
      };

      var disabled = false;
      if (this.props.field && this.props.field.disabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      var component = function component() {
        var button = function button() {
          if (!_this4.props.static) {
            return _react3.default.createElement(
              _Button2.default,
              { onClick: _this4.openResource, disabled: disabled },
              (0, _get3.default)(_this4.props, 'field.buttonResource', 'open')
            );
          }
        };

        var clonedValues = function clonedValues() {
          if ((0, _isEmpty3.default)(_this4.input.value)) {
            return [];
          }

          return (0, _clone3.default)(_this4.input.value);
        };

        var resourceProps = {
          clonedValues: clonedValues(),
          clonedList: (0, _clone3.default)(_this4.state.list) || (0, _clone3.default)(_this4.props.field.list),
          callBack: _this4.callBack,
          show: _this4.state.showResource,
          closeResource: _this4.closeResource
        };

        return _react3.default.createElement(
          'div',
          null,
          button(),
          _this4.options(),
          _this4.props.field.resource(resourceProps)
        );
      };

      return _react3.default.createElement(
        _FormGroup2.default,
        thisSize(),
        _react3.default.createElement(
          _Col2.default,
          (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
          label
        ),
        _react3.default.createElement(
          _Col2.default,
          fieldSize(),
          component(),
          touched && error && _react3.default.createElement(
            _FormControl2.default.Feedback,
            null,
            error
          ),
          help && _react3.default.createElement(
            _HelpBlock2.default,
            null,
            help
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(_reduxForm.Field, (0, _extends3.default)({
        component: this.renderField
      }, (0, _omit3.default)(this.props.field, ['disabled', 'hidden', 'type']), {
        size: this.props.size,
        showResource: this.state.showResource,
        locale: this.props.locale,
        checkDisabled: this.props.checkDisabled,
        checkHidden: this.props.checkHidden,
        checkShow: this.props.checkShow
      }));
    }
  }]);
  return Resource;
}(_react3.default.Component));

Resource.propTypes = {
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'size': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'locale': _propTypes2.default.object,
  'horizontal': _propTypes2.default.bool.isRequired
};
Resource.defaultProps = {};

exports.default = Resource;

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