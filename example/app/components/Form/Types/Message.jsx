import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Alert from 'react-bootstrap/lib/Alert';

export default class MessageType extends Component {

  static propTypes = {
    'checkDisabled': PropTypes.func,
    'checkHidden': PropTypes.func,
    'field': PropTypes.object,
    'dirty': PropTypes.bool,
    'pristine': PropTypes.bool,
    'valid': PropTypes.bool,
    'invalid': PropTypes.bool,
    'submitFailed': PropTypes.bool,
    'submitSucceeded': PropTypes.bool,
    'submitting': PropTypes.bool,
    'static': PropTypes.bool,
    'locale': PropTypes.object
  }

  render() {
    const {field} = this.props;

    if (this.props.field && this.props.field.hidden && _isFunction(this.props.field.hidden)) {
      if (this.props.checkHidden(this.props.field.hidden()) === true) {
        return;
      }
    }

    if (field.type === 'success' && !this.props.submitting) {
      if (this.props.valid === true && this.props.submitSucceeded === true) {
        return (<Alert bsStyle="success">{field.message}</Alert>);
      }
    }

    if (field.type === 'error' && !this.props.submitting) {
      if (this.props.invalid === true && this.props.submitFailed === true) {
        return (<Alert bsStyle="danger">{field.message}</Alert>);
      }
    }

    return <span />;
  }
}
