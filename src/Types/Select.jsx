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
      />
    );
  }
}

Select.propTypes = {
  'field': React.PropTypes.object,
  'size': React.PropTypes.string,
  'static': React.PropTypes.bool,
  'locale': React.PropTypes.object

};
Select.defaultProps = {};

export default Select;
