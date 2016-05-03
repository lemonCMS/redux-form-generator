import React, {Component, PropTypes} from 'react';
import {Alert} from 'react-bootstrap';

export default class Failed extends Component {
  static propTypes = {
    state: PropTypes.bool.isRequired
  };

  render() {
    if (this.props.state === true) {
      return <Alert>De gegevens konden niet worden geladen...</Alert>;
    }

    return <span />;
  }
}
