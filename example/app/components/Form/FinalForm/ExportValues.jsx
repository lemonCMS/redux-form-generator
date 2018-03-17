import React from 'react'
import { FormSpy } from 'react-final-form'

class ExportValues extends React.Component {
  constructor(props) {
    super(props)
    this.state = { values: props.values, submitting: false }
  }

  componentWillReceiveProps(nextProps) {
    const clone = Object.assign({}, nextProps);
    delete clone.callback;
    delete clone.render;
    this.props.callback(clone);
  }

  render() {
    // This component doesn't have to render anything, but it can render
    // submitting state.
    return null
  }
}

export default props => (
    <FormSpy
      {...props}
      subscription={{ active: true, values: true }}
      component={ExportValues}
    />
);
