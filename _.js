
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
  }
};



// Do not write or modify code below this line.
module.exports = _;
