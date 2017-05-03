import PropTypes from 'prop-types';
import React from 'react';
import Wrap from './Wrap';
import {Field} from 'redux-form';

class Select extends Wrap {

  render() {
    return (
      <Field
        component={this.renderField}
        {...this.props.field}
        size={this.props.size}
        locale={this.props.locale}
        checkDisabled={this.props.checkDisabled}
        checkHidden={this.props.checkHidden}
      />
    );
  }
}

Select.propTypes = {
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object

};
Select.defaultProps = {};

export default Select;
