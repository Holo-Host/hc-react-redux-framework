'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.action = exports.disabled = exports.button = exports.label = exports.row = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var row = exports.row = {
  width: '100%',
  display: 'flex',
  marginBottom: 15
};

var label = exports.label = {
  width: 80,
  marginRight: 15
};

var actionColor = 'rgb(247, 247, 247)';

var button = exports.button = {
  color: 'rgb(85, 85, 85)',
  width: '100%',
  border: '1px solid ' + actionColor,
  backgroundColor: actionColor,
  borderRadius: 3
};

var disabled = exports.disabled = {
  opacity: '0.5',
  cursor: 'not-allowed'
};

var action = exports.action = (0, _extends3.default)({}, button, {
  height: 30
});