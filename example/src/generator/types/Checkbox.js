import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {change, changeWithKey} from 'redux-form';
import connectToWrap from './Wrap';
import {Alert, Checkbox, Col, FormControl, Row} from 'react-bootstrap';

@connectToWrap()
class CheckboxType extends Component {

  static propTypes = {
    'field': PropTypes.object.isRequired,
    'properties': PropTypes.object.isRequired,
    'dispatch': PropTypes.func.isRequired,
    'size': PropTypes.string,
    'formName': PropTypes.string.isRequired,
    'formKey': PropTypes.string,
    'addField': PropTypes.func.isRequired,
    'static': PropTypes.bool
  };

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.radioButtons = this.radioButtons.bind(this);
    this.radioButtonList = this.radioButtonList.bind(this);
    this.getValue = this.getValue.bind(this);
    this.filtered = this.filtered.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: ''};
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

  onChange(e) {
    const values = this.state.selected;

    if (e.target.checked === true) {

      values.push(e.target.value);
    } else {
      values.splice(_.indexOf(values, e.target.value), 1);
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

  radioButtonList(list, selectedValue) {
    return _.map(list, (option, key) => {
      return (
        <Checkbox
            key={key}
            name={this.props.field.name}
            value={option.value}
            onChange={this.onChange}
            checked={selectedValue.indexOf(String(option.value)) > -1}
        >
          {option.desc}
        </Checkbox>
      );
    });
  }

  radioButtons() {
    let selectedValue = _.get(this.props.properties, 'value') || _.get(this.props.properties, 'initialValue');
    if (!_.isArray(selectedValue)) {
      selectedValue = [String(selectedValue)];
    }

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
              {this.radioButtonList(chunk, this.state.selected)}
            </Col>
          );
        });
      };
      return (<Row>{chunks()}</Row>);
    }

    return _.map(filtered, (option, key) => {
      return (
        <Checkbox
            key={key}
            name={this.props.field.name}
            value={option.value}
            onChange={this.onChange}
            checked={this.state.selected.indexOf(String(option.value)) > -1}
        >
          {option.desc}
        </Checkbox>
      );
    });
  }

  getValue() {
    const options = _.get(this.props.field, 'options', []);
    let value = this.props.properties.initialValue || this.props.properties.value;
    if (!!value && !_.isArray(value)) {
      value = [value];
    }

    if (value.length === 0) {
      return '-';
    }

    return _.map(value, (val, key) => {
      return (
        <span key={key}>
          <i className="fa fa-check-square-o"></i>
          {' '}
          {_.get(options, [_.findIndex(options, ['value', val]), 'desc'], '')}
          <br />
        </span>
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
    if (!!this.props.field.searchable && !this.props.static) {
      return (<input type="text" placeholder="search" defaultValue={this.state.value} onKeyDown={this.handlePrevent} onKeyUp={this.handleChange} className="form-control"/>);
    }
  }

  render() {
    // console.log('Checkbox', this.state);

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

export default CheckboxType;
