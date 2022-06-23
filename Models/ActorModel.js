const mongoose = require("mongoose");
const actorSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    img:{
        type:Image,
    },
    age:{
        type:Number,
        require:true,
    },
    sex:{
        type:Boolean,
        require:true,
    },
    films:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"film",
        },
    ],
});
const actor = mongoose.model("actor",actorChema);
module.exports = actor;