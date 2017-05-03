import PropTypes from 'prop-types';
import React from 'react';
import WrapListMulti from './WrapListMulti';
import {Field} from 'redux-form';

class Checkbox extends WrapListMulti {

  render() {
    // Added the search property, to trigger render on filter
    return (
      <Field
        component={this.renderField}
        {...this.props.field}
        size={this.props.size}
        search={this.state.value}
        locale={this.props.locale}
      />
    );
  }
}

Checkbox.propTypes = {
  'dispatch': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object
};
Checkbox.defaultProps = {};

export default Checkbox;
