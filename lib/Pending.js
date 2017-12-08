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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pending = function (_Component) {
  (0, _inherits3.default)(Pending, _Component);

  function Pending() {
    (0, _classCallCheck3.default)(this, Pending);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Pending.__proto__ || (0, _getPrototypeOf2.default)(Pending)).call(this));

    _this.pending = _this.pending.bind(_this);
    _this.css = {
      pendingWrapper: {
        position: 'relative'
      },
      pendingOverlayBackground: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        backgroundColor: '#fff',
        opacity: '0.2',
        zIndex: '999'
      },
      pendingOverlayContent: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        color: '#333',
        zIndex: '1000'
      },
      pendingOverlayContentCentered: {
        textAlign: 'center'
      }
    };
    return _this;
  }

  (0, _createClass3.default)(Pending, [{
    key: 'pending',
    value: function pending() {
      if (this.props.pending === true) {
        return [_react2.default.createElement('div', { key: '1', style: this.css.pendingOverlayBackground }), _react2.default.createElement(
          'div',
          { key: '2', style: this.css.pendingOverlayContent },
          _react2.default.createElement(
            'div',
            { style: this.css.pendingOverlayContentCentered },
            _react2.default.createElement('i', { className: 'fa fa-spinner fa-pulse' })
          )
        )];
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.css.pendingWrapper },
        this.pending(),
        this.props.children
      );
    }
  }]);
  return Pending;
}(_react.Component);

Pending.propTypes = {
  pending: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.object.isRequired, _propTypes2.default.array.isRequired])
};

exports.default = Pending;