'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var joinValues = function joinValues(propTypes) {
  return propTypes.map(function (_ref) {
    var value = _ref.value;
    return value;
  }).join(' | ');
};

var OneOf = function OneOf(_ref2) {
  var propType = _ref2.propType;

  var propTypes = (0, _proptypes.getPropTypes)(propType);
  return _react2.default.createElement(
    'span',
    null,
    'oneOf ' + (Array.isArray(propTypes) ? joinValues(propTypes) : propTypes)
  );
};

OneOf.propTypes = {
  propType: _proptypes.TypeInfo.isRequired
};

exports.default = OneOf;