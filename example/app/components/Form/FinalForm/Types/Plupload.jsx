import _omit from 'lodash/omit';
import PropTypes from 'prop-types';
import React from 'react';
import {Field} from 'react-final-form';
import WrapPlupload from './WrapPlupload';

class Plupload extends WrapPlupload {

  render() {
    return (
      <Field
        component={this.renderField}
        {..._omit(this.props.field,['disabled', 'hidden', 'type'])}
        size={this.props.size}
        changed={this.state.changed}
        locale={this.props.locale}
        checkDisabled={this.props.checkDisabled}
        checkHidden={this.props.checkHidden}
        checkShow={this.props.checkShow}
      />
    );
  }
}

Plupload.propTypes = {
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object
};
Plupload.defaultProps = {};

export default Plupload;
