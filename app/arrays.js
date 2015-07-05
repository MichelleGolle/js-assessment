exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(i = 0; i < arr.length; i++){
      if (arr[i] == item){
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    sum = 0;
    for(i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    for(i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var new_arr = arr;
    for(i = 0; i < arr.length; i++){
      if(arr[i] == item){
        new_arr.splice(i, 1);
        i -= 1
      }
    }
    return new_arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
  },

  insert : function(arr, item, index) {
    var new_arr = [];
    for(i = 0; i < arr.length; i++){
      if(i == index){
        new_arr.push(item);
        new_arr.push(arr[i]);
      } else {
        new_arr.push(arr[i]);
      }
    }
    return new_arr
  },

  count : function(arr, item) {
    var count = 0
    for(i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        count += 1;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var items = {};
    var new_arr = [];
    for(i = 0; i < arr.length; i++){
      if(items.hasOwnProperty(arr[i].toString())){
        items[arr[i]] = (items[arr[i]] + 1);
      } else {
        items[arr[i]] = 1;
      }
    }
    for (var key in items) {
      if (items[key] > 1) {
        new_arr.push(parseInt(key));
      }
    }
    return new_arr;
  },

  square : function(arr) {
    var newArr = [];
    for(i = 0; i < arr.length; i ++) {
      newArr.push(Math.pow(arr[i], 2));
    }
    return newArr;
  },

  findAllOccurrences : function(arr, target) {
    newArr = [];
    for(i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        newArr.push(i);
      }
    }
  return newArr;
  }
};
