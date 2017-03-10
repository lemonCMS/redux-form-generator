import React from 'react';
import WrapListMulti from './WrapListMulti';
import {Field} from 'redux-form';

class Checkbox extends WrapListMulti {

  render() {
    // Added the search property, to trigger render on filter
    return (
      <Field
        component={this.renderField}
        {...this.props.field}
        size={this.props.size}
        search={this.state.value}
        locale={this.props.locale}
      />
    );
  }
}

Checkbox.propTypes = {
  'dispatch': React.PropTypes.func,
  'field': React.PropTypes.object,
  'size': React.PropTypes.string,
  'static': React.PropTypes.bool,
  'locale': React.PropTypes.object
};
Checkbox.defaultProps = {};

export default Checkbox;
