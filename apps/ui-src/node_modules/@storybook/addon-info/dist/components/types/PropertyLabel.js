'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  hasProperty: {
    whiteSpace: 'nowrap'
  }
};

var PropertyLabel = function PropertyLabel(_ref) {
  var property = _ref.property,
      required = _ref.required;

  if (!property) return null;

  return _react2.default.createElement(
    'span',
    { style: styles.hasProperty },
    property,
    required ? '' : '?',
    ':',
    ' '
  );
};

PropertyLabel.propTypes = {
  property: _propTypes2.default.string,
  required: _propTypes2.default.bool
};

PropertyLabel.defaultProps = {
  property: '',
  required: false
};

exports.default = PropertyLabel;