import React, {Component} from 'react';
import axios from 'axios';

export class AddMovie extends Component{
    state = {
        title: '',
        genre: '',
        description: '',
        rating: ''
    };
   
 addMovie = e =>{
     e.preventDefault();
     
  
     
     axios.post(`http://localhost:5000/api/movies`, {
         title: e.target.elements.titleName.value,
         genre: e.target.elements.genreName.value,
         description: e.target.elements.desc.value,
         rating: e.target.elements.ratingName.value,
     }).then(res =>{ console.log(res);
     console.log(res.data)
 })
      window.location.reload(); 
 };

handleChange = {
    handleTitle: (e) =>{
        this.setState({
            title: e.target.value
        })
    },
    handleGenre: (e) =>{
        this.setState({
            genre: e.target.value
        })
    },
     handleDesc: (e) =>{
        this.setState({
            description: e.target.value
        })
    },
     handleRating: (e) =>{
        this.setState({
            rating: e.target.value
        })
    }
}

                                                                 
 
    render(){
        return(
        <div className = 'container'>
            <form onSubmit={this.addMovie}>
            <input type = 'text' name = 'titleName' placeholder = 'enter movie title...' onChange={this.handleChange.handleTitle} />
            <input type='text'  name = 'genreName' placeholder = 'enter movie genre...' onChange={this.handleChange.handleGenre} />
            <input type='text'  name = 'desc' placeholder = 'enter movie description...' onChange={this.handleChange.handleDesc} />
            <input type='text'  name = 'ratingName' placeholder = 'enter movie rating...' onChange={this.handleChange.handleRating}/>
            <button type="submit">Add Movie</button>
            </form>
            </div>
        )
    }}
