import React from 'react';
import Wrap from './WrapContentEditable';
import {Field} from 'redux-form';

class ContentEditable extends Wrap {

  render() {
    return (
      <Field
        component={this.renderField}
        {...this.props.field}
        size={this.props.size}
        static={this.props.static}
        locale={this.props.locale}
        checkDisabled={this.props.checkDisabled}
      />
    );
  }
}

ContentEditable.propTypes = {
  'field': React.PropTypes.object,
  'checkDisabled': React.PropTypes.func,
  'size': React.PropTypes.string,
  'static': React.PropTypes.bool,
  'addField': React.PropTypes.func,
  'locale': React.PropTypes.object
};
ContentEditable.defaultProps = {};

export default ContentEditable;
