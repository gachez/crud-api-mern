const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title:{
        type: String
    },
    genre:{
        type: String
    },
    description:{
        type: String
    },
    rating: Number  
}
                                   );

let Movie = module.exports = mongoose.model('Movie', movieSchema);

//Get movies
module.exports.getMovies = function(callback, limit){
    Movie.find(callback).limit(limit);
}

//Get genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}

//Get movie
module.exports.getMovie = function(id,callback){
    Movie.findById(id, callback);
}

//Add movie
module.exports.addMovie = function(movie, callback){
    Movie.create(movie,callback);
}

//update movie
module.exports.updateMovie = function(id, movie,options, callback ){
    let query = {_id : id};
    let update = {
        title: movie.title,
        genre: movie.genre,
        description: movie.description,
        rating: movie.rating
    }
    Movie.findOneAndUpdate(query,update,options,callback);
}

//delete a movie
module.exports.removeMovie = function(id,callback){
    let query = {_id: id};
    Movie.remove(query, callback);
}