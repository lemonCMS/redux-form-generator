import _omit from 'lodash/omit';
import PropTypes from 'prop-types';
import React from 'react';
import {Field} from 'react-final-form';
import WrapList from './WrapList';

class Radio extends WrapList {
  render() {
    // [1] Set type to text, because we handle the radio button internally
    // --- This way we receive the value property
    // [2] Added the search property, to trigger render on filter
    return (
      <Field
        component={this.renderField}
        {..._omit(this.props.field,['disabled', 'hidden', 'type'])}
        size={this.props.size}
        search={this.state.value}
        locale={this.props.locale}
        checkDisabled={this.props.checkDisabled}
        checkHidden={this.props.checkHidden}
        checkShow={this.props.checkShow}
      />
    );
  }
}

Radio.propTypes = {
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'dispatch': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object
};
Radio.defaultProps = {};

export default Radio;
