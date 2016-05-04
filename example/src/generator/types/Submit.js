import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

export default class SubmitType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'pending': PropTypes.bool,
    'static': PropTypes.bool

  }

  render() {
    const thisSize = () => {
      const size = _.get(this.props.field, 'bsSize', this.props.size);
      if (size !== 'medium') {
        return ({bsSize: size});
      }
    };

    if (this.props.pending === true) {
      return (
        <Button
          key={this.props.field.name}
          {...thisSize()}
          type="button"
          disabled
          bsStyle={_.get(this.props.field, 'style', 'primary')}
          >{this.props.field.value}</Button>
      );
    }

    return (<Button
      {...thisSize()}
      type={this.props.field.type}
      bsStyle={_.get(this.props.field, 'style', 'primary')}
      >{this.props.field.value}</Button>);
  }
}
