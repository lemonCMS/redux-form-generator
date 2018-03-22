import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function connnectToConfirm(conf) {
  return (WrappedComponent) => {
    class TmpComponent extends Component {
      render() {
        return (<WrappedComponent {...this.props} {...conf} />);
      }
    }
    return TmpComponent;
  };
}
