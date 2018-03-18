import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _find from 'lodash/find';
import _map from 'lodash/map';
import _pick from 'lodash/pick';
import _isFunction from 'lodash/isFunction';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import {Field} from 'react-final-form';
import _omit from 'lodash/omit';

class Input extends React.Component {
  constructor() {
    super();
    this.renderComponent = this.renderComponent.bind(this);
    this.state = {
      value: '',
      menuItems: []
    };
    this.input = null;
    this.meta = null;
  }

  componentWillMount() {
    const menuItems = [];
    let dropDownTitle = _get(this.props.field, 'title', '');

    const change = (item) => {
      this.input.onChange(item.value);
      this.setState({title: item.desc});
    };

    _map(this.props.field.items, (item, key) => {
      if (item.hasOwnProperty('default')) {
        dropDownTitle = item.default;
        menuItems.push(<MenuItem key={key} onSelect={() => { change(item); }}>{item.default}</MenuItem>);
        menuItems.push(<MenuItem key={key + '_div'} divider />);
      } else {
        if (_get(this.meta, ['initial']) === item.value) {
          dropDownTitle = item.desc;
        }
        menuItems.push(<MenuItem key={key} onSelect={() => { change(item); }}>{item.desc}</MenuItem>);
      }
    });
    this.setState({title: dropDownTitle, menuItems});
  }

  renderComponent(props) {
    this.input = props.input;
    this.meta = props.meta;
    let defaultTitle = null;
    if (this.meta.initial !== undefined && this.input.value === this.meta.initial) {
      defaultTitle = _get(_find(props.items, {value: this.meta.initial}), 'desc', null);
    }

    if (this.props.field && this.props.field.hidden && _isFunction(this.props.field.hidden)) {
      if (this.props.checkHidden(this.props.field.hidden, _get(this.props.field, 'parent')) === true) {
        return null;
      }
    } else if (this.props.field && this.props.field.show && _isFunction(this.props.field.show)) {
      if (this.props.checkShow(this.props.field.show, _get(this.props.field, 'parent')) !== true) {
        return null;
      }
    }

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

    return (
      <DropdownButton
        componentClass={InputGroup.Button}
        {...thisSize()}
        type={'button'}
        pullRight
        {...(_pick(this.props.field, ['placeholder', 'bsStyle', 'onClick', 'onBlur', 'block', 'active', 'href', 'id', 'pullRight', 'dropup']))}
        disabled={disabled}
        title={this.state.title || defaultTitle}
      >
        {this.state.menuItems}
      </DropdownButton>
    );
  }

  render() {
    return (
      <Field
        component={this.renderComponent}
        {..._omit(this.props.field, ['hidden'])}
        size={this.props.size}
        checkDisabled={this.props.checkDisabled}
        checkHidden={this.props.checkHidden}
        checkShow={this.props.checkShow}
      />
    );
  }
}

Input.propTypes = {
  'field': PropTypes.object,
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'size': PropTypes.string
};
Input.defaultProps = {};

export default Input;
