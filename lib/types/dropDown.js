Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reduxForm = require('redux-form');

var DropDownType = (function (_Component) {
  _inherits(DropDownType, _Component);

  _createClass(DropDownType, null, [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'dispatch': _react.PropTypes.func.isRequired,
      'submit': _react.PropTypes.func.isRequired,
      'formName': _react.PropTypes.string.isRequired,
      'formKey': _react.PropTypes.string
    },
    enumerable: true
  }]);

  function DropDownType() {
    _classCallCheck(this, DropDownType);

    _get(Object.getPrototypeOf(DropDownType.prototype), 'constructor', this).call(this);
    this.dropDownSelect = this.dropDownSelect.bind(this);
    this.dropDown = this.dropDown.bind(this);
  }

  _createClass(DropDownType, [{
    key: 'dropDownSelect',
    value: function dropDownSelect(name, item) {
      var _this = this;

      this.setState(_lodash2['default'].set(Object.assign({}, this.state), ['dropDownTitle', name], item.desc || item['default']));

      return new Promise(function (resolve) {
        if (_lodash2['default'].has(_this.props, 'formKey')) {
          resolve(_this.props.dispatch((0, _reduxForm.changeWithKey)(_this.props.formName, _this.props.formKey, name, item.field)));
        } else {
          resolve(_this.props.dispatch((0, _reduxForm.change)(_this.props.formName, name, item.field)));
        }
      }).then(function () {
        if (!!_this.props.field.submit && typeof _this.props.submit === 'function') {
          _this.props.submit();
        }
      });
    }
  }, {
    key: 'dropDown',
    value: function dropDown() {
      var _this2 = this;

      var menuItem = [];
      var dropDownTitle = null;
      _lodash2['default'].map(this.props.field.items, function (item, key) {
        var select = function select() {
          _this2.dropDownSelect(_this2.props.field.name, item);
        };

        if (item.hasOwnProperty('default')) {
          dropDownTitle = item['default'];
          menuItem.push(_react2['default'].createElement(
            _reactBootstrap.MenuItem,
            { key: key, onSelect: select },
            item['default']
          ));
          menuItem.push(_react2['default'].createElement(_reactBootstrap.MenuItem, { key: key + '_div', divider: true }));
        } else {
          if (_lodash2['default'].get(_this2.props, ['properties', 'defaultValue']) === item.field) {
            dropDownTitle = item.desc;
          }
          menuItem.push(_react2['default'].createElement(
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

      if (this.props['static']) {
        return _react2['default'].createElement(
          'div',
          null,
          dropDownTitle
        );
      }

      return _react2['default'].createElement(
        _reactBootstrap.DropdownButton,
        { key: this.props.field.name, className: _lodash2['default'].get(this.props.field, 'className'),
          onClick: function (e) {
            e.preventDefault();
          },
          bsSize: _lodash2['default'].get(this.props.field, 'bsSize', this.props.size),
          bsStyle: _lodash2['default'].get(this.props.field, 'bsStyle', 'primary'),
          title: _lodash2['default'].get(this.state, ['dropDownTitle', this.props.field.name]) || dropDownTitle,
          id: 'input-dropdown-addon' + this.props.field.name },
        menuItem
      );
    }
  }]);

  return DropDownType;
})(_react.Component);

exports['default'] = DropDownType;
module.exports = exports['default'];