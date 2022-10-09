//uppercase charcodes range: A=65 --> Z=90
//lowercase charcode range: a=97 --> z=122
const LOWERCASEALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];
const UPPERCASEALPHABET = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const caesar = function (plainText, shift) {
  let encrypted = "";

  for (char of plainText) {
    if (UPPERCASEALPHABET.includes(char)) encrypted = encrypted.concat(UPPERCASEALPHABET[getNewIndex(char, shift)]);
    else if (LOWERCASEALPHABET.includes(char)) encrypted = encrypted.concat(LOWERCASEALPHABET[getNewIndex(char, shift)]);
    else encrypted = encrypted.concat(char);
  };
  return encrypted;
}

function getNewIndex(char, shift) {
  shift = shift % LOWERCASEALPHABET.length;
  if (shift < 0) shift += 26;
  return (LOWERCASEALPHABET.indexOf(char.toLowerCase()) + shift) % LOWERCASEALPHABET.length;
}
// Do not edit below this line
module.exports = caesar;
