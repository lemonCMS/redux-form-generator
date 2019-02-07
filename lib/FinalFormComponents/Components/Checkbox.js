(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "react-bootstrap/lib/Col", "react-bootstrap/lib/Row", "react-bootstrap/lib/Alert", "react-bootstrap/lib/Checkbox", "react-bootstrap/lib/FormControl", "lodash/isFunction", "lodash/get", "lodash/map", "lodash/chunk", "lodash/filter", "lodash/includes", "lodash/isArray"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/Row"), require("react-bootstrap/lib/Alert"), require("react-bootstrap/lib/Checkbox"), require("react-bootstrap/lib/FormControl"), require("lodash/isFunction"), require("lodash/get"), require("lodash/map"), require("lodash/chunk"), require("lodash/filter"), require("lodash/includes"), require("lodash/isArray"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Col, global.Row, global.Alert, global.Checkbox, global.FormControl, global.isFunction, global.get, global.map, global.chunk, global.filter, global.includes, global.isArray);
    global.Checkbox = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _Col, _Row, _Alert, _Checkbox, _FormControl, _isFunction2, _get2, _map2, _chunk2, _filter2, _includes2, _isArray2) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _Col = _interopRequireDefault(_Col);
  _Row = _interopRequireDefault(_Row);
  _Alert = _interopRequireDefault(_Alert);
  _Checkbox = _interopRequireDefault(_Checkbox);
  _FormControl = _interopRequireDefault(_FormControl);
  _isFunction2 = _interopRequireDefault(_isFunction2);
  _get2 = _interopRequireDefault(_get2);
  _map2 = _interopRequireDefault(_map2);
  _chunk2 = _interopRequireDefault(_chunk2);
  _filter2 = _interopRequireDefault(_filter2);
  _includes2 = _interopRequireDefault(_includes2);
  _isArray2 = _interopRequireDefault(_isArray2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var RadioBinder =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(RadioBinder, _React$Component);

    function RadioBinder() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.searchBox = _this.searchBox.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.radioButtons = _this.radioButtons.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.radioButtonList = _this.radioButtonList.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.filtered = _this.filtered.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.state = {
        value: '',
        selected: []
      };
      return _this;
    }

    var _proto = RadioBinder.prototype;

    _proto.handleChange = function handleChange(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
      }

      this.setState({
        value: e.target.value
      });
    };

    _proto.handlePrevent = function handlePrevent(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    _proto.filtered = function filtered() {
      var list = (0, _isArray2.default)(this.props.field.children) ? this.props.field.children : [this.props.field.children];

      if ((0, _get2.default)(this.props.field, 'static', false) === true) {
        return (0, _filter2.default)(list, {
          value: this.props.input.value
        });
      }

      var value = this.state.value;
      var strValue = String(value).toLowerCase();

      if (value !== '') {
        return (0, _filter2.default)(list, function (option) {
          return (0, _includes2.default)(String(option.children).toLowerCase(), strValue);
        });
      }

      return list;
    };

    _proto.radioButtonList = function radioButtonList(list) {
      var _this2 = this;

      var staticField = this.context.isStatic || (0, _get2.default)(this.props.field, 'static', false);
      var clone = [];

      if ((0, _isArray2.default)(this.props.input.value)) {
        clone = (0, _map2.default)(this.props.input.value, function (item) {
          return String(item);
        });
      }

      return (0, _map2.default)(list, function (option, key) {
        if (staticField === true) {
          return _react.default.createElement(_FormControl.default.Static, {
            key: key
          }, option.children);
        }

        var disabled = false;

        if (_this2.props.field && _this2.props.field.disabled && (0, _isFunction2.default)(_this2.props.field.disabled)) {
          disabled = _this2.context.checkDisabled(_this2.props.field.disabled(), (0, _get2.default)(_this2.props.field, 'parent'));
        }

        return _react.default.createElement(_Checkbox.default, {
          key: key,
          disabled: disabled,
          name: _this2.props.input.name + "[" + key + "]",
          value: option.props.value,
          checked: clone.indexOf(option.props.value) !== -1,
          onChange: function onChange(event) {
            var newValue = [].concat(_this2.props.input.value);

            if (event.target.checked) {
              newValue.push(option.props.value);
            } else {
              newValue.splice(newValue.indexOf(option.props.value), 1);
            }

            return _this2.props.input.onChange(newValue);
          }
        }, option.props.children);
      });
    };

    _proto.radioButtons = function radioButtons() {
      var _this3 = this;

      var filtered = this.filtered();
      var field = (0, _get2.default)(this.props, 'field');

      if (filtered.length === 0) {
        return _react.default.createElement(_Alert.default, null, (0, _get2.default)(this.props.field, 'filter_norecords', 'No results'));
      }

      if (field.chunks) {
        var split = Math.ceil(filtered.length / field.chunks);

        var chunks = function chunks() {
          var chunkData = (0, _chunk2.default)(filtered, split);
          return (0, _map2.default)(chunkData, function (chunk, key) {
            return _react.default.createElement(_Col.default, {
              key: key,
              md: Math.round(12 / field.chunks)
            }, _this3.radioButtonList(chunk));
          });
        };

        return _react.default.createElement(_Row.default, null, chunks());
      }

      return this.radioButtonList(filtered);
    };

    _proto.searchBox = function searchBox() {
      var disabled = false;

      if (this.props.field && this.props.field.disabled && (0, _isFunction2.default)(this.props.field.disabled)) {
        disabled = this.context.checkDisabled(this.props.field.disabled());
      }

      if ((this.props.field.searchable || this.props.field.filter) && !this.props.field.static && !this.context.isStatic) {
        return _react.default.createElement("input", {
          type: "text",
          disabled: disabled,
          placeholder: (0, _get2.default)(this.props.field, 'filter_placeholder', (0, _get2.default)(this.props.field.locale, 'filter.placeholder', 'Filter')),
          defaultValue: this.state.value,
          onKeyDown: this.handlePrevent,
          onKeyUp: this.handleChange,
          className: "form-control"
        });
      }
    };

    _proto.render = function render() {
      return _react.default.createElement("div", null, this.searchBox(), this.radioButtons());
    };

    return RadioBinder;
  }(_react.default.Component);

  RadioBinder.propTypes = {
    field: _propTypes.default.object,
    input: _propTypes.default.object
  };
  RadioBinder.contextTypes = {
    checkHidden: _propTypes.default.func,
    checkShow: _propTypes.default.func,
    isStatic: _propTypes.default.bool
  };

  var _default = function _default(_ref) {
    var input = _ref.input,
        field = _ref.field;
    return _react.default.createElement(RadioBinder, {
      input: input,
      field: field
    });
  };

  _exports.default = _default;
});