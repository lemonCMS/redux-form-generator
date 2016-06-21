import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from './utils/functions';
import {Form, Row, Col} from 'react-bootstrap';
import Pending from './Pending';
import {
  TextNode, SelectNode, RadioNode, TextareaNode, CheckboxNode, DropDownNode,
  RteNode, ResourceNode, PluploadNode, DateTimeNode, PasswordNode, MessageNode,
  FileNode, SubmitNode, ButtonNode, PlainNode, CheckboxListiOsNode, StaticNode
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
        {_.map(field, (row, keyRow)=> {
          const thisSize = _.get(row, 'bsSize', size);
          return (
            <div key={keyRow}>
              {this.col(row.col, thisSize)}
            </div>
          );
        })}
      </Row>
    );
  }

  col(cols, size) {
    return _.map(cols, (col, key)=> {
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
          {_.map(_.omit(col.children, ['hideOnStatic']), (child, keyCol)=> {
            return (
              <div key={keyCol}>
                {this.addField(child, thisSize)}
              </div>
            );
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

    const createMarkup = (data) => { return {__html: data}; };

    if (!_.isEmpty(field)) {
      const properties = this.props.fields[field.name];

      switch (field.type) {
        case 'submit':
          return (<SubmitNode static={this.props.static} key={field.name} field={field} size={size}
                            properties={properties} addField={this.addField}/>);
        case 'button':
          return (<ButtonNode static={this.props.static} key={field.name} field={field} size={size}
                            properties={properties} addField={this.addField}/>);
        case 'html':
          return (<div dangerouslySetInnerHTML={createMarkup(field.message)} />);

        case 'success':
        case 'error':
          return (<MessageNode static={this.props.static} key={field.type} displayErrors={this.state.displayErrors}
                             field={field} size={size} properties={properties} valid={this.props.valid}
                             invalid={this.props.invalid} pristine={this.props.pristine}
                             getActionState={this.props.getActionState}/>); // return this.message(field, size);
        case 'static':
          return (<StaticNode static={this.props.static} key={field.name} field={field} size={size}
                            properties={properties} addField={this.addField}/>);
        case 'checkboxListiOs':
          return (<CheckboxListiOsNode static={this.props.static} formName={this.props.formName}
                                     formKey={this.props.formKey} dispatch={this.props.dispatch} key={field.name}
                                     field={field} size={size} properties={properties} addField={this.addField}/>);
        case 'jsx':
        case 'react':
          return field.component();
        case 'radio':
          return (<RadioNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                              addField={this.addField}/>);
        case 'checkbox':
          return (<CheckboxNode static={this.props.static} formName={this.props.formName}
                                formKey={this.props.formKey} dispatch={this.props.dispatch} key={field.name}
                                field={field} size={size} properties={properties} addField={this.addField}/>);
        case 'select':
          return (<SelectNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                            addField={this.addField}/>);
        case 'text':
          return (<TextNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                            addField={this.addField}/>);
        case 'password':
          return (<PasswordNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                            addField={this.addField}/>);
        case 'file':
          return (<FileNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                            addField={this.addField}/>);
        case 'plain':
          return (<PlainNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                            addField={this.addField}/>);
        case 'dateTime':
          return (<DateTimeNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                            addField={this.addField}/>);
        case 'textarea':
          return (<TextareaNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                            addField={this.addField}/>);
        case 'dropDown':
          return (<DropDownNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                                addField={this.addField} submit={this.submitForm} formName={this.props.formName} formKey={this.props.formKey} dispatch={this.props.dispatch}/>);
        case 'rte':
          return (<RteNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                                addField={this.addField} submit={this.submitForm} formName={this.props.formName} formKey={this.props.formKey} dispatch={this.props.dispatch}/>);
        case 'resource':
          return (<ResourceNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                           addField={this.addField} submit={this.submitForm} formName={this.props.formName} formKey={this.props.formKey} dispatch={this.props.dispatch}/>);
        case 'plupload':
          return (<PluploadNode static={this.props.static} key={field.name} field={field} size={size} properties={properties}
                                addField={this.addField} submit={this.submitForm} formName={this.props.formName} formKey={this.props.formKey} dispatch={this.props.dispatch}/>);
        default:
          console.warn('No render available for:', field);
          return (<div>Failure</div>);
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
      <Form onSubmit={(e) => { this.submit(); handleSubmit(e); }} ref="form"
            horizontal={_.get(this.props, 'formClass', 'form-horizontal') === 'form-horizontal'}>
        <input type="button" ref="button" onClick={(e) => { this.submit(); handleSubmit(e); }} className="hidden"/>
        <Pending state={pending || false}>
          <div formKey={this.props.formKey}>
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
      </Form>
    );
  }
}

export default BaseForm;
