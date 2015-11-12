import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {change} from 'redux-form';

export default class CheckboxListType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'dispatch': PropTypes.func.isRequired,
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
      delete values[_.indexOf(values, value)]; // = _.remove(values, value);
    }

    const changeConst = change(this.props.formName, this.props.field.name, _.uniq(values));
    this.props.dispatch({
      ...changeConst,
      'key': this.props.formKey || undefined
    });
  }

  options() {
    const {field, properties} = this.props;
    const selectedValue = properties.value || properties.defaultValue;
    return _.map(_.get(field, 'options', []), (option, key) => {
      return (
        <div key={key} className="checkbox">
          <label>
            <input
              type="checkbox"
              value={option.value}
              checked={_.indexOf(selectedValue, option.value)>-1}
              onChange={(e) => { this.onChange(e, option.value); }}
              onClick={(e) => { this.onChange(e, option.value); }}
              />
            {' '}
            {option.desc}
          </label>
        </div>
      );
    });
  }

  render() {
    const thisSize = _.get(this.props.field, 'bsSize', this.props.size);
    const {field} = this.props;


    const getClass = (classNames = '') => {

      if(thisSize === 'large') {
        classNames = classNames + ' form-group-lg';
      }

      if(thisSize === 'small') {
        classNames = classNames + ' form-group-sm';
      }

      if (this.props.properties.touched && this.props.properties.error) {
        return classNames + ' has-error';
      }
      return classNames;
    }

    const help = () => {
      if (_.has(this.props.properties, 'error')) {
        return (<span id="helpBlock2" className="help-block">{this.props.properties.error}</span>);
      }
    }

    const label = () => {
      if (!!field.label) {
        return (<label className={'control-label ' + _.get(field, 'labelClassName')}>{field.label}</label>);
      }
    };

    return (
      <div key={field.name} className={getClass('form-group')}>
        {label()}
        <div className={field.wrapperClassName}>
          {this.options()}
          {help()}
        </div>
      </div>
    );
  }
}

