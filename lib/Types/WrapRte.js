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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _reactTinymceInput = require('react-tinymce-input');

var _reactTinymceInput2 = _interopRequireDefault(_reactTinymceInput);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrapRte = function (_React$Component) {
  (0, _inherits3.default)(WrapRte, _React$Component);

  function WrapRte() {
    (0, _classCallCheck3.default)(this, WrapRte);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WrapRte.__proto__ || (0, _getPrototypeOf2.default)(WrapRte)).call(this));

    _this.input = null;
    _this.renderField = _this.renderField.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(WrapRte, [{
    key: 'renderField',
    value: function renderField(props) {
      var _this2 = this;

      if (this.props.field && this.props.field.hidden && (0, _isFunction3.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get3.default)(props, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction3.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get3.default)(props, 'parent')) !== true) {
          return null;
        }
      }

      var input = props.input,
          label = props.label,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          valid = _props$meta.valid,
          custom = (0, _objectWithoutProperties3.default)(props, ['input', 'label', 'help', 'meta']);

      this.input = input;
      var size = (0, _get3.default)(this.props.field, 'bsSize', this.props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return { bsSize: size };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has3.default)(_this2.props.field, 'labelSize')) {
          return _this2.props.field.labelSize;
        }
        if (_this2.props.horizontal) {
          return { sm: 2 };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has3.default)(_this2.props.field, 'fieldSize')) {
          return _this2.props.field.fieldSize;
        }
        if (_this2.props.horizontal) {
          return { sm: 10 };
        }
      };

      var add = (0, _pick3.default)(custom, ['placeholder', 'rows', 'cols']);
      add.tinymceConfig = custom.config;

      var component = function component() {

        var checkDisabled = false;
        if (custom.disabled && (0, _isFunction3.default)(custom.disabled)) {
          checkDisabled = _this2.props.checkDisabled(custom.disabled());
        }

        if (_this2.props.static === true || (0, _get3.default)(_this2.props.field, 'static', false) === true || (0, _get3.default)(_this2.props.field, 'disabled', false) === true || checkDisabled === true) {
          var createMarkup = function createMarkup(data) {
            return { __html: data };
          };

          return _react2.default.createElement('samp', { className: 'tiny_mce_static', dangerouslySetInnerHTML: createMarkup(input.value) });
        }

        return _react2.default.createElement(_reactTinymceInput2.default, (0, _extends3.default)({
          value: input.value
        }, add, {
          onChange: function onChange(event) {
            _this2.input.onBlur();
            _this2.input.onChange(event);
          }
        }));
      };

      var validationState = function validationState() {
        if (touched && error) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
      };

      var getLabel = function getLabel() {
        if (label) {
          return _react2.default.createElement(
            _Col2.default,
            (0, _extends3.default)({ componentClass: _ControlLabel2.default }, labelSize()),
            label
          );
        }
      };

      return _react2.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({}, thisSize(), {
          validationState: validationState()
        }),
        getLabel(),
        _react2.default.createElement(
          _Col2.default,
          fieldSize(),
          component(),
          touched && error && _react2.default.createElement(_FormControl2.default.Feedback, null),
          help && (!touched || !error) && _react2.default.createElement(
            _HelpBlock2.default,
            null,
            help
          ),
          touched && error && _react2.default.createElement(
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
      return null;
    }
  }]);
  return WrapRte;
}(_react2.default.Component);

WrapRte.propTypes = {
  'checkDisabled': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'size': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'horizontal': _propTypes2.default.bool.isRequired
};
WrapRte.defaultProps = {};

exports.default = WrapRte;
//# sourceMappingURL=WrapRte.js.map