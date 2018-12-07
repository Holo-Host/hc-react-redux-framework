'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewports = exports.resetViewport = exports.defaultViewport = exports.configuredStyles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configuredStyles = exports.configuredStyles = {
  border: '1px solid #728099',
  display: 'flex',
  margin: '0 auto',
  boxShadow: 'rgba(0,0,0,0.2) 0px 0px 60px 12px'
};

var defaultViewport = exports.defaultViewport = 'default';
var resetViewport = exports.resetViewport = {
  name: 'Reset',
  styles: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
    margin: '0',
    boxShadow: 'none'
  }
};

var viewports = exports.viewports = {
  iphone5: {
    name: 'iPhone 5',
    styles: (0, _extends3.default)({
      height: '568px',
      width: '320px'
    }, configuredStyles)
  },
  iphone6: {
    name: 'iPhone 6',
    styles: (0, _extends3.default)({
      height: '667px',
      width: '375px'
    }, configuredStyles)
  },
  iphone6p: {
    name: 'iPhone 6 Plus',
    styles: (0, _extends3.default)({
      height: '736px',
      width: '414px'
    }, configuredStyles)
  },
  ipad: {
    name: 'iPad',
    styles: (0, _extends3.default)({
      height: '1024px',
      width: '768px'
    }, configuredStyles)
  },
  galaxys5: {
    name: 'Galaxy S5',
    styles: (0, _extends3.default)({
      height: '640px',
      width: '360px'
    }, configuredStyles)
  },
  nexus5x: {
    name: 'Nexus 5X',
    styles: (0, _extends3.default)({
      height: '660px',
      width: '412px'
    }, configuredStyles)
  },
  nexus6p: {
    name: 'Nexus 6P',
    styles: (0, _extends3.default)({
      height: '732px',
      width: '412px'
    }, configuredStyles)
  }
};