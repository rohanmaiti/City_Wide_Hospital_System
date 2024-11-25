const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:String,
    age:String,
    gender:String,
    blood_group:String,
    email:{
        type:String,
        unique:true
    },
    number:String,
    password:String,
    type:{
        type:String,
        default:"user"
    }
})

const User = mongoose.model("users",userSchema);
module.exports = User;