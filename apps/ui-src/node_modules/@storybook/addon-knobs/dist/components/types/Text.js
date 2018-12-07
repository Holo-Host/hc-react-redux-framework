'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var TextType = function TextType(_ref) {
  var knob = _ref.knob,
      _onChange = _ref.onChange;
  return _react2.default.createElement(_reactTextareaAutosize2.default, {
    id: knob.name,
    style: styles,
    value: knob.value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  });
};

TextType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};

TextType.propTypes = {
  knob: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    value: _propTypes2.default.string
  }),
  onChange: _propTypes2.default.func
};

TextType.serialize = function (value) {
  return value;
};
TextType.deserialize = function (value) {
  return value;
};

exports.default = TextType;