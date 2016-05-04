import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {change, changeWithKey} from 'redux-form';
import connectToWrap from './Wrap';

@connectToWrap()
class CheckboxListTypeiOs extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'dispatch': PropTypes.func.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'formName': PropTypes.string.isRequired,
    'formKey': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  };

  constructor() {
    super();
    this.options = this.options.bind(this);
    this.onChange = this.onChange.bind(this);
    this.options = this.options.bind(this);
    this.optionsWrite = this.optionsWrite.bind(this);
    this.optionsStatic = this.optionsStatic.bind(this);
  }

  componentWillMount() {
    this.setState(
      {
        options: _.map(_.get(this.props, 'field.options', []), (obj) => {
          obj.value = String(obj.value);
          return obj;
        }),
        selected: _.map(_.get(this.props, 'properties.value') || _.get(this.props, 'properties.initialValue') || [], String)
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        options: _.map(_.get(nextProps, 'field.options', []), (obj) => {
          obj.value = String(obj.value);
          return obj;
        }),
        selected: _.map(_.get(nextProps, 'properties.value') || _.get(nextProps, 'properties.initialValue') || [], String)
      }
    );
  }

  onChange(e, value) {
    const values = this.state.selected;

    if (e.target.checked === true) {
      values.push(value);
    } else {
      values.splice(_.indexOf(values, value), 1);
    }

    if (_.has(this.props, 'formKey')) {
      this.props.dispatch(changeWithKey(this.props.formName, this.props.formKey, this.props.field.name, _.uniq(values)));
    } else {
      this.props.dispatch(change(this.props.formName, this.props.field.name, _.uniq(values)));
    }
  }

  options() {
    if (this.props.static === true) {
      return this.optionsStatic(this.state.selected);
    }
    return this.optionsWrite(this.state.selected);
  }

  optionsWrite(selectedValue) {
    const {field} = this.props;
    return _.map(_.get(field, 'options', []), (option, key) => {
      return (
        <div className="checkbox" key={key}>
          <div className="onoffswitch">
            <input
              type="checkbox"
              className="onoffswitch-checkbox"
              value={option.value}
              checked={_.indexOf(selectedValue, String(option.value)) > -1}
              onChange={(e) => { this.onChange(e, option.value); }}
              id={'myonoff-' + field.name + option.value}
              />
            <label className="onoffswitch-label" htmlFor={'myonoff-' + field.name + option.value}></label>
          </div>
          {' '}
          {option.desc}
        </div>
      );
    });
  }

  optionsStatic(selectedValue) {
    const {field} = this.props;
    const options = _.map(_.get(field, 'options', []), (option, key) => {
      return (
        <div className="checkbox" key={key}>
          <div className="onoffswitch">
            <input
              type="checkbox"
              className="onoffswitch-checkbox"
              value={option.value}
              checked={_.indexOf(selectedValue, String(option.value)) > -1}
              id={'myonoff-' + field.name + option.value}
              readOnly
            />
            <label className="onoffswitch-label" htmlFor={'myonoff-' + field.name + option.value}></label>
          </div>
          {' '}
          {option.desc}
        </div>
      );
    });

    return (
      <div className="checkbox">
        {options}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.options()}
      </div>
    );
  }
}

export default CheckboxListTypeiOs;
