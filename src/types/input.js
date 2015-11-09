import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Input} from 'react-bootstrap';

export default class InputType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired

  }

  render() {
    const thisSize = _.get(this.props.field, 'bsSize', this.props.size);
    const extraProps = {};
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.bsStyle = 'error';
    }
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.help = this.props.properties.error;
    }

    return (
      <Input
        key={this.props.field.name}
        name="search"
        bsSize={thisSize}
        {...extraProps}
        {...this.props.field}
        {...this.props.properties}
        buttonBefore={this.props.addField(_.get(this.props.field, 'buttonBefore', {}), thisSize)}
        buttonAfter={this.props.addField(_.get(this.props.field, 'buttonAfter', {}), thisSize)}
        />
    );
  }
}