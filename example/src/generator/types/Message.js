import _get from 'lodash/get';
import React, {Component, PropTypes} from 'react';
import {Alert} from 'react-bootstrap';

export default class MessageType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'getActionState': PropTypes.func.isRequired,
    'valid': PropTypes.bool.isRequired,
    'invalid': PropTypes.bool.isRequired,
    'pristine': PropTypes.bool.isRequired,
    'displayErrors': PropTypes.bool.isRequired
  };

  render() {
    const {success, failed} = this.props.getActionState();
    const {field, size, valid, invalid} = this.props;
    console.log(this.props, this.props.getActionState());

    if (this.props.displayErrors === true &&
      ((field.type === 'success' && success && valid === true) || (field.type === 'error' && (failed || (invalid === true))))) {
      const style = field.type === 'success' ? 'success' : 'danger';
      return (
        <Alert bsStyle={style} bsSize={_get(field, 'bsSize', size)}>{field.message}</Alert>
      );
    }

    return <span />;
  }
}
