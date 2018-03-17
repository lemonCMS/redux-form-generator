'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clone2 = require('lodash/clone');

var _clone3 = _interopRequireDefault(_clone2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

var _reactPlupload = require('react-plupload');

var _reactPlupload2 = _interopRequireDefault(_reactPlupload);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrapPlupload = function (_React$Component) {
  _inherits(WrapPlupload, _React$Component);

  function WrapPlupload() {
    _classCallCheck(this, WrapPlupload);

    var _this = _possibleConstructorReturn(this, (WrapPlupload.__proto__ || Object.getPrototypeOf(WrapPlupload)).call(this));

    _this.state = {
      allFiles: [],
      changed: null
    };
    _this.input = {};
    _this.custom = {};
    _this.renderField = _this.renderField.bind(_this);
    return _this;
  }

  _createClass(WrapPlupload, [{
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
          submitError = _props$meta.submitError,
          submitFailed = _props$meta.submitFailed,
          valid = _props$meta.valid,
          custom = _objectWithoutProperties(props, ['input', 'label', 'help', 'meta']);

      var allFiles = (0, _get3.default)(props, 'input.value', []);
      this.input = input;
      this.custom = custom;
      var size = (0, _get3.default)(this.props.field, 'bsSize', this.props.size);

      var stateChange = function stateChange(plupload) {
        if (plupload.state === 2) {
          // Starting with uploading
          _this2.setState({ pending: true });
          return true;
        }

        _this2.setState({ pending: false });
      };

      var addedFiles = function addedFiles(plupload, files) {
        var fileList = [];
        (0, _map3.default)(files, function (file) {
          fileList.push(file.name);
        });
      };

      var fileUploaded = function fileUploaded(plupload, file, response) {
        var uploadResponse = JSON.parse(response.response);
        if ((0, _get3.default)(custom, 'multi_selection', true) === false) {
          allFiles = [uploadResponse.result];
          _this2.setState({ changed: Date.now() }, function () {
            _this2.input.onChange(allFiles);
          });
        } else {
          var files = (0, _clone3.default)(allFiles);
          files.push(uploadResponse.result);
          allFiles = files;
          _this2.setState({ changed: Date.now() }, function () {
            _this2.input.onBlur();
            _this2.input.onChange(allFiles);
          });
        }
      };

      var fileDelete = function fileDelete(index) {
        allFiles[index].deleted = 1;
        _this2.setState({ changed: Date.now() }, function () {
          _this2.input.onBlur();
          _this2.input.onChange(allFiles);
          _this2.forceUpdate();
        });
      };

      var staticForm = (0, _get3.default)(this.props, 'static', false);

      var editRender = function editRender(files) {
        if (files.length > 0) {
          return _react2.default.createElement(
            _Table2.default,
            { striped: true, bordered: true, condensed: true, hover: true },
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Bestand'
                ),
                _react2.default.createElement('th', null)
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              (0, _map3.default)(input.value, function (file, key) {
                return !file.deleted && _react2.default.createElement(
                  'tr',
                  { key: key },
                  _react2.default.createElement(
                    'td',
                    null,
                    file.file_original_name,
                    ' ',
                    file.deleted
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _Button2.default,
                      { onClick: function onClick() {
                          fileDelete(key);
                        } },
                      _react2.default.createElement('i', { className: 'fa fa-trash-o' })
                    )
                  )
                );
              })
            )
          );
        }
      };

      var staticRender = function staticRender(files) {
        if (files.length > 0) {
          return _react2.default.createElement(
            _Table2.default,
            { striped: true, bordered: true, condensed: true, hover: true },
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Bestand'
                )
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              (0, _map3.default)(files, function (file, key) {
                return !file.deleted && _react2.default.createElement(
                  'tr',
                  { key: key },
                  _react2.default.createElement(
                    'td',
                    null,
                    file.file_original_name,
                    ' ',
                    file.deleted
                  )
                );
              })
            )
          );
        }
      };

      var renderTable = function renderTable() {
        var files = (0, _filter3.default)(allFiles, function (file) {
          return !file.deleted;
        });
        if (files.length > 0) {
          return staticForm ? staticRender(files) : editRender(files);
        }
      };

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

      var component = function component() {
        var disabled = false;
        if (_this2.props.field && _this2.props.field.disabled && (0, _isFunction3.default)(_this2.props.field.disabled)) {
          disabled = _this2.props.checkDisabled(_this2.props.field.disabled());
        }

        var staticField = _this2.props.static || (0, _get3.default)(_this2.props.field, 'static', false) || disabled;
        if (staticField === false) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactPlupload2.default, _extends({
              key: input.name
            }, custom.conf, {
              id: 'plupload_' + input.name,
              onFilesAdded: addedFiles,
              onStateChanged: stateChange,
              onFileUploaded: fileUploaded
            }))
          );
        }
      };

      var validationState = function validationState() {
        if (touched && error || submitFailed && submitError) {
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
            _extends({ componentClass: _ControlLabel2.default }, labelSize()),
            label
          );
        }
      };

      return _react2.default.createElement(
        _FormGroup2.default,
        _extends({}, thisSize(), {
          validationState: validationState()
        }),
        getLabel(),
        _react2.default.createElement(
          _Col2.default,
          fieldSize(),
          component(),
          renderTable(),
          (touched && error || submitFailed && submitError) && _react2.default.createElement(_FormControl2.default.Feedback, null),
          help && (!touched || !submitError && !error) && _react2.default.createElement(
            _HelpBlock2.default,
            null,
            help
          ),
          (touched && error || submitFailed && submitError) && _react2.default.createElement(
            _HelpBlock2.default,
            null,
            submitError || error
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

  return WrapPlupload;
}(_react2.default.Component);

WrapPlupload.propTypes = {
  'checkDisabled': _propTypes2.default.func,
  'checkHidden': _propTypes2.default.func,
  'checkShow': _propTypes2.default.func,
  'field': _propTypes2.default.object,
  'size': _propTypes2.default.string,
  'static': _propTypes2.default.bool,
  'horizontal': _propTypes2.default.bool.isRequired
};
WrapPlupload.defaultProps = {};

exports.default = WrapPlupload;