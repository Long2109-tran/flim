const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    nameUser :{
        type:String,
        default:"abc",
        require:true
    },
    email:{
        type:String,
        default:"@gmail.com", 
        require:true,
    },
    sex:{
        type:Boolean,
        require:true,
    },
    // birthday:{
    //     type:Date,
    //     default:Date.now,
    // },
    // typeUser:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"typeUser",
    // }
});
const user = mongoose.model("user",userSchema);
module.exports = user;