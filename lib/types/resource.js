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

var _reduxForm = require('redux-form');

var _components = {
  _$Resource: {
    displayName: 'Resource'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/resource.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var Resource = (function (_Component) {
  _inherits(Resource, _Component);

  _createClass(Resource, null, [{
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

  function Resource() {
    _classCallCheck(this, _Resource);

    _Component.call(this);
    this.options = this.options.bind(this);
    this.onChange = this.onChange.bind(this);
    this.options = this.options.bind(this);
    this.optionsStatic = this.optionsStatic.bind(this);
    this.callBack = this.callBack.bind(this);
    this.state = {};
  }

  Resource.prototype.onChange = function onChange(e, value) {
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

    if (_lodash2['default'].has(this.props, 'formKey')) {
      this.props.dispatch(_reduxForm.changeWithKey(this.props.formName, this.props.formKey, this.props.field.name, _lodash2['default'].uniq(values)));
    } else {
      this.props.dispatch(_reduxForm.change(this.props.formName, this.props.field.name, _lodash2['default'].uniq(values)));
    }
  };

  Resource.prototype.options = function options() {
    var properties = this.props.properties;

    var selectedValue = properties.value || properties.defaultValue;
    return this.optionsStatic(selectedValue);
  };

  Resource.prototype.optionsStatic = function optionsStatic(selectedValue) {
    var field = this.props.field;

    var options = _lodash2['default'].map(this.state.list || _lodash2['default'].get(field, 'list', []), function (option, key) {
      return _react2['default'].createElement(
        'p',
        { className: 'form-control-static', key: key },
        _lodash2['default'].indexOf(selectedValue, option.value) > -1 ? _react2['default'].createElement('i', { className: 'fa fa-check-square-o' }) : _react2['default'].createElement('i', { className: 'fa fa-square-o' }),
        ' ',
        option.desc
      );
    });

    return _react2['default'].createElement(
      'div',
      { className: 'checkbox' },
      options
    );
  };

  Resource.prototype.callBack = function callBack(values, list) {
    var _this = this;

    this.setState({
      list: list
    }, function () {

      if (_lodash2['default'].has(_this.props, 'formKey')) {
        _this.props.dispatch(_reduxForm.changeWithKey(_this.props.formName, _this.props.formKey, _this.props.field.name, _lodash2['default'].uniq(values)));
      } else {
        _this.props.dispatch(_reduxForm.change(_this.props.formName, _this.props.field.name, _lodash2['default'].uniq(values)));
      }
    });
  };

  Resource.prototype.render = function render() {
    var _this2 = this;

    var thisSize = _lodash2['default'].get(this.props.field, 'bsSize', this.props.size);
    var field = this.props.field;
    var properties = this.props.properties;

    var selectedValue = properties.value || properties.defaultValue || [];

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
      if (_this2.props.properties.touched && _this2.props.properties.error) {
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

    var callResource = function callResource() {
      if (typeof field.callResource === 'function') {
        var clonedValues = _lodash2['default'].clone(selectedValue);
        var clonedList = _lodash2['default'].clone(_this2.state.list) || _lodash2['default'].clone(field.list);
        field.callResource(clonedValues, clonedList, _this2.callBack);
      } else {
        console.error('callResource is not a function');
      }
    };

    var button = function button() {
      if (!_this2.props['static']) {
        return _react2['default'].createElement(
          _reactBootstrap.Button,
          { onClick: callResource },
          _lodash2['default'].get(_this2.props, 'field.buttonResource', 'open')
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
        button(),
        this.options(),
        help()
      )
    );
  };

  var _Resource = Resource;
  Resource = _wrapComponent('_$Resource')(Resource) || Resource;
  return Resource;
})(_react.Component);

exports['default'] = Resource;
module.exports = exports['default'];