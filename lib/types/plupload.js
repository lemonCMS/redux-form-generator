Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactBootstrap = require('react-bootstrap');

var _reactPlupload = require('react-plupload');

var _reactPlupload2 = _interopRequireDefault(_reactPlupload);

var PluploadType = (function (_Component) {
  _inherits(PluploadType, _Component);

  function PluploadType() {
    _classCallCheck(this, PluploadType);

    _get(Object.getPrototypeOf(PluploadType.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PluploadType, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var _props = this.props;
      var properties = _props.properties;
      var field = _props.field;
      var dispatch = _props.dispatch;

      var allFiles = properties.value || [];
      var extraProps = {};
      if (properties.touched && properties.error) {
        extraProps.bsStyle = 'error';
      }
      if (properties.touched && properties.error) {
        extraProps.help = properties.error;
      }

      var stateChange = function stateChange(plupload) {
        if (plupload.state === 2) {
          // Starting with uploading
          _this.setState({ pending: true });
          return true;
        }

        _this.setState({ pending: false });
      };

      var addedFiles = function addedFiles(plupload, files) {
        var fileList = [];
        _lodash2['default'].map(files, function (file) {
          fileList.push(file.name);
        });
      };

      var fileUploaded = function fileUploaded(plupload, file, response) {
        var uploadResponse = JSON.parse(response.response);
        if (_lodash2['default'].get(field, 'multi_selection', true) === false) {
          allFiles = [];
          allFiles.push(uploadResponse.result);
        } else {
          allFiles.push(uploadResponse.result);
        }

        if (_lodash2['default'].has(_this.props, 'formKey')) {
          dispatch((0, _reduxForm.changeWithKey)(_this.props.formName, _this.props.formKey, field.name, allFiles));
        } else {
          dispatch((0, _reduxForm.change)(_this.props.formName, field.name, allFiles));
        }
      };

      var fileDelete = function fileDelete(index) {
        _lodash2['default'].set(allFiles, [index], _lodash2['default'].merge(_lodash2['default'].get(allFiles, [index]), { deleted: 1 }));
        if (_lodash2['default'].has(_this.props, 'formKey')) {
          dispatch((0, _reduxForm.changeWithKey)(_this.props.formName, _this.props.formKey, field.name, allFiles));
        } else {
          dispatch((0, _reduxForm.change)(_this.props.formName, field.name, allFiles));
        }
      };

      var staticForm = _lodash2['default'].get(this.props, 'static', false);

      var delCol = function delCol(key) {
        if (staticForm === false) {
          return _react2['default'].createElement(
            'td',
            null,
            _react2['default'].createElement(
              _reactBootstrap.Button,
              { onClick: function () {
                  fileDelete(key);
                } },
              _react2['default'].createElement('i', { className: 'fa fa-trash-o' })
            )
          );
        }
      };

      var renderTable = function renderTable() {
        var files = _lodash2['default'].filter(properties.value, function (file) {
          return !file.deleted;
        });
        if (files.length > 0) {
          return _react2['default'].createElement(
            _reactBootstrap.Table,
            { striped: true, bordered: true, condensed: true, hover: true },
            _react2['default'].createElement(
              'thead',
              null,
              _react2['default'].createElement(
                'tr',
                null,
                _react2['default'].createElement(
                  'th',
                  null,
                  'Bestand'
                ),
                staticForm === false ? _react2['default'].createElement('th', null) : ''
              )
            ),
            _react2['default'].createElement(
              'tbody',
              null,
              _lodash2['default'].map(properties.value, function (file, key) {
                if (!file.deleted) {
                  return _react2['default'].createElement(
                    'tr',
                    { key: key },
                    _react2['default'].createElement(
                      'td',
                      null,
                      file.file_original_name,
                      ' ',
                      file.deleted
                    ),
                    delCol(key)
                  );
                }
              })
            )
          );
        }
      };

      var plupload = function plupload() {
        if (_lodash2['default'].get(_this.props, 'static', false) === false) {
          return _react2['default'].createElement(_reactPlupload2['default'], {
            key: field.name,
            id: 'plupload',
            runtimes: 'html5',
            multipart: true,
            chunk_size: '1mb',
            url: field.url,
            multi_selection: _lodash2['default'].get(field, 'multi_selection', true),
            flash_swf_url: _lodash2['default'].get(field, 'flash_swf_url', '/plupload-2.1.8/js/Moxie.swf'),
            onFilesAdded: addedFiles,
            onStateChanged: stateChange,
            onFileUploaded: fileUploaded,
            autoUpload: true,
            headers: field.headers || {}
          });
        }
      };

      return _react2['default'].createElement(
        'div',
        { key: field.name, className: 'form-group' },
        _react2['default'].createElement(
          'label',
          { className: field.labelClassName + ' control-label' },
          field.label
        ),
        _react2['default'].createElement(
          'div',
          { className: field.wrapperClassName },
          plupload(),
          renderTable()
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'formKey': _react.PropTypes.string,
      'formName': _react.PropTypes.string.isRequired,
      'dispatch': _react.PropTypes.func.isRequired
    },
    enumerable: true
  }]);

  return PluploadType;
})(_react.Component);

exports['default'] = PluploadType;
module.exports = exports['default'];