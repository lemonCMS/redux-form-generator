import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {FormGroup, ControlLabel, HelpBlock, Col, InputGroup} from 'react-bootstrap';


export default function connectToWrapper() {
  return (WrappedComponent) => {

    class Wrap extends Component {

      static propTypes = {
        'field': PropTypes.object.isRequired,
        'properties': PropTypes.object.isRequired,
        'size': PropTypes.string,
        'addField': PropTypes.func.isRequired,
        'static': PropTypes.bool
      };

      render() {
        const size = _.get(this.props.field, 'bsSize', this.props.size);

        const thisSize = () => {
          if (size !== 'medium') {
            return ({bsSize: size});
          }
        };

        const validationMsg = () => {
          if (this.props.properties.touched && this.props.properties.error) {
            return (<HelpBlock>{this.props.properties.error}</HelpBlock>);
          }

          if (_.has(this.props.field, 'helper')) {
            return (<HelpBlock>{this.props.field.helper}</HelpBlock>);
          }
        };

        const validationState = () => {
          if (this.props.properties.touched) {
            if (this.props.properties.error) {
              return 'error';
            } else if (this.props.properties.success) {
              return 'success';
            }
          }
        };

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

        // Input with appended stuff
        if (_.has(this.props.field, 'buttonBefore') || _.has(this.props.field, 'buttonAfter') || _.has(this.props.field, 'addonBefore') || _.has(this.props.field, 'addonAfter')) {
          return (
            <FormGroup validationState={validationState()} {...thisSize()}>
              <Col componentClass={ControlLabel} {...labelSize()}>
                {this.props.field.label}
              </Col>
              <Col {...fieldSize()}>
                <InputGroup>
                  {(() => {
                    if (_.has(this.props.field, 'addonBefore')) {
                      return (
                          <InputGroup.Addon>
                            {_.get(this.props.field, 'addonBefore')}
                          </InputGroup.Addon>
                      );
                    }
                  })()}

                  {(() => {
                    if (_.has(this.props.field, 'buttonBefore')) {
                      return (
                          <InputGroup.Button>
                            {this.props.addField(_.get(this.props.field, 'buttonBefore'), size)}
                          </InputGroup.Button>
                      );
                    }
                  })()}

                  <WrappedComponent {...this.props} />

                  {(() => {
                    if (_.has(this.props.field, 'buttonAfter')) {
                      return (
                          <InputGroup.Button>
                            {this.props.addField(_.get(this.props.field, 'buttonAfter'), size)}
                          </InputGroup.Button>
                      );
                    }
                  })()}

                  {(() => {
                    if (_.has(this.props.field, 'addonAfter')) {
                      return (
                          <InputGroup.Addon>
                            {_.get(this.props.field, 'addonAfter')}
                          </InputGroup.Addon>
                      );
                    }
                  })()}
                </InputGroup>
                {validationMsg()}
              </Col>
            </FormGroup>
          );
        }

        const label = () => {
          if (_.has(this.props, 'field.label')) {
            return (
                <Col componentClass={ControlLabel} {...labelSize()}>
                  {this.props.field.label}
                </Col>
            );
          }
        };

        return (
          <FormGroup validationState={validationState()} {...thisSize()}>
            {label()}
            <Col {...fieldSize()}>
              <WrappedComponent {...this.props} />
              {validationMsg()}
            </Col>
          </FormGroup>
        );
      }
    }
    return Wrap;
  };
}
