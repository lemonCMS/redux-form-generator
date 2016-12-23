import React from 'react';
import WrapPlupload from './WrapPlupload';
import {Field} from 'redux-form';

class Plupload extends WrapPlupload {

  render() {
    return (
      <Field
        component={this.renderField}
        {...this.props.field}
        size={this.props.size}
        changed={this.state.changed}
        locale={this.props.locale}
      />
    );
  }
}

Plupload.propTypes = {
  'field': React.PropTypes.object,
  'size': React.PropTypes.string,
  'static': React.PropTypes.bool,
  'locale': React.PropTypes.object
};
Plupload.defaultProps = {};

export default Plupload;
