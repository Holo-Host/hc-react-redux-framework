'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.P = P;
exports.LI = LI;
exports.UL = UL;
exports.A = A;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = require('@storybook/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = { children: null };
var propTypes = { children: _propTypes2.default.node };

function P(props) {
  var style = (0, _extends3.default)({}, _components.baseFonts, {
    fontSize: '15px'
  });

  // <P> is oftentimes used as a parent element of
  // <a> and <pre> elements, which is why <div>
  // is used as the outputted element when parsing
  // marksy content rather than <p>.
  return _react2.default.createElement(
    'div',
    { style: style },
    props.children
  );
}

P.defaultProps = defaultProps;
P.propTypes = propTypes;

function LI(props) {
  var style = (0, _extends3.default)({}, _components.baseFonts, {
    fontSize: '15px'
  });
  return _react2.default.createElement(
    'li',
    { style: style },
    props.children
  );
}

LI.defaultProps = defaultProps;
LI.propTypes = propTypes;

function UL(props) {
  var style = (0, _extends3.default)({}, _components.baseFonts, {
    fontSize: '15px'
  });
  return _react2.default.createElement(
    'ul',
    { style: style },
    props.children
  );
}

UL.defaultProps = defaultProps;
UL.propTypes = propTypes;

function A(props) {
  var style = {
    color: '#3498db'
  };
  return _react2.default.createElement(
    'a',
    { href: props.href, target: '_blank', rel: 'noopener noreferrer', style: style },
    props.children
  );
}

A.defaultProps = defaultProps;
A.propTypes = { children: _propTypes2.default.node, href: _propTypes2.default.string.isRequired };