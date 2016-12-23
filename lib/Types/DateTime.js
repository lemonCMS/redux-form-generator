'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault(_merge2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _moment = require('helpers/moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Input: {
    displayName: 'Input'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Types/DateTime.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Input = _wrapComponent('Input')(function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'renderField',
    value: function renderField(props) {
      var input = props.input,
          label = props.label,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          valid = _props$meta.valid,
          custom = (0, _objectWithoutProperties3.default)(props, ['input', 'label', 'help', 'meta']);

      var size = (0, _get3.default)(props.field, 'bsSize', props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { bsSize: size };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has3.default)(props, 'labelSize')) {
          return props.labelSize;
        }
        return { sm: 2 };
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(props, 'fieldSize')) {
          return props.fieldSize;
        }
        return { sm: 10 };
      };

      var add = (0, _pick3.default)(custom, ['placeholder']);
      var conf = (0, _merge3.default)(props.conf, props.locale.datetimepicker);

      var validationState = function validationState() {
        if (touched && error) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

      var component = function component() {
        return _react3.default.createElement(_reactDatetime2.default, (0, _extends3.default)({
          key: props.name,
          onChange: input.onChange,
          value: (0, _moment2.default)(input.value)
        }, add, conf));
      };

      return _react3.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({}, thisSize(), {
          validationState: validationState()
        }),
        _react3.default.createElement(
          _Col2.default,
          (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
          label
        ),
        _react3.default.createElement(
          _Col2.default,
          fieldSize(),
          component(),
          touched && error && _react3.default.createElement(_FormControl2.default.Feedback, null),
          help && (!touched || !error) && _react3.default.createElement(
            _HelpBlock2.default,
            null,
            help
          ),
          touched && error && _react3.default.createElement(
            _HelpBlock2.default,
            null,
            error
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(_reduxForm.Field, (0, _extends3.default)({
        component: this.renderField
      }, this.props.field, {
        size: this.props.size,
        'static': this.props.static,
        locale: this.props.locale
      }));
    }
  }]);
  return Input;
}(_react3.default.Component));

Input.propTypes = {
  'field': _react3.default.PropTypes.object,
  'size': _react3.default.PropTypes.string,
  'static': _react3.default.PropTypes.bool,
  'addField': _react3.default.PropTypes.func,
  'locale': _react3.default.PropTypes.object
};
Input.defaultProps = {};

exports.default = Input;
module.exports = exports['default'];