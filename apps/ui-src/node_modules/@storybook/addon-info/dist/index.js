'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story = exports.withInfo = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.setDefaults = setDefaults;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilDeprecate = require('util-deprecate');

var _utilDeprecate2 = _interopRequireDefault(_utilDeprecate);

var _nestedObjectAssign = require('nested-object-assign');

var _nestedObjectAssign2 = _interopRequireDefault(_nestedObjectAssign);

var _clientLogger = require('@storybook/client-logger');

var _Story = require('./components/Story');

var _Story2 = _interopRequireDefault(_Story);

var _PropTable = require('./components/PropTable');

var _PropTable2 = _interopRequireDefault(_PropTable);

var _makeTableComponent = require('./components/makeTableComponent');

var _makeTableComponent2 = _interopRequireDefault(_makeTableComponent);

var _markdown = require('./components/markdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  inline: false,
  header: true,
  source: true,
  propTables: [],
  TableComponent: _PropTable2.default,
  maxPropsIntoLine: 3,
  maxPropObjectKeys: 3,
  maxPropArrayLength: 3,
  maxPropStringLength: 50
};

var defaultComponents = {
  h1: _markdown.H1,
  h2: _markdown.H2,
  h3: _markdown.H3,
  h4: _markdown.H4,
  h5: _markdown.H5,
  h6: _markdown.H6,
  code: _markdown.Code,
  p: _markdown.P,
  a: _markdown.A,
  li: _markdown.LI,
  ul: _markdown.UL
};

var hasWarned = false;

function addInfo(storyFn, context, infoOptions) {
  var options = (0, _extends3.default)({}, defaultOptions, infoOptions);

  // props.propTables can only be either an array of components or null
  // propTables option is allowed to be set to 'false' (a boolean)
  // if the option is false, replace it with null to avoid react warnings
  if (!options.propTables) {
    options.propTables = null;
  }

  var components = (0, _extends3.default)({}, defaultComponents);
  if (options && options.components) {
    (0, _assign2.default)(components, options.components);
  }
  if (options && options.marksyConf) {
    if (!hasWarned) {
      _clientLogger.logger.warn('@storybook/addon-info: "marksyConf" option has been renamed to "components"');
      hasWarned = true;
    }

    (0, _assign2.default)(components, options.marksyConf);
  }
  var props = {
    info: options.text,
    context: context,
    showInline: Boolean(options.inline),
    showHeader: Boolean(options.header),
    showSource: Boolean(options.source),
    styles: typeof options.styles === 'function' ? options.styles : function (s) {
      return (0, _nestedObjectAssign2.default)({}, s, options.styles);
    },
    propTables: options.propTables,
    propTablesExclude: options.propTablesExclude,
    PropTable: (0, _makeTableComponent2.default)(options.TableComponent),
    components: components,
    maxPropObjectKeys: options.maxPropObjectKeys,
    maxPropArrayLength: options.maxPropArrayLength,
    maxPropsIntoLine: options.maxPropsIntoLine,
    maxPropStringLength: options.maxPropStringLength
  };
  return _react2.default.createElement(
    _Story2.default,
    props,
    storyFn(context)
  );
}

var withInfo = exports.withInfo = function withInfo(textOrOptions) {
  var options = typeof textOrOptions === 'string' ? { text: textOrOptions } : textOrOptions;
  return function (storyFn) {
    return function (context) {
      return addInfo(storyFn, context, options);
    };
  };
};

exports.Story = _Story2.default;
exports.default = {
  addWithInfo: (0, _utilDeprecate2.default)(function addWithInfo(storyName, text, storyFn, options) {
    if (typeof storyFn !== 'function') {
      if (typeof text === 'function') {
        options = storyFn; // eslint-disable-line
        storyFn = text; // eslint-disable-line
        text = ''; // eslint-disable-line
      } else {
        throw new Error('No story defining function has been specified');
      }
    }
    return this.add(storyName, withInfo((0, _extends3.default)({ text: text }, options))(storyFn));
  }, '@storybook/addon-info .addWithInfo() addon is deprecated, use withInfo() from the same package instead. \nSee https://github.com/storybooks/storybook/tree/master/addons/info')
};
function setDefaults(newDefaults) {
  return (0, _assign2.default)(defaultOptions, newDefaults);
}