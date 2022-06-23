const mongoose = require("mongoose");
const contentSchema = new mongoose.Schema({
    comment:{
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
const content = mongoose.model("content",contentSchema);
module.exports = content;