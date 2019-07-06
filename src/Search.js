import React from 'react';

const Search = (props) =>{
    
        return(
        <div>
            <form onSubmit = {props.findMovie}>
            <input type = "text" name = "search" className = "search" /><br />
            <input type="submit" value="Search" className = "submitBtn" />
            </form>
            </div>
        )
    }


export default Search;