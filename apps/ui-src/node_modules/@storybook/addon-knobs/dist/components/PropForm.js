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

var _PropField = require('./PropField');

var _PropField2 = _interopRequireDefault(_PropField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = {
  propForm: {
    fontFamily: '\n      -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto",\n      "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif\n    ',
    display: 'table',
    boxSizing: 'border-box',
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '5px'
  }
}; /* eslint no-underscore-dangle: 0 */

var propForm = function (_React$Component) {
  (0, _inherits3.default)(propForm, _React$Component);

  function propForm() {
    (0, _classCallCheck3.default)(this, propForm);
    return (0, _possibleConstructorReturn3.default)(this, (propForm.__proto__ || (0, _getPrototypeOf2.default)(propForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(propForm, [{
    key: 'makeChangeHandler',
    value: function makeChangeHandler(name, type) {
      var _this2 = this;

      return function (value) {
        var change = { name: name, type: type, value: value };
        _this2.props.onFieldChange(change);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var knobs = this.props.knobs;


      return _react2.default.createElement(
        'form',
        { style: stylesheet.propForm },
        knobs.map(function (knob) {
          var changeHandler = _this3.makeChangeHandler(knob.name, knob.type);
          return _react2.default.createElement(_PropField2.default, {
            key: knob.name,
            name: knob.name,
            type: knob.type,
            value: knob.value,
            knob: knob,
            onChange: changeHandler,
            onClick: _this3.props.onFieldClick
          });
        })
      );
    }
  }]);
  return propForm;
}(_react2.default.Component);

exports.default = propForm;


propForm.displayName = 'propForm';

propForm.defaultProps = {
  knobs: []
};

propForm.propTypes = {
  knobs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    value: _propTypes2.default.any
  })),
  onFieldChange: _propTypes2.default.func.isRequired,
  onFieldClick: _propTypes2.default.func.isRequired
};