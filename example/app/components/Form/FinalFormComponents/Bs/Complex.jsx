import PropTypes from 'prop-types';
import _clone from 'lodash/clone';
import _get from 'lodash/get';
import _has from 'lodash/has';
import React from 'react';
import {FieldArray} from 'react-final-form-arrays';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import _isFunction from 'lodash/isFunction';
import _isArray from 'lodash/isArray';

class Complex extends React.Component {

  constructor() {
    super();
    this.renderComplex = this.renderComplex.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.state = {
      collapsed: null
    };
  }

  renderChildren(children, name, count, remove, move, complexIndex, removeBtn, size, staticField, disabled) {
    const buttons = () => {
      const returnButtons = [];
      if (staticField !== true) {
        if (complexIndex > 0 && count > 1) {
          returnButtons.push(
            <Button key={2}
              onClick={() => move(complexIndex, complexIndex - 1)}
              bsStyle={_get(this.props.moveBtn, 'bsStyle', 'default')}
              bsSize={_get(this.props.moveBtn, 'bsSize', undefined)}
              disabled={disabled}
              type="button"
            >
              <i className="fa fa-chevron-up" />
            </Button>
          );
        }
        if (count > 1 && complexIndex < count - 1) {
          returnButtons.push(
            <Button key={3}
              onClick={() => move(complexIndex, complexIndex + 1)}
              bsStyle={_get(this.props.moveBtn, 'bsStyle', 'default')}
              bsSize={_get(this.props.moveBtn, 'bsSize', undefined)}
              disabled={disabled}
              type="button"
            >
              <i className="fa fa-chevron-down" />
            </Button>
          );
        }

        returnButtons.push(
          <Button key={1}
            onClick={() => remove(complexIndex)}
            bsStyle={_get(this.props.removeBtn, 'bsStyle', 'danger')}
            bsSize={_get(this.props.removeBtn, 'bsSize', undefined)}
            className={_get(this.props.removeBtn, 'className', '')}
            title={_get(this.props.removeBtn, 'title', '')}
            disabled={disabled}
            type="button"
          >
            <i className="fa fa-trash" />
          </Button>
        );
      }
      return returnButtons;
    };

    const {header, footer} = _get(this.props, 'panel', {});
    const headerDiv = (<div className="clearfix">
      <ButtonToolbar>
        {buttons()}
      </ButtonToolbar>
      {header}
    </div>);


    const component = () => {
      if (this.props.render) {
        return this.props.render(name);
      }

      return React.Children.map(this.props.children, child =>
        React.cloneElement(child, {name: `${name}.${child.props.name}`, parent: name}));
    };

    return (
      <Panel className="rfg-cmplx-btn-flds">
        <Panel.Heading>
          {headerDiv}
        </Panel.Heading>
        <Panel.Body>
          {component()}
        </Panel.Body>
        {footer && (<Panel.Footer>{footer}</Panel.Footer>)}
      </Panel>
    );
  }

  renderComplex(props) {
    const {fields, meta: {touched, error, submitError}} = props;
    const staticField = props.static;

    const thisSize = () => {
      if (this.props.size !== 'medium') {
        return ({bsSize: size});
      }
    };

    const labelSize = () => {
      if (_has(this.props, 'labelSize')) {
        return this.props.labelSize;
      }
      if (this.props.horizontal) {
        return {sm: 2};
      }
    };

    const fieldSize = () => {
      if (_has(this.props, 'fieldSize')) {
        return this.props.fieldSize;
      }
      if (this.props.horizontal) {
        return {sm: 10};
      }
    };

    const toggle = () => {
      let state = false;
      if (this.state.collapsed === null) {
        state = !(this.props.collapsed && this.props.collapsed === true);
      } else if (this.state.collapsed === false) {
        state = true;
      }
      this.setState({'collapsed': state}, () => {
        // this.props.formChange('itemsx', state);
      });
    };

    if (this.state.collapsed === true || (this.state.collapsed === null && this.props.collapsed && this.props.collapsed === true)) {
      return (
        <Row className="rfg-cmplx rfg-cmplx-collapsed">
          <Col componentClass={ControlLabel} {...labelSize()}>
            <Button type="button" onClick={toggle} bsStyle="link" {...thisSize()}>
              {'+ '}
              {this.props.label}
            </Button>
          </Col>
        </Row>
      );
    }

    let disabled = false;
    if (this.props && this.props.disabled && _isFunction(this.props.disabled)) {
      disabled = this.context.checkDisabled(this.props.disabled());
    }

    const renderAddButton = () => {
      if (_get(this.props, 'multiple', true) === true || fields.length === 0) {
        const bsStyle = () => {
          if (_get(this.props.addBtn, 'bsStyle') && _get(addBtn, 'bsStyle') !== 'default') {
            return ({bsStyle: _get(addBtn, 'bsStyle')});
          }
        };
        return (
          <div className="rfg-cmplx-btn-add">
            {staticField !== true && <Button type="button"
              onClick={() => fields.push({})}
              disabled={disabled}
              {...thisSize()}
              {...bsStyle()}
              className={_get(this.props.addBtn, 'className')}
            >
              {_get(this.props.addBtn, 'label', 'toevoegen')}</Button>
            }
            {touched && error && <span>{error}</span>}
          </div>
        );
      }
    };

    return (
      <Row className="rfg-cmplx rfg-cmplx-collapsed">
        <Col componentClass={ControlLabel} {...labelSize()}>
          <Button type="button" onClick={toggle} bsStyle="link" {...thisSize()}>
            {'- '}
            {this.props.label}
          </Button>
        </Col>
        <Col {...fieldSize()}>
          {fields.map((field, key) => {
            return (
              <div key={key} className="rfg-cmplx-fields">
                {this.renderChildren(children, field, fields.length, fields.remove, fields.move, key, removeBtn, size, staticField, disabled)}
              </div>
            );
          })}
          {renderAddButton()}
        </Col>
      </Row>
    );
  }

  render() {
    const {field, size} = this.props;

    if (this.props && this.props.hidden && _isFunction(this.props.hidden)) {
      if (this.context.checkHidden(this.props.hidden, _get(this.props, 'parent')) === true) {
        return null;
      }
    } else if (this.props && this.props.show && _isFunction(this.props.show)) {
      if (this.context.checkShow(this.props.show, _get(this.props, 'parent')) !== true) {
        return null;
      }
    }

    return (
      <FieldArray
        component={this.renderComplex}
        collapsed={this.state.collapsed}
        rerenderOnEveryChange={_get(this.props, 'rerenderOnEveryChange', false)}
      />
    );
  }
}

Complex.propTypes = {
  'size': PropTypes.string,
  'dispatch': PropTypes.func,
  'field': PropTypes.object,
  'static': PropTypes.bool,
  'locale': PropTypes.object,
  'horizontal': PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  show: PropTypes.func,
  hidden: PropTypes.func,
  disabled: PropTypes.func,
  collapsed: PropTypes.bool,
  render: PropTypes.func,
  moveBtn: PropTypes.object,
  removeBtn: PropTypes.object,
  addBtn: PropTypes.object,
  labelSize: PropTypes.object,
  fieldSize: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string
};
Complex.defaultProps = {};

Complex.contextTypes = {
  checkHidden: PropTypes.func,
  checkShow: PropTypes.func,
  checkDisabled: PropTypes.func,
  isStatic: PropTypes.bool
};

export default Complex;

