'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PrettyPropType = require('./PrettyPropType');

var _PrettyPropType2 = _interopRequireDefault(_PrettyPropType);

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OneOfType = function OneOfType(_ref) {
  var propType = _ref.propType;

  var propTypes = (0, _proptypes.getPropTypes)(propType);
  return _react2.default.createElement(
    'span',
    null,
    propTypes.map(function (value, i) {
      var key = '' + value.name + (value.value ? '-' + value.value : '');
      return [_react2.default.createElement(_PrettyPropType2.default, { key: key, propType: value }), i < propTypes.length - 1 ? _react2.default.createElement(
        'span',
        { key: key + '-separator' },
        ' | '
      ) : null];
    }).reduce(function (acc, tuple) {
      return acc.concat(tuple);
    }, [])
  );
};
OneOfType.propTypes = {
  propType: _proptypes.TypeInfo.isRequired
};
exports.default = OneOfType;