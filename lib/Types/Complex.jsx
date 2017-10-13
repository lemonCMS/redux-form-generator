import PropTypes from 'prop-types';
import _clone from 'lodash/clone';
import _get from 'lodash/get';
import _has from 'lodash/has';
import React from 'react';
import {change, FieldArray} from 'redux-form';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import _isFunction from 'lodash/isFunction';

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
                    bsStyle={_get(this.props.field.moveBtn, 'bsStyle', 'default')}
                    bsSize={_get(this.props.field.moveBtn, 'bsSize', undefined)}
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
                    bsStyle={_get(this.props.field.moveBtn, 'bsStyle', 'default')}
                    bsSize={_get(this.props.field.moveBtn, 'bsSize', undefined)}
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
                  bsStyle={_get(this.props.field.removeBtn, 'bsStyle', 'danger')}
                  bsSize={_get(this.props.field.removeBtn, 'bsSize', undefined)}
                  className={_get(this.props.field.removeBtn, 'className', '')}
                  title={_get(this.props.field.removeBtn, 'title', '')}
                  disabled={disabled}
                  type="button"
          >
            <i className="fa fa-trash" />
          </Button>
        );
      }
      return returnButtons;
    };

    const {header, footer} = _get(this.props.field, 'panel', {});
    const headerDiv = (<div className="clearfix">
      <ButtonToolbar>
        {buttons()}
      </ButtonToolbar>
      {header}
    </div>);

    return (
      <Panel className="rfg-cmplx-btn-flds" header={headerDiv} footer={footer}>
        {children.map((child, key) => {
          const clone = _clone(child);
          clone.name = `${name}.${child.name}`;
          clone.parent = `${name}`;
          return this.props.addField(clone, key, size);
        })}
      </Panel>
    );
  }

  renderComplex(props) {
    const {fields, locale, dispatch, removeBtn, addBtn, size, label, children, meta: {touched, error}} = props;
    const staticField = props.static;

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

    const toggle = () => {
      let state = false;
      if (this.state.collapsed === null) {
        state = !(this.props.field.collapsed && this.props.field.collapsed === true);
      } else if (this.state.collapsed === false) {
        state = true;
      }
      const complexName = `${fields.name}_collapsed`;

      this.setState({'collapsed': state}, () => {
        dispatch(change(this.props.formName, complexName, state));
      });
    };

    if (this.state.collapsed === true || (this.state.collapsed === null && this.props.field.collapsed && this.props.field.collapsed === true)) {
      return (
        <Row className="rfg-cmplx rfg-cmplx-collapsed">
          <Col componentClass={ControlLabel} {...labelSize()}>
            <Button type="button" onClick={toggle} bsStyle="link" {...thisSize()}>
              {'+ '}
              {label}
            </Button>
          </Col>
        </Row>
      );
    }

    let disabled = false;
    if (this.props.field && this.props.field.disabled && _isFunction(this.props.field.disabled)) {
      disabled = this.props.checkDisabled(this.props.field.disabled());
    }


    const renderAddButton = () => {
      if (_get(this.props.field, 'multiple', true) === true || fields.length === 0) {
        const bsStyle = () => {
          if (_get(addBtn, 'bsStyle') && _get(addBtn, 'bsStyle') !== 'default') {
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
                                             className={_get(addBtn, 'className')}
            >
              {_get(addBtn, 'label', locale.complex.buttonAdd)}</Button>
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
            {label}
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

    if (this.props.field && this.props.field.hidden && _isFunction(this.props.field.hidden)) {
      if (this.props.checkHidden(this.props.field.hidden(), _get(this.props.field, 'parent')) === true) {
        return null;
      }
    } else if (this.props.field && this.props.field.show && _isFunction(this.props.field.show)) {
      if (this.props.checkShow(this.props.field.show(), _get(this.props.field, 'parent')) !== true) {
        return null;
      }
    }

    return (
      <FieldArray
        name={field.name}
        label={field.label}
        addBtn={field.addBtn}
        removeBtn={field.removeBtn}
        children={field.children}
        dispatch={this.props.dispatch}
        size={_get(field, 'bsSize', size)}
        component={this.renderComplex}
        collapsed={this.state.collapsed}
        static={this.props.static || field.static}
        locale={this.props.locale}
        rerenderOnEveryChange={_get(field, 'rerenderOnEveryChange', false)}
      />
    );
  }
}

Complex.propTypes = {
  'checkDisabled': PropTypes.func,
  'checkHidden': PropTypes.func,
  'checkShow': PropTypes.func,
  'size': PropTypes.string,
  'dispatch': PropTypes.func,
  'addField': PropTypes.func,
  'field': PropTypes.object,
  'formName': PropTypes.string,
  'static': PropTypes.bool,
  'locale': PropTypes.object,
  'horizontal': PropTypes.bool.isRequired
};
Complex.defaultProps = {};

export default Complex;

