// import decMethod      from '../../../../core/decorate-method';import { decorateMethod } from '../../../core/decorateHelper';export default function Name(target) {  decorateMethod('bark', target, function(target, callback) {    return function(){      const args = arguments;      if(typeof callback === 'function') {        callback.apply(this, args);      }      return 'Bark bark';    }  });  return target;}