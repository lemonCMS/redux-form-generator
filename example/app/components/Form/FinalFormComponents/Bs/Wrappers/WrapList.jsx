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
import {Field} from 'react-final-form';

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

  filtered(props) {
    if (this.props.static === true || _get(props.field, 'static', false) === true) {
      return _filter(this.props.children, {value: this.input.value});
    }

    const {value} = this.state;
    const strValue = String(value).toLowerCase();
    if (value !== '') {
      return _filter(this.props.children, option => _includes(String(option.children).toLowerCase(), strValue));
    }
    return this.props.children;
  }

  radioButtonList(props, list) {
    const staticField = this.props.static || _get(props.field, 'static', false);
    return _map(list, (option, key) => {
      if (staticField === true) {
        return (<FormControl.Static key={key}>{option.children}</FormControl.Static>);
      }

      let disabled = false;
      if (props.field && props.field.disabled && _isFunction(props.field.disabled)) {
        disabled = this.props.checkDisabled(props.field.disabled(), _get(props.field, 'parent'));
      }
      return (
        <Radio
          key={key}
          disabled={disabled}
          name={`${this.input.name}[${key}]`}
          value={option.props.value}
          checked={String(this.input.value) === String(option.props.value)}
          onChange={(event) => {
            if (event.target.checked) {
              return this.input.onChange(option.props.value);
            }
          }}
        >
          {option.props.children}
        </Radio>
      );
    });
  }

  radioButtons(props) {
    const filtered = this.filtered(props);
    const field = _get(props, 'field');
    if (filtered.length === 0) {
      return (
        <Alert>
          {_get(props.field, 'filter_norecords', _get(this.props.locale, 'filter.norecords', 'No results'))}
        </Alert>);
    }

    if (field.chunks) {
      const split = Math.ceil(filtered.length / field.chunks);
      const chunks = () => {
        const chunkData = _chunk(filtered, split);
        return _map(chunkData, (chunk, key) => {
          return (
            <Col key={key} md={Math.round(12 / field.chunks)} >
              {this.radioButtonList(props, chunk)}
            </Col>
          );
        });
      };
      return (<Row>{chunks()}</Row>);
    }

    return this.radioButtonList(props, filtered);
  }

  searchBox(props) {
    let disabled = false;
    if (props.field && props.field.disabled && _isFunction(props.field.disabled)) {
      disabled = this.props.checkDisabled(props.field.disabled());
    }

    if ((!!props.field.searchable || props.field.filter) && !this.props.static) {
      return (<input
        type="text"
        disabled={disabled}
        placeholder={_get(props.field, 'filter_placeholder', _get(this.props.locale, 'filter.placeholder', 'Filter'))}
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
    if (props.field && props.field.hidden && _isFunction(props.field.hidden)) {
      if (this.props.checkHidden(props.field.hidden, _get(props, 'parent')) === true) {
        return null;
      }
    } else if (props.field && props.field.show && _isFunction(props.field.show)) {
      if (this.props.checkShow(props.field.show, _get(props, 'parent')) !== true) {
        return null;
      }
    }

    const {input, help, meta: {touched, error, submitError, submitFailed, valid}} = props;
    this.input = input;
    const size = _get(props.field, 'bsSize', this.props.size);
    const thisSize = () => {
      if (size !== 'medium') {
        return ({bsSize: size});
      }
    };

    const labelSize = () => {
      if (_has(props.field, 'labelSize')) {
        return props.field.labelSize;
      }
      if (this.props.horizontal) {
        return {sm: 2};
      }
    };

    const fieldSize = () => {
      if (_has(props.field, 'fieldSize')) {
        return props.field.fieldSize;
      }
      if (this.props.horizontal) {
        return {sm: 10};
      }
      return ({style: {position: 'relative'}});
    };

    const validationState = () => {
      if ((touched && error) || (submitFailed && submitError)) {
        return 'error';
      }

      if (touched && valid) {
        return 'success';
      }
    };

    const getLabel = () => {
      if (props.field.label) {
        return (
          <Col componentClass={ControlLabel} {...labelSize()}>
            {props.field.label}
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
        <Col {...fieldSize()}>
          {this.searchBox(props)}
          {this.radioButtons(props)}
          {((touched && error) || (submitFailed && submitError)) && <FormControl.Feedback />}
          {help && (!touched || (!submitError && !error)) && <HelpBlock>{help}</HelpBlock>}
          {((touched && error) || (submitFailed && submitError)) && <HelpBlock>{(submitError || error)}</HelpBlock>}
        </Col>
      </FormGroup>
    );
  }

  render() {
    const {name, ...rest} = this.props;
    return (
      <Field
        component={this.renderField}
        name={name}
        field={rest}
      />
    );
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
  'horizontal': PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.array.isRequired
};
WrapList.defaultProps = {};

export default WrapList;
