'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pre = exports.Code = undefined;

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

exports.Blockquote = Blockquote;

var _pre = require('./pre/pre');

Object.defineProperty(exports, 'Pre', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pre).default;
  }
});

var _global = require('global');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Code = exports.Code = function (_React$Component) {
  (0, _inherits3.default)(Code, _React$Component);

  function Code() {
    (0, _classCallCheck3.default)(this, Code);
    return (0, _possibleConstructorReturn3.default)(this, (Code.__proto__ || (0, _getPrototypeOf2.default)(Code)).apply(this, arguments));
  }

  (0, _createClass3.default)(Code, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.highlight();
    }
  }, {
    key: 'highlight',
    value: function highlight() {
      if (typeof _global.Prism !== 'undefined') {
        _global.Prism.highlightAll();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var codeStyle = {
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        backgroundColor: '#fafafa'
      };

      var preStyle = {
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        backgroundColor: '#fafafa',
        padding: '.5rem',
        lineHeight: 1.5,
        overflowX: 'scroll'
      };

      var className = this.props.language ? 'language-' + this.props.language : '';

      return _react2.default.createElement(
        'pre',
        { style: preStyle, className: className },
        _react2.default.createElement(
          'code',
          { style: codeStyle, className: className },
          this.props.code
        )
      );
    }
  }]);
  return Code;
}(_react2.default.Component);

Code.propTypes = {
  language: _propTypes2.default.string,
  code: _propTypes2.default.node
};
Code.defaultProps = {
  language: null,
  code: null
};

function Blockquote(props) {
  var style = {
    fontSize: '1.88em',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    borderLeft: '8px solid #fafafa',
    padding: '1rem'
  };
  return _react2.default.createElement(
    'blockquote',
    { style: style },
    props.children
  );
}

Blockquote.propTypes = { children: _propTypes2.default.node };
Blockquote.defaultProps = { children: null };