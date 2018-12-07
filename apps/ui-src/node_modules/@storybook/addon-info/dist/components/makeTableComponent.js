'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

exports.default = makeTableComponent;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */

var PropTypesMap = new _map2.default();

(0, _keys2.default)(_propTypes2.default).forEach(function (typeName) {
  var type = _propTypes2.default[typeName];

  PropTypesMap.set(type, typeName);
  PropTypesMap.set(type.isRequired, typeName);
});

var isNotEmpty = function isNotEmpty(obj) {
  return obj && obj.props && (0, _keys2.default)(obj.props).length > 0;
};

var hasDocgen = function hasDocgen(type) {
  return isNotEmpty(type.__docgenInfo);
};

var propsFromDocgen = function propsFromDocgen(type) {
  var props = {};
  var docgenInfoProps = type.__docgenInfo.props;

  (0, _keys2.default)(docgenInfoProps).forEach(function (property) {
    var docgenInfoProp = docgenInfoProps[property];
    var defaultValueDesc = docgenInfoProp.defaultValue || {};
    var propType = docgenInfoProp.flowType || docgenInfoProp.type || 'other';

    props[property] = {
      property: property,
      propType: propType,
      required: docgenInfoProp.required,
      description: docgenInfoProp.description,
      defaultValue: defaultValueDesc.value
    };
  });

  return props;
};

var propsFromPropTypes = function propsFromPropTypes(type) {
  var props = {};

  if (type.propTypes) {
    (0, _keys2.default)(type.propTypes).forEach(function (property) {
      var typeInfo = type.propTypes[property];
      var required = typeInfo.isRequired === undefined;
      var docgenInfo = type.__docgenInfo && type.__docgenInfo.props && type.__docgenInfo.props[property];
      var description = docgenInfo ? docgenInfo.description : null;
      var propType = PropTypesMap.get(typeInfo) || 'other';

      if (propType === 'other') {
        if (docgenInfo && docgenInfo.type) {
          propType = docgenInfo.type.name;
        }
      }

      props[property] = { property: property, propType: propType, required: required, description: description };
    });
  }

  if (type.defaultProps) {
    (0, _keys2.default)(type.defaultProps).forEach(function (property) {
      var value = type.defaultProps[property];

      if (value === undefined) {
        return;
      }

      if (!props[property]) {
        props[property] = { property: property };
      }

      props[property].defaultValue = value;
    });
  }

  return props;
};

function makeTableComponent(Component) {
  return function (props) {
    if (!props.type) {
      // eslint-disable-line
      return null;
    }

    var propDefinitionsMap = hasDocgen(props.type) ? propsFromDocgen(props.type) : propsFromPropTypes(props.type);
    var propDefinitions = (0, _values2.default)(propDefinitionsMap);

    return _react2.default.createElement(Component, (0, _extends3.default)({ propDefinitions: propDefinitions }, props));
  };
}