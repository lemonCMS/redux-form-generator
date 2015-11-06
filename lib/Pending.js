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

var _react2 = _interopRequireDefault(_react);

var _components = {
  _$Pending: {
    displayName: 'Pending'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/Pending.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var Pending = (function (_Component) {
  _inherits(Pending, _Component);

  _createClass(Pending, null, [{
    key: 'propTypes',
    value: {
      state: _react.PropTypes.bool,
      children: _react2['default'].PropTypes.oneOfType([_react.PropTypes.object.isRequired, _react.PropTypes.array.isRequired])
    },
    enumerable: true
  }]);

  function Pending() {
    _classCallCheck(this, _Pending);

    _Component.call(this);
    this.pending = this.pending.bind(this);
  }

  Pending.prototype.pending = function pending() {
    if (this.props.hasOwnProperty('state') && this.props.state === true) {
      return [_react2['default'].createElement('div', { key: '1', className: 'pendingOverlayBackground' }), _react2['default'].createElement(
        'div',
        { key: '2', className: 'pendingOverlayContent' },
        _react2['default'].createElement(
          'div',
          { className: 'pendingOverLayTable' },
          _react2['default'].createElement(
            'h1',
            null,
            'LADEN',
            ' ',
            _react2['default'].createElement('i', { className: 'fa fa-spinner fa-pulse' })
          )
        )
      )];
    }
  };

  Pending.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'pendingWrapper' },
      this.pending(),
      this.props.children
    );
  };

  var _Pending = Pending;
  Pending = _wrapComponent('_$Pending')(Pending) || Pending;
  return Pending;
})(_react.Component);

exports['default'] = Pending;
module.exports = exports['default'];