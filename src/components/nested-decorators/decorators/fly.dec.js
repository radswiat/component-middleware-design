'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/core-js/object/define-property');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _defineProperty4 = require('babel-runtime/helpers/defineProperty');

var _defineProperty5 = _interopRequireDefault(_defineProperty4);

exports.default = Fly;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import decMethod from '../../../../core/decorate-method';
var chalk = require('chalk');

function Fly(target) {

  var decMethod = function decMethod(method, classVar, methodName) {
    var _descriptor;

    var descriptor = (_descriptor = {
      value: classVar.prototype[methodName],
      enumerable: false
    }, (0, _defineProperty5.default)(_descriptor, 'enumerable', true), (0, _defineProperty5.default)(_descriptor, 'writable', true), _descriptor);
    descriptor = method(classVar.prototype, methodName, descriptor);
    (0, _defineProperty3.default)(classVar.prototype, methodName, descriptor);
    return classVar;
  };

  /**   * Ask for a password,   * - before handleTrigger   */
  var fly = function fly(target, key, descriptor) {
    var callback = descriptor.value;
    return (0, _extends3.default)({}, descriptor, {
      value: function value() {
        var args = arguments;
        this.canFly = true;
        return callback.apply(this, args);
      }
    });
  };

  // class Decorator extends React.Component {
  //   render() {
  //     console.error('password render');
  //     return (
  //       <ComposedComponent {...this.props} />
  //     );
  //   }
  // };
  return decMethod(fly, target, 'fly');
  return target;
}