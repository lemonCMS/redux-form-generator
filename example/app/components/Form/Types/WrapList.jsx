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

class WrapList extends React.Component {

  constructor() {
    super();
    this.renderField = this.renderField.bind(this);
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
      return _filter(options, (option) => {
        return _includes(String(option.desc).toLowerCase(), strValue);
      });
    }
    return options;
  }

  radioButtonList(list) {
    const staticField = this.props.static || _get(this.props.field, 'static', false);

    return _map(list, (option, key) => {
      if (staticField === true) {
        return (<FormControl.Static key={key}>{option.desc}</FormControl.Static>);
      }

      return (
        <Radio
          key={key}
          name={`${this.input.name}[${key}]`}
          value={option.value}
          checked={String(this.input.value) === String(option.value)}
          onChange={event => {
            if(event.target.checked) {
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

    if (!!field.chunks) {
      const split = Math.ceil(filtered.length / field.chunks);
      const chunks = () => {
        const chunkData = _chunk(filtered, split );
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

  searchBox() {
    if ((!!this.props.field.searchable || this.props.field.filter) && !this.props.static) {
      return (<input
        type="text"
        placeholder={_get(this.props.field, 'filter_placeholder', _get(this.props.locale, 'filter.placeholder', 'Filter'))}
        defaultValue={this.state.value}
        onKeyDown={this.handlePrevent}
        onKeyUp={this.handleChange}
        className="form-control"
      />);
    }
  }

  renderField(props) {
    const {input, help, meta: {touched, error, valid}} = props;
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
      return {sm: 2};
    };

    const fieldSize = () => {
      if (_has(this.props.field, 'fieldSize')) {
        return this.props.field.fieldSize;
      }
      return {sm: 10};
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

WrapList.propTypes = {
  'dispatch': React.PropTypes.dispatch,
  'field': React.PropTypes.object,
  'size': React.PropTypes.string,
  'static': React.PropTypes.bool,
  'locale': React.PropTypes.object
};
WrapList.defaultProps = {};

export default WrapList;
