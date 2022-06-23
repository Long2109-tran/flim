const mongoose = require("mongoose");
const typeMovieSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    }
});
const typeMovie = mongoose.model("typeMovie",typeMovieSchema);
module.exports = typeMovie;