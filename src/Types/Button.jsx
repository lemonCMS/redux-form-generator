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

    return (
      <Button
        {...thisSize()}
        {...(_pick(this.props.field, ['type', 'placeholder', 'bsStyle', 'onClick', 'onBlur', 'disabled']))}
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
