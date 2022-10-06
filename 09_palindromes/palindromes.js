const palindromes = function (str) {
  console.log(str);
  str = str.toLowerCase();
  str = str.replaceAll(/[^\w\s]/g, '');
  console.log(str);
  let j = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[j]) return false;
    j--;
  }
  return i === str.length - 1 && j === 0 ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
