import PropTypes from 'prop-types';
import React, {Component} from 'react';
import _isFunction from 'lodash/isFunction';
import _isString from 'lodash/isString';
import _isObject from 'lodash/isObject';
import _pick from 'lodash/pick';
import _get from 'lodash/get';

export default class Plain extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'checkHidden': PropTypes.func,
    'checkShow': PropTypes.func,
  };

  render() {
    if (this.props.field && this.props.field.hidden && _isFunction(this.props.field.hidden)) {
      if (this.props.checkHidden(this.props.field.hidden, _get(this.props.field, 'parent')) === true) {
        return null;
      }
    } else if (this.props.field && this.props.field.show && _isFunction(this.props.field.show)) {
      if (this.props.checkShow(this.props.field.show, _get(this.props.field, 'parent')) !== true) {
        return null;
      }
    }

    const createMarkup = (data) => {
      return {__html: data};
    };

    if (_isString(this.props.field.value)) {
      return (
        <div dangerouslySetInnerHTML={createMarkup(this.props.field.value)} {..._pick(this.props.field, ['className', 'style', 'id', 'onClick', 'rel'])} />
      );
    }

    if (_isObject(this.props.field.value)) {
      return this.props.field.value;
    }

    return null;
  }
}
