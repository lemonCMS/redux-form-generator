'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

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

var Wrap = function (_React$Component) {
  (0, _inherits3.default)(Wrap, _React$Component);

  function Wrap() {
    (0, _classCallCheck3.default)(this, Wrap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Wrap.__proto__ || (0, _getPrototypeOf2.default)(Wrap)).call(this));

    _this.input = {};
    _this.custom = {};
    _this.dropdownButton = _this.dropdownButton.bind(_this);
    _this.dropDown = _this.dropDown.bind(_this);
    _this.renderField = _this.renderField.bind(_this);
    _this.options = _this.options.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Wrap, [{
    key: 'options',
    value: function options() {
      if (this.props.field.type === 'select') {
        return (0, _map3.default)((0, _get3.default)(this.props.field, 'options', []), function (option, key) {
          return _react2.default.createElement(
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
          menuItem.push(_react2.default.createElement(
            _MenuItem2.default,
            { key: key, onSelect: select },
            item.default
          ));
          menuItem.push(_react2.default.createElement(_MenuItem2.default, { key: key + '_div', divider: true }));
        } else {
          if (_this2.input.value === item.value) {
            dropDownTitle = item.desc;
          }
          menuItem.push(_react2.default.createElement(
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

      var disabled = false;
      if (this.props.field && this.props.field.disabled && (0, _isFunction3.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      if (isStatic === true || disabled === true) {
        return _react2.default.createElement(
          _FormControl2.default.Static,
          null,
          dropDownTitle || (0, _get3.default)(this.custom, 'placeholder')
        );
      }

      return _react2.default.createElement(
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
      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get3.default)(props, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction3.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get3.default)(props, 'parent')) !== true) {
          return null;
        }
      }

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { bsSize: size };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has3.default)(_this3.props.field, 'labelSize')) {
          return _this3.props.field.labelSize;
        }
        if (_this3.props.horizontal) {
          return { sm: 2 };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this3.props.field, 'fieldSize')) {
          return _this3.props.field.fieldSize;
        }
        if (_this3.props.horizontal) {
          return { sm: 10 };
        }
      };

      var add = (0, _pick3.default)(custom, ['type', 'placeholder', 'rows', 'cols']);
      if (add.type === 'select') {
        add.componentClass = 'select';
      }

      if (custom.disabled && (0, _isFunction3.default)(custom.disabled)) {
        add.disabled = this.props.checkDisabled(custom.disabled(), (0, _get3.default)(props, 'parent'));
      }

      var component = function component() {
        if (_this3.props.static === true || (0, _get3.default)(_this3.props.field, 'static', false) === true) {
          var value = function value() {
            if (props.type === 'select') {
              return (0, _map3.default)((0, _filter3.default)(_this3.props.field.options, { value: _this3.input.value }), function (item, key) {
                return _react2.default.createElement(
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
                return _react2.default.createElement(
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
            return _react2.default.createElement(_FormControl2.default, (0, _extends3.default)({
              componentClass: 'textarea'
            }, input, add));
          case 'select':
            return _react2.default.createElement(
              _FormControl2.default,
              (0, _extends3.default)({
                componentClass: 'textarea'
              }, input, add),
              _this3.options()
            );
          default:
            return _react2.default.createElement(_FormControl2.default, (0, _extends3.default)({}, input, add));
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
            return _react2.default.createElement(
              _InputGroup2.default.Button,
              null,
              _this3.props.addField(_this3.props.field.buttonBefore, 1, size)
            );
          }
          return _react2.default.createElement(
            _InputGroup2.default.Button,
            null,
            _this3.props.addField(_this3.props.field.buttonBefore, 1, size)
          );
        }
      };

      var buttonAfter = function buttonAfter() {
        if ((0, _has3.default)(_this3.props.field, 'buttonAfter')) {
          if (_this3.props.field.buttonAfter.type === 'button') {
            return _react2.default.createElement(
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
          return _react2.default.createElement(
            _InputGroup2.default.Addon,
            null,
            (0, _get3.default)(_this3.props.field, 'addonBefore')
          );
        }
      };

      var addonAfter = function addonAfter() {
        if ((0, _has3.default)(_this3.props.field, 'addonAfter')) {
          return _react2.default.createElement(
            _InputGroup2.default.Addon,
            null,
            (0, _get3.default)(_this3.props.field, 'addonAfter')
          );
        }
      };

      var getField = function getField() {
        if ((0, _has3.default)(_this3.props.field, 'addonBefore') || (0, _has3.default)(_this3.props.field, 'addonAfter') || (0, _has3.default)(_this3.props.field, 'buttonBefore') || (0, _has3.default)(_this3.props.field, 'buttonAfter')) {
          return _react2.default.createElement(
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

      var getLabel = function getLabel() {
        if (label) {
          return _react2.default.createElement(
            _Col2.default,
            (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
            label
          );
        }
      };

      return _react2.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({}, thisSize(), {
          validationState: validationState()
        }),
        getLabel(),
        _react2.default.createElement(
          _Col2.default,
          fieldSize(),
          getField(),
          touched && error && _react2.default.createElement(_FormControl2.default.Feedback, null),
          help && (!touched || !error) && _react2.default.createElement(
            _HelpBlock2.default,
            null,
            help
          ),
          touched && error && _react2.default.createElement(
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
}(_react2.default.Component);

Wrap.propTypes = {
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'size': _propTypes2.default.string,
  'addField': _propTypes2.default.func,
  'static': _propTypes2.default.bool,
  'horizontal': _propTypes2.default.bool.isRequired
};
Wrap.defaultProps = {};

exports.default = Wrap;
//# sourceMappingURL=Wrap.js.map