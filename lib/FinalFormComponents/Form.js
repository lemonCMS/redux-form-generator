(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "final-form-arrays", "prop-types", "react", "react-final-form", "lodash/get", "lodash/omit", "lodash/map", "lodash/isUndefined", "lodash/filter", "lodash/isBoolean", "lodash/isObject", "lodash/isString", "lodash/isEmpty", "lodash/isArray"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("final-form-arrays"), require("prop-types"), require("react"), require("react-final-form"), require("lodash/get"), require("lodash/omit"), require("lodash/map"), require("lodash/isUndefined"), require("lodash/filter"), require("lodash/isBoolean"), require("lodash/isObject"), require("lodash/isString"), require("lodash/isEmpty"), require("lodash/isArray"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.finalFormArrays, global.propTypes, global.react, global.reactFinalForm, global.get, global.omit, global.map, global.isUndefined, global.filter, global.isBoolean, global.isObject, global.isString, global.isEmpty, global.isArray);
    global.Form = mod.exports;
  }
})(this, function (_exports, _finalFormArrays, _propTypes, _react, _reactFinalForm, _get2, _omit2, _map2, _isUndefined2, _filter2, _isBoolean2, _isObject2, _isString2, _isEmpty2, _isArray2) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _finalFormArrays = _interopRequireDefault(_finalFormArrays);
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireDefault(_react);
  _get2 = _interopRequireDefault(_get2);
  _omit2 = _interopRequireDefault(_omit2);
  _map2 = _interopRequireDefault(_map2);
  _isUndefined2 = _interopRequireDefault(_isUndefined2);
  _filter2 = _interopRequireDefault(_filter2);
  _isBoolean2 = _interopRequireDefault(_isBoolean2);
  _isObject2 = _interopRequireDefault(_isObject2);
  _isString2 = _interopRequireDefault(_isString2);
  _isEmpty2 = _interopRequireDefault(_isEmpty2);
  _isArray2 = _interopRequireDefault(_isArray2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(values) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.warn('Implement onSubmit handler');
              console.warn(values);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var ContextWrapper =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ContextWrapper, _React$Component);

    function ContextWrapper(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      _this.checkDisabled = _this.checkDisabled.bind(_assertThisInitialized(_this));
      _this.checker = _this.checker.bind(_assertThisInitialized(_this));
      _this.checkHidden = _this.checkHidden.bind(_assertThisInitialized(_this));
      _this.checkShow = _this.checkShow.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = ContextWrapper.prototype;

    _proto.getChildContext = function getChildContext() {
      var _this2 = this;

      return {
        getProp: function getProp(name) {
          return (0, _get2["default"])(_this2.props, name, null);
        },
        checkHidden: this.checkHidden,
        checkShow: this.checkShow,
        isStatic: this.props["static"]
      };
    };

    _proto.checker = function checker(args, parent) {
      var _this3 = this;

      if ((0, _isString2["default"])(args)) {
        var words = (0, _filter2["default"])(args.split(/\s|\r?\n/));
        var i = 0;
        var field = {};
        var startField = 0;
        var operator = 'and';
        var result = true;
        var check = true;
        (0, _map2["default"])(words, function (word, index) {
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
            var indexOf = ['===', '<=', '>=', '!=='].indexOf(word);

            if (indexOf > -1) {
              field.logical = word;
            }
          } else if (index === startField + 3) {
            field.value = word;
            result = _this3.checker(field);
          } else if (index === startField + 4) {
            var _indexOf = ['and', 'or'].indexOf(word);

            if (_indexOf > -1) {
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
      } else if ((0, _isBoolean2["default"])(args)) {
        return args;
      } else if ((0, _isObject2["default"])(args)) {
        var value = null;

        if (parent !== undefined) {
          value = (0, _get2["default"])(this.props.values, parent + "." + args.field, (0, _get2["default"])(this.props.values, "" + args.field, (0, _get2["default"])(this.props.initialValues, [args.field])));
        } else {
          value = (0, _get2["default"])(this.props.values, args.field, (0, _get2["default"])(this.props.initialValues, [args.field]));
        }

        if (!(0, _isUndefined2["default"])(args.value)) {
          if (!value && (0, _isUndefined2["default"])(args.logical)) {
            return false;
          } else if ((0, _isArray2["default"])(args.value)) {
            if ((0, _isString2["default"])(value)) {
              value = [value];
            }

            var _check = (0, _filter2["default"])(args.value, function (item) {
              return value.indexOf(item) > -1;
            });

            if ((0, _isUndefined2["default"])(args.operator) || String(args.operator).toLowerCase() === 'or') {
              return (0, _isArray2["default"])(_check) && _check.length > 0;
            }

            return (0, _isArray2["default"])(_check) && _check.length === args.value.length;
          } else if ((0, _isArray2["default"])(value)) {
            if (value.indexOf(args.value) > -1) {
              return true;
            }
          } else if (args.logical) {
            if (args.value === 'null') {
              switch (args.logical) {
                default:
                case '===':
                  return (0, _isEmpty2["default"])(value);

                case '!==':
                  return !(0, _isEmpty2["default"])(value);
              }
            }

            switch (args.logical) {
              default:
              case '===':
                return args.value === value;

              case '!==':
                return args.value !== value;

              case '>=':
                return args.value >= value;

              case '<=':
                return args.value <= value;
            }
          } else if (args.value === value) {
            return true;
          }

          return false;
        }

        if (!(0, _isUndefined2["default"])(args.value_not)) {
          if (!value) return true;

          if (value) {
            if ((0, _isArray2["default"])(args.value_not)) {
              if ((0, _isString2["default"])(value)) {
                value = [value];
              }

              var _check2 = (0, _filter2["default"])(args.value_not, function (item) {
                return value.indexOf(item) > -1;
              });

              if ((0, _isUndefined2["default"])(args.operator) || String(args.operator).toLowerCase() === 'or') {
                return !((0, _isArray2["default"])(_check2) && _check2.length > 0);
              }

              return !((0, _isArray2["default"])(_check2) && _check2.length === args.value_not.length);
            } else if ((0, _isArray2["default"])(value)) {
              if (value.indexOf(args.value_not) > -1) {
                return false;
              }
            } else if (args.value_not === value) {
              return false;
            }
          }

          return true;
        }
      } else if ((0, _isString2["default"])(args)) {
        var _value = (0, _get2["default"])(this.props.values, args.field, (0, _get2["default"])(this.props.initialValues, [args.field]));

        return _value !== '';
      }
    };

    _proto.checkDisabled = function checkDisabled(args, parent) {
      var _this4 = this;

      if ((0, _isArray2["default"])(args)) {
        var check = (0, _filter2["default"])(args, function (item) {
          return _this4.checker(item, parent);
        });
        return (0, _isArray2["default"])(check) && check.length === args.length;
      }

      return this.checker(args, parent);
    };

    _proto.checkHidden = function checkHidden(args, parent) {
      return this.checkDisabled(args(this.props.values, parent), parent);
    };

    _proto.checkShow = function checkShow(args, parent) {
      return this.checkDisabled(args(this.props.values, parent), parent);
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return ContextWrapper;
  }(_react["default"].Component);

  _defineProperty(ContextWrapper, "childContextTypes", {
    getProp: _propTypes["default"].func.isRequired,
    checkHidden: _propTypes["default"].func.isRequired,
    checkShow: _propTypes["default"].func.isRequired,
    isStatic: _propTypes["default"].bool.isRequired
  });

  ContextWrapper.propTypes = {
    children: _propTypes["default"].object,
    'static': _propTypes["default"].bool,
    values: _propTypes["default"].object,
    initialValues: _propTypes["default"].object
  };
  ContextWrapper.defaultProps = {
    'static': false
  };

  var FormObj =
  /*#__PURE__*/
  function (_React$Component2) {
    _inheritsLoose(FormObj, _React$Component2);

    function FormObj() {
      return _React$Component2.apply(this, arguments) || this;
    }

    var _proto2 = FormObj.prototype;

    _proto2.render = function render() {
      var _this5 = this;

      return _react["default"].createElement(_reactFinalForm.Form, {
        onSubmit: this.props.onSubmit || onSubmit,
        validate: this.props.validate || function () {},
        initialValues: this.props.initialValues || {},
        mutators: Object.assign({}, _finalFormArrays["default"]),
        render: function render(_ref2) {
          var handleSubmit = _ref2.handleSubmit,
              rest = _objectWithoutPropertiesLoose(_ref2, ["handleSubmit"]);

          return _react["default"].createElement(ContextWrapper, _extends({}, (0, _omit2["default"])(_this5.props, ['onSubmit', 'validate', 'initialValues']), rest), _react["default"].createElement("form", {
            onSubmit: handleSubmit,
            className: _this5.props.className
          }, _this5.props.children));
        }
      });
    };

    return FormObj;
  }(_react["default"].Component);

  FormObj.propTypes = {
    initialValues: _propTypes["default"].object,
    children: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]),
    onSubmit: _propTypes["default"].func,
    validate: _propTypes["default"].func,
    className: _propTypes["default"].func
  };
  var _default = FormObj;
  _exports["default"] = _default;
});