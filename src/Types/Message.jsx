import React, {Component} from 'react';
import Alert from 'react-bootstrap/lib/Alert';

export default class MessageType extends Component {

  static propTypes = {
    'field': React.PropTypes.object,
    'dirty': React.PropTypes.bool,
    'pristine': React.PropTypes.bool,
    'valid': React.PropTypes.bool,
    'invalid': React.PropTypes.bool,
    'submitFailed': React.PropTypes.bool,
    'submitSucceeded': React.PropTypes.bool,
    'static': React.PropTypes.bool,
    'locale': React.PropTypes.object
  }

  render() {
    const {field} = this.props;

    if (field.type === 'success') {
      if (this.props.valid === true && this.props.submitSucceeded === true) {
        return (<Alert bsStyle="success">{field.message}</Alert>);
      }
    }

    if (field.type === 'error') {
      if (this.props.invalid === true && this.props.submitFailed === true) {
        return (<Alert bsStyle="danger">{field.message}</Alert>);
      }
    }

    return <span />;
  }
}
