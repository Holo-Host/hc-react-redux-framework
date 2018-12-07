'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = Props;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropVal = require('./PropVal');

var _PropVal2 = _interopRequireDefault(_PropVal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = {
  propStyle: {},
  propNameStyle: {},
  propValueStyle: {}
};

function Props(props) {
  var maxPropsIntoLine = props.maxPropsIntoLine,
      maxPropArrayLength = props.maxPropArrayLength,
      maxPropObjectKeys = props.maxPropObjectKeys,
      maxPropStringLength = props.maxPropStringLength;

  var nodeProps = props.node.props;
  var defaultProps = props.node.type.defaultProps;

  if (!nodeProps || (typeof nodeProps === 'undefined' ? 'undefined' : (0, _typeof3.default)(nodeProps)) !== 'object') {
    return _react2.default.createElement('span', null);
  }

  var propValueStyle = stylesheet.propValueStyle,
      propNameStyle = stylesheet.propNameStyle;


  var names = (0, _keys2.default)(nodeProps).filter(function (name) {
    return name[0] !== '_' && name !== 'children' && (!defaultProps || nodeProps[name] !== defaultProps[name]);
  });

  var breakIntoNewLines = names.length > maxPropsIntoLine;
  var endingSpace = props.singleLine ? ' ' : '';

  var items = [];
  names.forEach(function (name, i) {
    items.push(_react2.default.createElement(
      'span',
      { key: name },
      breakIntoNewLines ? _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('br', null),
        '\xA0\xA0'
      ) : ' ',
      _react2.default.createElement(
        'span',
        { style: propNameStyle },
        name
      ),
      (!nodeProps[name] || typeof nodeProps[name] !== 'boolean') && _react2.default.createElement(
        'span',
        null,
        '=',
        _react2.default.createElement(
          'span',
          { style: propValueStyle },
          typeof nodeProps[name] === 'string' ? '"' : '{',
          _react2.default.createElement(_PropVal2.default, {
            val: nodeProps[name],
            maxPropObjectKeys: maxPropObjectKeys,
            maxPropArrayLength: maxPropArrayLength,
            maxPropStringLength: maxPropStringLength,
            maxPropsIntoLine: maxPropsIntoLine
          }),
          typeof nodeProps[name] === 'string' ? '"' : '}'
        )
      ),
      i === names.length - 1 && (breakIntoNewLines ? _react2.default.createElement('br', null) : endingSpace)
    ));
  });

  return _react2.default.createElement(
    'span',
    null,
    items
  );
}

Props.defaultProps = {
  singleLine: false
};

Props.propTypes = {
  node: _propTypes2.default.node.isRequired,
  singleLine: _propTypes2.default.bool,
  maxPropsIntoLine: _propTypes2.default.number.isRequired,
  maxPropObjectKeys: _propTypes2.default.number.isRequired,
  maxPropArrayLength: _propTypes2.default.number.isRequired,
  maxPropStringLength: _propTypes2.default.number.isRequired
};