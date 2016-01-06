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

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _components = {
  _$PlainType: {
    displayName: 'PlainType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/plain.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var PlainType = (function (_Component) {
  _inherits(PlainType, _Component);

  function PlainType() {
    _classCallCheck(this, _PlainType);

    _Component.apply(this, arguments);
  }

  PlainType.prototype.render = function render() {
    var createMarkup = function createMarkup(data) {
      return { __html: data };
    };
    return _react2['default'].createElement('div', _extends({}, this.props.field, {
      dangerouslySetInnerHTML: createMarkup(this.props.field.value)
    }));
  };

  _createClass(PlainType, null, [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'addField': _react.PropTypes.func.isRequired,
      'static': _react.PropTypes.bool
    },
    enumerable: true
  }]);

  var _PlainType = PlainType;
  PlainType = _wrapComponent('_$PlainType')(PlainType) || PlainType;
  return PlainType;
})(_react.Component);

exports['default'] = PlainType;
module.exports = exports['default'];