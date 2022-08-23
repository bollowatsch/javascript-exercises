const repeatString = function (str, num) {
  try {
    return str.repeat(num);
  } catch (error) {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
