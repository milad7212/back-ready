const express = require("express");
const router = express.Router();
const { Book } = require("../models/book");

router.get("/", async (req, res) => {
  const booksList = await Book.find();
  res.send(booksList);
});

router.get('/:id',async(req,res)=>{
  const book =await Book.find({number:req.params.id})
  if(book){

    res.send(book[0])
  }else{
    res.send({})
  }
})

module.exports=router;