'use strict';

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _react = require('react');

var _redboxReact = require('redbox-react');

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reduxForm = require('redux-form');

var _components = {
  _$DropDownType: {
    displayName: 'DropDownType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/dropDown.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var DropDownType = (function (_Component) {
  _inherits(DropDownType, _Component);

  _createClass(DropDownType, null, [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'dispatch': _react.PropTypes.func.isRequired,
      'formName': _react.PropTypes.string.isRequired,
      'formKey': _react.PropTypes.string.isRequired
    },
    enumerable: true
  }]);

  function DropDownType() {
    _classCallCheck(this, _DropDownType);

    _Component.call(this);
    this.dropDownSelect = this.dropDownSelect.bind(this);
    this.dropDown = this.dropDown.bind(this);
  }

  DropDownType.prototype.dropDownSelect = function dropDownSelect(name, item) {
    var _this = this;

    this.setState(_lodash2['default'].set(_Object$assign({}, this.state), ['dropDownTitle', name], item.desc || item['default']));

    return new _Promise(function (resolve) {
      var changeConst = _reduxForm.change(_this.props.formName, name, item.field);
      resolve(_this.props.dispatch(_extends({}, changeConst, {
        'key': _this.props.formKey || undefined
      })));
    }).then(function () {
      // this.refs.button.click();
    });
  };

  DropDownType.prototype.dropDown = function dropDown() {
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
  };

  DropDownType.prototype.render = function render() {
    var _dropDown = this.dropDown();

    var dropDownTitle = _dropDown.dropDownTitle;
    var menuItem = _dropDown.menuItem;

    return _react2['default'].createElement(
      _reactBootstrap.DropdownButton,
      { key: this.props.field.name, className: _lodash2['default'].get(this.props.field, 'className'),
        bsSize: _lodash2['default'].get(this.props.field, 'bsSize', this.props.size),
        bsStyle: _lodash2['default'].get(this.props.field, 'bsStyle', 'primary'),
        title: _lodash2['default'].get(this.state, ['dropDownTitle', this.props.field.name]) || dropDownTitle,
        id: 'input-dropdown-addon' + this.props.field.name },
      menuItem
    );
  };

  var _DropDownType = DropDownType;
  DropDownType = _wrapComponent('_$DropDownType')(DropDownType) || DropDownType;
  return DropDownType;
})(_react.Component);

exports['default'] = DropDownType;
module.exports = exports['default'];