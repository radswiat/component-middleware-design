'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {

  (0, _decorateHelper.decorateMethod)('walk', target, function (target, callback) {
    return function () {
      var _this = this;

      var args = arguments;
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(callback.apply(_this, args));
        }, 200);
      });
    };
  });

  return target;
};

var _decorateHelper = require('../../../core/decorateHelper');

var Promise = require('bluebird');