import React from "react";
import './searchBox.css';


const Search = ({searchField ,searchChange}) => {
    return(
            <input 
            type="search"
            placeholder="cat name"
            onChange={searchChange}
            />
    );
}

export default Search;