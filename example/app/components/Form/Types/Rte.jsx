import PropTypes from 'prop-types';
import React from 'react';
import WrapRte from './WrapRte';
import {Field} from 'redux-form';

class Rte extends WrapRte {
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

Rte.propTypes = {
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object
};
Rte.defaultProps = {};

export default Rte;
