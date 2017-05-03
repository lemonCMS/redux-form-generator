import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class Plain extends Component {

  static propTypes = {
    'checkDisabled': PropTypes.func,
    'checkHidden': PropTypes.func,
    'field': PropTypes.object.isRequired
  };

  render() {
    const createMarkup = (data) => {
      return {__html: data};
    };
    return (
      <div
        dangerouslySetInnerHTML={createMarkup(this.props.field.value)}
      ></div>
    );
  }
}