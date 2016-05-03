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

var _class, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactBootstrapDatetimepicker = require('react-bootstrap-datetimepicker');

var _reactBootstrapDatetimepicker2 = _interopRequireDefault(_reactBootstrapDatetimepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  InputType: {
    displayName: 'InputType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/dateTime.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var InputType = _wrapComponent('InputType')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(InputType, _Component);

  function InputType() {
    (0, _classCallCheck3.default)(this, InputType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InputType).call(this));

    _this.handleChange = function (newDate) {
      return _this.setState({ date: newDate });
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.state = {
      date: null
    };
    return _this;
  }

  (0, _createClass3.default)(InputType, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!_lodash2.default.isUndefined(_lodash2.default.get(this.props, 'properties.defaultValue'))) {
        this.setState({ date: _lodash2.default.get(this.props, 'properties.defaultValue') });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var thisSize = _lodash2.default.get(this.props.field, 'bsSize', this.props.size);
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
        if (_this2.props.properties.touched && _lodash2.default.has(_this2.props.properties, 'error')) {
          return _react3.default.createElement(
            'span',
            { className: 'help-block' },
            _this2.props.properties.error
          );
        }
      };

      var label = function label() {
        if (!!field.label) {
          return _react3.default.createElement(
            'label',
            { className: 'control-label ' + _lodash2.default.get(field, 'labelClassName') },
            field.label
          );
        }
      };

      if (this.props.static === true) {
        var value = '';
        var dateTime = (0, _moment2.default)(this.props.properties.defaultValue || this.props.properties.value, 'x');
        if (dateTime.isValid()) {
          value = dateTime.format('YYYY-MM-DD');
        }

        return _react3.default.createElement(
          'div',
          { key: field.name, className: getClass('form-group') },
          label(),
          _react3.default.createElement(
            'div',
            { className: field.wrapperClassName },
            _react3.default.createElement(
              'p',
              { className: 'form-control-static' },
              value
            )
          )
        );
      }

      var props = {};
      if (this.state.date === null) {
        props.defaultText = '';
      } else {
        props.dateTime = this.state.date;
      }

      return _react3.default.createElement(
        'div',
        { key: field.name, className: getClass('form-group') },
        label(),
        _react3.default.createElement(
          'div',
          { className: field.wrapperClassName },
          _react3.default.createElement(_reactBootstrapDatetimepicker2.default, (0, _extends3.default)({
            key: this.props.field.name,
            bsSize: thisSize
          }, this.props.field, this.props.properties, props)),
          help()
        )
      );
    }
  }]);
  return InputType;
}(_react2.Component), _class.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'properties': _react2.PropTypes.object.isRequired,
  'size': _react2.PropTypes.string,
  'addField': _react2.PropTypes.func.isRequired,
  'static': _react2.PropTypes.bool
}, _temp));

exports.default = InputType;
module.exports = exports['default'];