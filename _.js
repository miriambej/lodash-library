
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
  invert(object) {
    //{ 'a': 1, 'b': 2, 'c': 1 }
    let invertedObject = {};
    for(let key in object) {
      let originalValue = object[key]; //1
      invertedObject = {originalValue : key}
    }
    return invertedObject;
  },
  drop(array, n) {
    if (!n) {
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  }

};



// Do not write or modify code below this line.
module.exports = _;
