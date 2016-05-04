import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {change, changeWithKey} from 'redux-form';
import connectToWrap from './Wrap';
import TinyMCE from 'react-tinymce';

@connectToWrap()
class RteType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'dispatch': PropTypes.func.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool,
    'formName': PropTypes.string,
    'formKey': PropTypes.string
  };

  constructor() {
    super();
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(e) {
    if (_.has(this.props, 'formKey')) {
      this.props.dispatch(changeWithKey(this.props.formName, this.props.formKey, this.props.field.name, e.target.getContent()));
    } else {
      this.props.dispatch(change(this.props.formName, this.props.field.name, e.target.getContent()));
    }
  }

  render() {
    const value = () => {
      if (!_.isEmpty(_.get(this.props.properties, 'value', ''))) {
        return _.get(this.props.properties, 'value');
      }

      return _.get(this.props.properties, 'initialValue', '');
    };

    if (this.props.static === true) {
      const createMarkup = (data) => { return {__html: data}; };

      return (
        <samp className="tiny_mce_static" dangerouslySetInnerHTML={createMarkup(value())} />
      );
    }

    return (
      <TinyMCE
        content={value()}
        {...this.props.field}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default RteType;

