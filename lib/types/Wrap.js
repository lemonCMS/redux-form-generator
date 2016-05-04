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

exports.default = connectToWrapper;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Wrap: {
    displayName: 'Wrap',
    isInFunction: true
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/Wrap.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

function connectToWrapper() {
  return function (WrappedComponent) {
    var _class, _temp;

    var Wrap = _wrapComponent('Wrap')((_temp = _class = function (_Component) {
      (0, _inherits3.default)(Wrap, _Component);

      function Wrap() {
        (0, _classCallCheck3.default)(this, Wrap);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Wrap).apply(this, arguments));
      }

      (0, _createClass3.default)(Wrap, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          var size = _lodash2.default.get(this.props.field, 'bsSize', this.props.size);

          var thisSize = function thisSize() {
            if (size !== 'medium') {
              return { bsSize: size };
            }
          };

          var validationMsg = function validationMsg() {
            if (_this2.props.properties.touched && _this2.props.properties.error) {
              return _react3.default.createElement(
                _reactBootstrap.HelpBlock,
                null,
                _this2.props.properties.error
              );
            }

            if (_lodash2.default.has(_this2.props.field, 'helper')) {
              return _react3.default.createElement(
                _reactBootstrap.HelpBlock,
                null,
                _this2.props.field.helper
              );
            }
          };

          var validationState = function validationState() {
            if (_this2.props.properties.touched) {
              if (_this2.props.properties.error) {
                return 'error';
              } else if (_this2.props.properties.success) {
                return 'success';
              }
            }
          };

          var labelSize = function labelSize() {
            if (_lodash2.default.has(_this2.props.field, 'labelSize')) {
              return _this2.props.field.labelSize;
            }

            return { sm: 2 };
          };

          var fieldSize = function fieldSize() {
            if (_lodash2.default.has(_this2.props.field, 'fieldSize')) {
              return _this2.props.field.fieldSize;
            }
            return { sm: 10 };
          };

          // Input with appended stuff
          if (_lodash2.default.has(this.props.field, 'buttonBefore') || _lodash2.default.has(this.props.field, 'buttonAfter') || _lodash2.default.has(this.props.field, 'addonBefore') || _lodash2.default.has(this.props.field, 'addonAfter')) {
            return _react3.default.createElement(
              _reactBootstrap.FormGroup,
              (0, _extends3.default)({ validationState: validationState() }, thisSize()),
              _react3.default.createElement(
                _reactBootstrap.Col,
                (0, _extends3.default)({ componentClass: _reactBootstrap.ControlLabel }, labelSize()),
                this.props.field.label
              ),
              _react3.default.createElement(
                _reactBootstrap.Col,
                fieldSize(),
                _react3.default.createElement(
                  _reactBootstrap.InputGroup,
                  null,
                  function () {
                    if (_lodash2.default.has(_this2.props.field, 'addonBefore')) {
                      return _react3.default.createElement(
                        _reactBootstrap.InputGroup.Addon,
                        null,
                        _lodash2.default.get(_this2.props.field, 'addonBefore')
                      );
                    }
                  }(),
                  function () {
                    if (_lodash2.default.has(_this2.props.field, 'buttonBefore')) {
                      return _react3.default.createElement(
                        _reactBootstrap.InputGroup.Button,
                        null,
                        _this2.props.addField(_lodash2.default.get(_this2.props.field, 'buttonBefore'), size)
                      );
                    }
                  }(),
                  _react3.default.createElement(WrappedComponent, this.props),
                  function () {
                    if (_lodash2.default.has(_this2.props.field, 'buttonAfter')) {
                      return _react3.default.createElement(
                        _reactBootstrap.InputGroup.Button,
                        null,
                        _this2.props.addField(_lodash2.default.get(_this2.props.field, 'buttonAfter'), size)
                      );
                    }
                  }(),
                  function () {
                    if (_lodash2.default.has(_this2.props.field, 'addonAfter')) {
                      return _react3.default.createElement(
                        _reactBootstrap.InputGroup.Addon,
                        null,
                        _lodash2.default.get(_this2.props.field, 'addonAfter')
                      );
                    }
                  }()
                ),
                validationMsg()
              )
            );
          }

          var label = function label() {
            if (_lodash2.default.has(_this2.props, 'field.label')) {
              return _react3.default.createElement(
                _reactBootstrap.Col,
                (0, _extends3.default)({ componentClass: _reactBootstrap.ControlLabel }, labelSize()),
                _this2.props.field.label
              );
            }
          };

          return _react3.default.createElement(
            _reactBootstrap.FormGroup,
            (0, _extends3.default)({ validationState: validationState() }, thisSize()),
            label(),
            _react3.default.createElement(
              _reactBootstrap.Col,
              fieldSize(),
              _react3.default.createElement(WrappedComponent, this.props),
              validationMsg()
            )
          );
        }
      }]);
      return Wrap;
    }(_react2.Component), _class.propTypes = {
      'field': _react2.PropTypes.object.isRequired,
      'properties': _react2.PropTypes.object.isRequired,
      'size': _react2.PropTypes.string,
      'addField': _react2.PropTypes.func.isRequired,
      'static': _react2.PropTypes.bool
    }, _temp));

    return Wrap;
  };
}
module.exports = exports['default'];