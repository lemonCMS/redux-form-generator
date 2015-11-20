import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {change} from 'redux-form';

export default class Resource extends Component {

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
    this.options = this.options.bind(this);
    this.optionsStatic = this.optionsStatic.bind(this);
    this.callBack = this.callBack.bind(this);
    this.state = {};
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

    const changeConst = change(this.props.formName, this.props.field.name, _.uniq(values));
    this.props.dispatch({
      ...changeConst,
      'key': this.props.formKey || undefined
    });
  }

  options() {
    const {properties} = this.props;
    const selectedValue = properties.value || properties.defaultValue;
    return this.optionsStatic(selectedValue);
  }

  optionsStatic(selectedValue) {
    const {field} = this.props;
    const options = _.map(this.state.list || _.get(field, 'list', []), (option, key) => {
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

  callBack(values, list) {
    this.setState({
      list: list
    }, () => {
      const changeConst = change(this.props.formName, this.props.field.name, _.uniq(values));
      this.props.dispatch({
        ...changeConst,
        'key': this.props.formKey || undefined
      });
    });
  }

  render() {
    const thisSize = _.get(this.props.field, 'bsSize', this.props.size);
    const {field} = this.props;
    const {properties} = this.props;
    const selectedValue = properties.value || properties.defaultValue || [];

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
      if (this.props.properties.touched && this.props.properties.error) {
        return (<span className="help-block">{this.props.properties.error}</span>);
      }
    };

    const label = () => {
      if (!!field.label) {
        return (<label className={'control-label ' + _.get(field, 'labelClassName')}>{field.label}</label>);
      }
    };

    const callResource = () => {
      if (typeof field.callResource === 'function') {
        const clonedValues = _.clone(selectedValue);
        const clonedList = _.clone(this.state.list) || _.clone(field.list);
        field.callResource(clonedValues, clonedList, this.callBack);
      } else {
        console.error('callResource is not a function');
      }
    };

    const button = () => {
      if (!this.props.static) {
        return (<Button onClick={callResource}>{_.get(this.props, 'field.buttonResource', 'open')}</Button>);
      }
    };

    return (
      <div key={field.name} className={getClass('form-group')}>
        {label()}
        <div className={field.wrapperClassName}>
          {button()}
          {this.options()}
          {help()}
        </div>
      </div>
    );
  }
}

