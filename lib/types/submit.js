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

var SubmitType = (function (_Component) {
  _inherits(SubmitType, _Component);

  function SubmitType() {
    _classCallCheck(this, SubmitType);

    _get(Object.getPrototypeOf(SubmitType.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SubmitType, [{
    key: 'render',
    value: function render() {
      var thisSize = _lodash2['default'].get(this.props.field, 'bsSize', this.props.size);

      if (this.props.pending === true) {
        return _react2['default'].createElement(
          _reactBootstrap.Button,
          {
            key: this.props.field.name,
            bsSize: thisSize,
            type: 'button',
            disabled: true,
            bsStyle: _lodash2['default'].get(this.props.field, 'style', 'primary')
          },
          this.props.field.value
        );
      }

      return _react2['default'].createElement(
        _reactBootstrap.Button,
        {
          bsSize: thisSize,
          type: this.props.field.type,
          bsStyle: _lodash2['default'].get(this.props.field, 'style', 'primary')
        },
        this.props.field.value
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'addField': _react.PropTypes.func.isRequired,
      'pending': _react.PropTypes.bool,
      'static': _react.PropTypes.bool

    },
    enumerable: true
  }]);

  return SubmitType;
})(_react.Component);

exports['default'] = SubmitType;
module.exports = exports['default'];