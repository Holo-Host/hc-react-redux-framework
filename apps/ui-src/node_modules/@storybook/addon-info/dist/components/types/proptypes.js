'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropTypes = exports.TypeInfo = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeInfo = exports.TypeInfo = (0, _propTypes.oneOfType)([_propTypes2.default.shape({
  name: _propTypes2.default.string,
  value: _propTypes2.default.any
}), _propTypes2.default.string]);

var getPropTypes = exports.getPropTypes = function getPropTypes(propType) {
  return propType.value || propType.elements;
};