const express = require('express');
const router = express.Router();
const bookmodel = require("../Models/bookModels");

router.post('/add', async (req,res)=>{
        try {
            const data = req.body;
            const newBook = new bookModels(data);
            await newBook.save().then((res)=>{
                res.status(200).json({ message: "Book Added Successfully"});
            })
        } catch {
            console.log(error);
        }
});

module.exports = router;