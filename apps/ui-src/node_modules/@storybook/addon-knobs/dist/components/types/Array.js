'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTextareaAutosize = require('react-textarea-autosize');

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  display: 'table-cell',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  height: '26px',
  width: '100%',
  outline: 'none',
  border: '1px solid #f7f4f4',
  borderRadius: 2,
  fontSize: 11,
  padding: '5px',
  color: '#555'
};

function formatArray(value, separator) {
  if (value === '') {
    return [];
  }
  return value.split(separator);
}

var ArrayType = function ArrayType(_ref) {
  var knob = _ref.knob,
      _onChange = _ref.onChange;
  return _react2.default.createElement(_reactTextareaAutosize2.default, {
    id: knob.name,
    style: styles,
    value: knob.value.join(knob.separator),
    onChange: function onChange(e) {
      return _onChange(formatArray(e.target.value, knob.separator));
    }
  });
};

ArrayType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};

ArrayType.propTypes = {
  knob: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    value: _propTypes2.default.array
  }),
  onChange: _propTypes2.default.func
};

ArrayType.serialize = function (value) {
  return value;
};
ArrayType.deserialize = function (value) {
  if (Array.isArray(value)) return value;

  return (0, _keys2.default)(value).sort().reduce(function (array, key) {
    return [].concat((0, _toConsumableArray3.default)(array), [value[key]]);
  }, []);
};

exports.default = ArrayType;