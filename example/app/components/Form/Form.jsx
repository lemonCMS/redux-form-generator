import React from 'react';
import _get from 'lodash/get';
import _has from 'lodash/has';
import _clone from 'lodash/clone';
import _isEmpty from 'lodash/isEmpty';
import _find from 'lodash/find';
import _map from 'lodash/map';
import _omit from 'lodash/omit';
import _isEqual from 'lodash/isEqual';
import _isBoolean from 'lodash/isBoolean';
import _isString from 'lodash/isString';
import _isObject from 'lodash/isObject';
import Form from 'react-bootstrap/lib/Form';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import Input from './Types/Input';
import Plupload from './Types/Plupload';
import Checkbox from './Types/Checkbox';
import DateTime from './Types/DateTime';
import Radio from './Types/Radio';
import Select from './Types/Select';
import Button from './Types/Button';
import Rte from './Types/Rte';
import Resource from './Types/Resource';
import Message from './Types/Message';
import Complex from './Types/Complex';
import Plain from './Types/Plain';
import locales from './locales';

let locale = {};

const InnerForm = (props) => {
  const {handleSubmit} = props;

  if (typeof props.locale === 'string') {
    if (!locales[props.locale]) {
      console.warn(`Redux form generator locale ${props.locale} not implemented`);
    } else {
      locale = locales[props.locale];
    }
  }

  if (typeof props.locale === 'object') {
    locale = props.locale;
  }

  const col = (cols, size, parent) => {
    return _map(cols, (colItem, key) => {
      const thisSize = _get(colItem, 'bsSize', size);

      // Hide fields that are only visible in static mode
      if (!props.static && !!colItem.showOnStatic) {
        return false;
      }
      // Hide fields that are only visible in edit mode
      if (!!props.static && !!colItem.hideOnStatic) {
        return false;
      }

      return (
        <Col key={key} {..._omit(colItem, ['children', 'showOnStatic', 'hideOnStatic'])}>
          {_map(_omit(colItem.children, ['hideOnStatic']), (child, keyCol) => {
            const clonedChild = _clone(child);
            if (parent !== null) {
              clonedChild.name = `${parent}.${child.name}`;
            }
            return (
              addField(clonedChild, keyCol, thisSize)
            );
          })}
        </Col>
      );
    });
  };

  const row = (field, key, size) => {
    // Hide fields that are only visible in static mode
    if (!props.static && !!field.row.showOnStatic) {
      return false;
    }
    // Hide fields that are only visible in edit mode
    if (!!props.static && !!field.row.hideOnStatic) {
      return false;
    }

    return (
      <Row key={key}>
        {_map(field, (rowItem, keyRow) => {
          const thisSize = _get(rowItem, 'bsSize', size);
          return (
            <div key={keyRow}>
              {col(rowItem.col, thisSize, _get(field, 'parent', null))}
            </div>
          );
        })}
      </Row>
    );
  };

  const addField = (field, key, size) => {
    if (Object.prototype.hasOwnProperty.call(field, 'row')) {
      return row(field, key, size);
    }

    switch (field.type) {
      case 'resource':
        return (<Resource locale={locale} key={key} field={field} dispatch={props.dispatch} size={size} static={props.static}/>);
      case 'checkbox':
        return (<Checkbox locale={locale} key={key} field={field} dispatch={props.dispatch} size={size} static={props.static}/>);
      case 'plupload':
        return (<Plupload locale={locale} key={key} field={field} dispatch={props.dispatch} size={size} static={props.static}/>);
      case 'select':
        return (<Select locale={locale} key={key} field={field} size={size} static={props.static}/>);
      case 'radio':
        return (<Radio locale={locale} key={key} field={field} dispatch={props.dispatch} size={size} static={props.static}/>);
      case 'complex':
        return (<Complex locale={locale} key={key} field={field} dispatch={props.dispatch} size={size} addField={addField} formName={props.name} static={props.static}/>);
      case 'submit':
      case 'button':
        return (<Button locale={locale} key={key} field={field} dispatch={props.dispatch} size={size} static={props.static}/>);
      case 'rte':
        return (<Rte locale={locale} key={key} field={field} size={size} static={props.static}/>);
      case 'plain':
        return (<Plain key={key} field={field} size={size}/>);
      case 'jsx':
      case 'react':
        return field.component();
      case 'success':
      case 'error':
        return (<Message locale={locale}
                         key={key}
                         field={field}
                         pristine={props.pristine}
                         dirty={props.dirty}
                         invalid={props.invalid}
                         valid={props.valid}
                         submitFailed={props.submitFailed}
                         submitSucceeded={props.submitSucceeded}
                         static={props.static}
                         size={size}
        />);
      case 'datetime':
        return (<DateTime locale={locale} key={key} field={field} size={size} static={props.static}/>);
      default:
        return (<Input checkDisabled={checkDisabled} locale={locale} key={key} field={field} size={size} addField={addField} static={props.static}/>);
    }
  };

  const fields = () => {
    return _map(props.fields, (field, key) => {
      const size = _get(field, 'bsSize', null);
      if (Object.prototype.hasOwnProperty.call(field, 'type')) {
        return addField(field, key, size);
      } else if (Object.prototype.hasOwnProperty.call(field, 'row')) {
        return row(field, key, size);
      }
    });
  };

  const checkDisabled = (args) => {
    if (_.isBoolean(args)) {
      return args
    } else if (_isObject(args)) {
      const value = _get(props.formValues, args.field, _get(props.initialValues, [args.field]));
      if (value === args.value) {
        return true;
      }
      return false;
    } else if (_isString(args)) {
      const value = _get(props.formValues, args.field, _get(props.initialValues, [args.field]));
      if (!isEmpty(value)) {
        return true;
      }

      return false;
    }
  }

  return (
    <Form onSubmit={handleSubmit} horizontal>
      {fields()}
    </Form>
  );
};

class RenderForm extends React.Component {

   shouldComponentUpdate(nextProps) {
    if (!_isEqual(nextProps.initialValues, this.props.initialValues)) {
      return true;
    }

    let update = false;
    if (nextProps.updateOn && nextProps.updateOn.length > 0) {
      _map(nextProps.updateOn, (field) => {
        const initialValue = _get(this.props, ['initialValues', field]);
        const thisValue = _get(this.props, ['values', field]);
        const nextValue = _get(nextProps, ['values', field]);
        if (nextValue !== undefined && nextValue !== thisValue) {
          update = false;
        }
      });
    }
    return update;
  }

  render() {
    const DynForm = reduxForm({
      form: this.props.name, // a unique identifier for this form
      validate: (values)=> {
        if (_has(this.props, 'validate')) {
          return this.props.validate(values);
        }
        return {};
      },
      destroyOnUnmount: _get(this.props, 'destroyOnUnmount', false),
    })(connect((state, form) => {
      return {
        formValues: _get(state, `${form.formReducer}.${form.name}.values`, {})
      };
    })(InnerForm));
    return (<DynForm
      fields={this.props.fields}
      dispatch={this.props.dispatch}
      initialValues={this.props.initialValues}
      name={this.props.name}
      formReducer={_get(this.props, 'formReducer' , 'form')}
      static={this.props.static}
      locale={this.props.locale}
      formValues={this.props.formValues}
      onSubmit={(data, dispatch) => {
        if (Object.constructor.hasOwnProperty.call(this.props, 'onSubmit')) {
          return this.props.onSubmit(data, dispatch);
        }
      }}
    />);
  }
}

RenderForm.propTypes = {
  'name': React.PropTypes.string.isRequired,
  'fields': React.PropTypes.array.isRequired,
  'formValues': React.PropTypes.array.isRequired,
  'initialValues': React.PropTypes.object,
  'dispatch': React.PropTypes.func.isRequired,
  'onSubmit': React.PropTypes.func,
  'updateOn': React.PropTypes.array,
  'static': React.PropTypes.bool,
  'destroyOnUnmount': React.PropTypes.bool,
  'locale': React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ])
};


export default connect(() => ({})
, (dispatch) => {
  return {dispatch};
})(RenderForm);

