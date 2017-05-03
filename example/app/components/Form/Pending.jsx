import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Pending extends Component {

  constructor() {
    super();
    this.pending = this.pending.bind(this);
    this.css = {
      pendingWrapper: {
        position: 'relative'
      },
      pendingOverlayBackground: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        backgroundColor: '#fff',
        opacity: '0.2',
        zIndex: '999'
      },
      pendingOverlayContent: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        color: '#333',
        zIndex: '1000',
      },
      pendingOverlayContentCentered: {
        textAlign: 'center'
      }
    };
  }

  pending() {
    if (this.props.pending === true) {
      return ([
        <div key="1" style={this.css.pendingOverlayBackground} />,
        (<div key="2" style={this.css.pendingOverlayContent}>
          <div style={this.css.pendingOverlayContentCentered}>
            <i className="fa fa-spinner fa-pulse" />
          </div>
        </div>)
      ]);
    }
  }

  render() {
    return (
      <div style={this.css.pendingWrapper}>
        {this.pending()}
        {this.props.children}
      </div>
    );
  }
}

Pending.propTypes = {
  pending: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ])
};

export default Pending;
