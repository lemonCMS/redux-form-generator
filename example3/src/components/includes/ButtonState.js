const _ = require('lodash');
import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

export default class ButtonState extends Component {
  render() {
    const {fa} = this.props;
    let faNode = '';

    if (!_.isEmpty(fa)) {
      faNode = <i className={fa + ' fa'}></i>;
    }

    if (_.get(this.props, 'pending') === true) {
      const props = _.omit(this.props, ['pending', 'children', 'onClick']);
      return (<Button {...props} disabled>Moment geduld</Button>);
    }

    const props = _.omit(this.props, ['pending', 'children']);
    return (<Button {...props}>{faNode} {this.props.children}</Button>);
  }
}

ButtonState.propTypes = {
  fa: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ])
};
