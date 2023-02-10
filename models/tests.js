const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
    number: Number,
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    correctAnswer: Number,
    paragraph: String,
    pageNumber: Number,
    book: String,
    field: String,
    subField: String,
    image: String,
    year: Number,
    month: Number,
    explanation: String,
  });
  const Test = mongoose.model("testSchema", testSchema);


  exports.Test=Test
  
  
  