import PropTypes from 'prop-types';
import React from 'react';
import WrapList from './WrapList';
import {Field} from 'redux-form';

class Radio extends WrapList {
  render() {
    // [1] Set type to text, because we handle the radio button internally
    // --- This way we receive the value property
    // [2] Added the search property, to trigger render on filter
    return (
      <Field
        component={this.renderField}
        {...this.props.field}
        type="text"
        size={this.props.size}
        search={this.state.value}
        locale={this.props.locale}
      />
    );
  }
}

Radio.propTypes = {
  'dispatch': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object
};
Radio.defaultProps = {};

export default Radio;
