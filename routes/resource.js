const express = require("express");
const router = express.Router();
const { ExamResources } = require("../models/examResources");
const { QuestionSource } = require("../models/questionSource");
router.get("/", async (req, res) => {
  const resources = await ExamResources.find().populate("resources", "-_id");
  res.send(resources);
});

router.post("/", async (req, res) => {
  
  const resources = await ExamResources.find({
    examFiled: req.body.examFiled,
    examSubFiled: req.body.examSubFiled,
  }).populate('resources');
  res.send(resources);
});

router.get("/count", async (req, res) => {
  
  const resources = await QuestionSource.find().sort({source:1}).select({count:1,source:1,_id:0})
  res.send(resources);
});

module.exports = router;
