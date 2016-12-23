import React, {Component, PropTypes} from 'react';

class Pending extends Component {

  constructor() {
    super();
    this.pending = this.pending.bind(this);
  }

  pending() {
    if (Object.prototype.hasOwnProperty.call(this.props, 'state') && this.props.state === true) {
      return ([
        <div key="1" className="pendingOverlayBackground" />,
        (<div key="2" className="pendingOverlayContent">
          <div className="pendingOverLayTable">
            <i className="fa fa-spinner fa-pulse" />
          </div>
        </div>)
      ]);
    }
  }

  render() {
    return (
      <div className="pendingWrapper">
        {this.pending()}
        {this.props.children}
      </div>
    );
  }
}

Pending.propTypes = {
  state: PropTypes.bool,
  children: React.PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ])
};

export default Pending;
