import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Input, FormControls} from 'react-bootstrap';

export default class InputType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  }

  render() {
    const thisSize = _.get(this.props.field, 'bsSize', this.props.size);
    const extraProps = {};
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.bsStyle = 'error';
    }
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.help = this.props.properties.error;
    }

    if (this.props.static === true && this.props.field.type === 'checkbox' ) {
      return <FormControls.Static
        bsSize={thisSize}
        {..._.omit(this.props.field, ['value', 'label'])}
        {...this.props.properties}
        buttonBefore={this.props.addField(_.get(this.props.field, 'buttonBefore', {}), thisSize)}
        buttonAfter={this.props.addField(_.get(this.props.field, 'buttonAfter', {}), thisSize)}
        >
          {this.props.properties.value === true ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i> }
          {' '}
          {this.props.field.label}
        </FormControls.Static>
    }


    if (this.props.static === true ) {
      return <FormControls.Static
      bsSize={thisSize}
      {...this.props.field}
      {...this.props.properties}
      buttonBefore={this.props.addField(_.get(this.props.field, 'buttonBefore', {}), thisSize)}
      buttonAfter={this.props.addField(_.get(this.props.field, 'buttonAfter', {}), thisSize)}
      />
    }


    return (
      <Input
        key={this.props.field.name}
        name="search"
        bsSize={thisSize}
        {...extraProps}
        {...this.props.field}
        {...this.props.properties}
        buttonBefore={this.props.addField(_.get(this.props.field, 'buttonBefore', {}), thisSize)}
        buttonAfter={this.props.addField(_.get(this.props.field, 'buttonAfter', {}), thisSize)}
        />
    );
  }
}
