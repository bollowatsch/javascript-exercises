const fibonacci = function (num) {
  num = parseInt(num);
  if (num <= 0) return "OOPS";
  let fib = [1, 1], i = 1;
  while (i <= num - 1) {
    fib.push(fib[i - 1] + fib[i]);
    i++;
  }
  return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;