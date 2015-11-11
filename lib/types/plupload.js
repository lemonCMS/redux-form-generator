'use strict';

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _react = require('react');

var _redboxReact = require('redbox-react');

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactBootstrap = require('react-bootstrap');

var _reactPlupload = require('react-plupload');

var _reactPlupload2 = _interopRequireDefault(_reactPlupload);

var _components = {
  _$PluploadType: {
    displayName: 'PluploadType'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/types/plupload.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var PluploadType = (function (_Component) {
  _inherits(PluploadType, _Component);

  function PluploadType() {
    _classCallCheck(this, _PluploadType);

    _Component.apply(this, arguments);
  }

  PluploadType.prototype.render = function render() {
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

      dispatch(_reduxForm.change(_this.props.formName, field.name, allFiles));
    };

    var fileDelete = function fileDelete(index) {
      _lodash2['default'].set(allFiles, [index], _lodash2['default'].merge(_lodash2['default'].get(allFiles, [index]), { deleted: 1 }));
      dispatch(_reduxForm.change(_this.props.formName, field.name, allFiles));
    };

    var renderTable = function renderTable() {
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
            _lodash2['default'].get(_this.props, 'static', false) === false ? _react2['default'].createElement('th', null) : ''
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
                function () {
                  if (_lodash2['default'].get(_this.props, 'static', false) === false) {
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
                }
              );
            }
          })
        )
      );
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
      { key: field.name, className: 'formgroup' },
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
  };

  _createClass(PluploadType, null, [{
    key: 'propTypes',
    value: {
      'field': _react.PropTypes.object.isRequired,
      'properties': _react.PropTypes.object.isRequired,
      'size': _react.PropTypes.string,
      'formName': _react.PropTypes.string.isRequired,
      'dispatch': _react.PropTypes.func.isRequired
    },
    enumerable: true
  }]);

  var _PluploadType = PluploadType;
  PluploadType = _wrapComponent('_$PluploadType')(PluploadType) || PluploadType;
  return PluploadType;
})(_react.Component);

exports['default'] = PluploadType;
module.exports = exports['default'];