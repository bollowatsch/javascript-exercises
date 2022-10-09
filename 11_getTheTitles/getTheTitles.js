const getTheTitles = function (booksArr) {
  let titles = new Array();
  for (book of booksArr) {
    titles.push(book.title);
    console.log(titles);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
