'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Literal = function Literal(_ref) {
  var propType = _ref.propType;
  return _react2.default.createElement(
    'span',
    null,
    propType.value
  );
};

Literal.propTypes = {
  propType: _proptypes.TypeInfo.isRequired
};

exports.default = Literal;