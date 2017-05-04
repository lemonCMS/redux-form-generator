import PropTypes from 'prop-types';
import React, {Component} from 'react';
import _isFunction from 'lodash/isFunction';

export default class Plain extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'checkHidden': PropTypes.func,
    'checkShow': PropTypes.func,
  };

  render() {
    if (this.props.field && this.props.field.hidden && _isFunction(this.props.field.hidden)) {
      if (this.props.checkHidden(this.props.field.hidden()) === true) {
        return null;
      }
    } else if (this.props.field && this.props.field.show && _isFunction(this.props.field.show)) {
      if (this.props.checkShow(this.props.field.show()) !== true) {
        return null;
      }
    }

    const createMarkup = (data) => {
      return {__html: data};
    };
    return (
      <div dangerouslySetInnerHTML={createMarkup(this.props.field.value)} />
    );
  }
}
