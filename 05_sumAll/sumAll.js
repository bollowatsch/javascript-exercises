const sumAll = function (a, b) {
  if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let sum = 0;

    for (let i = min; i <= max; i++) sum += i;
    return sum;
  }
  else return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
