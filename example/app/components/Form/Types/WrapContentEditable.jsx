import React from 'react';
import _has from 'lodash/has';
import _merge from 'lodash/merge';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _get from 'lodash/get';
import _pick from 'lodash/pick';
import _isFunction from 'lodash/isFunction';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import ContentEditableComponent from './ContentEditableComponent';

class WrapContentEditable extends React.Component {

  constructor() {
    super();
    this.input = {};
    this.custom = {};
    this.renderField = this.renderField.bind(this);
  }

  renderField(props) {
    const {input, label, help, meta: {touched, error, valid}, ...custom} = props;
    this.input = input;
    this.custom = custom;
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

    const add = _pick(custom, ['type', 'placeholder', 'rows', 'cols']);
    if (custom.disabled && _isFunction(custom.disabled)) {
      add.disabled = this.props.checkDisabled(custom.disabled());
    }

    const validationState = () => {
      if (touched && error) {
        return 'error';
      }

      if (touched && valid) {
        return 'success';
      }
    };

    const getField = () => {
      return <ContentEditableComponent
        tagName="h2"
        html={this.input.value}
        onChange={(html) => {
          console.log(this.input.onChange(html));
        }}
        {...this.props.field.attributes}
      />

    };

    if (this.props.field.type === 'dropDown' && !_has(this.props.field, 'label')) {
      return getField();
    }

    const getLabel = () => {
      if (label && !_isEmpty(label)) {
        return (
          <Col componentClass={ControlLabel} {...labelSize()}>
            {label}
          </Col>
        );
      }
    }

    return (
      <FormGroup
        {...thisSize()}
        validationState={validationState()}
      >
        {getLabel()}
        <Col {...fieldSize()}>
          {getField()}
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

WrapContentEditable.propTypes = {
  'field': React.PropTypes.object,
  'size': React.PropTypes.string,
  'addField': React.PropTypes.func,
  'static': React.PropTypes.bool,
  'checkDisabled': React.PropTypes.func,
  'horizontal': React.PropTypes.bool.isRequired
};
WrapContentEditable.defaultProps = {};

export default WrapContentEditable;
