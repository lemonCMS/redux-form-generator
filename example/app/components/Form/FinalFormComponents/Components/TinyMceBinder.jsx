import React from 'react';
import PropTypes from 'prop-types';
import TinyMceInput from './TinyMceInput';

class ContextBinder extends React.Component {

  render() {
    if (this.context.isStatic || this.props.field.static) {
      return (
        <div className={'rte-readonly'} dangerouslySetInnerHTML={{__html: this.props.input.value}} />
      );
    }

    return (
      <TinyMceInput readOnly {...this.props.input} className={this.props.field.className} tinymceConfig={Object.assign({}, this.props.field.config)} />
    );
  }
}

ContextBinder.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object
};

ContextBinder.contextTypes = {
  checkHidden: PropTypes.func,
  checkShow: PropTypes.func,
  isStatic: PropTypes.bool
};

export default ({input, field}) => {
  return (
    <ContextBinder input={input} field={field} />
  );
};
