'use strict';

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _react = require('react');

var _redboxReact = require('redbox-react');

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _components = {
  _$ButtonType: {
    displayName: 'ButtonType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/button.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var ButtonType = (function (_Component) {
  _inherits(ButtonType, _Component);

  function ButtonType() {
    _classCallCheck(this, _ButtonType);

    _Component.apply(this, arguments);
  }

  ButtonType.prototype.render = function render() {
    var thisSize = _lodash2['default'].get(this.props.field, 'bsSize', this.props.size);

    return _react2['default'].createElement(
      _reactBootstrap.Button,
      {
        bsSize: _lodash2['default'].get(this.props.field, 'bsSize', thisSize),
        type: this.props.field.type,
        bsStyle: _lodash2['default'].get(this.props, 'field.style', 'primary')
      },
      this.props.field.value
    );
  };

  _createClass(ButtonType, null, [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'addField': _react.PropTypes.func.isRequired

    },
    enumerable: true
  }]);

  var _ButtonType = ButtonType;
  ButtonType = _wrapComponent('_$ButtonType')(ButtonType) || ButtonType;
  return ButtonType;
})(_react.Component);

exports['default'] = ButtonType;
module.exports = exports['default'];