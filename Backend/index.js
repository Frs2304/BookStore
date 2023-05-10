const express = require('express');
const app = express();
const port = 3000;
const bookRoute = require("./Routes/Routes");
require('./Connections/Connection')

app.get("/", (req, res)=> {
    res.send("Hello");
})

app.listen(port,()=>{
    console.log("Server is running")
})