import arrayMutators from 'final-form-arrays';
import PropTypes from 'prop-types';
import React from 'react';
import {Form as FinalForm} from 'react-final-form';
import _get from 'lodash/get';
import _omit from "lodash/omit";
import _map from "lodash/map";
import _isUndefined from "lodash/isUndefined";
import _filter from "lodash/filter";
import _isBoolean from "lodash/isBoolean";
import _isObject from "lodash/isObject";
import _isString from "lodash/isString";
import _isEmpty from "lodash/isEmpty";
import _isArray from "lodash/isArray";

const onSubmit = async (values) => {
  console.warn('Implement onSubmit handler');
  console.warn(values);
};


class ContextWrapper extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.checkDisabled = this.checkDisabled.bind(this);
    this.checker = this.checker.bind(this);
    this.checkHidden = this.checkHidden.bind(this);
    this.checkShow = this.checkShow.bind(this);
  }

  static childContextTypes = {
    getProp: PropTypes.func.isRequired,
    checkHidden: PropTypes.func.isRequired,
    checkShow: PropTypes.func.isRequired,
    isStatic: PropTypes.bool.isRequired
  };

  getChildContext() {
    return {
      getProp: name => _get(this.props, name, null),
      checkHidden: this.checkHidden,
      checkShow: this.checkShow,
      isStatic: this.props.static
    };
  }

  checker(args, parent) {
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
          result = this.checker(field);
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
        value = _get(this.props.values, `${parent}.${args.field}`, _get(this.props.values, `${args.field}`, _get(this.props.initialValues, [args.field])));
      } else {
        value = _get(this.props.values, args.field, _get(this.props.initialValues, [args.field]));
      }

      if (!_isUndefined(args.value)) {
        if (!value && _isUndefined(args.logical)) {
          return false;
        } else if (_isArray(args.value)) {
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
      const value = _get(this.props.values, args.field, _get(this.props.initialValues, [args.field]));
      return (value !== '');
    }
  }

  checkDisabled(args, parent) {
    if (_isArray(args)) {
      const check = _filter(args, item => this.checker(item, parent));
      return (_isArray(check) && check.length === args.length);
    }
    return this.checker(args, parent);
  }

  checkHidden(args, parent) {
    return this.checkDisabled(args(this.props.values, parent), parent);
  }

  checkShow(args, parent) {
    return this.checkDisabled(args(this.props.values, parent), parent);
  }

  render() {
    return (this.props.children);
  }
}
ContextWrapper.propTypes = {
  children: PropTypes.object,
  'static': PropTypes.bool,
  values: PropTypes.object,
  initialValues: PropTypes.object
};

ContextWrapper.defaultProps = {
  'static': false
};

class FormObj extends React.Component {
  render() {
    return (<FinalForm
      onSubmit={this.props.onSubmit || onSubmit}
      validate={this.props.validate || (() => { })}
      initialValues={this.props.initialValues || {}}
      mutators={{
        ...arrayMutators
      }}
      render={({handleSubmit, ...rest}) => {
        return (
          <ContextWrapper {..._omit(this.props, ['onSubmit', 'validate', 'initialValues'])} {...rest} >
            <form onSubmit={handleSubmit} className={this.props.className}>
              {this.props.children}
            </form>
          </ContextWrapper>);
      }} />);
  }
}

FormObj.propTypes = {
  initialValues: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSubmit: PropTypes.func,
  validate: PropTypes.func,
  className: PropTypes.func
};

export default FormObj;
