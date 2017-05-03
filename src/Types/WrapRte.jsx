import PropTypes from 'prop-types';
import React from 'react';
import _has from 'lodash/has';
import _get from 'lodash/get';
import _pick from 'lodash/pick';
import TinyMCE from 'react-tinymce';
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
    const {input, label, help, meta: {touched, error, valid}, ...custom} = props;
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

    const add = _pick(custom, ['placeholder', 'rows', 'cols', 'config']);
    const component = () => {

      if (this.props.static === true
        || _get(this.props.field, 'static', false) === true
        || _get(this.props.field, 'disabled', false) === true
      ) {
        const createMarkup = (data) => {
          return {__html: data};
        };

        return (
          <samp className="tiny_mce_static" dangerouslySetInnerHTML={createMarkup(input.value)}/>
        );
      }

      return (<TinyMCE
        content={input.value}
        {...add}
        onChange={(event) => {
          this.input.onBlur();
          this.input.onChange(event.target.getContent());
        }}
      />);
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
    return null;
  }
}

WrapRte.propTypes = {
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object,
  'horizontal': PropTypes.bool.isRequired
};
WrapRte.defaultProps = {};

export default WrapRte;
