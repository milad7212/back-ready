const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema =new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  number: Number,
  edit: String,
});

const Book = mongoose.model("Book", bookSchema);

exports.Book = Book;
