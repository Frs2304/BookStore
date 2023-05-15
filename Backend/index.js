const express = require('express');
const app = express();
const port = 3000;
const bookRoute = require("./Routes/bookRoutes");
require('./Connections/Connection')

app.use("/api/v1", bookRoute);
app.listen(port,()=>{
    console.log("Server is running")
})