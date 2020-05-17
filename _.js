
const _ = {
  //Clamps number within the inclusive lower and upper bounds.
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  //Checks if number is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.
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
  //Splits string into an array of its words.
  words(string) {
    const words = string.split(" ");
    return words
  },
  //Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
  pad(string, length) {
    if (length <= string.length) {return string};
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  //checks to see if the provided object contains a value at the specified key,  return true if the object contains a value at the key and will return false if not.
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
  },
  //Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
  chunk(array, size=1) {
    let arrayChunks = [];
    for(let i=0; i < array.length; i+=size) {
      let number = i+size;
      let arrayChunk = array.slice(i,i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};



module.exports = _;
