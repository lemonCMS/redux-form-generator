'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _dec, _class, _class2, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Wrap = require('./Wrap');

var _Wrap2 = _interopRequireDefault(_Wrap);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  TextType: {
    displayName: 'TextType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/Text.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var TextType = _wrapComponent('TextType')((_dec = (0, _Wrap2.default)(), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(TextType, _Component);

  function TextType() {
    (0, _classCallCheck3.default)(this, TextType);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TextType).apply(this, arguments));
  }

  (0, _createClass3.default)(TextType, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = function value() {
        if (!_lodash2.default.isEmpty(_lodash2.default.get(_this2.props.properties, 'value', ''))) {
          return _lodash2.default.get(_this2.props.properties, 'value');
        }

        return _lodash2.default.get(_this2.props.properties, 'initialValue', '');
      };

      if (this.props.static === true) {
        return _react3.default.createElement(
          _reactBootstrap.FormControl.Static,
          { type: 'text' },
          value()
        );
      }

      var spread = _lodash2.default.pick(this.props.field, ['disabled', 'placeholder']);

      return _react3.default.createElement(_reactBootstrap.FormControl, (0, _extends3.default)({
        type: 'text'
      }, spread, this.props.properties));
    }
  }]);
  return TextType;
}(_react2.Component), _class2.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'properties': _react2.PropTypes.object.isRequired,
  'size': _react2.PropTypes.string,
  'addField': _react2.PropTypes.func.isRequired,
  'static': _react2.PropTypes.bool
}, _temp)) || _class));

exports.default = TextType;
module.exports = exports['default'];