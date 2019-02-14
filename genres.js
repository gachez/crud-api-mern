const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
name:{
type:String,
required:true
},
createDate:{
type:Date,
default: Date.now
}
                         
                         
});

let Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}