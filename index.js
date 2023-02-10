const mongoose = require("mongoose");
const express = require("express");
const app = express();
var cors = require('cors');
const {QuestionSource} = require('./models/questionSource')
const { Test} = require("./routes/tests");

// routes
const courses = require("./routes/courses");
const home = require("./routes/home");
const test = require("./routes/tests");
const book = require("./routes/book");
const resource = require("./routes/resource");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use("/api/courses", courses);
app.use("/", home);
app.use("/tests", test);
app.use("/book", book);
app.use("/resource", resource);

main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/test-milad");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`listening on port ${port}...`));
