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

let books = [];
function listFunctions() {
  return new Promise(async (resolve, reject) => {
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
          await asyncForEach(res.slice(0, 1), async (bookTitle) => {
            bookTitle = bookTitle.substring(0, bookTitle.lastIndexOf("."));
            let bookRes = await goodreads.searchBooks({
              q: bookTitle,
              field: "all",
            });
            if (bookRes.search["total-results"] == 1) {
              /*
              console.log(
                `Title: ${bookTitle} | ID: ${bookRes.search.results.work.best_book.id._}`
              );*/
              let getBook = await goodreads.showBook(
                bookRes.search.results.work.best_book.id._
              );
              //console.log("bookInfo :", Object.keys(getBook.book));
              //console.log("getBook.book :", getBook.book);
              //goodreadsBooks.push(bookRes.search.results.work);
              goodreadsBooks.push(getBook.book);
            } else {
              /*
              goodreadsBooks.push({
                //best_book: {
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
                small_image_url:
                  "https://dhmckee.com/wp-content/uploads/2018/11/defbookcover-min.jpg",
                // },
              });
              */
            }
          });
          console.log(
            "goodreadsBooks :",
            JSON.stringify(goodreadsBooks, null, 2)
          );
          resolve(goodreadsBooks);
        }
      }
    );
  });
}

listFunctions();
