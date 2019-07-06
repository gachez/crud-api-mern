import React from 'react';

export const EditMovie = (props) =>{
    return(
        <form onSubmit = {props.editFilm}>
          <input type = 'text' name = 'eid' placeholder = 'Enter movie id...'/>
          <input type = 'text' name = 'editTitle' placeholder = 'Enter movie title...'/>
          <input type = 'text' name = 'editGenre' placeholder = 'Enter movie genre...'/>
          <input type = 'text' name = 'editDescription' placeholder = 'Enter movie description...'/>
          <input type = 'text' name = 'editRating' placeholder = 'Enter movie rating...'/>
          <input type = 'submit' value = 'update'/>
        </form>
    )
}