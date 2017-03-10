import React from 'react';
import _has from 'lodash/has';
import _merge from 'lodash/merge';
import _get from 'lodash/get';
import _pick from 'lodash/pick';
import moment from '../helpers/moment';
import DateTimeField from 'react-datetime';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {Field} from 'redux-form';
import _isFunction from 'lodash/isFunction';

class Input extends React.Component {

  constructor() {
    super();
    this.renderField = this.renderField.bind(this);
  }

  renderField(props) {
    const {input, label, help, meta: {touched, error, valid}, ...custom} = props;
    const size = _get(props.field, 'bsSize', props.size);

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

    const add = _pick(custom, ['placeholder', 'inputProps']);
    const conf = _merge(props.conf, props.locale.datetimepicker);

    const validationState = () => {
      if (touched && error) {
        return 'error';
      }

      if (touched && valid) {
        return 'success';
      }
    };

    let disabled = false;
    if (this.props.field && this.props.field.diabled && _isFunction(this.props.field.disabled)) {
      disabled = this.props.checkDisabled(this.props.field.disabled());
    }

    const component = () => {
      return (
        <DateTimeField
          key={props.name}
          onChange={input.onChange}
          value={moment(input.value)}
          {...add}
          {...conf}
          inputProps={{
            disabled: disabled
          }}
        />
      );
    };

    return (
      <FormGroup
        {...thisSize()}
        validationState={validationState()}
      >
        <Col componentClass={ControlLabel} {...labelSize()}>
          {label}
        </Col>
        <Col {...fieldSize()}>
          {component()}
          {touched && error && <FormControl.Feedback />}
          {help && (!touched || !error) && <HelpBlock>{help}</HelpBlock>}
          {touched && error && <HelpBlock>{error}</HelpBlock>}
        </Col>
      </FormGroup>
    );
  }


  render() {
    return (
      <Field
        component={this.renderField}
        {...this.props.field}
        size={this.props.size}
        static={this.props.static}
        locale={this.props.locale}
      />
    );
  }
}

Input.propTypes = {
  'field': React.PropTypes.object,
  'size': React.PropTypes.string,
  'static': React.PropTypes.bool,
  'locale': React.PropTypes.object,
  'horizontal': React.PropTypes.bool.isRequired
};
Input.defaultProps = {};

export default Input;
