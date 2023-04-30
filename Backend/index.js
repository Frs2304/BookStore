const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
require('./Connections/Connection')


app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log("Server is running")
})