import _omit from 'lodash/omit';
import PropTypes from 'prop-types';
import React from 'react';
import {Field} from 'react-final-form';
import WrapListMulti from './WrapListMulti';

class Checkbox extends WrapListMulti {

  render() {
    // Added the search property, to trigger render on filter
    return (
      <Field
        component={this.renderField}
        {..._omit(this.props.field, ['disabled', 'hidden', 'type'])}
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

Checkbox.propTypes = {
  'dispatch': PropTypes.func,
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object
};
Checkbox.defaultProps = {};

export default Checkbox;
