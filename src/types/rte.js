import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {change} from 'redux-form';
import TinyMCE from 'react-tinymce';

export default class InputType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'dispatch': PropTypes.func.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool,
    'formName': PropTypes.string,
    'formKey': PropTypes.string
  }

  constructor() {
    super();
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(e) {
    const changeConst = change(this.props.formName, this.props.field.name, e.target.getContent());
    this.props.dispatch({
      ...changeConst,
      'key': this.props.formKey || undefined
    });
  }

  render() {
    const thisSize = _.get(this.props.field, 'bsSize', this.props.size);
    const {field} = this.props;

    const getClass = (classNames = '') => {
      let ret = classNames;
      if (thisSize === 'large') {
        ret = ret + ' form-group-lg';
      }

      if (thisSize === 'small') {
        ret = ret + ' form-group-sm';
      }

      if (this.props.properties.touched && this.props.properties.error) {
        return ret + ' has-error';
      }
      return ret;
    };

    const help = () => {
      if (this.props.properties.touched && _.has(this.props.properties, 'error')) {
        return (<span className="help-block">{this.props.properties.error}</span>);
      }
    };

    const label = () => {
      if (!!field.label) {
        return (<label className={'control-label ' + _.get(field, 'labelClassName')}>{field.label}</label>);
      }
    };

    const createMarkup = (data) => { return {__html: data}; };

    if (this.props.static) {
      return (
        <div key={field.name} className={getClass('form-group')}>
          {label()}
          <div className={field.wrapperClassName}>
            <div dangerouslySetInnerHTML={createMarkup(this.props.properties.defaultValue || this.props.properties.value)}></div>
          </div>
        </div>
      );
    }

    return (
      <div key={field.name} className={getClass('form-group')}>
        {label()}
        <div className={field.wrapperClassName}>
          <TinyMCE
            content={this.props.properties.defaultValue || this.props.properties.value}
            {...this.props.field}
            onChange={this.handleEditorChange}
            />
          {help()}
        </div>
      </div>
    );
  }
}
