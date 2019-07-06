const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//initialize body parser
app.use(bodyParser.json());
Genre = require('./models/genres.js');
Movie = require('./models/movie.js');
MovieId = require('./models/movie.js');

//connecting to mongoose

mongoose.connect('mongodb://localhost/moviestore', { useNewUrlParser: true } );
let db = mongoose.connection


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');    
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req,res,next)=>{
    res.send('Hello World!');
});

//genres route
app.get('/api/genres', (req,res, next)=>{
    Genre.getGenres(function(err,genres){
      if(err){
          throw err;
      }  
        res.json(genres);
    });
});


//movies route
app.get('/api/movies', (req,res, next)=>{
    Movie.getMovies(function(err,movies){
        if(err){
            throw err;
        }
        res.json(movies)
    })
})

//movie route
app.get('/api/movies/:_id', (req,res)=>{
    Movie.getMovie(req.params._id,(err,movie)=>{
        if(err){
            throw err;
        }
        res.json(movie)
    })
})
//add movie route
app.post('/api/movies', (req,res)=>{
    const movie = {
        title: req.body.title,
        genre: req.body.genre,
        description: req.body.description,
        rating: req.body.rating
    }
    Movie.addMovie(movie,(err,movie)=>{
        if(err){
            throw err;
        }
        res.json(movie);
    });
    console.log(movie)
});

//update movie
app.put('/api/movies/:_id', (req,res)=>{
    const id = req.params._id;
    const movie = req.body;
    Movie.updateMovie(id,movie,{},(err,movie)=>{
        if(err){
            throw err;
        }
        res.json(movie);
    });
    console.log(movie)
});
app.listen(5000, ()=>{
    console.log('Listening on port 5000...');
}) 

//remove a movie
app.delete('/api/movies/:_id', (req,res)=>{
    const id = req.params._id;
    Movie.removeMovie(id,(err,movie)=>{
        if(err){
            throw err;
        }
        res.json(movie);
    });
 
});