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

var _reactTinymce = require('react-tinymce');

var _reactTinymce2 = _interopRequireDefault(_reactTinymce);

var _components = {
  _$InputType: {
    displayName: 'InputType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/rte.js',
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
    _classCallCheck(this, _InputType);

    _Component.call(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  InputType.prototype.handleEditorChange = function handleEditorChange(e) {
    var changeConst = _reduxForm.change(this.props.formName, this.props.field.name, e.target.getContent());
    this.props.dispatch(_extends({}, changeConst, {
      'key': this.props.formKey || undefined
    }));
  };

  InputType.prototype.render = function render() {
    var _this = this;

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

      if (_this.props.properties.touched && _this.props.properties.error) {
        return ret + ' has-error';
      }
      return ret;
    };

    var help = function help() {
      if (_this.props.properties.touched && _lodash2['default'].has(_this.props.properties, 'error')) {
        return _react2['default'].createElement(
          'span',
          { className: 'help-block' },
          _this.props.properties.error
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

    var createMarkup = function createMarkup(data) {
      return { __html: data };
    };

    if (this.props['static']) {
      return _react2['default'].createElement(
        'div',
        { key: field.name, className: getClass('form-group') },
        label(),
        _react2['default'].createElement(
          'div',
          { className: field.wrapperClassName },
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: createMarkup(this.props.properties.defaultValue || this.props.properties.value) })
        )
      );
    }

    return _react2['default'].createElement(
      'div',
      { key: field.name, className: getClass('form-group') },
      label(),
      _react2['default'].createElement(
        'div',
        { className: field.wrapperClassName },
        _react2['default'].createElement(_reactTinymce2['default'], _extends({
          content: this.props.properties.defaultValue || this.props.properties.value
        }, this.props.field, {
          onChange: this.handleEditorChange
        })),
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