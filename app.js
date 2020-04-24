var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const hbs = require("express-handlebars");
const hbshelpers = require("handlebars-helpers");
const multihelpers = hbshelpers();

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
multihelpers.starChecked = (num, avg) => {
  if (isNaN(num) && isNaN(avg)) {
    throw new TypeError("expected a number");
  }
  return Math.round(num * 10) / 10 == avg ? "checked" : "";
};
multihelpers.lorem = () => {
  let descr = "";
  for (let index = 0; index < Math.floor(Math.random() * 10) + 1; index++) {
    descr +=
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac diam quis neque " +
      "scelerisque vestibulum. In molestie eget enim eu elementum. Cras consectetur, turpis et";
  }
  return descr;
};
multihelpers.times = (n, block) => {
  var accum = "";
  for (var i = 0; i < n; ++i) accum += block.fn(i);
  return accum;
};
app.engine(
  "hbs",
  hbs({
    helpers: multihelpers,
    partialsDir: ["views/partials"],
    extname: ".hbs",
    layoutsDir: "views",
    defaultLayout: "layout",
  })
);
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
