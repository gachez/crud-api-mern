import React from 'react';

export const FilteredFilm = (props) =>{
    return(
        <div className = 'movieCard' key = {props.state.movies._id}>
             <h2 className = 'movieTitle'>{props.state.movies.title}</h2>
             <h2 className = 'movieGenre'>{props.state.movies.genre}</h2>
             <h2 className = 'moviedesc'>{props.state.movies.description}</h2>
            <h2 className = 'movieRating'>{props.state.movies.rating}</h2>
            
            </div> 
    )
}