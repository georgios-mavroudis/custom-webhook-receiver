
const { default: mongoose } = require('mongoose');
const uri = process.env.MONGO_URI
console.log("URI", uri)
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to mongo successfully")
    } catch (e) {
        console.log("Connection failed " + error.message);
    }
}

module.exports = connectDB
