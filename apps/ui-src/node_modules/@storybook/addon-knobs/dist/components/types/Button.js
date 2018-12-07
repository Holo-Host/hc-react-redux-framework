'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  height: '26px'
};

var ButtonType = function (_React$Component) {
  (0, _inherits3.default)(ButtonType, _React$Component);

  function ButtonType() {
    (0, _classCallCheck3.default)(this, ButtonType);
    return (0, _possibleConstructorReturn3.default)(this, (ButtonType.__proto__ || (0, _getPrototypeOf2.default)(ButtonType)).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonType, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          knob = _props.knob,
          _onClick = _props.onClick;

      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          id: knob.name,
          ref: function ref(c) {
            _this2.input = c;
          },
          style: styles,
          onClick: function onClick() {
            return _onClick(knob);
          }
        },
        knob.name
      );
    }
  }]);
  return ButtonType;
}(_react2.default.Component);

ButtonType.defaultProps = {
  knob: {}
};

ButtonType.propTypes = {
  knob: _propTypes2.default.shape({
    name: _propTypes2.default.string
  }),
  onClick: _propTypes2.default.func.isRequired
};

ButtonType.serialize = function (value) {
  return value;
};
ButtonType.deserialize = function (value) {
  return value;
};

exports.default = ButtonType;