"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/core-js/object/define-property");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _defineProperty4 = require("babel-runtime/helpers/defineProperty");

var _defineProperty5 = _interopRequireDefault(_defineProperty4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** * Apply decorator for a method * - allows us to define decorator for a class, that could still bind into the inernal methods * @param classVar * @param method */
var decMethod = function decMethod(decorator, method, classVar, methodName) {
  var _descriptor;

  var descriptor = (_descriptor = {
    value: classVar.prototype[methodName],
    enumerable: false
  }, (0, _defineProperty5.default)(_descriptor, "enumerable", true), (0, _defineProperty5.default)(_descriptor, "writable", true), _descriptor);
  descriptor = method(classVar.prototype, methodName, descriptor);
  (0, _defineProperty3.default)(classVar.prototype, methodName, descriptor);
  (0, _defineProperty3.default)(decorator.prototype, methodName, descriptor);
};

exports.default = decMethod;