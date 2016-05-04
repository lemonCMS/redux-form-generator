import React, {Component, PropTypes} from 'react';

export default class PlainType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  };

  render() {
    const createMarkup = (data) => { return {__html: data}; };
    return (
      <div {...this.props.field}
        dangerouslySetInnerHTML={createMarkup(this.props.field.value)}
      ></div>
    );
  }
}
