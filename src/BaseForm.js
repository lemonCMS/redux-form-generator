import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from './utils/functions';
import {Alert, Row, Col, DropdownButton, MenuItem, Input, Button, FormControls, Table} from 'react-bootstrap';
import Pending from './Pending';
import {change} from 'redux-form';
import Plupload from 'react-plupload';

@connect(state=>({}), mapDispatchToProps)
class BaseForm extends Component {

  static propTypes = {
    clearActionState: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    fieldsNeeded: PropTypes.array.isRequired,
    formName: PropTypes.string.isRequired,
    formKey: PropTypes.string,
    formClass: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    submit: PropTypes.func.isRequired,
    getActionState: PropTypes.func.isRequired,
    success: PropTypes.bool,
    token: PropTypes.string,
    valid: PropTypes.bool.isRequired
  };

  constructor() {
    super();
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

  componentWillReceiveProps(nextProps) {
    const {success} = nextProps.getActionState();
    if (_.isEmpty(nextProps.active) && success) {
      this.props.clearActionState();
    }
  }

  dropDownSelect(name, item) {
    this.setState(_.set(Object.assign({}, this.state), ['dropDownTitle', name], item.desc || item.default));

    return new Promise((resolve) => {
      const changeConst = change(this.props.formName, name, item.field);
      resolve(this.props.dispatch({
        ...changeConst,
        'key': this.props.formKey || undefined
      }));
    }).then(()=>{ this.refs.button.click(); });
  }

  dropDown(field: Object, size: string) {
    const menuItem = [];
    let dropDownTitle = null;
    _.map(field.items, (item, key) => {
      const select = () => { this.dropDownSelect(field.name, item); };

      if (item.hasOwnProperty('default')) {
        dropDownTitle = item.default;
        menuItem.push( <MenuItem key={key} onSelect={select}>{item.default}</MenuItem>);
        menuItem.push( <MenuItem key={key + '_div'} divider/>);
      } else {
        if (_.get(this.props, ['fields', field.name, 'defaultValue']) === item.field) {
          dropDownTitle = item.desc;
        }
        menuItem.push( <MenuItem key={key} onSelect={select}>{item.desc}</MenuItem>);
      }
    });

    if (menuItem.length > 0) {
      return (
        <DropdownButton key={field.name} className={_.get(field, 'className')} bsSize={_.get(field, 'bsSize', size)} bsStyle={_.get(field, 'bsStyle', 'primary')} title={_.get(this.state, ['dropDownTitle', field.name]) || dropDownTitle} id={'input-dropdown-addon' + field.name}>
          {menuItem}
        </DropdownButton>
      );
    }
  }

  input(field: Object, size: string) {
    const props = this.props.fields[field.name];
    const thisSize = _.get(field, 'bsSize', size);
    const extraProps = {};
    if (props.touched && props.error) {
      extraProps.bsStyle = 'error';
    }
    if (props.touched && props.error) {
      extraProps.help = props.error;
    }
    return (
      <Input
        key={field.name}
        name="search"
        bsSize={thisSize}
        {...extraProps}
        {...field}
        {...props}
        buttonBefore={this.addField(_.get(field, 'buttonBefore', {}), thisSize)}
        buttonAfter={this.addField(_.get(field, 'buttonAfter', {}), thisSize)}
      />
    );
  }

  file(field: Object, size: string) {
    const props = this.props.fields[field.name];
    const thisSize = _.get(field, 'bsSize', size);
    const extraProps = {};
    if (props.touched && props.error) {
      extraProps.bsStyle = 'error';
    }
    if (props.touched && props.error) {
      extraProps.help = props.error;
    }

    return (
      <Input
        ref={field.name}
        key={field.name}
        name="search"
        bsSize={thisSize}
        {...extraProps}
        {...field}
        onDrop={props.onDrop}
        onChange={(e) => { props.onChange(e); }}
        onFocus={props.onFocus}
        onUpdate={props.onUpdate}
        buttonBefore={this.addField(_.get(field, 'buttonBefore', {}), thisSize)}
        buttonAfter={this.addField(_.get(field, 'buttonAfter', {}), thisSize)}
        />
    );
  }

  plupload(field: Object) {
    const props = this.props.fields[field.name];
    let allFiles = props.value || [];
    const extraProps = {};
    if (props.touched && props.error) {
      extraProps.bsStyle = 'error';
    }
    if (props.touched && props.error) {
      extraProps.help = props.error;
    }

    const stateChange = (plupload) => {
      if (plupload.state === 2) { // Starting with uploading
        this.setState({pending: true});
        return true;
      }

      this.setState({pending: false});
    };

    const addedFiles = (plupload, files) => {
      const fileList = [];
      _.map(files, (file)=> {
        fileList.push(file.name);
      });
    };

    const fileUploaded = (plupload, file, response) => {
      const uploadResponse = JSON.parse(response.response);
      if (_.get(field, 'multi_selection', true) === false) {
        allFiles = [];
        allFiles.push(uploadResponse.result);
      } else {
        allFiles.push(uploadResponse.result);
      }

      this.props.dispatch(change(this.props.formName, field.name, allFiles));

    };

    const fileDelete = (index) => {
      _.set(allFiles, [index], _.merge(_.get(allFiles, [index]), {deleted: 1}));
      this.props.dispatch(change(this.props.formName, field.name, allFiles));
    };

    const showFiles = _.filter(props.value, (v) => { return !v.deleted; } );


    const renderTable = () => {
      if (showFiles.length === 0) {
        return [];
      }

      return (
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Bestand</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {_.map(showFiles, (file, key) => {
            return (
              <tr key={key}>
                <td>{file.file_original_name} {file.deleted}</td>
                <td><Button onClick={() => { fileDelete(key); }}><i className="fa fa-trash-o"></i></Button></td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      );

    };

    return (
      <div key={field.name} className="formgroup">

        <label className={field.labelClassName + ' control-label'}>{field.label}</label>
        <div className={field.wrapperClassName}>
          <Plupload
            key={field.name}
            id="plupload"
            runtimes="html5"
            multipart
            chunk_size="1mb"
            url={field.url}
            multi_selection={_.get(field, 'multi_selection', true)}
            flash_swf_url={_.get(field, 'flash_swf_url', '/plupload-2.1.8/js/Moxie.swf')}
            onFilesAdded={addedFiles}
            onStateChanged={stateChange}
            onFileUploaded={fileUploaded}
            autoUpload
            headers={field.headers || {}}
          />
          {renderTable()}
        </div>
      </div>
    );
  }

  staticField(field: Object, size: string) {
    const props = this.props.fields[field.name];
    const thisSize = _.get(field, 'bsSize', size);
    const extraProps = {};
    if (props.touched && props.error) {
      extraProps.bsStyle = 'error';
    }
    if (props.touched && props.error) {
      extraProps.help = props.error;
    }
    return (
      <FormControls.Static
        key={field.name}
        name="search"
        bsSize={thisSize}
        {...extraProps}
        {...field}
        {...props}
        buttonBefore={this.addField(_.get(field, 'buttonBefore', {}), thisSize)}
        buttonAfter={this.addField(_.get(field, 'buttonAfter', {}), thisSize)}
        />
    );
  }

  row(field, key, size) {

    return (
      <Row key={key}>
        {_.map(field, (row)=>{
          const thisSize = _.get(row, 'bsSize', size);
          return this.col(row.col, thisSize);
        })}
      </Row>
    );
  }

  col(cols, size) {

    return _.map(cols, (col, key)=>{
      const thisSize = _.get(col, 'bsSize', size);
      return (
        <Col key={key} {..._.omit(col, 'children')}>
          {_.map(col.children, (child)=>{
            return this.addField(child, thisSize);
          })}
        </Col>
      );
    });
  }

  submit(field: Object, size: string) {
    if (this.state.pending === true) {
      return (
        <Button
          key={field.name}
          bsSize={_.get(field, 'bsSize', size)}
          type="button"
          disabled
          bsStyle={_.get(field, 'style', 'primary')}
          >{field.value}</Button>
      );
    }

    return (<Button
      key={field.name}
      bsSize={_.get(field, 'bsSize', size)}
      type={field.type}
      bsStyle={_.get(field, 'style', 'primary')}
      >{field.value}</Button>);
  }

  button(field: Object, size: string) {
    return (
      <Button
      key={field.name}
      bsSize={_.get(field, 'bsSize', size)}
      type={field.type}
      bsStyle={_.get(field, 'style', 'primary')}
      onClick={_.get(field, 'onClick', ()=>{})}
      >{field.value}</Button>
    );
  }

  message(field: Object, size: string) {
    const {success, failed} = this.props.getActionState();
    if ((field.type === 'success' && success && this.props.valid === true) || (field.type === 'error' && (failed || (this.props.invalid === true && this.props.pristine === false)))) {
      const style = field.type === 'success' ? 'success' : 'danger';
      return (
        <Alert key={field.type} bsStyle={style} bsSize={_.get(field, 'bsSize', size)}>{field.message}</Alert>
      );
    }
  }

  addField(field, size) {
    if (!_.isEmpty(field)) {
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
  }

  render() {
    const {pending} = this.props.getActionState();
    const {fieldsNeeded} = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.props.submit)} ref="form" className={_.get(this.props, 'formClass', 'form-horizontal')}>
        <Pending state={pending || false}>
          <div formKey={this.props.formKey} >
            {_.map(fieldsNeeded, (field, key) => {
              const size = _.get(field, 'bsSize', 'medium');
              if (field.hasOwnProperty('name')) {
                return this.addField(field, size);
              } else if (field.hasOwnProperty('row')) {
                return this.row(field, key, size);
              }
            })}
          </div>
          <input type="button" ref="button" onClick={this.props.handleSubmit(this.props.submit)} className="hidden" />
        </Pending>
      </form>
    );
  }
}

export default BaseForm;
