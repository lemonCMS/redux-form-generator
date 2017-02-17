import React, {Component, PropTypes} from 'react';

const css = require('./pending.css');

class Pending extends Component {

  constructor() {
    super();
    this.pending = this.pending.bind(this);
  }

  pending() {
    if (this.props.pending === true) {
      return ([
        <div key="1" className={css.pendingOverlayBackground} />,
        (<div key="2" className={css.pendingOverlayContent}>
          <i className="fa fa-spinner fa-pulse" />
        </div>)
      ]);
    }
  }

  render() {
    return (
      <div className={css.pendingWrapper}>
        {this.pending()}
        {this.props.children}
      </div>
    );
  }
}

Pending.propTypes = {
  pending: PropTypes.bool.isRequired,
  children: React.PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ])
};

export default Pending;
