const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDB = async() =>{
    try {
        await mongoose.connect(URI);
        console.log("Connected DB");
    } catch (error) {
        console.error("Connection Failed!");
        process.exit(0);
    }
}

module.exports = connectDB;