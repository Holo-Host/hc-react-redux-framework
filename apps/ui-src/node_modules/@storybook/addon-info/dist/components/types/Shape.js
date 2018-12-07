'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@storybook/components');

var _PrettyPropType = require('./PrettyPropType');

var _PrettyPropType2 = _interopRequireDefault(_PrettyPropType);

var _PropertyLabel = require('./PropertyLabel');

var _PropertyLabel2 = _interopRequireDefault(_PropertyLabel);

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MARGIN_SIZE = 15;

var Shape = function (_React$Component) {
  (0, _inherits3.default)(Shape, _React$Component);

  function Shape(props) {
    (0, _classCallCheck3.default)(this, Shape);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Shape.__proto__ || (0, _getPrototypeOf2.default)(Shape)).call(this, props));

    _this.handleToggle = function () {
      _this.setState({
        minimized: !_this.state.minimized
      });
    };

    _this.handleMouseEnter = function () {
      _this.setState({ hover: true });
    };

    _this.handleMouseLeave = function () {
      _this.setState({ hover: false });
    };

    _this.state = {
      minimized: false
    };
    return _this;
  }

  (0, _createClass3.default)(Shape, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          propType = _props.propType,
          depth = _props.depth;

      var propTypes = (0, _proptypes.getPropTypes)(propType);
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          _components.HighlightButton,
          {
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            highlight: this.state.hover,
            onClick: this.handleToggle
          },
          '{'
        ),
        _react2.default.createElement(
          _components.HighlightButton,
          { onClick: this.handleToggle },
          '...'
        ),
        !this.state.minimized && (0, _keys2.default)(propTypes).map(function (childProperty) {
          return _react2.default.createElement(
            'div',
            { key: childProperty, style: { marginLeft: depth * MARGIN_SIZE } },
            _react2.default.createElement(_PropertyLabel2.default, {
              property: childProperty,
              required: propTypes[childProperty].required
            }),
            _react2.default.createElement(_PrettyPropType2.default, { depth: depth + 1, propType: propTypes[childProperty] }),
            ','
          );
        }),
        _react2.default.createElement(
          _components.HighlightButton,
          {
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            highlight: this.state.hover,
            onClick: this.handleToggle
          },
          '}'
        )
      );
    }
  }]);
  return Shape;
}(_react2.default.Component);

Shape.propTypes = {
  propType: _proptypes.TypeInfo,
  depth: _propTypes2.default.number.isRequired
};

Shape.defaultProps = {
  propType: null
};

exports.default = Shape;