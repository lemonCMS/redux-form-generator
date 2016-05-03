import React, {Component, PropTypes} from 'react';

export default class Pending extends Component {
  static propTypes = {
    state: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    children: React.PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.array.isRequired
    ])
  };

  constructor() {
    super();
    this.pending = this.pending.bind(this);
  }

  pending() {
    if (this.props.state === true) {
      return ([
        <div key="1" className="pendingOverlayBackground"></div>,
        (<div key="2" className="pendingOverlayContent">
          <div className="block">
            <div className="centered">
              <i className="fa fa-spinner fa-pulse fa-3x"></i>
            </div>
          </div>
        </div>)
      ]);
    }
  }

  render() {
    if (this.props.failed === true) {
      return (
          <div className="error-page text-center">
            <div className="container">
              <h2 className="error-title">404</h2>
              <h3 className="error-subtitle">Some bits denied your request.</h3>
              <p className="error-text center-block">De pagina die u probeerde te bezoeken bestaat niet.</p>
            </div>
          </div>
      );
    }

    return (
        <div className="pendingWrapper">
          {this.pending()}
          {this.props.children}
        </div>
    );
  }
}
