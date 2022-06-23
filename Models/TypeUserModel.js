const mongoose = require ("mongoose");

const typeUserSchema = new mongoose.Schema({
    nameTypeUser :{
        type : String,
        require : true
    },
   
});
const typeUser = mongoose.model("typeUser",typeUserSchema);
module.exports = typeUser;