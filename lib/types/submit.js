'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  SubmitType: {
    displayName: 'SubmitType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/submit.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var SubmitType = _wrapComponent('SubmitType')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(SubmitType, _Component);

  function SubmitType() {
    (0, _classCallCheck3.default)(this, SubmitType);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SubmitType).apply(this, arguments));
  }

  (0, _createClass3.default)(SubmitType, [{
    key: 'render',
    value: function render() {
      var thisSize = _lodash2.default.get(this.props.field, 'bsSize', this.props.size);

      if (this.props.pending === true) {
        return _react3.default.createElement(
          _reactBootstrap.Button,
          {
            key: this.props.field.name,
            bsSize: thisSize,
            type: 'button',
            disabled: true,
            bsStyle: _lodash2.default.get(this.props.field, 'style', 'primary')
          },
          this.props.field.value
        );
      }

      return _react3.default.createElement(
        _reactBootstrap.Button,
        {
          bsSize: thisSize,
          type: this.props.field.type,
          bsStyle: _lodash2.default.get(this.props.field, 'style', 'primary')
        },
        this.props.field.value
      );
    }
  }]);
  return SubmitType;
}(_react2.Component), _class.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'size': _react2.PropTypes.string,
  'addField': _react2.PropTypes.func.isRequired,
  'pending': _react2.PropTypes.bool,
  'static': _react2.PropTypes.bool

}, _temp));

exports.default = SubmitType;
module.exports = exports['default'];