const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

// Collection definition

const FormData = new mongoose.model('FormData',FormSchema);

module.exports = FormData;