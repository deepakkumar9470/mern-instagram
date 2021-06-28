const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    username : {type: String},
    caption : {type: String},
    image : {type : String},
    comments : []
},{timestamps : true});


module.exports = mongoose.model('Post', postSchema);