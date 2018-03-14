import PropTypes from 'prop-types';
import React from 'react';
import _has from 'lodash/has';
import _get from 'lodash/get';
import _pick from 'lodash/pick';
import _isFunction from 'lodash/isFunction';
import TinyMCEInput from 'react-tinymce-input';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

class WrapRte extends React.Component {

  constructor() {
    super();
    this.input = null;
    this.renderField = this.renderField.bind(this);
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

    const {input, label, help, meta: {touched, error, submitError, submitFailed, valid}, ...custom} = props;
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

    const add = _pick(custom, ['placeholder', 'rows', 'cols']);
    add.tinymceConfig = custom.config;

    const component = () => {

      let checkDisabled = false;
      if (custom.disabled && _isFunction(custom.disabled)) {
        checkDisabled = this.props.checkDisabled(custom.disabled());
      }

      if (this.props.static === true
        || _get(this.props.field, 'static', false) === true
        || _get(this.props.field, 'disabled', false) === true
        || checkDisabled === true
      ) {
        const createMarkup = (data) => {
          return {__html: data};
        };

        return (
          <samp className="tiny_mce_static" dangerouslySetInnerHTML={createMarkup(input.value)} />
        );
      }

      return (<TinyMCEInput
        value={input.value}
        {...add}
        onChange={(event) => {
          this.input.onBlur();
          this.input.onChange(event);
        }}
      />);
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
          {((touched && error) || (submitFailed && submitError)) && <FormControl.Feedback />}
          {help && (!touched || (!submitError && !error)) && <HelpBlock>{help}</HelpBlock>}
          {((touched && error) || (submitFailed && submitError)) && <HelpBlock>{(submitError || error)}</HelpBlock>}
        </Col>
      </FormGroup>
    );
  }

  render() {
    return null;
  }
}

WrapRte.propTypes = {
  'checkDisabled': PropTypes.func,
  'checkShow': PropTypes.func,
  'checkHidden': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'horizontal': PropTypes.bool.isRequired
};
WrapRte.defaultProps = {};

export default WrapRte;
