import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Input, FormControls} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
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
      if (this.props.properties.touched && _.has(this.props.properties, 'error')) {
        return (<span className="help-block">{this.props.properties.error}</span>);
      }
    };

    const label = () => {
      if (!!field.label) {
        return (<label className={'control-label ' + _.get(field, 'labelClassName')}>{field.label}</label>);
      }
    };

    if (this.props.static === true) {
      return(
        <div key={field.name} className={getClass('form-group')}>
          {label()}
          <div className={field.wrapperClassName}>
            {moment(this.props.properties.defaultValue || this.props.properties.value, 'x').format('YYYY-MM-DD')}
          </div>
        </div>
      );
    }

    return (
      <div key={field.name} className={getClass('form-group')}>
        {label()}
        <div className={field.wrapperClassName}>
          <DateTimeField
            key={this.props.field.name}
            name="search"
            bsSize={thisSize}
            {...this.props.field}
            {...this.props.properties}
            >
          </DateTimeField>
          {help()}
        </div>
      </div>
    );
  }
}
