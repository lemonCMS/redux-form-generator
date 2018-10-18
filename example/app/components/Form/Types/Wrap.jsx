import PropTypes from 'prop-types';
import React from 'react';
import _has from 'lodash/has';
import _map from 'lodash/map';
import _get from 'lodash/get';
import _pick from 'lodash/pick';
import _filter from 'lodash/filter';
import _isFunction from 'lodash/isFunction';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';

class Wrap extends React.Component {

  constructor() {
    super();
    this.input = {};
    this.custom = {};
    this.dropdownButton = this.dropdownButton.bind(this);
    this.dropDown = this.dropDown.bind(this);
    this.renderField = this.renderField.bind(this);
    this.options = this.options.bind(this);
  }

  options() {
    if (this.props.field.type === 'select') {
      return _map(_get(this.props.field, 'options', []), (option, key) => {
        return <option key={key} value={option.value}>{option.desc}</option>;
      });
    }
  }

  dropDown() {
    const menuItem = [];
    let dropDownTitle = null;
    _map(this.custom.items, (item, key) => {
      const select = async () => {
        await this.input.onBlur();
        await this.input.onChange(item.value);
        if (this.props.field.submit) {
          this.props.submit();
        }
      };

      if (item.hasOwnProperty('default')) {
        dropDownTitle = item.default;
        menuItem.push(<MenuItem key={key} onSelect={select}>{item.default}</MenuItem>);
        menuItem.push(<MenuItem key={key + '_div'} divider />);
      } else {
        if (this.input.value === item.value) {
          dropDownTitle = item.desc;
        }
        menuItem.push(<MenuItem key={key} onSelect={select}>{item.desc}</MenuItem>);
      }
    });
    return {dropDownTitle, menuItem};
  }


  dropdownButton(isStatic) {
    const {dropDownTitle, menuItem} = this.dropDown();
    const size = _get(this.props.field, 'bsSize', this.props.size);
    const thisSize = () => {
      if (size !== 'medium') {
        return ({bsSize: size});
      }
    };

    let disabled = false;
    if (this.props.field && this.props.field.disabled && _isFunction(this.props.field.disabled)) {
      disabled = this.props.checkDisabled(this.props.field.disabled());
    }

    if (isStatic === true || disabled === true) {
      return (
        <FormControl.Static>
          {dropDownTitle || _get(this.custom, 'placeholder')}
        </FormControl.Static>
      );
    }

    return (
      <DropdownButton key={this.input.name}
                      onClick={(event) => {
                        event.preventDefault();
                      }}
                      {...(this.props.field.addon ? {componentClass: InputGroup.Button} : {})}
                      {...thisSize()}
                      {...(_pick(this.props.field, ['bsStyle']))}
                      title={dropDownTitle || _get(this.custom, 'placeholder')}
                      id={'input-dropdown-addon' + this.input.name}>
        {menuItem}
      </DropdownButton>
    );
  }

  renderField(props) {
    const {input, label, help, meta: {touched, error, valid}, ...custom} = props;
    this.input = input;
    this.custom = custom;
    const size = _get(this.props.field, 'bsSize', this.props.size);
    if (this.props.field && this.props.field.hidden && _isFunction(this.props.field.hidden)) {
      if (this.props.checkHidden(this.props.field.hidden, _get(props, 'parent')) === true) {
        return null;
      }
    } else if (this.props.field && this.props.field.show && _isFunction(this.props.field.show)) {
      if (this.props.checkShow(this.props.field.show, _get(props, 'parent')) !== true) {
        return null;
      }
    }

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
    if (add.type === 'select') {
      add.componentClass = 'select';
    }

    if (custom.disabled && _isFunction(custom.disabled)) {
      add.disabled = this.props.checkDisabled(custom.disabled(), _get(props, 'parent'));
    }

    const component = () => {
      if (this.props.static === true || _get(this.props.field, 'static', false) === true) {
        const value = () => {
          if (props.type === 'select') {
            return _map(_filter(this.props.field.options, {value: this.input.value}), (item, key) => {
              return (<span key={key}>{item.desc}</span>);
            });
          }
          return this.input.value;
        };

        switch (props.type) {
          case 'dropDown':
            return this.dropdownButton(true);
          default: {
            return (
              <FormControl.Static>
                {value()}
              </FormControl.Static>);
          }
        }
      }

      switch (props.type) {
        case 'dropDown':
          return this.dropdownButton(false);
        case 'textarea':
          return (<FormControl
            componentClass="textarea"
            {...input}
            {...add}
          />);
        case 'select':
          return (<FormControl
            componentClass="textarea"
            {...input}
            {...add}
          >{this.options()}</FormControl>);
        default:
          return (<FormControl
            {...input}
            {...add}
          />);
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

    const buttonBefore = () => {
      if (_has(this.props.field, 'buttonBefore')) {
        if (this.props.field.buttonBefore.type === 'button') {
          return (<InputGroup.Button>{this.props.addField(this.props.field.buttonBefore, 1, size)}</InputGroup.Button>);
        }
        if (this.props.field.buttonBefore.type === 'dropDown') {
          return (this.props.addField(this.props.field.buttonBefore, 1, size));
        }
        return (<InputGroup.Button>{this.props.addField(this.props.field.buttonBefore, 1, size)}</InputGroup.Button>);
      }
    };

    const buttonAfter = () => {
      if (_has(this.props.field, 'buttonAfter')) {
        if (this.props.field.buttonAfter.type === 'button') {
          return (<InputGroup.Button>{this.props.addField(this.props.field.buttonAfter, 1, size)}</InputGroup.Button>);
        }
        if (this.props.field.buttonAfter.type === 'dropDown') {
          return (this.props.addField(this.props.field.buttonAfter, 1, size));
        }

        return (<InputGroup.Button>{this.props.addField(this.props.field.buttonAfter, 1, size)}</InputGroup.Button>);
      }
    };

    const addonBefore = () => {
      if (_has(this.props.field, 'addonBefore')) {
        return (<InputGroup.Addon>{_get(this.props.field, 'addonBefore')}</InputGroup.Addon>);
      }
    };

    const addonAfter = () => {
      if (_has(this.props.field, 'addonAfter')) {
        return (<InputGroup.Addon>{_get(this.props.field, 'addonAfter')}</InputGroup.Addon>);
      }
    };

    const getField = () => {
      if (_has(this.props.field, 'addonBefore')
        || _has(this.props.field, 'addonAfter')
        || _has(this.props.field, 'buttonBefore')
        || _has(this.props.field, 'buttonAfter')
      ) {
        return (
          <InputGroup>
            {buttonBefore()}
            {addonBefore()}
            {component()}
            {addonAfter()}
            {buttonAfter()}
          </InputGroup>
        );
      }

      return component();
    };

    if (this.props.field.type === 'dropDown' && !_has(this.props.field, 'label')) {
      return getField();
    }

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

Wrap.propTypes = {
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'field': PropTypes.object,
  'size': PropTypes.string,
  'submit': PropTypes.func,
  'addField': PropTypes.func,
  'static': PropTypes.bool,
  'horizontal': PropTypes.bool.isRequired
};
Wrap.defaultProps = {};

export default Wrap;
