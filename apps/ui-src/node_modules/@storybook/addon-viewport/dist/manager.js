'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addChannel = exports.init = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _Panel = require('./components/Panel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADDON_ID = 'storybook-addon-viewport';
var PANEL_ID = ADDON_ID + '/addon-panel';

var addChannel = function addChannel(api) {
  var channel = _addons2.default.getChannel();

  _addons2.default.addPanel(PANEL_ID, {
    title: 'Viewport',
    render: function render() {
      return _react2.default.createElement(_Panel.Panel, { channel: channel, api: api });
    }
  });
};

var init = function init() {
  _addons2.default.register(ADDON_ID, addChannel);
};

exports.init = init;
exports.addChannel = addChannel;