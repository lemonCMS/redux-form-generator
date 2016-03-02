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

  constructor() {
    super();
    this.options = this.options.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  options() {
    if (this.props.field.type === 'select') {
      return _.map(_.get(this.props.field, 'options', []), (option, key) => {
        return <option key={key} value={option.value}>{option.desc}</option>;
      });
    }
  }

  getValue() {
    const options = _.get(this.props.field, 'options', []);
    const value = this.props.properties.defaultValue || this.props.properties.value;
    return _.get(options, [_.findIndex(options, ['value', value]), 'desc'], '');
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
      const value = this.props.properties.defaultValue || this.props.properties.value;
      return (<FormControls.Static
        bsSize={thisSize}
        {..._.omit(this.props.field, ['value', 'label'])}
        {..._.omit(this.props.properties, ['value', 'defaultValue'])}
        buttonBefore={this.props.addField(_.get(this.props.field, 'buttonBefore', {}), thisSize)}
        buttonAfter={this.props.addField(_.get(this.props.field, 'buttonAfter', {}), thisSize)}
        >
          {value === true ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i> }
          {' '}
          {this.props.field.label}
        </FormControls.Static>);
    }

    if (this.props.static === true && this.props.field.type === 'select' ) {
      return (<FormControls.Static
        bsSize={thisSize}
        value={this.getValue()}
        {..._.omit(this.props.field, ['value'])}
        {..._.omit(this.props.properties, ['value', 'defaultValue'])}
        buttonBefore={this.props.addField(_.get(this.props.field, 'buttonBefore', {}), thisSize)}
        buttonAfter={this.props.addField(_.get(this.props.field, 'buttonAfter', {}), thisSize)}
      >
      </FormControls.Static>);
    }


    if (this.props.static === true ) {
      return (<FormControls.Static
      bsSize={thisSize}
      {...this.props.field}
      value={this.props.properties.defaultValue || this.props.properties.value}
      {..._.omit(this.props.properties, ['value', 'defaultValue'])}
      buttonBefore={this.props.addField(_.get(this.props.field, 'buttonBefore', {}), thisSize)}
      buttonAfter={this.props.addField(_.get(this.props.field, 'buttonAfter', {}), thisSize)}
      >{this.options()}</FormControls.Static>);
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
        >
        {this.options()}
      </Input>
    );
  }
}
