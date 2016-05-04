import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import connectToWrap from './Wrap';
import {FormControl} from 'react-bootstrap';

@connectToWrap()
class SelectType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  };

  constructor() {
    super();
    this.options = this.options.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  options() {
    if (this.props.field.type === 'select') {
      return _.map(_.get(this.props.field, 'options', []), (option, key) => {
        return <option key={key} value={option.value}>{option.desc}</option>;
      });
    }
  }

  getValue() {
    const options = _.get(this.props.field, 'options', []);
    const value = this.props.properties.initialValue || this.props.properties.value;
    return _.get(options, [_.findIndex(options, ['value', value]), 'desc'], '');
  }

  render() {
    if (this.props.static === true) {
      return (
        <FormControl.Static type="text" placeholder={_.get(this.props.field, 'placeholder', '')}
        >
          {this.getValue()}
        </FormControl.Static>
      );
    }

    return (
      <FormControl componentClass="select" placeholder={_.get(this.props.field, 'placeholder', '')}
          {...this.props.properties}
      >
        {this.options()}
      </FormControl>
    );
  }
}

export default SelectType;
