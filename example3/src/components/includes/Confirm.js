import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Modal, Button, Alert} from 'react-bootstrap';

export default class Confirm extends Component {
  static propTypes = {
    showModal: PropTypes.bool,
    close: PropTypes.func.isRequired,
    confirmed: PropTypes.func.isRequired,
    item: PropTypes.object,
    status: PropTypes.object
  };

  constructor() {
    super();
    this.body = this.body.bind(this);
    this.footer = this.footer.bind(this);
  }

  body() {
    if (_.get(this.props, 'status.failed') === true) {
      return (
          <Modal.Body>
            <Alert bsStyle="danger">Er is een fout opgetreden, de actie is is waarschijnlijk niet uitgevoerd.</Alert>
          </Modal.Body>
      );
    }
    if (_.get(this.props, 'status.success') === true) {
      return (
          <Modal.Body>
            <Alert bsStyle="success">De actie is verwerkt, u kunt deze modal nu sluiten.</Alert>
          </Modal.Body>
      );
    }

    return (
        <Modal.Body>
          {_.get(this.props, 'children', 'Bevestig uw actie.')}
        </Modal.Body>
    );
  }

  footer() {
    if (_.get(this.props, 'status.success') === true || _.get(this.props, 'status.failed')) {
      return (
          <Modal.Footer>
            <Button onClick={this.props.close}>sluiten</Button>
          </Modal.Footer>
      );
    }

    const confirmed = () => {
      this.props.confirmed(_.get(this.props, 'item', {}));
    };

    return (
        <Modal.Footer>
          <Button onClick={this.props.close}>sluiten</Button>
          <Button onClick={confirmed} bsStyle="primary">verwijderen</Button>
        </Modal.Footer>
    );
  }

  render() {
    return (
        <Modal show={this.props.showModal} onHide={()=>{this.props.close();}}>
          <Modal.Header>
            <Modal.Title>Verwijderen</Modal.Title>
          </Modal.Header>
          {this.body()}
          {this.footer()}
        </Modal>
    );
  }
}
