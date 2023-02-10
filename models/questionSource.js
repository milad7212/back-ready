const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSourceSchema = new Schema({
  source: String,
  count: { type: Number, default: 0 },
});

const QuestionSource = mongoose.model("QuestionSource", questionSourceSchema);

exports.QuestionSource = QuestionSource;
