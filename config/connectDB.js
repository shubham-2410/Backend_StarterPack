const mongoose = require('mongoose');

const connectDB = async(url)=>{
    return mongoose.connect(url , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
}

module.exports = connectDB;