const mongoose = require("mongoose");
const { Schema } = mongoose;

const resourceSchema = Schema({
  examFiled: String,
  examSubFiled: String,
  resources: [
    {
      type:Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const ExamResources = mongoose.model("ExamResources", resourceSchema);

exports.ExamResources = ExamResources;
