import _omit from 'lodash/omit';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import _has from 'lodash/has';
import _uniq from 'lodash/uniq';
import _map from 'lodash/map';
import _indexOf from 'lodash/indexOf';
import _clone from 'lodash/clone';
import _isEmpty from 'lodash/isEmpty';
import React from 'react';
import {Field} from 'redux-form';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import _isFunction from 'lodash/isFunction';

class Resource extends React.Component {
  constructor() {
    super();
    this.renderField = this.renderField.bind(this);
    this.openResource = this.openResource.bind(this);
    this.closeResource = this.closeResource.bind(this);
    this.onChange = this.onChange.bind(this);
    this.options = this.options.bind(this);
    this.callBack = this.callBack.bind(this);
    this.state = {
      showResource: false
    };
    this.input = null;
  }

  onChange(e, value) {
    let values = this.input.value;
    if (typeof values !== 'object') {
      values = [values];
    }
    if (e.target.checked === true) {
      values.push(value);
    } else {
      values.splice(_indexOf(values, value), 1);
    }

    this.input.onChange(_uniq(values));
  }

  options() {
    const {field} = this.props;
    const options = _map(this.state.list || _get(field, 'list', []), (option, key) => {
      if (_indexOf(this.input.value, option.value) > -1) {
        return (
          <p className="form-control-static" key={key}>
            {_indexOf(this.input.value, option.value) > -1 ? <i className="fa fa-check-square-o" /> : <i className="fa fa-square-o" />}
            {' '}
            {option.desc}
          </p>
        );
      }
    });

    return (
      <div className="checkbox">
        {options}
      </div>
    );
  }

  callBack(values, list) {
    this.setState({
      list: list
    }, () => {
      this.input.onChange(_uniq(values));
    });
  }

  openResource() {
    this.setState({showResource: true});
  }

  closeResource() {
    this.setState({showResource: false});
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

    let disabled = false;
    if (this.props.field && this.props.field.disabled && _isFunction(this.props.field.disabled)) {
      disabled = this.props.checkDisabled(this.props.field.disabled());
    }

    const component = () => {
      const button = () => {
        if (!this.props.static) {
          return (<Button onClick={this.openResource} disabled={disabled}>{_get(this.props, 'field.buttonResource', 'open')}</Button>);
        }
      };

      const clonedValues = () => {
        if (_isEmpty(this.input.value)) {
          return [];
        }

        return _clone(this.input.value);
      };

      const resourceProps = {
        clonedValues: clonedValues(),
        clonedList: _clone(this.state.list) || _clone(this.props.field.list),
        callBack: this.callBack,
        show: this.state.showResource,
        closeResource: this.closeResource
      };

      return (
        <div>
          {button()}
          {this.options()}
          {this.props.field.resource(resourceProps)}
        </div>

      );
    };

    const getLabel = () => {
      if (label && !_isEmpty(label)) {
        return (
          <Col componentClass={ControlLabel} {...labelSize()}>
            {label}
          </Col>
        );
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
        {getLabel()}
        <Col {...fieldSize()}>
          {component()}
          {/*
            {touched && error && <FormControl.Feedback />}
          */}
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
        {..._omit(this.props.field, ['disabled', 'hidden', 'type'])}
        size={this.props.size}
        showResource={this.state.showResource}
        locale={this.props.locale}
        checkDisabled={this.props.checkDisabled}
        checkHidden={this.props.checkHidden}
        checkShow={this.props.checkShow}
      />
    );
  }
}

Resource.propTypes = {
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object,
  'horizontal': PropTypes.bool.isRequired
};
Resource.defaultProps = {};

export default Resource;
