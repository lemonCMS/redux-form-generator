'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _DropdownButton = require('react-bootstrap/lib/DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _InputGroup = require('react-bootstrap/lib/InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _reactFinalForm = require('react-final-form');

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));

    _this.renderComponent = _this.renderComponent.bind(_this);
    _this.state = {
      value: '',
      menuItems: []
    };
    _this.input = null;
    _this.meta = null;
    return _this;
  }

  _createClass(Input, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var menuItems = [];
      var dropDownTitle = (0, _get3.default)(this.props.field, 'title', '');

      var change = function change(item) {
        _this2.input.onChange(item.value);
        _this2.setState({ title: item.desc });
      };

      (0, _map3.default)(this.props.field.items, function (item, key) {
        if (item.hasOwnProperty('default')) {
          dropDownTitle = item.default;
          menuItems.push(_react2.default.createElement(
            _MenuItem2.default,
            { key: key, onSelect: function onSelect() {
                change(item);
              } },
            item.default
          ));
          menuItems.push(_react2.default.createElement(_MenuItem2.default, { key: key + '_div', divider: true }));
        } else {
          if ((0, _get3.default)(_this2.meta, ['initial']) === item.value) {
            dropDownTitle = item.desc;
          }
          menuItems.push(_react2.default.createElement(
            _MenuItem2.default,
            { key: key, onSelect: function onSelect() {
                change(item);
              } },
            item.desc
          ));
        }
      });
      this.setState({ title: dropDownTitle, menuItems: menuItems });
    }
  }, {
    key: 'renderComponent',
    value: function renderComponent(props) {
      this.input = props.input;
      this.meta = props.meta;
      var defaultTitle = null;
      if (this.meta.initial !== undefined && this.input.value === this.meta.initial) {
        defaultTitle = (0, _get3.default)((0, _find3.default)(props.items, { value: this.meta.initial }), 'desc', null);
      }

      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get3.default)(this.props.field, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction3.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get3.default)(this.props.field, 'parent')) !== true) {
          return null;
        }
      }

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

      return _react2.default.createElement(
        _DropdownButton2.default,
        _extends({
          componentClass: _InputGroup2.default.Button
        }, thisSize(), {
          type: 'button',
          pullRight: true
        }, (0, _pick3.default)(this.props.field, ['placeholder', 'bsStyle', 'onClick', 'onBlur', 'block', 'active', 'href', 'id', 'pullRight', 'dropup']), {
          disabled: disabled,
          title: this.state.title || defaultTitle
        }),
        this.state.menuItems
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactFinalForm.Field, _extends({
        component: this.renderComponent
      }, (0, _omit3.default)(this.props.field, ['hidden']), {
        size: this.props.size,
        checkDisabled: this.props.checkDisabled,
        checkHidden: this.props.checkHidden,
        checkShow: this.props.checkShow
      }));
    }
  }]);

  return Input;
}(_react2.default.Component);

Input.propTypes = {
  'field': _propTypes2.default.object,
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'size': _propTypes2.default.string
};
Input.defaultProps = {};

exports.default = Input;