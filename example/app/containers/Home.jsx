import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Link from 'react-router/lib/Link';

class Home extends React.Component {

  render() {

    const intro = () => {
      return (
        <div>
          <h1>Redux-form-generator</h1>
          <p>
            This project started with redux 3. I was building a site with a admin section wich contains a lot of forms.
            I needed something to quickly create forms whithout concerning about layout, and handling of errors and such.
          </p>
          <p>
            With redux-form 6, things simplified a lot, and for a moment i thought i would not need this package anymore.
            But i still see the need og this package when working with a lot of forms.
          </p>
          <p>
            Also the package comes with some out of the box handyness.
          </p>
          <ul>
            <li>The basics are simple.</li>
            <li>Tinymce integration</li>
            <li>Plupload integration</li>
            <li>DateTime selector integration</li>
            <li>Modal resource</li>
            <li>Show, hide, disable fields depending on values of other fields</li>
          </ul>
        </div>);
    };

    return (
      <Row>
        <Col md={4}>
          <Link to="/" className="btn btn-link btn-block">Home</Link>
          <h4 className="text-center">Example forms</h4>
          <Link to="/login" className="btn btn-link btn-block">Login</Link>
          <Link to="/register" className="btn btn-link btn-block">Register</Link>
          <Link to="/resource" className="btn btn-link btn-block">Resource</Link>
        </Col>
        <Col md={8}>
          {this.props.children && this.props.children}
          {!this.props.children && intro()}
        </Col>
      </Row>
    );
  }
}

Home.propTypes = {
  children: PropTypes.object
};
Home.defaultProps = {};

export default Home;
