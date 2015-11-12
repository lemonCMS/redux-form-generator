import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
// import {Input, FormControls} from 'react-bootstrap';

export default class RadioType extends Component {

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
  }

  options() {
    const {field, properties} = this.props;
    const selectedValue = String(properties.value || properties.defaultValue);
    if (field.type === 'radio') {
      return _.map(_.get(field, 'options', []), (option, key) => {
        return (
          <div key={key}>
            <label>
              <input
                name={field.name}
                type="radio"
                value={option.value}
                onChange={this.props.properties.onChange}
                onFocus={this.props.properties.onFocus}
                onUpdate={this.props.properties.onUpdate}
                checked={selectedValue === String(option.value)}
                />
              {' '}
              {option.desc}
            </label>
          </div>
        );
      });
    }
  }

  render() {
    const thisSize = _.get(this.props.field, 'bsSize', this.props.size);
    const extraProps = {};
    const {field} = this.props;

    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.bsStyle = 'error';
    }
    if (this.props.properties.touched && this.props.properties.error) {
      extraProps.help = this.props.properties.error;
    }

    const label = () => {
      if (!!field.label) {
        return (<label className={field.labelClassName + ' control-label'}>{field.label}</label>);
      }
    }

    return (
      <div key={field.name} className="form-group">
        {label()}
        <div className={field.wrapperClassName}>
          {this.options()}
        </div>
      </div>
    );
  }
}

