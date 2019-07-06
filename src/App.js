import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Search from './Search';
import {AddMovie} from './AddMovie';
import {DeleteMovie} from './DeleteMovie';
import {EditMovie} from './EditMovie';
import {FilteredFilm} from './filteredMovies';


class App extends Component{
    state = {
        movies:[],
        searched: false
    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/api/movies')
        .then(res => {console.log(res)
           this.setState({
               movies: res.data
           })             
        })
    }


     
    getMovie = (e) =>{
   
 const _id = e.target.elements.search.value;
    
  axios.get(`http://localhost:5000/api/movies/${_id}`).then((res) =>{
      console.log(res);
     this.setState({
          movies: res.data
      })   
  })
  .catch(err =>{
      console.log(err)
  })
  return {FilteredFilm}    
}

        deleteMovie = (e) =>{
    
 const _id = e.target.elements.id.value;
    
  axios.delete(`http://localhost:5000/api/movies/${_id}`).then((res) =>{
      console.log(`deleted one film: ${res.data}`);
  }).catch(err =>{
      console.log(err)
  })  
// window.location.reload();            
}

 editMovie = (e) =>{
    
     const _id = e.target.elements.eid.value;
     axios.put(`http://localhost:5000/api/movies/${_id}`, {
         title: e.target.elements.editTitle.value,
         genre: e.target.elements.editGenre.value,
         description: e.target.editDescription.value,
         rating: e.target.elements.editRating.value
     }).then((res) =>{
      console.log(`updated one film: ${res.data}`);
  }).catch(err =>{
      console.log(err)
  })
  window.location.reload();     
 } 
 
    render(){
        
const movieList =  this.state.movies.map(movie =>{
          return(
           <div className = 'movieCard' key = {movie._id}>
             <h2 className = 'movieTitle'>{movie.title}</h2>
             <h2 className = 'movieGenre'>{movie.genre}</h2>
             <h2 className = 'moviedesc'>{movie.description}</h2>
            <h2 className = 'movieRating'>{movie.rating}</h2>
            
            </div>   
          )    
        })


//const filteredMovie = (
//       <div className = 'movieCard' key = {this.state.movies._id}>
//             <h2 className = 'movieTitle'>{this.state.movies.title}</h2>
//             <h2 className = 'movieGenre'>{this.state.movies.genre}</h2>
//             <h2 className = 'moviedesc'>{this.state.movies.description}</h2>
//            <h2 className = 'movieRating'>{this.state.movies.rating}</h2>
//            
//            </div> 
//)
            
         
        return(
        <div className = 'parentContainer'>
            <h1 className = 'pageTitle'>The Ultimate Movie Store</h1>
            <Search findMovie = {this.getMovie}/>
            <AddMovie />
            <EditMovie editFilm = {this.editMovie}/>
            <DeleteMovie removeMovie = {this.deleteMovie}/>
         
            {movieList}
            </div>
            
        
              
        
        )
    }
}

export default App;