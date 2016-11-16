'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = mapDispatchToProps;
exports.filterFields = filterFields;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

// deep filter, get all values of an attribute in a deep array
function filterFields(fields) {
  var fieldName = arguments.length <= 1 || arguments[1] === undefined ? 'name' : arguments[1];
  var extra = arguments.length <= 2 || arguments[2] === undefined ? ['page'] : arguments[2];

  var fieldNames = extra;
  var mapper = function mapper(allFields) {
    _lodash2.default.map(allFields, function (field, key) {
      if (key === fieldName) {
        if (new RegExp(RegExp.quote('[]') + '$').test(field)) {
          var complexName = field.replace('[]', '') + '_collapsed';
          fieldNames.push(complexName);
        }

        fieldNames.push(field);
      } else if (_lodash2.default.isObject(field)) {
        mapper(field);
      }
    });
  };

  mapper(fields);
  return fieldNames;
}