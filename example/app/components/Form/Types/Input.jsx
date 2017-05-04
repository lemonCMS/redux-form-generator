import _omit from 'lodash/omit';
import PropTypes from 'prop-types';
import React from 'react';
import {Field} from 'redux-form';
import Wrap from './Wrap';

class Input extends Wrap {

  render() {
    return (
      <Field
        component={this.renderField}
        {..._omit(this.props.field, ['disabled', 'hidden'])}
        size={this.props.size}
        static={this.props.static}
        locale={this.props.locale}
        checkDisabled={this.props.checkDisabled}
        checkHidden={this.props.checkHidden}
        checkShow={this.props.checkShow}
      />
    );
  }
}

Input.propTypes = {
  'field': PropTypes.object,
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'addField': PropTypes.func,
  'locale': PropTypes.object
};
Input.defaultProps = {};

export default Input;
