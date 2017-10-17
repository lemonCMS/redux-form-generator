import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import _isFunction from 'lodash/isFunction';

export default class MessageType extends Component {

  static propTypes = {
    'checkHidden': PropTypes.func,
    'checkShow': PropTypes.func,
    'field': PropTypes.object,
    'valid': PropTypes.bool,
    'invalid': PropTypes.bool,
    'submitFailed': PropTypes.bool,
    'submitSucceeded': PropTypes.bool,
    'submitting': PropTypes.bool
  };

  render() {
    const {field} = this.props;

    if (this.props.field && this.props.field.hidden && _isFunction(this.props.field.hidden)) {
      if (this.props.checkHidden(this.props.field.hidden()) === true) {
        return;
      }
    } else if (this.props.field && this.props.field.show && _isFunction(this.props.field.show)) {
      if (this.props.checkShow(this.props.field.show()) !== true) {
        return null;
      }
    }

    if (field.type === 'success' && !this.props.submitting) {
      if (this.props.valid === true && this.props.submitSucceeded === true && this.props.submitting === false) {
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
