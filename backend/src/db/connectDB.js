const mongoose = require('mongoose');

const { DB_NAME } = require("../../constants.js");
 
const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MONGODB Connected with DB host : ${connectionInstance.connection.host}`); 
    } catch (err) {
        console.log("MONGODB Connection Failed: ", err);
        process.exit(1);
    }
}

module.exports = connectDB;