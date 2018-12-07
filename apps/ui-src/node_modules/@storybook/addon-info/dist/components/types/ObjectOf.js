'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PrettyPropType = require('./PrettyPropType');

var _PrettyPropType2 = _interopRequireDefault(_PrettyPropType);

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectOf = function ObjectOf(_ref) {
  var propType = _ref.propType;
  return _react2.default.createElement(
    'span',
    null,
    '{[<key>]: ',
    _react2.default.createElement(_PrettyPropType2.default, { propType: (0, _proptypes.getPropTypes)(propType) }),
    '}'
  );
};

ObjectOf.propTypes = {
  propType: _proptypes.TypeInfo.isRequired
};

exports.default = ObjectOf;