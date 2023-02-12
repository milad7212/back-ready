const express = require("express");
const router = express.Router();
const { Test } = require("../models/tests");
const { QuestionSource } = require("../models/questionSource");

router.get("/test/all", async (req, res) => {
  const tests = await Test.find();
  res.send(tests);
});

router.get("/test/order", async (req, res) => {
  try {
    // parse query parameters for ordering

    let sortParams = {};
    let filterParams={}
    
    //order params 

    if (+req.query.year) sortParams.year = req.query.year;
    if (+req.query.month) sortParams.month = req.query.month;
    if (+req.query.number) sortParams.book = req.query.number;
    if (+req.query.book) sortParams.book = req.query.book;
    
    // filter params
    if (req.query.filter_field) filterParams.field = req.query.filter_field;
    if (req.query.filter_subField) filterParams.subField = req.query.filter_subField;
    if (req.query.filter_month) filterParams.month = req.query.filter_month;
    if (req.query.filter_year) filterParams.year = req.query.filter_year;
    if (req.query.filter_book) filterParams.book = req.query.filter_book;

 

    const data = await Test.find(filterParams).sort(sortParams).collation({locale: "en_US", numericOrdering: true});
    res.json(data);
  } catch (err) {
    console.log('err :>> ', err);
    res.status(500).json({ error: err });
  }
});


// router.get("/milad",async(req,res)=>{
//   const result = await Test.collection.find({}).project({year:{$toString:'$year'}})

//   res.send('hi milad')
// })

module.exports = router;
