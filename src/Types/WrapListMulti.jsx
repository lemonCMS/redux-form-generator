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
import Checkbox from 'react-bootstrap/lib/Checkbox';
import _isFunction from 'lodash/isFunction';

class WrapListMulti extends React.Component {

  constructor() {
    super();
    this.renderField = this.renderField.bind(this);
    this.handlePrevent = this.handlePrevent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.options = this.options.bind(this);
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
      return _filter(options, (option) => {
        return this.input.value.indexOf(option.value) > -1;
      });
    }

    const {value} = this.state;
    const strValue = String(value).toLowerCase();
    if (value !== '') {
      return _filter(options, (option) => {
        return _includes(String(option.desc).toLowerCase(), strValue);
      });
    }
    return options;
  }

  radioButtonList(list) {
    const staticField = this.props.static || _get(this.props.field, 'static', false);

    let disabled = false;
    if (this.props.field && this.props.field.disabled && _isFunction(this.props.field.disabled)) {
      disabled = this.props.checkDisabled(this.props.field.disabled());
    }

    return _map(list, (option, key) => {
      if (staticField === true) {
        return (<FormControl.Static key={key}>{option.desc}</FormControl.Static>);
      }

      return (
        <Checkbox
          key={key}
          name={`${this.input.name}[${key}]`}
          disabled={disabled}
          value={option.value}
          checked={this.input.value.indexOf(option.value) !== -1}
          onChange={event => {
            const newValue = [...this.input.value];
            if (event.target.checked) {
              newValue.push(option.value);
            } else {
              newValue.splice(newValue.indexOf(option.value), 1);
            }

            return this.input.onChange(newValue);
          }}
        >
          {option.desc}
        </Checkbox>
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

    if (!!field.chunks) {
      const split = Math.ceil(filtered.length / field.chunks);
      const chunks = () => {
        const chunkData = _chunk(filtered, split);
        return _map(chunkData, (chunk, key) => {
          return (
            <Col key={key} md={ Math.round(12 / field.chunks) }>
              {this.radioButtonList(chunk)}
            </Col>
          );
        });
      };
      return (<Row>{chunks()}</Row>);
    }

    return this.radioButtonList(filtered);
  }

  options() {
    if (this.props.field.type === 'select') {
      return _map(_get(this.props.field, 'options', []), (option, key) => {
        return <option key={key} value={option.value}>{option.desc}</option>;
      });
    }
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
      if (this.props.checkHidden(this.props.field.hidden()) === true) {
        return null;
      }
    }

    const {input, help, meta: {touched, error, valid}} = props;
    this.input = input;

    if (props.searchable) {
      console.warn('Property `searchable` is deprecated, use `filter` instead for');
    }

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

    return (
      <FormGroup
        {...thisSize()}
        validationState={validationState()}
      >
        <Col componentClass={ControlLabel} {...labelSize()}>
          {this.props.field.label}
        </Col>
        <Col {...fieldSize()}>
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

WrapListMulti.propTypes = {
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'horizontal': PropTypes.bool.isRequired,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object
};
WrapListMulti.defaultProps = {};

export default WrapListMulti;
