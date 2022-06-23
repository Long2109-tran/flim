const mongoose = require("mongoose");
const ratingSchema = new mongoose.Schema({
    rating:{
        type:Number,
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
const rating = mongoose.model("rating",ratingSchema);
module.exports = rating;