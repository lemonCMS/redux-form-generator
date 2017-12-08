'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pending = function (_Component) {
  _inherits(Pending, _Component);

  function Pending() {
    _classCallCheck(this, Pending);

    var _this = _possibleConstructorReturn(this, (Pending.__proto__ || Object.getPrototypeOf(Pending)).call(this));

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

  _createClass(Pending, [{
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