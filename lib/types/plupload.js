'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reduxForm = require('redux-form');

var _reactBootstrap = require('react-bootstrap');

var _reactPlupload = require('react-plupload');

var _reactPlupload2 = _interopRequireDefault(_reactPlupload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  PluploadType: {
    displayName: 'PluploadType'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/types/plupload.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var PluploadType = _wrapComponent('PluploadType')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(PluploadType, _Component);

  function PluploadType() {
    (0, _classCallCheck3.default)(this, PluploadType);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PluploadType).apply(this, arguments));
  }

  (0, _createClass3.default)(PluploadType, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

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
          _this2.setState({ pending: true });
          return true;
        }

        _this2.setState({ pending: false });
      };

      var addedFiles = function addedFiles(plupload, files) {
        var fileList = [];
        _lodash2.default.map(files, function (file) {
          fileList.push(file.name);
        });
      };

      var fileUploaded = function fileUploaded(plupload, file, response) {
        var uploadResponse = JSON.parse(response.response);
        if (_lodash2.default.get(field, 'multi_selection', true) === false) {
          allFiles = [];
          allFiles.push(uploadResponse.result);
        } else {
          allFiles.push(uploadResponse.result);
        }

        if (_lodash2.default.has(_this2.props, 'formKey')) {
          dispatch((0, _reduxForm.changeWithKey)(_this2.props.formName, _this2.props.formKey, field.name, allFiles));
        } else {
          dispatch((0, _reduxForm.change)(_this2.props.formName, field.name, allFiles));
        }
      };

      var fileDelete = function fileDelete(index) {
        _lodash2.default.set(allFiles, [index], _lodash2.default.merge(_lodash2.default.get(allFiles, [index]), { deleted: 1 }));
        if (_lodash2.default.has(_this2.props, 'formKey')) {
          dispatch((0, _reduxForm.changeWithKey)(_this2.props.formName, _this2.props.formKey, field.name, allFiles));
        } else {
          dispatch((0, _reduxForm.change)(_this2.props.formName, field.name, allFiles));
        }
      };

      var staticForm = _lodash2.default.get(this.props, 'static', false);

      var delCol = function delCol(key) {
        if (staticForm === false) {
          return _react3.default.createElement(
            'td',
            null,
            _react3.default.createElement(
              _reactBootstrap.Button,
              { onClick: function onClick() {
                  fileDelete(key);
                } },
              _react3.default.createElement('i', { className: 'fa fa-trash-o' })
            )
          );
        }
      };

      var renderTable = function renderTable() {
        var files = _lodash2.default.filter(properties.value, function (file) {
          return !file.deleted;
        });
        if (files.length > 0) {
          return _react3.default.createElement(
            _reactBootstrap.Table,
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
                staticForm === false ? _react3.default.createElement('th', null) : ''
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _lodash2.default.map(properties.value, function (file, key) {
                if (!file.deleted) {
                  return _react3.default.createElement(
                    'tr',
                    { key: key },
                    _react3.default.createElement(
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
        if (_lodash2.default.get(_this2.props, 'static', false) === false) {
          return _react3.default.createElement(_reactPlupload2.default, {
            key: field.name,
            id: 'plupload',
            runtimes: 'html5',
            multipart: true,
            chunk_size: '1mb',
            url: field.url,
            multi_selection: _lodash2.default.get(field, 'multi_selection', true),
            flash_swf_url: _lodash2.default.get(field, 'flash_swf_url', '/plupload-2.1.8/js/Moxie.swf'),
            onFilesAdded: addedFiles,
            onStateChanged: stateChange,
            onFileUploaded: fileUploaded,
            autoUpload: true,
            headers: field.headers || {}
          });
        }
      };

      return _react3.default.createElement(
        'div',
        { key: field.name, className: 'form-group' },
        _react3.default.createElement(
          'label',
          { className: field.labelClassName + ' control-label' },
          field.label
        ),
        _react3.default.createElement(
          'div',
          { className: field.wrapperClassName },
          plupload(),
          renderTable()
        )
      );
    }
  }]);
  return PluploadType;
}(_react2.Component), _class.propTypes = {
  'field': _react2.PropTypes.object.isRequired,
  'properties': _react2.PropTypes.object.isRequired,
  'size': _react2.PropTypes.string,
  'formKey': _react2.PropTypes.string,
  'formName': _react2.PropTypes.string.isRequired,
  'dispatch': _react2.PropTypes.func.isRequired
}, _temp));

exports.default = PluploadType;
module.exports = exports['default'];