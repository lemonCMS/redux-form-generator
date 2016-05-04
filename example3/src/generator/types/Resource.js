import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {change, changeWithKey} from 'redux-form';
import connectToWrap from './Wrap';

@connectToWrap()
class ResourceNode extends Component {

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

    if (_.has(this.props, 'formKey')) {
      this.props.dispatch(changeWithKey(this.props.formName, this.props.formKey, this.props.field.name, _.uniq(values)));
    } else {
      this.props.dispatch(change(this.props.formName, this.props.field.name, _.uniq(values)));
    }
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
      if (_.has(this.props, 'formKey')) {
        this.props.dispatch(changeWithKey(this.props.formName, this.props.formKey, this.props.field.name, _.uniq(values)));
      } else {
        this.props.dispatch(change(this.props.formName, this.props.field.name, _.uniq(values)));
      }
    });
  }

  render() {
    const {field} = this.props;
    const {properties} = this.props;
    const selectedValue = properties.value || properties.initialValue || [];

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
      <div>
        {button()}
        {this.options()}
      </div>
    );
  }
}

export default ResourceNode;
