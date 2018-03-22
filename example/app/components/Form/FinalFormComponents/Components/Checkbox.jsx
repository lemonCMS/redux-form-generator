import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Alert from 'react-bootstrap/lib/Alert';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormControl from 'react-bootstrap/lib/FormControl';
import _isFunction from 'lodash/isFunction';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _chunk from 'lodash/chunk';
import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import _isArray from 'lodash/isArray';

class RadioBinder extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.searchBox = this.searchBox.bind(this);
    this.radioButtons = this.radioButtons.bind(this);
    this.radioButtonList = this.radioButtonList.bind(this);
    this.filtered = this.filtered.bind(this);
    this.state = {
      value: '',
      selected: []
    };
  }

  handleChange(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.setState({value: e.target.value});
  }

  handlePrevent(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  filtered() {
    const list = _isArray(this.props.field.children) ? this.props.field.children : [this.props.field.children];

    if (_get(this.props.field, 'static', false) === true) {
      return _filter(list, {value: this.props.input.value});
    }

    const {value} = this.state;
    const strValue = String(value).toLowerCase();
    if (value !== '') {
      return _filter(list, option => _includes(String(option.children).toLowerCase(), strValue));
    }
    return list;
  }

  radioButtonList(list) {
    const staticField = this.context.isStatic || _get(this.props.field, 'static', false);
    let clone = [];
    if (_isArray(this.props.input.value)) {
      clone = _map(this.props.input.value, item => (String(item)));
    }

    return _map(list, (option, key) => {
      if (staticField === true) {
        return (<FormControl.Static key={key}>{option.children}</FormControl.Static>);
      }

      let disabled = false;
      if (this.props.field && this.props.field.disabled && _isFunction(this.props.field.disabled)) {
        disabled = this.context.checkDisabled(this.props.field.disabled(), _get(this.props.field, 'parent'));
      }

      return (
        <Checkbox
          key={key}
          disabled={disabled}
          name={`${this.props.input.name}[${key}]`}
          value={option.props.value}
          checked={clone.indexOf(option.props.value) !== -1}
          onChange={(event) => {
            const newValue = [...this.props.input.value];
            if (event.target.checked) {
              newValue.push(option.props.value);
            } else {
              newValue.splice(newValue.indexOf(option.props.value), 1);
            }

            return this.props.input.onChange(newValue);
          }}
        >
          {option.props.children}
        </Checkbox>
      );
    });
  }

  radioButtons() {
    const filtered = this.filtered();
    const field = _get(this.props, 'field');
    if (filtered.length === 0) {
      return (
        <Alert>
          {_get(this.props.field, 'filter_norecords', 'No results')}
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
      disabled = this.context.checkDisabled(this.props.field.disabled());
    }

    if ((this.props.field.searchable || this.props.field.filter) && !this.props.field.static && !this.context.isStatic) {
      return (<input
        type="text"
        disabled={disabled}
        placeholder={_get(this.props.field, 'filter_placeholder', _get(this.props.field.locale, 'filter.placeholder', 'Filter'))}
        defaultValue={this.state.value}
        onKeyDown={this.handlePrevent}
        onKeyUp={this.handleChange}
        className="form-control"
      />);
    }
  }

  render() {
    return (
      <div>
        {this.searchBox()}
        {this.radioButtons()}
      </div>
    );
  }
}

RadioBinder.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object,
};
RadioBinder.contextTypes = {
  checkHidden: PropTypes.func,
  checkShow: PropTypes.func,
  isStatic: PropTypes.bool
};

export default ({input, field}) => (<RadioBinder input={input} field={field} />);

