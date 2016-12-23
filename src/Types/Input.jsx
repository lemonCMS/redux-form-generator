import React from 'react';
import Wrap from './Wrap';
import {Field} from 'redux-form';

class Input extends Wrap {

  render() {
    return (
      <Field
        component={this.renderField}
        {...this.props.field}
        size={this.props.size}
        static={this.props.static}
        locale={this.props.locale}
      />
    );
  }
}

Input.propTypes = {
  'field': React.PropTypes.object,
  'size': React.PropTypes.string,
  'static': React.PropTypes.bool,
  'addField': React.PropTypes.func,
  'locale': React.PropTypes.object
};
Input.defaultProps = {};

export default Input;
