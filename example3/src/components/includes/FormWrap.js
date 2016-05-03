import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Row, Col, Alert} from 'react-bootstrap';

export default ComposedComponent => class extends Component {
  constructor() {
    super();
    this.state = {
      'displayError': true,
      'displaySuccess': true
    };
    this.errorMessage = this.errorMessage.bind(this);
    this.successMessage = this.successMessage.bind(this);

  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (_.get(this.props, 'active', false) !== false) {
      this.setState({'displayError': false});
      this.setState({'displaySuccess': false});
    }

    if (_.get(this.props, 'failed') !== _.get(nextProps, 'failed')) {
      this.setState({'displayError': true});
    }

    if (_.get(this.props, 'success') !== _.get(nextProps, 'success')) {
      this.setState({'displaySuccess': true});
    }
  }

  errorMessage(active, msg) {
    if (_.get(this.props, 'failed', false) === true &&
        _.get(this.props, 'pending', false) === false &&
        active === false
        && this.state.displayError === true
    ) {
      return (
          <Row>
            <Col md={12}>
              <Alert bsStyle="danger">
                {msg}
              </Alert>
            </Col>
          </Row>
      );
    }
  }

  successMessage(active, msg) {
    if (_.get(this.props, 'success', false) === true &&
        _.get(this.props, 'pending', false) === false &&
        active === false
        && this.state.displaySuccess === true
    ) {
      return (
          <Row>
            <Col md={12}>
              <Alert bsStyle="success">
                {msg}
              </Alert>
            </Col>
          </Row>
      );
    }
  }

  render() {
    // console.log(this.props);

    return ( <ComposedComponent
        {...this.props}
        successMessage={this.successMessage}
        errorMessage={this.errorMessage}/> );
  }
};
