import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from './utils/functions';
import {Row, Col} from 'react-bootstrap';
import Pending from './Pending';
import {
  GenRte, GenInput, GenPlupload, GenMessage, GenDropDown,
  GenButton, GenSubmit, GenStatic, GenFile, GenRadio,
  GenCheckboxList, GenCheckboxListiOs, GenResource, GenDateTime
  } from './types';

@connect(()=>({}), mapDispatchToProps)
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
    valid: PropTypes.bool.isRequired,
    static: PropTypes.bool
  };

  constructor() {
    super();
    this.addField = this.addField.bind(this);
    this.row = this.row.bind(this);
    this.col = this.col.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {displayErrors: false};
  }

  componentWillMount() {
    const {success} = this.props.getActionState();
    if (success) {
      this.submit();
    }
  }

  componentWillReceiveProps(nextProps) {
    const {success} = nextProps.getActionState();
    if (_.isEmpty(nextProps.active) && success) {
      this.props.clearActionState();
    }
  }

  submitForm() {
    this.refs.button.click();
  }

  row(field, key, size) {
    // Hide fields that are only visible in static mode
    if (!this.props.static && !!field.row.showOnStatic) {
      return false;
    }
    // Hide fields that are only visible in edit mode
    if (!!this.props.static && !!field.row.hideOnStatic) {
      return false;
    }

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

      // Hide fields that are only visible in static mode
      if (!this.props.static && !!col.showOnStatic) {
        return false;
      }
      // Hide fields that are only visible in edit mode
      if (!!this.props.static && !!col.hideOnStatic) {
        return false;
      }

      return (
        <Col key={key} {..._.omit(col, 'children')}>
          {_.map(_.omit(col.children, ['hideOnStatic']), (child)=>{
            return this.addField(child, thisSize);
          })}
        </Col>
      );
    });
  }

  addField(field, size) {
    // Hide fields that are only visible in static mode
    if (!this.props.static && !!field.showOnStatic) {
      return false;
    }
    // Hide fields that are only visible in edit mode
    if (!!this.props.static && !!field.hideOnStatic) {
      return false;
    }

    if (!_.isEmpty(field)) {
      const properties = this.props.fields[field.name];

      switch (field.type) {
        case 'submit':
          return <GenSubmit static={this.props.static} key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'button':
          return <GenButton static={this.props.static} key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'dropdown':
          return <GenDropDown static={this.props.static} submit={this.submitForm} formName={this.props.formName} formKey={this.props.formKey} dispatch={this.props.dispatch} key={field.name} field={field} size={size} properties={properties} />; // inputType.input(field, size);
        case 'success':
        case 'error':
          return <GenMessage static={this.props.static} key={field.type} displayErrors={this.state.displayErrors} field={field} size={size} properties={properties} valid={this.props.valid} invalid={this.props.invalid} pristine={this.props.pristine} getActionState={this.props.getActionState}/>; // return this.message(field, size);
        case 'file':
          return <GenFile static={this.props.static} key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'static':
          return <GenStatic static={this.props.static} key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'plupload':
          return <GenPlupload static={this.props.static} key={field.name} field={field} dispatch={this.props.dispatch} formName={this.props.formName} properties={properties} addField={this.addField}/>; // return this.plupload(field);
        case 'radio':
          return <GenRadio static={this.props.static} key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'checkboxList':
          return <GenCheckboxList static={this.props.static} formName={this.props.formName} formKey={this.props.formKey} dispatch={this.props.dispatch} key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'checkboxListiOs':
          return <GenCheckboxListiOs static={this.props.static} formName={this.props.formName} formKey={this.props.formKey} dispatch={this.props.dispatch} key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'resource':
          return <GenResource static={this.props.static} formName={this.props.formName} formKey={this.props.formKey} dispatch={this.props.dispatch} key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'rte':
          return <GenRte static={this.props.static} dispatch={this.props.dispatch} key={field.name} field={field} size={size} properties={properties} addField={this.addField} formName={this.props.formName} formKey={this.props.formKey}/>;
        case'dateTime':
          return <GenDateTime static={this.props.static} key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        default:
          return <GenInput static={this.props.static} key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
      }
    }
  }

  submit() {
    this.setState({'displayErrors': true});
  }

  render() {
    const {pending} = this.props.getActionState();
    const {fieldsNeeded} = this.props;
    const handleSubmit = this.props.handleSubmit(this.props.submit);

    return (
      <form onSubmit={(e) => { this.submit(); handleSubmit(e); }} ref="form" className={_.get(this.props, 'formClass', 'form-horizontal')}>
        <input type="button" ref="button" onClick={(e) => { this.submit(); handleSubmit(e); }} className="hidden" />
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
        </Pending>
      </form>
    );
  }
}

export default BaseForm;
