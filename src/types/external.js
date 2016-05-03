import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {change, changeWithKey} from 'redux-form';

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
  };

  constructor() {
    super();
    this.options = this.options.bind(this);
    this.onChange = this.onChange.bind(this);
    this.options = this.options.bind(this);
    this.optionsWrite = this.optionsWrite.bind(this);
    this.optionsStatic = this.optionsStatic.bind(this);
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
      values.splice(_.indexOf(values, value), 1);
    }

    if (_.has(this.props, 'formKey')) {
      this.props.dispatch(changeWithKey(this.props.formName, this.props.formKey, this.props.field.name, _.uniq(values)));
    } else {
      this.props.dispatch(change(this.props.formName, this.props.field.name, _.uniq(values)));
    }
  }

  options() {
    const {properties} = this.props;
    const selectedValue = properties.value || properties.initialValue;

    if (this.props.static === true) {
      return this.optionsStatic(selectedValue);
    }
    return this.optionsWrite(selectedValue);
  }

  optionsWrite(selectedValue) {
    const {field} = this.props;
    return _.map(_.get(field, 'options', []), (option, key) => {
      return (
        <div className="checkbox" key={key}>
          <label>
            <input
              type="checkbox"
              value={option.value}
              checked={_.indexOf(selectedValue, option.value) > -1}
              onChange={(e) => { this.onChange(e, option.value); }}

              />
            {' '}
            {option.desc}
          </label>
        </div>
      );
    });
  }

  optionsStatic(selectedValue) {
    const {field} = this.props;
    const options = _.map(_.get(field, 'options', []), (option, key) => {
      return (
        <p className="form-control-static" key={key}>
          {_.indexOf(selectedValue, option.value) > -1 ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
          {' '}
          {option.desc}
        </p>
      );
    });

    return (
      <div className="checkbox">
        {options}
      </div>
    );
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
      if (_.has(this.props.properties, 'error')) {
        return (<span className="help-block">{this.props.properties.error}</span>);
      }
    };

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

