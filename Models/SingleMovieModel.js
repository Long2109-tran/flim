const mongoose = require("mongoose");
const singleMovieSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    uploadfile:{
        type:String,
    }
});
const singleMovie = mongoose.model("singleMovie",singleMovieSchema);
module.exports = singleMovie;