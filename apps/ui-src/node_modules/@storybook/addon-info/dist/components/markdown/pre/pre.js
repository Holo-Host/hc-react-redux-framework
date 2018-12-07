'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _copyButton = require('./copyButton');

var _copyButton2 = _interopRequireDefault(_copyButton);

var _copy = require('./copy');

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOGGLE_TIMEOUT = 1800;

var StyledPre = _glamorous2.default.pre({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '.88em',
  fontFamily: 'Menlo, Monaco, "Courier New", monospace',
  backgroundColor: '#fafafa',
  padding: '.5rem',
  lineHeight: 1.5,
  overflowX: 'scroll'
}, function (props) {
  return props.styles;
});

var Pre = function (_React$Component) {
  (0, _inherits3.default)(Pre, _React$Component);

  function Pre() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Pre);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Pre.__proto__ || (0, _getPrototypeOf2.default)(Pre)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      copied: false
    }, _this.setRef = function (elem) {
      _this.pre = elem;
    }, _this.handleClick = function () {
      var text = _this.pre && _this.pre.innerText;

      if (!text) {
        return;
      }

      (0, _copy2.default)(text);
      _this.setState({ copied: true });

      clearTimeout(_this.timeout);

      _this.timeout = setTimeout(function () {
        _this.setState({ copied: false });
      }, TOGGLE_TIMEOUT);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Pre, [{
    key: 'render',
    value: function render() {
      var pre = this.props.theme.pre;


      return _react2.default.createElement(
        StyledPre,
        { styles: pre },
        _react2.default.createElement(
          'div',
          { ref: this.setRef },
          this.props.children
        ),
        _react2.default.createElement(_copyButton2.default, { onClick: this.handleClick, toggled: this.state.copied })
      );
    }
  }]);
  return Pre;
}(_react2.default.Component);

Pre.propTypes = {
  children: _propTypes2.default.node,
  theme: _propTypes2.default.shape({
    pre: _propTypes2.default.object
  })
};

Pre.defaultProps = {
  children: null,
  theme: {}
};

exports.default = (0, _glamorous.withTheme)(Pre);