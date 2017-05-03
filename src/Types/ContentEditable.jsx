import _omit from 'lodash/omit';
import PropTypes from 'prop-types';
import React from 'react';
import Wrap from './WrapContentEditable';
import {Field} from 'redux-form';

class ContentEditable extends Wrap {

  render() {
    return (
      <Field
        component={this.renderField}
        {..._omit(this.props.field,['disabled', 'hidden', 'type'])}
        size={this.props.size}
        static={this.props.static}
        locale={this.props.locale}
        checkDisabled={this.props.checkDisabled}
      />
    );
  }
}

ContentEditable.propTypes = {
  'field': PropTypes.object,
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'addField': PropTypes.func,
  'locale': PropTypes.object
};
ContentEditable.defaultProps = {};

export default ContentEditable;
