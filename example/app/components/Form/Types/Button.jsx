import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _pick from 'lodash/pick';
import _isFunction from 'lodash/isFunction';
import Button from 'react-bootstrap/lib/Button';

class Input extends React.Component {
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

    const size = _get(this.props.field, 'bsSize', this.props.size);
    const thisSize = () => {
      if (size !== 'medium') {
        return ({bsSize: size});
      }
    };

    let disabled = false;
    if (this.props.field && this.props.field.disabled && _isFunction(this.props.field.disabled)) {
      disabled = this.props.checkDisabled(this.props.field.disabled());
    }
    if (this.props.submitting) {
      disabled = true;
    }

    return (
      <Button
        {...thisSize()}
        {...(_pick(this.props.field, ['type', 'placeholder', 'bsStyle', 'onClick', 'onBlur', 'block', 'active', 'href']))}
        disabled={disabled}
      >
        {this.props.field.value}
      </Button>
    );
  }
}

Input.propTypes = {
  'field': PropTypes.object,
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'size': PropTypes.string,
  submitting: PropTypes.bool
};
Input.defaultProps = {};

export default Input;
