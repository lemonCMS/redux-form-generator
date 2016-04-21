import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

export default class ButtonType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  };

  render() {
    const thisSize = _.get(this.props.field, 'bsSize', this.props.size);
    return (
      <Button
        bsSize={_.get(this.props.field, 'bsSize', thisSize)}
        type={this.props.field.type}
        bsStyle={_.get(this.props, 'field.style', 'primary')}
        >{this.props.field.value}</Button>
    );
  }
}
