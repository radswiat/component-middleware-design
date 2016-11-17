'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Name;

var _decorateHelper = require('../../../core/decorateHelper');

function Name(target) {

  (0, _decorateHelper.decorateMethod)('bark', target, function (target, callback) {
    return function () {
      var args = arguments;
      if (typeof callback === 'function') {
        callback.apply(this, args);
      }
      return 'Bark bark';
    };
  });

  return target;
} // import decMethod      from '../../../../core/decorate-method';