(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash/clone", "lodash/has", "lodash/map", "lodash/get", "lodash/filter", "react-bootstrap/lib/Button", "react-bootstrap/lib/Col", "react-bootstrap/lib/Table", "react-bootstrap/lib/FormControl", "react-bootstrap/lib/FormGroup", "react-bootstrap/lib/ControlLabel", "react-bootstrap/lib/HelpBlock", "react-plupload", "lodash/isFunction"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash/clone"), require("lodash/has"), require("lodash/map"), require("lodash/get"), require("lodash/filter"), require("react-bootstrap/lib/Button"), require("react-bootstrap/lib/Col"), require("react-bootstrap/lib/Table"), require("react-bootstrap/lib/FormControl"), require("react-bootstrap/lib/FormGroup"), require("react-bootstrap/lib/ControlLabel"), require("react-bootstrap/lib/HelpBlock"), require("react-plupload"), require("lodash/isFunction"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.clone, global.has, global.map, global.get, global.filter, global.Button, global.Col, global.Table, global.FormControl, global.FormGroup, global.ControlLabel, global.HelpBlock, global.reactPlupload, global.isFunction);
    global.WrapPlupload = mod.exports;
  }
})(this, function (_exports, _propTypes, _react, _clone2, _has2, _map2, _get2, _filter2, _Button, _Col, _Table, _FormControl, _FormGroup, _ControlLabel, _HelpBlock, _reactPlupload, _isFunction2) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _clone2 = _interopRequireDefault(_clone2);
  _has2 = _interopRequireDefault(_has2);
  _map2 = _interopRequireDefault(_map2);
  _get2 = _interopRequireDefault(_get2);
  _filter2 = _interopRequireDefault(_filter2);
  _Button = _interopRequireDefault(_Button);
  _Col = _interopRequireDefault(_Col);
  _Table = _interopRequireDefault(_Table);
  _FormControl = _interopRequireDefault(_FormControl);
  _FormGroup = _interopRequireDefault(_FormGroup);
  _ControlLabel = _interopRequireDefault(_ControlLabel);
  _HelpBlock = _interopRequireDefault(_HelpBlock);
  _reactPlupload = _interopRequireDefault(_reactPlupload);
  _isFunction2 = _interopRequireDefault(_isFunction2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var WrapPlupload =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(WrapPlupload, _React$Component);

    function WrapPlupload() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.state = {
        allFiles: [],
        changed: null
      };
      _this.input = {};
      _this.custom = {};
      _this.renderField = _this.renderField.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = WrapPlupload.prototype;

    _proto.renderField = function renderField(props) {
      var _this2 = this;

      if (this.props.field && this.props.field.hidden && (0, _isFunction2["default"])(this.props.field.hidden)) {
        if (this.props.checkHidden(this.props.field.hidden, (0, _get2["default"])(props, 'parent')) === true) {
          return null;
        }
      } else if (this.props.field && this.props.field.show && (0, _isFunction2["default"])(this.props.field.show)) {
        if (this.props.checkShow(this.props.field.show, (0, _get2["default"])(props, 'parent')) !== true) {
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
          custom = _objectWithoutPropertiesLoose(props, ["input", "label", "help", "meta"]);

      var allFiles = (0, _get2["default"])(props, 'input.value', []);

      if (!(allFiles instanceof Array)) {
        allFiles = [];
      }

      this.input = input;
      this.custom = custom;
      var size = (0, _get2["default"])(this.props.field, 'bsSize', this.props.size);

      var stateChange = function stateChange(plupload) {
        if (plupload.state === 2) {
          // Starting with uploading
          _this2.setState({
            pending: true
          });

          return true;
        }

        _this2.setState({
          pending: false
        });
      };

      var addedFiles = function addedFiles(plupload, files) {
        var fileList = [];
        (0, _map2["default"])(files, function (file) {
          fileList.push(file.name);
        });
      };

      var fileUploaded = function fileUploaded(plupload, file, response) {
        var uploadResponse = JSON.parse(response.response);

        if ((0, _get2["default"])(custom, 'multi_selection', true) === false) {
          allFiles = [uploadResponse.result];

          _this2.setState({
            changed: Date.now()
          }, function () {
            _this2.input.onChange(allFiles);
          });
        } else {
          var files = (0, _clone2["default"])(allFiles);
          files.push(uploadResponse.result);
          allFiles = files;

          _this2.setState({
            changed: Date.now()
          }, function () {
            _this2.input.onBlur();

            _this2.input.onChange(allFiles);
          });
        }
      };

      var fileDelete = function fileDelete(index) {
        allFiles[index].deleted = 1;

        _this2.setState({
          changed: Date.now()
        }, function () {
          _this2.input.onBlur();

          _this2.input.onChange(allFiles);

          _this2.forceUpdate();
        });
      };

      var staticForm = (0, _get2["default"])(this.props, 'static', false);

      var editRender = function editRender(files) {
        if (files.length > 0) {
          return _react["default"].createElement(_Table["default"], {
            striped: true,
            bordered: true,
            condensed: true,
            hover: true
          }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", null, "Bestand"), _react["default"].createElement("th", null))), _react["default"].createElement("tbody", null, (0, _map2["default"])(input.value, function (file, key) {
            return !file.deleted && _react["default"].createElement("tr", {
              key: key
            }, _react["default"].createElement("td", null, file.file_original_name, " ", file.deleted), _react["default"].createElement("td", null, _react["default"].createElement(_Button["default"], {
              onClick: function onClick() {
                fileDelete(key);
              }
            }, _react["default"].createElement("i", {
              className: "fa fa-trash-o"
            }))));
          })));
        }
      };

      var staticRender = function staticRender(files) {
        if (files.length > 0) {
          return _react["default"].createElement(_Table["default"], {
            striped: true,
            bordered: true,
            condensed: true,
            hover: true
          }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", null, "Bestand"))), _react["default"].createElement("tbody", null, (0, _map2["default"])(files, function (file, key) {
            return !file.deleted && _react["default"].createElement("tr", {
              key: key
            }, _react["default"].createElement("td", null, file.file_original_name, " ", file.deleted));
          })));
        }
      };

      var renderTable = function renderTable() {
        var files = (0, _filter2["default"])(allFiles, function (file) {
          return !file.deleted;
        });

        if (files.length > 0) {
          return staticForm ? staticRender(files) : editRender(files);
        }
      };

      var thisSize = function thisSize() {
        if (size !== 'medium') {
          return {
            bsSize: size
          };
        }
      };

      var labelSize = function labelSize() {
        if ((0, _has2["default"])(_this2.props.field, 'labelSize')) {
          return _this2.props.field.labelSize;
        }

        if (_this2.props.horizontal) {
          return {
            sm: 2
          };
        }
      };

      var fieldSize = function fieldSize() {
        if ((0, _has2["default"])(_this2.props.field, 'fieldSize')) {
          return _this2.props.field.fieldSize;
        }

        if (_this2.props.horizontal) {
          return {
            sm: 10
          };
        }
      };

      var component = function component() {
        var disabled = false;

        if (_this2.props.field && _this2.props.field.disabled && (0, _isFunction2["default"])(_this2.props.field.disabled)) {
          disabled = _this2.props.checkDisabled(_this2.props.field.disabled());
        }

        var staticField = _this2.props["static"] || (0, _get2["default"])(_this2.props.field, 'static', false) || disabled;

        if (staticField === false) {
          return _react["default"].createElement("div", null, _react["default"].createElement(_reactPlupload["default"], _extends({
            key: input.name
          }, custom.conf, {
            id: "plupload_" + input.name,
            onFilesAdded: addedFiles,
            onStateChanged: stateChange,
            onFileUploaded: fileUploaded
          })));
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
          return _react["default"].createElement(_Col["default"], _extends({
            componentClass: _ControlLabel["default"]
          }, labelSize()), label);
        }
      };

      return _react["default"].createElement(_FormGroup["default"], _extends({}, thisSize(), {
        validationState: validationState()
      }), getLabel(), _react["default"].createElement(_Col["default"], _extends({}, fieldSize(), {
        className: (0, _get2["default"])(this.props.field, 'fieldClassName', '')
      }), component(), renderTable(), touched && error && _react["default"].createElement(_FormControl["default"].Feedback, null), help && (!touched || !error) && _react["default"].createElement(_HelpBlock["default"], null, help), touched && error && _react["default"].createElement(_HelpBlock["default"], null, error)));
    };

    _proto.render = function render() {
      return null;
    };

    return WrapPlupload;
  }(_react["default"].Component);

  WrapPlupload.propTypes = {
    'checkDisabled': _propTypes["default"].func,
    'checkHidden': _propTypes["default"].func,
    'checkShow': _propTypes["default"].func,
    'field': _propTypes["default"].object,
    'size': _propTypes["default"].string,
    'static': _propTypes["default"].bool,
    'horizontal': _propTypes["default"].bool.isRequired
  };
  WrapPlupload.defaultProps = {};
  var _default = WrapPlupload;
  _exports["default"] = _default;
});