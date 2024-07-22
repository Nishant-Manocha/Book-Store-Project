const mongoose = require('mongoose')

require("dotenv").config()

const dbConnect = ()=>{
    mongoose.connect(process.env.Databse_Url)
    .then(() => console.log("Connection Sucess with Databse"))
    .catch( (error)=>{
        console.log("Issue in DB Connection");
            console.error(error.message);
            process.exit(1);
    });
}

module.exports =dbConnect;