import React from 'react';


export const DeleteMovie = (props) =>{
   return(
    <form onSubmit = {props.removeMovie}>
     <input type = 'text' name= 'id' />
     <input type='submit' value = 'Delete Movie'/>
    </form>
   )
}