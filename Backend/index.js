const express = require('express');
const app = express();
const path = require('path');

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(3000,()=>{
    console.log("Server is running")
})