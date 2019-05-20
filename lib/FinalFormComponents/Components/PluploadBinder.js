(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "react-plupload", "react-bootstrap/lib/Button", "react-bootstrap/lib/Table", "lodash/clone", "lodash/get", "lodash/map", "lodash/filter"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("react-plupload"), require("react-bootstrap/lib/Button"), require("react-bootstrap/lib/Table"), require("lodash/clone"), require("lodash/get"), require("lodash/map"), require("lodash/filter"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactPlupload, global.Button, global.Table, global.clone, global.get, global.map, global.filter);
    global.PluploadBinder = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _reactPlupload, _Button, _Table, _clone2, _get2, _map2, _filter2) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _reactPlupload = _interopRequireDefault(_reactPlupload);
  _Button = _interopRequireDefault(_Button);
  _Table = _interopRequireDefault(_Table);
  _clone2 = _interopRequireDefault(_clone2);
  _get2 = _interopRequireDefault(_get2);
  _map2 = _interopRequireDefault(_map2);
  _filter2 = _interopRequireDefault(_filter2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var PluploadBinder =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(PluploadBinder, _React$Component);

    function PluploadBinder() {
      var _this;

      _this = _React$Component.call(this) || this;
      _this.renderTable = _this.renderTable.bind(_assertThisInitialized(_this));
      _this.addedFiles = _this.addedFiles.bind(_assertThisInitialized(_this));
      _this.editRender = _this.editRender.bind(_assertThisInitialized(_this));
      _this.fileDelete = _this.fileDelete.bind(_assertThisInitialized(_this));
      _this.fileUploaded = _this.fileUploaded.bind(_assertThisInitialized(_this));
      _this.stateChange = _this.stateChange.bind(_assertThisInitialized(_this));
      _this.staticRender = _this.staticRender.bind(_assertThisInitialized(_this));
      _this.allFiles = [];
      return _this;
    }

    var _proto = PluploadBinder.prototype;

    _proto.stateChange = function stateChange(plupload) {
      if (plupload.state === 2) {
        // Starting with uploading
        this.setState({
          pending: true
        });
        return true;
      }

      this.setState({
        pending: false
      });
    };

    _proto.addedFiles = function addedFiles(plupload, files) {
      var fileList = [];
      (0, _map2["default"])(files, function (file) {
        fileList.push(file.name);
      });
    };

    _proto.fileUploaded = function fileUploaded(plupload, file, response) {
      var _this2 = this;

      var uploadResponse = JSON.parse(response.response);

      if ((0, _get2["default"])(this.props.field.config, 'multi_selection', true) === false) {
        this.allFiles = [uploadResponse.result];
        this.setState({
          changed: Date.now()
        }, function () {
          _this2.props.input.onChange(_this2.allFiles);
        });
      } else {
        var files = (0, _clone2["default"])(this.allFiles);
        files.push(uploadResponse.result);
        this.allFiles = files;
        this.setState({
          changed: Date.now()
        }, function () {
          _this2.props.input.onBlur();

          _this2.props.input.onChange(_this2.allFiles);
        });
      }
    };

    _proto.fileDelete = function fileDelete(index) {
      var _this3 = this;

      this.allFiles[index].deleted = 1;
      this.setState({
        changed: Date.now()
      }, function () {
        _this3.props.input.onBlur();

        _this3.props.input.onChange(_this3.allFiles);

        _this3.forceUpdate();
      });
    };

    _proto.editRender = function editRender(files) {
      var _this4 = this;

      if (files.length > 0) {
        return _react["default"].createElement(_Table["default"], {
          striped: true,
          bordered: true,
          condensed: true,
          hover: true
        }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", null, "Bestand"), _react["default"].createElement("th", null))), _react["default"].createElement("tbody", null, (0, _map2["default"])(this.props.input.value, function (file, key) {
          return !file.deleted && _react["default"].createElement("tr", {
            key: key
          }, _react["default"].createElement("td", null, file.file_original_name, " ", file.deleted), _react["default"].createElement("td", null, _react["default"].createElement(_Button["default"], {
            onClick: function onClick() {
              _this4.fileDelete(key);
            }
          }, _react["default"].createElement("i", {
            className: "fa fa-trash-o"
          }))));
        })));
      }
    };

    _proto.staticRender = function staticRender(files) {
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

    _proto.renderTable = function renderTable() {
      var staticForm = (0, _get2["default"])(this.props, 'static', false);
      var files = (0, _filter2["default"])(this.allFiles, function (file) {
        return !file.deleted;
      });

      if (files.length > 0) {
        return staticForm ? this.staticRender(files) : this.editRender(files);
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          field = _this$props.field,
          input = _this$props.input;
      return _react["default"].createElement("div", null, _react["default"].createElement(_reactPlupload["default"], _extends({
        className: field.className,
        onFileUploaded: this.fileUploaded,
        id: "plupload_" + input.name
      }, field.config)), this.renderTable());
    };

    return PluploadBinder;
  }(_react["default"].Component);

  PluploadBinder.propTypes = {
    field: _propTypes["default"].object,
    input: _propTypes["default"].object
  };

  var _default = function _default(_ref) {
    var input = _ref.input,
        field = _ref.field;
    return _react["default"].createElement(PluploadBinder, {
      input: input,
      field: field
    });
  };

  _exports["default"] = _default;
});