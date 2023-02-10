const express = require("express");

const router = express.Router();

const {Test}=require('../models/tests')
const {QuestionSource} =require('../models/questionSource')






router.get("/build",async(req,res)=>{

  const updateQuestionSource= async()=>{
    const sources=await Test.distinct('book')
  for(let i=0; i< sources.length;i++){
    const count =await Test.countDocuments({book:sources[i]});

    await QuestionSource.findOneAndUpdate({source:sources[i]},{$set:{count}},{upsert:true})
  }
    res.send('ok')
  }
  
  updateQuestionSource()


})

router.get("/", async(req, res) => {
    const test = await Test.find();
  res.send(test);
});

router.get("/:book", async(req, res) => {
    const test=await Test.find({book:req.params.book})
    res.send(test)
  });

module.exports = router;

                   