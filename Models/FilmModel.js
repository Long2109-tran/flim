const mongoose = require("mongoose");
const filmSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        require:true,
    },
    director:{
        type:String,
        require:true,
    },
    nations:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"nation",
        },
    ],
    actors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"actor",
        },
    ],
    seriesMovie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"seriesMovie",
    },
    singleMovie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"singleMovie",
    },

});
const film = mongoose.model("flim",filmSchema);
module.exports = film;