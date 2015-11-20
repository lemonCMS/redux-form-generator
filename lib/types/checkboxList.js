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

var _reduxForm = require('redux-form');

var _components = {
  _$CheckboxListType: {
    displayName: 'CheckboxListType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/checkboxList.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var CheckboxListType = (function (_Component) {
  _inherits(CheckboxListType, _Component);

  _createClass(CheckboxListType, null, [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'dispatch': _react.PropTypes.func.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'formName': _react.PropTypes.string.isRequired,
      'formKey': _react.PropTypes.string,
      'addField': _react.PropTypes.func.isRequired,
      'static': _react.PropTypes.bool
    },
    enumerable: true
  }]);

  function CheckboxListType() {
    _classCallCheck(this, _CheckboxListType);

    _Component.call(this);
    this.options = this.options.bind(this);
    this.onChange = this.onChange.bind(this);
    this.options = this.options.bind(this);
    this.filtered = this.filtered.bind(this);
    this.checkboxButtons = this.checkboxButtons.bind(this);
    this.optionsWrite = this.optionsWrite.bind(this);
    this.optionsStatic = this.optionsStatic.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  CheckboxListType.prototype.onChange = function onChange(e, value) {
    var properties = this.props.properties;

    var values = _lodash2['default'].get(properties, 'value') || _lodash2['default'].get(properties, 'initialValue', []);

    if (typeof values !== 'object') {
      values = [values];
    }
    if (e.target.checked === true) {
      values.push(value);
    } else {
      values.splice(_lodash2['default'].indexOf(values, value), 1);
    }

    var changeConst = _reduxForm.change(this.props.formName, this.props.field.name, _lodash2['default'].uniq(values));
    this.props.dispatch(_extends({}, changeConst, {
      'key': this.props.formKey || undefined
    }));
  };

  CheckboxListType.prototype.filtered = function filtered(options) {
    var value = this.state.value;

    var strValue = String(value).toLowerCase();
    if (value !== '') {
      return _lodash2['default'].filter(options, function (option) {
        return _lodash2['default'].includes(String(option.desc).toLowerCase(), strValue);
      });
    }
    return options;
  };

  CheckboxListType.prototype.options = function options() {
    var _this = this;

    var _props = this.props;
    var field = _props.field;
    var properties = _props.properties;

    var selectedValue = String(properties.value || properties.defaultValue);
    var filtered = this.filtered(_lodash2['default'].get(field, 'options', []));

    if (filtered.length === 0) {
      return _react2['default'].createElement(
        'span',
        { className: 'help-block' },
        'no results to show'
      );
    }

    if (!!field.chunks) {
      var _ret = (function () {
        var split = Math.ceil(filtered.length / field.chunks);
        var chunks = function chunks() {
          var chunkData = _lodash2['default'].chunk(filtered, split);
          return _lodash2['default'].map(chunkData, function (data, key) {
            return _react2['default'].createElement(
              _reactBootstrap.Col,
              { key: key, md: Math.round(12 / field.chunks) },
              _this.checkboxButtons(field.name, data, selectedValue)
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

    return this.checkboxButtons(field.name, filtered, selectedValue);
  };

  CheckboxListType.prototype.checkboxButtons = function checkboxButtons(name, data, selectedValue) {
    var _this2 = this;

    return _lodash2['default'].map(data, function (option, key) {
      if (_this2.props['static'] === true) {
        return _this2.optionsStatic(name, option, selectedValue, key);
      }
      return _this2.optionsWrite(name, option, selectedValue, key);
    });
  };

  CheckboxListType.prototype.optionsWrite = function optionsWrite(name, option, selectedValue, key) {
    var _this3 = this;

    return _react2['default'].createElement(
      'div',
      { className: 'checkbox', key: key },
      _react2['default'].createElement(
        'label',
        null,
        _react2['default'].createElement('input', {
          type: 'checkbox',
          name: name + '[]',
          value: option.value,
          checked: _lodash2['default'].indexOf(selectedValue, option.value) > -1,
          onChange: function (e) {
            _this3.onChange(e, option.value);
          }
        }),
        ' ',
        option.desc
      )
    );
  };

  CheckboxListType.prototype.optionsStatic = function optionsStatic(name, option, selectedValue, key) {
    return _react2['default'].createElement(
      'p',
      { className: 'form-control-static', key: key },
      _lodash2['default'].indexOf(selectedValue, option.value) > -1 ? _react2['default'].createElement('i', { className: 'fa fa-check-square-o' }) : _react2['default'].createElement('i', { className: 'fa fa-square-o' }),
      ' ',
      option.desc
    );
  };

  CheckboxListType.prototype.handlePrevent = function handlePrevent(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  CheckboxListType.prototype.handleChange = function handleChange(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.setState({ value: e.target.value });
  };

  CheckboxListType.prototype.searchBox = function searchBox() {
    if (!!this.props.field.searchable && !this.props['static']) {
      return _react2['default'].createElement('input', { type: 'text', placeholder: 'search', defaultValue: this.state.value, onKeyDown: this.handlePrevent, onKeyUp: this.handleChange, className: 'form-control' });
    }
  };

  CheckboxListType.prototype.render = function render() {
    var _this4 = this;

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

      if (_this4.props.properties.touched && _this4.props.properties.error) {
        return ret + ' has-error';
      }
      return ret;
    };

    var help = function help() {
      if (_lodash2['default'].has(_this4.props.properties, 'error')) {
        return _react2['default'].createElement(
          'span',
          { className: 'help-block' },
          _this4.props.properties.error
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

  var _CheckboxListType = CheckboxListType;
  CheckboxListType = _wrapComponent('_$CheckboxListType')(CheckboxListType) || CheckboxListType;
  return CheckboxListType;
})(_react.Component);

exports['default'] = CheckboxListType;
module.exports = exports['default'];