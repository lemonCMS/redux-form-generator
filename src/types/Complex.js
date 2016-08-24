import _ from 'lodash';
import React from 'react';
import {Row, Col, ControlLabel} from 'react-bootstrap';
// import {change, changeWithKey} from 'redux-form';

class Complex extends React.Component {

  constructor() {
    super();
    this.state = {
      children: []
    };
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

    return (
      <Row>
        <Col componentClass={ControlLabel} {...labelSize()}>{this.props.field.label}</Col>
        <Col {...fieldSize()}>
          {this.props.static === false &&
            <button type="button" onClick={() => this.props.properties.addField({})}
                  className={'btn btn-default ' + _.get(this.props.field.addBtn, 'className')}>
              {this.props.field.addBtn.label}
            </button>
          }
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

              {this.props.static === false &&
                <div className={_.get(this.props.field.removeBtn, 'wrapperClassName')}>
                  <button type="button" className={'btn btn-danger ' + _.get(this.props.field.removeBtn, 'className')} onClick={() => {
                    this.props.properties.removeField(index);
                  }}><i/> {this.props.field.removeBtn.label}
                  </button>
                </div>
              }
            </div>
          )}
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
