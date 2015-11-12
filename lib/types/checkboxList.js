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
      delete values[_lodash2['default'].indexOf(values, value)]; // = _.remove(values, value);
    }

    var changeConst = _reduxForm.change(this.props.formName, this.props.field.name, _lodash2['default'].uniq(values));
    this.props.dispatch(_extends({}, changeConst, {
      'key': this.props.formKey || undefined
    }));
  };

  CheckboxListType.prototype.options = function options() {
    var _this = this;

    var _props = this.props;
    var field = _props.field;
    var properties = _props.properties;

    var selectedValue = properties.value || properties.defaultValue;
    return _lodash2['default'].map(_lodash2['default'].get(field, 'options', []), function (option, key) {
      return _react2['default'].createElement(
        'div',
        { key: key, className: 'checkbox' },
        _react2['default'].createElement(
          'label',
          null,
          _react2['default'].createElement('input', {
            type: 'checkbox',
            value: option.value,
            checked: _lodash2['default'].indexOf(selectedValue, option.value) > -1,
            onChange: function (e) {
              _this.onChange(e, option.value);
            },
            onClick: function (e) {
              _this.onChange(e, option.value);
            }
          }),
          ' ',
          option.desc
        )
      );
    });
  };

  CheckboxListType.prototype.render = function render() {
    var _this2 = this;

    var thisSize = _lodash2['default'].get(this.props.field, 'bsSize', this.props.size);
    var field = this.props.field;

    var getClass = function getClass() {
      var classNames = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      if (thisSize === 'large') {
        classNames = classNames + ' form-group-lg';
      }

      if (thisSize === 'small') {
        classNames = classNames + ' form-group-sm';
      }

      if (_this2.props.properties.touched && _this2.props.properties.error) {
        return classNames + ' has-error';
      }
      return classNames;
    };

    var help = function help() {
      if (_lodash2['default'].has(_this2.props.properties, 'error')) {
        return _react2['default'].createElement(
          'span',
          { id: 'helpBlock2', className: 'help-block' },
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

  var _CheckboxListType = CheckboxListType;
  CheckboxListType = _wrapComponent('_$CheckboxListType')(CheckboxListType) || CheckboxListType;
  return CheckboxListType;
})(_react.Component);

exports['default'] = CheckboxListType;
module.exports = exports['default'];