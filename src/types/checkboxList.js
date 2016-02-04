import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap';
import {change, changeWithKey} from 'redux-form';

export default class CheckboxListType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'dispatch': PropTypes.func.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'formName': PropTypes.string.isRequired,
    'formKey': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  }

  constructor() {
    super();
    this.options = this.options.bind(this);
    this.onChange = this.onChange.bind(this);
    this.options = this.options.bind(this);
    this.filtered = this.filtered.bind(this);
    this.checkboxButtons = this.checkboxButtons.bind(this);
    this.optionsWrite = this.optionsWrite.bind(this);
    this.optionsStatic = this.optionsStatic.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  onChange(e, value) {
    const {properties} = this.props;
    let values = _.get(properties, 'value') || _.get(properties, 'initialValue', []);

    if (typeof values !== 'object') {
      values = [values];
    }
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

  filtered(options) {
    const {value} = this.state;
    const strValue = String(value).toLowerCase();
    if (value !== '') {
      return _.filter(options, (option) => {
        return _.includes(String(option.desc).toLowerCase(), strValue);
      });
    }
    return options;
  }

  options() {
    const {field, properties} = this.props;
    const selectedValue = properties.value || properties.defaultValue;
    const filtered = this.filtered(_.get(field, 'options', []));

    if (filtered.length === 0) {
      return (<span className="help-block">no results to show</span>);
    }

    if (!!field.chunks) {
      const split = Math.ceil(filtered.length / field.chunks);
      const chunks = () => {
        const chunkData = _.chunk(filtered, split );
        return _.map(chunkData, (data, key) => {
          return (
            <Col key={key} md={ Math.round(12 / field.chunks) }>
              {this.checkboxButtons(field.name, data, selectedValue)}
            </Col>
          );
        });
      };
      return (<Row>{chunks()}</Row>);
    }

    return this.checkboxButtons(field.name, filtered, selectedValue);
  }

  checkboxButtons(name, data, selectedValue) {
    return _.map(data, (option, key) => {
      if (this.props.static === true) {
        return this.optionsStatic(name, option, selectedValue, key);
      }
      return this.optionsWrite(name, option, selectedValue, key);
    });
  }

  optionsWrite(name, option, selectedValue, key) {
    return (
      <div className="checkbox" key={key}>
        <label>
          <input
            type="checkbox"
            name={name + '[]'}
            value={option.value}
            checked={_.indexOf(selectedValue, option.value) > -1}
            onChange={(e) => { this.onChange(e, option.value); }}
            />
          {' '}
          {option.desc}
        </label>
      </div>
    );
  }

  optionsStatic(name, option, selectedValue, key) {
    return (
      <p className="form-control-static" key={key}>
        {_.indexOf(selectedValue, option.value) > -1 ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
        {' '}
        {option.desc}
      </p>
    );
  }

  handlePrevent(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  handleChange(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.setState({value: e.target.value});
  }

  searchBox() {
    if (!!this.props.field.searchable && !this.props.static) {
      return (<input type="text" placeholder="search" defaultValue={this.state.value} onKeyDown={this.handlePrevent} onKeyUp={this.handleChange} className="form-control"/>);
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
      if (this.props.properties.touched && _.has(this.props.properties, 'error')) {
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
          {this.searchBox()}
          {this.options()}
          {help()}
        </div>
      </div>
    );
  }
}

