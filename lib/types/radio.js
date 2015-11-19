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
    this.radioButtons = this.radioButtons.bind(this);
    this.filtered = this.filtered.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  RadioType.prototype.filtered = function filtered(options) {
    var value = this.state.value;

    var strValue = String(value).toLowerCase();
    if (value !== '') {
      return _lodash2['default'].filter(options, function (option) {
        return _lodash2['default'].includes(String(option.desc).toLowerCase(), strValue);
      });
    }
    return options;
  };

  RadioType.prototype.options = function options() {
    var _this = this;

    var _props = this.props;
    var field = _props.field;
    var properties = _props.properties;

    var selectedValue = String(properties.value || properties.defaultValue);
    var filtered = this.filtered(_lodash2['default'].get(field, 'options', []));

    if (field.type === 'radio') {

      if (!!field.chunks) {
        var _ret = (function () {
          var split = Math.ceil(filtered.length / field.chunks);
          var chunks = function chunks() {
            var chunkData = _lodash2['default'].chunk(filtered, split);
            return _lodash2['default'].map(chunkData, function (data, key) {
              return _react2['default'].createElement(
                _reactBootstrap.Col,
                { key: key, md: Math.round(12 / field.chunks) },
                _this.radioButtons(field.name, data, selectedValue)
              );
            });
          };
          return {
            v: _react2['default'].createElement(
              _reactBootstrap.Row,
              null,
              chunks()
            )
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      }

      return this.radioButtons(field.name, filtered, selectedValue);
    }
  };

  RadioType.prototype.radioButtons = function radioButtons(name, data, selectedValue) {
    var _this2 = this;

    return _lodash2['default'].map(data, function (option, key) {
      return _react2['default'].createElement(
        'div',
        { key: key },
        _react2['default'].createElement(
          'label',
          null,
          _react2['default'].createElement('input', {
            name: name,
            type: 'radio',
            value: option.value,
            onChange: _this2.props.properties.onChange,
            onFocus: _this2.props.properties.onFocus,
            onUpdate: _this2.props.properties.onUpdate,
            checked: selectedValue === String(option.value)
          }),
          ' ',
          option.desc
        )
      );
    });
  };

  RadioType.prototype.handlePrevent = function handlePrevent(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  RadioType.prototype.handleChange = function handleChange(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.setState({ value: e.target.value });
  };

  RadioType.prototype.searchBox = function searchBox() {
    if (!!this.props.field.searchable) {
      return _react2['default'].createElement('input', { type: 'text', defaultValue: this.state.value, onKeyDown: this.handlePrevent, onKeyUp: this.handleChange, className: 'form-control' });
    }
  };

  RadioType.prototype.render = function render() {
    var _this3 = this;

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

      if (_this3.props.properties.touched && _this3.props.properties.error) {
        return ret + ' has-error';
      }
      return ret;
    };

    var help = function help() {
      if (_lodash2['default'].has(_this3.props.properties, 'error')) {
        return _react2['default'].createElement(
          'span',
          { className: 'help-block' },
          _this3.props.properties.error
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
        this.searchBox(),
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