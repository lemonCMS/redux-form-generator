import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

export default class ButtonType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'pending': PropTypes.bool,
    'static': PropTypes.bool,
    'properties': PropTypes.object
  };

  render() {

    const thisSize = () => {
      const size = _.get(this.props.field, 'bsSize', this.props.size);
      if (size !== 'medium') {
        return ({bsSize: size});
      }
    };

    return (
      <Button
        {...thisSize()}
        type={this.props.field.type}
        bsStyle={_.get(this.props, 'field.style', 'primary')}
        {...this.props.properties}
        >{this.props.field.value}</Button>
    );
  }
}
