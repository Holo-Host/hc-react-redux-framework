'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = require('@storybook/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  children: null,
  id: null
};
var propTypes = {
  children: _propTypes2.default.node,
  id: _propTypes2.default.string
};

function H1(props) {
  var styles = (0, _extends3.default)({}, _components.baseFonts, {
    borderBottom: '1px solid #eee',
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '40px'
  });
  return _react2.default.createElement(
    'h1',
    { id: props.id, style: styles },
    props.children
  );
}

H1.defaultProps = defaultProps;
H1.propTypes = propTypes;

function H2(props) {
  var styles = (0, _extends3.default)({}, _components.baseFonts, {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '30px'
  });
  return _react2.default.createElement(
    'h2',
    { id: props.id, style: styles },
    props.children
  );
}

H2.defaultProps = defaultProps;
H2.propTypes = propTypes;

function H3(props) {
  var styles = (0, _extends3.default)({}, _components.baseFonts, {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '22px',
    textTransform: 'uppercase'
  });
  return _react2.default.createElement(
    'h3',
    { id: props.id, style: styles },
    props.children
  );
}

H3.defaultProps = defaultProps;
H3.propTypes = propTypes;

function H4(props) {
  var styles = (0, _extends3.default)({}, _components.baseFonts, {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '20px'
  });
  return _react2.default.createElement(
    'h4',
    { id: props.id, style: styles },
    props.children
  );
}

H4.defaultProps = defaultProps;
H4.propTypes = propTypes;

function H5(props) {
  var styles = (0, _extends3.default)({}, _components.baseFonts, {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '18px'
  });
  return _react2.default.createElement(
    'h5',
    { id: props.id, style: styles },
    props.children
  );
}

H5.defaultProps = defaultProps;
H5.propTypes = propTypes;

function H6(props) {
  var styles = (0, _extends3.default)({}, _components.baseFonts, {
    fontWeight: 400,
    margin: 0,
    padding: 0,
    fontSize: '18px'
  });
  return _react2.default.createElement(
    'h6',
    { id: props.id, style: styles },
    props.children
  );
}

H6.defaultProps = defaultProps;
H6.propTypes = propTypes;