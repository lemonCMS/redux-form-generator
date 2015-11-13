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

// import {Input, FormControls} from 'react-bootstrap';

var _components = {
  _$RadioType: {
    displayName: 'RadioType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/radio.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var RadioType = (function (_Component) {
  _inherits(RadioType, _Component);

  _createClass(RadioType, null, [{
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

  function RadioType() {
    _classCallCheck(this, _RadioType);

    _Component.call(this);
    this.options = this.options.bind(this);
  }

  RadioType.prototype.options = function options() {
    var _this = this;

    var _props = this.props;
    var field = _props.field;
    var properties = _props.properties;

    var selectedValue = String(properties.value || properties.defaultValue);
    if (field.type === 'radio') {
      return _lodash2['default'].map(_lodash2['default'].get(field, 'options', []), function (option, key) {
        return _react2['default'].createElement(
          'div',
          { key: key },
          _react2['default'].createElement(
            'label',
            null,
            _react2['default'].createElement('input', {
              name: field.name,
              type: 'radio',
              value: option.value,
              onChange: _this.props.properties.onChange,
              onFocus: _this.props.properties.onFocus,
              onUpdate: _this.props.properties.onUpdate,
              checked: selectedValue === String(option.value)
            }),
            ' ',
            option.desc
          )
        );
      });
    }
  };

  RadioType.prototype.render = function render() {
    var _this2 = this;

    var thisSize = _lodash2['default'].get(this.props.field, 'bsSize', this.props.size);
    var field = this.props.field;

    var getClass = function getClass() {
      var classNames = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      var ret = classNames;
      if (thisSize === 'large') {
        ret = ret + ' form-group-lg';
      }

      if (thisSize === 'small') {
        ret = ret + ' form-group-sm';
      }

      if (_this2.props.properties.touched && _this2.props.properties.error) {
        return ret + ' has-error';
      }
      return ret;
    };

    var help = function help() {
      if (_lodash2['default'].has(_this2.props.properties, 'error')) {
        return _react2['default'].createElement(
          'span',
          { className: 'help-block' },
          _this2.props.properties.error
        );
      }
    };

    var label = function label() {
      if (!!field.label) {
        return _react2['default'].createElement(
          'label',
          { className: 'control-label ' + _lodash2['default'].get(field, 'labelClassName') },
          field.label
        );
      }
    };

    return _react2['default'].createElement(
      'div',
      { key: field.name, className: getClass('form-group') },
      label(),
      _react2['default'].createElement(
        'div',
        { className: field.wrapperClassName },
        this.options(),
        help()
      )
    );
  };

  var _RadioType = RadioType;
  RadioType = _wrapComponent('_$RadioType')(RadioType) || RadioType;
  return RadioType;
})(_react.Component);

exports['default'] = RadioType;
module.exports = exports['default'];