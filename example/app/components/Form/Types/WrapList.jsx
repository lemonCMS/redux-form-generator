import PropTypes from 'prop-types';
import React from 'react';
import _has from 'lodash/has';
import _map from 'lodash/map';
import _get from 'lodash/get';
import _chunk from 'lodash/chunk';
import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import FormControl from 'react-bootstrap/lib/FormControl';
import Alert from 'react-bootstrap/lib/Alert';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Radio from 'react-bootstrap/lib/Radio';
import _isFunction from 'lodash/isFunction';

class WrapList extends React.Component {

  constructor() {
    super();
    this.renderField = this.renderField.bind(this);
    this.handlePrevent = this.handlePrevent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filtered = this.filtered.bind(this);
    this.radioButtons = this.radioButtons.bind(this);
    this.radioButtonList = this.radioButtonList.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.state = {
      value: '',
      selected: []
    };
    this.input = {};
  }

  filtered(options) {
    if (this.props.static === true || _get(this.props.field, 'static', false) === true) {
      return _filter(this.props.field.options, {value: this.input.value});
    }

    const {value} = this.state;
    const strValue = String(value).toLowerCase();
    if (value !== '') {
      return _filter(options, option => _includes(String(option.desc).toLowerCase(), strValue));
    }
    return options;
  }

  radioButtonList(list) {
    const staticField = this.props.static || _get(this.props.field, 'static', false);
    return _map(list, (option, key) => {
      if (staticField === true) {
        return (<FormControl.Static key={key}>{option.desc}</FormControl.Static>);
      }

      let disabled = false;
      if (this.props.field && this.props.field.disabled && _isFunction(this.props.field.disabled)) {
        disabled = this.props.checkDisabled(this.props.field.disabled(), _get(this.props.field, 'parent'));
      }

      return (
        <Radio
          key={key}
          disabled={disabled}
          name={`${this.input.name}[${key}]`}
          value={option.value}
          checked={String(this.input.value) === String(option.value)}
          onChange={(event) => {
            if (event.target.checked) {
              return this.input.onChange(option.value);
            }
          }}
        >
          {option.desc}
        </Radio>
      );
    });
  }

  radioButtons() {
    const filtered = this.filtered(_get(this.props.field, 'options', []));
    const field = _get(this.props, 'field');
    if (filtered.length === 0) {
      return (
        <Alert>
          {_get(this.props.field, 'filter_norecords', _get(this.props.locale, 'filter.norecords', 'No results'))}
        </Alert>);
    }

    if (field.chunks) {
      const split = Math.ceil(filtered.length / field.chunks);
      const chunks = () => {
        const chunkData = _chunk(filtered, split);
        return _map(chunkData, (chunk, key) => {
          return (
            <Col key={key} md={Math.round(12 / field.chunks)} >
              {this.radioButtonList(chunk)}
            </Col>
          );
        });
      };
      return (<Row>{chunks()}</Row>);
    }

    return this.radioButtonList(filtered);
  }

  searchBox() {
    let disabled = false;
    if (this.props.field && this.props.field.disabled && _isFunction(this.props.field.disabled)) {
      disabled = this.props.checkDisabled(this.props.field.disabled());
    }

    if ((!!this.props.field.searchable || this.props.field.filter) && !this.props.static) {
      return (<input
        type="text"
        disabled={disabled}
        placeholder={_get(this.props.field, 'filter_placeholder', _get(this.props.locale, 'filter.placeholder', 'Filter'))}
        defaultValue={this.state.value}
        onKeyDown={this.handlePrevent}
        onKeyUp={this.handleChange}
        className="form-control"
      />);
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

  renderField(props) {
    if (this.props.field && this.props.field.hidden && _isFunction(this.props.field.hidden)) {
      if (this.props.checkHidden(this.props.field.hidden, _get(props, 'parent')) === true) {
        return null;
      }
    } else if (this.props.field && this.props.field.show && _isFunction(this.props.field.show)) {
      if (this.props.checkShow(this.props.field.show, _get(props, 'parent')) !== true) {
        return null;
      }
    }

    const {input, label, help, meta: {touched, error, valid}} = props;
    this.input = input;
    const size = _get(this.props.field, 'bsSize', this.props.size);
    const thisSize = () => {
      if (size !== 'medium') {
        return ({bsSize: size});
      }
    };

    const labelSize = () => {
      if (_has(this.props.field, 'labelSize')) {
        return this.props.field.labelSize;
      }
      if (this.props.horizontal) {
        return {sm: 2};
      }
    };

    const fieldSize = () => {
      if (_has(this.props.field, 'fieldSize')) {
        return this.props.field.fieldSize;
      }
      if (this.props.horizontal) {
        return {sm: 10};
      }
    };

    const validationState = () => {
      if (touched && error) {
        return 'error';
      }

      if (touched && valid) {
        return 'success';
      }
    };

    const getLabel = () => {
      if (label) {
        return (
          <Col componentClass={ControlLabel} {...labelSize()}>
            {label}
          </Col>
        );
      }
    };

    return (
      <FormGroup
        {...thisSize()}
        validationState={validationState()}
      >
        {getLabel()}
        <Col {...fieldSize()} className={_get(this.props.field, 'fieldClassName', '')}>
          {this.searchBox()}
          {this.radioButtons()}
          {touched && error && <FormControl.Feedback />}
          {help && (!touched || !error) && <HelpBlock>{help}</HelpBlock>}
          {touched && error && <HelpBlock>{error}</HelpBlock>}
        </Col>
      </FormGroup>
    );
  }

  render() {
    return null;
  }
}

WrapList.propTypes = {
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object,
  'horizontal': PropTypes.bool.isRequired
};
WrapList.defaultProps = {};

export default WrapList;
