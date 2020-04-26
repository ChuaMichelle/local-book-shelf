var glob = require("glob");
const goodreadsNode = require("goodreads-api-node");

const myCredentials = {
  key: "kd5SbVhM7EYzGXoAc62dLQ",
  secret: "75iHdl07HtutzRpBN0DSSyK3bbC3zVg4FA0IyVm8uo",
};

const goodreads = goodreadsNode(myCredentials);

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

function formatBook(book) {
  return new Promise(async (resolve, reject) => {
    let newBook = {
      book_id: book.id,
      title: book.title,
      isbn: book.isbn13,
      image_url: book.image_url,
      publication_year: book.publication_year,
      publication_month: book.publication_month,
      publication_day: book.publication_day,
      description: book.description,
      average_rating: book.average_rating,
      ratings_count: book.ratings_count,
      link: book.link,
    };
  });
}

let books = [];
function listFunctions() {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("starting listFunctions");
      var getDirectories = function (src, callback) {
        glob("**/*", { cwd: src }, callback);
      };
      getDirectories(
        "C:/Users/fritz/Documents/Books/books/Src/lib",
        async function (err, res) {
          if (err) {
            console.log("Error", err);
            reject(err);
          } else {
            let goodreadsBooks = [];
            console.log('res.length :>> ', res.length);
            console.log('res.[0] :>> ', res[0]);
            /*
            await asyncForEach(res, async (bookTitle) => {
              bookTitle = bookTitle.substring(0, bookTitle.lastIndexOf("."));
              let bookRes = await goodreads.searchBooks({
                q: bookTitle,
                field: "all",
              });
              if (bookRes.search["total-results"] == 1) {
                console.log(
                  `Title: ${bookTitle} | ID: ${bookRes.search.results.work.best_book.id._}`
                );
                let getBook = await goodreads.showBook(
                  bookRes.search.results.work.best_book.id._
                );
                goodreadsBooks.push({
                  book_id: getBook.book.id,
                  title: getBook.book.title,
                  isbn: getBook.book.isbn13,
                  image_url: getBook.book.image_url,
                  publication_year: getBook.book.publication_year,
                  publication_month: getBook.book.publication_month,
                  publication_day: getBook.book.publication_day,
                  description: getBook.book.description,
                  average_rating: getBook.book.average_rating,
                  ratings_count: getBook.book.ratings_count,
                  link: getBook.book.link,
                });
              } else {
                goodreadsBooks.push({
                  book_id: Math.random().toString().slice(2, 10),
                  title: bookTitle.substring(
                    bookTitle.length,
                    bookTitle.indexOf("-") + 2
                  ),
                  authors: {
                    author: {
                      name: bookTitle.substring(0, bookTitle.indexOf("-")),
                      link: "google.com",
                    },
                  },
                  image_url:
                    "https://dhmckee.com/wp-content/uploads/2018/11/defbookcover-min.jpg",
                  link: `https://www.google.com/search?q=${bookTitle.substring(
                    bookTitle.length,
                    bookTitle.indexOf("-") + 2
                  )}`,
                });
              }
            });
            */
            /*
            console.log(
              "goodreadsBooks :",
              JSON.stringify(goodreadsBooks, null, 2)
            );
            */
            console.log("Books : ", goodreadsBooks.length);
            resolve(goodreadsBooks);
          }
        }
      );
    } catch (err) {
      console.log("Catch err : ", err);
    }
  });
}

listFunctions();
