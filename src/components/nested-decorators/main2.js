"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function () {
  function Main() {
    (0, _classCallCheck3.default)(this, Main);

    this.canFly = false;
  }

  (0, _createClass3.default)(Main, [{
    key: "fly",
    value: function fly() {
      return this.canFly;
    }
  }]);
  return Main;
}();

exports.default = Main;