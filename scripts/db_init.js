var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "local_bookshelf",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  const book =
    "CREATE TABLE book (" +
    "book_id int(20) NOT NULL," +
    "title varchar(255) NOT NULL," +
    "image_url varchar(512)," +
    "isbn int(20)," +
    "publication_year int(4)," +
    "publication_month int(2)," +
    "publication_day int(2)," +
    "average_rating varchar(5)," +
    "link varchar(512)," +
    "ratings_count varchar(10)," +
    "description text," +
    "PRIMARY KEY (book_id));";
  con.query(book, function (err, result) {
    if (err) throw err;
    console.log("Table 'book' created");
  });
  const author =
    "CREATE TABLE author (" +
    "author_id int(20) NOT NULL," +
    "name varchar(255) NOT NULL," +
    "link varchar(512)," +
    "PRIMARY KEY (author_id));";
  con.query(author, function (err, result) {
    if (err) throw err;
    console.log("Table 'author' created");
  });
});
