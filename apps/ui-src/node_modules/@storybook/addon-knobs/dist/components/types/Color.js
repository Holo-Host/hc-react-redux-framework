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

var _global = require('global');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactColor = require('react-color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conditionalRender = function conditionalRender(condition, positive, negative) {
  return condition ? positive() : negative();
};

var styles = {
  swatch: {
    background: '#fff',
    borderRadius: '1px',
    border: '1px solid rgb(247, 244, 244)',
    display: 'inline-block',
    cursor: 'pointer',
    width: '100%',
    padding: 0
  },
  popover: {
    position: 'absolute',
    zIndex: '2'
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  }
};

var ColorType = function (_React$Component) {
  (0, _inherits3.default)(ColorType, _React$Component);

  function ColorType(props) {
    (0, _classCallCheck3.default)(this, ColorType);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ColorType.__proto__ || (0, _getPrototypeOf2.default)(ColorType)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.onWindowMouseDown = _this.onWindowMouseDown.bind(_this);
    _this.state = {
      displayColorPicker: false
    };
    return _this;
  }

  (0, _createClass3.default)(ColorType, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _global.document.addEventListener('mousedown', this.onWindowMouseDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _global.document.removeEventListener('mousedown', this.onWindowMouseDown);
    }
  }, {
    key: 'onWindowMouseDown',
    value: function onWindowMouseDown(e) {
      if (!this.state.displayColorPicker) return;
      if (this.popover.contains(e.target)) return;

      this.setState({
        displayColorPicker: false
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({
        displayColorPicker: !this.state.displayColorPicker
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          knob = _props.knob,
          _onChange = _props.onChange;
      var displayColorPicker = this.state.displayColorPicker;

      var colorStyle = {
        width: 'auto',
        height: '20px',
        borderRadius: '2px',
        margin: 5,
        background: knob.value
      };
      return _react2.default.createElement(
        'div',
        { id: knob.name },
        _react2.default.createElement(
          'button',
          { type: 'button', style: styles.swatch, onClick: this.handleClick },
          _react2.default.createElement('div', { style: colorStyle })
        ),
        conditionalRender(displayColorPicker, function () {
          return _react2.default.createElement(
            'div',
            {
              style: styles.popover,
              ref: function ref(e) {
                _this2.popover = e;
              }
            },
            _react2.default.createElement(_reactColor.SketchPicker, {
              color: knob.value,
              onChange: function onChange(color) {
                return _onChange('rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')');
              }
            })
          );
        }, function () {
          return null;
        })
      );
    }
  }]);
  return ColorType;
}(_react2.default.Component);

ColorType.propTypes = {
  knob: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    value: _propTypes2.default.string
  }),
  onChange: _propTypes2.default.func
};
ColorType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};

ColorType.serialize = function (value) {
  return value;
};
ColorType.deserialize = function (value) {
  return value;
};

exports.default = ColorType;