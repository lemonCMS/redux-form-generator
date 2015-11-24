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

var _reactBootstrapDatetimepicker = require('react-bootstrap-datetimepicker');

var _reactBootstrapDatetimepicker2 = _interopRequireDefault(_reactBootstrapDatetimepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _components = {
  _$InputType: {
    displayName: 'InputType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/dateTime.js',
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

  function InputType() {
    var _this = this;

    _classCallCheck(this, _InputType);

    _Component.call(this);

    this.handleChange = function (newDate) {
      return _this.setState({ date: newDate });
    };

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      date: null
    };
  }

  InputType.prototype.componentWillMount = function componentWillMount() {
    if (!_lodash2['default'].isUndefined(_lodash2['default'].get(this.props, 'properties.defaultValue'))) {
      this.setState({ date: _lodash2['default'].get(this.props, 'properties.defaultValue') });
    }
  };

  InputType.prototype.render = function render() {
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
      if (_this2.props.properties.touched && _lodash2['default'].has(_this2.props.properties, 'error')) {
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

    if (this.props['static'] === true) {
      return _react2['default'].createElement(
        'div',
        { key: field.name, className: getClass('form-group') },
        label(),
        _react2['default'].createElement(
          'div',
          { className: field.wrapperClassName },
          _moment2['default'](this.props.properties.defaultValue || this.props.properties.value, 'x').format('YYYY-MM-DD')
        )
      );
    }

    var props = {};
    if (this.state.date === null) {
      props.defaultText = '';
    } else {
      props.dateTime = this.state.date;
    }

    return _react2['default'].createElement(
      'div',
      { key: field.name, className: getClass('form-group') },
      label(),
      _react2['default'].createElement(
        'div',
        { className: field.wrapperClassName },
        _react2['default'].createElement(_reactBootstrapDatetimepicker2['default'], _extends({
          key: this.props.field.name,
          bsSize: thisSize
        }, this.props.field, this.props.properties, props)),
        help()
      )
    );
  };

  var _InputType = InputType;
  InputType = _wrapComponent('_$InputType')(InputType) || InputType;
  return InputType;
})(_react.Component);

exports['default'] = InputType;
module.exports = exports['default'];