'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _components = {
  WrapPlupload: {
    displayName: 'WrapPlupload'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Types/WrapPlupload.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var WrapPlupload = _wrapComponent('WrapPlupload')(function (_React$Component) {
  (0, _inherits3.default)(WrapPlupload, _React$Component);

  function WrapPlupload() {
    (0, _classCallCheck3.default)(this, WrapPlupload);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WrapPlupload.__proto__ || (0, _getPrototypeOf2.default)(WrapPlupload)).call(this));

    _this.state = {
      allFiles: [],
      changed: null
    };
    _this.input = {};
    _this.custom = {};
    _this.renderField = _this.renderField.bind(_this);

    if (!(typeof _this.renderField === 'function')) {
      throw new TypeError('Value of "this.renderField" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.renderField));
    }

    return _this;
  }

  (0, _createClass3.default)(WrapPlupload, [{
    key: 'renderField',
    value: function renderField(props) {
      var _this2 = this;

      var input = props.input,
          label = props.label,
          help = props.help,
          _props$meta = props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          valid = _props$meta.valid,
          custom = (0, _objectWithoutProperties3.default)(props, ['input', 'label', 'help', 'meta']);

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
          return _react3.default.createElement(
            _Table2.default,
            { striped: true, bordered: true, condensed: true, hover: true },
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  null,
                  'Bestand'
                ),
                _react3.default.createElement('th', null)
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              (0, _map3.default)(input.value, function (file, key) {
                return !file.deleted && _react3.default.createElement(
                  'tr',
                  { key: key },
                  _react3.default.createElement(
                    'td',
                    null,
                    file.file_original_name,
                    ' ',
                    file.deleted
                  ),
                  _react3.default.createElement(
                    'td',
                    null,
                    _react3.default.createElement(
                      _Button2.default,
                      { onClick: function onClick() {
                          fileDelete(key);
                        } },
                      _react3.default.createElement('i', { className: 'fa fa-trash-o' })
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
          return _react3.default.createElement(
            _Table2.default,
            { striped: true, bordered: true, condensed: true, hover: true },
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  null,
                  'Bestand'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              (0, _map3.default)(files, function (file, key) {
                return !file.deleted && _react3.default.createElement(
                  'tr',
                  { key: key },
                  _react3.default.createElement(
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
          return _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(_reactPlupload2.default, (0, _extends3.default)({
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
        if (touched && error) {
          return 'error';
        }

        if (touched && valid) {
          return 'success';
        }
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
          renderTable(),
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
      return null;
    }
  }]);
  return WrapPlupload;
}(_react3.default.Component));

WrapPlupload.propTypes = {
  'field': _react3.default.PropTypes.object,
  'size': _react3.default.PropTypes.string,
  'static': _react3.default.PropTypes.bool,
  'horizontal': _react3.default.PropTypes.bool.isRequired
};
WrapPlupload.defaultProps = {};

exports.default = WrapPlupload;

function _inspect(input, depth) {
  var maxDepth = 4;
  var maxKeys = 15;

  if (depth === undefined) {
    depth = 0;
  }

  depth += 1;

  if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'void';
  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
  } else if (Array.isArray(input)) {
    if (input.length > 0) {
      var _ret = function () {
        if (depth > maxDepth) return {
            v: '[...]'
          };

        var first = _inspect(input[0], depth);

        if (input.every(function (item) {
          return _inspect(item, depth) === first;
        })) {
          return {
            v: first.trim() + '[]'
          };
        } else {
          return {
            v: '[' + input.slice(0, maxKeys).map(function (item) {
              return _inspect(item, depth);
            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
          };
        }
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    } else {
      return 'Array';
    }
  } else {
    var keys = (0, _keys2.default)(input);

    if (!keys.length) {
      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
        return input.constructor.name;
      } else {
        return 'Object';
      }
    }

    if (depth > maxDepth) return '{...}';
    var indent = '  '.repeat(depth - 1);
    var entries = keys.slice(0, maxKeys).map(function (key) {
      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
    }).join('\n  ' + indent);

    if (keys.length >= maxKeys) {
      entries += '\n  ' + indent + '...';
    }

    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
    } else {
      return '{\n  ' + indent + entries + '\n' + indent + '}';
    }
  }
}

module.exports = exports['default'];