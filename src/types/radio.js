import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap';

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
    this.radioButtons = this.radioButtons.bind(this);
    this.filtered = this.filtered.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
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
    const selectedValue = String(properties.value || properties.defaultValue);
    const filtered = this.filtered(_.get(field, 'options', []));

    if (field.type === 'radio') {

      if(!!field.chunks) {
        const split = Math.ceil(filtered.length / field.chunks);
        const chunks = () => {
          const chunkData = _.chunk(filtered, split );
          return _.map(chunkData, (data, key) => {
            return (
              <Col key={key} md={ Math.round(12 / field.chunks) }>
                {this.radioButtons(field.name, data, selectedValue)}
              </Col>
            );
          });
        };
        return (<Row>{chunks()}</Row>);
      }

      return this.radioButtons(field.name, filtered, selectedValue);
    }
  }

  radioButtons(name, data, selectedValue) {
    return _.map(data, (option, key) => {
      return (
        <div key={key}>
          <label>
            <input
              name={name}
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
    if (!!this.props.field.searchable) {
      return (<input type="text" defaultValue={this.state.value} onKeyDown={this.handlePrevent} onKeyUp={this.handleChange} className="form-control"/>);
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
          {this.searchBox()}
          {this.options()}
          {help()}
        </div>
      </div>
    );
  }
}

