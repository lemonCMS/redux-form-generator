import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import connectToWrap from './Wrap';
import {FormGroup, FormControl, Radio} from 'react-bootstrap';

@connectToWrap()
class RadioType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  };

  constructor() {
    super();
    this.radioButtons = this.radioButtons.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  radioButtons() {
    const selectedValue = String(_.get(this.props.properties, 'value') || _.get(this.props.properties, 'initialValue'));


    return _.map(_.get(this.props.field, 'options', []), (option, key) => {
      return (
        <Radio
            key={key}
            name={this.props.field.name}
            value={option.value}
            onChange={this.props.properties.onChange}
            onFocus={this.props.properties.onFocus}
            onUpdate={this.props.properties.onUpdate}
            checked={selectedValue === option.value}
        >
          {option.desc}
        </Radio>
      );
    });
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
      <FormGroup>
        {this.radioButtons()}
      </FormGroup>
    );
  }
}

export default RadioType;
