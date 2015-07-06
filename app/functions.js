exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr)
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(arg) {
      return str + ", " + arg
    }
  },

  makeClosures : function(arr, fn) {
    var newArr = [];

    var makeFunction = function(input) {
      return function() {
        return fn(input);
      };
    };

    for (var i = 0; i < arr.length; i++) {
      newArr.push(makeFunction(arr[i]));
    }
    return newArr;
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.call(null, str1, str2, str3)
    };
  },

  useArguments : function() {
    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
      total += arguments[i]
    }
    return total
  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function(){
      var moreargs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreargs);
    }
  },

  curryIt : function(fn) {

  }
};
