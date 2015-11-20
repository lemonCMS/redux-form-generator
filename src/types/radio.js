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
  };

  constructor() {
    super();
    this.options = this.options.bind(this);
    this.radioButtons = this.radioButtons.bind(this);
    this.radioButtonWrite = this.radioButtonWrite.bind(this);
    this.radioButtonStatic = this.radioButtonStatic.bind(this);
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

  radioButtonWrite(name, option, selectedValue, key) {
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
  }

  radioButtonStatic(name, option, selectedValue, key) {
    return (
      <p className="form-control-static" key={key}>
        {selectedValue === String(option.value) ? <i className="fa fa-dot-circle-o"></i> : <i className="fa fa-circle-o"></i>}
        {' '}
        {option.desc}
      </p>
    );
  }

  radioButtons(name, data, selectedValue) {
    return _.map(data, (option, key) => {
      if (this.props.static === true) {
        return this.radioButtonStatic(name, option, selectedValue, key);
      }
      return this.radioButtonWrite(name, option, selectedValue, key);
    });
  }

  options() {
    const {field, properties} = this.props;
    const selectedValue = String(properties.value || properties.defaultValue);
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
              {this.radioButtons(field.name, data, selectedValue)}
            </Col>
          );
        });
      };
      return (<Row>{chunks()}</Row>);
    }

    return this.radioButtons(field.name, filtered, selectedValue);
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
      if (this.props.properties.touched && this.props.properties.error) {
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

