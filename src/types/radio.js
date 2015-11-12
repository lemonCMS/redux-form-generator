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
    const {field} = this.props;
    const getClass = (classNames = '') => {
      let ret = classNames;
      if (thisSize === 'large') {
        ret = ret + ' form-group-lg';
      }

      if (thisSize === 'small') {
        ret = ret + ' form-group-sm';
      }

      if (this.props.properties.touched && this.props.properties.error) {
        return ret + ' has-error';
      }
      return ret;
    };

    const help = () => {
      if (_.has(this.props.properties, 'error')) {
        return (<span className="help-block">{this.props.properties.error}</span>);
      }
    };

    const label = () => {
      if (!!field.label) {
        return (<label className={'control-label ' + _.get(field, 'labelClassName')}>{field.label}</label>);
      }
    };

    return (
      <div key={field.name} className={getClass('form-group')}>
        {label()}
        <div className={field.wrapperClassName}>
          {this.options()}
          {help()}
        </div>
      </div>
    );
  }
}

