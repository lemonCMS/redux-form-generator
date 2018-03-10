import PropTypes from 'prop-types';
import React from 'react';
import _has from 'lodash/has';
import _merge from 'lodash/merge';
import _get from 'lodash/get';
import _pick from 'lodash/pick';
import DateTimeField from 'react-datetime';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {Field} from 'react-final-form';
import _isFunction from 'lodash/isFunction';
import moment from '../../helpers/moment';

class Input extends React.Component {

  constructor() {
    super();
    this.renderField = this.renderField.bind(this);
  }

  renderField(props) {
    if (this.props.field && this.props.field.hidden && _isFunction(this.props.field.hidden)) {
      if (this.props.checkHidden(this.props.field.hidden, _get(this.props.field, 'parent')) === true) {
        return null;
      }
    } else if (this.props.field && this.props.field.show && _isFunction(this.props.field.show)) {
      if (this.props.checkShow(this.props.field.show, _get(this.props.field, 'parent')) !== true) {
        return null;
      }
    }

    const {input, label, help, meta: {touched, error, submitError, valid}, ...custom} = props;
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
    const conf = _merge(props.locale.datetimepicker, props.conf);

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
          onChange={(val) => {
            if (props.display && typeof val[props.display] !== "undefined") {
              input.onChange(val[props.display]());
            } else {
              input.onChange(val);
            }
          }}
          value={moment(input.value)}
          {...add}
          {...conf}
          inputProps={{
            disabled: disabled
          }}
        />
      );
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
        <Col {...fieldSize()}>
          {component()}
          {touched && (submitError || error) && <FormControl.Feedback />}
          {help && (!touched || (!submitError && !error)) && <HelpBlock>{help}</HelpBlock>}
          {touched && (submitError || error) && <HelpBlock>{(submitError || error)}</HelpBlock>}
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
  'field': PropTypes.object,
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object,
  'horizontal': PropTypes.bool.isRequired
};
Input.defaultProps = {
};

export default Input;
