const mongoose = require("mongoose");
const watchingSchema = new mongoose.Schema({
    view:{
        type:Number,
    },
    history:{
        type:String,
    },
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        },
    ],
    films:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"film",
        },
    ],
});
const watching = mongoose.model("watching",watchingSchema);
module.exports = watching;