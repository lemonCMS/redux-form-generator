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
      />
    );
  }
}

Rte.propTypes = {
  'field': React.PropTypes.object,
  'size': React.PropTypes.string,
  'static': React.PropTypes.bool,
  'locale': React.PropTypes.object
};
Rte.defaultProps = {};

export default Rte;
