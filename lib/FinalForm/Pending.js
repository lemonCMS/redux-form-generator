(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react);
    global.Pending = mod.exports;
  }
})(this, function (_exports, _propTypes, _react) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireWildcard(_react);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var Pending =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Pending, _Component);

    function Pending() {
      var _this;

      _this = _Component.call(this) || this;
      _this.pending = _this.pending.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.css = {
        pendingWrapper: {
          position: 'relative'
        },
        pendingOverlayBackground: {
          position: 'absolute',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          backgroundColor: '#fff',
          opacity: '0.2',
          zIndex: '999'
        },
        pendingOverlayContent: {
          position: 'absolute',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          color: '#333',
          zIndex: '1000'
        },
        pendingOverlayContentCentered: {
          textAlign: 'center'
        }
      };
      return _this;
    }

    var _proto = Pending.prototype;

    _proto.pending = function pending() {
      if (this.props.pending === true) {
        return [_react.default.createElement("div", {
          key: "1",
          style: this.css.pendingOverlayBackground
        }), _react.default.createElement("div", {
          key: "2",
          style: this.css.pendingOverlayContent
        }, _react.default.createElement("div", {
          style: this.css.pendingOverlayContentCentered
        }, _react.default.createElement("i", {
          className: "fa fa-spinner fa-pulse"
        })))];
      }
    };

    _proto.render = function render() {
      return _react.default.createElement("div", {
        style: this.css.pendingWrapper
      }, this.pending(), this.props.children);
    };

    return Pending;
  }(_react.Component);

  Pending.propTypes = {
    pending: _propTypes.default.bool.isRequired,
    children: _propTypes.default.oneOfType([_propTypes.default.object.isRequired, _propTypes.default.array.isRequired])
  };
  var _default = Pending;
  _exports.default = _default;
});