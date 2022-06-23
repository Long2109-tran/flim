const mongoose = require("mongoose");
const seriesMovieSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    espisode:{
        type:String,
    },
    uploadfile:{
        type:String,
    }
});
const seriesMovie = mongoose.model("seriesMovie",seriesMovieSchema);
module.exports = seriesMovie;