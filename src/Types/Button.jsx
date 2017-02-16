import React from 'react';
import _get from 'lodash/get';
import _pick from 'lodash/pick';
import Button from 'react-bootstrap/lib/Button';

class Input extends React.Component {
  render() {
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

    return (
      <Button
        {...thisSize()}
        {...(_pick(this.props.field, ['type', 'placeholder', 'bsStyle', 'onClick', 'onBlur', 'block', 'active' ,'href']))}
        disabled={disabled}
      >
        {this.props.field.value}
      </Button>
    );
  }
}

Input.propTypes = {
  'field': React.PropTypes.object,
  'size': React.PropTypes.string,
  'static': React.PropTypes.bool,
  'locale': React.PropTypes.object
};
Input.defaultProps = {};

export default Input;
