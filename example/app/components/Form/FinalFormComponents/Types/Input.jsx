import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'react-final-form';
import InputComponent from '../Components/Input';

class Input extends React.Component {
  render() {
    const {name, ...rest} = this.props;
    return (
      <Field
        component={InputComponent}
        name={name}
        field={rest}
      />
    );
  }

}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string
};
Input.contextTypes = {
  getProp: PropTypes.func
};
Input.defaultProps = {};

export default Input;
