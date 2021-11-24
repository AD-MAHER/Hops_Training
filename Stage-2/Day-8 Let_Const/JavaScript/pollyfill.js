console.log("amd");

pollyfillArray = [11,66,99,44,35,45,12,34]


console.log(pollyfillArray);


// *********************Polyfill of Array.some***************************
if (!Array.prototype.someAmd) {
    Array.prototype.someAmd = function(fun, thisArg) {
      'use strict';
  
      if (this == null) {
        throw new TypeError('Array.prototype.some called on null or undefined');
      }
  
      if (typeof fun !== 'function') {
        throw new TypeError();
      }
  
      var t = Object(this);
      var len = t.length >>> 0;
  
      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(thisArg, t[i], i, t)) {
          return true;
        }
      }
  
      return false;
    };
  }

  
console.log(pollyfillArray.someAmd(num => num%2 === 0));  // output = true
