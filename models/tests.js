const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
    number: String,
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    correctAnswer: String,
    paragraph: String,
    pageNumber:String,
    book: String,
    field: String,
    subField: String,
    image: String,
    year: String,
    month: String,
    explanation: String,
  });
  const Test = mongoose.model("testSchema", testSchema);


  exports.Test=Test
  
  
  