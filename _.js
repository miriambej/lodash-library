
const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if(end === undefined) {
      end = start;
      start = 0;
    }

    if(start > end) {
      let temp = end;
      end = start;
      start = temp;
    }

    if (number < start) {
       return false;
    }else if (number >= end) {
       return false;
    }else {
       return true;
    }
  },
  words(string) {
    const words = string.split(" ");
    return words
  },
  pad(string, length) {
    if (length <= string.length) {return string};
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    if(object.hasOwnProperty(key)) {
      return true;
    }else {
      return false;
    }
  },
  //Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
  invert(object) {
    let invertedObject = {};
    for(let key in object) {
      let originalValue = object[key]; //1
      invertedObject = {originalValue : key}
    }
    return invertedObject;
  },
  //This method returns the key of the first element predicate returns truthy.
  findKey(object, predicate) {
    for(let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue) {
        return key;
      };
    };
    return undefined;
  },
  //Creates a slice of array with n elements dropped from the beginning.
  drop(array, n) {
    if (!n) {
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  },
  //Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
  dropWhile(array, predicate) {
    let x = (element, index) => !predicate(element, index, array);
    let dropNumber = array.findIndex(x);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  }
  //Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

};



// Do not write or modify code below this line.
module.exports = _;
