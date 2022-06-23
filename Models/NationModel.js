const mongoose = require("mongoose");

const nationSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    films:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"flim",
        },
    ],
});
const nation = mongoose.model("nation",nationSchema);
module.exports = nation;