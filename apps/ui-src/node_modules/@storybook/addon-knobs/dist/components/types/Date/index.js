'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _insertCss = require('insert-css');

var _insertCss2 = _interopRequireDefault(_insertCss);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customStyle = '\n  .rdt input {\n    outline: 0;\n    width: 100%;\n    border: 1px solid #f7f4f4;\n    border-radius: 2px;\n    font-size: 11px;\n    padding: 5px;\n    color: #555;\n    display: table-cell;\n    box-sizing: border-box;\n  }\n';

(0, _insertCss2.default)(_styles2.default);
(0, _insertCss2.default)(customStyle);

var DateType = function DateType(_ref) {
  var knob = _ref.knob,
      _onChange = _ref.onChange;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactDatetime2.default, {
      id: knob.name,
      value: knob.value ? new Date(knob.value) : null,
      type: 'date',
      onChange: function onChange(date) {
        return _onChange(date.valueOf());
      }
    })
  );
};

DateType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};

DateType.propTypes = {
  knob: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    value: _propTypes2.default.number
  }),
  onChange: _propTypes2.default.func
};

DateType.serialize = function (value) {
  return String(value);
};
DateType.deserialize = function (value) {
  return parseFloat(value);
};

exports.default = DateType;