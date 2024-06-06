const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION_STRING).then((res)=>{
        console.log("Mongo db atlas connected with Style Guru Server");
    }
).catch(err=>{
    console.log("Connection Failed!!!");
    console.log(err);
})