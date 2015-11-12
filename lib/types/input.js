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
  _$InputType: {
    displayName: 'InputType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/input.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var InputType = (function (_Component) {
  _inherits(InputType, _Component);

  function InputType() {
    _classCallCheck(this, _InputType);

    _Component.apply(this, arguments);
  }

  InputType.prototype.render = function render() {
    var thisSize = _lodash2['default'].get(this.props.field, 'bsSize', this.props.size);
    var extraProps = {};
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.bsStyle = 'error';
    }
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.help = this.props.properties.error;
    }

    if (this.props['static'] === true && this.props.field.type === 'checkbox') {
      return _react2['default'].createElement(
        _reactBootstrap.FormControls.Static,
        _extends({
          bsSize: thisSize
        }, _lodash2['default'].omit(this.props.field, ['value', 'label']), this.props.properties, {
          buttonBefore: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonBefore', {}), thisSize),
          buttonAfter: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonAfter', {}), thisSize)
        }),
        this.props.properties.value === true ? _react2['default'].createElement('i', { className: 'fa fa-check-square-o' }) : _react2['default'].createElement('i', { className: 'fa fa-square-o' }),
        ' ',
        this.props.field.label
      );
    }

    if (this.props['static'] === true) {
      return _react2['default'].createElement(_reactBootstrap.FormControls.Static, _extends({
        bsSize: thisSize
      }, this.props.field, this.props.properties, {
        buttonBefore: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonBefore', {}), thisSize),
        buttonAfter: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonAfter', {}), thisSize)
      }));
    }

    return _react2['default'].createElement(_reactBootstrap.Input, _extends({
      key: this.props.field.name,
      name: 'search',
      bsSize: thisSize
    }, extraProps, this.props.field, this.props.properties, {
      buttonBefore: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonBefore', {}), thisSize),
      buttonAfter: this.props.addField(_lodash2['default'].get(this.props.field, 'buttonAfter', {}), thisSize)
    }));
  };

  _createClass(InputType, null, [{
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

  var _InputType = InputType;
  InputType = _wrapComponent('_$InputType')(InputType) || InputType;
  return InputType;
})(_react.Component);

exports['default'] = InputType;
module.exports = exports['default'];