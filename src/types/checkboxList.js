import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {change} from 'redux-form';

export default class CheckboxListType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'dispatch': PropTypes.func.isRequired,
    'fields': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'formName': PropTypes.string.isRequired,
    'formKey': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  }

  constructor() {
    super();
    this.options = this.options.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onChange(e, value) {
    const {properties} = this.props;
    let values = _.get(properties, 'value') || _.get(properties, 'initialValue', []);

    if (typeof values !== 'object') {
      values = [values];
    }
    if (e.target.checked === true) {
      values.push(value);
    } else {
      values = _.remove(values, value);
    }

    const changeConst = change(this.props.formName, this.props.field.name, _.uniq(values));
    this.props.dispatch({
      ...changeConst,
      'key': this.props.formKey || undefined
    });
  }


  options() {
    const {field} = this.props;
    // const selectedValue = String(properties.value || properties.defaultValue);
    return _.map(_.get(field, 'options', []), (option, key) => {
      return (
        <div key={key}>
          <label>
            <input
              type="checkbox"
              value={option.value}
              onChange={(e) => { this.onChange(e, option.value); }}
              />
            {' '}
            {option.desc}
          </label>
        </div>
      );
    });
  }

  render() {
    // const thisSize = _.get(this.props.field, 'bsSize', this.props.size);
    // const extraProps = {};
    const {field} = this.props;

    console.log(this.props);

/*
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.bsStyle = 'error';
    }
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.help = this.props.properties.error;
    }*/

    const label = () => {
      if (!!field.label) {
        return (<label className={field.labelClassName + ' control-label'}>{field.label}</label>);
      }
    };

    return (
      <div key={field.name} className="form-group">
        {label()}
        <div className={field.wrapperClassName}>
          {this.options()}
        </div>
      </div>
    );
  }
}

