const express = require("express");
require("../src/db/conn");
const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("run on websites");
})
//create a new students
app.post("/student",(req,res)=>{
    res.send("run on websites student");
})
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})