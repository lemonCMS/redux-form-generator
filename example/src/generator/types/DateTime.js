import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import connectToWrap from './Wrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import {FormControl} from 'react-bootstrap';
import moment from 'moment';

@connectToWrap()
class DateTimeType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      date: null
    };
  }

  componentWillMount() {
    if (!_.isUndefined(_.get(this.props, 'properties.initialValue'))) {
      this.setState({date: _.get(this.props, 'properties.initialValue')});
    }
  }

  handleChange = (newDate) => {
    return this.setState({date: newDate});
  }

  render() {
    if (this.props.static === true) {
      let value = '';
      const dateTime = moment(this.props.properties.initialValue || this.props.properties.value, 'x');
      if (dateTime.isValid()) {
        value = dateTime.format(_.get(this.props, 'field.format', 'YYYY-MM-DD'));
      }

      return (
        <FormControl.Static type="text">{value}</FormControl.Static>
      );
    }

    const props = {};
    if (this.state.date === null) {
      props.defaultText = '';
    } else {
      props.dateTime = this.state.date;
    }

    return (
      <DateTimeField
        key={this.props.field.name}
        {...this.props.properties}
        {..._.get(this.props, 'field.conf', {})}
        {...props}
        />
    );
  }
}

export default DateTimeType;
