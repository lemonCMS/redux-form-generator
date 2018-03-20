(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash/has", "lodash/map", "lodash/get", "lodash/chunk", "lodash/filter", "lodash/includes", "react-bootstrap/lib/Col", "react-bootstrap/lib/Row", "react-bootstrap/lib/FormControl", "react-bootstrap/lib/Alert", "react-bootstrap/lib/FormGroup", "react-bootstrap/lib/ControlLabel", "react-bootstrap/lib/HelpBlock", "react-bootstrap/lib/Checkbox", "lodash/isFunction"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash/has"), require("lodash/map"), require("lodash/get"), require("lodash/chunk"), require("lodash/filter"), require("lodash/includes"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/Row"), require("react-bootstrap/lib/FormControl"), require("react-bootstrap/lib/Alert"), require("react-bootstrap/lib/FormGroup"), require("react-bootstrap/lib/ControlLabel"), require("react-bootstrap/lib/HelpBlock"), require("react-bootstrap/lib/Checkbox"), require("lodash/isFunction"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.has, global.map, global.get, global.chunk, global.filter, global.includes, global.Col, global.Row, global.FormControl, global.Alert, global.FormGroup, global.ControlLabel, global.HelpBlock, global.Checkbox, global.isFunction);
    global.WrapListMulti = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _has2, _map2, _get2, _chunk2, _filter2, _includes2, _Col, _Row, _FormControl, _Alert, _FormGroup, _ControlLabel, _HelpBlock, _Checkbox, _isFunction2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _has2 = _interopRequireDefault(_has2);
  _map2 = _interopRequireDefault(_map2);
  _get2 = _interopRequireDefault(_get2);
  _chunk2 = _interopRequireDefault(_chunk2);
  _filter2 = _interopRequireDefault(_filter2);
  _includes2 = _interopRequireDefault(_includes2);
  _Col = _interopRequireDefault(_Col);
  _Row = _interopRequireDefault(_Row);
  _FormControl = _interopRequireDefault(_FormControl);
  _Alert = _interopRequireDefault(_Alert);
  _FormGroup = _interopRequireDefault(_FormGroup);
  _ControlLabel = _interopRequireDefault(_ControlLabel);
  _HelpBlock = _interopRequireDefault(_HelpBlock);
  _Checkbox = _interopRequireDefault(_Checkbox);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  var _jsxFileName = "example/app/components/Form/Types/WrapListMulti.jsx";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var WrapListMulti =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(WrapListMulti, _React$Component);

    function WrapListMulti() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.renderField = _this.renderField.bind(_assertThisInitialized(_this));
      _this.handlePrevent = _this.handlePrevent.bind(_assertThisInitialized(_this));
      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
      _this.options = _this.options.bind(_assertThisInitialized(_this));
      _this.filtered = _this.filtered.bind(_assertThisInitialized(_this));
      _this.radioButtons = _this.radioButtons.bind(_assertThisInitialized(_this));
      _this.radioButtonList = _this.radioButtonList.bind(_assertThisInitialized(_this));
      _this.searchBox = _this.searchBox.bind(_assertThisInitialized(_this));
      _this.state = {
        value: '',
        selected: []
      };
      _this.input = {};
      return _this;
    }

    var _proto = WrapListMulti.prototype;

    _proto.filtered = function filtered(options) {
      var _this2 = this;

      if (this.props.static === true || (0, _get2.default)(this.props.field, 'static', false) === true) {
        return (0, _filter2.default)(options, function (option) {
          return _this2.input.value.indexOf(option.value) > -1;
        });
      }

      var value = this.state.value;
      var strValue = String(value).toLowerCase();

      if (value !== '') {
        return (0, _filter2.default)(options, function (option) {
          return (0, _includes2.default)(String(option.desc).toLowerCase(), strValue);
        });
      }

      return options;
    };

    _proto.radioButtonList = function radioButtonList(list) {
      var _this3 = this;

      var staticField = this.props.static || (0, _get2.default)(this.props.field, 'static', false);
      var disabled = false;

      if (this.props.field && this.props.field.disabled && (0, _isFunction2.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled(), (0, _get2.default)(this.props.field, 'parent'));
      }

      if ((0, _get2.default)(this.props, 'field.single', false) === true) {
        return (0, _map2.default)(list, function (option, key) {
          if (staticField === true) {
            return _react.default.createElement(_FormControl.default.Static, {
              key: key,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            }, option.desc);
          }

          return _react.default.createElement(_Checkbox.default, {
            key: key,
            name: "" + _this3.input.name,
            disabled: disabled,
            value: option.value,
            checked: String(_this3.input.value) === String(option.value),
            onChange: function onChange(event) {
              if (event.target.checked) {
                _this3.input.onChange(option.value);
              } else {
                _this3.input.onChange(null);
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }, option.desc);
        });
      }

      return (0, _map2.default)(list, function (option, key) {
        if (staticField === true) {
          return _react.default.createElement(_FormControl.default.Static, {
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          }, option.desc);
        }

        return _react.default.createElement(_Checkbox.default, {
          key: key,
          name: _this3.input.name + "[" + key + "]",
          disabled: disabled,
          value: option.value,
          checked: _this3.input.value.indexOf(option.value) !== -1,
          onChange: function onChange(event) {
            var newValue = _this3.input.value.concat();

            if (event.target.checked) {
              newValue.push(option.value);
            } else {
              newValue.splice(newValue.indexOf(option.value), 1);
            }

            return _this3.input.onChange(newValue);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, option.desc);
      });
    };

    _proto.radioButtons = function radioButtons() {
      var _this4 = this;

      var filtered = this.filtered((0, _get2.default)(this.props.field, 'options', []));
      var field = (0, _get2.default)(this.props, 'field');

      if (filtered.length === 0) {
        return _react.default.createElement(_Alert.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, (0, _get2.default)(this.props.field, 'filter_norecords', (0, _get2.default)(this.props.locale, 'filter.norecords', 'No results')));
      }

      if (field.chunks) {
        var split = Math.ceil(filtered.length / field.chunks);

        var chunks = function chunks() {
          var chunkData = (0, _chunk2.default)(filtered, split);
          return (0, _map2.default)(chunkData, function (chunk, key) {
            return _react.default.createElement(_Col.default, {
              key: key,
              md: Math.round(12 / field.chunks),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              }
            }, _this4.radioButtonList(chunk));
          });
        };

        return _react.default.createElement(_Row.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, chunks());
      }

      return this.radioButtonList(filtered);
    };

    _proto.options = function options() {
      if (this.props.field.type === 'select') {
        return (0, _map2.default)((0, _get2.default)(this.props.field, 'options', []), function (option, key) {
          return _react.default.createElement("option", {
            key: key,
            value: option.value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            }
          }, option.desc);
        });
      }
    };

    _proto.searchBox = function searchBox() {
      var disabled = false;

      if (this.props.field && this.props.field.disabled && (0, _isFunction2.default)(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled());
      }

      if ((!!this.props.field.searchable || this.props.field.filter) && !this.props.static) {
        return _react.default.createElement("input", {
          type: "text",
          disabled: disabled,
          placeholder: (0, _get2.default)(this.props.field, 'filter_placeholder', (0, _get2.default)(this.props.locale, 'filter.placeholder', 'Filter')),
          defaultValue: this.state.value,
          onKeyDown: this.handlePrevent,
          onKeyUp: this.handleChange,
          className: "form-control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        });
      }
    };

    _proto.handlePrevent = function handlePrevent(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    _proto.handleChange = function handleChange(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
      }

      this.setState({
        value: e.target.value
      });
    };

    _proto.renderField = function renderField(props) {
      var _this5 = this;

      if (this.props.field && this.props.field.hidden && (0, _isFunction2.default)(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get2.default)(props, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2.default)(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get2.default)(props, 'parent')) !== true) {
          return null;
        }
      }

      var input = props.input,
          label = props.label,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          valid = _props$meta.valid;
      this.input = input;

      if (props.searchable) {
        console.warn('Property `searchable` is deprecated, use `filter` instead for');
      }

      var size = (0, _get2.default)(this.props.field, 'bsSize', this.props.size);

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return {
            bsSize: size
          };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has2.default)(_this5.props.field, 'labelSize')) {
          return _this5.props.field.labelSize;
        }

        if (_this5.props.horizontal) {
          return {
            sm: 2
          };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has2.default)(_this5.props.field, 'fieldSize')) {
          return _this5.props.field.fieldSize;
        }

        if (_this5.props.horizontal) {
          return {
            sm: 10
          };
        }
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
          return _react.default.createElement(_Col.default, _extends({
            componentClass: _ControlLabel.default
          }, labelSize(), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            }
          }), label);
        }
      };

      return _react.default.createElement(_FormGroup.default, _extends({}, thisSize(), {
        validationState: validationState(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }), getLabel(), _react.default.createElement(_Col.default, _extends({}, fieldSize(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }), this.searchBox(), this.radioButtons(), touched && error && _react.default.createElement(_FormControl.default.Feedback, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }), help && (!touched || !error) && _react.default.createElement(_HelpBlock.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, help), touched && error && _react.default.createElement(_HelpBlock.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, error)));
    };

    _proto.render = function render() {
      return null;
    };

    return WrapListMulti;
  }(_react.default.Component);

  WrapListMulti.propTypes = {
    'checkDisabled': _propTypes.default.func,
    'checkHidden': _propTypes.default.func,
    'checkShow': _propTypes.default.func,
    'horizontal': _propTypes.default.bool.isRequired,
    'field': _propTypes.default.object,
    'size': _propTypes.default.string,
    'static': _propTypes.default.bool,
    'locale': _propTypes.default.object
  };
  WrapListMulti.defaultProps = {};
  var _default = WrapListMulti;
  _exports.default = _default;
});