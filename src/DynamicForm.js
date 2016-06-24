import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import BaseForm from './BaseForm';
import {filterFields} from './utils/functions';

RegExp.quote = (str) => {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
};

class DynamicForm extends Component {

  static propTypes = {
    checkKey: PropTypes.string.isRequired,
    formName: PropTypes.string.isRequired,
    formKey: PropTypes.string,
    fieldsNeeded: PropTypes.array.isRequired,
    formClass: PropTypes.string,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
    getActionState: PropTypes.func,
    clearActionState: PropTypes.func,
    validate: PropTypes.func,
    success: PropTypes.bool,
    static: PropTypes.bool
  };

  shouldComponentUpdate(nextProps:Object) {
    // Important when using @connect, without this the form goes into a infinite loop.
    let updateComponent = true;
    if (this.props.checkKey === nextProps.checkKey) {
      updateComponent = false;
    }
    return updateComponent;
  }

  render() {
    const {formName, fieldsNeeded} = this.props;
    const DynamicInnerForm = reduxForm({
      form: formName,
      fields: filterFields(fieldsNeeded),
      validate: (values)=> {
        if (_.has(this.props, 'validate')) {
          return this.props.validate(values);
        }
        return {};
      }
    })(BaseForm);

    return (<DynamicInnerForm
      formClass={this.props.formClass}
      static={this.props.static}
      formName={this.props.formName}
      formKey={this.props.formKey || null}
      initialValues={this.props.initialValues}
      fieldsNeeded={this.props.fieldsNeeded}
      submit={(data, dispatch) => {
        if (this.props.hasOwnProperty('onSubmit')) {
          return this.props.onSubmit(data, dispatch);
        }
      }}

      getActionState={()=> {
        if (this.props.hasOwnProperty('getActionState')) {
          return this.props.getActionState();
        }
        return ()=>{
          return {
            success: false,
            failed: false,
            pending: false
          };
        };
      }}
      clearActionState={()=>{
        if (this.props.hasOwnProperty('clearActionState')) {
          return this.props.clearActionState();
        }
        return ()=>{};
      }}
      />);
  }
}

export default DynamicForm;
