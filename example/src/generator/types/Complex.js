import _ from 'lodash';
import React from 'react';
import {Row, Col, ControlLabel} from 'react-bootstrap';
// import {change, changeWithKey} from 'redux-form';

class Complex extends React.Component {

  constructor() {
    super();
    this.state = {
      children: [],
      collapsed: false,
    };
  }

  componentWillMount() {
    if (this.props.field && this.props.field.collapsed) {
      let state = false;
      if (this.props.field.collapsed === true) {
        state = true;
      }
      this.setState({'collapsed': state});
    }
  }

  render() {
    const labelSize = () => {
      if (_.has(this.props.field, 'labelSize')) {
        return this.props.field.labelSize;
      }

      return {sm: 2};
    };

    const fieldSize = () => {
      if (_.has(this.props.field, 'fieldSize')) {
        return this.props.field.fieldSize;
      }
      return {sm: 10};
    };

    const toggle = () => {
      let state = false;
      if (this.state.collapsed === false) {
        state = true;
      }
      this.setState({'collapsed': state});
    };

    if (this.state.collapsed === true) {
      return (
        <Row>
          <Col componentClass={ControlLabel} {...labelSize()}>
            <button type="button" onClick={toggle} className="btn btn-link">+</button>
            {this.props.field.label}
          </Col>
        </Row>
      );
    }

    return (
      <Row>
        <Col componentClass={ControlLabel} {...labelSize()}>
          <button type="button" onClick={toggle} className="btn btn-link">-</button>
          {this.props.field.label}
        </Col>
        <Col {...fieldSize()}>
          {this.props.properties.length > 0 && this.props.properties.map((child, index) =>
            <div key={index} className="redux-form-complex">
              {this.props.field.fields.length > 0 && this.props.field.fields.map((field, fieldIndex) => {
                const re = new RegExp(RegExp.quote(this.props.field.name + '.'), 'g');
                return (
                 <div key={fieldIndex}>
                   {this.props.addComplexField(field, this.props.size, child[field.name.replace(re, '')])}
                 </div>
                );
              })}
              <div className={_.get(this.props.field.removeBtn, 'wrapperClassName')}>
                <button type="button" className={'btn btn-danger ' + _.get(this.props.field.removeBtn, 'className')} onClick={() => {
                  this.props.properties.removeField(index);
                }}><i/> {this.props.field.removeBtn.label}
                </button>
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={() => this.props.properties.addField()}
            className={'btn btn-default ' + _.get(this.props.field.addBtn, 'className')}>
              {this.props.field.addBtn.label}
            </button>
        </Col>
      </Row>
    );
  }
}

Complex.propTypes = {
  properties: React.PropTypes.array,
  addComplexField: React.PropTypes.func,
  size: React.PropTypes.string,
  field: React.PropTypes.object
};
Complex.defaultProps = {};

export default Complex;
