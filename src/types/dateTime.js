import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
export default class InputType extends Component {

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
      let value = '';
      const dateTime = moment(this.props.properties.initialValue || this.props.properties.value, 'x');
      if (dateTime.isValid()) {
        value = dateTime.format('YYYY-MM-DD');
      }

      return (
        <div key={field.name} className={getClass('form-group')}>
          {label()}
          <div className={field.wrapperClassName}>
            <p className="form-control-static">{value}</p>
          </div>
        </div>
      );
    }

    const props = {};
    if (this.state.date === null) {
      props.defaultText = '';
    } else {
      props.dateTime = this.state.date;
    }

    return (
      <div key={field.name} className={getClass('form-group')}>
        {label()}
        <div className={field.wrapperClassName}>
          <DateTimeField
            key={this.props.field.name}
            bsSize={thisSize}
            {...this.props.field}
            {...this.props.properties}
            {...props}
            />
          {help()}
        </div>
      </div>
    );
  }
}
