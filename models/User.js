const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    userName : {
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required : true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
});

module.exports = mongoose.model("User" , userModel);