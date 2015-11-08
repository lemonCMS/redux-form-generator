import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from './utils/functions';
import {Row, Col} from 'react-bootstrap';
import Pending from './Pending';
import {GenInput, GenPlupload, GenMessage, GenDropDown, GenButton, GenSubmit, GenStatic, GenFile} from './types';

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
    valid: PropTypes.bool.isRequired
  };

  constructor() {
    super();
    this.addField = this.addField.bind(this);
    this.row = this.row.bind(this);
    this.col = this.col.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {success} = nextProps.getActionState();
    if (_.isEmpty(nextProps.active) && success) {
      this.props.clearActionState();
    }
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

  addField(field, size) {
    if (!_.isEmpty(field)) {
      const properties = this.props.fields[field.name];

      switch (field.type) {
        case 'submit':
          return <GenSubmit key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'button':
          return <GenButton key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'dropdown':
          return <GenDropDown formName={this.props.formName} formKey={this.props.formKey} dispatch={this.props.dispatch} key={field.name} field={field} size={size} properties={properties} />; // inputType.input(field, size);
        case 'success':
        case 'error':
          return <GenMessage key={field.type} field={field} size={size} properties={properties} valid={this.props.valid} invalid={this.props.invalid} pristine={this.props.pristine} getActionState={this.props.getActionState}/>; // return this.message(field, size);
        case 'file':
          return <GenFile key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'static':
          return <GenStatic key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
        case 'plupload':
          return <GenPlupload key={field.name} field={field} dispatch={this.props.dispatch} formName={this.props.formName} properties={properties} addField={this.addField}/>; // return this.plupload(field);
        default:
          return <GenInput key={field.name} field={field} size={size} properties={properties} addField={this.addField}/>;
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
