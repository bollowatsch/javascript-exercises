const removeFromArray = function (arr, ...args) {
  return arr.filter(arrItem => !args.includes(arrItem));
};

// Do not edit below this line
module.exports = removeFromArray;
