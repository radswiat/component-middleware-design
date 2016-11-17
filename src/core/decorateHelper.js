"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require("babel-runtime/core-js/object/define-property");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _defineProperty4 = require("babel-runtime/helpers/defineProperty");

var _defineProperty5 = _interopRequireDefault(_defineProperty4);

exports.decorateMethod = decorateMethod;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** * Much newer decorateMethod, prefered for release * @param methodName * @param target * @param method */

function decorateMethod(methodName, target, method) {

  // decMethod(target, bark, target, 'bark');
  var decMethod = function decMethod(target, methodName, method) {
    var _descriptor;

    var descriptor = (_descriptor = {
      value: target.prototype[methodName],
      enumerable: false
    }, (0, _defineProperty5.default)(_descriptor, "enumerable", true), (0, _defineProperty5.default)(_descriptor, "writable", true), _descriptor);
    descriptor = method(target.prototype, methodName, descriptor);
    (0, _defineProperty3.default)(target.prototype, methodName, descriptor);
  };

  decMethod(target, methodName, function (target, methodName, descriptor) {
    var callback = descriptor.value;
    return (0, _extends3.default)({}, descriptor, {
      value: method(target, callback)
    });
  });
}