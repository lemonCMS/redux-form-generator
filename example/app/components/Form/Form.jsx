import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _has from 'lodash/has';
import _clone from 'lodash/clone';
import _isEmpty from 'lodash/isEmpty';
import _filter from 'lodash/filter';
import _map from 'lodash/map';
import _omit from 'lodash/omit';
import _isUndefined from 'lodash/isUndefined';
import _isEqual from 'lodash/isEqual';
import _isBoolean from 'lodash/isBoolean';
import _isString from 'lodash/isString';
import _isArray from 'lodash/isArray';
import _isObject from 'lodash/isObject';
import _pick from 'lodash/pick';
import _isFunction from 'lodash/isFunction';
import Form from 'react-bootstrap/lib/Form';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import {connect} from 'react-redux';
import {reduxForm, SubmissionError} from 'redux-form';
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
import ContentEditable from './Types/ContentEditable';
import locales from './locales';
import Pending from './Pending';

let locale = {};

const InnerForm = (props, context, context2) => {
  const {handleSubmit} = props;
  if (typeof props.locale === 'string') {
    if (!locales[props.locale]) {
      console.warn(`Redux form generator locale ${props.locale} not implemented`);
    } else {
      locale = locales[props.locale];
    }
  } else if (typeof props.locale === 'object') {
    locale = props.locale;
  } else {
    locale = locales['en_US'];
  }

  if (locale.default !== undefined) {
    locale = locale.default;
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
              clonedChild.parent = parent;
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

    if (field.row.hidden && _isFunction(field.row.hidden)) {
      if (checkHidden(field.row.hidden, _get(field, 'parent', null)) === true) {
        return null;
      }
    } else if (field.row.show && _isFunction(field.row.show)) {
      if (checkShow(field.row.show, _get(field, 'parent', null)) !== true) {
        return null;
      }
    }
    return (
      <Row key={key}>
        {col(field.row.col, size, _get(field, 'parent', null))}
      </Row>
    );
  };

  const checker = (args, parent) => {
    if (_isString(args)) {
      const words = _filter(args.split(/\s|\r?\n/));
      let i = 0;
      let field = {};
      let startField = 0;
      let operator = 'and';
      let result = true;
      let check = true;
      _map(words, (word, index) => {
        if (word === 'field') {
          i += 1;
          startField = index;

          if (index > 0) {
            switch (operator) {
              default:
              case 'and':
                check = check && result;
                break;
              case 'or':
                check = check || result;
                break;
            }
            operator = null;
            field = {};
          }
        }

        if (index === startField + 1) {
          // Field name
          field.field = word;
        } else if (index === startField + 2) {
          const indexOf = ['===', '<=', '>=', '!=='].indexOf(word);
          if (indexOf > -1) {
            field.logical = word;
          }
        } else if (index === startField + 3) {
          field.value = word;
          result = checker(field);
        } else if (index === startField + 4) {
          const indexOf = ['and', 'or'].indexOf(word);
          if (indexOf > -1) {
            operator = word;
          } else {
            operator = 'and';
          }
        }
      });

      if (i > 1) {
        switch (operator) {
          default:
          case 'and':
            check = check && result;
            break;
          case 'or':
            check = check || result;
            break;
        }
      }
      return check;

    } else if (_isBoolean(args)) {
      return args;
    } else if (_isObject(args)) {
      let value = null;

      if (parent !== undefined) {
        value = _get(props.formValues, `${parent}.${args.field}`, _get(props.formValues, `${args.field}`, _get(props.initialValues, [args.field])));
      } else {
        value = _get(props.formValues, args.field, _get(props.initialValues, [args.field]));
      }

      if (!_isUndefined(args.value)) {
        if (!value && _isUndefined(args.logical)) {
          return false;
        }
        else if (_isArray(args.value)) {
          if (_isString(value)) {
            value = [value];
          }
          const check = _filter(args.value, (item) => {
            return (value.indexOf(item) > -1);
          });

          if (_isUndefined(args.operator) || String(args.operator).toLowerCase() === 'or') {
            return (_isArray(check) && check.length > 0);
          }
          return (_isArray(check) && check.length === args.value.length);
        } else if (_isArray(value)) {
          if (value.indexOf(args.value) > -1) {
            return true;
          }
        } else if (args.logical) {
          if (args.value === 'null') {
            switch (args.logical) {
              default:
              case '===':
                return (_isEmpty(value));
              case '!==':
                return (!_isEmpty(value));
            }
          }

          switch (args.logical) {
            default:
            case '===':
              return (args.value === value);
            case '!==':
              return (args.value !== value);
            case '>=':
              return (args.value >= value);
            case '<=':
              return (args.value <= value);
          }
        } else if (args.value === value) {
          return true;
        }
        return false;
      }

      if (!_isUndefined(args.value_not)) {
        if (!value) return true;
        if (value) {
          if (_isArray(args.value_not)) {
            if (_isString(value)) {
              value = [value];
            }
            const check = _filter(args.value_not, (item) => {
              return (value.indexOf(item) > -1);
            });
            if (_isUndefined(args.operator) || String(args.operator).toLowerCase() === 'or') {
              return !(_isArray(check) && check.length > 0);
            }
            return !(_isArray(check) && check.length === args.value_not.length);

          } else if (_isArray(value)) {
            if (value.indexOf(args.value_not) > -1) {
              return false;
            }
          } else if (args.value_not === value) {
            return false;
          }
        }
        return true;
      }
    } else if (_isString(args)) {
      const value = _get(props.formValues, args.field, _get(props.initialValues, [args.field]));
      return (value !== '');
    }
  };

  const checkDisabled = (args, parent) => {
    if (_isArray(args)) {
      const check = _filter(args, item => checker(item, parent));
      return (_isArray(check) && check.length === args.length);
    }
    return checker(args, parent);
  };

  const checkHidden = (args, parent) => {
    return checkDisabled(args(props.formValues, parent), parent);
  };

  const checkShow = (args, parent) => {
    return checkDisabled(args(props.formValues, parent), parent);
  };

  const buttonToolbar = (field, key, size) => {
    const toolbar = field.buttonToolbar;
    const thisSize = _get(toolbar, 'bsSize', size);
    // Hide fields that are only visible in static mode
    if (props.static !== true && toolbar.showOnStatic === true) {
      return false;
    }
    // Hide fields that are only visible in edit mode
    if (props.static === true && toolbar.hideOnStatic === true) {
      return false;
    }

    return (
      <Row key={key}>
        <Col {..._pick(toolbar, ['lg', 'lgHidden', 'lgOffset', 'lgPull', 'lgPush',
          'md', 'mdHidden', 'mdOffset', 'mdPull', 'mdPush',
          'sm', 'smHidden', 'smOffset', 'smPull', 'smPush',
          'xs', 'xsHidden', 'xsOffset', 'xsPull', 'xsPush',
          'componentClass', 'bsClass'
        ])}>
          <ButtonToolbar {..._pick(toolbar, ['className'])}>
            {_map(toolbar.children, (child, keyCol) => {
              return addField(child, keyCol, thisSize);
            })}
          </ButtonToolbar>
        </Col>
      </Row>
    );
  };

  const addField = (field, key, size) => {
    if (Object.prototype.hasOwnProperty.call(field, 'row')) {
      return row(field, key, size);
    }

    if (Object.prototype.hasOwnProperty.call(field, 'buttonToolbar')) {
      return buttonToolbar(field, key, size);
    }

    if (field.showOnStatic && !props.static) {
      return;
    }

    if (field.hideOnStatic && props.static) {
      return;
    }


    const spread = {
      checkDisabled,
      checkHidden,
      checkShow,
      locale,
      key,
      field,
      size,
      dispatch: props.dispatch,
      static: props.static,
      horizontal: props.horizontal,
      submit: props.submit,
      addField: addField
    };

    switch (field.type) {
      case 'resource':
        return (<Resource {...spread} />);
      case 'checkbox':
        return (<Checkbox {...spread} />);
      case 'plupload':
        return (<Plupload {...spread} />);
      case 'select':
        return (<Select {...spread} />);
      case 'radio':
        return (<Radio {...spread} />);
      case 'contentEditable':
        return (<ContentEditable {...spread} />);
      case 'complex':
        return (<Complex {...spread} formName={props.name} />);
      case 'submit':
      case 'button':
        return (<Button {...spread} />);
      case 'rte':
        return (<Rte {...spread} />);
      case 'plain':
        return (<Plain {...spread} />);
      case 'jsx':
      case 'react':
        return <div key={key}>{field.component()}</div>;
      case 'success':
      case 'error': {
        return (<Message locale={locale}
                         key={key}
                         field={field}
                         {...props}
                         size={size}
                         checkDisabled={checkDisabled}
        />);
      }
      case 'datetime':
        return (<DateTime {...spread} />);
      default:
        return (<Input {...spread} />);
    }
  };

  const wrap = (field, key, size) => {
    // Hide fields that are only visible in static mode
    if (!props.static && !!field.showOnStatic) {
      return false;
    }
    // Hide fields that are only visible in edit mode
    if (!!props.static && !!field.hideOnStatic) {
      return false;
    }

    if (field.hidden && _isFunction(field.hidden)) {
      if (checkHidden(field.hidden) === true) {
        return null;
      }
    } else if (field.show && _isFunction(field.show)) {
      if (checkShow(field.show) !== true) {
        return null;
      }
    }


    return (
      <div key={key}>
        {_map(field.wrap, (child, keyField) => {
          return addField(child, keyField, size);
        })}
      </div>
    );
  };

  const fields = () => {
    return _map(props.fields, (field, key) => {
      const size = _get(field, 'bsSize', null);
      if (Object.prototype.hasOwnProperty.call(field, 'type')) {
        return addField(field, key, size);
      } else if (Object.prototype.hasOwnProperty.call(field, 'row')) {
        return row(field, key, size);
      } else if (Object.prototype.hasOwnProperty.call(field, 'wrap')) {
        return wrap(field, key, size);
      } else if (Object.prototype.hasOwnProperty.call(field, 'buttonToolbar')) {
        return buttonToolbar(field, key, size);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} horizontal={props.horizontal}>
      <Pending pending={props.submitting}>
        {fields()}
      </Pending>
    </Form>
  );
};

class RenderForm extends React.Component {

  constructor() {
    super();
    this.validate = this.validate.bind(this);
    this.state = {
      validation: {}
    };
  }

  validate(path, type) {
    const state = this.state.validation;
    state.path = type;
    this.setState({validation: state}, () => {
    });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.reInitializeOn && this.props.reInitializeOn !== nextProps.reInitializeOn) {
      return true;
    }

    if (!_isEqual(nextProps.initialValues, this.props.initialValues)) {
      return true;
    }

    return (_get(this.props, 'static', false) !== _get(nextProps, 'static', false));
  }

  render() {
    const DynForm = reduxForm({
      form: this.props.name, // a unique identifier for this form
      validate: (values) => {
        if (_has(this.props, 'validate')) {
          return this.props.validate(values);
        }
        return {};
      },
      destroyOnUnmount: (_get(this.props, 'destroyOnUnmount', true)),
    })(connect((state, form) => {
      return {
        formValues: _get(state, `${form.formReducer}.${form.name}.values`, {})
      };
    })(InnerForm));
    return (<DynForm
      fields={this.props.fields}
      horizontal={this.props.horizontal || false}
      dispatch={this.props.dispatch}
      initialValues={Object.assign({}, this.props.initialValues)}
      name={this.props.name}
      formReducer={_get(this.props, 'formReducer', 'form')}
      static={this.props.static}
      locale={this.props.locale}
      setValidation={this.validate}
      onSubmit={(data, dispatch) => {
        if (Object.constructor.hasOwnProperty.call(this.props, 'onSubmit')) {
          return this.props.onSubmit(data, dispatch).catch((res) => {
            throw new SubmissionError(res.errors);
          })
          .then(() => {
            return new Promise((resolve) => {
              resolve();
            });
          });
        }

      }}
    />);
  }
}

RenderForm.propTypes = {
  'name': PropTypes.string.isRequired,
  'horizontal': PropTypes.bool,
  'fields': PropTypes.array.isRequired,
  'initialValues': PropTypes.object,
  'dispatch': PropTypes.func.isRequired,
  'onSubmit': PropTypes.func,
  'validate': PropTypes.func,
  'static': PropTypes.bool,
  'reInitializeOn': PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool
  ]),
  'locale': PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ])
};

export default connect(() => ({})
  , (dispatch) => {
    return {dispatch};
  })(RenderForm);

