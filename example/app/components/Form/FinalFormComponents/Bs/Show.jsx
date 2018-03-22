import React from 'react';
import PropTypes from 'prop-types';
import _isFunction from 'lodash/isFunction';
import _get from 'lodash/get';

class Show extends React.Component {

  render() {
    if (this.props.hidden && _isFunction(this.props.hidden)) {
      if (this.context.checkHidden(this.props.hidden, _get(this.props, 'parent')) === true) {
        return null;
      }
    } else if (this.props.show && _isFunction(this.props.show)) {
      if (this.context.checkShow(this.props.show, _get(this.props, 'parent')) !== true) {
        return null;
      }
    }
    return (this.props.children);
  }
}

Show.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  hidden: PropTypes.func,
  show: PropTypes.func
};
Show.defaultProps = {};
Show.contextTypes = {
  checkHidden: PropTypes.func.isRequired,
  checkShow: PropTypes.func.isRequired,
  isStatic: PropTypes.bool.isRequired
};


export default Show;
