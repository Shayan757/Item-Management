const mongoose = require('mongoose');
const mongooseUrl = "mongodb://localhost:27017/Inventory-Item"

const ConnectToMongo = async()=>{

   await mongoose.connect (mongooseUrl)
        console.log("Connected to Mongo Successfully");
}


module.exports = ConnectToMongo