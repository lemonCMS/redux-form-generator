'use strict';

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _react = require('react');

var _redboxReact = require('redbox-react');

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _utilsFunctions = require('./utils/functions');

var _reactBootstrap = require('react-bootstrap');

var _Pending = require('./Pending');

var _Pending2 = _interopRequireDefault(_Pending);

var _reduxForm = require('redux-form');

var _reactPlupload = require('react-plupload');

var _reactPlupload2 = _interopRequireDefault(_reactPlupload);

var _components = {
  _$BaseForm: {
    displayName: 'BaseForm'
  }
};

var _reactComponentWrapper = _reactTransformCatchErrors3['default']({
  filename: 'src/BaseForm.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

var BaseForm = (function (_Component) {
  _inherits(BaseForm, _Component);

  _createClass(BaseForm, null, [{
    key: 'propTypes',
    value: {
      clearActionState: _react.PropTypes.func.isRequired,
      dispatch: _react.PropTypes.func.isRequired,
      fields: _react.PropTypes.object.isRequired,
      fieldsNeeded: _react.PropTypes.array.isRequired,
      formName: _react.PropTypes.string.isRequired,
      formKey: _react.PropTypes.string,
      formClass: _react.PropTypes.string,
      handleSubmit: _react.PropTypes.func.isRequired,
      invalid: _react.PropTypes.bool.isRequired,
      pristine: _react.PropTypes.bool.isRequired,
      submit: _react.PropTypes.func.isRequired,
      getActionState: _react.PropTypes.func.isRequired,
      success: _react.PropTypes.bool,
      token: _react.PropTypes.string,
      valid: _react.PropTypes.bool.isRequired
    },
    enumerable: true
  }]);

  function BaseForm() {
    _classCallCheck(this, _BaseForm);

    _Component.call(this);
    this.addField = this.addField.bind(this);
    this.dropDownSelect = this.dropDownSelect.bind(this);
    this.dropDown = this.dropDown.bind(this);
    this.input = this.input.bind(this);
    this.row = this.row.bind(this);
    this.col = this.col.bind(this);
    this.plupload = this.plupload.bind(this);
    this.state = {
      dropDownTitle: {},
      hidden: [],
      pending: false
    };
  }

  BaseForm.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _nextProps$getActionState = nextProps.getActionState();

    var success = _nextProps$getActionState.success;

    if (_lodash2['default'].isEmpty(nextProps.active) && success) {
      this.props.clearActionState();
    }
  };

  BaseForm.prototype.dropDownSelect = function dropDownSelect(name, item) {
    var _this = this;

    this.setState(_lodash2['default'].set(_Object$assign({}, this.state), ['dropDownTitle', name], item.desc || item['default']));

    return new _Promise(function (resolve) {
      resolve(_this.props.dispatch(_reduxForm.change(_this.props.formName, name, item.field)));
    }).then(function () {
      _this.refs.button.click();
    });
  };

  BaseForm.prototype.dropDown = function dropDown(field, size) {
    var _this2 = this;

    var menuItem = [];
    var dropDownTitle = null;
    _lodash2['default'].map(field.items, function (item, key) {
      var select = function select() {
        _this2.dropDownSelect(field.name, item);
      };

      if (item.hasOwnProperty('default')) {
        dropDownTitle = item['default'];
        menuItem.push(_react2['default'].createElement(
          _reactBootstrap.MenuItem,
          { key: key, onSelect: select },
          item['default']
        ));
        menuItem.push(_react2['default'].createElement(_reactBootstrap.MenuItem, { key: key + '_div', divider: true }));
      } else {
        if (_lodash2['default'].get(_this2.props, ['fields', field.name, 'defaultValue']) === item.field) {
          dropDownTitle = item.desc;
        }
        menuItem.push(_react2['default'].createElement(
          _reactBootstrap.MenuItem,
          { key: key, onSelect: select },
          item.desc
        ));
      }
    });

    if (menuItem.length > 0) {
      return _react2['default'].createElement(
        _reactBootstrap.DropdownButton,
        { key: field.name, className: _lodash2['default'].get(field, 'className'), bsSize: _lodash2['default'].get(field, 'bsSize', size), bsStyle: _lodash2['default'].get(field, 'bsStyle', 'primary'), title: _lodash2['default'].get(this.state, ['dropDownTitle', field.name]) || dropDownTitle, id: 'input-dropdown-addon' + field.name },
        menuItem
      );
    }
  };

  BaseForm.prototype.input = function input(field, size) {
    var props = this.props.fields[field.name];
    var thisSize = _lodash2['default'].get(field, 'bsSize', size);
    var extraProps = {};
    if (props.touched && props.error) {
      extraProps.bsStyle = 'error';
    }
    if (props.touched && props.error) {
      extraProps.help = props.error;
    }
    return _react2['default'].createElement(_reactBootstrap.Input, _extends({
      key: field.name,
      name: 'search',
      bsSize: thisSize
    }, extraProps, field, props, {
      buttonBefore: this.addField(_lodash2['default'].get(field, 'buttonBefore', {}), thisSize),
      buttonAfter: this.addField(_lodash2['default'].get(field, 'buttonAfter', {}), thisSize)
    }));
  };

  BaseForm.prototype.file = function file(field, size) {
    var props = this.props.fields[field.name];
    var thisSize = _lodash2['default'].get(field, 'bsSize', size);
    var extraProps = {};
    if (props.touched && props.error) {
      extraProps.bsStyle = 'error';
    }
    if (props.touched && props.error) {
      extraProps.help = props.error;
    }

    return _react2['default'].createElement(_reactBootstrap.Input, _extends({
      ref: field.name,
      key: field.name,
      name: 'search',
      bsSize: thisSize
    }, extraProps, field, {
      onDrop: props.onDrop,
      onChange: function (e) {
        props.onChange(e);
      },
      onFocus: props.onFocus,
      onUpdate: props.onUpdate,
      buttonBefore: this.addField(_lodash2['default'].get(field, 'buttonBefore', {}), thisSize),
      buttonAfter: this.addField(_lodash2['default'].get(field, 'buttonAfter', {}), thisSize)
    }));
  };

  BaseForm.prototype.plupload = function plupload(field) {
    var _this3 = this;

    var props = this.props.fields[field.name];
    var allFiles = props.value || [];
    var extraProps = {};
    if (props.touched && props.error) {
      extraProps.bsStyle = 'error';
    }
    if (props.touched && props.error) {
      extraProps.help = props.error;
    }

    var stateChange = function stateChange(plupload) {
      if (plupload.state === 2) {
        // Starting with uploading
        _this3.setState({ pending: true });
        return true;
      }

      _this3.setState({ pending: false });
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

      _this3.props.dispatch(_reduxForm.change(_this3.props.formName, field.name, allFiles));
    };

    var fileDelete = function fileDelete(index) {
      _lodash2['default'].set(allFiles, [index], _lodash2['default'].merge(_lodash2['default'].get(allFiles, [index]), { deleted: 1 }));
      _this3.props.dispatch(_reduxForm.change(_this3.props.formName, field.name, allFiles));
    };

    var showFiles = _lodash2['default'].filter(props.value, function (v) {
      return !v.deleted;
    });

    var renderTable = function renderTable() {
      if (showFiles.length === 0) {
        return [];
      }

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
            _react2['default'].createElement('th', null)
          )
        ),
        _react2['default'].createElement(
          'tbody',
          null,
          _lodash2['default'].map(showFiles, function (file, key) {
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
              _react2['default'].createElement(
                'td',
                null,
                _react2['default'].createElement(
                  _reactBootstrap.Button,
                  { onClick: function () {
                      fileDelete(key);
                    } },
                  _react2['default'].createElement('i', { className: 'fa fa-trash-o' })
                )
              )
            );
          })
        )
      );
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
        _react2['default'].createElement(_reactPlupload2['default'], {
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
        }),
        renderTable()
      )
    );
  };

  BaseForm.prototype.staticField = function staticField(field, size) {
    var props = this.props.fields[field.name];
    var thisSize = _lodash2['default'].get(field, 'bsSize', size);
    var extraProps = {};
    if (props.touched && props.error) {
      extraProps.bsStyle = 'error';
    }
    if (props.touched && props.error) {
      extraProps.help = props.error;
    }
    return _react2['default'].createElement(_reactBootstrap.FormControls.Static, _extends({
      key: field.name,
      name: 'search',
      bsSize: thisSize
    }, extraProps, field, props, {
      buttonBefore: this.addField(_lodash2['default'].get(field, 'buttonBefore', {}), thisSize),
      buttonAfter: this.addField(_lodash2['default'].get(field, 'buttonAfter', {}), thisSize)
    }));
  };

  BaseForm.prototype.row = function row(field, key, size) {
    var _this4 = this;

    return _react2['default'].createElement(
      _reactBootstrap.Row,
      { key: key },
      _lodash2['default'].map(field, function (row) {
        var thisSize = _lodash2['default'].get(row, 'bsSize', size);
        return _this4.col(row.col, thisSize);
      })
    );
  };

  BaseForm.prototype.col = function col(cols, size) {
    var _this5 = this;

    return _lodash2['default'].map(cols, function (col, key) {
      var thisSize = _lodash2['default'].get(col, 'bsSize', size);
      return _react2['default'].createElement(
        _reactBootstrap.Col,
        _extends({ key: key }, _lodash2['default'].omit(col, 'children')),
        _lodash2['default'].map(col.children, function (child) {
          return _this5.addField(child, thisSize);
        })
      );
    });
  };

  BaseForm.prototype.submit = function submit(field, size) {
    if (this.state.pending === true) {
      return _react2['default'].createElement(
        _reactBootstrap.Button,
        {
          key: field.name,
          bsSize: _lodash2['default'].get(field, 'bsSize', size),
          type: 'button',
          disabled: true,
          bsStyle: _lodash2['default'].get(field, 'style', 'primary')
        },
        field.value
      );
    }

    return _react2['default'].createElement(
      _reactBootstrap.Button,
      {
        key: field.name,
        bsSize: _lodash2['default'].get(field, 'bsSize', size),
        type: field.type,
        bsStyle: _lodash2['default'].get(field, 'style', 'primary')
      },
      field.value
    );
  };

  BaseForm.prototype.button = function button(field, size) {
    return _react2['default'].createElement(
      _reactBootstrap.Button,
      {
        key: field.name,
        bsSize: _lodash2['default'].get(field, 'bsSize', size),
        type: field.type,
        bsStyle: _lodash2['default'].get(field, 'style', 'primary'),
        onClick: _lodash2['default'].get(field, 'onClick', function () {})
      },
      field.value
    );
  };

  BaseForm.prototype.message = function message(field, size) {
    var _props$getActionState = this.props.getActionState();

    var success = _props$getActionState.success;
    var failed = _props$getActionState.failed;

    if (field.type === 'success' && success && this.props.valid === true || field.type === 'error' && (failed || this.props.invalid === true && this.props.pristine === false)) {
      var style = field.type === 'success' ? 'success' : 'danger';
      return _react2['default'].createElement(
        _reactBootstrap.Alert,
        { key: field.type, bsStyle: style, bsSize: _lodash2['default'].get(field, 'bsSize', size) },
        field.message
      );
    }
  };

  BaseForm.prototype.addField = function addField(field, size) {
    if (!_lodash2['default'].isEmpty(field)) {
      switch (field.type) {
        case 'submit':
          return this.submit(field, size);
        case 'button':
          return this.button(field, size);
        case 'dropdown':
          return this.dropDown(field, size);
        case 'success':
        case 'error':
          return this.message(field, size);
        case 'static':
          return this.staticField(field, size);
        case 'link':
          return this.link(field, size);
        case 'file':
          return this.file(field, size);
        case 'plupload':
          return this.plupload(field);
        default:
          return this.input(field, size);
      }
    }
  };

  BaseForm.prototype.render = function render() {
    var _this6 = this;

    var _props$getActionState2 = this.props.getActionState();

    var pending = _props$getActionState2.pending;
    var fieldsNeeded = this.props.fieldsNeeded;

    return _react2['default'].createElement(
      'form',
      { onSubmit: this.props.handleSubmit(this.props.submit), ref: 'form', className: _lodash2['default'].get(this.props, 'formClass', 'form-horizontal') },
      _react2['default'].createElement(
        _Pending2['default'],
        { state: pending || false },
        _react2['default'].createElement(
          'div',
          { formKey: this.props.formKey },
          _lodash2['default'].map(fieldsNeeded, function (field, key) {
            var size = _lodash2['default'].get(field, 'bsSize', 'medium');
            if (field.hasOwnProperty('name')) {
              return _this6.addField(field, size);
            } else if (field.hasOwnProperty('row')) {
              return _this6.row(field, key, size);
            }
          })
        ),
        _react2['default'].createElement('input', { type: 'button', ref: 'button', onClick: this.props.handleSubmit(this.props.submit), className: 'hidden' })
      )
    );
  };

  var _BaseForm = BaseForm;
  BaseForm = _wrapComponent('_$BaseForm')(BaseForm) || BaseForm;
  BaseForm = _reactRedux.connect(function (state) {
    return {};
  }, _utilsFunctions.mapDispatchToProps)(BaseForm) || BaseForm;
  return BaseForm;
})(_react.Component);

exports['default'] = BaseForm;
module.exports = exports['default'];