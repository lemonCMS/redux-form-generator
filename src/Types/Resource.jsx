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
      return (
        <p className="form-control-static" key={key}>
          {_indexOf(this.input.value, option.value) > -1 ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
          {' '}
          {option.desc}
        </p>
      );
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
    const {input, label, help, meta: {touched, error}, ...custom} = props;
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
      return {sm: 2};
    };

    const fieldSize = () => {
      if (_has(this.props.field, 'fieldSize')) {
        return this.props.field.fieldSize;
      }
      return {sm: 10};
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

    return (
      <FormGroup
        {...thisSize()}
      >
        <Col componentClass={ControlLabel} {...labelSize()}>
          {label}
        </Col>
        <Col {...fieldSize()}>
          {component()}
          {touched && error && <FormControl.Feedback>{error}</FormControl.Feedback>}
          {help && <HelpBlock>{help}</HelpBlock>}
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
        showResource={this.state.showResource}
        locale={this.props.locale}
      />
    );
  }
}

Resource.propTypes = {
  'field': React.PropTypes.object,
  'size': React.PropTypes.string,
  'static': React.PropTypes.bool,
  'locale': React.PropTypes.object
};
Resource.defaultProps = {};

export default Resource;
