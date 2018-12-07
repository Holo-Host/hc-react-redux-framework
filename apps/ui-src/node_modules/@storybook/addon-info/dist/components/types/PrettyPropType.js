'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Shape = require('./Shape');

var _Shape2 = _interopRequireDefault(_Shape);

var _OneOfType = require('./OneOfType');

var _OneOfType2 = _interopRequireDefault(_OneOfType);

var _ArrayOf = require('./ArrayOf');

var _ArrayOf2 = _interopRequireDefault(_ArrayOf);

var _ObjectOf = require('./ObjectOf');

var _ObjectOf2 = _interopRequireDefault(_ObjectOf);

var _OneOf = require('./OneOf');

var _OneOf2 = _interopRequireDefault(_OneOf);

var _InstanceOf = require('./InstanceOf');

var _InstanceOf2 = _interopRequireDefault(_InstanceOf);

var _Signature = require('./Signature');

var _Signature2 = _interopRequireDefault(_Signature);

var _Literal = require('./Literal');

var _Literal2 = _interopRequireDefault(_Literal);

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// propType -> Component map - these are a bit more complex prop types to display
var propTypeComponentMap = new _map2.default([['shape', _Shape2.default], ['union', _OneOfType2.default], ['arrayOf', _ArrayOf2.default], ['objectOf', _ObjectOf2.default],
// Might be overkill to have below proptypes  as separate components *shrug*
['literal', _Literal2.default], ['enum', _OneOf2.default], ['instanceOf', _InstanceOf2.default], ['signature', _Signature2.default]]);

var PrettyPropType = function PrettyPropType(props) {
  var propType = props.propType,
      depth = props.depth;

  if (!propType) {
    return _react2.default.createElement(
      'span',
      null,
      'unknown'
    );
  }

  var _ref = propType || {},
      name = _ref.name;

  if (propTypeComponentMap.has(name)) {
    var Component = propTypeComponentMap.get(name);
    return _react2.default.createElement(Component, { propType: propType, depth: depth });
  }

  // Otherwise, propType does not have a dedicated component, display proptype name by default
  return _react2.default.createElement(
    'span',
    null,
    name
  );
};

PrettyPropType.displayName = 'PrettyPropType';

PrettyPropType.defaultProps = {
  propType: null,
  depth: 1
};

PrettyPropType.propTypes = {
  propType: _proptypes.TypeInfo,
  depth: _propTypes2.default.number
};

exports.default = PrettyPropType;