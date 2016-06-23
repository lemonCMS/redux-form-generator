import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import connectToWrap from './Wrap';
import {Alert, Col, FormControl, Radio, Row} from 'react-bootstrap';

@connectToWrap()
class RadioType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'size': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  };

  constructor() {
    super();
    this.radioButtons = this.radioButtons.bind(this);
    this.radioButtonList = this.radioButtonList.bind(this);
    this.getValue = this.getValue.bind(this);
    this.filtered = this.filtered.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: ''};
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

  radioButtonList(list, selectedValue) {
    return _.map(list, (option, key) => {
      return (
        <Radio
            key={key}
            name={this.props.field.name}
            value={option.value}
            onChange={this.props.properties.onChange}
            onFocus={this.props.properties.onFocus}
            onUpdate={this.props.properties.onUpdate}
            checked={selectedValue === String(option.value)}
        >
          {option.desc}
        </Radio>
      );
    });
  }

  radioButtons() {
    const selectedValue = String(_.get(this.props.properties, 'value') || _.get(this.props.properties, 'initialValue'));
    const filtered = this.filtered(_.get(this.props.field, 'options', []));
    const field = _.get(this.props, 'field');

    if (filtered.length === 0) {
      return (<Alert>Er zijn geen resultaten</Alert>);
    }

    if (!!field.chunks) {
      const split = Math.ceil(filtered.length / field.chunks);
      const chunks = () => {
        const chunkData = _.chunk(filtered, split );
        return _.map(chunkData, (chunk, key) => {
          return (
            <Col key={key} md={ Math.round(12 / field.chunks) }>
              {this.radioButtonList(chunk, selectedValue)}
            </Col>
          );
        });
      };
      return (<Row>{chunks()}</Row>);
    }

    return _.map(filtered, (option, key) => {
      return (
        <Radio
            key={key}
            name={this.props.field.name}
            value={option.value}
            onChange={this.props.properties.onChange}
            onFocus={this.props.properties.onFocus}
            onUpdate={this.props.properties.onUpdate}
            checked={selectedValue === String(option.value)}
        >
          {option.desc}
        </Radio>
      );
    });
  }

  getValue() {
    const options = _.get(this.props.field, 'options', []);
    const value = String(this.props.properties.initialValue || this.props.properties.value);
    const index = _.findIndex(options, ['value', value]);
    if (index > -1 && _.has(options, [index, 'desc'])) {
      return (
        <span>
          <i className="fa fa-dot-circle-o"></i>,
          {' '}
          {_.get(options, [index, 'desc'], '-')}
        </span>
      );
    }
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
    if (this.props.static === true) {
      return (
        <FormControl.Static type="text" placeholder={_.get(this.props.field, 'placeholder', '')}
        >
          {this.getValue()}
        </FormControl.Static>
      );
    }

    return (
      <div>
        {this.searchBox()}
        {this.radioButtons()}
      </div>
    );
  }
}

export default RadioType;
