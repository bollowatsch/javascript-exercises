const reverseString = function (original) {
  let reversed = "";
  for (let i = original.length - 1; i >= 0; i--) {
    reversed = reversed.concat(original[i]);
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
