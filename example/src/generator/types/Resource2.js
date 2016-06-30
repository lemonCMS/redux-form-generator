import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {change, changeWithKey} from 'redux-form';
import connectToWrap from './Wrap';

@connectToWrap()
class ResourceNode2 extends Component {

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
    this.openResource = this.openResource.bind(this);
    this.closeResource = this.closeResource.bind(this);
    this.state = {
      showResource: false
    };
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

  openResource() {
    this.setState({showResource: true});
  }

  closeResource() {
    this.setState({showResource: false});
  }

  render() {
    const {field} = this.props;
    const {properties} = this.props;
    const selectedValue = properties.value || properties.initialValue || [];

    const button = () => {
      if (!this.props.static) {
        return (<Button onClick={this.openResource}>{_.get(this.props, 'field.buttonResource', 'open')}</Button>);
      }
    };

    const props = {
      clonedValues: _.clone(selectedValue),
      clonedList: _.clone(this.state.list) || _.clone(field.list),
      callBack: this.callBack,
      show: this.state.showResource,
      closeResource: this.closeResource
    };

    return (
      <div>
        {button()}
        {this.options()}
        {this.props.field.resource(props)}
      </div>
    );
  }
}

export default ResourceNode2;
