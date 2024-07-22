const express = require("express")
const app = express()
const dbConnect = require('./config/dataBaseConnection');
const router = require("./routes/data");
const cors = require('cors');

app.use(express.json())
require("dotenv").config();
app.use(cors())



app.use(router)

dbConnect();





app.get("/",(req,res)=>{
    res.send("My name is nishant");
})

Port = process.env.Port || 5000;
app.listen(Port,()=>console.log("server has started"))